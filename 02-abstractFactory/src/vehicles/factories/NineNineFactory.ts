import IAircraft from "../aerial/interfaces/IAircraft";
import IlandVehicle from "../land/interfaces/IlandVehicle";
import ITransportFactory from "./interfaces/ITransportFactory";
import Motorcycle from "../land/Motorcycle";
import Helicopter from "../aerial/Helicopter";

export default class NineNineFactory implements ITransportFactory{
    createTransportVehicle(): IlandVehicle {
        return new Motorcycle();
    }
    createTransportAircraft(): IAircraft {
        return new Helicopter();
    }
}