import Button from '../../components/Button';
import banner from '../../assets/img/northfern-home.jpg';
import toolsImg from '../../assets/img/home-tools.jpg';
import shelterImg from '../../assets/img/home-shelter.jpg';
import footwearImg from '../../assets/img/home-footwear.jpg';

const HomePage = () => {
  return (
    <div className="flex w-full flex-col gap-6">
      <section className="relative min-h-[28rem] overflow-hidden border-y-2 border-[#14213d] bg-[#14213d] px-4 py-10 sm:px-6 lg:px-8">
        <img
          src={banner}
          alt=""
          className="absolute inset-0 h-full w-full object-cover"
        />
        <div className="absolute inset-0 bg-[#14213d]/50" />

        <div className="relative z-10 flex min-h-[22rem] items-start justify-end text-right sm:min-h-[24rem]">
          <div className="max-w-xl">
            <p className="mb-3 text-[11px] font-semibold uppercase tracking-[0.28em] text-white">
              Outdoor Goods
            </p>
            <h1 className="text-3xl font-bold leading-tight text-white sm:text-4xl">
              Welcome to NorthFern
            </h1>
            <p className="mt-4 text-sm leading-7 text-[#dbeafe] sm:text-base">
              Explore outdoor essentials built for trails, campsites, and weekend adventures.
            </p>
            <div className="mt-6 flex flex-wrap justify-end gap-3">
              <Button to="/products" variant="blue">
                Shop Gear
              </Button>
              <Button to="/about" variant="primary">
                About NorthFern
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
          <h2 className="mt-2 text-2xl font-semibold text-[#14213d]">Outdoor essentials at a glance</h2>
        </div>

        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          <div className="rounded-3xl border-2 border-[#14213d] bg-[#eff6ff] p-5">
            <p className="text-2xl font-bold text-[#14213d]">08</p>
            <p className="mt-2 text-[11px] font-semibold uppercase tracking-[0.24em] text-[#1d4ed8]">
              Products
            </p>
          </div>
          <div className="rounded-3xl border-2 border-[#14213d] bg-[#eff6ff] p-5">
            <p className="text-2xl font-bold text-[#14213d]">06</p>
            <p className="mt-2 text-[11px] font-semibold uppercase tracking-[0.24em] text-[#1d4ed8]">
              Categories
            </p>
          </div>
          <div className="rounded-3xl border-2 border-[#14213d] bg-[#eff6ff] p-5">
            <p className="text-2xl font-bold text-[#14213d]">04</p>
            <p className="mt-2 text-[11px] font-semibold uppercase tracking-[0.24em] text-[#1d4ed8]">
              Core Gear Types
            </p>
          </div>
          <div className="rounded-3xl border-2 border-[#14213d] bg-[#eff6ff] p-5">
            <p className="text-2xl font-bold text-[#14213d]">12</p>
            <p className="mt-2 text-[11px] font-semibold uppercase tracking-[0.24em] text-[#1d4ed8]">
              Trail Picks
            </p>
          </div>
        </div>
      </section>

      <section className="border-y-2 border-[#14213d] bg-white px-4 py-6 sm:px-6 sm:py-8 lg:px-8">
        <div className="mb-6">
          <p className="text-[11px] font-semibold uppercase tracking-[0.28em] text-[#c9a227]">
            Shop Sections
          </p>
          <h2 className="mt-2 text-2xl font-semibold text-[#14213d]">Built for campers and hikers</h2>
        </div>

        <div className="grid gap-4 md:grid-cols-3">
          <article className="rounded-3xl border-2 border-[#14213d] bg-[#eff6ff] p-4">
            <img
              src={toolsImg}
              alt="Trail tools and outdoor gear"
              className="aspect-4/3 w-full rounded-[1.25rem] object-cover"
            />
            <h3 className="mt-4 text-lg font-semibold text-[#14213d]">Trail Tools</h3>
            <p className="mt-3 text-sm leading-6 text-slate-600">
              Multi-tools, lanterns, and practical gear for campsite setup and trail use.
            </p>
            <Button to="/products" className="mt-4" variant="blue">View Tools</Button>
          </article>

          <article className="rounded-3xl border-2 border-[#14213d] bg-[#eff6ff] p-4">
            <img
              src={shelterImg}
              alt="Shelter and sleep camping gear"
              className="aspect-4/3 w-full rounded-[1.25rem] object-cover"
            />
            <h3 className="mt-4 text-lg font-semibold text-[#14213d]">Shelter & Sleep</h3>
            <p className="mt-3 text-sm leading-6 text-slate-600">
              Tents, sleeping bags, and comfort gear for overnight outdoor stays.
            </p>
            <Button to="/products" className="mt-4" variant="blue">Shop Shelter</Button>
          </article>

          <article className="rounded-3xl border-2 border-[#14213d] bg-[#eff6ff] p-4">
            <img
              src={footwearImg}
              alt="Trail footwear for hiking"
              className="aspect-4/3 w-full rounded-[1.25rem] object-cover"
            />
            <h3 className="mt-4 text-lg font-semibold text-[#14213d]">Trail Footwear</h3>
            <p className="mt-3 text-sm leading-6 text-slate-600">
              Hiking shoes and outdoor-ready essentials designed for support and grip.
            </p>
            <Button to="/products" className="mt-4" variant="blue">
              View Footwear
            </Button>
          </article>
        </div>
      </section>
    </div>
  );
};

export default HomePage;