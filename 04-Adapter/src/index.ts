import MercadoPagoAdapter from "./adapters/MercadoPagoAdapter";
import PayoneerAdapter from "./adapters/PayoneerAdapter";
import MercadoPago from "./mercadoPago/MercadoPago";
import IPayoneer from "./payoneer/interfaces/IPayoneer";
import Payoneer from "./payoneer/Payoneer";
import IPaypal from "./paypal/interfaces/IPaypal";
import Paypal from "./paypal/Paypal";

//const payment: IPaypal = new Paypal();
const payment: IPaypal = new MercadoPagoAdapter(new MercadoPago());

payment.paypalPayment();
console.log();
payment.paypalReceive();