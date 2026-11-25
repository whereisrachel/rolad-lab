# Evolved lines — Ars Magna - "Citrinitas", Ash Blossom & Joyous Spring, Ash Blossom & Joyous Spring, Droll & Lock Bird, Ghost Ogre & Snow Rabbit (findlist-1100)
2026-11-25T07:10:10.181Z

8 deck orders (different face-down banishes / draws), 3 opponent hands x o_ss_panama + o_elfnote + o_despia + o_angelechy per line, 5 min searches, 4 mutation rounds.
Fitness = average margin after their turn (what you keep minus what they build; −10 more if they OTK). Higher is better.

**Best line per deck order: average 4.94** (worst order 2.97). Winner came from: tries Activate Theorealize Liberation 1, cit1 1, opening lanes → new early order 2, tries Activate Prohibited Power Patron Portal - Terminus → new early order → new ending 1, search → new early order 1, opening lanes 2

| seed line | works as written | its score when it works | seed start + search finish (all orders) |
|---|---|---|---|
| cit1 | 6/8 | 1.29 | 1.41 |

## Weak points found automatically
Cards whose face-down banish (by your own costs) hurt the best line most (average best line without vs with that card banished):

| card | orders where it was banished | drop |
|---|---|---|
| Artmage Impasto -Recapture- | 2/8 | 2.37 |
| Pendulum Treasure | 4/8 | 2.36 |
| Ash Blossom & Joyous Spring | 2/8 | 1.85 |
| Fiendsmith Engraver | 2/8 | 1.6 |
| Theorealize Medius | 5/8 | 1.52 |
| Fiendsmith's Tract | 3/8 | 1.46 |
| Medius the Pure | 2/8 | 1.16 |
| Prohibited Power Patron Portal - Terminus | 2/8 | 0.92 |
| Mind Shuffle | 3/8 | 0.83 |
| Artmage Vandalism -Assault- | 2/8 | 0.76 |

Where the hand-designed lines broke (next step that no longer worked):
- cit1: Impasto (1x)
- cit1: Junoldo (1x)

List changes proposed for the list test (data/proposals-findlist-1100.json):
- +1 Artmage Impasto -Recapture-, −1 Plundered Power Patron Plane - Vidolia — Artmage Impasto -Recapture-: best line 2.37 worse when a cost banished it (2 of 8 orders) — Ars Magna - "Citrinitas"
- +1 Fiendsmith Engraver, −1 Artmage Vandalism -Assault- — Fiendsmith Engraver: best line 1.6 worse when a cost banished it (2 of 8 orders) — Ars Magna - "Citrinitas"
- +1 Theorealize Medius, −1 Small World — Theorealize Medius: best line 1.52 worse when a cost banished it (5 of 8 orders) — Ars Magna - "Citrinitas"
- +1 Fiendsmith's Tract, −1 Plundered Power Patron Plane - Vidolia — Fiendsmith's Tract: best line 1.46 worse when a cost banished it (3 of 8 orders) — Ars Magna - "Citrinitas"
- +1 Artmage Impasto -Recapture- — Artmage Impasto -Recapture-: best line 2.37 worse when a cost banished it (2 of 8 orders) — Ars Magna - "Citrinitas" (add only: deck grows, up to 60)
- +1 Fiendsmith Engraver — Fiendsmith Engraver: best line 1.6 worse when a cost banished it (2 of 8 orders) — Ars Magna - "Citrinitas" (add only: deck grows, up to 60)
- +1 Theorealize Medius — Theorealize Medius: best line 1.52 worse when a cost banished it (5 of 8 orders) — Ars Magna - "Citrinitas" (add only: deck grows, up to 60)
- +1 Fiendsmith's Tract — Fiendsmith's Tract: best line 1.46 worse when a cost banished it (3 of 8 orders) — Ars Magna - "Citrinitas" (add only: deck grows, up to 60)

Effects the search had not used, tried on purpose (best result so far):
- Activate Prohibited Power Patron Portal - Terminus: 6.64
- Activate Artmage Diactorus: 5.38
- Activate Griffoh: 4.67
- Activate Theorealize Liberation: 4.6
- Activate Artmage Vandalism -Assault-: 4.51
- Activate Nervedo the Shadebeast Power Patron: 4.18
- Activate Light and Darkness Ritual: 4.01
- Activate Artmage Vandalism -Assault-: 3.76

