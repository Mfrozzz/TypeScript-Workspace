import IPotatoFries from "../fries/interfaces/IPotatoFries";

export default class FriesDecorator implements IPotatoFries{
    private _potato : IPotatoFries;

    constructor(potato : IPotatoFries){
        this._potato = potato;
    }

    ingredients(): string {
        return this._potato.ingredients();
    }
    price(): number {
        return this._potato.price();
    }
    time(): number {
        return this._potato.time();
    }

}