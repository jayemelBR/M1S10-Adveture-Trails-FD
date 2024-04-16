/**
 * passos para criar um contexto
 * 
 * 1 * [] = importe o createContext do REACT
 * 2 * [] = Criar a Variavel do CONTEXTO
 * 3 * [] = Exportar a Varavel do CONTEXTO
 * 4 * [] crie a variavel do PROVIDER
 * 5 * receba a prop childer
 * 6 * [] Defina os dados globais
 * 7 * [] CRIE O JSX DO PROVIDER E PASSE OS DADOS GLOBAIS NA PROP VALUE
 * 8 * importe o provider no arquivo App.Jsx
 */

import {createContext, useReducer} from "react"

export const UsuariosContext = createContext()

export const UsuariosContextProvider = ({children}) => {
 const [usuarios, setUsuarios] = useState([
    {
        nome: 'Jorge',
        email: 'jorge@peão.com'
    },
    {
        nome: 'Guilherme',
        email: 'gui@peão.com'
    },
    {
        nome: 'Bruno',
        email: 'bruno@peão.com'
    }
 ])
 
  const [count, dispatch] = useReducer(reducer, 0)

  function reducer(state, action){
    switch(action.type){
        case "ADD":
            return state +1;
        case "REMOVE":
            return state -1
        case "MULTIPLY":
            return state *2
    }
}
    return (
    <UsuariosContext.provider value={{usuarios,setUsuarios}}>
        {children}
    </UsuariosContext.provider>
 )
}