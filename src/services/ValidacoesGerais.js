class ValidacoesGerais {
  static validaSeString(parametro){
    if( typeof parametro == 'string') return true
  }

  static ValidaSeNumero(string){
    const lista = '0123456789.,R$'
    return string.split('').every(elem => lista.includes(elem))
  }

  static ValidaNaoVazio(parametro) {
    if(!parametro == '') return true
  }

  static ValidaStringNaoVazia(parametro) {
    if(this.validaSeString(parametro) && this.ValidaNaoVazio(parametro)) return true
  }
  
}

export default ValidacoesGerais;