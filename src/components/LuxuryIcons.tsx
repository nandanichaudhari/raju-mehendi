import React from 'react';

export interface LuxuryIconProps {
  size?: 'sm' | 'md' | 'lg' | 'xl' | number;
  color?: string;
  className?: string;
  strokeWidth?: number;
  ariaLabel?: string;
}

const getSizeInPx = (size?: 'sm' | 'md' | 'lg' | 'xl' | number): number => {
  if (typeof size === 'number') return size;
  switch (size) {
    case 'sm': return 16;
    case 'md': return 20;
    case 'lg': return 24;
    case 'xl': return 32;
    default: return 20;
  }
};

const BaseIcon: React.FC<LuxuryIconProps & { children: React.ReactNode; viewBox?: string }> = ({
  size = 'md',
  color = 'currentColor',
  strokeWidth = 1.6,
  className = '',
  ariaLabel,
  viewBox = '0 0 24 24',
  children,
}) => {
  const px = getSizeInPx(size as 'sm' | 'md' | 'lg' | 'xl' | number);
  return (
    <svg
      width={px}
      height={px}
      viewBox={viewBox}
      fill="none"
      stroke={color}
      strokeWidth={strokeWidth}
      strokeLinecap="round"
      strokeLinejoin="round"
      className={`inline-block shrink-0 transition-all duration-300 ${className}`}
      aria-label={ariaLabel}
      aria-hidden={!ariaLabel}
      role={ariaLabel ? 'img' : 'presentation'}
    >
      {children}
    </svg>
  );
};

/* 1. BRIDAL HENNA ICON (Bespoke Palm + Lotus Line Motif) */
export const BridalHennaIcon: React.FC<LuxuryIconProps> = (props) => (
  <BaseIcon {...props} ariaLabel={props.ariaLabel || 'Bridal Henna'}>
    {/* Delicate lotus petal crown */}
    <path d="M12 3C10 6 8 8 8 11C8 13.2 9.8 15 12 15C14.2 15 16 13.2 16 11C16 8 14 6 12 3Z" />
    <path d="M12 15V21" />
    <path d="M8 18C10 19.5 14 19.5 16 18" />
    <path d="M5 11C6.5 12 7.5 13 8 15" />
    <path d="M19 11C17.5 12 16.5 13 16 15" />
  </BaseIcon>
);

/* 2. INDIAN WEDDING ICON (Royal Heritage Toran/Arch Motif) */
export const IndianWeddingIcon: React.FC<LuxuryIconProps> = (props) => (
  <BaseIcon {...props} ariaLabel={props.ariaLabel || 'Indian Wedding'}>
    <path d="M3 21V11C3 7 7 4 12 4C17 4 21 7 21 11V21" />
    <path d="M12 4V8" />
    <path d="M7 21V14C7 11.2 9.2 9 12 9C14.8 9 17 11.2 17 14V21" />
    <path d="M2 21H22" />
  </BaseIcon>
);

/* 3. DESTINATION MAP PIN ICON (Minimal Pin with inner mehendi curve) */
export const DestinationPinIcon: React.FC<LuxuryIconProps> = (props) => (
  <BaseIcon {...props} ariaLabel={props.ariaLabel || 'Destination Pin'}>
    <path d="M12 21C16 16.5 19 13.2 19 9.5C19 5.6 15.9 2.5 12 2.5C8.1 2.5 5 5.6 5 9.5C5 13.2 8 16.5 12 21Z" />
    <circle cx="12" cy="9.5" r="3" />
    <path d="M12 7.5C12.8 7.5 13.5 8.2 13.5 9" />
  </BaseIcon>
);

/* 4. CUSTOM MOTIF ICON (Artisan Feather & Fine Line Stroke) */
export const CustomMotifIcon: React.FC<LuxuryIconProps> = (props) => (
  <BaseIcon {...props} ariaLabel={props.ariaLabel || 'Custom Design'}>
    <path d="M20.2 3.8C18 6 12 14 12 14L8 10C8 10 16 4 18.2 1.8C19.3 0.7 21.3 2.7 20.2 3.8Z" />
    <path d="M12 14L4 22H1L2 19L10 11" />
    <path d="M15 8L18 11" />
  </BaseIcon>
);

