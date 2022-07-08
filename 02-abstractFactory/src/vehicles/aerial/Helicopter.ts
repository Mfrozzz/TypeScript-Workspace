import IAircraft from "./interfaces/IAircraft";

export default class Helicopter implements IAircraft{
    startRoute(): void {
        this.checkWind();
        this.getCargo();
        console.log("Helicoptero iniciando decolagem");
    }
    getCargo(): void {
        console.log("Helicoptero: passageiros a bordo.");
    }
    checkWind(): void {
        console.log("Helicoptero: Ventos a 15km/h.");
    }
}