import React from "react";


export default ({input, label, meta}) => {
    return (
        <div>
            <label>{label}</label>
            <input {...input}/>
            {meta.touched && meta.error && <span  style={{marginBottom: '20px' ,backgroundColor: 'red', color: 'whitesmoke'}}>{meta.error}</span>}
        </div>
    )
}