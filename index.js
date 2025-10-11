const menuIcons = document.querySelectorAll('.headerI')
window.addEventListener('scroll', (e) => {
    console.log(window.scrollY);
    if (window.scrollY >= 0 && window.scrollY <= 1455 ) {
        menuIcons[0].style.opacity = '1'
        menuIcons[1].style.opacity = '0.5'
        menuIcons[2].style.opacity = '0.5'
        menuIcons[3].style.opacity = '0.5'
    } else if (window.scrollY >= 1455 && window.scrollY <= 2094 ){
        menuIcons[0].style.opacity = '0.5'
        menuIcons[1].style.opacity = '1'
        menuIcons[2].style.opacity = '0.5'
        menuIcons[3].style.opacity = '0.5'
    } else if (window.scrollY >= 2094 && window.scrollY <= 2400){
        menuIcons[0].style.opacity = '0.5'
        menuIcons[1].style.opacity = '0.5'
        menuIcons[2].style.opacity = '1'
        menuIcons[3].style.opacity = '0.5'
    } else {
        menuIcons[0].style.opacity = '0.5'
        menuIcons[1].style.opacity = '0.5'
        menuIcons[2].style.opacity = '0.5'
        menuIcons[3].style.opacity = '1'
    }
})

// Header Settings - Mobile/Laptop View
const menuBtn = document.querySelector('i');
menuBtn.addEventListener('click', (e) => {
    openNav();
    menuBtn.style.opacity = '0.0';
})
/* Open when someone clicks on the span element */
function openNav() {
document.getElementById("myNav").style.width = "100%";
}

/* Close when someone clicks on the "x" symbol inside the overlay */
function closeNav() {
    setTimeout(() => {
        menuBtn.style.opacity = '1.0';
    }, 500);
document.getElementById("myNav").style.width = "0%";
}
