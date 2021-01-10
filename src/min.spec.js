const min = require('./min');

describe('Min', () => {

	it('Min of [] is []', () => {
		const list = [];
		const expected  = [];
		expect(min(list)).toEqual(expected);
	});

	it('Min of [1,2,3,4] is 1', () => {
		const list = [1,2,3,4];
		const expected = 1;
		expect(min(list)).toEqual(expected);
	});

	it('Min of [-1,-2,-3,-4] is -4', () => {
		const list = [-1,-2,-3,-4];
		const expected = -4;
		expect(min(list)).toEqual(expected);
	});

})