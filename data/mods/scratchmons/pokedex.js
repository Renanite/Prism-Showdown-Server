'use strict';

/**@type {{[k: string]: TemplateData}} */
let BattlePokedex = {
	frakvern: {
		num: 810,
		species: "Frakvern",
		types: ["Ground", "Dragon"],
		gender: "N",
		baseStats: {hp: 110, atk: 100, def: 100, spa: 150, spd: 100, spe: 120},
		abilities: {0: "Levitate", H: "Mineral Composition"},
	},
};

exports.BattlePokedex = BattlePokedex;