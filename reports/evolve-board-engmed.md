# Evolved lines — Fiendsmith Engraver, Medius the Pure, Ash Blossom & Joyous Spring, Droll & Lock Bird, Ghost Ogre & Snow Rabbit (findlist-1100)
2026-11-25T18:53:14.680Z

8 deck orders (different face-down banishes / draws), 3 opponent hands x o_ss_panama + o_elfnote + o_despia + o_angelechy per line, 5 min searches, 4 mutation rounds.
Fitness = end-board interruptions (the lab scorer, src/disrupt.mjs: wipe 2, negate 1-1.5, banish/protection less; hand traps kept count 1 each). The winner of each order is also played into the opponent decks: margin after their turn shown beside it.

**Margin after their turn (winners): average 4.41** (worst -16.7)

**Best line per deck order: average 12.71** (worst order 11.7). Winner came from: search → new early order → new ending 1, e3 → new ending → new early order 1, e3 → new ending 3, v52-engmed 2, tries Activate Fiendsmith's Desirae → new ending 1

| seed line | works as written | its score when it works | seed start + search finish (all orders) |
|---|---|---|---|
| e3 | 2/8 | 7.93 | 11.02 |
| e3n | 8/8 | 3.55 | 9.64 |
| v52-engmed | 8/8 | 3.4 | 10.7 |

## Weak points found automatically
Cards whose face-down banish (by your own costs) hurt the best line most (average best line without vs with that card banished):

| card | orders where it was banished | drop |
|---|---|---|
| Light and Darkness Ritual | 5/8 | 0.47 |
| Medius the Pure | 5/8 | 0.39 |
| Artmage Impasto -Recapture- | 4/8 | 0.37 |
| Mind Shuffle | 6/8 | 0.32 |
| Theorealize Medius | 5/8 | 0.18 |
| Prohibited Power Patron Portal - Terminus | 5/8 | 0.18 |
| Magician of Dark Chaos - Black Chaos | 5/8 | 0.18 |
| Small World | 4/8 | 0.13 |
| Artmage Vandalism -Assault- | 6/8 | 0.06 |
| Fiendsmith's Tract | 6/8 | 0.06 |

Where the hand-designed lines broke (next step that no longer worked):
- e3: Junoldo (2x)
- e3: Impasto (2x)
- e3: Past Lull (2x)

Effects the search had not used, tried on purpose (best result so far):
- Activate Fiendsmith's Desirae: 12.8
- Activate Mind Shuffle: 11.55
- Activate Black Chaos: 11.55
- Activate Mind Shuffle: 11.3
- Normal Summon Theorealize Medius: 11.2
- Activate Junoldo the Shadespirit Power Patron: 11.15
- Activate Theorealize Liberation: 10.5
- Normal Summon Nervedo the Shadebeast Power Patron: 10.4

## Order 1: best 12.55 [margin 6.8: ss_panama 2.82, elfnote 9.7, despia 5.74, angelechy 9.55] (, worst 12.55) — from search → new early order → new ending
Others: search → new early order 12.25 · search 12.1 · search → new ending 12.1 · tries Normal Summon Fiendsmith Engraver 10.4 · tries Normal Summon Nervedo the Shadebeast Power Patron 10.4 · opening lanes 10.4 · e3 9.05 · e3n 8.94 · v52-engmed 8.3 · search → new early order → new ending → new early order 7.91 · e3n 3.55 · v52-engmed 3.4

1. Normal Summon Medius the Pure (hand)
2. Yes
3. Selected Nervedo the Shadebeast Power Patron (Deck)
4. Special Summon it
5. Activate Nervedo the Shadebeast Power Patron (M5): Special Summon 1 "Nerva the Power Patron of Creation" from your Extra Deck
6. Selected Nerva the Power Patron of Creation (Extra Deck)
7. Yes
8. Selected Artmage Graflare (Deck)
9. Activate Fiendsmith Engraver (hand): Add 1 "Fiendsmith" Spell/Trap from your Deck to your hand
10. Selected Fiendsmith's Tract (Deck)
11. Set Spell/Trap Fiendsmith's Tract
12. Activate Fiendsmith's Tract (S1): Add 1 LIGHT Fiend monster from your Deck to your hand
13. Selected Lacrima the Crimson Tears (Deck)
14. Selected Lacrima the Crimson Tears (hand)
15. Activate Fiendsmith Engraver (GY): Special Summon this card
16. Selected Lacrima the Crimson Tears (GY)
17. Link Summon Fiendsmith's Requiem (Extra Deck)
18. select Fiendsmith Engraver (M5)
19. Activate Fiendsmith's Requiem (EMZ-R): Special Summon 1 "Fiendsmith" monster
20. Selected Lacrima the Crimson Tears (Deck)
21. No
22. Link Summon Fiendsmith's Sequence (Extra Deck)
23. select Nerva the Power Patron of Creation (M3)
24. select Lacrima the Crimson Tears (M5)
25. Activate Fiendsmith's Sequence (EMZ-L): Fusion Summon 1 Fiend Fusion Monster
26. Selected Fiendsmith's Desirae (Extra Deck)
27. select Fiendsmith's Requiem (GY)
28. select Lacrima the Crimson Tears (GY)
29. select Fiendsmith Engraver (GY)
30. Link Summon Purification Power Patron (Extra Deck)
31. select Artmage Graflare (M1)
32. select Medius the Pure (M4)
33. Yes
34. Selected Theorealize Medius (Deck)
35. Activate Medius the Pure (GY): Shuffle 1 monster from your hand or face-up field into the Deck, and if you do, Special Summon this card
36. Selected Ghost Ogre & Snow Rabbit (hand)
37. Activate Purification Power Patron (M1): Link Summon including this card as material
38. Selected Medicurius the Power Patron of Illusions (Extra Deck)
39. select Fiendsmith's Sequence (EMZ-L)
40. Finish selection
41. Activate Theorealize Medius (hand): If a "Power Patron" card is on the field: You can Special Summon this card from your hand, then you can add 1 "Theorealize" Spell/Trap from your Deck to your hand
42. Yes
43. Selected Theorealize Liberation (Deck)
44. Activate Theorealize Liberation (hand): Add to your hand, or Special Summon, 1 monster from your Deck with 300 ATK/200 DEF
45. Selected Griffoh (Deck)
46. Add the card(s) to your hand
47. Activate Griffoh (hand): Activate 1 of these effects
48. Set 1 card that mentions "Light and Darkness Ritual"
49. Selected Mind Shuffle (Deck)
50. Activate Mind Shuffle (S1): activate this card
51. No
52. Activate Fiendsmith's Sequence (GY): Equip this card to 1 non-Link LIGHT Fiend you control
53. Selected Fiendsmith's Desirae (M2)
54. Activate Mind Shuffle (S1): Add 1 appropriate monster to your hand
55. Activate Fiendsmith's Desirae (M2): Negate the effects of face-up cards on the field
56. Selected Medicurius the Power Patron of Illusions (EMZ-L)
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
68. Selected Theorealize Liberation (GY)
69. Activate Skull Archfiend of Chaos (GY): Special Summon this card
70. select Purification Power Patron (GY)
71. select Light and Darkness Ritual (GY)
72. select Griffoh (GY)
73. Default order
74. Link Summon S:P Little Knight (Extra Deck)
75. select Medius the Pure (M3)
76. select Skull Archfiend of Chaos (M1)
77. Yes
78. Special Summon 1 "Diactorus" monster
79. Selected Artmage Diactorus (Extra Deck)
80. Activate Artmage Diactorus (M1): Change the battle position of 1 monster on the field
81. Selected Fiendsmith's Desirae (M2)
82. Special Summon (procedure) Artmage Non-Finito (Extra Deck)
83. Selected Theorealize Liberation (hand)
84. Selected Artmage Diactorus (M1)
85. Yes
86. Selected Artmage Impasto -Recapture- (Deck)

