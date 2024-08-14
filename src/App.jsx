import './App.css'
import { BrowserRouter as Router, Route, Link, Routes } from "react-router-dom";
import VoiceRecognition from './components/VoiceRecognition'
import Home from './pages/Home';

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route exact path="/Pergola-shelter-safe-web-app" element={<Home />} />
          <Route exact path="/Pergola-shelter-safe-web-app/voice-recognition" element={<div><h1>Hey there</h1> <VoiceRecognition /></div>} />
        </Routes>        
      </Router>      
    </>
  )
}

export default App
