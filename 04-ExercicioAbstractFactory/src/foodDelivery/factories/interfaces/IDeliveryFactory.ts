import IDrink from "../../drinks/interfaces/IDrink";
import IFood from "../../foods/interfaces/IFood";

export default interface IDeliveryFactory{
    createDeliveryDrink():IDrink;
    createDeliveryFood():IFood;
}