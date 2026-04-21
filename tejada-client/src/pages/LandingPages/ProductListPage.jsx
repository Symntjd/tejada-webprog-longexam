import Button from '../../components/Button.jsx';
import ProductList from '../../components/ProductList.jsx';
import products from '../../assets/product-content.js';

const ProductListPage = () => {
  return (
    <div className="flex w-full flex-col gap-6">
      <section className="border-y-2 border-[#14213d] bg-white px-4 py-6 sm:px-6 sm:py-8 lg:px-8">
        <p className="mb-3 text-[11px] font-semibold uppercase tracking-[0.28em] text-[#c9a227]">
          Products
        </p>
        <h1 className="max-w-xl text-3xl font-bold leading-tight text-[#14213d] sm:text-4xl">
          Shop camping essentials in a simple product grid
        </h1>
        <p className="mt-4 max-w-lg text-sm leading-7 text-slate-600 sm:text-base">
          Browse practical outdoor gear for camp setup, hiking, cooking, lighting, and trail comfort.
        </p>
        <div className="mt-6">
          <Button to="/" variant="primary">Back Home</Button>
        </div>
      </section>

      <section className="border-y-2 border-[#14213d] bg-white px-4 py-6 sm:px-6 sm:py-8 lg:px-8">
        <div className="mb-6">
          <p className="text-[11px] font-semibold uppercase tracking-[0.28em] text-[#c9a227]">
            Featured Products
          </p>
          <h2 className="mt-2 text-2xl font-semibold text-[#14213d]">Camping gear card grid</h2>
        </div>

        <ProductList products={products} />
      </section>
    </div>
  );
};

export default ProductListPage;