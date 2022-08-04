import CardapioValidacoes from "../services/CardapioValidacoes.js";

//testes unitario para a função verificaCategoria

test("Validar se o nome tem 3 caracteres ou mais.", ()=>{
  expect(CardapioValidacoes.verificaCategoria("Bebida")).toBe(true)
})

test("Validar se o nome tem 3 caracteres ou mais.", ()=>{
  expect(CardapioValidacoes.verificaCategoria("Pizza Salgada")).toBe(true)
})

test("Validar se o nome tem 3 caracteres ou mais.", ()=>{
  expect(CardapioValidacoes.verificaCategoria("Pizza Doce")).toBe(true)
})

test("Validar se o nome tem 3 caracteres ou mais.", ()=>{
  expect(CardapioValidacoes.verificaCategoria("Luciana")).toBe(false)
})

test("Validar se o nome tem 3 caracteres ou mais.", ()=>{
  expect(CardapioValidacoes.verificaCategoria("pizza salgada")).toBe(false)
})

test("Validar se o nome tem 3 caracteres ou mais.", ()=>{
  expect(CardapioValidacoes.verificaCategoria("doce")).toBe(false)
})

//testes unitario para a função verificaCategoria