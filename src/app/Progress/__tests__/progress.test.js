import {getByRole, render, screen} from '@testing-library/react';
import Progress from '../page';
import { useRouter } from 'next/navigation';
import TestData from '../../../libs/dummyData/loginTestData.json';

jest.mock('next/navigation', () => ({
    useRouter: jest.fn()
}))

describe('Progress page', () =>  {
    it('should render header title Level Up Dev', () => {    
        render(<Progress />);
        const text = screen.getByText("Level Up Dev");
        expect(text).toBeInTheDocument()
    })
})