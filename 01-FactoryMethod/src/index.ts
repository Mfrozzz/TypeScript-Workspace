import BycicleTransport from "./transport/BycicleTransport";
import CarTransport from "./transport/CarTransport";
import MortorcycleTransport from "./transport/MotorcycleTransport";
import Transport from "./transport/Transport";

declare var process;

let transport : Transport;

if(process.argv.includes("--uber")){
    transport = new CarTransport();
}else if(process.argv.includes("--eats")){
    transport = new MortorcycleTransport();
}else if(process.argv.includes("--bike")){
    transport = new BycicleTransport();
}else{
    console.error("Selecione o tipo de transporte");
}

if(transport!){//! depois é pra dizer que é facultativo
    transport.startTransport();
}