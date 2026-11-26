# Evolved lines — Small World, Ash Blossom & Joyous Spring, Ash Blossom & Joyous Spring, Droll & Lock Bird, Ghost Ogre & Snow Rabbit (findlist-1100)
2026-11-26T01:26:47.138Z

8 deck orders (different face-down banishes / draws), 3 opponent hands x o_ss_panama + o_elfnote + o_despia + o_angelechy per line, 5 min searches, 6 mutation rounds.
Fitness = end-board interruptions (the lab scorer, src/disrupt.mjs: wipe 2, negate 1-1.5, banish/protection less; hand traps kept count 1 each). The winner of each order is also played into the opponent decks: margin after their turn shown beside it.

**Margin after their turn (winners): average 3.78** (worst -4.15)

**Best line per deck order: average 11.31** (worst order 8.41). Winner came from: forced Activate Theorealize Liberation → new early order 2, tries Activate Ars Magna of Purification and Corruption → new ending 1, search 1, tries Activate Ars Magna - "Citrinitas" → new early order 1, tries Activate Ars Magna of Infinity and Finity → new ending 1, tries Normal Summon Medius the Pure → new ending 1, tries Normal Summon Medius the Pure 1

## Weak points found automatically
Cards whose face-down banish (by your own costs) hurt the best line most (average best line without vs with that card banished):

| card | orders where it was banished | drop |
|---|---|---|
| Junoldo the Shadespirit Power Patron | 2/8 | 1.57 |
| Theorealize Liberation | 2/8 | 1.46 |
| Magician of Dark Chaos - Black Chaos | 6/8 | 0.19 |
| Vidolium the Unstable Power Patron of Unity | 3/8 | 0.04 |
| Lacrima the Crimson Tears | 2/8 | -0.19 |
| Light and Darkness Ritual | 2/8 | -0.22 |
| Prohibited Power Patron Portal - Terminus | 4/8 | -0.43 |
| Dark Magical Circle | 2/8 | -0.55 |
| Fiendsmith Engraver | 5/8 | -0.62 |
| Plundered Power Patron Plane - Vidolia | 2/8 | -0.66 |

List changes proposed for the list test (data/proposals-findlist-1100.json):
- +1 Junoldo the Shadespirit Power Patron, −1 Plundered Power Patron Plane - Vidolia — Junoldo the Shadespirit Power Patron: best line 1.57 worse when a cost banished it (2 of 8 orders) — Small World
- +1 Theorealize Liberation, −1 Artmage Vandalism -Assault- — Theorealize Liberation: best line 1.46 worse when a cost banished it (2 of 8 orders) — Small World
- +1 Junoldo the Shadespirit Power Patron — Junoldo the Shadespirit Power Patron: best line 1.57 worse when a cost banished it (2 of 8 orders) — Small World (add only: deck grows, up to 60)
- +1 Theorealize Liberation — Theorealize Liberation: best line 1.46 worse when a cost banished it (2 of 8 orders) — Small World (add only: deck grows, up to 60)

Effects the search had not used, tried on purpose (best result so far):
- Activate Ars Magna - "Citrinitas": 11.45
- Normal Summon Medius the Pure: 11.1
- Activate Ars Magna of Infinity and Finity: 11.1
- Activate Prohibited Power Patron Portal - Terminus: 10.65
- Activate Nervedo the Shadebeast Power Patron: 10.45
- Activate Vidolium the Unstable Power Patron of Unity: 10.45
- Activate Ars Magna of Purification and Corruption: 10.35
- Activate Vidolium the Unstable Power Patron of Unity: 9.45

## Order 1: best 10.39 [margin 4.89: ss_panama null, elfnote 1.67, despia 4.11, angelechy 6.49] (, worst 10.39) — from forced Activate Theorealize Liberation → new early order
Others: forced Activate Theorealize Liberation → new early order → new ending 10.39 · forced Activate Theorealize Liberation 9.57 · forced Activate Theorealize Liberation → new ending 9.57 · search 5.91 · tries Activate Fiendsmith's Requiem 5.91 · opening lanes 5.91 · tries Normal Summon Theorealize Medius 5.91 · forced Activate Artmage Graflare 5.91 · forced Activate Theorealize Past Lull 5.91 · forced Activate Fiendsmith's Sequence 5.91 · forced Special Summon (procedure) Dark Magician of Destruction 5.91 · forced Activate Light and Darkness Ritual: Ritual Summon 5.91 · forced Activate Theorealize Liberation → new early order → new ending 5.9 · tries Activate Black Chaos 4.8 · tries Activate Mind Shuffle 4.8 · forced Activate Griffoh 4.8 · forced Activate Mind Shuffle 4.8 · tries Normal Summon Griffoh 4.65 · forced Link Summon S:P Little Knight 4.2 · tries Normal Summon Apprentice Illusion Magician 4.05 · forced Activate Theorealize Liberation → new early order → new early order 3.6 · forced Synchro Summon Chaos Angel 3.55 · forced Activate Theorealize Liberation → new early order → new early order 2.55

