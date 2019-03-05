const sum = require('./sum');
const verifyCoffe = require('../src/verifyCoffe');

describe ('sample test 1', () =>{
	it('works as expected', () => {
		expect(1).toEqual(1);
	});
	it('addition', () => {
		expect(sum(1, 2)).toBe(3);
	});
	it('array', () => {
		const names = ['yary', 'ariana'];
		expect(names).toEqual(names);
	});
});

describe ('verifyCoffe.js', () =>{
	it('verify add coffe when click add coffe button', () => {
		expect(verifyCoffe('addedCoffe')).toBe('addedCoffe');
	});
});
