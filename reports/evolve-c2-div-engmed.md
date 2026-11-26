# Evolved lines — Fiendsmith Engraver, Medius the Pure, Ash Blossom & Joyous Spring, Droll & Lock Bird, Ghost Ogre & Snow Rabbit (findlist-1100)
2026-11-26T01:14:11.543Z

8 deck orders (different face-down banishes / draws), 3 opponent hands x o_ss_panama + o_elfnote + o_despia + o_angelechy per line, 5 min searches, 6 mutation rounds.
Fitness = end-board interruptions (the lab scorer, src/disrupt.mjs: wipe 2, negate 1-1.5, banish/protection less; hand traps kept count 1 each). The winner of each order is also played into the opponent decks: margin after their turn shown beside it.

**Margin after their turn (winners): average 4.65** (worst -3.53)

**Best line per deck order: average 12.64** (worst order 11.3). Winner came from: tries Activate Artmage Finmel → new ending → new early order 1, forced Activate Griffoh 1, forced Activate Theorealize Liberation → new ending 2, tries Activate Junoldo the Shadespirit Power Patron → new ending 2, forced Special Summon (procedure) Dark Magician of Destruction 1, tries Normal Summon Lacrima the Crimson Tears → new early order 1

## Weak points found automatically
Cards whose face-down banish (by your own costs) hurt the best line most (average best line without vs with that card banished):

| card | orders where it was banished | drop |
|---|---|---|
| Medius the Pure | 7/8 | 1.21 |
| Apprentice Illusion Magician | 7/8 | 1.21 |
| Theorealize Medius | 7/8 | 1.21 |
| Lacrima the Crimson Tears | 5/8 | 1.05 |
| Pendulum Treasure | 7/8 | 0.75 |
| Artmage Vandalism -Assault- | 7/8 | 0.75 |
| Nervedo the Shadebeast Power Patron | 7/8 | 0.75 |
| Artmage Finmel | 6/8 | 0.57 |
| Prohibited Power Patron Portal - Terminus | 5/8 | 0.33 |
| Ash Blossom & Joyous Spring | 7/8 | 0.29 |

List changes proposed for the list test (data/proposals-findlist-1100.json):
- +1 Apprentice Illusion Magician, −1 Plundered Power Patron Plane - Vidolia — Apprentice Illusion Magician: best line 1.21 worse when a cost banished it (7 of 8 orders) — Fiendsmith Engraver
- +1 Theorealize Medius, −1 Artmage Vandalism -Assault- — Theorealize Medius: best line 1.21 worse when a cost banished it (7 of 8 orders) — Fiendsmith Engraver
- +1 Lacrima the Crimson Tears, −1 Small World — Lacrima the Crimson Tears: best line 1.05 worse when a cost banished it (5 of 8 orders) — Fiendsmith Engraver
- +1 Artmage Finmel, −1 Plundered Power Patron Plane - Vidolia — Artmage Finmel: best line 0.57 worse when a cost banished it (6 of 8 orders) — Fiendsmith Engraver
- +1 Apprentice Illusion Magician — Apprentice Illusion Magician: best line 1.21 worse when a cost banished it (7 of 8 orders) — Fiendsmith Engraver (add only: deck grows, up to 60)
- +1 Theorealize Medius — Theorealize Medius: best line 1.21 worse when a cost banished it (7 of 8 orders) — Fiendsmith Engraver (add only: deck grows, up to 60)
- +1 Lacrima the Crimson Tears — Lacrima the Crimson Tears: best line 1.05 worse when a cost banished it (5 of 8 orders) — Fiendsmith Engraver (add only: deck grows, up to 60)
- +1 Artmage Finmel — Artmage Finmel: best line 0.57 worse when a cost banished it (6 of 8 orders) — Fiendsmith Engraver (add only: deck grows, up to 60)

Effects the search had not used, tried on purpose (best result so far):
- Activate Junoldo the Shadespirit Power Patron: 12.8
- Activate Junoldo the Shadespirit Power Patron: 12.25
- Activate Light and Darkness Ritual: 12.1
- Activate Artmage Finmel: 12.1
- Activate Pendulum Treasure: 11.8
- Activate Theorealize Past Lull: 11.7
- Normal Summon Lacrima the Crimson Tears: 11.7
- Activate Theorealize Liberation: 11.3

## Order 1: best 13.3 (, worst 13.3) — from tries Activate Artmage Finmel → new ending → new early order
Others: tries Activate Artmage Finmel → new ending 13.15 · tries Activate Artmage Finmel 12.1 · forced Activate Theorealize Past Lull 12 · tries Activate Theorealize Past Lull 11.7 · forced Activate Theorealize Liberation 11.3 · forced Activate Artmage Graflare 11.2 · forced Activate Fiendsmith's Sequence 10.45 · tries Activate Theorealize Past Lull 10.2 · tries Activate Artmage Finmel → new ending → new early order 10.1 · tries Activate Ars Magna of Infinity and Finity 9.58 · forced Link Summon S:P Little Knight 8.55 · tries Activate Ars Magna of Infinity and Finity 8.41 · forced Activate Light and Darkness Ritual: Ritual Summon 8.3 · search 8.2 · forced Activate Griffoh 8.2 · forced Activate Mind Shuffle 8.2 · opening lanes 8.2 · tries Activate Artmage Finmel → new ending → new early order 8.18 · forced Special Summon (procedure) Dark Magician of Destruction 8 · forced Synchro Summon Chaos Angel 7.7 · tries Activate Plundered Power Patron Plane - Vidolia 7

