import { useEffect, useState } from "react";
import axios from "axios";
import { FiClock } from "react-icons/fi";

const TimeCommand = ()=>{

    const [turnOnTime, setTurnOnTime] = useState('')
    const [turnOffTime, setTurnOffTime] = useState('')


    function handleSubmit(e){
        console.log(turnOnTime, turnOffTime)
        e.preventDefault();
        async function sendData(){
            await axios.post('http://192.168.10.106/setTimes',{turnOnTime, turnOffTime}
            ).then((response)=>{
                console.log(response);
            }).catch((error)=>{
                console.error('error:', error);
        })

        }
        sendData();
    }   



return(
    <>
    <form onSubmit={handleSubmit} className="w-96 flex flex-col items-center">
        <div className="w-full flex justify-around mb-10 ">
            <label htmlFor="">Heure d'allumage :</label>
            <input type="time" 
                value={turnOnTime}
                onChange={(e)=>setTurnOnTime(e.target.value+":00")}
             />
           
        </div>

        <div className="w-full flex justify-around mb-10 ">
            <label htmlFor="">Heure d'extinction :</label>
             <input type="time"
                value={turnOffTime}
                onChange={(e)=>setTurnOffTime(e.target.value+":00")}
             />
            
            
        </div>
        <div className="mb-5 flex justify-center">
            <button className="shadow-lg text-white bg-[#060606]" type="submit">
                Mettre à jour
            </button>
        </div>
        
    </form>   
    </>
)

}

export default TimeCommand;