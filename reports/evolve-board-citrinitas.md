# Evolved lines — Ars Magna - "Citrinitas", Ash Blossom & Joyous Spring, Ash Blossom & Joyous Spring, Droll & Lock Bird, Ghost Ogre & Snow Rabbit (findlist-1100)
2026-11-25T18:53:37.524Z

8 deck orders (different face-down banishes / draws), 3 opponent hands x o_ss_panama + o_elfnote + o_despia + o_angelechy per line, 5 min searches, 4 mutation rounds.
Fitness = end-board interruptions (the lab scorer, src/disrupt.mjs: wipe 2, negate 1-1.5, banish/protection less; hand traps kept count 1 each). The winner of each order is also played into the opponent decks: margin after their turn shown beside it.

**Margin after their turn (winners): average 4.07** (worst -2.15)

**Best line per deck order: average 12.13** (worst order 10.75). Winner came from: opening lanes → new ending 1, search 1, tries Activate Light and Darkness Ritual → new ending → new early order 1, opening lanes 1, tries Normal Summon Theorealize Medius → new ending 1, tries Activate Artmage Diactorus 1, search → new ending 2

| seed line | works as written | its score when it works | seed start + search finish (all orders) |
|---|---|---|---|
| cit1 | 6/8 | 7.84 | 8.14 |
| v52-citrinitas | 6/8 | 11.15 | 10.25 |

## Weak points found automatically
Cards whose face-down banish (by your own costs) hurt the best line most (average best line without vs with that card banished):

| card | orders where it was banished | drop |
|---|---|---|
| Apprentice Illusion Magician | 2/8 | 1.14 |
| Ars Magna of Infinity and Finity | 2/8 | 1.14 |
| Medius the Pure | 2/8 | 1.14 |
| Plundered Power Patron Plane - Vidolia | 3/8 | 0.93 |
| Mind Shuffle | 5/8 | 0.8 |
| Fiendsmith's Tract | 3/8 | 0.77 |
| Small World | 3/8 | 0.77 |
| Artmage Graflare | 3/8 | 0.77 |
| Pendulum Treasure | 3/8 | 0.77 |
| Artmage Finmel | 2/8 | 0.24 |

Where the hand-designed lines broke (next step that no longer worked):
- cit1: Impasto (1x)
- v52-citrinitas: Impasto (1x)
- v52-citrinitas: Junoldo (1x)
- cit1: Junoldo (1x)

List changes proposed for the list test (data/proposals-findlist-1100.json):
- +1 Apprentice Illusion Magician, −1 Plundered Power Patron Plane - Vidolia — Apprentice Illusion Magician: best line 1.14 worse when a cost banished it (2 of 8 orders) — Ars Magna - "Citrinitas"
- +1 Ars Magna of Infinity and Finity, −1 Artmage Vandalism -Assault- — Ars Magna of Infinity and Finity: best line 1.14 worse when a cost banished it (2 of 8 orders) — Ars Magna - "Citrinitas"
- +1 Plundered Power Patron Plane - Vidolia, −1 Artmage Vandalism -Assault- — Plundered Power Patron Plane - Vidolia: best line 0.93 worse when a cost banished it (3 of 8 orders) — Ars Magna - "Citrinitas"
- +1 Mind Shuffle, −1 Plundered Power Patron Plane - Vidolia — Mind Shuffle: best line 0.8 worse when a cost banished it (5 of 8 orders) — Ars Magna - "Citrinitas"
- +1 Apprentice Illusion Magician — Apprentice Illusion Magician: best line 1.14 worse when a cost banished it (2 of 8 orders) — Ars Magna - "Citrinitas" (add only: deck grows, up to 60)
- +1 Ars Magna of Infinity and Finity — Ars Magna of Infinity and Finity: best line 1.14 worse when a cost banished it (2 of 8 orders) — Ars Magna - "Citrinitas" (add only: deck grows, up to 60)
- +1 Plundered Power Patron Plane - Vidolia — Plundered Power Patron Plane - Vidolia: best line 0.93 worse when a cost banished it (3 of 8 orders) — Ars Magna - "Citrinitas" (add only: deck grows, up to 60)
- +1 Mind Shuffle — Mind Shuffle: best line 0.8 worse when a cost banished it (5 of 8 orders) — Ars Magna - "Citrinitas" (add only: deck grows, up to 60)

Effects the search had not used, tried on purpose (best result so far):
- Activate Artmage Diactorus: 12.1
- Activate Theorealize Past Lull: 12
- Activate Ars Magna of Purification and Corruption: 12
- Activate Mind Shuffle: 12
- Activate Light and Darkness Ritual: 12
- Activate Theorealize Liberation: 11
- Activate Vidolium the Unstable Power Patron of Unity: 11
- Activate Prohibited Power Patron Portal - Terminus: 11

## Order 1: best 12.1 [margin 4.46: ss_panama 2.03, elfnote 2.92, despia 1.74, angelechy 8.1] (, worst 12.1) — from opening lanes → new ending
Others: opening lanes → new ending → new ending 12.1 · opening lanes 12 · v52-citrinitas 11.15 · v52-citrinitas 11.15 · search 10.43 · tries Activate Artmage Vandalism -Assault- 9.05 · tries Activate Artmage Vandalism -Assault- 9.05 · cit1 8.33 · cit1 7.84 · opening lanes → new ending → new early order 3.55 · opening lanes → new ending → new early order 3.55

