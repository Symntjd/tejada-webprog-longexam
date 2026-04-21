import { Outlet } from 'react-router-dom';
import bgImg from '../assets/img/auth-camping.jpg';

const AuthLayout = () => {
  return (
    <section className="min-h-screen">
      <div className="grid min-h-screen w-full lg:grid-cols-[1fr_0.95fr]">

        <div
          className="hidden lg:block"
          style={{
            backgroundImage: `url(${bgImg})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            backgroundColor: '#e6efe9',
          }}
        />

        <main className="flex items-center bg-white px-6 py-10 sm:px-10 lg:px-16">
          <div className="mx-auto w-full max-w-md">
            <Outlet />
          </div>
        </main>

      </div>
    </section>
  );
};

export default AuthLayout;