import ITransportFactory from "./vehicles/factories/interfaces/ITransportFactory";
import Company from "./vehicles/consts/Company";
import UberFactory from "./vehicles/factories/UberFactory";
import Client from "./vehicles/clients/Client";
import NineNineFactory from "./vehicles/factories/NineNineFactory";
import LIMEFactory from "./vehicles/factories/LIMEFactory";
import KindsVehicle from "./vehicles/consts/KindsVehicle";

const currentCompany = Company.UBER;
const currentKinds = KindsVehicle.AERIAL;
let factory : ITransportFactory;

switch(currentCompany){
    case Company.UBER :
        factory = new UberFactory();
        break;
    case Company.NINENINE :
        factory = new NineNineFactory();
        break;
    case Company.LIME :
        factory =  new LIMEFactory();
        break;
    default :
    console.log("Companhia nao definida.");
}

const client = new Client(factory!);
switch(currentKinds){
    case KindsVehicle.LAND :
        client.startRouteLand();
        break;
    case KindsVehicle.AERIAL :
        client.startRouteAerial()
        break;
    default :
    console.log("Tipo não definido");
}
//client.startRoute();
//nova companhia LIME -> Drone/Scooter -- feito
//realizar a escolha de terrestre e aereo //ideia --  novo enum no consts com o tipo --feito
//limitar a criação nas factories pra só aereo ou terrestre, client passar o do enum--ok
//switch case no index pro client --ok