import { useContext, useState } from "react"
import { UsuariosContext } from "../context/UsuariosContext"
import styles from "./Cadastro.module.css"
import {Button} from "@mui/material"
import { TextFields } from "@mui/icons-material"
import CButton from "../components/atoms/Button/CButton"
import Input from "../components/atoms/input/Input"

function cadastro(){
  
  const [novousuario, setUsuario] = useState({
    nome:"",
    email:""
  })

  const {usuarios, setUsuarios} = useContext(UsuariosContext)

  function CadastrarUsuario(){
    setUsuarios([...usuarios,novousuario])
  }
  
  return (
    <>
    <div className={styles.card}>
      <h1>Cadastro</h1>
    </div>
      <TextField 
      label="Nome do usuario"
      sx={{"m": 2}}
      value={novousuario.nome}onChange={() =>
      setUsuario({...novousuario, nome: evento.target.value})}
      />
      <TextField 
      label="Email do usuario"
      sx={{"m": 2}}
      value={novousuario.email}onChange={() =>
      setUsuario({...novousuario, email: ""})}
        />
      <Button variant="contained" sx={{"mt": 3}}>Cadastrar</Button>
      <h1>Página cadastro</h1>
      <h3>Contador: {count}</h3>
      <button onClick={() => dispatch({type: "ADD"})}>Adicionar</button>
      <button onClick={() => dispatch({type: "REMOVE"})}>Remover</button>
      <button onClick={() => dispatch({type: "MULTIPLY"})}>Dobrar</button>
    </>
    )
  }
  
  export default cadastro