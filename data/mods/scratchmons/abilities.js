'use strict';

/**@type {{[k: string]: AbilityData}} */
let BattleAbilities = {
	"mineralcomposition": {
		onModifyAtkPriority: 5,
		onModifyAtk(atk, attacker, defender, move) {
			if (move.type === 'Rock') {
				this.debug('Mineral Composition boost');
				return this.chainModify(1.5);
			}
		},
		onModifySpAPriority: 5,
		onModifySpA(atk, attacker, defender, move) {
			if (move.type === 'Rock') {
				this.debug('Mineral Composition boost');
				return this.chainModify(1.5);
			}
		},
		id: "mineralcomposition",
		name: "Mineral Composition",
		num: 234,
	},
};

exports.BattleAbilities = BattleAbilities;