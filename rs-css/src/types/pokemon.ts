interface IPokemon {
    id: number;
    name: string;
    src: string;
    attrId?: string;
    attrClass?: string;
}

class Pokemon implements IPokemon {
    public id: number;

    public name: string;

    public src: string;

    public attrId?: string;

    public attrClass?: string;

    constructor(p: IPokemon) {
        this.id = p.id;
        this.name = p.name;
        this.src = p.src;
        this.attrId = p.attrId;
        this.attrClass = p.attrClass;
    }

    public tooltip(): string {
        if (this.attrId) {
            if (this.attrClass) {
                return `<${this.name} ${this.attrId} ${this.attrClass}/>`;
            }
            return `<${this.name} ${this.attrId} />`;
        }
        if (this.attrClass) {
            return `<${this.name} ${this.attrClass}/>`;
        }
        return `<${this.name} />`;
    }
}

export default Pokemon;
