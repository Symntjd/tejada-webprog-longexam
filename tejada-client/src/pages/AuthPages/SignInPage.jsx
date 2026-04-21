import { Link, useNavigate } from 'react-router-dom';
import Button from '../../components/Button';

const inputClasses =
  'mt-2 w-full rounded-xl border border-slate-300 bg-white px-4 py-3 text-sm text-[#14213d] outline-none transition placeholder:text-slate-400 focus:border-[#2f6f4f] focus:ring-2 focus:ring-[#c9a227]/30';

const actionButtonClassName = 'w-full rounded-xl py-3 text-[11px] tracking-[0.2em]';

const SignInPage = () => {
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    navigate('/');
  };

  return (
    <>
     
      <h1 className="text-3xl font-bold tracking-tight text-[#14213d] sm:text-4xl">
        Sign In
      </h1>

      <p className="mt-3 text-sm leading-6 text-slate-600">
        Access your account to browse camping gear, manage your orders, and continue exploring outdoor essentials.
      </p>

      <form className="mt-8 space-y-5" onSubmit={handleSubmit}>
        <div>
          <label htmlFor="signin-email" className="text-sm font-medium text-[#14213d]">
            Email
          </label>
          <input
            id="signin-email"
            type="email"
            placeholder="camper@email.com"
            autoComplete="email"
            className={inputClasses}
          />
        </div>

        <div>
          <label htmlFor="signin-password" className="text-sm font-medium text-[#14213d]">
            Password
          </label>
          <input
            id="signin-password"
            type="password"
            placeholder="Password"
            autoComplete="current-password"
            className={inputClasses}
          />
        </div>

        <button
          type="submit"
          className={`w-full rounded-xl border-2 border-[#2f6f4f] bg-[#2f6f4f] px-4 py-3 text-[11px] font-semibold uppercase tracking-[0.2em] text-white transition hover:bg-[#275c42] ${actionButtonClassName}`}
        >
          Log In
        </button>

        <div className="grid gap-3 pt-2 sm:grid-cols-2">
          <Button type="button" variant="primary" className={actionButtonClassName}>
            Log In with Google
          </Button>
          <Button type="button" variant="primary" className={actionButtonClassName}>
            Log In with Apple
          </Button>
        </div>
      </form>

      <div className="mt-8 border-t border-slate-200 pt-6 text-sm text-slate-600">
        No account yet?{' '}
        <Link to="/auth/signup" className="font-semibold text-[#2f6f4f] transition hover:text-[#14213d]">
          Sign Up
        </Link>
      </div>
    </>
  );
};

export default SignInPage;