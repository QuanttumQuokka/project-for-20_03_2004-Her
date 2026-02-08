'use client';

import { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import styles from './page.module.css';

type Heart = {
  left: string;
  duration: string;
  delay: string;
};

export default function Page9() {
  const [open, setOpen] = useState(false);
  const [hearts, setHearts] = useState<Heart[]>([]);
  const router = useRouter();

  useEffect(() => {
    const generatedHearts = Array.from({ length: 18 }).map(() => ({
      left: `${Math.random() * 100}%`,
      duration: `${4 + Math.random() * 4}s`,
      delay: `${Math.random() * 3}s`,
    }));
    setHearts(generatedHearts);
  }, []);

  const handleOpen = () => {
    setOpen(true);
  };

  const goNext = () => {
    router.push('/page10');
  };

  return (
    <div className={styles.container}>
      {/* ❤️ Falling hearts */}
      <div className={styles.hearts}>
        {hearts.map((h, i) => (
          <span
            key={i}
            className={styles.heart}
            style={{
              left: h.left,
              animationDuration: h.duration,
              animationDelay: h.delay,
            }}
          >
            ❤️
          </span>
        ))}
      </div>

      {!open ? (
        <div className={styles.envelope} onClick={handleOpen}>
          <div className={styles.circle}>💌</div>
          <p className={styles.tap}>Tap it and read it mam 😭</p>
        </div>
      ) : (
        <div className={styles.letter}>
          <h2>For you only mam ❤️</h2>

          <p>
            I don’t know how to start this… but I just want you to know one thing
            <br /><br />
            You came into my life so softly, and somehow made everything feel warmer
            <br /><br />
            Your presence feels safe. Your smile feels like home
            <br /><br />
            Thank you for being you. Thank you for staying
            <br /><br />
            And thank you...for making me feel this way
            <br /><br />
            or haa tumne haa kiya hai y naa...mujhe inform kr dena...thikeee...
          </p>

          <span className={styles.fade}>
            sukriya...bhut sukriya...and sry late ho gaya ye bana rha tha isliye✨
          </span>

          <button className={styles.nextBtn} onClick={goNext}>
            ek last cheez or 👀💖
          </button>
        </div>
      )}
    </div>
  );
}
