import React,{  useState, useEffect } from 'react';
import styled from '@emotion/styled';
import Phrase from './components/Phrase';

const Container = styled.div`
  display: flex;
  align-items: center;
  padding-top: 5rem;
  flex-direction: column;
`;

const Button = styled.button`
  background: -webkit-linear-gradient(top left, #007D35 0%, #007D35 40%, #0F574D 100%);
  background-size: 300px;
  font-family: Arial, Helvetica, sans-serif;
  color: #FFF;
  margin-top: 3rem;
  padding: 1rem 3rem;
  font-size: 2rem;
  border: 2px solid black;
  transition: background-size .8s ease;
  :hover { 
    cursor: pointer;
    background-size: 400px;
  }
`;

function App() {

  const [phrase, setPhrase] = useState({});

  const getPhrase = async (e) => {
    const phraseFromAPI = await fetch('https://breakingbadapi.com/api/quote/random').then(response => {
      return response.json();
    });
    setPhrase(phraseFromAPI[0]);
  }

  useEffect(() => {
    getPhrase();
  }, []);

  return (
    <Container>
      <Phrase
        phrase={phrase}
      />
      <Button
        onClick={getPhrase}
      >
        Obtener Frase
      </Button>
    </Container>
  );
}

export default App;
