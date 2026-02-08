'use client';

import { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import styles from './page.module.css';

const LETTER_TEXT = `
hnnnn to mohatarma jiii...💖
ky tum mere sth ye rista banana chahti hai...
agr haa to aage badte hai...
or agr naa thik hai koi n...agr naa kiya
to ek thank u letter ke sth sb yahi ruk jayega...
to dil se...soch smjh kr answer dena...
aage badna hai ya yahi rukhna hai...
`;

type Rose = {
  left: string;
  size: string;
  duration: string;
};

export default function Page3() {
  const router = useRouter();

  const [open, setOpen] = useState(false);
  const [displayText, setDisplayText] = useState('');
  const [index, setIndex] = useState(0);
  const [roses, setRoses] = useState<Rose[]>([]);

  useEffect(() => {
    const arr = Array.from({ length: 22 }).map(() => ({
      left: `${Math.random() * 100}%`,
      size: `${18 + Math.random() * 14}px`,
      duration: `${2 + Math.random() * 2}s`,
    }));
    setRoses(arr);
  }, []);

  useEffect(() => {
    if (!open) return;
    if (index < LETTER_TEXT.length) {
      const timer = setTimeout(() => {
        setDisplayText((prev) => prev + LETTER_TEXT[index]);
        setIndex((i) => i + 1);
      }, 35);
      return () => clearTimeout(timer);
    }
  }, [open, index]);

  const handleYes = () => {
    localStorage.setItem('valentine_answer', 'YES');
    router.push('/page-yes'); // ✅ FIXED
  };

  const handleNo = () => {
    localStorage.setItem('valentine_answer', 'NO');
    router.push('/page-no'); // ✅ FIXED
  };

  return (
    <>
      <div className="hearts">
        {roses.map((r, i) => (
          <span
            key={i}
            className="heart"
            style={{
              left: r.left,
              fontSize: r.size,
              animationDuration: r.duration,
            }}
          >
            🌹
          </span>
        ))}
      </div>

      <div className={styles.container}>
        <h1 className={styles.valentine}>
          ok ok mohtarma jii...without game.. 💕
        </h1>

        <h2 className={styles.noteTitle}>
          read this first....💖
        </h2>

        {!open ? (
          <div className={styles.letter} onClick={() => setOpen(true)}>
            <div className={styles.letterTop}>
              <span>💗</span>
              <span>💗</span>
            </div>
            <div className={styles.letterBody}>
              <div className={styles.bigHeart}>💖</div>
              <p className={styles.tapText}>Tap to open</p>
            </div>
          </div>
        ) : (
          <>
            <div className={styles.openLetter}>
              <div className={styles.topHeart}>🫀</div>
              {displayText}
            </div>

            <div className={styles.choiceRow}>
              <button className={styles.yesBtn} onClick={handleYes}>
                YES 💖
              </button>
              <button className={styles.noBtn} onClick={handleNo}>
                NO 😢
              </button>
            </div>
          </>
        )}
      </div>
    </>
  );
}
