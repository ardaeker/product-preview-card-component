import Image, { getImageProps } from 'next/image';

function IconCart() {
  return (
    <Image
      src="/icon-cart.svg"
      alt="Cart icon"
      width={14.39}
      height={16}
      aria-hidden
    />
  );
}

type ProductImageProps = React.ComponentPropsWithRef<'div'> & {
  alt: string;
  images: {
    mobileUrl: string;
    desktopUrl: string;
  };
};

export function ProductImage(props: ProductImageProps) {
  const common = {
    alt: props.alt,
    fill: true,
    priority: true,
    sizes: '100vw',
  };
  const {
    props: { src: mobileSource },
  } = getImageProps({ ...common, src: props.images.mobileUrl });
  const {
    props: { src: desktopSource, alt, ...rest },
  } = getImageProps({ ...common, src: props.images.desktopUrl });

  return (
    <div className="relative">
      <div {...props}>
        <picture>
          <source media="(max-width: 640px)" srcSet={mobileSource} />
          <source media="(min-width: 641px)" srcSet={desktopSource} />
          <img className="object-cover" alt={alt} {...rest} />
        </picture>
      </div>
    </div>
  );
}

type ProductCardProps = {
  title: string;
  description: string;
  category: string;
  price: {
    current: number;
    original?: number | null;
  };
  images: {
    mobileUrl: string;
    desktopUrl: string;
  };
};

export function ProductCard({
  title,
  description,
  category,
  price,
  images,
}: ProductCardProps) {
  return (
    <section className="w-full overflow-hidden rounded-[.625rem] sm:grid sm:max-w-[37.5rem] sm:grid-cols-2">
      <ProductImage
        alt={title}
        images={images}
        className="h-60 w-full sm:h-full"
      />
      <div className="bg-white p-6 sm:p-8">
        <span className="text-xs font-medium uppercase tracking-[5px]">
          {category}
        </span>
        <h1 className="font-fraunces mt-3 text-[2rem] font-bold leading-8 text-[#1C232B] sm:mt-5">
          {title}
        </h1>
        <p className="font-montserrat mt-4 text-sm font-medium leading-[1.4375rem] sm:mt-6">
          {description}
        </p>

        <div className="mt-6 sm:mt-[1.8125rem]">
          <span className="sr-only">
            {price.original
              ? `Original price ${price.original}, now on sale for ${price.current}`
              : `Price ${price.current}`}
          </span>
          <div aria-hidden className="flex items-center gap-x-[1.1875rem]">
            <span className="font-fraunces text-[2rem] font-bold leading-8 text-[#3D8168]">
              {price.current}
            </span>
            {price.original && (
              <span className="font-montserrat text-[.8125rem] font-medium leading-[1.4375rem] line-through">
                {price.original}
              </span>
            )}
          </div>
        </div>

        <button className="mt-5 flex h-12 w-full items-center justify-center gap-x-[.7259rem] rounded-lg bg-[#3D8168] p-[.9375rem] text-white transition-colors duration-300 hover:bg-[#1A4032] sm:mt-[1.875rem]">
          <IconCart />
          <span className="font-montserrat text-sm font-bold leading-[1.0625rem]">
            Add to Cart
          </span>
        </button>
      </div>
    </section>
  );
}
