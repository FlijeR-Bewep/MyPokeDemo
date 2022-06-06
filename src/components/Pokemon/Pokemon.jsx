import './Pokemon.css'
import '../../utils/styles/global.css'
import { useFetch } from '../../utils/hooks'

function Pokemon({pokemon}) {  
	const {data, isLoading, error} = useFetch(pokemon?.url)

	if (error) {
        return <>              
                  <h2>Oups something wrong</h2>
                </>
    }
    else if (!isLoading && !pokemon?.url) {
      return <>              
                <div className='PokeLabel' data-testid="noPoke">No selected pokemon</div>
              </>
    }
    return (	
		<>
			{isLoading ? (
				<div className="LoaderWrap">
					<div className="Loader" data-testid="loader" />
				</div>
				) : (	
				<div className='PokeWrap'>
					{pokemon && 
						<div>
							<div className='PokeTitle'>{pokemon.name}</div>
							<div className='PokeLabel'>Experience : {data.base_experience}</div>
							<div className='PokeLabel'>Height : {data.height}</div>
							<div className='PokeLabel'>Weight : {data.weight}</div>
						</div>				
					}
				</div>
			)}
		</>
    )
}

export default Pokemon