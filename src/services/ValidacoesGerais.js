class ValidacoesGerais {
  static validaSeString(parametro){
    if( typeof parametro == 'string') return true
  }

  static ValidaSeNumero(string){
    if(string.length > 0) {
      const lista = '0123456789.,R$'
      return string.split('').every(elem => lista.includes(elem))
    } else {
      return false
    }
    
  }

  static ValidaNaoVazio(parametro) {
    if(!parametro == '') return true
  }

  static ValidaStringNaoVazia(parametro) {
    if(this.validaSeString(parametro) && this.ValidaNaoVazio(parametro)) return true
  }

  static validaId(id) {
    
  }
  
}

export default ValidacoesGerais;