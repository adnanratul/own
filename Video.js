const video = document.getElementById('myVideo');
const playlist = document.getElementById('playlist');

playlist.addEventListener('click', (event) => {
    const target = event.target;
    if (target.tagName !== 'LI') return;

    // Remove active class from all playlist items
    const playlistItems = playlist.querySelectorAll('li');
    playlistItems.forEach(item => item.classList.remove('active'));

    // Set active class on clicked item
    target.classList.add('active');

    // Change video source based on clicked item index
    const videoSource = video.querySelector('source');
    const videoIndex = target.textContent.indexOf('') + 1;
    videoSource.src = `#Nirbhay Sonawane Studios.mp4`;

    // Load and play the new video
    video.load();
    video.play();
});
