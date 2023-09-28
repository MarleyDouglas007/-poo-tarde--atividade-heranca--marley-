let aluno1 = new Aluno ("Fabrício","111.111.111-11","12/05/2003","aaa111");
let aluno2 = new Aluno ("Marley","222.222.222-22","13/02/2006","bbb222");
let aluno3 = new Aluno ("João Victor","333.333.333-33","23/12/2009","ccc333");
let aluno4 = new Aluno ("Jennifer","444.444.444-44","01/01/2001","ddd444");
let aluno5 = new Aluno ("Lara","555.555.555-55","23/01/2030","eee555");

let professor1 = new Professor ('Alex','666.666.666-66','12/03/2003','9822','Graduação');
let professor2 = new Professor ('glauber','666.888.888-44','21/06/2001','5466','Doutorado');

let modulo2 = new Turma();
modulo2.adicionarParticipante(professor1);
modulo2.adicionarParticipante(professor2);
modulo2.adicionarParticipante(aluno1);

console.log(modulo2);