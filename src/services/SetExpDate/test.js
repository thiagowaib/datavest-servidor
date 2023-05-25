const SetExpDate = require('./index')

test('Serviço: SetExpDate - Adicionar 10 minutos', () => {
    const dataAtual = Date.now();
    expect(SetExpDate(dataAtual, 10, 'm')).toEqual(dataAtual + (10 * 1000 * 60));
});

test('Serviço: SetExpDate - Adicionar 10 horas', () => {
    const dataAtual = Date.now();
    expect(SetExpDate(dataAtual, 10, 'h')).toEqual(dataAtual + (10 * 1000 * 60 * 60));
});

test('Serviço: SetExpDate - Adicionar 10 dias', () => {
    const dataAtual = Date.now();
    expect(SetExpDate(dataAtual, 10, 'd')).toEqual(dataAtual + (10 * 1000 * 60 * 60 * 24));
});

test('Serviço: SetExpDate - Parâmetro de tempo errado', () => {
    const dataAtual = Date.now();
    expect(SetExpDate(dataAtual, 10, 'x')).toEqual(dataAtual);
});

test('Serviço: SetExpDate - Subtrair 10 minutos', () => {
    const dataAtual = Date.now();
    expect(SetExpDate(dataAtual, -10, 'm')).toEqual(dataAtual - (10 * 1000 * 60));
});

test('Serviço: SetExpDate - Subtrair 10 horas', () => {
    const dataAtual = Date.now();
    expect(SetExpDate(dataAtual, -10, 'h')).toEqual(dataAtual - (10 * 1000 * 60 * 60));
});

test('Serviço: SetExpDate - Subtrair 10 dias', () => {
    const dataAtual = Date.now();
    expect(SetExpDate(dataAtual, -10, 'd')).toEqual(dataAtual - (10 * 1000 * 60 * 60 * 24));
});