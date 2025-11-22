import React from 'react';
import type { User } from '../types/User';

interface Props {
  user: User | null;
  onClose: () => void;
}

export function UserModal({ user, onClose }: Props) {
  if (!user) return null;

  return (
    <div
      className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50"
      onClick={onClose}
      role="dialog"
      aria-modal="true"
      aria-labelledby="modal-title"
    >
      <div
        className="bg-white p-6 rounded-lg shadow-xl max-w-md w-full mx-4"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="flex justify-between items-center mb-4">
          <h2 id="modal-title" className="text-xl font-bold text-gray-800">
            {user.name}
          </h2>
          <button
            className="text-gray-500 hover:text-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
            onClick={onClose}
            aria-label="Fechar modal"
          >
            ✕
          </button>
        </div>
        <div className="space-y-2 text-gray-700">
          <p>
            <strong>Email:</strong> {user.email}
          </p>
          <p>
            <strong>Telefone:</strong> {user.phone}
          </p>
          <p>
            <strong>Empresa:</strong> {user.company.name}
          </p>
          <p>
            <strong>Cidade:</strong> {user.address.city}
          </p>
        </div>
      </div>
    </div>
  );
}