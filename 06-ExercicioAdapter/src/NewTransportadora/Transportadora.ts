import CodeRastreio from "../utils/CodeRastreio";
import ITransportadora from "./interfaces/ITransportadora";

export default class Transportadora implements ITransportadora{

    private _idCode : CodeRastreio;

    authRastreio(): CodeRastreio {
        return new CodeRastreio();
    }
    send(): void {
        console.log("Enviando encomenda via Transportadora.");
    }
    receive(): void {
        this._idCode=this.authRastreio();
        console.log("Codigo de rastreio da encomenda: "+this._idCode.idCode);
        console.log("Recebendo encomenda via Transportadora.");
    }
}