## Order 1: best 4.6 (ss_panama 5, elfnote 4.78, despia 3.4, angelechy 5.2, worst 0.55) — from tries Activate Theorealize Liberation
Others: tries Activate Theorealize Liberation → new ending 4.32 · search 4.06 · tries Activate Light and Darkness Ritual 4.01 · opening lanes 3.23 · tries Activate Theorealize Liberation → new early order 3.04 · cit1 2.52 · tries Activate Theorealize Liberation → new ending 1.76 · cit1 1.68 · tries Activate Theorealize Liberation → new early order -1.94

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
17. select Junora the Power Patron of Tuning (M1)
18. select Medius the Pure (M4)
19. Yes
20. Selected Theorealize Medius (Deck)
21. Activate Medius the Pure (GY): Shuffle 1 monster from your hand or face-up field into the Deck, and if you do, Special Summon this card
22. Selected Ash Blossom & Joyous Spring (hand)
23. Activate Theorealize Medius (hand): If a "Power Patron" card is on the field: You can Special Summon this card from your hand, then you can add 1 "Theorealize" Spell/Trap from your Deck to your hand
24. Activate Purification Power Patron (EMZ-R): Link Summon including this card as material
25. Selected S:P Little Knight (Extra Deck)
26. select Medius the Pure (M1)
27. Yes
28. Selected Theorealize Liberation (Deck)
29. Yes
30. Selected Purification Power Patron (GY)
31. Yes
32. Special Summon 1 "Diactorus" monster
33. Selected Artmage Diactorus (Extra Deck)
34. Special Summon (procedure) Artmage Non-Finito (Extra Deck)
35. Selected Theorealize Liberation (hand)
36. Selected Nervedo the Shadebeast Power Patron (hand)
37. Yes
38. Selected Artmage Impasto -Recapture- (Deck)
39. Activate Artmage Diactorus (M1): Change the battle position of 1 monster on the field
40. Selected Artmage Non-Finito (M4)
41. Activate Theorealize Liberation (GY): Treat 1 monster you control as a Tuner this turn
42. Selected Artmage Non-Finito (M4)

End board:  LP 8000 | Hand 3 | Deck 33 | Extra 10 | GY 2 | Banished 10   Monsters: M1: Artmage Diactorus Lv8 2800/2500 ATK || M3: Nerva the Power Patron of Creation Lv10 3300/3300 ATK || M4: Artmage Non-Finito Lv7 2400/1500 DEF || EMZ-L: S:P Little Knight L2←→ 1600    Spell/Trap: S1: Ars Magna - "Citrinitas" || S2: Artmage Impasto -Recapture- (Set)   GY: Junora the Power Patron of Tuning, Nervedo the Shadebeast Power Patron   Banished: Artmage Vandalism -Assault- (face-down), Fiendsmith's Tract (face-down), Magician of Dark Chaos - Black Chaos (face-down), Ars Magna - "Citrinitas" (face-down), Griffoh (face-down), Nervedo the Shadebeast Power Patron (face-down), Medius the Pure, Purification Power Patr

## Order 2: best 3.35 (ss_panama null, elfnote null, despia -0.45, angelechy 5.88, worst -0.9) — from cit1 (seed followed 30/36 steps)
Others: cit1 → new ending 2.47 · cit1 → new ending 2.29 · opening lanes 1.64 · tries Activate Mind Shuffle 1.04 · tries Activate Prohibited Power Patron Portal - Terminus 0.81 · search 0.16 · cit1 → new early order -1.48 · cit1 → new early order -1.83

