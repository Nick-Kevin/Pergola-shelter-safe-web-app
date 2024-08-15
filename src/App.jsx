import './App.css'
import { BrowserRouter as Router, Route, Link, Routes } from "react-router-dom";
import VoiceRecognition from './components/VoiceRecognition'
import Home from './pages/Home';
import VoiceCommand from './pages/VoiceCommand';
import Volets from './pages/Volets';

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
        </Routes>        
      </Router>      
    </>
  )
}

export default App
