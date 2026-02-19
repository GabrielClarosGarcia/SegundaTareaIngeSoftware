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

