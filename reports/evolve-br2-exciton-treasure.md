# Evolved lines — Pendulum Treasure, Ash Blossom & Joyous Spring, Ash Blossom & Joyous Spring, Infinite Impermanence, Dark Magical Circle (br-exciton)
2026-11-26T16:53:18.157Z

4 deck orders (different face-down banishes / draws), 3 opponent hands x o_ss_panama + o_elfnote + o_despia + o_angelechy per line, 5 min searches, 4 mutation rounds.
Fitness = end-board interruptions (the lab scorer, src/disrupt.mjs: wipe 2, negate 1-1.5, banish/protection less; hand traps kept count 1 each). The winner of each order is also played into the opponent decks: margin after their turn shown beside it.

**Margin after their turn (winners): average null** (worst 99)

**Best line per deck order: average 12.31** (worst order 11.1). Winner came from: tries Activate Artmage Vandalism -Assault- → new ending 1, forced Activate Artmage Non-Finito 1, tries Activate Nervedo the Shadebeast Power Patron → new ending 1, tries Activate Prohibited Power Patron Portal - Terminus 1

## Weak points found automatically
Cards whose face-down banish (by your own costs) hurt the best line most (average best line without vs with that card banished):

| card | orders where it was banished | drop |
|---|---|---|
| Mind Shuffle | 2/4 | 1.23 |
| Skull Archfiend of Chaos | 2/4 | 1.23 |
| Light and Darkness Ritual | 2/4 | 1.23 |
| Prohibited Power Patron Portal - Terminus | 2/4 | 1.23 |
| Artmage Impasto -Recapture- | 2/4 | 1.23 |
| Fiendsmith Engraver | 3/4 | 0.92 |
| Black Chaos | 3/4 | 0.92 |
| Theorealize Past Lull | 2/4 | 0.68 |
| Black Luster Soldier - Soldier of Light and Darkness | 2/4 | 0.52 |
| Vidolium the Unstable Power Patron of Unity | 2/4 | 0.52 |

List changes proposed for the list test (data/proposals-br-exciton.json):
- +1 Mind Shuffle, −1 Plundered Power Patron Plane - Vidolia — Mind Shuffle: best line 1.23 worse when a cost banished it (2 of 4 orders) — Pendulum Treasure
- +1 Skull Archfiend of Chaos, −1 Artmage Vandalism -Assault- — Skull Archfiend of Chaos: best line 1.23 worse when a cost banished it (2 of 4 orders) — Pendulum Treasure
- +1 Light and Darkness Ritual, −1 Small World — Light and Darkness Ritual: best line 1.23 worse when a cost banished it (2 of 4 orders) — Pendulum Treasure
- +1 Prohibited Power Patron Portal - Terminus, −1 Plundered Power Patron Plane - Vidolia — Prohibited Power Patron Portal - Terminus: best line 1.23 worse when a cost banished it (2 of 4 orders) — Pendulum Treasure
- +1 Mind Shuffle — Mind Shuffle: best line 1.23 worse when a cost banished it (2 of 4 orders) — Pendulum Treasure (add only: deck grows, up to 60)
- +1 Skull Archfiend of Chaos — Skull Archfiend of Chaos: best line 1.23 worse when a cost banished it (2 of 4 orders) — Pendulum Treasure (add only: deck grows, up to 60)
- +1 Light and Darkness Ritual — Light and Darkness Ritual: best line 1.23 worse when a cost banished it (2 of 4 orders) — Pendulum Treasure (add only: deck grows, up to 60)
- +1 Prohibited Power Patron Portal - Terminus — Prohibited Power Patron Portal - Terminus: best line 1.23 worse when a cost banished it (2 of 4 orders) — Pendulum Treasure (add only: deck grows, up to 60)

