import { useState, useEffect } from "react";
import play from '../assets/command-page/play-svgrepo-com.svg'
import voiceCapture from '../assets/command-page/voice-fill-svgrepo-com.svg'
import * as tf from "@tensorflow/tfjs"
import * as speech from "@tensorflow-models/speech-commands"

const SpeechRecognition = ()=>{
    // 1. Create model and action states
const [model, setModel] = useState(null)
const [action, setAction] = useState(null)
const [labels, setLabels] = useState(null) 

// 2. Create Recognizer
const loadModel = async () =>{
  const recognizer = await speech.create("BROWSER_FFT")
  console.log('Model Loaded')
  await recognizer.ensureModelLoaded();
  console.log(recognizer.wordLabels())
  setModel(recognizer)
  setLabels(recognizer.wordLabels())
}

useEffect(()=>{
    loadModel()
}, []); 

useEffect(()=>{
    if(action){
        
        handleVoiceCommand(action)
        
    }
},[action])

// 
function argMax(arr){
  return arr.map((x, i) => [x, i]).reduce((r, a) => (a[0] > r[0] ? a : r))[1];
}

// 3. Listen for Actions
const recognizeCommands = async () =>{
  console.log('Listening for commands')
  model.listen(result=>{
    // console.log(labels[argMax(Object.values(result.scores))])
    console.log(result.spectrogram)
    setAction(labels[argMax(Object.values(result.scores))])
  }, {includeSpectrogram:true, probabilityThreshold:0.9})
  setTimeout(()=>model.stopListening(), 10e3)
}

const handleVoiceCommand = (command) => {
    console.log(command);
    if (command.toLowerCase().includes("up")) {
      sendCommandToESP8266("on");
    } else if (command.toLowerCase().includes("down")) {
      sendCommandToESP8266("off");
    }
  };

  const sendCommandToESP8266 = (action) => {
    fetch(`http://192.168.126.101/led/${action}`)
      .then((response) => response.json())
      .then((data) => console.log(data))
      .catch((error) => console.error("Error:", error));
  };




  return (
    <div>
          <button onClick={recognizeCommands} className="flex text-white bg-[#060606] w-48 gap-3 justify-center items-center">Command
          <img src={action ? voiceCapture : play} alt="icon" className="w-5" />
          </button>
          {action ? <div>{action}</div>:<div>No Action Detected</div> }
    </div>
  );

}

export default SpeechRecognition