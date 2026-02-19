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

