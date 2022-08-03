class DatabaseMetodos {

  static activePragma(){
    const pragma = "PRAGMA foreign_keys = ON"

<<<<<<< HEAD
    Database.run(pragma, (erro)=>{
        if(erro){
            console.log(erro)
=======
    Database.run(pragma, (e)=>{
        if(e){
            console.log(e)
>>>>>>> bb5ec2c98380070b088b80c8c05cc1980f483882
        } else {
            console.log("Chaves estrangeiras estão ativas")
        }
    })
  }

}

export default DatabaseMetodos;