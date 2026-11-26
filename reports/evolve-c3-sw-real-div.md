# Evolved lines — Small World, Ash Blossom & Joyous Spring, Ash Blossom & Joyous Spring, Infinite Impermanence, Dark Magical Circle (findlist-1100)
2026-11-26T05:56:33.863Z

8 deck orders (different face-down banishes / draws), 3 opponent hands x o_ss_panama + o_elfnote + o_despia + o_angelechy per line, 5 min searches, 6 mutation rounds.
Fitness = end-board interruptions (the lab scorer, src/disrupt.mjs: wipe 2, negate 1-1.5, banish/protection less; hand traps kept count 1 each). The winner of each order is also played into the opponent decks: margin after their turn shown beside it.

**Margin after their turn (winners): average null** (worst 99)

**Best line per deck order: average 12.03** (worst order 11.8). Winner came from: tries Activate Prohibited Power Patron Portal - Terminus 1, opening lanes 2, tries Activate Theorealize Liberation → new early order 1, tries Normal Summon Medius the Pure → new ending 1, search 1, tries Activate Artmage Finmel 1, forced Activate Artmage Graflare 1

## Weak points found automatically
Cards whose face-down banish (by your own costs) hurt the best line most (average best line without vs with that card banished):

| card | orders where it was banished | drop |
|---|---|---|
| Theorealize Liberation | 3/8 | 0.29 |
| Lacrima the Crimson Tears | 3/8 | 0.24 |
| Black Chaos | 3/8 | 0.24 |
| Magician of Dark Chaos - Black Chaos | 2/8 | 0.2 |
| Plundered Power Patron Plane - Vidolia | 4/8 | 0.14 |
| Artmage Finmel | 4/8 | 0.14 |
| Ars Magna of Infinity and Finity | 5/8 | 0.06 |
| Ars Magna - "Citrinitas" | 2/8 | 0.04 |
| Fiendsmith Engraver | 7/8 | 0.02 |
| Fiendsmith's Tract | 7/8 | 0.02 |

Effects the search had not used, tried on purpose (best result so far):
- Normal Summon Medius the Pure: 12.2
- Activate Theorealize Liberation: 12.1
- Activate Prohibited Power Patron Portal - Terminus: 12.05
- Activate Ars Magna - "Citrinitas": 11.95
- Activate Artmage Vandalism -Assault-: 11.85
- Activate Artmage Finmel: 11.8
- Activate Medius the Pure: 10.8
- Activate Junoldo the Shadespirit Power Patron: 10

## Order 1: best 12.05 (, worst 12.05) — from tries Activate Prohibited Power Patron Portal - Terminus
Others: tries Activate Prohibited Power Patron Portal - Terminus → new ending 12.05 · tries Activate Prohibited Power Patron Portal - Terminus → new ending 12.05 · forced Activate Light and Darkness Ritual: Ritual Summon 11.9 · tries Activate Prohibited Power Patron Portal - Terminus → new ending 11.9 · search 11.8 · tries Activate Prohibited Power Patron Portal - Terminus → new early order 11.35 · forced Activate Theorealize Past Lull 10.9 · tries Activate Prohibited Power Patron Portal - Terminus → new early order 10 · forced Activate Theorealize Liberation 9.4 · tries Activate Plundered Power Patron Plane - Vidolia 8.5 · forced Link Summon S:P Little Knight 6.6 · forced Activate Artmage Graflare 6.5 · tries Activate Plundered Power Patron Plane - Vidolia 5.75 · opening lanes 5.75 · tries Activate Prohibited Power Patron Portal - Terminus → new early order 5.75 · tries Link Summon Fiendsmith's Requiem 5.7 · forced Activate Fiendsmith's Sequence 5.7 · tries Activate Black Chaos 5.65 · forced Activate Griffoh 5.65 · forced Activate Mind Shuffle 5.65 · tries Activate Fiendsmith's Requiem 5.35

1. Set Spell/Trap Small World
2. Activate Small World (S1): activate this card
3. Selected Ash Blossom & Joyous Spring (hand)
4. Selected Medius the Pure (Deck)
5. Selected Nervedo the Shadebeast Power Patron (Deck)
6. Special Summon (procedure) Artmage Non-Finito (Extra Deck)
7. Selected Dark Magical Circle (hand)
8. Selected Nervedo the Shadebeast Power Patron (hand)
9. Yes
10. Selected Artmage Vandalism -Assault- (Deck)
11. Set Spell/Trap Infinite Impermanence
12. Activate Artmage Vandalism -Assault- (S1): When this card is activated: You can add 1 "Medius the Pure" from your Deck to your hand
13. Yes
14. Selected Medius the Pure (Deck)
15. Activate Artmage Vandalism -Assault- (S1): Make 1 face-up monster you control able to be treated as an "Artmage" monster if used as Fusion Material
16. Selected Artmage Non-Finito (EMZ-R)
17. Normal Summon Medius the Pure (hand)
18. Yes
19. Selected Vidolium the Unstable Power Patron of Unity (Deck)
20. Add the card(s) to your hand
21. Activate Vidolium the Unstable Power Patron of Unity (hand): Activate it as a Pendulum Spell
22. Activate Vidolium the Unstable Power Patron of Unity (S5): Activate 1 of these effects
23. Special Summon 1 "Power Patron" monster
24. Selected Nervedo the Shadebeast Power Patron (GY)
25. Yes
26. Selected Prohibited Power Patron Portal - Terminus (Deck)
27. Activate Nervedo the Shadebeast Power Patron (M1): Special Summon 1 "Nerva the Power Patron of Creation" from your Extra Deck
28. Selected Nerva the Power Patron of Creation (Extra Deck)
29. Yes
30. Selected Artmage Graflare (Deck)
31. Set Spell/Trap Prohibited Power Patron Portal - Terminus
32. Activate Prohibited Power Patron Portal - Terminus (S3): Send 1 "Power Patron" monster from your Deck or Extra Deck to the GY, then you can add 1 DARK Fairy monster from your Deck to your hand
33. Selected Nervedo the Shadebeast Power Patron (Deck)
34. Yes
35. Selected Theorealize Medius (Deck)
36. Activate Theorealize Medius (hand): If a "Power Patron" card is on the field: You can Special Summon this card from your hand, then you can add 1 "Theorealize" Spell/Trap from your Deck to your hand
37. Yes
38. Selected Theorealize Past Lull (Deck)
39. Set Spell/Trap Theorealize Past Lull
40. Activate Theorealize Past Lull (S3): Special Summon 1 "Medius the Pure" from your hand or Deck
41. Selected Medius the Pure (Deck)
42. Link Summon Purification Power Patron (Extra Deck)
43. select Medius the Pure (M2)
44. select Artmage Non-Finito (EMZ-R)
45. Yes
46. Selected Theorealize Liberation (Deck)
47. Activate Theorealize Liberation (hand): Add to your hand, or Special Summon, 1 monster from your Deck with 300 ATK/200 DEF
48. Activate Purification Power Patron (EMZ-R): Link Summon including this card as material
49. Selected Medicurius the Power Patron of Illusions (Extra Deck)
50. select Medius the Pure (M3)
51. Finish selection
52. Selected Griffoh (Deck)
53. Add the card(s) to your hand
54. Activate Griffoh (hand): Activate 1 of these effects
55. Set 1 card that mentions "Light and Darkness Ritual"
56. Selected Mind Shuffle (Deck)
57. Activate Mind Shuffle (S3): activate this card
58. No
59. Activate Mind Shuffle (S3): Add 1 appropriate monster to your hand
60. Selected Skull Archfiend of Chaos (Deck)
61. Selected Skull Archfiend of Chaos (hand)
62. Yes
63. Selected Light and Darkness Ritual (Deck)
64. Selected Magician of Dark Chaos - Black Chaos (Deck)
65. Activate Light and Darkness Ritual (GY): Add both this card and 1 card that mentions "Light and Darkness Ritual" from your GY to your hand
66. Selected Skull Archfiend of Chaos (GY)
67. Activate Light and Darkness Ritual (hand): Ritual Summon 1 "Magician of Dark Chaos - Black Chaos" or "Black Luster Soldier - Soldier of Light and Darkness" from your hand
68. Selected Magician of Dark Chaos - Black Chaos (hand)
69. Selected Griffoh (GY) value 8 or 1
70. Yes
71. Special Summon 1 "Diactorus" monster
72. Activate Magician of Dark Chaos - Black Chaos (M2): Add 1 Spell from your GY to your hand
73. Selected Dark Magical Circle (GY)
74. Selected Artmage Diactorus (Extra Deck)

