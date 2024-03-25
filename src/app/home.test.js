import {getByRole, render, screen} from '@testing-library/react';
import Home from './page';

describe('Home', () =>  {
    it('should render header title, Level Up Dev', () => {
        render(<Home />)
        const header = screen.getByRole("heading", {name: "Level Up Dev"});
        expect(header).toBeInTheDocument()
    })

    it('should render first dummy data in the Timeline, TailwindCSS', () => {
        render(<Home />);
        const header = screen.queryAllByText('TailwindCSS');
        expect(header[0]).toBeInTheDocument();
    })

    it('should not render wrong data in the Timeline, Responsive Design', () => {
        render(<Home />);
        const header = screen.queryAllByText('Responsive Design');
        expect(header).toHaveLength(0);
    })

    it('should have a button link to the Log In Page', () => {
        render(<Home />);
        const link = screen.getByRole('link', {name : 'Click to go to Log in page'})
        expect(link).toHaveAttribute('href','/LogIn')
    })

    it('should have a button link to the Sign Up Page', () => {
        render(<Home />);
        const link = screen.getByRole('link', {name : 'Click to go to the Sign up page'})
        expect(link).toHaveAttribute('href','/SignUp')
    })
})