End board:  LP 8000 | Hand 2 | Deck 34 | Extra 9 | GY 6 | Banished 5   Monsters: M1: Artmage Non-Finito Lv7 2400/1500 ATK || M2: Fiendsmith's Desirae Lv9 2800/2400 DEF || M3: S:P Little Knight L2←→ 1600  || M5: Magician of Dark Chaos - Black Chaos Lv8 2800/2600 ATK || EMZ-L: Medicurius the Power Patron of Illusions L3↙↓↘ 3000  [NEGATED]   Spell/Trap: S1: Mind Shuffle || S2: Fiendsmith's Sequence || S3: Artmage Impasto -Recapture- (Set)   GY: Fiendsmith's Tract, Nerva the Power Patron of Creation, Artmage Graflare, Skull Archfiend of Chaos, Theorealize Liberation, Artmage Diactorus   Banished: Ash Blossom & Joyous Spring (face-down), Ars Magna - "Citrinitas" (face-down), Ars Magna of Infinity and Finity

## Order 2: best 11.7 [margin 3.55: ss_panama 2.65, elfnote -0.57, despia 0.92, angelechy 8.65] (, worst 11.7) — from e3 → new ending → new early order
Others: e3 → new ending 11.18 · e3 10.67 · e3 → new ending → new early order → new early order 10.45 · search 9.95 · e3n 9.4 · v52-engmed 8.2 · e3 → new ending → new early order → new ending 8.2 · tries Activate Small World 8 · tries Special Summon (procedure) Vidolium the Unstable Power Patron of Unity 8 · opening lanes 8 · e3n 3.55 · v52-engmed 3.4

1. Activate Fiendsmith Engraver (hand): Add 1 "Fiendsmith" Spell/Trap from your Deck to your hand
2. Selected Fiendsmith's Tract (Deck)
3. Activate Fiendsmith's Tract (hand): Add 1 LIGHT Fiend monster from your Deck to your hand
4. Selected Lacrima the Crimson Tears (Deck)
5. Selected Lacrima the Crimson Tears (hand)
6. Activate Fiendsmith Engraver (GY): Special Summon this card
7. Selected Lacrima the Crimson Tears (GY)
8. Link Summon Fiendsmith's Requiem (Extra Deck)
9. select Fiendsmith Engraver (M1)
10. Activate Fiendsmith's Requiem (EMZ-L): Special Summon 1 "Fiendsmith" monster
11. Selected Lacrima the Crimson Tears (Deck)
12. Yes
13. Selected Fiendsmith Engraver (Deck)
14. Normal Summon Medius the Pure (hand)
15. Yes
16. Selected Nervedo the Shadebeast Power Patron (Deck)
17. Special Summon it
18. Link Summon Fiendsmith's Sequence (Extra Deck)
19. select Medius the Pure (M3)
20. select Lacrima the Crimson Tears (M1)
21. Activate Nervedo the Shadebeast Power Patron (M2): Special Summon 1 "Nerva the Power Patron of Creation" from your Extra Deck
22. Selected Nerva the Power Patron of Creation (Extra Deck)
23. Yes
24. Selected Artmage Finmel (Deck)
25. Activate Fiendsmith's Sequence (EMZ-L): Fusion Summon 1 Fiend Fusion Monster
26. Selected Fiendsmith's Desirae (Extra Deck)
27. select Fiendsmith Engraver (GY)
28. select Lacrima the Crimson Tears (GY)
29. select Fiendsmith's Requiem (GY)
30. Link Summon Purification Power Patron (Extra Deck)
31. select Nerva the Power Patron of Creation (M4)
32. select Fiendsmith's Desirae (M1)
33. No
34. Yes
35. Selected Theorealize Medius (Deck)
36. Activate Theorealize Medius (hand): If a "Power Patron" card is on the field: You can Special Summon this card from your hand, then you can add 1 "Theorealize" Spell/Trap from your Deck to your hand
37. Yes
38. Selected Theorealize Past Lull (Deck)
39. Activate Purification Power Patron (M3): Link Summon including this card as material
40. Selected S:P Little Knight (Extra Deck)
41. select Fiendsmith's Sequence (EMZ-L)
42. Yes
43. Selected Nerva the Power Patron of Creation (GY)
44. Yes
45. Special Summon 1 "Diactorus" monster
46. Selected Artmage Diactorus (Extra Deck)
47. Special Summon (procedure) Artmage Non-Finito (Extra Deck)
48. Selected Theorealize Past Lull (hand)
49. Selected Artmage Finmel (M2)
50. Yes
51. Selected Artmage Impasto -Recapture- (Deck)
52. Activate Artmage Diactorus (M4): Change the battle position of 1 monster on the field
53. Selected Artmage Diactorus (M4)
54. Activate Medius the Pure (GY): Shuffle 1 monster from your hand or face-up field into the Deck, and if you do, Special Summon this card
55. Selected Ghost Ogre & Snow Rabbit (hand)
56. Link Summon Medicurius the Power Patron of Illusions (Extra Deck)
57. select Medius the Pure (M1)
58. select S:P Little Knight (EMZ-L)
59. Finish selection
60. Activate Theorealize Past Lull (GY): Special Summon 1 Fusion, Synchro, or Xyz Monster from your GY
61. Selected Fiendsmith's Desirae (GY)
62. Activate Fiendsmith's Sequence (GY): Equip this card to 1 non-Link LIGHT Fiend you control
63. Selected Fiendsmith's Desirae (M3)
64. Activate Fiendsmith's Desirae (M3): Negate the effects of face-up cards on the field
65. Selected Medicurius the Power Patron of Illusions (EMZ-R)

