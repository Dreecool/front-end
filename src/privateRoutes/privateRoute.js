import { useEffect, useRef, useState } from 'react';
import { Outlet, Navigate } from 'react-router-dom';
import Axios from 'axios';



const PrivateRoutes = () => {

 

  const [isAuthenticated, setIsAuthenticated] = useState(true);

  const data = useRef()

  Axios.defaults.withCredentials = true
  

  useEffect(() => {

    Axios.get("https://chat-app-backend-jdg9.onrender.com/LoggedIn").then((response) => {

    console.log(response)
      
    data.current = response.data.Message

    if(data.current === "Authorized") {

      setIsAuthenticated(true)

    } else {

      setIsAuthenticated(false)

    }
   
    })

  
  })

  


  
  return isAuthenticated ? <Outlet /> : <Navigate to='/' />;

};

export default PrivateRoutes
