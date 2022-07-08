import Client from "./foodDelivery/clients/Client";
import DeliveryCompanies from "./foodDelivery/consts/DeliveryCompanies";
import IDeliveryFactory from "./foodDelivery/factories/interfaces/IDeliveryFactory";
import IFoodDelivery from "./foodDelivery/factories/IFoodDelivery";
import AiQFomeDelivery from "./foodDelivery/factories/AiQFomeDelivery";

const currentDelivery = DeliveryCompanies.AIQFOME;
let factory : IDeliveryFactory;

switch(currentDelivery){
    case DeliveryCompanies.IFOOD :
        factory =  new IFoodDelivery();
        break;
    case DeliveryCompanies.AIQFOME:
        factory= new AiQFomeDelivery();
        break;
    default:
        console.log("Escolha a companhia de delivery.");
}

const client = new Client(factory!);
client.startDelivery();