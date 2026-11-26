# Evolved lines — Black Chaos, Medius the Pure, Ash Blossom & Joyous Spring, Droll & Lock Bird, Ghost Ogre & Snow Rabbit (findlist-1100)
2026-11-26T01:36:36.870Z

8 deck orders (different face-down banishes / draws), 3 opponent hands x o_ss_panama + o_elfnote + o_despia + o_angelechy per line, 15 min searches, 4 mutation rounds.
Fitness = end-board interruptions (the lab scorer, src/disrupt.mjs: wipe 2, negate 1-1.5, banish/protection less; hand traps kept count 1 each). The winner of each order is also played into the opponent decks: margin after their turn shown beside it.

**Margin after their turn (winners): average 6.36** (worst -3.13)

**Best line per deck order: average 14.4** (worst order 13.75). Winner came from: tries Activate Theorealize Liberation 1, tries Activate Fiendsmith's Tract 1, opening lanes 2

| seed line | works as written | its score when it works | seed start + search finish (all orders) |
|---|---|---|---|
| bc1 | 3/8 | 8.46 | 11.26 |
| v52-bcmed | 4/8 | 13.35 | 13.47 |

## Weak points found automatically
Cards whose face-down banish (by your own costs) hurt the best line most (average best line without vs with that card banished):

| card | orders where it was banished | drop |
|---|---|---|
| Theorealize Medius | 3/8 | 1.8 |
| Ars Magna of Infinity and Finity | 3/8 | 1.8 |
| Black Luster Soldier - Soldier of Light and Darkness | 3/8 | 1.8 |
| Vidolium the Unstable Power Patron of Unity | 2/8 | 1 |
| Small World | 2/8 | 1 |
| Theorealize Past Lull | 2/8 | 1 |
| Fiendsmith's Tract | 3/8 | -0.47 |
| Ars Magna of Purification and Corruption | 3/8 | -0.47 |
| Fiendsmith Engraver | 3/8 | -0.47 |
| Ars Magna - "Citrinitas" | 3/8 | -0.47 |

Where the hand-designed lines broke (next step that no longer worked):
- bc1: Yes (1x)

List changes proposed for the list test (data/proposals-findlist-1100.json):
- +1 Theorealize Medius, −1 Plundered Power Patron Plane - Vidolia — Theorealize Medius: best line 1.8 worse when a cost banished it (3 of 8 orders) — Black Chaos
- +1 Ars Magna of Infinity and Finity, −1 Artmage Vandalism -Assault- — Ars Magna of Infinity and Finity: best line 1.8 worse when a cost banished it (3 of 8 orders) — Black Chaos
- +1 Black Luster Soldier - Soldier of Light and Darkness, −1 Small World — Black Luster Soldier - Soldier of Light and Darkness: best line 1.8 worse when a cost banished it (3 of 8 orders) — Black Chaos
- +1 Vidolium the Unstable Power Patron of Unity, −1 Plundered Power Patron Plane - Vidolia — Vidolium the Unstable Power Patron of Unity: best line 1 worse when a cost banished it (2 of 8 orders) — Black Chaos
- +1 Theorealize Medius — Theorealize Medius: best line 1.8 worse when a cost banished it (3 of 8 orders) — Black Chaos (add only: deck grows, up to 60)
- +1 Ars Magna of Infinity and Finity — Ars Magna of Infinity and Finity: best line 1.8 worse when a cost banished it (3 of 8 orders) — Black Chaos (add only: deck grows, up to 60)
- +1 Black Luster Soldier - Soldier of Light and Darkness — Black Luster Soldier - Soldier of Light and Darkness: best line 1.8 worse when a cost banished it (3 of 8 orders) — Black Chaos (add only: deck grows, up to 60)
- +1 Vidolium the Unstable Power Patron of Unity — Vidolium the Unstable Power Patron of Unity: best line 1 worse when a cost banished it (2 of 8 orders) — Black Chaos (add only: deck grows, up to 60)

Effects the search had not used, tried on purpose (best result so far):
- Activate Theorealize Liberation: 15.75
- Activate Artmage Diactorus: 14.05
- Activate Fiendsmith's Tract: 14.05
- Special Summon (procedure) Dark Magician of Destruction: 13.75
- Activate Prohibited Power Patron Portal - Terminus: 13.65
- Special Summon (procedure) Apprentice Illusion Magician: 13.6
- Activate Dark Magical Circle: 13.6
- Activate Griffoh: 4.67

