import React from 'react';
import './PrimeiraApp.css';

//function PrimeiraApp() {
//}

// const PrimeiraApp = () => {
// export const PrimeiraApp = (props) => {
//     return (
//         <>
//           <h2>Aula Inicial: 06 de Agosto</h2>
//           <h3>Introdução ao React</h3>
//           <h3>Bem-Vind@: {props.nome} - você tem {props.idade} anos</h3>
//         </>  
//     )
// }

export const PrimeiraApp = ({nome, idade}) => {
    return (
        <>
          <h2>Aula Inicial: 06 de Agosto</h2>
          <h3>Introdução ao React</h3>
          <h3>Bem-Vind@: {nome} - você tem {idade} anos</h3>
        </>  
    )
}

//export default PrimeiraApp;