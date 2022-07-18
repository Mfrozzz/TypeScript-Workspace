import Token from "../utils/Token";
import IMercadoPago from "./interfaces/IMercadoPago";

export default class MercadoPago implements IMercadoPago{

    private _token : Token;

    authToken(): Token {
        return new Token();
    }
    sendMPPayment(): void {
        this._token = this.authToken();
        console.log("Token: "+this._token.token);
        console.log("Enviando Pagamento via Mercado Pago...");
    }
    receiveMPPayment(): void {
        console.log("Recebendo Pagamento via Mercado Pago...");
    }

}