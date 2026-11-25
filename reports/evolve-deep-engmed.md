# Evolved lines — Fiendsmith Engraver, Medius the Pure, Ash Blossom & Joyous Spring, Droll & Lock Bird, Ghost Ogre & Snow Rabbit (findlist-1100)
2026-11-25T07:19:36.435Z

8 deck orders (different face-down banishes / draws), 3 opponent hands x o_ss_panama + o_elfnote + o_despia + o_angelechy per line, 5 min searches, 4 mutation rounds.
Fitness = average margin after their turn (what you keep minus what they build; −10 more if they OTK). Higher is better.

**Best line per deck order: average 6.23** (worst order 3.74). Winner came from: tries Normal Summon Lacrima the Crimson Tears → new ending 1, e3 → new ending 1, tries Activate Mind Shuffle → new ending 1, e3 → new ending → new ending 1, tries Normal Summon Nervedo the Shadebeast Power Patron → new early order 1, tries Activate Light and Darkness Ritual 1, opening lanes 1, e3 → new early order 1

| seed line | works as written | its score when it works | seed start + search finish (all orders) |
|---|---|---|---|
| e3 | 2/8 | 2.3 | 3.84 |
| e3n | 8/8 | -1.76 | 2.1 |

## Weak points found automatically
Cards whose face-down banish (by your own costs) hurt the best line most (average best line without vs with that card banished):

| card | orders where it was banished | drop |
|---|---|---|
| Light and Darkness Ritual | 4/8 | 1.94 |
| Dark Magical Circle | 3/8 | 1.46 |
| Artmage Finmel | 5/8 | 1.05 |
| Prohibited Power Patron Portal - Terminus | 4/8 | 0.92 |
| Theorealize Liberation | 3/8 | 0.74 |
| Lacrima the Crimson Tears | 3/8 | 0.74 |
| Vidolium the Unstable Power Patron of Unity | 5/8 | 0.66 |
| Magician of Dark Chaos - Black Chaos | 4/8 | 0.46 |
| Small World | 4/8 | 0.41 |
| Junoldo the Shadespirit Power Patron | 2/8 | 0.38 |

Where the hand-designed lines broke (next step that no longer worked):
- e3: Junoldo (2x)
- e3: Impasto (2x)
- e3: Past Lull (2x)

List changes proposed for the list test (data/proposals-findlist-1100.json):
- +1 Light and Darkness Ritual, −1 Plundered Power Patron Plane - Vidolia — Light and Darkness Ritual: best line 1.94 worse when a cost banished it (4 of 8 orders) — Fiendsmith Engraver
- +1 Dark Magical Circle, −1 Artmage Vandalism -Assault- — Dark Magical Circle: best line 1.46 worse when a cost banished it (3 of 8 orders) — Fiendsmith Engraver
- +1 Artmage Finmel, −1 Small World — Artmage Finmel: best line 1.05 worse when a cost banished it (5 of 8 orders) — Fiendsmith Engraver
- +1 Prohibited Power Patron Portal - Terminus, −1 Plundered Power Patron Plane - Vidolia — Prohibited Power Patron Portal - Terminus: best line 0.92 worse when a cost banished it (4 of 8 orders) — Fiendsmith Engraver
- +1 Light and Darkness Ritual — Light and Darkness Ritual: best line 1.94 worse when a cost banished it (4 of 8 orders) — Fiendsmith Engraver (add only: deck grows, up to 60)
- +1 Dark Magical Circle — Dark Magical Circle: best line 1.46 worse when a cost banished it (3 of 8 orders) — Fiendsmith Engraver (add only: deck grows, up to 60)
- +1 Artmage Finmel — Artmage Finmel: best line 1.05 worse when a cost banished it (5 of 8 orders) — Fiendsmith Engraver (add only: deck grows, up to 60)
- +1 Prohibited Power Patron Portal - Terminus — Prohibited Power Patron Portal - Terminus: best line 0.92 worse when a cost banished it (4 of 8 orders) — Fiendsmith Engraver (add only: deck grows, up to 60)

Effects the search had not used, tried on purpose (best result so far):
- Activate Mind Shuffle: 6.85
- Normal Summon Nervedo the Shadebeast Power Patron: 5.93
- Activate Prohibited Power Patron Portal - Terminus: 5.05
- Activate Light and Darkness Ritual: 4.8
- Activate Griffoh: 4.67
- Normal Summon Lacrima the Crimson Tears: 4.55
- Activate Nervedo the Shadebeast Power Patron: 4.18
- Activate Fiendsmith's Sequence: 4.06

