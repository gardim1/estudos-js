//Crie um programa em Node.js que inicie com um array cinco elementos e atribua um novo valor para a primeira posição (índice 0) desse array. Em seguida, exiba o array antes e depois da alteração.

let arr = [1, 2, 3, 4, 5];

console.log(arr);

arr.unshift("novo valor");

console.log(arr);
