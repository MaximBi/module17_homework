import { revertString } from "../../17.6/revertString.js";

describe('Test reverting string function', () => {
    it('positiv test', () => {
        expect(revertString('1234')).toBe('4321');
    }),
    it('not string test', () => {
        expect(revertString(1234)).toBe('');
    })
});