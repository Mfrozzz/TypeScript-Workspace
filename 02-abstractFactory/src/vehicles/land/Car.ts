import IlandVehicle from "./interfaces/IlandVehicle";

export default class Car implements IlandVehicle{
    startRoute(): void {
        this.getCargo();
        console.log("Carro: Iniciando Trajeto.")
    }
    getCargo(): void {
        console.log("Carro: Passageiros embarcados.");
    }
}