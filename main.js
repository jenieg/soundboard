// Get All Audio
const sounds = document.querySelectorAll('audio');

// Track the currently playing sound
let currentlyPlaying = null;

// Play Sound on Keydown
window.addEventListener('keydown', (event) => {
    const keyCode = event.keyCode;
    const isStandardKey = keyCode >= 49 && keyCode <= 57;
    const isNumpadKey = keyCode >= 97 && keyCode <= 105;

    // if keyCode is Accepted
    if (isStandardKey || isNumpadKey) {
        const adjustedKeyCode = isNumpadKey ? keyCode - 48 : keyCode;
        const audio = document.querySelector(`audio[data-key="${adjustedKeyCode}"]`);

        // If an audio is already playing, stop it
        if (currentlyPlaying && currentlyPlaying !== audio) {
            currentlyPlaying.pause();
            currentlyPlaying.currentTime = 0;
        }

        // Play the new audio if it exists
        if (audio) {
            audio.play();
            currentlyPlaying = audio; // Update the currently playing audio reference
        }
    }
});

//Button to Stop Audio
const button = document.getElementById('btn-stop');

button.addEventListener('click', function() {
    if (currentlyPlaying) {
        currentlyPlaying.pause();
        currentlyPlaying.currentTime = 0;
        currentlyPlaying = null;
    }
})