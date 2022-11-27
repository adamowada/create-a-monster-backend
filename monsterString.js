const starter = `{
  "prompt": "Make a weak zombie monster with cr 1/4",
  "monster": "Zombie",
  "size-type-and-alignment": "Medium undead, neutral evil",
  "armor-class": "8",
  "hit-points": "22 (3d8 + 9)",
  "speed": "20 ft.",
  "stats": {
    "STR": "13 (+1)",
    "DEX": "6 (-2)",
    "CON": "16 (+3)",
    "INT": "3 (-4)",
    "WIS": "6 (- 2)",
    "CHA": "5 (- 3)"
  },
  "skills": "",
  "saving-throws": "Wis +0",
  "damage-resistances": "",
  "damage-immunities": "poison",
  "damage-vulnerabilities": "",
  "condition-immunities": "poisoned",
  "senses": "darkvision 60 ft., passive Perception 8",
  "languages": "understands the languages it knew in life but can't speak",
  "cr": "1/4 (50 XP)",
  "special-traits": [
    "Undead Fortitude. If damage reduces the zombie to 0 hit points, it must make a Constitution saving throw with a DC of 5 +the damage taken, unless the damage is radiant or from a critical hit. On a success, the zombie drops to 1 hit point instead."
  ],
  "actions": [
    "Slam. Melee Weapon Attack: +3 to hit , reach 5 ft., one target. Hit: 4 (1d6 + 1) bludgeoning damage."
  ],
  "describe-how-it-looks-and-acts": "Clammy flesh falls off as it lumbers forward. Its eyes are blank white and seem to look through you."
}

{
  "prompt": "Make a weak dragon monster with cr 1",
  "monster": "Faerie Dragon",
  "size-type-and-alignment": "Tiny dragon, chaotic good",
  "armor-class": "15",
  "hit-points": "14 (4d4 + 4)",
  "speed": "10ft., fly 60ft.",
  "stats": {
    "STR": "3 (-4)",
    "DEX": "20 (+5)",
    "CON": "13 (+1)",
    "INT": "14 (+2)",
    "WIS": "12 (+1)",
    "CHA": "16 (+3)"
  },
  "skills": "Arcana +4, Perception +3, Stealth +7",
  "saving-throws": "",
  "damage-resistances": "",
  "damage-immunities": "",
  "damage-vulnerabilities": "",
  "condition-immunities": "",
  "senses": "darkvision 60ft., passive Perception 13",
  "languages": "Draconic, Sylvan",
  "cr": "1 (200 XP) for a red, orange, or yellow faerie dragon; 2 (450 XP) for a green, blue, indigo, or violet faerie dragon",
  "special-traits": [
    "Superior Invisibility. As a bonus action, the dragon can magically turn invisible until its concentration ends (as if concentrating on a spell). Any equipment the dragon wears or carries is invisible with it.",
    "Limited Telepathy. Using telepathy, the dragon can magically communicate with any other faerie dragon within 60 feet of it.",
    "Magic Resistance. The dragon has advantage on saving throws against spells and other magical effects.",
    "Innate Spellcasting. The dragon's innate spellcasting ability is Charisma (spell save DC 13). It can innately cast a number of spells, requiring no material components. As the dragon ages and changes color, it gains additional spells as shown below. Red, 1/day each: dancing lights, mage hand, minor illusion Orange, 1/day: color spray Yellow, 1/day: mirror image Green, 1/day: suggestion Blue,1/day: major image Indigo, 1/day: hallucinatory terrain Violet, 1/day: polymorph"
  ],
  "actions": [
    "Bite. Melee Weapon Attack: +7 to hit, reach 5 ft ., one creature. Hit: 1 piercing damage.",
    "Euphoria Breath (Recharge 5-6). The dragon exhales a puff of euphoria gas at one creature within 5 feet of it. The target must succeed on a DC 11 Wisdom saving throw, or for 1 minute, the target can't take reactions and must roll a d6 at the start of each of its turns to determine its behavior during the turn: 1-4. The target takes no action or bonus action and uses all of its movement to move in a random direction. 5- 6. The target doesn't move, and the only thing it can do on its turn is make a DC 11 Wisdom saving throw, ending the effect on itself on a success."
  ],
  "describe-how-it-looks-and-acts": "This dragon has brightly colored scales and scattered gossamer wings. It loves to play tricks on creatures it views as potential prey."
}

{
  "prompt": "Make a medium strong rock monster with cr 6",
  "monster": "Galeb Duhr",
  "size-type-and-alignment": "Medium elemental, neutral",
  "armor-class": "16 (natural armor)",
  "hit-points": "85 (9d8 + 45)",
  "speed": "15ft. (30ft. when rolling, 60ft. rolling downhill)",
  "stats": {
    "STR": "20 (+5)",
    "DEX": "14 (+2)",
    "CON": "20 (+5)",
    "INT": "11 (+0)",
    "WIS": "12 (+1)",
    "CHA": "11 (+0)"
  },
  "skills": "",
  "saving-throws": "",
  "damage-resistances": "bludgeoning, piercing, and slashing from nonmagical weapons",
  "damage-immunities": "poison",
  "damage-vulnerabilities": "",
  "condition-immunities": "exhaustion, paralyzed, poisoned, petrified",
  "senses": "darkvision 60ft., tremorsense 60ft., passive Perception 11",
  "languages": "Terran",
  "cr": "6 (2,300 XP)",
  "special-traits": [
    "False Appearance. While the galeb duhr remains motionless, it is indistinguishable from a normal boulder.",
    "Rolling Charge. If the galeb duhr rolls at least 20 feet straight toward a target and then hits it with a slam attack on the same turn, the target takes an extra 7 (2d6) bludgeoning damage. If the target is a creature, it must succeed on a DC 16 Strength saving throw or be knocked prone."
  ],
  "actions": [
    "Slam. Melee Weapon Attack: +8 to hit, reach 5 ft ., one target. Hit: 12 (2d6 + 5) bludgeoning damage.",
    "Animate Boulders (1/Day). The galeb duhr magically animates up to two boulders it can see within 60 feet of it. A boulder has statistics like those of a galeb duhr, except it has Intelligence 1 and Charisma 1, it can't be charmed or frightened, and it lacks this action option. A boulder remains animated as long as the galeb duhr maintains concentration, up to 1 minute (as if concentrating on a spell)."
  ],
  "describe-how-it-looks-and-acts": "A galeb duhr appears as a large, humanoid boulder covered in moss and lichens. It moves slowly but steadily, rolling over anything in its path."
}

{
  "prompt": "Make a funny strong monster with cr 15",
  "monster": "Rubber Chicken",
  "size-type-and-alignment": "Gargantuan beast, unaligned",
  "armor-class": "12",
  "hit-points": "175 (14d20 + 70)",
  "speed": "40 ft., fly 80 ft.",
  "stats": {
    "STR": "28 (+9)",
    "DEX": "15 (+2)",
    "CON": "25 (+7)",
    "INT": "3 (-4)",
    "WIS": "12 (+1)",
    "CHA": "7 (-2)"
  },
  "skills": "Comicsense +20",
  "saving-throws": "",
  "damage-resistances": "bludgeoning, piercing, and slashing from nonmagical weapons",
  "damage-immunities": "fire, poison",
  "damage-vulnerabilities": "",
  "condition-immunities": "charmed, frightened, paralyzed, petrified",
  "senses": "darkvision 60 ft., passive Perception 11",
  "languages": "Cluck",
  "cr": "15 (13,000 XP)",
  "special-traits": [
    "Chick Magnet. The rubber chicken is attracted to shiny things and will often go after creatures that are wearing armor or carrying weapons.",
    "Lucky. The rubber chicken is incredibly lucky and as a result, has advantage on all saving throws.",
    "Unpredictable. The rubber chicken is very unpredictable and as a result, has advantage on all attack rolls."
  ],
  "actions": [
    "Peck. Melee Weapon Attack: +16 to hit, reach 20 ft., one target. Hit: 18 (2d8 + 9) bludgeoning damage.",
    "Stampede (1/Day). The rubber chicken stampedes towards a creature it can see within 30 feet of it. The creature must make a DC 20 Dexterity saving throw. On a failed save, the creature is knocked prone and takes 42 (12d6) bludgeoning damage. On a successful save, the creature takes half as much damage.",
    "Flock of Chickens (1/Day). The rubber chicken summons a flock of chickens (stats as rubber chickens) to fight for it. The chickens remain for 1 minute or until the rubber chicken is killed."
  ],
  "describe-how-it-looks-and-acts": "The rubber chicken is a giant chicken made out of rubber. It is often used as a prop in comedies and is known for its comedic and unpredictable nature."
}

`;

module.exports = starter;