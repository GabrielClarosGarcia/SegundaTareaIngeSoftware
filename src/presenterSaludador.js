import { saludar } from "./saludador";

const button = document.querySelector("#saludar-button");
const div = document.querySelector("#resultado-div");
const nombreInput = document.querySelector("#nombre-input");
const generoSelect = document.querySelector("#genero-select");

button.addEventListener("click", () => {
  const nombre = nombreInput.value;
  const genero = generoSelect.value;

  const fechaActual = new Date();
  const horaActual = fechaActual.getHours();

  div.innerHTML = "<p>" + saludar(nombre, horaActual, genero) + "</p>";
});
