import CodeRastreio from "../utils/CodeRastreio";
import ICorreios from "./interfaces/ICorreios";

export default class Correios implements ICorreios{

    private _idCode : CodeRastreio;

    authRastreio(): CodeRastreio {
        return new CodeRastreio();
    }
    sendCorreios(): void {
        console.log("Encomenda sendo enviada via Correios.");
    }
    receiveCorreios(): void {
        this._idCode=this.authRastreio();
        console.log("Codigo de rastreio: "+this._idCode.idCode);
        console.log("Recebendo encomenda via Correios.");
    }
}