1. Activate Small World (hand): activate this card
2. Selected Ghost Ogre & Snow Rabbit (hand)
3. Selected Lacrima the Crimson Tears (Deck)
4. Selected Medius the Pure (Deck)
5. Normal Summon Medius the Pure (hand)
6. Yes
7. Selected Nervedo the Shadebeast Power Patron (Deck)
8. Special Summon it
9. Activate Nervedo the Shadebeast Power Patron (M1): Special Summon 1 "Nerva the Power Patron of Creation" from your Extra Deck
10. Selected Nerva the Power Patron of Creation (Extra Deck)
11. Yes
12. Selected Artmage Graflare (Deck)
13. Link Summon Purification Power Patron (Extra Deck)
14. select Nerva the Power Patron of Creation (M4)
15. select Medius the Pure (M3)
16. Yes
17. Selected Theorealize Medius (Deck)
18. Activate Medius the Pure (GY): Shuffle 1 monster from your hand or face-up field into the Deck, and if you do, Special Summon this card
19. Selected Ash Blossom & Joyous Spring (hand)
20. Activate Theorealize Medius (hand): If a "Power Patron" card is on the field: You can Special Summon this card from your hand, then you can add 1 "Theorealize" Spell/Trap from your Deck to your hand
21. Yes
22. Selected Theorealize Liberation (Deck)
23. Activate Theorealize Liberation (hand): Add to your hand, or Special Summon, 1 monster from your Deck with 300 ATK/200 DEF
24. Selected Griffoh (Deck)
25. Add the card(s) to your hand
26. Activate Griffoh (hand): Activate 1 of these effects
27. Set 1 card that mentions "Light and Darkness Ritual"
28. Activate Purification Power Patron (EMZ-R): Link Summon including this card as material
29. Selected Medicurius the Power Patron of Illusions (Extra Deck)
30. select Medius the Pure (M3)
31. Finish selection
32. Selected Mind Shuffle (Deck)
33. Yes
34. Special Summon 1 "Diactorus" monster
35. Activate Mind Shuffle (S1): activate this card
36. No
37. Selected Artmage Diactorus (Extra Deck)
38. Activate Mind Shuffle (S1): Add 1 appropriate monster to your hand
39. Selected Skull Archfiend of Chaos (Deck)
40. Selected Skull Archfiend of Chaos (hand)
41. Yes
42. Selected Light and Darkness Ritual (Deck)
43. Selected Magician of Dark Chaos - Black Chaos (Deck)
44. Activate Light and Darkness Ritual (GY): Add both this card and 1 card that mentions "Light and Darkness Ritual" from your GY to your hand
45. Selected Skull Archfiend of Chaos (GY)
46. Set Spell/Trap Light and Darkness Ritual
47. Activate Theorealize Liberation (GY): Treat 1 monster you control as a Tuner this turn
48. Selected Medicurius the Power Patron of Illusions (EMZ-L)
49. Activate Light and Darkness Ritual (S2): Ritual Summon 1 "Magician of Dark Chaos - Black Chaos" or "Black Luster Soldier - Soldier of Light and Darkness" from your hand
50. Selected Magician of Dark Chaos - Black Chaos (hand)
51. Selected Griffoh (GY) value 8 or 1
52. Yes
53. Selected Small World (GY)
54. Special Summon (procedure) Artmage Non-Finito (Extra Deck)
55. Selected Small World (hand)
56. Selected Artmage Diactorus (M2)
57. Yes
58. Selected Artmage Impasto -Recapture- (Deck)

End board:  LP 8000 | Hand 3 | Deck 30 | Extra 11 | GY 5 | Banished 9   Monsters: M1: Artmage Graflare Lv5 2100/1500 ATK || M2: Artmage Non-Finito Lv7 2400/1500 ATK || M3: Magician of Dark Chaos - Black Chaos Lv8 2800/2600 ATK || EMZ-L: Medicurius the Power Patron of Illusions L3↙↓↘ 3000    Spell/Trap: S1: Mind Shuffle || S2: Artmage Impasto -Recapture- (Set)   GY: Nerva the Power Patron of Creation, Purification Power Patron, Light and Darkness Ritual, Small World, Artmage Diactorus   Banished: Ghost Ogre & Snow Rabbit (face-down), Lacrima the Crimson Tears (face-down), Artmage Finmel (face-down), Fiendsmith Engraver (face-down), Vidolium the Unstable Power Patron of Unity (face-down), Medius the Pure

## Order 2: best 12.5 [margin 5.19: ss_panama -0.35, elfnote 3.83, despia 2.94, angelechy 9.45] (, worst 12.5) — from tries Activate Ars Magna of Purification and Corruption → new ending
Others: tries Activate Ars Magna of Purification and Corruption → new ending → new ending 12.5 · tries Activate Ars Magna of Purification and Corruption → new ending → new ending 12.5 · tries Activate Ars Magna of Purification and Corruption → new ending → new early order 10.45 · tries Activate Ars Magna of Purification and Corruption 10.35 · forced Link Summon S:P Little Knight 7.97 · tries Activate Plundered Power Patron Plane - Vidolia 6.13 · search 5.91 · opening lanes 5.91 · forced Activate Artmage Graflare 5.91 · forced Activate Theorealize Liberation 5.91 · forced Activate Fiendsmith's Sequence 5.91 · forced Activate Theorealize Past Lull 5.91 · tries Activate Theorealize Past Lull 5.91 · tries Activate Theorealize Liberation 5.91 · tries Special Summon (procedure) Artmage Non-Finito 5.91 · forced Activate Light and Darkness Ritual: Ritual Summon 5.91 · tries Activate Theorealize Liberation 5.91 · forced Activate Griffoh 4.8 · forced Activate Mind Shuffle 4.8 · forced Special Summon (procedure) Dark Magician of Destruction 4.33 · forced Synchro Summon Chaos Angel 3.55 · tries Activate Ars Magna of Purification and Corruption → new ending → new early order 2.55 · tries Activate Ars Magna of Purification and Corruption → new ending → new early order 2.55

