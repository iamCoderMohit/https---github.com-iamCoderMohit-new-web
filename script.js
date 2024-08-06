let isProcessing = false;  // Flag to check if the process is ongoing

document.getElementById('startButton').addEventListener('click', async () => {
    if (isProcessing) return;  // Prevent starting the process if it's already running

    // Set flag to indicate processing
    isProcessing = true;

    // Display the overlay to simulate freeze
    const overlay = document.getElementById('overlay');
    overlay.style.display = 'block';

    // Display the danger message
    const dangerMessage = document.getElementById('dangerMessage');
    dangerMessage.style.display = 'block';

    // Hide the system message immediately
    const systemMessage = document.getElementById('systemMessage');
    systemMessage.style.display = 'none';

    // Hide the button after click
    const startButton = document.getElementById('startButton');
    startButton.style.display = 'none';

    // Proceed with the simulation
    await simulateHacking();

    // Hide the overlay after the simulation completes
    overlay.style.display = 'none';
    // Hide the danger message after the simulation completes
    dangerMessage.style.display = 'none';

    // Reset the processing flag
    isProcessing = false;
});

async function simulateHacking() {
    const output = document.getElementById('output');
    output.textContent = '';  // Clear previous output

    // Load and play the silent audio
    const beepSound = document.getElementById('beepSound');
    beepSound.loop = true;  // Loop the beep sound

    // Try to play the sound
    try {
        await beepSound.play();
    } catch (error) {
        console.error('Beep sound failed to play:', error);
    }

    const messages = [
        'Hacking Initialized',
        'Bypassing Security Protocols',
        'Establishing Connection to Central Server',
        'Accessing Secure Database',
        'Decrypting Sensitive Information',
        'File Transfer in Progress',
        'Verifying Data Integrity',
        'File Transfer Complete',
        'Connection Terminated'
    ];

    for (let i = 0; i < messages.length; i++) {
        if (i === messages.length - 1) {
            // Display the last message without dot effect
            output.textContent = messages[i];
        } else {
            await showMessageWithDots(messages[i], 500);  // Shorter delay for dots
        }
    }

    // Stop the beep sound
    beepSound.pause();
    beepSound.currentTime = 0;  // Reset the beep sound

    // Show and play the video
    const video = document.getElementById('hackVideo');
    video.style.display = 'block';  // Ensure the video element is visible
    video.play();  // Play the video
}

async function showMessageWithDots(message, dotDelay) {
    const output = document.getElementById('output');
    const dots = ['.', '..', '...'];
    
    // Display the message with dots repeating
    for (let i = 0; i < 2; i++) {  // Reduced number of repeats
        for (const dot of dots) {
            output.textContent = `${message}${dot}`;
            await delay(dotDelay);
        }
    }
    output.textContent = message;  // Reset message after showing all dots
}

function delay(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}

// Block interactions with the page
function blockInteractions() {
    // Prevent default actions and interactions
    window.onbeforeunload = function() {
        return 'Your system is still processing. Are you sure you want to leave?';
    };
}

// Enable the blocking function when processing starts
document.addEventListener('DOMContentLoaded', () => {
    if (isProcessing) {
        blockInteractions();
    }
});
