import React from "react";
import { connect } from "react-redux";

export function Counter(props){
    return(<div>This count: {props.countfromReduxStore.count}</div>)
}

const MapStateToProps = function (storeState) {
    return{
        countfromReduxStore:storeState.data
    }
}

export default connect(MapStateToProps,null)(Counter);