import IPlay from "../playGames/interfaces/IPlay";
import IConsole from "../consoles/interfaces/IConsole";

export default class Play implements IPlay{
    constructor(private _console: IConsole){}

    playing(): void {
        console.log("Iniciando o Jogo.");
        console.log("......Play.......");
    }
    result(): void {
        console.log("Pronto para Jogar.");
    }
}