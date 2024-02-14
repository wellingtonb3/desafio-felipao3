class Heroi {
    constructor(nome, idade, tipo) {
      this.nome = nome;
      this.idade = idade;
      this.tipo = tipo;
    }
  
    atacar() {
      let ataque;
      switch (this.tipo) {
        case "mago":
          ataque = "magia";
          break;
        case "guerreiro":
          ataque = "espada";
          break;
        case "monge":
          ataque = "artes marciais";
          break;
        case "ninja":
          ataque = "shuriken";
          break;
        default:
          ataque = "não sabemos";
      }
      console.log(`O ${this.tipo} atacou usando ${ataque}`);
    }
  }
  
  // Função para obter dados do herói e criar uma instância da classe Heroi
  function criarHeroi() {
    const nome = prompt("Digite o nome do herói:");
    const idade = prompt("Digite a idade do herói:");
    const tipo = prompt("Digite o tipo do herói (mago, guerreiro, monge, ninja):");
  
    return new Heroi(nome, idade, tipo);
  }
  
  // Cria um herói com os dados inseridos pelo usuário
  const heroi = criarHeroi();
  heroi.atacar(); // Exibe a mensagem de ataque
  