import IAircraft from "../aerial/interfaces/IAircraft";
import IlandVehicle from "../land/interfaces/IlandVehicle";
import ITransportFactory from "./interfaces/ITransportFactory";
import Car from "../land/Car";
import Airplane from "../aerial/Airplane";

export default class UberFactory implements ITransportFactory{
    createTransportVehicle(): IlandVehicle {
        return new Car();
    }
    createTransportAircraft(): IAircraft {
        return new Airplane();
    }
}