## Order 1: best 15.75 [margin 7.36: ss_panama -3.13, elfnote 10.65, despia 5.15, angelechy 10.5] (, worst 15.75) — from tries Activate Theorealize Liberation
Others: tries Activate Theorealize Liberation → new ending 15.75 · tries Activate Theorealize Liberation → new early order 15.1 · tries Activate Theorealize Liberation → new ending 14.3 · tries Activate Artmage Diactorus 14.05 · v52-bcmed 13.75 · v52-bcmed 13.75 · opening lanes 13.75 · tries Activate Theorealize Liberation → new early order 11.65 · bc1 11.48 · bc1 8.69

1. Normal Summon Medius the Pure (hand)
2. Yes
3. Selected Nervedo the Shadebeast Power Patron (Deck)
4. Special Summon it
5. Activate Nervedo the Shadebeast Power Patron (M3): Special Summon 1 "Nerva the Power Patron of Creation" from your Extra Deck
6. Selected Nerva the Power Patron of Creation (Extra Deck)
7. Yes
8. Selected Theorealize Medius (Deck)
9. Activate Black Chaos (hand): Special Summon ("Black Chaos")
10. Selected Mind Shuffle (Deck)
11. Activate Mind Shuffle (S1): Add 1 appropriate monster to your hand
12. Selected Skull Archfiend of Chaos (Deck)
13. Selected Skull Archfiend of Chaos (hand)
14. Yes
15. Selected Light and Darkness Ritual (Deck)
16. Selected Magician of Dark Chaos - Black Chaos (Deck)
17. Activate Light and Darkness Ritual (GY): Add both this card and 1 card that mentions "Light and Darkness Ritual" from your GY to your hand
18. Selected Skull Archfiend of Chaos (GY)
19. Set Spell/Trap Light and Darkness Ritual
20. Activate Light and Darkness Ritual (S2): Ritual Summon 1 "Magician of Dark Chaos - Black Chaos" or "Black Luster Soldier - Soldier of Light and Darkness" from your hand
21. Selected Magician of Dark Chaos - Black Chaos (hand)
22. Selected Black Chaos (GY) value 8
23. Yes
24. Add 1 "Ars Magna" card from your Deck to your hand
25. Selected Ars Magna - "Citrinitas" (Deck)
26. Activate Ars Magna - "Citrinitas" (hand): activate this card
27. Activate Ars Magna - "Citrinitas" (S2): Add 1 "Medius" or "Ars Magna" monster from your Deck to your hand
28. Selected Theorealize Medius (Deck)
29. Activate Theorealize Medius (hand): If a "Power Patron" card is on the field: You can Special Summon this card from your hand, then you can add 1 "Theorealize" Spell/Trap from your Deck to your hand
30. Yes
31. Selected Theorealize Liberation (Deck)
32. Activate Theorealize Liberation (hand): Add to your hand, or Special Summon, 1 monster from your Deck with 300 ATK/200 DEF
33. Selected Junoldo the Shadespirit Power Patron (Deck)
34. Add the card(s) to your hand
35. Activate Junoldo the Shadespirit Power Patron (hand): Activate it as a Pendulum Spell
36. Link Summon Purification Power Patron (Extra Deck)
37. select Theorealize Medius (M1)
38. select Medius the Pure (M4)
39. Activate Junoldo the Shadespirit Power Patron (S5): Destroy this card, draw 2 cards, then discard 1 card
40. Activate Purification Power Patron (EMZ-R): Add 1 "Theorealize" card from your Deck to your hand
41. Selected Theorealize Past Lull (Deck)
42. Selected Skull Archfiend of Chaos (hand)
43. Yes
44. Activate Purification Power Patron (EMZ-R): Link Summon including this card as material
45. Selected Medicurius the Power Patron of Illusions (Extra Deck)
46. select Theorealize Medius (M5)
47. Finish selection
48. Selected Nervedo the Shadebeast Power Patron (Extra Deck)
49. Activate Skull Archfiend of Chaos (GY): Special Summon this card
50. select Theorealize Liberation (GY)
51. select Purification Power Patron (GY)
52. select Light and Darkness Ritual (GY)
53. Default order
54. Activate Medius the Pure (GY): Shuffle 1 monster from your hand or face-up field into the Deck, and if you do, Special Summon this card
55. Selected Magician of Dark Chaos - Black Chaos (M2)
56. Synchro Summon Chaos Angel (Extra Deck)
57. select Medius the Pure (M1)
58. select Skull Archfiend of Chaos (M4)
59. No
60. Special Summon (procedure) Artmage Non-Finito (Extra Deck)
61. Selected Theorealize Past Lull (hand)
62. Selected Nervedo the Shadebeast Power Patron (hand)
63. Yes
64. Selected Artmage Impasto -Recapture- (Deck)
65. Activate Artmage Finmel (hand): Special Summon this card from your hand
66. Yes
67. Activate Fiendsmith Engraver (hand): Add 1 "Fiendsmith" Spell/Trap from your Deck to your hand
68. Selected Fiendsmith's Tract (Deck)
69. Activate Fiendsmith's Tract (hand): Add 1 LIGHT Fiend monster from your Deck to your hand
70. Selected Lacrima the Crimson Tears (Deck)
71. Selected Lacrima the Crimson Tears (hand)
72. Activate Fiendsmith Engraver (GY): Special Summon this card
73. Selected Lacrima the Crimson Tears (GY)
74. Link Summon Fiendsmith's Requiem (Extra Deck)
75. select Fiendsmith Engraver (M2)
76. Activate Fiendsmith's Requiem (M2): Special Summon 1 "Fiendsmith" monster
77. Selected Fiendsmith Engraver (Deck)
78. Link Summon Fiendsmith's Sequence (Extra Deck)
79. select Fiendsmith Engraver (M2)
80. select Chaos Angel (M4)
81. Activate Fiendsmith's Sequence (M2): Fusion Summon 1 Fiend Fusion Monster
82. Selected Fiendsmith's Desirae (Extra Deck)
83. select Fiendsmith Engraver (GY)
84. select Fiendsmith's Requiem (GY)
85. select Fiendsmith Engraver (GY)
86. Activate Fiendsmith's Sequence (M2): Equip this card to 1 non-Link LIGHT Fiend you control
87. Selected Fiendsmith's Desirae (M4)
88. Activate Fiendsmith's Desirae (M4): Negate the effects of face-up cards on the field
89. Selected Artmage Non-Finito (M1)
90. Activate Theorealize Past Lull (GY): Special Summon 1 Fusion, Synchro, or Xyz Monster from your GY
91. Selected Chaos Angel (GY)
92. Yes
93. Selected Ars Magna - "Citrinitas" (S2)

