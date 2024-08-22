import VoiceRecognition from "../components/VoiceRecognition";
import TimeCommand from "./TimeCommand";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { useNavigate } from "react-router";
import { useEffect, useState } from "react";
import axios from "axios";
import SpeechRecognition from "./SpeechRecognition";

function VoiceCommand() {

    const navigate = useNavigate();
    const [isLoggedIn, setIsloggedIn] = useState(false)
    const [isChecked, setIsChecked] = useState(false)

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
    
    const handleVoiceCommand = (command) => {
        
        if (command == true) {
            console.log(command);
          sendCommandToESP8266("on");
        } else {
            console.log(command);
          sendCommandToESP8266("off");
        }
      };

    const sendCommandToESP8266 = (action) => {
        fetch(`http://192.168.10.106/led/${action}`)
          .then((response) => response.json())
          .then((data) => console.log(data))
          .catch((error) => console.error("Error:", error));
      }

    return (
        <div>
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
            <hr className="bg-[#00df9a] h-0.5" />
            <section className="lg:h-screen flex flex-col pt-10 pb-16 justify-around items-center gap-16 lg:gap-0">
                <h2 className="text-2xl font-bold">Commande manuelle</h2>
                <p className="w-10/12 lg:w-8/12 text-justify">
                    La commande manuelle offre aux utilisateurs un contrôle
                    direct et précis de leurs appareils, en leur permettant
                    d'interagir avec l'interface via des boutons,
                    des interrupteurs ou des commandes tactiles.
                    Cette méthode de contrôle est simple et familière,
                    garantissant une réponse immédiate et fiable à chaque action.
                    Dans le contexte de votre application, les utilisateurs
                    peuvent choisir d'ouvrir ou de fermer la pergola manuellement,
                    en appuyant sur un bouton dédié. Cette approche traditionnelle
                    de commande reste un élément essentiel, offrant une alternative fiable
                    et complémentaire à la commande vocale.
                </p>
                <div className="flex items-center justify-around px-3 lg:px-0 w-10/12 lg:w-7/12 bg-slate-100 py-3 rounded-lg">
                    <div className="text-start">
                        <h6 className="font-bold pb-2">Ouvrir</h6>
                        <p className="text-xs">Vous pouvez ouvrir(angle maximale) et fermer les lames de la pergola en cochant le bouton.</p>
                    </div>
                    <label className="inline-flex items-center cursor-pointer">
                        <input type="checkbox" checked ={isChecked} className="sr-only peer" onChange={(e)=>{handleVoiceCommand(e.target.checked); setIsChecked(!isChecked)}} />
                        <div className="relative w-11 h-6 bg-gray-200 rounded-full peer peer-focus:ring-4 peer-focus:ring-blue-300 dark:peer-focus:ring-blue-800 dark:bg-gray-700 peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-0.5 after:start-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-blue-600"></div>
                    </label>
                </div>
                <div className="w-7/12">
                    <h3 className="mb-4 font-semibold text-gray-900 dark:text-white">Identification</h3>
                    <ul className="items-center w-full text-sm font-medium text-gray-900 bg-white border border-gray-200 rounded-lg sm:flex dark:bg-gray-700 dark:border-gray-600 dark:text-white">
                        <li className="w-full border-b border-gray-200 sm:border-b-0 sm:border-r dark:border-gray-600">
                            <div className="flex items-center ps-3">
                                <input id="horizontal-list-radio-license" type="radio" value="" name="list-radio" className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-700 dark:focus:ring-offset-gray-700 focus:ring-2 dark:bg-gray-600 dark:border-gray-500" />
                                <label for="horizontal-list-radio-license" className="w-full py-3 ms-2 text-sm font-medium text-gray-900 dark:text-gray-300">-90deg </label>
                            </div>
                        </li>
                        <li className="w-full border-b border-gray-200 sm:border-b-0 sm:border-r dark:border-gray-600">
                            <div className="flex justify-around items-center ps-3">
                                <input id="horizontal-list-radio-id" type="radio" value="" name="list-radio" className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-700 dark:focus:ring-offset-gray-700 focus:ring-2 dark:bg-gray-600 dark:border-gray-500" />
                                <label for="horizontal-list-radio-id" className="w-full py-3 ms-2 text-sm font-medium text-gray-900 dark:text-gray-300">-60deg</label>
                            </div>
                        </li>
                        <li className="w-full border-b border-gray-200 sm:border-b-0 sm:border-r dark:border-gray-600">
                            <div className="flex justify-around items-center ps-3">
                                <input id="horizontal-list-radio-military" type="radio" value="" name="list-radio" className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-700 dark:focus:ring-offset-gray-700 focus:ring-2 dark:bg-gray-600 dark:border-gray-500" />
                                <label for="horizontal-list-radio-military" className="w-full py-3 ms-2  text-sm font-medium text-gray-900 dark:text-gray-300">-30deg</label>
                            </div>
                        </li>
                        <li className="w-full border-b border-gray-200 sm:border-b-0 sm:border-r dark:border-gray-600">
                            <div className="flex items-center ps-3">
                                <input id="horizontal-list-radio-passport" type="radio" value="" defaultChecked name="list-radio" className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-700 dark:focus:ring-offset-gray-700 focus:ring-2 dark:bg-gray-600 dark:border-gray-500" />
                                <label for="horizontal-list-radio-passport" className="w-full py-3 ms-2 text-sm font-medium text-gray-900 dark:text-gray-300">0deg</label>
                            </div>
                        </li>
                        <li className="w-full border-b border-gray-200 sm:border-b-0 sm:border-r dark:border-gray-600">
                            <div className="flex items-center ps-3">
                                <input id="horizontal-list-radio-passport" type="radio" value="" name="list-radio" className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-700 dark:focus:ring-offset-gray-700 focus:ring-2 dark:bg-gray-600 dark:border-gray-500" />
                                <label for="horizontal-list-radio-passport" className="w-full py-3 ms-2 text-sm font-medium text-gray-900 dark:text-gray-300">30deg</label>
                            </div>
                        </li>
                        <li className="w-full border-b border-gray-200 sm:border-b-0 sm:border-r dark:border-gray-600">
                            <div className="flex items-center ps-3">
                                <input id="horizontal-list-radio-passport" type="radio" value="" name="list-radio" className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-700 dark:focus:ring-offset-gray-700 focus:ring-2 dark:bg-gray-600 dark:border-gray-500" />
                                <label for="horizontal-list-radio-passport" className="w-full py-3 ms-2 text-sm font-medium text-gray-900 dark:text-gray-300">60deg</label>
                            </div>
                        </li>
                        <li className="w-full border-b border-gray-200 sm:border-b-0 sm:border-r dark:border-gray-600">
                            <div className="flex items-center ps-3">
                                <input id="horizontal-list-radio-passport" type="radio" value="" name="list-radio" className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-700 dark:focus:ring-offset-gray-700 focus:ring-2 dark:bg-gray-600 dark:border-gray-500" />
                                <label for="horizontal-list-radio-passport" className="w-full py-3 ms-2 text-sm font-medium text-gray-900 dark:text-gray-300">90deg</label>
                            </div>
                        </li>
                    </ul>
                </div>
            </section>
            <hr className="bg-[#00df9a] h-0.5" />
            <section className="lg:h-screen flex flex-col pb-16 justify-around items-center gap-16 lg:gap-0">
                <h2 className="text-2xl font-bold">Commande par temps</h2>
                <p className="w-10/12 lg:w-8/12 text-justify">
                    La commande par le temps permet aux utilisateurs de contrôler
                    l'ouverture et la fermeture des toits du pergola en fonction du temps.
                    Les utilisateurs entrent l'heure d'ouverture et de fermeture manuellement et
                    le pergola va automatiquement ouvrir et fermer en fonction de ces dernières.
                </p>
                <TimeCommand/>
            </section>    
            <Footer/>         
        </div>
    )
}

export default VoiceCommand