End board:  LP 8000 | Hand 3 | Deck 22 | Extra 12 | GY 10 | Banished 7   Monsters: M2: Magician of Dark Chaos - Black Chaos Lv8 2800/2600 ATK || M3: Artmage Diactorus Lv8 2800/2500 ATK || M4: Nerva the Power Patron of Creation Lv10 3300/3300 ATK || M5: Artmage Graflare Lv5 2100/1500 ATK || EMZ-R: Medicurius the Power Patron of Illusions L3↙↓↘ 3000    Spell/Trap: S1: Artmage Vandalism -Assault- || S2: Infinite Impermanence (Set) || S3: Mind Shuffle   GY: Small World, Nervedo the Shadebeast Power Patron, Prohibited Power Patron Portal - Terminus, Theorealize Past Lull, Medius the Pure, Artmage Non-Finito, Medius the Pure, Purification Power Patron, Theorealize Liberation, Light and Darkness Ritual   Bani

## Order 2: best 11.8 (, worst 11.8) — from opening lanes
Others: forced Activate Light and Darkness Ritual: Ritual Summon 11.8 · search 9.4 · forced Activate Theorealize Liberation 9.25 · forced Activate Theorealize Past Lull 8.65 · tries Activate Junoldo the Shadespirit Power Patron 8.3 · forced Activate Artmage Graflare 5.75 · tries Activate Fiendsmith's Requiem 5.7 · tries Activate Fiendsmith's Sequence 5.7 · tries Activate Mind Shuffle 5.65 · tries Activate Mind Shuffle 5.65 · forced Activate Mind Shuffle 5.65 · forced Activate Griffoh 5.65 · forced Activate Fiendsmith's Sequence 5.35 · tries Activate Fiendsmith's Sequence 5.35 · forced Link Summon S:P Little Knight 4.62

1. Activate Small World (hand): activate this card
2. Selected Ash Blossom & Joyous Spring (hand)
3. Selected Theorealize Medius (Deck)
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
15. Selected Vidolium the Unstable Power Patron of Unity (Deck)
16. #573
17. Activate Vidolium the Unstable Power Patron of Unity (hand): #1160
18. Activate Vidolium the Unstable Power Patron of Unity (S5): Activate 1 of these effects
19. Special Summon 1 "Power Patron" monster
20. Selected Nervedo the Shadebeast Power Patron (GY)
21. Yes
22. Selected Theorealize Medius (Deck)
23. Activate Theorealize Medius (hand): If a "Power Patron" card is on the field: You can Special Summon this card from your hand, then you can add 1 "Theorealize" Spell/Trap from your Deck to your hand
24. Yes
25. Selected Theorealize Liberation (Deck)
26. Activate Theorealize Liberation (hand): Add to your hand, or Special Summon, 1 monster from your Deck with 300 ATK/200 DEF
27. Selected Griffoh (Deck)
28. #573
29. Activate Griffoh (hand): Activate 1 of these effects
30. Set 1 card that mentions "Light and Darkness Ritual"
31. Selected Mind Shuffle (Deck)
32. Activate Mind Shuffle (S2): activate this card
33. Yes
34. Selected Skull Archfiend of Chaos (Deck)
35. Selected Skull Archfiend of Chaos (hand)
36. Yes
37. Selected Light and Darkness Ritual (Deck)
38. Selected Magician of Dark Chaos - Black Chaos (Deck)
39. Activate Light and Darkness Ritual (GY): Add both this card and 1 card that mentions "Light and Darkness Ritual" from your GY to your hand
40. Selected Skull Archfiend of Chaos (GY)
41. Activate Light and Darkness Ritual (hand): Ritual Summon 1 "Magician of Dark Chaos - Black Chaos" or "Black Luster Soldier - Soldier of Light and Darkness" from your hand
42. Selected Magician of Dark Chaos - Black Chaos (hand)
43. Selected Griffoh (GY) value 8 or 1
44. Yes
45. Special Summon 1 "Diactorus" monster
46. Selected Artmage Diactorus (Extra Deck)
47. Link Summon S:P Little Knight (Extra Deck)
48. select Medius the Pure (M4)
49. select Magician of Dark Chaos - Black Chaos (M2)
50. Activate Medius the Pure (GY): Shuffle 1 monster from your hand or face-up field into the Deck, and if you do, Special Summon this card
51. Selected Skull Archfiend of Chaos (hand)
52. Activate Nervedo the Shadebeast Power Patron (M5): Special Summon 1 "Nerva the Power Patron of Creation" from your Extra Deck
53. Selected Nerva the Power Patron of Creation (Extra Deck)
54. Yes
55. Selected Artmage Graflare (Deck)
56. Link Summon Medicurius the Power Patron of Illusions (Extra Deck)
57. select S:P Little Knight (EMZ-L)
58. select Medius the Pure (M4)
59. Finish selection

