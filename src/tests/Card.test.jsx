import { vi, describe, it, expect } from 'vitest'
import { render, screen } from '@testing-library/react';
import userEvent from "@testing-library/user-event";
import Card from '../components/Card';

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

    expect(add).not.toHaveBeenCalled();
  });
});

describe("renders products info", () => {
  it("should render product's name and price", () => {
    const product = {
      id: 11,
      title: 'yoyo',
      price: 5.0,
      amount: 1
    }
    render(<Card product={product} updateAmount={() => {}} addToCart={() => {}}/>);
    const title = screen.getByText("yoyo");
    const price = screen.getByText("Price: 5");
    expect(title).toBeInTheDocument();
    expect(price).toBeInTheDocument();
  })
});

describe("buttons interaction", () => {
  it("should first renders increment and decrement buttons", () => {
    render(<Card product={{}} updateAmount={() => {}} addToCart={() => {}}/>);
    const increment = screen.getByRole("button", { name: "+" });
    const decrement = screen.getByRole("button", { name: "-" });
    screen.debug();

    expect(increment).toBeInTheDocument();
    expect(decrement).toBeInTheDocument();
  })
})

//TODO: mock some data
