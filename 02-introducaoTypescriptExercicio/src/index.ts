import Address from "./Address";
import User from "./user";

let address1 : Address = new Address("Rua Saldanha Marinho",1000,85010981,"Centro","Guarapuava");
let address2 : Address = new Address("Rua Dom Bosco",90,85045050,"Bonsucesso","Guarapuava");

let user1: User = new User("Jose da Silva",12365499785,124796226,0,address1);
let user2: User = new User("Evelyn Aparecida",19665899786,154876335,1,address2);

var sexo :string;
mensagem(user1);
mensagem(user2);

function mensagem(user : User) : void{
    if(user.sex===0){
        sexo="MASCULINO";
    }
    if(user.sex===1){
        sexo="FEMININO";
    }
    if(user.sex===2){
        sexo="NAO DECLARADO";
    }
    console.log("Usuario "+user.name+", de CPF:"+user.cpf+" ,RG:"+user.rg+" e sexo "+sexo);
    console.log("Residente na "+user.address.street+", com o CEP:"+user.address.cep+" e Numero "+user.address.num+", no Bairro "+user.address.district+" da cidade de "+user.address.city)
    console.log();
}