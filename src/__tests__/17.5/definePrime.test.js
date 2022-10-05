import { definePrime} from "../../17.5/definePrime.js";

describe('Test definePrime function', () => {
    const simple = 17;
    const complex = 18;

    it('should operate correctly with simple number', () => {
        expect(definePrime(simple)).toBe(`${simple} is prime number`)
    }),
    it('should operate correctly with complex number', () => {
        expect(definePrime(complex)).toBe(`${complex} is not prime number`)
    }),
    it('should operate correctly with range of numbers', () => {
        expect(definePrime(1002)).toBe('Data is not correct')
    })
});