import { vi, describe, it, expect } from 'vitest'
import { render, screen } from '@testing-library/react';
// import userEvent from "@testing-library/user-event";
// import { MemoryRouter } from 'react-router-dom';
// import { CartProvider } from '../context/CartContext';
import { Card } from '../components/Card';

test('renders Card component', () => {

  describe("Add to Cart button", () => {
    it("should render a button with the text 'Add to Cart'", () => {
      render(<Card product={{}} updateAmount={() => {}} addToCart={() => {}}/>);

      const button = screen.getByRole("button", { name: "Add to Cart" });

      expect(button).toBeInTheDocument();
    });
    
  });
});

//TODO: mock some data
