class ValidacoesGerais {
  static validaSeString(parametro){
    if( typeof parametro == 'string') return true
  }

  static ValidaSeNumero(parametro){
    if( typeof parametro == 'number') return true
  }

  static ValidaNaoVazio(parametro) {
    if(!parametro == '') return true
  }

  static ValidaStringNaoVazia(parametro) {
    if(this.validaSeString(parametro) && this.ValidaNaoVazio(parametro)) return true
  }
  
}

export default ValidacoesGerais;