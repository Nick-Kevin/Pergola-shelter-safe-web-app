import { useState, useEffect } from "react"
import { useNavigate } from "react-router-dom";
import Navbar from "../../components/Navbar"
import TimeCommand from "../TimeCommand";

function Time () {
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
            <section className="lg:h-screen flex flex-col pt-48 md:pt-32 pb-16 justify-around items-center gap-16 lg:gap-0">
                <h2 className="text-2xl font-bold">Commande par temps</h2>
                <p className="w-10/12 lg:w-8/12 text-justify">
                    La commande par le temps permet aux utilisateurs de contrôler
                    l'ouverture et la fermeture des toits du pergola en fonction du temps.
                    Les utilisateurs entrent l'heure d'ouverture et de fermeture manuellement et
                    le pergola va automatiquement ouvrir et fermer en fonction de ces dernières.
                </p>
                <TimeCommand/>
            </section>
        </>
    )
}

export default Time
