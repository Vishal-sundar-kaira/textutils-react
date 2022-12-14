import React,{useState} from 'react'

export default function Textform(props) {
  const handleupClick=()=>{
    console.log("Uppercase was clicked")
    let newText=text.toUpperCase();
    setText(newText)
  }
  const handleOnChange=(event)=>{
    console.log("Uppercase was clicked")
    setText(event.target.value)
  }
  const handleloClick=()=>{
    console.log("Uppercase was clicked")
    let newText=text.toLowerCase();
    setText(newText)
  }
  const firstlettercap=()=>{
    let next=text.split(" ")
    let tlen=next.length
    let newnext=[]
    let i;
    for(i=0;i<tlen;i++)
    {
      let nextlen=next[i].length
      let upperletter=next[i].charAt(0).toUpperCase();
      let finaltext=(upperletter+next[i].substring(1,nextlen))
      newnext[i]=finaltext
    }
    console.log(newnext)
    let uppertext=""
    for(i=0;i<tlen;i++)
    {
      uppertext=uppertext+newnext[i]
      uppertext=uppertext+" "
    }
    setText(uppertext)
  }
  const[text,setText]=useState("");
  // text="new text"//wrong way to make change in text
  // settext("new text"); //right a to make change in text
  // usestate is one type of hook is used because now a days we dont use class we use function
  return (
    <>
    <div className='container'>
      <h1>{props.heading}</h1>
      <div className="mb-3">
      <label htmlFor="myBox" className="form-label">Example textarea</label>
      <textarea className="form-control" style={{color: props.mode==='light'?'black':'white', backgroundColor:  props.mode==='light'?'white':'black'}} value={text} onChange={handleOnChange} id="myBox" rows="10"></textarea>
      {/* need to handle on change so that user can make change in textarea */}
      </div>
      <button className="btn btn-primary mx-4"  onClick={handleupClick}>Convert to uppercase</button>
      <button className="btn btn-primary mx-4" onClick={handleloClick}>Convert to lowercase</button>
      <button className="btn btn-primary mx-4" onClick={firstlettercap}> first letter uppercase</button>
    </div>
    <div className="container my-4">
      <h1>Your Text Summary</h1>
      <p>{text.split(" ").length-1} and {text.length} Characters</p>
      <p>{0.008*text.split(" ").length}Minutes it will take to read text </p>
      <h2>preview</h2>
      <p>{text}</p>
    </div>
    </>
  )
}

