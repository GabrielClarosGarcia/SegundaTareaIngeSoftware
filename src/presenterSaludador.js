import { saludar } from "./saludador";

const button = document.querySelector("#saludar-button");
const div = document.querySelector("#resultado-div");
const nombreInput = document.querySelector("#nombre-input");
const generoSelect = document.querySelector("#genero-select");
const edadInput = document.querySelector("#edad-input");

button.addEventListener("click", () => {
  const nombre = nombreInput.value;
  const genero = generoSelect.value;
  const edad = Number.parseInt(edadInput.value);

  const fechaActual = new Date();
  const horaActual = fechaActual.getHours();

  div.innerHTML =
    "<p>" + saludar(nombre, horaActual, genero, edad) + "</p>";
});
