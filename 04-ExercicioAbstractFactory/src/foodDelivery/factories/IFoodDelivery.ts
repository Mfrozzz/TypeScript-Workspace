import IDrink from "../drinks/interfaces/IDrink";
import IFood from "../foods/interfaces/IFood";
import IDeliveryFactory from "./interfaces/IDeliveryFactory";
import SoftDrink from "../drinks/SoftDrink";
import HotDog from "../foods/HotDog";

export default class IFoodDelivery implements IDeliveryFactory{
    createDeliveryDrink(): IDrink {
        return new SoftDrink();
    }
    createDeliveryFood(): IFood {
        return new HotDog();
    }

}