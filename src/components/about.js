import React, { useState } from 'react'


export default function About(props) {
    return (
        <div className="container" style={{ color: props.mode === 'light' ? 'black' : 'white' }}>

            <h2 className="container my-5">About Us :)👨‍💻</h2>
           
            <p style={{ color: props.mode === 'light' ? 'black' : 'white' }}>
            Text-Utils.com is one of the most powerful, secure and free websites containing various tools for helping with your daily tasks, such as online formatters (XML, JSON, SQL and HTML), encoding (Base64, Hashes), converters (binary, XML, JSON), multiple text tools, such as to remove duplicate lines, extract text and much more. Enjoy all for free!
            </p>
            <h4  id='love'className={`container my-2 text-${props.mode==='light'?'dark':'light'}`}> Made With &#10084;Debjit Purohit</h4> 
            
 
            
        </div>
    )
}
