const DARK_THEME = 'dark';
const LIGHT_THEME = 'light';

const toggleSwitch = document.querySelector('input[type="checkbox"]');
const toggleIcon = document.getElementById('toggle-icon');
const textBox = document.getElementById('text-box');
const image1 = document.getElementById('image1');
const image2 = document.getElementById('image2');
const image3 = document.getElementById('image3');
const nav = document.getElementById('nav');

// Dark or Light Images
function imageMode(color) {
  image1.src = `img/undraw_proud_coder_${color}.svg`;
  image2.src = `img/undraw_feeling_proud_${color}.svg`;
  image3.src = `img/undraw_conceptual_idea_${color}.svg`;
}

// // Dark Mode Styles
// function darkMode() {
//   nav.style.backgroundColor = 'rgb(0 0 0 / 50%)';
//   textBox.style.backgroundColor = 'rgb(255 255 255 / 50%)';
//   toggleIcon.children[0].textContent = 'Dark Mode';
//   toggleIcon.children[1].classList.replace('fa-sun', 'fa-moon');
//   imageMode('dark');
// }

// // Light Mode Styles
// function lightMode() {
//   nav.style.backgroundColor = 'rgb(255 255 255 / 50%)';
//   textBox.style.backgroundColor = 'rgb(0 0 0 / 50%)';
//   toggleIcon.children[0].textContent = 'Light Mode';
//   toggleIcon.children[1].classList.replace('fa-moon', 'fa-sun');
//   imageMode('light');
// }

// Dark and Light Styles
function toggleDarkLightMode(isLight) {
  nav.style.backgroundColor = isLight ? 'rgb(255 255 255 / 50%)' : 
    'rgb(0 0 0 / 50%)';

  textBox.style.backgroundColor = isLight ? 'rgb(0 0 0 / 50%)' : 
    'rgb(255 255 255 / 50%)';

  toggleIcon.children[0].textContent = isLight ? 'Light Mode' : 'Dark Mode';

  isLight ? toggleIcon.children[1].classList.replace('fa-moon', 'fa-sun') : 
    toggleIcon.children[1].classList.replace('fa-sun', 'fa-moon');

  isLight ? imageMode(LIGHT_THEME) : imageMode(DARK_THEME);
}

// Switch Theme Dynamically
function switchTheme(event) {
  if (event.target.checked) {
    document.documentElement.setAttribute('data-theme', DARK_THEME);
    localStorage.setItem('theme', DARK_THEME);
    toggleDarkLightMode(false);
  } else {
    document.documentElement.setAttribute('data-theme', LIGHT_THEME);
    localStorage.setItem('theme', LIGHT_THEME);
    toggleDarkLightMode(true);
  }
}

// Event Listener
toggleSwitch.addEventListener('change', switchTheme);

// Check Local Storage For Theme
const currentTheme = localStorage.getItem('theme');
if (currentTheme) {
  document.documentElement.setAttribute('data-theme', currentTheme);

  if (currentTheme === DARK_THEME) {
    toggleSwitch.checked = true;
    toggleDarkLightMode(false);
  }
}