import Bread from "../components/Bread";
import Protein from "../components/Protein";
import Salad from "../components/Salad";
import Sauce from "../components/Sauce";
import SanduicheType from "../components/SanduicheType";

export default class Sanduiche{
    private _bread : Bread;
    private _protein : Protein;
    private _salad : Salad;
    private _sauce : Sauce;
    private _sanduicheType : SanduicheType;

    get sanduicheType() : SanduicheType{
        return this._sanduicheType;
    }
    set sanduicheType(value : SanduicheType){
        this._sanduicheType = value;
    }

    get sauce() : Sauce{
        return this._sauce;
    }
    set sauce(value : Sauce){
        this._sauce = value;
    }

    get salad() : Salad{
        return this._salad;
    }
    set salad(value : Salad){
        this._salad = value;
    }

    get protein() : Protein{
        return this._protein;
    }
    set protein(value : Protein){
        this._protein = value;
    }

    get bread() : Bread{
        return this._bread;
    }
    set bread(value : Bread){
        this._bread = value;
    }
}