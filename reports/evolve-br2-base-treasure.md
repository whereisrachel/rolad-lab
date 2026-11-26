# Evolved lines — Pendulum Treasure, Ash Blossom & Joyous Spring, Ash Blossom & Joyous Spring, Infinite Impermanence, Dark Magical Circle (findlist-1100)
2026-11-26T17:08:06.333Z

4 deck orders (different face-down banishes / draws), 3 opponent hands x o_ss_panama + o_elfnote + o_despia + o_angelechy per line, 5 min searches, 4 mutation rounds.
Fitness = end-board interruptions (the lab scorer, src/disrupt.mjs: wipe 2, negate 1-1.5, banish/protection less; hand traps kept count 1 each). The winner of each order is also played into the opponent decks: margin after their turn shown beside it.

**Margin after their turn (winners): average null** (worst 99)

**Best line per deck order: average 12.57** (worst order 12.3). Winner came from: forced Link Summon Fiendsmith's Requiem → new early order 1, tries Activate Mind Shuffle → new early order 1, tries Activate Junoldo the Shadespirit Power Patron → new ending 1, opening lanes 1

## Weak points found automatically
Cards whose face-down banish (by your own costs) hurt the best line most (average best line without vs with that card banished):

| card | orders where it was banished | drop |
|---|---|---|
| Black Luster Soldier - Soldier of Light and Darkness | 3/4 | 0.57 |
| Mind Shuffle | 3/4 | 0.57 |
| Light and Darkness Ritual | 3/4 | 0.57 |
| Griffoh | 3/4 | 0.57 |
| Plundered Power Patron Plane - Vidolia | 3/4 | 0.17 |
| Artmage Graflare | 3/4 | 0.17 |
| Medius the Pure | 2/4 | -0.15 |
| Lacrima the Crimson Tears | 2/4 | -0.15 |
| Vidolium the Unstable Power Patron of Unity | 2/4 | -0.15 |
| Prohibited Power Patron Portal - Terminus | 2/4 | -0.15 |

List changes proposed for the list test (data/proposals-findlist-1100.json):
- +1 Black Luster Soldier - Soldier of Light and Darkness, −1 Plundered Power Patron Plane - Vidolia — Black Luster Soldier - Soldier of Light and Darkness: best line 0.57 worse when a cost banished it (3 of 4 orders) — Pendulum Treasure
- +1 Mind Shuffle, −1 Artmage Vandalism -Assault- — Mind Shuffle: best line 0.57 worse when a cost banished it (3 of 4 orders) — Pendulum Treasure
- +1 Light and Darkness Ritual, −1 Small World — Light and Darkness Ritual: best line 0.57 worse when a cost banished it (3 of 4 orders) — Pendulum Treasure
- +1 Griffoh, −1 Plundered Power Patron Plane - Vidolia — Griffoh: best line 0.57 worse when a cost banished it (3 of 4 orders) — Pendulum Treasure
- +1 Black Luster Soldier - Soldier of Light and Darkness — Black Luster Soldier - Soldier of Light and Darkness: best line 0.57 worse when a cost banished it (3 of 4 orders) — Pendulum Treasure (add only: deck grows, up to 60)
- +1 Mind Shuffle — Mind Shuffle: best line 0.57 worse when a cost banished it (3 of 4 orders) — Pendulum Treasure (add only: deck grows, up to 60)
- +1 Light and Darkness Ritual — Light and Darkness Ritual: best line 0.57 worse when a cost banished it (3 of 4 orders) — Pendulum Treasure (add only: deck grows, up to 60)
- +1 Griffoh — Griffoh: best line 0.57 worse when a cost banished it (3 of 4 orders) — Pendulum Treasure (add only: deck grows, up to 60)

