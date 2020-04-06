import React from "react";
import {addPostActionCreater, updateNewPostTextActionCreater} from "../../../redux/profile-reducer";
import MyPosts from "./MyPosts";
import {connect} from "react-redux";
import Dialogs from "../../Dialogs/Dialogs";
import {sendMessageCreater, updateNewMessageBodyCreater} from "../../../redux/messages-reducer";


// const MyPostsContainer = (props) => {
//     let state = props.store.getState();
//
//     let addPost = () => {
//         props.store.dispatch(addPostActionCreater());
//     }
//
//     let onPostChange = (text) => {
//         let action = updateNewPostTextActionCreater(text);
//         props.store.dispatch(action)
//     }
//
//     return (
//        <MyPosts updatePostText={onPostChange}
//                 addPost={addPost}
//                 post={state.profilePage.postData}
//                 newPostText={state.profilePage.newPostText}/>
//
//     )
// }


let mapStateToProps = (state) => {
    return {
        post: state.profilePage.postData,
        newPostText: state.profilePage.newPostText,
    }
}

let mapDispatchToProps = (dispatch) => {
    return {
        updatePostText: (text) => {
            let action = updateNewPostTextActionCreater(text);
            dispatch(action)
        },
        addPost: (newPostText) => {
            dispatch(addPostActionCreater(newPostText));
    },

    }
}

const MyPostsContainer = connect(mapStateToProps, mapDispatchToProps)(MyPosts);

export default MyPostsContainer