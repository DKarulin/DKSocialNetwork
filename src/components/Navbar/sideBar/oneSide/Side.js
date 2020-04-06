import React from "react";

const Side = (props) => {
    return (
        <div>
            <div className='col-6'>
                <img src='http://gloria-mur.ru/wp-content/uploads/2017/05/avatar1-740x463.jpg'/>
            </div>
            <div className='col-6 mt-2'>
                {props.name}
            </div>
        </div>
    )
}
export default Side