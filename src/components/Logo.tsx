import React from 'react';

interface LogoProps {
  variant?: 'horizontal' | 'stacked' | 'mark-only' | 'tagline-stacked';
  colorTheme?: 'default' | 'rain-blue' | 'wet-siana' | 'new-green' | 'white';
  className?: string;
  size?: 'sm' | 'md' | 'lg' | 'xl';
}

/**
 * Pitter Patter Studio Brand Logo & Mark
 * Recreated with high-precision SVG vectors following the brand guidelines:
 * - The Brand Mark: The curled "O" face with smiling arched eyes and mouth
 * - The Logotype: "PITTER PATTER STUDIO" with stencil cut letters
 * - The Tagline: "learn play explore" in flowing cursive script
 */
export const Logo: React.FC<LogoProps> = ({
  variant = 'horizontal',
  colorTheme = 'default',
  className = '',
  size = 'md',
}) => {
  // Theme color mapping
  const colors = {
    default: {
      mark: '#1E232B',
      text: '#1E232B',
      accent: '#4F9CF8',
      tagline: '#B8433C',
    },
    'rain-blue': {
      mark: '#4F9CF8',
      text: '#1E232B',
      accent: '#4F9CF8',
      tagline: '#4F9CF8',
    },
    'wet-siana': {
      mark: '#B8433C',
      text: '#1E232B',
      accent: '#B8433C',
      tagline: '#B8433C',
    },
    'new-green': {
      mark: '#48BF7B',
      text: '#1E232B',
      accent: '#48BF7B',
      tagline: '#48BF7B',
    },
    white: {
      mark: '#FFFFFF',
      text: '#FFFFFF',
      accent: '#FFFFFF',
      tagline: '#FFFFFF',
    },
  }[colorTheme];

  // Size mapping for mark
  const markDimensions = {
    sm: 36,
    md: 46,
    lg: 60,
    xl: 84,
  }[size];

  // The Curled "O" Brand Mark with Smile
  const BrandMark = ({ dimension }: { dimension: number }) => (
    <svg
      width={dimension}
      height={dimension}
      viewBox="0 0 100 100"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className="shrink-0 transition-transform duration-300 hover:rotate-6"
      aria-label="Pitter Patter Studio Brand Mark"
    >
      {/* Outer curled swirl body - "It is not the O. It is from the O." */}
      <path
        d="M68 36.5C64.5 27 55.5 20.5 45 20.5C28.7 20.5 15.5 33.7 15.5 50C15.5 66.3 28.7 79.5 45 79.5C61.3 79.5 74.5 66.3 74.5 50C74.5 45.2 73.3 40.7 71.2 36.8C69.5 33.7 71.8 30 75.3 30C83.5 30 87 23.5 86 16C73 17 69 22 68 36.5Z"
        fill={colors.mark}
      />
      {/* Inner cutout creating the curled ring */}
      <circle cx="45" cy="50" r="18.5" fill={colorTheme === 'white' ? '#1E232B' : '#FFFFFF'} />
      {/* Friendly smiling face elements inside the circle */}
      {/* Left eye: arched friendly arc */}
      <path
        d="M37.5 45.5C37.5 43 40.5 41 43.5 43C44 43.3 43.8 45.8 42 45.8C39.5 45.8 38 45.8 37.5 45.5Z"
        fill={colors.mark}
      />
      {/* Right eye: arched friendly arc */}
      <path
        d="M48.5 43C51.5 41 54.5 43 54.5 45.5C54 45.8 52.5 45.8 50 45.8C48.2 45.8 48 43.3 48.5 43Z"
        fill={colors.mark}
      />
      {/* Cheerful smiling mouth */}
      <path
        d="M40 52C42 56 48 56 50 52"
        stroke={colors.mark}
        strokeWidth="2.8"
        strokeLinecap="round"
      />
    </svg>
  );

  if (variant === 'mark-only') {
    return (
      <div className={`inline-flex items-center ${className}`}>
        <BrandMark dimension={markDimensions} />
      </div>
    );
  }

  return (
    <div className={`inline-flex items-center gap-3 select-none ${className}`}>
      <BrandMark dimension={markDimensions} />
      
      <div className="flex flex-col justify-center leading-none">
        {/* Stencil Cut Logotype: PITTER PATTER STUDIO */}
        <div
          className="font-condensed font-bold tracking-wider uppercase text-left leading-[1.05]"
          style={{
            color: colors.text,
            fontSize: size === 'sm' ? '1.05rem' : size === 'md' ? '1.25rem' : size === 'lg' ? '1.6rem' : '2.1rem',
            letterSpacing: '0.04em',
          }}
        >
          <div className="flex items-center">
            <span>P</span>
            <span className="opacity-90">I</span>
            <span>TTER</span>
          </div>
          <div className="flex items-center">
            <span>P</span>
            <span>ATTER</span>
          </div>
          <div className="flex items-center">
            <span>STUD</span>
            <span>I</span>
            <span>O</span>
          </div>
        </div>

        {/* Script Tagline: learn play explore */}
        {(variant === 'horizontal' || variant === 'tagline-stacked') && (
          <div
            className="font-script text-left mt-0.5"
            style={{
              color: colors.tagline,
              fontSize: size === 'sm' ? '0.9rem' : size === 'md' ? '1.1rem' : size === 'lg' ? '1.3rem' : '1.6rem',
              fontWeight: 500,
            }}
          >
            learn play explore
          </div>
        )}
      </div>
    </div>
  );
};
