import React from "react";
import cl from './FormsControls.module.css'


const FormConrol = ({input, meta, child, ...props}) => {
    const hasError = meta.touched && meta.error;
    return (
        <div className={cl.formControl + ' ' + (hasError? cl.error:' ')}>
            <div>
                {props.children}
            </div>
            {hasError && <span>{meta.error}</span>}
        </div>
    )
};





// export const Textarea = ({input, meta, ...props}) => {
export const Textarea = (props) => {
    const {input, meta, child, ...restProps} = props;
    return <FormConrol {...props}><textarea {...input} {...restProps}/></FormConrol>
    // const hasError = meta.touched && meta.error;
    // return (
    //     <div className={cl.formControl + ' ' + (hasError? cl.error:' ')}>
    //         <div>
    //             <textarea {...input} {...props}></textarea>
    //         </div>
    //         {hasError && <span>{meta.error}</span>}
    //     </div>
    // )
};

// export const Input = ({input, meta, ...props}) => {
export const Input = (props) => {
    const {input, meta, child, ...restProps} = props;
    return <FormConrol {...props}><input {...input} {...props}/></FormConrol>
    // const hasError = meta.touched && meta.error;
    // return (
    //     <div className={cl.formControl + ' ' + (hasError? cl.error:' ')}>
    //         <div>
    //             <input {...input} {...props}></input>
    //         </div>
    //         {hasError && <span>{meta.error}</span>}
    //     </div>
    // )
};