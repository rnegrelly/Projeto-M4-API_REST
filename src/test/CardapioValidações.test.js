import CardapioValidacoes from "../services/CardapioValidacoes.js";
import ValidacoesGerais from "../services/ValidacoesGerais.js"

//testa validação de categoria

test("Verifica se a categoria inserida está correta", () => {
  expect(CardapioValidacoes.validaCategoria("Bebida")).toBe(true);
});

test("Verifica se a categoria inserida está correta", () => {
  expect(CardapioValidacoes.validaCategoria("Pizza Salgada")).toBe(true);
});

test("Verifica se a categoria inserida está correta", () => {
  expect(CardapioValidacoes.validaCategoria("Pizza Doce")).toBe(true);
});

test("Verifica se a categoria inserida está correta", () => {
  expect(CardapioValidacoes.validaCategoria("Nodja")).toBe(undefined);
});

test("Verifica se a categoria inserida está correta", () => {
  expect(CardapioValidacoes.validaCategoria(125)).toBe(undefined);
});

test("Verifica se a categoria inserida está correta", () => {
  expect(CardapioValidacoes.validaCategoria("")).toBe(undefined);
});

//testa verificação de categoria

test("Verifica se a categoria inserida está correta", () => {
  expect(CardapioValidacoes.verificaCategoria("Bebida")).toBe(true);
});

test("Verifica se a categoria inserida está correta", () => {
  expect(CardapioValidacoes.verificaCategoria("Pizza Salgada")).toBe(true);
});

test("Verifica se a categoria inserida está correta", () => {
  expect(CardapioValidacoes.verificaCategoria("Pizza Doce")).toBe(true);
});

test("Verifica se a categoria inserida está correta", () => {
  expect(CardapioValidacoes.verificaCategoria("Nodja")).toBe(false);
});

test("Verifica se a categoria inserida está correta", () => {
  expect(CardapioValidacoes.verificaCategoria(125)).toBe(false);
});

test("Verifica se a categoria inserida está correta", () => {
  expect(CardapioValidacoes.verificaCategoria("")).toBe(false);
});

//testa validação de tamanho

test("Verifica se o tamanho inserido está correto", () => {
  expect(CardapioValidacoes.validaTamanho("Brotinho")).toBe(true);
});

test("Verifica se o tamanho inserido está correto", () => {
  expect(CardapioValidacoes.validaTamanho("Média")).toBe(true);
});

test("Verifica se o tamanho inserido está correto", () => {
  expect(CardapioValidacoes.validaTamanho("Grande")).toBe(true);
});

test("Verifica se o tamanho inserido está correto", () => {
  expect(CardapioValidacoes.validaTamanho("Família")).toBe(true);
});

test("Verifica se o tamanho inserido está correto", () => {
  expect(CardapioValidacoes.validaTamanho("Lata")).toBe(true);
});

test("Verifica se o tamanho inserido está correto", () => {
  expect(CardapioValidacoes.validaTamanho("1 litro")).toBe(true);
});

test("Verifica se o tamanho inserido está correto", () => {
  expect(CardapioValidacoes.validaTamanho("2 litros")).toBe(true);
});

test("Verifica se o tamanho inserido está correto", () => {
  expect(CardapioValidacoes.validaTamanho("400ml")).toBe(true);
});

test("Verifica se o tamanho inserido está correto", () => {
  expect(CardapioValidacoes.validaTamanho("Nodja")).toBe(false);
});

test("Verifica se o tamanho inserido está correto", () => {
  expect(CardapioValidacoes.validaTamanho("")).toBe(false);
});

test("Verifica se o tamanho inserido está correto", () => {
  expect(CardapioValidacoes.validaTamanho(1254)).toBe(false);
});

// verifica se o novo item do cardario atende as exigencia das validações

test("Verifica se o novo item inserido está correto", () => {
  expect(CardapioValidacoes.validaNovoItem("Calabresa", "Pizza Salgada", "7,00", "Linguiça calabresa fatiada, cebola, oregano", "Grande")).toBe(true);
});

test("Verifica se o novo item inserido está correto", () => {
  expect(CardapioValidacoes.validaNovoItem("CHocolate", "Pizza Doce", "37,00", "Linguiça calabresa fatiada, cebola, oregano", "Média")).toBe(true);
});

test("Verifica se o novo item inserido está correto", () => {
  expect(CardapioValidacoes.validaNovoItem("CHocolate", "Pizza ce", "37,00", "Linguiça calabresa fatiada, cebola, oregano", "Média")).toBe(false);
});

test("Verifica se o novo item inserido está correto", () => {
  expect(CardapioValidacoes.validaNovoItem("CHocolate", "Pizza ce", "Cinquenta", "Linguiça calabresa fatiada, cebola, oregano", "Média")).toBe(false);
});

test("Verifica se o novo item inserido está correto", () => {
  expect(CardapioValidacoes.validaNovoItem("CHocolate", "Pizza ce", "Cinquenta", "Linguiça calabresa fatiada, cebola, oregano", "")).toBe(false);
});