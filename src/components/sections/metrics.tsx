'use client';

import { useEffect, useRef, useState } from 'react';

import { useCounter } from '@/hooks/use-counter';

interface Metric {
  id: string;
  value: number;
  label: string;
  suffix?: string;
  prefix?: string;
}

const metrics: Metric[] = [
  {
    id: 'clients-helped',
    value: 500,
    label: 'Clients Helped',
    suffix: '+',
  },
  {
    id: 'years-experience',
    value: 15,
    label: 'Years of Experience',
  },
  {
    id: 'success-rate',
    value: 98,
    label: 'Success Rate',
    suffix: '%',
  },
  {
    id: 'sessions-conducted',
    value: 2500,
    label: 'Sessions Conducted',
    suffix: '+',
  },
];

interface MetricCardProps {
  metric: Metric;
  isVisible: boolean;
}

const MetricCard: React.FC<MetricCardProps> = ({ metric, isVisible }) => {
  const count = useCounter({
    end: metric.value,
    duration: 2000,
    trigger: isVisible,
  });

  return (
    <div className="text-center">
      <div className="text-primary-foreground mb-2 font-serif text-4xl font-bold md:text-5xl lg:text-6xl">
        {metric.prefix}
        {count.toLocaleString()}
        {metric.suffix}
      </div>
      <p className="text-primary-foreground/90 text-sm md:text-lg">
        {metric.label}
      </p>
    </div>
  );
};

export function MetricsBar() {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.unobserve(entry.target);
        }
      },
      {
        threshold: 0.3,
        rootMargin: '0px 0px -100px 0px',
      }
    );

    const currentRef = sectionRef.current;
    if (currentRef) {
      observer.observe(currentRef);
    }

    return () => {
      if (currentRef) {
        observer.unobserve(currentRef);
      }
    };
  }, []);

  return (
    <section ref={sectionRef} className="bg-primary py-16 md:py-20">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-2 place-items-center gap-8 md:grid-cols-4 md:gap-12">
          {metrics.map((metric) => (
            <MetricCard key={metric.id} metric={metric} isVisible={isVisible} />
          ))}
        </div>
      </div>
    </section>
  );
}
