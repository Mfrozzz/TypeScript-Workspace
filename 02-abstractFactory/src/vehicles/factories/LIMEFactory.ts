import IAircraft from "../aerial/interfaces/IAircraft";
import IlandVehicle from "../land/interfaces/IlandVehicle";
import ITransportFactory from "./interfaces/ITransportFactory";
import Scooter from "../land/Scooter";
import Drone from "../aerial/Drone";

export default class LIMEFactory implements ITransportFactory{
    createTransportVehicle(): IlandVehicle {
        return new Scooter();
    }
    createTransportAircraft(): IAircraft {
        return new Drone();
    }
}