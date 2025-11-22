import React from 'react';
import type { User } from '../types/User';

interface Props {
  user: User;
  onClick: () => void;
}

export function UserCard({ user, onClick }: Props) {
  return (
    <div
      className="bg-gray-50 border border-gray-200 rounded-lg p-4 cursor-pointer hover:bg-gray-100 hover:shadow-md transition duration-200"
      onClick={onClick}
      role="button"
      tabIndex={0}
      onKeyDown={(e) => {
        if (e.key === 'Enter' || e.key === ' ') {
          onClick();
        }
      }}
      aria-label={`Ver detalhes de ${user.name}`}
    >
      <h3 className="font-semibold text-lg text-gray-800 mb-1">{user.name}</h3>
      <p className="text-sm text-gray-600">{user.email}</p>
    </div>
  );
}