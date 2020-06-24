import React, { Suspense } from "react"
import { HashRouter, Route, Switch, Redirect, Link } from "react-router-dom"

import {AmplifySignOut } from '@aws-amplify/ui-react'

import { makeStyles } from "@material-ui/core/styles"
import Drawer from "@material-ui/core/Drawer"
import CssBaseline from "@material-ui/core/CssBaseline"
import AppBar from "@material-ui/core/AppBar"
import Toolbar from "@material-ui/core/Toolbar"
import List from "@material-ui/core/List"
import Typography from "@material-ui/core/Typography"
import Divider from "@material-ui/core/Divider"

import ListLink from 'components/ListLink'
import navs from './_routes/navs'


// If no auth, will jump to login page with "nextUrl" element.
const Login = React.lazy(() => import("layouts/Login"))


const drawerWidth = 240

/** ==========================================================================
 * THIS PAGE: view component
 */
const useStyles = makeStyles((theme) => ({
	root: {
		display: "flex",
	},
	appBar: {
		width: `calc(100% - ${drawerWidth}px)`,
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
		padding: theme.spacing(3),
	},
}))


interface Props {
	routes?: Array<any>;
	user?: any
}

const HubView: React.FC<Props> = ({ routes, user, ...props }) => {
	const classes = useStyles()


	return (<div className={classes.root}>
		<HashRouter>
			<CssBaseline />
			<AppBar position="fixed" className={classes.appBar}>
				<Toolbar>
					<Typography variant="h6" noWrap>
						MyStarts
					</Typography>
				</Toolbar>
			</AppBar>
			<Drawer
				className={classes.drawer}
				variant="permanent"
				classes={{
					paper: classes.drawerPaper,
				}}
				anchor="left">
				<div className={classes.toolbar} />
				<Divider />
				<List>
					{
						navs && navs.items.map((nav, idx) => {
							return nav.name ? <ListLink button primary={nav.name} key={nav.name} to={nav.url} Icon={nav.Icon} /> : <Divider key={`divider_${idx}`} />
						})
					}					
					
				</List>
				<List><AmplifySignOut/></List>
			</Drawer>
			<main className={classes.content}>
				<div className={classes.toolbar} />
				<Suspense fallback={loading()}>
					<Switch>
						{routes && routes.map(
							(route: any, idx: number) =>
								route.component && (
									<Route
										key={idx}
										path={route.path}
										exact={route.exact}
										render={(props) => (
											route.block ?
												<Login {...props} pageName={route.name} />
												:
												<route.component
													{...props}
													user={user}
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