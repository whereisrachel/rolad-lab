# Evolved lines — Prohibited Power Patron Portal - Terminus, Ash Blossom & Joyous Spring, Ash Blossom & Joyous Spring, Droll & Lock Bird, Ghost Ogre & Snow Rabbit (findlist-1100)
2026-11-26T01:15:51.516Z

8 deck orders (different face-down banishes / draws), 3 opponent hands x o_ss_panama + o_elfnote + o_despia + o_angelechy per line, 5 min searches, 6 mutation rounds.
Fitness = end-board interruptions (the lab scorer, src/disrupt.mjs: wipe 2, negate 1-1.5, banish/protection less; hand traps kept count 1 each). The winner of each order is also played into the opponent decks: margin after their turn shown beside it.

**Margin after their turn (winners): average 4.35** (worst -4.14)

**Best line per deck order: average 14.87** (worst order 13.9). Winner came from: tries Activate Mind Shuffle 1, forced Activate Mind Shuffle 1, tries Normal Summon Fiendsmith Engraver 1, forced Activate Fiendsmith's Sequence 2, tries Activate Junoldo the Shadespirit Power Patron 1, tries Activate Fiendsmith's Tract → new ending → new ending 1, tries Special Summon (procedure) Nervedo the Shadebeast Power Patron 1

## Weak points found automatically
Cards whose face-down banish (by your own costs) hurt the best line most (average best line without vs with that card banished):

| card | orders where it was banished | drop |
|---|---|---|
| Black Chaos | 4/8 | 1.16 |
| Ash Blossom & Joyous Spring | 5/8 | 0.82 |
| Theorealize Medius | 6/8 | 0.81 |
| Ars Magna - "Citrinitas" | 6/8 | 0.81 |
| Theorealize Liberation | 3/8 | 0.78 |
| Artmage Vandalism -Assault- | 7/8 | 0.72 |
| Ars Magna of Purification and Corruption | 4/8 | 0.66 |
| Prohibited Power Patron Portal - Terminus | 2/8 | 0.63 |
| Griffoh | 3/8 | 0.51 |
| Theorealize Past Lull | 5/8 | 0.29 |

List changes proposed for the list test (data/proposals-findlist-1100.json):
- +1 Black Chaos, −1 Plundered Power Patron Plane - Vidolia — Black Chaos: best line 1.16 worse when a cost banished it (4 of 8 orders) — Prohibited Power Patron Portal - Terminus
- +1 Theorealize Medius, −1 Artmage Vandalism -Assault- — Theorealize Medius: best line 0.81 worse when a cost banished it (6 of 8 orders) — Prohibited Power Patron Portal - Terminus
- +1 Ars Magna - "Citrinitas", −1 Small World — Ars Magna - "Citrinitas": best line 0.81 worse when a cost banished it (6 of 8 orders) — Prohibited Power Patron Portal - Terminus
- +1 Theorealize Liberation, −1 Plundered Power Patron Plane - Vidolia — Theorealize Liberation: best line 0.78 worse when a cost banished it (3 of 8 orders) — Prohibited Power Patron Portal - Terminus
- +1 Black Chaos — Black Chaos: best line 1.16 worse when a cost banished it (4 of 8 orders) — Prohibited Power Patron Portal - Terminus (add only: deck grows, up to 60)
- +1 Theorealize Medius — Theorealize Medius: best line 0.81 worse when a cost banished it (6 of 8 orders) — Prohibited Power Patron Portal - Terminus (add only: deck grows, up to 60)
- +1 Ars Magna - "Citrinitas" — Ars Magna - "Citrinitas": best line 0.81 worse when a cost banished it (6 of 8 orders) — Prohibited Power Patron Portal - Terminus (add only: deck grows, up to 60)
- +1 Theorealize Liberation — Theorealize Liberation: best line 0.78 worse when a cost banished it (3 of 8 orders) — Prohibited Power Patron Portal - Terminus (add only: deck grows, up to 60)

Effects the search had not used, tried on purpose (best result so far):
- Special Summon (procedure) Nervedo the Shadebeast Power Patron: 15.5
- Activate Mind Shuffle: 15.35
- Activate Fiendsmith's Requiem: 15.35
- Activate Vidolium the Unstable Power Patron of Unity: 14.5
- Activate Fiendsmith's Tract: 14.5
- Activate Light and Darkness Ritual: 14.35
- Special Summon (procedure) Junoldo the Shadespirit Power Patron: 14.35
- Activate Mind Shuffle: 14.3

## Order 1: best 15.35 [margin 4.95: ss_panama null, elfnote -0.65, despia 3.14, angelechy 7.42] (, worst 15.35) — from tries Activate Mind Shuffle
Others: tries Activate Mind Shuffle → new ending 15.35 · tries Activate Mind Shuffle → new early order 14.8 · tries Activate Mind Shuffle → new ending 14.8 · forced Activate Artmage Graflare 14.65 · tries Activate Mind Shuffle → new early order 14.6 · forced Activate Griffoh 14.3 · tries Activate Junoldo the Shadespirit Power Patron 13.8 · forced Activate Light and Darkness Ritual: Ritual Summon 13.7 · tries Normal Summon Medius the Pure 13.15 · forced Special Summon (procedure) Dark Magician of Destruction 13.15 · tries Activate Fiendsmith's Desirae 13.05 · forced Synchro Summon Chaos Angel 12.85 · forced Activate Mind Shuffle 12.75 · tries Normal Summon Nervedo the Shadebeast Power Patron 12.3 · forced Activate Theorealize Past Lull 12.25 · forced Activate Theorealize Liberation 12.05 · tries Special Summon (procedure) Vidolium the Unstable Power Patron of Unity 12.05 · opening lanes 11.5 · forced Link Summon S:P Little Knight 11.35 · search 10.6 · forced Activate Fiendsmith's Sequence 9.6

