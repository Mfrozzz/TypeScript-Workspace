import IItem from "./Interfaces/IItem";

export default class Game implements IItem{
    start(): void {
        this.getDescription();
        console.log("Buscando cadastro para Locar jogos.");
    }
    getDescription(): void {
        console.log("Locando jogos.");
    }

}