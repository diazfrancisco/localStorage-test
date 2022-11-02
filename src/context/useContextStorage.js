import React, {useState} from 'react'

const Context = React.createContext({});

export function UserContextProvider ({children}) {

  const dataStorage = JSON.parse(localStorage.getItem('datos')) && JSON.parse(localStorage.getItem('datos')).nombre

  const [nombre,setNombre] = useState( dataStorage )
  
  return <Context.Provider value ={{nombre, setNombre}}>
    {children}
  </Context.Provider>

}

export default Context


