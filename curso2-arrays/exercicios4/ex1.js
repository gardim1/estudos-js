// Utilize o método forEach para imprimir cada elemento de um array juntamente com seu índice.

const numeros = [10, 20, 30];

//numeros.forEach(function (valor, indice) {
//  console.log(`o valor é ${valor} e o indice é ${indice}`);
//});

numeros.forEach((valor, indice) =>
  console.log(`o valor é ${valor} e o indice é ${indice}`)
);

const nomes = ["Monique", "Vinicius", "Theo"];

nomes.forEach((amigos) => {
  console.log(`Olá, ${amigos}! Tudo bem?`);
});

const array2 = [2, 4, 6, 8, 10];
let multiplicacao = 0;

array2.forEach((dobro) => {
  multiplicacao = dobro * 2;
  console.log(multiplicacao);
});

const array3 = [5, 10, 15, 20];
let soma = 0;

array2.forEach((numeross) => {
  soma += numeross;
});

console.log(soma);

const array4 = [1, 2, 3, 4, 5, 6];

array4.forEach((numero) =>
  numero % 2 === 0
    ? console.log(`${numero} é par`)
    : console.log(`${numero} é impar`)
);