1. Set Spell/Trap Small World
2. Activate Small World (S1): activate this card
3. Selected Ghost Ogre & Snow Rabbit (hand)
4. Selected Artmage Graflare (Deck)
5. Selected Ars Magna of Purification and Corruption (Deck)
6. Activate Ars Magna of Purification and Corruption (hand): You can banish this card from your hand; add 1 "Ars Magna" Spell/Trap from your Deck to your hand
7. Selected Ars Magna - "Citrinitas" (Deck)
8. Set Spell/Trap Ars Magna - "Citrinitas"
9. Activate Ars Magna - "Citrinitas" (S1): activate this card
10. Activate Ars Magna - "Citrinitas" (S1): Add 1 "Medius" or "Ars Magna" monster from your Deck to your hand
11. Selected Medius the Pure (Deck)
12. Normal Summon Medius the Pure (hand)
13. Yes
14. Selected Nervedo the Shadebeast Power Patron (Deck)
15. Special Summon it
16. Activate Nervedo the Shadebeast Power Patron (M4): Special Summon 1 "Nerva the Power Patron of Creation" from your Extra Deck
17. Selected Nerva the Power Patron of Creation (Extra Deck)
18. Yes
19. Selected Artmage Finmel (Deck)
20. Link Summon Purification Power Patron (Extra Deck)
21. select Medius the Pure (M3)
22. select Nerva the Power Patron of Creation (M4)
23. Activate Ars Magna of Purification and Corruption (banishment): Special Summon this card
24. Activate Purification Power Patron (EMZ-R): Add 1 "Theorealize" card from your Deck to your hand
25. Selected Theorealize Medius (Deck)
26. Activate Ars Magna of Purification and Corruption (M4): Banish Spells/Traps on the field
27. Selected Ars Magna - "Citrinitas" (S1)
28. Activate Theorealize Medius (hand): If a "Power Patron" card is on the field: You can Special Summon this card from your hand, then you can add 1 "Theorealize" Spell/Trap from your Deck to your hand
29. Yes
30. Selected Theorealize Liberation (Deck)
31. Activate Medius the Pure (GY): Shuffle 1 monster from your hand or face-up field into the Deck, and if you do, Special Summon this card
32. Selected Ash Blossom & Joyous Spring (hand)
33. Activate Theorealize Liberation (hand): Add to your hand, or Special Summon, 1 monster from your Deck with 300 ATK/200 DEF
34. Selected Griffoh (Deck)
35. Add the card(s) to your hand
36. Activate Purification Power Patron (EMZ-R): Link Summon including this card as material
37. Selected Medicurius the Power Patron of Illusions (Extra Deck)
38. select Medius the Pure (M2)
39. Finish selection
40. Yes
41. Special Summon 1 "Diactorus" monster
42. Selected Artmage Diactorus (Extra Deck)
43. Activate Griffoh (hand): Activate 1 of these effects
44. Set 1 card that mentions "Light and Darkness Ritual"
45. Selected Mind Shuffle (Deck)
46. Activate Mind Shuffle (S1): activate this card
47. No
48. Activate Mind Shuffle (S1): Add 1 appropriate monster to your hand
49. Selected Skull Archfiend of Chaos (Deck)
50. Selected Skull Archfiend of Chaos (hand)
51. No
52. Activate Skull Archfiend of Chaos (GY): Special Summon this card
53. select Purification Power Patron (GY)
54. select Griffoh (GY)
55. select Theorealize Liberation (GY)
56. Default order
57. Activate Artmage Diactorus (M5): Change the battle position of 1 monster on the field
58. Selected Ars Magna of Purification and Corruption (M4)
59. Link Summon S:P Little Knight (Extra Deck)
60. select Skull Archfiend of Chaos (M2)
61. select Ars Magna of Purification and Corruption (M4)
62. Yes
63. Selected Light and Darkness Ritual (Deck)
64. Selected Magician of Dark Chaos - Black Chaos (Deck)
65. Activate Light and Darkness Ritual (GY): Add both this card and 1 card that mentions "Light and Darkness Ritual" from your GY to your hand
66. Selected Skull Archfiend of Chaos (GY)
67. Activate Light and Darkness Ritual (hand): Ritual Summon 1 "Magician of Dark Chaos - Black Chaos" or "Black Luster Soldier - Soldier of Light and Darkness" from your hand
68. Selected Magician of Dark Chaos - Black Chaos (hand)
69. Selected Ars Magna of Purification and Corruption (GY) value 8
70. Yes
71. Selected Light and Darkness Ritual (GY)
72. Special Summon (procedure) Artmage Non-Finito (Extra Deck)
73. Selected Light and Darkness Ritual (hand)
74. Selected Artmage Finmel (M1)
75. Yes
76. Selected Artmage Impasto -Recapture- (Deck)

End board:  LP 8000 | Hand 3 | Deck 30 | Extra 11 | GY 4 | Banished 9   Monsters: M1: Artmage Non-Finito Lv7 2400/1500 ATK || M2: S:P Little Knight L2←→ 1600  || M3: Magician of Dark Chaos - Black Chaos Lv8 2800/2600 ATK || M5: Artmage Diactorus Lv8 2800/2500 ATK || EMZ-L: Medicurius the Power Patron of Illusions L3↙↓↘ 3000    Spell/Trap: S1: Mind Shuffle || S2: Artmage Impasto -Recapture- (Set)   GY: Small World, Nerva the Power Patron of Creation, Light and Darkness Ritual, Artmage Finmel   Banished: Ghost Ogre & Snow Rabbit (face-down), Artmage Graflare (face-down), Plundered Power Patron Plane - Vidolia (face-down), Artmage Vandalism -Assault- (face-down), Artmage Finmel (face-down), Ars Magna - "C

## Order 3: best 8.41 [margin 1.35: ss_panama 0.89, elfnote -1.5, despia 1.25, angelechy 5.41] (, worst 8.41) — from search
Others: search → new early order 8.41 · search → new ending 8.41 · search → new early order 8.41 · search → new ending 8.41 · search → new early order 8.41 · opening lanes 5.91 · forced Activate Theorealize Past Lull 5.91 · forced Activate Fiendsmith's Sequence 5.91 · tries Link Summon Fiendsmith's Requiem 5.91 · forced Activate Artmage Graflare 5.91 · tries Activate Fiendsmith Engraver 5.91 · tries Activate Fiendsmith's Requiem 5.91 · tries Activate Fiendsmith's Sequence 5.91 · forced Activate Light and Darkness Ritual: Ritual Summon 5.91 · tries Normal Summon Lacrima the Crimson Tears 5.91 · forced Activate Theorealize Liberation 5.91 · tries Activate Fiendsmith's Sequence 5.91 · forced Activate Griffoh 4.8 · forced Activate Mind Shuffle 4.8 · search → new ending 4.53 · forced Special Summon (procedure) Dark Magician of Destruction 4.33 · forced Link Summon S:P Little Knight 3.95 · forced Synchro Summon Chaos Angel 3.55

1. Set Spell/Trap Small World
2. Activate Small World (S1): activate this card
3. Selected Droll & Lock Bird (hand)
4. Selected Magician of Dark Chaos - Black Chaos (Deck)
5. Selected Ars Magna of Infinity and Finity (Deck)
6. Activate Ars Magna of Infinity and Finity (hand): You can banish this card from your hand; add 1 non-Warrior "Ars Magna" monster from your Deck to your hand
7. Selected Ars Magna of Purification and Corruption (Deck)
8. Activate Ars Magna of Purification and Corruption (hand): You can banish this card from your hand; add 1 "Ars Magna" Spell/Trap from your Deck to your hand
9. Selected Ars Magna - "Citrinitas" (Deck)
10. Activate Ars Magna - "Citrinitas" (hand): activate this card
11. Activate Ars Magna - "Citrinitas" (S1): Add 1 "Medius" or "Ars Magna" monster from your Deck to your hand
12. Selected Medius the Pure (Deck)
13. Normal Summon Medius the Pure (hand)
14. Yes
15. Selected Nervedo the Shadebeast Power Patron (Deck)
16. Special Summon it
17. Activate Nervedo the Shadebeast Power Patron (M3): Special Summon 1 "Nerva the Power Patron of Creation" from your Extra Deck
18. Selected Nerva the Power Patron of Creation (Extra Deck)
19. Yes
20. Activate Ars Magna of Infinity and Finity (banishment): Special Summon this card
21. Selected Theorealize Medius (Deck)
22. Link Summon S:P Little Knight (Extra Deck)
23. select Ars Magna of Infinity and Finity (M5)
24. select Medius the Pure (M4)
25. Yes
26. Activate Medius the Pure (GY): Shuffle 1 monster from your hand or face-up field into the Deck, and if you do, Special Summon this card
27. Selected Ash Blossom & Joyous Spring (hand)
28. Link Summon Medicurius the Power Patron of Illusions (Extra Deck)
29. select S:P Little Knight (EMZ-R)
30. select Medius the Pure (M4)
31. Finish selection
32. Yes
33. Special Summon 1 "Diactorus" monster
34. Selected Artmage Diactorus (Extra Deck)

