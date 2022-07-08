import IDrink from "../drinks/interfaces/IDrink";
import IFood from "../foods/interfaces/IFood";
import IDeliveryFactory from "./interfaces/IDeliveryFactory";
import Beer from "../drinks/Beer";
import Hamburger from "../foods/Hamburger";

export default class AiQFomeDelivery implements IDeliveryFactory{
    createDeliveryDrink(): IDrink {
        return new Beer();
    }
    createDeliveryFood(): IFood {
        return new Hamburger();
    }

}