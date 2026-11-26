# Evolved lines — Fiendsmith Engraver, Medius the Pure, Ash Blossom & Joyous Spring, Droll & Lock Bird, Ghost Ogre & Snow Rabbit (findlist-1100)
2026-11-26T19:12:46.429Z

8 deck orders (different face-down banishes / draws), 3 opponent hands x o_ss_panama + o_elfnote + o_despia + o_angelechy per line, 15 min searches, 4 mutation rounds.
Fitness = end-board interruptions (the lab scorer, src/disrupt.mjs: wipe 2, negate 1-1.5, banish/protection less; hand traps kept count 1 each). The winner of each order is also played into the opponent decks: margin after their turn shown beside it.

**Margin after their turn (winners): average null** (worst 99)

**Best line per deck order: average 13.41** (worst order 11.6). Winner came from: tries Activate Ars Magna - "Citrinitas" → new early order → new early order 1, tries Special Summon (procedure) Artmage Non-Finito → new early order 1, tries Normal Summon Lacrima the Crimson Tears → new early order 1, search → new early order 1

## Weak points found automatically
Cards whose face-down banish (by your own costs) hurt the best line most (average best line without vs with that card banished):

| card | orders where it was banished | drop |
|---|---|---|
| Apprentice Illusion Magician | 2/8 | 2.43 |
| Mind Shuffle | 2/8 | 2.43 |
| Ars Magna of Purification and Corruption | 2/8 | 2.43 |
| Light and Darkness Ritual | 3/8 | 1.72 |
| Prohibited Power Patron Portal - Terminus | 3/8 | 1.72 |
| Vidolium the Unstable Power Patron of Unity | 3/8 | 1.52 |
| Black Luster Soldier - Soldier of Light and Darkness | 3/8 | 1.52 |
| Small World | 3/8 | 1.52 |
| Nervedo the Shadebeast Power Patron | 2/8 | 0.53 |
| Junoldo the Shadespirit Power Patron | 2/8 | -0.53 |

List changes proposed for the list test (data/proposals-findlist-1100.json):
- +1 Apprentice Illusion Magician, −1 Plundered Power Patron Plane - Vidolia — Apprentice Illusion Magician: best line 2.43 worse when a cost banished it (2 of 8 orders) — Fiendsmith Engraver
- +1 Mind Shuffle, −1 Artmage Vandalism -Assault- — Mind Shuffle: best line 2.43 worse when a cost banished it (2 of 8 orders) — Fiendsmith Engraver
- +1 Ars Magna of Purification and Corruption, −1 Small World — Ars Magna of Purification and Corruption: best line 2.43 worse when a cost banished it (2 of 8 orders) — Fiendsmith Engraver
- +1 Light and Darkness Ritual, −1 Plundered Power Patron Plane - Vidolia — Light and Darkness Ritual: best line 1.72 worse when a cost banished it (3 of 8 orders) — Fiendsmith Engraver
- +1 Apprentice Illusion Magician — Apprentice Illusion Magician: best line 2.43 worse when a cost banished it (2 of 8 orders) — Fiendsmith Engraver (add only: deck grows, up to 60)
- +1 Mind Shuffle — Mind Shuffle: best line 2.43 worse when a cost banished it (2 of 8 orders) — Fiendsmith Engraver (add only: deck grows, up to 60)
- +1 Ars Magna of Purification and Corruption — Ars Magna of Purification and Corruption: best line 2.43 worse when a cost banished it (2 of 8 orders) — Fiendsmith Engraver (add only: deck grows, up to 60)
- +1 Light and Darkness Ritual — Light and Darkness Ritual: best line 1.72 worse when a cost banished it (3 of 8 orders) — Fiendsmith Engraver (add only: deck grows, up to 60)

Effects the search had not used, tried on purpose (best result so far):
- Activate Ars Magna - "Citrinitas": 13.2
- Special Summon (procedure) Artmage Non-Finito: 12.1
- Activate Medius the Pure: 12.1
- Normal Summon Lacrima the Crimson Tears: 11.55
- Normal Summon Theorealize Medius: 11.3
- Normal Summon Medius the Pure: 11.25
- Activate Small World: 11.2
- Activate Junoldo the Shadespirit Power Patron: 10.75

