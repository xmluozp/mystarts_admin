//import react
import React, { Suspense, useState } from "react"
import { HashRouter, Route, Switch, Redirect, Link } from "react-router-dom"

//import 3rd party

//import my components
import { routes } from "hub/_routes/routes.js"
import CONST from "_const"
import { authFilterForRoutes } from "./_routes/auth"

// If no auth, will jump to login page with "nextUrl" element.
const Login = React.lazy(() => import("layouts/Login"))



/** ==========================================================================
 * THIS PAGE: control center; organize pages.
 * display loading bar
 */


/**
 * pass auth list of this user in. return all routes this user allowed to open
 * */
const routes_withAuth = user => authFilterForRoutes(user, routes, Login)

const Hub = ({ ...props }) => {
	// TODO，之后这个role从props里面的user取
	const [state, setstate] = useState({ user: null })

	const user1 = {
		name: "zhaoping",
		email: "xmluozp@gmail.com",
		auth: [2, 3, 4],
		role: CONST.ROLES.ENTREPRENEUR,
	}

	const user2 = {
		name: "zhangsanfeng",
		email: "Zhang3Feng@gmail.com",
		auth: [1],
		role: CONST.ROLES.INVESTOR,
	}

// TODO: 移到HubView里面去
return (
		<HashRouter>
			{/* test buttons*/}
			<div>
				<button
					onClick={() => {
						setstate({ ...state, user: user1 })
					}}>
					{" "}
					登录创业者{" "}
				</button>
				<button
					onClick={() => {
						setstate({ ...state, user: user2 })
					}}>
					{" "}
					登录投资人{" "}
				</button>
				<button
					onClick={() => {
						setstate({ ...state, user: null })
					}}>
					{" "}
					登出{" "}
				</button>
			</div>

            

			{/* navigation */}
			<Suspense fallback={loading()}>
				<Link to="/dashboard"> Dashboard </Link> |
				<Link to="/login"> Login </Link>
			</Suspense>
			{/* content */}
			<Suspense fallback={loading()}>
				<Switch>
					{routes_withAuth(state.user).map(
						(route, idx) =>
							route.component && (
								<Route
									key={idx}
									path={route.path}
									exact={route.exact}
									name={route.name}
									render={(props) => (
                                        route.block? 
                                        <Login {...props} pageName={route.name}/>
                                         :
										<route.component
											{...props}
											user={state.user}
											pageName={route.name}
										/>
									)}
								/>
							)
					)}
					<Redirect from="/*" to="/page404" />
				</Switch>
			</Suspense>
		</HashRouter>
	)
}

// TODO: 做成component
const loading = () => (
	<div className="animated fadeIn pt-3 text-center">
		<div className="sk-spinner sk-spinner-pulse">loading</div>
	</div>
)



export default Hub
