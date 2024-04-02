import {getByRole, render, screen} from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import Edit from '../page';
import { useRouter } from 'next/navigation';

jest.mock('next/navigation', () => {
    const router = {
      push: jest.fn(),
      query: {},
      pathname: '/Action/Projects',
      route: '/Action/Projects',
      back: jest.fn()
    }
    return {
      useRouter: jest.fn().mockReturnValue(router)
    }
})

describe('Edit page', () =>  {
    it('should render a page title, Edit Item', () => {
        render(<Edit params={{type: 'Projects', actionID : "5"}} />)
        const header = screen.getByRole("heading", {name: "Edit Item"});
        expect(header).toBeInTheDocument()
    })

    it('should render both input fields Reason & Title', () => {
        render(<Edit params={{type: 'Projects', actionID : "5"}} />)
        const inputTitle = screen.getByRole("textbox", {name: 'Title'});
        const inputReason = screen.getByRole("textbox", {name: 'Reason'});
        expect(inputTitle).toBeInTheDocument();     
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

    it('should render basic data like the Title', async () => {
        render(<Edit params={{type: 'Projects', actionID : "5"}} />)
        const inputTitle = screen.getByRole("textbox", {name: 'Title'});
        expect(inputTitle).toHaveValue("TODO app");
    });

    it('update an action item title from TODO app to Yardwork TODO APP ', async () => {
        render(<Edit params={{type: 'Projects', actionID : "5"}} />);
        const inputTitle = screen.getByRole("textbox", {name: 'Title'});
        await userEvent.clear(inputTitle);
        await userEvent.type(inputTitle, "Yardwork TODO APP");
        expect(inputTitle).toHaveValue("Yardwork TODO APP");

        const button = screen.getByRole("button", {name: "Update"});
        await userEvent.click(button);
        expect(useRouter().back).toHaveBeenCalledTimes(1); // Ensure button is clicked and navigate back.

        //expect(useRouter().route).toHaveBeenCalledWith('/Action/Projects')
        // const updatedActionItem = await screen.findByText("Yardwork TODO APP");
        // expect(updatedActionItem).toBeInTheDocument();

    })    
})