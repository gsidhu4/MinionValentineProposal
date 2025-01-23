import './App.css';
import { useSpring, animated } from 'react-spring';
import { FaHeart } from 'react-icons/fa';
import { useState } from 'react';
import Confetti from 'react-confetti';
import audioFile from './diljit.mp3';
import bearhug from './bearhug.gif';
import dogsideeye from './dogsideeye.jpg';


function App() {
  const [message, setMessage] = useState('');
  const [showConfetti, setShowConfetti] = useState(false);
  const [buttonScale, setButtonScale] = useState(1);
  const [randomMessage, setRandomMessage] = useState('');
  const [yesClicked, setYesClicked] = useState(false); 
  const [noClicked, setNoClicked] = useState(false);

  // Animation for shrinking the h1 tag when Yes is clicked
  const h1Scale = useSpring({
    to: { transform: yesClicked ? 'scale(0.8)' : 'scale(1)' }, 
    from: { transform: 'scale(1)' },
    reset: true
  });

  // Handle click on "Yes"
  const handleYesClick = () => {
    setMessage('Yayyyyyyy!!! 😍😘😘😘');
    setShowConfetti(true);

    // Play audio when Yes is clicked
    const audio = new Audio(audioFile); // Replace with your own audio URL
    audio.play();

    // Disable "No" button
    setYesClicked(true);
    setNoClicked(false);
    setRandomMessage('');
  };

  // Handle click on "No"
  const handleNoClick = () => {
    const randomStatements = [
      'Are you sure? 😕',
      'Awwww😢',
      'I thought we had something special... 😜',
      'Don’t leave me hanging... 😢',
    ];

      // Pick a random statement
      const randomIndex = Math.floor(Math.random() * randomStatements.length);
      setRandomMessage(randomStatements[randomIndex]);
      setNoClicked(true);
  
      // Make the Yes button grow continuously by adding to its scale
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
      
      {/* Disable "No" button if "Yes" has been clicked */}
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
