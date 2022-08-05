import Middleware from "../middlewares/Middleware";

export default class Server{
    private _middleware : Middleware;

    public setMiddleware(middleware : Middleware){
        this._middleware = middleware;
    }

    public login(email:string,password:string) : boolean{
        if(this._middleware.check(email,password)){//aqui verificar
            console.log("User autenticado");
            return true;
        }
        return false;
    }
}