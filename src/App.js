import logo from './logo.svg';
import './App.css';
import Navbar  from './components/Navbar';
import Textform from './components/Textform';
// import About from './components/About';
import React,{ useState } from 'react';
import Alert from './components/Alert';
// import {
//   BrowserRouter as Router,
//   Switch,
//   Route,
//   Link,
//   Routes
// } from "react-router-dom";
function App() {
  const [mode,setmode]=useState("light")
  const[alert,setalert]=useState(null);
  const togglemode=()=>{
    if(mode==="light")
    {
      setmode("dark")
      document.body.style.backgroundColor='black'
      document.body.style.color='white'
      showAlert("dark mode is enabled","success")
      setTimeout(() => {
        setalert(null)
      }, 3000);
    }
    else
    {
      setmode("light")
      document.body.style.backgroundColor='white'
      document.body.style.color='black'
      showAlert("light mode is enabled","warning")
      setTimeout(() => {
        setalert(null)
      }, 3000);
    }
  }
  const showAlert=(message,type)=>{
    setalert({
      msg:message,
      type:type
    })
  }
  return (
    <>
    {/* <Router> */}
    <Navbar title="Textutils" mode={mode} togglemode={togglemode}/> 
    <Alert alert={alert}/>
    <div className="container my-3">
      {/* <Routes> */}
        {/* <Route exact path="/about" element={<About/>}>
        </Route> */}
        {/* <Route exact path="/" element={<Textform heading="Enter the text to analyse" mode={mode} togglemode={togglemode}/>}>
        </Route>
      </Routes> */}
      <Textform heading="Enter the text to analyse" mode={mode} togglemode={togglemode}/>
    </div>
    {/* </Router> */}

    
    {/* you cann pass prop(properties like title or any for components) just in main index.js you need to write prop.title or any name */}
    </>
  );
}

export default App;
