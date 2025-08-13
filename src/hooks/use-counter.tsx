import { useEffect, useRef, useState } from 'react';

interface UseCounterProps {
  end: number;
  duration?: number;
  start?: number;
  trigger?: boolean;
}

export function useCounter({
  end,
  duration = 2000,
  start = 0,
  trigger = false,
}: UseCounterProps) {
  const [count, setCount] = useState(start);
  const startTimeRef = useRef<number | null>(null);
  const requestRef = useRef<number>(0);

  useEffect(() => {
    if (!trigger) {
      setCount(start);
      return;
    }

    const animate = (timestamp: number) => {
      if (!startTimeRef.current) {
        startTimeRef.current = timestamp;
      }

      const elapsed = timestamp - startTimeRef.current;
      const progress = Math.min(elapsed / duration, 1);

      // Easing function (ease-out)
      const easeOut = 1 - Math.pow(1 - progress, 3);

      const currentCount = Math.floor(start + (end - start) * easeOut);
      setCount(currentCount);

      if (progress < 1) {
        requestRef.current = requestAnimationFrame(animate);
      }
    };

    requestRef.current = requestAnimationFrame(animate);

    return () => {
      if (requestRef.current) {
        cancelAnimationFrame(requestRef.current);
      }
      startTimeRef.current = null;
    };
  }, [trigger, end, start, duration]);

  return count;
}
