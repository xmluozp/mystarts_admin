import React, { useState } from "react"

// test2
import { connect } from "react-redux"

// test3: amplify add a tag
import { API, graphqlOperation } from "aws-amplify"
import {createTag} from 'graphql/mutations'

/** ==========================================================================
 * THIS PAGE: view component
 */
const TestView = ({ handleOnClick, ...props }) => {
	return <Test3 />
}


const Test3 = () => {

	// test3: amplify add a tag
	const handleAddTag = async () => {
		try {
			const input = {
				name: "test_category",
				isActive: true
			}

			const result = await API.graphql(
				graphqlOperation(createTag, { input: input })
			)
			console.log({ result })
			console.info(`Created : id ${result.data.createTag.id}`)

		} catch (error) {
			console.error("Error", error)
		}
	}

	const handleTestLambda = async () => {
		try {
			let options = {
				headers: {} // OPTIONAL
			  }

			const result = await API.get('mystartslambda', '/item', options)
	
			console.log("后端返回", result)	
		} catch (error) {
			
		}

	}

	return <button onClick={handleTestLambda}>测试添加tag</button>
}


// ==================================

/* 
    20200606 hoctest 测试内容：
    三层组件用HOC还是用component
    
    实验结论：
        1 如果用Component。内层用React.memo包起来就不会被渲染
*/

const Test1 = ({ handleOnClick, ...props }) => {
	const [state, setstate] = useState({
		hoctest: 0,
		hoctestIn: 0,
	})



	return (
		<div>
			<hr />
			测试页面 <hr />
			state计数器： {state.hoctest}
			<br />
			内部计数器： {state.hoctest}
			<hr />
			<button onClick={handleOnClick}>调用main组件方法</button>
			<hr />
			
			<button
				onClick={() => {
					setstate({ ...state, hoctest: state.hoctest + 1 })
				}}>
				本组件set state
			</button>
			<button
				onClick={() => {
					setstate({ ...state, hoctestIn: state.hoctestIn + 1 })
				}}>
				内组件变prop
			</button>
			<div>
				<hr />
				<ComHoc counter={state.hoctest} counterIn={state.hoctestIn} />
			</div>
		</div>
	)
}

const ComHoc = ({ ...props }) => {
	console.log("refresh ComHoc")
	return (
		<div>
			Hoc: counter- {props.counterIn}
			<ComInner counter={props.counterIn} />
		</div>
	)
}

function areEqual(prevProps, nextProps) {
	/*
    如果把 nextProps 传入 render 方法的返回结果与
    将 prevProps 传入 render 方法的返回结果一致则返回 true，
    否则返回 false

    !!! true才是不渲染。false就渲染
    */
	console.log("底层组件是否渲染？", prevProps.counter, nextProps.counter)

	return true
}

const withHoc = () => {}

/* 
    react memo 让它不被父组件的state变化影响，只在props变化的时候渲染
	areEqual可以自行判断是否一致
	
	const memoizedCallback  = useCallback(functionName, [a,b])
		另外一个useCallback的作用。放的是有return的funcion。
		只有a和b变的时候，才重新执行 memoizedCallback，否则直接从记忆里读取return的值

*/
const ComInner = React.memo(({ ...props }) => {
	console.log("refresh ComInner")
	return <div style={{ backgroundColor: "#99AABB" }}></div>
}, areEqual)





// ==================================

/* 
    20200606 hoctest 测试内容：
    REDUX 
*/

const Test2 = ({ myStatus, onTestLoading, onTestLoadingSuccess, ...props }) => {
	return (
		<div>
			<hr />
			{myStatus}
			<hr />
			<button onClick={onTestLoading}>dispatch1</button>
			<button onClick={onTestLoadingSuccess}>dispatch2</button>
		</div>
	)
}

const myState = (state) => {
	return {
		myStatus: state.loadingData.status,
	}
}

const actionCreators = {
	onTestLoading: () => {
		return (dispatch) => dispatch({ type: "LOADING" })
	},
	onTestLoadingSuccess: () => {
		return (dispatch) => dispatch({ type: "LOADING_SUCCESS" })
	},
}

const Test2_redux = connect(myState, actionCreators)(Test2)

export default TestView
