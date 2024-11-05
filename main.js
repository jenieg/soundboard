// Store reference to all audio elements
const sounds = document.querySelectorAll('audio');

// Variable to track the currently playing sound
let currentlyPlaying = null;

// Add event listener for keydown events
window.addEventListener('keydown', (event) => {
    // Check if the key pressed is between 1 and 9 (key codes 49-57)
    const key = event.key;
    if (key >= 1 && key <= 9) {
        // Find the corresponding audio element based on the key
        const audio = document.querySelector(`audio[data-key="${event.keyCode}"]`);
        
        // If an audio is already playing, stop it
        if (currentlyPlaying && currentlyPlaying !== audio) {
            currentlyPlaying.pause();
            currentlyPlaying.currentTime = 0; // Reset the audio to the beginning
        }

        // Play the new audio
        audio.play();

        // Update the currently playing audio reference
        currentlyPlaying = audio;
    }
});
