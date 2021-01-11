const filter = require('./filter');

describe('filter', () => {

    it('Applying Filter x=>true on [] gives []', () => {
        const list = [];
        const expected = [];
        const filterToApply = x => true;
        expect(filter(list, filterToApply)).toEqual(expected);
    });

    it('Applying Filter x=>true on [1,2,3] gives [1,2,3]', () => {
        const list = [1, 2, 3];
        const expected = [1, 2, 3];
        const filterToApply = x => true;
        expect(filter(list, filterToApply)).toEqual(expected);
    });

    it('Applying Filter x=>false on [1,2,3] gives []', () => {
        const list = [1, 2, 3];
        const expected = [];
        const filterToApply = x => false;
        expect(filter(list, filterToApply)).toEqual(expected);
    });

    it('Applying Filter x=>x>1 on [1,2,3] gives [2,3]', () => {
        const list = [1, 2, 3];
        const expected = [2, 3];
        filterToApply = x => x > 1;
        expect(filter(list, filterToApply)).toEqual(expected);
    });

    it("Applying filterUpperCase on ['a','B','c','D'] gives ['B', 'D']", () => {
        const list = ['a', 'B', 'c', 'D'];
        const filterToApply = (string) => /^[A-Z]*$/.test(string)
        const expected = ['B', 'D'];
        expect(filter(list, filterToApply)).toEqual(expected);
    });
    
})