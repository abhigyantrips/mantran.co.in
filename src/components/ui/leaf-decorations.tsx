import { cn } from '@/lib/utils';

interface LeafDecorationProps {
  className?: string;
  position?: 'top-right' | 'bottom-left' | 'top-left' | 'bottom-right';
  opacity?: number;
}

export const LeafDecoration1: React.FC<LeafDecorationProps> = ({
  className,
  position = 'top-right',
  opacity = 0.1,
}) => {
  const positionClasses = {
    'top-right': 'absolute top-0 right-0 rotate-12',
    'bottom-left': 'absolute bottom-0 left-0 rotate-180',
    'top-left': 'absolute top-0 left-0 -rotate-12',
    'bottom-right': 'absolute bottom-0 right-0 rotate-90',
  };

  return (
    <svg
      className={cn(
        'pointer-events-none h-64 w-64 md:h-96 md:w-96',
        positionClasses[position],
        className
      )}
      style={{ opacity }}
      viewBox="0 0 400 400"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M100 200C100 100 150 50 200 100C250 50 300 100 300 200C300 250 280 300 240 320C220 340 180 340 160 320C120 300 100 250 100 200Z"
        fill="currentColor"
        className="text-primary"
      />
      <path
        d="M120 180C140 160 160 140 180 160C200 140 220 160 240 180C260 200 240 240 200 220C160 240 140 200 120 180Z"
        fill="currentColor"
        className="text-primary"
      />
      <path
        d="M200 100C200 120 190 140 180 150C170 160 160 170 150 180"
        stroke="currentColor"
        strokeWidth="3"
        className="text-primary"
        fill="none"
      />
    </svg>
  );
};

export const LeafDecoration2: React.FC<LeafDecorationProps> = ({
  className,
  position = 'bottom-left',
  opacity = 0.08,
}) => (
  <svg
    className={cn(
      'pointer-events-none h-72 w-72 md:h-[28rem] md:w-[28rem]',
      position === 'top-right' && 'absolute top-0 right-0',
      position === 'bottom-left' && 'absolute bottom-0 left-0',
      position === 'top-left' && 'absolute top-0 left-0',
      position === 'bottom-right' && 'absolute right-0 bottom-0',
      className
    )}
    style={{ opacity }}
    viewBox="0 0 450 450"
    fill="none"
  >
    {/* Monstera-style leaf */}
    <path
      d="M225 50C280 80 320 120 350 180C380 240 370 300 340 340C310 380 250 390 200 370C150 350 110 310 90 260C70 210 80 150 120 110C160 70 205 55 225 50Z"
      fill="currentColor"
      className="text-primary"
    />
    {/* Leaf cuts/holes */}
    <ellipse
      cx="180"
      cy="150"
      rx="15"
      ry="30"
      fill="white"
      transform="rotate(-20 180 150)"
    />
    <ellipse
      cx="220"
      cy="200"
      rx="12"
      ry="25"
      fill="white"
      transform="rotate(15 220 200)"
    />
    <ellipse
      cx="260"
      cy="180"
      rx="10"
      ry="20"
      fill="white"
      transform="rotate(-30 260 180)"
    />
    <ellipse
      cx="200"
      cy="280"
      rx="18"
      ry="35"
      fill="white"
      transform="rotate(10 200 280)"
    />
    {/* Leaf veins */}
    <path
      d="M225 50C225 100 220 150 210 200C200 250 185 295 170 330"
      stroke="currentColor"
      strokeWidth="2"
      className="text-primary/60"
      fill="none"
    />
    <path
      d="M225 100C250 120 275 145 295 175"
      stroke="currentColor"
      strokeWidth="1.5"
      className="text-primary/40"
      fill="none"
    />
  </svg>
);