Effects the search had not used, tried on purpose (best result so far):
- Activate Artmage Vandalism -Assault-: 12.8
- Activate Nervedo the Shadebeast Power Patron: 12.55
- Activate Prohibited Power Patron Portal - Terminus: 12.3
- Normal Summon Theorealize Medius: 11.8
- Activate Junoldo the Shadespirit Power Patron: 11.65
- Link Summon Medicurius the Power Patron of Illusions: 11.5
- Activate Ars Magna of Infinity and Finity: 10.65
- Activate Artmage Vandalism -Assault-: 10.55

## Order 1: best 12.85 (, worst 12.85) — from tries Activate Artmage Vandalism -Assault- → new ending
Others: tries Activate Artmage Vandalism -Assault- → new ending → new ending 12.85 · tries Activate Artmage Vandalism -Assault- 12.8 · search 12.65 · forced Xyz Summon Evilswarm Exciton Knight 11.75 · tries Activate Ars Magna of Infinity and Finity 10.65 · tries Activate Artmage Vandalism -Assault- 10.55 · tries Activate Artmage Vandalism -Assault- → new ending → new early order 10.2 · forced Activate Theorealize Liberation 9.75 · forced Link Summon Fiendsmith's Requiem 8.8 · forced Activate Artmage Non-Finito 8.05 · forced Fusion Summon Berfomet 6.95 · tries Link Summon S 6.6 · opening lanes 6.6 · forced Activate Griffoh 6.6 · tries Activate Artmage Vandalism -Assault- → new ending → new early order 4.7

1. Activate Pendulum Treasure (hand): Add to Extra Deck
2. Selected Vidolium the Unstable Power Patron of Unity (Deck)
3. Yes
4. Selected Nervedo the Shadebeast Power Patron (Deck)
5. Special Summon (procedure) Artmage Non-Finito (Extra Deck)
6. Selected Dark Magical Circle (hand)
7. Selected Nervedo the Shadebeast Power Patron (hand)
8. Yes
9. Selected Artmage Vandalism -Assault- (Deck)
10. Activate Artmage Vandalism -Assault- (S1): When this card is activated: You can add 1 "Medius the Pure" from your Deck to your hand
11. Yes
12. Selected Medius the Pure (Deck)
13. Normal Summon Medius the Pure (hand)
14. Yes
15. Selected Junoldo the Shadespirit Power Patron (Deck)
16. Special Summon it
17. Activate Artmage Vandalism -Assault- (S1): Make 1 face-up monster you control able to be treated as an "Artmage" monster if used as Fusion Material
18. Selected Medius the Pure (M1)
19. Activate Junoldo the Shadespirit Power Patron (M5): Special Summon 1 "Junora the Power Patron of Tuning" from your Extra Deck
20. Selected Junora the Power Patron of Tuning (Extra Deck)
21. Yes
22. Selected Vidolium the Unstable Power Patron of Unity (Extra Deck)
23. Activate Vidolium the Unstable Power Patron of Unity (hand): Activate it as a Pendulum Spell
24. Activate Vidolium the Unstable Power Patron of Unity (S5): Activate 1 of these effects
25. Special Summon 1 "Power Patron" monster
26. Selected Nervedo the Shadebeast Power Patron (GY)
27. Link Summon Purification Power Patron (Extra Deck)
28. select Medius the Pure (M1)
29. select Junora the Power Patron of Tuning (EMZ-R)
30. Yes
31. Selected Theorealize Medius (Deck)
32. Activate Nervedo the Shadebeast Power Patron (M2): Special Summon 1 "Nerva the Power Patron of Creation" from your Extra Deck
33. Selected Nerva the Power Patron of Creation (Extra Deck)
34. Yes
35. Selected Artmage Graflare (Deck)
36. Activate Medius the Pure (GY): Shuffle 1 monster from your hand or face-up field into the Deck, and if you do, Special Summon this card
37. Selected Ash Blossom & Joyous Spring (hand)
38. Activate Theorealize Medius (hand): If a "Power Patron" card is on the field: You can Special Summon this card from your hand, then you can add 1 "Theorealize" Spell/Trap from your Deck to your hand
39. Yes
40. Selected Theorealize Liberation (Deck)
41. Activate Theorealize Liberation (hand): Add to your hand, or Special Summon, 1 monster from your Deck with 300 ATK/200 DEF
42. Selected Griffoh (Deck)
43. Add the card(s) to your hand
44. Activate Griffoh (hand): Activate 1 of these effects
45. Set 1 card that mentions "Light and Darkness Ritual"
46. Activate Purification Power Patron (EMZ-R): Link Summon including this card as material
47. Selected Medicurius the Power Patron of Illusions (Extra Deck)
48. select Medius the Pure (M5)
49. Finish selection
50. Selected Mind Shuffle (Deck)
51. Yes
52. Special Summon 1 "Diactorus" monster
53. Selected Artmage Diactorus (Extra Deck)
54. Activate Mind Shuffle (S2): activate this card
55. Yes
56. Selected Skull Archfiend of Chaos (Deck)
57. Selected Skull Archfiend of Chaos (hand)
58. Yes
59. Selected Light and Darkness Ritual (Deck)
60. Selected Magician of Dark Chaos - Black Chaos (Deck)
61. Activate Light and Darkness Ritual (GY): Add both this card and 1 card that mentions "Light and Darkness Ritual" from your GY to your hand
62. Selected Skull Archfiend of Chaos (GY)
63. Activate Artmage Diactorus (M3): Change the battle position of 1 monster on the field
64. Selected Artmage Diactorus (M3)
65. Activate Light and Darkness Ritual (hand): Ritual Summon 1 "Magician of Dark Chaos - Black Chaos" or "Black Luster Soldier - Soldier of Light and Darkness" from your hand
66. Selected Magician of Dark Chaos - Black Chaos (hand)
67. Selected Griffoh (GY) value 8 or 1
68. Yes
69. Selected Theorealize Liberation (GY)