1. Activate Ars Magna - "Citrinitas" (hand): activate this card
2. Activate Ars Magna - "Citrinitas" (S1): Add 1 "Medius" or "Ars Magna" monster from your Deck to your hand
3. Selected Medius the Pure (Deck)
4. Normal Summon Medius the Pure (hand)
5. Yes
6. Selected Nervedo the Shadebeast Power Patron (Deck)
7. Special Summon it
8. Activate Nervedo the Shadebeast Power Patron (M3): Special Summon 1 "Nerva the Power Patron of Creation" from your Extra Deck
9. Selected Nerva the Power Patron of Creation (Extra Deck)
10. Yes
11. Selected Junoldo the Shadespirit Power Patron (Deck)
12. Activate Junoldo the Shadespirit Power Patron (M5): Special Summon 1 "Junora the Power Patron of Tuning" from your Extra Deck
13. Selected Junora the Power Patron of Tuning (Extra Deck)
14. Yes
15. Selected Nervedo the Shadebeast Power Patron (Extra Deck)
16. Link Summon Purification Power Patron (Extra Deck)
17. select Medius the Pure (M4)
18. select Junora the Power Patron of Tuning (EMZ-L)
19. Yes
20. Selected Theorealize Medius (Deck)
21. Activate Medius the Pure (GY): Shuffle 1 monster from your hand or face-up field into the Deck, and if you do, Special Summon this card
22. Selected Ash Blossom & Joyous Spring (hand)
23. Activate Theorealize Medius (hand): If a "Power Patron" card is on the field: You can Special Summon this card from your hand, then you can add 1 "Theorealize" Spell/Trap from your Deck to your hand
24. Yes
25. Selected Theorealize Past Lull (Deck)
26. Special Summon (procedure) Artmage Non-Finito (Extra Deck)
27. Selected Theorealize Past Lull (hand)
28. Selected Nervedo the Shadebeast Power Patron (hand)
29. Yes
30. Activate Purification Power Patron (EMZ-R): Link Summon including this card as material
31. Selected Medicurius the Power Patron of Illusions (Extra Deck)
32. select Artmage Non-Finito (M2)
33. Finish selection
34. Selected Artmage Impasto -Recapture- (Deck)
35. Activate Theorealize Past Lull (GY): Special Summon 1 Fusion, Synchro, or Xyz Monster from your GY
36. Selected Junora the Power Patron of Tuning (GY)
37. Link Summon S:P Little Knight (Extra Deck)
38. select Medius the Pure (M1)
39. select Junora the Power Patron of Tuning (M4)
40. Yes
41. Special Summon 1 "Diactorus" monster
42. Selected Artmage Diactorus (Extra Deck)

End board:  LP 8000 | Hand 3 | Deck 33 | Extra 9 | GY 4 | Banished 9   Monsters: M3: Nerva the Power Patron of Creation Lv10 3300/3300 ATK || M4: S:P Little Knight L2←→ 1600  || M5: Artmage Diactorus Lv8 2800/2500 ATK || EMZ-R: Medicurius the Power Patron of Illusions L3↙↓↘ 3000    Spell/Trap: S1: Ars Magna - "Citrinitas" || S2: Artmage Impasto -Recapture- (Set)   GY: Nervedo the Shadebeast Power Patron, Artmage Non-Finito, Purification Power Patron, Junora the Power Patron of Tuning   Banished: Artmage Vandalism -Assault- (face-down), Fiendsmith's Tract (face-down), Magician of Dark Chaos - Black Chaos (face-down), Ars Magna - "Citrinitas" (face-down), Griffoh (face-down), Nervedo the Shadebeast Power

## Order 2: best 10.75 [margin 3.32: ss_panama 0, elfnote 5.42, despia -0.35, angelechy 6.7] (, worst 10.75) — from search
Others: tries Activate Mind Shuffle 10.75 · opening lanes 10.75 · search → new ending 10.75 · search → new ending 10.35 · search → new early order 10.35 · cit1 9.93 · v52-citrinitas 9.85 · tries Activate Prohibited Power Patron Portal - Terminus 3.55 · search → new early order 3.55

