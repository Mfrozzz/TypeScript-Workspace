import IConsole from "./consoles/interfaces/IConsole";
import AdvancedPlay from "./playGames/AdvancedPlay";
import Play from "./playGames/Play";
import PlayStation from "./consoles/PlayStation";
import XBox from "./consoles/XBox";

function startPlay(consoles: IConsole){
    console.log("...Aguarde um instante...");
    const player = new Play(consoles);
    player.playing();
    player.result();
}

function startAdvPlay(consoles:IConsole){
    console.log("...Aguarde um instante...");
    console.log("...Challenges Ativos...");
    const player = new AdvancedPlay(consoles);
    player.result();
    player.playing();
    player.challenge();
}

console.log("");
startPlay(new PlayStation());
console.log("");
startAdvPlay(new XBox());
console.log("");