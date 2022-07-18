import Token from "../utils/Token";
import IPayoneer from "./interfaces/IPayoneer";

export default class Payoneer implements IPayoneer{

    private _token : Token;

    authToken(): Token {
        return new Token();
    }
    sendPayment(): void {
        this._token = this.authToken();
        console.log("Token: "+this._token.token);
        console.log("Enviando Pagamento via Payoneer...");
    }
    receivePayment(): void {
        console.log("Recebendo Pagamento via Payoneer...");
    }

}