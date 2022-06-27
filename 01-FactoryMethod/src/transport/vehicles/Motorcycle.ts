import Ivehicle from "./interfaces/Ivehicle";

export default class Mortorcycle implements Ivehicle{
    startRoute(): void {
        this.getCargo();
        console.log("Moto Iniciando Trajeto");
    }
    getCargo(): void {
        console.log("Moto: encomenda retirada");
    }

}