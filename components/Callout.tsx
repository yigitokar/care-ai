// components/Callout.tsx
import React from 'react';

interface CalloutProps {
  children: React.ReactNode;
}

export function Callout({ children }: CalloutProps) {
  return (
    <div className="bg-gray-100 border-l-4 border-blue-500 p-4 my-4">
      {children}
    </div>
  );
}