End board:  LP 8000 | Hand 2 | Deck 36 | Extra 8 | GY 5 | Banished 7   Monsters: M3: Fiendsmith's Desirae Lv9 2800/2400 ATK || M4: Artmage Diactorus Lv8 2800/2500 DEF || M5: Artmage Non-Finito Lv7 2400/1500 ATK || EMZ-R: Medicurius the Power Patron of Illusions L3↙↓↘ 3000  [NEGATED]   Spell/Trap: S1: Artmage Impasto -Recapture- (Set) || S2: Fiendsmith's Sequence   GY: Fiendsmith's Tract, Fiendsmith Engraver, Purification Power Patron, Artmage Finmel, S:P Little Knight   Banished: Theorealize Medius (face-down), Vidolium the Unstable Power Patron of Unity (face-down), Artmage Finmel (face-down), Nerva the Power Patron of Creation, Theorealize Medius, Medius the Pure, Theorealize Past Lull   Hand: Ash Bl

## Order 3: best 13.1 [margin 1.7: ss_panama 7.12, elfnote -8.08, despia 2.02, angelechy 10.1] (, worst 13.1) — from e3 → new ending
Others: e3 12.65 · opening lanes 12.55 · search 11.2 · tries Activate Junoldo the Shadespirit Power Patron 11.15 · e3 → new ending 10.7 · e3 → new early order 10.5 · e3n 8.94 · v52-engmed 8.2 · tries Activate Vidolium the Unstable Power Patron of Unity 7.2 · e3 → new ending → new early order 6.06 · e3n 3.55 · v52-engmed 3.4

1. Activate Fiendsmith Engraver (hand): Add 1 "Fiendsmith" Spell/Trap from your Deck to your hand
2. Selected Fiendsmith's Tract (Deck)
3. Activate Fiendsmith's Tract (hand): Add 1 LIGHT Fiend monster from your Deck to your hand
4. Selected Lacrima the Crimson Tears (Deck)
5. Selected Lacrima the Crimson Tears (hand)
6. Activate Fiendsmith Engraver (GY): Special Summon this card
7. Selected Lacrima the Crimson Tears (GY)
8. Link Summon Fiendsmith's Requiem (Extra Deck)
9. select Fiendsmith Engraver (M1)
10. Activate Fiendsmith's Requiem (EMZ-L): Special Summon 1 "Fiendsmith" monster
11. Selected Lacrima the Crimson Tears (Deck)
12. Yes
13. Selected Fiendsmith Engraver (Deck)
14. Normal Summon Medius the Pure (hand)
15. Yes
16. Selected Nervedo the Shadebeast Power Patron (Deck)
17. Special Summon it
18. Activate Nervedo the Shadebeast Power Patron (M2): Special Summon 1 "Nerva the Power Patron of Creation" from your Extra Deck
19. Selected Nerva the Power Patron of Creation (Extra Deck)
20. Yes
21. Selected Junoldo the Shadespirit Power Patron (Deck)
22. Activate Junoldo the Shadespirit Power Patron (M2): Special Summon 1 "Junora the Power Patron of Tuning" from your Extra Deck
23. Selected Junora the Power Patron of Tuning (Extra Deck)
24. Yes
25. Selected Nervedo the Shadebeast Power Patron (Extra Deck)
26. Link Summon Purification Power Patron (Extra Deck)
27. select Lacrima the Crimson Tears (M1)
28. select Junora the Power Patron of Tuning (M2)
29. Yes
30. Selected Theorealize Medius (Deck)
31. Activate Theorealize Medius (hand): If a "Power Patron" card is on the field: You can Special Summon this card from your hand, then you can add 1 "Theorealize" Spell/Trap from your Deck to your hand
32. Yes
33. Selected Theorealize Liberation (Deck)
34. Activate Theorealize Liberation (hand): Add to your hand, or Special Summon, 1 monster from your Deck with 300 ATK/200 DEF
35. Activate Purification Power Patron (EMZ-L): Link Summon including this card as material
36. Selected Medicurius the Power Patron of Illusions (Extra Deck)
37. select Medius the Pure (M3)
38. Finish selection
39. Selected Griffoh (Deck)
40. Add the card(s) to your hand
41. Activate Medius the Pure (GY): Shuffle 1 monster from your hand or face-up field into the Deck, and if you do, Special Summon this card
42. Selected Ghost Ogre & Snow Rabbit (hand)
43. Activate Griffoh (hand): Activate 1 of these effects
44. Set 1 card that mentions "Light and Darkness Ritual"
45. Selected Mind Shuffle (Deck)
46. Activate Mind Shuffle (S1): activate this card
47. No
48. Activate Mind Shuffle (S1): Add 1 appropriate monster to your hand
49. Selected Skull Archfiend of Chaos (Deck)
50. Selected Skull Archfiend of Chaos (hand)
51. Yes
52. Selected Light and Darkness Ritual (Deck)
53. Selected Magician of Dark Chaos - Black Chaos (Deck)
54. Activate Light and Darkness Ritual (GY): Add both this card and 1 card that mentions "Light and Darkness Ritual" from your GY to your hand
55. Selected Griffoh (GY)
56. Activate Light and Darkness Ritual (hand): Ritual Summon 1 "Magician of Dark Chaos - Black Chaos" or "Black Luster Soldier - Soldier of Light and Darkness" from your hand
57. Selected Magician of Dark Chaos - Black Chaos (hand)
58. Selected Griffoh (hand) value 8 or 1
59. Yes
60. Selected Theorealize Liberation (GY)
61. Activate Skull Archfiend of Chaos (GY): Special Summon this card
62. select Junora the Power Patron of Tuning (GY)
63. select Light and Darkness Ritual (GY)
64. select Griffoh (GY)
65. Default order
66. Link Summon S:P Little Knight (Extra Deck)
67. select Skull Archfiend of Chaos (M4)
68. select Medius the Pure (M2)
69. Yes
70. Special Summon 1 "Diactorus" monster
71. Selected Artmage Diactorus (Extra Deck)
72. Special Summon (procedure) Artmage Non-Finito (Extra Deck)
73. Selected Theorealize Liberation (hand)
74. Selected Nervedo the Shadebeast Power Patron (hand)
75. Yes
76. Selected Artmage Impasto -Recapture- (Deck)

