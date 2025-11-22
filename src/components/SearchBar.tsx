import React from 'react';

interface Props {
  value: string;
  onChange: (value: string) => void;
}

export function SearchBar({ value, onChange }: Props) {
  return (
    <div className="mb-6">
      <input
        className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
        placeholder="Buscar usuário..."
        value={value}
        onChange={(e) => onChange(e.target.value)}
        type="text"
        aria-label="Buscar usuário"
      />
    </div>
  );
}