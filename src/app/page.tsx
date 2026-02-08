'use client';

import { useRouter } from 'next/navigation';
import { useEffect, useRef, useState } from 'react';
import styles from './page.module.css';

type Heart = {
  left: string;
  size: string;
  duration: string;
  delay: string;
};

export default function Page1() {
  const router = useRouter();

  const [progress, setProgress] = useState(0);
  const holding = useRef(false);
  const raf = useRef<number | null>(null);
  const navigated = useRef(false);

  const radius = 76;
  const circumference = 2 * Math.PI * radius;

  const animate = () => {
    if (!holding.current) return;
    setProgress((p) => Math.min(p + 0.6, 100));
    raf.current = requestAnimationFrame(animate);
  };

  const startHold = () => {
    if (holding.current) return;
    holding.current = true;
    raf.current = requestAnimationFrame(animate);
  };

  const stopHold = () => {
    holding.current = false;
    if (raf.current) cancelAnimationFrame(raf.current);
    setProgress(0);
  };

  useEffect(() => {
    if (progress >= 100 && !navigated.current) {
      navigated.current = true;
      router.push('/page2');
    }
  }, [progress, router]);

  const [hearts, setHearts] = useState<Heart[]>([]);
  useEffect(() => {
    setHearts(
      Array.from({ length: 30 }).map(() => ({
        left: `${Math.random() * 100}%`,
        size: `${10 + Math.random() * 20}px`,
        duration: `${1.2 + Math.random() * 1.5}s`,
        delay: `${Math.random() * 1.5}s`,
      }))
    );
  }, []);

  return (
    <>
      <div
        style={{
          position: 'fixed',
          inset: 0,
          background: 'linear-gradient(180deg, #ffe6ec, #ffd6e0)',
          zIndex: 0,
        }}
      />

      <div className="hearts">
        {hearts.map((h, i) => (
          <span
            key={i}
            className="heart"
            style={{
              left: h.left,
              fontSize: h.size,
              animationDuration: h.duration,
              animationDelay: h.delay,
            }}
          >
            ❤️
          </span>
        ))}
      </div>

      <div className={styles.container}>
        <h1 className={styles.title}>Just for you</h1>

        <div className={styles.ringWrapper}>
          <svg className={styles.ringSvg}>
            <circle
              className={`${styles.ringCircle} ${styles.bg}`}
              cx="80"
              cy="80"
              r={radius}
            />
            <circle
              className={`${styles.ringCircle} ${styles.progress}`}
              cx="80"
              cy="80"
              r={radius}
              strokeDasharray={circumference}
              strokeDashoffset={
                circumference - (progress / 100) * circumference
              }
            />
          </svg>

          <button
            className={styles.heartButton}
            onMouseDown={startHold}
            onMouseUp={stopHold}
            onMouseLeave={stopHold}
            onTouchStart={startHold}
            onTouchEnd={stopHold}
          >
            ❤️
          </button>
        </div>

        <p className={styles.tapText}>
          {progress > 0
            ? 'Keep holding... something special is coming!'
            : 'Press & hold'}
        </p>
      </div>
    </>
  );
}