## Order 1: best 8.16 (ss_panama null, elfnote 4.53, despia 9.02, angelechy 8.8, worst 4.53) — from tries Normal Summon Lacrima the Crimson Tears → new ending
Others: tries Normal Summon Lacrima the Crimson Tears → new ending → new early order 6.68 · tries Normal Summon Lacrima the Crimson Tears → new ending → new early order 6.03 · tries Normal Summon Lacrima the Crimson Tears 4.55 · tries Activate Vidolium the Unstable Power Patron of Unity 3.98 · tries Normal Summon Lacrima the Crimson Tears → new ending → new ending 3.89 · e3 3.23 · e3n 2.33 · search 0.67 · opening lanes 0.12 · e3n -2.12

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
13. Activate Fiendsmith's Requiem (EMZ-L): Special Summon 1 "Fiendsmith" monster
14. Selected Fiendsmith Engraver (Deck)
15. Link Summon Fiendsmith's Sequence (Extra Deck)
16. select Fiendsmith Engraver (M3)
17. select Fiendsmith Engraver (M4)
18. Activate Fiendsmith's Sequence (EMZ-R): Fusion Summon 1 Fiend Fusion Monster
19. Selected Fiendsmith's Desirae (Extra Deck)
20. select Fiendsmith Engraver (GY)
21. select Fiendsmith Engraver (GY)
22. select Fiendsmith's Requiem (GY)
23. Activate Fiendsmith's Sequence (EMZ-R): Equip this card to 1 non-Link LIGHT Fiend you control
24. Selected Fiendsmith's Desirae (M1)
25. Activate Medius the Pure (GY): Shuffle 1 monster from your hand or face-up field into the Deck, and if you do, Special Summon this card
26. Activate Fiendsmith's Desirae (M1): Negate the effects of face-up cards on the field
27. Selected Fiendsmith's Sequence (S1)
28. Selected Droll & Lock Bird (hand)
29. Yes
30. Selected Nervedo the Shadebeast Power Patron (Deck)
31. Special Summon it
32. Activate Nervedo the Shadebeast Power Patron (M2): Special Summon 1 "Nerva the Power Patron of Creation" from your Extra Deck
33. Selected Nerva the Power Patron of Creation (Extra Deck)
34. Yes
35. Selected Junoldo the Shadespirit Power Patron (Deck)
36. Activate Junoldo the Shadespirit Power Patron (M2): Special Summon 1 "Junora the Power Patron of Tuning" from your Extra Deck
37. Selected Junora the Power Patron of Tuning (Extra Deck)
38. Yes
39. Selected Nervedo the Shadebeast Power Patron (Extra Deck)
40. Link Summon Purification Power Patron (Extra Deck)
41. select Junora the Power Patron of Tuning (M5)
42. select Nerva the Power Patron of Creation (EMZ-L)
43. Yes
44. Selected Theorealize Medius (Deck)
45. Activate Theorealize Medius (hand): If a "Power Patron" card is on the field: You can Special Summon this card from your hand, then you can add 1 "Theorealize" Spell/Trap from your Deck to your hand
46. Yes
47. Selected Theorealize Past Lull (Deck)
48. Special Summon (procedure) Artmage Non-Finito (Extra Deck)
49. Selected Theorealize Past Lull (hand)
50. Selected Nervedo the Shadebeast Power Patron (hand)
51. Yes
52. Activate Purification Power Patron (EMZ-L): Link Summon including this card as material
53. Selected Medicurius the Power Patron of Illusions (Extra Deck)
54. select Medius the Pure (M4)
55. Finish selection
56. Selected Artmage Impasto -Recapture- (Deck)
57. Yes
58. Special Summon 1 "Diactorus" monster
59. Selected Artmage Diactorus (Extra Deck)
60. Activate Theorealize Past Lull (GY): Special Summon 1 Fusion, Synchro, or Xyz Monster from your GY
61. Selected Junora the Power Patron of Tuning (GY)
62. Link Summon S:P Little Knight (Extra Deck)
63. select Junora the Power Patron of Tuning (M2)
64. select Artmage Non-Finito (M5)
65. No

End board:  LP 8000 | Hand 2 | Deck 33 | Extra 7 | GY 7 | Banished 9   Monsters: M1: Fiendsmith's Desirae Lv9 2800/2400 ATK || M2: S:P Little Knight L2←→ 1600  || M3: Artmage Diactorus Lv8 2800/2500 ATK || EMZ-L: Medicurius the Power Patron of Illusions L3↙↓↘ 3000    Spell/Trap: S1: Fiendsmith's Sequence [NEGATED] || S2: Artmage Impasto -Recapture- (Set)   GY: Fiendsmith's Tract, Lacrima the Crimson Tears, Nerva the Power Patron of Creation, Nervedo the Shadebeast Power Patron, Purification Power Patron, Junora the Power Patron of Tuning, Artmage Non-Finito   Banished: Fiendsmith's Tract (face-down), Medius the Pure (face-down), Plundered Power Patron Plane - Vidolia (face-down), Theorealize Liberation

## Order 2: best 4.79 (ss_panama 5.62, elfnote 6.46, despia 0.56, angelechy 7.08, worst -3.2) — from e3 → new ending
Others: e3 → new ending → new early order 4.57 · e3 4.45 · e3 → new ending → new early order 4.21 · e3 → new ending → new ending 4.03 · opening lanes 3.4 · e3n 3.2 · tries Normal Summon Fiendsmith Engraver 2.24 · tries Activate Fiendsmith's Desirae 1.84 · search 0.36 · e3n -2.04

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
30. Selected Theorealize Past Lull (Deck)
31. Special Summon (procedure) Artmage Non-Finito (Extra Deck)
32. Selected Theorealize Past Lull (hand)
33. Selected Nervedo the Shadebeast Power Patron (hand)
34. Yes
35. Activate Purification Power Patron (EMZ-L): Link Summon including this card as material
36. Selected Medicurius the Power Patron of Illusions (Extra Deck)
37. select Medius the Pure (M3)
38. Finish selection
39. Selected Ars Magna - "Citrinitas" (Deck)
40. Activate Theorealize Past Lull (GY): Special Summon 1 Fusion, Synchro, or Xyz Monster from your GY
41. Selected Junora the Power Patron of Tuning (GY)
42. Activate Ars Magna - "Citrinitas" (S1): activate this card
43. Activate Ars Magna - "Citrinitas" (S1): Add 1 "Medius" or "Ars Magna" monster from your Deck to your hand
44. Selected Theorealize Medius (Deck)
45. Activate Theorealize Medius (hand): If a "Power Patron" card is on the field: You can Special Summon this card from your hand, then you can add 1 "Theorealize" Spell/Trap from your Deck to your hand
46. Yes
47. Selected Theorealize Liberation (Deck)
48. Activate Medius the Pure (GY): Shuffle 1 monster from your hand or face-up field into the Deck, and if you do, Special Summon this card
49. Selected Junora the Power Patron of Tuning (M4)
50. Activate Theorealize Liberation (hand): Add to your hand, or Special Summon, 1 monster from your Deck with 300 ATK/200 DEF
51. Selected Griffoh (Deck)
52. Add the card(s) to your hand
53. Activate Griffoh (hand): Activate 1 of these effects
54. Set 1 card that mentions "Light and Darkness Ritual"
55. Selected Mind Shuffle (Deck)
56. Activate Mind Shuffle (S2): activate this card
57. No
58. Activate Mind Shuffle (S2): Add 1 appropriate monster to your hand
59. Selected Skull Archfiend of Chaos (Deck)
60. Selected Skull Archfiend of Chaos (hand)
61. No
62. Activate Skull Archfiend of Chaos (GY): Special Summon this card
63. select Theorealize Past Lull (banishment)
64. select Griffoh (GY)
65. select Theorealize Liberation (GY)
66. Default order
67. Link Summon S:P Little Knight (Extra Deck)
68. select Medius the Pure (M3)
69. select Skull Archfiend of Chaos (M4)
70. Activate Skull Archfiend of Chaos (GY): Add 1 Ritual Monster mentioned on that card from your Deck to your hand
71. Selected Light and Darkness Ritual (Deck)
72. Activate Theorealize Medius (M2): Activate 1 of these effects
73. Special Summon 1 "Diactorus" monster
74. Selected Artmage Diactorus (Extra Deck)
75. Selected Magician of Dark Chaos - Black Chaos (Deck)
76. Activate Artmage Diactorus (M4): Change the battle position of 1 monster on the field
77. Selected Artmage Diactorus (M4)
78. Activate Light and Darkness Ritual (GY): Add both this card and 1 card that mentions "Light and Darkness Ritual" from your GY to your hand
79. Selected Skull Archfiend of Chaos (GY)

