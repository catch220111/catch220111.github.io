/* =========================================
   Rocket "Scroll to Top" Flight Logic
   ========================================= */
const rocket = document.getElementById('rocket-top');

// Check scroll position to show/hide rocket
window.addEventListener('scroll', () => {
    if (window.scrollY > 300) {
        rocket.classList.add('rocket-visible');
        rocket.classList.remove('rocket-hidden');
    } else {
        rocket.classList.add('rocket-hidden');
        rocket.classList.remove('rocket-visible');
    }
});

// Launch sequence on click
rocket.addEventListener('click', () => {
    rocket.classList.add('rocket-launch');

    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });

    setTimeout(() => {
        rocket.classList.remove('rocket-launch');
        rocket.classList.add('rocket-hidden');
        rocket.classList.remove('rocket-visible');
    }, 800);
});