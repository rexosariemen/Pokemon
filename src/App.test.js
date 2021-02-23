import { render, screen } from '@testing-library/react';
import App from './App';

test('renders Pokemon text', () => {
  render(<App />);
  const textelement = screen.getByText(/Winning Hand!/i);
  expect(textelement).toBeInTheDocument();
});
