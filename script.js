const yesBtn = document.getElementById("yesBtn");
const noBtn = document.getElementById("noBtn");
const inviteBox = document.getElementById("inviteBox");
const thankYouBox = document.getElementById("thankYouBox");

// Handle Yes Button
yesBtn.addEventListener("click", () => {
  // Change background to your picture (zoomed out)
  document.body.style.background = "url('me.jpg') no-repeat center center fixed";
  document.body.style.backgroundSize = "contain"; 
  document.body.style.backgroundColor = "#000";

  // Hide the invite
  inviteBox.style.display = "none";

  // Show thank you message
  thankYouBox.style.display = "block";

  // Launch confetti
  startConfetti();
});

// Handle No Button (runs away)
noBtn.addEventListener("mouseover", () => {
  noBtn.style.position = "absolute";
  noBtn.style.top = Math.random() * window.innerHeight + "px";
  noBtn.style.left = Math.random() * window.innerWidth + "px";
});

/* 🎉 Confetti Effect */
const confettiCanvas = document.getElementById("confetti-canvas");
const ctx = confettiCanvas.getContext("2d");

let confetti = [];
function startConfetti() {
  confetti = Array.from({ length: 150 }, () => ({
    x: Math.random() * window.innerWidth,
    y: Math.random() * window.innerHeight,
    r: Math.random() * 6 + 4,
    dx: Math.random() - 0.5,
    dy: Math.random() * 3 + 2,
    color: `hsl(${Math.random() * 360}, 100%, 50%)`
  }));
  animateConfetti();
}

function animateConfetti() {
  ctx.clearRect(0, 0, confettiCanvas.width, confettiCanvas.height);
  confetti.forEach(c => {
    ctx.beginPath();
    ctx.arc(c.x, c.y, c.r, 0, 2 * Math.PI);
    ctx.fillStyle = c.color;
    ctx.fill();

    c.x += c.dx;
    c.y += c.dy;
    if (c.y > window.innerHeight) c.y = 0;
  });
  requestAnimationFrame(animateConfetti);
}

window.addEventListener("resize", () => {
  confettiCanvas.width = window.innerWidth;
  confettiCanvas.height = window.innerHeight;
});
confettiCanvas.width = window.innerWidth;
confettiCanvas.height = window.innerHeight;
