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
setInterval(createAsh, 200);

// Function to handle toggle behavior
function setupToggleButtons(textElementId, descriptionBtnId, challengesBtnId, descriptionText, challengesText) {
    const textElement = document.getElementById(textElementId);
    const descriptionBtn = document.getElementById(descriptionBtnId);
    const challengesBtn = document.getElementById(challengesBtnId);

    if (!textElement || !descriptionBtn || !challengesBtn) return;

    descriptionBtn.addEventListener('click', () => {
        textElement.textContent = descriptionText;
        descriptionBtn.classList.add('active');
        challengesBtn.classList.remove('active');
    });

    challengesBtn.addEventListener('click', () => {
        textElement.textContent = challengesText;
        challengesBtn.classList.add('active');
        descriptionBtn.classList.remove('active');
    });
}



// Toggle for Digital Timecard
setupToggleButtons(
    'digital-timecard-text',
    'digital-description-btn',
    'digital-challenges-btn',
    `Designed, tested, and implemented a digital timecard system to replace the outdated paper-based system for a construction employer. 
    By integrating Twilio for reporting hours via WhatsApp, I automated time entry and streamlined operational efficiency using Microsoft Excel. 
    The new system saved employees over five hours per week through automation, significantly enhancing overall productivity and operational workflows.`,
    `The main challenges included integrating Twilio for WhatsApp reporting, which required overcoming several technical hurdles. Additionally, automating 
    an organized Excel file using Python was a learning curve, requiring careful structuring and debugging to ensure efficiency and accuracy.`
);

// Toggle for Bald Man Go!
setupToggleButtons(
    'bald-man-go-text',
    'bald-description-btn',
    'bald-challenges-btn',
    `This fast-paced 2D platformer challenges players to keep up with an ever-accelerating camera, pushing their reflexes and decision-making skills to the limit. 
    A key innovation in my design is the inclusion of three distinct routes within each level—the main ground path, an upper route, and a lower route—each presenting 
    unique obstacles and gameplay dynamics. Players must strategically equip abilities to overcome the challenges specific to their chosen path, offering a highly 
    customizable and replayable experience. Success in each level depends on the right combination of skill, ability selection, and route choice, ensuring a rewarding 
    challenge for players of all styles.`,
    `The primary challenges I faced while developing this game stemmed from my learning experience with Unity. I had to teach myself how to work with sprites, including 
    creating and animating them effectively. Additionally, I had to gain a deep understanding of Unity’s components and how to control them through scripting. Another 
    significant hurdle was implementing physics systems that accurately supported different movement styles, abilities, and interactions with enemies, ensuring smooth 
    and responsive gameplay. Overcoming these challenges not only strengthened my technical skills but also deepened my understanding of game development principles.`
);

// Toggle for Electronic Snowmobile Throttle
setupToggleButtons(
    'snowmobile-description',
    'throttle-description-btn',
    'throttle-challenges-btn',
    `During this project, I collaborated with an electrical engineer to develop and implement an electronic throttle system for the SAE Snow Team. 
    Our design enabled remote RPM control, integrated cruise control functionality, and introduced a launch control feature. By eliminating manual 
    throttle input, the system ensured completely unbiased testing conditions, allowing for precise data collection and performance evaluation. 
    This innovation enhanced testing accuracy, efficiency, and repeatability, contributing to the team’s overall optimization efforts.`,
    `The biggest challenge was collaborating with a cross-functional team and learning key electrical engineering principles. It took time
    to align our understanding, but through strong communication and problem-solving, we successfully developed the electronic throttle system.`
);
