const biggerBtn = document.getElementById('btn');
const textArea = document.querySelector('.text');
const fancyBtn = document.querySelector('#fancy-btn');
const boringBtn = document.querySelector('#boring-btn');
const mooBtn = document.querySelector('#moo-btn');


biggerBtn.addEventListener('click', () => {
  textArea.style.fontSize = '24px'; 
});

fancyBtn.addEventListener('click', () => {
  boringBtn.checked = false;
  textArea.style.color = 'blue';
  textArea.style.textDecoration = 'underline';

})

boringBtn.addEventListener('click', () => {
  fancyBtn.checked = false;
  textArea.style.textDecoration = 'None';
  textArea.style.color = '';
})

mooBtn.addEventListener('click', () => {
  textArea.style.textTransform = 'uppercase';
  textArea.value = textArea.value.split(".").join("-Moo");

})