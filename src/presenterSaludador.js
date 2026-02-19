import { saludar } from "./saludador";

const button = document.querySelector("#saludar-button");
const div = document.querySelector("#resultado-div");
const nombreInput = document.querySelector("#nombre-input");

button.addEventListener("click", () => {
  const nombre = nombreInput.value;
  div.innerHTML = "<p>" + saludar(nombre) + "</p>";
});
