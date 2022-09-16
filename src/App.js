
import './App.css';
import Navbar from './components/Navbar';// and come frpm the Navbar.js file
import TextForm from './components/textform';
import React, { useState } from 'react'
import Alert from './components/alert';
import About from './components/about';
import {
  BrowserRouter as Router,
  Route,
  Routes,
  Link
} from "react-router-dom";

 function App() {

  const [mode, setMode] = useState('light');
  const [alert, setAlert] = useState(null);
  const showAlerts = (message, type) => {
    setAlert({
      msg: message,
      type: type
    })
    setTimeout(() => {
      setAlert(null);
    }, 3000);

  }
  const toggleMode = () => {
    if (mode === 'light') {
      setMode('dark');
      document.body.style.backgroundColor = '#042743';
      showAlerts("Dark Mode has been Enabled", "success");
      document.title = 'TextUtils - Dark Mode';
    }
    else {
      setMode('light');
      document.body.style.backgroundColor = 'white';
      showAlerts("Light Mode has been Enabled", "success");
      // document.title='TextUtils - Light Mode';
    }
  }
  return (
       <Router basename='/Textutils'>
        <Navbar tittle="TextUtils" mode={mode} toggleMode={toggleMode} aboutus="About Us" />
        <Alert alert={alert} />
        <div className="container my-5">
           <Routes>
            <Route path="/about" element={ <About mode={mode} toggleMode={toggleMode}/>}/>
            <Route path="/" element={<TextForm showAlerts={showAlerts} mode={mode} toggleMode={toggleMode} heading="&#128293;Enter the text to analyze :)" />}/>
            </Routes>
        </div>
     </Router>
  );
}

export default App;
