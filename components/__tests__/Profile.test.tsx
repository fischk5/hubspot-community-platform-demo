import '@testing-library/jest-dom'
import { render, screen } from '@testing-library/react';
import Profile from '../Profile';

// Mock the SWR hook
jest.mock('swr', () => () => ({
    data: { name: "Alice", bio: "Coder" },
    error: null,
}));

test('renders profile data', () => {
    render(<Profile />);
    expect(screen.getByText('Alice')).toBeInTheDocument()
    expect(screen.getByText('Coder')).toBeInTheDocument()
})