function saludar(nombre, hora, genero) {
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

  let titulo = "";

  if (genero === "masculino") {
    titulo = "Sr. ";
  } else if (genero === "femenino") {
    titulo = "Sra. ";
  }

  if (nombre) {
    return saludo + " " + titulo + nombre;
  }

  return saludo;
}

export { saludar };