Effects the search had not used, tried on purpose (best result so far):
- Activate Junoldo the Shadespirit Power Patron: 12.7
- Normal Summon Theorealize Medius: 11.95
- Normal Summon Medius the Pure: 11.8
- Activate Mind Shuffle: 11.55
- Activate Prohibited Power Patron Portal - Terminus: 11.35
- Normal Summon Ars Magna of Infinity and Finity: 9.75
- Activate Vidolium the Unstable Power Patron of Unity: 8
- Activate Fiendsmith's Tract: 8

## Order 1: best 12.7 (, worst 12.7) — from forced Link Summon Fiendsmith's Requiem → new early order
Others: forced Link Summon Fiendsmith's Requiem 12.55 · forced Activate Griffoh 12.3 · forced Activate Artmage Non-Finito 11.55 · forced Link Summon Fiendsmith's Requiem → new early order 9.35 · forced Link Summon Fiendsmith's Requiem → new ending 8.75 · tries Activate Vidolium the Unstable Power Patron of Unity 8 · forced Xyz Summon Evilswarm Exciton Knight 7 · search 6.6 · forced Fusion Summon Berfomet 6.6 · opening lanes 6.6 · tries Link Summon Fiendsmith's Requiem 6.6 · tries Activate Fiendsmith's Sequence 6.6 · forced Activate Theorealize Liberation 6.6 · tries Activate Fiendsmith Engraver 5.35

1. Set Spell/Trap Pendulum Treasure
2. Normal Summon Ash Blossom & Joyous Spring (hand)
3. Activate Pendulum Treasure (S1): Add to Extra Deck
4. Selected Nervedo the Shadebeast Power Patron (Deck)
5. Yes
6. Selected Junoldo the Shadespirit Power Patron (Deck)
7. Activate Junoldo the Shadespirit Power Patron (M3): Special Summon 1 "Junora the Power Patron of Tuning" from your Extra Deck
8. Selected Junora the Power Patron of Tuning (Extra Deck)
9. Yes
10. Selected Nervedo the Shadebeast Power Patron (Extra Deck)
11. Special Summon (procedure) Artmage Non-Finito (Extra Deck)
12. Selected Dark Magical Circle (hand)
13. Selected Nervedo the Shadebeast Power Patron (hand)
14. Yes
15. Selected Artmage Impasto -Recapture- (Deck)
16. Link Summon Purification Power Patron (Extra Deck)
17. select Ash Blossom & Joyous Spring (M4)
18. select Junora the Power Patron of Tuning (M1)
19. Yes
20. Selected Theorealize Past Lull (Deck)
21. Set Spell/Trap Theorealize Past Lull
22. Activate Theorealize Past Lull (S2): Special Summon 1 "Medius the Pure" from your hand or Deck
23. Selected Medius the Pure (Deck)
24. Yes
25. Activate Purification Power Patron (EMZ-L): Link Summon including this card as material
26. Selected Medicurius the Power Patron of Illusions (Extra Deck)
27. select Medius the Pure (M4)
28. Finish selection
29. Selected Vidolium the Unstable Power Patron of Unity (Deck)
30. Add the card(s) to your hand
31. Activate Medius the Pure (GY): Shuffle 1 monster from your hand or face-up field into the Deck, and if you do, Special Summon this card
32. Selected Artmage Non-Finito (M3)
33. Activate Vidolium the Unstable Power Patron of Unity (hand): Activate it as a Pendulum Spell
34. Activate Vidolium the Unstable Power Patron of Unity (S5): Activate 1 of these effects
35. Special Summon 1 "Power Patron" monster
36. Selected Nervedo the Shadebeast Power Patron (GY)
37. Yes
38. Selected Theorealize Medius (Deck)
39. Activate Nervedo the Shadebeast Power Patron (M1): Special Summon 1 "Nerva the Power Patron of Creation" from your Extra Deck
40. Selected Nerva the Power Patron of Creation (Extra Deck)
41. Activate Theorealize Medius (hand): If a "Power Patron" card is on the field: You can Special Summon this card from your hand, then you can add 1 "Theorealize" Spell/Trap from your Deck to your hand
42. Yes
43. Selected Theorealize Liberation (Deck)
44. Activate Theorealize Liberation (hand): Add to your hand, or Special Summon, 1 monster from your Deck with 300 ATK/200 DEF
45. Selected Griffoh (Deck)
46. Add the card(s) to your hand
47. Activate Theorealize Liberation (GY): Treat 1 monster you control as a Tuner this turn
48. Selected Nerva the Power Patron of Creation (M4)
49. Activate Griffoh (hand): Activate 1 of these effects
50. Set 1 card that mentions "Light and Darkness Ritual"
51. Selected Mind Shuffle (Deck)
52. Activate Mind Shuffle (S2): activate this card
53. Yes
54. Selected Skull Archfiend of Chaos (Deck)
55. Selected Skull Archfiend of Chaos (hand)
56. Yes
57. Selected Light and Darkness Ritual (Deck)
58. Selected Magician of Dark Chaos - Black Chaos (Deck)
59. Activate Light and Darkness Ritual (GY): Add both this card and 1 card that mentions "Light and Darkness Ritual" from your GY to your hand
60. Selected Skull Archfiend of Chaos (GY)
61. Activate Light and Darkness Ritual (hand): Ritual Summon 1 "Magician of Dark Chaos - Black Chaos" or "Black Luster Soldier - Soldier of Light and Darkness" from your hand
62. Selected Magician of Dark Chaos - Black Chaos (hand)
63. Selected Griffoh (GY) value 8 or 1
64. Yes
65. Special Summon 1 "Diactorus" monster
66. Activate Magician of Dark Chaos - Black Chaos (M2): Add 1 Spell from your GY to your hand
67. Selected Light and Darkness Ritual (GY)
68. Selected Artmage Diactorus (Extra Deck)
69. Activate Artmage Diactorus (M1): Change the battle position of 1 monster on the field
70. Selected Nerva the Power Patron of Creation (M4)
71. Activate Skull Archfiend of Chaos (hand): Special Summon this card
72. select Purification Power Patron (GY)
73. select Theorealize Past Lull (GY)
74. select Griffoh (banishment)
75. Default order
76. Synchro Summon Chaos Angel (Extra Deck)
77. select Medius the Pure (M3)
78. select Skull Archfiend of Chaos (M5)
79. No