End board:  LP 8000 | Hand 4 | Deck 29 | Extra 10 | GY 5 | Banished 7   Monsters: M1: Artmage Non-Finito Lv7 2400/1500 ATK [NEGATED] || M2: Chaos Angel Lv10 3500/2800 ATK || M3: Nerva the Power Patron of Creation Lv10 3300/3300 ATK || M4: Fiendsmith's Desirae Lv9 2800/2400 ATK || M5: Artmage Finmel Lv7 2400/1500 ATK || EMZ-L: Medicurius the Power Patron of Illusions L3↙↓↘ 3000    Spell/Trap: S1: Mind Shuffle || S3: Artmage Impasto -Recapture- (Set) || S4: Fiendsmith's Sequence   GY: Theorealize Medius, Theorealize Medius, Skull Archfiend of Chaos, Nervedo the Shadebeast Power Patron, Fiendsmith's Tract   Banished: Medius the Pure (face-down), Fiendsmith's Tract (face-down), Ars Magna of Purification an

## Order 2: best 14.05 (, worst 14.05) — from tries Activate Fiendsmith's Tract
Others: opening lanes 13.9 · search 13.8 · tries Activate Prohibited Power Patron Portal - Terminus 13.65 · v52-bcmed 13.2 · v52-bcmed 12.95 · bc1 11.48 · tries Activate Fiendsmith's Tract → new ending 10.45 · bc1 8.69