End board:  LP 8000 | Hand 4 | Deck 24 | Extra 12 | GY 5 | Banished 9   Monsters: M1: Nerva the Power Patron of Creation Lv10 3300/3300 ATK || M2: Artmage Graflare Lv5 2100/1500 ATK || M3: Artmage Diactorus Lv8 2800/2500 DEF || M4: Artmage Non-Finito Lv7 2400/1500 ATK || M5: Magician of Dark Chaos - Black Chaos Lv8 2800/2600 ATK || EMZ-L: Medicurius the Power Patron of Illusions L3↙↓↘ 3000    Spell/Trap: S1: Artmage Vandalism -Assault- || S2: Mind Shuffle   GY: Pendulum Treasure, Dark Magical Circle, Junora the Power Patron of Tuning, Purification Power Patron, Light and Darkness Ritual   Banished: Ars Magna of Purification and Corruption (face-down), Pendulum Treasure (face-down), Fiendsmith Engraver 

## Order 2: best 11.1 (, worst 11.1) — from forced Activate Artmage Non-Finito
Others: forced Activate Artmage Non-Finito → new early order 11.1 · forced Activate Artmage Non-Finito → new early order 11.1 · forced Activate Artmage Non-Finito → new ending 10.8 · forced Activate Griffoh 10.5 · tries Activate Ars Magna - "Citrinitas" 10.45 · tries Activate Ars Magna - "Citrinitas" 10 · forced Fusion Summon Berfomet 9.75 · search 9.25 · forced Link Summon Fiendsmith's Requiem 8.2 · forced Xyz Summon Evilswarm Exciton Knight 7.95 · tries Activate Plundered Power Patron Plane - Vidolia 7 · tries Activate Plundered Power Patron Plane - Vidolia 7 · opening lanes 6.6 · forced Activate Theorealize Liberation 6.6

