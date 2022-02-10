import React, { useState } from 'react';




export default function TextForm(props) {
  const handleupclick = () => {
    console.log("Upclick was clicked");
    let newtext = text.toUpperCase();
    setText(newtext);
    props.showAlert("Converted to uppercase","success")
    
  }

  

  const handlelowclick = () => {
    console.log("lowclick was clicked");
    let newtext = text.toLowerCase();
    setText(newtext);
    props.showAlert("Converted to lowercase","success")
  }
  const handlecleartext = () => {
    setText("");
    props.showAlert("Cleared text","success")


  }

  const handlecopy = () => {
    let newtext = document.getElementById("textbox");
    newtext.select();
    navigator.clipboard.writeText(newtext.value);
    props.showAlert("Copied text","success")
  }

  const handleonchange = (event) => {
    console.log("On change");
    setText(event.target.value);
  }

  const [text, setText] = useState("");
  //setText("New text")
  // let count=0;
  

  
  
  // const wordcalc = (itext) => {
  //   const splits=itext.split(" ");
  //   for(let i=0;i<splits.length;i++)
  //         {
  //           if(splits[i] !== " "){
  //             count+=1;
  //           }
            
  //         }

  //   return (
  //     <>{count} words</>
  //   )
  // };
  

  return (
    <>
      <div>


        <h2 style={{ color: props.mode === 'dark' ? 'white' : '#141430' }} >{props.title} </h2>
        <div className="mb-3">

          <textarea className="form-control" id="textbox" value={text} onChange={handleonchange} style={{ backgroundColor: props.mode === 'dark' ? 'grey' : 'white', color: props.mode === 'dark' ? 'white' : '#141430' }} rows="8" placeholder='Enter text here'></textarea>
        </div>
        <button type="button" className="btn btn-primary mx-1" onClick={handleupclick}>Convert to Uppercase</button>
        <button type="button" className="btn btn-primary mx-1" onClick={handlelowclick}>Convert to lowercase</button>
        <button type="button" className="btn btn-primary mx-1 my-1" onClick={handlecleartext}>Clear text</button>
        <button type="button" className="btn btn-primary mx-1 my-1" onClick={handlecopy}>Copy text</button>
      </div>

      <div className="container my-3" style={{ color: props.mode === 'dark' ? 'white' : '#141430' }}>
        <h3> Your text summary</h3>
        
        <p>
          {text.split(/\s+/).filter((ele) => {return ele.length!==0}).length} word(s)
            and {text.length} characters.</p>
        <p>{0.008 * text.split(" ").length} Minutes read</p>
        <h3>Preview</h3>
        <p>{text}</p>
      </div>
    </>
  );

}