End board:  LP 8000 | Hand 2 | Deck 28 | Extra 9 | GY 9 | Banished 8   Monsters: M1: Artmage Diactorus Lv8 2800/2500 ATK || M2: Artmage Non-Finito Lv7 2400/1500 ATK || M3: Magician of Dark Chaos - Black Chaos Lv8 2800/2600 ATK || M4: S:P Little Knight L2←→ 1600  || M5: Nerva the Power Patron of Creation Lv10 3300/3300 ATK || EMZ-R: Medicurius the Power Patron of Illusions L3↙↓↘ 3000    Spell/Trap: S1: Mind Shuffle || S2: Artmage Impasto -Recapture- (Set)   GY: Fiendsmith's Tract, Fiendsmith Engraver, Fiendsmith's Requiem, Fiendsmith Engraver, Lacrima the Crimson Tears, Purification Power Patron, Skull Archfiend of Chaos, Theorealize Liberation, Nervedo the Shadebeast Power Patron   Banished: Black Lust

## Order 4: best 12.95 [margin 6.26: ss_panama 5.72, elfnote 4.66, despia 4.35, angelechy 8.95] (, worst 12.95) — from v52-engmed (seed followed 25/25 steps)
Others: v52-engmed → new early order 12.95 · v52-engmed → new ending 12.2 · search 11.95 · v52-engmed → new early order 11.8 · tries Normal Summon Theorealize Medius 11.2 · opening lanes 11.2 · e3 10.67 · v52-engmed → new ending 10.45 · e3n 10.3 · tries Normal Summon Lacrima the Crimson Tears 10.15 · e3n 3.55 · v52-engmed 3.4

1. Activate Fiendsmith Engraver (hand): Add 1 "Fiendsmith" Spell/Trap from your Deck to your hand
2. Selected Fiendsmith's Tract (Deck)
3. Activate Fiendsmith's Tract (hand): Add 1 LIGHT Fiend monster from your Deck to your hand
4. Selected Lacrima the Crimson Tears (Deck)
5. Selected Lacrima the Crimson Tears (hand)
6. Activate Fiendsmith Engraver (GY): Special Summon this card
7. Selected Lacrima the Crimson Tears (GY)
8. Link Summon Fiendsmith's Requiem (Extra Deck)
9. select Fiendsmith Engraver (M1)
10. Activate Fiendsmith's Requiem (EMZ-L): Special Summon 1 "Fiendsmith" monster
11. Selected Lacrima the Crimson Tears (Deck)
12. Yes
13. Selected Fiendsmith Engraver (Deck)
14. Normal Summon Medius the Pure (hand)
15. Yes
16. Selected Nervedo the Shadebeast Power Patron (Deck)
17. Special Summon it
18. Link Summon Fiendsmith's Sequence (Extra Deck)
19. select Medius the Pure (M2)
20. select Lacrima the Crimson Tears (M1)
21. Activate Fiendsmith's Sequence (EMZ-L): Fusion Summon 1 Fiend Fusion Monster
22. Selected Fiendsmith's Desirae (Extra Deck)
23. select Lacrima the Crimson Tears (GY)
24. select Fiendsmith Engraver (GY)
25. select Fiendsmith's Requiem (GY)
26. Activate Nervedo the Shadebeast Power Patron (M3): Special Summon 1 "Nerva the Power Patron of Creation" from your Extra Deck
27. Selected Nerva the Power Patron of Creation (Extra Deck)
28. Yes
29. Selected Junoldo the Shadespirit Power Patron (Deck)
30. Activate Junoldo the Shadespirit Power Patron (M3): Special Summon 1 "Junora the Power Patron of Tuning" from your Extra Deck
31. Selected Junora the Power Patron of Tuning (Extra Deck)
32. Yes
33. Selected Nervedo the Shadebeast Power Patron (Extra Deck)
34. Link Summon Purification Power Patron (Extra Deck)
35. select Junora the Power Patron of Tuning (M3)
36. select Fiendsmith's Desirae (M1)
37. No
38. Yes
39. Selected Theorealize Medius (Deck)
40. Activate Theorealize Medius (hand): If a "Power Patron" card is on the field: You can Special Summon this card from your hand, then you can add 1 "Theorealize" Spell/Trap from your Deck to your hand
41. Yes
42. Selected Theorealize Past Lull (Deck)
43. Activate Purification Power Patron (M1): Link Summon including this card as material
44. Selected S:P Little Knight (Extra Deck)
45. select Fiendsmith's Sequence (EMZ-L)
46. Yes
47. Selected Purification Power Patron (GY)
48. Yes
49. Special Summon 1 "Diactorus" monster
50. Selected Artmage Diactorus (Extra Deck)
51. Special Summon (procedure) Artmage Non-Finito (Extra Deck)
52. Selected Theorealize Past Lull (hand)
53. Selected Nervedo the Shadebeast Power Patron (hand)
54. Yes
55. Selected Artmage Impasto -Recapture- (Deck)
56. Activate Artmage Diactorus (M1): Change the battle position of 1 monster on the field
57. Selected Nerva the Power Patron of Creation (M2)
58. Link Summon Medicurius the Power Patron of Illusions (Extra Deck)
59. select S:P Little Knight (EMZ-R)
60. select Artmage Non-Finito (M4)
61. Finish selection
62. Activate Theorealize Past Lull (GY): Special Summon 1 Fusion, Synchro, or Xyz Monster from your GY
63. Selected Fiendsmith's Desirae (GY)
64. Activate Fiendsmith's Sequence (GY): Equip this card to 1 non-Link LIGHT Fiend you control
65. Selected Fiendsmith's Desirae (M3)

