import * as PropTypes from 'prop-types'
import "./style.css"
import { useState, useEffect } from 'react';

function CardTrilha(dadosTrilha){
    return (
        <div className= "card_container">
        <h1>{dadosTrilha.nomeTrilha}</h1>
        <span>{dadosTrilha.cidade} / {dadosTrilha.estado}</span>
        <img width={200} src={dadosTrilha.urlImagem} alt="imagem trilha" />
        </div>
    )
}
const MinhaTelaDeTrilhas = () => {
    const { data, isLoading, error } = useFetch('./public/CardTrilha.json');
    if (isLoading) {
        return <div>Loading...</div>;
      }
    
      if (error) {
        return <div>Error: {error.message}</div>;
      }
    return (
      <div>
        <Header />
        <div className="container">
          {/* Renderiza os cards*/}
          <CardTrilha title="Trilha da costa da Lagoa" description="Descrição da Trilha 1" imageUrl="https://images.pexels.com/photos/18078207/pexels-photo-18078207/free-photo-of-forest-trail.png" />
        </div>
      </div>
    );
  };

const useFetch = (url) => {
    const [data, setData] = useState(null);
    const [isLoading, setIsLoading] = useState(true);
    const [error, setError] = useState(null);
  
    useEffect(() => {
      const fetchData = async () => {
        setIsLoading(true);
        try {
          const response = await fetch(url);
          if (!response.ok) {
            throw new Error('Failed to fetch data');
          }
          const result = await response.json();
          setData(result);
          setError(null);
        } catch (error) {
          setError(error);
          setData(null);
        } finally {
          setIsLoading(false);
        }
      };
  
      fetchData();
  
      // Cleanup function to abort fetch if component unmounts before completion
      return () => {
        controller.abort();
      };
    }, [url]);
  
    return { data, isLoading, error };
  };
//configuração de Prop-Types
CardTrilha.propTypes = {
    dadosTrilha: PropTypes.exact({
        nomeTrilha: PropTypes.string.isRequired,
        cidade: PropTypes.string.isRequired,
        estado: PropTypes.string.isRequired,
        duração: PropTypes.number.isRequired,
        trajeto: PropTypes.number.isRequired,
        dificuldade: PropTypes.string.isRequired,
        tipo: PropTypes.oneOf([ "caminhada / trekking", "ciclismo"]),
        nomeUsuario: PropTypes.string.isRequired,
        urlImagem: PropTypes.string.isRequired,

    })
}

export default CardTrilha
