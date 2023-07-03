import { Answer } from './answer';
import { Pokemon } from './pokemon';

export interface Level {
    html: string;
    title: string;
    menuTitle: string;
    pokemons: Pokemon[];
    correctAnswers: Answer[];
    help?: string;
    wrongAnswers?: Answer[];
    done: boolean;
}
