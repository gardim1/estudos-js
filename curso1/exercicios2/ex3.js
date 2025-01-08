//Considere uma situação em que você está verificando se um usuário está logado e tem permissão de administrador para acessar determinada funcionalidade. Utilize variáveis booleanas para simular essas condições e use o operador AND para verificar se ambas são verdadeiras.

let user = "admin";
let logado = true;

if (logado === true && user == "admin") {
  console.log("Ola,voce esta logado como admin!");
} else {
  console.log("Voce nao esta logado como admin!");
}
