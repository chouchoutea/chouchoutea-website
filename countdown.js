// Countdown Timer for Grand Opening
function initCountdown() {
  // Set the target date to April 25, 2026 at 11:00 AM
  const targetDate = new Date('2026-04-25T11:00:00').getTime();

  function updateCountdown() {
    const now = new Date().getTime();
    const timeRemaining = targetDate - now;

    if (timeRemaining < 0) {
      document.querySelector('[data-countdown="days"]').textContent = '00';
      document.querySelector('[data-countdown="hours"]').textContent = '00';
      document.querySelector('[data-countdown="minutes"]').textContent = '00';
      document.querySelector('[data-countdown="seconds"]').textContent = '00';
      return;
    }

    const days = Math.floor(timeRemaining / (1000 * 60 * 60 * 24));
    const hours = Math.floor((timeRemaining % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((timeRemaining % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((timeRemaining % (1000 * 60)) / 1000);

    document.querySelector('[data-countdown="days"]').textContent = String(days).padStart(2, '0');
    document.querySelector('[data-countdown="hours"]').textContent = String(hours).padStart(2, '0');
    document.querySelector('[data-countdown="minutes"]').textContent = String(minutes).padStart(2, '0');
    document.querySelector('[data-countdown="seconds"]').textContent = String(seconds).padStart(2, '0');
  }

  updateCountdown();
  setInterval(updateCountdown, 1000);
}

if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', initCountdown);
} else {
  initCountdown();
}