import React from "react";
import cl from './FormsControls.module.css'

export const Textarea = ({input, meta, ...props}) => {
    const hasError = meta.touched && meta.error
    return (
        <div className={cl.formControl + ' ' + (hasError? cl.error:' ')}>
            <div>
                <textarea {...input} {...props}></textarea>
            </div>
            {hasError && <span>{meta.error}</span>}
        </div>
    )
};