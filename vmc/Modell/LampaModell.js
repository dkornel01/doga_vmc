class LampaModell{
    #lista=[]
    #allapot
    constructor(lista){
        this.#allapot="v"
        this.#lista=lista
    }
    SetAllapot(index){
        if (this.#allapot==="red"){
            this.#allapot="blue"
        }
        else{
            this.#allapot="red"
        }
        this.#lista[index]=this.#allapot
    }
    GetAllapot(){
        return this.#allapot
    }
    GetLista(){
        return this.#lista
    }
}
export default LampaModell