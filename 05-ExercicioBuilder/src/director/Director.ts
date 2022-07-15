import IBuilder from "../builders/interfaces/IBuilder";
import Bread from "../components/Bread";
import Protein from "../components/Protein";
import Salad from "../components/Salad";
import SanduicheType from "../components/SanduicheType";
import Sauce from "../components/Sauce";
import Sanduiche from "../products/Sanduiche";

export default class Director{
    constructor(private _builder : IBuilder){
    }

    constructorXsalad(){
        this._builder.setSanduicheType(SanduicheType.XSALAD);
        this._builder.setSalad(new Salad("Alface+Tomate."));
        this._builder.setProtein(Protein.HAMBURGER);
        this._builder.setBread(Bread.CASEIRO);
        this._builder.addSauces(Sauce.BARBECUE);
    }

    constructorHotDog(){
        this._builder.setSanduicheType(SanduicheType.HOTDOG);
        this._builder.setSalad(new Salad("Vinagrete"));
        this._builder.setProtein(Protein.VINA);
        this._builder.setBread(Bread.FRANCES);
        this._builder.addSauces(Sauce.KETCHUP);
    }
}