function verificarIdade(idade) {
  if (idade >= 18) {
    return "tem mais de 18";
  } else {
    return "Nao tem mais de 18";
  }
}

console.log(verificarIdade(19));
