//import react
import React, { useEffect } from "react"
import _ from 'lodash'


//import 3rd party

//import my components
import { routes } from "hub/_routes/routes"
import navs from './_routes/navs'

import CONST from "_const"
import { authFilterForRoutes, navsFilterForRoutes } from "./_routes/auth"

import View from './HubView'
import {getAuthData} from '_helper'
// import { title } from "process"


// *********** amplify ***********
import { API, Hub as AmplifyHub } from "aws-amplify"
import { GRAPHQL_AUTH_MODE } from "@aws-amplify/api-graphql/lib/types";
import { getUser, registerUser } from 'graphql.js'

// *********** redux ***********
import { connect } from "react-redux"
import { authActions as myActions } from '_redux_actions'

/** ==========================================================================
 * THIS PAGE: control center; organize pages.
 * display loading bar
 */


/**
 * pass auth list of this user in. return all routes this user allowed to open
 * */
const routes_withAuth = (user = {}) => authFilterForRoutes(user, routes)
const navs_withAuth = (user = {}) => navsFilterForRoutes(user, navs.items)


interface Props {
	// onTestLogin: (event: React.MouseEvent<HTMLButtonElement>) => void;
	onCacheIn?: Function
	onCacheOut?: Function
	userAuth?: any
}


const Hub: React.FC<Props> = ({ onCacheIn, onCacheOut, userAuth, ...props }) => {

	useEffect(() => {

		const cacheUser = async () => {
			try {
				// get user id (看有没有登录)
				const authData: any = await getAuthData()
				if (authData) cacheUserData(authData)

			} catch (error) {
				console.error("No user ", error)
				onCacheOut && onCacheOut()
			}
		}

		// cache user data to store
		const cacheUserData = async (signInData: any) => {
			try {

				// get userData from userAuth
				const getUserInput = {
					id: signInData.signInUserSession.idToken.payload.sub,
				}

				// get groups from cognito
				let groups = signInData.signInUserSession.idToken.payload["cognito:groups"]
				
				const result: any = await API.graphql({
					query: getUser, 
					variables: getUserInput, 
					authMode: GRAPHQL_AUTH_MODE.AMAZON_COGNITO_USER_POOLS})

				const { data } = result

				let userAuth;

				// TODO，过后要改成在lambda里面通过trigger自动添加

				if (!signInData.attributes) {

				}else if (data.getUser) {
					userAuth = data.getUser
				} else {
					// default: id, email
					const registerUserInput = {
						id: signInData.signInUserSession.idToken.payload.sub,
						email: signInData.attributes.email,
						familyName: signInData.attributes.family_name,
						givenName: signInData.attributes.given_name,
						pk: 'User' // partition key will be used for group the sorting
					}

					const result: any = await API.graphql({
						query: registerUser,
						variables: registerUserInput,
						authMode: GRAPHQL_AUTH_MODE.AMAZON_COGNITO_USER_POOLS
					})

					// const result: any = await API.graphql(graphqlOperation(registerUser, { ...registerUserInput }))
					userAuth = result.data.registerUser
				}

				// here is only control what should display. the real permission is set from schema
				let userAuthCache = null

				if (userAuth && !_.isEmpty(userAuth)) {

					let permissions: string[] = []

					for (let i = 0; i < (groups && groups.length) || 0; i++) {

						const groupName: string = groups[i]
						if(CONST.ROLES[groupName]) {
							permissions = [...permissions, ...CONST.ROLES[groupName]]
						}
					}

					userAuthCache = {
						...userAuth,
						auth: permissions,
						role: groups ? groups[0] : 'guest',
					}
				}

				onCacheIn && onCacheIn(userAuthCache)

			} catch (error) {
				console.error("No user data ", error)
				onCacheOut && onCacheOut()
			}
		}

		const onHubCapsule = (capsule: any) => {

			// console.log("hub listen", capsule.payload.event)

			// 用redux的action, 更新store?
			switch (capsule.payload.event) {
				case "signIn":
					// setstate(s => ({ ...s, user: user1 }))
					cacheUserData(capsule.payload.data)
					break
				case "signUp":
					break
				case "signOut":
					onCacheOut && onCacheOut()
					break
				default:
					return
			}
		}
		// cache user to store
		cacheUser()
		// update user cache when login/logout
		AmplifyHub.listen("auth", onHubCapsule)
		return () => {
			AmplifyHub.remove("auth", onHubCapsule)
		}
	}, [])


	return <View
			routes={routes_withAuth(userAuth)}
			userAuth={userAuth}
			navs={navs_withAuth(userAuth)}
			{...props}
		/>
}

// ************************************************ 
// ********************  redux ******************** 
// ************************************************ 
const componentShouldUpdate = (preProps: Object, nextProps: Object) => {
	return false
}


const myState = (state: any) => {
	return {
		userAuth: state.authData.userAuth,
	}
}

const actionCreators = {
	onCacheIn: myActions.cacheIn,
	onCacheOut: myActions.cacheOut,
}

export default connect(myState, actionCreators)(React.memo(Hub, componentShouldUpdate))