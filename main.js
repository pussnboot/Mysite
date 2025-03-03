const gallery = document.getElementById("gallerycontainer");
//const prevButton = document.getElementById('previous');
//const nextButton = document.getElementById('next');
const item = document.querySelectorAll(".project");
const itemWidth = item[0].clientWidth;
var interval;

const images = ['pictures/Battleship.JPG','pictures/cakeSite.png'];
let currentIndex = 0;

/*prevButton.addEventListener('click', () =>{
    currentIndex = (currentIndex += 1 + images.length) % images.length
    updateImage();
});

nextButton.addEventListener('click', () =>{
    currentIndex = (currentIndex += 1 + images.length) % images.length
    updateImage();
});

function updateImage() {
    const img =gallery.querySelector('3current-image');
    img.classList.add('fade-out');
    setTime(() => {
        img.src =images[currentIndex];
    });
}*/

function displayProject(index) {
    gallery.style.transform = `translateX(-${index * itemWidth}px)`;
}

function next() {
    currentIndex =  (currentIndex + 1) % item.length;
    displayProject(currentIndex);
}

function prev() {
    currentIndex = (currentIndex - 1 + item.length) % item.length;
    displayProject(currentIndex);
}