End board:  LP 8000 | Hand 6 | Deck 27 | Extra 9 | GY 7 | Banished 8   Monsters: M1: Artmage Non-Finito Lv7 2400/1500 ATK || M3: S:P Little Knight L2←→ 1600  || M4: Artmage Diactorus Lv8 2800/2500 DEF || M5: Nerva the Power Patron of Creation Lv10 3300/3300 ATK || EMZ-R: Medicurius the Power Patron of Illusions L3↙↓↘ 3000    Spell/Trap: S1: Ars Magna - "Citrinitas" || S2: Mind Shuffle   GY: Fiendsmith's Tract, Fiendsmith Engraver, Fiendsmith's Requiem, Fiendsmith Engraver, Lacrima the Crimson Tears, Nervedo the Shadebeast Power Patron, Purification Power Patron   Banished: Theorealize Medius (face-down), Vidolium the Unstable Power Patron of Unity (face-down), Artmage Finmel (face-down), Artmage Impast

## Order 3: best 7.13 (ss_panama 5.64, elfnote 6.91, despia 0.93, angelechy 10.85, worst 0.93) — from tries Activate Mind Shuffle → new ending
Others: tries Activate Mind Shuffle → new ending → new early order 6.99 · tries Activate Mind Shuffle 6.85 · tries Activate Mind Shuffle → new ending → new early order 5.53 · tries Activate Mind Shuffle → new ending → new ending 5.27 · tries Activate Prohibited Power Patron Portal - Terminus 5.05 · e3 4.47 · opening lanes 2.11 · e3n 1.96 · search 1.41 · e3n -1.72

1. Normal Summon Medius the Pure (hand)
2. Yes
3. Selected Nervedo the Shadebeast Power Patron (Deck)
4. Special Summon it
5. Activate Nervedo the Shadebeast Power Patron (M4): Special Summon 1 "Nerva the Power Patron of Creation" from your Extra Deck
6. Selected Nerva the Power Patron of Creation (Extra Deck)
7. Yes
8. Selected Junoldo the Shadespirit Power Patron (Deck)
9. Activate Fiendsmith Engraver (hand): Add 1 "Fiendsmith" Spell/Trap from your Deck to your hand
10. Selected Fiendsmith's Tract (Deck)
11. Activate Junoldo the Shadespirit Power Patron (M5): Special Summon 1 "Junora the Power Patron of Tuning" from your Extra Deck
12. Selected Junora the Power Patron of Tuning (Extra Deck)
13. Yes
14. Selected Nervedo the Shadebeast Power Patron (Extra Deck)
15. Special Summon (procedure) Artmage Non-Finito (Extra Deck)
16. Selected Fiendsmith's Tract (hand)
17. Selected Nervedo the Shadebeast Power Patron (hand)
18. Yes
19. Selected Artmage Impasto -Recapture- (Deck)
20. Link Summon Purification Power Patron (Extra Deck)
21. select Medius the Pure (M3)
22. select Junora the Power Patron of Tuning (M1)
23. Yes
24. Selected Theorealize Medius (Deck)
25. Activate Medius the Pure (GY): Shuffle 1 monster from your hand or face-up field into the Deck, and if you do, Special Summon this card
26. Selected Ghost Ogre & Snow Rabbit (hand)
27. Activate Theorealize Medius (hand): If a "Power Patron" card is on the field: You can Special Summon this card from your hand, then you can add 1 "Theorealize" Spell/Trap from your Deck to your hand
28. Yes
29. Selected Theorealize Liberation (Deck)
30. Activate Theorealize Liberation (hand): Add to your hand, or Special Summon, 1 monster from your Deck with 300 ATK/200 DEF
31. Selected Griffoh (Deck)
32. Add the card(s) to your hand
33. Activate Theorealize Liberation (GY): Treat 1 monster you control as a Tuner this turn
34. Selected Artmage Non-Finito (M5)
35. Activate Purification Power Patron (EMZ-R): Link Summon including this card as material
36. Selected Medicurius the Power Patron of Illusions (Extra Deck)
37. select Medius the Pure (M1)
38. Finish selection
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
53. Selected Griffoh (GY)
54. Activate Light and Darkness Ritual (hand): Ritual Summon 1 "Magician of Dark Chaos - Black Chaos" or "Black Luster Soldier - Soldier of Light and Darkness" from your hand
55. Selected Magician of Dark Chaos - Black Chaos (hand)
56. Selected Griffoh (hand) value 8 or 1
57. Yes
58. Selected Fiendsmith's Tract (GY)
59. Activate Fiendsmith's Tract (hand): Add 1 LIGHT Fiend monster from your Deck to your hand
60. Selected Lacrima the Crimson Tears (Deck)
61. Selected Lacrima the Crimson Tears (hand)
62. Activate Fiendsmith Engraver (GY): Special Summon this card
63. Selected Lacrima the Crimson Tears (GY)
64. Link Summon Fiendsmith's Requiem (Extra Deck)
65. select Fiendsmith Engraver (M2)
66. Activate Fiendsmith's Requiem (M2): Special Summon 1 "Fiendsmith" monster
67. Selected Fiendsmith Engraver (Deck)
68. Activate Fiendsmith's Requiem (GY): Equip this card to 1 non-Link LIGHT Fiend you control
69. Selected Fiendsmith Engraver (M2)
70. Special Summon (procedure) Dark Magician of Destruction (Extra Deck)
71. Selected Magician of Dark Chaos - Black Chaos (M1)
72. Yes
73. Selected Apprentice Illusion Magician (Deck)
74. Link Summon Fiendsmith's Sequence (Extra Deck)
75. select Fiendsmith Engraver (M2)
76. select Dark Magician of Destruction (M1)
77. Activate Fiendsmith's Sequence (M1): Fusion Summon 1 Fiend Fusion Monster
78. Selected Fiendsmith's Desirae (Extra Deck)
79. select Fiendsmith's Requiem (GY)
80. select Fiendsmith Engraver (GY)
81. select Fiendsmith Engraver (GY)
82. Activate Fiendsmith's Sequence (M1): Equip this card to 1 non-Link LIGHT Fiend you control
83. Selected Fiendsmith's Desirae (M2)
84. Activate Fiendsmith's Desirae (M2): Negate the effects of face-up cards on the field
85. Selected Mind Shuffle (S2)
86. Activate Skull Archfiend of Chaos (GY): Special Summon this card
87. select Junora the Power Patron of Tuning (GY)
88. select Dark Magician of Destruction (GY)
89. select Light and Darkness Ritual (GY)