End board:  LP 8000 | Hand 3 | Deck 25 | Extra 13 | GY 5 | Banished 9   Monsters: M1: Artmage Diactorus Lv8 2800/2500 ATK || M2: Magician of Dark Chaos - Black Chaos Lv8 2800/2600 ATK || M3: Chaos Angel Lv10 3500/2800 ATK || M4: Nerva the Power Patron of Creation Lv10 3300/3300 DEF || EMZ-L: Medicurius the Power Patron of Illusions L3↙↓↘ 3000    Spell/Trap: S1: Artmage Impasto -Recapture- (Set) || S2: Mind Shuffle   GY: Pendulum Treasure, Dark Magical Circle, Junora the Power Patron of Tuning, Ash Blossom & Joyous Spring, Skull Archfiend of Chaos   Banished: Artmage Finmel (face-down), Small World (face-down), Pendulum Treasure (face-down), Fiendsmith Engraver (face-down), Ars Magna of Purification and

## Order 2: best 12.3 (, worst 12.3) — from tries Activate Mind Shuffle → new early order
Others: tries Activate Mind Shuffle → new early order → new ending 12.3 · tries Activate Mind Shuffle 11.55 · tries Activate Mind Shuffle → new early order → new early order 10.8 · search 10.4 · forced Xyz Summon Evilswarm Exciton Knight 10.05 · tries Normal Summon Ars Magna of Infinity and Finity 9.75 · forced Activate Artmage Non-Finito 9.75 · tries Activate Mind Shuffle → new ending 9.05 · tries Normal Summon Ars Magna of Purification and Corruption 8 · opening lanes 6.6 · tries Activate Mind Shuffle 6.6 · forced Fusion Summon Berfomet 6.6 · forced Activate Griffoh 6.6 · forced Activate Theorealize Liberation 6.6 · forced Link Summon Fiendsmith's Requiem 6.6

