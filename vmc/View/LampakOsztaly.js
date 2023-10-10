import LampaElem from "./LampaElem.js"
class LampakOsztaly{
    #szuloElem=$(".jatekter")
    #lista
    constructor(lista){
    this.#lista=lista
    for (let egy=0;egy<9;egy++){
        new LampaElem(this.#szuloElem,egy,lista[egy])
    }
    }
    lampaInit(event,szin){
        event.SetSzin(szin)
    }
}
export default LampakOsztaly