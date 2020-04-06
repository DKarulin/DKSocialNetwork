import React from "react";
import Header from "./Header";
import * as axios from "axios";
import {connect} from "react-redux";
import {getAuthUserData, logout} from "../../redux/auth-reducer";
import {authAPI} from "../../api/api";

class HeaderContainer extends React.Component{

    // componentDidMount() {
    //     this.props.getAuthUserData()
    //     // this.props.toggleIsFetching(true);
    //     // authAPI.me()
    //     //     .then(response => {
    //     //         // this.props.toggleIsFetching(false);
    //     //         // this.props.setUsers(response.data.items);
    //     //         // this.props.setTotalUsersCount(response.data.totalCount)
    //     //         if (response.data.resultCode === 0){
    //     //             let {id, email, login} = response.data.data
    //     //             this.props.setAuthUserData(id, email, login);
    //     //         }
    //     //     })
    // }

    render() {
        return (
            <Header {...this.props}/>
        )
    }
}
const mapStateToProps = (state) => ({
    isAuth: state.auth.isAuth,
    login: state.auth.login
})

export default connect(mapStateToProps, {logout})(HeaderContainer)