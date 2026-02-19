function saludar(nombre, hora) {
  let saludo = "Hola";

  if (hora !== undefined) {
    if (hora >= 0 && hora < 12) {
      saludo = "Buenos días";
    } else if (hora >= 12 && hora < 19) {
      saludo = "Buenas tardes";
    } else {
      saludo = "Buenas noches";
    }
  }

  if (nombre) {
    return saludo + " " + nombre;
  }

  return saludo;
}

export { saludar };