End board:  LP 8000 | Hand 2 | Deck 35 | Extra 12 | GY 3 | Banished 7   Monsters: M1: Artmage Diactorus Lv8 2800/2500 ATK || M2: Ars Magna of Purification and Corruption Lv8 1000/2100 ATK || M3: Nerva the Power Patron of Creation Lv10 3300/3300 ATK || EMZ-L: Medicurius the Power Patron of Illusions L3↙↓↘ 9000    Spell/Trap: S1: Ars Magna - "Citrinitas"   GY: Small World, Ars Magna of Infinity and Finity, S:P Little Knight   Banished: Droll & Lock Bird (face-down), Magician of Dark Chaos - Black Chaos (face-down), Artmage Impasto -Recapture- (face-down), Theorealize Liberation (face-down), Junoldo the Shadespirit Power Patron (face-down), Medius the Pure, Theorealize Medius   Hand: Ghost Ogre & Snow Rab

## Order 4: best 11.85 [margin 6.64: ss_panama 6.96, elfnote 4.78, despia 3.93, angelechy 8.85] (, worst 11.85) — from tries Activate Ars Magna - "Citrinitas" → new early order
Others: tries Activate Ars Magna - "Citrinitas" → new early order → new ending 11.85 · tries Activate Ars Magna - "Citrinitas" → new early order → new early order 11.85 · tries Activate Ars Magna - "Citrinitas" → new early order → new ending 11.85 · tries Activate Ars Magna - "Citrinitas" 11.45 · forced Activate Theorealize Liberation 10.65 · tries Activate Nervedo the Shadebeast Power Patron 10.45 · tries Activate Ars Magna - "Citrinitas" → new ending 9.43 · tries Activate Medius the Pure 8.41 · tries Activate Ars Magna - "Citrinitas" 8.41 · forced Link Summon S:P Little Knight 8.41 · search 5.91 · forced Activate Light and Darkness Ritual: Ritual Summon 5.91 · forced Activate Theorealize Past Lull 5.91 · forced Activate Fiendsmith's Sequence 5.91 · forced Activate Artmage Graflare 5.91 · opening lanes 5.91 · tries Activate Fiendsmith's Desirae 5.91 · tries Special Summon (procedure) Artmage Non-Finito 5.91 · forced Activate Griffoh 4.8 · forced Activate Mind Shuffle 4.8 · forced Special Summon (procedure) Dark Magician of Destruction 4.33 · forced Synchro Summon Chaos Angel 3.55 · tries Activate Ars Magna - "Citrinitas" → new early order → new early order 2.55

1. Activate Small World (hand): activate this card
2. Selected Ghost Ogre & Snow Rabbit (hand)
3. Selected Artmage Graflare (Deck)
4. Selected Ars Magna of Purification and Corruption (Deck)
5. Activate Ars Magna of Purification and Corruption (hand): You can banish this card from your hand; add 1 "Ars Magna" Spell/Trap from your Deck to your hand
6. Selected Ars Magna - "Citrinitas" (Deck)
7. Set Spell/Trap Ars Magna - "Citrinitas"
8. Activate Ars Magna - "Citrinitas" (S1): activate this card
9. Activate Ars Magna - "Citrinitas" (S1): Add 1 "Medius" or "Ars Magna" monster from your Deck to your hand
10. Selected Medius the Pure (Deck)
11. Normal Summon Medius the Pure (hand)
12. Yes
13. Selected Nervedo the Shadebeast Power Patron (Deck)
14. Special Summon it
15. Activate Nervedo the Shadebeast Power Patron (M1): Special Summon 1 "Nerva the Power Patron of Creation" from your Extra Deck
16. Selected Nerva the Power Patron of Creation (Extra Deck)
17. Yes
18. Selected Junoldo the Shadespirit Power Patron (Deck)
19. Activate Junoldo the Shadespirit Power Patron (M5): Special Summon 1 "Junora the Power Patron of Tuning" from your Extra Deck
20. Selected Junora the Power Patron of Tuning (Extra Deck)
21. Yes
22. Selected Nervedo the Shadebeast Power Patron (Extra Deck)
23. Link Summon Purification Power Patron (Extra Deck)
24. select Junora the Power Patron of Tuning (M1)
25. select Medius the Pure (M3)
26. Activate Ars Magna of Purification and Corruption (banishment): Special Summon this card
27. Activate Purification Power Patron (EMZ-L): Add 1 "Theorealize" card from your Deck to your hand
28. Selected Theorealize Medius (Deck)
29. Activate Ars Magna of Purification and Corruption (M2): Banish Spells/Traps on the field
30. Selected Ars Magna - "Citrinitas" (S1)
31. Activate Theorealize Medius (hand): If a "Power Patron" card is on the field: You can Special Summon this card from your hand, then you can add 1 "Theorealize" Spell/Trap from your Deck to your hand
32. Yes
33. Selected Theorealize Past Lull (Deck)
34. Activate Purification Power Patron (EMZ-L): Link Summon including this card as material
35. Selected Medicurius the Power Patron of Illusions (Extra Deck)
36. select Ars Magna of Purification and Corruption (M2)
37. Finish selection
38. Special Summon (procedure) Artmage Non-Finito (Extra Deck)
39. Selected Theorealize Past Lull (hand)
40. Selected Nervedo the Shadebeast Power Patron (hand)
41. Yes
42. Selected Artmage Impasto -Recapture- (Deck)
43. Activate Theorealize Past Lull (GY): Special Summon 1 Fusion, Synchro, or Xyz Monster from your GY
44. Selected Junora the Power Patron of Tuning (GY)
45. Activate Medius the Pure (GY): Shuffle 1 monster from your hand or face-up field into the Deck, and if you do, Special Summon this card
46. Selected Ash Blossom & Joyous Spring (hand)
47. Link Summon S:P Little Knight (Extra Deck)
48. select Junora the Power Patron of Tuning (M3)
49. select Medius the Pure (M2)
50. Yes
51. Special Summon 1 "Diactorus" monster
52. Activate S:P Little Knight (M2): Banish 1 card on the field or GY
53. Selected Small World (GY)
54. Selected Artmage Diactorus (Extra Deck)

