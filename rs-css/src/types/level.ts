import { Answer, AnswerJson } from './answer';
import Pokemon from './pokemon';

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

export interface LevelJson {
    html: string;
    title: string;
    menuTitle: string;
    pokemons: number[];
    correctAnswers: AnswerJson[];
    wrongAnswers?: AnswerJson[];
    help?: string;
    done: boolean;
}
