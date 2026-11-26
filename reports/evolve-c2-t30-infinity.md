# Evolved lines — Ars Magna of Infinity and Finity, Ash Blossom & Joyous Spring, Ash Blossom & Joyous Spring, Droll & Lock Bird, Ghost Ogre & Snow Rabbit (findlist-1100)
2026-11-26T03:32:22.053Z

8 deck orders (different face-down banishes / draws), 3 opponent hands x o_ss_panama + o_elfnote + o_despia + o_angelechy per line, 30 min searches, 4 mutation rounds.
Fitness = end-board interruptions (the lab scorer, src/disrupt.mjs: wipe 2, negate 1-1.5, banish/protection less; hand traps kept count 1 each). The winner of each order is also played into the opponent decks: margin after their turn shown beside it.

**Margin after their turn (winners): average 7.67** (worst -0.6)

**Best line per deck order: average 13.5** (worst order 13.3). Winner came from: opening lanes 2, inf1 → new ending 1, tries Activate Fiendsmith Engraver → new ending 1

| seed line | works as written | its score when it works | seed start + search finish (all orders) |
|---|---|---|---|
| inf1 | 4/8 | 6.81 | 11.85 |
| v52-infinity | 3/8 | 11.6 | 12.07 |

## Weak points found automatically
Cards whose face-down banish (by your own costs) hurt the best line most (average best line without vs with that card banished):

| card | orders where it was banished | drop |
|---|---|---|
| Pendulum Treasure | 3/8 | 0.53 |
| Infinite Impermanence | 2/8 | 0.4 |
| Light and Darkness Ritual | 2/8 | 0.4 |
| Fiendsmith's Tract | 2/8 | 0.4 |
| Magician of Dark Chaos - Black Chaos | 2/8 | 0.2 |
| Medius the Pure | 2/8 | 0.2 |
| Artmage Vandalism -Assault- | 2/8 | 0.2 |
| Small World | 3/8 | 0 |
| Apprentice Illusion Magician | 3/8 | 0 |
| Griffoh | 2/8 | -0.2 |

Where the hand-designed lines broke (next step that no longer worked):
- v52-infinity: Impasto (1x)

Effects the search had not used, tried on purpose (best result so far):
- Activate Prohibited Power Patron Portal - Terminus: 13.3
- Activate Fiendsmith's Tract: 13.3
- Activate Junoldo the Shadespirit Power Patron: 13
- Activate Fiendsmith Engraver: 13
- Activate Mind Shuffle: 12.9
- Activate Fiendsmith Engraver: 12.3
- Link Summon Fiendsmith's Requiem: 12
- Activate Mind Shuffle: 11.27

## Order 1: best 13.3 [margin 6.13: ss_panama 3.5, elfnote 4.28, despia 4.92, angelechy 9.3] (, worst 13.3) — from opening lanes
Others: tries Activate Prohibited Power Patron Portal - Terminus 13.3 · opening lanes → new early order 13.3 · opening lanes → new ending 13 · opening lanes → new ending 13 · tries Activate Mind Shuffle 12.9 · opening lanes → new early order 12.9 · v52-infinity 12.45 · v52-infinity 11.6 · inf1 11.35 · inf1 6.81

