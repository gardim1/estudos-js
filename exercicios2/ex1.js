//Crie variáveis que armazenem o valor do saldo, de depósito e de um saque de uma conta bancária, depois realize operações de adição e subtração entre eles utilizando uma variável chamada operacao, considerando a função de cada variável criada anteriormente. Exiba os resultados finais no console.

let saldo = 1000;
let deposito = 200;
let saque = 150;

let operacao;

operacao = saldo + deposito;
console.log("Saldo após o depósito: R$ " + operacao.toFixed(2));

operacao = operacao - saque;
console.log("Saldo após o saque: R$ " + operacao.toFixed(2));
