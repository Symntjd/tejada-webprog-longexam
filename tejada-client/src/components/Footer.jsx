import { Link } from 'react-router-dom';
import logo from '../assets/img/northfern-logo.png';

const Footer = () => {
  return (
    <footer className="mt-10 border-t border-[#cfc4b1] bg-[#2f5d50] px-4 py-10 sm:px-6 lg:px-8">
      <div className="mx-auto grid max-w-6xl gap-8 md:grid-cols-3">
        <div>
          <div className="flex items-center gap-3">
            <img
              src={logo}
              alt="NorthFern logo"
              className="h-12 w-12 object-contain"
            />
            <div>
              <h3 className="text-xl font-bold text-white">NorthFern</h3>
              <p className="text-[11px] font-semibold uppercase tracking-[0.24em] text-[#d8ccb6]">
                Outdoor Goods
              </p>
            </div>
          </div>

          <p className="mt-4 text-sm leading-6 text-[#e8efe8]">
            A refined outdoor goods store offering camping tools, trail gear,
            and practical essentials for modern adventure.
          </p>
        </div>

        <div>
          <p className="text-[11px] font-semibold uppercase tracking-[0.28em] text-[#d8ccb6]">
            Navigation
          </p>

          <div className="mt-4 flex flex-col gap-2 text-sm">
            <Link to="/" className="text-white transition hover:text-[#d8ccb6]">
              Home
            </Link>
            <Link to="/about" className="text-white transition hover:text-[#d8ccb6]">
              About
            </Link>
            <Link to="/products" className="text-white transition hover:text-[#d8ccb6]">
              Products
            </Link>
            <Link to="/auth/signin" className="text-white transition hover:text-[#d8ccb6]">
              Sign In
            </Link>
            <Link to="/auth/signup" className="text-white transition hover:text-[#d8ccb6]">
              Sign Up
            </Link>
          </div>
        </div>

        <div>
          <p className="text-[11px] font-semibold uppercase tracking-[0.28em] text-[#d8ccb6]">
            Store Info
          </p>

          <div className="mt-4 space-y-2 text-sm text-[#e8efe8]">
            <p>Email: support@northfern.com</p>
            <p>Location: Manila, Philippines</p>
           
          </div>
        </div>
      </div>

      <div className="mx-auto mt-10 max-w-6xl border-t border-[#5b7b6f] pt-4 text-center text-sm text-[#e8efe8]">
        © 2026 NorthFern. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;