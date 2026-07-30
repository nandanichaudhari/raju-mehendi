import React, { useState, useEffect } from 'react';
import { Logo } from './Logo';

export const BrandLoader: React.FC = () => {
  const [loading, setLoading] = useState(true);
  const [fadeOut, setFadeOut] = useState(false);

  useEffect(() => {
    // Quick 800ms reveal timer, never delays page interactivity
    const timer1 = setTimeout(() => {
      setFadeOut(true);
    }, 800);

    const timer2 = setTimeout(() => {
      setLoading(false);
    }, 1100);

    return () => {
      clearTimeout(timer1);
      clearTimeout(timer2);
    };
  }, []);

  if (!loading) return null;

  return (
    <div
      className={`fixed inset-0 z-50 bg-[#3A2522] flex flex-col items-center justify-center transition-opacity duration-300 ${
        fadeOut ? 'opacity-0 pointer-events-none' : 'opacity-100'
      }`}
    >
      <div className="flex flex-col items-center gap-4 animate-fade-in px-4">
        <Logo variant="stacked" size="lg" theme="light" />
        <div className="w-16 h-0.5 bg-[#C6A477]/30 rounded-full overflow-hidden mt-2">
          <div className="w-full h-full bg-[#C6A477] animate-pulse" />
        </div>
      </div>
    </div>
  );
};