End board:  LP 8000 | Hand 2 | Deck 30 | Extra 9 | GY 4 | Banished 13   Monsters: M1: Artmage Non-Finito Lv7 2400/1500 ATK || M2: S:P Little Knight L2←→ 1600  || M3: Artmage Diactorus Lv8 2800/2500 ATK || M4: Nerva the Power Patron of Creation Lv10 3300/3300 ATK || EMZ-L: Medicurius the Power Patron of Illusions L3↙↓↘ 3000    Spell/Trap: S1: Artmage Impasto -Recapture- (Set)   GY: Ars Magna of Purification and Corruption, Purification Power Patron, Nervedo the Shadebeast Power Patron, Junora the Power Patron of Tuning   Banished: Ghost Ogre & Snow Rabbit (face-down), Artmage Graflare (face-down), Pendulum Treasure (face-down), Ars Magna of Infinity and Finity (face-down), Prohibited Power Patron Portal

## Order 5: best 12.35 [margin -0.04: ss_panama -2.52, elfnote -4.15, despia -0.35, angelechy 9.35] (, worst 12.35) — from tries Activate Ars Magna of Infinity and Finity → new ending
Others: tries Activate Ars Magna of Infinity and Finity → new ending → new ending 12.35 · tries Activate Ars Magna of Infinity and Finity 11.1 · tries Activate Ars Magna of Infinity and Finity → new ending 11.1 · tries Activate Ars Magna of Infinity and Finity → new early order 10.65 · tries Activate Ars Magna of Infinity and Finity → new ending → new early order 10.65 · tries Activate Ars Magna of Infinity and Finity → new ending → new early order 10.2 · forced Activate Theorealize Liberation 8.28 · search 5.91 · tries Activate Plundered Power Patron Plane - Vidolia 5.91 · forced Activate Artmage Graflare 5.91 · forced Activate Light and Darkness Ritual: Ritual Summon 5.91 · forced Activate Fiendsmith's Sequence 5.91 · forced Activate Theorealize Past Lull 5.91 · tries Activate Fiendsmith Engraver 5.91 · opening lanes 5.91 · tries Activate Fiendsmith's Tract 5.41 · tries Activate Prohibited Power Patron Portal - Terminus 4.91 · forced Activate Griffoh 4.8 · forced Activate Mind Shuffle 4.8 · forced Special Summon (procedure) Dark Magician of Destruction 4.33 · forced Link Summon S:P Little Knight 4.2 · forced Synchro Summon Chaos Angel 3.55 · tries Activate Junoldo the Shadespirit Power Patron 3.25

1. Set Spell/Trap Small World
2. Activate Small World (S1): activate this card
3. Selected Droll & Lock Bird (hand)
4. Selected Magician of Dark Chaos - Black Chaos (Deck)
5. Selected Ars Magna of Infinity and Finity (Deck)
6. Activate Ars Magna of Infinity and Finity (hand): You can banish this card from your hand; add 1 non-Warrior "Ars Magna" monster from your Deck to your hand
7. Selected Ars Magna of Purification and Corruption (Deck)
8. Activate Ars Magna of Purification and Corruption (hand): You can banish this card from your hand; add 1 "Ars Magna" Spell/Trap from your Deck to your hand
9. Selected Ars Magna - "Citrinitas" (Deck)
10. Activate Ars Magna - "Citrinitas" (hand): activate this card
11. Activate Ars Magna - "Citrinitas" (S1): Add 1 "Medius" or "Ars Magna" monster from your Deck to your hand
12. Selected Medius the Pure (Deck)
13. Normal Summon Medius the Pure (hand)
14. Yes
15. Selected Nervedo the Shadebeast Power Patron (Deck)
16. Special Summon it
17. Activate Nervedo the Shadebeast Power Patron (M2): Special Summon 1 "Nerva the Power Patron of Creation" from your Extra Deck
18. Selected Nerva the Power Patron of Creation (Extra Deck)
19. Yes
20. Selected Artmage Finmel (Deck)
21. Link Summon Purification Power Patron (Extra Deck)
22. select Medius the Pure (M1)
23. select Nerva the Power Patron of Creation (M2)
24. Activate Purification Power Patron (EMZ-R): Add 1 "Theorealize" card from your Deck to your hand
25. Selected Theorealize Medius (Deck)
26. Activate Medius the Pure (GY): Shuffle 1 monster from your hand or face-up field into the Deck, and if you do, Special Summon this card
27. Selected Ash Blossom & Joyous Spring (hand)
28. Activate Theorealize Medius (hand): If a "Power Patron" card is on the field: You can Special Summon this card from your hand, then you can add 1 "Theorealize" Spell/Trap from your Deck to your hand
29. Yes
30. Selected Theorealize Liberation (Deck)
31. Activate Theorealize Liberation (hand): Add to your hand, or Special Summon, 1 monster from your Deck with 300 ATK/200 DEF
32. Selected Griffoh (Deck)
33. Add the card(s) to your hand
34. Activate Purification Power Patron (EMZ-R): Link Summon including this card as material
35. Selected Medicurius the Power Patron of Illusions (Extra Deck)
36. select Medius the Pure (M4)
37. Finish selection
38. Yes
39. Special Summon 1 "Diactorus" monster
40. Selected Artmage Diactorus (Extra Deck)
41. Yes
42. Activate Theorealize Liberation (GY): Treat 1 monster you control as a Tuner this turn
43. Selected Ars Magna of Infinity and Finity (M4)
44. Activate Griffoh (hand): Activate 1 of these effects
45. Set 1 card that mentions "Light and Darkness Ritual"
46. Selected Mind Shuffle (Deck)
47. Activate Mind Shuffle (S2): activate this card
48. No
49. Activate Mind Shuffle (S2): Add 1 appropriate monster to your hand
50. Selected Skull Archfiend of Chaos (Deck)
51. Selected Skull Archfiend of Chaos (hand)
52. Yes
53. Selected Light and Darkness Ritual (Deck)
54. Selected Black Luster Soldier - Soldier of Light and Darkness (Deck)
55. Activate Light and Darkness Ritual (GY): Add both this card and 1 card that mentions "Light and Darkness Ritual" from your GY to your hand
56. Selected Griffoh (GY)
57. Special Summon (procedure) Artmage Non-Finito (Extra Deck)
58. Selected Light and Darkness Ritual (hand)
59. Selected Artmage Finmel (M3)
60. Yes
61. Selected Artmage Impasto -Recapture- (Deck)
62. Activate Skull Archfiend of Chaos (GY): Special Summon this card
63. select Nerva the Power Patron of Creation (GY)
64. select Artmage Finmel (GY)
65. select Light and Darkness Ritual (GY)
66. Default order
67. Link Summon S:P Little Knight (Extra Deck)
68. select Ars Magna of Infinity and Finity (M4)
69. select Skull Archfiend of Chaos (M2)
70. Yes

