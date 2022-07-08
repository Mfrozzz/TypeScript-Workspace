import IFood from "./interfaces/IFood";

export default class HotDog implements IFood{
    delivery(): void {
        this.createDeliveryFood();
        console.log("HotDog: realizando entrega.");
    }
    createDeliveryFood(): void {
        console.log("HotDog: preparando lanche.");
    }

}