End board:  LP 8000 | Hand 2 | Deck 27 | Extra 12 | GY 5 | Banished 9   Monsters: M1: Artmage Diactorus Lv8 2800/2500 ATK || M2: Nerva the Power Patron of Creation Lv10 3300/3300 ATK || M3: Artmage Non-Finito Lv7 2400/1500 ATK || M5: Artmage Graflare Lv5 2100/1500 ATK || EMZ-L: Medicurius the Power Patron of Illusions L3↙↓↘ 3000    Spell/Trap: S1: Artmage Vandalism -Assault- || S2: Mind Shuffle   GY: Small World, Dark Magical Circle, Light and Darkness Ritual, Magician of Dark Chaos - Black Chaos, S:P Little Knight   Banished: Ash Blossom & Joyous Spring (face-down), Theorealize Medius (face-down), Theorealize Liberation, Griffoh, Theorealize Medius, Fiendsmith's Tract (face-down), Skull Archfiend of C

## Order 3: best 12.35 (, worst 12.35) — from tries Activate Theorealize Liberation → new early order
Others: tries Activate Theorealize Liberation 12.1 · tries Activate Theorealize Liberation → new ending 12.1 · tries Activate Theorealize Liberation → new ending 12.1 · tries Activate Theorealize Liberation → new ending 12.1 · search 11.95 · tries Activate Ars Magna - "Citrinitas" 11.95 · tries Activate Theorealize Liberation → new early order 11.85 · forced Activate Theorealize Past Lull 10.05 · tries Activate Theorealize Liberation → new early order 9.15 · forced Activate Artmage Graflare 8.75 · forced Link Summon S:P Little Knight 6.08 · forced Activate Light and Darkness Ritual: Ritual Summon 5.75 · forced Activate Fiendsmith's Sequence 5.35

1. Activate Small World (hand): activate this card
2. Selected Ash Blossom & Joyous Spring (hand)
3. Selected Medius the Pure (Deck)
4. Selected Nervedo the Shadebeast Power Patron (Deck)
5. Special Summon (procedure) Artmage Non-Finito (Extra Deck)
6. Selected Dark Magical Circle (hand)
7. Selected Nervedo the Shadebeast Power Patron (hand)
8. Yes
9. Selected Artmage Vandalism -Assault- (Deck)
10. Activate Artmage Vandalism -Assault- (S1): When this card is activated: You can add 1 "Medius the Pure" from your Deck to your hand
11. Yes
12. Selected Medius the Pure (Deck)
13. Set Spell/Trap Infinite Impermanence
14. Normal Summon Medius the Pure (hand)
15. Yes
16. Selected Vidolium the Unstable Power Patron of Unity (Deck)
17. Add the card(s) to your hand
18. Activate Vidolium the Unstable Power Patron of Unity (hand): Activate it as a Pendulum Spell
19. Activate Vidolium the Unstable Power Patron of Unity (S5): Activate 1 of these effects
20. Special Summon 1 "Power Patron" monster
21. Selected Nervedo the Shadebeast Power Patron (GY)
22. Yes
23. Selected Junoldo the Shadespirit Power Patron (Deck)
24. Activate Junoldo the Shadespirit Power Patron (hand): Activate it as a Pendulum Spell
25. Activate Nervedo the Shadebeast Power Patron (M3): Special Summon 1 "Nerva the Power Patron of Creation" from your Extra Deck
26. Selected Nerva the Power Patron of Creation (Extra Deck)
27. Yes
28. Selected Theorealize Medius (Deck)
29. No
30. Link Summon Purification Power Patron (Extra Deck)
31. select Theorealize Medius (M5)
32. select Artmage Non-Finito (EMZ-R)
33. Activate Purification Power Patron (EMZ-L): Add 1 "Theorealize" card from your Deck to your hand
34. Activate Junoldo the Shadespirit Power Patron (S5): Destroy this card, draw 2 cards, then discard 1 card
35. Activate Purification Power Patron (EMZ-L): Link Summon including this card as material
36. Selected Medicurius the Power Patron of Illusions (Extra Deck)
37. select Medius the Pure (M4)
38. Finish selection
39. Selected Pendulum Treasure (hand)
40. Selected Theorealize Medius (Deck)
41. Yes
42. Selected Vidolium the Unstable Power Patron of Unity (Extra Deck)
43. Activate Theorealize Medius (hand): If a "Power Patron" card is on the field: You can Special Summon this card from your hand, then you can add 1 "Theorealize" Spell/Trap from your Deck to your hand
44. Yes
45. Selected Theorealize Liberation (Deck)
46. Activate Medius the Pure (GY): Shuffle 1 monster from your hand or face-up field into the Deck, and if you do, Special Summon this card
47. Selected Vidolium the Unstable Power Patron of Unity (hand)
48. Activate Theorealize Liberation (hand): Add to your hand, or Special Summon, 1 monster from your Deck with 300 ATK/200 DEF
49. Selected Griffoh (Deck)
50. Add the card(s) to your hand
51. Activate Artmage Graflare (hand): Special Summon this card from your hand
52. Yes
53. Selected Ars Magna - "Citrinitas" (Deck)
54. Activate Ars Magna - "Citrinitas" (S3): activate this card
55. Activate Griffoh (hand): Activate 1 of these effects
56. Set 1 card that mentions "Light and Darkness Ritual"
57. Selected Mind Shuffle (Deck)
58. Activate Mind Shuffle (S4): activate this card
59. Yes
60. Selected Skull Archfiend of Chaos (Deck)
61. Selected Skull Archfiend of Chaos (hand)
62. Yes
63. Selected Light and Darkness Ritual (Deck)
64. Selected Magician of Dark Chaos - Black Chaos (Deck)
65. Activate Light and Darkness Ritual (GY): Add both this card and 1 card that mentions "Light and Darkness Ritual" from your GY to your hand
66. Selected Skull Archfiend of Chaos (GY)
67. Activate Light and Darkness Ritual (hand): Ritual Summon 1 "Magician of Dark Chaos - Black Chaos" or "Black Luster Soldier - Soldier of Light and Darkness" from your hand
68. Selected Magician of Dark Chaos - Black Chaos (hand)
69. Selected Griffoh (GY) value 8 or 1
70. Yes
71. Special Summon 1 "Diactorus" monster
72. Activate Magician of Dark Chaos - Black Chaos (M5): Add 1 Spell from your GY to your hand
73. Selected Theorealize Liberation (GY)
74. Selected Artmage Diactorus (Extra Deck)
75. Activate Ars Magna - "Citrinitas" (S3): Add 1 "Medius" or "Ars Magna" monster from your Deck to your hand
76. Selected Medius the Pure (Deck)
77. Activate Artmage Diactorus (M1): Change the battle position of 1 monster on the field
78. Selected Magician of Dark Chaos - Black Chaos (M5)
79. Set Spell/Trap Theorealize Liberation

