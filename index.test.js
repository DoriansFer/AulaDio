
const { Heroi, definirLvl, consultarLvl } = require('./index');



describe('definirLvl function', () => {
    test('Xp menor que 1000', () => {
        const output = 'Nível Definido';
        expect(definirLvl(10002)).toEqual(output);
        console.log(`O Herói de nome ${Heroi.nome}, está no nível de ${Heroi.lvl} `);
    });

});