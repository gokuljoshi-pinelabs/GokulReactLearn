import React from "react";
import { connect } from "react-redux";

function UserDetails(props){
    return (<span>
        <span>  First Name :{props.userfromReduxStore.user.fname} </span>
        <span>  Age : {props.userfromReduxStore.user.age} </span>
        
    </span>)
} 

const MapStateToProps = function (storeState) {
    return{
        userfromReduxStore:storeState.data
    }
}

export default connect(MapStateToProps,null)(UserDetails);