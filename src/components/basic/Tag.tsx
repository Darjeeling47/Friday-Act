import React from 'react';
import { cn } from '@/utils/utils';

const Tag = ({ text = "", color = 'bg-blue-200' }) => {
  return (
    <div
      className={cn(
        "px-2 py-1 rounded-full text-footnote",
        !color && "border border-mgray-1"
      )}
      style={{
        color: color ? `#${color}` : "#000",
        backgroundColor: color ? `#${color}20` : "#000020",
      }}
    >
      {text}
    </div>
  );
};

export default Tag;
