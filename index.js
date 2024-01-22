class personagem{
    
  constructor(nome, idade, tipo){
      this.nome = nome
      this.idade = idade
      this.tipo = tipo
  }


  atacar(){
      console.log(`O ${this.tipo} atacou ${this.tipoDeAtaque(this.tipo)}`)
  }


  tipoDeAtaque(tipo){
  
      switch(tipo){
        case "ninja": return "usando shuriken"
          case "mago": return "usando magia"
          case "monge": return "usando artes marciais"
          case "guerreiro": return "usando espada"

          
      }
  }
}

let hero1 = new personagem("Chaw kaw", 18, "guerreiro")
hero1.atacar()
let hero2 = new personagem("Jack chan", 27, "monge")
hero2.atacar()
let hero3 = new personagem("naruto", 16, "ninja")
hero3.atacar()
let hero4 = new personagem("Wizard", 80, "mago")
hero4.atacar()