End board:  LP 8000 | Hand 3 | Deck 29 | Extra 9 | GY 4 | Banished 10   Monsters: M1: Skull Archfiend of Chaos Lv6 2500/1200 ATK || M2: Fiendsmith's Desirae Lv9 2800/2400 ATK || M3: Artmage Diactorus Lv8 2800/2500 ATK || M4: Nerva the Power Patron of Creation Lv10 3300/3300 ATK || M5: Artmage Non-Finito Lv7 2400/1500 ATK || EMZ-L: Medicurius the Power Patron of Illusions L3↙↓↘ 3000    Spell/Trap: S1: Artmage Impasto -Recapture- (Set) || S2: Mind Shuffle [NEGATED] || S3: Fiendsmith's Sequence   GY: Nervedo the Shadebeast Power Patron, Purification Power Patron, Griffoh, Fiendsmith's Tract   Banished: Artmage Vandalism -Assault- (face-down), Prohibited Power Patron Portal - Terminus (face-down), Artmage 

## Order 4: best 8.77 (ss_panama 10.75, elfnote 6.29, despia 7.5, angelechy 10.6, worst 4.4) — from e3 → new ending → new ending
Others: e3 → new ending 8.49 · e3 5.35 · opening lanes 5.19 · tries Activate Fiendsmith's Sequence 4.06 · tries Activate Fiendsmith's Sequence 4.04 · e3 → new ending → new ending → new early order 2.05 · e3 → new ending → new early order 1.9 · search 1.75 · e3n 1.51 · e3n -1.44

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
22. Link Summon Fiendsmith's Sequence (Extra Deck)
23. select Nerva the Power Patron of Creation (M5)
24. select Lacrima the Crimson Tears (M1)
25. Activate Fiendsmith's Sequence (EMZ-R): Fusion Summon 1 Fiend Fusion Monster
26. Selected Fiendsmith's Desirae (Extra Deck)
27. select Fiendsmith Engraver (GY)
28. select Lacrima the Crimson Tears (GY)
29. select Fiendsmith's Requiem (GY)
30. Activate Junoldo the Shadespirit Power Patron (M2): Special Summon 1 "Junora the Power Patron of Tuning" from your Extra Deck
31. Selected Junora the Power Patron of Tuning (Extra Deck)
32. Yes
33. Selected Nervedo the Shadebeast Power Patron (Extra Deck)
34. Link Summon Purification Power Patron (Extra Deck)
35. select Medius the Pure (M3)
36. select Junora the Power Patron of Tuning (M1)
37. Yes
38. Selected Theorealize Medius (Deck)
39. Activate Theorealize Medius (hand): If a "Power Patron" card is on the field: You can Special Summon this card from your hand, then you can add 1 "Theorealize" Spell/Trap from your Deck to your hand
40. Yes
41. Selected Theorealize Liberation (Deck)
42. Activate Medius the Pure (GY): Shuffle 1 monster from your hand or face-up field into the Deck, and if you do, Special Summon this card
43. Selected Droll & Lock Bird (hand)
44. Activate Theorealize Liberation (hand): Add to your hand, or Special Summon, 1 monster from your Deck with 300 ATK/200 DEF
45. Selected Griffoh (Deck)
46. Add the card(s) to your hand
47. Activate Griffoh (hand): Activate 1 of these effects
48. Set 1 card that mentions "Light and Darkness Ritual"
49. Activate Purification Power Patron (M5): Link Summon including this card as material
50. Selected Medicurius the Power Patron of Illusions (Extra Deck)
51. select Fiendsmith's Sequence (EMZ-R)
52. Finish selection
53. Selected Mind Shuffle (Deck)
54. Activate Theorealize Liberation (GY): Treat 1 monster you control as a Tuner this turn
55. Selected Medius the Pure (M3)
56. Activate Mind Shuffle (S1): activate this card
57. Yes
58. Selected Skull Archfiend of Chaos (Deck)
59. Selected Skull Archfiend of Chaos (hand)
60. Yes
61. Selected Light and Darkness Ritual (Deck)
62. Selected Black Luster Soldier - Soldier of Light and Darkness (Deck)
63. Activate Light and Darkness Ritual (GY): Add both this card and 1 card that mentions "Light and Darkness Ritual" from your GY to your hand
64. Selected Griffoh (GY)
65. Activate Fiendsmith's Sequence (GY): Equip this card to 1 non-Link LIGHT Fiend you control
66. Selected Fiendsmith's Desirae (M4)
67. Activate Fiendsmith's Desirae (M4): Negate the effects of face-up cards on the field
68. Selected Medicurius the Power Patron of Illusions (EMZ-R)
69. Special Summon (procedure) Artmage Non-Finito (Extra Deck)
70. Selected Light and Darkness Ritual (hand)
71. Selected Nervedo the Shadebeast Power Patron (hand)
72. Yes
73. Selected Artmage Impasto -Recapture- (Deck)
74. Activate Skull Archfiend of Chaos (GY): Special Summon this card
75. select Nervedo the Shadebeast Power Patron (GY)
76. select Light and Darkness Ritual (GY)
77. select Purification Power Patron (GY)
78. Default order
79. Link Summon S:P Little Knight (Extra Deck)
80. select Medius the Pure (M3)
81. select Skull Archfiend of Chaos (M2)
82. Yes
83. Special Summon 1 "Diactorus" monster
84. Selected Artmage Diactorus (Extra Deck)

