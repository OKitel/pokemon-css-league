import { getPokemonsByIds } from '../repo/pokemonRepository';
import { Level, LevelJson } from '../types/level';
import { Answer } from '../types/answer';
import Pokemon from '../types/pokemon';
import * as dataBase from '../levels.json';

const jsonData = dataBase as LevelsData;

export interface LevelsData {
    levels: LevelJson[];
}

export const createLevels = (data: LevelsData): Level[] => {
    return data.levels.map((level) => {
        const pokemonsters: Pokemon[] = getPokemonsByIds(level.pokemons);
        const corAns: Answer[] = level.correctAnswers.map(({ css, pokemons }) => ({
            css,
            pokemons: getPokemonsByIds(pokemons),
        }));
        const wrongAns: Answer[] | undefined = level.wrongAnswers?.map(({ css, pokemons }) => ({
            css,
            pokemons: getPokemonsByIds(pokemons),
        }));
        return { ...level, pokemons: pokemonsters, correctAnswers: corAns, wrongAnswers: wrongAns };
    });
};

const levels = createLevels(jsonData);

export const getCurrentLevel = (): Level => {
    const currentLevel = localStorage.getItem('level') || '0';
    const level = levels[+currentLevel];
    return level;
};

export const checkAnswer = (answer: string): boolean => {
    const level: Level = getCurrentLevel();
    const { correctAnswers } = level;
    const match = correctAnswers.find((ans) => ans.css === answer);
    const catchedPokemons = match?.pokemons;
    const vanishedPokemons = level.pokemons.filter((pokemon) => !catchedPokemons?.includes(pokemon));
    console.log(catchedPokemons, 'cathced', vanishedPokemons, 'vanished');
    return true;
};
