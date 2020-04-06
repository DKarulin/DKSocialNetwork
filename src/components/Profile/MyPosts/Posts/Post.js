import React from "react";
import classes from './Post.module.css';

const Post = (props) => {
    return (
        <div className={classes.item}>
            <img src='http://gloria-mur.ru/wp-content/uploads/2017/05/avatar1-740x463.jpg' className='mr-3'/>
            {props.massage}
            <div>
                <span>like {props.like_count}</span>
            </div>
        </div>

    )
}
export default Post