End board:  LP 8000 | Hand 4 | Deck 30 | Extra 8 | GY 5 | Banished 9   Monsters: M1: Artmage Diactorus Lv8 2800/2500 ATK || M3: S:P Little Knight L2←→ 1600  || M4: Fiendsmith's Desirae Lv9 2800/2400 ATK || M5: Artmage Non-Finito Lv7 2400/1500 ATK || EMZ-R: Medicurius the Power Patron of Illusions L3↙↓↘ 3000  [NEGATED]   Spell/Trap: S1: Mind Shuffle || S2: Fiendsmith's Sequence || S3: Artmage Impasto -Recapture- (Set)   GY: Fiendsmith's Tract, Fiendsmith Engraver, Nerva the Power Patron of Creation, Junora the Power Patron of Tuning, Skull Archfiend of Chaos   Banished: Ars Magna of Infinity and Finity (face-down), Small World (face-down), Magician of Dark Chaos - Black Chaos (face-down), Fiendsmith's T

## Order 5: best 6.1 (ss_panama 5.57, elfnote 4.4, despia 1.84, angelechy 10.05, worst 0.78) — from tries Normal Summon Nervedo the Shadebeast Power Patron → new early order
Others: tries Normal Summon Nervedo the Shadebeast Power Patron 5.93 · tries Normal Summon Nervedo the Shadebeast Power Patron → new early order → new ending 5.55 · tries Normal Summon Nervedo the Shadebeast Power Patron → new ending 5.08 · search 5.02 · opening lanes 4.94 · tries Activate Light and Darkness Ritual 4.8 · e3 4.25 · e3 1.94 · e3n 1.47 · tries Normal Summon Nervedo the Shadebeast Power Patron → new early order → new early order 0.89 · e3n -1.88

