import { useState } from 'react'
import rickAndMortyImage from './img/image.png'
import './App.css'

function App() {
  const [characters, setCharacters] = useState([])
  const [isLoading, setIsLoading] = useState(false)
  const [error, setError] = useState('')

  async function handleSearch() {
    setIsLoading(true)
    setError('')

    try {
      const response = await fetch('https://rickandmortyapi.com/api/character')

      if (!response.ok) {
        throw new Error(`La solicitud falló con el estado ${response.status}`)
      }

      const data = await response.json()
      setCharacters(data.results)
    } catch (requestError) {
      console.error('No se pudieron cargar los personajes:', requestError)
      setError('No se pudieron cargar los personajes. Inténtalo de nuevo.')
    } finally {
      setIsLoading(false)
    }
  }

  return (
    <main>
      <header>
        <h1 className="title">Rick and Morty</h1>
        <p>Descubre a los personajes de la serie.</p>
        <img
          src={rickAndMortyImage}
          alt="Rick y Morty"
          className="img-home"
        />
      </header>

      <section className="characters" aria-labelledby="characters-title">
        <h2 id="characters-title">Personajes</h2>
        <button
          type="button"
          className="btn-search"
          onClick={handleSearch}
          disabled={isLoading}
        >
          {isLoading ? 'Cargando...' : 'Buscar personajes'}
        </button>

        {error && <p role="alert">{error}</p>}

        {characters.length > 0 && (
          <div className="container-characters" aria-live="polite">
            {characters.map((character) => (
              <article className="character-container" key={character.id}>
                <div>
                  <img src={character.image} alt={`Retrato de ${character.name}`} />
                </div>
                <div>
                  <h3>{character.name}</h3>
                  <h6>
                    <span className={character.status.toLowerCase()} />
                    {character.status} - {character.species}
                  </h6>
                  <p className="text-grey">Última ubicación conocida:</p>
                  <p>{character.location.name}</p>
                </div>
              </article>
            ))}
          </div>
        )}
      </section>
    </main>
  )
}

export default App