1. Activate Ars Magna of Infinity and Finity (hand): You can banish this card from your hand; add 1 non-Warrior "Ars Magna" monster from your Deck to your hand
2. Selected Ars Magna of Purification and Corruption (Deck)
3. Activate Ars Magna of Purification and Corruption (hand): You can banish this card from your hand; add 1 "Ars Magna" Spell/Trap from your Deck to your hand
4. Selected Ars Magna - "Citrinitas" (Deck)
5. Activate Ars Magna - "Citrinitas" (hand): activate this card
6. Activate Ars Magna - "Citrinitas" (S1): Add 1 "Medius" or "Ars Magna" monster from your Deck to your hand
7. Selected Medius the Pure (Deck)
8. Normal Summon Medius the Pure (hand)
9. Yes
10. Selected Nervedo the Shadebeast Power Patron (Deck)
11. Special Summon it
12. Activate Nervedo the Shadebeast Power Patron (M5): Special Summon 1 "Nerva the Power Patron of Creation" from your Extra Deck
13. Selected Nerva the Power Patron of Creation (Extra Deck)
14. Yes
15. Activate Ars Magna of Infinity and Finity (banishment): Special Summon this card
16. Selected Junoldo the Shadespirit Power Patron (Deck)
17. Activate Junoldo the Shadespirit Power Patron (M2): Special Summon 1 "Junora the Power Patron of Tuning" from your Extra Deck
18. Selected Junora the Power Patron of Tuning (Extra Deck)
19. Yes
20. Selected Nervedo the Shadebeast Power Patron (Extra Deck)
21. Link Summon Purification Power Patron (Extra Deck)
22. select Ars Magna of Infinity and Finity (M3)
23. select Junora the Power Patron of Tuning (EMZ-R)
24. Activate Purification Power Patron (EMZ-L): Add 1 "Theorealize" card from your Deck to your hand
25. Selected Theorealize Medius (Deck)
26. Activate Theorealize Medius (hand): If a "Power Patron" card is on the field: You can Special Summon this card from your hand, then you can add 1 "Theorealize" Spell/Trap from your Deck to your hand
27. Activate Purification Power Patron (EMZ-L): Link Summon including this card as material
28. Selected Medicurius the Power Patron of Illusions (Extra Deck)
29. select Medius the Pure (M4)
30. Finish selection
31. Yes
32. Selected Theorealize Past Lull (Deck)
33. No
34. Special Summon (procedure) Artmage Non-Finito (Extra Deck)
35. Selected Theorealize Past Lull (hand)
36. Selected Nervedo the Shadebeast Power Patron (hand)
37. Yes
38. Selected Artmage Impasto -Recapture- (Deck)
39. Activate Theorealize Past Lull (GY): Special Summon 1 Fusion, Synchro, or Xyz Monster from your GY
40. Selected Junora the Power Patron of Tuning (GY)
41. Activate Medius the Pure (GY): Shuffle 1 monster from your hand or face-up field into the Deck, and if you do, Special Summon this card
42. Selected Ash Blossom & Joyous Spring (hand)
43. Link Summon S:P Little Knight (Extra Deck)
44. select Medius the Pure (M5)
45. select Junora the Power Patron of Tuning (M4)
46. Yes
47. Special Summon 1 "Diactorus" monster
48. Activate Ars Magna of Purification and Corruption (banishment): Special Summon this card
49. Selected Artmage Diactorus (Extra Deck)

End board:  LP 8000 | Hand 3 | Deck 31 | Extra 9 | GY 4 | Banished 9   Monsters: M1: Nerva the Power Patron of Creation Lv10 3300/3300 ATK || M2: Artmage Non-Finito Lv7 2400/1500 ATK || M3: Artmage Diactorus Lv8 2800/2500 ATK || M4: S:P Little Knight L2←→ 1600  || M5: Ars Magna of Purification and Corruption Lv8 1000/2100 ATK || EMZ-R: Medicurius the Power Patron of Illusions L3↙↓↘ 9000    Spell/Trap: S1: Ars Magna - "Citrinitas" || S2: Artmage Impasto -Recapture- (Set)   GY: Ars Magna of Infinity and Finity, Purification Power Patron, Nervedo the Shadebeast Power Patron, Junora the Power Patron of Tuning   Banished: Infinite Impermanence (face-down), Small World (face-down), Light and Darkness Ritual 

## Order 2: best 13.9 [margin 7.44: ss_panama null, elfnote 10.2, despia 3.19, angelechy 9.85] (, worst 13.9) — from inf1 → new ending
Others: inf1 → new ending → new early order 13.9 · inf1 13.5 · opening lanes 13.3 · tries Activate Fiendsmith's Tract 13.3 · inf1 → new ending → new early order 13.3 · tries Activate Fiendsmith Engraver 13 · v52-infinity 12.45 · v52-infinity 11.6 · inf1 6.81

