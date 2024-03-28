import {getByRole, render, screen} from '@testing-library/react';
import Action from '../page';

describe('Progress page', () =>  {
    it('should render the link to go back to the Progress Page', async () => {    
        render(<Action params={{action: 'Skills'}} />)

        const link = screen.getByRole("link", {name: "Go to Progress Page - default"});
        expect(link).toHaveAttribute('href','/Progress')
    })
});