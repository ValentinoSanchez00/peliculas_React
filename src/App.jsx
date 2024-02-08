import { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import ContenedorMovies from './components/COntenedorMovies'
import { useGetMovie } from './services/hooks/useGetMovie'
import NoMovies from './components/NoMovies'



function App() {
  const [title, setTitle] = useState("")

  const { getMovies, movies } = useGetMovie(title)



  const handleSubmit = (event) => {
    event.preventDefault()
    getMovies()

  }
  const handleChange = (event) => {
    setTitle(event.target.value)
    console.log(title)
  }





  return (
    <>
      <div className='container'>
        <header className='header'>
          <h1>Pueba tecnica de OMBD</h1>
          <form onSubmit={handleSubmit} action="" className='form'>
            <input onChange={handleChange} value={title} className='form__input' type="text" />
            <button className='__form__button'> Enviar</button>
          </form>
        </header>
        <main className='main'>
          {movies ? <ContenedorMovies todaslasmovies={movies} ></ContenedorMovies> : <NoMovies></NoMovies>}
        </main>


      </div>


    </>
  )
}

export default App
