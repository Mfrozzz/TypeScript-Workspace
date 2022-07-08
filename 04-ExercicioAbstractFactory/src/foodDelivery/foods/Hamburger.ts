import IFood from "./interfaces/IFood";

export default class Hamburger implements IFood{
    delivery(): void {
        this.createDeliveryFood();
        console.log("Hamburger:realizando entrega.");
    }
    createDeliveryFood(): void {
        console.log("Hamburger:preparando lanche.");
    }

}