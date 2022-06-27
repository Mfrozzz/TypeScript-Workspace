import Ivehicle from "./interfaces/Ivehicle";

export default class implements Ivehicle{
    startRoute(): void {
        this.getCargo();
        console.log("Bicicleta: Iniciando Trajeto...");
    }
    getCargo(): void {
        console.log("Bicicleta: encomenda retirada...");
    }

}