## Order 1: best 14.7 (, worst 14.7) — from tries Activate Ars Magna - "Citrinitas" → new early order → new early order
Others: tries Activate Ars Magna - "Citrinitas" → new early order 14.55 · tries Activate Ars Magna - "Citrinitas" 13.2 · search 12.95 · tries Activate Medius the Pure 12.1 · tries Activate Ars Magna - "Citrinitas" → new ending 10.7 · tries Activate Artmage Vandalism -Assault- 10.45 · opening lanes 10.45 · tries Activate Ars Magna - "Citrinitas" 8.93 · tries Activate Ars Magna of Purification and Corruption 8.26 · tries Activate Vidolium the Unstable Power Patron of Unity 7.2 · tries Activate Ars Magna - "Citrinitas" → new early order → new ending 6.63

1. Normal Summon Medius the Pure (hand)
2. Yes
3. Selected Nervedo the Shadebeast Power Patron (Deck)
4. Special Summon it
5. Activate Fiendsmith Engraver (hand): Add 1 "Fiendsmith" Spell/Trap from your Deck to your hand
6. Selected Fiendsmith's Tract (Deck)
7. Activate Nervedo the Shadebeast Power Patron (M1): Special Summon 1 "Nerva the Power Patron of Creation" from your Extra Deck
8. Selected Nerva the Power Patron of Creation (Extra Deck)
9. Yes
10. Selected Junoldo the Shadespirit Power Patron (Deck)
11. Activate Junoldo the Shadespirit Power Patron (M2): Special Summon 1 "Junora the Power Patron of Tuning" from your Extra Deck
12. Selected Junora the Power Patron of Tuning (Extra Deck)
13. Yes
14. Selected Nervedo the Shadebeast Power Patron (Extra Deck)
15. Special Summon (procedure) Artmage Non-Finito (Extra Deck)
16. Selected Fiendsmith's Tract (hand)
17. Selected Nervedo the Shadebeast Power Patron (hand)
18. Yes
19. Selected Artmage Impasto -Recapture- (Deck)
20. Link Summon Purification Power Patron (Extra Deck)
21. select Artmage Non-Finito (M4)
22. select Junora the Power Patron of Tuning (EMZ-L)
23. Yes
24. Selected Theorealize Medius (Deck)
25. Activate Theorealize Medius (hand): If a "Power Patron" card is on the field: You can Special Summon this card from your hand, then you can add 1 "Theorealize" Spell/Trap from your Deck to your hand
26. Yes
27. Selected Theorealize Liberation (Deck)
28. Activate Purification Power Patron (EMZ-R): Link Summon including this card as material
29. Activate Theorealize Liberation (hand): Add to your hand, or Special Summon, 1 monster from your Deck with 300 ATK/200 DEF
30. Selected Griffoh (Deck)
31. Add the card(s) to your hand
32. Selected Medicurius the Power Patron of Illusions (Extra Deck)
33. select Medius the Pure (M3)
34. Finish selection
35. Activate Griffoh (hand): Activate 1 of these effects
36. Set 1 card that mentions "Light and Darkness Ritual"
37. Selected Mind Shuffle (Deck)
38. Activate Mind Shuffle (S2): activate this card
39. Yes
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
52. Activate Magician of Dark Chaos - Black Chaos (M2): Add 1 Spell from your GY to your hand
53. Selected Fiendsmith's Tract (GY)
54. Selected Artmage Diactorus (Extra Deck)
55. Activate Skull Archfiend of Chaos (hand): Special Summon this card
56. select Theorealize Medius (banishment)
57. select Light and Darkness Ritual (GY)
58. select Purification Power Patron (GY)
59. Default order
60. Activate Fiendsmith's Tract (hand): Add 1 LIGHT Fiend monster from your Deck to your hand
61. Selected Lacrima the Crimson Tears (Deck)
62. Selected Lacrima the Crimson Tears (hand)
63. Activate Fiendsmith Engraver (GY): Special Summon this card
64. Selected Lacrima the Crimson Tears (GY)
65. Activate Artmage Diactorus (M3): Change the battle position of 1 monster on the field
66. Selected Magician of Dark Chaos - Black Chaos (M2)
67. Special Summon (procedure) Dark Magician of Destruction (Extra Deck)
68. Selected Magician of Dark Chaos - Black Chaos (M2)
69. Yes
70. Selected Apprentice Illusion Magician (Deck)
71. Link Summon Fiendsmith's Requiem (Extra Deck)
72. select Fiendsmith Engraver (M5)
73. Activate Fiendsmith's Requiem (M5): Special Summon 1 "Fiendsmith" monster
74. Selected Lacrima the Crimson Tears (Deck)
75. Yes
76. Selected Fiendsmith's Tract (Deck)
77. Activate Fiendsmith's Requiem (GY): Equip this card to 1 non-Link LIGHT Fiend you control
78. Selected Lacrima the Crimson Tears (M5)
79. Link Summon Fiendsmith's Sequence (Extra Deck)
80. select Skull Archfiend of Chaos (M4)
81. select Lacrima the Crimson Tears (M5)
82. Activate Fiendsmith's Sequence (M4): Fusion Summon 1 Fiend Fusion Monster
83. Selected Fiendsmith's Desirae (Extra Deck)
84. select Fiendsmith Engraver (GY)
85. select Fiendsmith's Requiem (GY)
86. select Lacrima the Crimson Tears (GY)
87. Link Summon S:P Little Knight (Extra Deck)
88. select Dark Magician of Destruction (M2)
89. select Fiendsmith's Sequence (M4)
90. Yes
91. Selected Junora the Power Patron of Tuning (GY)
92. Activate Fiendsmith's Sequence (GY): Equip this card to 1 non-Link LIGHT Fiend you control
93. Selected Fiendsmith's Desirae (M5)
94. Activate Fiendsmith's Desirae (M5): Negate the effects of face-up cards on the field
95. Selected Nerva the Power Patron of Creation (M1)

