import { afterEach, expect, test } from 'vitest';
import { render, screen, cleanup } from '@testing-library/react';
import '@testing-library/jest-dom/vitest';

import { ProductCard, ProductImage } from './product-card';

const mockData = {
  title: 'Gabrielle Essence Eau De Parfum',
  description:
    'A floral, solar and voluptuous interpretation composed by Olivier Polge, Perfumer-Creator for the House of CHANEL.',
  category: 'Perfume',
  price: {
    current: 149.99,
    original: 169.99,
  },
  images: {
    mobileUrl: '/image-product-mobile.jpg',
    desktopUrl: '/image-product-desktop.jpg',
  },
};

afterEach(() => {
  cleanup();
});

test('should render the product card with correct data and structure with discount', () => {
  render(<ProductCard {...mockData} />);

  // Check if main elements are rendered
  expect(
    screen.getByRole('heading', { name: mockData.title }),
  ).toBeInTheDocument();
  expect(screen.getByText(mockData.description)).toBeInTheDocument();
  expect(screen.getByText(mockData.category)).toBeInTheDocument();

  // Check price information
  expect(screen.getByText(mockData.price.current)).toBeInTheDocument();
  expect(screen.getByText(mockData.price.original)).toBeInTheDocument();

  // Check price accessibility
  expect(
    screen.getByText(
      `Original price ${mockData.price.original}, now on sale for ${mockData.price.current}`,
    ),
  ).toBeInTheDocument();

  // Check add to cart button
  const addToCartButton = screen.getByRole('button', { name: /add to cart/i });
  expect(addToCartButton).toBeInTheDocument();
  expect(addToCartButton.querySelector('img')).toHaveAttribute(
    'src',
    '/icon-cart.svg',
  );
});

test('should render the product card with correct data and structure without discount', () => {
  const dataWithoutOriginalPrice = {
    ...mockData,
    price: {
      current: 149.99,
      original: null,
    },
  };

  render(<ProductCard {...dataWithoutOriginalPrice} />);

  // Check that original price is not shown
  expect(screen.queryByText(mockData.price.original)).not.toBeInTheDocument();

  // Check price accessibility without original price
  expect(
    screen.getByText(`Price ${dataWithoutOriginalPrice.price.current}`),
  ).toBeInTheDocument();
});

test('should render product images with correct sources', () => {
  const { container } = render(
    <ProductImage alt={mockData.title} images={mockData.images} />,
  );

  const sources = container.querySelectorAll('source');
  expect(sources).toHaveLength(2);

  const [mobileSource, desktopSource] = sources;
  expect(mobileSource).toHaveAttribute('media', '(max-width: 640px)');
  expect(desktopSource).toHaveAttribute('media', '(min-width: 641px)');

  const image = container.querySelector('img');
  expect(image).toBeInTheDocument();
});
