import './App.css'
import { BrowserRouter as Router, Route, Link, Routes } from "react-router-dom";
import VoiceRecognition from './components/VoiceRecognition'
import Login from './components/Login';
import Register from './components/Register';
import Home from './pages/Home';
import VoiceCommand from './pages/VoiceCommand';
import Volets from './pages/Volets';
import Profile from './components/Profile';

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route exact path="/Pergola-shelter-safe-web-app" element={<Home />} />
          <Route exact path="/Pergola-shelter-safe-web-app/voice-recognition"
            element={<VoiceCommand />}
          />
          <Route exact path="/Pergola-shelter-safe-web-app/volets"
            element={<Volets />}
          />
          <Route path="/Pergola-shelter-safe-web-app/login" element={<Login />} />
          <Route path="/Pergola-shelter-safe-web-app/register" element={<Register />} />
          <Route path="/Pergola-shelter-safe-web-app/profile" element={<Profile/>} />
        </Routes>        
      </Router>      
    </>
  )
}

export default App
