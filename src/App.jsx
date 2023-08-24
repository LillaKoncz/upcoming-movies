import { useState, useEffect } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css'
import { fetchMovies } from './movies';
import MovieList from './assets/components/MovieList';
import background from './assets/images/popcorn.jpg'

function App() {
 const [movies, setMovies] = useState([]);


 useEffect(() => {
  // Fetch films
  fetchMovies()
    .then(data => {
      // is therer data? if yes,we take the state : setMovies!
      if (data && data.results) {
        setMovies(data.results);
      }
    })
    .catch(error => {
      console.error('Error by fetching data : ', error);
    });
}, []); // empty array : it will run once.



  return (
    <>
      <MovieList movies={movies}/>
    </>
  )
}

export default App
