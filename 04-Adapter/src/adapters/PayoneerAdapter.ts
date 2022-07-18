import Payoneer from "../payoneer/Payoneer";
import IPaypal from "../paypal/interfaces/IPaypal";
import Token from "../utils/Token";

export default class PayoneerAdapter implements IPaypal{

    private _token : Token;

    constructor(private _payoneer : Payoneer){
        console.log("Adaptando Payoneer no Paypal.");
    }

    authToken(): Token {
        return new Token();
    }
    paypalPayment(): void {
        this._payoneer.sendPayment();
    }
    paypalReceive(): void {
        this._payoneer.receivePayment();
    }

}