End board:  LP 8000 | Hand 3 | Deck 22 | Extra 12 | GY 7 | Banished 7   Monsters: M1: Artmage Diactorus Lv8 2800/2500 ATK || M2: Medius the Pure Lv4 1800/1800 ATK || M3: Nerva the Power Patron of Creation Lv10 3300/3300 ATK || M4: Artmage Graflare Lv5 2100/1500 ATK || M5: Magician of Dark Chaos - Black Chaos Lv8 2800/2600 DEF || EMZ-L: Medicurius the Power Patron of Illusions L3↙↓↘ 3000    Spell/Trap: S1: Artmage Vandalism -Assault- || S2: Infinite Impermanence (Set) || S3: Ars Magna - "Citrinitas" || S4: Mind Shuffle || S5: Theorealize Liberation (Set)   GY: Small World, Dark Magical Circle, Theorealize Medius, Artmage Non-Finito, Purification Power Patron, Pendulum Treasure, Light and Darkness Ritual

## Order 4: best 12.45 (, worst 12.45) — from tries Normal Summon Medius the Pure → new ending
Others: tries Normal Summon Medius the Pure 12.2 · tries Normal Summon Medius the Pure → new ending → new early order 12.05 · tries Activate Artmage Vandalism -Assault- 11.85 · tries Normal Summon Medius the Pure → new ending → new early order 11.8 · tries Normal Summon Medius the Pure → new ending → new ending 11.7 · tries Normal Summon Medius the Pure → new early order 11.55 · tries Normal Summon Medius the Pure → new ending 11.4 · search 10.8 · forced Activate Theorealize Liberation 10.3 · tries Activate Junoldo the Shadespirit Power Patron 10 · tries Activate Ars Magna of Purification and Corruption 9.25 · forced Activate Theorealize Past Lull 8.65 · tries Special Summon (procedure) Vidolium the Unstable Power Patron of Unity 5.75 · opening lanes 5.75 · forced Activate Fiendsmith's Sequence 5.7 · forced Activate Griffoh 5.65 · forced Activate Mind Shuffle 5.65 · forced Activate Light and Darkness Ritual: Ritual Summon 5.65 · tries Activate Mind Shuffle 5.65 · forced Link Summon S:P Little Knight 5.13

1. Set Spell/Trap Small World
2. Activate Small World (S1): activate this card
3. Selected Ash Blossom & Joyous Spring (hand)
4. Selected Medius the Pure (Deck)
5. Selected Nervedo the Shadebeast Power Patron (Deck)
6. Special Summon (procedure) Artmage Non-Finito (Extra Deck)
7. Selected Dark Magical Circle (hand)
8. Selected Nervedo the Shadebeast Power Patron (hand)
9. Yes
10. Selected Artmage Vandalism -Assault- (Deck)
11. Activate Artmage Vandalism -Assault- (S1): When this card is activated: You can add 1 "Medius the Pure" from your Deck to your hand
12. Yes
13. Selected Medius the Pure (Deck)
14. Activate Artmage Vandalism -Assault- (S1): Make 1 face-up monster you control able to be treated as an "Artmage" monster if used as Fusion Material
15. Selected Artmage Non-Finito (M3)
16. Normal Summon Medius the Pure (hand)
17. Yes
18. Selected Vidolium the Unstable Power Patron of Unity (Deck)
19. Add the card(s) to your hand
20. Activate Vidolium the Unstable Power Patron of Unity (hand): Activate it as a Pendulum Spell
21. Activate Vidolium the Unstable Power Patron of Unity (S5): Activate 1 of these effects
22. Special Summon 1 "Power Patron" monster
23. Selected Nervedo the Shadebeast Power Patron (GY)
24. Yes
25. Selected Theorealize Medius (Deck)
26. Activate Theorealize Medius (hand): If a "Power Patron" card is on the field: You can Special Summon this card from your hand, then you can add 1 "Theorealize" Spell/Trap from your Deck to your hand
27. Yes
28. Selected Theorealize Liberation (Deck)
29. Activate Theorealize Liberation (hand): Add to your hand, or Special Summon, 1 monster from your Deck with 300 ATK/200 DEF
30. Selected Junoldo the Shadespirit Power Patron (Deck)
31. Add the card(s) to your hand
32. Activate Junoldo the Shadespirit Power Patron (hand): Activate it as a Pendulum Spell
33. Activate Theorealize Liberation (GY): Treat 1 monster you control as a Tuner this turn
34. Selected Theorealize Medius (M2)
35. Activate Nervedo the Shadebeast Power Patron (M1): Special Summon 1 "Nerva the Power Patron of Creation" from your Extra Deck
36. Selected Nerva the Power Patron of Creation (Extra Deck)
37. Yes
38. Selected Artmage Graflare (Deck)
39. Link Summon Purification Power Patron (Extra Deck)
40. select Theorealize Medius (M2)
41. select Medius the Pure (M4)
42. Activate Junoldo the Shadespirit Power Patron (S5): Destroy this card, draw 2 cards, then discard 1 card
43. Activate Purification Power Patron (EMZ-L): Add 1 "Theorealize" card from your Deck to your hand
44. Selected Theorealize Medius (Deck)
45. Selected Theorealize Medius (hand)
46. Yes
47. Selected Nervedo the Shadebeast Power Patron (Extra Deck)
48. Activate Griffoh (hand): Activate 1 of these effects
49. Set 1 card that mentions "Light and Darkness Ritual"
50. Selected Mind Shuffle (Deck)
51. Activate Mind Shuffle (S2): activate this card
52. Yes
53. Selected Skull Archfiend of Chaos (Deck)
54. Selected Ash Blossom & Joyous Spring (hand)
55. Activate Medius the Pure (GY): Shuffle 1 monster from your hand or face-up field into the Deck, and if you do, Special Summon this card
56. Selected Nervedo the Shadebeast Power Patron (hand)
57. Activate Purification Power Patron (EMZ-L): Link Summon including this card as material
58. Selected Medicurius the Power Patron of Illusions (Extra Deck)
59. select Medius the Pure (M2)
60. Finish selection
61. Activate Artmage Finmel (hand): Special Summon this card from your hand
62. Yes
63. Set Spell/Trap Artmage Impasto -Recapture-
64. Activate Skull Archfiend of Chaos (hand): Special Summon this card
65. select Dark Magical Circle (GY)
66. select Purification Power Patron (GY)
67. select Griffoh (GY)
68. Default order
69. Link Summon S:P Little Knight (Extra Deck)
70. select Skull Archfiend of Chaos (M4)
71. select Artmage Non-Finito (M3)
72. Yes
73. Selected Light and Darkness Ritual (Deck)
74. Selected Magician of Dark Chaos - Black Chaos (Deck)
75. Activate Light and Darkness Ritual (GY): Add both this card and 1 card that mentions "Light and Darkness Ritual" from your GY to your hand
76. Selected Skull Archfiend of Chaos (GY)
77. Set Spell/Trap Light and Darkness Ritual
78. Activate Light and Darkness Ritual (S4): Ritual Summon 1 "Magician of Dark Chaos - Black Chaos" or "Black Luster Soldier - Soldier of Light and Darkness" from your hand
79. Selected Magician of Dark Chaos - Black Chaos (hand)
80. Selected Theorealize Medius (GY) value 4, Theorealize Medius (GY) value 4
81. Yes
82. Selected Small World (GY)

