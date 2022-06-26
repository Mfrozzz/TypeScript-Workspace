export default class Address{
    private _street : string;
    private _num : number;
    private _cep : number;
    private _district : string;
    private _city : string;

    constructor(street : string,num : number,cep : number,district : string,city : string){
        this._street=street;
        this._num=num;
        this._cep=cep;
        this._district=district;
        this._city=city
    }

    get street() : string{
        return this._street;
    }
    set street(street : string){
        this._street=street;
    }

    get num() : number{
        return this._num;
    }
    set num(num : number){
        this._num=num;
    }

    get cep() : number{
        return this._cep;
    }
    set cep(cep : number){
        this._cep=cep;
    }

    get district() : string{
        return this._district;
    }
    set district(district : string){
        this._district=district;
    }

    get city() : string{
        return this._city;
    }
    set city(city : string){
        this._city=city;
    }

}