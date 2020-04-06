import React from "react";
import classes from './Dialogs.module.css'
import DialogItem from "./DialogItem/DialogsItem";
import Message from "./Message/Message";
import {Field, reduxForm} from "redux-form";
import {Textarea} from "../common/FormsControls/FormsControl";
import {maxLengthCreater, reqiredField} from "../../utils/validators/validators";


const Dialogs = (props) => {
    let state = props.messagesPage

    let dialogsElement = state.dialogsData
        .map((dialog) => <DialogItem name={dialog.name} key={dialog.id} id={dialog.id}/>)
    let messagesElement =state.messages
        .map((message) => <Message massage={message.message} key={message.id}/>)
    let newMassegeBody = state.newMessageBody;


    let onSendMessageClick = () => {
        props.sendMessage()
    }
    let onNewMessageClick = (event) => {
        let body =  event.target.value
        props.updateNewMessageBody(body)

    }
    let addNewMessage = (values) => {
        props.sendMessage(values.newMassegeBody)

    }


    return (
        <div className={classes.dialogs}>
            <div className={classes.dialogsItems}>
                {dialogsElement}
            </div>
            <div className={classes.messages}>
                <div>{messagesElement}</div>
            </div>
            <AddMessageFormRedux onSubmit={addNewMessage}/>
        </div>
    )
}

const maxLength50 = maxLengthCreater(50)


const AddMessageForm =(props)=>{
    return(
        <form onSubmit={props.handleSubmit}>
            <div>
                <Field component={Textarea}
                       validate={[reqiredField, maxLength50 ]} name={'newMassegeBody'} placeholder={'Enter your massage'}/>
            </div>
            <div><button>Send</button></div>
        </form>
    )
}

const AddMessageFormRedux = reduxForm({form: 'dialogAddMessageForm'})(AddMessageForm)

export default Dialogs