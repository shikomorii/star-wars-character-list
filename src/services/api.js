import axios from 'axios';

const api = axios.create({
  baseURL: 'https://swapi.dev/api/',
});

// Função para buscar todos os personagens de todas as páginas
export const fetchAllCharacters = async (url = 'people/', allCharacters = []) => {
  try {
    const response = await api.get(url);
    const data = response.data;

    // Adiciona os personagens da página atual
    allCharacters = [...allCharacters, ...data.results];

    // Se houver uma próxima página, faz a requisição recursiva
    if (data.next) {
      const nextPageUrl = data.next.replace(api.defaults.baseURL, ''); // Remove a baseURL para chamadas subsequentes
      return fetchAllCharacters(nextPageUrl, allCharacters);
    } else {
      return allCharacters; // Retorna todos os personagens quando next é null
    }
  } catch (error) {
    console.error("Erro ao buscar todos os personagens:", error);
    return allCharacters;
  }
};

// Função para buscar personagens por nome (busca específica)
export const fetchCharacters = async (name) => {
  try {
    const response = await api.get(`people/?search=${name}`);
    return response.data.results;
  } catch (error) {
    console.error("Erro ao buscar personagens:", error);
    return [];
  }
};

// Função para buscar detalhes de um personagem específico por ID
export const fetchCharacterDetails = async (id) => {
  try {
    const response = await api.get(`people/${id}/`);
    return response.data;
  } catch (error) {
    console.error("Erro ao buscar detalhes do personagem:", error);
    return null;
  }
};