End board:  LP 8000 | Hand 3 | Deck 25 | Extra 13 | GY 3 | Banished 9   Monsters: M1: Artmage Graflare Lv5 2100/1500 ATK || M2: Artmage Finmel Lv7 2400/1500 ATK || M3: S:P Little Knight L2←→ 1600  || M4: Magician of Dark Chaos - Black Chaos Lv8 2800/2600 ATK || M5: Nerva the Power Patron of Creation Lv10 3300/3300 ATK || EMZ-L: Medicurius the Power Patron of Illusions L3↙↓↘ 3000    Spell/Trap: S1: Artmage Vandalism -Assault- || S2: Mind Shuffle || S3: Artmage Impasto -Recapture- (Set)   GY: Ash Blossom & Joyous Spring, Artmage Non-Finito, Light and Darkness Ritual   Banished: Ash Blossom & Joyous Spring (face-down), Medius the Pure (face-down), Theorealize Liberation, Prohibited Power Patron Portal - T

## Order 5: best 12.05 (, worst 12.05) — from opening lanes
Others: tries Activate Prohibited Power Patron Portal - Terminus 12.05 · search 11.8 · opening lanes → new early order 11.65 · forced Activate Theorealize Past Lull 11 · forced Activate Theorealize Liberation 10.55 · forced Activate Light and Darkness Ritual: Ritual Summon 10.05 · forced Activate Artmage Graflare 5.75 · opening lanes → new early order 5.75 · tries Link Summon Fiendsmith's Requiem 5.7 · tries Activate Fiendsmith Engraver 5.7 · tries Activate Fiendsmith Engraver 5.7 · tries Activate Fiendsmith's Tract 5.7 · forced Activate Fiendsmith's Sequence 5.7 · forced Activate Griffoh 5.65 · tries Activate Black Chaos 5.65 · forced Activate Mind Shuffle 5.65 · forced Link Summon S:P Little Knight 5.13

1. Set Spell/Trap Small World
2. Activate Small World (S1): activate this card
3. Selected Ash Blossom & Joyous Spring (hand)
4. Selected Medius the Pure (Deck)
5. Selected Nervedo the Shadebeast Power Patron (Deck)
6. Special Summon (procedure) Artmage Non-Finito (Extra Deck)
7. Selected Dark Magical Circle (hand)
8. Selected Nervedo the Shadebeast Power Patron (hand)
9. Yes
10. Selected Ars Magna - "Citrinitas" (Deck)
11. Activate Ars Magna - "Citrinitas" (S1): activate this card
12. Activate Ars Magna - "Citrinitas" (S1): Add 1 "Medius" or "Ars Magna" monster from your Deck to your hand
13. Selected Medius the Pure (Deck)
14. Normal Summon Medius the Pure (hand)
15. Yes
16. Selected Vidolium the Unstable Power Patron of Unity (Deck)
17. #573
18. Activate Vidolium the Unstable Power Patron of Unity (hand): #1160
19. Link Summon Purification Power Patron (Extra Deck)
20. select Medius the Pure (M2)
21. select Artmage Non-Finito (M1)
22. Yes
23. Selected Theorealize Medius (Deck)
24. Activate Vidolium the Unstable Power Patron of Unity (S5): Activate 1 of these effects
25. Special Summon 1 "Power Patron" monster
26. Selected Nervedo the Shadebeast Power Patron (GY)
27. Yes
28. Selected Nervedo the Shadebeast Power Patron (Deck)
29. Activate Nervedo the Shadebeast Power Patron (M1): Special Summon 1 "Nerva the Power Patron of Creation" from your Extra Deck
30. Selected Nerva the Power Patron of Creation (Extra Deck)
31. Yes
32. Selected Artmage Finmel (Deck)
33. Activate Theorealize Medius (hand): If a "Power Patron" card is on the field: You can Special Summon this card from your hand, then you can add 1 "Theorealize" Spell/Trap from your Deck to your hand
34. Yes
35. Selected Theorealize Liberation (Deck)
36. Activate Medius the Pure (GY): Shuffle 1 monster from your hand or face-up field into the Deck, and if you do, Special Summon this card
37. Selected Nervedo the Shadebeast Power Patron (hand)
38. Activate Theorealize Liberation (hand): Add to your hand, or Special Summon, 1 monster from your Deck with 300 ATK/200 DEF
39. Selected Griffoh (Deck)
40. #573
41. Activate Griffoh (hand): Activate 1 of these effects
42. Set 1 card that mentions "Light and Darkness Ritual"
43. Selected Mind Shuffle (Deck)
44. Activate Purification Power Patron (EMZ-L): Link Summon including this card as material
45. Activate Mind Shuffle (S2): activate this card
46. Yes
47. Selected Skull Archfiend of Chaos (Deck)
48. Selected Skull Archfiend of Chaos (hand)
49. Selected Medicurius the Power Patron of Illusions (Extra Deck)
50. select Medius the Pure (M1)
51. Finish selection
52. Yes
53. Selected Light and Darkness Ritual (Deck)
54. Activate Theorealize Medius (M5): Activate 1 of these effects
55. Special Summon 1 "Diactorus" monster
56. Selected Artmage Diactorus (Extra Deck)
57. Selected Magician of Dark Chaos - Black Chaos (Deck)
58. Activate Light and Darkness Ritual (GY): Add both this card and 1 card that mentions "Light and Darkness Ritual" from your GY to your hand
59. Selected Skull Archfiend of Chaos (GY)
60. Activate Light and Darkness Ritual (hand): Ritual Summon 1 "Magician of Dark Chaos - Black Chaos" or "Black Luster Soldier - Soldier of Light and Darkness" from your hand
61. Selected Magician of Dark Chaos - Black Chaos (hand)
62. Selected Griffoh (GY) value 8 or 1
63. Yes
64. Selected Light and Darkness Ritual (GY)

