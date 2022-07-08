import IDrink from "./interfaces/IDrink";

export default class SoftDrink implements IDrink{
    delivery(): void {
        this.createDeliveryDrink();
        console.log("Drink Leve:Se for dirigir nao beba.")
    }
    createDeliveryDrink(): void {
        console.log("Drink Leve:Retirando da geladeira.")
    }

}