1. Set Spell/Trap Prohibited Power Patron Portal - Terminus
2. Activate Prohibited Power Patron Portal - Terminus (S1): Send 1 "Power Patron" monster from your Deck or Extra Deck to the GY, then you can add 1 DARK Fairy monster from your Deck to your hand
3. Selected Nervedo the Shadebeast Power Patron (Deck)
4. Yes
5. Selected Vidolium the Unstable Power Patron of Unity (Deck)
6. Activate Vidolium the Unstable Power Patron of Unity (hand): Activate it as a Pendulum Spell
7. Activate Vidolium the Unstable Power Patron of Unity (S1): Activate 1 of these effects
8. Special Summon 1 "Power Patron" monster
9. Selected Nervedo the Shadebeast Power Patron (GY)
10. Yes
11. Selected Junoldo the Shadespirit Power Patron (Deck)
12. Activate Junoldo the Shadespirit Power Patron (hand): Activate it as a Pendulum Spell
13. Activate Nervedo the Shadebeast Power Patron (M4): Special Summon 1 "Nerva the Power Patron of Creation" from your Extra Deck
14. Selected Nerva the Power Patron of Creation (Extra Deck)
15. Yes
16. Activate Junoldo the Shadespirit Power Patron (S1): Destroy this card, draw 2 cards, then discard 1 card
17. Selected Ash Blossom & Joyous Spring (hand)
18. Selected Artmage Finmel (Deck)
19. Yes
20. Selected Nervedo the Shadebeast Power Patron (Extra Deck)
21. Activate Black Chaos (hand): Special Summon ("Black Chaos")
22. Selected Mind Shuffle (Deck)
23. Activate Mind Shuffle (S1): Add 1 appropriate monster to your hand
24. Selected Skull Archfiend of Chaos (Deck)
25. Selected Skull Archfiend of Chaos (hand)
26. Yes
27. Selected Light and Darkness Ritual (Deck)
28. Selected Magician of Dark Chaos - Black Chaos (Deck)
29. Activate Light and Darkness Ritual (GY): Add both this card and 1 card that mentions "Light and Darkness Ritual" from your GY to your hand
30. Selected Black Chaos (GY)
31. Activate Artmage Finmel (hand): Special Summon this card from your hand
32. Yes
33. Activate Artmage Graflare (hand): Special Summon this card from your hand
34. Yes
35. Selected Artmage Vandalism -Assault- (Deck)
36. Activate Artmage Vandalism -Assault- (S2): When this card is activated: You can add 1 "Medius the Pure" from your Deck to your hand
37. Yes
38. Selected Medius the Pure (Deck)
39. Normal Summon Medius the Pure (hand)
40. Yes
41. Selected Theorealize Medius (Deck)
42. Add the card(s) to your hand
43. Activate Artmage Vandalism -Assault- (S2): Make 1 face-up monster you control able to be treated as an "Artmage" monster if used as Fusion Material
44. Selected Artmage Finmel (M3)
45. Link Summon S:P Little Knight (Extra Deck)
46. select Medius the Pure (M5)
47. select Artmage Finmel (M3)
48. Activate Medius the Pure (GY): Shuffle 1 monster from your hand or face-up field into the Deck, and if you do, Special Summon this card
49. Selected Magician of Dark Chaos - Black Chaos (hand)
50. Activate Theorealize Medius (hand): If a "Power Patron" card is on the field: You can Special Summon this card from your hand, then you can add 1 "Theorealize" Spell/Trap from your Deck to your hand
51. Yes
52. Selected Theorealize Liberation (Deck)
53. Activate Theorealize Liberation (hand): Add to your hand, or Special Summon, 1 monster from your Deck with 300 ATK/200 DEF
54. Selected Nervedo the Shadebeast Power Patron (Deck)
55. Add the card(s) to your hand
56. Activate Theorealize Liberation (GY): Treat 1 monster you control as a Tuner this turn
57. Selected Artmage Finmel (M4)
58. Link Summon Medicurius the Power Patron of Illusions (Extra Deck)
59. select Medius the Pure (M3)
60. select S:P Little Knight (EMZ-R)
61. Finish selection
62. Yes
63. Special Summon 1 "Diactorus" monster
64. Selected Artmage Diactorus (Extra Deck)
65. Activate Artmage Diactorus (M5): Change the battle position of 1 monster on the field
66. Selected Nerva the Power Patron of Creation (M1)
67. Special Summon (procedure) Artmage Non-Finito (Extra Deck)
68. Selected Light and Darkness Ritual (hand)
69. Selected Nervedo the Shadebeast Power Patron (hand)
70. Yes
71. Selected Artmage Impasto -Recapture- (Deck)

End board:  LP 8000 | Hand 5 | Deck 25 | Extra 12 | GY 7 | Banished 6   Monsters: M1: Nerva the Power Patron of Creation Lv10 3300/3300 DEF || M2: Artmage Graflare Lv5 2100/1500 ATK || M3: Artmage Non-Finito Lv7 2400/1500 ATK || M4: Artmage Finmel Lv7 2400/1500 ATK || M5: Artmage Diactorus Lv8 2800/2500 ATK || EMZ-R: Medicurius the Power Patron of Illusions L3↙↓↘ 3000    Spell/Trap: S1: Mind Shuffle || S2: Artmage Vandalism -Assault- || S3: Artmage Impasto -Recapture- (Set)   GY: Prohibited Power Patron Portal - Terminus, Ash Blossom & Joyous Spring, Skull Archfiend of Chaos, Artmage Finmel, S:P Little Knight, Light and Darkness Ritual, Nervedo the Shadebeast Power Patron   Banished: Theorealize Medius

## Order 2: best 14.5 [margin 2.29: ss_panama -0.3, elfnote -0.05, despia -0.55, angelechy 5.83] (, worst 14.5) — from forced Activate Mind Shuffle
Others: forced Activate Mind Shuffle → new ending 14.5 · forced Activate Mind Shuffle → new early order 14.5 · tries Activate Theorealize Liberation 14.05 · search 13.2 · opening lanes 13.2 · forced Activate Theorealize Past Lull 13.2 · forced Activate Theorealize Liberation 12.75 · forced Activate Fiendsmith's Sequence 12.15 · forced Special Summon (procedure) Dark Magician of Destruction 12.1 · forced Activate Griffoh 12.05 · tries Activate Artmage Vandalism -Assault- 11.65 · forced Activate Light and Darkness Ritual: Ritual Summon 11.5 · forced Synchro Summon Chaos Angel 10.74 · tries Activate Artmage Graflare 10.7 · forced Activate Artmage Graflare 10.7 · forced Link Summon S:P Little Knight 10.6 · tries Activate Artmage Vandalism -Assault- 10.43 · tries Activate Ars Magna - "Citrinitas" 9.41 · forced Activate Mind Shuffle → new ending 9.14 · tries Activate Theorealize Past Lull 8.4

1. Normal Summon Ash Blossom & Joyous Spring (hand)
2. Activate Prohibited Power Patron Portal - Terminus (hand): Send 1 "Power Patron" monster from your Deck or Extra Deck to the GY, then you can add 1 DARK Fairy monster from your Deck to your hand
3. Selected Nervedo the Shadebeast Power Patron (Deck)
4. Yes
5. Selected Vidolium the Unstable Power Patron of Unity (Deck)
6. Activate Vidolium the Unstable Power Patron of Unity (hand): Activate it as a Pendulum Spell
7. Activate Vidolium the Unstable Power Patron of Unity (S1): Activate 1 of these effects
8. Special Summon 1 "Power Patron" monster
9. Selected Nervedo the Shadebeast Power Patron (GY)
10. Yes
11. Selected Junoldo the Shadespirit Power Patron (Deck)
12. Activate Junoldo the Shadespirit Power Patron (hand): Activate it as a Pendulum Spell
13. Activate Nervedo the Shadebeast Power Patron (M1): Special Summon 1 "Nerva the Power Patron of Creation" from your Extra Deck
14. Selected Nerva the Power Patron of Creation (Extra Deck)
15. Yes
16. Activate Junoldo the Shadespirit Power Patron (S1): Destroy this card, draw 2 cards, then discard 1 card
17. Selected Artmage Vandalism -Assault- (hand)
18. Selected Artmage Graflare (Deck)
19. Yes
20. Selected Nervedo the Shadebeast Power Patron (Extra Deck)
21. Activate Ars Magna of Purification and Corruption (hand): You can banish this card from your hand; add 1 "Ars Magna" Spell/Trap from your Deck to your hand
22. Selected Ars Magna - "Citrinitas" (Deck)
23. Special Summon (procedure) Artmage Non-Finito (Extra Deck)
24. Selected Ars Magna - "Citrinitas" (hand)
25. Selected Nervedo the Shadebeast Power Patron (hand)
26. Yes
27. Selected Artmage Impasto -Recapture- (Deck)
28. Link Summon Purification Power Patron (Extra Deck)
29. select Ash Blossom & Joyous Spring (M4)
30. select Artmage Non-Finito (M2)
31. Activate Purification Power Patron (EMZ-R): Add 1 "Theorealize" card from your Deck to your hand
32. Selected Theorealize Past Lull (Deck)
33. Set Spell/Trap Theorealize Past Lull
34. Activate Theorealize Past Lull (S2): Special Summon 1 "Medius the Pure" from your hand or Deck
35. Selected Medius the Pure (Deck)
36. Yes
37. Activate Purification Power Patron (EMZ-R): Link Summon including this card as material
38. Selected Medicurius the Power Patron of Illusions (Extra Deck)
39. select Medius the Pure (M4)
40. Finish selection
41. Selected Theorealize Medius (Deck)
42. Add the card(s) to your hand
43. Yes
44. Activate Medius the Pure (GY): Shuffle 1 monster from your hand or face-up field into the Deck, and if you do, Special Summon this card
45. Selected Ars Magna of Purification and Corruption (M3)
46. Activate Theorealize Medius (hand): If a "Power Patron" card is on the field: You can Special Summon this card from your hand, then you can add 1 "Theorealize" Spell/Trap from your Deck to your hand
47. Yes
48. Selected Theorealize Liberation (Deck)
49. Activate Theorealize Liberation (hand): Add to your hand, or Special Summon, 1 monster from your Deck with 300 ATK/200 DEF
50. Selected Griffoh (Deck)
51. Add the card(s) to your hand
52. Activate Griffoh (hand): Activate 1 of these effects
53. Set 1 card that mentions "Light and Darkness Ritual"
54. Selected Mind Shuffle (Deck)
55. Activate Mind Shuffle (S2): activate this card
56. Yes
57. Selected Skull Archfiend of Chaos (Deck)
58. Selected Skull Archfiend of Chaos (hand)
59. Yes
60. Selected Light and Darkness Ritual (Deck)
61. Selected Magician of Dark Chaos - Black Chaos (Deck)
62. Activate Light and Darkness Ritual (GY): Add both this card and 1 card that mentions "Light and Darkness Ritual" from your GY to your hand
63. Selected Skull Archfiend of Chaos (GY)
64. Set Spell/Trap Light and Darkness Ritual
65. Activate Light and Darkness Ritual (S3): Ritual Summon 1 "Magician of Dark Chaos - Black Chaos" or "Black Luster Soldier - Soldier of Light and Darkness" from your hand
66. Selected Magician of Dark Chaos - Black Chaos (hand)
67. Selected Griffoh (GY) value 8 or 1
68. Yes
69. Special Summon 1 "Diactorus" monster
70. Activate Magician of Dark Chaos - Black Chaos (M2): Add 1 Spell from your GY to your hand
71. Selected Theorealize Liberation (GY)
72. Selected Artmage Diactorus (Extra Deck)
73. Activate Artmage Diactorus (M3): Change the battle position of 1 monster on the field
74. Selected Artmage Diactorus (M3)
75. Set Spell/Trap Theorealize Liberation

