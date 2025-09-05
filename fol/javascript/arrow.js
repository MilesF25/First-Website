
/* 2 funs, one left one right. each will have listener, when clicked it will move in the direction
next function will take right or left. it will then move the slider by one but will check the inded range to see if
its at the end or beginning and loop it back around*/


const images = [
    "./Screenshot 2025-05-05 022638.png",
    "./Screenshot 2025-05-05 022617.png",
    "./Screenshot 2025-08-15 035620.png",
    "./Screenshot_2025.08.27_11.48.23.337.png",

];


/* selectors*/
const container = document.querySelector('.picture-container');
const leftArrow = container.querySelector('.arrow-left');
const rightArrow = container.querySelector('.arrow-right');
const imgElement = container.querySelector('img');

/*here will be the function to move the slides (future thought, im guessing the images would have to be loaded in from somewhere*/

// const currentImage = container.querySelector('img');
// let currentSrc = currentImage.src.split('/').pop(); // get just the file name



/* track the current index manually */
let currentIndex = 0;

function moveSlide(direction) {
    if (direction === 'right') {
        currentIndex = (currentIndex + 1) % images.length;  // loop forward
    } else if (direction === 'left') {
        currentIndex = (currentIndex - 1 + images.length) % images.length;  // loop backward
    }
    imgElement.src = images[currentIndex];
}



/*event listeners for the arrows*/
leftArrow.addEventListener('click', () => { moveSlide('left'); });
rightArrow.addEventListener('click', () => { moveSlide('right'); });


/* first js function*/

