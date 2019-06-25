"oilsling": {
		num: 189,
		accuracy: 100,
		basePower: 90,
		category: "Special",
		desc: "Has a 10% chance to lower the target's accuracy by 1 stage.",
		shortDesc: "10% chance to lower the target's accuracy by 1.",
		id: "oilsling",
		name: "Oil Sling",
		pp: 10,
		priority: 0,
		flags: {protect: 1, mirror: 1},
		secondary: {
			chance: 10,
			boosts: {
				accuracy: -1,
			},
		},
		target: "normal",
		type: "Ground",
		zMovePower: 100,
		contestType: "Cute",
	},
};

exports.BattleMovedex = BattleMovedex;