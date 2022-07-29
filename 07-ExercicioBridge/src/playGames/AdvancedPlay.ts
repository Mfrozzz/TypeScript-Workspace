import IConsole from "../consoles/interfaces/IConsole";
import Play from "./Play";

export default class AdvancedPlay extends Play{
    constructor(player : IConsole){
        super(player);
    }
    challenge(): void{
        console.log("Conquistas/Desafios disponíveis para o Jogo.");
    }
}