End board:  LP 8000 | Hand 4 | Deck 26 | Extra 12 | GY 5 | Banished 8   Monsters: M1: Magician of Dark Chaos - Black Chaos Lv8 2800/2600 ATK || M3: Nerva the Power Patron of Creation Lv10 3300/3300 ATK || M4: Artmage Finmel Lv7 2400/1500 ATK || M5: Artmage Diactorus Lv8 2800/2500 ATK || EMZ-R: Medicurius the Power Patron of Illusions L3↙↓↘ 3000    Spell/Trap: S1: Ars Magna - "Citrinitas" || S2: Mind Shuffle   GY: Small World, Dark Magical Circle, Artmage Non-Finito, Theorealize Liberation, Purification Power Patron   Banished: Ash Blossom & Joyous Spring (face-down), Medius the Pure (face-down), Artmage Graflare (face-down), Artmage Vandalism -Assault- (face-down), Plundered Power Patron Plane - Vidoli

## Order 6: best 11.95 (, worst 11.95) — from search
Others: forced Activate Light and Darkness Ritual: Ritual Summon 10 · forced Activate Theorealize Past Lull 9.4 · tries Activate Junoldo the Shadespirit Power Patron 9.25 · forced Activate Artmage Graflare 8.5 · forced Link Summon S:P Little Knight 6.08 · opening lanes 5.75 · tries Activate Fiendsmith's Requiem 5.7 · tries Activate Fiendsmith's Sequence 5.7 · tries Activate Fiendsmith's Sequence 5.7 · tries Activate Fiendsmith Engraver 5.7 · forced Activate Fiendsmith's Sequence 5.7 · forced Activate Theorealize Liberation 5.65 · forced Activate Mind Shuffle 5.65 · forced Activate Griffoh 5.65 · tries Link Summon Fiendsmith's Sequence 5.35

1. Set Spell/Trap Small World
2. Activate Small World (S1): activate this card
3. Selected Ash Blossom & Joyous Spring (hand)
4. Selected Theorealize Medius (Deck)
5. Selected Nervedo the Shadebeast Power Patron (Deck)
6. Special Summon (procedure) Artmage Non-Finito (Extra Deck)
7. Selected Dark Magical Circle (hand)
8. Selected Nervedo the Shadebeast Power Patron (hand)
9. Yes
10. Selected Artmage Vandalism -Assault- (Deck)
11. Activate Artmage Vandalism -Assault- (S1): When this card is activated: You can add 1 "Medius the Pure" from your Deck to your hand
12. Yes
13. Selected Medius the Pure (Deck)
14. Normal Summon Medius the Pure (hand)
15. Yes
16. Selected Vidolium the Unstable Power Patron of Unity (Deck)
17. #573
18. Activate Vidolium the Unstable Power Patron of Unity (hand): #1160
19. Activate Vidolium the Unstable Power Patron of Unity (S5): Activate 1 of these effects
20. Special Summon 1 "Power Patron" monster
21. Selected Nervedo the Shadebeast Power Patron (GY)
22. Yes
23. Selected Theorealize Medius (Deck)
24. Activate Theorealize Medius (hand): If a "Power Patron" card is on the field: You can Special Summon this card from your hand, then you can add 1 "Theorealize" Spell/Trap from your Deck to your hand
25. Yes
26. Selected Theorealize Liberation (Deck)
27. Activate Nervedo the Shadebeast Power Patron (M4): Special Summon 1 "Nerva the Power Patron of Creation" from your Extra Deck
28. Selected Nerva the Power Patron of Creation (Extra Deck)
29. Yes
30. Selected Artmage Graflare (Deck)
31. Activate Theorealize Liberation (hand): Add to your hand, or Special Summon, 1 monster from your Deck with 300 ATK/200 DEF
32. Selected Griffoh (Deck)
33. #573
34. Activate Griffoh (hand): Activate 1 of these effects
35. Set 1 card that mentions "Light and Darkness Ritual"
36. Selected Mind Shuffle (Deck)
37. Activate Mind Shuffle (S2): activate this card
38. Yes
39. Selected Skull Archfiend of Chaos (Deck)
40. Selected Skull Archfiend of Chaos (hand)
41. Yes
42. Selected Light and Darkness Ritual (Deck)
43. Selected Magician of Dark Chaos - Black Chaos (Deck)
44. Activate Light and Darkness Ritual (GY): Add both this card and 1 card that mentions "Light and Darkness Ritual" from your GY to your hand
45. Selected Skull Archfiend of Chaos (GY)
46. Set Spell/Trap Light and Darkness Ritual
47. Activate Light and Darkness Ritual (S3): Ritual Summon 1 "Magician of Dark Chaos - Black Chaos" or "Black Luster Soldier - Soldier of Light and Darkness" from your hand
48. Selected Magician of Dark Chaos - Black Chaos (hand)
49. Selected Griffoh (GY) value 8 or 1
50. Yes
51. Special Summon 1 "Diactorus" monster
52. Activate Magician of Dark Chaos - Black Chaos (M5): Add 1 Spell from your GY to your hand
53. Selected Dark Magical Circle (GY)
54. Selected Artmage Diactorus (Extra Deck)
55. Link Summon Purification Power Patron (Extra Deck)
56. select Medius the Pure (M1)
57. select Artmage Non-Finito (EMZ-R)
58. Activate Medius the Pure (GY): Shuffle 1 monster from your hand or face-up field into the Deck, and if you do, Special Summon this card
59. Selected Skull Archfiend of Chaos (hand)
60. Activate Purification Power Patron (EMZ-R): Link Summon including this card as material
61. Selected Medicurius the Power Patron of Illusions (Extra Deck)
62. select Medius the Pure (M1)
63. Finish selection

