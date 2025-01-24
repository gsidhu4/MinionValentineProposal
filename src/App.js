import './App.css';
import {animated } from 'react-spring';
import { FaHeart } from 'react-icons/fa';
import { useState} from 'react';
import Confetti from 'react-confetti';
import audioFile from './minion.mp3';
import minionhug from './minionhug.gif';
import dogsideeye from './dogsideeye.jpg';
import dogsideeye2 from './dogsideeye2.jpg';
import dogsideeye3 from './dogsideeye3.jpg';
import audioFile2 from './side-eye.mp3';
import { Canvas } from '@react-three/fiber';
import { OrbitControls, useGLTF, Html } from '@react-three/drei';
import { Suspense } from 'react';




function Model() {
  const { scene } = useGLTF(process.env.PUBLIC_URL + '/scene.glb');

  return <primitive object={scene} scale={1.4} position={[0, 0, -2]} />;
}


function App() {
  const [message, setMessage] = useState('');
  const [showConfetti, setShowConfetti] = useState(false);
  const [buttonScale, setButtonScale] = useState(1);
  const [randomMessage, setRandomMessage] = useState('');
  const [yesClicked, setYesClicked] = useState(false); 
  const [noClicked, setNoClicked] = useState(false);
  const [dogImage, setDogImage] = useState(dogsideeye); 


  const dogImages = [dogsideeye, dogsideeye2, dogsideeye3];



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
      'papoy?'
    ];

    const audio = new Audio(audioFile2);
    audio.play();

      const randomIndex = Math.floor(Math.random() * randomStatements.length);
      setRandomMessage(randomStatements[randomIndex]);

      const randomDogIndex = Math.floor(Math.random() * dogImages.length);
      setDogImage(dogImages[randomDogIndex]);

      setNoClicked(true);
      setButtonScale(prevScale => Math.min(prevScale + 0.1, 5));
    };
    const width = window.innerWidth;
    const height = window.innerHeight;

  return (
    <div className="AppWrapper">
      {showConfetti && <Confetti width={width} height={height} />}
      <div className="socials">
          <a href="https://www.gurbachansidhu.com" target="_blank" rel="noopener noreferrer">
            Created by Gurbachan Sidhu
          </a>
      </div>
    <div className="App">
    <animated.h1>
          Will you be my Valentine Anoop?
        </animated.h1>
      <FaHeart className="heart" color="red" size={60} />

      <animated.button
        className="yesButton"
        style={{ transform: `scale(${buttonScale})` }}
        onClick={handleYesClick}
        img src={minionhug} alt="minionhuggif"
        
      >
        Yes
      </animated.button>
      {yesClicked && <img src={minionhug} alt="minion hug gif" className="minion-hug-gif" />}
      
      <button className="noButton" onClick={handleNoClick} disabled={yesClicked}>
        No
      </button>
      {noClicked && <img src={dogImage} alt="dogsideeyepic" className="dogsideeye" />}


  <div className="modelContainer"> 
    <Canvas style={{ width: '350px', height: '300px'}}>
      <Suspense fallback={<Html>Loading...</Html>}>
        <ambientLight intensity={0.9} />
        <directionalLight position={[10, 10, 5]} />
        <Model />
        <OrbitControls 
              enableZoom={false} 
              autoRotate 
              autoRotateSpeed={2.0} 
              maxPolarAngle={Math.PI / 2} 
              minDistance={5} 
              maxDistance={10} 
            />
      </Suspense>
    </Canvas>
  </div>

      {message && <h2>{message}</h2>}
      {randomMessage && <h3>{randomMessage}</h3>}
    </div>
    </div>
  );
}

export default App;
