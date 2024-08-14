import './App.css'
import { BrowserRouter as Router, Route, Link, Routes } from "react-router-dom";
import VoiceRecognition from './components/VoiceRecognition'
import Home from './pages/Home';
import VoiceCommand from './pages/VoiceCommand';

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route exact path="/Pergola-shelter-safe-web-app" element={<Home />} />
          <Route exact path="/Pergola-shelter-safe-web-app/voice-recognition"
            element={<VoiceCommand />}
          />
        </Routes>        
      </Router>      
    </>
  )
}

export default App