1. Set Spell/Trap Pendulum Treasure
2. Activate Pendulum Treasure (S1): Add to Extra Deck
3. Selected Vidolium the Unstable Power Patron of Unity (Deck)
4. Yes
5. Selected Prohibited Power Patron Portal - Terminus (Deck)
6. Set Spell/Trap Prohibited Power Patron Portal - Terminus
7. Activate Prohibited Power Patron Portal - Terminus (S1): Send 1 "Power Patron" monster from your Deck or Extra Deck to the GY, then you can add 1 DARK Fairy monster from your Deck to your hand
8. Selected Nervedo the Shadebeast Power Patron (Deck)
9. Yes
10. Selected Medius the Pure (Deck)
11. Normal Summon Medius the Pure (hand)
12. Yes
13. Selected Junoldo the Shadespirit Power Patron (Deck)
14. Special Summon it
15. Link Summon Purification Power Patron (Extra Deck)
16. select Medius the Pure (M1)
17. select Junoldo the Shadespirit Power Patron (M2)
18. Yes
19. Activate Purification Power Patron (EMZ-R): Add 1 "Theorealize" card from your Deck to your hand
20. Selected Theorealize Medius (Deck)
21. Selected Nervedo the Shadebeast Power Patron (GY)
22. Special Summon (procedure) Artmage Non-Finito (Extra Deck)
23. Selected Dark Magical Circle (hand)
24. Selected Nervedo the Shadebeast Power Patron (hand)
25. Yes
26. Selected Artmage Impasto -Recapture- (Deck)
27. Activate Medius the Pure (GY): Shuffle 1 monster from your hand or face-up field into the Deck, and if you do, Special Summon this card
28. Selected Ash Blossom & Joyous Spring (hand)
29. Activate Theorealize Medius (hand): If a "Power Patron" card is on the field: You can Special Summon this card from your hand, then you can add 1 "Theorealize" Spell/Trap from your Deck to your hand
30. Yes
31. Selected Theorealize Liberation (Deck)
32. Activate Theorealize Liberation (hand): Add to your hand, or Special Summon, 1 monster from your Deck with 300 ATK/200 DEF
33. Activate Purification Power Patron (EMZ-R): Link Summon including this card as material
34. Selected Medicurius the Power Patron of Illusions (Extra Deck)
35. select Medius the Pure (M1)
36. Finish selection
37. Selected Nervedo the Shadebeast Power Patron (Deck)
38. Special Summon it
39. Yes
40. Special Summon 1 "Diactorus" monster
41. Selected Artmage Diactorus (Extra Deck)
42. Activate Nervedo the Shadebeast Power Patron (M1): Special Summon 1 "Nerva the Power Patron of Creation" from your Extra Deck
43. Selected Nerva the Power Patron of Creation (Extra Deck)
44. Yes
45. Selected Artmage Graflare (Deck)

End board:  LP 8000 | Hand 2 | Deck 30 | Extra 13 | GY 6 | Banished 5   Monsters: M1: Nerva the Power Patron of Creation Lv10 3300/3300 ATK || M3: Artmage Diactorus Lv8 2800/2500 ATK || M4: Artmage Non-Finito Lv7 2400/1500 ATK || M5: Artmage Graflare Lv5 2100/1500 ATK || EMZ-R: Medicurius the Power Patron of Illusions L3↙↓↘ 3000    Spell/Trap: S1: Artmage Impasto -Recapture- (Set)   GY: Pendulum Treasure, Prohibited Power Patron Portal - Terminus, Dark Magical Circle, Nervedo the Shadebeast Power Patron, Purification Power Patron, Theorealize Liberation   Banished: Medius the Pure, Theorealize Medius, Medius the Pure (face-down), Small World (face-down), Artmage Vandalism -Assault- (face-down)   Hand: 

