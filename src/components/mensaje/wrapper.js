import React from "react";
import { useEffect,useState } from "react";

const NoInternetConection = (props) => {
    const [isOnline, setOnline] = useState(true);

    useEffect(()=>{
        setOnline(navigator.onLine)
    },[])

    window.addEventListener('online',() => {
        setOnline(true)
    })

    window.addEventListener('offline',() => {
        setOnline(false)
    })

    if(isOnline){
        return(
            props.children
        )
    } else {
        return(<h1>Se ha desconectado Internet</h1>)
    }
}   

export default NoInternetConection;