End board:  LP 8000 | Hand 3 | Deck 27 | Extra 12 | GY 5 | Banished 8   Monsters: M2: Artmage Diactorus Lv8 2800/2500 ATK || M3: Nerva the Power Patron of Creation Lv10 3300/3300 ATK || M4: Artmage Graflare Lv5 2100/1500 ATK || M5: Magician of Dark Chaos - Black Chaos Lv8 2800/2600 ATK || EMZ-R: Medicurius the Power Patron of Illusions L3↙↓↘ 3000    Spell/Trap: S1: Artmage Vandalism -Assault- || S2: Mind Shuffle   GY: Small World, Theorealize Liberation, Light and Darkness Ritual, Artmage Non-Finito, Purification Power Patron   Banished: Ash Blossom & Joyous Spring (face-down), Theorealize Medius (face-down), Artmage Vandalism -Assault- (face-down), Artmage Finmel (face-down), Nervedo the Shadebeast Po

## Order 7: best 11.8 (, worst 11.8) — from tries Activate Artmage Finmel
Others: forced Activate Theorealize Past Lull 10.05 · tries Activate Pendulum Treasure 9.95 · search 9.7 · opening lanes 9.4 · tries Normal Summon Theorealize Medius 8.65 · forced Activate Light and Darkness Ritual: Ritual Summon 8.65 · tries Activate Artmage Graflare 8.5 · forced Activate Artmage Graflare 5.75 · tries Normal Summon Lacrima the Crimson Tears 5.7 · tries Activate Fiendsmith's Desirae 5.7 · forced Activate Fiendsmith's Sequence 5.7 · forced Activate Mind Shuffle 5.65 · forced Activate Griffoh 5.65 · forced Activate Theorealize Liberation 5.5 · forced Link Summon S:P Little Knight 4.62

1. Set Spell/Trap Small World
2. Activate Small World (S1): activate this card
3. Selected Ash Blossom & Joyous Spring (hand)
4. Selected Medius the Pure (Deck)
5. Selected Nervedo the Shadebeast Power Patron (Deck)
6. Special Summon (procedure) Artmage Non-Finito (Extra Deck)
7. Selected Dark Magical Circle (hand)
8. Selected Nervedo the Shadebeast Power Patron (hand)
9. Yes
10. Selected Artmage Vandalism -Assault- (Deck)
11. Activate Artmage Vandalism -Assault- (S1): When this card is activated: You can add 1 "Medius the Pure" from your Deck to your hand
12. Yes
13. Selected Medius the Pure (Deck)
14. Normal Summon Medius the Pure (hand)
15. Yes
16. Selected Vidolium the Unstable Power Patron of Unity (Deck)
17. Add the card(s) to your hand
18. Activate Vidolium the Unstable Power Patron of Unity (hand): Activate it as a Pendulum Spell
19. Activate Vidolium the Unstable Power Patron of Unity (S5): Activate 1 of these effects
20. Special Summon 1 "Power Patron" monster
21. Selected Nervedo the Shadebeast Power Patron (GY)
22. Yes
23. Selected Theorealize Medius (Deck)
24. Activate Theorealize Medius (hand): If a "Power Patron" card is on the field: You can Special Summon this card from your hand, then you can add 1 "Theorealize" Spell/Trap from your Deck to your hand
25. Yes
26. Selected Theorealize Liberation (Deck)
27. Activate Nervedo the Shadebeast Power Patron (M3): Special Summon 1 "Nerva the Power Patron of Creation" from your Extra Deck
28. Activate Theorealize Liberation (hand): Add to your hand, or Special Summon, 1 monster from your Deck with 300 ATK/200 DEF
29. Selected Griffoh (Deck)
30. Add the card(s) to your hand
31. Selected Nerva the Power Patron of Creation (Extra Deck)
32. Yes
33. Selected Artmage Graflare (Deck)
34. Link Summon S:P Little Knight (Extra Deck)
35. select Medius the Pure (M4)
36. select Artmage Non-Finito (EMZ-L)
37. Yes
38. Selected Medius the Pure (GY)
39. Yes
40. Special Summon 1 "Diactorus" monster
41. Selected Artmage Diactorus (Extra Deck)
42. Activate Griffoh (hand): Activate 1 of these effects
43. Set 1 card that mentions "Light and Darkness Ritual"
44. Selected Mind Shuffle (Deck)
45. Activate Mind Shuffle (S2): activate this card
46. Yes
47. Selected Skull Archfiend of Chaos (Deck)
48. Selected Skull Archfiend of Chaos (hand)
49. Yes
50. Selected Light and Darkness Ritual (Deck)
51. Selected Magician of Dark Chaos - Black Chaos (Deck)
52. Activate Light and Darkness Ritual (GY): Add both this card and 1 card that mentions "Light and Darkness Ritual" from your GY to your hand
53. Selected Skull Archfiend of Chaos (GY)
54. Activate Light and Darkness Ritual (hand): Ritual Summon 1 "Magician of Dark Chaos - Black Chaos" or "Black Luster Soldier - Soldier of Light and Darkness" from your hand
55. Selected Magician of Dark Chaos - Black Chaos (hand)
56. Selected Griffoh (GY) value 8 or 1
57. Yes
58. Selected Dark Magical Circle (GY)
59. Special Summon (procedure) Dark Magician of Destruction (Extra Deck)
60. Selected Magician of Dark Chaos - Black Chaos (M3)
61. Yes
62. Selected Apprentice Illusion Magician (Deck)
63. Special Summon (procedure) Apprentice Illusion Magician (hand)
64. select Skull Archfiend of Chaos (hand)
65. Link Summon Medicurius the Power Patron of Illusions (Extra Deck)
66. select S:P Little Knight (EMZ-R)
67. select Apprentice Illusion Magician (M3)
68. Finish selection
69. Activate Skull Archfiend of Chaos (GY): Special Summon this card
70. select S:P Little Knight (GY)
71. select Apprentice Illusion Magician (GY)
72. select Light and Darkness Ritual (GY)
73. Default order
74. Link Summon S:P Little Knight (Extra Deck)
75. select Dark Magician of Destruction (M4)
76. select Skull Archfiend of Chaos (M3)

End board:  LP 8000 | Hand 3 | Deck 27 | Extra 11 | GY 4 | Banished 10   Monsters: M1: Artmage Diactorus Lv8 2800/2500 ATK || M2: Artmage Graflare Lv5 2100/1500 ATK || M3: S:P Little Knight L2←→ 1600  || M5: Nerva the Power Patron of Creation Lv10 3300/3300 DEF || EMZ-L: Medicurius the Power Patron of Illusions L3↙↓↘ 3000    Spell/Trap: S1: Artmage Vandalism -Assault- || S2: Mind Shuffle   GY: Small World, Artmage Non-Finito, Skull Archfiend of Chaos, Dark Magician of Destruction   Banished: Ash Blossom & Joyous Spring (face-down), Medius the Pure (face-down), Fiendsmith's Tract (face-down), Artmage Finmel (face-down), Artmage Vandalism -Assault- (face-down), Theorealize Liberation, Medius the Pure, Th

