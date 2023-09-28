class Participante {
    constructor(nome, cpf, dataDeNacimento){
        this.nome = nome;
        this.cpf = cpf;
        this.dataDeNacimento = dataDeNacimento;
    }

}

class Aluno {
    constructor(nome, cpf, dataDeNacimento, matricula) {
        this.nome = nome;
        this.cpf = cpf;
        this.dataDeNacimento = dataDeNacimento;
        this.matricula = matricula;
    }

}
class Professor {
    constructor(nome, cpf, dataDeNacimento, siape, formacao) {
        this.nome = nome;
        this.cpf = cpf;
        this.dataDeNacimento = dataDeNacimento;
        this.siape = siape;
        this.formacao = formacao;
    }
}

class Turma {
    constructor() {
        this.listaDeParticipantes = [];

    }
    adicionarParticipante(participante) {
        this.listaDeParticipantes.push(participante)
    }
}