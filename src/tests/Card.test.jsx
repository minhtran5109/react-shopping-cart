import { vi, describe, it, expect } from 'vitest'
import { render, screen } from '@testing-library/react';
import userEvent from "@testing-library/user-event";
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
    it("should call the add function when clicked", async () => {
      const add = vi.fn();
      const user = userEvent.setup()
      render(<Card product={{}} updateAmount={() => {}} addToCart={add}/>);

      const button = screen.getByRole("button", { name: "Add to Cart" });

      await user.click(button);

      expect(add).toHaveBeenCalled();
    });

    it("should not call the add function when it isn't clicked", async () => {
      const add = vi.fn();
      render(<Card product={{}} updateAmount={() => {}} addToCart={add}/>);

      expect(onClick).not.toHaveBeenCalled();
    });
  });
});

//TODO: mock some data