1. Activate Ars Magna of Infinity and Finity (hand): You can banish this card from your hand; add 1 non-Warrior "Ars Magna" monster from your Deck to your hand
2. Selected Ars Magna of Purification and Corruption (Deck)
3. Activate Ars Magna of Purification and Corruption (hand): You can banish this card from your hand; add 1 "Ars Magna" Spell/Trap from your Deck to your hand
4. Selected Ars Magna - "Citrinitas" (Deck)
5. Activate Ars Magna - "Citrinitas" (hand): activate this card
6. Activate Ars Magna - "Citrinitas" (S1): Add 1 "Medius" or "Ars Magna" monster from your Deck to your hand
7. Selected Medius the Pure (Deck)
8. Normal Summon Medius the Pure (hand)
9. Yes
10. Selected Nervedo the Shadebeast Power Patron (Deck)
11. Special Summon it
12. Activate Nervedo the Shadebeast Power Patron (M2): Special Summon 1 "Nerva the Power Patron of Creation" from your Extra Deck
13. Selected Nerva the Power Patron of Creation (Extra Deck)
14. Yes
15. Activate Ars Magna of Infinity and Finity (banishment): Special Summon this card
16. Selected Artmage Finmel (Deck)
17. Link Summon Purification Power Patron (Extra Deck)
18. select Medius the Pure (M1)
19. select Ars Magna of Infinity and Finity (M2)
20. Yes
21. Link Summon Purification Power Patron (Extra Deck)
22. select Ars Magna of Purification and Corruption (M1)
23. select Nerva the Power Patron of Creation (M5)
24. Yes
25. Selected Theorealize Medius (Deck)
26. Activate Medius the Pure (GY): Shuffle 1 monster from your hand or face-up field into the Deck, and if you do, Special Summon this card
27. Selected Ash Blossom & Joyous Spring (hand)
28. Activate Theorealize Medius (hand): If a "Power Patron" card is on the field: You can Special Summon this card from your hand, then you can add 1 "Theorealize" Spell/Trap from your Deck to your hand
29. Yes
30. Selected Theorealize Liberation (Deck)
31. Activate Theorealize Liberation (hand): Add to your hand, or Special Summon, 1 monster from your Deck with 300 ATK/200 DEF
32. Activate Purification Power Patron (EMZ-L): Link Summon including this card as material
33. Selected Medicurius the Power Patron of Illusions (Extra Deck)
34. select Medius the Pure (M4)
35. Finish selection
36. Selected Junoldo the Shadespirit Power Patron (Deck)
37. Add the card(s) to your hand
38. Yes
39. Special Summon 1 "Diactorus" monster
40. Selected Artmage Diactorus (Extra Deck)
41. Activate Theorealize Liberation (GY): Treat 1 monster you control as a Tuner this turn
42. Selected Medicurius the Power Patron of Illusions (EMZ-R)
43. Activate Junoldo the Shadespirit Power Patron (hand): Activate it as a Pendulum Spell
44. Activate Artmage Diactorus (M4): Change the battle position of 1 monster on the field
45. Selected Artmage Finmel (M3)
46. Link Summon Medicurius the Power Patron of Illusions (Extra Deck)
47. select Medicurius the Power Patron of Illusions (EMZ-R)
48. select Purification Power Patron (M2)
49. Finish selection
50. Yes
51. Selected Lacrima the Crimson Tears (hand)
52. Yes
53. Selected Nervedo the Shadebeast Power Patron (Extra Deck)
54. Activate Black Chaos (hand): Special Summon ("Black Chaos")
55. Selected Mind Shuffle (Deck)
56. Activate Mind Shuffle (S2): Add 1 appropriate monster to your hand
57. Selected Skull Archfiend of Chaos (Deck)
58. Selected Skull Archfiend of Chaos (hand)
59. Yes
60. Selected Light and Darkness Ritual (Deck)
61. Selected Magician of Dark Chaos - Black Chaos (Deck)
62. Activate Light and Darkness Ritual (GY): Add both this card and 1 card that mentions "Light and Darkness Ritual" from your GY to your hand
63. Selected Black Chaos (GY)
64. Activate Light and Darkness Ritual (hand): Ritual Summon 1 "Magician of Dark Chaos - Black Chaos" or "Black Luster Soldier - Soldier of Light and Darkness" from your hand
65. Selected Magician of Dark Chaos - Black Chaos (hand)
66. Selected Ars Magna of Purification and Corruption (GY) value 8
67. Yes
68. Selected Light and Darkness Ritual (GY)
69. Special Summon (procedure) Artmage Non-Finito (Extra Deck)
70. Selected Light and Darkness Ritual (hand)
71. Selected Nervedo the Shadebeast Power Patron (hand)
72. Yes
73. Selected Artmage Impasto -Recapture- (Deck)

