import logo from './logo.svg'
import { useEffect } from 'react'
import './App.css'
import Mensaje from './components/mensaje'
import Formulario from './components/form/Form'
import Cartel from './components/cartel'
import Context,{ UserContextProvider } from './context/useContextStorage'
import React from 'react'


function App() {

  useEffect(() => localStorage.setItem('datos',JSON.stringify({"nombre":"..."}))

  ,[])

  return (
      <Context.Provider value={{}}>
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <Mensaje 
            className="msj"
          />
          <UserContextProvider>
            <Formulario />
            <h3>Last word saved: </h3>
            <Cartel />
          </UserContextProvider>
        </header>
      </div>
      </Context.Provider>
  )
}



export default App
