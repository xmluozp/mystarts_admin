
import React from 'react';

import { connect } from "react-redux";
import { loadingActions } from "_redux_actions";

// import { Loading } from 'element-react';
import { useNProgress } from '@tanem/react-nprogress'

const Bar = ({ progress, animationDuration }: any) => (
    <div
        style={{
            background: '#29d',
            height: 2,
            left: 0,
            marginLeft: `${(-1 + progress) * 100}%`,
            position: 'fixed',
            top: 0,
            transition: `margin-left ${animationDuration}ms linear`,
            width: '100%',
            zIndex: 1201,
        }}
    >
        <div
            style={{
                boxShadow: '0 0 10px #29d, 0 0 5px #29d',
                display: 'block',
                height: '100%',
                opacity: 1,
                position: 'absolute',
                right: 0,
                transform: 'rotate(3deg) translate(0px, -4px)',
                width: 100,
            }}
        />
    </div>
)


interface Props {
    loadingBar?: any
}

const ComLoading: React.FC<Props> = ({ loadingBar }) => {

    const { animationDuration, isFinished, progress } = useNProgress({
        isAnimating: loadingBar === "loading"
    })


    // return loadingBar === "loading" ? <Loading fullscreen={true}/>: null

    return isFinished ? null: <Bar 
    animationDuration = {animationDuration}
    progress = {progress}/>
}

// reducer
function mapState(state: any) {
    return { loadingBar: state.loadingData.status };
}

const mapDispatchToProps = {
    clearLoading: loadingActions.clear
};

export default connect(mapState, mapDispatchToProps)(ComLoading);