1. Normal Summon Medius the Pure (hand)
2. Yes
3. Selected Nervedo the Shadebeast Power Patron (Deck)
4. Special Summon it
5. Activate Nervedo the Shadebeast Power Patron (M1): Special Summon 1 "Nerva the Power Patron of Creation" from your Extra Deck
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
22. select Junora the Power Patron of Tuning (EMZ-R)
23. Yes
24. Selected Theorealize Medius (Deck)
25. Activate Medius the Pure (GY): Shuffle 1 monster from your hand or face-up field into the Deck, and if you do, Special Summon this card
26. Selected Artmage Non-Finito (M1)
27. Activate Theorealize Medius (hand): If a "Power Patron" card is on the field: You can Special Summon this card from your hand, then you can add 1 "Theorealize" Spell/Trap from your Deck to your hand
28. Yes
29. Selected Theorealize Liberation (Deck)
30. Activate Theorealize Liberation (hand): Add to your hand, or Special Summon, 1 monster from your Deck with 300 ATK/200 DEF
31. Selected Griffoh (Deck)
32. #573
33. Activate Griffoh (hand): Activate 1 of these effects
34. Set 1 card that mentions "Light and Darkness Ritual"
35. Activate Purification Power Patron (EMZ-R): Link Summon including this card as material
36. Selected Medicurius the Power Patron of Illusions (Extra Deck)
37. select Medius the Pure (M1)
38. Finish selection
39. Selected Mind Shuffle (Deck)
40. Yes
41. Special Summon 1 "Diactorus" monster
42. Activate Mind Shuffle (S2): activate this card
43. No
44. Selected Artmage Diactorus (Extra Deck)
45. Activate Mind Shuffle (S2): Add 1 appropriate monster to your hand
46. Selected Skull Archfiend of Chaos (Deck)
47. Selected Skull Archfiend of Chaos (hand)
48. Yes
49. Selected Light and Darkness Ritual (Deck)
50. Selected Magician of Dark Chaos - Black Chaos (Deck)
51. Activate Light and Darkness Ritual (GY): Add both this card and 1 card that mentions "Light and Darkness Ritual" from your GY to your hand
52. Selected Skull Archfiend of Chaos (GY)
53. Set Spell/Trap Light and Darkness Ritual
54. Activate Light and Darkness Ritual (S3): Ritual Summon 1 "Magician of Dark Chaos - Black Chaos" or "Black Luster Soldier - Soldier of Light and Darkness" from your hand
55. Selected Magician of Dark Chaos - Black Chaos (hand)
56. Selected Griffoh (GY) value 8 or 1
57. Yes
58. Selected Fiendsmith's Tract (GY)
59. Activate Skull Archfiend of Chaos (hand): Special Summon this card
60. select Purification Power Patron (GY)
61. select Light and Darkness Ritual (GY)
62. select Theorealize Liberation (GY)
63. Default order
64. Activate Fiendsmith's Tract (hand): Add 1 LIGHT Fiend monster from your Deck to your hand
65. Selected Lacrima the Crimson Tears (Deck)
66. Selected Lacrima the Crimson Tears (hand)
67. Activate Artmage Diactorus (M1): Change the battle position of 1 monster on the field
68. Selected Artmage Diactorus (M1)
69. Activate Fiendsmith Engraver (GY): Special Summon this card
70. Selected Lacrima the Crimson Tears (GY)
71. Link Summon Fiendsmith's Sequence (Extra Deck)
72. select Skull Archfiend of Chaos (M5)
73. select Fiendsmith Engraver (M2)
74. Link Summon Fiendsmith's Requiem (Extra Deck)
75. select Fiendsmith's Sequence (M5)

End board:  LP 8000 | Hand 3 | Deck 29 | Extra 10 | GY 6 | Banished 9   Monsters: M1: Artmage Diactorus Lv8 2800/2500 DEF || M3: Magician of Dark Chaos - Black Chaos Lv8 2800/2600 ATK || M4: Nerva the Power Patron of Creation Lv10 3300/3300 ATK || M5: Fiendsmith's Requiem L1↓ 600  || EMZ-R: Medicurius the Power Patron of Illusions L3↙↓↘ 3000    Spell/Trap: S1: Artmage Impasto -Recapture- (Set) || S2: Mind Shuffle   GY: Nervedo the Shadebeast Power Patron, Junora the Power Patron of Tuning, Fiendsmith's Tract, Fiendsmith Engraver, Skull Archfiend of Chaos, Fiendsmith's Sequence   Banished: Ash Blossom & Joyous Spring (face-down), Ars Magna - "Citrinitas" (face-down), Ars Magna of Infinity and Finity (fa

