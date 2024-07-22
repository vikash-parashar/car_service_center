document.addEventListener('DOMContentLoaded', () => {
    const audio = document.getElementById('bg-audio');
    audio.play();

    const car = document.createElement('img');
    car.src = 'https://i.imgur.com/b9bZykH.png'; // Car image URL
    car.classList.add('car-animation');

    document.body.appendChild(car);
});
