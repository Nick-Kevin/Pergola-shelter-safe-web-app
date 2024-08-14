import './App.css'
import { BrowserRouter as Router, Route, Link, Routes } from "react-router-dom";
import VoiceRecognition from './components/VoiceRecognition'
import Login from './components/Login';
import Register from './components/Register';
import Home from './pages/Home';
import VoiceCommand from './pages/VoiceCommand';
import Logout from './components/Logout';

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route exact path="/Pergola-shelter-safe-web-app" element={<Home />} />
          <Route exact path="/Pergola-shelter-safe-web-app/voice-recognition"
            element={<VoiceCommand />}
          />
          <Route path="/Pergola-shelter-safe-web-app/login" element={<Login />} />
          <Route path="/Pergola-shelter-safe-web-app/register" element={<Register />} />
          <Route path="/Pergola-shelter-safe-web-app/logout" element={<Logout/>} />
        </Routes>        
      </Router>      
    </>
  )
}

export default App
