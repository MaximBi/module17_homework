import  { sum } from '../../17.5';

xdescribe('sum test', () => {
   it('adds 1 + 2 to equal 3',() => {
       expect(sum(1, 2)).toBe(3);
   })
});