1. Activate Ars Magna - "Citrinitas" (hand): activate this card
2. Activate Ars Magna - "Citrinitas" (S1): Add 1 "Medius" or "Ars Magna" monster from your Deck to your hand
3. Selected Medius the Pure (Deck)
4. Normal Summon Medius the Pure (hand)
5. Yes
6. Selected Theorealize Medius (Deck)
7. Special Summon it
8. Link Summon Purification Power Patron (Extra Deck)
9. select Medius the Pure (M4)
10. select Theorealize Medius (M1)
11. Yes
12. Selected Theorealize Medius (Deck)
13. Activate Medius the Pure (GY): Shuffle 1 monster from your hand or face-up field into the Deck, and if you do, Special Summon this card
14. Selected Ash Blossom & Joyous Spring (hand)
15. Activate Theorealize Medius (hand): If a "Power Patron" card is on the field: You can Special Summon this card from your hand, then you can add 1 "Theorealize" Spell/Trap from your Deck to your hand
16. Yes
17. Selected Theorealize Liberation (Deck)
18. Activate Theorealize Liberation (hand): Add to your hand, or Special Summon, 1 monster from your Deck with 300 ATK/200 DEF
19. Activate Purification Power Patron (EMZ-L): Link Summon including this card as material
20. Selected Medicurius the Power Patron of Illusions (Extra Deck)
21. select Medius the Pure (M2)
22. Finish selection
23. Selected Nervedo the Shadebeast Power Patron (Deck)
24. Special Summon it
25. Yes
26. Special Summon 1 "Diactorus" monster
27. Selected Artmage Diactorus (Extra Deck)
28. Activate Nervedo the Shadebeast Power Patron (M2): Special Summon 1 "Nerva the Power Patron of Creation" from your Extra Deck
29. Selected Nerva the Power Patron of Creation (Extra Deck)
30. Yes
31. Selected Artmage Finmel (Deck)

End board:  LP 8000 | Hand 3 | Deck 36 | Extra 12 | GY 3 | Banished 5   Monsters: M1: Nerva the Power Patron of Creation Lv10 3300/3300 ATK || M2: Artmage Finmel Lv7 2400/1500 ATK || M3: Artmage Diactorus Lv8 2800/2500 ATK || EMZ-L: Medicurius the Power Patron of Illusions L3↙↓↘ 3000    Spell/Trap: S1: Ars Magna - "Citrinitas"   GY: Theorealize Medius, Purification Power Patron, Theorealize Liberation   Banished: Medius the Pure, Theorealize Medius, Apprentice Illusion Magician (face-down), Mind Shuffle (face-down), Small World (face-down)   Hand: Droll & Lock Bird, Ghost Ogre & Snow Rabbit, Ash Blossom & Joyous Spring   Extra Deck: 12 cards (view --ed to list)

## Order 3: best 14 [margin 4.51: ss_panama 5.97, elfnote 5.04, despia 1.07, angelechy null] (, worst 14) — from tries Activate Light and Darkness Ritual → new ending → new early order
Others: tries Activate Light and Darkness Ritual → new ending → new early order → new ending 14 · tries Activate Light and Darkness Ritual → new ending 12.1 · tries Activate Light and Darkness Ritual 12 · opening lanes 12 · tries Activate Mind Shuffle 12 · search 11.85 · tries Activate Light and Darkness Ritual → new ending → new early order → new early order 11.3 · v52-citrinitas 11.15 · v52-citrinitas 11.15 · cit1 8.33 · cit1 7.84

