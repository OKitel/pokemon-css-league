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
}

export default Pokemon;
