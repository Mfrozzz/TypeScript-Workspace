import Location from "./Location";
import Game from "./Kinds/Game";
import IItem from "./Kinds/Interfaces/IItem";

export default class GameLocation extends Location{
    protected createItem() : IItem{
        return new Game();
    }
}