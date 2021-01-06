import React, { useState } from 'react'
import styled from 'styled-components'

const AppContainer = styled.div`
  display: flex;
  justify-content: center;
  text-align: center;
  
`
const FolhaContainer = styled.div`
  height: 400px;
  width: 600px;
  box-shadow: 10px 10px 5px grey;
`

function App() {
  const [numeroAleatorio, setNumeroAleatorio ] = useState (0) 
  const GerarNumero = () =>{
      const Armazem = Math.floor(Math.random() * (100 - 1) + 1)
      setNumeroAleatorio (Armazem)
  }
  return (
   <AppContainer>
        <FolhaContainer>
            <h2> 
               Numero Aleatorio
            </h2>
            <h1>
              {numeroAleatorio}
            </h1>

            <p>
              Click no botao abaixo para gerar um numero aleatorio
            </p>
            <button onClick={GerarNumero}>Gerar</button>
        </FolhaContainer>   
   </AppContainer>
  );
}


export default App;
