import React from 'react';

export interface LogoProps {
  variant?: 'primary' | 'stacked' | 'monogram' | 'watermark';
  theme?: 'dark' | 'light'; // dark text for light bg, light text for dark bg
  size?: 'sm' | 'md' | 'lg' | 'xl';
  showSubtitle?: boolean;
  className?: string;
}

export const Logo: React.FC<LogoProps> = ({
  variant = 'primary',
  theme = 'dark',
  size = 'md',
  showSubtitle = true,
  className = '',
}) => {
  // Color tokens based on theme
  const primaryText = theme === 'light' ? '#F7F1E8' : '#3A2522';
  const secondaryText = theme === 'light' ? 'rgba(247, 241, 232, 0.75)' : '#76635D';
  const accentGold = '#C6A477';
  const accentTerracotta = '#A96658';

  // Size mapping
  const iconSizeMap = {
    sm: 'w-7 h-7',
    md: 'w-9 h-9 sm:w-10 sm:h-10',
    lg: 'w-12 h-12 sm:w-14 sm:h-14',
    xl: 'w-16 h-16 sm:w-20 sm:h-20',
  };

  const titleSizeMap = {
    sm: 'text-base font-semibold tracking-[0.15em]',
    md: 'text-xl sm:text-2xl font-bold tracking-[0.18em]',
    lg: 'text-2xl sm:text-3xl font-bold tracking-[0.2em]',
    xl: 'text-3xl sm:text-4xl lg:text-5xl font-bold tracking-[0.22em]',
  };

  const subtitleSizeMap = {
    sm: 'text-[9px] tracking-[0.22em]',
    md: 'text-[10px] sm:text-[11px] tracking-[0.25em]',
    lg: 'text-[11px] sm:text-[12px] tracking-[0.28em]',
    xl: 'text-xs sm:text-sm tracking-[0.3em]',
  };

  // Bespoke Monogram SVG Icon
  const MonogramSvg = ({ svgClassName = '' }: { svgClassName?: string }) => (
    <svg
      viewBox="0 0 100 100"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={`${iconSizeMap[size]} ${svgClassName} shrink-0 transition-transform duration-300 group-hover:scale-105`}
      aria-hidden="true"
    >
      {/* Outer Fine Champagne Circle Frame */}
      <circle
        cx="50"
        cy="50"
        r="47"
        stroke={accentGold}
        strokeWidth="1.2"
        strokeDasharray="180 4 2 4"
        className="opacity-80"
      />
      <circle cx="50" cy="50" r="43" stroke={primaryText} strokeWidth="0.8" opacity="0.3" />

      {/* Subtle Mehendi Paisley/Lotus Curve Flourish Top */}
      <path
        d="M 50 12 C 43 19, 36 19, 36 24 C 36 28, 43 27, 50 21 C 57 27, 64 28, 64 24 C 64 19, 57 19, 50 12 Z"
        fill={accentGold}
        opacity="0.85"
      />

      {/* Central RM Monogram Typography */}
      <text
        x="50"
        y="62"
        fontFamily="Cormorant Garamond, Georgia, serif"
        fontSize="36"
        fontWeight="600"
        fill={primaryText}
        textAnchor="middle"
        letterSpacing="-1.5"
      >
        RM
      </text>

      {/* Subtle Mehendi Diamond Accent Bottom */}
      <path
        d="M 50 74 L 53.5 78 L 50 82 L 46.5 78 Z"
        fill={accentGold}
        opacity="0.9"
      />
      <circle cx="41" cy="78" r="1.2" fill={accentTerracotta} />
      <circle cx="59" cy="78" r="1.2" fill={accentTerracotta} />
    </svg>
  );

  // MONOGRAM VARIANT ONLY
  if (variant === 'monogram') {
    return (
      <div className={`inline-flex items-center justify-center ${className}`}>
        <MonogramSvg />
      </div>
    );
  }

  // WATERMARK VARIANT
  if (variant === 'watermark') {
    return (
      <div
        className={`inline-flex items-center gap-3 opacity-25 select-none pointer-events-none ${className}`}
      >
        <MonogramSvg svgClassName="opacity-60" />
        <div className="flex flex-col">
          <span
            className="font-serif uppercase font-bold text-sm tracking-[0.25em]"
            style={{ color: primaryText }}
          >
            RAJU MEHENDI
          </span>
          <span
            className="font-sans text-[9px] uppercase tracking-[0.3em]"
            style={{ color: secondaryText }}
          >
            OFFICIAL WATERMARK
          </span>
        </div>
      </div>
    );
  }

  // STACKED VARIANT
  if (variant === 'stacked') {
    return (
      <div className={`flex flex-col items-center text-center ${className}`}>
        <MonogramSvg svgClassName="mb-3" />
        <div className="space-y-1">
          <h1
            className={`font-serif uppercase font-bold leading-none ${titleSizeMap[size]}`}
            style={{ color: primaryText }}
          >
            RAJU MEHENDI
          </h1>
          {showSubtitle && (
            <div className="flex items-center justify-center gap-2 pt-1">
              <span className="w-4 h-px" style={{ backgroundColor: accentGold }} />
              <p
                className={`font-sans uppercase font-semibold text-center ${subtitleSizeMap[size]}`}
                style={{ color: secondaryText }}
              >
                BHOPAL • INDIA • WORLDWIDE
              </p>
              <span className="w-4 h-px" style={{ backgroundColor: accentGold }} />
            </div>
          )}
        </div>
      </div>
    );
  }

  // PRIMARY HORIZONTAL LOGO
  return (
    <div className={`inline-flex items-center gap-3.5 sm:gap-4 group ${className}`}>
      <MonogramSvg />

      <div className="flex flex-col leading-none">
        <span
          className={`font-serif uppercase font-bold leading-none transition-colors duration-300 group-hover:text-[${accentTerracotta}] ${titleSizeMap[size]}`}
          style={{ color: primaryText }}
        >
          RAJU MEHENDI
        </span>

        {showSubtitle && (
          <span
            className={`font-sans uppercase font-medium mt-1 transition-colors duration-300 ${subtitleSizeMap[size]}`}
            style={{ color: secondaryText }}
          >
            BHOPAL • INDIA • WORLDWIDE
          </span>
        )}
      </div>
    </div>
  );
};