## Order 2: best 11.8 [margin 5.67: ss_panama 2.93, elfnote 4.21, despia 4.47, angelechy 8.75] (, worst 11.8) — from forced Activate Griffoh
Others: tries Activate Theorealize Liberation 11.3 · forced Activate Theorealize Past Lull 11.2 · forced Activate Theorealize Liberation 11.05 · tries Activate Theorealize Liberation 11 · search 10.45 · forced Activate Mind Shuffle 10.45 · forced Special Summon (procedure) Dark Magician of Destruction 9.75 · tries Activate Artmage Diactorus 9.15 · forced Activate Artmage Graflare 8.95 · forced Synchro Summon Chaos Angel 8.45 · tries Normal Summon Nervedo the Shadebeast Power Patron 8.2 · forced Activate Fiendsmith's Sequence 8.2 · opening lanes 8.18 · forced Link Summon S:P Little Knight 8.18 · tries Special Summon (procedure) Artmage Non-Finito 7.5 · forced Activate Light and Darkness Ritual: Ritual Summon 7.5 · tries Activate Vidolium the Unstable Power Patron of Unity 7.2

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
19. Activate Nervedo the Shadebeast Power Patron (M4): Special Summon 1 "Nerva the Power Patron of Creation" from your Extra Deck
20. Selected Nerva the Power Patron of Creation (Extra Deck)
21. Yes
22. Selected Artmage Finmel (Deck)
23. Link Summon Fiendsmith's Sequence (Extra Deck)
24. select Medius the Pure (M2)
25. select Lacrima the Crimson Tears (M1)
26. Activate Fiendsmith's Sequence (EMZ-R): Fusion Summon 1 Fiend Fusion Monster
27. Selected Fiendsmith's Desirae (Extra Deck)
28. select Fiendsmith Engraver (GY)
29. select Fiendsmith's Requiem (GY)
30. select Lacrima the Crimson Tears (GY)
31. Link Summon Purification Power Patron (Extra Deck)
32. select Nerva the Power Patron of Creation (M4)
33. select Fiendsmith's Desirae (M5)
34. Yes
35. Selected Theorealize Medius (Deck)
36. Activate Theorealize Medius (hand): If a "Power Patron" card is on the field: You can Special Summon this card from your hand, then you can add 1 "Theorealize" Spell/Trap from your Deck to your hand
37. Yes
38. Selected Theorealize Past Lull (Deck)
39. Activate Purification Power Patron (M5): Link Summon including this card as material
40. Selected Medicurius the Power Patron of Illusions (Extra Deck)
41. select Fiendsmith's Sequence (EMZ-R)
42. Finish selection
43. Special Summon (procedure) Artmage Non-Finito (Extra Deck)
44. Selected Theorealize Past Lull (hand)
45. Selected Artmage Finmel (M3)
46. Yes
47. Selected Artmage Impasto -Recapture- (Deck)
48. Activate Theorealize Past Lull (GY): Special Summon 1 Fusion, Synchro, or Xyz Monster from your GY
49. Selected Fiendsmith's Desirae (GY)
50. Activate Fiendsmith's Sequence (GY): Equip this card to 1 non-Link LIGHT Fiend you control
51. Selected Fiendsmith's Desirae (M3)
52. Activate Fiendsmith's Desirae (M3): Negate the effects of face-up cards on the field
53. Selected Fiendsmith's Sequence (S2)
54. Activate Medius the Pure (GY): Shuffle 1 monster from your hand or face-up field into the Deck, and if you do, Special Summon this card
55. Selected Ash Blossom & Joyous Spring (hand)
56. Link Summon S:P Little Knight (Extra Deck)
57. select Medius the Pure (M1)
58. select Artmage Non-Finito (M5)
59. Yes
60. Special Summon 1 "Diactorus" monster
61. Activate S:P Little Knight (M5): Banish 1 card on the field or GY
62. Selected Nerva the Power Patron of Creation (GY)
63. Selected Artmage Diactorus (Extra Deck)

End board:  LP 8000 | Hand 2 | Deck 36 | Extra 8 | GY 5 | Banished 7   Monsters: M3: Fiendsmith's Desirae Lv9 2800/2400 ATK || M4: Artmage Diactorus Lv8 2800/2500 ATK || M5: S:P Little Knight L2←→ 1600  || EMZ-R: Medicurius the Power Patron of Illusions L3↙↓↘ 3000    Spell/Trap: S1: Artmage Impasto -Recapture- (Set) || S2: Fiendsmith's Sequence [NEGATED]   GY: Fiendsmith's Tract, Fiendsmith's Tract, Purification Power Patron, Artmage Finmel, Artmage Non-Finito   Banished: Theorealize Medius (face-down), Vidolium the Unstable Power Patron of Unity (face-down), Artmage Finmel (face-down), Theorealize Past Lull, Medius the Pure, Nerva the Power Patron of Creation, Theorealize Medius   Hand: Ghost Ogre & S

## Order 3: best 12.9 [margin 4.03: ss_panama 5.87, elfnote 4.2, despia -1.25, angelechy 8.9] (, worst 12.9) — from forced Activate Theorealize Liberation → new ending
Others: forced Activate Theorealize Liberation 12.75 · tries Activate Light and Darkness Ritual 12.1 · forced Activate Theorealize Liberation → new ending 11.8 · forced Activate Theorealize Liberation → new early order 11.7 · forced Synchro Summon Chaos Angel 10.6 · tries Activate Fiendsmith Engraver 10.45 · forced Activate Artmage Graflare 10.45 · forced Activate Theorealize Liberation → new ending → new early order 10.35 · forced Activate Theorealize Past Lull 10.25 · forced Activate Theorealize Liberation → new early order 9.77 · opening lanes 8.95 · tries Activate Mind Shuffle 8.2 · tries Activate Fiendsmith's Tract 8.2 · forced Activate Griffoh 8.2 · forced Activate Light and Darkness Ritual: Ritual Summon 8.2 · forced Activate Mind Shuffle 8.2 · forced Activate Fiendsmith's Sequence 8.2 · forced Special Summon (procedure) Dark Magician of Destruction 8.2 · tries Activate Light and Darkness Ritual 8.2 · forced Link Summon S:P Little Knight 8.18 · search 8 · tries Activate Plundered Power Patron Plane - Vidolia 7.5

1. Normal Summon Medius the Pure (hand)
2. Yes
3. Selected Nervedo the Shadebeast Power Patron (Deck)
4. Special Summon it
5. Activate Nervedo the Shadebeast Power Patron (M2): Special Summon 1 "Nerva the Power Patron of Creation" from your Extra Deck
6. Selected Nerva the Power Patron of Creation (Extra Deck)
7. Yes
8. Selected Artmage Finmel (Deck)
9. Link Summon Purification Power Patron (Extra Deck)
10. select Medius the Pure (M1)
11. select Nerva the Power Patron of Creation (EMZ-R)
12. Yes
13. Selected Theorealize Medius (Deck)
14. Activate Theorealize Medius (hand): If a "Power Patron" card is on the field: You can Special Summon this card from your hand, then you can add 1 "Theorealize" Spell/Trap from your Deck to your hand
15. Yes
16. Selected Theorealize Liberation (Deck)
17. Activate Medius the Pure (GY): Shuffle 1 monster from your hand or face-up field into the Deck, and if you do, Special Summon this card
18. Selected Fiendsmith Engraver (hand)
19. Activate Theorealize Liberation (hand): Add to your hand, or Special Summon, 1 monster from your Deck with 300 ATK/200 DEF
20. Activate Purification Power Patron (EMZ-L): Link Summon including this card as material
21. Selected Medicurius the Power Patron of Illusions (Extra Deck)
22. select Medius the Pure (M3)
23. Finish selection
24. Selected Griffoh (Deck)
25. Add the card(s) to your hand
26. Yes
27. Special Summon 1 "Diactorus" monster
28. Selected Artmage Diactorus (Extra Deck)
29. Activate Griffoh (hand): Activate 1 of these effects
30. Set 1 card that mentions "Light and Darkness Ritual"
31. Selected Mind Shuffle (Deck)
32. Activate Mind Shuffle (S1): activate this card
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
45. Selected Light and Darkness Ritual (GY)
46. Activate Theorealize Liberation (GY): Treat 1 monster you control as a Tuner this turn
47. Selected Artmage Diactorus (M3)
48. Special Summon (procedure) Artmage Non-Finito (Extra Deck)
49. Selected Light and Darkness Ritual (hand)
50. Selected Artmage Finmel (M4)
51. Yes
52. Selected Artmage Impasto -Recapture- (Deck)

