const maiorNumero = function (a, b, c) {
  if (a > b && a > c) {
    return `${a} é o maior numero`;
  } else if (b > a && b > c) {
    return `${b} é o maior numero`;
  } else {
    return `${c} é o maior numero`;
  }
};

console.log(maiorNumero(1, 2, 3));
console.log(maiorNumero(3, 2, 1));
console.log(maiorNumero(1, 3, 1));
