import Button from '../components/Button';

const NotFoundPage = () => {
  return (
    <div className="flex w-full flex-col gap-6">
      <section className="border-y-2 border-[#14213d] bg-white px-4 py-6 sm:px-6 sm:py-8 lg:px-8">
        <div className="max-w-3xl">
          <p className="mb-3 text-[11px] font-semibold uppercase tracking-[0.28em] text-[#c9a227]">
            Error
          </p>
          <h1 className="text-6xl font-bold leading-tight text-[#14213d] sm:text-7xl">
            404
          </h1>
          <p className="mt-4 text-lg leading-7 text-slate-600">
            Page not found. The page you are looking for does not exist or may have been moved.
          </p>
          <div className="mt-6 flex gap-3">
            <Button to="/" variant="primary">Back Home</Button>
            <Button to="/products" variant="blue">View Products</Button>
          </div>
        </div>
      </section>

      <section className="border-y-2 border-[#14213d] bg-white px-4 py-6 sm:px-6 sm:py-8 lg:px-8">
        <div className="max-w-3xl">
          <p className="text-[11px] font-semibold uppercase tracking-[0.28em] text-[#c9a227]">
            Quick Links
          </p>
          <h2 className="mt-2 text-2xl font-semibold text-[#14213d]">Explore the site</h2>

          <div className="mt-6 space-y-3">
            <div className="rounded-3xl border-2 border-[#14213d] bg-[#eff6ff] p-4">
              <h3 className="font-semibold text-[#14213d]">Home</h3>
              <p className="mt-1 text-sm text-slate-600">Return to the homepage</p>
              <Button to="/" className="mt-3" variant="primary">Go Home</Button>
            </div>

            <div className="rounded-3xl border-2 border-[#14213d] bg-[#eff6ff] p-4">
              <h3 className="font-semibold text-[#14213d]">Products</h3>
              <p className="mt-1 text-sm text-slate-600">Browse all featured camping gear</p>
              <Button to="/products" className="mt-3" variant="blue">View Products</Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default NotFoundPage;