End board:  LP 8000 | Hand 4 | Deck 28 | Extra 7 | GY 8 | Banished 9   Monsters: M1: Nerva the Power Patron of Creation Lv10 3300/3300 ATK [NEGATED] || M3: Artmage Diactorus Lv8 2800/2500 ATK || M4: S:P Little Knight L2←→ 1600  || M5: Fiendsmith's Desirae Lv9 2800/2400 ATK || EMZ-R: Medicurius the Power Patron of Illusions L3↙↓↘ 3000    Spell/Trap: S1: Artmage Impasto -Recapture- (Set) || S2: Mind Shuffle || S3: Fiendsmith's Sequence   GY: Nervedo the Shadebeast Power Patron, Artmage Non-Finito, Theorealize Liberation, Medius the Pure, Fiendsmith's Tract, Fiendsmith's Tract, Skull Archfiend of Chaos, Dark Magician of Destruction   Banished: Plundered Power Patron Plane - Vidolia (face-down), Medius the

## Order 2: best 14.55 (, worst 14.55) — from tries Special Summon (procedure) Artmage Non-Finito → new early order
Others: tries Special Summon (procedure) Artmage Non-Finito 12.1 · tries Special Summon (procedure) Artmage Non-Finito → new ending 12.1 · tries Special Summon (procedure) Artmage Non-Finito → new ending 12.1 · tries Special Summon (procedure) Artmage Non-Finito → new early order 11.6 · tries Normal Summon Theorealize Medius 11.3 · tries Normal Summon Medius the Pure 11.25 · tries Activate Junoldo the Shadespirit Power Patron 10.75 · tries Activate Fiendsmith's Desirae 10.45 · opening lanes 8.95 · search 8.7 · tries Activate Vidolium the Unstable Power Patron of Unity 7.2