1. Set Spell/Trap Ars Magna - "Citrinitas"
2. Activate Ars Magna - "Citrinitas" (S1): activate this card
3. Activate Ars Magna - "Citrinitas" (S1): Add 1 "Medius" or "Ars Magna" monster from your Deck to your hand
4. Selected Medius the Pure (Deck)
5. Normal Summon Medius the Pure (hand)
6. Yes
7. Selected Nervedo the Shadebeast Power Patron (Deck)
8. Special Summon it
9. Activate Nervedo the Shadebeast Power Patron (M4): Special Summon 1 "Nerva the Power Patron of Creation" from your Extra Deck
10. Selected Nerva the Power Patron of Creation (Extra Deck)
11. Yes
12. Selected Theorealize Medius (Deck)
13. Link Summon Purification Power Patron (Extra Deck)
14. select Medius the Pure (M3)
15. select Theorealize Medius (M1)
16. Yes
17. Selected Theorealize Medius (Deck)
18. Activate Medius the Pure (GY): Shuffle 1 monster from your hand or face-up field into the Deck, and if you do, Special Summon this card
19. Selected Ash Blossom & Joyous Spring (hand)
20. Activate Theorealize Medius (hand): If a "Power Patron" card is on the field: You can Special Summon this card from your hand, then you can add 1 "Theorealize" Spell/Trap from your Deck to your hand
21. Yes
22. Selected Theorealize Liberation (Deck)
23. Activate Theorealize Liberation (hand): Add to your hand, or Special Summon, 1 monster from your Deck with 300 ATK/200 DEF
24. Activate Purification Power Patron (EMZ-R): Link Summon including this card as material
25. Selected S:P Little Knight (Extra Deck)
26. select Medius the Pure (M1)
27. Selected Junoldo the Shadespirit Power Patron (Deck)
28. Add the card(s) to your hand
29. Yes
30. Add 1 "Ars Magna" card from your Deck to your hand
31. Selected Ars Magna of Infinity and Finity (Deck)
32. Activate Junoldo the Shadespirit Power Patron (hand): Activate it as a Pendulum Spell
33. Activate Ars Magna of Infinity and Finity (hand): You can banish this card from your hand; add 1 non-Warrior "Ars Magna" monster from your Deck to your hand
34. Selected Ars Magna of Purification and Corruption (Deck)
35. Activate Theorealize Liberation (GY): Treat 1 monster you control as a Tuner this turn
36. Selected Theorealize Medius (M5)
37. Link Summon Medicurius the Power Patron of Illusions (Extra Deck)
38. select S:P Little Knight (EMZ-R)
39. select Theorealize Medius (M5)
40. Finish selection
41. Activate Ars Magna of Infinity and Finity (banishment): Special Summon this card
42. Activate Junoldo the Shadespirit Power Patron (S5): Destroy this card, draw 2 cards, then discard 1 card
43. Selected Ars Magna of Purification and Corruption (hand)
44. Yes
45. Activate Ars Magna of Infinity and Finity (M5): Banish 1 monster on the field
46. Selected Ars Magna of Infinity and Finity (M5)
47. Selected Nervedo the Shadebeast Power Patron (Extra Deck)
48. Activate Artmage Finmel (hand): Special Summon this card from your hand
49. Yes
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
61. Selected Griffoh (GY)
62. Activate Light and Darkness Ritual (hand): Ritual Summon 1 "Magician of Dark Chaos - Black Chaos" or "Black Luster Soldier - Soldier of Light and Darkness" from your hand
63. Selected Magician of Dark Chaos - Black Chaos (hand)
64. Selected Ars Magna of Purification and Corruption (GY) value 8
65. Yes
66. Selected Light and Darkness Ritual (GY)
67. Special Summon (procedure) Artmage Non-Finito (Extra Deck)
68. Selected Light and Darkness Ritual (hand)
69. Selected Nervedo the Shadebeast Power Patron (hand)
70. Yes
71. Selected Artmage Impasto -Recapture- (Deck)
72. Set Spell/Trap Pendulum Treasure
73. Activate Skull Archfiend of Chaos (GY): Special Summon this card
74. select S:P Little Knight (GY)
75. select Nervedo the Shadebeast Power Patron (GY)
76. select Light and Darkness Ritual (GY)
77. Default order
78. Activate Pendulum Treasure (S4): Add to Extra Deck
79. Selected Vidolium the Unstable Power Patron of Unity (Deck)
80. Yes
81. Selected Prohibited Power Patron Portal - Terminus (Deck)
82. Activate Prohibited Power Patron Portal - Terminus (hand): Send 1 "Power Patron" monster from your Deck or Extra Deck to the GY, then you can add 1 DARK Fairy monster from your Deck to your hand
83. Selected Purification Power Patron (Extra Deck)
84. Yes
85. Selected Medius the Pure (Deck)
86. Special Summon (procedure) Dark Magician of Destruction (Extra Deck)
87. Selected Magician of Dark Chaos - Black Chaos (M1)
88. Yes
89. Selected Apprentice Illusion Magician (Deck)
90. Link Summon S:P Little Knight (Extra Deck)
91. select Dark Magician of Destruction (M1)
92. select Skull Archfiend of Chaos (M2)
93. Activate Ars Magna of Purification and Corruption (banishment): Special Summon this card

End board:  LP 8000 | Hand 6 | Deck 24 | Extra 10 | GY 8 | Banished 7   Monsters: M1: S:P Little Knight L2←→ 1600  || M2: Ars Magna of Purification and Corruption Lv8 1000/2100 ATK || M3: Artmage Non-Finito Lv7 2400/1500 ATK || M4: Nerva the Power Patron of Creation Lv10 3300/3300 ATK || M5: Artmage Finmel Lv7 2400/1500 ATK || EMZ-L: Medicurius the Power Patron of Illusions L3↙↓↘ 9000    Spell/Trap: S1: Ars Magna - "Citrinitas" || S2: Mind Shuffle || S3: Artmage Impasto -Recapture- (Set)   GY: Theorealize Medius, Purification Power Patron, Theorealize Medius, Pendulum Treasure, Purification Power Patron, Prohibited Power Patron Portal - Terminus, Dark Magician of Destruction, Skull Archfiend of Chaos  

## Order 4: best 12.1 [margin 3.8: ss_panama 2.54, elfnote -0.4, despia 4.57, angelechy 8.1] (, worst 12.1) — from opening lanes
Others: search 12 · v52-citrinitas 11.15 · v52-citrinitas 11.15 · tries Activate Theorealize Liberation 11 · tries Activate Vidolium the Unstable Power Patron of Unity 9.7 · cit1 8.33 · cit1 7.84

