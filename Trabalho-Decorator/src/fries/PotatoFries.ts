import IPotatoFries from "./interfaces/IPotatoFries";

export default class PotatoFries implements IPotatoFries{
    ingredients(): string {
        return "Batata Frita ";
    }
    price(): number {
        return 25;
    }
    time(): number {
        return 15;
    }

}