1. Activate Ars Magna - "Citrinitas" (hand): activate this card
2. Activate Ars Magna - "Citrinitas" (S1): Add 1 "Medius" or "Ars Magna" monster from your Deck to your hand
3. Selected Medius the Pure (Deck)
4. Normal Summon Medius the Pure (hand)
5. Yes
6. Selected Nervedo the Shadebeast Power Patron (Deck)
7. Special Summon it
8. Activate Nervedo the Shadebeast Power Patron (M2): Special Summon 1 "Nerva the Power Patron of Creation" from your Extra Deck
9. Selected Nerva the Power Patron of Creation (Extra Deck)
10. Yes
11. Selected Junoldo the Shadespirit Power Patron (Deck)
12. Activate Junoldo the Shadespirit Power Patron (M2): Special Summon 1 "Junora the Power Patron of Tuning" from your Extra Deck
13. Selected Junora the Power Patron of Tuning (Extra Deck)
14. Yes
15. Selected Nervedo the Shadebeast Power Patron (Extra Deck)
16. Link Summon Purification Power Patron (Extra Deck)
17. select Medius the Pure (M1)
18. select Junora the Power Patron of Tuning (M2)
19. Yes
20. Selected Theorealize Medius (Deck)
21. Activate Theorealize Medius (hand): If a "Power Patron" card is on the field: You can Special Summon this card from your hand, then you can add 1 "Theorealize" Spell/Trap from your Deck to your hand
22. Yes
23. Selected Theorealize Past Lull (Deck)
24. Special Summon (procedure) Artmage Non-Finito (Extra Deck)
25. Selected Theorealize Past Lull (hand)
26. Selected Nervedo the Shadebeast Power Patron (hand)
27. Yes
28. Selected Artmage Vandalism -Assault- (Deck)
29. Activate Artmage Vandalism -Assault- (S2): When this card is activated: You can add 1 "Medius the Pure" from your Deck to your hand
30. Yes
31. Selected Medius the Pure (Deck)
32. Activate Artmage Vandalism -Assault- (S2): Make 1 face-up monster you control able to be treated as an "Artmage" monster if used as Fusion Material
33. Selected Theorealize Medius (M3)
34. Activate Theorealize Past Lull (GY): Special Summon 1 Fusion, Synchro, or Xyz Monster from your GY
35. Selected Junora the Power Patron of Tuning (GY)
36. Activate Medius the Pure (GY): Shuffle 1 monster from your hand or face-up field into the Deck, and if you do, Special Summon this card
37. Selected Medius the Pure (hand)
38. Activate Purification Power Patron (EMZ-L): Link Summon including this card as material
39. Selected Medicurius the Power Patron of Illusions (Extra Deck)
40. select Medius the Pure (M1)
41. Finish selection
42. Yes
43. Special Summon 1 "Diactorus" monster
44. Selected Artmage Diactorus (Extra Deck)
45. Activate Artmage Diactorus (M3): Change the battle position of 1 monster on the field
46. Selected Artmage Diactorus (M3)
47. Link Summon S:P Little Knight (Extra Deck)
48. select Artmage Non-Finito (M4)
49. select Junora the Power Patron of Tuning (M2)
50. No

