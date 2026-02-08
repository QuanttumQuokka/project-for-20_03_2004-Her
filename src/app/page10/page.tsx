'use client';

import { useState } from 'react';
import styles from './page.module.css';

export default function Page10() {
  const [finished, setFinished] = useState(false);

  return (
    <div className={styles.container}>
      <h1 className={styles.title}>
        Ek ithuu si chhotiii si baat...
        meri tarf se tere liye ❤️
      </h1>

      {/* 🎧 Voice Note */}
      <audio
        className={styles.audio}
        controls
        onEnded={() => setFinished(true)}
      >
        <source src="/apology.mp3" type="audio/mpeg" />
        Your browser does not support the audio element.
      </audio>

      {/* 💖 Button appears AFTER voice note */}
      {finished && (
        <button className={styles.finalBtn}>
          Will you be my girlfriend ?? 💖  
          <br />
          <span>Yes y no ka...msg karke mujhe bata dena 🥺</span>
        </button>
      )}
    </div>
  );
}
