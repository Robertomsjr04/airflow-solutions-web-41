
import React from 'react';

interface SkipLinkProps {
  targetId: string;
  children: React.ReactNode;
}

const SkipLink = ({ targetId, children }: SkipLinkProps) => {
  return (
    <a 
      href={`#${targetId}`}
      className="fixed top-0 left-0 -translate-y-full focus:translate-y-0 bg-airflow-blue text-white p-3 z-[9999] transition-transform"
    >
      {children}
    </a>
  );
};

export default SkipLink;