1. Normal Summon Medius the Pure (hand)
2. Yes
3. Selected Nervedo the Shadebeast Power Patron (Deck)
4. Special Summon it
5. Activate Nervedo the Shadebeast Power Patron (M5): Special Summon 1 "Nerva the Power Patron of Creation" from your Extra Deck
6. Selected Nerva the Power Patron of Creation (Extra Deck)
7. Yes
8. Selected Junoldo the Shadespirit Power Patron (Deck)
9. Activate Junoldo the Shadespirit Power Patron (M1): Special Summon 1 "Junora the Power Patron of Tuning" from your Extra Deck
10. Selected Junora the Power Patron of Tuning (Extra Deck)
11. Yes
12. Selected Nervedo the Shadebeast Power Patron (Extra Deck)
13. Activate Fiendsmith Engraver (hand): Add 1 "Fiendsmith" Spell/Trap from your Deck to your hand
14. Selected Fiendsmith's Tract (Deck)
15. Special Summon (procedure) Artmage Non-Finito (Extra Deck)
16. Selected Fiendsmith's Tract (hand)
17. Selected Nervedo the Shadebeast Power Patron (hand)
18. Yes
19. Selected Artmage Impasto -Recapture- (Deck)
20. Link Summon Purification Power Patron (Extra Deck)
21. select Junora the Power Patron of Tuning (M1)
22. select Medius the Pure (M4)
23. Yes
24. Selected Theorealize Medius (Deck)
25. Activate Theorealize Medius (hand): If a "Power Patron" card is on the field: You can Special Summon this card from your hand, then you can add 1 "Theorealize" Spell/Trap from your Deck to your hand
26. Yes
27. Selected Theorealize Liberation (Deck)
28. Activate Medius the Pure (GY): Shuffle 1 monster from your hand or face-up field into the Deck, and if you do, Special Summon this card
29. Selected Artmage Non-Finito (M5)
30. Activate Theorealize Liberation (hand): Add to your hand, or Special Summon, 1 monster from your Deck with 300 ATK/200 DEF
31. Selected Griffoh (Deck)
32. Add the card(s) to your hand
33. Activate Griffoh (hand): Activate 1 of these effects
34. Set 1 card that mentions "Light and Darkness Ritual"
35. Selected Mind Shuffle (Deck)
36. Activate Mind Shuffle (S2): activate this card
37. Yes
38. Selected Skull Archfiend of Chaos (Deck)
39. Selected Skull Archfiend of Chaos (hand)
40. Yes
41. Selected Light and Darkness Ritual (Deck)
42. Selected Magician of Dark Chaos - Black Chaos (Deck)
43. Activate Purification Power Patron (EMZ-L): Link Summon including this card as material
44. Selected Medicurius the Power Patron of Illusions (Extra Deck)
45. select Medius the Pure (M2)
46. Finish selection
47. Yes
48. Special Summon 1 "Diactorus" monster
49. Selected Artmage Diactorus (Extra Deck)
50. Activate Light and Darkness Ritual (GY): Add both this card and 1 card that mentions "Light and Darkness Ritual" from your GY to your hand
51. Selected Skull Archfiend of Chaos (GY)
52. Set Spell/Trap Light and Darkness Ritual
53. Activate Light and Darkness Ritual (S3): Ritual Summon 1 "Magician of Dark Chaos - Black Chaos" or "Black Luster Soldier - Soldier of Light and Darkness" from your hand
54. Selected Magician of Dark Chaos - Black Chaos (hand)
55. Selected Griffoh (GY) value 8 or 1
56. Yes
57. Selected Fiendsmith's Tract (GY)
58. Activate Fiendsmith's Tract (hand): Add 1 LIGHT Fiend monster from your Deck to your hand
59. Selected Fiendsmith Engraver (Deck)
60. Selected Fiendsmith Engraver (hand)
61. Special Summon (procedure) Dark Magician of Destruction (Extra Deck)
62. Selected Magician of Dark Chaos - Black Chaos (M5)
63. Yes
64. Selected Apprentice Illusion Magician (Deck)
65. Activate Fiendsmith Engraver (GY): Special Summon this card
66. Selected Fiendsmith Engraver (GY)
67. Link Summon Fiendsmith's Requiem (Extra Deck)
68. select Fiendsmith Engraver (M5)
69. Activate Fiendsmith's Requiem (M5): Special Summon 1 "Fiendsmith" monster
70. Selected Fiendsmith Engraver (Deck)
71. Link Summon Fiendsmith's Sequence (Extra Deck)
72. select Dark Magician of Destruction (M1)
73. select Fiendsmith Engraver (M5)
74. Activate Fiendsmith's Sequence (M5): Fusion Summon 1 Fiend Fusion Monster
75. Selected Fiendsmith's Desirae (Extra Deck)
76. select Fiendsmith's Requiem (GY)
77. select Fiendsmith Engraver (GY)
78. select Fiendsmith Engraver (GY)
79. Activate Fiendsmith's Sequence (M5): Equip this card to 1 non-Link LIGHT Fiend you control
80. Selected Fiendsmith's Desirae (M1)
81. Activate Fiendsmith's Desirae (M1): Negate the effects of face-up cards on the field
82. Selected Artmage Diactorus (M4)
83. Special Summon (procedure) Apprentice Illusion Magician (hand)
84. select Skull Archfiend of Chaos (hand)
85. Activate Skull Archfiend of Chaos (GY): Special Summon this card
86. select Griffoh (banishment)
87. select Dark Magician of Destruction (GY)
88. select Fiendsmith's Tract (GY)
89. Default order
90. Link Summon S:P Little Knight (Extra Deck)
91. select Skull Archfiend of Chaos (M2)
92. select Apprentice Illusion Magician (M5)

