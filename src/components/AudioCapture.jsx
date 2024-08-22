import React, { useState, useEffect } from 'react';

function AudioCapture() {
  const [audioStream, setAudioStream] = useState(null);
  const [isRecording, setIsRecording] = useState(false);

  useEffect(() => {
    if (isRecording) {
      // Start recording when isRecording is true
      startRecording();
    } else {
      // Stop recording when isRecording is false
      stopRecording();
    }

    return () => {
      // Clean up on component unmount
      if (audioStream) {
        audioStream.getTracks().forEach(track => track.stop());
      }
    };
  }, [isRecording]);

  const startRecording = async () => {
    try {
      const stream = await navigator.mediaDevices.getUserMedia({ audio: true });
      setAudioStream(stream);
      // Additional processing can be done here
    } catch (err) {
      console.error('Error accessing microphone:', err);
    }
  };

  const stopRecording = () => {
    console.log(audioStream)
    if (audioStream) {        
      audioStream.getTracks().forEach(track => track.stop());
      setAudioStream(null);
    }
  };

  return (
    <div>
      <button onClick={() => setIsRecording(!isRecording)}>
        {isRecording ? 'Stop Recording' : 'Start Recording'}
      </button>
    </div>
  );
}

export default AudioCapture;