1. Activate Pendulum Treasure (hand): Add to Extra Deck
2. Selected Nervedo the Shadebeast Power Patron (Deck)
3. Yes
4. Selected Junoldo the Shadespirit Power Patron (Deck)
5. Activate Junoldo the Shadespirit Power Patron (M3): Special Summon 1 "Junora the Power Patron of Tuning" from your Extra Deck
6. Selected Junora the Power Patron of Tuning (Extra Deck)
7. Yes
8. Selected Nervedo the Shadebeast Power Patron (Extra Deck)
9. Special Summon (procedure) Artmage Non-Finito (Extra Deck)
10. Selected Dark Magical Circle (hand)
11. Selected Nervedo the Shadebeast Power Patron (hand)
12. Yes
13. Selected Artmage Impasto -Recapture- (Deck)
14. Normal Summon Ash Blossom & Joyous Spring (hand)
15. Link Summon Purification Power Patron (Extra Deck)
16. select Junora the Power Patron of Tuning (M4)
17. select Ash Blossom & Joyous Spring (M5)
18. Yes
19. Selected Theorealize Medius (Deck)
20. Activate Theorealize Medius (hand): If a "Power Patron" card is on the field: You can Special Summon this card from your hand, then you can add 1 "Theorealize" Spell/Trap from your Deck to your hand
21. Yes
22. Selected Theorealize Past Lull (Deck)
23. Activate Theorealize Past Lull (hand): Special Summon 1 "Medius the Pure" from your hand or Deck
24. Selected Medius the Pure (Deck)
25. Yes
26. Activate Purification Power Patron (EMZ-L): Link Summon including this card as material
27. Selected Medicurius the Power Patron of Illusions (Extra Deck)
28. select Medius the Pure (M1)
29. Finish selection
30. Selected Vidolium the Unstable Power Patron of Unity (Deck)
31. Add the card(s) to your hand
32. Activate Vidolium the Unstable Power Patron of Unity (hand): Activate it as a Pendulum Spell
33. Activate Vidolium the Unstable Power Patron of Unity (S5): Activate 1 of these effects
34. Special Summon 1 "Power Patron" monster
35. Selected Nervedo the Shadebeast Power Patron (GY)
36. Yes
37. Selected Theorealize Medius (Deck)
38. Activate Medius the Pure (GY): Shuffle 1 monster from your hand or face-up field into the Deck, and if you do, Special Summon this card
39. Selected Theorealize Medius (hand)
40. Activate Nervedo the Shadebeast Power Patron (M1): Special Summon 1 "Nerva the Power Patron of Creation" from your Extra Deck
41. Selected Nerva the Power Patron of Creation (Extra Deck)
42. Link Summon S:P Little Knight (Extra Deck)
43. select Nerva the Power Patron of Creation (M5)
44. select Medius the Pure (M4)
45. Yes
46. Special Summon 1 "Diactorus" monster
47. Activate S:P Little Knight (M1): Banish 1 card on the field or GY
48. Selected Purification Power Patron (GY)
49. Selected Artmage Diactorus (Extra Deck)

End board:  LP 8000 | Hand 2 | Deck 29 | Extra 11 | GY 6 | Banished 9   Monsters: M1: S:P Little Knight L2←→ 1600  || M2: Artmage Diactorus Lv8 2800/2500 ATK || M3: Artmage Non-Finito Lv7 2400/1500 ATK || EMZ-L: Medicurius the Power Patron of Illusions L3↙↓↘ 3000    Spell/Trap: S1: Artmage Impasto -Recapture- (Set)   GY: Pendulum Treasure, Dark Magical Circle, Junora the Power Patron of Tuning, Ash Blossom & Joyous Spring, Theorealize Past Lull, Nerva the Power Patron of Creation   Banished: Mind Shuffle (face-down), Skull Archfiend of Chaos (face-down), Light and Darkness Ritual (face-down), Medius the Pure (face-down), Ars Magna of Purification and Corruption (face-down), Black Luster Soldier - Soldi

