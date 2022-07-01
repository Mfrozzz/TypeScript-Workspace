import IItem from "./Interfaces/IItem";

export default class Movie implements IItem{
    start(): void {
        this.getDescription();
        console.log("Buscando cadastro para Locar filmes.");
    }
    getDescription(): void {
        console.log("Locando filmes.");
    }

}