## Order 3: best 13 (, worst 13) — from tries Activate Junoldo the Shadespirit Power Patron → new ending
Others: tries Activate Junoldo the Shadespirit Power Patron 12.7 · forced Activate Griffoh 12.7 · tries Normal Summon Theorealize Medius 11.95 · forced Activate Theorealize Liberation 11.95 · tries Activate Junoldo the Shadespirit Power Patron → new ending → new early order 10.05 · opening lanes 9.9 · forced Fusion Summon Berfomet 9.9 · search 9.75 · tries Activate Junoldo the Shadespirit Power Patron → new ending → new early order 8.75 · forced Activate Artmage Non-Finito 7.8 · tries Special Summon (procedure) Nervedo the Shadebeast Power Patron 6.6 · tries Normal Summon Nervedo the Shadebeast Power Patron 6.6 · forced Xyz Summon Evilswarm Exciton Knight 6.6 · forced Link Summon Fiendsmith's Requiem 6.6

1. Activate Pendulum Treasure (hand): Add to Extra Deck
2. Selected Nervedo the Shadebeast Power Patron (Deck)
3. Yes
4. Selected Junoldo the Shadespirit Power Patron (Deck)
5. Activate Junoldo the Shadespirit Power Patron (M3): Special Summon 1 "Junora the Power Patron of Tuning" from your Extra Deck
6. Selected Junora the Power Patron of Tuning (Extra Deck)
7. Yes
8. Selected Nervedo the Shadebeast Power Patron (Extra Deck)
9. Special Summon (procedure) Artmage Non-Finito (Extra Deck)
10. Selected Dark Magical Circle (hand)
11. Selected Nervedo the Shadebeast Power Patron (hand)
12. Yes
13. Selected Artmage Impasto -Recapture- (Deck)
14. Normal Summon Ash Blossom & Joyous Spring (hand)
15. Link Summon Purification Power Patron (Extra Deck)
16. select Ash Blossom & Joyous Spring (M4)
17. select Junora the Power Patron of Tuning (EMZ-L)
18. Yes
19. Selected Theorealize Past Lull (Deck)
20. Activate Theorealize Past Lull (hand): Special Summon 1 "Medius the Pure" from your hand or Deck
21. Selected Medius the Pure (Deck)
22. Yes
23. Activate Purification Power Patron (EMZ-L): Link Summon including this card as material
24. Selected Medicurius the Power Patron of Illusions (Extra Deck)
25. select Medius the Pure (M2)
26. Finish selection
27. Selected Vidolium the Unstable Power Patron of Unity (Deck)
28. Add the card(s) to your hand
29. Activate Vidolium the Unstable Power Patron of Unity (hand): Activate it as a Pendulum Spell
30. Activate Vidolium the Unstable Power Patron of Unity (S5): Activate 1 of these effects
31. Special Summon 1 "Power Patron" monster
32. Selected Nervedo the Shadebeast Power Patron (GY)
33. Yes
34. Selected Prohibited Power Patron Portal - Terminus (Deck)
35. Activate Nervedo the Shadebeast Power Patron (M4): Special Summon 1 "Nerva the Power Patron of Creation" from your Extra Deck
36. Selected Nerva the Power Patron of Creation (Extra Deck)
37. Activate Medius the Pure (GY): Shuffle 1 monster from your hand or face-up field into the Deck, and if you do, Special Summon this card
38. Selected Artmage Non-Finito (M3)
39. Set Spell/Trap Prohibited Power Patron Portal - Terminus
40. Activate Prohibited Power Patron Portal - Terminus (S2): Send 1 "Power Patron" monster from your Deck or Extra Deck to the GY, then you can add 1 DARK Fairy monster from your Deck to your hand
41. Selected Purification Power Patron (Extra Deck)
42. Yes
43. Selected Theorealize Medius (Deck)
44. Activate Theorealize Medius (hand): If a "Power Patron" card is on the field: You can Special Summon this card from your hand, then you can add 1 "Theorealize" Spell/Trap from your Deck to your hand
45. Yes
46. Selected Theorealize Liberation (Deck)
47. Activate Theorealize Liberation (hand): Add to your hand, or Special Summon, 1 monster from your Deck with 300 ATK/200 DEF
48. Selected Griffoh (Deck)
49. Add the card(s) to your hand
50. Activate Griffoh (hand): Activate 1 of these effects
51. Set 1 card that mentions "Light and Darkness Ritual"
52. Selected Mind Shuffle (Deck)
53. Activate Mind Shuffle (S2): activate this card
54. No
55. Activate Mind Shuffle (S2): Add 1 appropriate monster to your hand
56. Selected Skull Archfiend of Chaos (Deck)
57. Selected Skull Archfiend of Chaos (hand)
58. Yes
59. Selected Light and Darkness Ritual (Deck)
60. Selected Magician of Dark Chaos - Black Chaos (Deck)
61. Activate Light and Darkness Ritual (GY): Add both this card and 1 card that mentions "Light and Darkness Ritual" from your GY to your hand
62. Selected Skull Archfiend of Chaos (GY)
63. Activate Light and Darkness Ritual (hand): Ritual Summon 1 "Magician of Dark Chaos - Black Chaos" or "Black Luster Soldier - Soldier of Light and Darkness" from your hand
64. Selected Magician of Dark Chaos - Black Chaos (hand)
65. Selected Griffoh (GY) value 8 or 1
66. Yes
67. Special Summon 1 "Diactorus" monster
68. Activate Magician of Dark Chaos - Black Chaos (M5): Add 1 Spell from your GY to your hand
69. Selected Pendulum Treasure (GY)
70. Selected Artmage Diactorus (Extra Deck)
71. Activate Artmage Diactorus (M2): Change the battle position of 1 monster on the field
72. Selected Magician of Dark Chaos - Black Chaos (M5)
73. Activate Skull Archfiend of Chaos (hand): Special Summon this card
74. select Theorealize Medius (banishment)
75. select Light and Darkness Ritual (GY)
76. select Theorealize Liberation (GY)
77. Default order
78. Link Summon S:P Little Knight (Extra Deck)
79. select Medius the Pure (M1)
80. select Skull Archfiend of Chaos (M3)