## Order 3: best 13 (, worst 13) — from tries Activate Nervedo the Shadebeast Power Patron → new ending
Others: tries Activate Nervedo the Shadebeast Power Patron 12.55 · tries Normal Summon Theorealize Medius 11.8 · forced Activate Griffoh 11.55 · tries Link Summon Medicurius the Power Patron of Illusions 11.5 · forced Activate Artmage Non-Finito 11.45 · forced Fusion Summon Berfomet 10.8 · forced Activate Theorealize Liberation 10.15 · forced Link Summon Fiendsmith's Requiem 10.1 · tries Activate Junoldo the Shadespirit Power Patron 9.75 · tries Activate Nervedo the Shadebeast Power Patron → new early order 9.75 · tries Activate Nervedo the Shadebeast Power Patron → new ending → new early order 8.75 · forced Xyz Summon Evilswarm Exciton Knight 8.2 · search 6.6 · opening lanes 6.6

1. Activate Pendulum Treasure (hand): Add to Extra Deck
2. Selected Nervedo the Shadebeast Power Patron (Deck)
3. Yes
4. Selected Junoldo the Shadespirit Power Patron (Deck)
5. Activate Junoldo the Shadespirit Power Patron (M4): Special Summon 1 "Junora the Power Patron of Tuning" from your Extra Deck
6. Selected Junora the Power Patron of Tuning (Extra Deck)
7. Yes
8. Selected Nervedo the Shadebeast Power Patron (Extra Deck)
9. Special Summon (procedure) Artmage Non-Finito (Extra Deck)
10. Selected Dark Magical Circle (hand)
11. Selected Nervedo the Shadebeast Power Patron (hand)
12. Yes
13. Selected Artmage Impasto -Recapture- (Deck)
14. Normal Summon Ash Blossom & Joyous Spring (hand)
15. Link Summon Purification Power Patron (Extra Deck)
16. select Junora the Power Patron of Tuning (EMZ-R)
17. select Ash Blossom & Joyous Spring (M2)
18. Yes
19. Selected Theorealize Past Lull (Deck)
20. Set Spell/Trap Theorealize Past Lull
21. Activate Theorealize Past Lull (S2): Special Summon 1 "Medius the Pure" from your hand or Deck
22. Selected Medius the Pure (Deck)
23. Yes
24. Selected Vidolium the Unstable Power Patron of Unity (Deck)
25. Add the card(s) to your hand
26. Activate Purification Power Patron (EMZ-R): Link Summon including this card as material
27. Selected Medicurius the Power Patron of Illusions (Extra Deck)
28. select Artmage Non-Finito (M1)
29. Finish selection
30. Activate Vidolium the Unstable Power Patron of Unity (hand): Activate it as a Pendulum Spell
31. Activate Vidolium the Unstable Power Patron of Unity (S5): Activate 1 of these effects
32. Special Summon 1 "Power Patron" monster
33. Selected Nervedo the Shadebeast Power Patron (GY)
34. Yes
35. Selected Prohibited Power Patron Portal - Terminus (Deck)
36. Activate Nervedo the Shadebeast Power Patron (M1): Special Summon 1 "Nerva the Power Patron of Creation" from your Extra Deck
37. Selected Nerva the Power Patron of Creation (Extra Deck)
38. Activate Prohibited Power Patron Portal - Terminus (hand): Send 1 "Power Patron" monster from your Deck or Extra Deck to the GY, then you can add 1 DARK Fairy monster from your Deck to your hand
39. Selected Purification Power Patron (Extra Deck)
40. Yes
41. Selected Theorealize Medius (Deck)
42. Activate Theorealize Medius (hand): If a "Power Patron" card is on the field: You can Special Summon this card from your hand, then you can add 1 "Theorealize" Spell/Trap from your Deck to your hand
43. Yes
44. Selected Theorealize Liberation (Deck)
45. Activate Theorealize Liberation (hand): Add to your hand, or Special Summon, 1 monster from your Deck with 300 ATK/200 DEF
46. Selected Griffoh (Deck)
47. Add the card(s) to your hand
48. Activate Theorealize Liberation (GY): Treat 1 monster you control as a Tuner this turn
49. Selected Medius the Pure (M3)
50. Activate Griffoh (hand): Activate 1 of these effects
51. Set 1 card that mentions "Light and Darkness Ritual"
52. Selected Mind Shuffle (Deck)
53. Activate Mind Shuffle (S2): activate this card
54. Yes
55. Selected Skull Archfiend of Chaos (Deck)
56. Selected Skull Archfiend of Chaos (hand)
57. Yes
58. Selected Light and Darkness Ritual (Deck)
59. Selected Magician of Dark Chaos - Black Chaos (Deck)
60. Activate Light and Darkness Ritual (GY): Add both this card and 1 card that mentions "Light and Darkness Ritual" from your GY to your hand
61. Selected Skull Archfiend of Chaos (GY)
62. Activate Light and Darkness Ritual (hand): Ritual Summon 1 "Magician of Dark Chaos - Black Chaos" or "Black Luster Soldier - Soldier of Light and Darkness" from your hand
63. Selected Magician of Dark Chaos - Black Chaos (hand)
64. Selected Griffoh (GY) value 8 or 1
65. Yes
66. Special Summon 1 "Diactorus" monster
67. Activate Magician of Dark Chaos - Black Chaos (M1): Add 1 Spell from your GY to your hand
68. Selected Prohibited Power Patron Portal - Terminus (GY)
69. Selected Artmage Diactorus (Extra Deck)
70. Activate Skull Archfiend of Chaos (hand): Special Summon this card
71. select Theorealize Past Lull (GY)
72. select Light and Darkness Ritual (GY)
73. select Purification Power Patron (GY)
74. Default order
75. Activate Artmage Diactorus (M2): Change the battle position of 1 monster on the field
76. Selected Nerva the Power Patron of Creation (M4)
77. Link Summon S:P Little Knight (Extra Deck)
78. select Skull Archfiend of Chaos (M5)
79. select Medius the Pure (M3)

