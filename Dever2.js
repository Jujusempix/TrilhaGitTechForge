const prompt = require("prompt-sync")();

var n = prompt("Digite um numero");

if(n%2 == 0){
	console.log("Par");
}else{
	console.log("Impar");
}