import { render, screen, waitFor } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import { CartProvider } from '../context/CartContext';
import Shop from '../pages/Shop';
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
});

//TODO: mock buttons interaction inside each product card component
