import IPotatoFries from "./fries/interfaces/IPotatoFries";
import PotatoFries from "./fries/PotatoFries";
import Bacon from "./components/Bacon";
import Cheddar from "./components/Cheddar";
import Cheese from "./components/Cheese";
import Ketchup from "./components/Ketchup";
import Pepperoni from "./components/Pepperoni";

function order(potato : IPotatoFries){
    console.log("Pedido de "+potato.ingredients());
    console.log("Com o preco R$ "+potato.price());
    console.log("Pronto em "+potato.time()+" minutos");
}


let batataFrita1 = new PotatoFries();
order(batataFrita1);
console.log("");
batataFrita1 = new Bacon(batataFrita1);
order(batataFrita1);
console.log("");
batataFrita1 = new Cheddar(batataFrita1);
order(batataFrita1);
console.log("\nNovo\n");
const batataFrita2 = new PotatoFries();
const batataFrita3 = new Cheese(batataFrita2);
const batataFrita4 = new Ketchup(batataFrita3);
const batataFrita5 = new Pepperoni(batataFrita4);
order(batataFrita5);
console.log("");