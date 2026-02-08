'use client';

import { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import styles from './page.module.css';

const photos = [
  '/p8-1.jpg',
  '/p8-2.jpg',
  '/p8-3.jpg',
  '/p8-4.jpg',
  '/p8-5.jpg'
];

export default function Page9() {
  const router = useRouter();

  const [opened, setOpened] = useState<boolean[]>([false, false, false, false]);
  const [active, setActive] = useState<number | null>(null);

  useEffect(() => {
    if (opened.every(Boolean)) {
      setTimeout(() => {
        router.push('/page9');
      }, 1000);
    }
  }, [opened, router]);

  const openGift = (index: number) => {
    setActive(index);
    setOpened(prev => {
      const copy = [...prev];
      copy[index] = true;
      return copy;
    });
  };

  return (
    <div className={styles.container}>
      <h1 className={styles.title}>
        bsss yee thoode se orrr giftss haiii 😭😭😭🎁💖
      </h1>

      {/* GIFTS IN ONE LINE */}
      <div className={styles.row}>
        {photos.map((_, i) => (
          <div key={i} className={styles.giftWrap}>
            <img
              src="/gifts.png"
              className={`${styles.gift} ${opened[i] ? styles.opened : ''}`}
              onClick={() => !opened[i] && openGift(i)}
            />

            {/* PHOTO OPENS BELOW THE SAME BOX */}
            {active === i && (
              <div className={styles.previewBox}>
                <img src={photos[i]} className={styles.previewImg} />
                <button
                  className={styles.closeBtn}
                  onClick={() => setActive(null)}
                >
                  Close 💕
                </button>
              </div>
            )}
          </div>
        ))}
      </div>

      <p className={styles.hint}>
        sab gifts khol liye...sryyyyy...yrr qr hi qrrrr....💫
      </p>
    </div>
  );
}
