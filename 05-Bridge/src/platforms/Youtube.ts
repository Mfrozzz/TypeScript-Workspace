import IPlatform from "./interfaces/IPlatform";

export default class Youtube implements IPlatform{
    constructor(){
        this.configureRMTP();
        console.log("YouTube: Transmissao iniciada.");
    }
    configureRMTP(): void {
        this.authToken();
        console.log("YouTube: Configurando Broadcasting.");
    }
    authToken(): void {
        console.log("-----YouTube-----");
        console.log("YouTube: Autorizando Aplicacao.");
    }
}