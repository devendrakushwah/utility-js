const max = require('./max');

describe('Max', () => {

	it('Max of [] is []', () => {
		const list = [];
		const expected = [];
		expect(max(list)).toEqual(expected);
	});

    it('Max of [1,2,3,4] is 4', () => {
    	const list = [1,2,3,4];
    	const expected = 4;
        expect(max(list)).toEqual(expected);
    });

    it('Max of [-1,-2,-3,-4] is -1', () => {
		const list = [-1,-2,-3,-4];
		const expected = -1;
		expect(max(list)).toEqual(expected);
	});

})