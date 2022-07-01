import GameLocation from "./Locations/GameLocation";
import Location from "./Locations/Location";
import MovieLocation from "./Locations/MovieLocation";

declare var process;
let location : Location;

if(process.argv.includes("--game")){
    location = new GameLocation();
}else if(process.argv.includes("--movie")){
    location = new MovieLocation();
}else{
    console.error("Utilize um tipo de Locacao.")
}

if(location!){
    location.startItem();
}