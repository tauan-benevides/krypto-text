const inputText = document.getElementById("text-input");
const outputText = document.getElementById("text-output");

const InputRegexText = /^(?!\s*$)[a-z\s.,!?]+$/;

const inputInfo = document.getElementById("input-info");
const outputResult = document.getElementById("output-result");

const outputInfo = {
  title: document.getElementById("title-output"),
  paragraph: document.getElementById("paragraph-output"),

  img1: document.getElementById("output-img1"),
  img2: document.getElementById("output-img2"),
}

let inputDescriptografado = "";
const outputInfoTexts = document.getElementById("output-info");


function encrypt() {
  let input = inputText.value;

  if (!InputRegexText.test(input)) {
    invalidInput();

  } else {
    let inputEncrypted = input
      .replace(/e/g, "enter")
      .replace(/i/g, "imes")
      .replace(/a/g, "ai")
      .replace(/o/g, "ober")
      .replace(/u/g, "ufat");

    displayResult(inputEncrypted);
    clearField();
  }
}

function decrypt() {
  let input = inputText.value;

  if (!InputRegexText.test(input)) {
    invalidInput();

  } else {
    let inputDecrypted = input
      .replace(/enter/g, "e")
      .replace(/imes/g, "i")
      .replace(/ai/g, "a")
      .replace(/ober/g, "o")
      .replace(/ufat/g, "u");

    displayResult(inputDecrypted);
    clearField();
  }
}

function copy() {
  let output = outputText.value;
  navigator.clipboard.writeText(output);

  Swal.fire({
    title: "Bom trabalho!",
    text: "Texto copiado para a área de transferência com sucesso.",
    icon: "success"
  });

  reset();
}

function reset() {
  outputResult.style.display = "none";
  outputInfoTexts.style.display = "flex";
  outputInfo.img1.style.display = "flex";
  outputInfo.img2.style.display = "none";
  inputInfo.style.color = "#F2F2F0";
  outputInfo.title.innerHTML = "Nenhuma mensagem encontrada";
  outputInfo.paragraph.innerHTML = "Digite um texto que você deseja criptografar ou descriptografar."
  clearField();
}

function clearField() {
  inputText.value = "";
}


function invalidInput() {
  outputInfo.title.innerHTML = "Texto inválido";
  outputInfo.paragraph.innerHTML = "Certifique-se de que o texto contém apenas letras minúsculas e sem acentos."

  outputInfoTexts.style.display = "flex";
  outputInfo.img1.style.display = "none";
  outputInfo.img2.style.display = "flex";

  outputResult.style.display = "none";
  inputInfo.style.color = "#F20505";

  playErrorSound();

  return;
}

function displayResult(text) {
  outputText.value = text;

  outputResult.style.display = "flex";
  outputInfoTexts.style.display = "none";
  outputInfo.img1.style.display = "none";
  outputInfo.img2.style.display = "none";
  inputInfo.style.color = "#F2F2F0";
  playKryptoMusic();
  return;
}

function playKryptoMusic() {
  let kryptoMusic = document.getElementById("krypto-music");
  kryptoMusic.play();
}

function playErrorSound() {
  let errorSound = document.getElementById("error-sound");
  errorSound.play();
}