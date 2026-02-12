import {sumar,  multiplicar} from "./sumador";

const first = document.querySelector("#primer-numero");
const second = document.querySelector("#segundo-numero");
const sumarBtn = document.querySelector("#sumar-button");
const multiplicarBtn = document.querySelector("#multiplicar-button");
const div = document.querySelector("#resultado-div");

sumarBtn.addEventListener("click", (event) => {
  event.preventDefault();

  const firstNumber = Number.parseInt(first.value);
  const secondNumber = Number.parseInt(second.value);

  div.innerHTML = "<p>Suma: "+ sumar(firstNumber, secondNumber) + "</p>";
});
multiplicarBtn.addEventListener("click", (event) => {
  event.preventDefault();

  const firstNumber = Number.parseInt(first.value);
  const secondNumber = Number.parseInt(second.value);

  div.innerHTML = "<p>Multiplicacion: " + multiplicar(firstNumber, secondNumber) + "</p>";
});

