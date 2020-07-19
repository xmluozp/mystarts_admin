import React from "react"
// import helper from '_helper'

// const Page404 = React.lazy(() => import("layouts/PageError"))

// const lz = (importpath: any) => {

//     return reactLazy(()=>importpath)

// }

const Login = React.lazy(() => import("layouts/Login"))
const Dashboard = React.lazy(() => import("layouts/Dashboard"))


const Votetopic = React.lazy(() => import("layouts/Votetopic"))
const VotetopicEdit = React.lazy(() => import("layouts/VotetopicEdit"))
const Voteitem = React.lazy(() => import("layouts/Voteitem"))
const VoteitemEdit = React.lazy(() => import("layouts/VoteitemEdit"))

const Tag = React.lazy(() => import("layouts/Tag"))
const TagEdit = React.lazy(() => import("layouts/TagEdit"))

const Page404 = React.lazy(() => import("layouts/PageError"))
const Test = React.lazy(() => import("layouts/Test"))



// const Test = helper.lazy(import("layouts/Test"), (m: any) => m.withTest.bind(null, "h"))
// const Login = helper.lazy(import("layouts/Login"))
// const Dashboard = helper.lazy(import("layouts/Dashboard"))
// const Page404 = helper.lazy(import("layouts/PageError"))


export const routes = [
    { path: "/", exact: true, name: "Home", component: Dashboard, },
    { path: "/login", exact: true, name: "Login", component: Login },
    { path: "/dashboard", exact: true, name: "Dashboard", component: Dashboard, auth: "dashboard" },

    { path: "/tag", exact: true, name: "Tags Management", component: Tag },
    { path: "/tag/:pageIndex", exact: true, name: "Tags Management", component: Tag },
    { path: "/tag/:pageIndex/edit/:id", exact: true, name: "Tags Management", component: TagEdit, props: { behavior: "edit" } },
    { path: "/tag/:pageIndex/create/", exact: true, name: "Tags Management", component: TagEdit, props: { behavior: "create" } },

    { path: "/votetopic", exact: true, name: "Vote Management", component: Votetopic },
    { path: "/votetopic/:pageIndex", exact: true, name: "Vote Management", component: Votetopic },
    { path: "/votetopic/:pageIndex/edit/:id", exact: true, name: "Vote Management", component: VotetopicEdit, props: { behavior: "edit" } },
    { path: "/votetopic/:pageIndex/create", exact: true, name: "Vote Management", component: VotetopicEdit, props: { behavior: "create" } },

    { path: "/voteitem/:votetopicID/", exact: true, name: "Vote Item Management", component: Voteitem },
    { path: "/voteitem/:votetopicID/:pageIndex", exact: true, name: "Vote Item Management", component: Voteitem },
    { path: "/voteitem/:votetopicID/:pageIndex/edit/:id", exact: true, name: "Vote Item Management", component: VoteitemEdit, props: { behavior: "edit" } },
    { path: "/voteitem/:votetopicID/:pageIndex/create", exact: true, name: "Vote Item Management", component: VoteitemEdit, props: { behavior: "create" } },

    { path: "/test", exact: true, name: "Test", component: Test },
    { path: "/page404", exact: true, name: "Page404", component: Page404 },

]
