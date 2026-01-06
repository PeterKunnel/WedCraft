function startCountdown(targetDate) {
  function updateTimer() {
    const now = new Date();
    const target = new Date(targetDate);
    const diff = target - now;

    if (diff <= 0) {
      document.querySelector(".countdown-grid").innerHTML = "<h2>Today ❤️</h2>";
      return;
    }

    const s = Math.floor(diff / 1000);

    days.innerText = Math.floor(s / 86400);
    hours.innerText = Math.floor((s % 86400) / 3600);
    minutes.innerText = Math.floor((s % 3600) / 60);
    seconds.innerText = s % 60;
  }

  updateTimer();
  setInterval(updateTimer, 1000);
}

startCountdown("2026-01-26T11:00:00");
