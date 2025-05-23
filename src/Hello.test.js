import React from 'react';
import { render, screen } from '@testing-library/react';
import { Hello } from './Hello';

test('renders hello message', () => {
  render(<Hello />);
  expect(screen.getByText('Hello, Teja!')).toBeInTheDocument();
});
