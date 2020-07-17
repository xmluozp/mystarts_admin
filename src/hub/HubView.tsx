import React, { Suspense } from "react"
import { HashRouter, Route, Switch, Redirect } from "react-router-dom"

import { AmplifySignOut } from '@aws-amplify/ui-react'

import { makeStyles } from "@material-ui/core/styles"
import Drawer from "@material-ui/core/Drawer"
import CssBaseline from "@material-ui/core/CssBaseline"
// import AppBar from "@material-ui/core/AppBar"
import Toolbar from "@material-ui/core/Toolbar"
import List from "@material-ui/core/List"
import ListItem from "@material-ui/core/ListItem"


import Typography from "@material-ui/core/Typography"
import Divider from "@material-ui/core/Divider"

import ListLink from 'components/ListLink'

// If no auth, will jump to login page with "nextUrl" element.
import ComLoading from 'components/Loading'
import TestPage from 'layouts/Votetopic'


const Login = React.lazy(() => import("layouts/Login"))


const drawerWidth = 240

/** ==========================================================================
 * THIS PAGE: view component
 */
const useStyles = (isLoggin: Boolean) => makeStyles((theme) => ({
	root: {
		display: "flex",
	},
	appBar: {
		width: isLoggin ? `calc(100% - ${drawerWidth}px)` : '100%',
		marginLeft: drawerWidth,
	},
	drawer: {
		width: drawerWidth,
		flexShrink: 0,
	},
	drawerPaper: {
		width: drawerWidth,
	},
	// necessary for content to be below app bar
	toolbar: theme.mixins.toolbar,
	content: {
		flexGrow: 1,
		backgroundColor: theme.palette.background.default,
		padding: theme.spacing(1),
	},
}))


interface Props {
	routes?: Array<any>;
	navs?: Array<any>;
	userAuth?: any
}

const HubView: React.FC<Props> = ({ routes, userAuth, navs, ...props }) => {

	// otherwise the userAuth is "guest"
	const isLoggin = userAuth && userAuth.auth.length > 0

	const classes = useStyles(isLoggin)()

	return (<div className={classes.root}>


		<HashRouter>
			<ComLoading/>	
				
			<CssBaseline />
			{/* <AppBar position="fixed" className={classes.appBar}>
				<Toolbar>
					<Typography variant="h6" noWrap>
						MyStarts
					</Typography>
				</Toolbar>
			</AppBar> */}
			{isLoggin && <Drawer
				className={classes.drawer}
				variant="permanent"
				classes={{
					paper: classes.drawerPaper,
				}}
				anchor="left">
				<Toolbar>
					<Typography variant="h6" noWrap>
						MyStarts
					</Typography>
				</Toolbar>
				<Divider />
				{/* navigation bar */}
				{navs && <List>
					{
						navs.map((nav, idx) => {
							return nav.name ? <ListLink button primary={nav.name} key={nav.name} to={nav.url} Icon={nav.Icon} /> : <Divider key={`divider_${idx}`} />
						})
					}
				</List>}
				<Divider />
				<List>
					<ListItem>
						Welcome, <br />
						{userAuth && userAuth.givenName} {userAuth && userAuth.familyName}
					</ListItem>

				</List>
				<List><AmplifySignOut /></List>
			</Drawer>
			}

			<main className={classes.content}>
				{/* <div className={classes.toolbar} style={{width: "50%"}} /> */}
				<Suspense fallback={loading()}>
					<Switch>
					<Route path="/test" render={(props) => (<TestPage {...props} pageName="hi" message="nothing"/>)}
					
					/>
					
						{/* pages */}
						{isLoggin && <Redirect from="/login" to="/dashboard" />}
						{routes && routes.map(
							(route: any, idx: number) =>
								route.component && (
									<Route
										key={idx}
										path={route.path}
										exact={route.exact}
										render={(props) => (
											route.block || !isLoggin ?
												<Login {...props} pageName={route.name} />
												:
												<route.component
													{...props}
													{...route.props}
													user={userAuth}
													pageName={route.name}
												/>
										)}
									/>
								)
						)}
						<Redirect from="/*" to="/page404" />
					</Switch>
				</Suspense>
			</main></HashRouter>
	</div>)
}


const loading = () => (
	<div className="animated fadeIn pt-3 text-center">
		<div className="sk-spinner sk-spinner-pulse">loading</div>
	</div>
)


export default HubView