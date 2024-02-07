import React from 'react'

export default function ({pelicula}) {
  
  return (
    <div>
       <p>{pelicula.Title}</p>
        <img src={pelicula.Poster} alt="" />
    </div>
  )
}
