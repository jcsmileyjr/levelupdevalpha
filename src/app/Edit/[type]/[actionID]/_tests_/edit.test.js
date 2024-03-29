import {getByRole, render, screen} from '@testing-library/react';
import Edit from '../page';
import { useRouter } from 'next/navigation';

jest.mock('next/navigation', () => ({
    useRouter: jest.fn()
}))

describe('Edit page', () =>  {
    it('should render a page title, Edit Item', () => {
        render(<Edit params={{type: 'Projects', actionID : "5"}} />)
        const header = screen.getByRole("heading", {name: "Edit Item"});
        expect(header).toBeInTheDocument()
    })

    it('should render both input fields Reason', () => {
        render(<Edit params={{type: 'Projects', actionID : "5"}} />)
        const inputReason = screen.getByRole("textbox", {name: 'Reason'});
        expect(inputReason).toBeInTheDocument();        
    })

    it('should render select field for Month Completed', () => {
        render(<Edit params={{type: 'Projects', actionID : "5"}} />)
        const monthSelected = screen.getByRole("combobox", {name: 'Month completed'});
        expect(monthSelected).toBeInTheDocument();        
    })

    it('should render input field to Year completed', () => {
        render(<Edit params={{type: 'Projects', actionID : "5"}} />)
        const input = screen.getByRole("textbox", {name: 'Year completed'});
        expect(input).toBeInTheDocument();      
    })

    it('should render button for Update', () => {    
        render(<Edit params={{type: 'Projects', actionID : "5"}} />)
        const button = screen.getByRole("button", {name: "Update"});
        expect(button).toBeInTheDocument(); 
    })
})