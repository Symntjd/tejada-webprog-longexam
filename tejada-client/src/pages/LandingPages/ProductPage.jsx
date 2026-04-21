import { useParams } from 'react-router-dom';
import Button from '../../components/Button.jsx';
import products from '../../assets/product-content.js';

function ProductPage() {
  const { name } = useParams();
  const product = products.find((item) => item.name === name);

  if (!product) {
    return (
      <div className="flex w-full flex-col gap-6">
        <section className="border-y-2 border-[#14213d] bg-white px-4 py-6 sm:px-6 sm:py-8 lg:px-8">
          <div className="mx-auto max-w-3xl">
            <p className="mb-3 text-[11px] font-semibold uppercase tracking-[0.28em] text-[#c9a227]">
              Product
            </p>
            <h1 className="text-3xl font-bold text-[#14213d]">Product not found</h1>
            <p className="mt-4 text-sm leading-7 text-slate-600">
              The product you are looking for is not available in the catalog.
            </p>
            <Button to="/products" className="mt-6" variant="blue">
              Back to Products
            </Button>
          </div>
        </section>
      </div>
    );
  }

  return (
    <div className="flex w-full flex-col gap-6">
      <section className="border-y-2 border-[#14213d] bg-white px-4 py-6 sm:px-6 sm:py-8 lg:px-8">
        <div className="mx-auto max-w-5xl">
          <p className="mb-3 text-[11px] font-semibold uppercase tracking-[0.28em] text-[#c9a227]">
            {product.category}
          </p>

          <h1 className="text-3xl font-bold leading-tight text-[#14213d] sm:text-4xl">
            {product.title}
          </h1>

          <div className="mt-4 flex flex-wrap items-center gap-3 text-sm">
            <span className="rounded-full bg-[#e6efe9] px-4 py-2 font-semibold text-[#2f6f4f]">
              {product.price}
            </span>
            <span className="rounded-full bg-[#eff6ff] px-4 py-2 font-semibold text-[#1d4ed8]">
              {product.stock}
            </span>
          </div>

          <div className="mt-6">
            <Button to="/products" variant="primary">
              Back to Products
            </Button>
          </div>
        </div>
      </section>

      <section className="border-y-2 border-[#14213d] bg-white px-4 py-6 sm:px-6 sm:py-8 lg:px-8">
        <div className="mx-auto grid max-w-5xl gap-8 lg:grid-cols-[1fr_1.1fr]">
          <div className="rounded-3xl border-2 border-[#14213d] bg-[#e6efe9] p-4">
            <div className="flex aspect-square items-center justify-center rounded-[1.25rem] bg-white overflow-hidden">
              {product.image ? (
                <img
                  src={product.image}
                  alt={product.title}
                  className="h-full w-full object-cover"
                />
              ) : (
                <div className="flex h-24 w-24 items-center justify-center border-2 border-[#2f6f4f] bg-[#f5f1e8] text-xs font-semibold uppercase tracking-[0.22em] text-[#2f6f4f]">
                  Gear
                </div>
              )}
            </div>
          </div>

          <div className="flex flex-col justify-center">
            <p className="text-[11px] font-semibold uppercase tracking-[0.28em] text-[#c9a227]">
              Product Details
            </p>

            <div className="mt-4 space-y-4">
              {product.content.map((paragraph, index) => (
                <p key={index} className="text-sm leading-7 text-slate-600 sm:text-base">
                  {paragraph}
                </p>
              ))}
            </div>

            <div className="mt-8 flex flex-wrap gap-3">
              <Button variant="blue">Add to Cart</Button>
              <Button to="/products" variant="primary">
                Continue Shopping
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default ProductPage;