End board:  LP 8000 | Hand 4 | Deck 25 | Extra 12 | GY 9 | Banished 5   Monsters: M1: Nerva the Power Patron of Creation Lv10 3300/3300 ATK || M2: Magician of Dark Chaos - Black Chaos Lv8 2800/2600 ATK || M3: Artmage Diactorus Lv8 2800/2500 DEF || M4: Medius the Pure Lv4 1800/1800 ATK || M5: Artmage Graflare Lv5 2100/1500 ATK || EMZ-L: Medicurius the Power Patron of Illusions L3↙↓↘ 3000    Spell/Trap: S1: Artmage Impasto -Recapture- (Set) || S2: Mind Shuffle || S3: Theorealize Liberation (Set)   GY: Prohibited Power Patron Portal - Terminus, Artmage Vandalism -Assault-, Ars Magna - "Citrinitas", Nervedo the Shadebeast Power Patron, Artmage Non-Finito, Ash Blossom & Joyous Spring, Theorealize Past Lull,

## Order 3: best 13.9 [margin 1.83: ss_panama 10.05, elfnote -1.07, despia -0.93, angelechy -0.45] (, worst 13.9) — from tries Normal Summon Fiendsmith Engraver
Others: search 13.8 · forced Activate Griffoh 13.15 · tries Normal Summon Fiendsmith Engraver → new ending 13 · opening lanes 12.85 · tries Activate Ars Magna of Infinity and Finity 12.4 · forced Synchro Summon Chaos Angel 12.25 · forced Activate Theorealize Past Lull 12.25 · tries Normal Summon Fiendsmith Engraver → new early order 12.25 · forced Link Summon S:P Little Knight 12.15 · forced Activate Light and Darkness Ritual: Ritual Summon 12.15 · tries Activate Plundered Power Patron Plane - Vidolia 12.1 · forced Activate Theorealize Liberation 12.1 · tries Normal Summon Lacrima the Crimson Tears 12.05 · forced Activate Artmage Graflare 12.05 · forced Activate Fiendsmith's Sequence 12.05 · forced Special Summon (procedure) Dark Magician of Destruction 12.05 · tries Activate Ars Magna of Infinity and Finity 11.55 · forced Activate Mind Shuffle 11.1 · tries Activate Plundered Power Patron Plane - Vidolia 10.65 · tries Normal Summon Fiendsmith Engraver → new ending 8.65 · tries Normal Summon Fiendsmith Engraver → new early order 3.55

1. Set Spell/Trap Prohibited Power Patron Portal - Terminus
2. Activate Prohibited Power Patron Portal - Terminus (S1): Send 1 "Power Patron" monster from your Deck or Extra Deck to the GY, then you can add 1 DARK Fairy monster from your Deck to your hand
3. Selected Nervedo the Shadebeast Power Patron (Deck)
4. Yes
5. Selected Medius the Pure (Deck)
6. Normal Summon Medius the Pure (hand)
7. Yes
8. Selected Vidolium the Unstable Power Patron of Unity (Deck)
9. Add the card(s) to your hand
10. Activate Vidolium the Unstable Power Patron of Unity (hand): Activate it as a Pendulum Spell
11. Activate Vidolium the Unstable Power Patron of Unity (S1): Activate 1 of these effects
12. Special Summon 1 "Power Patron" monster
13. Selected Nervedo the Shadebeast Power Patron (GY)
14. Yes
15. Selected Junoldo the Shadespirit Power Patron (Deck)
16. Activate Nervedo the Shadebeast Power Patron (M1): Special Summon 1 "Nerva the Power Patron of Creation" from your Extra Deck
17. Selected Nerva the Power Patron of Creation (Extra Deck)
18. Yes
19. Selected Artmage Finmel (Deck)
20. Activate Junoldo the Shadespirit Power Patron (hand): Activate it as a Pendulum Spell
21. Link Summon Purification Power Patron (Extra Deck)
22. select Medius the Pure (M3)
23. select Nerva the Power Patron of Creation (EMZ-R)
24. Activate Junoldo the Shadespirit Power Patron (S1): Destroy this card, draw 2 cards, then discard 1 card
25. Activate Purification Power Patron (EMZ-L): Add 1 "Theorealize" card from your Deck to your hand
26. Selected Theorealize Medius (Deck)
27. Selected Pendulum Treasure (hand)
28. Yes
29. Selected Nervedo the Shadebeast Power Patron (Extra Deck)
30. Activate Medius the Pure (GY): Shuffle 1 monster from your hand or face-up field into the Deck, and if you do, Special Summon this card
31. Selected Ash Blossom & Joyous Spring (hand)
32. Activate Theorealize Medius (hand): If a "Power Patron" card is on the field: You can Special Summon this card from your hand, then you can add 1 "Theorealize" Spell/Trap from your Deck to your hand
33. Yes
34. Selected Theorealize Past Lull (Deck)
35. Activate Black Chaos (hand): Special Summon ("Black Chaos")
36. Activate Purification Power Patron (EMZ-L): Link Summon including this card as material
37. Selected Medicurius the Power Patron of Illusions (Extra Deck)
38. select Medius the Pure (M4)
39. Finish selection
40. Selected Mind Shuffle (Deck)
41. Yes
42. Special Summon 1 "Diactorus" monster
43. Selected Artmage Diactorus (Extra Deck)
44. Activate Mind Shuffle (S1): Add 1 appropriate monster to your hand
45. Selected Skull Archfiend of Chaos (Deck)
46. Selected Skull Archfiend of Chaos (hand)
47. Yes
48. Selected Light and Darkness Ritual (Deck)
49. Selected Black Luster Soldier - Soldier of Light and Darkness (Deck)
50. Special Summon (procedure) Artmage Non-Finito (Extra Deck)
51. Selected Theorealize Past Lull (hand)
52. Selected Nervedo the Shadebeast Power Patron (hand)
53. Yes
54. Selected Artmage Impasto -Recapture- (Deck)
55. Activate Light and Darkness Ritual (GY): Add both this card and 1 card that mentions "Light and Darkness Ritual" from your GY to your hand
56. Selected Black Chaos (GY)
57. Special Summon (procedure) Black Chaos (hand)
58. select Black Luster Soldier - Soldier of Light and Darkness (hand)
59. Special Summon (procedure) Dark Magician of Destruction (Extra Deck)
60. Selected Black Chaos (M5)
61. Yes
62. Selected Apprentice Illusion Magician (Deck)
63. Activate Skull Archfiend of Chaos (GY): Special Summon this card
64. select Nervedo the Shadebeast Power Patron (GY)
65. select Theorealize Past Lull (GY)
66. select Black Chaos (banishment)
67. Default order
68. Link Summon S:P Little Knight (Extra Deck)
69. select Skull Archfiend of Chaos (M5)
70. select Dark Magician of Destruction (M2)
71. Yes
72. Selected Purification Power Patron (GY)

