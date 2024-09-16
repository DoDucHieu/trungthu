import { useState, useEffect } from 'react';
import styles from '@/styles/CountdownTimer.module.css';

type Props = {
    setIsReached: (value:boolean)=>void
}

const CountdownTimer = ({setIsReached}:Props) : React.ReactElement=> {
  const calculateTimeLeft = () => {
    const targetDate = new Date('2024-09-17T00:00:00');
    // const targetDate = new Date('2024-09-16T15:56:30');

    const now = new Date();
    const difference = targetDate.getTime() - now.getTime();
    // console.log("diff: ",  Math.floor(difference/1000));
    if(Math.floor(difference/1000) <= 0) setIsReached(true)
    let timeLeft = {
      days: 0,
      hours: 0,
      minutes: 0,
      seconds: 0,
    };

    if (difference > 0) {
      timeLeft = {
        days: Math.floor(difference / (1000 * 60 * 60 * 24)),
        hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
        minutes: Math.floor((difference / 1000 / 60) % 60),
        seconds: Math.floor((difference / 1000) % 60),
      };
    }

    return timeLeft;
  };

  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);

    return () => clearInterval(timer); // Clear timer when component unmounts
  }, []);


  return (
    <div className={styles.timer}>
      <h2 className={styles.title}>Đếm ngược trung thu</h2>
      <div className={styles.time}>
        <div className={styles.timeBox}>
          <span>{timeLeft.days}</span>
          <span>Ngày</span>
        </div>
        <div className={styles.timeBox}>
          <span>{timeLeft.hours}</span>
          <span>Giờ</span>
        </div>
        <div className={styles.timeBox}>
          <span>{timeLeft.minutes}</span>
          <span>Phút</span>
        </div>
        <div className={styles.timeBox}>
          <span>{timeLeft.seconds}</span>
          <span>Giây</span>
        </div>
      </div>
    </div>
  );
};

export default CountdownTimer;
