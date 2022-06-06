import './Card.css'

function Card({pokemon, updatePokemon}) {
    return (
        <div className="CardWrap">
            <span className="CardLabel">{pokemon.name}</span>
            <button onClick={() => updatePokemon(pokemon)}>Details</button>
        </div>
    )
}

export default Card