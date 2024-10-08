import React, { useState, useEffect } from "react";
import play from '../assets/command-page/play-svgrepo-com.svg'
import voiceCapture from '../assets/command-page/voice-fill-svgrepo-com.svg'

const VoiceRecognition = () => {
  const [text, setText] = useState("");
  const [isListening, setIsListening] = useState(false);
  const [recognition, setRecognition] = useState(null);

  useEffect(() => {
    const SpeechRecognition =
      window.SpeechRecognition || window.webkitSpeechRecognition;
      
    if (SpeechRecognition) {
      const recognitionInstance = new SpeechRecognition();
      recognitionInstance.continuous = true;
      recognitionInstance.interimResults = true;

      recognitionInstance.onresult = (event) => {
        const transcript = Array.from(event.results)
          .map((result) => result[0])
          .map((result) => result.transcript)
          .join("");

        setText(transcript);
        handleVoiceCommand(transcript);
      };

      setRecognition(recognitionInstance);
    } else {
      console.error("Speech Recognition API not supported in this browser.");
    }
  }, []);

  const startListening = () => {  
    console.log(recognition)  
    if (recognition) {
      setIsListening(true);
      recognition.start();
    }
  };

  const stopListening = () => {
    if (recognition) {
      setIsListening(false);
      recognition.stop();
    }
  };

  const handleVoiceCommand = (command) => {
    if (command.toLowerCase().includes("open")) {
      sendCommandToESP8266("on");
    } else if (command.toLowerCase().includes("close")) {
      sendCommandToESP8266("off");
    }
  };

  const sendCommandToESP8266 = (action) => {
    fetch(`http://192.168.10.105/led/${action}`)
      .then((response) => response.json())
      .then((data) => console.log(data))
      .catch((error) => console.error("Error:", error));
  };

  return (
    <div>
      <button onClick={isListening ? stopListening : startListening} className="flex text-white bg-[#060606] w-48 gap-3 justify-center items-center">
        <img src={isListening ? voiceCapture : play} alt="icon" className="w-5" />
        <span>{isListening ? "Stop Listening" : "Start Listening"}</span>
      </button>
      <p className="my-3">{text}</p>
    </div>
  );
};

export default VoiceRecognition;