1. Activate Black Chaos (hand): Special Summon ("Black Chaos")
2. Selected Mind Shuffle (Deck)
3. Normal Summon Medius the Pure (hand)
4. Yes
5. Selected Nervedo the Shadebeast Power Patron (Deck)
6. #573
7. Activate Mind Shuffle (S1): Add 1 appropriate monster to your hand
8. Selected Skull Archfiend of Chaos (Deck)
9. Selected Skull Archfiend of Chaos (hand)
10. Yes
11. Selected Light and Darkness Ritual (Deck)
12. Selected Magician of Dark Chaos - Black Chaos (Deck)
13. Activate Light and Darkness Ritual (GY): Add both this card and 1 card that mentions "Light and Darkness Ritual" from your GY to your hand
14. Selected Skull Archfiend of Chaos (GY)
15. Activate Light and Darkness Ritual (hand): Ritual Summon 1 "Magician of Dark Chaos - Black Chaos" or "Black Luster Soldier - Soldier of Light and Darkness" from your hand
16. Selected Magician of Dark Chaos - Black Chaos (hand)
17. Selected Black Chaos (GY) value 8
18. Yes
19. Selected Light and Darkness Ritual (GY)
20. Special Summon (procedure) Artmage Non-Finito (Extra Deck)
21. Selected Light and Darkness Ritual (hand)
22. Selected Nervedo the Shadebeast Power Patron (hand)
23. Yes
24. Selected Artmage Impasto -Recapture- (Deck)
25. Link Summon Purification Power Patron (Extra Deck)
26. select Medius the Pure (M4)
27. select Artmage Non-Finito (M5)
28. Yes
29. Selected Theorealize Medius (Deck)
30. Activate Theorealize Medius (hand): If a "Power Patron" card is on the field: You can Special Summon this card from your hand, then you can add 1 "Theorealize" Spell/Trap from your Deck to your hand
31. Yes
32. Selected Theorealize Liberation (Deck)
33. Activate Medius the Pure (GY): Shuffle 1 monster from your hand or face-up field into the Deck, and if you do, Special Summon this card
34. Selected Skull Archfiend of Chaos (hand)
35. Activate Theorealize Liberation (hand): Add to your hand, or Special Summon, 1 monster from your Deck with 300 ATK/200 DEF
36. Activate Purification Power Patron (EMZ-L): Link Summon including this card as material
37. Selected Medicurius the Power Patron of Illusions (Extra Deck)
38. select Medius the Pure (M1)
39. Finish selection
40. Selected Nervedo the Shadebeast Power Patron (Deck)
41. Special Summon it
42. Yes
43. Special Summon 1 "Diactorus" monster
44. Selected Artmage Diactorus (Extra Deck)
45. Activate Nervedo the Shadebeast Power Patron (M4): Special Summon 1 "Nerva the Power Patron of Creation" from your Extra Deck
46. Selected Nerva the Power Patron of Creation (Extra Deck)
47. Yes
48. Selected Artmage Graflare (Deck)

End board:  LP 8000 | Hand 3 | Deck 32 | Extra 11 | GY 5 | Banished 6   Monsters: M1: Artmage Diactorus Lv8 2800/2500 ATK || M2: Nerva the Power Patron of Creation Lv10 3300/3300 ATK || M3: Magician of Dark Chaos - Black Chaos Lv8 2800/2600 ATK || M4: Artmage Graflare Lv5 2100/1500 ATK || EMZ-L: Medicurius the Power Patron of Illusions L3↙↓↘ 3000    Spell/Trap: S1: Mind Shuffle || S2: Artmage Impasto -Recapture- (Set)   GY: Light and Darkness Ritual, Nervedo the Shadebeast Power Patron, Artmage Non-Finito, Purification Power Patron, Theorealize Liberation   Banished: Black Chaos, Medius the Pure, Theorealize Medius, Theorealize Medius (face-down), Lacrima the Crimson Tears (face-down), Ars Magna - "Cit

## Order 3: best 13.75 [margin 4.29: ss_panama 4.59, elfnote 4.25, despia -1.06, angelechy 7.68] (, worst 13.75) — from opening lanes
Others: tries Special Summon (procedure) Apprentice Illusion Magician 13.6 · tries Activate Dark Magical Circle 13.6 · v52-bcmed 13.2 · v52-bcmed 12.95 · bc1 11.03

