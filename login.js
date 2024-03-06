const form = document.getElementById('login-form');
const message = document.getElementById('message');

form.addEventListener('submit', (e) => {
    e.preventDefault();

    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;

    // Simulate login validation (replace with your actual logic)
    if (username === 'Porn' && password === 'vdo') {
        
        window.location.href = "https://drive.google.com/drive/folders/1-IMUZSXNwl01JQdBsjiz0_4hED6Az8mS";
    } 
    if (username === 'Play' && password === 'porn') {
        
        window.location.href ="https://godrivelive.github.io/own/video.html";
    } else {
        message.textContent = 'Ato soto kn re beda -_- ?';
    }
});
