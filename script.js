// ================= TYPING ANIMATION =================

document.addEventListener("DOMContentLoaded", function () {
  const elements = document.querySelectorAll(".animate-text");

  elements.forEach((el) => {
    const phrases = JSON.parse(el.getAttribute("data-phrases"));
    let phraseIndex = 0;
    let letterIndex = 0;

    function type() {
      if (letterIndex < phrases[phraseIndex].length) {
        el.textContent += phrases[phraseIndex].charAt(letterIndex);
        letterIndex++;
        setTimeout(type, 40);
      } else {
        setTimeout(erase, 2000);
      }
    }

    function erase() {
      if (letterIndex > 0) {
        el.textContent = phrases[phraseIndex].substring(0, letterIndex - 1);
        letterIndex--;
        setTimeout(erase, 30);
      } else {
        phraseIndex = (phraseIndex + 1) % phrases.length;
        setTimeout(type, 500);
      }
    }

    type();
  });
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

if (hamburger && navMenu) {

    hamburger.addEventListener('click', () => {
        hamburger.classList.toggle('active');
        navMenu.classList.toggle('active');
    });

    document.querySelectorAll('.nav a').forEach(link => {
        link.addEventListener('click', () => {
            hamburger.classList.remove('active');
            navMenu.classList.remove('active');
        });
    });

}



document.addEventListener("DOMContentLoaded", function () {

    let slideIndex = 0;
    let slideTimer;

    const slides = document.getElementsByClassName("testimony-item");

    if (slides.length === 0) return; // Stop if no testimonials exist

    function showSlides() {
        for (let i = 0; i < slides.length; i++) {
            slides[i].style.display = "none";
        }

        slideIndex++;
        if (slideIndex > slides.length) {
            slideIndex = 1;
        }

        slides[slideIndex - 1].style.display = "block";

        clearTimeout(slideTimer);
        slideTimer = setTimeout(showSlides, 5000);
    }

    window.moveSlide = function (n) {
        slideIndex += n - 1;

        if (slideIndex < 0) {
            slideIndex = slides.length - 1;
        }

        showSlides();
    };

    showSlides();
});
