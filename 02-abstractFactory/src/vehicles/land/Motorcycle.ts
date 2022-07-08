import IlandVehicle from "./interfaces/IlandVehicle";

export default class Motorcycle implements IlandVehicle{
    startRoute(): void {
        this.getCargo();
        console.log("Moto: Iniciando Trajeto.");
    }
    getCargo(): void {
        console.log("Moto: Encomenda retirada.");
    }
}