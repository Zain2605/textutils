// import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm'
//import { useState } from 'react/cjs/react.development';
import { useState } from 'react';
import Alert from './components/Alert';
import Aboutus from './components/Aboutus';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  //Link
} from "react-router-dom";

function App() {
  const [mode,setmode] = useState('light');
  const [alert,setAlert] = useState(null);
  
  const showAlert = (message,type) =>{
    setAlert({
      message:message,
      type:type
    })
    setTimeout(() =>{
      setAlert(null);
    },2000);
  }
 
  
  const toggleMode = () => {
    if(mode==='light')
    {
      setmode('dark');
      document.body.style.backgroundColor='#141430'
      showAlert("Enabled dark  mode","success")
    }
    else

    {
      setmode('light');
      document.body.style.backgroundColor='white'
      showAlert("Enabled light  mode","success")
    }
  };
  
  return (
    <>
   <Router>
     
    <Navbar title={"TextUtils"} about="About Us" mode={mode} toggleMode={toggleMode}/>
    <Alert alert={alert}/>
    
    <div className="container my-3">
    <Routes>
    <Route path="/" element={<TextForm showAlert={showAlert} title="Enter text to analyze" mode={mode}/>}/>
    {/* <TextForm showAlert={showAlert} title="Enter text to analyze" mode={mode} /> */}
      {/* </Route> */}

    <Route path="/Aboutus" element={<Aboutus mode={mode}/>}/>
    
    
    </Routes>
    </div> 
    </Router>
    </>
    // <div className="App">
    //   <header className="App-header">
    //     <img src={logo} className="App-logo" alt="logo" />
    //     <p>
    //       Edit <code>src/App.js</code> and save to reload.
    //     </p>
    //     <a
    //       className="App-link"
    //       href="https://reactjs.org"
    //       target="_blank"
    //       rel="noopener noreferrer"
    //     >
    //       Learn React
    //     </a>
    //   </header>
    // </div>

  );
}

export default App;