1. Set Spell/Trap Ars Magna - "Citrinitas"
2. Activate Ars Magna - "Citrinitas" (S1): activate this card
3. Activate Ars Magna - "Citrinitas" (S1): Add 1 "Medius" or "Ars Magna" monster from your Deck to your hand
4. Selected Medius the Pure (Deck)
5. Normal Summon Medius the Pure (hand)
6. Yes
7. Selected Nervedo the Shadebeast Power Patron (Deck)
8. Special Summon it
9. Activate Nervedo the Shadebeast Power Patron (M1): Special Summon 1 "Nerva the Power Patron of Creation" from your Extra Deck
10. Selected Nerva the Power Patron of Creation (Extra Deck)
11. Yes
12. Selected Junoldo the Shadespirit Power Patron (Deck)
13. Activate Junoldo the Shadespirit Power Patron (M2): Special Summon 1 "Junora the Power Patron of Tuning" from your Extra Deck
14. Selected Junora the Power Patron of Tuning (Extra Deck)
15. Yes
16. Selected Nervedo the Shadebeast Power Patron (Extra Deck)
17. Link Summon Purification Power Patron (Extra Deck)
18. select Medius the Pure (M3)
19. select Junora the Power Patron of Tuning (M4)
20. Yes
21. Selected Theorealize Medius (Deck)
22. Activate Medius the Pure (GY): Shuffle 1 monster from your hand or face-up field into the Deck, and if you do, Special Summon this card
23. Selected Ash Blossom & Joyous Spring (hand)
24. Activate Theorealize Medius (hand): If a "Power Patron" card is on the field: You can Special Summon this card from your hand, then you can add 1 "Theorealize" Spell/Trap from your Deck to your hand
25. Yes
26. Selected Theorealize Past Lull (Deck)
27. Special Summon (procedure) Artmage Non-Finito (Extra Deck)
28. Selected Theorealize Past Lull (hand)
29. Selected Nervedo the Shadebeast Power Patron (hand)
30. Yes
31. Activate Purification Power Patron (EMZ-L): Link Summon including this card as material
32. Selected Medicurius the Power Patron of Illusions (Extra Deck)
33. select Medius the Pure (M2)
34. Finish selection
35. Selected Artmage Impasto -Recapture- (Deck)
36. Yes
37. Special Summon 1 "Diactorus" monster
38. Selected Artmage Diactorus (Extra Deck)
39. Activate Theorealize Past Lull (GY): Special Summon 1 Fusion, Synchro, or Xyz Monster from your GY
40. Selected Junora the Power Patron of Tuning (GY)
41. Link Summon S:P Little Knight (Extra Deck)
42. select Junora the Power Patron of Tuning (M3)
43. select Artmage Non-Finito (M4)
44. Yes
45. Selected Purification Power Patron (GY)

End board:  LP 8000 | Hand 3 | Deck 33 | Extra 9 | GY 3 | Banished 10   Monsters: M1: Nerva the Power Patron of Creation Lv10 3300/3300 ATK || M2: Artmage Diactorus Lv8 2800/2500 ATK || M3: S:P Little Knight L2←→ 1600  || EMZ-L: Medicurius the Power Patron of Illusions L3↙↓↘ 3000    Spell/Trap: S1: Ars Magna - "Citrinitas" || S2: Artmage Impasto -Recapture- (Set)   GY: Nervedo the Shadebeast Power Patron, Junora the Power Patron of Tuning, Artmage Non-Finito   Banished: Artmage Finmel (face-down), Dark Magical Circle (face-down), Vidolium the Unstable Power Patron of Unity (face-down), Black Chaos (face-down), Skull Archfiend of Chaos (face-down), Light and Darkness Ritual (face-down), Medius the Pure,

## Order 5: best 11.8 [margin 4.29: ss_panama 5.07, elfnote 5.94, despia -0.85, angelechy 6.4] (, worst 11.8) — from tries Normal Summon Theorealize Medius → new ending
Others: tries Normal Summon Theorealize Medius → new ending → new ending 11.8 · tries Normal Summon Theorealize Medius → new ending → new early order 10.95 · tries Normal Summon Theorealize Medius → new ending → new early order 10.95 · tries Normal Summon Theorealize Medius 10.75 · tries Activate Junoldo the Shadespirit Power Patron 10.75 · opening lanes 10.75 · search 8.85 · v52-citrinitas 5.25 · cit1 5.25

