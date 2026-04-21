import Button from '../../components/Button';
import aboutImg from '../../assets/img/northfern-home.jpg';
import tentImg from '../../assets/img/products/tent.jpg';
import shoesImg from '../../assets/img/products/hiking-shoes.jpg';
import lanternImg from '../../assets/img/products/lantern.jpg';
import backpackImg from '../../assets/img/products/backpack.jpg';

const AboutPage = () => {
  return (
    <div className="flex w-full flex-col gap-6">
      <section className="border-y-2 border-[#14213d] bg-white px-4 py-6 sm:px-6 sm:py-8 lg:px-8">
        <div className="grid gap-8 lg:grid-cols-2 lg:items-center">
          <div className="rounded-3xl border-2 border-[#2f6f4f] bg-[#e6efe9] p-4">
            <img
              src={aboutImg}
              alt="NorthFern outdoor setup"
              className="w-full rounded-[1.25rem] object-cover"
            />
          </div>

          <div>
            <p className="mb-3 text-[11px] font-semibold uppercase tracking-[0.28em] text-[#c9a227]">
              About NorthFern
            </p>
            <h1 className="max-w-xl text-3xl font-bold leading-tight text-[#14213d] sm:text-4xl">
              Outdoor gear made for trails, campsites, and practical adventures.
            </h1>
            <p className="mt-4 max-w-lg text-sm leading-7 text-slate-600 sm:text-base">
              NorthFern is an outdoor goods store focused on functional camping gear, dependable trail essentials, and clean product browsing for modern outdoor lifestyles.
            </p>
            <div className="mt-6 flex flex-wrap gap-3">
              <Button to="/" variant="primary">
                Back Home
              </Button>
              <Button to="/products" variant="blue">
                View Products
              </Button>
            </div>
          </div>
        </div>
      </section>

      <section className="border-y-2 border-[#14213d] bg-white px-4 py-6 sm:px-6 sm:py-8 lg:px-8">
        <div className="mb-6">
          <p className="text-[11px] font-semibold uppercase tracking-[0.28em] text-[#c9a227]">
            Store Overview
          </p>
          <h2 className="mt-2 text-2xl font-semibold text-[#14213d]">A simple outdoor shopping experience</h2>
        </div>

        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          <div className="rounded-3xl border-2 border-[#14213d] bg-[#eff6ff] p-5">
            <p className="text-2xl font-bold text-[#14213d]">08</p>
            <p className="mt-2 text-[11px] font-semibold uppercase tracking-[0.24em] text-[#1d4ed8]">Items</p>
          </div>
          <div className="rounded-3xl border-2 border-[#14213d] bg-[#eff6ff] p-5">
            <p className="text-2xl font-bold text-[#14213d]">06</p>
            <p className="mt-2 text-[11px] font-semibold uppercase tracking-[0.24em] text-[#1d4ed8]">Categories</p>
          </div>
          <div className="rounded-3xl border-2 border-[#14213d] bg-[#eff6ff] p-5">
            <p className="text-2xl font-bold text-[#14213d]">04</p>
            <p className="mt-2 text-[11px] font-semibold uppercase tracking-[0.24em] text-[#1d4ed8]">Core Uses</p>
          </div>
          <div className="rounded-3xl border-2 border-[#14213d] bg-[#eff6ff] p-5">
            <p className="text-2xl font-bold text-[#14213d]">12</p>
            <p className="mt-2 text-[11px] font-semibold uppercase tracking-[0.24em] text-[#1d4ed8]">Trail Picks</p>
          </div>
        </div>
      </section>

      <section className="border-y-2 border-[#14213d] bg-white px-4 py-6 sm:px-6 sm:py-8 lg:px-8">
        <div className="grid gap-6 lg:grid-cols-[1.1fr_0.9fr]">
          <div>
            <p className="text-[11px] font-semibold uppercase tracking-[0.28em] text-[#c9a227]">
              Store Focus
            </p>
            <h2 className="mt-2 text-2xl font-semibold text-[#14213d]">Built around useful outdoor essentials</h2>

            <div className="mt-6 space-y-4">
              <article className="rounded-3xl border-2 border-[#14213d] bg-[#eff6ff] p-5">
                <h3 className="text-lg font-semibold text-[#14213d]">Curated Outdoor Catalog</h3>
                <p className="mt-3 text-sm leading-6 text-slate-600">
                  NorthFern focuses on practical gear for hiking, shelter, trail cooking, and camp comfort.
                </p>
              </article>

              <article className="rounded-3xl border-2 border-[#14213d] bg-[#eff6ff] p-5">
                <h3 className="text-lg font-semibold text-[#14213d]">Simple Product Browsing</h3>
                <p className="mt-3 text-sm leading-6 text-slate-600">
                  The store keeps layout and structure straightforward so products remain easy to explore.
                </p>
              </article>

              <article className="rounded-3xl border-2 border-[#14213d] bg-[#eff6ff] p-5">
                <h3 className="text-lg font-semibold text-[#14213d]">Ready for Real Adventures</h3>
                <p className="mt-3 text-sm leading-6 text-slate-600">
                  Every product category is selected to support camping trips, outdoor rest, and trail movement.
                </p>
              </article>
            </div>
          </div>

          <div className="rounded-3xl border-2 border-[#14213d] bg-[#e6efe9] p-5">
            <p className="text-[11px] font-semibold uppercase tracking-[0.28em] text-[#c9a227]">
              NorthFern Theme
            </p>
            <div className="mt-5 grid gap-4 sm:grid-cols-2">
              <img
               src={tentImg}
               alt="Camping tent"
                className="aspect-square w-full rounded-[1.25rem] object-cover"
                 />
                  <img
                   src={shoesImg}
                   alt="Hiking shoes"
                  className="aspect-square w-full rounded-[1.25rem] object-cover"
                   />
             <img
                src={lanternImg}
                alt="Camping lantern"
                className="aspect-square w-full rounded-[1.25rem] object-cover"
             />
             <img
                src={backpackImg}
                alt="Camping backpack"
                className="aspect-square w-full rounded-[1.25rem] object-cover"
              />
              </div>
            <Button to="/products" className="mt-5" variant="blue">Explore Products</Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AboutPage;