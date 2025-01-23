import './App.css';
import { useSpring, animated } from 'react-spring';
import { FaHeart } from 'react-icons/fa';
import { useState,useEffect,useRef } from 'react';
import Confetti from 'react-confetti';
import audioFile from './diljit.mp3';
import bearhug from './bearhug.gif';
import dogsideeye from './dogsideeye.jpg';
import audioFile2 from './side-eye.mp3';



function App() {
  const [message, setMessage] = useState('');
  const [showConfetti, setShowConfetti] = useState(false);
  const [buttonScale, setButtonScale] = useState(1);
  const [randomMessage, setRandomMessage] = useState('');
  const [yesClicked, setYesClicked] = useState(false); 
  const [noClicked, setNoClicked] = useState(false);


  const h1Scale = useSpring({
    to: { transform: yesClicked ? 'scale(0.8)' : 'scale(1)' }, 
    from: { transform: 'scale(1)' },
    reset: true
  });

  // Handle click on "Yes"
  const handleYesClick = () => {
    setMessage('Yayyyyyyy!!! 😍😘😘😘');
    setShowConfetti(true);

    const audio = new Audio(audioFile); 
    audio.play();

    setYesClicked(true);
    setNoClicked(false);
    setRandomMessage('');
  };

  // Handle click on "No"
  const handleNoClick = () => {
    const randomStatements = [
      '👀',
      'Awwww😢',
      'wrong button? 🤔',
      'Don’t leave me hanging... 😢',
    ];

    const audio = new Audio(audioFile2);
    audio.play();

      const randomIndex = Math.floor(Math.random() * randomStatements.length);
      setRandomMessage(randomStatements[randomIndex]);
      setNoClicked(true);
  
      setButtonScale(prevScale => Math.min(prevScale + 0.1, 3));
    };
    const width = window.innerWidth;
    const height = window.innerHeight;

  return (
    <div className="AppWrapper">
      {showConfetti && <Confetti width={width} height={height} />}
    <div className="App">
    <animated.h1 style={h1Scale}>
          Will you be my Valentine Anoop?
        </animated.h1>
      <FaHeart className="heart" color="red" size={60} />
    

      <animated.button
        className="yesButton"
        style={{ transform: `scale(${buttonScale})` }}
        onClick={handleYesClick}
        img src={bearhug} alt="bearshugginggif"
        
      >
        Yes
      </animated.button>
      {yesClicked && <img src={bearhug} alt="bear hug gif" className="bearhug-gif" />}
      
      <button onClick={handleNoClick} disabled={yesClicked}>
        No
      </button>
      {noClicked && <img src={dogsideeye} alt="dogsideeyepic" className="dogsideeye" />}

      {message && <h2>{message}</h2>}
      {randomMessage && <h3>{randomMessage}</h3>}
    </div>
    </div>
  );
}

export default App;
