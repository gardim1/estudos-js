function ehPalin(string) {
  const stringInvertida = string.split("").reverse().join("");
  return string.toLowerCase() === stringInvertida.toLowerCase();
}

console.log(ehPalin("Natan"));
console.log(ehPalin("Vinicius"));
