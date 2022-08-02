class ValidacoesGerais {
  static validaSeString(parametro){
    if( typeof parametro == 'string') return true
  }

  static ValidaSeNumero(string){
    const str = string.split('')
    const lista = '0123456789.'
    return str.every(elem => lista.includes(elem))
  }

  static ValidaNaoVazio(parametro) {
    if(!parametro == '') return true
  }

  static ValidaStringNaoVazia(parametro) {
    if(this.validaSeString(parametro) && this.ValidaNaoVazio(parametro)) return true
  }
  
}

export default ValidacoesGerais;