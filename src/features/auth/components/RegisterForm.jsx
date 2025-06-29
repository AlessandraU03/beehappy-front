// src/features/auth/components/RegistrationForm.jsx
import React from 'react';
import Input from '../../../shared/components/Input';
import Button from '../../../shared/components/Button';
import useRegistration from '../hooks/useRegistration';

const RegistrationForm = ({ onRegistrationSuccess }) => {
  const {
    formData,
    errors,
    handleChange,
    handleSubmit,
    isSubmitting,
    registrationError,
  } = useRegistration(onRegistrationSuccess);

  return (
    <form onSubmit={handleSubmit} className="flex flex-col space-y-5">
      <Input
        label="Nombre(s):"
        placeholder="Ingresa tu nombre"
        name="name"
        value={formData.name}
        onChange={handleChange}
        error={errors.name}
      />
      {errors.name && <p className="text-bh-error text-sm -mt-3">{errors.name}</p>}

      <Input
        label="Apellidos:"
        placeholder="Ingresa tus apellidos"
        name="lastName"
        value={formData.lastName}
        onChange={handleChange}
        error={errors.lastName}
      />
      {errors.lastName && <p className="text-bh-error text-sm -mt-3">{errors.lastName}</p>}

      <Input
        label="Usuario:"
        placeholder="Máximo 20 caracteres"
        name="username"
        value={formData.username}
        onChange={handleChange}
        error={errors.username}
      />
      {errors.username && <p className="text-bh-error text-sm -mt-3">{errors.username}</p>}

      <Input
        label="Correo electrónico:"
        placeholder="Ingresa tu correo electrónico"
        name="email"
        type="email"
        value={formData.email}
        onChange={handleChange}
        error={errors.email}
      />
      {errors.email && <p className="text-bh-error text-sm -mt-3">{errors.email}</p>}

      <Input
        label="Contraseña:"
        placeholder="Mínimo 8 caracteres"
        name="password"
        type="password"
        value={formData.password}
        onChange={handleChange}
        error={errors.password}
      />
      {errors.password && <p className="text-bh-error text-sm -mt-3">{errors.password}</p>}

      {registrationError && <p className="text-bh-error text-sm text-center">{registrationError}</p>}

      <Button type="submit" disabled={isSubmitting}>
        {isSubmitting ? 'Registrando...' : 'Registrarse'}
      </Button>

      <p className="text-center text-bh-light-blue-gray text-sm mt-6">
        ¿Ya tienes una cuenta?{' '}
        
      </p>
    </form>
  );
};

export default RegistrationForm;