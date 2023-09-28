class Participante {
    constructor(nome, cpf, dataDeNacimento) {
        this.nome = nome;
        this.cpf = cpf;
        this.dataDeNacimento = dataDeNacimento;
    }

}

class Aluno extends Participante {
    constructor(nome, cpf, dataDeNacimento, matricula) {
        super(nome, cpf, dataDeNacimento);
        this.matricula = matricula;
    }

}
class Professor extends Participante {
    constructor(nome, cpf, dataDeNacimento, siape, formacao) {
        super(nome, cpf, dataDeNacimento);
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