const sum = (a, b) => a + b;

test('adds 1 + 2 to euqal 3', () => {
	expect(sum(1, 2)).toBe(3);
});