1. Normal Summon Medius the Pure (hand)
2. Yes
3. Selected Nervedo the Shadebeast Power Patron (Deck)
4. Special Summon it
5. Activate Nervedo the Shadebeast Power Patron (M3): Special Summon 1 "Nerva the Power Patron of Creation" from your Extra Deck
6. Selected Nerva the Power Patron of Creation (Extra Deck)
7. Yes
8. Selected Junoldo the Shadespirit Power Patron (Deck)
9. Activate Junoldo the Shadespirit Power Patron (M5): Special Summon 1 "Junora the Power Patron of Tuning" from your Extra Deck
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
21. select Medius the Pure (M4)
22. select Junora the Power Patron of Tuning (M1)
23. Yes
24. Selected Theorealize Medius (Deck)
25. Activate Theorealize Medius (hand): If a "Power Patron" card is on the field: You can Special Summon this card from your hand, then you can add 1 "Theorealize" Spell/Trap from your Deck to your hand
26. Yes
27. Selected Theorealize Liberation (Deck)
28. Activate Medius the Pure (GY): Shuffle 1 monster from your hand or face-up field into the Deck, and if you do, Special Summon this card
29. Selected Artmage Non-Finito (M5)
30. Activate Purification Power Patron (EMZ-R): Link Summon including this card as material
31. Activate Theorealize Liberation (hand): Add to your hand, or Special Summon, 1 monster from your Deck with 300 ATK/200 DEF
32. Selected Griffoh (Deck)
33. Add the card(s) to your hand
34. Selected Medicurius the Power Patron of Illusions (Extra Deck)
35. select Medius the Pure (M5)
36. Finish selection
37. Yes
38. Special Summon 1 "Diactorus" monster
39. Selected Artmage Diactorus (Extra Deck)
40. Activate Griffoh (hand): Activate 1 of these effects
41. Set 1 card that mentions "Light and Darkness Ritual"
42. Selected Mind Shuffle (Deck)
43. Activate Mind Shuffle (S2): activate this card
44. Yes
45. Selected Skull Archfiend of Chaos (Deck)
46. Selected Skull Archfiend of Chaos (hand)
47. Yes
48. Selected Light and Darkness Ritual (Deck)
49. Selected Magician of Dark Chaos - Black Chaos (Deck)
50. Activate Light and Darkness Ritual (GY): Add both this card and 1 card that mentions "Light and Darkness Ritual" from your GY to your hand
51. Selected Griffoh (GY)
52. Set Spell/Trap Light and Darkness Ritual
53. Activate Light and Darkness Ritual (S3): Ritual Summon 1 "Magician of Dark Chaos - Black Chaos" or "Black Luster Soldier - Soldier of Light and Darkness" from your hand
54. Selected Magician of Dark Chaos - Black Chaos (hand)
55. Selected Griffoh (hand) value 8 or 1
56. Yes
57. Selected Fiendsmith's Tract (GY)
58. Activate Fiendsmith's Tract (hand): Add 1 LIGHT Fiend monster from your Deck to your hand
59. Selected Lacrima the Crimson Tears (Deck)
60. Selected Lacrima the Crimson Tears (hand)
61. Activate Fiendsmith Engraver (GY): Special Summon this card
62. Selected Lacrima the Crimson Tears (GY)
63. Link Summon Fiendsmith's Requiem (Extra Deck)
64. select Fiendsmith Engraver (M5)
65. Activate Fiendsmith's Requiem (M2): Special Summon 1 "Fiendsmith" monster
66. Selected Lacrima the Crimson Tears (Deck)
67. Yes
68. Selected Fiendsmith's Tract (Deck)
69. Activate Fiendsmith's Requiem (GY): Equip this card to 1 non-Link LIGHT Fiend you control
70. Selected Lacrima the Crimson Tears (M5)
71. Activate Skull Archfiend of Chaos (GY): Special Summon this card
72. select Theorealize Liberation (GY)
73. select Fiendsmith's Tract (GY)
74. select Light and Darkness Ritual (GY)
75. Default order
76. Link Summon Fiendsmith's Sequence (Extra Deck)
77. select Skull Archfiend of Chaos (M2)
78. select Lacrima the Crimson Tears (M5)
79. Activate Fiendsmith's Sequence (M2): Fusion Summon 1 Fiend Fusion Monster
80. Selected Fiendsmith's Desirae (Extra Deck)
81. select Fiendsmith's Requiem (GY)
82. select Lacrima the Crimson Tears (GY)
83. select Fiendsmith Engraver (GY)
84. Activate Fiendsmith's Sequence (M2): Equip this card to 1 non-Link LIGHT Fiend you control
85. Selected Fiendsmith's Desirae (M5)
86. Activate Fiendsmith's Desirae (M5): Negate the effects of face-up cards on the field
87. Selected Fiendsmith's Desirae (M5)
88. Special Summon (procedure) Dark Magician of Destruction (Extra Deck)
89. Selected Magician of Dark Chaos - Black Chaos (M4)
90. Yes
91. Selected Apprentice Illusion Magician (Deck)

End board:  LP 8000 | Hand 4 | Deck 29 | Extra 8 | GY 6 | Banished 9   Monsters: M1: Artmage Diactorus Lv8 2800/2500 ATK || M2: Dark Magician of Destruction Lv8 2800/2600 ATK || M3: Nerva the Power Patron of Creation Lv10 3300/3300 ATK || M5: Fiendsmith's Desirae Lv9 2800/2400 ATK [NEGATED] || EMZ-L: Medicurius the Power Patron of Illusions L3↙↓↘ 3000    Spell/Trap: S1: Artmage Impasto -Recapture- (Set) || S2: Mind Shuffle || S3: Fiendsmith's Sequence   GY: Nervedo the Shadebeast Power Patron, Junora the Power Patron of Tuning, Purification Power Patron, Griffoh, Fiendsmith's Tract, Skull Archfiend of Chaos   Banished: Ash Blossom & Joyous Spring (face-down), Artmage Vandalism -Assault- (face-down), Ar

## Order 6: best 3.74 (ss_panama 3.95, elfnote 3.95, despia 0.53, angelechy 8.03, worst -0.65) — from tries Activate Light and Darkness Ritual
Others: e3n 2.95 · e3 2.73 · search 2.47 · opening lanes 1.58 · tries Activate Pendulum Treasure 1.25 · e3n -1.36

