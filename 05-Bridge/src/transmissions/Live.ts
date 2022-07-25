import IPlatform from "../platforms/interfaces/IPlatform";
import ITransmission from "./interfaces/ITransmission";

export default class Live implements ITransmission{

    constructor(private _platform : IPlatform){}

    broadcasting(): void {
        console.log("Iniciando a Transmissao");
    }
    result(): void {
        console.log("-----No Ar-----");
    }
}