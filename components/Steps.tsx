// components/Steps.tsx
import React from 'react';

interface StepsProps {
  children: React.ReactNode;
}

export function Steps({ children }: StepsProps) {
  return (
    <ol className="list-decimal list-inside space-y-4 my-4">
      {React.Children.map(children, (child, index) => (
        <li key={index} className="pl-4">
          {child}
        </li>
      ))}
    </ol>
  );
}