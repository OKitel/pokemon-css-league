import { checkAnswer } from '../modules/level';

describe('test level module', () => {
    it('check call checkAnswer with pikachu', () => {
        const result = checkAnswer('pikachu');
        expect(result).toBe(true);
    });
});