End board:  LP 8000 | Hand 3 | Deck 32 | Extra 7 | GY 7 | Banished 9   Monsters: M1: Artmage Diactorus Lv8 2800/2500 ATK || M2: Nerva the Power Patron of Creation Lv10 3300/3300 DEF || M3: Fiendsmith's Desirae Lv9 2800/2400 ATK || EMZ-L: Medicurius the Power Patron of Illusions L3↙↓↘ 3000    Spell/Trap: S1: Artmage Impasto -Recapture- (Set) || S2: Fiendsmith's Sequence   GY: Fiendsmith's Tract, Fiendsmith Engraver, Medius the Pure, Junora the Power Patron of Tuning, Nervedo the Shadebeast Power Patron, Artmage Non-Finito, S:P Little Knight   Banished: Ash Blossom & Joyous Spring (face-down), Ars Magna of Infinity and Finity (face-down), Plundered Power Patron Plane - Vidolia (face-down), Pendulum Treas

## Order 5: best 12.95 [margin 3.35: ss_panama 3.38, elfnote -0.3, despia -1, angelechy 8.9] (, worst 12.95) — from tries Activate Fiendsmith's Desirae → new ending
Others: tries Activate Fiendsmith's Desirae 12.8 · e3 12.4 · v52-engmed 12.35 · search 12.1 · tries Activate Fiendsmith's Desirae → new ending → new early order 11.7 · tries Activate Fiendsmith's Desirae → new ending → new ending 11.2 · tries Activate Fiendsmith's Desirae → new ending → new early order 11.15 · tries Activate Theorealize Liberation 10.5 · opening lanes 9.95 · e3n 8.94 · e3 7.93 · e3n 3.55 · v52-engmed 3.4

1. Activate Fiendsmith Engraver (hand): Add 1 "Fiendsmith" Spell/Trap from your Deck to your hand
2. Selected Fiendsmith's Tract (Deck)
3. Set Spell/Trap Fiendsmith's Tract
4. Activate Fiendsmith's Tract (S1): Add 1 LIGHT Fiend monster from your Deck to your hand
5. Selected Lacrima the Crimson Tears (Deck)
6. Selected Lacrima the Crimson Tears (hand)
7. Activate Fiendsmith Engraver (GY): Special Summon this card
8. Selected Lacrima the Crimson Tears (GY)
9. Link Summon Fiendsmith's Requiem (Extra Deck)
10. select Fiendsmith Engraver (M1)
11. Activate Fiendsmith's Requiem (EMZ-L): Special Summon 1 "Fiendsmith" monster
12. Selected Lacrima the Crimson Tears (Deck)
13. Yes
14. Selected Fiendsmith's Tract (Deck)
15. Normal Summon Medius the Pure (hand)
16. Yes
17. Selected Nervedo the Shadebeast Power Patron (Deck)
18. Special Summon it
19. Link Summon Fiendsmith's Sequence (Extra Deck)
20. select Medius the Pure (M1)
21. select Lacrima the Crimson Tears (M4)
22. Activate Fiendsmith's Sequence (EMZ-R): Fusion Summon 1 Fiend Fusion Monster
23. Selected Fiendsmith's Desirae (Extra Deck)
24. select Fiendsmith Engraver (GY)
25. select Lacrima the Crimson Tears (GY)
26. select Fiendsmith's Requiem (GY)
27. Activate Nervedo the Shadebeast Power Patron (M2): Special Summon 1 "Nerva the Power Patron of Creation" from your Extra Deck
28. Selected Nerva the Power Patron of Creation (Extra Deck)
29. Yes
30. Selected Junoldo the Shadespirit Power Patron (Deck)
31. Activate Junoldo the Shadespirit Power Patron (M2): Special Summon 1 "Junora the Power Patron of Tuning" from your Extra Deck
32. Selected Junora the Power Patron of Tuning (Extra Deck)
33. Yes
34. Selected Nervedo the Shadebeast Power Patron (Extra Deck)
35. Link Summon Purification Power Patron (Extra Deck)
36. select Fiendsmith's Desirae (M5)
37. select Junora the Power Patron of Tuning (M3)
38. Yes
39. Selected Theorealize Medius (Deck)
40. Activate Theorealize Medius (hand): If a "Power Patron" card is on the field: You can Special Summon this card from your hand, then you can add 1 "Theorealize" Spell/Trap from your Deck to your hand
41. Yes
42. Selected Theorealize Past Lull (Deck)
43. Activate Purification Power Patron (M3): Link Summon including this card as material
44. Selected S:P Little Knight (Extra Deck)
45. select Fiendsmith's Sequence (EMZ-R)
46. No
47. Special Summon (procedure) Artmage Non-Finito (Extra Deck)
48. Selected Theorealize Past Lull (hand)
49. Selected Nervedo the Shadebeast Power Patron (hand)
50. Yes
51. Selected Artmage Impasto -Recapture- (Deck)
52. Activate Medius the Pure (GY): Shuffle 1 monster from your hand or face-up field into the Deck, and if you do, Special Summon this card
53. Selected Artmage Non-Finito (M4)
54. Link Summon Medicurius the Power Patron of Illusions (Extra Deck)
55. select S:P Little Knight (EMZ-L)
56. select Medius the Pure (M4)
57. Finish selection
58. Yes
59. Special Summon 1 "Diactorus" monster
60. Selected Artmage Diactorus (Extra Deck)
61. Activate Theorealize Past Lull (GY): Special Summon 1 Fusion, Synchro, or Xyz Monster from your GY
62. Selected Fiendsmith's Desirae (GY)
63. Activate Fiendsmith's Sequence (GY): Equip this card to 1 non-Link LIGHT Fiend you control
64. Selected Fiendsmith's Desirae (M3)
65. Activate Fiendsmith's Desirae (M3): Negate the effects of face-up cards on the field
66. Selected Fiendsmith's Desirae (M3)