1. Activate Fiendsmith Engraver (hand): Add 1 "Fiendsmith" Spell/Trap from your Deck to your hand
2. Selected Fiendsmith's Tract (Deck)
3. Activate Fiendsmith's Tract (hand): Add 1 LIGHT Fiend monster from your Deck to your hand
4. Selected Lacrima the Crimson Tears (Deck)
5. Selected Lacrima the Crimson Tears (hand)
6. Activate Fiendsmith Engraver (GY): Special Summon this card
7. Selected Lacrima the Crimson Tears (GY)
8. Link Summon Fiendsmith's Requiem (Extra Deck)
9. select Fiendsmith Engraver (M1)
10. Activate Fiendsmith's Requiem (EMZ-R): Special Summon 1 "Fiendsmith" monster
11. Selected Lacrima the Crimson Tears (Deck)
12. No
13. Normal Summon Medius the Pure (hand)
14. Yes
15. Selected Nervedo the Shadebeast Power Patron (Deck)
16. Special Summon it
17. Activate Nervedo the Shadebeast Power Patron (M2): Special Summon 1 "Nerva the Power Patron of Creation" from your Extra Deck
18. Selected Nerva the Power Patron of Creation (Extra Deck)
19. Yes
20. Selected Junoldo the Shadespirit Power Patron (Deck)
21. Activate Junoldo the Shadespirit Power Patron (M3): Special Summon 1 "Junora the Power Patron of Tuning" from your Extra Deck
22. Selected Junora the Power Patron of Tuning (Extra Deck)
23. Yes
24. Selected Nervedo the Shadebeast Power Patron (Extra Deck)
25. Link Summon Purification Power Patron (Extra Deck)
26. select Medius the Pure (M1)
27. select Junora the Power Patron of Tuning (EMZ-R)
28. Yes
29. Selected Theorealize Medius (Deck)
30. Activate Medius the Pure (GY): Shuffle 1 monster from your hand or face-up field into the Deck, and if you do, Special Summon this card
31. Selected Lacrima the Crimson Tears (M4)
32. Activate Theorealize Medius (hand): If a "Power Patron" card is on the field: You can Special Summon this card from your hand, then you can add 1 "Theorealize" Spell/Trap from your Deck to your hand
33. Yes
34. Selected Theorealize Past Lull (Deck)
35. Special Summon (procedure) Artmage Non-Finito (Extra Deck)
36. Selected Theorealize Past Lull (hand)
37. Selected Nervedo the Shadebeast Power Patron (hand)
38. Yes
39. Activate Purification Power Patron (EMZ-R): Link Summon including this card as material
40. Selected Medicurius the Power Patron of Illusions (Extra Deck)
41. select Medius the Pure (M5)
42. Finish selection
43. Selected Artmage Impasto -Recapture- (Deck)
44. Yes
45. Special Summon 1 "Diactorus" monster
46. Selected Artmage Diactorus (Extra Deck)
47. Activate Theorealize Past Lull (GY): Special Summon 1 Fusion, Synchro, or Xyz Monster from your GY
48. Selected Junora the Power Patron of Tuning (GY)
49. Link Summon S:P Little Knight (Extra Deck)
50. select Junora the Power Patron of Tuning (M1)
51. select Artmage Non-Finito (M4)
52. Yes
53. Selected Artmage Non-Finito (GY)

