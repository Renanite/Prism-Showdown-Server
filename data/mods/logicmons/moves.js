'use strict';

/**@type {{[k: string]: MoveData}} */
let BattleMovedex = {
	"flashcannon": {
		num: 430,
		accuracy: 100,
		basePower: 80,
		category: "Special",
		desc: "Has a 10% chance to lower the target's Special Defense by 1 stage.",
		shortDesc: "10% chance to lower the target's Sp. Def by 1.",
		id: "flashcannon",
		isViable: true,
		name: "Flash Cannon",
		pp: 10,
		priority: 0,
		flags: {bullet: 1, protect: 1, mirror: 1},
		secondary: {
			chance: 10,
			boosts: {
				spd: -1,
			},
		},
		target: "normal",
		type: "Steel",
		zMovePower: 160,
		contestType: "Beautiful",
"10000000voltthunderbolt": {
		num: 719,
		accuracy: true,
		basePower: 9000,
		category: "Special",
		desc: "Has a very high chance for a critical hit.",
		shortDesc: "Very high critical hit ratio.",
		id: "10000000voltthunderbolt",
		name: "10,000,000 Volt Thunderbolt",
		pp: 1,
		priority: 0,
		flags: {},
		isZ: "pikashuniumz",
		critRatio: 3,
		secondary: null,
		target: "normal",
		type: "Electric",
		contestType: "Cool",
},
	"morningsun": {
		num: 234,
		accuracy: true,
		basePower: 0,
		category: "Status",
		desc: "The user restores 1/2 of its maximum HP if Delta Stream or no weather conditions are in effect, 2/3 of its maximum HP if the weather is Desolate Land or Sunny Day, and 1/4 of its maximum HP if the weather is Hail, Primordial Sea, Rain Dance, or Sandstorm, all rounded half down.",
		shortDesc: "Heals the user by a weather-dependent amount.",
		id: "morningsun",
		isViable: true,
		name: "Morning Sun",
		pp: 10,
		priority: 0,
		flags: {snatch: 1, heal: 1},
		onHit(pokemon) {
			let factor = 0.5;
			if (this.field.isWeather(['sunnyday', 'desolateland'])) {
				factor = 0.667;
			} else if (this.field.isWeather(['raindance', 'primordialsea', 'sandstorm', 'hail'])) {
				factor = 0.25;
			}
			return !!this.heal(this.modify(pokemon.maxhp, factor));
		},
		secondary: null,
		target: "self",
		type: "Normal",
		zMoveEffect: 'clearnegativeboost',
		contestType: "Beautiful",
},
	"moonlight": {
		num: 236,
		accuracy: true,
		basePower: 0,
		category: "Status",
		desc: "The user restores 1/2 of its maximum HP if Delta Stream or no weather conditions are in effect, 2/3 of its maximum HP if the weather is Desolate Land or Sunny Day, and 1/4 of its maximum HP if the weather is Hail, Primordial Sea, Rain Dance, or Sandstorm, all rounded half down.",
		shortDesc: "Heals the user by a weather-dependent amount.",
		id: "moonlight",
		isViable: true,
		name: "Moonlight",
		pp: 10,
		priority: 0,
		flags: {snatch: 1, heal: 1},
		onHit(pokemon) {
			let factor = 0.5;
			if (this.field.isWeather(['raindance', 'primordialsea'])) {
				factor = 0.667;
			} else if (this.field.isWeather(['sunnyday', 'desolateland', 'sandstorm', 'hail'])) {
				factor = 0.25;
			}
			return !!this.heal(this.modify(pokemon.maxhp, factor));
		},
		secondary: null,
		target: "self",
		type: "Fairy",
		zMoveEffect: 'clearnegativeboost',
		contestType: "Beautiful",
},
	"synthesis": {
		num: 235,
		accuracy: true,
		basePower: 0,
		category: "Status",
		desc: "The user restores 1/2 of its maximum HP if Delta Stream or no weather conditions are in effect, 2/3 of its maximum HP if the weather is Desolate Land or Sunny Day, and 1/4 of its maximum HP if the weather is Hail, Primordial Sea, Rain Dance, or Sandstorm, all rounded half down.",
		shortDesc: "Heals the user by a weather-dependent amount.",
		id: "synthesis",
		isViable: true,
		name: "Synthesis",
		pp: 10,
		priority: 0,
		flags: {snatch: 1, heal: 1},
		onHit(pokemon) {
			let factor = 0.5;
			if (this.field.isWeather(['sunnyday', 'desolateland'])) {
				factor = 0.667;
			} else if (this.field.isWeather(['raindance', 'primordialsea', 'sandstorm', 'hail'])) {
				factor = 0.25;
			}
			return !!this.heal(this.modify(pokemon.maxhp, factor));
		},
		secondary: null,
		target: "self",
		type: "Grass",
		zMoveEffect: 'clearnegativeboost',
		contestType: "Clever",
},
	"judgment": {
		num: 449,
		accuracy: 100,
		basePower: 150,
		category: "Special",
		desc: "This move's type depends on the user's held Plate or Z-Crystal.",
		shortDesc: "Type varies based on the held Plate or Z-Crystal.",
		id: "judgment",
		isViable: true,
		name: "Judgment",
		pp: 10,
		priority: 0,
		flags: {protect: 1, mirror: 1},
		onModifyMove(move, pokemon) {
			if (pokemon.ignoringItem()) return;
			const item = pokemon.getItem();
			if (item.id && item.onPlate && !item.zMove) {
				move.type = item.onPlate;
				move.type = item.zMove;
			}
		},
		secondary: null,
		target: "normal",
		type: "Normal",
		zMovePower: 200,
		onModifyMove(move, pokemon) {
			if (pokemon.ignoringItem()) return;
			const item = pokemon.getItem();
			if (item.id && item.onPlate && !item.zMove) {
				move.type = item.onPlate;
				move.type = item.zMove;
		contestType: "Beautiful",
	"eatbanana": {
		num: 400,
		accuracy: true,
		basePower: 0,
		category: "Status",
		desc: "The user restores 1/2 of its maximum HP, rounded half up.",
		shortDesc: "Heals the user by 50% of its max HP.",
		id: "eatbanana",
		isViable: true,
		name: "Eat Banana",
		pp: 10,
		priority: 0,
		flags: {snatch: 1, heal: 1},
		onHit(pokemon) {
			if (['', 'slp', 'frz'].includes(pokemon.status)) return false;
			pokemon.cureStatus();
			}
		},
		heal: [1, 2],
		secondary: null,
		target: "self","normal"
		type: "Grass",
		zMoveEffect: 'clearnegativeboost',
		contestType: "Cute",
	},
};

exports.BattleMovedex = BattleMovedex;