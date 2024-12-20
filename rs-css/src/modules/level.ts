import { getPokemonsByIds } from '../repo/pokemonRepository';
import { Level, LevelJson } from '../types/level';
import { Answer } from '../types/answer';
import Pokemon from '../types/pokemon';
import * as dataBase from '../levels.json';
import render from './render';
import createPokeballView from './pokeball';
import finishImage from '../assets/finish.png';
import { shakeEditor } from './editor';
import createMainView from './main';

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

export const levels: Level[] = createLevels(jsonData);

export const getCurrentLevel = (): Level => {
    const currentLevel: string = localStorage.getItem('level') || '0';
    const level: Level = levels[+currentLevel];
    return level;
};

const showFinish = (): void => {
    const main: Element | null = document.querySelector('.main');
    if (main) {
        main.innerHTML = '';
        const finishImg: HTMLImageElement = document.createElement('img');
        finishImg.src = finishImage as string;
        finishImg.className = 'finish';
        main.appendChild(finishImg);

        setTimeout(() => {
            const parent: HTMLElement | null = main.parentElement;
            const newMain: HTMLElement = createMainView();
            if (parent) {
                parent.replaceChild(newMain, main);
            }
            render(levels[0]);
        }, 3000);
    }
};

export const setLevel = (level: number): void => {
    if (level < levels.length) {
        localStorage.setItem('level', `${level}`);
        const l: Level = levels[level];
        render(l);
    } else {
        showFinish();
    }
};

const setNextLevel = (): void => {
    const l: number = +(localStorage.getItem('level') || '0');
    localStorage.setItem(`level ${l}`, 'done');
    setLevel(l + 1);
};

export const checkAnswer = (answer: string): boolean => {
    const level: Level = getCurrentLevel();
    const { correctAnswers } = level;
    const match: Answer | undefined = correctAnswers.find((ans) => ans.css === answer.trim());
    const catchedPokemons: Pokemon[] | undefined = match?.pokemons;
    const vanishedPokemons: Pokemon[] = level.pokemons.filter((pokemon) => !catchedPokemons?.includes(pokemon));
    if (catchedPokemons) {
        const activeImages: NodeListOf<Element> = document.querySelectorAll('.active-image');
        activeImages.forEach((img) => {
            if (img) {
                const parent: HTMLElement | null = img.parentElement;
                const pokeball: HTMLElement = createPokeballView();
                if (parent) {
                    parent.replaceChild(pokeball, img);
                }
            }
        });
        level.done = true;
        setTimeout(() => setNextLevel(), 3000);
        return true;
    }
    if (vanishedPokemons) {
        shakeEditor();
    }
    return false;
};
