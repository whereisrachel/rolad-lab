# Learned scoring — findlist-1100
2026-11-26T17:25:22.318Z

- Samples (opponent turns played into your boards): **1140**; features: 45
- How well it predicts the result after their turn (cross-validated correlation): **0.574**  vs the hand-set turn-1 score: **0.575**
- Not better than the hand-set scoring yet — needs more data.

## What helps you survive their turn (value per copy, in board points)
| feature | value | samples |
|---|---|---|
| Artmage Diactorus (monster) | +1.726 | 731 |
| Ash Blossom & Joyous Spring (in hand) | +0.953 | 1112 |
| Medicurius the Power Patron of Illusions (monster) | +0.91 | 837 |
| each card on field | +0.779 | 1140 |
| Artmage Finmel (monster) | +0.733 | 99 |
| Droll & Lock Bird (in hand) | +0.7 | 1009 |
| Ghost Ogre & Snow Rabbit (in hand) | +0.674 | 955 |
| Magician of Dark Chaos - Black Chaos (monster) | +0.523 | 322 |
| Artmage Impasto -Recapture- (set) | +0.52 | 780 |
| Black Chaos (in hand) | +0.515 | 27 |
| Infinite Impermanence (set) | +0.508 | 71 |
| Infinite Impermanence (in hand) | +0.39 | 110 |
| Fiendsmith's Requiem (face-up spell/trap) | +0.329 | 116 |
| Magician of Dark Chaos - Black Chaos (in hand) | +0.308 | 19 |
| Black Luster Soldier - Soldier of Light and Darkness (in hand) | +0.201 | 21 |
| Junora the Power Patron of Tuning (monster) | +0.195 | 118 |
| Theorealize Past Lull (in hand) | +0.175 | 16 |
| Mind Shuffle (face-up spell/trap) | +0.151 | 465 |
| each card in GY | +0.136 | 1140 |
| Theorealize Medius (in hand) | +0.12 | 32 |
| Fiendsmith's Sequence (face-up spell/trap) | +0.118 | 190 |
| each card in hand | +0.106 | 1140 |
| Purification Power Patron (monster) | +0.072 | 16 |
| Nerva the Power Patron of Creation (monster) | +0.002 | 656 |
| Griffoh (in hand) | -0.003 | 40 |

## What hurts
| feature | value | samples |
|---|---|---|
| Medius the Pure (monster) | -1.329 | 63 |
| Apprentice Illusion Magician (in hand) | -0.725 | 36 |
| Nervedo the Shadebeast Power Patron (in hand) | -0.664 | 17 |
| Theorealize Liberation (in hand) | -0.64 | 10 |
| Theorealize Medius (monster) | -0.489 | 19 |
| Light and Darkness Ritual (in hand) | -0.418 | 170 |
| Artmage Vandalism -Assault- (face-up spell/trap) | -0.406 | 67 |
| Skull Archfiend of Chaos (in hand) | -0.405 | 252 |
| Ars Magna - "Citrinitas" (face-up spell/trap) | -0.328 | 282 |
| Dark Magical Circle (in hand) | -0.303 | 14 |
| Ars Magna - "Citrinitas" (in hand) | -0.278 | 17 |
| S:P Little Knight (monster) | -0.244 | 407 |
| Ars Magna of Purification and Corruption (monster) | -0.205 | 130 |
| Artmage Graflare (monster) | -0.194 | 124 |
| Dark Magician of Destruction (monster) | -0.164 | 23 |
