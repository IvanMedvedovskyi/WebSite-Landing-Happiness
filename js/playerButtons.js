document.addEventListener('DOMContentLoaded', function () {
    const video = document.getElementById('myVideo');

    const startButton = document.getElementById('play');
    const stopButton = document.getElementById('pause');

    startButton.addEventListener('click', function () {
        video.play();
    });


    stopButton.addEventListener('click', function () {
        video.pause();

    });
});