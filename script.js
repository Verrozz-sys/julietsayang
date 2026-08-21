// ===============================
// FOTO RANDOM
// ===============================

const photos = document.querySelectorAll(".photo-back");

const positions = [
  { x: "5%",  y: "8%",  rotate: -12, scale: 1 },
  { x: "72%", y: "4%",  rotate: 9,   scale: 0.92 },
  { x: "0%",  y: "58%", rotate: 8,   scale: 0.9 },
  { x: "76%", y: "55%", rotate: -8,  scale: 1 },
  { x: "20%", y: "78%", rotate: -7,  scale: 0.88 },
  { x: "60%", y: "76%", rotate: 11,  scale: 0.9 }
];

photos.forEach((photo, index) => {
  const fileName = photo.dataset.photo;
  const position = positions[index];

  photo.style.backgroundImage =
    `url("assets/photos/${fileName}")`;

  photo.style.left = position.x;
  photo.style.top = position.y;

  photo.style.transform =
    `rotate(${position.rotate}deg) scale(${position.scale})`;

  photo.style.zIndex = 5 + index;
});


// ===============================
// MUSIC PLAYER
// ===============================

const audio = document.getElementById("audio");
const playBtn = document.getElementById("playBtn");
const progress = document.getElementById("progress");
const progressContainer =
  document.getElementById("progressContainer");

const currentTime =
  document.getElementById("currentTime");

const duration =
  document.getElementById("duration");


if (audio && playBtn) {

  playBtn.addEventListener("click", async () => {

    try {

      if (audio.paused) {

        await audio.play();

        playBtn.textContent = "❚❚";

      } else {

        audio.pause();

        playBtn.textContent = "▶";

      }

    } catch (error) {

      console.error("Music error:", error);

      alert("Lagu gagal diputar. Cek file lagu.mp3 dan lokasinya.");

    }

  });


  audio.addEventListener("loadedmetadata", () => {

    duration.textContent =
      formatTime(audio.duration);

  });


  audio.addEventListener("timeupdate", () => {

    if (!audio.duration) return;

    const percent =
      (audio.currentTime / audio.duration) * 100;

    progress.style.width = percent + "%";

    currentTime.textContent =
      formatTime(audio.currentTime);

  });


  progressContainer.addEventListener("click", (event) => {

    if (!audio.duration) return;

    const width =
      progressContainer.clientWidth;

    const clickX =
      event.offsetX;

    audio.currentTime =
      (clickX / width) * audio.duration;

  });


  audio.addEventListener("ended", () => {

    playBtn.textContent = "▶";

    progress.style.width = "0%";

    currentTime.textContent = "0:00";

  });

}


// ===============================
// FORMAT WAKTU
// ===============================

function formatTime(seconds) {

  if (!seconds || isNaN(seconds)) {
    return "0:00";
  }

  const minutes =
    Math.floor(seconds / 60);

  const secs =
    Math.floor(seconds % 60)
      .toString()
      .padStart(2, "0");

  return `${minutes}:${secs}`;

}


// ===============================
// TOMBOL "BUKA PESANKU"
// ===============================

const openBtn =
  document.getElementById("openBtn");


if (openBtn) {

  openBtn.addEventListener("click", () => {

    alert("Maaffff kado ku ga seberapa");

  });

}