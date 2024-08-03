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
function criptografar() {

  let input = inputText.value;

  if (!InputRegexText.test(input)) {
    inputInvalido();

  } else {
    inputCriptografado = input
      .replace(/e/g, "enter")
      .replace(/i/g, "imes")
      .replace(/a/g, "ai")
      .replace(/o/g, "ober")
      .replace(/u/g, "ufat");

    exibirResultado();
  }
}

// INVALIDAÇAO DO INPUT
function inputInvalido() {
  outputInfo.title.innerHTML = "Texto inválido";
  outputInfo.paragraph.innerHTML = "Certifique-se de que o texto contém apenas letras minúsculas e sem acentos."

  outputInfoTexts.style.display = "flex";
  outputInfo.img1.style.display = "none";
  outputInfo.img2.style.display = "flex";

  outputResult.style.display = "none";
  inputInfo.style.color = "#F2E205";

  playErroSound();
  
  return;
}


// EXIBIR RESULTADO
function exibirResultado() {
  outputText.innerHTML = inputCriptografado;

  outputResult.style.display = "flex";
  outputInfoTexts.style.display = "none";
  outputInfo.img1.style.display = "none";
  outputInfo.img2.style.display = "none";
  inputInfo.style.color = "#ECECEE";
  playKriptoMusic();
  return;
}


// TOCAR KRYPTO MUSIC
function playKriptoMusic() {
  let kriptoMusic = document.getElementById("kryptoMusic");
  kriptoMusic.play();
}

// TOCAR ERRO SOUND
function playErroSound() {
  let erroSound = document.getElementById("erroSound");
  erroSound.play();
}