End board:  LP 8000 | Hand 3 | Deck 24 | Extra 11 | GY 8 | Banished 9   Monsters: M1: Magician of Dark Chaos - Black Chaos Lv8 2800/2600 ATK || M2: Artmage Diactorus Lv8 2800/2500 ATK || M3: S:P Little Knight L2←→ 1600  || M4: Nerva the Power Patron of Creation Lv10 3300/3300 DEF || EMZ-L: Medicurius the Power Patron of Illusions L3↙↓↘ 3000    Spell/Trap: S1: Artmage Impasto -Recapture- (Set) || S2: Mind Shuffle   GY: Pendulum Treasure, Dark Magical Circle, Ash Blossom & Joyous Spring, Junora the Power Patron of Tuning, Artmage Non-Finito, Purification Power Patron, Medius the Pure, Skull Archfiend of Chaos   Banished: Artmage Vandalism -Assault- (face-down), Artmage Graflare (face-down), Pendulum Trea

## Order 4: best 12.3 (, worst 12.3) — from tries Activate Prohibited Power Patron Portal - Terminus
Others: tries Activate Prohibited Power Patron Portal - Terminus → new ending 12.3 · tries Activate Prohibited Power Patron Portal - Terminus → new ending 12.3 · forced Activate Theorealize Liberation 11.7 · tries Activate Junoldo the Shadespirit Power Patron 11.65 · forced Activate Artmage Non-Finito 10.8 · forced Xyz Summon Evilswarm Exciton Knight 10.6 · forced Activate Griffoh 10.4 · tries Activate Prohibited Power Patron Portal - Terminus → new early order 10.2 · tries Link Summon Purification Power Patron 9.75 · tries Activate Dark Magical Circle 9.5 · forced Link Summon Fiendsmith's Requiem 9.05 · forced Fusion Summon Berfomet 8 · search 6.6 · opening lanes 6.6 · tries Activate Prohibited Power Patron Portal - Terminus → new early order 4.53

