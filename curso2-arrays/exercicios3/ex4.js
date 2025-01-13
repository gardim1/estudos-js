
function verificar(arr){
    let menor = 0
    let maior = 0 
    for(let i = 0; i<arr.length; i++){
        if(arr[i]> maior){
            maior = arr[i]
        }
        if(arr[i]< menor){
            menor = arr[i]
        }
    }
    return `O maior numero é ${maior} e o menor é ${menor}`
}

let inteiros = [10,20,30,40,50, -4]

console.log(verificar(inteiros))