End board:  LP 8000 | Hand 4 | Deck 29 | Extra 11 | GY 4 | Banished 8   Monsters: M1: Artmage Diactorus Lv8 2800/2500 ATK || M2: S:P Little Knight L2←→ 1600  || M3: Ars Magna of Purification and Corruption Lv8 1000/2100 ATK || M5: Artmage Non-Finito Lv7 2400/1500 ATK || EMZ-L: Medicurius the Power Patron of Illusions L3↙↓↘ 9000    Spell/Trap: S1: Ars Magna - "Citrinitas" || S2: Mind Shuffle || S3: Artmage Impasto -Recapture- (Set)   GY: Small World, Purification Power Patron, Skull Archfiend of Chaos, Ars Magna of Infinity and Finity   Banished: Droll & Lock Bird (face-down), Magician of Dark Chaos - Black Chaos (face-down), Theorealize Past Lull (face-down), Infinite Impermanence (face-down), Vidolium

## Order 6: best 12 [margin 5.6: ss_panama 1.15, elfnote 5.13, despia 5.03, angelechy 8.93] (, worst 12) — from tries Normal Summon Medius the Pure → new ending
Others: tries Normal Summon Medius the Pure → new ending → new ending 12 · tries Normal Summon Medius the Pure → new ending → new ending 11.85 · tries Normal Summon Medius the Pure 10.85 · forced Activate Theorealize Liberation 10.65 · tries Normal Summon Medius the Pure → new ending → new early order 10.65 · tries Activate Vidolium the Unstable Power Patron of Unity 10.45 · tries Activate Vidolium the Unstable Power Patron of Unity 9.45 · tries Activate Ars Magna of Purification and Corruption 8.41 · tries Normal Summon Medius the Pure → new ending → new early order 8.41 · tries Normal Summon Medius the Pure → new ending → new early order 8.41 · forced Activate Theorealize Past Lull 7.62 · search 5.91 · opening lanes 5.91 · forced Activate Light and Darkness Ritual: Ritual Summon 5.91 · forced Activate Fiendsmith's Sequence 5.91 · forced Activate Artmage Graflare 5.91 · forced Activate Griffoh 4.8 · tries Activate Mind Shuffle 4.8 · forced Activate Mind Shuffle 4.8 · forced Special Summon (procedure) Dark Magician of Destruction 4.33 · forced Link Summon S:P Little Knight 3.95 · forced Synchro Summon Chaos Angel 3.55 · tries Activate Junoldo the Shadespirit Power Patron 3.25

1. Activate Small World (hand): activate this card
2. Selected Ghost Ogre & Snow Rabbit (hand)
3. Selected Artmage Finmel (Deck)
4. Selected Ars Magna of Infinity and Finity (Deck)
5. Activate Ars Magna of Infinity and Finity (hand): You can banish this card from your hand; add 1 non-Warrior "Ars Magna" monster from your Deck to your hand
6. Selected Ars Magna of Purification and Corruption (Deck)
7. Activate Ars Magna of Purification and Corruption (hand): You can banish this card from your hand; add 1 "Ars Magna" Spell/Trap from your Deck to your hand
8. Selected Ars Magna - "Citrinitas" (Deck)
9. Activate Ars Magna - "Citrinitas" (hand): activate this card
10. Activate Ars Magna - "Citrinitas" (S1): Add 1 "Medius" or "Ars Magna" monster from your Deck to your hand
11. Selected Medius the Pure (Deck)
12. Normal Summon Medius the Pure (hand)
13. Yes
14. Selected Nervedo the Shadebeast Power Patron (Deck)
15. Special Summon it
16. Activate Nervedo the Shadebeast Power Patron (M5): Special Summon 1 "Nerva the Power Patron of Creation" from your Extra Deck
17. Selected Nerva the Power Patron of Creation (Extra Deck)
18. Yes
19. Activate Ars Magna of Infinity and Finity (banishment): Special Summon this card
20. Selected Junoldo the Shadespirit Power Patron (Deck)
21. Activate Junoldo the Shadespirit Power Patron (M1): Special Summon 1 "Junora the Power Patron of Tuning" from your Extra Deck
22. Selected Junora the Power Patron of Tuning (Extra Deck)
23. Yes
24. Selected Nervedo the Shadebeast Power Patron (Extra Deck)
25. Link Summon Purification Power Patron (Extra Deck)
26. select Junora the Power Patron of Tuning (EMZ-L)
27. select Ars Magna of Infinity and Finity (M3)
28. Activate Ars Magna of Purification and Corruption (banishment): Special Summon this card
29. Activate Purification Power Patron (EMZ-R): Add 1 "Theorealize" card from your Deck to your hand
30. Activate Purification Power Patron (EMZ-R): Link Summon including this card as material
31. Selected Medicurius the Power Patron of Illusions (Extra Deck)
32. select Medius the Pure (M4)
33. Finish selection
34. Selected Theorealize Medius (Deck)
35. Activate Ars Magna of Purification and Corruption (M4): Banish Spells/Traps on the field
36. Selected Ars Magna - "Citrinitas" (S1)
37. Activate Theorealize Medius (hand): If a "Power Patron" card is on the field: You can Special Summon this card from your hand, then you can add 1 "Theorealize" Spell/Trap from your Deck to your hand
38. Yes
39. Selected Theorealize Past Lull (Deck)
40. Special Summon (procedure) Artmage Non-Finito (Extra Deck)
41. Selected Theorealize Past Lull (hand)
42. Selected Nervedo the Shadebeast Power Patron (hand)
43. Yes
44. Selected Artmage Impasto -Recapture- (Deck)
45. Activate Theorealize Past Lull (GY): Special Summon 1 Fusion, Synchro, or Xyz Monster from your GY
46. Selected Junora the Power Patron of Tuning (GY)
47. Link Summon S:P Little Knight (Extra Deck)
48. select Ars Magna of Purification and Corruption (M4)
49. select Junora the Power Patron of Tuning (M2)
50. Yes
51. Selected Nervedo the Shadebeast Power Patron (GY)
52. Yes
53. Special Summon 1 "Diactorus" monster
54. Selected Artmage Diactorus (Extra Deck)