End board:  LP 8000 | Hand 4 | Deck 32 | Extra 11 | GY 4 | Banished 7   Monsters: M1: Magician of Dark Chaos - Black Chaos Lv8 2800/2600 ATK || M2: Artmage Non-Finito Lv7 2400/1500 ATK || M3: Artmage Diactorus Lv8 2800/2500 ATK || EMZ-L: Medicurius the Power Patron of Illusions L3↙↓↘ 3000    Spell/Trap: S1: Mind Shuffle || S2: Artmage Impasto -Recapture- (Set)   GY: Nerva the Power Patron of Creation, Purification Power Patron, Light and Darkness Ritual, Artmage Finmel   Banished: Artmage Vandalism -Assault- (face-down), Prohibited Power Patron Portal - Terminus (face-down), Artmage Finmel (face-down), Medius the Pure, Theorealize Medius, Griffoh, Theorealize Liberation   Hand: Ash Blossom & Joyous Spr

## Order 4: best 11.3 [margin 3.54: ss_panama 2.59, elfnote 2.82, despia 1.17, angelechy 8.3] (, worst 11.3) — from forced Activate Theorealize Liberation → new ending
Others: forced Activate Theorealize Liberation → new ending → new early order 11.3 · forced Activate Theorealize Liberation 11.25 · forced Link Summon S:P Little Knight 11.2 · forced Synchro Summon Chaos Angel 10.6 · tries Activate Artmage Vandalism -Assault- 9.85 · opening lanes 9.75 · tries Activate Ars Magna - "Citrinitas" 9.05 · search 8.95 · forced Special Summon (procedure) Dark Magician of Destruction 8.95 · forced Activate Theorealize Past Lull 8.85 · tries Activate Ars Magna - "Citrinitas" 8.41 · tries Activate Ars Magna of Purification and Corruption 8.26 · forced Activate Artmage Graflare 8.2 · forced Activate Fiendsmith's Sequence 8.2 · forced Activate Mind Shuffle 7.91 · forced Activate Theorealize Liberation → new ending → new early order 7.91 · forced Activate Griffoh 7.5 · forced Activate Light and Darkness Ritual: Ritual Summon 7.5 · tries Activate Artmage Vandalism -Assault- 6.71 · tries Activate Prohibited Power Patron Portal - Terminus 6.06 · forced Activate Theorealize Liberation → new ending 5.63 · forced Activate Theorealize Liberation → new ending → new ending 2.8

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
11. Selected Artmage Impasto -Recapture- (Deck)
12. Link Summon Purification Power Patron (Extra Deck)
13. select Medius the Pure (M1)
14. select Artmage Non-Finito (EMZ-R)
15. Yes
16. Selected Theorealize Medius (Deck)
17. Activate Theorealize Medius (hand): If a "Power Patron" card is on the field: You can Special Summon this card from your hand, then you can add 1 "Theorealize" Spell/Trap from your Deck to your hand
18. Yes
19. Selected Theorealize Liberation (Deck)
20. Activate Medius the Pure (GY): Shuffle 1 monster from your hand or face-up field into the Deck, and if you do, Special Summon this card
21. Selected Droll & Lock Bird (hand)
22. Activate Theorealize Liberation (hand): Add to your hand, or Special Summon, 1 monster from your Deck with 300 ATK/200 DEF
23. Selected Nervedo the Shadebeast Power Patron (Deck)
24. Special Summon it
25. Activate Theorealize Liberation (GY): Treat 1 monster you control as a Tuner this turn
26. Selected Theorealize Medius (M4)
27. Activate Nervedo the Shadebeast Power Patron (M3): Special Summon 1 "Nerva the Power Patron of Creation" from your Extra Deck
28. Activate Purification Power Patron (EMZ-L): Link Summon including this card as material
29. Selected Medicurius the Power Patron of Illusions (Extra Deck)
30. select Medius the Pure (M5)
31. Finish selection
32. Selected Nerva the Power Patron of Creation (Extra Deck)
33. Yes
34. Special Summon 1 "Diactorus" monster
35. Activate Nervedo the Shadebeast Power Patron (Extra Deck): Special Summon 1 "Power Patron" or "Artmage" monster from your Deck or face-up Extra Deck
36. Selected Artmage Graflare (Deck)
37. Selected Artmage Diactorus (Extra Deck)

End board:  LP 8000 | Hand 2 | Deck 35 | Extra 11 | GY 5 | Banished 6   Monsters: M1: Artmage Graflare Lv5 2100/1500 ATK || M2: Artmage Diactorus Lv8 2800/2500 ATK || M3: Nerva the Power Patron of Creation Lv10 3300/3300 ATK || EMZ-L: Medicurius the Power Patron of Illusions L3↙↓↘ 3000    Spell/Trap: S1: Artmage Impasto -Recapture- (Set)   GY: Fiendsmith Engraver, Fiendsmith's Tract, Nervedo the Shadebeast Power Patron, Artmage Non-Finito, Purification Power Patron   Banished: Theorealize Liberation, Vidolium the Unstable Power Patron of Unity (face-down), Pendulum Treasure (face-down), Mind Shuffle (face-down), Medius the Pure, Theorealize Medius   Hand: Ash Blossom & Joyous Spring, Ghost Ogre & Snow 

