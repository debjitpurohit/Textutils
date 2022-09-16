import React, { useState, useSyncExternalStore } from 'react' // usestate is a hook



export default function TextForm(props) {
  const handleUpClick = () => {
    // console.log("Uppercase was clicked");
    // setText("You have clicked on uppercase");
    setText(text.toUpperCase());
    props.showAlerts("Converted to Upper Case", "success");
  }
  const handleLoClick = () => {

    setText(text.toLowerCase());
    props.showAlerts("Converted to Lower Case", "success");
  }
  const handleCaClick = () => {
    function capitalize(text) {
      return text.toLowerCase().split(' ').map(s => s.charAt(0).toUpperCase() + s.substring(1)).join(' ');
    }
    setText(capitalize(text));
    props.showAlerts("Capitalized", "success");

  }
  const handledelClick = () => {
    let newText = "";
    setText(newText);
    props.showAlerts("Input Deleted", "success");
  }


  const handleOnChange = (event) => {
    //console.log("Uppercase was clicked");
    setText(event.target.value);
  }
  // const [text, setText] = useState('Enter text here');
  const [text, setText] = useState('');
  // text="Enter Your Motamot"; // this will not work
  // setText("Enter Your Motamot"); // this will work
  return (
    <>
      <div className='container' style={{ color: props.mode === 'light' ? 'black' : 'white' }}>
        <h2 id='head'>{props.heading}</h2>

        <div className="mb-3">

          <textarea className="form-control" style={{ backgroundColor: props.mode === 'light' ? 'white' : '#042743', color: props.mode === 'light' ? 'black' : 'white' }} id="myBox" onChange={handleOnChange} rows="8" placeholder='Enter text here' value={text}></textarea>
        </div>
        <button className="btn btn-primary" disabled={text.length===0}onClick={handleUpClick}>Convert to UpperCase</button>
        <button className="btn btn-primary" disabled={text.length===0}onClick={handleLoClick}>Convert to LowerCase</button>
        <button className="btn btn-primary " disabled={text.length===0}onClick={handleCaClick}>Capitalization</button>
        <button className="btn btn-primary "disabled={text.length===0} onClick={handledelClick}>Clear Text</button>
      </div>
      <div className="container my-3" style={{ color: props.mode === 'light' ? 'black' : 'white' }}>
        <h4 >Your Text Summary &#127881;</h4>
        <p ><b>{text.split(" ").filter((element)=>{return element.length!==0 }).length}</b> words and <b>{text.length}</b> characters</p>
        <h4 >Preview &#127872; </h4>
        <p >{text.length > 0 ? text : "Nothing to Preview"}</p>



      </div>
    </>
  )
}
