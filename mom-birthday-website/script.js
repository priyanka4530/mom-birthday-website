/* START EXPERIENCE */
function startSurprise() {
    const music = document.getElementById("bgMusic");
    music.volume = 0.6;
    music.play();

    document.getElementById("welcome").classList.add("hidden");
    document.getElementById("envelopes").classList.remove("hidden");
}

/* OPEN LETTER */
function openLetter(letterId) {
    document.getElementById("envelopes").classList.add("hidden");
    document.getElementById(letterId).classList.remove("hidden");

    if (letterId === "letter2") startSlideshow();
    if (letterId === "letter4") startHearts();
}

/* BACK TO ENVELOPES */
function goBack() {
    document.querySelectorAll(".letter").forEach(l => l.classList.add("hidden"));
    document.getElementById("envelopes").classList.remove("hidden");
}

/* SLIDESHOW WITH FADE (15 IMAGES) */
let images = Array.from({ length: 15 }, (_, i) => `assets/images/img${i + 1}.jpeg`);
let index = 0;
let slideshowInterval;

function startSlideshow() {
    clearInterval(slideshowInterval);

    slideshowInterval = setInterval(() => {
        const img = document.getElementById("slideImage");
        img.style.opacity = 0;

        setTimeout(() => {
            index = (index + 1) % images.length;
            img.src = images[index];
            img.style.opacity = 1;
        }, 300);
    }, 2500);
}

/* HEARTS ANIMATION */
function startHearts() {
    setInterval(() => {
        let heart = document.createElement("span");
        heart.innerText = "❤️";
        heart.style.left = Math.random() * 100 + "vw";
        document.getElementById("hearts").appendChild(heart);

        setTimeout(() => heart.remove(), 4000);
    }, 300);
}