## Order 5: best 13.7 [margin 4.65: ss_panama 5.9, elfnote 4.21, despia -0.62, angelechy 9.65] (, worst 13.7) — from tries Activate Junoldo the Shadespirit Power Patron → new ending
Others: tries Activate Junoldo the Shadespirit Power Patron → new ending → new ending 13.7 · tries Activate Junoldo the Shadespirit Power Patron 12.8 · forced Special Summon (procedure) Dark Magician of Destruction 12.1 · forced Activate Theorealize Past Lull 12 · forced Activate Theorealize Liberation 11.8 · tries Activate Pendulum Treasure 11.8 · forced Link Summon S:P Little Knight 11.3 · search 9.05 · tries Activate Junoldo the Shadespirit Power Patron → new ending → new ending 9.05 · forced Activate Light and Darkness Ritual: Ritual Summon 8.95 · tries Activate Fiendsmith's Desirae 8.95 · tries Activate Fiendsmith's Sequence 8.2 · tries Activate Fiendsmith's Sequence 8.2 · forced Activate Griffoh 8.2 · forced Activate Mind Shuffle 8.2 · forced Activate Fiendsmith's Sequence 8.2 · opening lanes 8.2 · forced Activate Artmage Graflare 8.2 · tries Activate Junoldo the Shadespirit Power Patron → new ending → new early order 8.2 · forced Synchro Summon Chaos Angel 7.7 · tries Activate Vidolium the Unstable Power Patron of Unity 7.2 · tries Activate Junoldo the Shadespirit Power Patron → new ending → new early order 6.06 · tries Activate Junoldo the Shadespirit Power Patron → new ending → new early order 6.06

1. Activate Fiendsmith Engraver (hand): Add 1 "Fiendsmith" Spell/Trap from your Deck to your hand
2. Selected Fiendsmith's Tract (Deck)
3. Activate Fiendsmith's Tract (hand): Add 1 LIGHT Fiend monster from your Deck to your hand
4. Selected Lacrima the Crimson Tears (Deck)
5. Selected Lacrima the Crimson Tears (hand)
6. Activate Fiendsmith Engraver (GY): Special Summon this card
7. Selected Lacrima the Crimson Tears (GY)
8. Link Summon Fiendsmith's Requiem (Extra Deck)
9. select Fiendsmith Engraver (M4)
10. Activate Fiendsmith's Requiem (EMZ-L): Special Summon 1 "Fiendsmith" monster
11. Selected Fiendsmith Engraver (Deck)
12. Normal Summon Medius the Pure (hand)
13. Yes
14. Selected Nervedo the Shadebeast Power Patron (Deck)
15. Special Summon it
16. Link Summon Fiendsmith's Sequence (Extra Deck)
17. select Medius the Pure (M1)
18. select Fiendsmith Engraver (M4)
19. Activate Fiendsmith's Sequence (EMZ-L): Fusion Summon 1 Fiend Fusion Monster
20. Selected Fiendsmith's Desirae (Extra Deck)
21. select Fiendsmith Engraver (GY)
22. select Fiendsmith's Requiem (GY)
23. select Fiendsmith Engraver (GY)
24. Activate Nervedo the Shadebeast Power Patron (M3): Special Summon 1 "Nerva the Power Patron of Creation" from your Extra Deck
25. Selected Nerva the Power Patron of Creation (Extra Deck)
26. Yes
27. Selected Junoldo the Shadespirit Power Patron (Deck)
28. Activate Junoldo the Shadespirit Power Patron (M2): Special Summon 1 "Junora the Power Patron of Tuning" from your Extra Deck
29. Selected Junora the Power Patron of Tuning (Extra Deck)
30. Yes
31. Selected Nervedo the Shadebeast Power Patron (Extra Deck)
32. Link Summon Purification Power Patron (Extra Deck)
33. select Fiendsmith's Desirae (M1)
34. select Junora the Power Patron of Tuning (M5)
35. Yes
36. Selected Theorealize Medius (Deck)
37. Activate Theorealize Medius (hand): If a "Power Patron" card is on the field: You can Special Summon this card from your hand, then you can add 1 "Theorealize" Spell/Trap from your Deck to your hand
38. Yes
39. Selected Theorealize Past Lull (Deck)
40. Special Summon (procedure) Artmage Non-Finito (Extra Deck)
41. Selected Theorealize Past Lull (hand)
42. Selected Nervedo the Shadebeast Power Patron (hand)
43. Yes
44. Selected Artmage Impasto -Recapture- (Deck)
45. Activate Medius the Pure (GY): Shuffle 1 monster from your hand or face-up field into the Deck, and if you do, Special Summon this card
46. Selected Purification Power Patron (M1)
47. Link Summon Medicurius the Power Patron of Illusions (Extra Deck)
48. select Medius the Pure (M3)
49. select Fiendsmith's Sequence (EMZ-L)
50. Finish selection
51. Yes
52. Special Summon 1 "Diactorus" monster
53. Selected Artmage Diactorus (Extra Deck)
54. Activate Artmage Diactorus (M1): Change the battle position of 1 monster on the field
55. Selected Artmage Diactorus (M1)
56. Activate Theorealize Past Lull (GY): Special Summon 1 Fusion, Synchro, or Xyz Monster from your GY
57. Selected Fiendsmith's Desirae (GY)
58. Activate Fiendsmith's Sequence (GY): Equip this card to 1 non-Link LIGHT Fiend you control
59. Selected Fiendsmith's Desirae (M3)

