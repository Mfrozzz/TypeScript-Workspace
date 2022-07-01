import Location from "./Location";
import IItem from "./Kinds/Interfaces/IItem";
import Movie from "./Kinds/Movie";

export default class MovieLocation extends Location{
    protected createItem() : IItem{
        return new Movie();
    }
}