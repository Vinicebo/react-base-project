import Base from "./Base";
import FotoCard from "../components/FotoCard/FotoCard";
import ListContainer from "../components/ListContainer/ListContainer";
import brutos from "../data/computadores.json";
import { useState } from "react";



const Fotos = () => {
  const [dados, setDados] = useState(brutos);

  const filtro = (entrada) => {
    setDados(brutos.filter(
            (ele) => ele.nome.includes(entrada) || ele.link_original.includes(entrada)
    ))
  }
 
  return (
      <Base>
      <input type="text"
        onChange={ (e) => filtro(e.target.value)}
      />
        <ListContainer>
          {dados.map(
            (el, index) => (
              <FotoCard 
                key={index}
                titulo={el.nome}
                src={`${process.env.PUBLIC_URL}/${el.url}`}
                link_original={el.link_original}
                agradecimento={el.agradecimento}
              />
              )
          )}
          </ListContainer>
      </Base>      
 )
};

export default Fotos;