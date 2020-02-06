// Your code goes here

const logoHead = document.querySelector('.logo-heading');
const busImage = document.querySelector('.intro img');
const intro = document.querySelector('.intro');

logoHead.addEventListener('dblclick', () => {
    logoHead.style.fontFamily = 'none'
})

busImage.addEventListener('mouseout', () => {
    busImage.style.transform = 'scale(0.8)'
})

document.querySelector('.intro h2').addEventListener('click', () => {
    intro.style.backgroundColor = 'gold'
});

document.addEventListener('keydown', () => {
    intro.style.padding = '2rem'
});

document.querySelectorAll('.nav a').forEach(a => a.addEventListener('mouseover', () => a.style.color = 'green'));

document.addEventListener('keyup', (e) => {
    if (e.key === 'a') {
        intro.style.paddingTop = '20vh';
    }
})

window.addEventListener('resize', () => {
    document.querySelector('.content-section').style.backgroundColor = 'yellow'
});

window.addEventListener('scroll', () => {
    let fartSound = new Audio('fart.mp3')
    fartSound.play()
});

document.querySelector('.inverse-content img').addEventListener('drag', () =>
    document.querySelector('.inverse-content p').style.fontSize = '2rem'

);

document.querySelector('.inverse-content').addEventListener('contextmenu', () => {
    document.querySelector('.inverse-content img').src = 'img/parrot.png';

})