End board:  LP 8000 | Hand 3 | Deck 29 | Extra 8 | GY 7 | Banished 9   Monsters: M1: Fiendsmith's Desirae Lv9 2800/2400 ATK || M3: Nerva the Power Patron of Creation Lv10 3300/3300 ATK || M4: Artmage Diactorus Lv8 2800/2500 ATK [NEGATED] || M5: S:P Little Knight L2←→ 1600  || EMZ-R: Medicurius the Power Patron of Illusions L3↙↓↘ 3000    Spell/Trap: S1: Artmage Impasto -Recapture- (Set) || S2: Mind Shuffle || S3: Fiendsmith's Sequence   GY: Nervedo the Shadebeast Power Patron, Junora the Power Patron of Tuning, Theorealize Liberation, Purification Power Patron, Light and Darkness Ritual, Skull Archfiend of Chaos, Apprentice Illusion Magician   Banished: Medius the Pure (face-down), Lacrima the Crimson T

## Order 3: best 12.8 (, worst 12.8) — from tries Normal Summon Lacrima the Crimson Tears → new early order
Others: tries Normal Summon Lacrima the Crimson Tears 11.55 · search 11.2 · tries Activate Small World 11.2 · tries Normal Summon Lacrima the Crimson Tears → new ending 10.8 · tries Normal Summon Lacrima the Crimson Tears → new early order 10.45 · tries Normal Summon Nervedo the Shadebeast Power Patron 9.95 · tries Normal Summon Lacrima the Crimson Tears → new ending 9.51 · opening lanes 9.45 · tries Normal Summon Fiendsmith Engraver 8.2 · tries Activate Light and Darkness Ritual 8.2 · tries Activate Pendulum Treasure 8

