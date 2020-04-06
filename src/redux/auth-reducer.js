import {authAPI} from "../api/api";
import {stopSubmit} from "redux-form";

const SET_USER_DATA = 'SET_USER_DATA';
const FOLLOW = 'FOLLOW';
const UNFOLLOW = 'UNFOLLOW';


let initialState = {
    id: null,
    login: null,
    email: null,
    isAuth: false,
    isFetching: false,
}

const authReducer = (state = initialState, action) => {

    switch (action.type) {
        case SET_USER_DATA:
            return {
                ...state,
                ...action.payload,
            }
        default:
            return state;

    }
}

export const setAuthUserData = (id, email, login, isAuth) => ({type: SET_USER_DATA, payload: {id, email, login, isAuth}})
export const getAuthUserData= () => (dispatch) =>{
    return authAPI.me()
        .then(response => {
            // this.props.toggleIsFetching(false);
            // this.props.setUsers(response.data.items);
            // this.props.setTotalUsersCount(response.data.totalCount)
            if (response.data.resultCode === 0){
                let {id, email, login} = response.data.data
                dispatch(setAuthUserData(id, email, login, true));
            }
        })
}
export const login= (email, password, rememberMe) => (dispatch) =>{
    authAPI.login(email, password, rememberMe)
        .then(response => {
            // this.props.toggleIsFetching(false);
            // this.props.setUsers(response.data.items);
            // this.props.setTotalUsersCount(response.data.totalCount)
            if (response.data.resultCode === 0){
                dispatch(getAuthUserData());
            } else  {

            }
        })
}
export const logout= () => (dispatch) =>{
    authAPI.logout()
        .then(response => {
            if (response.data.resultCode === 0){
                dispatch(setAuthUserData(null, null, null, false));
            }
        })
}


export default authReducer