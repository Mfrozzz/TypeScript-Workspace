import IPlatform from "./interfaces/IPlatform";

export default class Facebook implements IPlatform{
    constructor(){
        this.configureRMTP();
        console.log("Facebook: Transmissao iniciada.")
    }
    configureRMTP(): void {
        this.authToken();
        console.log("Facebook: Configurando Broadcasting.");
    }
    authToken(): void {
        console.log("-----Facebook-----");
        console.log("Facebook: Autorizando Aplicacao.");
    }
}