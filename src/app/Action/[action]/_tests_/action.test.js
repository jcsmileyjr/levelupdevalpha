import {getByRole, render, screen} from '@testing-library/react';
import Action from '../page';

describe('Progress page', () =>  {
    it('should render the link to go back to the Progress Page', async () => {    
        render(<Action params={{action: 'Skills'}} />)
        const link = screen.getByRole("link", {name: "Go to Progress Page - default"});
        expect(link).toHaveAttribute('href','/Progress')
    })

    it('should render the Sign out button in the navbar', () => {    
        render(<Action params={{action: 'Skills'}} />)
        const links = screen.queryAllByRole("link", {name: "Sign out"});
        expect(links[0]).toHaveAttribute('href','/')
    })

    it('should render both input fields for Title and Reason', () => {
        render(<Action params={{action: 'Skills'}} />)

        const inputTitle = screen.getByRole("textbox", {name: 'Title'});
        expect(inputTitle).toBeInTheDocument();

        const inputReason = screen.getByRole("textbox", {name: 'Reason'});
        expect(inputReason).toBeInTheDocument();        
    })

    it('should render two buttons name ADD', () => {    
        render(<Action params={{action: 'Skills'}} />)
        const addButtons = screen.queryAllByRole("button", {name: "ADD"});
        expect(addButtons).toHaveLength(2);
    })

    it('should render select field to Find Skills', () => {
        render(<Action params={{action: 'Skills'}} />)
        const skillSelected = screen.getByRole("combobox", {name: 'Find Skills'});
        expect(skillSelected).toBeInTheDocument();        
    })

    it('should render select field to Select the Month Completed', () => {
        render(<Action params={{action: 'Skills'}} />)
        const monthSelected = screen.getByRole("combobox", {name: 'Month - Skill was completed'});
        expect(monthSelected).toBeInTheDocument();        
    })
});