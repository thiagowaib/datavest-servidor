const AuthPwd = require('./index')

test('Serviço: AuthPwd - Match de Senha e Hash', async () => {
    expect(await AuthPwd("$2b$10$SuXdjmwypOuIQ.CHktZ/f.UWtnc2OW84.gPApzIRiPRgd/7Eb4tSW", "12345")).toEqual(true);
});

test('Serviço: AuthPwd - Não há Match', async () => {
    expect(await AuthPwd("$2b$10$SuXdjmwypOuIQ.CHktZ/f.UWtnc2OW84.gPApzIRiPRgd/7Eb4tSW", "54321")).toEqual(false);
});