import Token from "../../utils/Token";

export default interface IMercadoPago{
    authToken() : Token;
    sendMPPayment() : void;
    receiveMPPayment() : void;
}