const textElement = document.getElementById("animate-text");
// Add your specialties here
const phrases = [
    
    "Nonfiction Book Strategist & Editorial Partner"
   
];

let phraseIndex = 0;
let charIndex = 0;
let isDeleting = false;
let typeSpeed = 50;

function type() {
    const currentPhrase = phrases[phraseIndex];
    
    if (isDeleting) {
        textElement.textContent = currentPhrase.substring(0, charIndex - 1);
        charIndex--;
        typeSpeed = 50; // Faster when deleting
    } else {
        textElement.textContent = currentPhrase.substring(0, charIndex + 1);
        charIndex++;
        typeSpeed = 50; // Natural typing speed
    }

    // If word is complete
    if (!isDeleting && charIndex === currentPhrase.length) {
        isDeleting = true;
        typeSpeed = 2000; // Pause at the end of the word
    } else if (isDeleting && charIndex === 0) {
        isDeleting = false;
        phraseIndex = (phraseIndex + 1) % phrases.length;
        typeSpeed = 500; // Small pause before next word
    }

    setTimeout(type, typeSpeed);
}

// Start the animation when the page loads
document.addEventListener("DOMContentLoaded", type);

function initTypewriter(element) {
    // Get phrases from the HTML data attribute
    const phrases = JSON.parse(element.getAttribute('data-phrases'));
    let phraseIndex = 0;
    let charIndex = 0;
    let isDeleting = false;
    let typeSpeed = 50;

    function type() {
        const currentPhrase = phrases[phraseIndex];
        
        if (isDeleting) {
            element.textContent = currentPhrase.substring(0, charIndex - 1);
            charIndex--;
            typeSpeed = 30; 
        } else {
            element.textContent = currentPhrase.substring(0, charIndex + 1);
            charIndex++;
            typeSpeed = 50;
        }

        if (!isDeleting && charIndex === currentPhrase.length) {
            isDeleting = true;
            typeSpeed = 2000; 
        } else if (isDeleting && charIndex === 0) {
            isDeleting = false;
            phraseIndex = (phraseIndex + 1) % phrases.length;
            typeSpeed = 500;
        }

        setTimeout(type, typeSpeed);
    }
    type();
}

// Start animation for EVERY element with the class "animate-text"
document.addEventListener("DOMContentLoaded", () => {
    const textElements = document.querySelectorAll(".animate-text");
    textElements.forEach(el => initTypewriter(el));
});


const stats = document.querySelectorAll('.stat-number');

const runCounter = (stat) => {
    const target = +stat.getAttribute('data-target');
    let count = 0;
    
    const updateCount = () => {
        // Speed control: Higher number = slower animation
        const increment = target / 50; 

        if (count < target) {
            count += increment;
            stat.innerText = Math.ceil(count);
            setTimeout(updateCount, 30);
        } else {
            // Formatting the final number
            if (target === 100) {
                stat.innerText = target + "%";
            } else {
                stat.innerText = target + "+";
            }

            // WAIT 3 seconds, then reset and start again
            setTimeout(() => {
                stat.innerText = "0";
                runCounter(stat); 
            }, 3000); 
        }
    };
    
    updateCount();
};

document.addEventListener("DOMContentLoaded", () => {
    stats.forEach(stat => runCounter(stat));
});


const hamburger = document.getElementById('hamburger');
const navMenu = document.getElementById('nav-menu');

// Toggle Menu Open/Close
hamburger.addEventListener('click', () => {
    hamburger.classList.toggle('active');
    navMenu.classList.toggle('active');
});

// Close menu when a link is clicked
document.querySelectorAll('.nav a').forEach(link => {
    link.addEventListener('click', () => {
        hamburger.classList.remove('active');
        navMenu.classList.remove('active');
    });
});