## Order 8: best 11.8 (, worst 11.8) — from forced Activate Artmage Graflare
Others: search 11.65 · forced Activate Theorealize Liberation 11.1 · tries Activate Medius the Pure 10.8 · forced Activate Theorealize Past Lull 10 · tries Activate Ars Magna of Infinity and Finity 9.4 · tries Activate Ars Magna of Infinity and Finity 9.4 · forced Activate Light and Darkness Ritual: Ritual Summon 6.65 · tries Activate Artmage Diactorus 5.75 · tries Activate Fiendsmith's Tract 5.7 · forced Activate Fiendsmith's Sequence 5.7 · opening lanes 5.65 · forced Activate Griffoh 5.65 · forced Activate Mind Shuffle 5.65 · tries Activate Fiendsmith Engraver 5.35 · forced Link Summon S:P Little Knight 5.13

1. Set Spell/Trap Small World
2. Activate Small World (S1): activate this card
3. Selected Ash Blossom & Joyous Spring (hand)
4. Selected Theorealize Medius (Deck)
5. Selected Nervedo the Shadebeast Power Patron (Deck)
6. Special Summon (procedure) Artmage Non-Finito (Extra Deck)
7. Selected Dark Magical Circle (hand)
8. Selected Nervedo the Shadebeast Power Patron (hand)
9. Yes
10. Selected Artmage Vandalism -Assault- (Deck)
11. Activate Artmage Vandalism -Assault- (S1): When this card is activated: You can add 1 "Medius the Pure" from your Deck to your hand
12. Yes
13. Selected Medius the Pure (Deck)
14. Normal Summon Medius the Pure (hand)
15. Yes
16. Selected Vidolium the Unstable Power Patron of Unity (Deck)
17. Add the card(s) to your hand
18. Activate Vidolium the Unstable Power Patron of Unity (hand): Activate it as a Pendulum Spell
19. Activate Vidolium the Unstable Power Patron of Unity (S5): Activate 1 of these effects
20. Special Summon 1 "Power Patron" monster
21. Selected Nervedo the Shadebeast Power Patron (GY)
22. Yes
23. Selected Theorealize Medius (Deck)
24. Activate Nervedo the Shadebeast Power Patron (M4): Special Summon 1 "Nerva the Power Patron of Creation" from your Extra Deck
25. Selected Nerva the Power Patron of Creation (Extra Deck)
26. Yes
27. Selected Artmage Graflare (Deck)
28. Activate Theorealize Medius (hand): If a "Power Patron" card is on the field: You can Special Summon this card from your hand, then you can add 1 "Theorealize" Spell/Trap from your Deck to your hand
29. Yes
30. Selected Theorealize Liberation (Deck)
31. Activate Theorealize Liberation (hand): Add to your hand, or Special Summon, 1 monster from your Deck with 300 ATK/200 DEF
32. Selected Griffoh (Deck)
33. Add the card(s) to your hand
34. Activate Griffoh (hand): Activate 1 of these effects
35. Set 1 card that mentions "Light and Darkness Ritual"
36. Selected Mind Shuffle (Deck)
37. Activate Mind Shuffle (S2): activate this card
38. No
39. Activate Mind Shuffle (S2): Add 1 appropriate monster to your hand
40. Selected Skull Archfiend of Chaos (Deck)
41. Selected Skull Archfiend of Chaos (hand)
42. Yes
43. Selected Light and Darkness Ritual (Deck)
44. Selected Magician of Dark Chaos - Black Chaos (Deck)
45. Activate Light and Darkness Ritual (GY): Add both this card and 1 card that mentions "Light and Darkness Ritual" from your GY to your hand
46. Selected Skull Archfiend of Chaos (GY)
47. Activate Light and Darkness Ritual (hand): Ritual Summon 1 "Magician of Dark Chaos - Black Chaos" or "Black Luster Soldier - Soldier of Light and Darkness" from your hand
48. Selected Magician of Dark Chaos - Black Chaos (hand)
49. Selected Griffoh (GY) value 8 or 1
50. Yes
51. Special Summon 1 "Diactorus" monster
52. Activate Magician of Dark Chaos - Black Chaos (M5): Add 1 Spell from your GY to your hand
53. Selected Theorealize Liberation (GY)
54. Selected Artmage Diactorus (Extra Deck)
55. Special Summon (procedure) Dark Magician of Destruction (Extra Deck)
56. Selected Magician of Dark Chaos - Black Chaos (M5)
57. Yes
58. Selected Apprentice Illusion Magician (Deck)
59. Link Summon Purification Power Patron (Extra Deck)
60. select Medius the Pure (M1)
61. select Artmage Non-Finito (EMZ-R)
62. Activate Medius the Pure (GY): Shuffle 1 monster from your hand or face-up field into the Deck, and if you do, Special Summon this card
63. Selected Apprentice Illusion Magician (hand)
64. Activate Purification Power Patron (EMZ-R): Link Summon including this card as material
65. Selected Medicurius the Power Patron of Illusions (Extra Deck)
66. select Medius the Pure (M1)
67. Finish selection
68. Activate Skull Archfiend of Chaos (hand): Special Summon this card
69. select Dark Magical Circle (GY)
70. select Purification Power Patron (GY)
71. select Light and Darkness Ritual (GY)
72. Default order
73. Link Summon S:P Little Knight (Extra Deck)
74. select Dark Magician of Destruction (M5)
75. select Skull Archfiend of Chaos (M1)
76. No

End board:  LP 8000 | Hand 3 | Deck 28 | Extra 11 | GY 4 | Banished 9   Monsters: M1: S:P Little Knight L2←→ 1600  || M2: Artmage Graflare Lv5 2100/1500 ATK || M3: Nerva the Power Patron of Creation Lv10 3300/3300 ATK || M4: Artmage Diactorus Lv8 2800/2500 DEF || EMZ-L: Medicurius the Power Patron of Illusions L3↙↓↘ 3000    Spell/Trap: S1: Artmage Vandalism -Assault- || S2: Mind Shuffle   GY: Small World, Artmage Non-Finito, Skull Archfiend of Chaos, Dark Magician of Destruction   Banished: Ash Blossom & Joyous Spring (face-down), Theorealize Medius (face-down), Vidolium the Unstable Power Patron of Unity (face-down), Lacrima the Crimson Tears (face-down), Medius the Pure (face-down), Griffoh, Theoreal

