// const group1 = [
//     "../assets/cmuweb/apt.jpg",
//     "../assets/cmuweb/baseball.jpg",
//     "../assets/cmuweb/botanic.jpg",
//     "../assets/cmuweb/garden.jpg",
//     "../assets / cmuweb / IT Lab Puttshack.jpg",
// ];

// const group2 = [
//     "../assets/cmuweb/goodg.jpg",
//     "../assets/cmuweb/group.jpg",
//     "../assets/cmuweb/image.jpg",
//     "../assets/cmuweb/IT Lab Orientation.jpg",
//     "../assets/cmuweb/walkhome.jpg"
// ];


// const image1 = document.getElementById("CMU1");
// const image2 = document.getElementById("CMU2");


// /* attempted something here, not sure if i will keep*/
// function cycleImagesWithFade(imageElement, group, delay) {
//     let index = 0;

//     setInterval(() => {
//         // Fade out
//         imageElement.classList.remove('fade-in');
//         imageElement.classList.add('fade-out');

//         // After fade out completes, swap image + fade in
//         setTimeout(() => {
//             imageElement.src = group[index];
//             imageElement.classList.remove('fade-out');
//             imageElement.classList.add('fade-in');
//             index = (index + 1) % group.length;
//         }, 400);
//     }, delay);
// }

// window.addEventListener('load', () => {
//     cycleImagesWithFade(image1, group1, 7000);
//     cycleImagesWithFade(image2, group2, 12000);
// });
