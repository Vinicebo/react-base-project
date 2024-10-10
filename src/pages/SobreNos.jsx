import Cartao from "../components/Cartao/Cartao";
import styled from "styled-components";
import Base from "./Base";
import ListContainer from "../components/ListContainer/ListContainer";

const dados = [
    {
        titulo:"Um título do Array",
        texto:"Um teto gande do array"

    },
    {
        titulo:"Um outro título do Array",
        texto:"Um outro texto gande do array"

    },

]



const SobreNos = () => (

    <Base>
        <ListContainer>

            {
                dados.map( (ele, i) => (
                    <Cartao
                    key = {i}
                    titulo = {ele.titulo}
                    texto = {ele.texto}
                />
            ))
            }
        </ListContainer>
    </Base>
            
    
);


export default SobreNos;