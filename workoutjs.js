// Function to handle the "Start Exercise" button click
function startExercise(button, countdownId) {
    button.classList.add('clicked');
    setTimeout(function() {
      button.classList.remove('clicked');
    }, 300); // 300 milliseconds, adjust as needed

    // Start the countdown when the button is clicked
    startCountdown(5 * 60, countdownId); // 5 minutes countdown, adjust as needed
  }

  // Function to display a countdown timer
  function startCountdown(duration, countdownId) {
    let timer = duration, minutes, seconds;
    const countdownDisplay = document.getElementById(countdownId);

    const intervalId = setInterval(function () {
      minutes = parseInt(timer / 60, 10);
      seconds = parseInt(timer % 60, 10);

      minutes = minutes < 10 ? "0" + minutes : minutes;
      seconds = seconds < 10 ? "0" + seconds : seconds;

      countdownDisplay.textContent = minutes + ":" + seconds;

      if (--timer < 0) {
        clearInterval(intervalId);
        alert("Workout completed!");
      }
    }, 1000);
  }