End board:  LP 8000 | Hand 4 | Deck 27 | Extra 9 | GY 9 | Banished 7   Monsters: M1: Artmage Non-Finito Lv7 2400/1500 ATK || M3: Artmage Finmel Lv7 2400/1500 DEF || M4: Artmage Diactorus Lv8 2800/2500 ATK || M5: Magician of Dark Chaos - Black Chaos Lv8 2800/2600 ATK || EMZ-R: Medicurius the Power Patron of Illusions L3↙↓↘ 9000    Spell/Trap: S1: Ars Magna - "Citrinitas" || S2: Mind Shuffle || S3: Artmage Impasto -Recapture- (Set)   GY: Ars Magna of Infinity and Finity, Nerva the Power Patron of Creation, Purification Power Patron, Purification Power Patron, Medicurius the Power Patron of Illusions, Lacrima the Crimson Tears, Skull Archfiend of Chaos, Light and Darkness Ritual, Nervedo the Shadebeast Po

## Order 3: best 13.5 [margin 9.5: ss_panama 9.5, elfnote null, despia null, angelechy 9.5] (, worst 13.5) — from tries Activate Fiendsmith Engraver → new ending
Others: tries Activate Fiendsmith Engraver 12.3 · tries Link Summon Fiendsmith's Requiem 12 · opening lanes 11.65 · inf1 11.5 · v52-infinity 10.94 · inf1 6.81 · tries Activate Fiendsmith Engraver → new ending → new early order 3.55

