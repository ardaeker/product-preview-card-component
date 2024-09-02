export default function Page() {
  return (
    <main className="flex min-h-screen items-center justify-center px-4 py-7">
      {/* The W3C Markup Validation Service will throw an error if the <h1> element is empty. 
          To avoid this, we can add visually hidden text to the <h1> element. 
          This is only necessary in this example; in a real-world scenario, we will likely have a title. */}
      <h1 className="sr-only">Product Preview Card Component</h1>
      <article className="max-w-card rounded-card min-w-[var(--card-max-width)-20px] overflow-hidden bg-white sm:flex">
        {/* Product Image */}

        <picture className="sm:basis-1/2">
          <source
            srcSet="/image-product-desktop.jpg"
            media="(min-width: 640px)"
          />
          <img
            loading="eager"
            fetchPriority="high"
            src="/image-product-mobile.jpg"
            alt="Gabrielle Essence Eau De Parfum"
            className="h-auto w-full sm:h-full"
          />
        </picture>

        {/* Product Content */}
        <div className="p-6 sm:basis-1/2 sm:p-8">
          <span className="font-montserrat tracking-category text-aurometal-saurus font-medium uppercase">
            Perfume
          </span>
          <h2 className="font-fraunces text-gunmetal mt-3 text-4xl font-bold leading-8 sm:mt-5">
            Gabrielle Essence Eau De Parfum
          </h2>
          <p className="text-aurometal-saurus font-montserrat mt-4 text-sm font-medium leading-6 sm:mt-6">
            A floral, solar and voluptuous interpretation composed by Olivier
            Polge, Perfumer-Creator for the House of CHANEL.
          </p>
          <div className="sm:mt-7.5 mt-6 flex items-center gap-x-5">
            <span>
              <span className="sr-only">Discount price: $149.99</span>
              <span
                aria-hidden="true"
                className="font-fraunces text-light-aquamarine text-4xl font-bold leading-8"
              >
                $149.99
              </span>
            </span>
            <span>
              <span className="sr-only">Original price: $169.99</span>
              <span
                aria-hidden="true"
                className="font-montserrat text-aurometal-saurus text-sm font-medium leading-6"
              >
                <s>$169.99</s>
              </span>
            </span>
          </div>
          <button className="bg-light-aquamarine hover:bg-dark-aquamarine sm:mt-7.5 mt-5 h-12 w-full rounded-lg transition-colors duration-200">
            <span className="flex items-center justify-center gap-x-3">
              <svg
                width="15"
                height="16"
                xmlns="http://www.w3.org/2000/svg"
                aria-hidden="true"
              >
                <path
                  d="M14.383 10.388a2.397 2.397 0 0 0-1.518-2.222l1.494-5.593a.8.8 0 0 0-.144-.695.8.8 0 0 0-.631-.28H2.637L2.373.591A.8.8 0 0 0 1.598 0H0v1.598h.983l1.982 7.4a.8.8 0 0 0 .799.59h8.222a.8.8 0 0 1 0 1.599H1.598a.8.8 0 1 0 0 1.598h.943a2.397 2.397 0 1 0 4.507 0h1.885a2.397 2.397 0 1 0 4.331-.376 2.397 2.397 0 0 0 1.12-2.021ZM11.26 7.99H4.395L3.068 3.196h9.477L11.26 7.991Zm-6.465 6.392a.8.8 0 1 1 0-1.598.8.8 0 0 1 0 1.598Zm6.393 0a.8.8 0 1 1 0-1.598.8.8 0 0 1 0 1.598Z"
                  fill="#FFF"
                />
              </svg>
              <span className="font-montserrat text-sm font-bold leading-normal text-white">
                Add to Cart
              </span>
            </span>
          </button>
        </div>
      </article>
    </main>
  );
}
