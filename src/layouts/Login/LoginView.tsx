/** ==========================================================================
 * THIS PAGE: view component: Login
 *  ========================================================================== */

import React from 'react';
// import { ComButton, ComInputs } from 'components'


// amplify
import { Authenticator, AmplifyTheme } from "aws-amplify-react"
// import { API, graphqlOperation, Auth, Hub as AmplifyHub } from "aws-amplify"
// import { withAuthenticator } from '@aws-amplify/ui-react'
const theme = {
	...AmplifyTheme,
	inputLabel: {
		lineHeight: '40px'
	},
	formSection: {
		...AmplifyTheme.formSection,
		width: '100%',
		maxWidth: '600px'
	},
	button: {
		...AmplifyTheme.button,
		// backgroundColor: "var(--amazon-pri)",
	},
	sectionBody: {
		...AmplifyTheme.sectionBody,
	},
	sectionHeader: {
		...AmplifyTheme.sectionHeader,
		backgroundColor: "var(--amplify-primary-tint)",
	},
	sectionFooterSecondaryContent : {
		paddingLeft: 10
	}
}

const signUpConfig = {
	signUpFields: [{
		label: "Family Name",
		key: "family_name",
		required: true,
	},{
		label: "Given Name",
		key: "given_name",
		required: true,
	}],
	hiddenDefaults: ['phone_number', 'email']
}

// // 样式 的注入
// import { makeStyles } from "@material-ui/core/styles"
// const styles = {
//     pageHeader: {
//         backgroundColor: "#445566"
//     }
// }
// const myStyles = makeStyles(styles)

interface Props {
    // handleOnSubmit: Function;
    // onTestLogin:  (event: React.MouseEvent<HTMLButtonElement>) => void;
    // message?: String
}

const View: React.FC<Props> = () => {

    return <Authenticator theme={theme} signUpConfig={signUpConfig}/>
}


export default View