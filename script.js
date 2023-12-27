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
  'k': 'C4', 
  'o': 'C#4', 
  'l': 'D4', 
  'p': 'E4', 
  ';': 'E#4' 
};

let currentInstrument = 'M1_piano'; // Default instrument
let instrumentFolder = 'sounds/M1_Piano'; // Default instrument folder

const instrumentFolders = {
  'M1 Piano': 'sounds/M1_Piano',
  'Electric Piano': 'sounds/Electric_Piano',
  'Bass': 'sounds/Bass_Piano',
  'Drums': 'sounds/Drums_Piano'
}

document.addEventListener('DOMContentLoaded', function() {
  const silverButton = document.querySelector('.silver');
  const goldButton = document.querySelector('.gold');
  const springButton = document.querySelector('.spring');
  const fallButton = document.querySelector('.fall');
  const summerButton = document.querySelector('.summer');
  const winterButton = document.querySelector('.winter');
  const coffeeButton = document.querySelector('.coffee');
  const nightButton = document.querySelector('.night');
  const desertButton = document.querySelector('.desert');
  const spaceButton = document.querySelector('.space');
  const forestButton = document.querySelector('.forest');
  const prideButton = document.querySelector('.pride');
  const lavenderButton = document.querySelector('.lavender');
  const slimeButton = document.querySelector('.slime');
  const jungleButton = document.querySelector('.jungle');
  const clayButton = document.querySelector('.clay');
  const oceanButton = document.querySelector('.ocean');
  const dollButton = document.querySelector('.doll');

  dollButton.addEventListener('click', () => changeTheme('#f29ad8', '#ee71c3', '#f039b1', '#f29ad8', '#e305ad'));
  oceanButton.addEventListener('click', () => changeTheme('#427D9D', '#164863', '#427D9D', '#DDF2FD', '#9BBEC8'));
  jungleButton.addEventListener('click', () => changeTheme('#1F6650', '#EA5E5E', '#1F6650', '#1F6650', '#EAFBEA'));
  clayButton.addEventListener('click', () => changeTheme('#776B5D', '#EBE3D5', '#776B5D', '#B3A492', '#B0A695'));
  slimeButton.addEventListener('click', () => changeTheme('#A7D129', '#616F39', '#A7D129', '#3E432E', '#000000'));
  silverButton.addEventListener('click', () => changeTheme('#D3D3D3', '#141414', '#D3D3D3', '#D3D3D3', '#b2b2b2'));
  goldButton.addEventListener('click', () => changeTheme('#EAD196', '#141414', '#EAD196', '#EAD196', '#b2b2b2'));
  springButton.addEventListener('click', () => changeTheme('#508D69', '#FF8F8F', '#508D69', '#9ADE7B', '#EEF296'));
  fallButton.addEventListener('click', () => changeTheme('#ED7D31', '#4F4A45', '#ED7D31', '#6C5F5B', '#F6F1EE'));
  summerButton.addEventListener('click', () => changeTheme('#FF865E', '#7D0A0A', '#FF865E', '#BF3131', '#fff'));
  winterButton.addEventListener('click', () => changeTheme('#71DFE7', '#009DAE', '#71DFE7', '#71DFE7', '#fff'));
  coffeeButton.addEventListener('click', () => changeTheme('#C8AE7D', '#65451F', '#C8AE7D', '#765827', '#EAC696'));
  nightButton.addEventListener('click', () => changeTheme('#000000', '#444444', '#DA0037', '#EDEDED', '#EEEEEE'));
  desertButton.addEventListener('click', () => changeTheme('#5F0F40', '#FB8B24', '#5F0F40', '#9A031E', '#9A031E'));
  spaceButton.addEventListener('click', () => changeTheme('#11009E', '#4942E4', '#11009E', '#E6B9DE', '#FAE7F3'));
  lavenderButton.addEventListener('click', () => changeTheme('#D0A2F7', '#DCBFFF', '#D0A2F7', '#E5D4FF', '#F1EAFF'));
  forestButton.addEventListener('click', () => changeTheme('#3A4D39', '#739072', '#3A4D39', '#4F6F52', '#ECE3CE'));
  prideButton.addEventListener('click', () => changeTheme('linear-gradient(to right, rgb(237, 34, 36), rgb(243, 91, 34), rgb(249, 150, 33), rgb(245, 193, 30), rgb(241, 235, 27) 27%, rgb(241, 235, 27), rgb(241, 235, 27) 33%, rgb(99, 199, 32), rgb(12, 155, 73), rgb(33, 135, 141), rgb(57, 84, 165), rgb(97, 55, 155), rgb(147, 40, 142))', 'linear-gradient(to right, rgb(0, 0, 0), rgb(54, 35, 18), rgb(120, 79, 23), rgb(181, 63, 27), rgb(237, 34, 36), rgb(243, 91, 34), rgb(249, 150, 33), rgb(245, 193, 30), rgb(241, 235, 27) 48%, rgb(241, 235, 27), rgb(241, 235, 27) 52%, rgb(99, 199, 32), rgb(12, 155, 73), rgb(33, 135, 141), rgb(57, 84, 165), rgb(97, 55, 155), rgb(147, 40, 142))', '#60399C', '#4F6F52', '#000000'));

  function changeTheme(bodyColor, pianoColor, checkBoxColor, volumeSliderColor, headerColor) {
    const bodyBackground = document.querySelector('body');
    const pianoTheme = document.querySelector('.wrapper');
    const checkboxInput = document.querySelector('.keys-checkbox input');
    const volumeSliderInput = document.querySelector('.volume-slider input');
    const headerElement = document.querySelector('header');

    bodyBackground.style.background = bodyColor;
    pianoTheme.style.background = pianoColor;
    checkboxInput.style.background = checkBoxColor;
    volumeSliderInput.style.accentColor = volumeSliderColor;
    headerElement.style.color = headerColor;
  }

  const pianoKeys = document.querySelectorAll('.piano-keys .key');
  const volumeSlider = document.querySelector(".volume-slider input");
  const keysCheckbox = document.querySelector(".keys-checkbox input");

  let allKeys = []
  const audio = new Audio();

  const playTune = (key) => {
    const encodedKey = encodeURIComponent(key);
    const filePath = `${instrumentFolder}/${encodedKey}.wav`;
    console.log('Playing key:', key);
    console.log('File path:', filePath); // Check if this path is correct
    audio.src = filePath;
    audio.play();
  
    const clickedKey = document.querySelector(`[data-key="${key}"]`);
    clickedKey.classList.add("active");
    setTimeout(() => {
      clickedKey.classList.remove("active");
    }, 150);
  };

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
    const selectedInstrument = instruments[index].textContent.trim();
    console.log('Selected instrument:', selectedInstrument); // Log the selected instrument name
    
    instrumentFolder = instrumentFolders[selectedInstrument] || '';
    console.log('Updated instrument folder:', instrumentFolder); // Log the updated instrument folder
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

// Footer Carousel

document.addEventListener('DOMContentLoaded', function() {
  const themeButtons = document.querySelectorAll('.theme-carousel button');
  const prevButton = document.querySelector('.footer .arrow.prev');
  const nextButton = document.querySelector('.footer .arrow.next');
  let currentIndex = 0;

  function showTheme(index) {
    themeButtons.forEach((button, i) => {
      if (i === index) {
        button.style.display = 'inline-block'; // Or any style to show the button
      } else {
        button.style.display = 'none'; // Or hide the button
      }
    });
  }

  prevButton.addEventListener('click', function() {
    currentIndex = (currentIndex === 0) ? themeButtons.length - 1 : currentIndex - 1;
    showTheme(currentIndex);
  });

  nextButton.addEventListener('click', function() {
    currentIndex = (currentIndex === themeButtons.length - 1) ? 0 : currentIndex + 1;
    showTheme(currentIndex);
  });

  // Show the initial theme
  showTheme(currentIndex);
});