End board:  LP 8000 | Hand 5 | Deck 31 | Extra 10 | GY 5 | Banished 6   Monsters: M1: Artmage Finmel Lv7 2400/1500 ATK || M3: Artmage Diactorus Lv8 2800/2500 ATK || M4: Artmage Non-Finito Lv7 2400/1500 ATK || M5: S:P Little Knight L2←→ 1600  || EMZ-R: Medicurius the Power Patron of Illusions L3↙↓↘ 3000    Spell/Trap: S1: Mind Shuffle || S2: Artmage Impasto -Recapture- (Set)   GY: Prohibited Power Patron Portal - Terminus, Nerva the Power Patron of Creation, Pendulum Treasure, Dark Magician of Destruction, Skull Archfiend of Chaos   Banished: Pendulum Treasure (face-down), Magician of Dark Chaos - Black Chaos (face-down), Theorealize Liberation (face-down), Medius the Pure, Theorealize Medius, Purificat

## Order 4: best 14.75 [margin 5.66: ss_panama 11.9, elfnote 1.12, despia 4.11, angelechy 7.07] (, worst 14.75) — from forced Activate Fiendsmith's Sequence
Others: opening lanes 14.5 · tries Special Summon (procedure) Junoldo the Shadespirit Power Patron 14.35 · tries Activate Light and Darkness Ritual 14.35 · forced Activate Griffoh 14.2 · forced Activate Fiendsmith's Sequence → new ending 13.95 · tries Activate Light and Darkness Ritual 13.8 · search 13.05 · forced Special Summon (procedure) Dark Magician of Destruction 13.05 · forced Synchro Summon Chaos Angel 12.1 · forced Activate Artmage Graflare 12.1 · forced Activate Light and Darkness Ritual: Ritual Summon 12.05 · forced Activate Mind Shuffle 11.5 · tries Activate Ars Magna - "Citrinitas" 11.5 · tries Activate Artmage Diactorus 11.15 · forced Activate Theorealize Liberation 11.05 · forced Link Summon S:P Little Knight 10.85 · tries Activate Ars Magna of Purification and Corruption 10.72 · forced Activate Fiendsmith's Sequence → new early order 10.06 · forced Activate Theorealize Past Lull 7.52

1. Set Spell/Trap Prohibited Power Patron Portal - Terminus
2. Activate Prohibited Power Patron Portal - Terminus (S1): Send 1 "Power Patron" monster from your Deck or Extra Deck to the GY, then you can add 1 DARK Fairy monster from your Deck to your hand
3. Selected Nervedo the Shadebeast Power Patron (Deck)
4. Yes
5. Selected Medius the Pure (Deck)
6. Normal Summon Medius the Pure (hand)
7. Yes
8. Selected Vidolium the Unstable Power Patron of Unity (Deck)
9. Add the card(s) to your hand
10. Activate Vidolium the Unstable Power Patron of Unity (hand): Activate it as a Pendulum Spell
11. Activate Vidolium the Unstable Power Patron of Unity (S1): Activate 1 of these effects
12. Special Summon 1 "Power Patron" monster
13. Selected Nervedo the Shadebeast Power Patron (GY)
14. Yes
15. Selected Junoldo the Shadespirit Power Patron (Deck)
16. Activate Junoldo the Shadespirit Power Patron (hand): Activate it as a Pendulum Spell
17. Link Summon Purification Power Patron (Extra Deck)
18. select Nervedo the Shadebeast Power Patron (M5)
19. select Medius the Pure (M4)
20. Yes
21. Activate Junoldo the Shadespirit Power Patron (S1): Destroy this card, draw 2 cards, then discard 1 card
22. Selected Droll & Lock Bird (hand)
23. Selected Artmage Graflare (Deck)
24. Yes
25. Selected Nervedo the Shadebeast Power Patron (Extra Deck)
26. Activate Medius the Pure (GY): Shuffle 1 monster from your hand or face-up field into the Deck, and if you do, Special Summon this card
27. Selected Ash Blossom & Joyous Spring (hand)
28. Activate Artmage Finmel (hand): Special Summon this card from your hand
29. Yes
30. Activate Theorealize Medius (hand): If a "Power Patron" card is on the field: You can Special Summon this card from your hand, then you can add 1 "Theorealize" Spell/Trap from your Deck to your hand
31. Yes
32. Selected Theorealize Liberation (Deck)
33. Activate Theorealize Liberation (hand): Add to your hand, or Special Summon, 1 monster from your Deck with 300 ATK/200 DEF
34. Activate Purification Power Patron (EMZ-L): Link Summon including this card as material
35. Selected Medicurius the Power Patron of Illusions (Extra Deck)
36. select Medius the Pure (M4)
37. Finish selection
38. Selected Griffoh (Deck)
39. Add the card(s) to your hand
40. Yes
41. Special Summon 1 "Diactorus" monster
42. Selected Artmage Diactorus (Extra Deck)
43. Activate Theorealize Liberation (GY): Treat 1 monster you control as a Tuner this turn
44. Selected Medicurius the Power Patron of Illusions (EMZ-L)
45. Activate Griffoh (hand): Activate 1 of these effects
46. Set 1 card that mentions "Light and Darkness Ritual"
47. Selected Mind Shuffle (Deck)
48. Activate Fiendsmith Engraver (hand): Add 1 "Fiendsmith" Spell/Trap from your Deck to your hand
49. Selected Fiendsmith's Tract (Deck)
50. Set Spell/Trap Fiendsmith's Tract
51. Activate Fiendsmith's Tract (S2): Add 1 LIGHT Fiend monster from your Deck to your hand
52. Activate Mind Shuffle (S1): activate this card
53. No
54. Selected Lacrima the Crimson Tears (Deck)
55. Selected Lacrima the Crimson Tears (hand)
56. Activate Mind Shuffle (S1): Add 1 appropriate monster to your hand
57. Selected Skull Archfiend of Chaos (Deck)
58. Selected Skull Archfiend of Chaos (hand)
59. Yes
60. Selected Light and Darkness Ritual (Deck)
61. Selected Magician of Dark Chaos - Black Chaos (Deck)
62. Activate Light and Darkness Ritual (GY): Add both this card and 1 card that mentions "Light and Darkness Ritual" from your GY to your hand
63. Selected Griffoh (GY)
64. Activate Light and Darkness Ritual (hand): Ritual Summon 1 "Magician of Dark Chaos - Black Chaos" or "Black Luster Soldier - Soldier of Light and Darkness" from your hand
65. Selected Magician of Dark Chaos - Black Chaos (hand)
66. Selected Griffoh (hand) value 8 or 1
67. Yes
68. Selected Light and Darkness Ritual (GY)
69. Special Summon (procedure) Dark Magician of Destruction (Extra Deck)
70. Selected Magician of Dark Chaos - Black Chaos (M3)
71. No
72. Activate Fiendsmith Engraver (GY): Special Summon this card
73. Selected Lacrima the Crimson Tears (GY)
74. Link Summon Fiendsmith's Requiem (Extra Deck)
75. select Fiendsmith Engraver (M3)
76. Activate Fiendsmith's Requiem (M3): Special Summon 1 "Fiendsmith" monster
77. Selected Lacrima the Crimson Tears (Deck)
78. Yes
79. Selected Fiendsmith Engraver (Deck)
80. Activate Fiendsmith's Requiem (GY): Equip this card to 1 non-Link LIGHT Fiend you control
81. Selected Lacrima the Crimson Tears (M3)
82. Link Summon Fiendsmith's Sequence (Extra Deck)
83. select Dark Magician of Destruction (M4)
84. select Lacrima the Crimson Tears (M3)
85. Activate Fiendsmith's Sequence (M3): Fusion Summon 1 Fiend Fusion Monster
86. Selected Fiendsmith's Desirae (Extra Deck)
87. select Fiendsmith Engraver (GY)
88. select Fiendsmith's Requiem (GY)
89. select Lacrima the Crimson Tears (GY)
90. Activate Fiendsmith's Sequence (M3): Equip this card to 1 non-Link LIGHT Fiend you control
91. Selected Fiendsmith's Desirae (M4)
92. Activate Fiendsmith's Desirae (M4): Negate the effects of face-up cards on the field
93. Selected Artmage Diactorus (M2)
94. Special Summon (procedure) Artmage Non-Finito (Extra Deck)
95. Selected Light and Darkness Ritual (hand)
96. Selected Nervedo the Shadebeast Power Patron (hand)
97. Yes
98. Selected Artmage Impasto -Recapture- (Deck)

