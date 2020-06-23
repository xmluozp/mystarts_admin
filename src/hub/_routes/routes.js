import React from "react"
import helper from '_helper'

// const Page404 = React.lazy(() => import("layouts/PageError"))

const Test = helper.lazy(import("layouts/Test"), m=>m.withTest.bind(null, "h"))

const Login = helper.lazy(import("layouts/Login"))
const Dashboard = helper.lazy(import("layouts/Dashboard"))
const Page404 = helper.lazy(import("layouts/PageError"))




export const routes = [
    { path: "/", exact: true, name: "Home" },
    { path: "/login", exact: true, name: "Login", component: Login},
    { path: "/dashboard", exact: true, name: "Dashboard", component: Dashboard, auth: "dashboard" },

    { path: "/test", exact: true, name: "Test", component: Test},

    { path: "/page404", exact: true, name: "Page404", component: Page404 },

]
