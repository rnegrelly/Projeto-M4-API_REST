class DatabaseMetodos {

  static activePragma(){
    const pragma = "PRAGMA foreign_keys = ON"

    Database.run(pragma, (erro)=>{
        if(erro){
            console.log(erro)
        } else {
            console.log("Chaves estrangeiras estão ativas")
        }
    })
  }

}

export default DatabaseMetodos;