const nome = "Arroz";

class ValidacoesGerais {
  static validaNome(nome) {
    if (!nome.length >= 3) {
      console.log("error 3 digitos");
    } else if (/^\d+$/.test(nome)) {
      console.log("error tipo string");
    }
  }
}

ValidacoesGerais.validaNome(nome);
