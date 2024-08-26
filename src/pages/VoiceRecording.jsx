import {useState, useEffect} from 'react'
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

function VoiceRecording() {
    const [isLoggedIn, setIsloggedIn] = useState(false)
    const [recordResponse, setrecordResponse] = useState("")
    const [otherActionResponse, setotherActionResponse] = useState("")

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

    const sendStartRecordingToESP32 = (action) => {
        console.log("coucou")
        fetch(`http://192.168.164.61/start-recording/${action}`, {
            method: 'GET',
        })
          .then((response) => response.text())
          .then((data) => {() => console.log('Raw response:', data); setrecordResponse(data)})
          .catch((error) => {setrecordResponse("Erreur de l'enregistrement"); console.log(error)});
    }

    const sendOtherActionToEsp32 = (action) => {        
        fetch(`http://192.168.164.61/${action}`)
          .then((response) => response.json())
          .then((data) => {() => setotherActionResponse(data)})
          .catch((error) => {() => {setotherActionResponse(`Erreur de l'enregistrement ${error}`); console.log(error)}});
    }

    return (
        <div>
            <Navbar isLoggedIn = {isLoggedIn}/>
            <section className='h-screen flex flex-col justify-center items-center px-5 sm:px-20 lg:px-40 gap-16'>
                <h2 className="text-2xl font-bold">Capturer ma voix</h2>
                <p className='w-11/12 md:w-10/12 lg:w-8/12 text-xl'>Cette page est spécialement conçue pour capturer les commandes vocales "fermeture" et "ouverture" nécessaires à l'entraînement du modèle d'apprentissage automatique.</p>
                <div>
                    <div className='flex items-center gap-7'>
                        <p>Enregistrer</p>
                        <div className='flex items-center gap-4'>
                            <button className='py-2 w-40 hover:border-transparent border-2 mb-3 rounded bg-[#00df9a] hover:bg-[#00cf8a]' onClick={() => sendStartRecordingToESP32("ouverture")}>
                                Ouverture
                            </button>
                            <button className='py-2 w-40 hover:border-transparent border-2 mb-3 rounded bg-[#00df9a] hover:bg-[#00cf8a]' onClick={() => sendStartRecordingToESP32("fermeture")}>
                                Fermeture
                            </button>
                        </div>
                        {recordResponse ? (<p>{recordResponse}</p>) : ""}
                    </div>
                    <p className='text-sm'><span className='font-bold'>NB:</span> Disez "Ouverture" ensuite "Fermeture" pour l'enregistrement.</p>
                </div>
            </section>
            <hr className="bg-[#00df9a] h-0.5" />
            <section className='h-screen flex flex-col justify-center items-center px-5 sm:px-20 lg:px-40 gap-16'>
                <h2 className="text-2xl font-bold">Apprentissage</h2>
                <p className='w-11/12 md:w-10/12 lg:w-8/12 text-xl'>Ici le modèle que vous avez entrer va être entraîner.</p>
                <div>
                    <div className='flex items-center gap-7'>
                        <p>Enregistrer</p>
                        <div className='flex items-center gap-4'>
                            <button className='py-2 w-40 hover:border-transparent border-2 mb-3 rounded bg-[#00df9a] hover:bg-[#00cf8a]' onClick={() => sendOtherActionToEsp32("start-training")}>
                                Apprendre
                            </button>
                        </div>
                        {otherActionResponse ? (<p>{otherActionResponse}</p>) : ""}
                    </div>
                    <p className='text-sm'><span className='font-bold'>NB:</span> Disez "Ouverture" ensuite "Fermeture" pour l'enregistrement.</p>
                </div>
            </section>
            <hr className="bg-[#00df9a] h-0.5" />
            <section className='h-screen flex flex-col justify-center items-center px-5 sm:px-20 lg:px-40 gap-16'>
                <h2 className="text-2xl font-bold">Reconnaissance en utilisant l'IA</h2>
                <p className='w-11/12 md:w-10/12 lg:w-8/12 text-xl'>Effctuer la reconnaissance.</p>
                <div>
                    <div className='flex items-center gap-7'>
                        <p>Enregistrer</p>
                        <div className='flex items-center gap-4'>
                            <button className='py-2 w-40 hover:border-transparent border-2 mb-3 rounded bg-[#00df9a] hover:bg-[#00cf8a]' onClick={() => sendOtherActionToEsp32("start-recognition")}>
                                Reconnaissance
                            </button>
                        </div>
                        {otherActionResponse ? (<p>{otherActionResponse}</p>) : ""}
                    </div>
                    <p className='text-sm'><span className='font-bold'>NB:</span> Disez "Ouverture" ensuite "Fermeture" pour l'enregistrement.</p>
                </div>
            </section>
            <Footer />
        </div>
    )
}

export default VoiceRecording;
