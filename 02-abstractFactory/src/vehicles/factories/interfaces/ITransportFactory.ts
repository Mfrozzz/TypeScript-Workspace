import IlandVehicle from "../../land/interfaces/IlandVehicle";
import IAircraft from "../../aerial/interfaces/IAircraft";

export default interface ITransportFactory{
    createTransportVehicle (): IlandVehicle;
    createTransportAircraft(): IAircraft;
}