1. Activate Ars Magna of Infinity and Finity (hand): You can banish this card from your hand; add 1 non-Warrior "Ars Magna" monster from your Deck to your hand
2. Selected Ars Magna of Purification and Corruption (Deck)
3. Activate Ars Magna of Purification and Corruption (hand): You can banish this card from your hand; add 1 "Ars Magna" Spell/Trap from your Deck to your hand
4. Selected Ars Magna - "Citrinitas" (Deck)
5. Activate Ars Magna - "Citrinitas" (hand): activate this card
6. Activate Ars Magna - "Citrinitas" (S1): Add 1 "Medius" or "Ars Magna" monster from your Deck to your hand
7. Selected Medius the Pure (Deck)
8. Normal Summon Medius the Pure (hand)
9. Yes
10. Selected Nervedo the Shadebeast Power Patron (Deck)
11. Special Summon it
12. Link Summon Purification Power Patron (Extra Deck)
13. select Medius the Pure (M1)
14. select Nervedo the Shadebeast Power Patron (M3)
15. Yes
16. Activate Ars Magna of Purification and Corruption (banishment): Special Summon this card
17. Selected Junoldo the Shadespirit Power Patron (Deck)
18. Activate Junoldo the Shadespirit Power Patron (M4): Special Summon 1 "Junora the Power Patron of Tuning" from your Extra Deck
19. Selected Junora the Power Patron of Tuning (Extra Deck)
20. Yes
21. Selected Nervedo the Shadebeast Power Patron (Extra Deck)
22. Link Summon Purification Power Patron (Extra Deck)
23. select Junora the Power Patron of Tuning (M2)
24. select Ars Magna of Purification and Corruption (M1)
25. Activate Ars Magna of Infinity and Finity (banishment): Special Summon this card
26. Activate Purification Power Patron (M4): Add 1 "Theorealize" card from your Deck to your hand
27. Activate Purification Power Patron (EMZ-R): Link Summon including this card as material
28. Selected Medicurius the Power Patron of Illusions (Extra Deck)
29. select Purification Power Patron (M4)
30. Selected Theorealize Medius (Deck)
31. Activate Theorealize Medius (hand): If a "Power Patron" card is on the field: You can Special Summon this card from your hand, then you can add 1 "Theorealize" Spell/Trap from your Deck to your hand
32. Yes
33. Selected Theorealize Liberation (Deck)
34. Activate Medius the Pure (GY): Shuffle 1 monster from your hand or face-up field into the Deck, and if you do, Special Summon this card
35. Selected Ash Blossom & Joyous Spring (hand)
36. Activate Theorealize Liberation (hand): Add to your hand, or Special Summon, 1 monster from your Deck with 300 ATK/200 DEF
37. Selected Griffoh (Deck)
38. Add the card(s) to your hand
39. Activate Theorealize Liberation (GY): Treat 1 monster you control as a Tuner this turn
40. Selected Medius the Pure (M4)
41. Link Summon S:P Little Knight (Extra Deck)
42. select Ars Magna of Infinity and Finity (M3)
43. select Medius the Pure (M4)
44. Yes
45. Special Summon 1 "Diactorus" monster
46. Selected Artmage Diactorus (Extra Deck)
47. Activate Artmage Diactorus (M4): Change the battle position of 1 monster on the field
48. Selected Artmage Diactorus (M4)
49. Activate Griffoh (hand): Activate 1 of these effects
50. Set 1 card that mentions "Light and Darkness Ritual"
51. Selected Mind Shuffle (Deck)
52. Activate Mind Shuffle (S2): activate this card
53. No
54. Activate Mind Shuffle (S2): Add 1 appropriate monster to your hand
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

End board:  LP 8000 | Hand 4 | Deck 29 | Extra 9 | GY 7 | Banished 7   Monsters: M2: Artmage Non-Finito Lv7 2400/1500 ATK || M3: S:P Little Knight L2←→ 1600  || M4: Artmage Diactorus Lv8 2800/2500 DEF || M5: Magician of Dark Chaos - Black Chaos Lv8 2800/2600 ATK || EMZ-R: Medicurius the Power Patron of Illusions L3↙↓↘ 9000    Spell/Trap: S1: Ars Magna - "Citrinitas" || S2: Mind Shuffle || S3: Artmage Impasto -Recapture- (Set)   GY: Junora the Power Patron of Tuning, Purification Power Patron, Purification Power Patron, Ars Magna of Infinity and Finity, Skull Archfiend of Chaos, Light and Darkness Ritual, Nervedo the Shadebeast Power Patron   Banished: Artmage Vandalism -Assault- (face-down), Dark Magic

## Order 4: best 13.3 [margin 7.63: ss_panama 7.49, elfnote 4.32, despia 9.35, angelechy 9.3] (, worst 13.3) — from opening lanes
Others: opening lanes → new ending 13.3 · tries Activate Junoldo the Shadespirit Power Patron 13 · opening lanes → new ending 13 · v52-infinity 12.45 · opening lanes → new early order 11.9 · v52-infinity 11.6 · tries Activate Mind Shuffle 11.27 · inf1 11.05 · inf1 6.81

