'use strict';

/**@type {{[k: string]: AbilityData}} */
let BattleAbilities = {
"aquaborn": {	
			shortDesc: "This Pokemon's attacking stat is multiplied by 1.5 while using a Water-type attack.",
			onModifyAtkPriority: 5,
			onModifyAtk(atk, attacker, defender, move) {
				if (move.type === 'Water') {
					this.debug('Aqua Born boost');
					return this.chainModify(1.5);
				}
			},
			onModifySpAPriority: 5,
			onModifySpA(atk, attacker, defender, move) {
				if (move.type === 'Water') {
					this.debug('Aqua Born boost');
					return this.chainModify(1.5);
				}
			},
			id: "aquaborn",
			name: "Aqua Born",
			rating: 3,
			num: 300,
	},
















"scrappy": {	
			shortDesc: "This Pokemon’s attacks bypass non-ability-based immunities.",
			onModifyMovePriority: -5,
			onModifyMove(move) {
				if (!move.ignoreImmunity) move.ignoreImmunity = {};
				if (move.ignoreImmunity !== true) {
					move.ignoreImmunity['Fighting'] = true;
					move.ignoreImmunity['Normal'] = true;
                           move.ignoreImmunity['Dragon'] = true;
                           move.ignoreImmunity['Electric'] = true;
                           move.ignoreImmunity['Psychic'] = true;
				}
					},

	
	
























"mindbreak": {	
	
			shortDesc: "This Pokemon's Psychic power is 2.5x but it sustains 33% recoil on all Psychic attacks.",
			onModifyAtk(atk, attacker, defender, move) {
				if (move.type === 'Psychic') {
					return this.chainModify(2.5);
				}
			},
			onModifySpA(atk, attacker, defender, move) {
				if (move.type === 'Psychic') {
					return this.chainModify(2.5);
				}
			},
			id: "mindbreak",
			name: "Mind Break",
			rating: 4,
			num: 301,
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	


},
	"heatproof": {
		desc: "This Pokemon is immune to Fire-type attacks.",
onTryHit(target, source, move) {
			if (target !== source && move.type === 'Fire') {
				move.accuracy = true;
				if (!target.addVolatile('flashfire')) {
					this.add('-immune', target, '[from] ability: Heatproof');
				}
				return null;
			}
		},
		onEnd(pokemon) {
			pokemon.removeVolatile('flashfire');
		},
		effect: {
			noCopy: true, // doesn't get copied by Baton Pass
			onStart(target) {
				this.add('-start', target, 'ability: Flash Fire');
},
	"purepower": {
		shortDesc: "This Pokemon's Special Attack is doubled.",
		onModifySpAPriority: 5,
		onModifySpA(spa) {
			return this.chainModify(2);
		},
		id: "purepower",
		name: "Pure Power",
		rating: 5,
		num: 74,
},
	"fluffy": {
		desc: "This Pokemon receives 1/2 damage from contact moves, but double damage from Fire moves. Immune to Hail.",
		shortDesc: "This Pokemon takes 1/2 damage from contact moves, 2x damage from Fire moves.",
		onSourceModifyDamage(damage, source, target, move) {
			let mod = 1;
			if (move.type === 'Fire') mod *= 2;
			if (move.flags['contact']) mod /= 2;
			return this.chainModify(mod);
},
		onTryHitPriority: 1,
		onTryHit(target, source, move) {
			if (move.flags['hail'] && target !== source && this.getImmunity('hail', target)) {
				this.add('-immune', target, '[from] ability: Fluffy');
				return null;
			}
		},
		id: "fluffy",
		name: "Fluffy",
		rating: 2.5,
		num: 218,
},
	"furcoat": {
		shortDesc: "This Pokemon's Defense is doubled. Immune to Hail.",
		onModifyDefPriority: 6,
		onModifyDef(def) {
			return this.chainModify(2);
},
		onTryHitPriority: 1,
		onTryHit(target, source, move) {
			if (move.flags['hail'] && target !== source && this.getImmunity('hail', target)) {
				this.add('-immune', target, '[from] ability: Fur Coat');
				return null;
			}
		},
		id: "furcoat",
		name: "Fur Coat",
		rating: 3.5,
		num: 169,
},
	"slowstart": {
		shortDesc: "On switch-in, this Pokemon's Speed is halved for 5 turns.",
		onStart(pokemon) {
			pokemon.addVolatile('slowstart');
		},
		onEnd(pokemon) {
			delete pokemon.volatiles['slowstart'];
			this.add('-end', pokemon, 'Slow Start', '[silent]');
		},
		effect: {
			duration: 5,
			onStart(target) {
				this.add('-start', target, 'ability: Slow Start');
			},
			onModifySpe(spe, pokemon) {
				return this.chainModify(0.5);
			},
			onEnd(target) {
				this.add('-end', target, 'Slow Start');
			},
		},
		id: "slowstart",
		name: "Slow Start",
		rating: -2,
		num: 112,
},
	"realitybender": {
		shortDesc: "On switch-in, this Pokemon summons Magic Room.",
		onStart(source) {
			this.field.setTerrain('magicroom');
		},
		id: "realitybender",
		name: "Reality Bender",
		rating: 3,
		num: 304,
},
	"blubberbounce": {
		desc: "This Pokemon blocks certain status moves and instead uses the move against the original user.",
		shortDesc: "This Pokemon blocks certain status moves and bounces them back to the user.",
		id: "blubberbounce",
		name: "Blubber Bounce",
		onTryHitPriority: 1,
		onTryHit(target, source, move) {
			if (target === source || move.hasBounced || !move.flags['reflectable']) {
				return;
			}
			let newMove = this.getActiveMove(move.id);
			newMove.hasBounced = true;
			newMove.pranksterBoosted = false;
			this.useMove(newMove, target, source);
			return null;
		},
		onAllyTryHitSide(target, source, move) {
			if (target.side === source.side || move.hasBounced || !move.flags['reflectable']) {
				return;
			}
			let newMove = this.getActiveMove(move.id);
			newMove.hasBounced = true;
			newMove.pranksterBoosted = false;
			this.useMove(newMove, this.effectData.target, source);
			return null;
		},
		effect: {
			duration: 1,
		},
		rating: 4.5,
		num: 304,
},
	"hunter": {
		desc: "Prevents adjacent opposing Pokemon from choosing to switch out if they are afflicted by a major status condition.",
		shortDesc: "Prevents adjacent foes from choosing to switch if they are statused.",
		onFoeTrapPokemon(pokemon) {
			if (!this.isAdjacent(pokemon, this.effectData.target)) return;
			if (target && ['psn', 'tox', "brn", "slp", "par"].includes(target.status)) return 5;
				pokemon.tryTrap(true);
			}
		},
		id: "hunter",
		name: "Hunter",
		rating: 3,
		num: 305,
},
    "heatproof": {
        desc: "This Pokemon is immune to Fire-type attacks.",
onTryHit(target, source, move) {
            if (target !== source && move.type === 'Fire') {
                move.accuracy = true;
                if (!target.addVolatile('flashfire')) {
                    this.add('-immune', target, '[from] ability: Heatproof');
                }
                return null;
		}
},
		id: "heatproof",
		name: "Heatproof",
		rating: 3,
		num: 85,
},
	"soothingaura": {
		desc: "On switch-in, this Pokemon lowers the Special Attack of adjacent opposing Pokemon by 1 stage. Pokemon behind a substitute are immune.",
		shortDesc: "On switch-in, this Pokemon lowers the Special Attack of adjacent opponents by 1 stage.",
		onStart(pokemon) {
			let activated = false;
			for (const target of pokemon.side.foe.active) {
				if (!target || !this.isAdjacent(target, pokemon)) continue;
				if (!activated) {
					this.add('-ability', pokemon, 'Soothing Aura', 'boost');
					activated = true;
				}
				if (target.volatiles['substitute']) {
					this.add('-immune', target);
				} else {
					this.boost({spa: -1}, target, pokemon);
				}
			}
		},
		id: "soothingaura",
		name: "Soothing Aura",
		rating: 3.5,
		num: 306,
},
	"deadzone": {
		num: 507,
		accuracy: 100,
		basePower: 90,
		category: "Physical",
		shortDesc: "User and foe go down turn 1. Damages on turn 2 and applies Perish Song.",
		id: "deadzone",
		name: "Dead Zone",
		pp: 10,
		priority: 0,
		flags: {contact: 1, charge: 1, protect: 1, mirror: 1, gravity: 1, distance: 1},
		onModifyMove(move, source) {
			if (!source.volatiles['deadzone']) {
				move.accuracy = true;
				move.flags.contact = 0;
			}
		},
		onMoveFail(target, source) {
			if (source.volatiles['twoturnmove'] && source.volatiles['twoturnmove'].duration === 1) {
				source.removeVolatile('skydrop');
				source.removeVolatile('twoturnmove');
				this.add('-end', target, 'Dead Zone', '[interrupt]');
			}
		},
		onTryHit(target, source, move) {
			if (target.fainted) return false;
			if (source.removeVolatile(move.id)) {
				if (target !== source.volatiles['twoturnmove'].source) return false;
			} else {
				if (target.volatiles['substitute'] || target.side === source.side) {
					return false;
				this.add('-prepare', source, move.name, target);
				source.addVolatile('twoturnmove', target);
				return null;
				}
			}
		},
		onHit(target, source) {
			this.add('-end', target, 'Dead Zone');
		secondary: {
			chance: 100,
		pokemon.addVolatile('perishsong');
					this.add('-start', pokemon, 'perish3', '[silent]');
					result = true;
					message = true;
			}
		},
		effect: {
			duration: 2,
			onAnyDragOut(pokemon) {
				if (pokemon === this.effectData.target || pokemon === this.effectData.source) return false;
			},
			onFoeTrapPokemonPriority: -15,
			onFoeTrapPokemon(defender) {
				if (defender !== this.effectData.source) return;
				defender.trapped = true;
			},
			onFoeBeforeMovePriority: 12,
			onFoeBeforeMove(attacker, defender, move) {
				if (attacker === this.effectData.source) {
					this.effectData.source.activeTurns--;
					this.debug('Dead zone nullifying.');
					return null;
				}
			},
			onRedirectTargetPriority: 99,
			onRedirectTarget(target, source, source2) {
				if (source !== this.effectData.target) return;
				if (this.effectData.source.fainted) return;
				return this.effectData.source;
			},
			onAnyTryImmunity(target, source, move) {
				if (target !== this.effectData.target && target !== this.effectData.source) {
					return;
				}
				if (source === this.effectData.target && target === this.effectData.source) {
					return;
				}
				if (move.id === 'gust' || move.id === 'twister') {
					return;
				}
				if (move.id === 'skyuppercut' || move.id === 'thunder' || move.id === 'hurricane' || move.id === 'smackdown' || move.id === 'thousandarrows' || move.id === 'helpinghand') {
					return;
				}
				if (source.hasAbility('noguard') || target.hasAbility('noguard')) {
					return;
				}
				if (source.volatiles['lockon'] && target === source.volatiles['lockon'].source) return;
				return false;
			},
			onAnyBasePower(basePower, target, source, move) {
				if (target !== this.effectData.target && target !== this.effectData.source) {
					return;
				}
				if (source === this.effectData.target && target === this.effectData.source) {
					return;
				}
				if (move.id === 'gust' || move.id === 'twister') {
					return this.chainModify(2);
				}
			},
			onFaint(target) {
				if (target.volatiles['skydrop'] && target.volatiles['twoturnmove'].source) {
					this.add('-end', target.volatiles['twoturnmove'].source, 'Sky Drop', '[interrupt]');
				}
			},
		},
		secondary: null,
		target: "any",
		type: "Ghost",
		zMovePower: 120,
		contestType: "Tough",
			},
		},
	},
};

exports.BattleAbilities = BattleAbilities;
