import Transport from "./Transport";
import Bycicle from "./vehicles/Bycicle";
import Ivehicle from "./vehicles/interfaces/Ivehicle";

export default class BycicleTransport extends Transport{
    protected createTransport(): Ivehicle {
        return new Bycicle();
    }
}