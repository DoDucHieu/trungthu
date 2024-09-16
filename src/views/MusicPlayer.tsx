import styles from '@/styles/MusicPlayer.module.css';
import React, { useEffect, useRef, useState } from 'react';

const songs = [
    {
        title: 'Thằng Cuội',
        src: '/songs/thang_cuoi.mp3',
    },
    {
      title: 'Rước Đèn Trung Thu',
      src: "/songs/ruoc_den_trung_thu_remix.mp3",
    },
];

const MusicPlayer: React.FC = () => {
    const [currentSongIndex, setCurrentSongIndex] = useState(0);
    const [isPlaying, setIsPlaying] = useState(false);
    const audioRef = useRef<HTMLAudioElement | null>(null);
  
    const handleNextSong = () => {
      setCurrentSongIndex((prevIndex) =>
        prevIndex === songs.length - 1 ? 0 : prevIndex + 1
      );
    };
  
    const handlePreviousSong = () => {
      setCurrentSongIndex((prevIndex) =>
        prevIndex === 0 ? songs.length - 1 : prevIndex - 1
      );
    };
  
    const handlePlayPause = () => {
      if (audioRef.current) {
        if (isPlaying) {
          audioRef.current.pause();
        } else {
          audioRef.current.play();
        }
        setIsPlaying(!isPlaying);
      }
    };
  
    useEffect(() => {
      if (audioRef.current) {
        audioRef.current.play().catch((error) => {
          console.log("Tự động phát bị chặn bởi trình duyệt:", error);
        });
        setIsPlaying(true);
      }
    }, [currentSongIndex]);
  
    useEffect(() => {
        if (audioRef.current) {
            audioRef.current.play().catch((error) => {
              console.log("Tự động phát bị chặn bởi trình duyệt:", error);
              setIsPlaying(false)
            });
            setIsPlaying(true);
          }
    }, []);
  
    const handleSongEnd = () => {
      handleNextSong();
    };

  return (
    <div className={styles.musicPlayer}>
      <h2>Trình Phát Nhạc Trung Thu</h2>
      <div className={styles.songInfo}>
        <span>{songs[currentSongIndex].title}</span>
      </div>

      <audio
        ref={audioRef}
        src={songs[currentSongIndex].src}
        onEnded={handleSongEnd}
        autoPlay
      />

      <div className={styles.controls}>
        <button className={styles.button} onClick={handlePreviousSong}>⏮</button>
        <button className={styles.button} onClick={handlePlayPause}>
          {isPlaying ? '⏸' : '▶️'}
        </button>
        <button className={styles.button} onClick={handleNextSong}>⏭</button>
      </div>
    </div>
  );
};

export default MusicPlayer;