1. Activate Black Chaos (hand): Special Summon ("Black Chaos")
2. Selected Mind Shuffle (Deck)
3. Normal Summon Medius the Pure (hand)
4. Yes
5. Selected Nervedo the Shadebeast Power Patron (Deck)
6. Special Summon it
7. Activate Nervedo the Shadebeast Power Patron (M1): Special Summon 1 "Nerva the Power Patron of Creation" from your Extra Deck
8. Activate Mind Shuffle (S1): Add 1 appropriate monster to your hand
9. Selected Skull Archfiend of Chaos (Deck)
10. Selected Skull Archfiend of Chaos (hand)
11. Selected Nerva the Power Patron of Creation (Extra Deck)
12. Yes
13. Selected Light and Darkness Ritual (Deck)
14. Activate Nervedo the Shadebeast Power Patron (Extra Deck): Special Summon 1 "Power Patron" or "Artmage" monster from your Deck or face-up Extra Deck
15. Selected Junoldo the Shadespirit Power Patron (Deck)
16. Selected Magician of Dark Chaos - Black Chaos (Deck)
17. Activate Light and Darkness Ritual (GY): Add both this card and 1 card that mentions "Light and Darkness Ritual" from your GY to your hand
18. Selected Black Chaos (GY)
19. Special Summon (procedure) Black Chaos (hand)
20. select Magician of Dark Chaos - Black Chaos (hand)
21. Activate Junoldo the Shadespirit Power Patron (M5): Special Summon 1 "Junora the Power Patron of Tuning" from your Extra Deck
22. Selected Junora the Power Patron of Tuning (Extra Deck)
23. Yes
24. Selected Nervedo the Shadebeast Power Patron (Extra Deck)
25. Special Summon (procedure) Artmage Non-Finito (Extra Deck)
26. Selected Light and Darkness Ritual (hand)
27. Selected Nervedo the Shadebeast Power Patron (hand)
28. Yes
29. Selected Artmage Impasto -Recapture- (Deck)
30. Special Summon (procedure) Dark Magician of Destruction (Extra Deck)
31. Selected Black Chaos (M1)
32. Yes
33. Selected Apprentice Illusion Magician (Deck)
34. Activate Skull Archfiend of Chaos (GY): Special Summon this card
35. select Nervedo the Shadebeast Power Patron (GY)
36. select Light and Darkness Ritual (GY)
37. select Black Chaos (banishment)
38. Default order
39. Link Summon Purification Power Patron (Extra Deck)
40. select Medius the Pure (M3)
41. select Junora the Power Patron of Tuning (EMZ-L)
42. Yes
43. Selected Theorealize Medius (Deck)
44. Activate Theorealize Medius (hand): If a "Power Patron" card is on the field: You can Special Summon this card from your hand, then you can add 1 "Theorealize" Spell/Trap from your Deck to your hand
45. Yes
46. Selected Theorealize Past Lull (Deck)
47. Activate Medius the Pure (GY): Shuffle 1 monster from your hand or face-up field into the Deck, and if you do, Special Summon this card
48. Selected Dark Magician of Destruction (M5)
49. Set Spell/Trap Theorealize Past Lull
50. Activate Purification Power Patron (EMZ-L): Link Summon including this card as material
51. Selected Medicurius the Power Patron of Illusions (Extra Deck)
52. select Medius the Pure (M5)
53. Finish selection
54. Yes
55. Special Summon 1 "Diactorus" monster
56. Selected Artmage Diactorus (Extra Deck)
57. Activate Theorealize Past Lull (S3): Special Summon 1 "Medius the Pure" from your hand or Deck
58. Selected Medius the Pure (Deck)
59. Link Summon S:P Little Knight (Extra Deck)
60. select Medius the Pure (M5)
61. select Skull Archfiend of Chaos (M1)

End board:  LP 8000 | Hand 4 | Deck 31 | Extra 9 | GY 5 | Banished 8   Monsters: M2: Artmage Non-Finito Lv7 2400/1500 ATK || M3: Artmage Diactorus Lv8 2800/2500 DEF || M4: Nerva the Power Patron of Creation Lv10 3300/3300 ATK || M5: S:P Little Knight L2←→ 1600  || EMZ-R: Medicurius the Power Patron of Illusions L3↙↓↘ 3000    Spell/Trap: S1: Mind Shuffle || S2: Artmage Impasto -Recapture- (Set)   GY: Junora the Power Patron of Tuning, Purification Power Patron, Theorealize Past Lull, Skull Archfiend of Chaos, Medius the Pure   Banished: Medius the Pure (face-down), Ars Magna - "Citrinitas" (face-down), Griffoh (face-down), Fiendsmith's Tract (face-down), Pendulum Treasure (face-down), Lacrima the Crimso

## Order 4: best 14.05 [margin 7.44: ss_panama 10.2, elfnote 5.17, despia 4.5, angelechy 10.05] (, worst 14.05) — from opening lanes
Others: opening lanes → new ending 14.05 · opening lanes → new early order 13.9 · v52-bcmed 13.75 · v52-bcmed 13.75 · tries Special Summon (procedure) Dark Magician of Destruction 13.75 · tries Activate Theorealize Liberation 13.75 · opening lanes → new early order 13.45 · opening lanes → new ending 12.29 · bc1 11.04 · bc1 8

