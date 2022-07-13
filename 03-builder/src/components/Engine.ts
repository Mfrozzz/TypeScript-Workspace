export default class Engine{
    constructor(private _power: number){
        //passado assim pois não faz diferença, afinal seria igual o codigo do set
    }

    get power() : number{
        return this._power;
    }

    set power(power: number){
        this._power = power;
    }

}