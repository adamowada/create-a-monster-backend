"use strict";

// Set up
require("dotenv").config();
const cors = require("cors");
const express = require("express");
const axios = require("axios");
const PORT = process.env.PORT || 3002;
const app = express();
app.use(cors());
app.listen(PORT, () => console.log(`Listening on PORT ${PORT}`));
const { Configuration, OpenAIApi } = require("openai");
const configuration = new Configuration({
  apiKey: process.env.OPENAI_API_KEY,
});
const openai = new OpenAIApi(configuration);
const monsterString = require("./monsterString.js");

// Endpoints
app.get("/", (req, res) => {
  console.log(monsterString);
  res.status(200).send(monsterString);
});

app.get("/monster", async (req, res) => {
//   const formData =
// `{
//   "prompt": "Make a ${req.query.description} monster with cr ${req.query.cr}",
//   "monster": "${req.query.type}",`;
//   const combinedInput = monsterString + formData;
//   const monster = await openai.createCompletion({
//       model: "text-davinci-002",
//       prompt: combinedInput,
//       temperature: 1,
//       max_tokens: 1024,
//       top_p: 1,
//       frequency_penalty: 0,
//       presence_penalty: 0,
//       stop: ["\n\n"],
//     });
//   let combinedResponse = formData + monster.data.choices[0].text;
//   if (combinedResponse[combinedResponse.length - 1] !== '}') {
//     combinedResponse += '}';
//   }

  const spoof =`{
  "prompt": "Make a large and scary monster with cr 6",
  "monster": "Elephant Zombie",
  "size-type-and-alignment": "Huge undead, neutral evil",
  "armor-class": "14 (natural armor)",
  "hit-points": "168 (15d12 + 75)",
  "speed": "40 ft.",
  "stats": {
      "STR": "23 (+6)",
      "DEX": "10 (+0)",
      "CON": "21 (+5)",
      "INT": "3 (-4)",
      "WIS": "11 (+0)",
      "CHA": "5 (- 3)"
  },
  "skills": "Perception +6",
  "saving-throws": "Wis +3",
  "damage-resistances": "bludgeoning, piercing, and slashing from nonmagical weapons",
  "damage-immunities": "poison",
  "damage-vulnerabilities": "",
  "condition-immunities": "poisoned",
  "senses": "darkvision 60 ft., passive Perception 16",
  "languages": "understands the languages it knew in life but can't speak",
  "cr": "6 (2,300 XP)",
  "special-traits": [
      "Undead Fortitude. If damage reduces the elephant zombie to 0 hit points, it must make a Constitution saving throw with a DC of 10 +the damage taken, unless the damage is radiant or from a critical hit. On a success, the zombie drops to 1 hit point instead.",
      "Trampling Charge. If the elephant zombie moves at least 20 feet straight toward a creature and then hits it with a gore attack on the same turn, that target must succeed on a DC 18 Strength saving throw or be knocked prone. If the target is prone, the elephant zombie can make one stomp attack against it as a bonus action."
  ],
  "actions": [
      "Gore. Melee Weapon Attack: +9 to hit, reach 10 ft., one creature. Hit: 24 (3d12 + 6) piercing damage.",
      "Stomp. Melee Weapon Attack: +9 to hit, reach 5 ft., one target. Hit: 22 (3d10 + 6) bludgeoning damage."
  ],
  "describe-how-it-looks-and-acts": "An elephant zombie is a massive undead elephant. Its skin is grey and rotting, and its eyes are white and blank."
}`;

  res.status(201).send(spoof);
  // res.status(201).send(combinedResponse);
});

app.get("*", (req, res) => {
  res.status(404).send("Error Not Found");
});
