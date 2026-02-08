'use client';

import { useRouter } from 'next/navigation';
import { useState } from 'react';
import styles from './page.module.css';

export default function Page2() {
  const router = useRouter();

  const [yesScale, setYesScale] = useState(1);
  const [isFree, setIsFree] = useState(false);
  const [noPos, setNoPos] = useState({ x: 0, y: 0 });

  const texts = [
    'NO 😭',
    'Please 🥺',
    'mai itna cute hu 🥺',
    'Manjao please 😢',
    'Ek chance 🥹',
    'Please yaar 💔',
    'yrr ek chance de de 🥺',
    'dekho na 🥹',
  ];
  const [i, setI] = useState(0);

  const moveNo = () => {
    setIsFree(true);

    setNoPos({
      x: Math.random() * (window.innerWidth - 160),
      y: Math.random() * (window.innerHeight - 80),
    });

    setYesScale((s) => s + 0.2);
    setI((v) => (v + 1) % texts.length);
  };

  return (
    <>
      {/* 🌹 Falling Roses */}
      <div className="hearts">
        {Array.from({ length: 25 }).map((_, i) => (
          <span
            key={i}
            className="heart"
            style={{
              left: `${Math.random() * 100}%`,
              fontSize: `${18 + Math.random() * 16}px`,
              animationDuration: `${3 + Math.random() * 3}s`,
            }}
          >
            🌹
          </span>
        ))}
      </div>
      
      {/* 💖 Content */}
      <div className={styles.container}>
        <h1 className={styles.title}>
          Will you be my Valentine?? 💕
        </h1>

        <p className={styles.subText}>
          Official invite from your long-distance bf (keh skte h 😁) 💌💌
        </p>

        <div className={styles.buttonRow}>
          {/* YES */}
          <button
            className={`${styles.btn} ${styles.yes}`}
            style={{ transform: `scale(${yesScale})` }}
            onClick={() => router.push('/page3')}
          >
            YES 💖
          </button>

          {/* NO */}
          <button
            className={`${styles.btn} ${styles.no}`}
            style={
              isFree
                ? { position: 'fixed', left: noPos.x, top: noPos.y }
                : {}
            }
            onMouseEnter={moveNo}
            onTouchStart={moveNo}
          >
            {texts[i]}
          </button>
        </div>
      </div>
    </>
  );
}