End board:  LP 8000 | Hand 3 | Deck 32 | Extra 8 | GY 6 | Banished 9   Monsters: M1: Nerva the Power Patron of Creation Lv10 3300/3300 ATK || M2: Artmage Diactorus Lv8 2800/2500 ATK || M3: Fiendsmith's Desirae Lv9 2800/2400 ATK [NEGATED] || EMZ-L: Medicurius the Power Patron of Illusions L3↙↓↘ 3000    Spell/Trap: S1: Artmage Impasto -Recapture- (Set) || S2: Fiendsmith's Sequence   GY: Fiendsmith's Tract, Fiendsmith's Tract, Junora the Power Patron of Tuning, Purification Power Patron, Nervedo the Shadebeast Power Patron, S:P Little Knight   Banished: Small World (face-down), Pendulum Treasure (face-down), Artmage Vandalism -Assault- (face-down), Apprentice Illusion Magician (face-down), Black Luster So

## Order 6: best 12.95 [margin 5.77: ss_panama 3.46, elfnote null, despia 2.24, angelechy 8.9] (, worst 12.95) — from v52-engmed (seed followed 25/25 steps)
Others: v52-engmed → new early order 12.95 · v52-engmed → new ending 12.8 · v52-engmed → new early order 12.8 · search 12.3 · v52-engmed → new ending 11.8 · opening lanes 11.55 · tries Activate Mind Shuffle 11.55 · tries Activate Black Chaos 11.55 · e3n 10.3 · e3 8.35 · e3n 3.55 · v52-engmed 3.4

1. Activate Fiendsmith Engraver (hand): Add 1 "Fiendsmith" Spell/Trap from your Deck to your hand
2. Selected Fiendsmith's Tract (Deck)
3. Activate Fiendsmith's Tract (hand): Add 1 LIGHT Fiend monster from your Deck to your hand
4. Selected Lacrima the Crimson Tears (Deck)
5. Selected Lacrima the Crimson Tears (hand)
6. Activate Fiendsmith Engraver (GY): Special Summon this card
7. Selected Lacrima the Crimson Tears (GY)
8. Link Summon Fiendsmith's Requiem (Extra Deck)
9. select Fiendsmith Engraver (M1)
10. Activate Fiendsmith's Requiem (EMZ-L): Special Summon 1 "Fiendsmith" monster
11. Selected Lacrima the Crimson Tears (Deck)
12. Yes
13. Selected Fiendsmith Engraver (Deck)
14. Normal Summon Medius the Pure (hand)
15. Yes
16. Selected Nervedo the Shadebeast Power Patron (Deck)
17. Special Summon it
18. Link Summon Fiendsmith's Sequence (Extra Deck)
19. select Medius the Pure (M2)
20. select Lacrima the Crimson Tears (M1)
21. Activate Fiendsmith's Sequence (EMZ-L): Fusion Summon 1 Fiend Fusion Monster
22. Selected Fiendsmith's Desirae (Extra Deck)
23. select Lacrima the Crimson Tears (GY)
24. select Fiendsmith Engraver (GY)
25. select Fiendsmith's Requiem (GY)
26. Activate Nervedo the Shadebeast Power Patron (M3): Special Summon 1 "Nerva the Power Patron of Creation" from your Extra Deck
27. Selected Nerva the Power Patron of Creation (Extra Deck)
28. Yes
29. Selected Junoldo the Shadespirit Power Patron (Deck)
30. Activate Junoldo the Shadespirit Power Patron (M2): Special Summon 1 "Junora the Power Patron of Tuning" from your Extra Deck
31. Selected Junora the Power Patron of Tuning (Extra Deck)
32. Yes
33. Selected Nervedo the Shadebeast Power Patron (Extra Deck)
34. Link Summon Purification Power Patron (Extra Deck)
35. select Junora the Power Patron of Tuning (M4)
36. select Fiendsmith's Desirae (M1)
37. No
38. Yes
39. Selected Theorealize Medius (Deck)
40. Activate Theorealize Medius (hand): If a "Power Patron" card is on the field: You can Special Summon this card from your hand, then you can add 1 "Theorealize" Spell/Trap from your Deck to your hand
41. Yes
42. Selected Theorealize Past Lull (Deck)
43. Activate Purification Power Patron (M1): Link Summon including this card as material
44. Selected S:P Little Knight (Extra Deck)
45. select Fiendsmith's Sequence (EMZ-L)
46. Yes
47. Selected Fiendsmith Engraver (GY)
48. Yes
49. Special Summon 1 "Diactorus" monster
50. Selected Artmage Diactorus (Extra Deck)
51. Activate Artmage Diactorus (M4): Change the battle position of 1 monster on the field
52. Selected Artmage Diactorus (M4)
53. Special Summon (procedure) Artmage Non-Finito (Extra Deck)
54. Selected Theorealize Past Lull (hand)
55. Selected Nervedo the Shadebeast Power Patron (hand)
56. Yes
57. Selected Artmage Impasto -Recapture- (Deck)
58. Link Summon Medicurius the Power Patron of Illusions (Extra Deck)
59. select S:P Little Knight (EMZ-R)
60. select Artmage Non-Finito (M1)
61. Finish selection
62. Activate Theorealize Past Lull (GY): Special Summon 1 Fusion, Synchro, or Xyz Monster from your GY
63. Selected Fiendsmith's Desirae (GY)
64. Activate Fiendsmith's Sequence (GY): Equip this card to 1 non-Link LIGHT Fiend you control
65. Selected Fiendsmith's Desirae (M5)
66. Activate Fiendsmith's Desirae (M5): Negate the effects of face-up cards on the field
67. Selected Nerva the Power Patron of Creation (M3)

End board:  LP 8000 | Hand 3 | Deck 32 | Extra 7 | GY 7 | Banished 9   Monsters: M3: Nerva the Power Patron of Creation Lv10 3300/3300 ATK [NEGATED] || M4: Artmage Diactorus Lv8 2800/2500 DEF || M5: Fiendsmith's Desirae Lv9 2800/2400 ATK || EMZ-R: Medicurius the Power Patron of Illusions L3↙↓↘ 3000    Spell/Trap: S1: Artmage Impasto -Recapture- (Set) || S2: Fiendsmith's Sequence   GY: Fiendsmith's Tract, Medius the Pure, Junora the Power Patron of Tuning, Purification Power Patron, Nervedo the Shadebeast Power Patron, Artmage Non-Finito, S:P Little Knight   Banished: Ars Magna - "Citrinitas" (face-down), Artmage Graflare (face-down), Light and Darkness Ritual (face-down), Medius the Pure (face-down), T

