import { Link } from 'react-router-dom';

const variantClasses = {
  primary: 'border-[#7a5c46] bg-[#f5f1e8] text-[#2f5d50] hover:bg-[#e7dfd1]',
  secondary: 'border-[#2f5d50] bg-[#2f5d50] text-white hover:bg-[#25483e]',
  green: 'border-[#6f8a64] bg-[#6f8a64] text-white hover:bg-[#5d7555]',
};

const Button = ({
  children,
  to,
  type = 'button',
  variant = 'secondary',
  className = '',
}) => {
  const classes = [
    'inline-flex items-center justify-center rounded-full border-2 px-4 py-2 text-[10px] font-semibold uppercase tracking-[0.24em] transition',
    variantClasses[variant] ?? variantClasses.secondary,
    className,
  ]
    .join(' ')
    .trim();

  if (to) {
    return (
      <Link to={to} className={classes}>
        {children}
      </Link>
    );
  }

  return (
    <button type={type} className={classes}>
      {children}
    </button>
  );
};

export default Button;