End board:  LP 8000 | Hand 3 | Deck 25 | Extra 11 | GY 8 | Banished 8   Monsters: M2: Artmage Diactorus Lv8 2800/2500 ATK || M3: S:P Little Knight L2←→ 1600  || M4: Nerva the Power Patron of Creation Lv10 3300/3300 ATK || M5: Magician of Dark Chaos - Black Chaos Lv8 2800/2600 DEF || EMZ-R: Medicurius the Power Patron of Illusions L3↙↓↘ 3000    Spell/Trap: S1: Artmage Impasto -Recapture- (Set) || S2: Mind Shuffle   GY: Dark Magical Circle, Ash Blossom & Joyous Spring, Junora the Power Patron of Tuning, Theorealize Past Lull, Purification Power Patron, Purification Power Patron, Prohibited Power Patron Portal - Terminus, Skull Archfiend of Chaos   Banished: Artmage Vandalism -Assault- (face-down), Artmag

## Order 4: best 12.3 (, worst 12.3) — from opening lanes
Others: tries Normal Summon Medius the Pure 11.8 · tries Activate Prohibited Power Patron Portal - Terminus 11.35 · forced Fusion Summon Berfomet 10.8 · tries Activate Fiendsmith's Tract 8 · forced Activate Artmage Non-Finito 7.8 · search 6.6 · tries Activate Fiendsmith Engraver 6.6 · forced Xyz Summon Evilswarm Exciton Knight 6.6 · forced Link Summon Fiendsmith's Requiem 6.6 · forced Activate Griffoh 6.6 · forced Activate Theorealize Liberation 6.6