End board:  LP 8000 | Hand 4 | Deck 32 | Extra 9 | GY 4 | Banished 9   Monsters: M3: Artmage Diactorus Lv8 2800/2500 DEF || M4: S:P Little Knight L2←→ 1600  || M5: Nerva the Power Patron of Creation Lv10 3300/3300 ATK || EMZ-R: Medicurius the Power Patron of Illusions L3↙↓↘ 3000    Spell/Trap: S1: Ars Magna - "Citrinitas" || S2: Artmage Vandalism -Assault-   GY: Nervedo the Shadebeast Power Patron, Purification Power Patron, Junora the Power Patron of Tuning, Artmage Non-Finito   Banished: Artmage Impasto -Recapture- (face-down), Ars Magna - "Citrinitas" (face-down), Prohibited Power Patron Portal - Terminus (face-down), Mind Shuffle (face-down), Pendulum Treasure (face-down), Theorealize Medius (face-

## Order 3: best 5.16 (ss_panama 6.22, elfnote 4.11, despia -0.45, angelechy 7.38, worst -0.45) — from opening lanes → new early order
Others: opening lanes 4.33 · opening lanes → new ending 3.46 · search 3.36 · opening lanes → new ending 2.86 · tries Activate Junoldo the Shadespirit Power Patron 2.25 · opening lanes → new early order 2.09 · tries Activate Light and Darkness Ritual 1.63 · cit1 0.7 · cit1 0.31

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
11. Selected Theorealize Medius (Deck)
12. Link Summon Purification Power Patron (Extra Deck)
13. select Nerva the Power Patron of Creation (M1)
14. select Theorealize Medius (M2)
15. Yes
16. Selected Theorealize Medius (Deck)
17. Activate Theorealize Medius (hand): If a "Power Patron" card is on the field: You can Special Summon this card from your hand, then you can add 1 "Theorealize" Spell/Trap from your Deck to your hand
18. Yes
19. Selected Theorealize Liberation (Deck)
20. Activate Theorealize Liberation (hand): Add to your hand, or Special Summon, 1 monster from your Deck with 300 ATK/200 DEF
21. Selected Junoldo the Shadespirit Power Patron (Deck)
22. Add the card(s) to your hand
23. Activate Junoldo the Shadespirit Power Patron (hand): Activate it as a Pendulum Spell
24. Activate Theorealize Liberation (GY): Treat 1 monster you control as a Tuner this turn
25. Selected Purification Power Patron (EMZ-L)
26. Activate Purification Power Patron (EMZ-L): Link Summon including this card as material
27. Selected Medicurius the Power Patron of Illusions (Extra Deck)
28. select Medius the Pure (M3)
29. Finish selection
30. Yes
31. Selected Ash Blossom & Joyous Spring (hand)
32. Yes
33. Selected Nervedo the Shadebeast Power Patron (Extra Deck)
34. Activate Artmage Graflare (hand): Special Summon this card from your hand
35. Yes
36. Selected Artmage Vandalism -Assault- (Deck)
37. Set Spell/Trap Small World
38. Activate Artmage Vandalism -Assault- (S2): When this card is activated: You can add 1 "Medius the Pure" from your Deck to your hand
39. Yes
40. Selected Medius the Pure (Deck)
41. Activate Small World (S3): activate this card
42. Selected Medius the Pure (hand)
43. Selected Griffoh (Deck)
44. Selected Black Chaos (Deck)
45. Activate Black Chaos (hand): Special Summon ("Black Chaos")
46. Selected Mind Shuffle (Deck)
47. Activate Artmage Vandalism -Assault- (S2): Make 1 face-up monster you control able to be treated as an "Artmage" monster if used as Fusion Material
48. Selected Medicurius the Power Patron of Illusions (EMZ-L)
49. Activate Mind Shuffle (S3): Add 1 appropriate monster to your hand
50. Selected Skull Archfiend of Chaos (Deck)
51. Selected Skull Archfiend of Chaos (hand)
52. Yes
53. Selected Light and Darkness Ritual (Deck)
54. Selected Magician of Dark Chaos - Black Chaos (Deck)
55. Activate Light and Darkness Ritual (GY): Add both this card and 1 card that mentions "Light and Darkness Ritual" from your GY to your hand
56. Selected Black Chaos (GY)
57. Activate Light and Darkness Ritual (hand): Ritual Summon 1 "Magician of Dark Chaos - Black Chaos" or "Black Luster Soldier - Soldier of Light and Darkness" from your hand
58. Selected Magician of Dark Chaos - Black Chaos (hand)
59. Selected Medius the Pure (GY) value 4, Theorealize Medius (GY) value 4
60. Yes
61. Special Summon 1 "Diactorus" monster
62. Selected Artmage Diactorus (Extra Deck)
63. Activate Skull Archfiend of Chaos (GY): Special Summon this card
64. select Purification Power Patron (GY)
65. select Light and Darkness Ritual (GY)
66. select Small World (GY)
67. Default order
68. Activate Artmage Diactorus (M3): Change the battle position of 1 monster on the field
69. Selected Magician of Dark Chaos - Black Chaos (M4)
70. Special Summon (procedure) Dark Magician of Destruction (Extra Deck)
71. Selected Magician of Dark Chaos - Black Chaos (M4)
72. Yes
73. Selected Dark Magical Circle (Deck)
74. Special Summon (procedure) Artmage Non-Finito (Extra Deck)
75. Selected Dark Magical Circle (hand)
76. Selected Nervedo the Shadebeast Power Patron (hand)
77. Yes
78. Selected Artmage Impasto -Recapture- (Deck)

End board:  LP 8000 | Hand 4 | Deck 25 | Extra 11 | GY 4 | Banished 10   Monsters: M1: Artmage Graflare Lv5 2100/1500 ATK || M2: Dark Magician of Destruction Lv8 2800/2600 ATK || M3: Artmage Diactorus Lv8 2800/2500 ATK || M4: Artmage Non-Finito Lv7 2400/1500 ATK || M5: Skull Archfiend of Chaos Lv6 2500/1200 ATK || EMZ-L: Medicurius the Power Patron of Illusions L3↙↓↘ 3000    Spell/Trap: S1: Ars Magna - "Citrinitas" || S2: Artmage Vandalism -Assault- || S3: Mind Shuffle || S4: Artmage Impasto -Recapture- (Set)   GY: Nerva the Power Patron of Creation, Ash Blossom & Joyous Spring, Dark Magical Circle, Nervedo the Shadebeast Power Patron   Banished: Nervedo the Shadebeast Power Patron (face-down), Ars Mag

## Order 4: best 8.93 (ss_panama 11.05, elfnote 6.5, despia 6.28, angelechy 10.9, worst 1.65) — from tries Activate Prohibited Power Patron Portal - Terminus → new early order → new ending
Others: tries Activate Prohibited Power Patron Portal - Terminus → new early order 8.51 · tries Activate Prohibited Power Patron Portal - Terminus 6.64 · tries Activate Prohibited Power Patron Portal - Terminus → new early order → new ending → new early order 4.3 · opening lanes 3.82 · tries Activate Prohibited Power Patron Portal - Terminus → new ending 3.77 · tries Activate Artmage Vandalism -Assault- 3.76 · search 3.06 · cit1 1.36 · cit1 1.35

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
24. Selected Junoldo the Shadespirit Power Patron (Deck)
25. Add the card(s) to your hand
26. Activate Junoldo the Shadespirit Power Patron (hand): Activate it as a Pendulum Spell
27. Activate Theorealize Liberation (GY): Treat 1 monster you control as a Tuner this turn
28. Selected Nerva the Power Patron of Creation (M4)
29. Activate Purification Power Patron (EMZ-L): Link Summon including this card as material
30. Selected Medicurius the Power Patron of Illusions (Extra Deck)
31. select Medius the Pure (M3)
32. Finish selection
33. Yes
34. Special Summon 1 "Diactorus" monster
35. Activate Junoldo the Shadespirit Power Patron (S5): Destroy this card, draw 2 cards, then discard 1 card
36. Selected Black Chaos (hand)
37. Selected Artmage Diactorus (Extra Deck)
38. Yes
39. Selected Nervedo the Shadebeast Power Patron (Extra Deck)
40. Activate Artmage Finmel (hand): Special Summon this card from your hand
41. Yes
42. Activate Griffoh (hand): Activate 1 of these effects
43. Set 1 card that mentions "Light and Darkness Ritual"
44. Selected Mind Shuffle (Deck)
45. Activate Artmage Diactorus (M1): Change the battle position of 1 monster on the field
46. Selected Artmage Diactorus (M1)
47. Activate Mind Shuffle (S2): activate this card
48. No
49. Activate Mind Shuffle (S2): Add 1 appropriate monster to your hand
50. Selected Skull Archfiend of Chaos (Deck)
51. Selected Skull Archfiend of Chaos (hand)
52. Yes
53. Selected Light and Darkness Ritual (Deck)
54. Selected Magician of Dark Chaos - Black Chaos (Deck)
55. Activate Light and Darkness Ritual (GY): Add both this card and 1 card that mentions "Light and Darkness Ritual" from your GY to your hand
56. Selected Griffoh (GY)
57. Activate Light and Darkness Ritual (hand): Ritual Summon 1 "Magician of Dark Chaos - Black Chaos" or "Black Luster Soldier - Soldier of Light and Darkness" from your hand
58. Selected Magician of Dark Chaos - Black Chaos (hand)
59. Selected Black Chaos (GY) value 8
60. Yes
61. Selected Light and Darkness Ritual (GY)
62. Special Summon (procedure) Artmage Non-Finito (Extra Deck)
63. Selected Light and Darkness Ritual (hand)
64. Selected Nervedo the Shadebeast Power Patron (hand)
65. Yes
66. Selected Artmage Impasto -Recapture- (Deck)

End board:  LP 8000 | Hand 4 | Deck 28 | Extra 11 | GY 5 | Banished 7   Monsters: M1: Artmage Diactorus Lv8 2800/2500 DEF || M2: Magician of Dark Chaos - Black Chaos Lv8 2800/2600 ATK || M3: Artmage Non-Finito Lv7 2400/1500 ATK || M4: Nerva the Power Patron of Creation Lv10 3300/3300 ATK || M5: Artmage Finmel Lv7 2400/1500 ATK || EMZ-L: Medicurius the Power Patron of Illusions L3↙↓↘ 3000    Spell/Trap: S1: Ars Magna - "Citrinitas" || S2: Mind Shuffle || S3: Artmage Impasto -Recapture- (Set)   GY: Theorealize Medius, Purification Power Patron, Skull Archfiend of Chaos, Light and Darkness Ritual, Nervedo the Shadebeast Power Patron   Banished: Artmage Finmel (face-down), Dark Magical Circle (face-down), 

## Order 5: best 2.97 (ss_panama 0.94, elfnote 2.19, despia 1.81, angelechy 6.3, worst 0.38) — from search → new early order
Others: search 2.89 · opening lanes 2.55 · search → new early order → new ending 2.1 · search → new early order → new early order 1.86 · tries Activate Vidolium the Unstable Power Patron of Unity 0.85 · search → new ending 0.55 · cit1 0.16 · tries Normal Summon Theorealize Medius -0.04

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
11. Selected Theorealize Medius (Deck)
12. Link Summon Purification Power Patron (Extra Deck)
13. select Medius the Pure (M1)
14. select Nerva the Power Patron of Creation (EMZ-L)
15. Yes
16. Selected Theorealize Liberation (Deck)
17. Activate Medius the Pure (GY): Shuffle 1 monster from your hand or face-up field into the Deck, and if you do, Special Summon this card
18. Selected Ash Blossom & Joyous Spring (hand)
19. Activate Theorealize Liberation (hand): Add to your hand, or Special Summon, 1 monster from your Deck with 300 ATK/200 DEF
20. Selected Griffoh (Deck)
21. Add the card(s) to your hand
22. Activate Theorealize Liberation (GY): Treat 1 monster you control as a Tuner this turn
23. Selected Purification Power Patron (EMZ-R)
24. Activate Griffoh (hand): Activate 1 of these effects
25. Set 1 card that mentions "Light and Darkness Ritual"
26. Activate Purification Power Patron (EMZ-R): Link Summon including this card as material
27. Selected Medicurius the Power Patron of Illusions (Extra Deck)
28. select Medius the Pure (M5)
29. Finish selection
30. Selected Mind Shuffle (Deck)
31. Yes
32. Special Summon 1 "Diactorus" monster
33. Selected Artmage Diactorus (Extra Deck)
34. Activate Mind Shuffle (S2): activate this card
35. Yes
36. Selected Skull Archfiend of Chaos (Deck)
37. Selected Skull Archfiend of Chaos (hand)
38. Yes
39. Selected Light and Darkness Ritual (Deck)
40. Selected Magician of Dark Chaos - Black Chaos (Deck)
41. Activate Light and Darkness Ritual (GY): Add both this card and 1 card that mentions "Light and Darkness Ritual" from your GY to your hand
42. Selected Griffoh (GY)
43. Activate Light and Darkness Ritual (hand): Ritual Summon 1 "Magician of Dark Chaos - Black Chaos" or "Black Luster Soldier - Soldier of Light and Darkness" from your hand
44. Selected Magician of Dark Chaos - Black Chaos (hand)
45. Selected Griffoh (hand) value 8 or 1
46. Yes
47. Selected Light and Darkness Ritual (GY)
48. Activate Skull Archfiend of Chaos (GY): Special Summon this card
49. select Medius the Pure (banishment)
50. select Griffoh (GY)
51. select Purification Power Patron (GY)
52. Default order
53. Special Summon (procedure) Artmage Non-Finito (Extra Deck)
54. Selected Light and Darkness Ritual (hand)
55. Selected Artmage Diactorus (M4)
56. Yes
57. Selected Artmage Impasto -Recapture- (Deck)

End board:  LP 8000 | Hand 3 | Deck 34 | Extra 12 | GY 3 | Banished 5   Monsters: M1: Magician of Dark Chaos - Black Chaos Lv8 2800/2600 ATK || M2: Skull Archfiend of Chaos Lv6 2500/1200 ATK || M3: Artmage Non-Finito Lv7 2400/1500 ATK || EMZ-L: Medicurius the Power Patron of Illusions L3↙↓↘ 3000    Spell/Trap: S1: Ars Magna - "Citrinitas" || S2: Mind Shuffle || S3: Artmage Impasto -Recapture- (Set)   GY: Nerva the Power Patron of Creation, Light and Darkness Ritual, Artmage Diactorus   Banished: Theorealize Medius (face-down), Junoldo the Shadespirit Power Patron (face-down), Plundered Power Patron Plane - Vidolia (face-down), Theorealize Liberation, Theorealize Medius   Hand: Ash Blossom & Joyous Spri

## Order 6: best 5.79 (ss_panama 3.4, elfnote 8.3, despia 2.5, angelechy 7.95, worst 1.1) — from opening lanes
Others: tries Activate Artmage Diactorus 5.38 · tries Activate Artmage Vandalism -Assault- 4.51 · opening lanes → new early order 4.07 · opening lanes → new ending 4.05 · search 3.05 · opening lanes → new early order 2.92 · opening lanes → new ending 2.48 · cit1 1.32 · cit1 0.89

1. Activate Ars Magna - "Citrinitas" (hand): activate this card
2. Activate Ars Magna - "Citrinitas" (S1): Add 1 "Medius" or "Ars Magna" monster from your Deck to your hand
3. Selected Medius the Pure (Deck)
4. Normal Summon Medius the Pure (hand)
5. Yes
6. Selected Nervedo the Shadebeast Power Patron (Deck)
7. Special Summon it
8. Activate Nervedo the Shadebeast Power Patron (M2): Special Summon 1 "Nerva the Power Patron of Creation" from your Extra Deck
9. Selected Nerva the Power Patron of Creation (Extra Deck)
10. Yes
11. Selected Junoldo the Shadespirit Power Patron (Deck)
12. Activate Junoldo the Shadespirit Power Patron (M2): Special Summon 1 "Junora the Power Patron of Tuning" from your Extra Deck
13. Selected Junora the Power Patron of Tuning (Extra Deck)
14. Yes
15. Selected Nervedo the Shadebeast Power Patron (Extra Deck)
16. Link Summon Purification Power Patron (Extra Deck)
17. select Junora the Power Patron of Tuning (M2)
18. select Medius the Pure (M1)
19. Yes
20. Selected Theorealize Medius (Deck)
21. Activate Theorealize Medius (hand): If a "Power Patron" card is on the field: You can Special Summon this card from your hand, then you can add 1 "Theorealize" Spell/Trap from your Deck to your hand
22. Yes
23. Selected Theorealize Past Lull (Deck)
24. Activate Medius the Pure (GY): Shuffle 1 monster from your hand or face-up field into the Deck, and if you do, Special Summon this card
25. Selected Ash Blossom & Joyous Spring (hand)
26. Activate Purification Power Patron (EMZ-R): Link Summon including this card as material
27. Selected Medicurius the Power Patron of Illusions (Extra Deck)
28. select Medius the Pure (M1)
29. Finish selection
30. Yes
31. Special Summon 1 "Diactorus" monster
32. Selected Artmage Diactorus (Extra Deck)
33. Special Summon (procedure) Artmage Non-Finito (Extra Deck)
34. Selected Theorealize Past Lull (hand)
35. Selected Nervedo the Shadebeast Power Patron (hand)
36. Yes
37. Selected Artmage Impasto -Recapture- (Deck)
38. Activate Theorealize Past Lull (GY): Special Summon 1 Fusion, Synchro, or Xyz Monster from your GY
39. Selected Junora the Power Patron of Tuning (GY)

End board:  LP 8000 | Hand 3 | Deck 33 | Extra 10 | GY 2 | Banished 9   Monsters: M1: Artmage Non-Finito Lv7 2400/1500 ATK || M2: Junora the Power Patron of Tuning Lv10 3100/3800 ATK || M3: Nerva the Power Patron of Creation Lv10 3300/3300 ATK || M4: Artmage Diactorus Lv8 2800/2500 ATK || EMZ-L: Medicurius the Power Patron of Illusions L3↙↓↘ 3000    Spell/Trap: S1: Ars Magna - "Citrinitas" || S2: Artmage Impasto -Recapture- (Set)   GY: Purification Power Patron, Nervedo the Shadebeast Power Patron   Banished: Theorealize Medius (face-down), Ars Magna - "Citrinitas" (face-down), Mind Shuffle (face-down), Skull Archfiend of Chaos (face-down), Small World (face-down), Vidolium the Unstable Power Patron of

## Order 7: best 4.58 (ss_panama 5.41, elfnote -0.6, despia 3.7, angelechy 7.8, worst -1.85) — from opening lanes → new early order
Others: opening lanes → new early order → new ending 4.09 · opening lanes 4.03 · tries Activate Theorealize Past Lull 3.41 · opening lanes → new ending 3.06 · tries Activate Theorealize Liberation 2.59 · search 2.56 · cit1 1.26 · cit1 0.3 · opening lanes → new early order → new early order 0.07

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
11. Selected Theorealize Medius (Deck)
12. Link Summon Purification Power Patron (Extra Deck)
13. select Nerva the Power Patron of Creation (M1)
14. select Medius the Pure (M3)
15. Yes
16. Selected Theorealize Liberation (Deck)
17. Activate Medius the Pure (GY): Shuffle 1 monster from your hand or face-up field into the Deck, and if you do, Special Summon this card
18. Selected Ash Blossom & Joyous Spring (hand)
19. Activate Theorealize Liberation (hand): Add to your hand, or Special Summon, 1 monster from your Deck with 300 ATK/200 DEF
20. Selected Junoldo the Shadespirit Power Patron (Deck)
21. Add the card(s) to your hand
22. Activate Junoldo the Shadespirit Power Patron (hand): Activate it as a Pendulum Spell
23. Activate Purification Power Patron (EMZ-L): Link Summon including this card as material
24. Selected Medicurius the Power Patron of Illusions (Extra Deck)
25. select Medius the Pure (M3)
26. Finish selection
27. Yes
28. Special Summon 1 "Diactorus" monster
29. Activate Junoldo the Shadespirit Power Patron (S5): Destroy this card, draw 2 cards, then discard 1 card
30. Selected Droll & Lock Bird (hand)
31. Selected Artmage Diactorus (Extra Deck)
32. Yes
33. Selected Nervedo the Shadebeast Power Patron (Extra Deck)
34. Set Spell/Trap Artmage Impasto -Recapture-
35. Activate Artmage Finmel (hand): Special Summon this card from your hand
36. Yes
37. Activate Vidolium the Unstable Power Patron of Unity (hand): Activate it as a Pendulum Spell
38. Activate Vidolium the Unstable Power Patron of Unity (S5): Activate 1 of these effects
39. Special Summon 1 "Power Patron" monster
40. Selected Purification Power Patron (GY)
41. Yes
42. Selected Plundered Power Patron Plane - Vidolia (Deck)
43. Special Summon (procedure) Artmage Non-Finito (Extra Deck)
44. Selected Plundered Power Patron Plane - Vidolia (hand)
45. Selected Nervedo the Shadebeast Power Patron (hand)
46. Yes
47. Selected Artmage Vandalism -Assault- (Deck)
48. Activate Artmage Vandalism -Assault- (S3): When this card is activated: You can add 1 "Medius the Pure" from your Deck to your hand
49. Yes
50. Selected Medius the Pure (Deck)

End board:  LP 8000 | Hand 3 | Deck 31 | Extra 12 | GY 5 | Banished 5   Monsters: M1: Artmage Finmel Lv7 2400/1500 ATK || M2: Artmage Non-Finito Lv7 2400/1500 ATK || M3: Artmage Diactorus Lv8 2800/2500 ATK || M4: Purification Power Patron L2↑↓ 300  || EMZ-L: Medicurius the Power Patron of Illusions L3↙↓↘ 3000    Spell/Trap: S1: Ars Magna - "Citrinitas" || S2: Artmage Impasto -Recapture- (Set) || S3: Artmage Vandalism -Assault-   GY: Nerva the Power Patron of Creation, Theorealize Liberation, Droll & Lock Bird, Plundered Power Patron Plane - Vidolia, Nervedo the Shadebeast Power Patron   Banished: Theorealize Medius (face-down), Ars Magna - "Citrinitas" (face-down), Griffoh (face-down), Medius the Pure,

## Order 8: best 4.13 (ss_panama 0, elfnote 3.15, despia -2.09, angelechy 7.9, worst -2.09) — from opening lanes
Others: tries Activate Ars Magna of Purification and Corruption 3.54 · tries Activate Vidolium the Unstable Power Patron of Unity 3.17 · opening lanes → new ending 2.82 · search 2.43 · cit1 1.99 · opening lanes → new ending 1.96 · cit1 1.84 · opening lanes → new early order -1.57 · opening lanes → new early order -1.75

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
31. Selected Artmage Impasto -Recapture- (Deck)
32. Activate Purification Power Patron (EMZ-L): Link Summon including this card as material
33. Selected Medicurius the Power Patron of Illusions (Extra Deck)
34. select Medius the Pure (M1)
35. Finish selection
36. Yes
37. Special Summon 1 "Diactorus" monster
38. Selected Artmage Diactorus (Extra Deck)
39. Activate Theorealize Past Lull (GY): Special Summon 1 Fusion, Synchro, or Xyz Monster from your GY
40. Selected Junora the Power Patron of Tuning (GY)

End board:  LP 8000 | Hand 3 | Deck 33 | Extra 10 | GY 2 | Banished 9   Monsters: M1: Junora the Power Patron of Tuning Lv10 3100/3800 ATK || M2: Nerva the Power Patron of Creation Lv10 3300/3300 ATK || M3: Artmage Non-Finito Lv7 2400/1500 ATK || M4: Artmage Diactorus Lv8 2800/2500 ATK || EMZ-L: Medicurius the Power Patron of Illusions L3↙↓↘ 3000    Spell/Trap: S1: Ars Magna - "Citrinitas" || S2: Artmage Impasto -Recapture- (Set)   GY: Nervedo the Shadebeast Power Patron, Purification Power Patron   Banished: Fiendsmith Engraver (face-down), Skull Archfiend of Chaos (face-down), Artmage Vandalism -Assault- (face-down), Mind Shuffle (face-down), Artmage Graflare (face-down), Pendulum Treasure (face-down

