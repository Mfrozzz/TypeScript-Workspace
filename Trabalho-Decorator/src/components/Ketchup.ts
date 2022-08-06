import FriesDecorator from "../decorator/FriesDecorator";

export default class Ketchup extends FriesDecorator{
    ingredients(): string {
        return super.ingredients()+"+ Ketchup ";
    }
    price(): number {
        return super.price() + 1;
    }
    time(): number {
        return super.time() + 1;
    }
}