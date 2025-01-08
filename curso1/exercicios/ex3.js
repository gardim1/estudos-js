//Crie 3 variáveis de tipos diferentes, utilize template strings para combinar os diferentes tipos de dados (number, string, boolean) em uma única string e exiba o resultado no console.

let nome = "Vinicius";
let semestre = 2;
let aprovado = true;

console.log(nome);
console.log(semestre);
console.log(aprovado);

if (aprovado === true) {
  console.log(`O aluno ${nome} que esta no semestre ${semestre} foi aprovado`);
} else {
  console.log(`O aluno ${nome} que esta no semestre ${semestre} foi REPROVADO`);
}
