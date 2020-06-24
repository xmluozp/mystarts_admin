//import react
import React from "react"


//import 3rd party

//import my components
import { routes } from "hub/_routes/routes"
import CONST from "_const"
import { authFilterForRoutes } from "./_routes/auth"
import View from './HubView'
// import { title } from "process"
import {withAuthenticator } from '@aws-amplify/ui-react'


/** ==========================================================================
 * THIS PAGE: control center; organize pages.
 * display loading bar
 */


/**
 * pass auth list of this user in. return all routes this user allowed to open
 * */
const routes_withAuth = (user = {}) => authFilterForRoutes(user, routes)

const Hub = ({ ...props }) => {

	// TODO，之后这个role从props里面的user取
	const user1 = {
		name: "zhaoping",
		email: "xmluozp@gmail.com",
		auth: [2, 3, 4],
		role: CONST.ROLES.ENTREPRENEUR,
	}


	// TODO: 获取user，用redux的action, 推给store
	return <View
		routes={routes_withAuth(user1)}
		user={user1}
	/>
}



export default withAuthenticator(Hub)
