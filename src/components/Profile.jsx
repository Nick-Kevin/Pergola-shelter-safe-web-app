import { useEffect, useState } from "react";
import { useNavigate } from "react-router";
import axios from "axios";
import Logout from "./Logout";
import Navbar from "./Navbar";


function Profile(){
    
    const navigate = useNavigate()
    const [email,setEmail] = useState('')
    useEffect(()=>{
        const getInformation = async ()=>{

            const token = localStorage.getItem('authToken')

            if(!token){
                navigate('/Pergola-shelter-safe-web-app/login')
                return;
            }

            try{
                const response = await axios.get('http://localhost:5000/userInfos',{
                    headers:{
                        Authorization:`${token}`
                    } 
                });
                setEmail(response.data.email)
    
            } catch(error){
                console.log("Error Authentification !",error)
                navigate('/Pergola-shelter-safe-web-app/login');
            }
        }
        getInformation()
    
    })
    return(
        <>
        <div>
        <Navbar/>
        </div>
        
        <div>
            <Logout email={email}/>
        </div>
        
        </>
    )

}

export default Profile;