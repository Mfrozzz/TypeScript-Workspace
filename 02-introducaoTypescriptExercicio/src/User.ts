import Address from "./Address";

enum Sexo{
    MASCULINO,
    FEMININO,
    NDECLARADO
}
export default class User{
    
    private _name : string;
    private _cpf: number;
    private _rg: number;
    private _sex: Sexo;
    private _address: Address;
    
    constructor(name : string,cpf : number,rg : number,sex : Sexo,address : Address){
        this._name=name;
        this._cpf=cpf;
        this._rg=rg;
        this._sex=sex;
        this._address=address;
    }
    
    get name() : string{
        return this._name;
    }
    set name(name : string){
        this._name=name;
    }
    
    get cpf(): number {
        return this._cpf;
    }
    set cpf(cpf: number) {
        this._cpf = cpf;
    }
    
    get rg(): number {
        return this._rg;
    }
    set rg(rg: number) {
        this._rg = rg;
    }
    
    get sex(): Sexo {
        return this._sex;
    }
    set sex(sex: Sexo) {
        this._sex = sex;
    }
    
    get address(): Address {
        return this._address;
    }
    set address(address: Address) {
        this._address = address;
    }
    
}