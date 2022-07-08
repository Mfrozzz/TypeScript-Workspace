import IAircraft from "./interfaces/IAircraft";

export default class Drone implements IAircraft{
    startRoute(): void {
        this.checkWind();
        this.getCargo();
        console.log("Drone: iniciando decolagem.");
    }
    getCargo(): void {
        console.log("Drone: Carregando.");
    }
    checkWind(): void {
        console.log("Drone: Ventos a 10 km/h.");
    }
}