import Token from "../utils/Token";
import IPaypal from "./interfaces/IPaypal";

export default class Paypal implements IPaypal{
    
    private _token : Token;
    
    authToken(): Token {
        return new Token();
    }
    paypalPayment(): void {
        this._token = this.authToken();
        console.log("Token: "+this._token.token);
        console.log("Enviando Pagamento via Paypal...")
    }
    paypalReceive(): void {
        console.log("Recebendo Pagamento via Paypal...");
    }

}