const tail = require('./tail');

describe('Tail', () => {

    it('Tail of [] is null', () => {
    	const list = [];
    	const expected = null;
        expect(tail(list)).toEqual(expected);
    });

    it('Tail of [1] is []', () => {
    	const list = [1];
    	const expected = [];
    	expect(tail(list)).toEqual(expected);
    });

    it('Tail of [1,2,3] is [2,3]', () => {
    	const list = [1, 2, 3];
    	const expected = [2, 3];
        expect(tail(list)).toEqual(expected);
    });    
})
