const pianoKeys = document.querySelectorAll(".piano-keys .key");
const volumeSlider = document.querySelector("#volume");
const keysCheck = document.querySelector("#showKeys");

const mappedKeys = Array.from(pianoKeys).map((key) => key.dataset.key);
let audio = new Audio(`./src/tunes/w.wav`);

const addAndRemoveClassWithDelay = (key) => {
  const clickedkey = document.querySelector(`[data-key="${key}"]`);
  if (clickedkey) {
    clickedkey.classList.add("active");

    setTimeout(() => {
      clickedkey.classList.remove("active");
    }, 150);
  }
};

const playTune = (key) => {
  audio.src = `./src/tunes/${key}.wav`;
  audio.addEventListener("loadeddata", () => {
    audio.play();
  });

  addAndRemoveClassWithDelay();
};

const handleVolume = (e) => {
  audio.volume = e.target.value;
};

pianoKeys.forEach((key) => {
  key.addEventListener("click", () => playTune(key.dataset.key));
});

document.addEventListener("keydown", (e) => {
  if (mappedKeys.includes(e.key)) playTune(e.key);
});

const showHideKeys = () => {
  pianoKeys.forEach((key) => key.classList.toggle("hide"));
};

volumeSlider.addEventListener("input", handleVolume);
keysCheck.addEventListener("click", showHideKeys);
