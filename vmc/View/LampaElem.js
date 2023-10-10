class LampaElem{
    #szuloElem
    #index
    
    constructor(szuloElem,index,szin){
        this.#szuloElem=szuloElem
        this.#index=index
        this.elem=$(".lampa:last-child");
        this.pElem=this.elem.children("p");
        this.elem.on("click",()=>{
            this.#esemenykezelo("fenyvaltas")
        })
        this.Lampa()
        this.SetSzin(szin)
    }
    Lampa(){
        let feny="";
        feny+=`<div class=lampa>
        <p></p>
        </div>`
        feny+="";
        this.#szuloElem.append(feny)
    }
    SetSzin(szin){
        console.log(szin)
        $(".lampa").css(`background-color`,`${szin}`)
    }
    getIndex(){
        return this.#index
    }
    #esemenykezelo(esemenynev){
        console.log(esemenynev)
        const esemeny=new CustomEvent(esemenynev,{detail:this})
        console.log({detail:this})
        window.dispatchEvent(esemeny)
    }
}
export default LampaElem