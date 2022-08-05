import Database from "../Servers/Database";
import PermissionType from "../Servers/PermissionType";
import Middleware from "./Middleware";

export default class CheckPermissionMiddleware extends Middleware{
    public check(email: string, password: string): boolean {
        console.log("Verificando Permissao:")
        const users = Database.filter(item=>item.email === email);
        if(!users.length){
            console.error("Email não cadastrado.");
            return false;
        }
        if(users[0].permission === PermissionType.ADMIN){
            console.log("Bem-Vindo Adm!");
        }else{
            console.log("Bem-Vindo User!");
        }
        return this.checkNext(email,password);
    }

}