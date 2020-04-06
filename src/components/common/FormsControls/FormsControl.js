import React from "react";
import style from './FormsControl.module.css'

export const Textarea = ({input, meta, ...props}) => {
    return (
        <div className={style.formControl + ' ' +(meta.touched && meta.error  ? style.error : '')}>
            <textarea {...input} {...props}/>
            <div>
                {meta.touched && meta.error && <span>{meta.error}</span>}
            </div>
        </div>
    )
}