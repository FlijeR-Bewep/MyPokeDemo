import './Pokemons.css'
import '../../utils/styles/global.css'
import { useFetch } from '../../utils/hooks'
import Card from '../Card/Card'
import React from 'react'

function Pokemons({updatePokemon}) {  
    const {data, isLoading, error} = useFetch('https://pokeapi.co/api/v2/pokemon?limit=4')

    if (error) {
        return <>              
                  <h2>Oups something wrong</h2>
                </>
    }
    else if (!isLoading && !data?.results) {
      return <>              
                <h2>No datas</h2>
              </>
    }

    const pokelist = data?.results

    return (
        <>
          {isLoading ? (
            <div className="LoaderWrap">
              <div className="Loader" data-testid="loader" />
            </div>
          ) : (
            <div>              
              <h2>Select your pokemon to highlight</h2> 
              <div className="CardsContainer">         
                {pokelist?.map((pokemon, index) => (
                  <div key={index}>
                    <Card pokemon={pokemon} updatePokemon={updatePokemon} />
                  </div>
                ))}
              </div>
            </div>
          )}
        </>
      )        
}

export default Pokemons