document.getElementById('startButton').addEventListener('click', async () => {
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

    // Hide the danger message after the simulation completes
    dangerMessage.style.display = 'none';
});

async function simulateHacking() {
    const output = document.getElementById('output');
    output.textContent = '';  // Clear previous output

    // Load and play the beep sound
    const beepSound = new Audio('beep.mp3');  // Ensure you have a beep.mp3 file in your directory
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
    video.style.display = 'block';  // Show the video
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
