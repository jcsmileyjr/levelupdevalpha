import {render, screen} from '@testing-library/react';
import LogIn from '../page';
import { useRouter } from 'next/navigation'; // Because the testing will break because without this

jest.mock('next/navigation', () => ({
    useRouter: jest.fn()
}))

describe('LogIn Page', () =>  {
    it('should render Email label and input field', () => {
        render(<LogIn />)
        const label = screen.getByLabelText("Email");
        expect(label).toBeInTheDocument()

        const input = screen.getByRole("textbox", {name: 'Email'});
        expect(input).toBeInTheDocument();
    })

    it('should render LogIn button', () => {
        render(<LogIn />)
        const button = screen.getByRole("button", {name: "Click to submit email for log in submission"});
        expect(button).toBeInTheDocument()
    })

    it('should render SignUp link', () => {
        render(<LogIn />)
        const link = screen.getByRole("link", {name: "No account, Sign Up"});
        expect(link).toHaveAttribute('href','/SignUp')
    })

    it('should render Timeline page text, Visual see all your Acheivements', () => {
        render(<LogIn />)
        const text = screen.getByText("Visual see all your Acheivements");
        expect(text).toBeVisible();
    })

    it('should render Timeline component text, Timeline', () => {
        render(<LogIn />)
        const text = screen.getByText("Timeline");
        expect(text).toBeInTheDocument()
    })

    it('should render a link that goes back to Landing page', () => {
        render(<LogIn />)
        const link = screen.getByRole("link", {name: "Go back to Landing Page"});
        expect(link).toHaveAttribute('href','/')
    })
})