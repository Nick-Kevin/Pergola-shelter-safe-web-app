import { useState, useEffect } from "react"
import { useNavigate } from "react-router-dom";
import Navbar from "../../components/Navbar"
import SpeechRecognition from "../SpeechRecognition";
import play from '../../assets/command-page/play-svgrepo-com.svg'
import voiceCapture from '../../assets/command-page/voice-fill-svgrepo-com.svg'

function Voice () {
    const navigate = useNavigate();
    const [isLoggedIn, setIsloggedIn] = useState(false)
    const [text, setText] = useState("");
    const [isListening, setIsListening] = useState(false);
    const [recognition, setRecognition] = useState(null);

    useEffect(()=>{
        const verifyAuthentification = async () =>{
            const token = localStorage.getItem('authToken');

            if(!token){
                navigate('/Pergola-shelter-safe-web-app/login');
                return;
            }

            try{
                const response = await axios.get('http://localhost:5000/protected',{
                    headers:{
                        Authorization:`${token}`
                    }
                });
                console.log(response.data)
                setIsloggedIn(true)
                
            } catch(error){
                console.log("Error Authentification !",error)
                navigate('/Pergola-shelter-safe-web-app/login');
            }
        }
        verifyAuthentification()
    })


  
    // useEffect(() => {
    //     const SpeechRecognition =
    //       window.SpeechRecognition || window.webkitSpeechRecognition;
          
    //     if (SpeechRecognition) {
    //       const recognitionInstance = new SpeechRecognition();
    //       recognitionInstance.continuous = true;
    //       recognitionInstance.interimResults = true;
    //       recognitionInstance.onresult = (event) => {
    //         const transcript = Array.from(event.results)
    //           .map((result) => result[0])
    //           .map((result) => result.transcript)
    //           .join("");
    //         setText(transcript);
    //         handleVoiceCommand(transcript);
    //       };
    //       setRecognition(recognitionInstance);
    //     } else {
    //       console.error("Speech Recognition API not supported in this browser.");
    //     }
    //   }, []);
    //   const startListening = () => {  
    //     console.log(recognition)  
    //     if (recognition) {
    //       setIsListening(true);
    //       recognition.start();
    //     }
    //   };
    //   const stopListening = () => {
    //     if (recognition) {
    //       setIsListening(false);
    //       recognition.stop();
    //     }
    //   };

    //   const handleVoiceCommand = (command) => {
    //     if (command.toLowerCase().includes("open pergola")) {
    //       sendCommandToESP8266("open");
    //     } else if (command.toLowerCase().includes("close pergola")) {
    //       sendCommandToESP8266("close");
    //     }
    //   };

    //   const sendCommandToESP8266 = (action) => {
    //     fetch(`http://<ESP8266_IP_ADDRESS>/control?state=${action}`)
    //       .then((response) => response.json())
    //       .then((data) => console.log(data))
    //       .catch((error) => console.error("Error:", error));
    //   };

    return (
        <>
            <Navbar isLoggedIn = {isLoggedIn}/>
            <section className="lg:h-screen flex flex-col pt-36 pb-16 justify-around items-center gap-16 lg:gap-0">
                <h2 className="text-2xl font-bold">Commande vocale</h2>
                <p className="w-10/12 lg:w-8/12 text-justify">
                    La commande vocale permet une interaction naturelle et intuitive avec les appareils,
                    facilitant ainsi l'exécution de tâches quotidiennes. Grâce à la reconnaissance vocale,
                    votre application peut comprendre et interpréter les instructions verbales de l'utilisateur,
                    comme "ouvrir la pergola" ou "fermer la pergola".
                    Cette technologie analyse la voix en temps réel et convertit les paroles en texte,
                    permettant une réponse rapide et précise du système. En intégrant cette fonctionnalité,
                    vous offrez une expérience utilisateur fluide et innovante,
                    où la voix devient le principal outil de contrôle.
                </p>
                    {/*<div>
                        <button onClick={isListening ? stopListening : startListening} className="flex text-white bg-[#060606] w-48 gap-3 justify-center items-center">
                            <img src={isListening ? voiceCapture : play} alt="icon" className="w-5" />
                            <span>{isListening ? "Stop Listening" : "Start Listening"}</span>
                        </button>
                        <p>{text}</p>
                    </div>*/}
                <SpeechRecognition/>
            </section>
        </>
    )
}

export default Voice
