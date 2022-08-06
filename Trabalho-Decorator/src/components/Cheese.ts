import FriesDecorator from "../decorator/FriesDecorator";

export default class Cheese extends FriesDecorator{
    ingredients(): string {
        return super.ingredients()+"+ Queijo ";
    }
    price(): number {
        return super.price() + 4;
    }
    time(): number {
        return super.time() + 2;
    }
}