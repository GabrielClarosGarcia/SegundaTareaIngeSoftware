import { saludar } from "./saludador";

describe("Saludador", () => {
  it("deberia saludar con hola", () => {
    expect(saludar()).toEqual("Hola");
  });
});
describe("Saludar por nombre", () => {
  it("deberia saludar con hola y el nombre", () => {
    expect(saludar("Gabriel")).toEqual("Hola Gabriel");
  });
});
describe("Saludar segun la hora", () => {
  it("deberia saludar con buenos dias en la mañana", () => {
    expect(saludar("Gabriel", 9)).toEqual("Buenos días Gabriel");
  });

  it("deberia saludar con buenas tardes en la tarde", () => {
    expect(saludar("Gabriel", 15)).toEqual("Buenas tardes Gabriel");
  });

  it("deberia saludar con buenas noches en la noche", () => {
    expect(saludar("Gabriel", 21)).toEqual("Buenas noches Gabriel");
  });
});
describe("Saludar por genero", () => {
  it("deberia saludar como Sr. si es masculino y mayor de 30", () => {
    expect(saludar("Gabriel", 9, "masculino", 35))
      .toEqual("Buenos días Sr. Gabriel");
  });

  it("deberia saludar como Sra. si es femenino y mayor de 30", () => {
    expect(saludar("Maria", 15, "femenino", 40))
      .toEqual("Buenas tardes Sra. Maria");
  });
});

describe("Saludar por edad", () => {
  it("deberia usar Sr. si es mayor de 30 y masculino", () => {
    expect(saludar("Gabriel", 9, "masculino", 35))
      .toEqual("Buenos días Sr. Gabriel");
  });

  it("no deberia usar titulo si es menor o igual a 30", () => {
    expect(saludar("Pedro", 9, "masculino", 25))
      .toEqual("Buenos días Pedro");
  });
});



