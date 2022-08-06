import FriesDecorator from "../decorator/FriesDecorator";

export default class Cheddar extends FriesDecorator{
    ingredients(): string {
        return super.ingredients()+"+ Cheddar ";
    }
    price(): number {
        return super.price() + 3;
    }
    time(): number {
        return super.time() + 2;
    }
}