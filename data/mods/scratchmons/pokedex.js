'use strict';

/**@type {{[k: string]: TemplateData}} */
let BattlePokedex = {
	shakvern: {
		num: 1,
		species: "Shakvern",
		types: ["Ground", "Flying"],
		gender: "N",
		baseStats: {hp: 90, atk: 100, def: 120, spa: 150, spd: 90, spe: 110},
		abilities: {0: "No Guard"},
		otherFormes: ["shakvernmega"],
	},
	shakvernmega: {
		num: 1,
		species: "Shakvern-Mega",
		baseSpecies: "Shakvern",
		forme: "Mega",
		formeLetter: "M",
		types: ["Ground", "Flying"],
		gender: "N",
		baseStats: {hp: 90, atk: 130, def: 130, spa: 180, spd: 100, spe: 130},
		abilities: {0: "Delta Stream"},
	},
};

exports.BattlePokedex = BattlePokedex;
