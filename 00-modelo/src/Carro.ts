export default class Carro{//default é o folder
    private _marca : string;
    private _modelo : string;
    private _ano : number;
    private _motor : string;
    private _completo : boolean;

    constructor(marca : string, modelo : string){
        this._marca=marca;
        this._modelo=modelo;
    }

    get marca() : string{//recomendado
        return this._marca;
    }
    set marca(marca : string){//recomendado
        this._marca = marca;
    }
    getModelo():string{
        return this._modelo;
    }
    setModelo(modelo : string){
        this._modelo = modelo;
    }
    ligar(){
        console.log("vrum vrum");
    }
}