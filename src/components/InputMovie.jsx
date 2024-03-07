import React from 'react';

export default function InputMovie({ value, onChange }) {
  return (
    <input
      className="input"
      type="text"
      value={value}
      onChange={onChange} // Pasar el evento directamente
    />
  );
}
