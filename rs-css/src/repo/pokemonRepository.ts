import charmanderImage from '../assets/charmander.png';
import bulbasaurImage from '../assets/bulbasaur.png';
import pikachuImage from '../assets/pikachu.png';
import squirtleImage from '../assets/squirtle.png';
import laprasImage from '../assets/lapras.png';
import Pokemon from '../types/pokemon';
import shinyCharmanderImage from '../assets/shiny-charmander.png';
import pikachuInTheCage from '../assets/sad-pikachu.png';

const pikachu = new Pokemon({
    id: 1,
    name: 'pikachu',
    src: pikachuImage as string,
});

const bulbasaur = new Pokemon({
    id: 2,
    name: 'bulbasaur',
    src: bulbasaurImage as string,
});

const charmander = new Pokemon({
    id: 3,
    name: 'charmander',
    src: charmanderImage as string,
});

const squirtle = new Pokemon({
    id: 4,
    name: 'squirtle',
    src: squirtleImage as string,
});

const lapras = new Pokemon({
    id: 5,
    name: 'lapras',
    src: laprasImage as string,
});

const shinyCharmander = new Pokemon({
    id: 6,
    name: 'charmander',
    src: shinyCharmanderImage as string,
});

const cagedPikachu = new Pokemon({
    id: 7,
    name: 'pikachu',
    src: pikachuInTheCage as string,
});

const tinyBulbasaur = new Pokemon({
    id: 8,
    name: 'bulbasaur',
    src: bulbasaurImage as string,
    attrClass: 'tiny',
});

const tinyCharmander = new Pokemon({
    id: 9,
    name: 'charmander',
    src: charmanderImage as string,
    attrClass: 'tiny',
});

const tinyPikachu = new Pokemon({
    id: 10,
    name: 'pikachu',
    src: pikachuImage as string,
    attrClass: 'tiny',
});

const tinyCagedPikachu = new Pokemon({
    id: 11,
    name: 'pikachu',
    src: pikachuInTheCage as string,
    attrClass: 'tiny',
});

const tinySquirtle = new Pokemon({
    id: 12,
    name: 'squirtle',
    src: squirtleImage as string,
    attrClass: 'tiny',
});

const clonePikachu = new Pokemon({
    id: 13,
    name: 'pikachu',
    src: pikachuImage as string,
});

const cloneBulbasaur = new Pokemon({
    id: 14,
    name: 'bulbasaur',
    src: bulbasaurImage as string,
});

const dataBase = [
    pikachu,
    bulbasaur,
    charmander,
    squirtle,
    lapras,
    shinyCharmander,
    cagedPikachu,
    tinyBulbasaur,
    tinyCharmander,
    tinyPikachu,
    tinyCagedPikachu,
    tinySquirtle,
    clonePikachu,
    cloneBulbasaur,
];

export const getPokemonById = (id: number): Pokemon | undefined => {
    return dataBase.find((pokemon) => pokemon.id === id);
};

export const getPokemonsByIds = (ids: number[]): Pokemon[] => {
    const pokemons: Pokemon[] = [];
    ids.forEach((id) => {
        const pokemon = getPokemonById(id);
        if (pokemon) pokemons.push(pokemon);
    });
    return pokemons;
};
