import React,{useState,useEffect} from "react"; 

export default function Cartel() {
    const [ultimo, setUltimo] = useState('')

    useEffect(() => {
        return () => {
          setUltimo(JSON.parse(localStorage.getItem('datos')).nombre)
        }
      }, [ultimo])

    return (
        <div className="cartel">
            <h4>{ultimo}</h4>
        </div>
    )
}