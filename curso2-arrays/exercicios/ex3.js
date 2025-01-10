//Crie um array vazio chamado meuArray e adicione 3 números inteiros de sua escolha utilizando o método push(). Imprima no console os itens presentes no array para verificar se os números foram adicionados. Em seguida, substitua o primeiro elemento do array (índice 0) pelo dobro do seu valor atual. Imprima no console o array atualizado para verificar a mudança.

let meuArray = [];

meuArray.push(10, 20, 30);

console.log(meuArray);

meuArray.splice(0, 1, 10 * 2);

console.log(meuArray);

//---------------------------------------------------------------------------------->

let meuArr = [];

meuArr.push(10, 20, 30);

console.log(meuArr);

meuArr[0] = meuArr[0] * 2;

console.log(meuArr);
