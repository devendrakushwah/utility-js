const reduce = require('./reduce');

describe('Reduce', () => {

    it('Reduce of [] with (x,y)=>x+y gives undefined', () => {
        const list = [];
        const functionToApply = (x,y)=>x+y;
        const expected = undefined;
        expect(reduce(list, functionToApply)).toEqual(expected);
    });

    it('Reduce of [] with (x,y)=>x+y,10 gives 10',()=>
    {
        const list = [];
        const functionToApply = (x,y)=>x+y;
        const initial = '10';
        const expected = '10';
        expect(reduce(list, functionToApply, initial)).toEqual(expected);
    });

    it("Reduce of ['a','b','c'] with (x,y)=>x+y gives abc", () => {
        const list = ['a','b','c'];
        const functionToApply = (x,y)=>x+y;
        const expected = 'abc';
        expect(reduce(list, functionToApply)).toEqual(expected);
    });

    it("Reduce of ['a','b','c'] with (x,y)=>x+y,'z' gives zabc", () => {
        const list = ['a','b','c'];
        const functionToApply = (x,y)=>x+y;
        const initial = 'z';
        const expected = 'zabc';
        expect(reduce(list, functionToApply, initial)).toEqual(expected);
    });
})