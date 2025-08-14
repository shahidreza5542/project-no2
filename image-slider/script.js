const myImage = document.getElementById("myImage");
const nextArrow = document.getElementById("nextArrow");
const label = document.querySelector('.label')

// इमेज URL की एक लिस्ट
const images = [
    "https://t4.ftcdn.net/jpg/07/08/47/75/240_F_708477508_DNkzRIsNFgibgCJ6KoTgJjjRZNJD4mb4.jpg",
    "https://t4.ftcdn.net/jpg/09/46/82/57/240_F_946825756_jddv2NapctwBWjlnIlYtadVx3xuOBN0N.jpg", 
    "https://t3.ftcdn.net/jpg/05/40/08/54/240_F_540085480_WN26Tz5VOFRwdPsLmK73JXNuSYsi2luw.jpg",
    "https://t3.ftcdn.net/jpg/05/99/49/96/240_F_599499618_3XgDcqxs1B0yKXJ5RkihXg95RiekzmV7.jpg" 
];

let currentIndex = 0;

nextArrow.addEventListener("click", function() {
    currentIndex = (currentIndex + 1) % images.length;
    myImage.src = images[currentIndex];
    label.innerHTML = `${currentIndex}`
});