1. Activate Ars Magna of Infinity and Finity (hand): You can banish this card from your hand; add 1 non-Warrior "Ars Magna" monster from your Deck to your hand
2. Selected Ars Magna of Purification and Corruption (Deck)
3. Activate Ars Magna of Purification and Corruption (hand): You can banish this card from your hand; add 1 "Ars Magna" Spell/Trap from your Deck to your hand
4. Selected Ars Magna - "Citrinitas" (Deck)
5. Activate Ars Magna - "Citrinitas" (hand): activate this card
6. Activate Ars Magna - "Citrinitas" (S1): Add 1 "Medius" or "Ars Magna" monster from your Deck to your hand
7. Selected Medius the Pure (Deck)
8. Normal Summon Medius the Pure (hand)
9. Yes
10. Selected Nervedo the Shadebeast Power Patron (Deck)
11. Special Summon it
12. Activate Nervedo the Shadebeast Power Patron (M1): Special Summon 1 "Nerva the Power Patron of Creation" from your Extra Deck
13. Selected Nerva the Power Patron of Creation (Extra Deck)
14. Yes
15. Activate Ars Magna of Infinity and Finity (banishment): Special Summon this card
16. Selected Junoldo the Shadespirit Power Patron (Deck)
17. Activate Junoldo the Shadespirit Power Patron (M5): Special Summon 1 "Junora the Power Patron of Tuning" from your Extra Deck
18. Selected Junora the Power Patron of Tuning (Extra Deck)
19. Yes
20. Selected Nervedo the Shadebeast Power Patron (Extra Deck)
21. Link Summon Purification Power Patron (Extra Deck)
22. select Ars Magna of Infinity and Finity (M4)
23. select Junora the Power Patron of Tuning (EMZ-L)
24. Activate Purification Power Patron (EMZ-R): Add 1 "Theorealize" card from your Deck to your hand
25. Selected Theorealize Medius (Deck)
26. Activate Purification Power Patron (EMZ-R): Link Summon including this card as material
27. Selected Medicurius the Power Patron of Illusions (Extra Deck)
28. select Medius the Pure (M3)
29. Finish selection
30. No
31. Activate Theorealize Medius (hand): If a "Power Patron" card is on the field: You can Special Summon this card from your hand, then you can add 1 "Theorealize" Spell/Trap from your Deck to your hand
32. Yes
33. Selected Theorealize Past Lull (Deck)
34. Special Summon (procedure) Artmage Non-Finito (Extra Deck)
35. Selected Theorealize Past Lull (hand)
36. Selected Nervedo the Shadebeast Power Patron (hand)
37. Yes
38. Selected Artmage Impasto -Recapture- (Deck)
39. Activate Theorealize Past Lull (GY): Special Summon 1 Fusion, Synchro, or Xyz Monster from your GY
40. Selected Junora the Power Patron of Tuning (GY)
41. Activate Medius the Pure (GY): Shuffle 1 monster from your hand or face-up field into the Deck, and if you do, Special Summon this card
42. Selected Ash Blossom & Joyous Spring (hand)
43. Link Summon S:P Little Knight (Extra Deck)
44. select Medius the Pure (M3)
45. select Junora the Power Patron of Tuning (M2)
46. Yes
47. Special Summon 1 "Diactorus" monster
48. Activate Ars Magna of Purification and Corruption (banishment): Special Summon this card
49. Selected Artmage Diactorus (Extra Deck)

End board:  LP 8000 | Hand 3 | Deck 31 | Extra 9 | GY 4 | Banished 9   Monsters: M1: Nerva the Power Patron of Creation Lv10 3300/3300 ATK || M2: Ars Magna of Purification and Corruption Lv8 1000/2100 ATK || M3: S:P Little Knight L2←→ 1600  || M4: Artmage Diactorus Lv8 2800/2500 ATK || M5: Artmage Non-Finito Lv7 2400/1500 ATK || EMZ-L: Medicurius the Power Patron of Illusions L3↙↓↘ 9000    Spell/Trap: S1: Ars Magna - "Citrinitas" || S2: Artmage Impasto -Recapture- (Set)   GY: Ars Magna of Infinity and Finity, Purification Power Patron, Nervedo the Shadebeast Power Patron, Junora the Power Patron of Tuning   Banished: Fiendsmith's Tract (face-down), Light and Darkness Ritual (face-down), Small World (fa

