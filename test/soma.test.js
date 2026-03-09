const soma = require('../soma');

test('soma 1 + 2 e igual a 3', () => {
    expect(soma(1, 2)).toBe(3);
});