End board:  LP 8000 | Hand 3 | Deck 32 | Extra 8 | GY 6 | Banished 10   Monsters: M1: S:P Little Knight L2←→ 1600  || M2: Nerva the Power Patron of Creation Lv10 3300/3300 ATK || M3: Artmage Diactorus Lv8 2800/2500 ATK || EMZ-L: Medicurius the Power Patron of Illusions L3↙↓↘ 3000    Spell/Trap: S1: Artmage Impasto -Recapture- (Set)   GY: Fiendsmith's Tract, Fiendsmith Engraver, Fiendsmith's Requiem, Nervedo the Shadebeast Power Patron, Purification Power Patron, Junora the Power Patron of Tuning   Banished: Infinite Impermanence (face-down), Black Chaos (face-down), Skull Archfiend of Chaos (face-down), Ash Blossom & Joyous Spring (face-down), Black Luster Soldier - Soldier of Light and Darkness (face-

## Order 7: best 4.35 (ss_panama 5.75, elfnote 3.01, despia 1.32, angelechy 6.88, worst -3.05) — from opening lanes
Others: tries Activate Junoldo the Shadespirit Power Patron 2.78 · e3n 2.5 · search 2.47 · e3 1.91 · tries Activate Mind Shuffle 1.11 · e3n -1.92

1. Activate Fiendsmith Engraver (hand): Add 1 "Fiendsmith" Spell/Trap from your Deck to your hand
2. Selected Fiendsmith's Tract (Deck)
3. Normal Summon Medius the Pure (hand)
4. Yes
5. Selected Nervedo the Shadebeast Power Patron (Deck)
6. Special Summon it
7. Activate Nervedo the Shadebeast Power Patron (M5): Special Summon 1 "Nerva the Power Patron of Creation" from your Extra Deck
8. Selected Nerva the Power Patron of Creation (Extra Deck)
9. Yes
10. Selected Theorealize Medius (Deck)
11. Activate Fiendsmith's Tract (hand): Add 1 LIGHT Fiend monster from your Deck to your hand
12. Selected Lacrima the Crimson Tears (Deck)
13. Selected Lacrima the Crimson Tears (hand)
14. Activate Fiendsmith Engraver (GY): Special Summon this card
15. Selected Lacrima the Crimson Tears (GY)
16. Link Summon Fiendsmith's Requiem (Extra Deck)
17. select Fiendsmith Engraver (M3)
18. Activate Fiendsmith's Requiem (EMZ-R): Special Summon 1 "Fiendsmith" monster
19. Selected Lacrima the Crimson Tears (Deck)
20. Yes
21. Selected Fiendsmith's Tract (Deck)
22. Link Summon Fiendsmith's Sequence (Extra Deck)
23. select Medius the Pure (M4)
24. select Lacrima the Crimson Tears (M5)
25. Activate Medius the Pure (GY): Shuffle 1 monster from your hand or face-up field into the Deck, and if you do, Special Summon this card
26. Selected Ghost Ogre & Snow Rabbit (hand)
27. Activate Fiendsmith's Sequence (EMZ-R): Fusion Summon 1 Fiend Fusion Monster
28. Selected Fiendsmith's Desirae (Extra Deck)
29. select Fiendsmith Engraver (GY)
30. select Fiendsmith's Requiem (GY)
31. select Lacrima the Crimson Tears (GY)
32. Link Summon Medicurius the Power Patron of Illusions (Extra Deck)
33. select Medius the Pure (M4)
34. select Fiendsmith's Sequence (EMZ-R)
35. Finish selection
36. Yes
37. Special Summon 1 "Diactorus" monster
38. Selected Artmage Diactorus (Extra Deck)
39. Activate Fiendsmith's Sequence (GY): Equip this card to 1 non-Link LIGHT Fiend you control
40. Selected Fiendsmith's Desirae (M3)

End board:  LP 8000 | Hand 2 | Deck 39 | Extra 11 | GY 2 | Banished 5   Monsters: M1: Nerva the Power Patron of Creation Lv10 3300/3300 ATK || M2: Artmage Diactorus Lv8 2800/2500 ATK || M3: Fiendsmith's Desirae Lv9 2800/2400 ATK || EMZ-L: Medicurius the Power Patron of Illusions L3↙↓↘ 3000    Spell/Trap: S1: Fiendsmith's Sequence   GY: Fiendsmith's Tract, Fiendsmith's Tract   Banished: Griffoh (face-down), Apprentice Illusion Magician (face-down), Theorealize Past Lull (face-down), Medius the Pure, Theorealize Medius   Hand: Ash Blossom & Joyous Spring, Droll & Lock Bird   Extra Deck: 11 cards (view --ed to list)

## Order 8: best 6.81 (ss_panama null, elfnote 4.38, despia 0.55, angelechy 9.7, worst 0.55) — from e3 → new early order
Others: e3 → new early order → new ending 5.05 · e3 4.3 · e3 → new ending 3.51 · e3 → new early order → new early order 3.3 · e3 2.66 · opening lanes 1.07 · e3n 0.86 · tries Activate Theorealize Liberation 0.58 · search 0.4 · tries Activate Vidolium the Unstable Power Patron of Unity 0.25 · e3n -1.59

1. Activate Fiendsmith Engraver (hand): Add 1 "Fiendsmith" Spell/Trap from your Deck to your hand
2. Selected Fiendsmith's Tract (Deck)
3. Activate Fiendsmith's Tract (hand): Add 1 LIGHT Fiend monster from your Deck to your hand
4. Selected Lacrima the Crimson Tears (Deck)
5. Selected Lacrima the Crimson Tears (hand)
6. Activate Fiendsmith Engraver (GY): Special Summon this card
7. Selected Lacrima the Crimson Tears (GY)
8. Link Summon Fiendsmith's Requiem (Extra Deck)
9. select Fiendsmith Engraver (M1)
10. Activate Fiendsmith's Requiem (EMZ-R): Special Summon 1 "Fiendsmith" monster
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
21. Activate Fiendsmith's Sequence (EMZ-R): Fusion Summon 1 Fiend Fusion Monster
22. Selected Fiendsmith's Desirae (Extra Deck)
23. select Fiendsmith's Requiem (GY)
24. select Lacrima the Crimson Tears (GY)
25. select Fiendsmith Engraver (GY)
26. Activate Nervedo the Shadebeast Power Patron (M4): Special Summon 1 "Nerva the Power Patron of Creation" from your Extra Deck
27. Selected Nerva the Power Patron of Creation (Extra Deck)
28. Yes
29. Selected Junoldo the Shadespirit Power Patron (Deck)
30. Activate Junoldo the Shadespirit Power Patron (M4): Special Summon 1 "Junora the Power Patron of Tuning" from your Extra Deck
31. Selected Junora the Power Patron of Tuning (Extra Deck)
32. Yes
33. Selected Nervedo the Shadebeast Power Patron (Extra Deck)
34. Activate Medius the Pure (GY): Shuffle 1 monster from your hand or face-up field into the Deck, and if you do, Special Summon this card
35. Selected Droll & Lock Bird (hand)
36. Link Summon Purification Power Patron (Extra Deck)
37. select Medius the Pure (M3)
38. select Junora the Power Patron of Tuning (M4)
39. Yes
40. Selected Theorealize Medius (Deck)
41. Activate Theorealize Medius (hand): If a "Power Patron" card is on the field: You can Special Summon this card from your hand, then you can add 1 "Theorealize" Spell/Trap from your Deck to your hand
42. Yes
43. Selected Theorealize Past Lull (Deck)
44. Activate Purification Power Patron (M3): Link Summon including this card as material
45. Selected Medicurius the Power Patron of Illusions (Extra Deck)
46. select Fiendsmith's Sequence (EMZ-R)
47. Finish selection
48. Special Summon (procedure) Artmage Non-Finito (Extra Deck)
49. Selected Theorealize Past Lull (hand)
50. Selected Nervedo the Shadebeast Power Patron (hand)
51. Yes
52. Selected Artmage Impasto -Recapture- (Deck)
53. Activate Theorealize Past Lull (GY): Special Summon 1 Fusion, Synchro, or Xyz Monster from your GY
54. Selected Junora the Power Patron of Tuning (GY)
55. Activate Fiendsmith's Sequence (GY): Equip this card to 1 non-Link LIGHT Fiend you control
56. Selected Fiendsmith's Desirae (M1)
57. Activate Fiendsmith's Desirae (M1): Negate the effects of face-up cards on the field
58. Selected Fiendsmith's Sequence (S2)
59. Link Summon S:P Little Knight (Extra Deck)
60. select Junora the Power Patron of Tuning (M3)
61. select Artmage Non-Finito (M4)
62. Yes
63. Selected Junora the Power Patron of Tuning (GY)
64. Yes
65. Special Summon 1 "Diactorus" monster
66. Selected Artmage Diactorus (Extra Deck)

End board:  LP 8000 | Hand 2 | Deck 33 | Extra 7 | GY 5 | Banished 10   Monsters: M1: Fiendsmith's Desirae Lv9 2800/2400 ATK || M3: Artmage Diactorus Lv8 2800/2500 ATK || M4: S:P Little Knight L2←→ 1600  || M5: Nerva the Power Patron of Creation Lv10 3300/3300 ATK || EMZ-R: Medicurius the Power Patron of Illusions L3↙↓↘ 3000    Spell/Trap: S1: Artmage Impasto -Recapture- (Set) || S2: Fiendsmith's Sequence [NEGATED]   GY: Fiendsmith's Tract, Fiendsmith Engraver, Purification Power Patron, Nervedo the Shadebeast Power Patron, Artmage Non-Finito   Banished: Prohibited Power Patron Portal - Terminus (face-down), Ars Magna of Infinity and Finity (face-down), Apprentice Illusion Magician (face-down), Ash Blo

