
import '@testing-library/jest-dom/extend-expect'
import { waitForElementToBeRemoved, screen, render } from '@testing-library/react'
import Pokemons from './Pokemons'
    
it('Should display products names after loader is removed', async () => {
    render(<Pokemons />)

    await waitForElementToBeRemoved(() => screen.queryByTestId('loader'))
    expect(screen.getByText('bulbasaur')).toBeInTheDocument()
    expect(screen.getByText('ivysaur')).toBeInTheDocument()
    expect(screen.queryByTestId('loader')).not.toBeInTheDocument()
})