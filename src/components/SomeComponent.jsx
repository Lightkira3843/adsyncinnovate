// src/components/SomeComponent.jsx
import React from 'react';
import { useAuth } from '../context';

const SomeComponent = () => {
  const { currentUser } = useAuth();

  return (
    <div>
      {currentUser ? (
        <p>Welcome, {currentUser.email}</p>
      ) : (
        <p>Please log in.</p>
      )}
    </div>
  );
};

export default SomeComponent;
