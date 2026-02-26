// src/App.test.js
import { render, screen } from '@testing-library/react';
import App from './App';

test('renders BertRadiant title', () => {
    render(<App />);
    const titleElement = screen.getByText(/BertRadiant/i);
    expect(titleElement).toBeInTheDocument();
});
