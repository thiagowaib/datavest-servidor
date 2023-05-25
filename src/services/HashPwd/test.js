const HashPwd = require('./index')

test('Serviço: HashPwd - Aleatoriedade de Geração de Hash', async () => {
    expect(await HashPwd("abcde123")).not.toEqual(await HashPwd("abcde123"));
});