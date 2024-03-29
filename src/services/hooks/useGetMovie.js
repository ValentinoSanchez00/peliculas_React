
import { useEffect, useState } from 'react'

export const useGetMovie=(titulo)=>{
    const [title,setTitle]=useState(titulo)
    const [movies,setMovie]=useState([])

    const getMovies=()=>{
      
  fetch ('https://www.omdbapi.com/?apikey=ca51684f&s='+titulo)
  .then ((data) => data.json())
  .then((result) => {
    console.log(result)
    setMovie(result.Search)
  });

    }
    
     return {
      getMovies,movies
     }
    
}