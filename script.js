function countdownTimer() {
    const eventDate = new Date("April 30, 2025 16:00:00").getTime();
    setInterval(() => {
        const now = new Date().getTime();
        const remaining = eventDate - now;
        const days = Math.floor(remaining / (1000 * 60 * 60 * 24));
        const hours = Math.floor((remaining % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutes = Math.floor((remaining % (1000 * 60 * 60)) / (1000 * 60));
        document.getElementById("countdown").innerHTML = `${days} Days ${hours} Hours ${minutes} Minutes`;
    }, 1000);
}

countdownTimer();
