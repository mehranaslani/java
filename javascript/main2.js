
const answerArray = [
  "maybe maybe not",
  "it will work",
  "probebly not",
  "are you crazy?",
  "shot up",
  "you are beaten?",
  "fuck u",
  "what the mood?",
];
const message = document.querySelector(".message");
const question = document.querySelector("input");
const button = document.querySelector("button");
button.addEventListener("click", myanswer)
function myanswer(){
  let res = Math.floor(Math.random() * answerArray.length);
  message.innerText = question.value + " " + answerArray[res];
  question.value = "";
};
