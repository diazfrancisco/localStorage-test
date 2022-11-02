import React,{useContext, useState} from "react";
import Context from '../../context/useContextStorage'

export default function Formulario() {
  
  const {nombre, setNombre}= useContext(Context)

  const [local, setLocal] = useState('')

  const onSubmit = (local) => {
    localStorage.setItem('datos',JSON.stringify({"nombre":local}))
    setNombre(local)
    setLocal('')
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    console.log(nombre)
    local && onSubmit(local)
  }

  const handleChange = (e) => {
    setLocal(e.target.value)
    console.log(local)
  }

  return(
    <form onSubmit={handleSubmit}>
      <label forhtml="nombre">Save a word</label>
      <input 
        type="text"
        id="nombre"
        onChange={handleChange}
        placeholder="Type a word"
      />          
      <button>Save in localStorage</button>
    </form>
  )
}