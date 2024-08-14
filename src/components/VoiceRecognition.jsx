import React, { useState, useEffect } from "react";

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
    if (command.toLowerCase().includes("open pergola")) {
      sendCommandToESP8266("open");
    } else if (command.toLowerCase().includes("close pergola")) {
      sendCommandToESP8266("close");
    }
  };

  const sendCommandToESP8266 = (action) => {
    fetch(`http://<ESP8266_IP_ADDRESS>/control?state=${action}`)
      .then((response) => response.json())
      .then((data) => console.log(data))
      .catch((error) => console.error("Error:", error));
  };

  return (
    <div>
      <button onClick={isListening ? stopListening : startListening}>
        {isListening ? "Stop Listening" : "Start Listening"}
      </button>
      <p>{text}</p>
    </div>
  );
};

export default VoiceRecognition;
