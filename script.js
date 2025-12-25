/* ================= MUSIC PLAYLIST ================= */

const playlist = [
    "assets/music/birthday1.mp3",
    "assets/music/birthday2.mp3",
    "assets/music/birthday3.mp3"
];

let currentSong = 0;
const music = document.getElementById("bgMusic");

music.preload = "auto";
music.volume = 0.7;
music.src = playlist[currentSong];

// play next song automatically
music.addEventListener("ended", () => {
    currentSong = (currentSong + 1) % playlist.length;
    music.src = playlist[currentSong];
    music.play();
});

/* ================= START EXPERIENCE ================= */

function startSurprise() {
    music.play().catch(err => {
        console.log("Playback blocked:", err);
    });

    document.getElementById("welcome").classList.add("hidden");
    document.getElementById("envelopes").classList.remove("hidden");
}

/* ================= OPEN LETTER ================= */

function openLetter(letterId) {
    document.getElementById("envelopes").classList.add("hidden");
    document.getElementById(letterId).classList.remove("hidden");

    if (letterId === "letter2") startSlideshow();
    if (letterId === "letter4") startHearts();
}

/* ================= BACK ================= */

function goBack() {
    document.querySelectorAll(".letter").forEach(l => l.classList.add("hidden"));
    document.getElementById("envelopes").classList.remove("hidden");
}

/* ================= SLIDESHOW ================= */

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

/* ================= HEARTS ================= */

function startHearts() {
    setInterval(() => {
        let heart = document.createElement("span");
        heart.innerText = "❤️";
        heart.style.left = Math.random() * 100 + "vw";
        document.getElementById("hearts").appendChild(heart);

        setTimeout(() => heart.remove(), 4000);
    }, 300);
}