End board:  LP 8000 | Hand 3 | Deck 28 | Extra 9 | GY 6 | Banished 12   Monsters: M1: Artmage Non-Finito Lv7 2400/1500 ATK || M2: S:P Little Knight L2←→ 1600  || M3: Artmage Diactorus Lv8 2800/2500 ATK || M5: Nerva the Power Patron of Creation Lv10 3300/3300 ATK || EMZ-L: Medicurius the Power Patron of Illusions L3↙↓↘ 9000    Spell/Trap: S1: Artmage Impasto -Recapture- (Set)   GY: Small World, Ars Magna of Infinity and Finity, Medius the Pure, Purification Power Patron, Junora the Power Patron of Tuning, Ars Magna of Purification and Corruption   Banished: Ghost Ogre & Snow Rabbit (face-down), Artmage Finmel (face-down), Black Luster Soldier - Soldier of Light and Darkness (face-down), Pendulum Treasur

## Order 7: best 11.1 [margin 1.67: ss_panama 4.53, elfnote 0.66, despia -1.59, angelechy 8.4] (, worst 11.1) — from tries Normal Summon Medius the Pure
Others: tries Normal Summon Medius the Pure → new ending 11.1 · tries Normal Summon Medius the Pure → new early order 11.1 · tries Normal Summon Medius the Pure → new early order 11.1 · tries Activate Prohibited Power Patron Portal - Terminus 10.65 · tries Normal Summon Medius the Pure → new ending 8.93 · tries Normal Summon Medius the Pure → new ending 8.93 · search 5.91 · opening lanes 5.91 · forced Activate Theorealize Past Lull 5.91 · forced Activate Fiendsmith's Sequence 5.91 · tries Activate Fiendsmith Engraver 5.91 · forced Activate Artmage Graflare 5.91 · forced Activate Light and Darkness Ritual: Ritual Summon 5.91 · tries Activate Fiendsmith's Tract 5.41 · tries Activate Mind Shuffle 4.8 · forced Activate Mind Shuffle 4.8 · forced Activate Theorealize Liberation 4.8 · tries Activate Mind Shuffle 4.8 · forced Activate Griffoh 4.8 · forced Special Summon (procedure) Dark Magician of Destruction 4.33 · forced Link Summon S:P Little Knight 4.2 · forced Synchro Summon Chaos Angel 3.55 · tries Normal Summon Medius the Pure → new early order 2.55

1. Set Spell/Trap Small World
2. Activate Small World (S1): activate this card
3. Selected Droll & Lock Bird (hand)
4. Selected Apprentice Illusion Magician (Deck)
5. Selected Medius the Pure (Deck)
6. Normal Summon Medius the Pure (hand)
7. Yes
8. Selected Nervedo the Shadebeast Power Patron (Deck)
9. Special Summon it
10. Activate Nervedo the Shadebeast Power Patron (M3): Special Summon 1 "Nerva the Power Patron of Creation" from your Extra Deck
11. Selected Nerva the Power Patron of Creation (Extra Deck)
12. Yes
13. Selected Junoldo the Shadespirit Power Patron (Deck)
14. Activate Junoldo the Shadespirit Power Patron (M1): Special Summon 1 "Junora the Power Patron of Tuning" from your Extra Deck
15. Selected Junora the Power Patron of Tuning (Extra Deck)
16. Yes
17. Selected Nervedo the Shadebeast Power Patron (Extra Deck)
18. Link Summon Purification Power Patron (Extra Deck)
19. select Medius the Pure (M4)
20. select Junora the Power Patron of Tuning (M1)
21. Yes
22. Selected Theorealize Medius (Deck)
23. Activate Theorealize Medius (hand): If a "Power Patron" card is on the field: You can Special Summon this card from your hand, then you can add 1 "Theorealize" Spell/Trap from your Deck to your hand
24. Yes
25. Selected Theorealize Past Lull (Deck)
26. Special Summon (procedure) Artmage Non-Finito (Extra Deck)
27. Selected Theorealize Past Lull (hand)
28. Selected Nervedo the Shadebeast Power Patron (hand)
29. Yes
30. Selected Artmage Impasto -Recapture- (Deck)
31. Activate Purification Power Patron (EMZ-L): Link Summon including this card as material
32. Selected Medicurius the Power Patron of Illusions (Extra Deck)
33. select Artmage Non-Finito (M2)
34. Finish selection
35. Activate Medius the Pure (GY): Shuffle 1 monster from your hand or face-up field into the Deck, and if you do, Special Summon this card
36. Selected Ash Blossom & Joyous Spring (hand)
37. Activate Theorealize Past Lull (GY): Special Summon 1 Fusion, Synchro, or Xyz Monster from your GY
38. Selected Junora the Power Patron of Tuning (GY)
39. Link Summon S:P Little Knight (Extra Deck)
40. select Medius the Pure (M4)
41. select Junora the Power Patron of Tuning (M2)
42. Yes
43. Special Summon 1 "Diactorus" monster
44. Selected Artmage Diactorus (Extra Deck)

End board:  LP 8000 | Hand 2 | Deck 32 | Extra 9 | GY 5 | Banished 11   Monsters: M1: Artmage Diactorus Lv8 2800/2500 ATK || M2: S:P Little Knight L2←→ 1600  || M3: Nerva the Power Patron of Creation Lv10 3300/3300 ATK || EMZ-L: Medicurius the Power Patron of Illusions L3↙↓↘ 3000    Spell/Trap: S1: Artmage Impasto -Recapture- (Set)   GY: Small World, Nervedo the Shadebeast Power Patron, Artmage Non-Finito, Purification Power Patron, Junora the Power Patron of Tuning   Banished: Droll & Lock Bird (face-down), Apprentice Illusion Magician (face-down), Artmage Graflare (face-down), Pendulum Treasure (face-down), Light and Darkness Ritual (face-down), Dark Magical Circle (face-down), Vidolium the Unstable 

