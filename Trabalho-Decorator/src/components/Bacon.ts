import FriesDecorator from "../decorator/FriesDecorator";

export default class Bacon extends FriesDecorator{
    ingredients(): string {
        return super.ingredients()+"+ Bacon ";
    }
    price(): number {
        return super.price() + 5;
    }
    time(): number {
        return super.time() + 2;
    }
}