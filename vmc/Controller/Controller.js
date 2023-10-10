import LampaModell from "../Modell/LampaModell.js"
import LampaElem from "../View/LampaElem.js"
import LampakOsztaly from "../View/LampakOsztaly.js";
class Controller{
    #lista=["red","red","red","red","red","red","red","red","red"]
    #szuloElem=$(".jatekter")
    constructor(){
        this.LAMPAKOSZTALY = new LampakOsztaly(this.#lista);
        /*for (let i=0;i<9;i++){
            new LampaElem(this.#szuloElem,i,lista[i])
        }*/
        this.LAMPAMODELL= new LampaModell(this.#lista);
        $(window).on("fenyvaltas",(event)=>{
            //let tarto=();
            console.log("volt")
            let lista=this.#lista
            let index=event.detail.getIndex()
            this.LAMPAMODELL.SetAllapot(index)
            lista=this.LAMPAMODELL.GetLista()
            console.log(this.LAMPAMODELL.GetLista())
            this.LAMPAKOSZTALY.lampaInit(event.detail,lista[index])
            
        })
    }
    
    
}
export default Controller