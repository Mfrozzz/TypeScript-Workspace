import TransportadoraAdapter from "./adapters/TransportadoraAdapter";
import Correios from "./correio/Correios";
import ICorreios from "./correio/interfaces/ICorreios";
import Transportadora from "./NewTransportadora/Transportadora";

//const entrega: ICorreios = new Correios();
const entrega: ICorreios = new TransportadoraAdapter(new Transportadora());

entrega.sendCorreios();
entrega.receiveCorreios();