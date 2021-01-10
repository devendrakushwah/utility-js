const head = require('./head');

describe('Head', () => {

    it('Head of [] is null', () => {
    	const list = [];
    	const expected = null;
        expect(head(list)).toEqual(expected);
    });

    it('Head of [1] is 1', () => {
    	const list = [1];
    	const expected = 1;
    	expect(head(list)).toEqual(expected);
    });

    it('Head of [2,3,5] is 2', () => {
    	const list = [2, 3, 5];
    	const expected = 2;
        expect(head(list)).toEqual(expected);
    });    
})
