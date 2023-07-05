import charmanderImage from '../assets/charmander.png';
import bulbasaurImage from '../assets/bulbasaur.png';
import pikachuImage from '../assets/pikachu.png';
import squirtleImage from '../assets/squirtle.png';
import laprasImage from '../assets/lapras.png';
import Pokemon from '../types/pokemon';

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

const dataBase = [pikachu, bulbasaur, charmander, squirtle, lapras];

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
