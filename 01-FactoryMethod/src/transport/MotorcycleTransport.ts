import Transport from "./Transport";
import Ivehicle from "./vehicles/interfaces/Ivehicle";
import Mortorcycle from "./vehicles/Motorcycle";

export default class MortorcycleTransport extends Transport{
    protected createTransport(): Ivehicle {
        return new Mortorcycle();
    }
}