1. Activate Fiendsmith Engraver (hand): Add 1 "Fiendsmith" Spell/Trap from your Deck to your hand
2. Selected Fiendsmith's Tract (Deck)
3. Activate Fiendsmith's Tract (hand): Add 1 LIGHT Fiend monster from your Deck to your hand
4. Selected Lacrima the Crimson Tears (Deck)
5. Selected Medius the Pure (hand)
6. Normal Summon Lacrima the Crimson Tears (hand)
7. Yes
8. Selected Fiendsmith Engraver (Deck)
9. Link Summon Fiendsmith's Requiem (Extra Deck)
10. select Lacrima the Crimson Tears (M1)
11. Activate Fiendsmith Engraver (GY): Special Summon this card
12. Selected Fiendsmith Engraver (GY)
13. Activate Fiendsmith's Requiem (EMZ-R): Special Summon 1 "Fiendsmith" monster
14. Selected Fiendsmith Engraver (Deck)
15. Link Summon Fiendsmith's Sequence (Extra Deck)
16. select Fiendsmith Engraver (M3)
17. select Fiendsmith Engraver (M4)
18. Activate Fiendsmith's Sequence (EMZ-L): Fusion Summon 1 Fiend Fusion Monster
19. Selected Fiendsmith's Desirae (Extra Deck)
20. select Fiendsmith Engraver (GY)
21. select Fiendsmith Engraver (GY)
22. select Fiendsmith's Requiem (GY)
23. Link Summon Medicurius the Power Patron of Illusions (Extra Deck)
24. select Fiendsmith's Sequence (EMZ-L)
25. select Fiendsmith's Desirae (M1)
26. No
27. Activate Medius the Pure (GY): Shuffle 1 monster from your hand or face-up field into the Deck, and if you do, Special Summon this card
28. Selected Ghost Ogre & Snow Rabbit (hand)
29. Yes
30. Selected Nervedo the Shadebeast Power Patron (Deck)
31. Special Summon it
32. Activate Nervedo the Shadebeast Power Patron (M2): Special Summon 1 "Nerva the Power Patron of Creation" from your Extra Deck
33. Selected Nerva the Power Patron of Creation (Extra Deck)
34. Yes
35. Selected Junoldo the Shadespirit Power Patron (Deck)
36. Activate Junoldo the Shadespirit Power Patron (M4): Special Summon 1 "Junora the Power Patron of Tuning" from your Extra Deck
37. Selected Junora the Power Patron of Tuning (Extra Deck)
38. Yes
39. Selected Nervedo the Shadebeast Power Patron (Extra Deck)
40. Link Summon Purification Power Patron (Extra Deck)
41. select Junora the Power Patron of Tuning (M2)
42. select Medius the Pure (M1)
43. Yes
44. Selected Theorealize Medius (Deck)
45. Activate Theorealize Medius (hand): If a "Power Patron" card is on the field: You can Special Summon this card from your hand, then you can add 1 "Theorealize" Spell/Trap from your Deck to your hand
46. Yes
47. Selected Theorealize Past Lull (Deck)
48. Special Summon (procedure) Artmage Non-Finito (Extra Deck)
49. Selected Theorealize Past Lull (hand)
50. Selected Nervedo the Shadebeast Power Patron (hand)
51. Yes
52. Selected Artmage Impasto -Recapture- (Deck)
53. Activate Purification Power Patron (M1): Link Summon including this card as material
54. Selected S:P Little Knight (Extra Deck)
55. select Artmage Non-Finito (M4)
56. Yes
57. Selected Purification Power Patron (GY)
58. Yes
59. Special Summon 1 "Diactorus" monster
60. Selected Artmage Diactorus (Extra Deck)
61. Activate Theorealize Past Lull (GY): Special Summon 1 Fusion, Synchro, or Xyz Monster from your GY
62. Selected Fiendsmith's Desirae (GY)
63. Activate Fiendsmith's Sequence (GY): Equip this card to 1 non-Link LIGHT Fiend you control
64. Selected Fiendsmith's Desirae (M2)
65. Activate Fiendsmith's Desirae (M2): Negate the effects of face-up cards on the field
66. Selected Fiendsmith's Sequence (S2)

