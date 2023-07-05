import { getPokemonsByIds } from '../repo/pokemonRepository';
import { Level, LevelJson } from '../types/level';
import { Answer } from '../types/answer';
import Pokemon from '../types/pokemon';
import * as dataBase from '../levels.json';
import render from './render';
import createPokeball from './pokeball';

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

export const levels = createLevels(jsonData);

export const getCurrentLevel = (): Level => {
    const currentLevel = localStorage.getItem('level') || '0';
    const level = levels[+currentLevel];
    return level;
};

export const setLevel = (level: number): void => {
    if (level <= levels.length) {
        localStorage.setItem('level', `${level}`);
        const l = levels[level];
        render(l);
    }
};

const setNextLevel = (): void => {
    const l = +(localStorage.getItem('level') || '0') + 1;
    setLevel(l);
};

export const checkAnswer = (answer: string): boolean => {
    const level: Level = getCurrentLevel();
    const { correctAnswers } = level;
    const match = correctAnswers.find((ans) => ans.css === answer.trim());
    const catchedPokemons = match?.pokemons;
    // const vanishedPokemons = level.pokemons.filter((pokemon) => !catchedPokemons?.includes(pokemon));
    // TODO animation for vanished pokemons
    if (catchedPokemons) {
        const activeImages = document.querySelectorAll('.active-image');
        activeImages.forEach((img) => {
            if (img) {
                const parent = img.parentElement;
                const pokeball = createPokeball();
                if (parent) {
                    parent.replaceChild(pokeball, img);
                }
            }
        });
        setTimeout(() => setNextLevel(), 4000);
        return true;
    }
    return false;
};
