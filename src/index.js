import React from 'react';
import ReactDOM from 'react-dom';
//import { PrimeiraApp } from './PrimeiraApp';
import ContadorApp from './ContadorApp';

//const mensagem = 'Bem-vindo: Desenvolvimento Web para Dispositivos Móveis';
// const mensagem = <div>
//                     <h1>Bem-Vindo: Aula 1</h1>
//                     <h2>Desenvolvimento Web para Dispositivos Móveis</h2>
//                  </div>

// com Fragment precisa fazer import {Fragment}
// const mensagem = <Fragment>
//                     <h1>Bem-Vindo: Aula 1</h1>
//                     <h2>Desenvolvimento Web para Dispositivos Móveis</h2>
//                  </Fragment>

// const mensagem = <>
//                     <h1>Bem-Vindo: Aula 1</h1>
//                     <h2>Desenvolvimento Web para Dispositivos Móveis</h2>
//                  </>

// const root = document.querySelector('#root');

// ReactDOM.render(mensagem, root);

const root = document.querySelector('#root');

//ReactDOM.render(<PrimeiraApp nome="Ana Maria" idade="24" />, root);
ReactDOM.render(<ContadorApp />, root);