// Store reference to all audio elements
const sounds = document.querySelectorAll('audio');

// Variable to track the currently playing sound
let currentlyPlaying = null;

// Add event listener for keydown events
window.addEventListener('keydown', (event) => {
    // Check if the key pressed is between 1 and 9 on keyboard (49-57) or numpad (97-105)
    const keyCode = event.keyCode;
    const isStandardKey = keyCode >= 49 && keyCode <= 57; // Main keyboard keys 1-9
    const isNumpadKey = keyCode >= 97 && keyCode <= 105;  // Numpad keys 1-9

    if (isStandardKey || isNumpadKey) {
        // Find the corresponding audio element by adjusting the numpad key codes to match the keyboard key codes
        const adjustedKeyCode = isNumpadKey ? keyCode - 48 : keyCode; // Map numpad keys (97-105) to (49-57)
        const audio = document.querySelector(`audio[data-key="${adjustedKeyCode}"]`);

        // If an audio is already playing, stop it
        if (currentlyPlaying && currentlyPlaying !== audio) {
            currentlyPlaying.pause();
            currentlyPlaying.currentTime = 0; // Reset the audio to the beginning
        }

        // Play the new audio if it exists
        if (audio) {
            audio.play();
            currentlyPlaying = audio; // Update the currently playing audio reference
        }
    }
});
