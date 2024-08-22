import './App.css'
import { BrowserRouter as Router, Route, Link, Routes } from "react-router-dom";
import VoiceRecognition from './components/VoiceRecognition'
import Login from './components/Login';
import Register from './components/Register';
import Home from './pages/Home';
import VoiceCommand from './pages/VoiceCommand';
import Volets from './pages/Volets';
import Weather from './pages/Weather';
import Profile from './components/Profile';
import SpeechRecognition from './pages/SpeechRecognition'
import Test from './pages/Test';

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
          <Route path="/Pergola-shelter-safe-web-app/weather" element={<Weather />} />
          <Route path="/Pergola-shelter-safe-web-app/test" element={<Test />} />
          <Route path="/Pergola-shelter-safe-web-app/login" element={<Login />} />
          <Route path="/Pergola-shelter-safe-web-app/register" element={<Register />} />
          <Route path="/Pergola-shelter-safe-web-app/profile" element={<Profile/>} />
          <Route path="/Pergola-shelter-safe-web-app/speech" element={<SpeechRecognition/>} />
        </Routes>        
      </Router>      
    </>
  )
}

export default App
