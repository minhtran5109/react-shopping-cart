import { render, screen, waitFor } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import { CartProvider } from '../context/CartContext';
import Shop from '../pages/Shop';
import userEvent from "@testing-library/user-event";
import { beforeEach } from 'vitest';

global.fetch = vi.fn();

describe('Shop page component', () => {
  beforeEach(() => {
    fetch.mockClear();
  });

  test('show loading initially', async () => {
    fetch.mockResolvedValueOnce({
      json: async() => [],
    });

    render(
      <MemoryRouter>
        <CartProvider>
          <Shop />
        </CartProvider>
      </MemoryRouter>
    );

    await waitFor(() => {
      expect(screen.getByText('Loading...')).toBeInTheDocument();
    });
  });

  test('renders a list of products after fetching', async () => {
    fetch.mockResolvedValueOnce({
      json: async () => [
        {id: 1, title: 'Product 1', amount: ''},
        {id: 2, title: 'Product 2', amount: ''}
      ]
    });

    render(
      <MemoryRouter>
        <CartProvider>
          <Shop />
        </CartProvider>
      </MemoryRouter>
    );

    await waitFor(() => {
      expect(screen.getByText('Product 1')).toBeInTheDocument();
      expect(screen.getByText('Product 2')).toBeInTheDocument();
    });
    screen.debug();

  })

  test('increments and decrements the product amount when the respective button is clicked', async () => {
    fetch.mockResolvedValueOnce({
      json: async () => [
        {id: 1, title: 'Product 1', amount: ''},
        {id: 2, title: 'Product 2', amount: ''}
      ]
    });

    render(
      <MemoryRouter>
        <CartProvider>
          <Shop />
        </CartProvider>
      </MemoryRouter>
    );

    // Wait for the items to be rendered
    await waitFor(() => {
      expect(screen.getByTestId('product-input-1').value).toBe('');
      expect(screen.getByTestId('product-input-2').value).toBe('');
    });

    const user = userEvent.setup();
    const incrementButton = screen.getAllByText('+')[0];
    const decrementButton = screen.getAllByText('-')[0];

    await user.click(incrementButton);
    await user.click(incrementButton);
    await waitFor(() => {
      expect(screen.getByTestId('product-input-1').value).toBe('2');
    });

    await user.click(decrementButton);
    expect(screen.getByTestId('product-input-1').value).toBe('1');

    //should not go below 1
    await user.click(decrementButton);
    expect(screen.getByTestId('product-input-1').value).toBe('1');
  })
});
