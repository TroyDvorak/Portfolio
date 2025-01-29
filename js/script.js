document.querySelectorAll('nav a').forEach(link => {
    link.addEventListener('click', e => {
        e.preventDefault();
        document.querySelector(link.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});
const fireEffect = document.getElementById('fire-effect');

// Function to create an ash particle
function createAsh() {
    const ash = document.createElement('span');
    ash.className = 'ash';

    // Randomize particle properties
    ash.style.left = `${Math.random() * 100}%`; // Random horizontal position
    ash.style.animationDuration = `${2 + Math.random() * 3}s`; // Random animation speed
    ash.style.opacity = Math.random(); // Random opacity
    ash.style.width = `${5 + Math.random() * 10}px`; // Random size
    ash.style.height = ash.style.width; // Keep it circular

    // Append ash to the container
    fireEffect.appendChild(ash);

    // Remove ash after animation ends
    ash.addEventListener('animationend', () => ash.remove());
}

// Generate ashes at regular intervals
setInterval(createAsh, 60);
// Select the paragraph and buttons
// Toggle for Digital Timecard
const digitalText = document.getElementById('digital-timecard-text');
const digitalDescriptionBtn = document.getElementById('digital-description-btn');
const digitalChallengesBtn = document.getElementById('digital-challenges-btn');

const digitalDescriptionText = `Designed, tested, and implemented a digital timecard system to replace the outdated paper-based system for a construction employer. By integrating Twilio for reporting hours via WhatsApp, I automated time entry and streamlined operational efficiency using Microsoft Excel. The new system saved employees over five hours per week through automation, significantly enhancing overall productivity and operational workflows.`;
const digitalChallengesText = `Challenges included designing a seamless integration with Twilio for WhatsApp reporting and optimizing Excel-based automation for speed and reliability. Additionally, adapting the system to handle variable reporting formats required extensive debugging and refinement.`;

digitalDescriptionBtn.addEventListener('click', () => {
    digitalText.textContent = digitalDescriptionText;
    digitalDescriptionBtn.classList.add('active');
    digitalChallengesBtn.classList.remove('active');
});

digitalChallengesBtn.addEventListener('click', () => {
    digitalText.textContent = digitalChallengesText;
    digitalChallengesBtn.classList.add('active');
    digitalDescriptionBtn.classList.remove('active');
});

// Toggle for Bald Man Go!
const baldText = document.getElementById('bald-man-go-text');
const baldDescriptionBtn = document.getElementById('bald-description-btn');
const baldChallengesBtn = document.getElementById('bald-challenges-btn');

const baldDescriptionText = `This 2D platformer project focuses on building a dynamic system where the player must keep up with a moving camera that progressively speeds up. The game uses physics-driven mechanics and collision detection to create smooth and challenging gameplay.`;
const baldChallengesText = `Challenges included fine-tuning the increasing camera speed for a smooth difficulty curve, designing a modular skill system for flexibility, and optimizing collision detection for performance. Procedurally generated elements required careful balancing to ensure varied yet fair gameplay.`;

baldDescriptionBtn.addEventListener('click', () => {
    baldText.textContent = baldDescriptionText;
    baldDescriptionBtn.classList.add('active');
    baldChallengesBtn.classList.remove('active');
});

baldChallengesBtn.addEventListener('click', () => {
    baldText.textContent = baldChallengesText;
    baldChallengesBtn.classList.add('active');
    baldDescriptionBtn.classList.remove('active');
});