End board:  LP 8000 | Hand 2 | Deck 29 | Extra 10 | GY 10 | Banished 4   Monsters: M1: Artmage Graflare Lv5 2100/1500 ATK || M2: Artmage Diactorus Lv8 2800/2500 ATK [NEGATED] || M3: Artmage Non-Finito Lv7 2400/1500 ATK || M4: Fiendsmith's Desirae Lv9 2800/2400 ATK || M5: Artmage Finmel Lv7 2400/1500 ATK || EMZ-L: Medicurius the Power Patron of Illusions L3↙↓↘ 3000    Spell/Trap: S1: Mind Shuffle || S2: Fiendsmith's Sequence || S3: Artmage Impasto -Recapture- (Set)   GY: Prohibited Power Patron Portal - Terminus, Droll & Lock Bird, Purification Power Patron, Fiendsmith's Tract, Skull Archfiend of Chaos, Griffoh, Fiendsmith Engraver, Dark Magician of Destruction, Light and Darkness Ritual, Nervedo the Sh

## Order 5: best 14 [margin 4.53: ss_panama 3.78, elfnote -0.8, despia -4.14, angelechy 9.95] (, worst 14) — from tries Activate Junoldo the Shadespirit Power Patron
Others: tries Activate Junoldo the Shadespirit Power Patron → new ending 14 · forced Activate Griffoh 13.95 · tries Activate Junoldo the Shadespirit Power Patron → new early order 13.65 · tries Activate Junoldo the Shadespirit Power Patron → new ending 13.65 · tries Activate Pendulum Treasure 13.5 · tries Activate Artmage Finmel 13.45 · opening lanes 13.45 · tries Normal Summon Ars Magna of Purification and Corruption 13.45 · tries Activate Junoldo the Shadespirit Power Patron → new early order 13.45 · tries Activate Junoldo the Shadespirit Power Patron → new early order 13.3 · forced Activate Artmage Graflare 13.2 · forced Special Summon (procedure) Dark Magician of Destruction 13.2 · forced Activate Light and Darkness Ritual: Ritual Summon 13.15 · search 13.05 · tries Activate Junoldo the Shadespirit Power Patron → new ending 12.25 · tries Normal Summon Ars Magna of Infinity and Finity 12.05 · forced Link Summon S:P Little Knight 12.05 · forced Activate Theorealize Past Lull 12 · tries Normal Summon Junoldo the Shadespirit Power Patron 12 · forced Activate Theorealize Liberation 11.5 · forced Activate Mind Shuffle 11.03 · forced Activate Fiendsmith's Sequence 10.05 · forced Synchro Summon Chaos Angel 9.85

1. Set Spell/Trap Prohibited Power Patron Portal - Terminus
2. Activate Prohibited Power Patron Portal - Terminus (S1): Send 1 "Power Patron" monster from your Deck or Extra Deck to the GY, then you can add 1 DARK Fairy monster from your Deck to your hand
3. Selected Nervedo the Shadebeast Power Patron (Deck)
4. Yes
5. Selected Medius the Pure (Deck)
6. Normal Summon Medius the Pure (hand)
7. Yes
8. Selected Vidolium the Unstable Power Patron of Unity (Deck)
9. Add the card(s) to your hand
10. Activate Vidolium the Unstable Power Patron of Unity (hand): Activate it as a Pendulum Spell
11. Activate Vidolium the Unstable Power Patron of Unity (S1): Activate 1 of these effects
12. Special Summon 1 "Power Patron" monster
13. Selected Nervedo the Shadebeast Power Patron (GY)
14. Yes
15. Selected Junoldo the Shadespirit Power Patron (Deck)
16. Activate Junoldo the Shadespirit Power Patron (hand): Activate it as a Pendulum Spell
17. Activate Nervedo the Shadebeast Power Patron (M3): Special Summon 1 "Nerva the Power Patron of Creation" from your Extra Deck
18. Selected Nerva the Power Patron of Creation (Extra Deck)
19. Yes
20. Activate Junoldo the Shadespirit Power Patron (S1): Destroy this card, draw 2 cards, then discard 1 card
21. Selected Plundered Power Patron Plane - Vidolia (hand)
22. Selected Junoldo the Shadespirit Power Patron (Extra Deck)
23. Activate Junoldo the Shadespirit Power Patron (EMZ-L): Special Summon 1 "Junora the Power Patron of Tuning" from your Extra Deck
24. Selected Junora the Power Patron of Tuning (Extra Deck)
25. Yes
26. Selected Nervedo the Shadebeast Power Patron (Extra Deck)
27. Link Summon Purification Power Patron (Extra Deck)
28. select Medius the Pure (M4)
29. select Junora the Power Patron of Tuning (EMZ-R)
30. Yes
31. Selected Theorealize Medius (Deck)
32. Activate Medius the Pure (GY): Shuffle 1 monster from your hand or face-up field into the Deck, and if you do, Special Summon this card
33. Selected Ash Blossom & Joyous Spring (hand)
34. Activate Theorealize Medius (hand): If a "Power Patron" card is on the field: You can Special Summon this card from your hand, then you can add 1 "Theorealize" Spell/Trap from your Deck to your hand
35. Yes
36. Selected Theorealize Liberation (Deck)
37. Special Summon (procedure) Artmage Non-Finito (Extra Deck)
38. Selected Theorealize Liberation (hand)
39. Selected Nervedo the Shadebeast Power Patron (hand)
40. Yes
41. Activate Purification Power Patron (EMZ-R): Link Summon including this card as material
42. Selected Medicurius the Power Patron of Illusions (Extra Deck)
43. select Medius the Pure (M1)
44. Finish selection
45. Selected Artmage Impasto -Recapture- (Deck)
46. Yes
47. Special Summon 1 "Diactorus" monster
48. Selected Artmage Diactorus (Extra Deck)
49. Activate Artmage Finmel (hand): Special Summon this card from your hand
50. Yes
51. Set Spell/Trap Mind Shuffle

