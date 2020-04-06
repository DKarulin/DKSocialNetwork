import React from "react";
import Post from "./Posts/Post";
import {Field, reduxForm} from "redux-form";
import {maxLengthCreater, reqiredField} from "../../../utils/validators/validators";
import {Textarea} from "../../common/FormsControls/FormsControl";


const MyPosts = (props) => {
    let postElement = props.post
        .map((post) => <Post massage={post.message} like_count={post.like}/>)

    let newPostElement = React.createRef()

    let addPost = (values) => {
        props.addPost(values.newPostText)
    }

    let onPostChange = () => {
        let text = newPostElement.current.value;
        props.updatePostText(text)

    }

    return (
        <div className='ml-4'>
            <AddNewPostFormRedux onSubmit={addPost}/>
            <div className='mb-3 mt-4'>
                <h3>my post</h3>
            </div>
            <div>
                {postElement}
            </div>

        </div>

    )
}

let maxLength10 = maxLengthCreater(10)

const AddNewPostForm = (props) => {
    return (
        <form onSubmit={props.handleSubmit}>
            <Field name={'newPostText'} component={Textarea} validate={[reqiredField, maxLength10]} placeholder={'Post message'}/>
            <div>
                <button>Add</button>
            </div>
        </form>
    )
}
const AddNewPostFormRedux = reduxForm({form: 'ProfileAddNewPostForm'})(AddNewPostForm)

export default MyPosts