import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/layout/Navbar';
import BookList from './components/features/books/BookList';
import CharacterList from './components/features/characters/CharacterList';
import HouseList from './components/features/houses/HouseList';
import Footer from './components/layout/Footer';
import useDataFetching from './hooks/useDataFetching';
import { fetchBooks, fetchCharacters, fetchHouses } from './services/apiService';
import './styles/variables.css';
import './styles/global.css';

function App() {
  const { data: books, loading: booksLoading, error: booksError } = useDataFetching(fetchBooks);
  const { data: characters, loading: charactersLoading, error: charactersError } = useDataFetching(fetchCharacters);
  const { data: houses, loading: housesLoading, error: housesError } = useDataFetching(fetchHouses);

  if (booksLoading || charactersLoading || housesLoading) {
    return <div className="loading">Loading...</div>;
  }

  if (booksError || charactersError || housesError) {
    return <div className="error">Error loading data. Please try again later.</div>;
  }

  return (
    <Router>
      <div className="App">
        <Navbar />
        <main>
          <Routes>
            <Route
              path="/"
              element={
                <div className="landing-page">
                  <div className="slider-container">
                    <div className="slider-image">
                      <img src="/images/slide1.jpg" alt="Game of Thrones Landscape 1" />
                    </div>
                    <div className="slider-image">
                      <img src="/images/slide2.jpg" alt="Game of Thrones Landscape 2" />
                    </div>
                  </div>
                  <div className="landing-content">
                    <h1>Explore the World of Ice and Fire</h1>
                    <p>
                      Dive into George R.R. Martin's epic universe. Discover detailed information about 
                      the books, characters, and noble houses that make up this rich fantasy world.
                    </p>
                    <div className="landing-links">
                      <a href="/books" className="landing-link">
                        Browse Books
                      </a>
                      <a href="/characters" className="landing-link">
                        Meet Characters
                      </a>
                      <a href="/houses" className="landing-link">
                        Discover Houses
                      </a>
                    </div>
                  </div>
                </div>
              }
            />
            <Route path="/books" element={<BookList books={books} />} />
            <Route path="/characters" element={<CharacterList characters={characters} />} />
            <Route path="/houses" element={<HouseList houses={houses} />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
