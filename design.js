const yesButton = document.getElementById('yesButton');
const noButton = document.getElementById('noButton');
const response = document.getElementById('response');

yesButton.addEventListener('click', () => {
  response.textContent = "Yay! You've made me the happiest person ever! 💖";
});

noButton.addEventListener('click', () => {
  response.textContent = "Hmm, I think you clicked the wrong button. Try again! 😉";
  noButton.style.position = 'absolute';
  noButton.style.left = `${Math.random() * 80 + 10}%`;
  noButton.style.top = `${Math.random() * 80 + 10}%`;
});