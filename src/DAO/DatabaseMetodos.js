class DatabaseMetodos {

  static activePragma(){
    const pragma = "PRAGMA foreign_keys = ON"

    Database.run(pragma, (e)=>{
        if(e){
            console.log(e)
        } else {
            console.log("Chaves estrangeiras estão ativas")
        }
    })
  }

}

export default DatabaseMetodos;