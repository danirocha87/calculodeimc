let rs = require("readline-sync");

let peso = rs.questionFloat("Qual eh seu peso?");

let altura = rs.questionFloat("Qual sua altura?");

let calculo = (peso / (altura * altura));

console.log("Seu IMC eh " + calculo);

if(calculo < 18.5)
{
console.log("Você está abaixo do peso ideal")
} else if(calculo >= 18.5 && calculo <= 29.4){
    console.log("Parabéns — você está em seu peso normal!")
}else if(calculo >=25 && calculo <=29.9){
    console.log(" Você está acima de seu peso (sobrepeso)")
}else if(calculo >=30 && calculo <=34.9){
    console.log("Obesidade grau I")
}else if( calculo >= 35 && calculo <= 39.9){
    console.log("Obesidade grau II")
}else {
    console.log("Obesidade grau III")
}











