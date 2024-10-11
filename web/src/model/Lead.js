// models/Lead.js
class Lead {
    constructor(id, nome, email, dataHoraCadastro, telefone) {
      this.id = id;
      this.nome = nome;
      this.email = email;
      this.dataHoraCadastro = dataHoraCadastro;
      this.telefone = telefone;
    }
  
    static fromJson(json) {
      return new Lead(
        json.id,
        json.nome,
        json.email,
        new Date(json.dataHoraCadastro), 
        json.telefone
      );
    }
  }
  
  export default Lead;
  