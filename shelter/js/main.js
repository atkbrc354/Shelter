const cards = document.querySelector('.Our-friends-cards');
const card = document.querySelectorAll('.Our-friends-card')[0];
const Arrow = document.querySelectorAll('.Arrow');

let firstImgWidth = card.clientWidth + 185;
Arrow.forEach(icon => {
    icon.addEventListener('click', () => {
        console.log(icon);
        cards.scrollLeft += icon.id == 'left' ? -firstImgWidth : firstImgWidth;
    });
});


    


