import IBuilder from "../builders/interfaces/IBuilder";
import Engine from "../components/engine";
import Transmission from "../components/Transmission";
import VehicleType from "../components/VehicleType";
import Wheel from "../components/Wheel";

export default class Director{

    constructor(private _builder : IBuilder){}

    constructSedanCar(){
        this._builder.setVehicleType(VehicleType.SEDAN);
        this._builder.setSeats(5);
        this._builder.setTransmission(Transmission.AUTOMATIC);
        this._builder.setEngine(new Engine(1600));
        this._builder.addWheel(new Wheel(15));
        this._builder.addWheel(new Wheel(15));
        this._builder.addWheel(new Wheel(15));
        this._builder.addWheel(new Wheel(15));
    }

    constructTruck(){
        this._builder.setVehicleType(VehicleType.TRUCK);
        this._builder.setSeats(3);
        this._builder.setTransmission(Transmission.AUTOMATIC);
        this._builder.setEngine(new Engine(13000));
        this._builder.addWheel(new Wheel(22));
        this._builder.addWheel(new Wheel(22));
        this._builder.addWheel(new Wheel(22));
        this._builder.addWheel(new Wheel(22));
        this._builder.addWheel(new Wheel(22));
        this._builder.addWheel(new Wheel(22));
    }

    constructMotorcycle(){
        this._builder.setVehicleType(VehicleType.MOTORCYCLE);
        this._builder.setSeats(2);
        this._builder.setTransmission(Transmission.MANUAL);
        this._builder.setEngine(new Engine(1300));
        this._builder.addWheel(new Wheel(14));
        this._builder.addWheel(new Wheel(14));
    }

}