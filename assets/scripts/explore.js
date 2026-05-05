// explore.js

window.addEventListener('DOMContentLoaded', init);

function init() {
  // TODO
  const synth = window.speechSynthesis; //use web speech API
  let voices = [];

  //initialize vars
  const textToSpeak = document.getElementById("text-to-speak");
  const voiceSelect = document.getElementById("voice-select");
  const talkButton = document.querySelector("button");
  const faceImage = document.querySelector("img[alt='Smiling face']");
  


  function populateVoiceList() {
    voices = synth.getVoices();
  
    for (let i = 0; i < voices.length; i++) {
      const option = document.createElement("option");
      option.textContent = `${voices[i].name} (${voices[i].lang})`;
  
      if (voices[i].default) {
        option.textContent += " — DEFAULT";
      }
  
      option.setAttribute("data-lang", voices[i].lang);
      option.setAttribute("data-name", voices[i].name);
      voiceSelect.appendChild(option);
    }
  }
  
  populateVoiceList();

  if (speechSynthesis.onvoiceschanged !== undefined) {
    speechSynthesis.onvoiceschanged = populateVoiceList;
  }

  function speak(){
    if (synth.speaking) {
      console.error("already speaking.");
      return;
    }
    const utterance = new SpeechSynthesisUtterance(textToSpeak.value);
    const selectedVoice = voiceSelect.selectedIndex - 1; 

    if (selectedVoice >= 0) {
      utterance.voice = voices[selectedVoice];
    }
    const smilingFace = "./assets/images/smiling.png";
    const openMouthFace = "./assets/images/smiling-open.png";

    utterance.onstart = () => {
        faceImage.src = openMouthFace;
        faceImage.alt = "Open mouth face";
    };

    utterance.onend = () => {
      faceImage.src = smilingFace;
      faceImage.alt = "Smiling face";
    };
    synth.speak(utterance);

  }
  populateVoiceList();

  if (speechSynthesis.onvoiceschanged !== undefined) {
    speechSynthesis.onvoiceschanged = populateVoiceList;
  }
  talkButton.addEventListener("click", speak);
}