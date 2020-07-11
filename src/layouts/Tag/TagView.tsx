/** ==========================================================================
 * THIS PAGE: view component: tag
    ==========================================================================*/

import React, {useState} from 'react';
import MT, { type_Tag } from '_dataModel'

interface Props {
    handleOnNextPage: Function;
    onTestLogin?: (event: React.MouseEvent<HTMLButtonElement>) => void;
    resultList: MT.resultList;
}


// ------------------------------------------- TODO: accept props from dominator, delete this comment
const View: React.FC<Props> = ({ handleOnNextPage, onTestLogin, resultList, ...props }) => {

    const {list, nextToken } =  resultList || {}
    console.log("list", list)

    return (<div>
        tags
        <br />
        {list && list.map((item, i) => {
            return <div key={i}>
                {item.name} <br/>
                {nextToken}
            </div>
        })}

       <button>prev</button> | <button>next</button>
    </div>)
}


export default View