import { Link, useNavigate } from 'react-router-dom';
import Button from '../../components/Button';

const inputClasses =
  'mt-2 w-full rounded-xl border border-slate-300 bg-white px-4 py-3 text-sm text-[#14213d] outline-none transition placeholder:text-slate-400 focus:border-[#2f6f4f] focus:ring-2 focus:ring-[#c9a227]/30';

const actionButtonClassName = 'w-full rounded-xl py-3 text-[11px] tracking-[0.2em]';

const SignUpPage = () => {
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    navigate('/');
  };

  return (
    <>
      <h1 className="text-3xl font-bold tracking-tight text-[#14213d] sm:text-4xl">
        Sign Up
      </h1>

      <p className="mt-3 text-sm leading-6 text-slate-600">
        Create your account to browse camping gear, save your favorite outdoor essentials,
        and make future checkout faster and easier.
      </p>

      <form className="mt-8 space-y-5" onSubmit={handleSubmit}>
        <div className="grid gap-5 sm:grid-cols-2">
          <div>
            <label htmlFor="first-name" className="text-sm font-medium text-[#14213d]">
              First Name
            </label>
            <input
              id="first-name"
              type="text"
              placeholder="First name"
              autoComplete="given-name"
              className={inputClasses}
            />
          </div>

          <div>
            <label htmlFor="last-name" className="text-sm font-medium text-[#14213d]">
              Last Name
            </label>
            <input
              id="last-name"
              type="text"
              placeholder="Last name"
              autoComplete="family-name"
              className={inputClasses}
            />
          </div>
        </div>

        <div>
          <label htmlFor="signup-email" className="text-sm font-medium text-[#14213d]">
            Email
          </label>
          <input
            id="signup-email"
            type="email"
            placeholder="camper@email.com"
            autoComplete="email"
            className={inputClasses}
          />
        </div>

        <div>
          <label htmlFor="signup-password" className="text-sm font-medium text-[#14213d]">
            Password
          </label>
          <input
            id="signup-password"
            type="password"
            placeholder="Create a password"
            autoComplete="new-password"
            className={inputClasses}
          />
          <p className="mt-2 text-xs leading-5 text-slate-500">
            Use a secure password with letters, numbers, and symbols.
          </p>
        </div>

        <button
          type="submit"
          className={`w-full rounded-xl border-2 border-[#2f6f4f] bg-[#2f6f4f] px-4 py-3 text-[11px] font-semibold uppercase tracking-[0.2em] text-white transition hover:bg-[#275c42] ${actionButtonClassName}`}
        >
          Create Account
        </button>

        <div className="grid gap-3 pt-2 sm:grid-cols-2">
          <Button type="button" variant="primary" className={actionButtonClassName}>
            Sign Up with Google
          </Button>
          <Button type="button" variant="primary" className={actionButtonClassName}>
            Sign Up with Apple
          </Button>
        </div>
      </form>

      <div className="mt-8 border-t border-slate-200 pt-6 text-sm text-slate-600">
        Already have an account?{' '}
        <Link
          to="/auth/signin"
          className="font-semibold text-[#2f6f4f] transition hover:text-[#14213d]"
        >
          Log In
        </Link>
      </div>
    </>
  );
};

export default SignUpPage;