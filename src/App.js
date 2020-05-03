import React, { useEffect } from 'react';
import './App.scss';

const App = () => {  
  const drumBeats = [{
      keyCode: 81,
      letter: 'Q',
      title: 'bass',
      url: 'https://www.fesliyanstudios.com/play-mp3/6660'
    }, 
    {
      keyCode: 87,
      letter: 'W',
      title: 'tom drum',
      url: 'https://www.fesliyanstudios.com/play-mp3/6694'
    },
    {
      keyCode: 69,
      letter: 'E',
      title: 'cymbal',
      url: 'https://www.fesliyanstudios.com/play-mp3/6732'
    },
    {
      keyCode: 65,
      letter: 'A',
      title: 'clap',
      url: 'https://www.myinstants.com/media/sounds/behemoth-clap-15.mp3'
    },
    {
      keyCode: 83,
      letter: 'S',
      title: 'sticks',
      url: 'https://www.fesliyanstudios.com/play-mp3/6677'
    },
    {
      keyCode: 68,
      letter: 'D',
      title: 'beat',
      url: 'https://www.myinstants.com/media/sounds/snare.mp3'
    },
    {
      keyCode: 90,
      letter: 'Z',
      title: "hi hat",
      url: 'https://www.fesliyanstudios.com/play-mp3/6706'
    },
    {
      keyCode: 88,
      letter: 'X',
      title: 'snare',
      url: 'https://www.fesliyanstudios.com/play-mp3/6768'
    }, 
    {
      keyCode: 67,
      letter: 'C',
      title: 'ba dum tisss',
      url: 'https://www.myinstants.com/media/sounds/tun-tun-tisss.mp3'
    }
  ];

  const playBeat = el => {
    const audioElem = document.getElementById(el.letter);
    const beatTitle = document.querySelector('.what-sound');
    beatTitle.textContent = el.title
    audioElem.src = el.url;
    audioElem.play();
    audioElem.currentTime = 0;
  };

  useEffect(() => {
    console.log('use effect');

    const handleKeyPress = e => {
      let beat = drumBeats.filter(obj => obj.keyCode === e.keyCode)[0];
      if (beat !== undefined) playBeat(beat);
    };

    document.addEventListener('keydown', handleKeyPress);
    return () => {
      document.removeEventListener('keydown', handleKeyPress);
    };
  }, [drumBeats]);

  return (
    <div className='App'>
      <div className='background'></div>
      <div id='drum-machine'>
        <div id='display'>
          <div className="drum-pad-wrapper">
          {drumBeats.map(el => 
            <div id={el.title} className='drum-pad' key={el.keyCode} onClick={() => playBeat(el)}>
              <p>{el.letter}</p>
              <audio className='clip' src={el.url} id={el.letter} ></audio>
            </div>
          )}          
          
          </div>
          <p className='what-sound'>Hit the drums or press the keys</p>          
        </div>      
        <div className="code">
          <a href="https://github.com/FilipeMts/FCC-Drum-Machine" target="_blank" rel="noopener noreferrer">code is available here</a>
        </div> 
        </div>
    </div>
  );
};

export default App;
