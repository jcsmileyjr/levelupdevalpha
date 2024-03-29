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
})