import axios from 'axios';
import { API_BASE_URL } from '../constants/api.constants';

const fetchBooks = async () => {
  try {
    const response = await axios.get(`${API_BASE_URL}/books`);
    return response.data;
  } catch (error) {
    console.error('Error fetching books:', error);
    throw error;
  }
};

const fetchCharacters = async () => {
  try {
    const response = await axios.get(`${API_BASE_URL}/characters`);
    return response.data;
  } catch (error) {
    console.error('Error fetching characters:', error);
    throw error;
  }
};

const fetchHouses = async () => {
  try {
    const response = await axios.get(`${API_BASE_URL}/houses`);
    return response.data;
  } catch (error) {
    console.error('Error fetching houses:', error);
    throw error;
  }
};

export { fetchBooks, fetchCharacters, fetchHouses };