## Order 7: best 12.5 [margin 3.38: ss_panama 4.08, elfnote 4.91, despia 0.45, angelechy null] (, worst 12.5) — from e3 → new ending
Others: e3 11.93 · tries Activate Mind Shuffle 11.3 · search 11.15 · v52-engmed 10.45 · e3 → new ending → new early order 10.45 · e3n 10.3 · opening lanes 10.3 · e3 → new ending → new early order 9.05 · tries Activate Prohibited Power Patron Portal - Terminus 8.94 · e3n 3.55 · v52-engmed 3.4

1. Activate Fiendsmith Engraver (hand): Add 1 "Fiendsmith" Spell/Trap from your Deck to your hand
2. Selected Fiendsmith's Tract (Deck)
3. Activate Fiendsmith's Tract (hand): Add 1 LIGHT Fiend monster from your Deck to your hand
4. Selected Lacrima the Crimson Tears (Deck)
5. Selected Lacrima the Crimson Tears (hand)
6. Activate Fiendsmith Engraver (GY): Special Summon this card
7. Selected Lacrima the Crimson Tears (GY)
8. Link Summon Fiendsmith's Requiem (Extra Deck)
9. select Fiendsmith Engraver (M1)
10. Activate Fiendsmith's Requiem (EMZ-L): Special Summon 1 "Fiendsmith" monster
11. Selected Lacrima the Crimson Tears (Deck)
12. Yes
13. Selected Fiendsmith Engraver (Deck)
14. Normal Summon Medius the Pure (hand)
15. Yes
16. Selected Nervedo the Shadebeast Power Patron (Deck)
17. Special Summon it
18. Activate Nervedo the Shadebeast Power Patron (M2): Special Summon 1 "Nerva the Power Patron of Creation" from your Extra Deck
19. Selected Nerva the Power Patron of Creation (Extra Deck)
20. Yes
21. Selected Junoldo the Shadespirit Power Patron (Deck)
22. Activate Junoldo the Shadespirit Power Patron (M2): Special Summon 1 "Junora the Power Patron of Tuning" from your Extra Deck
23. Selected Junora the Power Patron of Tuning (Extra Deck)
24. Yes
25. Selected Nervedo the Shadebeast Power Patron (Extra Deck)
26. Link Summon Fiendsmith's Sequence (Extra Deck)
27. select Nerva the Power Patron of Creation (M5)
28. select Lacrima the Crimson Tears (M1)
29. Activate Fiendsmith's Sequence (EMZ-R): Fusion Summon 1 Fiend Fusion Monster
30. Selected Fiendsmith's Desirae (Extra Deck)
31. select Fiendsmith Engraver (GY)
32. select Lacrima the Crimson Tears (GY)
33. select Fiendsmith's Requiem (GY)
34. Activate Fiendsmith's Sequence (EMZ-R): Equip this card to 1 non-Link LIGHT Fiend you control
35. Selected Fiendsmith's Desirae (M1)
36. Activate Fiendsmith's Desirae (M1): Negate the effects of face-up cards on the field
37. Selected Junora the Power Patron of Tuning (M2)
38. Link Summon Purification Power Patron (Extra Deck)
39. select Medius the Pure (M3)
40. select Junora the Power Patron of Tuning (M2)
41. Yes
42. Selected Theorealize Medius (Deck)
43. Activate Medius the Pure (GY): Shuffle 1 monster from your hand or face-up field into the Deck, and if you do, Special Summon this card
44. Selected Nervedo the Shadebeast Power Patron (hand)
45. Activate Theorealize Medius (hand): If a "Power Patron" card is on the field: You can Special Summon this card from your hand, then you can add 1 "Theorealize" Spell/Trap from your Deck to your hand
46. Yes
47. Selected Theorealize Liberation (Deck)
48. Activate Theorealize Liberation (hand): Add to your hand, or Special Summon, 1 monster from your Deck with 300 ATK/200 DEF
49. Activate Purification Power Patron (EMZ-R): Link Summon including this card as material
50. Selected Medicurius the Power Patron of Illusions (Extra Deck)
51. select Medius the Pure (M5)
52. Finish selection
53. Selected Griffoh (Deck)
54. Add the card(s) to your hand
55. Yes
56. Special Summon 1 "Diactorus" monster
57. Selected Artmage Diactorus (Extra Deck)
58. Activate Artmage Diactorus (M2): Change the battle position of 1 monster on the field
59. Selected Artmage Diactorus (M2)
60. Activate Griffoh (hand): Activate 1 of these effects
61. Set 1 card that mentions "Light and Darkness Ritual"
62. Selected Mind Shuffle (Deck)
63. Activate Mind Shuffle (S2): activate this card
64. Yes
65. Selected Skull Archfiend of Chaos (Deck)
66. Selected Skull Archfiend of Chaos (hand)
67. Yes
68. Selected Light and Darkness Ritual (Deck)
69. Selected Magician of Dark Chaos - Black Chaos (Deck)
70. Activate Light and Darkness Ritual (GY): Add both this card and 1 card that mentions "Light and Darkness Ritual" from your GY to your hand
71. Selected Skull Archfiend of Chaos (GY)
72. Activate Light and Darkness Ritual (hand): Ritual Summon 1 "Magician of Dark Chaos - Black Chaos" or "Black Luster Soldier - Soldier of Light and Darkness" from your hand
73. Selected Magician of Dark Chaos - Black Chaos (hand)
74. Selected Griffoh (GY) value 8 or 1
75. Yes
76. Selected Theorealize Liberation (GY)

End board:  LP 8000 | Hand 5 | Deck 29 | Extra 9 | GY 6 | Banished 9   Monsters: M1: Fiendsmith's Desirae Lv9 2800/2400 ATK || M2: Artmage Diactorus Lv8 2800/2500 DEF || M3: Magician of Dark Chaos - Black Chaos Lv8 2800/2600 ATK || EMZ-L: Medicurius the Power Patron of Illusions L3↙↓↘ 3000    Spell/Trap: S1: Fiendsmith's Sequence || S2: Mind Shuffle   GY: Fiendsmith's Tract, Fiendsmith Engraver, Nerva the Power Patron of Creation, Junora the Power Patron of Tuning, Purification Power Patron, Light and Darkness Ritual   Banished: Artmage Impasto -Recapture- (face-down), Prohibited Power Patron Portal - Terminus (face-down), Medius the Pure (face-down), Ars Magna - "Citrinitas" (face-down), Theorealize P

