// Musica abertura ao cliccar
const inputText = document.getElementById("text-input");
const outputText = document.getElementById("text-output");
const InputRegexText = /^[a-z\s]+$/;

const inputInfo = document.getElementById("inputInfo");
const outputResult = document.getElementById("outputResult");

const outputInfo = {
  title: document.getElementById("titleOutput"),
  paragraph: document.getElementById("paragraphOutput"),

  img1: document.getElementById("outputImg1"),
  img2: document.getElementById("outputImg2"),
}

let inputCriptografado = "";
const outputInfoTexts = document.getElementById("outputInfoTexts");


// CRIPTOGRAFIA

// INVALIDAÇAO DO INPUT

// EXIBIR RESULTADO


// Musica abertura ao cliccar
function playAudio(){
    play()
  }
 function play() {
   var audio = document.getElementById("audio");
   audio.play();
 }



 