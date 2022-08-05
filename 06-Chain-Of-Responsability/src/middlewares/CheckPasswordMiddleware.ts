import Database from "../Servers/Database";
import Middleware from "./Middleware";

export default class CheckPasswordMiddleware extends Middleware{
    public check(email: string, password: string): boolean {
        const users = Database.filter(item=>item.password === password);
        if(password.length<6){
            console.error("Senha fraca.");
            return false;
        }
        if(!users.length){
            console.error("Senha não cadastrado.");
            return false;
        }
        return this.checkNext(email,password);
    }

}