export interface Pokemon {
    id: number;
    name: string;
    src: string;
    tooltip: () => string;
    attrId?: string;
    attrClass?: string;
}
