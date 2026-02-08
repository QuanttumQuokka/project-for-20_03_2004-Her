'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import styles from './page.module.css';

export default function Page5() {
  const [showQR, setShowQR] = useState(false);
  const [showNext, setShowNext] = useState(false);
  const router = useRouter();

  const closeQR = () => {
    setShowQR(false);
    setShowNext(true);
  };

  return (
    <div className={styles.container}>

      {/* BOX IMAGE */}
      {!showQR && !showNext && (
        <img
          src="/box-photo.png"
          alt="Tap to open"
          className={styles.boxImage}
          onClick={() => setShowQR(true)}
        />
      )}

      {/* QR POPUP */}
      {showQR && (
        <div className={styles.overlay}>
          <div className={styles.popup}>

            <img
              src="/qr-photo.png"
              alt="QR Code"
              className={styles.qrImage}
            />

            <button className={styles.closeBtn} onClick={closeQR}>
              Close 💗
            </button>

          </div>
        </div>
      )}

      {/* NEXT BUTTON */}
      {showNext && (
        <button
          className={styles.nextBtn}
          onClick={() => router.push('/page6')}
        >
          bore ho gaye ho....right...<br />
          chalo ek game khelte hai thikee jii 💕
        </button>
      )}

    </div>
  );
}
