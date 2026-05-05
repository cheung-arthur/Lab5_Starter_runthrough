// expose.js

window.addEventListener('DOMContentLoaded', init);

function init() {
  // TODO
  const hornSelect = document.getElementById("horn-select");
  const volumeControl = document.getElementById("volume");
  const volumeIcon = document.querySelector("#volume-controls img");
  const playButton = document.querySelector("button");
  const audioElement = document.querySelector("audio");
  const hornImage = document.querySelector("img[alt='No image selected']");
  const jsConfetti = new JSConfetti();
  
  const horns = {
    "air-horn": {
      audioSrc: "./assets/audio/air-horn.mp3",
      imgSrc: "./assets/images/air-horn.svg",
    },
    "car-horn": {
      audioSrc: "./assets/audio/car-horn.mp3",
      imgSrc: "./assets/images/car-horn.svg",
    },
    "party-horn": {
      audioSrc: "./assets/audio/party-horn.mp3",
      imgSrc: "./assets/images/party-horn.svg",
    },
  };

  function setVolumeIcon(volume) {
    if (volume === 0) {
      volumeIcon.src = "./assets/icons/volume-level-0.svg";
      volumeIcon.alt = "Volume level 0";
      console.log("Reached 0")
    } else if (volume < 33) {
      volumeIcon.src = "./assets/icons/volume-level-1.svg";
      volumeIcon.alt = "Volume level 1";
    } else if (volume < 67) {
      volumeIcon.src = "./assets/icons/volume-level-2.svg";
      volumeIcon.alt = "Volume level 2";
    } else {
      volumeIcon.src = "./assets/icons/volume-level-3.svg";
      volumeIcon.alt = "Volume level 3";
    }
  }

  function setVolume() {
    const volumeValue = parseInt(volumeControl.value, 10); 
    audioElement.volume = volumeValue / 100; // normalize to range 0-1
    setVolumeIcon(volumeValue);
  }

  function selectHorn() {
    const selectedHorn = hornSelect.value;
    if (selectedHorn in horns) {
      audioElement.src = horns[selectedHorn].audioSrc;
      hornImage.src = horns[selectedHorn].imgSrc;
      hornImage.alt = `${selectedHorn.replace("-", " ")} image`;
    }
  }

  function playSound() {
    if (audioElement.src) {
      audioElement.play();
      //confetti here
      if (hornSelect.value === "party-horn") {
        jsConfetti.addConfetti();
      }
    }
  }

  //event listeners attatched here
  hornSelect.addEventListener("change", selectHorn);
  volumeControl.addEventListener("input", setVolume);
  playButton.addEventListener("click", playSound);

  setVolume();
}