/* 5. CALENDAR ICON (Thin Editorial Calendar Grid) */
export const CalendarIcon: React.FC<LuxuryIconProps> = (props) => (
  <BaseIcon {...props} ariaLabel={props.ariaLabel || 'Calendar'}>
    <rect x="3" y="4" width="18" height="17" rx="2.5" />
    <path d="M16 2V6" />
    <path d="M8 2V6" />
    <path d="M3 9H21" />
    <circle cx="8" cy="13" r="0.8" fill="currentColor" />
    <circle cx="12" cy="13" r="0.8" fill="currentColor" />
    <circle cx="16" cy="13" r="0.8" fill="currentColor" />
    <circle cx="8" cy="17" r="0.8" fill="currentColor" />
    <circle cx="12" cy="17" r="0.8" fill="currentColor" />
  </BaseIcon>
);

/* 6. WHATSAPP ICON (Clean Editorial Line WhatsApp Mark) */
export const WhatsAppIcon: React.FC<LuxuryIconProps> = (props) => (
  <BaseIcon {...props} ariaLabel={props.ariaLabel || 'WhatsApp'}>
    <path d="M17.6 6.4C16.1 4.9 14.1 4 12 4C7.6 4 4 7.6 4 12C4 13.5 4.4 14.9 5.2 16.1L4 20L8 18.8C9.2 19.5 10.6 19.9 12 19.9C16.4 19.9 20 16.3 20 11.9C20 9.8 19.1 7.9 17.6 6.4Z" />
    <path d="M9.5 8.5C9.3 8 9.1 8 8.9 8C8.7 8 8.5 8 8.3 8.2C8.1 8.4 7.5 8.9 7.5 10C7.5 11.1 8.3 12.2 8.5 12.4C8.7 12.6 10.1 14.8 12.3 15.7C14.1 16.4 14.5 16.2 15.1 16.1C15.7 16 16.8 15.3 17 14.7C17.2 14.1 17.2 13.6 17.1 13.5C17 13.4 16.8 13.3 16.3 13.1C15.8 12.8 13.5 11.7 13.1 11.6C12.8 11.4 12.5 11.4 12.3 11.7C12 12.1 11.4 12.8 11.2 13C11 13.2 10.8 13.2 10.3 13C9.8 12.8 8.3 12.2 7.5 11.1" />
  </BaseIcon>
);

/* 7. PHONE ICON */
export const PhoneIcon: React.FC<LuxuryIconProps> = (props) => (
  <BaseIcon {...props} ariaLabel={props.ariaLabel || 'Phone'}>
    <path d="M22 16.92V19.92C22 20.48 21.54 20.94 20.98 20.92C10.5 20.25 2.75 12.5 2.08 2.02C2.06 1.46 2.52 1 3.08 1H6.08C6.58 1 7 1.38 7.07 1.87C7.23 3.02 7.56 4.14 8.04 5.2C8.18 5.5 8.1 5.86 7.86 6.1L6.37 7.59C7.8 10.1 9.9 12.2 12.41 13.63L13.9 12.14C14.14 11.9 14.5 11.82 14.8 11.96C15.86 12.44 16.98 12.77 18.13 12.93C18.62 13 19 13.42 19 13.92V16.92Z" />
  </BaseIcon>
);

/* 8. MAIL ICON */
export const MailIcon: React.FC<LuxuryIconProps> = (props) => (
  <BaseIcon {...props} ariaLabel={props.ariaLabel || 'Email'}>
    <rect x="3" y="5" width="18" height="14" rx="2" />
    <path d="M3 7L12 13L21 7" />
  </BaseIcon>
);

/* 9. INSTAGRAM ICON */
export const InstagramIcon: React.FC<LuxuryIconProps> = (props) => (
  <BaseIcon {...props} ariaLabel={props.ariaLabel || 'Instagram'}>
    <rect x="3" y="3" width="18" height="18" rx="5" />
    <circle cx="12" cy="12" r="4" />
    <circle cx="17.5" cy="6.5" r="0.8" fill="currentColor" />
  </BaseIcon>
);

/* 10. ARROW RIGHT ICON */
export const ArrowRightIcon: React.FC<LuxuryIconProps> = (props) => (
  <BaseIcon {...props} ariaLabel={props.ariaLabel || 'Arrow Right'}>
    <path d="M5 12H19" />
    <path d="M13 6L19 12L13 18" />
  </BaseIcon>
);

