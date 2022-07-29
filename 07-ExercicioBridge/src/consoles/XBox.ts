import IConsole from "./interfaces/IConsole";

export default class XBox implements IConsole{
    constructor(){
        this.authToken();
        console.log("XBox: Loading Game.....");
    }
    configureGame(): void {
        console.log("---Microsoft Store---");
        console.log("XBox: Configurando Jogo.");
        console.log("XBox: Start Game...");
    }
    authToken(): void {
        console.log("XBox: Senha/Token Validado.....");
        this.configureGame();
    }
}