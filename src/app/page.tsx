import { ProductCard } from '@/components/product-card';

const product = {
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

export default function Page() {
  return (
    <main className="flex min-h-screen items-center justify-center px-4 py-7">
      <ProductCard {...product} />
    </main>
  );
}
