import IAircraft from "./interfaces/IAircraft";

export default class Airplane implements IAircraft{
    startRoute(): void {
        this.checkWind();
        this.getCargo();
        console.log("Aviao: iniciando decolagem.");
    }
    getCargo(): void {
        console.log("Aviao: passageiros a bordo.");
    }
    checkWind(): void {
        console.log("Avião:Ventos a 25km/h.");
    }
}