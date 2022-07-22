import CodeRastreio from "../../utils/CodeRastreio";

export default interface ICorreios{
    authRastreio () : CodeRastreio;
    sendCorreios() : void;
    receiveCorreios() : void;
}