import { useState } from 'react';
import { useSpring, animated } from '@react-spring/web';
import styles from '@/styles/CardContent.module.css';
import Card from "@/app/images/card.gif"
import MoonCake from "@/app/images/moon_cake.gif"
import Image from 'next/image';
import confetti from 'canvas-confetti';

const CardContent: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  const openStyle = useSpring({
    transform: isOpen ? 'rotateY(0deg)' : 'rotateY(180deg)',
    config: { tension: 200, friction: 20 },
  });

  const handleFireworks = () => {
    const end = Date.now() + (5 * 1000);
    const colors = ['#bb0000', '#ffffff'];
    (function frame() {
      confetti({
        particleCount: 2,
        angle: 75,
        spread: 40,
        origin: { x: 0 },
        colors: colors
      });
      confetti({
        particleCount: 2,
        angle: 105,
        spread: 40,
        origin: { x: 1 },
        colors: colors
      });

      if (Date.now() < end) {
        requestAnimationFrame(frame);
      }
    }())
  };

  return (
    <div className={styles.cardContainer} onClick={() => {
      setIsOpen(!isOpen)
      if(!isOpen) handleFireworks()
    }}>
      <animated.div className={styles.card} style={openStyle}>
        {!isOpen ? (
          <div className={styles.cover}>
          <Image src={Card} alt="Moon" className={styles.moon} />
          </div>
        ) : (
          <div className={styles.content}>
            <p className={styles.textLove}>Chúc em trung thu vui vẻ, hạnh phúc và luôn ngập tràn niềm vui</p>
            <Image src={MoonCake} alt="Moon" className={styles.moon} />
            <div className={styles.textContainer}>
              <p className={styles.textLove}>Yêu emmm</p>
              <p className={styles.textHeart}>💕💕💕💕💕💕💕💕💕💕💕💕</p>
            </div>
          </div>
        )}
      </animated.div>
    </div>
  );
}

export default CardContent;
