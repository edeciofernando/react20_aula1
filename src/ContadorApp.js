import React, { useState } from 'react';

const ContadorApp = () => {
    
    // declara-se a variável e a function que irá manipular esta variável
    // dentro do () do useState, coloca-se o valor inicial da variável
    const [contador, setContador] = useState(0);

    // formas de criar functions em JavaScript
    const soma = () => {
        setContador(contador +1);
    }

    function limpa() {
        setContador(0);
    }

    const subtrai = () => setContador(contador-1);

    return (
        <>
          <h1>Componente: Contador de Cliques</h1>
          <h2>Você clicou {contador} vezes</h2>

          <button onClick={soma}>+1</button>
          <button onClick={limpa}>Limpar</button>
          <button onClick={subtrai}>-1</button>
        </>
    )
}

export default ContadorApp;
