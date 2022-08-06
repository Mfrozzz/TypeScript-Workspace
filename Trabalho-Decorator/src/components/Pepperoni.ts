import FriesDecorator from "../decorator/FriesDecorator";

export default class Pepperoni extends FriesDecorator{
    ingredients(): string {
        return super.ingredients()+"+ Calabresa ";
    }
    price(): number {
        return super.price() + 3;
    }
    time(): number {
        return super.time() + 4;
    }
}