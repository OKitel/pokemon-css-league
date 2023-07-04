import Pokemon from './pokemon';

export interface Answer {
    css: string;
    pokemons: Pokemon[];
}

export interface AnswerJson {
    css: string;
    pokemons: number[];
}