1. Activate Ars Magna - "Citrinitas" (hand): activate this card
2. Activate Ars Magna - "Citrinitas" (S1): Add 1 "Medius" or "Ars Magna" monster from your Deck to your hand
3. Selected Medius the Pure (Deck)
4. Normal Summon Medius the Pure (hand)
5. Yes
6. Selected Junoldo the Shadespirit Power Patron (Deck)
7. Special Summon it
8. Activate Junoldo the Shadespirit Power Patron (M4): Special Summon 1 "Junora the Power Patron of Tuning" from your Extra Deck
9. Selected Junora the Power Patron of Tuning (Extra Deck)
10. Link Summon Purification Power Patron (Extra Deck)
11. select Medius the Pure (M3)
12. select Junora the Power Patron of Tuning (M1)
13. Yes
14. Selected Theorealize Medius (Deck)
15. Activate Medius the Pure (GY): Shuffle 1 monster from your hand or face-up field into the Deck, and if you do, Special Summon this card
16. Selected Ash Blossom & Joyous Spring (hand)
17. Activate Theorealize Medius (hand): If a "Power Patron" card is on the field: You can Special Summon this card from your hand, then you can add 1 "Theorealize" Spell/Trap from your Deck to your hand
18. Yes
19. Selected Theorealize Liberation (Deck)
20. Activate Theorealize Liberation (hand): Add to your hand, or Special Summon, 1 monster from your Deck with 300 ATK/200 DEF
21. Activate Purification Power Patron (EMZ-L): Link Summon including this card as material
22. Selected Medicurius the Power Patron of Illusions (Extra Deck)
23. select Medius the Pure (M2)
24. Finish selection
25. Selected Nervedo the Shadebeast Power Patron (Deck)
26. Special Summon it
27. Yes
28. Add 1 "Ars Magna" card from your Deck to your hand
29. Selected Ars Magna of Infinity and Finity (Deck)
30. Activate Ars Magna of Infinity and Finity (hand): You can banish this card from your hand; add 1 non-Warrior "Ars Magna" monster from your Deck to your hand
31. Selected Ars Magna of Purification and Corruption (Deck)
32. Activate Ars Magna of Purification and Corruption (hand): You can banish this card from your hand; add 1 "Ars Magna" Spell/Trap from your Deck to your hand
33. Selected Ars Magna - "Citrinitas" (Deck)
34. Special Summon (procedure) Artmage Non-Finito (Extra Deck)
35. Selected Ars Magna - "Citrinitas" (hand)
36. Selected Nervedo the Shadebeast Power Patron (M2)
37. Yes
38. Activate Artmage Non-Finito (M2): Set 1 "Artmage" Spell/Trap from your Deck
39. Activate Ars Magna of Infinity and Finity (banishment): Special Summon this card
40. Selected Artmage Impasto -Recapture- (Deck)
41. Selected Artmage Finmel (Deck)
42. Link Summon S:P Little Knight (Extra Deck)
43. select Theorealize Medius (M1)
44. select Ars Magna of Infinity and Finity (M3)
45. Yes

End board:  LP 8000 | Hand 3 | Deck 32 | Extra 12 | GY 6 | Banished 4   Monsters: M1: Ars Magna of Purification and Corruption Lv8 1000/2100 ATK || M2: Artmage Non-Finito Lv7 2400/1500 ATK || M3: S:P Little Knight L2←→ 1600  || M4: Artmage Finmel Lv7 2400/1500 ATK || EMZ-L: Medicurius the Power Patron of Illusions L3↙↓↘ 9000    Spell/Trap: S1: Ars Magna - "Citrinitas" || S2: Artmage Impasto -Recapture- (Set)   GY: Junora the Power Patron of Tuning, Purification Power Patron, Theorealize Liberation, Ars Magna - "Citrinitas", Theorealize Medius, Ars Magna of Infinity and Finity   Banished: Theorealize Past Lull (face-down), Artmage Finmel (face-down), Plundered Power Patron Plane - Vidolia (face-down), M

## Order 6: best 12.1 [margin 4.09: ss_panama 3.68, elfnote 5.59, despia -1.15, angelechy 8.03] (, worst 12.1) — from tries Activate Artmage Diactorus
Others: opening lanes 12.1 · tries Activate Artmage Diactorus → new ending 12.1 · tries Activate Theorealize Past Lull 12 · v52-citrinitas 11.15 · v52-citrinitas 11.15 · search 10.4 · tries Activate Artmage Diactorus → new early order 9.9 · tries Activate Artmage Diactorus → new early order 9.9 · tries Activate Artmage Diactorus → new ending 9.7 · cit1 8.33 · cit1 7.84

1. Set Spell/Trap Ars Magna - "Citrinitas"
2. Activate Ars Magna - "Citrinitas" (S1): activate this card
3. Activate Ars Magna - "Citrinitas" (S1): Add 1 "Medius" or "Ars Magna" monster from your Deck to your hand
4. Selected Medius the Pure (Deck)
5. Normal Summon Medius the Pure (hand)
6. Yes
7. Selected Nervedo the Shadebeast Power Patron (Deck)
8. Special Summon it
9. Activate Nervedo the Shadebeast Power Patron (M4): Special Summon 1 "Nerva the Power Patron of Creation" from your Extra Deck
10. Selected Nerva the Power Patron of Creation (Extra Deck)
11. Yes
12. Selected Junoldo the Shadespirit Power Patron (Deck)
13. Activate Junoldo the Shadespirit Power Patron (M2): Special Summon 1 "Junora the Power Patron of Tuning" from your Extra Deck
14. Selected Junora the Power Patron of Tuning (Extra Deck)
15. Yes
16. Selected Nervedo the Shadebeast Power Patron (Extra Deck)
17. Link Summon Purification Power Patron (Extra Deck)
18. select Junora the Power Patron of Tuning (M2)
19. select Medius the Pure (M1)
20. Yes
21. Selected Theorealize Medius (Deck)
22. Activate Medius the Pure (GY): Shuffle 1 monster from your hand or face-up field into the Deck, and if you do, Special Summon this card
23. Selected Ash Blossom & Joyous Spring (hand)
24. Activate Theorealize Medius (hand): If a "Power Patron" card is on the field: You can Special Summon this card from your hand, then you can add 1 "Theorealize" Spell/Trap from your Deck to your hand
25. Yes
26. Selected Theorealize Past Lull (Deck)
27. Activate Purification Power Patron (EMZ-R): Link Summon including this card as material
28. Selected Medicurius the Power Patron of Illusions (Extra Deck)
29. select Medius the Pure (M1)
30. Finish selection
31. Yes
32. Special Summon 1 "Diactorus" monster
33. Selected Artmage Diactorus (Extra Deck)
34. Activate Artmage Diactorus (M5): Change the battle position of 1 monster on the field
35. Selected Artmage Diactorus (M5)
36. Special Summon (procedure) Artmage Non-Finito (Extra Deck)
37. Selected Theorealize Past Lull (hand)
38. Selected Nervedo the Shadebeast Power Patron (hand)
39. Yes
40. Selected Artmage Impasto -Recapture- (Deck)
41. Activate Theorealize Past Lull (GY): Special Summon 1 Fusion, Synchro, or Xyz Monster from your GY
42. Selected Junora the Power Patron of Tuning (GY)
43. Link Summon S:P Little Knight (Extra Deck)
44. select Junora the Power Patron of Tuning (M3)
45. select Artmage Non-Finito (M1)
46. No

