import ICorreios from "../correio/interfaces/ICorreios";
import CodeRastreio from "../utils/CodeRastreio";
import Transportadora from "../NewTransportadora/Transportadora";

export default class TransportadoraAdapter implements ICorreios{

    private _idCode : CodeRastreio;

    constructor(private _transportadora : Transportadora){
        console.log("Adaptando a Transportadora aos padrões Correios...")
    }
    authRastreio(): CodeRastreio {
        return new CodeRastreio();
    }
    sendCorreios(): void {
        this._transportadora.send();
    }
    receiveCorreios(): void {
        this._transportadora.receive();
    }
}