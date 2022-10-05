import { getPercent } from "../../17.5/getPercent.js";
import {expect} from "expect";

describe('tests for getPercent function', () => {
    const number = 200;
    it('positiv test', () => {
        expect(getPercent(30, number)).toBe(60);
    }),
    it('test of 0%', () => {
        expect(getPercent(0, number)).toBe(0);
    }),
    it('test of 100%', () => {
        expect(getPercent(100, number)).toBe(number);
    }),
    it('Test with one parameter', () => {
        expect(getPercent(100)).toBe('NaN');
    })
})