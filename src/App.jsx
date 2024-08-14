import './App.css'
import { BrowserRouter as Router, Route, Link, Routes } from "react-router-dom";
import VoiceRecognition from './components/VoiceRecognition'

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route exact path="/Pergola-shelter-safe-web-app" element={<h1>Home Page</h1>} />
          <Route exact path="/Pergola-shelter-safe-web-app/voice-recognition" element={<div><h1>Hey there</h1> <VoiceRecognition /></div>} />
        </Routes>        
      </Router>      
    </>
  )
}

export default App
