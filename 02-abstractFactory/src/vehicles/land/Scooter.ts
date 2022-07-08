import IlandVehicle from "./interfaces/IlandVehicle";

export default class Scooter implements IlandVehicle{
    startRoute(): void {
        this.getCargo();
        console.log("Scooter: Iniciando Trajeto.");
    }
    getCargo(): void {
        console.log("Scooter: Carga foi pega.");
    }
}