End board:  LP 8000 | Hand 3 | Deck 29 | Extra 11 | GY 6 | Banished 8   Monsters: M1: Artmage Finmel Lv7 2400/1500 ATK || M3: Nerva the Power Patron of Creation Lv10 3300/3300 ATK || M4: Artmage Diactorus Lv8 2800/2500 ATK || M5: Artmage Non-Finito Lv7 2400/1500 ATK || EMZ-R: Medicurius the Power Patron of Illusions L3↙↓↘ 3000    Spell/Trap: S1: Artmage Impasto -Recapture- (Set) || S2: Mind Shuffle (Set)   GY: Prohibited Power Patron Portal - Terminus, Plundered Power Patron Plane - Vidolia, Junora the Power Patron of Tuning, Theorealize Liberation, Nervedo the Shadebeast Power Patron, Purification Power Patron   Banished: Artmage Vandalism -Assault- (face-down), Theorealize Medius (face-down), Griffoh

## Order 6: best 16.05 [margin 9.12: ss_panama 12.05, elfnote 7.32, despia 7.06, angelechy 12] (, worst 16.05) — from tries Activate Fiendsmith's Tract → new ending → new ending
Others: tries Activate Fiendsmith's Tract → new ending 16 · tries Activate Fiendsmith's Tract → new ending → new ending → new early order 14.75 · tries Activate Fiendsmith's Tract 14.5 · opening lanes 14.5 · tries Activate Vidolium the Unstable Power Patron of Unity 14.5 · tries Activate Fiendsmith Engraver 14.3 · forced Activate Light and Darkness Ritual: Ritual Summon 14.3 · tries Activate Mind Shuffle 13.5 · forced Activate Mind Shuffle 13.05 · tries Normal Summon Theorealize Medius 12.9 · forced Activate Fiendsmith's Sequence 12.25 · forced Special Summon (procedure) Dark Magician of Destruction 12.2 · tries Activate Fiendsmith's Tract → new ending → new early order 12.2 · forced Activate Artmage Graflare 12.1 · search 12.05 · forced Activate Theorealize Liberation 12.05 · tries Activate Black Chaos 11.85 · forced Activate Griffoh 11.5 · forced Synchro Summon Chaos Angel 10.3 · tries Activate Fiendsmith's Tract → new ending → new ending → new early order 10.03 · forced Link Summon S:P Little Knight 9.41 · forced Activate Theorealize Past Lull 7.28

1. Activate Prohibited Power Patron Portal - Terminus (hand): Send 1 "Power Patron" monster from your Deck or Extra Deck to the GY, then you can add 1 DARK Fairy monster from your Deck to your hand
2. Selected Nervedo the Shadebeast Power Patron (Deck)
3. Yes
4. Selected Vidolium the Unstable Power Patron of Unity (Deck)
5. Activate Vidolium the Unstable Power Patron of Unity (hand): Activate it as a Pendulum Spell
6. Activate Vidolium the Unstable Power Patron of Unity (S1): Activate 1 of these effects
7. Special Summon 1 "Power Patron" monster
8. Selected Nervedo the Shadebeast Power Patron (GY)
9. Yes
10. Selected Junoldo the Shadespirit Power Patron (Deck)
11. Activate Junoldo the Shadespirit Power Patron (hand): Activate it as a Pendulum Spell
12. Activate Nervedo the Shadebeast Power Patron (M3): Special Summon 1 "Nerva the Power Patron of Creation" from your Extra Deck
13. Selected Nerva the Power Patron of Creation (Extra Deck)
14. Yes
15. Activate Junoldo the Shadespirit Power Patron (S1): Destroy this card, draw 2 cards, then discard 1 card
16. Selected Ash Blossom & Joyous Spring (hand)
17. Selected Artmage Finmel (Deck)
18. Yes
19. Selected Nervedo the Shadebeast Power Patron (Extra Deck)
20. Activate Artmage Graflare (hand): Special Summon this card from your hand
21. Yes
22. Selected Artmage Vandalism -Assault- (Deck)
23. Activate Fiendsmith Engraver (hand): Add 1 "Fiendsmith" Spell/Trap from your Deck to your hand
24. Selected Fiendsmith's Tract (Deck)
25. Set Spell/Trap Fiendsmith's Tract
26. Activate Fiendsmith's Tract (S2): Add 1 LIGHT Fiend monster from your Deck to your hand
27. Selected Lacrima the Crimson Tears (Deck)
28. Selected Lacrima the Crimson Tears (hand)
29. Activate Fiendsmith Engraver (GY): Special Summon this card
30. Selected Lacrima the Crimson Tears (GY)
31. Activate Artmage Vandalism -Assault- (S1): When this card is activated: You can add 1 "Medius the Pure" from your Deck to your hand
32. Yes
33. Selected Medius the Pure (Deck)
34. Link Summon Fiendsmith's Requiem (Extra Deck)
35. select Fiendsmith Engraver (M2)
36. Activate Fiendsmith's Requiem (EMZ-L): Special Summon 1 "Fiendsmith" monster
37. Selected Lacrima the Crimson Tears (Deck)
38. No
39. Normal Summon Medius the Pure (hand)
40. Yes
41. Selected Theorealize Medius (Deck)
42. Add the card(s) to your hand
43. Activate Fiendsmith's Requiem (GY): Equip this card to 1 non-Link LIGHT Fiend you control
44. Selected Lacrima the Crimson Tears (M2)
45. Link Summon Fiendsmith's Sequence (Extra Deck)
46. select Medius the Pure (M5)
47. select Lacrima the Crimson Tears (M2)
48. Activate Theorealize Medius (hand): If a "Power Patron" card is on the field: You can Special Summon this card from your hand, then you can add 1 "Theorealize" Spell/Trap from your Deck to your hand
49. Yes
50. Selected Theorealize Liberation (Deck)
51. Activate Fiendsmith's Sequence (EMZ-L): Fusion Summon 1 Fiend Fusion Monster
52. Selected Fiendsmith's Desirae (Extra Deck)
53. select Lacrima the Crimson Tears (GY)
54. select Fiendsmith's Requiem (GY)
55. select Fiendsmith Engraver (GY)
56. Activate Medius the Pure (GY): Shuffle 1 monster from your hand or face-up field into the Deck, and if you do, Special Summon this card
57. Selected Nerva the Power Patron of Creation (M4)
58. Activate Theorealize Liberation (hand): Add to your hand, or Special Summon, 1 monster from your Deck with 300 ATK/200 DEF
59. Selected Griffoh (Deck)
60. Add the card(s) to your hand
61. Activate Griffoh (hand): Activate 1 of these effects
62. Set 1 card that mentions "Light and Darkness Ritual"
63. Selected Mind Shuffle (Deck)
64. Activate Mind Shuffle (S2): activate this card
65. No
66. Activate Mind Shuffle (S2): Add 1 appropriate monster to your hand
67. Selected Skull Archfiend of Chaos (Deck)
68. Selected Skull Archfiend of Chaos (hand)
69. Yes
70. Selected Light and Darkness Ritual (Deck)
71. Selected Black Luster Soldier - Soldier of Light and Darkness (Deck)
72. Activate Light and Darkness Ritual (GY): Add both this card and 1 card that mentions "Light and Darkness Ritual" from your GY to your hand
73. Selected Griffoh (GY)
74. Activate Theorealize Liberation (GY): Treat 1 monster you control as a Tuner this turn
75. Selected Artmage Finmel (M3)
76. Link Summon Medicurius the Power Patron of Illusions (Extra Deck)
77. select Medius the Pure (M4)
78. select Fiendsmith's Sequence (EMZ-L)
79. Finish selection
80. Yes
81. Special Summon 1 "Diactorus" monster
82. Selected Artmage Diactorus (Extra Deck)
83. Special Summon (procedure) Artmage Non-Finito (Extra Deck)
84. Selected Light and Darkness Ritual (hand)
85. Selected Nervedo the Shadebeast Power Patron (hand)
86. Yes
87. Selected Artmage Impasto -Recapture- (Deck)
88. Activate Artmage Diactorus (M4): Change the battle position of 1 monster on the field
89. Selected Artmage Non-Finito (M2)
90. Activate Fiendsmith's Sequence (GY): Equip this card to 1 non-Link LIGHT Fiend you control
91. Selected Fiendsmith's Desirae (M5)
92. Activate Fiendsmith's Desirae (M5): Negate the effects of face-up cards on the field
93. Selected Medicurius the Power Patron of Illusions (EMZ-R)

