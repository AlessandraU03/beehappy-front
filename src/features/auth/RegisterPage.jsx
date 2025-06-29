import React from 'react';
import AuthLayout from '../../shared/layouts/AuthLayout';
import RegistrationForm from './components/RegisterForm';


const RegisterPage = () => {
  const handleRegistrationSuccess = (userData) => {
    console.log('Registration successful:', userData);
    // TODO: Navigate to dashboard or show success message
    // e.g., history.push('/dashboard'); or display a toast notification
  };

  return (
    <AuthLayout>
      <div className=" rounded-lg px-18 py-5  text-white">
        <div className="flex items-center justify-start gap-4 mb-5">
  <img
    src="bee.png"
    alt="BeeHappy Logo"
    className="w-[85.35px] h-[113.px]"
  />
  <h1 className="text-5xl font-poppins font-semibold">BeeHappy</h1>
</div>
        <p className="text-white font-poppins font-medium text-4xl text-start mb-4">
          ¡Únete a la colmena!
        </p> <p className="text-white font-poppins font-medium  text-2xl text-start mb-4">
          Crea tu cuenta para entrar al mundo BeeHappy.
        </p>
        <RegistrationForm onRegistrationSuccess={handleRegistrationSuccess} />
      </div>
    </AuthLayout>
  );
};

export default RegisterPage;