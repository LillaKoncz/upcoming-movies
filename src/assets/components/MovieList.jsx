import React from 'react'
import '../../App.css'

const MovieList = ({movies}) => {
  return (
    <div className='movie-list'>
    <h1 className='title'>Upcoming movies</h1>
      <ul className='unorded-list'>
        {movies.map((movie, index) => (
         <li className='list' key={index}><span className='movie-title'>{movie.title}</span>
         <p className='overview fw-light p-2'>{movie.overview}</p>
         <p className='release-date'> Release date : {movie.release_date}</p></li>
         ))}
      </ul>
    </div>
  )
}

export default MovieList

