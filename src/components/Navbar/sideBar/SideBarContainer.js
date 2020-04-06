import React from "react";
import SideBar from "./SideBar";
import {connect} from "react-redux";


let mapStateToProps = (state) => {
    return {
        users: state.sidebarReducer.sideBar

    }
}
let mapDispatchToProps = (dispatch) => {

}

export default connect(mapStateToProps, mapDispatchToProps)(SideBar)