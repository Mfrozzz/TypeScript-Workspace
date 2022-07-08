import IDrink from "../drinks/interfaces/IDrink";
import IDeliveryFactory from "../factories/interfaces/IDeliveryFactory";
import IFood from "../foods/interfaces/IFood";

export default class Client{
    private food : IFood;
    private drink : IDrink;

    constructor(factory : IDeliveryFactory){
        this.drink= factory.createDeliveryDrink();
        this.food=factory.createDeliveryFood();
    }

    startDelivery() : void{
        this.drink.delivery();
        this.food.delivery();
    }
}