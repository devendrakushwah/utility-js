const map = require('./map');

describe('Map', () => {

    const cube = (value) =>
    {
        return value * value * value;
    };

    const identity = (value) =>
    {
        return value;
    };

    it('Map of cube on [] is []', () => {
        const functionToApply = cube;
        const list = [];
        const expected = [];
        expect(map(list, functionToApply)).toEqual(expected);
    });

    it('Map of cube on [1,2,3] is [1,4,9]', () => {
        const functionToApply = cube;
        const list = [1, 2, 3];
        const expected = [1, 8, 27];
        expect(map(list, functionToApply)).toEqual(expected);
    });

    it('Map of identity on [1,2,3] and is [1,2,3]',()=>
    {
        const functionToApply = identity;
        const list = [1, 2, 3];
        const expected = [1, 2, 3];
        expect(map(list, functionToApply)).toEqual(expected);
    });

    it('Map of someObject on 10 is 11', () => {
        const functionToApply = someObject=>someObject.x+1;
        const list = [{x:10}];
        const expected = [11];
        expect(map(list, functionToApply)).toEqual(expected);
    });
})