/* 11. ARROW UP ICON */
export const ArrowUpIcon: React.FC<LuxuryIconProps> = (props) => (
  <BaseIcon {...props} ariaLabel={props.ariaLabel || 'Arrow Up'}>
    <path d="M12 19V5" />
    <path d="M5 12L12 5L19 12" />
  </BaseIcon>
);

/* 12. CHEVRON DOWN ICON */
export const ChevronDownIcon: React.FC<LuxuryIconProps> = (props) => (
  <BaseIcon {...props} ariaLabel={props.ariaLabel || 'Chevron Down'}>
    <path d="M6 9L12 15L18 9" />
  </BaseIcon>
);

/* 13. PLUS / MINUS ICONS FOR FAQ ACCORDIONS */
export const PlusIcon: React.FC<LuxuryIconProps> = (props) => (
  <BaseIcon {...props} ariaLabel={props.ariaLabel || 'Expand'}>
    <path d="M12 5V19" />
    <path d="M5 12H19" />
  </BaseIcon>
);

export const MinusIcon: React.FC<LuxuryIconProps> = (props) => (
  <BaseIcon {...props} ariaLabel={props.ariaLabel || 'Collapse'}>
    <path d="M5 12H19" />
  </BaseIcon>
);

/* 14. SPARKLE / STAR ICON */
export const SparkleIcon: React.FC<LuxuryIconProps> = (props) => (
  <BaseIcon {...props} ariaLabel={props.ariaLabel || 'Sparkle'}>
    <path d="M12 2C12 7.5 16.5 12 22 12C16.5 12 12 16.5 12 22C12 16.5 7.5 12 2 12C7.5 12 12 7.5 12 2Z" />
  </BaseIcon>
);

/* 15. QUOTE ICON */
export const QuoteIcon: React.FC<LuxuryIconProps> = (props) => (
  <BaseIcon {...props} ariaLabel={props.ariaLabel || 'Quote'}>
    <path d="M3 14C3 10 5.5 7 9 6.5V9C7 9.5 6 10.8 6 12.5H9V18H3V14Z" fill="currentColor" opacity="0.15" />
    <path d="M3 14C3 10 5.5 7 9 6.5V9C7 9.5 6 10.8 6 12.5H9V18H3V14Z" />
    <path d="M15 14C15 10 17.5 7 21 6.5V9C19 9.5 18 10.8 18 12.5H21V18H15V14Z" fill="currentColor" opacity="0.15" />
    <path d="M15 14C15 10 17.5 7 21 6.5V9C19 9.5 18 10.8 18 12.5H21V18H15V14Z" />
  </BaseIcon>
);

/* 16. CHECK ICON */
export const CheckIcon: React.FC<LuxuryIconProps> = (props) => (
  <BaseIcon {...props} ariaLabel={props.ariaLabel || 'Check'}>
    <path d="M20 6L9 17L4 12" />
  </BaseIcon>
);

/* 17. MENU / CLOSE ICONS */
export const MenuIcon: React.FC<LuxuryIconProps> = (props) => (
  <BaseIcon {...props} ariaLabel={props.ariaLabel || 'Open Menu'}>
    <path d="M4 8H20" />
    <path d="M4 16H20" />
  </BaseIcon>
);

export const CloseIcon: React.FC<LuxuryIconProps> = (props) => (
  <BaseIcon {...props} ariaLabel={props.ariaLabel || 'Close Menu'}>
    <path d="M18 6L6 18" />
    <path d="M6 6L18 18" />
  </BaseIcon>
);

/* 18. GLOBE / WORLDWIDE ICON */
export const GlobeIcon: React.FC<LuxuryIconProps> = (props) => (
  <BaseIcon {...props} ariaLabel={props.ariaLabel || 'Worldwide Travel'}>
    <circle cx="12" cy="12" r="9" />
    <path d="M3.6 9H20.4" />
    <path d="M3.6 15H20.4" />
    <path d="M12 3C14.5 6 16 9 16 12C16 15 14.5 18 12 21C9.5 18 8 15 8 12C8 9 9.5 6 12 3Z" />
  </BaseIcon>
);

/* 19. ZOOM / LIGHTBOX ICON */
export const ZoomIcon: React.FC<LuxuryIconProps> = (props) => (
  <BaseIcon {...props} ariaLabel={props.ariaLabel || 'Zoom Image'}>
    <circle cx="11" cy="11" r="7" />
    <path d="M21 21L16 16" />
    <path d="M11 8V14" />
    <path d="M8 11H14" />
  </BaseIcon>
);
