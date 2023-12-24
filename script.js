document.addEventListener('DOMContentLoaded', function() {
  const silverButton = document.querySelector('.silver');
  const goldButton = document.querySelector('.gold');
  const summerButton = document.querySelector('.summer');
  const winterButton = document.querySelector('.winter');

  silverButton.addEventListener('click', () => changeTheme('#D3D3D3', '#D3D3D3', '#D3D3D3'));
  goldButton.addEventListener('click', () => changeTheme('#EAD196', '#EAD196', '#EAD196'));
  summerButton.addEventListener('click', () => changeTheme('#FF865E', '#FF865E', '#FF865E'));
  winterButton.addEventListener('click', () => changeTheme('#009DAE', '#009DAE', '#009DAE'));

  function changeTheme(bodyColor, checkBoxColor, volumeSliderColor) {
    const bodyBackground = document.querySelector('body');
    const checkboxInput = document.querySelector('.keys-checkbox input');
    const volumeSliderInput = document.querySelector('.volume-slider input');

    bodyBackground.style.background = bodyColor;
    checkboxInput.style.background = checkBoxColor;
    volumeSliderInput.style.accentColor = volumeSliderColor;
  }
});
