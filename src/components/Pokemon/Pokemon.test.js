import '@testing-library/jest-dom/extend-expect'
import { waitForElementToBeRemoved, screen, render } from '@testing-library/react'
import Pokemon from './Pokemon'

const pokemonMockedData = 
    {
      name: 'bulbasaur',
      url: 'https://pokeapi.co/api/v2/pokemon/1'
    }

it('Should display no product info', async () => {
    render(<Pokemon />)

    expect(screen.getByText('No selected pokemon')).toBeInTheDocument()
})
it('Should display product info', async () => {
    render(<Pokemon pokemon={pokemonMockedData} />)

    await waitForElementToBeRemoved(() => screen.queryByTestId('loader'))
    expect(screen.getByText('bulbasaur')).toBeInTheDocument()
    expect(screen.queryByTestId('noPoke')).not.toBeInTheDocument()
    expect(screen.queryByTestId('loader')).not.toBeInTheDocument()
})