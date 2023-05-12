"use strict";

const corBtn = document.querySelector("#cor").addEventListener("click", function(){
  const r = Math.round(Math.random() * 255);
  const g = Math.round(Math.random() * 255);
  const b = Math.round(Math.random() * 255);
  
  document.body.style.backgroundColor = `rgb(${r},${g},${b})`;
});

function adicionarTexto(){

  const input = document.querySelector("#texto")
  const valor = input.value;
  
  if (valor.trim() !== ""){
  const list = document.querySelector("#listText")
  const addItem = document.createElement("li")
  addItem.textContent = valor
  list.appendChild(addItem)
  input.value = ""
  
   }
}

function mudarImg() {

  const imgs = document.querySelector("#imgs")
  if (imgs.src.endsWith("tranquilidade.jpg")) {
  imgs.src = "./img/desespero.jpg";
  imgs.alt = "Imagem Desespero";
  } 
  else if (imgs.src.endsWith("desespero.jpg")) {
  imgs.src = "./img/tranquilidade.jpg";
  imgs.alt = "Imagem Tranquilidade";
  } 
}

function exibirText() {

  const exibeText = document.querySelector("#exibe");
  exibeText.textContent = "Aeee!! Fui exibido ;p"
  
  }

function esconderText() {
  
  const escondeText = document.querySelector("#esconde");
  escondeText.classList.add("esconder");
}