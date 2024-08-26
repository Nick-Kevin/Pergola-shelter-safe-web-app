import { useState, useEffect } from "react"
import { useNavigate } from "react-router-dom";
import Navbar from "../../components/Navbar"
import SpeechRecognition from "../SpeechRecognition";

function Voice () {
    const navigate = useNavigate();
    const [isLoggedIn, setIsloggedIn] = useState(false)

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
                <SpeechRecognition/>
            </section>
        </>
    )
}

export default Voice