End board:  LP 8000 | Hand 3 | Deck 33 | Extra 9 | GY 3 | Banished 9   Monsters: M1: Artmage Diactorus Lv8 2800/2500 DEF || M3: Fiendsmith's Desirae Lv9 2800/2400 ATK || M4: Nerva the Power Patron of Creation Lv10 3300/3300 ATK || M5: Artmage Non-Finito Lv7 2400/1500 ATK || EMZ-R: Medicurius the Power Patron of Illusions L3↙↓↘ 3000    Spell/Trap: S1: Artmage Impasto -Recapture- (Set) || S2: Fiendsmith's Sequence   GY: Fiendsmith's Tract, Junora the Power Patron of Tuning, Nervedo the Shadebeast Power Patron   Banished: Pendulum Treasure (face-down), Griffoh (face-down), Plundered Power Patron Plane - Vidolia (face-down), Magician of Dark Chaos - Black Chaos (face-down), Black Luster Soldier - Soldier o

## Order 6: best 12.85 (, worst 12.85) — from tries Activate Junoldo the Shadespirit Power Patron → new ending
Others: tries Activate Junoldo the Shadespirit Power Patron 12.25 · tries Activate Junoldo the Shadespirit Power Patron → new ending 12.25 · forced Activate Mind Shuffle 11.7 · forced Activate Theorealize Past Lull 11.7 · forced Special Summon (procedure) Dark Magician of Destruction 11.3 · forced Activate Theorealize Liberation 11.3 · tries Activate Medius the Pure 10.45 · tries Activate Junoldo the Shadespirit Power Patron → new early order 10.45 · tries Activate Ars Magna of Purification and Corruption 8.41 · search 8.2 · opening lanes 8.2 · forced Activate Light and Darkness Ritual: Ritual Summon 8.2 · forced Synchro Summon Chaos Angel 8.2 · forced Activate Artmage Graflare 8.2 · forced Activate Fiendsmith's Sequence 8.2 · forced Activate Griffoh 8.2 · tries Activate Small World 8.2 · tries Activate Junoldo the Shadespirit Power Patron → new ending → new early order 8.2 · forced Link Summon S:P Little Knight 8.18 · tries Special Summon (procedure) Vidolium the Unstable Power Patron of Unity 8 · tries Normal Summon Fiendsmith Engraver 7.7 · tries Activate Junoldo the Shadespirit Power Patron → new ending → new early order 7.2

1. Activate Fiendsmith Engraver (hand): Add 1 "Fiendsmith" Spell/Trap from your Deck to your hand
2. Selected Fiendsmith's Tract (Deck)
3. Set Spell/Trap Fiendsmith's Tract
4. Activate Fiendsmith's Tract (S1): Add 1 LIGHT Fiend monster from your Deck to your hand
5. Selected Lacrima the Crimson Tears (Deck)
6. Selected Lacrima the Crimson Tears (hand)
7. Activate Fiendsmith Engraver (GY): Special Summon this card
8. Selected Lacrima the Crimson Tears (GY)
9. Link Summon Fiendsmith's Requiem (Extra Deck)
10. select Fiendsmith Engraver (M4)
11. Activate Fiendsmith's Requiem (EMZ-R): Special Summon 1 "Fiendsmith" monster
12. Selected Lacrima the Crimson Tears (Deck)
13. Yes
14. Selected Fiendsmith Engraver (Deck)
15. Activate Fiendsmith's Requiem (GY): Equip this card to 1 non-Link LIGHT Fiend you control
16. Selected Lacrima the Crimson Tears (M3)
17. Normal Summon Medius the Pure (hand)
18. Yes
19. Selected Junoldo the Shadespirit Power Patron (Deck)
20. #573
21. Activate Junoldo the Shadespirit Power Patron (hand): #1160
22. Link Summon Fiendsmith's Sequence (Extra Deck)
23. select Medius the Pure (M1)
24. select Lacrima the Crimson Tears (M3)
25. Activate Fiendsmith's Sequence (EMZ-R): Fusion Summon 1 Fiend Fusion Monster
26. Selected Fiendsmith's Desirae (Extra Deck)
27. select Lacrima the Crimson Tears (GY)
28. select Fiendsmith's Requiem (GY)
29. select Fiendsmith Engraver (GY)
30. Link Summon Medicurius the Power Patron of Illusions (Extra Deck)
31. select Fiendsmith's Sequence (EMZ-R)
32. select Fiendsmith's Desirae (M5)
33. No
34. Yes
35. Selected Nervedo the Shadebeast Power Patron (hand)
36. No
37. Activate Vidolium the Unstable Power Patron of Unity (hand): #1160
38. Activate Vidolium the Unstable Power Patron of Unity (S1): Activate 1 of these effects
39. Special Summon 1 "Power Patron" monster
40. Selected Nervedo the Shadebeast Power Patron (GY)
41. Yes
42. Selected Theorealize Medius (Deck)
43. Activate Theorealize Medius (hand): If a "Power Patron" card is on the field: You can Special Summon this card from your hand, then you can add 1 "Theorealize" Spell/Trap from your Deck to your hand
44. Yes
45. Selected Theorealize Past Lull (Deck)
46. Special Summon (procedure) Artmage Non-Finito (Extra Deck)
47. Selected Theorealize Past Lull (hand)
48. Selected Nervedo the Shadebeast Power Patron (M1)
49. Yes
50. Activate Artmage Non-Finito (M3): Set 1 "Artmage" Spell/Trap from your Deck
51. Selected Ars Magna - "Citrinitas" (Deck)
52. Selected Artmage Graflare (Deck)
53. Activate Theorealize Past Lull (GY): Special Summon 1 Fusion, Synchro, or Xyz Monster from your GY
54. Selected Fiendsmith's Desirae (GY)
55. Activate Fiendsmith's Sequence (GY): Equip this card to 1 non-Link LIGHT Fiend you control
56. Selected Fiendsmith's Desirae (M5)
57. Activate Ars Magna - "Citrinitas" (S1): activate this card
58. Activate Ars Magna - "Citrinitas" (S1): Add 1 "Medius" or "Ars Magna" monster from your Deck to your hand
59. Activate Fiendsmith's Desirae (M5): Negate the effects of face-up cards on the field
60. Selected Fiendsmith's Desirae (M5)
61. Selected Ars Magna of Infinity and Finity (Deck)
62. Activate Ars Magna of Infinity and Finity (hand): You can banish this card from your hand; add 1 non-Warrior "Ars Magna" monster from your Deck to your hand
63. Selected Ars Magna of Purification and Corruption (Deck)
64. Yes
65. Special Summon 1 "Diactorus" monster
66. Selected Artmage Diactorus (Extra Deck)
67. Yes

