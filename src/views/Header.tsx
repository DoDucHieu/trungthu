import React from 'react';
import styles from '@/styles/Header.module.css';
import Image from 'next/image';
import Latern from "@/app/images/latern.gif"

const Header: React.FC = () => {
  return (
    <header className={styles.header}>
      <Image src={Latern} alt="Lantern" className={styles.lantern}/>
    </header>
  );
}

export default Header;
