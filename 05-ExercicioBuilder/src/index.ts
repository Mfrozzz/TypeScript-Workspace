import SanduicheBuilder from "./builders/SanduicheBuilder"
import Director from "./director/Director";
import Sanduiche from "./products/Sanduiche";

const builder : SanduicheBuilder = new SanduicheBuilder();
const director : Director = new Director(builder);

director.constructorHotDog();
let dogao : Sanduiche = builder.getSanduiche();
console.log("Fazendo um dogao.");
console.log("Feito com "+ dogao.protein);
console.log("Com molho "+dogao.sauce);
console.log("Usando um pao de tipo "+dogao.bread+"\n");

builder.reset();

director.constructorXsalad();
let xburger : Sanduiche = builder.getSanduiche();
console.log("Fazendo um Hamburger.");
console.log("Carne de tipo "+ xburger.protein);
console.log("Com Pao especial do tipo "+ xburger.bread);
console.log("E molho "+xburger.sauce);