import {getByRole, render, screen} from '@testing-library/react';
import Progress from '../page';
import { useRouter } from 'next/navigation';

jest.mock('next/navigation', () => ({
    useRouter: jest.fn()
}))

xdescribe('Progress page', () =>  {
    it('should render header title Level Up Dev', () => {
        render(<Progress />);
        const header = screen.getByRole("heading", {name: "Level Up Dev"});
        expect(header).toBeInTheDocument();
    })
})