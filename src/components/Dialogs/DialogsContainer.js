import React from "react";
import classes from './Dialogs.module.css'
import DialogItem from "./DialogItem/DialogsItem";
import Message from "./Message/Message";
import {sendMessageCreater, updateNewMessageBodyCreater} from "../../redux/messages-reducer";
import Dialogs from "./Dialogs";
import {connect} from "react-redux";
import {Redirect} from "react-router-dom";
import {withAuthRedirect} from "../../hoc/withAuthRedirect";
import {compose} from "redux";


// const DialogsContainer = (props) => {
//     let state = props.store.getState().messagesPage
//
//
//     let onSendMessageClick = () => {
//         props.store.dispatch(sendMessageCreater())
//     }
//     let onNewMessageClick = (body) => {
//         props.store.dispatch(updateNewMessageBodyCreater(body))
//
//     }
//     return (
//         <Dialogs updateNewMessageBody={onNewMessageClick} sendMessage={onSendMessageClick} messagesPage={state}/>
//     )
// }

const mapStateToProps = (state) => {
    return {
        messagesPage: state.messagesPage,

    }
}
const mapDispatchToProps = (dispatch) => {
    return {
        sendMessage: (newMassegeBody) => {
            dispatch(sendMessageCreater(newMassegeBody))
        },
        updateNewMessageBody: (body) => {
            dispatch(updateNewMessageBodyCreater(body))
        },
    }
}


// let authRedirectComponent = withAuthRedirect(Dialogs)
// закоментированное делает compose
// const DialogsContainer = connect(mapStateToProps, mapDispatchToProps)(authRedirectComponent);

export default compose(
    connect(mapStateToProps, mapDispatchToProps),
    withAuthRedirect
)(Dialogs)