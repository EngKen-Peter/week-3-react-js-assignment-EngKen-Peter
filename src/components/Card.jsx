import React from 'react';

const Card = ({ title, children }) => {
  return (
    <div className="bg-white shadow-md rounded p-4">
      {title && <h2 className="text-xl font-semibold mb-2">{title}</h2>}
      <div>{children}</div>
    </div>
  );
};

export default Card;
