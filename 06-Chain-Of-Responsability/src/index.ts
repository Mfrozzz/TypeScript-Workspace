import * as readline from "readline";
import CheckPasswordMiddleware from "./middlewares/CheckPasswordMiddleware";
import CheckPermissionMiddleware from "./middlewares/CheckPermissionMiddleware";
import CheckUserMiddleware from "./middlewares/CheckUserMiddleware";
import Server from "./Servers/Server";

declare var process;
const server = new Server();

function setPromptQuestions(){
    const rl = readline.createInterface({
        input : process.stdin,
        output : process.stdout
    });
    rl.question("Digite seu Email: ",email =>{
        rl.question("Digite sua Senha: ",password => {
            server.login(email,password);
            rl.close();
        });
    });
    rl.on("close",()=> setPromptQuestions());//loop
}

const middleware = new CheckUserMiddleware();
middleware.linkWith(new CheckPermissionMiddleware());
middleware.linkWith(new CheckPasswordMiddleware());

server.setMiddleware(middleware);
setPromptQuestions();
//desafio: senha fraca -6 caracteres