"use client"
import commonStyles from "./page.module.css";
import Header from "@/views/Header";
import CardContent from "@/views/CardContent";
import Footer from "@/views/Footer";
import styles from "@/styles/Home.module.css"
import CountdownTimer from "@/views/CountdownTimer";
import { useState } from "react";
import MusicPlayer from "@/views/MusicPlayer";

export default function Home() {
  const [isReached, setIsReached] = useState<boolean>(false)

  return (
    <div className={commonStyles.page}>
        <div className={styles.container}>
          <MusicPlayer />
          {
            !isReached ? 
            <div>
              <Header />
              <CountdownTimer setIsReached={setIsReached}/>
          </div>
          : <CardContent />
          }
          <Footer />
        </div>
    </div>
  );
}
