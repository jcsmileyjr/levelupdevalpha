import {getByRole, render, screen} from '@testing-library/react';
import Progress from '../page';

xdescribe('Progress', () =>  {
    it('should render header title Level Up Dev', () => {
        render(<Progress />);
        const header = screen.getByRole("heading", {name: "Level Up Dev"});
        expect(header).toBeInTheDocument();
    })
})