1. Set Spell/Trap Pendulum Treasure
2. Activate Pendulum Treasure (S1): Add to Extra Deck
3. Selected Vidolium the Unstable Power Patron of Unity (Deck)
4. Yes
5. Selected Prohibited Power Patron Portal - Terminus (Deck)
6. Set Spell/Trap Prohibited Power Patron Portal - Terminus
7. Activate Prohibited Power Patron Portal - Terminus (S1): Send 1 "Power Patron" monster from your Deck or Extra Deck to the GY, then you can add 1 DARK Fairy monster from your Deck to your hand
8. Selected Nervedo the Shadebeast Power Patron (Deck)
9. Yes
10. Selected Medius the Pure (Deck)
11. Normal Summon Medius the Pure (hand)
12. Yes
13. Selected Junoldo the Shadespirit Power Patron (Deck)
14. Special Summon it
15. Link Summon Purification Power Patron (Extra Deck)
16. select Medius the Pure (M4)
17. select Junoldo the Shadespirit Power Patron (M1)
18. Yes
19. Activate Purification Power Patron (EMZ-R): Add 1 "Theorealize" card from your Deck to your hand
20. Selected Theorealize Medius (Deck)
21. Selected Nervedo the Shadebeast Power Patron (GY)
22. Activate Theorealize Medius (hand): If a "Power Patron" card is on the field: You can Special Summon this card from your hand, then you can add 1 "Theorealize" Spell/Trap from your Deck to your hand
23. Yes
24. Selected Theorealize Liberation (Deck)
25. Activate Medius the Pure (GY): Shuffle 1 monster from your hand or face-up field into the Deck, and if you do, Special Summon this card
26. Selected Ash Blossom & Joyous Spring (hand)
27. Activate Theorealize Liberation (hand): Add to your hand, or Special Summon, 1 monster from your Deck with 300 ATK/200 DEF
28. Activate Purification Power Patron (EMZ-R): Link Summon including this card as material
29. Selected Medicurius the Power Patron of Illusions (Extra Deck)
30. select Medius the Pure (M5)
31. Finish selection
32. Selected Nervedo the Shadebeast Power Patron (Deck)
33. Special Summon it
34. Yes
35. Special Summon 1 "Diactorus" monster
36. Selected Artmage Diactorus (Extra Deck)
37. Activate Nervedo the Shadebeast Power Patron (M4): Special Summon 1 "Nerva the Power Patron of Creation" from your Extra Deck
38. Selected Nerva the Power Patron of Creation (Extra Deck)
39. Yes
40. Selected Artmage Graflare (Deck)
41. Special Summon (procedure) Artmage Non-Finito (Extra Deck)
42. Selected Dark Magical Circle (hand)
43. Selected Nervedo the Shadebeast Power Patron (hand)
44. Yes
45. Selected Artmage Impasto -Recapture- (Deck)

End board:  LP 8000 | Hand 2 | Deck 30 | Extra 13 | GY 5 | Banished 6   Monsters: M1: Nerva the Power Patron of Creation Lv10 3300/3300 ATK || M3: Artmage Diactorus Lv8 2800/2500 ATK || M4: Artmage Graflare Lv5 2100/1500 DEF || M5: Artmage Non-Finito Lv7 2400/1500 ATK || EMZ-R: Medicurius the Power Patron of Illusions L3↙↓↘ 3000    Spell/Trap: S1: Artmage Impasto -Recapture- (Set)   GY: Pendulum Treasure, Prohibited Power Patron Portal - Terminus, Purification Power Patron, Dark Magical Circle, Nervedo the Shadebeast Power Patron   Banished: Medius the Pure, Theorealize Medius, Artmage Finmel (face-down), Light and Darkness Ritual (face-down), Ars Magna of Purification and Corruption (face-down), Theor

