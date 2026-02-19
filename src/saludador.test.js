import { saludar } from "./saludador";

describe("Saludador", () => {
  it("deberia saludar con hola", () => {
    expect(saludar()).toEqual("Hola");
  });
});
