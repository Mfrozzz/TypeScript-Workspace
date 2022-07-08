import IAircraft from "../aerial/interfaces/IAircraft";
import ITransportFactory from "../factories/interfaces/ITransportFactory";
import IlandVehicle from "../land/interfaces/IlandVehicle";

export default class Client{

    private vehicle : IlandVehicle;
    private aircraft : IAircraft;

    constructor(factory : ITransportFactory){
        this.vehicle=factory.createTransportVehicle();
        this.aircraft= factory.createTransportAircraft();
    }

    startRouteAerial() : void{
        this.aircraft.startRoute();
    }
    startRouteLand() : void{
        this.vehicle.startRoute();
    }
}