End board:  LP 8000 | Hand 3 | Deck 33 | Extra 9 | GY 4 | Banished 9   Monsters: M3: S:P Little Knight L2←→ 1600  || M4: Nerva the Power Patron of Creation Lv10 3300/3300 ATK || M5: Artmage Diactorus Lv8 2800/2500 DEF || EMZ-R: Medicurius the Power Patron of Illusions L3↙↓↘ 3000    Spell/Trap: S1: Ars Magna - "Citrinitas" || S2: Artmage Impasto -Recapture- (Set)   GY: Purification Power Patron, Nervedo the Shadebeast Power Patron, Artmage Non-Finito, Junora the Power Patron of Tuning   Banished: Theorealize Medius (face-down), Ars Magna - "Citrinitas" (face-down), Mind Shuffle (face-down), Skull Archfiend of Chaos (face-down), Small World (face-down), Vidolium the Unstable Power Patron of Unity (face-d

## Order 7: best 12.1 [margin 2.72: ss_panama null, elfnote 0, despia -0.01, angelechy 8.18] (, worst 12.1) — from search → new ending
Others: search → new ending → new early order 12.1 · search 12 · tries Activate Ars Magna of Purification and Corruption 12 · opening lanes 12 · v52-citrinitas 11.15 · v52-citrinitas 11.15 · tries Activate Vidolium the Unstable Power Patron of Unity 11 · search → new ending → new early order 9.63 · cit1 8.33 · cit1 7.84 · search → new ending → new ending 4.1

1. Activate Ars Magna - "Citrinitas" (hand): activate this card
2. Activate Ars Magna - "Citrinitas" (S1): Add 1 "Medius" or "Ars Magna" monster from your Deck to your hand
3. Selected Medius the Pure (Deck)
4. Normal Summon Medius the Pure (hand)
5. Yes
6. Selected Nervedo the Shadebeast Power Patron (Deck)
7. Special Summon it
8. Activate Nervedo the Shadebeast Power Patron (M1): Special Summon 1 "Nerva the Power Patron of Creation" from your Extra Deck
9. Selected Nerva the Power Patron of Creation (Extra Deck)
10. Yes
11. Selected Junoldo the Shadespirit Power Patron (Deck)
12. Activate Junoldo the Shadespirit Power Patron (M5): Special Summon 1 "Junora the Power Patron of Tuning" from your Extra Deck
13. Selected Junora the Power Patron of Tuning (Extra Deck)
14. Yes
15. Selected Nervedo the Shadebeast Power Patron (Extra Deck)
16. Link Summon Purification Power Patron (Extra Deck)
17. select Medius the Pure (M3)
18. select Junora the Power Patron of Tuning (M5)
19. Yes
20. Selected Theorealize Medius (Deck)
21. Activate Theorealize Medius (hand): If a "Power Patron" card is on the field: You can Special Summon this card from your hand, then you can add 1 "Theorealize" Spell/Trap from your Deck to your hand
22. Yes
23. Selected Theorealize Past Lull (Deck)
24. Special Summon (procedure) Artmage Non-Finito (Extra Deck)
25. Selected Theorealize Past Lull (hand)
26. Selected Nervedo the Shadebeast Power Patron (hand)
27. Yes
28. Activate Purification Power Patron (EMZ-R): Link Summon including this card as material
29. Selected Medicurius the Power Patron of Illusions (Extra Deck)
30. select Artmage Non-Finito (M1)
31. Finish selection
32. Selected Artmage Impasto -Recapture- (Deck)
33. Activate Theorealize Past Lull (GY): Special Summon 1 Fusion, Synchro, or Xyz Monster from your GY
34. Selected Junora the Power Patron of Tuning (GY)
35. Activate Medius the Pure (GY): Shuffle 1 monster from your hand or face-up field into the Deck, and if you do, Special Summon this card
36. Selected Ash Blossom & Joyous Spring (hand)
37. Link Summon S:P Little Knight (Extra Deck)
38. select Junora the Power Patron of Tuning (M5)
39. select Medius the Pure (M1)
40. Yes
41. Special Summon 1 "Diactorus" monster
42. Selected Artmage Diactorus (Extra Deck)

End board:  LP 8000 | Hand 3 | Deck 33 | Extra 9 | GY 4 | Banished 9   Monsters: M3: Artmage Diactorus Lv8 2800/2500 ATK || M4: Nerva the Power Patron of Creation Lv10 3300/3300 ATK || M5: S:P Little Knight L2←→ 1600  || EMZ-R: Medicurius the Power Patron of Illusions L3↙↓↘ 3000    Spell/Trap: S1: Ars Magna - "Citrinitas" || S2: Artmage Impasto -Recapture- (Set)   GY: Nervedo the Shadebeast Power Patron, Artmage Non-Finito, Purification Power Patron, Junora the Power Patron of Tuning   Banished: Theorealize Medius (face-down), Ars Magna - "Citrinitas" (face-down), Griffoh (face-down), Pendulum Treasure (face-down), Lacrima the Crimson Tears (face-down), Vidolium the Unstable Power Patron of Unity (face

## Order 8: best 12.1 [margin 5.37: ss_panama 5.84, elfnote null, despia -0.75, angelechy 7.95] (, worst 12.1) — from search → new ending
Others: search → new ending → new early order 12.1 · search 12 · opening lanes 12 · v52-citrinitas 11.15 · v52-citrinitas 11.15 · tries Activate Prohibited Power Patron Portal - Terminus 11 · tries Activate Theorealize Liberation 10.1 · cit1 8.33 · cit1 7.84 · search → new ending → new ending 7.07 · search → new ending → new early order 3.55

1. Set Spell/Trap Ars Magna - "Citrinitas"
2. Activate Ars Magna - "Citrinitas" (S1): activate this card
3. Activate Ars Magna - "Citrinitas" (S1): Add 1 "Medius" or "Ars Magna" monster from your Deck to your hand
4. Selected Medius the Pure (Deck)
5. Normal Summon Medius the Pure (hand)
6. Yes
7. Selected Nervedo the Shadebeast Power Patron (Deck)
8. Special Summon it
9. Activate Nervedo the Shadebeast Power Patron (M2): Special Summon 1 "Nerva the Power Patron of Creation" from your Extra Deck
10. Selected Nerva the Power Patron of Creation (Extra Deck)
11. Yes
12. Selected Junoldo the Shadespirit Power Patron (Deck)
13. Activate Junoldo the Shadespirit Power Patron (M3): Special Summon 1 "Junora the Power Patron of Tuning" from your Extra Deck
14. Selected Junora the Power Patron of Tuning (Extra Deck)
15. Yes
16. Selected Nervedo the Shadebeast Power Patron (Extra Deck)
17. Link Summon Purification Power Patron (Extra Deck)
18. select Junora the Power Patron of Tuning (M3)
19. select Medius the Pure (M1)
20. Yes
21. Selected Theorealize Medius (Deck)
22. Activate Theorealize Medius (hand): If a "Power Patron" card is on the field: You can Special Summon this card from your hand, then you can add 1 "Theorealize" Spell/Trap from your Deck to your hand
23. Yes
24. Selected Theorealize Past Lull (Deck)
25. Activate Medius the Pure (GY): Shuffle 1 monster from your hand or face-up field into the Deck, and if you do, Special Summon this card
26. Selected Ash Blossom & Joyous Spring (hand)
27. Special Summon (procedure) Artmage Non-Finito (Extra Deck)
28. Selected Theorealize Past Lull (hand)
29. Selected Nervedo the Shadebeast Power Patron (hand)
30. Yes
31. Activate Purification Power Patron (EMZ-L): Link Summon including this card as material
32. Selected Medicurius the Power Patron of Illusions (Extra Deck)
33. select Medius the Pure (M1)
34. Finish selection
35. Selected Artmage Impasto -Recapture- (Deck)
36. Yes
37. Special Summon 1 "Diactorus" monster
38. Selected Artmage Diactorus (Extra Deck)
39. Activate Theorealize Past Lull (GY): Special Summon 1 Fusion, Synchro, or Xyz Monster from your GY
40. Selected Junora the Power Patron of Tuning (GY)
41. Link Summon S:P Little Knight (Extra Deck)
42. select Junora the Power Patron of Tuning (M3)
43. select Artmage Non-Finito (M5)
44. No

End board:  LP 8000 | Hand 3 | Deck 33 | Extra 9 | GY 4 | Banished 9   Monsters: M1: Artmage Diactorus Lv8 2800/2500 ATK || M2: Nerva the Power Patron of Creation Lv10 3300/3300 ATK || M3: S:P Little Knight L2←→ 1600  || EMZ-L: Medicurius the Power Patron of Illusions L3↙↓↘ 3000    Spell/Trap: S1: Ars Magna - "Citrinitas" || S2: Artmage Impasto -Recapture- (Set)   GY: Nervedo the Shadebeast Power Patron, Purification Power Patron, Junora the Power Patron of Tuning, Artmage Non-Finito   Banished: Fiendsmith Engraver (face-down), Skull Archfiend of Chaos (face-down), Artmage Vandalism -Assault- (face-down), Mind Shuffle (face-down), Artmage Graflare (face-down), Pendulum Treasure (face-down), Medius the 

