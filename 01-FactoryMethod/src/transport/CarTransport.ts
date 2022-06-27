import Transport from "./Transport";
import Car from "./vehicles/car";
import Ivehicle from "./vehicles/interfaces/Ivehicle";

export default class CarTransport extends Transport{
    protected createTransport(): Ivehicle {
        return new Car();
    }
}