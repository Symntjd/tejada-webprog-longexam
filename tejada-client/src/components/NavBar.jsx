import { NavLink } from 'react-router-dom';
import logo from '../assets/img/northfern-logo.png';

const links = [
  { label: 'Home', to: '/' },
  { label: 'About', to: '/about' },
  { label: 'Products', to: '/products' },
  { label: 'Sign In', to: '/auth/signin' },
  { label: 'Sign Up', to: '/auth/signup' },
];

const navLinkClassName = ({ isActive }) =>
  [
    'rounded-full border px-4 py-2 text-[11px] font-semibold uppercase tracking-[0.24em] transition',
    isActive
      ? 'border-[#2f5d50] bg-[#2f5d50] text-white'
      : 'border-transparent text-[#233127] hover:border-[#a8b79f] hover:bg-[#e7dfd1] hover:text-[#2f5d50]',
  ].join(' ');

const NavBar = () => {
  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-[#cfc4b1] bg-[#f5f1e8]/95 backdrop-blur">
      <div className="mx-auto flex max-w-6xl items-center justify-between gap-4 px-4 py-4 sm:px-6 lg:px-8">
        <NavLink to="/" className="flex items-center gap-3">
          <img
            src={logo}
            alt="NorthFern logo"
            className="h-11 w-11 object-contain"
          />
          <div className="space-y-0.5">
            <p className="text-2xl font-bold text-[#233127]">NorthFern</p>
            <p className="text-[10px] font-semibold uppercase tracking-[0.24em] text-[#7a5c46]">
              Outdoor Goods
            </p>
          </div>
        </NavLink>

        <nav className="hidden items-center gap-2 md:flex">
          {links.map((link) => (
            <NavLink key={link.to} to={link.to} end={link.to === '/'} className={navLinkClassName}>
              {link.label}
            </NavLink>
          ))}
        </nav>
      </div>
    </header>
  );
};

export default NavBar;