import {getByRole, render, screen} from '@testing-library/react';
import Progress from '../page';
import { useRouter } from 'next/navigation';
import TestData from '../../../libs/dummyData/loginTestData.json';

jest.mock('next/navigation', () => ({
    useRouter: jest.fn()
}))

describe('Progress page', () =>  {
    it('should render header title, Level Up Dev', () => {    
        render(<Progress />);
        const text = screen.getByText("Level Up Dev");
        expect(text).toBeInTheDocument()
    })
    it('should render the Competency component Skills link', () => {    
        render(<Progress />);
        const link = screen.getByRole("link", {name: "Go to Skills Page"});
        expect(link).toHaveAttribute('href','/Action/Skills')
    })
    it('should render the header, Timeline of achievements', () => {    
        render(<Progress />);
        const text = screen.getByText("Timeline of achievements");
        expect(text).toBeInTheDocument()
    })
    it('should render the Sign out button in the navbar', () => {    
        render(<Progress />);
        const links = screen.queryAllByRole("link", {name: "Sign out"});
        expect(links[0]).toHaveAttribute('href','/')
    })
    it('should render the version info text', () => {    
        render(<Progress />);
        const texts = screen.queryAllByText("Version: 0");
        expect(texts[0]).toBeInTheDocument()
    })
    it('should render the delete button', () => {    
        render(<Progress />);
        const button = screen.getByRole("button", {name: "Clickable garbage can icon to delete account and sign out of app Click to delete account"});
        expect(button).toBeInTheDocument()
    })
})