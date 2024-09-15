import { useState } from 'react';
import { useSpring, animated } from '@react-spring/web';
import styles from '@/styles/CardContent.module.css';
import Card from "@/app/images/card.gif"
import MoonCake from "@/app/images/moon_cake.gif"
import Image from 'next/image';

const CardContent: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  const openStyle = useSpring({
    transform: isOpen ? 'rotateY(0deg)' : 'rotateY(180deg)',
    config: { tension: 200, friction: 20 },
  });

  return (
    <div className={styles.cardContainer} onClick={() => setIsOpen(!isOpen)}>
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
