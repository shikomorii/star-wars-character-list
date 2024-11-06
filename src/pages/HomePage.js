import React, { useState, useEffect } from 'react';
import { fetchAllCharacters, fetchCharacters } from '../services/api';
import characterImages from './characters.json';
import './styles.css';

function HomePage() {
  const [characters, setCharacters] = useState([]);
  const [search, setSearch] = useState('');
  const [allCharacters, setAllCharacters] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [selectedCharacter, setSelectedCharacter] = useState(null);

  useEffect(() => {
    const loadAllCharacters = async () => {
      const allChars = await fetchAllCharacters();
      setAllCharacters(allChars);
      setCharacters(allChars);
      setIsLoading(false);
    };

    loadAllCharacters();
  }, []);

  // Atualiza a lista de personagens com base na pesquisa
  useEffect(() => {
    if (search.trim() === '') {
      // Mostra todos os personagens quando a busca está vazia
      setCharacters(allCharacters);
    } else {
      const searchCharacters = async () => {
        const filteredCharacters = await fetchCharacters(search);
        setCharacters(filteredCharacters);
      };
      searchCharacters();
    }
  }, [search, allCharacters]);

  // Criação do efeito visual das estrelas no fundo da página
  useEffect(() => {
    const createStars = () => {
      const starCount = 100;
      const starsContainer = document.body;

      for (let i = 0; i < starCount; i++) {
        const star = document.createElement('div');
        star.classList.add('star');
        const size = Math.random() * 3 + 1;
        star.style.width = `${size}px`;
        star.style.height = `${size}px`;
        star.style.top = `${Math.random() * 100}vh`;
        star.style.left = `${Math.random() * 100}vw`;
        starsContainer.appendChild(star);
      }
    };

    createStars();
  }, []);

  // Efeito para criar um sabre de luz que segue o mouse
  useEffect(() => {
    const sabre = document.createElement('div');
    sabre.classList.add('sabre');
    document.body.appendChild(sabre);

    const handleMouseMove = (e) => {
      sabre.style.left = `${e.pageX}px`;
      sabre.style.top = `${e.pageY}px`;
    };

    document.addEventListener('mousemove', handleMouseMove);

    return () => {
      document.removeEventListener('mousemove', handleMouseMove);
      document.body.removeChild(sabre);
    };
  }, []);

  const openModal = (character) => {
    Promise.all(character.films.map(filmUrl => fetch(filmUrl).then(res => res.json())))
      .then(filmData => {
        setSelectedCharacter({
          ...character,
          films: filmData.map(film => ({
            title: film.title,
            release_date: film.release_date
          }))
        });
      });
  };

  const closeModal = () => {
    setSelectedCharacter(null);
  };

  return (
    <div>
      <div className="header">Star Wars</div>
      <div className="search-container">
        <input
          type="text"
          placeholder="Buscar personagem"
          value={search}
          onChange={(e) => setSearch(e.target.value)} // Atualiza o estado da busca
        />
      </div>

      {isLoading ? (
        <div>Carregando personagens...</div>
      ) : (
        <ul className="character-list">
          {characters.map(character => {
            const imageUrl = characterImages[character.name];
            return (
              <li key={character.name} className="character-item" onClick={() => openModal(character)}>
                {imageUrl && (
                  <img src={imageUrl} alt={character.name} className="character-image" />
                )}
                <span>{character.name}</span>
              </li>
            );
          })}
        </ul>
      )}

      {selectedCharacter && (
        <div className="modal-overlay" onClick={closeModal}>
          <div className="modal-content" onClick={(e) => e.stopPropagation()}>
            <img src={characterImages[selectedCharacter.name]} alt={selectedCharacter.name} className="character-full-image" />
            <div className="character-details">
              <h2>{selectedCharacter.name}</h2>
              <p><strong>Ano de Aniversário:</strong> {selectedCharacter.birth_year || "N/A"}</p>
              <p><strong>Gênero:</strong> {selectedCharacter.gender}</p>
              <p><strong>Cor dos Olhos:</strong> {selectedCharacter.eye_color}</p>
              <h3>Filmes:</h3>
              <ul>
                {selectedCharacter.films.map((film, index) => (
                  <li key={index}>
                    <strong>Título:</strong> {film.title} - <strong>Data de Lançamento:</strong> {film.release_date}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default HomePage;
