import CodeRastreio from "../../utils/CodeRastreio";

export default interface ITransportadora{
    authRastreio () : CodeRastreio;
    send() : void;
    receive() : void;
}