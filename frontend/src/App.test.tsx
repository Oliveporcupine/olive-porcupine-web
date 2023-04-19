import React from 'react';
import { render, screen } from '@testing-library/react';
import App from './App';

describe('The main app', () => {

  // orders test
  it('should render the Orders link', () => {
    render(<App />);
    expect(screen.getByText('Orders')).toBeInTheDocument();
  });

  // payment test
  it('should render the Payments link', () => {
    render(<App />);
    expect(screen.getByText('Payment')).toBeInTheDocument();
  });

  // home test
  it('should render the Home link', () => {
    render(<App />);
    expect(screen.getByRole('link', { name: "Home"})).toBeInTheDocument();
  });

  // header test
  it('should render the Home header', () => {
    render(<App />);
    expect(screen.getByRole('heading', { level: 2})).toBeInTheDocument();
  });

});
