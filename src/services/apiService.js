// services/apiService.js

import axios from 'axios';

const BASE_URL = 'https://www.anapioficeandfire.com/api';

const api = axios.create({
  baseURL: BASE_URL,
  headers: {
    'Content-Type': 'application/json',
  },
});

// Function to fetch books with pagination
export const fetchBooks = async (page = 1, pageSize = 10) => {
  try {
    const response = await api.get(`/books?page=${page}&pageSize=${pageSize}`);
    return response.data;
  } catch (error) {
    console.error("Error fetching books:", error);
    return [];
  }
};

// Function to fetch characters with pagination
export const fetchCharacters = async (page = 1, pageSize = 10) => {
  try {
    const response = await api.get(`/characters?page=${page}&pageSize=${pageSize}`);
    return response.data;
  } catch (error) {
    console.error("Error fetching characters:", error);
    return [];
  }
};

// Function to fetch houses with pagination
export const fetchHouses = async (page = 1, pageSize = 10) => {
  try {
    const response = await api.get(`/houses?page=${page}&pageSize=${pageSize}`);
    return response.data;
  } catch (error) {
    console.error("Error fetching houses:", error);
    return [];
  }
};