1. Activate Black Chaos (hand): Special Summon ("Black Chaos")
2. Selected Mind Shuffle (Deck)
3. Normal Summon Medius the Pure (hand)
4. Yes
5. Activate Mind Shuffle (S1): Add 1 appropriate monster to your hand
6. Selected Skull Archfiend of Chaos (Deck)
7. Selected Skull Archfiend of Chaos (hand)
8. Selected Nervedo the Shadebeast Power Patron (Deck)
9. Special Summon it
10. Yes
11. Selected Light and Darkness Ritual (Deck)
12. Selected Magician of Dark Chaos - Black Chaos (Deck)
13. Activate Nervedo the Shadebeast Power Patron (M3): Special Summon 1 "Nerva the Power Patron of Creation" from your Extra Deck
14. Selected Nerva the Power Patron of Creation (Extra Deck)
15. Yes
16. Selected Junoldo the Shadespirit Power Patron (Deck)
17. Activate Junoldo the Shadespirit Power Patron (M3): Special Summon 1 "Junora the Power Patron of Tuning" from your Extra Deck
18. Selected Junora the Power Patron of Tuning (Extra Deck)
19. Yes
20. Selected Nervedo the Shadebeast Power Patron (Extra Deck)
21. Link Summon Purification Power Patron (Extra Deck)
22. select Medius the Pure (M4)
23. select Junora the Power Patron of Tuning (M1)
24. Yes
25. Selected Theorealize Medius (Deck)
26. Activate Theorealize Medius (hand): If a "Power Patron" card is on the field: You can Special Summon this card from your hand, then you can add 1 "Theorealize" Spell/Trap from your Deck to your hand
27. Yes
28. Selected Theorealize Past Lull (Deck)
29. Special Summon (procedure) Artmage Non-Finito (Extra Deck)
30. Selected Theorealize Past Lull (hand)
31. Selected Nervedo the Shadebeast Power Patron (hand)
32. Yes
33. Selected Artmage Impasto -Recapture- (Deck)
34. Activate Theorealize Past Lull (GY): Special Summon 1 Fusion, Synchro, or Xyz Monster from your GY
35. Selected Junora the Power Patron of Tuning (GY)
36. Activate Medius the Pure (GY): Shuffle 1 monster from your hand or face-up field into the Deck, and if you do, Special Summon this card
37. Selected Junora the Power Patron of Tuning (M2)
38. Activate Purification Power Patron (EMZ-L): Link Summon including this card as material
39. Selected Medicurius the Power Patron of Illusions (Extra Deck)
40. select Medius the Pure (M2)
41. Finish selection
42. Yes
43. Special Summon 1 "Diactorus" monster
44. Selected Artmage Diactorus (Extra Deck)
45. Activate Light and Darkness Ritual (GY): Add both this card and 1 card that mentions "Light and Darkness Ritual" from your GY to your hand
46. Selected Skull Archfiend of Chaos (GY)
47. Activate Light and Darkness Ritual (hand): Ritual Summon 1 "Magician of Dark Chaos - Black Chaos" or "Black Luster Soldier - Soldier of Light and Darkness" from your hand
48. Selected Magician of Dark Chaos - Black Chaos (hand)
49. Selected Black Chaos (GY) value 8
50. Yes
51. Selected Light and Darkness Ritual (GY)

End board:  LP 8000 | Hand 5 | Deck 29 | Extra 11 | GY 2 | Banished 10   Monsters: M1: Magician of Dark Chaos - Black Chaos Lv8 2800/2600 ATK || M3: Artmage Non-Finito Lv7 2400/1500 ATK || M4: Artmage Diactorus Lv8 2800/2500 ATK || M5: Nerva the Power Patron of Creation Lv10 3300/3300 ATK || EMZ-R: Medicurius the Power Patron of Illusions L3↙↓↘ 3000    Spell/Trap: S1: Mind Shuffle || S2: Artmage Impasto -Recapture- (Set)   GY: Nervedo the Shadebeast Power Patron, Purification Power Patron   Banished: Dark Magical Circle (face-down), Artmage Vandalism -Assault- (face-down), Ars Magna of Infinity and Finity (face-down), Medius the Pure (face-down), Fiendsmith Engraver (face-down), Theorealize Medius (fac