End board:  LP 8000 | Hand 4 | Deck 34 | Extra 13 | GY 3 | Banished 2   Monsters: M1: Artmage Diactorus Lv8 2800/2500 ATK || M2: Ars Magna of Infinity and Finity Lv8 1000/2400 ATK || M3: Artmage Non-Finito Lv7 2400/1500 ATK || M4: Artmage Graflare Lv5 2100/1500 ATK || M5: Fiendsmith's Desirae Lv9 2800/2400 ATK [NEGATED] || EMZ-R: Medicurius the Power Patron of Illusions L3↙↓↘ 9000    Spell/Trap: S1: Ars Magna - "Citrinitas" || S2: Fiendsmith's Sequence   GY: Fiendsmith's Tract, Fiendsmith Engraver, Medius the Pure   Banished: Theorealize Past Lull, Theorealize Medius   Hand: Ghost Ogre & Snow Rabbit, Ars Magna of Purification and Corruption, Ash Blossom & Joyous Spring, Droll & Lock Bird   Extra Deck: 

## Order 7: best 12 [margin 4.22: ss_panama 6.12, elfnote 0.68, despia 2.65, angelechy 8.05] (, worst 12) — from forced Special Summon (procedure) Dark Magician of Destruction
Others: forced Activate Theorealize Liberation 10.75 · forced Activate Light and Darkness Ritual: Ritual Summon 10.45 · tries Activate Fiendsmith Engraver 9.45 · forced Activate Fiendsmith's Sequence 8.95 · search 8.33 · tries Activate Fiendsmith's Tract 8.2 · tries Link Summon Fiendsmith's Requiem 8.2 · forced Activate Mind Shuffle 8.2 · forced Activate Artmage Graflare 8.2 · forced Synchro Summon Chaos Angel 8.2 · opening lanes 8.2 · tries Activate Fiendsmith's Requiem 8.2 · tries Activate Junoldo the Shadespirit Power Patron 8.2 · forced Link Summon S:P Little Knight 8.18 · forced Activate Griffoh 7.5 · forced Activate Theorealize Past Lull 7.5 · tries Activate Vidolium the Unstable Power Patron of Unity 7.2

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
13. Link Summon Purification Power Patron (Extra Deck)
14. select Medius the Pure (M4)
15. select Junora the Power Patron of Tuning (EMZ-R)
16. Yes
17. Selected Theorealize Medius (Deck)
18. Activate Medius the Pure (GY): Shuffle 1 monster from your hand or face-up field into the Deck, and if you do, Special Summon this card
19. Selected Fiendsmith Engraver (hand)
20. Activate Theorealize Medius (hand): If a "Power Patron" card is on the field: You can Special Summon this card from your hand, then you can add 1 "Theorealize" Spell/Trap from your Deck to your hand
21. Yes
22. Selected Theorealize Past Lull (Deck)
23. Special Summon (procedure) Artmage Non-Finito (Extra Deck)
24. Selected Theorealize Past Lull (hand)
25. Selected Nervedo the Shadebeast Power Patron (hand)
26. Yes
27. Activate Purification Power Patron (EMZ-L): Link Summon including this card as material
28. Selected Medicurius the Power Patron of Illusions (Extra Deck)
29. select Medius the Pure (M2)
30. Finish selection
31. Selected Artmage Impasto -Recapture- (Deck)
32. Yes
33. Special Summon 1 "Diactorus" monster
34. Selected Artmage Diactorus (Extra Deck)
35. Activate Theorealize Past Lull (GY): Special Summon 1 Fusion, Synchro, or Xyz Monster from your GY
36. Selected Junora the Power Patron of Tuning (GY)

End board:  LP 8000 | Hand 3 | Deck 34 | Extra 10 | GY 2 | Banished 9   Monsters: M1: Artmage Non-Finito Lv7 2400/1500 ATK || M2: Junora the Power Patron of Tuning Lv10 3100/3800 ATK || M3: Nerva the Power Patron of Creation Lv10 3300/3300 ATK || M4: Artmage Diactorus Lv8 2800/2500 DEF || EMZ-L: Medicurius the Power Patron of Illusions L3↙↓↘ 3000    Spell/Trap: S1: Artmage Impasto -Recapture- (Set)   GY: Nervedo the Shadebeast Power Patron, Purification Power Patron   Banished: Black Chaos (face-down), Nervedo the Shadebeast Power Patron (face-down), Pendulum Treasure (face-down), Fiendsmith's Tract (face-down), Magician of Dark Chaos - Black Chaos (face-down), Lacrima the Crimson Tears (face-down), Me

## Order 8: best 13.3 [margin 5.81: ss_panama 2.51, elfnote 7.83, despia 0.53, angelechy 10.2] (, worst 13.3) — from tries Normal Summon Lacrima the Crimson Tears → new early order
Others: tries Normal Summon Lacrima the Crimson Tears → new early order → new early order 11.8 · tries Normal Summon Lacrima the Crimson Tears 11.7 · tries Normal Summon Lacrima the Crimson Tears → new ending 11.7 · tries Normal Summon Lacrima the Crimson Tears → new ending 11 · tries Normal Summon Lacrima the Crimson Tears → new early order → new ending 11 · tries Normal Summon Lacrima the Crimson Tears → new early order 10.95 · forced Synchro Summon Chaos Angel 9.8 · forced Activate Griffoh 9.45 · forced Link Summon S:P Little Knight 9.28 · forced Activate Theorealize Past Lull 9.05 · forced Activate Light and Darkness Ritual: Ritual Summon 8.95 · search 8.2 · forced Activate Mind Shuffle 8.2 · forced Activate Theorealize Liberation 8.2 · tries Activate Mind Shuffle 8.2 · tries Activate Black Chaos 8.2 · forced Activate Artmage Graflare 8.2 · opening lanes 8.18 · tries Special Summon (procedure) Artmage Non-Finito 7.5 · tries Normal Summon Theorealize Medius 7.5 · forced Special Summon (procedure) Dark Magician of Destruction 7.5 · forced Activate Fiendsmith's Sequence 6.41 · tries Activate Prohibited Power Patron Portal - Terminus 6.06

