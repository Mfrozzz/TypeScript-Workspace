import Token from "../../utils/Token";

export default interface IPaypal{
    authToken() : Token;
    paypalPayment() : void;
    paypalReceive() : void;
}