End board:  LP 8000 | Hand 5 | Deck 25 | Extra 12 | GY 6 | Banished 6   Monsters: M1: Artmage Graflare Lv5 2100/1500 ATK || M2: Artmage Non-Finito Lv7 2400/1500 DEF || M3: Artmage Finmel Lv7 2400/1500 ATK || M4: Artmage Diactorus Lv8 2800/2500 ATK || M5: Fiendsmith's Desirae Lv9 2800/2400 ATK || EMZ-R: Medicurius the Power Patron of Illusions L3↙↓↘ 3000  [NEGATED]   Spell/Trap: S1: Artmage Vandalism -Assault- || S2: Mind Shuffle || S3: Artmage Impasto -Recapture- (Set) || S4: Fiendsmith's Sequence   GY: Prohibited Power Patron Portal - Terminus, Ash Blossom & Joyous Spring, Fiendsmith's Tract, Skull Archfiend of Chaos, Light and Darkness Ritual, Nervedo the Shadebeast Power Patron   Banished: Artmage F

## Order 7: best 14.9 [margin 4.65: ss_panama -0.65, elfnote 5.6, despia 3.16, angelechy 7.27] (, worst 14.9) — from forced Activate Fiendsmith's Sequence
Others: forced Activate Theorealize Past Lull 14.6 · tries Activate Mind Shuffle 14.3 · forced Synchro Summon Chaos Angel 14.3 · forced Activate Artmage Graflare 14.2 · tries Activate Small World 13.95 · forced Activate Theorealize Liberation 13 · tries Activate Ars Magna of Purification and Corruption 12.9 · forced Special Summon (procedure) Dark Magician of Destruction 12.45 · opening lanes 12.1 · forced Activate Mind Shuffle 12.1 · forced Activate Light and Darkness Ritual: Ritual Summon 12.05 · tries Activate Theorealize Liberation 12.05 · search 12 · forced Activate Griffoh 10.9 · forced Link Summon S:P Little Knight 10.8 · tries Activate Junoldo the Shadespirit Power Patron 10.75 · tries Activate Theorealize Past Lull 10.65

1. Normal Summon Ash Blossom & Joyous Spring (hand)
2. Set Spell/Trap Prohibited Power Patron Portal - Terminus
3. Activate Prohibited Power Patron Portal - Terminus (S1): Send 1 "Power Patron" monster from your Deck or Extra Deck to the GY, then you can add 1 DARK Fairy monster from your Deck to your hand
4. Selected Nervedo the Shadebeast Power Patron (Deck)
5. Yes
6. Selected Vidolium the Unstable Power Patron of Unity (Deck)
7. Activate Vidolium the Unstable Power Patron of Unity (hand): Activate it as a Pendulum Spell
8. Activate Vidolium the Unstable Power Patron of Unity (S1): Activate 1 of these effects
9. Special Summon 1 "Power Patron" monster
10. Selected Nervedo the Shadebeast Power Patron (GY)
11. Yes
12. Selected Junoldo the Shadespirit Power Patron (Deck)
13. Activate Junoldo the Shadespirit Power Patron (hand): Activate it as a Pendulum Spell
14. Activate Nervedo the Shadebeast Power Patron (M1): Special Summon 1 "Nerva the Power Patron of Creation" from your Extra Deck
15. Selected Nerva the Power Patron of Creation (Extra Deck)
16. Yes
17. Activate Junoldo the Shadespirit Power Patron (S1): Destroy this card, draw 2 cards, then discard 1 card
18. Selected Skull Archfiend of Chaos (hand)
19. Selected Artmage Finmel (Deck)
20. Yes
21. Activate Skull Archfiend of Chaos (GY): Add 1 Ritual Monster mentioned on that card from your Deck to your hand
22. Selected Light and Darkness Ritual (Deck)
23. Selected Magician of Dark Chaos - Black Chaos (Deck)
24. Selected Nervedo the Shadebeast Power Patron (Extra Deck)
25. Activate Artmage Graflare (hand): Special Summon this card from your hand
26. Yes
27. Selected Ars Magna - "Citrinitas" (Deck)
28. Activate Light and Darkness Ritual (GY): Add both this card and 1 card that mentions "Light and Darkness Ritual" from your GY to your hand
29. Selected Skull Archfiend of Chaos (GY)
30. Special Summon (procedure) Artmage Non-Finito (Extra Deck)
31. Selected Light and Darkness Ritual (hand)
32. Selected Nervedo the Shadebeast Power Patron (hand)
33. Yes
34. Selected Artmage Impasto -Recapture- (Deck)
35. Link Summon Purification Power Patron (Extra Deck)
36. select Ash Blossom & Joyous Spring (M3)
37. select Artmage Non-Finito (M5)
38. Yes
39. Selected Theorealize Past Lull (Deck)
40. Activate Theorealize Past Lull (hand): Special Summon 1 "Medius the Pure" from your hand or Deck
41. Selected Medius the Pure (Deck)
42. Yes
43. Activate Purification Power Patron (EMZ-R): Link Summon including this card as material
44. Selected S:P Little Knight (Extra Deck)
45. select Medius the Pure (M5)
46. Selected Theorealize Medius (Deck)
47. Add the card(s) to your hand
48. Yes
49. Selected Artmage Non-Finito (GY)
50. Activate Medius the Pure (GY): Shuffle 1 monster from your hand or face-up field into the Deck, and if you do, Special Summon this card
51. Selected Skull Archfiend of Chaos (hand)
52. Activate Theorealize Medius (hand): If a "Power Patron" card is on the field: You can Special Summon this card from your hand, then you can add 1 "Theorealize" Spell/Trap from your Deck to your hand
53. Yes
54. Selected Theorealize Liberation (Deck)
55. Activate Theorealize Liberation (hand): Add to your hand, or Special Summon, 1 monster from your Deck with 300 ATK/200 DEF
56. Selected Griffoh (Deck)
57. Add the card(s) to your hand
58. Activate Ars Magna - "Citrinitas" (S1): activate this card
59. Activate Ars Magna - "Citrinitas" (S1): Add 1 "Medius" or "Ars Magna" monster from your Deck to your hand
60. Selected Ars Magna of Purification and Corruption (Deck)
61. Activate Ars Magna of Purification and Corruption (hand): You can banish this card from your hand; add 1 "Ars Magna" Spell/Trap from your Deck to your hand
62. Selected Ars Magna - "Citrinitas" (Deck)
63. Yes
64. Special Summon 1 "Diactorus" monster
65. Selected Artmage Diactorus (Extra Deck)
66. Activate Griffoh (hand): Activate 1 of these effects
67. Set 1 card that mentions "Light and Darkness Ritual"
68. Selected Mind Shuffle (Deck)
69. Link Summon Medicurius the Power Patron of Illusions (Extra Deck)
70. select Medius the Pure (M5)
71. select S:P Little Knight (EMZ-R)
72. Finish selection
73. Yes

End board:  LP 8000 | Hand 4 | Deck 23 | Extra 11 | GY 9 | Banished 7   Monsters: M1: Nerva the Power Patron of Creation Lv10 3300/3300 DEF || M2: Artmage Graflare Lv5 2100/1500 ATK || M3: Artmage Diactorus Lv8 2800/2500 ATK || M4: Artmage Finmel Lv7 2400/1500 ATK || M5: Ars Magna of Purification and Corruption Lv8 1000/2100 ATK || EMZ-R: Medicurius the Power Patron of Illusions L3↙↓↘ 3000    Spell/Trap: S1: Ars Magna - "Citrinitas" || S2: Artmage Impasto -Recapture- (Set) || S3: Ars Magna - "Citrinitas" || S4: Mind Shuffle   GY: Prohibited Power Patron Portal - Terminus, Light and Darkness Ritual, Nervedo the Shadebeast Power Patron, Ash Blossom & Joyous Spring, Theorealize Past Lull, Purification Pow