1. Activate Fiendsmith Engraver (hand): Add 1 "Fiendsmith" Spell/Trap from your Deck to your hand
2. Selected Fiendsmith's Tract (Deck)
3. Activate Fiendsmith's Tract (hand): Add 1 LIGHT Fiend monster from your Deck to your hand
4. Selected Lacrima the Crimson Tears (Deck)
5. Selected Medius the Pure (hand)
6. Normal Summon Lacrima the Crimson Tears (hand)
7. Yes
8. Selected Fiendsmith Engraver (Deck)
9. Link Summon Fiendsmith's Requiem (Extra Deck)
10. select Lacrima the Crimson Tears (M3)
11. Activate Fiendsmith Engraver (GY): Special Summon this card
12. Selected Fiendsmith Engraver (GY)
13. Activate Fiendsmith's Requiem (EMZ-R): Special Summon 1 "Fiendsmith" monster
14. Selected Fiendsmith Engraver (Deck)
15. Link Summon Fiendsmith's Sequence (Extra Deck)
16. select Fiendsmith Engraver (M1)
17. select Fiendsmith Engraver (M2)
18. Activate Medius the Pure (GY): Shuffle 1 monster from your hand or face-up field into the Deck, and if you do, Special Summon this card
19. Selected Ghost Ogre & Snow Rabbit (hand)
20. Yes
21. Selected Nervedo the Shadebeast Power Patron (Deck)
22. Special Summon it
23. Activate Nervedo the Shadebeast Power Patron (M3): Special Summon 1 "Nerva the Power Patron of Creation" from your Extra Deck
24. Selected Nerva the Power Patron of Creation (Extra Deck)
25. Yes
26. Selected Junoldo the Shadespirit Power Patron (Deck)
27. Activate Junoldo the Shadespirit Power Patron (M4): Special Summon 1 "Junora the Power Patron of Tuning" from your Extra Deck
28. Selected Junora the Power Patron of Tuning (Extra Deck)
29. Yes
30. Selected Nervedo the Shadebeast Power Patron (Extra Deck)
31. Activate Fiendsmith's Sequence (EMZ-L): Fusion Summon 1 Fiend Fusion Monster
32. Selected Fiendsmith's Desirae (Extra Deck)
33. select Lacrima the Crimson Tears (GY)
34. select Fiendsmith Engraver (GY)
35. select Fiendsmith Engraver (GY)
36. Activate Fiendsmith's Requiem (GY): Equip this card to 1 non-Link LIGHT Fiend you control
37. Selected Fiendsmith's Desirae (M4)
38. Activate Fiendsmith's Desirae (M4): Negate the effects of face-up cards on the field
39. Selected Fiendsmith's Requiem (S1)
40. Link Summon Purification Power Patron (Extra Deck)
41. select Junora the Power Patron of Tuning (M3)
42. select Medius the Pure (M2)
43. Yes
44. Selected Theorealize Medius (Deck)
45. Activate Theorealize Medius (hand): If a "Power Patron" card is on the field: You can Special Summon this card from your hand, then you can add 1 "Theorealize" Spell/Trap from your Deck to your hand
46. Yes
47. Selected Theorealize Past Lull (Deck)
48. Special Summon (procedure) Artmage Non-Finito (Extra Deck)
49. Selected Theorealize Past Lull (hand)
50. Selected Nervedo the Shadebeast Power Patron (hand)
51. Yes
52. Activate Purification Power Patron (M3): Link Summon including this card as material
53. Selected S:P Little Knight (Extra Deck)
54. select Artmage Non-Finito (M2)
55. Selected Artmage Impasto -Recapture- (Deck)
56. Yes
57. Selected Purification Power Patron (GY)
58. Yes
59. Special Summon 1 "Diactorus" monster
60. Selected Artmage Diactorus (Extra Deck)
61. Activate Theorealize Past Lull (GY): Special Summon 1 Fusion, Synchro, or Xyz Monster from your GY
62. Selected Junora the Power Patron of Tuning (GY)
63. Activate Artmage Diactorus (M5): Change the battle position of 1 monster on the field
64. Selected Junora the Power Patron of Tuning (M2)
65. Link Summon Medicurius the Power Patron of Illusions (Extra Deck)
66. select Fiendsmith's Sequence (EMZ-L)
67. select Junora the Power Patron of Tuning (M2)
68. Finish selection
69. Activate Fiendsmith's Sequence (GY): Equip this card to 1 non-Link LIGHT Fiend you control
70. Selected Fiendsmith's Desirae (M4)

End board:  LP 8000 | Hand 2 | Deck 34 | Extra 6 | GY 4 | Banished 10   Monsters: M1: Nerva the Power Patron of Creation Lv10 3300/3300 ATK || M3: S:P Little Knight L2←→ 1600  || M4: Fiendsmith's Desirae Lv9 2800/2400 ATK || M5: Artmage Diactorus Lv8 2800/2500 ATK || EMZ-R: Medicurius the Power Patron of Illusions L3↙↓↘ 3000    Spell/Trap: S1: Fiendsmith's Requiem [NEGATED] || S2: Artmage Impasto -Recapture- (Set) || S3: Fiendsmith's Sequence   GY: Fiendsmith's Tract, Nervedo the Shadebeast Power Patron, Artmage Non-Finito, Junora the Power Patron of Tuning   Banished: Black Chaos (face-down), Skull Archfiend of Chaos (face-down), Mind Shuffle (face-down), Griffoh (face-down), Ars Magna of Purification

