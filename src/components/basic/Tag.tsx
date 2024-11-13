import React from 'react';

const Tag = ({ text = "", bgColor = 'bg-blue-200', textColor = 'text-blue-700' }) => {
  return (
    <span className={`${bgColor} ${textColor} px-2 py-1 rounded-full`}>
      {text}
    </span>
  );
};

export default Tag;
