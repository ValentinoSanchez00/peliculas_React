import React from 'react'
import Movie from './Movie'

export default function ContenedorMovies({todaslasmovies}) {
    
  return (
    
   todaslasmovies.map((movie) => <Movie key={movie.imdbID} pelicula={movie}></Movie>)

  )
}
