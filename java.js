const noButton = document.querySelector('.noButton');

noButton.addEventListener('mouseover', () => {
  noButton.style.position = 'absolute';
  noButton.style.left = `${Math.random() * 80 + 10}%`;
  noButton.style.top = `${Math.random() * 80 + 10}%`;
});