End board:  LP 8000 | Hand 2 | Deck 33 | Extra 7 | GY 5 | Banished 10   Monsters: M1: S:P Little Knight L2←→ 1600  || M2: Fiendsmith's Desirae Lv9 2800/2400 ATK || M3: Nerva the Power Patron of Creation Lv10 3300/3300 ATK || M4: Artmage Diactorus Lv8 2800/2500 ATK || EMZ-L: Medicurius the Power Patron of Illusions L3↙↓↘ 3000    Spell/Trap: S1: Artmage Impasto -Recapture- (Set) || S2: Fiendsmith's Sequence [NEGATED]   GY: Fiendsmith's Tract, Lacrima the Crimson Tears, Junora the Power Patron of Tuning, Nervedo the Shadebeast Power Patron, Artmage Non-Finito   Banished: Theorealize Liberation (face-down), Apprentice Illusion Magician (face-down), Light and Darkness Ritual (face-down), Artmage Finmel (fac

## Order 4: best 11.6 (, worst 11.6) — from search → new early order
Others: search 11.25 · tries Activate Mind Shuffle 10.45 · tries Activate Fiendsmith's Tract 10.45 · opening lanes 9.95 · tries Activate Mind Shuffle 8.2 · tries Activate Black Chaos 8.2 · tries Activate Fiendsmith Engraver 8.2 · search → new early order 6.64 · tries Activate Prohibited Power Patron Portal - Terminus 6.06 · search → new ending 5.63

