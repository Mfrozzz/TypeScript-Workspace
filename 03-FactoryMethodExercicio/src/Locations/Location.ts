import IItem from "./Kinds/Interfaces/IItem";

export default abstract class Location{

    startItem():void{
        const kinds = this.createItem();
        kinds.start();
    }
    protected abstract createItem() : IItem;
}