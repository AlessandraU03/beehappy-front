import React from 'react';
// Asegúrate de que la imagen esté en `public/assets/login-bg.jpg` o ajusta el path

const AuthLayout = ({ children }) => {
  return (
    <div className="min-h-screen flex relative overflow-hidden md:flex-row flex-col">
      {/* Left Side with Background Image */}
      <div
        className="relative flex-1 flex justify-center items-center md:min-h-screen min-h-[30vh] bg-cover bg-center"
        style={{ backgroundImage: `url('/login.png')` }} // CAMBIA el path si usas otra ruta
      >
        {/* Patrón de hexágonos (opcional) */}
        <div
          className="absolute inset-0 opacity-10 bg-cover"
          style={{ backgroundImage: `url('/assets/hexagon-pattern.svg')` }}
        ></div>

       
      </div>

      {/* Lado Azul Oscuro */}
      <div className="flex-1 flex justify-center items-center p-4 bg-bh-dark-blue md:min-h-screen min-h-[70vh]">
        {children}
      </div>
    </div>
  );
};

export default AuthLayout;
