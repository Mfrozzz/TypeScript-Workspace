import VehicleBuilder from "./builders/VehicleBuilder";
import Director from "./director/Director";
import Vehicle from "./products/Vehicle";

const builder : VehicleBuilder = new VehicleBuilder();
const director : Director = new Director(builder);

director.constructSedanCar();
let sedan : Vehicle = builder.getVehicle();
console.log("Criando um veiculo....");
console.log("Tipo: "+sedan.vehicleType);
console.log("Rodas: "+sedan.wheelsTotal);
console.log("assentos: "+ sedan.seats+"\n");

builder.reset();

director.constructTruck();
let truck : Vehicle = builder.getVehicle();
console.log("Criando um veiculo....");
console.log("Tipo: "+truck.vehicleType);
console.log("Rodas: "+truck.wheelsTotal);
console.log("assentos: "+ truck.seats+"\n");

builder.reset();

director.constructMotorcycle();
let motorcycle : Vehicle = builder.getVehicle();
console.log("Criando um veiculo....");
console.log("Tipo: "+motorcycle.vehicleType);
console.log("Rodas: "+motorcycle.wheelsTotal);
console.log("assentos: "+ motorcycle.seats+"\n");