## Order 8: best 15.5 [margin 1.77: ss_panama -2.71, elfnote 2.23, despia -1.13, angelechy 7.37] (, worst 15.5) — from tries Special Summon (procedure) Nervedo the Shadebeast Power Patron
Others: forced Activate Light and Darkness Ritual: Ritual Summon 15.5 · tries Activate Fiendsmith's Requiem 15.35 · search 14.95 · forced Activate Theorealize Past Lull 14.3 · tries Link Summon Fiendsmith's Requiem 14 · tries Activate Fiendsmith Engraver 13.65 · forced Activate Artmage Graflare 13.15 · tries Activate Fiendsmith's Sequence 13.15 · forced Special Summon (procedure) Dark Magician of Destruction 13.05 · forced Synchro Summon Chaos Angel 13.05 · opening lanes 12.2 · tries Activate Fiendsmith's Sequence 12.2 · forced Activate Mind Shuffle 12.15 · forced Activate Theorealize Liberation 12.05 · forced Activate Fiendsmith's Sequence 12.05 · forced Link Summon S:P Little Knight 11.95

1. Set Spell/Trap Prohibited Power Patron Portal - Terminus
2. Activate Prohibited Power Patron Portal - Terminus (S1): Send 1 "Power Patron" monster from your Deck or Extra Deck to the GY, then you can add 1 DARK Fairy monster from your Deck to your hand
3. Selected Nervedo the Shadebeast Power Patron (Deck)
4. Yes
5. Selected Medius the Pure (Deck)
6. Normal Summon Medius the Pure (hand)
7. Yes
8. Selected Vidolium the Unstable Power Patron of Unity (Deck)
9. Add the card(s) to your hand
10. Activate Vidolium the Unstable Power Patron of Unity (hand): Activate it as a Pendulum Spell
11. Activate Vidolium the Unstable Power Patron of Unity (S1): Activate 1 of these effects
12. Special Summon 1 "Power Patron" monster
13. Selected Nervedo the Shadebeast Power Patron (GY)
14. Yes
15. Selected Junoldo the Shadespirit Power Patron (Deck)
16. Activate Junoldo the Shadespirit Power Patron (hand): Activate it as a Pendulum Spell
17. Activate Nervedo the Shadebeast Power Patron (M2): Special Summon 1 "Nerva the Power Patron of Creation" from your Extra Deck
18. Selected Nerva the Power Patron of Creation (Extra Deck)
19. Yes
20. Activate Junoldo the Shadespirit Power Patron (S1): Destroy this card, draw 2 cards, then discard 1 card
21. Selected Pendulum Treasure (hand)
22. Selected Artmage Finmel (Deck)
23. Yes
24. Selected Nervedo the Shadebeast Power Patron (Extra Deck)
25. Activate Artmage Graflare (hand): Special Summon this card from your hand
26. Yes
27. Selected Ars Magna - "Citrinitas" (Deck)
28. Activate Ars Magna - "Citrinitas" (S1): activate this card
29. Activate Ars Magna - "Citrinitas" (S1): Add 1 "Medius" or "Ars Magna" monster from your Deck to your hand
30. Selected Ars Magna of Infinity and Finity (Deck)
31. Activate Ars Magna of Infinity and Finity (hand): You can banish this card from your hand; add 1 non-Warrior "Ars Magna" monster from your Deck to your hand
32. Selected Ars Magna of Purification and Corruption (Deck)
33. Activate Ars Magna of Purification and Corruption (hand): You can banish this card from your hand; add 1 "Ars Magna" Spell/Trap from your Deck to your hand
34. Selected Ars Magna - "Citrinitas" (Deck)
35. Special Summon (procedure) Artmage Non-Finito (Extra Deck)
36. Selected Ars Magna - "Citrinitas" (hand)
37. Selected Nervedo the Shadebeast Power Patron (hand)
38. Yes
39. Selected Artmage Impasto -Recapture- (Deck)
40. Link Summon Purification Power Patron (Extra Deck)
41. select Artmage Non-Finito (M5)
42. select Medius the Pure (M1)
43. Activate Ars Magna of Purification and Corruption (banishment): Special Summon this card
44. Activate Ars Magna of Infinity and Finity (banishment): Special Summon this card
45. Activate Purification Power Patron (EMZ-L): Add 1 "Theorealize" card from your Deck to your hand
46. Selected Theorealize Medius (Deck)
47. Activate Ars Magna of Purification and Corruption (M5): Banish Spells/Traps on the field
48. Selected Ars Magna - "Citrinitas" (S1)
49. Activate Medius the Pure (GY): Shuffle 1 monster from your hand or face-up field into the Deck, and if you do, Special Summon this card
50. Selected Ars Magna of Infinity and Finity (M1)
51. Activate Purification Power Patron (EMZ-L): Link Summon including this card as material
52. Selected Medicurius the Power Patron of Illusions (Extra Deck)
53. select Ars Magna of Purification and Corruption (M5)
54. Finish selection
55. Activate Theorealize Medius (hand): If a "Power Patron" card is on the field: You can Special Summon this card from your hand, then you can add 1 "Theorealize" Spell/Trap from your Deck to your hand
56. Yes
57. Selected Theorealize Liberation (Deck)
58. Activate Theorealize Liberation (hand): Add to your hand, or Special Summon, 1 monster from your Deck with 300 ATK/200 DEF
59. Selected Griffoh (Deck)
60. Add the card(s) to your hand
61. Activate Griffoh (hand): Activate 1 of these effects
62. Set 1 card that mentions "Light and Darkness Ritual"
63. Selected Mind Shuffle (Deck)
64. Activate Mind Shuffle (S1): activate this card
65. Yes
66. Selected Skull Archfiend of Chaos (Deck)
67. Selected Skull Archfiend of Chaos (hand)
68. Yes
69. Selected Light and Darkness Ritual (Deck)
70. Selected Magician of Dark Chaos - Black Chaos (Deck)
71. Activate Light and Darkness Ritual (GY): Add both this card and 1 card that mentions "Light and Darkness Ritual" from your GY to your hand
72. Selected Griffoh (GY)
73. Set Spell/Trap Light and Darkness Ritual
74. Activate Light and Darkness Ritual (S3): Ritual Summon 1 "Magician of Dark Chaos - Black Chaos" or "Black Luster Soldier - Soldier of Light and Darkness" from your hand
75. Selected Magician of Dark Chaos - Black Chaos (hand)
76. select Skull Archfiend of Chaos (GY)
77. select Medius the Pure (M1)
78. Yes
79. Special Summon 1 "Diactorus" monster
80. Activate Magician of Dark Chaos - Black Chaos (M1): Add 1 Spell from your GY to your hand
81. Selected Ars Magna - "Citrinitas" (GY)
82. Selected Artmage Diactorus (Extra Deck)

End board:  LP 8000 | Hand 6 | Deck 23 | Extra 12 | GY 7 | Banished 8   Monsters: M1: Magician of Dark Chaos - Black Chaos Lv8 2800/2600 ATK || M2: Nerva the Power Patron of Creation Lv10 3300/3300 ATK || M3: Artmage Graflare Lv5 2100/1500 ATK || M4: Artmage Finmel Lv7 2400/1500 ATK || M5: Artmage Diactorus Lv8 2800/2500 ATK || EMZ-L: Medicurius the Power Patron of Illusions L3↙↓↘ 9000    Spell/Trap: S1: Mind Shuffle || S2: Artmage Impasto -Recapture- (Set)   GY: Prohibited Power Patron Portal - Terminus, Pendulum Treasure, Nervedo the Shadebeast Power Patron, Artmage Non-Finito, Ars Magna of Purification and Corruption, Purification Power Patron, Light and Darkness Ritual   Banished: Nervedo the Shade

