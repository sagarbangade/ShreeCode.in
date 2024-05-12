const targetDate = new Date('December 31, 2024 00:00:00').getTime(); 

const updateTimer = () => {
    /* Countdown timer logic (same as before) */
}

const timer = setInterval(updateTimer, 1000);

const floatingElements = document.querySelectorAll('.floating-element');

function animateElements() {
    floatingElements.forEach((element, index) => {
        const speed = 0.5 + Math.random(); // Varying speeds
        const drift = 50 + Math.random() * 100; // Varying drift distance

        element.style.animationDuration = `${speed + 3}s`; // Varying duration 
        element.style.left = `${50 + Math.sin(Date.now() / (1000 * speed)) * drift}%`; 
    });

    requestAnimationFrame(animateElements); 
}

animateElements(); 
