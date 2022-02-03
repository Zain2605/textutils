import React, {useState} from 'react';



export default function TextForm(props) {
    const handleupclick =()=>{
        console.log("Upclick was clicked");
        let newtext=text.toUpperCase();
        setText(newtext);
    }

    const handlelowclick =()=>{
        console.log("lowclick was clicked");
        let newtext=text.toLowerCase();
        setText(newtext);
    }
    const handlecleartext =()=>{
        setText("");
        
        
    }

    const handlecopy = () => {
      let newtext=document.getElementById("textbox");
      newtext.select();
      navigator.clipboard.writeText(newtext.value);
    }

    const handleonchange =(event)=>{
        console.log("On change");
        setText(event.target.value);
    }
    
    const [text, setText]=useState("");
    //setText("New text")
    
  return (
    <>
  <div>
 
      
      <h2>{props.title}</h2>
<div className="mb-3">
  
  <textarea className="form-control" id="textbox"value={text} onChange={handleonchange}  rows="8" placeholder='Enter text here'></textarea>
</div>
<button type="button" className="btn btn-primary mx-1" onClick={handleupclick}>Convert to Uppercase</button>
<button type="button" className="btn btn-primary mx-1" onClick={handlelowclick}>Convert to lowercase</button>
<button type="button" className="btn btn-primary mx-1 my-1" onClick={handlecleartext}>Clear text</button>
<button type="button" className="btn btn-primary mx-1 my-1" onClick={handlecopy}>Copy text</button>
  </div>

  <div className="container my-3">
      <h3> Your text summary</h3>
      <p>{text.split(" ").length} words and {text.length} characters.</p>
      <p>{0.008*text.split(" ").length} Minutes read</p>
      <h3>Preview</h3>
      <p>{text}</p>
  </div>
  </>
  );
  
}
