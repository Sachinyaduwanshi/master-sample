export class ModuleMenu {
    
    private name: string;
    private label: string;
    private routeLink: string

    constructor(name: string, label: string, routeLink: string){
        this.name = name;
        this.label = label;
        this.routeLink = routeLink;
    }
}