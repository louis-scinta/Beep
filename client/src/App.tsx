import React, { useState } from 'react';
import { PrimaryButton } from '@fluentui/react/lib/Button';
import Timer from './components/timer'; // Ensure this matches the exported name
import clickSound from './assets/generate_number.mp3';

const App: React.FC = () => {
    const playClickSound = () => {
        const sound = new Audio(clickSound); 
        sound.play();
      };

const [randomNumber, setRandomNumber] = useState<number>(0);

  const generateRandomNumber = () => {
    const number = Math.floor(Math.random() * 10) + 1;
    setRandomNumber(number);
  };

  const handleClick = () => {
    playClickSound();
    generateRandomNumber();
  }
  
  return (
    <>
      <div>
        <PrimaryButton text='Generate Random Number' onClick={handleClick} />
        <p>Random Number: {randomNumber}</p>
      </div>
      <div>
        <Timer minutes={randomNumber}/>
      </div>
    </>
  );
};

export default App;
