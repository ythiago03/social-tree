const checkbox = document.querySelector('.checkbox');
const ball = document.querySelector('.ball-btn-checkbox');
const main = document.querySelector('.social-tree');

const switcher = () => {
    ball.classList.toggle('animated-ball-checkbox');
    main.classList.toggle('d-container')
}

checkbox.addEventListener('click', switcher, false)