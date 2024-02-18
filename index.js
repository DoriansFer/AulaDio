const Heroi = {
    nome: "Katia Kelly",
    lvl: "sem lvl",
}

function definirLvl(xp) {

    if (xp < 1000) {
        Heroi.lvl = "ferro";
        return "Nível Definido"
    } else if (xp >= 1001 && xp <= 2000) {
        Heroi.lvl = "Bronze";
        return "Nível Definido"
    } else if (xp >= 2001 && xp <= 5000) {
        Heroi.lvl = "Prata";
        return "Nível Definido"
    } else if (xp >= 5001 && xp <= 7000) {
        Heroi.lvl = "Ouro";
        return "Nível Definido"
    } else if (xp >= 7001 && xp <= 8000) {
        Heroi.lvl = "Platina";
        return "Nível Definido"
    } else if (xp >= 8001 && xp <= 9000) {
        Heroi.lvl = "Ascendente";
        return "Nível Definido"
    } else if (xp >= 9001 && xp <= 10000) {
        Heroi.lvl = "Imortal";
        return "Nível Definido"
    } else if (xp >= 10001) {
        Heroi.lvl = "Radiante";
        return "Nível Definido"
    }
};

function consultarLvl() {
    return 'Seu lvl atual é:' + Heroi.lvl;
};

module.exports = { definirLvl, consultarLvl, Heroi };