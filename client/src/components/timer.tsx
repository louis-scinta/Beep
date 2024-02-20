import React, { useEffect, useState } from 'react';
import alarm from '../assets/timer_end.mp3';

interface TimerProps {
  minutes: number;
}

const Timer: React.FC<TimerProps> = ({ minutes }) => {
  const [secondsLeft, setSecondsLeft] = useState<number>(0);

  useEffect(() => {
    setSecondsLeft(minutes * 60);
  }, [minutes]);

  useEffect(() => {
    if (secondsLeft <= 0) {
      playSound();
      return;
    }

    const intervalId = setInterval(() => {
      setSecondsLeft((prevSeconds) => prevSeconds - 1);
    }, 1000);

    return () => clearInterval(intervalId);
  }, [secondsLeft]);

  const playSound = () => {
    const audio = new Audio(alarm); 
    audio.play();
  };

  const formatTime = (totalSeconds: number): string => {
    const minutes = Math.floor(totalSeconds / 60);
    const seconds = totalSeconds % 60;
    return `${minutes}:${seconds < 10 ? `0${seconds}` : seconds}`;
  };

  return <div>Timer: {formatTime(secondsLeft)}</div>;
};

export default Timer;