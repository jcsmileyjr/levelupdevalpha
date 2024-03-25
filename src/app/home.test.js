import {getByRole, render, screen} from '@testing-library/react';
import Home from './page';

describe('Home', () =>  {
    it('should render header title Level Up Dev', () => {
        render(<Home />)
        const header = screen.getByRole("heading", {name: "Level Up Dev"});
        expect(header).toBeInTheDocument()
    })
})