1. Set Spell/Trap Pendulum Treasure
2. Activate Pendulum Treasure (S1): Add to Extra Deck
3. Selected Vidolium the Unstable Power Patron of Unity (Deck)
4. Yes
5. Selected Prohibited Power Patron Portal - Terminus (Deck)
6. Activate Prohibited Power Patron Portal - Terminus (hand): Send 1 "Power Patron" monster from your Deck or Extra Deck to the GY, then you can add 1 DARK Fairy monster from your Deck to your hand
7. Selected Nervedo the Shadebeast Power Patron (Deck)
8. Yes
9. Selected Medius the Pure (Deck)
10. Normal Summon Medius the Pure (hand)
11. Yes
12. Selected Junoldo the Shadespirit Power Patron (Deck)
13. Special Summon it
14. Link Summon Purification Power Patron (Extra Deck)
15. select Medius the Pure (M1)
16. select Junoldo the Shadespirit Power Patron (M3)
17. Yes
18. Activate Purification Power Patron (EMZ-L): Add 1 "Theorealize" card from your Deck to your hand
19. Selected Theorealize Medius (Deck)
20. Selected Nervedo the Shadebeast Power Patron (GY)
21. Special Summon (procedure) Artmage Non-Finito (Extra Deck)
22. Selected Dark Magical Circle (hand)
23. Selected Nervedo the Shadebeast Power Patron (hand)
24. Yes
25. Selected Artmage Impasto -Recapture- (Deck)
26. Activate Theorealize Medius (hand): If a "Power Patron" card is on the field: You can Special Summon this card from your hand, then you can add 1 "Theorealize" Spell/Trap from your Deck to your hand
27. Yes
28. Selected Theorealize Liberation (Deck)
29. Activate Medius the Pure (GY): Shuffle 1 monster from your hand or face-up field into the Deck, and if you do, Special Summon this card
30. Selected Ash Blossom & Joyous Spring (hand)
31. Activate Theorealize Liberation (hand): Add to your hand, or Special Summon, 1 monster from your Deck with 300 ATK/200 DEF
32. Activate Purification Power Patron (EMZ-L): Link Summon including this card as material
33. Selected Medicurius the Power Patron of Illusions (Extra Deck)
34. select Medius the Pure (M2)
35. Finish selection
36. Selected Nervedo the Shadebeast Power Patron (Deck)
37. Special Summon it
38. Yes
39. Special Summon 1 "Diactorus" monster
40. Selected Artmage Diactorus (Extra Deck)
41. Activate Nervedo the Shadebeast Power Patron (M1): Special Summon 1 "Nerva the Power Patron of Creation" from your Extra Deck
42. Selected Nerva the Power Patron of Creation (Extra Deck)
43. Yes
44. Selected Artmage Graflare (Deck)

End board:  LP 8000 | Hand 2 | Deck 30 | Extra 13 | GY 6 | Banished 5   Monsters: M1: Artmage Graflare Lv5 2100/1500 ATK || M3: Nerva the Power Patron of Creation Lv10 3300/3300 ATK || M4: Artmage Non-Finito Lv7 2400/1500 ATK || M5: Artmage Diactorus Lv8 2800/2500 ATK || EMZ-R: Medicurius the Power Patron of Illusions L3↙↓↘ 3000    Spell/Trap: S1: Artmage Impasto -Recapture- (Set)   GY: Pendulum Treasure, Prohibited Power Patron Portal - Terminus, Dark Magical Circle, Nervedo the Shadebeast Power Patron, Purification Power Patron, Theorealize Liberation   Banished: Medius the Pure, Theorealize Medius, Skull Archfiend of Chaos (face-down), Pendulum Treasure (face-down), Black Chaos (face-down)   Hand: I

