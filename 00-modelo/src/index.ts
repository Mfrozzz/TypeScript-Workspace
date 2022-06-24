/*var a = 6;
var b = 15;
if(a===6){
    let a=5;
    let b=3;
    console.log(a);
    console.log(b);
}
console.log(a);
console.log(b);
let numQualq : number =10.5;//tem any(aceita qualquer coisa)
console.log(numQualq);
let list : number[]=[2,3,4,5];
let lista : Array<any>= [2,"isso",true];

for(let i=0; i<list.length;i++){
    console.log(list[i]);
}
for(let i=0; i<lista.length;i++){
    console.log(lista[i]);
}
for(let valor of lista){
    console.log(valor);
}
enum Sexo{
    MASCULINO,
    FEMININO,
    NDECLARADO
}

let sexo : Sexo = Sexo.MASCULINO;
console.log(sexo);

function myFunction() : void{//parametros e return tbm pode
    console.log("ts function");
}
myFunction();
*/

import Carro from "./Carro";

let uno : Carro = new Carro("Fiat","Uno com escada");
console.log(uno.marca);//get
uno.marca = "Scuderia Ferrari";//set
console.log(uno.marca);
uno.ligar();