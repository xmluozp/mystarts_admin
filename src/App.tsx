// import 'react-app-polyfill/ie9'; // For IE 9-11 support
import React from 'react';


import 'assets/scss/theme_main.scss'

import Hub from 'hub'

// /**
//  * Redux things
//  */


function App() {
  return <Hub/>
}


// import { API } from 'aws-amplify'
// import { Auth } from 'aws-amplify'
// import { CognitoHostedUIIdentityProvider } from "@aws-amplify/auth/lib/types";
// import { listTags } from "graphql/queries"
// import { createTag } from "graphql/mutations"
// import { GRAPHQL_AUTH_MODE } from "@aws-amplify/api-graphql/lib/types";


// function App() {

//   const checkUser = async () => {
//     try {
//       const user = await Auth.currentAuthenticatedUser()
//       console.log("user", user)     
//     } catch (error) {
//       console.error(error)
//     }
//   }

//   const getAuthData = async () => {
//     try {
//       const authData = await Auth.currentAuthenticatedUser()    
//       return authData
//     } catch (error) {
//       return undefined
//     }

//   }

//   const testRead = async () => {
//     try {
//       const authData = await getAuthData()
//       const authMode = authData ? GRAPHQL_AUTH_MODE.AMAZON_COGNITO_USER_POOLS : GRAPHQL_AUTH_MODE.AWS_IAM

//       const result: any = await API.graphql({
//         query: listTags,
//         variables: {},
//         authMode
//       })

//       console.log("list ok", result.data.listTags)
//     } catch (error) {
//       console.error(error)
//     }
//   }

//   const signOut = () => {
//     Auth.signOut()
//   }

//   const testCreate = async () => {

//     try {

//       const authData = await getAuthData()
//       const input = {
//         name: "testtag1",
//         sortNumber: 10,
//         pk: "Tag",
//         owners: [authData.signInUserSession.idToken.payload.sub,]
//       }

//       const authMode = authData ? GRAPHQL_AUTH_MODE.AMAZON_COGNITO_USER_POOLS : GRAPHQL_AUTH_MODE.AWS_IAM
//       const result: any = await API.graphql({ query: createTag, variables: { input }, authMode })


//       console.log("create ok", result.data.createTag)
//     } catch (error) {
//       console.error(error)
//     }
//   }


//   return (
//     <div className="App">
//       <header className="App-header">
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>

//         <button onClick={() => {
//           //@ts-ignore
//           Auth.federatedSignIn({ provider: CognitoHostedUIIdentityProvider.Google })
//         }}> signin wigh google</button>

//         <button onClick={checkUser}>check</button>


//         <button onClick={testRead}> test1 read</button>


//         <button onClick={testCreate}> test2 create</button>
//         {/* <AmplifySignOut /> */}

//         <button onClick={signOut}>signOut</button>
//       </header>
//     </div>
//   );
// }



export default App;
