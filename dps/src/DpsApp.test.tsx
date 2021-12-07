import React from 'react';
import { render, screen } from '@testing-library/react';
import DpsApp from './DpsApp';

test('renders learn react link', () => {
  render(<DpsApp />);
  const linkElement = screen.getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});
