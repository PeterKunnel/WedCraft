function startCountdown(targetDate) {
  function updateTimer() {
    const now = new Date();
    const target = new Date(targetDate);
    const diff = target - now;

    if (diff <= 0) {
      document.querySelector(".countdown-grid").innerHTML = "<h2>Today ❤️</h2>";
      return;
    }

    const totalSeconds = Math.floor(diff / 1000);
    const days = Math.floor(totalSeconds / 86400);
    const hours = Math.floor((totalSeconds % 86400) / 3600);
    const minutes = Math.floor((totalSeconds % 3600) / 60);
    const seconds = totalSeconds % 60;

    document.getElementById("days").innerText = String(days).padStart(2, "0");
    document.getElementById("hours").innerText = String(hours).padStart(2, "0");
    document.getElementById("minutes").innerText = String(minutes).padStart(2, "0");
    document.getElementById("seconds").innerText = String(seconds).padStart(2, "0");
  }

  updateTimer();
  setInterval(updateTimer, 1000);
}

startCountdown("2026-01-26T11:00:00");
