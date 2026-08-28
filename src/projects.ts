export class Tech{
    icon
    title

    constructor(icon: string, title: string){
        this.icon = icon
        this.title = title
    }
}

export class ProjektSummary{
    title
    techs
    
    constructor(title: string, techs: Array<Tech>){
        this.title = title
        this.techs = techs
    }
}