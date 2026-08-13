// src/App.test.js
import { render, screen } from '@testing-library/react';
import App from './App';

test('renders ChainOrbit title', () => {
    render(<App />);
    const titleElement = screen.getByText(/ChainOrbit/i);
    expect(titleElement).toBeInTheDocument();
});
