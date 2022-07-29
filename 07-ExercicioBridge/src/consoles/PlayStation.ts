import IConsole from "./interfaces/IConsole";

export default class PlayStation implements IConsole{
    constructor(){
        this.authToken();
        console.log("PlayStation: Loading Game.....");
    }
    configureGame(): void {
        console.log("---PS Store---");
        console.log("PlayStation: Configurando Jogo.");
        console.log("PlayStation: Start Game...");
    }
    authToken(): void {
        console.log("PlayStation: Senha/Token Validado.....");
        this.configureGame();
    }
}