1. Activate Fiendsmith Engraver (hand): Add 1 "Fiendsmith" Spell/Trap from your Deck to your hand
2. Selected Fiendsmith's Tract (Deck)
3. Normal Summon Medius the Pure (hand)
4. Yes
5. Selected Nervedo the Shadebeast Power Patron (Deck)
6. Add the card(s) to your hand
7. Special Summon (procedure) Artmage Non-Finito (Extra Deck)
8. Selected Fiendsmith's Tract (hand)
9. Selected Nervedo the Shadebeast Power Patron (hand)
10. Yes
11. Selected Artmage Vandalism -Assault- (Deck)
12. Activate Artmage Vandalism -Assault- (S1): When this card is activated: You can add 1 "Medius the Pure" from your Deck to your hand
13. Yes
14. Selected Medius the Pure (Deck)
15. Activate Artmage Vandalism -Assault- (S1): Make 1 face-up monster you control able to be treated as an "Artmage" monster if used as Fusion Material
16. Selected Artmage Non-Finito (M2)
17. Link Summon Purification Power Patron (Extra Deck)
18. select Medius the Pure (M1)
19. select Artmage Non-Finito (M2)
20. Yes
21. Selected Theorealize Medius (Deck)
22. Activate Theorealize Medius (hand): If a "Power Patron" card is on the field: You can Special Summon this card from your hand, then you can add 1 "Theorealize" Spell/Trap from your Deck to your hand
23. Yes
24. Selected Theorealize Liberation (Deck)
25. Activate Medius the Pure (GY): Shuffle 1 monster from your hand or face-up field into the Deck, and if you do, Special Summon this card
26. Selected Medius the Pure (hand)
27. Activate Theorealize Liberation (hand): Add to your hand, or Special Summon, 1 monster from your Deck with 300 ATK/200 DEF
28. Activate Purification Power Patron (EMZ-R): Link Summon including this card as material
29. Selected Medicurius the Power Patron of Illusions (Extra Deck)
30. select Medius the Pure (M3)
31. Finish selection
32. Selected Griffoh (Deck)
33. Add the card(s) to your hand
34. Yes
35. Special Summon 1 "Diactorus" monster
36. Selected Artmage Diactorus (Extra Deck)
37. Activate Griffoh (hand): Activate 1 of these effects
38. Set 1 card that mentions "Light and Darkness Ritual"
39. Selected Mind Shuffle (Deck)
40. Activate Mind Shuffle (S2): activate this card
41. No
42. Activate Mind Shuffle (S2): Add 1 appropriate monster to your hand
43. Selected Skull Archfiend of Chaos (Deck)
44. Selected Skull Archfiend of Chaos (hand)
45. Yes
46. Selected Light and Darkness Ritual (Deck)
47. Selected Magician of Dark Chaos - Black Chaos (Deck)
48. Activate Light and Darkness Ritual (GY): Add both this card and 1 card that mentions "Light and Darkness Ritual" from your GY to your hand
49. Selected Griffoh (GY)
50. Set Spell/Trap Light and Darkness Ritual
51. Activate Light and Darkness Ritual (S3): Ritual Summon 1 "Magician of Dark Chaos - Black Chaos" or "Black Luster Soldier - Soldier of Light and Darkness" from your hand
52. Selected Magician of Dark Chaos - Black Chaos (hand)
53. Selected Griffoh (hand) value 8 or 1
54. Yes
55. Selected Fiendsmith's Tract (GY)
56. Activate Fiendsmith's Tract (hand): Add 1 LIGHT Fiend monster from your Deck to your hand
57. Selected Fiendsmith Engraver (Deck)
58. Selected Fiendsmith Engraver (hand)
59. Activate Skull Archfiend of Chaos (GY): Special Summon this card
60. select Purification Power Patron (GY)
61. select Fiendsmith's Tract (GY)
62. select Light and Darkness Ritual (GY)
63. Default order
64. Activate Fiendsmith Engraver (GY): Special Summon this card
65. Selected Fiendsmith Engraver (GY)
66. Link Summon Fiendsmith's Requiem (Extra Deck)
67. select Fiendsmith Engraver (M2)
68. Activate Fiendsmith's Requiem (M2): Special Summon 1 "Fiendsmith" monster
69. Selected Lacrima the Crimson Tears (Deck)
70. Yes
71. Selected Fiendsmith Engraver (Deck)
72. Activate Fiendsmith's Requiem (GY): Equip this card to 1 non-Link LIGHT Fiend you control
73. Selected Lacrima the Crimson Tears (M5)
74. Link Summon Fiendsmith's Sequence (Extra Deck)
75. select Skull Archfiend of Chaos (M3)
76. select Lacrima the Crimson Tears (M5)
77. Activate Fiendsmith's Sequence (M2): Fusion Summon 1 Fiend Fusion Monster
78. Selected Fiendsmith's Desirae (Extra Deck)
79. select Fiendsmith's Requiem (GY)
80. select Lacrima the Crimson Tears (GY)
81. select Fiendsmith Engraver (GY)
82. Activate Fiendsmith's Sequence (M2): Equip this card to 1 non-Link LIGHT Fiend you control
83. Selected Fiendsmith's Desirae (M3)
84. Activate Fiendsmith's Desirae (M3): Negate the effects of face-up cards on the field
85. Selected Fiendsmith's Desirae (M3)
86. Activate Artmage Diactorus (M1): Change the battle position of 1 monster on the field
87. Selected Fiendsmith's Desirae (M3)
88. Activate Theorealize Liberation (GY): Treat 1 monster you control as a Tuner this turn
89. Selected Medicurius the Power Patron of Illusions (EMZ-L)
90. Special Summon (procedure) Dark Magician of Destruction (Extra Deck)
91. Selected Magician of Dark Chaos - Black Chaos (M4)
92. Yes
93. Selected Apprentice Illusion Magician (Deck)

End board:  LP 8000 | Hand 4 | Deck 35 | Extra 9 | GY 5 | Banished 4   Monsters: M1: Artmage Diactorus Lv8 2800/2500 ATK || M2: Dark Magician of Destruction Lv8 2800/2600 ATK || M3: Fiendsmith's Desirae Lv9 2800/2400 DEF [NEGATED] || EMZ-L: Medicurius the Power Patron of Illusions L3↙↓↘ 3000    Spell/Trap: S1: Artmage Vandalism -Assault- || S2: Mind Shuffle || S3: Fiendsmith's Sequence   GY: Nervedo the Shadebeast Power Patron, Artmage Non-Finito, Griffoh, Fiendsmith Engraver, Skull Archfiend of Chaos   Banished: Medius the Pure, Theorealize Medius, Theorealize Liberation, Magician of Dark Chaos - Black Chaos   Hand: Ghost Ogre & Snow Rabbit, Apprentice Illusion Magician, Ash Blossom & Joyous Spring, D

