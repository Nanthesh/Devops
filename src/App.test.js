import React from 'react';
import { render, screen } from '@testing-library/react';
import App from './App';

test('renders project title', () => {
  render(<App />);
  const linkElement = screen.getByText(/DEVOPS Project GROUP 5/i);
  expect(linkElement).toBeInTheDocument();
});

