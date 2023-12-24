const keyMap = {
  'a': 'C3',
  'w': 'C#3',
  's': 'D3',
  'e': 'D#3',
  'd': 'E3',
  'f': 'F3',
  't': 'F#3',
  'g': 'G3',
  'y': 'G#3',
  'h': 'A4',
  'u': 'A#4',
  'j': 'B4',
  'k': 'C4', // Higher octave C
  'o': 'C#4', // Higher octave C#
  'l': 'D4', // Higher octave D
  'p': 'E4', // Higher octave Ea
  ';': 'E#4' // Higher octave E#
};

let currentInstrument = 'M1_piano'; // Default instrument
let instrumentFolder = 'sounds/M1_Piano'; // Default instrument folder

document.addEventListener('DOMContentLoaded', function() {
  const silverButton = document.querySelector('.silver');
  const goldButton = document.querySelector('.gold');
  const summerButton = document.querySelector('.summer');
  const winterButton = document.querySelector('.winter');

  silverButton.addEventListener('click', () => changeTheme('#D3D3D3', '#141414', '#D3D3D3', '#D3D3D3'));
  goldButton.addEventListener('click', () => changeTheme('#EAD196', '#141414', '#EAD196', '#EAD196'));
  summerButton.addEventListener('click', () => changeTheme('#FF865E', '#7D0A0A', '#FF865E', '#FF865E'));
  winterButton.addEventListener('click', () => changeTheme('#71DFE7', '#009DAE', '#71DFE7', '#71DFE7'));

  function changeTheme(bodyColor, pianoColor, checkBoxColor, volumeSliderColor) {
    const bodyBackground = document.querySelector('body');
    const pianoTheme = document.querySelector('.wrapper');
    const checkboxInput = document.querySelector('.keys-checkbox input');
    const volumeSliderInput = document.querySelector('.volume-slider input');

    bodyBackground.style.background = bodyColor;
    pianoTheme.style.background = pianoColor;
    checkboxInput.style.background = checkBoxColor;
    volumeSliderInput.style.accentColor = volumeSliderColor;
  }
});

const pianoKeys = document.querySelectorAll('.piano-keys .key');
const volumeSlider = document.querySelector(".volume-slider input");
const keysCheckbox = document.querySelector(".keys-checkbox input");

let allKeys = []
const audio = new Audio();

const playTune = (key) => {
  
  const encodedKey = encodeURIComponent(key);
  const filePath = `${instrumentFolder}/${encodedKey}.wav`;
  audio.src = filePath;
  audio.play();
  
  const clickedKey = document.querySelector(`[data-key="${key}"]`);
  clickedKey.classList.add("active");
  setTimeout(() => {
    clickedKey.classList.remove("active");
  }, 150);
}

pianoKeys.forEach(key => {
  allKeys.push(key.dataset.key)
  key.addEventListener("click", () => playTune(key.dataset.key));
});

const showHideKeys = () => {
  // toggling hide class from each key on the checkbox click
  pianoKeys.forEach(key => key.classList.toggle("hide"));
}

const pressedKey = (e) => {
  const keyPressed = e.key.toLowerCase(); 
  console.log('Pressed key:', keyPressed); 

  if (keyMap[keyPressed]) {
    // If the pressed key is in the allKeys array, only call the playTune function
    if(allKeys.includes(e.key)) playTune(e.key);
    const note = keyMap[keyPressed];
    
    playTune(note); 
  } else {
    console.log('Key not mapped:', keyPressed); 
  }
};

const handleVolume = (e) => {
  audio.volume = e.target.value;
}

keysCheckbox.addEventListener("click", showHideKeys);
volumeSlider.addEventListener("input", handleVolume);
document.addEventListener("keydown", pressedKey);


// Carousel

document.addEventListener("DOMContentLoaded", function() {
  const instruments = document.querySelectorAll('.instrument-carousel .instrument');
  const prevButton = document.querySelector('.arrow.prev');
  const nextButton = document.querySelector('.arrow.next');
  let currentIndex = 0;

  function showInstrument(index) {
    instruments.forEach((instrument, i) => {
      if (i === index) {
        instrument.style.display = 'block';
      } else {
        instrument.style.display = 'none';
      }
    });
    updateInstrumentFolder(index); // Update instrument folder on carousel change
  }

  function updateInstrumentFolder(index) {
    let selectedInstrument = instruments[index].textContent.trim().replace(/\s/g, '_');
    switch (selectedInstrument) {
      case 'M1_Piano':
        instrumentFolder = 'sounds/M1_Piano';
        break;
      case 'Electric_Piano':
        instrumentFolder = 'sounds/Electric_Piano';
        break;
      // Add cases for other instruments if needed

      default:
        instrumentFolder = ''; 
        break;
    }
  }

  prevButton.addEventListener('click', function() {
    currentIndex = (currentIndex === 0) ? instruments.length - 1 : currentIndex - 1;
    showInstrument(currentIndex);
  });

  nextButton.addEventListener('click', function() {
    currentIndex = (currentIndex === instruments.length - 1) ? 0 : currentIndex + 1;
    showInstrument(currentIndex);
  });

  // Show the initial instrument
  showInstrument(currentIndex);
});