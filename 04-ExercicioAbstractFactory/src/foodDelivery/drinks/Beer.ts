import IDrink from "./interfaces/IDrink";

export default class Beer implements IDrink{
    delivery(): void {
        this.createDeliveryDrink();
        console.log("Cerveja:Se for dirigir nao beba.")
    }
    createDeliveryDrink(): void {
        console.log("Cerveja:Retirando da geladeira.")
    }

}