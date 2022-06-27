import Ivehicle from "./vehicles/interfaces/Ivehicle";

export default abstract class Transport{

    startTransport():void{
        const vehicle = this.createTransport();
        vehicle.startRoute();
    }

    protected abstract createTransport() : Ivehicle;
}