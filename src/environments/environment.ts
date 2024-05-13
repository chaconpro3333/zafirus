const BASE_URL = 'https://gateway.marvel.com/';
const CHARACTERS = 'v1/public/characters'
const API_URL = {
  characters: `${BASE_URL}${CHARACTERS}`
};

const PUBLIC_KEY_API = 'cee9cfb2b1cdd681f71fbe361a702368';

export const environment = {
  production: false,
  url: API_URL,
  apiKey: PUBLIC_KEY_API,
};