## Order 8: best 11.85 [margin 4.95: ss_panama null, elfnote null, despia -2.55, angelechy 8.7] (, worst 11.85) — from forced Activate Theorealize Liberation → new early order
Others: forced Activate Theorealize Liberation → new early order → new ending 11.85 · forced Activate Theorealize Liberation → new early order → new ending 10.85 · forced Activate Theorealize Liberation → new early order → new early order 10.45 · forced Activate Theorealize Liberation 7.91 · search 5.91 · forced Activate Light and Darkness Ritual: Ritual Summon 5.91 · forced Activate Fiendsmith's Sequence 5.91 · opening lanes 5.91 · forced Activate Artmage Graflare 5.91 · tries Activate Vidolium the Unstable Power Patron of Unity 5.91 · tries Normal Summon Theorealize Medius 5.91 · tries Activate Light and Darkness Ritual 4.8 · forced Activate Griffoh 4.8 · forced Activate Mind Shuffle 4.8 · tries Activate Black Chaos 4.8 · tries Activate Light and Darkness Ritual 4.8 · forced Activate Theorealize Past Lull 4.45 · forced Special Summon (procedure) Dark Magician of Destruction 4.33 · forced Link Summon S:P Little Knight 4.2 · forced Synchro Summon Chaos Angel 3.55 · tries Activate Junoldo the Shadespirit Power Patron 3.25 · forced Activate Theorealize Liberation → new ending 2.8 · forced Activate Theorealize Liberation → new early order → new early order 2.55

1. Set Spell/Trap Small World
2. Activate Small World (S1): activate this card
3. Selected Droll & Lock Bird (hand)
4. Selected Black Chaos (Deck)
5. Selected Ars Magna of Purification and Corruption (Deck)
6. Activate Ars Magna of Purification and Corruption (hand): You can banish this card from your hand; add 1 "Ars Magna" Spell/Trap from your Deck to your hand
7. Selected Ars Magna - "Citrinitas" (Deck)
8. Set Spell/Trap Ars Magna - "Citrinitas"
9. Activate Ars Magna - "Citrinitas" (S1): activate this card
10. Activate Ars Magna - "Citrinitas" (S1): Add 1 "Medius" or "Ars Magna" monster from your Deck to your hand
11. Selected Medius the Pure (Deck)
12. Normal Summon Medius the Pure (hand)
13. Yes
14. Selected Nervedo the Shadebeast Power Patron (Deck)
15. Special Summon it
16. Activate Nervedo the Shadebeast Power Patron (M3): Special Summon 1 "Nerva the Power Patron of Creation" from your Extra Deck
17. Selected Nerva the Power Patron of Creation (Extra Deck)
18. Yes
19. Selected Junoldo the Shadespirit Power Patron (Deck)
20. Activate Junoldo the Shadespirit Power Patron (M2): Special Summon 1 "Junora the Power Patron of Tuning" from your Extra Deck
21. Selected Junora the Power Patron of Tuning (Extra Deck)
22. Yes
23. Selected Nervedo the Shadebeast Power Patron (Extra Deck)
24. Link Summon Purification Power Patron (Extra Deck)
25. select Medius the Pure (M1)
26. select Junora the Power Patron of Tuning (EMZ-R)
27. Activate Purification Power Patron (EMZ-R): Add 1 "Theorealize" card from your Deck to your hand
28. Selected Theorealize Medius (Deck)
29. Activate Medius the Pure (GY): Shuffle 1 monster from your hand or face-up field into the Deck, and if you do, Special Summon this card
30. Selected Ash Blossom & Joyous Spring (hand)
31. Activate Theorealize Medius (hand): If a "Power Patron" card is on the field: You can Special Summon this card from your hand, then you can add 1 "Theorealize" Spell/Trap from your Deck to your hand
32. Yes
33. Selected Theorealize Past Lull (Deck)
34. Special Summon (procedure) Artmage Non-Finito (Extra Deck)
35. Selected Theorealize Past Lull (hand)
36. Selected Nervedo the Shadebeast Power Patron (hand)
37. Yes
38. Activate Purification Power Patron (EMZ-R): Link Summon including this card as material
39. Selected Medicurius the Power Patron of Illusions (Extra Deck)
40. select Medius the Pure (M5)
41. Finish selection
42. Selected Artmage Impasto -Recapture- (Deck)
43. Yes
44. Special Summon 1 "Diactorus" monster
45. Activate Ars Magna of Purification and Corruption (banishment): Special Summon this card
46. Selected Artmage Diactorus (Extra Deck)
47. Activate Ars Magna of Purification and Corruption (M5): Banish Spells/Traps on the field
48. Selected Ars Magna - "Citrinitas" (S1)
49. Activate Artmage Diactorus (M3): Change the battle position of 1 monster on the field
50. Selected Artmage Non-Finito (M2)
51. Activate Theorealize Past Lull (GY): Special Summon 1 Fusion, Synchro, or Xyz Monster from your GY
52. Selected Junora the Power Patron of Tuning (GY)
53. Link Summon S:P Little Knight (Extra Deck)
54. select Junora the Power Patron of Tuning (M1)
55. select Ars Magna of Purification and Corruption (M5)
56. No

End board:  LP 8000 | Hand 2 | Deck 30 | Extra 9 | GY 5 | Banished 12   Monsters: M1: S:P Little Knight L2←→ 1600  || M2: Artmage Non-Finito Lv7 2400/1500 DEF || M3: Artmage Diactorus Lv8 2800/2500 ATK || M4: Nerva the Power Patron of Creation Lv10 3300/3300 ATK || EMZ-L: Medicurius the Power Patron of Illusions L3↙↓↘ 3000    Spell/Trap: S2: Artmage Impasto -Recapture- (Set)   GY: Small World, Nervedo the Shadebeast Power Patron, Purification Power Patron, Junora the Power Patron of Tuning, Ars Magna of Purification and Corruption   Banished: Droll & Lock Bird (face-down), Black Chaos (face-down), Medius the Pure (face-down), Griffoh (face-down), Prohibited Power Patron Portal - Terminus (face-down), L