## Order 8: best 12.95 [margin 4.47: ss_panama 2.9, elfnote 0.2, despia -1.25, angelechy 8.85] (, worst 12.95) — from e3 → new ending
Others: e3 12.4 · e3 → new ending 12.4 · v52-engmed 12.2 · search 10.45 · tries Activate Light and Darkness Ritual 10.2 · tries Activate Light and Darkness Ritual 10.2 · opening lanes 10.2 · e3n 10.01 · e3 → new ending → new early order 8.2 · e3 7.93 · e3n 3.55 · v52-engmed 3.4

1. Activate Fiendsmith Engraver (hand): Add 1 "Fiendsmith" Spell/Trap from your Deck to your hand
2. Selected Fiendsmith's Tract (Deck)
3. Activate Fiendsmith's Tract (hand): Add 1 LIGHT Fiend monster from your Deck to your hand
4. Selected Lacrima the Crimson Tears (Deck)
5. Selected Lacrima the Crimson Tears (hand)
6. Activate Fiendsmith Engraver (GY): Special Summon this card
7. Selected Lacrima the Crimson Tears (GY)
8. Link Summon Fiendsmith's Requiem (Extra Deck)
9. select Fiendsmith Engraver (M1)
10. Activate Fiendsmith's Requiem (EMZ-L): Special Summon 1 "Fiendsmith" monster
11. Selected Lacrima the Crimson Tears (Deck)
12. Yes
13. Selected Fiendsmith Engraver (Deck)
14. Normal Summon Medius the Pure (hand)
15. Yes
16. Selected Nervedo the Shadebeast Power Patron (Deck)
17. Special Summon it
18. Activate Nervedo the Shadebeast Power Patron (M2): Special Summon 1 "Nerva the Power Patron of Creation" from your Extra Deck
19. Selected Nerva the Power Patron of Creation (Extra Deck)
20. Yes
21. Selected Junoldo the Shadespirit Power Patron (Deck)
22. Activate Junoldo the Shadespirit Power Patron (M2): Special Summon 1 "Junora the Power Patron of Tuning" from your Extra Deck
23. Selected Junora the Power Patron of Tuning (Extra Deck)
24. Yes
25. Selected Nervedo the Shadebeast Power Patron (Extra Deck)
26. Activate Fiendsmith's Requiem (GY): Equip this card to 1 non-Link LIGHT Fiend you control
27. Selected Lacrima the Crimson Tears (M1)
28. Link Summon Fiendsmith's Sequence (Extra Deck)
29. select Junora the Power Patron of Tuning (M2)
30. select Lacrima the Crimson Tears (M1)
31. Activate Fiendsmith's Sequence (EMZ-L): Fusion Summon 1 Fiend Fusion Monster
32. Selected Fiendsmith's Desirae (Extra Deck)
33. select Fiendsmith's Requiem (GY)
34. select Lacrima the Crimson Tears (GY)
35. select Fiendsmith Engraver (GY)
36. Link Summon Purification Power Patron (Extra Deck)
37. select Fiendsmith's Desirae (M4)
38. select Medius the Pure (M3)
39. No
40. Yes
41. Selected Theorealize Medius (Deck)
42. Activate Theorealize Medius (hand): If a "Power Patron" card is on the field: You can Special Summon this card from your hand, then you can add 1 "Theorealize" Spell/Trap from your Deck to your hand
43. Yes
44. Selected Theorealize Past Lull (Deck)
45. Activate Purification Power Patron (M3): Link Summon including this card as material
46. Selected S:P Little Knight (Extra Deck)
47. select Fiendsmith's Sequence (EMZ-L)
48. Yes
49. Selected Medius the Pure (GY)
50. Yes
51. Special Summon 1 "Diactorus" monster
52. Selected Artmage Diactorus (Extra Deck)
53. Special Summon (procedure) Artmage Non-Finito (Extra Deck)
54. Selected Theorealize Past Lull (hand)
55. Selected Nervedo the Shadebeast Power Patron (hand)
56. Yes
57. Selected Artmage Impasto -Recapture- (Deck)
58. Activate Artmage Diactorus (M4): Change the battle position of 1 monster on the field
59. Selected Nerva the Power Patron of Creation (M5)
60. Link Summon Medicurius the Power Patron of Illusions (Extra Deck)
61. select Artmage Non-Finito (M1)
62. select S:P Little Knight (EMZ-L)
63. Finish selection
64. Activate Theorealize Past Lull (GY): Special Summon 1 Fusion, Synchro, or Xyz Monster from your GY
65. Selected Fiendsmith's Desirae (GY)
66. Activate Fiendsmith's Sequence (GY): Equip this card to 1 non-Link LIGHT Fiend you control
67. Selected Fiendsmith's Desirae (M3)
68. Activate Fiendsmith's Desirae (M3): Negate the effects of face-up cards on the field
69. Selected Fiendsmith's Desirae (M3)

End board:  LP 8000 | Hand 3 | Deck 32 | Extra 7 | GY 7 | Banished 9   Monsters: M3: Fiendsmith's Desirae Lv9 2800/2400 ATK [NEGATED] || M4: Artmage Diactorus Lv8 2800/2500 ATK || M5: Nerva the Power Patron of Creation Lv10 3300/3300 DEF || EMZ-R: Medicurius the Power Patron of Illusions L3↙↓↘ 3000    Spell/Trap: S1: Artmage Impasto -Recapture- (Set) || S2: Fiendsmith's Sequence   GY: Fiendsmith's Tract, Fiendsmith Engraver, Junora the Power Patron of Tuning, Purification Power Patron, Nervedo the Shadebeast Power Patron, Artmage Non-Finito, S:P Little Knight   Banished: Ars Magna of Infinity and Finity (face-down), Griffoh (face-down), Ars Magna - "Citrinitas" (face-down), Ash Blossom & Joyous Spring 

