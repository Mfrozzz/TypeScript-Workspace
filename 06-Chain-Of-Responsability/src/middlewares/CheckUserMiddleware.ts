import Middleware from "./Middleware";
import Database from "../Servers/Database";

export default class CheckUserMiddleware extends Middleware{
    public check(email: string, password: string): boolean {
        if(email.indexOf("@") === -1){
            console.error("Email Invalido.");
            return false;
        }
        if(!Database.filter(item => item.email===email && item.password === password)){
            console.error("User not Found.")
            return false;
        }
        return this.checkNext(email,password);
    }

}