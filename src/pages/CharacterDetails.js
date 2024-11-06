
import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { fetchCharacterDetails } from '../services/api';

function CharacterDetails() {
  const { id } = useParams();
  const [character, setCharacter] = useState(null);

  useEffect(() => {
    fetchCharacterDetails(id).then(data => setCharacter(data));
  }, [id]);

  if (!character) return <p>Loading...</p>;

  return (
    <div>
      <h1>{character.name}</h1>
      <p>Ano de aniversário: {character.birth_year}</p>
      <p>Gênero: {character.gender}</p>
      <p>Cor dos olhos: {character.eye_color}</p>
      {/* Exibir filmes */}
    </div>
  );
}

export default CharacterDetails;
