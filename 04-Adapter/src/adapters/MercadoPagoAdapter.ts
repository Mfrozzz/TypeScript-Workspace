import MercadoPago from "../mercadoPago/MercadoPago";
import IPaypal from "../paypal/interfaces/IPaypal";
import Token from "../utils/Token";

export default class MercadoPagoAdapter implements IPaypal{

    private _token : Token;

    constructor(private _mercadoPago : MercadoPago){
        console.log("Adaptando MercadoPago no Paypal.");
    }

    authToken(): Token {
        return new Token();
    }
    paypalPayment(): void {
        this._mercadoPago.sendMPPayment();
    }
    paypalReceive(): void {
        this._mercadoPago.receiveMPPayment();
    }

}