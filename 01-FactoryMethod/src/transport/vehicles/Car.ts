import Ivehicle from "./interfaces/Ivehicle";

export default class Car implements Ivehicle{
    startRoute(): void {
        this.getCargo();
        console.log("Carro: Iniciando Trajeto....");
     }
     getCargo(): void {
         console.log("Carro: Pegamos os passageiros!")
     }

}