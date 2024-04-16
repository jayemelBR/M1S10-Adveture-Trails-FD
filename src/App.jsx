import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import CardTrilha from './components'
import Navbar from "../components/Navbar"
import {Outlet} from "react-router-dom"
import { UsuariosContextProvider } from './context/UsuariosContext'

function App() {
  const listaTrilhas = [
    {
      nomeTrilha: "Trilha da costa da Lagoa",
      Cidade: "Florianópolis",
      Estado: "SC",
      duração: "120",
      Trajeto: "4",
      dificuldade: "iniciante",
      tipo: "caminhada / trekking",
      nomeUsuario: "Jorge Luz",
      urlImagem: "https://images.pexels.com/photos/18078207/pexels-photo-18078207/free-photo-of-forest-trail.png"
    }
  ]


  return (
    <>
    <Navbar />

    <Outlet />
    {
      listaTrilhas.map((trilha, index) => (
        <CardTrilha dadosTrilha = {trilha} key={index} />
      ))
    }
    <UsuariosContextProvider/>
    </>
  )
}

export default App
