# Evolved lines — Pendulum Treasure, Ash Blossom & Joyous Spring, Ash Blossom & Joyous Spring, Droll & Lock Bird, Ghost Ogre & Snow Rabbit (findlist-1100)
2026-11-25T19:57:34.850Z

8 deck orders (different face-down banishes / draws), 3 opponent hands x o_ss_panama + o_elfnote + o_despia + o_angelechy per line, 5 min searches, 4 mutation rounds.
Fitness = end-board interruptions (the lab scorer, src/disrupt.mjs: wipe 2, negate 1-1.5, banish/protection less; hand traps kept count 1 each). The winner of each order is also played into the opponent decks: margin after their turn shown beside it.

**Margin after their turn (winners): average 4.34** (worst -17.83)

**Best line per deck order: average 12.6** (worst order 12.05). Winner came from: opening lanes → new early order 1, tries Activate Theorealize Liberation 1, tries Activate Light and Darkness Ritual 1, tries Normal Summon Theorealize Medius 1, tries Special Summon (procedure) Nervedo the Shadebeast Power Patron 1, opening lanes → new ending 2, search 1

| seed line | works as written | its score when it works | seed start + search finish (all orders) |
|---|---|---|---|
| tre1 | 6/8 | 7.84 | 8.91 |
| v52-treasure | 4/8 | 11.15 | 10.99 |

## Weak points found automatically
Cards whose face-down banish (by your own costs) hurt the best line most (average best line without vs with that card banished):

| card | orders where it was banished | drop |
|---|---|---|
| Artmage Finmel | 7/8 | 1.49 |
| Black Chaos | 5/8 | 1.15 |
| Artmage Vandalism -Assault- | 4/8 | 0.98 |
| Lacrima the Crimson Tears | 4/8 | 0.94 |
| Apprentice Illusion Magician | 4/8 | 0.8 |
| Fiendsmith Engraver | 2/8 | 0.63 |
| Small World | 6/8 | 0.53 |
| Magician of Dark Chaos - Black Chaos | 2/8 | 0.5 |
| Ars Magna of Infinity and Finity | 2/8 | 0.47 |
| Mind Shuffle | 5/8 | 0.21 |

Where the hand-designed lines broke (next step that no longer worked):
- v52-treasure: Past Lull (2x)
- v52-treasure: Junoldo (2x)
- tre1: Junoldo (1x)
- tre1: Impasto (1x)

List changes proposed for the list test (data/proposals-findlist-1100.json):
- +1 Artmage Finmel, −1 Plundered Power Patron Plane - Vidolia — Artmage Finmel: best line 1.49 worse when a cost banished it (7 of 8 orders) — Pendulum Treasure
- +1 Black Chaos, −1 Artmage Vandalism -Assault- — Black Chaos: best line 1.15 worse when a cost banished it (5 of 8 orders) — Pendulum Treasure
- +1 Lacrima the Crimson Tears, −1 Small World — Lacrima the Crimson Tears: best line 0.94 worse when a cost banished it (4 of 8 orders) — Pendulum Treasure
- +1 Apprentice Illusion Magician, −1 Plundered Power Patron Plane - Vidolia — Apprentice Illusion Magician: best line 0.8 worse when a cost banished it (4 of 8 orders) — Pendulum Treasure
- +1 Artmage Finmel — Artmage Finmel: best line 1.49 worse when a cost banished it (7 of 8 orders) — Pendulum Treasure (add only: deck grows, up to 60)
- +1 Black Chaos — Black Chaos: best line 1.15 worse when a cost banished it (5 of 8 orders) — Pendulum Treasure (add only: deck grows, up to 60)
- +1 Lacrima the Crimson Tears — Lacrima the Crimson Tears: best line 0.94 worse when a cost banished it (4 of 8 orders) — Pendulum Treasure (add only: deck grows, up to 60)
- +1 Apprentice Illusion Magician — Apprentice Illusion Magician: best line 0.8 worse when a cost banished it (4 of 8 orders) — Pendulum Treasure (add only: deck grows, up to 60)

Effects the search had not used, tried on purpose (best result so far):
- Activate Light and Darkness Ritual: 12.4
- Activate Theorealize Liberation: 12.15
- Normal Summon Theorealize Medius: 12.1
- Special Summon (procedure) Nervedo the Shadebeast Power Patron: 12.1
- Activate Theorealize Past Lull: 11.85
- Activate Vidolium the Unstable Power Patron of Unity: 11.85
- Normal Summon Nervedo the Shadebeast Power Patron: 11.5
- Activate Artmage Vandalism -Assault-: 10.65

## Order 1: best 12.2 [margin 5.75: ss_panama null, elfnote 6.84, despia 2.75, angelechy 8.2] (, worst 12.2) — from opening lanes → new early order
Others: opening lanes 12.1 · opening lanes → new ending 12.1 · opening lanes → new ending 12.1 · tries Activate Theorealize Past Lull 11.85 · tries Activate Vidolium the Unstable Power Patron of Unity 11.85 · v52-treasure 11.15 · v52-treasure 11.15 · search 8.85 · tre1 8.33 · tre1 7.84 · opening lanes → new early order 3.55

1. Activate Pendulum Treasure (hand): Add to Extra Deck
2. Selected Vidolium the Unstable Power Patron of Unity (Deck)
3. Yes
4. Selected Prohibited Power Patron Portal - Terminus (Deck)
5. Activate Prohibited Power Patron Portal - Terminus (hand): Send 1 "Power Patron" monster from your Deck or Extra Deck to the GY, then you can add 1 DARK Fairy monster from your Deck to your hand
6. Selected Purification Power Patron (Extra Deck)
7. Yes
8. Selected Medius the Pure (Deck)
9. Normal Summon Medius the Pure (hand)
10. Yes
11. Selected Nervedo the Shadebeast Power Patron (Deck)
12. Special Summon it
13. Activate Nervedo the Shadebeast Power Patron (M5): Special Summon 1 "Nerva the Power Patron of Creation" from your Extra Deck
14. Selected Nerva the Power Patron of Creation (Extra Deck)
15. Yes
16. Selected Artmage Finmel (Deck)
17. Link Summon Purification Power Patron (Extra Deck)
18. select Medius the Pure (M4)
19. select Nerva the Power Patron of Creation (M1)
20. Yes
21. Selected Theorealize Medius (Deck)
22. Activate Medius the Pure (GY): Shuffle 1 monster from your hand or face-up field into the Deck, and if you do, Special Summon this card
23. Selected Ash Blossom & Joyous Spring (hand)
24. Activate Theorealize Medius (hand): If a "Power Patron" card is on the field: You can Special Summon this card from your hand, then you can add 1 "Theorealize" Spell/Trap from your Deck to your hand
25. Yes
26. Selected Theorealize Liberation (Deck)
27. Activate Theorealize Liberation (hand): Add to your hand, or Special Summon, 1 monster from your Deck with 300 ATK/200 DEF
28. Selected Griffoh (Deck)
29. Add the card(s) to your hand
30. Activate Theorealize Liberation (GY): Treat 1 monster you control as a Tuner this turn
31. Selected Medius the Pure (M4)
32. Activate Griffoh (hand): Activate 1 of these effects
33. Set 1 card that mentions "Light and Darkness Ritual"
34. Selected Mind Shuffle (Deck)
35. Activate Mind Shuffle (S1): activate this card
36. Yes
37. Selected Skull Archfiend of Chaos (Deck)
38. Selected Skull Archfiend of Chaos (hand)
39. Yes
40. Selected Light and Darkness Ritual (Deck)
41. Activate Purification Power Patron (EMZ-L): Link Summon including this card as material
42. Selected Medicurius the Power Patron of Illusions (Extra Deck)
43. select Medius the Pure (M4)
44. Finish selection
45. Selected Magician of Dark Chaos - Black Chaos (Deck)
46. Yes
47. Special Summon 1 "Diactorus" monster
48. Selected Artmage Diactorus (Extra Deck)
49. Activate Light and Darkness Ritual (GY): Add both this card and 1 card that mentions "Light and Darkness Ritual" from your GY to your hand
50. Selected Skull Archfiend of Chaos (GY)
51. Set Spell/Trap Light and Darkness Ritual
52. Activate Light and Darkness Ritual (S2): Ritual Summon 1 "Magician of Dark Chaos - Black Chaos" or "Black Luster Soldier - Soldier of Light and Darkness" from your hand
53. Selected Magician of Dark Chaos - Black Chaos (hand)
54. Selected Griffoh (GY) value 8 or 1
55. Yes
56. Selected Pendulum Treasure (GY)
57. Special Summon (procedure) Artmage Non-Finito (Extra Deck)
58. Selected Pendulum Treasure (hand)
59. Selected Artmage Finmel (M2)
60. Yes
61. Selected Artmage Impasto -Recapture- (Deck)
62. Activate Artmage Diactorus (M1): Change the battle position of 1 monster on the field
63. Selected Artmage Non-Finito (M2)
64. Activate Skull Archfiend of Chaos (hand): Special Summon this card
65. select Prohibited Power Patron Portal - Terminus (GY)
66. select Artmage Finmel (GY)
67. select Light and Darkness Ritual (GY)
68. Default order
69. Special Summon (procedure) Dark Magician of Destruction (Extra Deck)
70. Selected Magician of Dark Chaos - Black Chaos (M4)
71. Yes
72. Selected Apprentice Illusion Magician (Deck)
73. Link Summon S:P Little Knight (Extra Deck)
74. select Skull Archfiend of Chaos (M5)
75. select Dark Magician of Destruction (M3)
76. No

End board:  LP 8000 | Hand 4 | Deck 31 | Extra 9 | GY 6 | Banished 8   Monsters: M1: Artmage Diactorus Lv8 2800/2500 ATK || M2: Artmage Non-Finito Lv7 2400/1500 DEF || M3: S:P Little Knight L2←→ 1600  || EMZ-L: Medicurius the Power Patron of Illusions L3↙↓↘ 3000    Spell/Trap: S1: Mind Shuffle || S2: Artmage Impasto -Recapture- (Set)   GY: Purification Power Patron, Nerva the Power Patron of Creation, Purification Power Patron, Pendulum Treasure, Dark Magician of Destruction, Skull Archfiend of Chaos   Banished: Artmage Vandalism -Assault- (face-down), Artmage Finmel (face-down), Black Luster Soldier - Soldier of Light and Darkness (face-down), Theorealize Liberation, Medius the Pure, Theorealize Mediu

## Order 2: best 12.15 [margin 5.73: ss_panama -1.45, elfnote 4.41, despia 8.45, angelechy 8.1] (, worst 12.15) — from tries Activate Theorealize Liberation
Others: tries Activate Theorealize Liberation → new ending 12.15 · search 12.1 · opening lanes 12.1 · tries Activate Theorealize Liberation → new early order 12.1 · tries Activate Theorealize Liberation → new ending 12.05 · tries Activate Theorealize Liberation → new early order 12.05 · v52-treasure 11.15 · v52-treasure 11.15 · tries Activate Artmage Vandalism -Assault- 10.65 · tre1 8.33 · tre1 7.84

1. Set Spell/Trap Pendulum Treasure
2. Activate Pendulum Treasure (S1): Add to Extra Deck
3. Selected Vidolium the Unstable Power Patron of Unity (Deck)
4. Yes
5. Selected Prohibited Power Patron Portal - Terminus (Deck)
6. Activate Prohibited Power Patron Portal - Terminus (hand): Send 1 "Power Patron" monster from your Deck or Extra Deck to the GY, then you can add 1 DARK Fairy monster from your Deck to your hand
7. Selected Theorealize Medius (Deck)
8. Yes
9. Selected Medius the Pure (Deck)
10. Normal Summon Medius the Pure (hand)
11. Yes
12. Selected Junoldo the Shadespirit Power Patron (Deck)
13. Special Summon it
14. Activate Junoldo the Shadespirit Power Patron (M3): Special Summon 1 "Junora the Power Patron of Tuning" from your Extra Deck
15. Selected Junora the Power Patron of Tuning (Extra Deck)
16. Yes
17. Selected Theorealize Medius (GY)
18. Activate Theorealize Medius (hand): If a "Power Patron" card is on the field: You can Special Summon this card from your hand, then you can add 1 "Theorealize" Spell/Trap from your Deck to your hand
19. Yes
20. Selected Theorealize Past Lull (Deck)
21. Link Summon Purification Power Patron (Extra Deck)
22. select Medius the Pure (M1)
23. select Junora the Power Patron of Tuning (EMZ-L)
24. Yes
25. Selected Theorealize Liberation (Deck)
26. Activate Medius the Pure (GY): Shuffle 1 monster from your hand or face-up field into the Deck, and if you do, Special Summon this card
27. Selected Ash Blossom & Joyous Spring (hand)
28. Activate Theorealize Liberation (hand): Add to your hand, or Special Summon, 1 monster from your Deck with 300 ATK/200 DEF
29. Selected Nervedo the Shadebeast Power Patron (Deck)
30. Special Summon it
31. Activate Theorealize Liberation (GY): Treat 1 monster you control as a Tuner this turn
32. Selected Theorealize Medius (M2)
33. Special Summon (procedure) Artmage Non-Finito (Extra Deck)
34. Selected Theorealize Past Lull (hand)
35. Selected Nervedo the Shadebeast Power Patron (M4)
36. Yes
37. Activate Artmage Non-Finito (M1): Set 1 "Artmage" Spell/Trap from your Deck
38. Activate Purification Power Patron (EMZ-L): Link Summon including this card as material
39. Selected Medicurius the Power Patron of Illusions (Extra Deck)
40. select Medius the Pure (M3)
41. Finish selection
42. Selected Artmage Impasto -Recapture- (Deck)
43. Selected Artmage Graflare (Deck)
44. Yes
45. Special Summon 1 "Diactorus" monster
46. Selected Artmage Diactorus (Extra Deck)
47. Activate Theorealize Past Lull (GY): Special Summon 1 Fusion, Synchro, or Xyz Monster from your GY
48. Selected Junora the Power Patron of Tuning (GY)
49. Link Summon S:P Little Knight (Extra Deck)
50. select Junora the Power Patron of Tuning (M5)
51. select Artmage Non-Finito (M1)
52. Yes
53. Selected Artmage Non-Finito (GY)

End board:  LP 8000 | Hand 3 | Deck 32 | Extra 12 | GY 4 | Banished 8   Monsters: M3: Artmage Diactorus Lv8 2800/2500 ATK || M4: Artmage Graflare Lv5 2100/1500 ATK || M5: S:P Little Knight L2←→ 1600  || EMZ-R: Medicurius the Power Patron of Illusions L3↙↓↘ 3000    Spell/Trap: S1: Artmage Impasto -Recapture- (Set)   GY: Pendulum Treasure, Prohibited Power Patron Portal - Terminus, Purification Power Patron, Junora the Power Patron of Tuning   Banished: Mind Shuffle (face-down), Fiendsmith's Tract (face-down), Theorealize Medius (face-down), Theorealize Liberation, Medius the Pure, Theorealize Medius, Theorealize Past Lull, Artmage Non-Finito   Hand: Droll & Lock Bird, Ghost Ogre & Snow Rabbit, Ash Bloss

## Order 3: best 12.4 [margin -1.25: ss_panama 1.18, elfnote -10.36, despia -1.9, angelechy 2.6] (, worst 12.4) — from tries Activate Light and Darkness Ritual
Others: search 12.05 · tries Activate Light and Darkness Ritual → new early order 12.05 · v52-treasure 10.94 · tre1 8.33 · tre1 7.84 · tries Activate Light and Darkness Ritual → new ending 7.8 · tries Activate Light and Darkness Ritual → new early order 3.55

1. Set Spell/Trap Pendulum Treasure
2. Activate Pendulum Treasure (S1): Add to Extra Deck
3. Selected Vidolium the Unstable Power Patron of Unity (Deck)
4. Yes
5. Selected Prohibited Power Patron Portal - Terminus (Deck)
6. Activate Prohibited Power Patron Portal - Terminus (hand): Send 1 "Power Patron" monster from your Deck or Extra Deck to the GY, then you can add 1 DARK Fairy monster from your Deck to your hand
7. Selected Nervedo the Shadebeast Power Patron (Deck)
8. Yes
9. Selected Medius the Pure (Deck)
10. Normal Summon Medius the Pure (hand)
11. Yes
12. Selected Junoldo the Shadespirit Power Patron (Deck)
13. Special Summon it
14. Activate Junoldo the Shadespirit Power Patron (M3): Special Summon 1 "Junora the Power Patron of Tuning" from your Extra Deck
15. Selected Junora the Power Patron of Tuning (Extra Deck)
16. Yes
17. Selected Vidolium the Unstable Power Patron of Unity (Extra Deck)
18. Activate Vidolium the Unstable Power Patron of Unity (hand): Activate it as a Pendulum Spell
19. Link Summon Purification Power Patron (Extra Deck)
20. select Junora the Power Patron of Tuning (EMZ-R)
21. select Medius the Pure (M4)
22. Yes
23. Selected Theorealize Liberation (Deck)
24. Activate Medius the Pure (GY): Shuffle 1 monster from your hand or face-up field into the Deck, and if you do, Special Summon this card
25. Selected Ash Blossom & Joyous Spring (hand)
26. Activate Theorealize Liberation (hand): Add to your hand, or Special Summon, 1 monster from your Deck with 300 ATK/200 DEF
27. Activate Purification Power Patron (EMZ-L): Link Summon including this card as material
28. Selected Medicurius the Power Patron of Illusions (Extra Deck)
29. select Medius the Pure (M1)
30. Selected Griffoh (Deck)
31. Add the card(s) to your hand
32. Activate Griffoh (hand): Activate 1 of these effects
33. Set 1 card that mentions "Light and Darkness Ritual"
34. Selected Mind Shuffle (Deck)
35. Activate Mind Shuffle (S2): activate this card
36. No
37. Activate Theorealize Liberation (GY): Treat 1 monster you control as a Tuner this turn
38. Selected Medicurius the Power Patron of Illusions (EMZ-R)
39. Activate Mind Shuffle (S2): Add 1 appropriate monster to your hand
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
51. Selected Light and Darkness Ritual (GY)
52. Activate Vidolium the Unstable Power Patron of Unity (S1): Activate 1 of these effects
53. Special Summon 1 "Power Patron" monster
54. Selected Nervedo the Shadebeast Power Patron (GY)
55. Special Summon (procedure) Artmage Non-Finito (Extra Deck)
56. Selected Light and Darkness Ritual (hand)
57. Selected Nervedo the Shadebeast Power Patron (M1)
58. Yes
59. Activate Artmage Non-Finito (M3): Set 1 "Artmage" Spell/Trap from your Deck
60. Selected Artmage Impasto -Recapture- (Deck)
61. Selected Artmage Finmel (Deck)

End board:  LP 8000 | Hand 4 | Deck 29 | Extra 14 | GY 5 | Banished 6   Monsters: M3: Artmage Non-Finito Lv7 2400/1500 ATK || M4: Magician of Dark Chaos - Black Chaos Lv8 2800/2600 ATK || M5: Artmage Finmel Lv7 2400/1500 ATK || EMZ-R: Medicurius the Power Patron of Illusions L3↙↓↘ 3000    Spell/Trap: S1: Artmage Impasto -Recapture- (Set) || S2: Mind Shuffle   GY: Pendulum Treasure, Prohibited Power Patron Portal - Terminus, Junora the Power Patron of Tuning, Purification Power Patron, Light and Darkness Ritual   Banished: Pendulum Treasure (face-down), Fiendsmith's Tract (face-down), Small World (face-down), Medius the Pure, Theorealize Liberation, Griffoh   Hand: Skull Archfiend of Chaos, Droll & Lock

## Order 4: best 12.1 [margin 4.32: ss_panama 5.16, elfnote 0.63, despia 3.7, angelechy 8.1] (, worst 12.1) — from tries Normal Summon Theorealize Medius
Others: opening lanes 12.1 · tries Normal Summon Theorealize Medius → new ending 12.1 · tries Normal Summon Theorealize Medius → new ending 12.1 · tries Normal Summon Theorealize Medius → new early order 12.05 · v52-treasure 10.52 · search 8.85 · tre1 8.33 · tre1 7.84 · tries Normal Summon Theorealize Medius → new early order 3.55

1. Set Spell/Trap Pendulum Treasure
2. Activate Pendulum Treasure (S1): Add to Extra Deck
3. Selected Vidolium the Unstable Power Patron of Unity (Deck)
4. Yes
5. Selected Prohibited Power Patron Portal - Terminus (Deck)
6. Activate Prohibited Power Patron Portal - Terminus (hand): Send 1 "Power Patron" monster from your Deck or Extra Deck to the GY, then you can add 1 DARK Fairy monster from your Deck to your hand
7. Selected Theorealize Medius (Deck)
8. Yes
9. Selected Medius the Pure (Deck)
10. Normal Summon Medius the Pure (hand)
11. Yes
12. Selected Nervedo the Shadebeast Power Patron (Deck)
13. Special Summon it
14. Activate Nervedo the Shadebeast Power Patron (M3): Special Summon 1 "Nerva the Power Patron of Creation" from your Extra Deck
15. Selected Nerva the Power Patron of Creation (Extra Deck)
16. Yes
17. Selected Junoldo the Shadespirit Power Patron (Deck)
18. Activate Junoldo the Shadespirit Power Patron (M3): Special Summon 1 "Junora the Power Patron of Tuning" from your Extra Deck
19. Selected Junora the Power Patron of Tuning (Extra Deck)
20. Yes
21. Selected Nervedo the Shadebeast Power Patron (Extra Deck)
22. Link Summon Purification Power Patron (Extra Deck)
23. select Medius the Pure (M4)
24. select Junora the Power Patron of Tuning (EMZ-L)
25. Yes
26. Selected Theorealize Medius (Deck)
27. Activate Theorealize Medius (hand): If a "Power Patron" card is on the field: You can Special Summon this card from your hand, then you can add 1 "Theorealize" Spell/Trap from your Deck to your hand
28. Yes
29. Selected Theorealize Past Lull (Deck)
30. Special Summon (procedure) Artmage Non-Finito (Extra Deck)
31. Selected Theorealize Past Lull (hand)
32. Selected Nervedo the Shadebeast Power Patron (hand)
33. Yes
34. Selected Artmage Impasto -Recapture- (Deck)
35. Activate Medius the Pure (GY): Shuffle 1 monster from your hand or face-up field into the Deck, and if you do, Special Summon this card
36. Selected Ash Blossom & Joyous Spring (hand)
37. Activate Purification Power Patron (EMZ-R): Link Summon including this card as material
38. Selected Medicurius the Power Patron of Illusions (Extra Deck)
39. select Medius the Pure (M4)
40. Finish selection
41. Yes
42. Special Summon 1 "Diactorus" monster
43. Selected Artmage Diactorus (Extra Deck)
44. Activate Theorealize Past Lull (GY): Special Summon 1 Fusion, Synchro, or Xyz Monster from your GY
45. Selected Junora the Power Patron of Tuning (GY)
46. Link Summon S:P Little Knight (Extra Deck)
47. select Junora the Power Patron of Tuning (M3)
48. select Artmage Non-Finito (M5)
49. Yes
50. Selected Theorealize Medius (GY)

End board:  LP 8000 | Hand 3 | Deck 30 | Extra 10 | GY 6 | Banished 10   Monsters: M1: Nerva the Power Patron of Creation Lv10 3300/3300 ATK || M2: Artmage Diactorus Lv8 2800/2500 ATK || M3: S:P Little Knight L2←→ 1600  || EMZ-L: Medicurius the Power Patron of Illusions L3↙↓↘ 3000    Spell/Trap: S1: Artmage Impasto -Recapture- (Set)   GY: Pendulum Treasure, Prohibited Power Patron Portal - Terminus, Nervedo the Shadebeast Power Patron, Purification Power Patron, Junora the Power Patron of Tuning, Artmage Non-Finito   Banished: Black Chaos (face-down), Artmage Finmel (face-down), Lacrima the Crimson Tears (face-down), Artmage Vandalism -Assault- (face-down), Artmage Vandalism -Assault- (face-down), Infi

## Order 5: best 12.1 [margin 3.39: ss_panama 4.04, elfnote 0.35, despia -0.7, angelechy 8.03] (, worst 12.1) — from tries Special Summon (procedure) Nervedo the Shadebeast Power Patron
Others: search 11.25 · v52-treasure 11.15 · v52-treasure 11.15 · tries Activate Vidolium the Unstable Power Patron of Unity 9.41 · tre1 8.33 · tre1 7.84

1. Activate Pendulum Treasure (hand): Add to Extra Deck
2. Selected Vidolium the Unstable Power Patron of Unity (Deck)
3. Yes
4. Selected Prohibited Power Patron Portal - Terminus (Deck)
5. Set Spell/Trap Prohibited Power Patron Portal - Terminus
6. Activate Prohibited Power Patron Portal - Terminus (S1): Send 1 "Power Patron" monster from your Deck or Extra Deck to the GY, then you can add 1 DARK Fairy monster from your Deck to your hand
7. Selected Medicurius the Power Patron of Illusions (Extra Deck)
8. Yes
9. Selected Medius the Pure (Deck)
10. Normal Summon Medius the Pure (hand)
11. Yes
12. Selected Nervedo the Shadebeast Power Patron (Deck)
13. Special Summon it
14. Activate Nervedo the Shadebeast Power Patron (M3): Special Summon 1 "Nerva the Power Patron of Creation" from your Extra Deck
15. Selected Nerva the Power Patron of Creation (Extra Deck)
16. Yes
17. Selected Junoldo the Shadespirit Power Patron (Deck)
18. Activate Junoldo the Shadespirit Power Patron (M5): Special Summon 1 "Junora the Power Patron of Tuning" from your Extra Deck
19. Selected Junora the Power Patron of Tuning (Extra Deck)
20. Yes
21. Selected Nervedo the Shadebeast Power Patron (Extra Deck)
22. Link Summon Purification Power Patron (Extra Deck)
23. select Junora the Power Patron of Tuning (M1)
24. select Medius the Pure (M4)
25. Yes
26. Selected Theorealize Medius (Deck)
27. Activate Theorealize Medius (hand): If a "Power Patron" card is on the field: You can Special Summon this card from your hand, then you can add 1 "Theorealize" Spell/Trap from your Deck to your hand
28. Yes
29. Selected Theorealize Past Lull (Deck)
30. Activate Medius the Pure (GY): Shuffle 1 monster from your hand or face-up field into the Deck, and if you do, Special Summon this card
31. Selected Ash Blossom & Joyous Spring (hand)
32. Special Summon (procedure) Artmage Non-Finito (Extra Deck)
33. Selected Theorealize Past Lull (hand)
34. Selected Nervedo the Shadebeast Power Patron (hand)
35. Yes
36. Activate Purification Power Patron (EMZ-R): Link Summon including this card as material
37. Selected Medicurius the Power Patron of Illusions (Extra Deck)
38. select Medius the Pure (M4)
39. Finish selection
40. Selected Artmage Impasto -Recapture- (Deck)
41. Yes
42. Special Summon 1 "Diactorus" monster
43. Selected Artmage Diactorus (Extra Deck)
44. Activate Theorealize Past Lull (GY): Special Summon 1 Fusion, Synchro, or Xyz Monster from your GY
45. Selected Junora the Power Patron of Tuning (GY)
46. Link Summon S:P Little Knight (Extra Deck)
47. select Artmage Non-Finito (M5)
48. select Junora the Power Patron of Tuning (M2)
49. No

End board:  LP 8000 | Hand 3 | Deck 31 | Extra 9 | GY 7 | Banished 9   Monsters: M1: Artmage Diactorus Lv8 2800/2500 ATK || M2: S:P Little Knight L2←→ 1600  || M3: Nerva the Power Patron of Creation Lv10 3300/3300 DEF || EMZ-L: Medicurius the Power Patron of Illusions L3↙↓↘ 3000    Spell/Trap: S1: Artmage Impasto -Recapture- (Set)   GY: Pendulum Treasure, Medicurius the Power Patron of Illusions, Prohibited Power Patron Portal - Terminus, Nervedo the Shadebeast Power Patron, Purification Power Patron, Junora the Power Patron of Tuning, Artmage Non-Finito   Banished: Skull Archfiend of Chaos (face-down), Artmage Finmel (face-down), Griffoh (face-down), Pendulum Treasure (face-down), Ars Magna of Infinit

## Order 6: best 13.9 [margin 7.44: ss_panama 3.35, elfnote 6.18, despia 10.2, angelechy 9.75] (, worst 13.9) — from opening lanes → new ending
Others: opening lanes → new ending → new ending 13.9 · opening lanes → new ending → new early order 13.9 · opening lanes 13.15 · search 12.15 · opening lanes → new ending → new early order 12.1 · v52-treasure 11.15 · v52-treasure 11.15 · tre1 8.33 · tre1 7.84

1. Set Spell/Trap Pendulum Treasure
2. Activate Pendulum Treasure (S1): Add to Extra Deck
3. Selected Vidolium the Unstable Power Patron of Unity (Deck)
4. Yes
5. Selected Prohibited Power Patron Portal - Terminus (Deck)
6. Set Spell/Trap Prohibited Power Patron Portal - Terminus
7. Activate Prohibited Power Patron Portal - Terminus (S1): Send 1 "Power Patron" monster from your Deck or Extra Deck to the GY, then you can add 1 DARK Fairy monster from your Deck to your hand
8. Selected Purification Power Patron (Extra Deck)
9. Yes
10. Selected Medius the Pure (Deck)
11. Normal Summon Medius the Pure (hand)
12. Yes
13. Selected Nervedo the Shadebeast Power Patron (Deck)
14. Special Summon it
15. Activate Nervedo the Shadebeast Power Patron (M4): Special Summon 1 "Nerva the Power Patron of Creation" from your Extra Deck
16. Selected Nerva the Power Patron of Creation (Extra Deck)
17. Yes
18. Selected Junoldo the Shadespirit Power Patron (Deck)
19. Activate Junoldo the Shadespirit Power Patron (M4): Special Summon 1 "Junora the Power Patron of Tuning" from your Extra Deck
20. Selected Junora the Power Patron of Tuning (Extra Deck)
21. Yes
22. Selected Nervedo the Shadebeast Power Patron (Extra Deck)
23. Link Summon Purification Power Patron (Extra Deck)
24. select Medius the Pure (M3)
25. select Junora the Power Patron of Tuning (EMZ-R)
26. Yes
27. Selected Theorealize Medius (Deck)
28. Activate Medius the Pure (GY): Shuffle 1 monster from your hand or face-up field into the Deck, and if you do, Special Summon this card
29. Selected Ash Blossom & Joyous Spring (hand)
30. Activate Theorealize Medius (hand): If a "Power Patron" card is on the field: You can Special Summon this card from your hand, then you can add 1 "Theorealize" Spell/Trap from your Deck to your hand
31. Yes
32. Selected Theorealize Liberation (Deck)
33. Activate Purification Power Patron (EMZ-L): Link Summon including this card as material
34. Activate Theorealize Liberation (hand): Add to your hand, or Special Summon, 1 monster from your Deck with 300 ATK/200 DEF
35. Selected Griffoh (Deck)
36. Add the card(s) to your hand
37. Selected Medicurius the Power Patron of Illusions (Extra Deck)
38. select Medius the Pure (M4)
39. Finish selection
40. Yes
41. Special Summon 1 "Diactorus" monster
42. Selected Artmage Diactorus (Extra Deck)
43. Activate Artmage Diactorus (M3): Change the battle position of 1 monster on the field
44. Selected Nerva the Power Patron of Creation (M1)
45. Activate Griffoh (hand): Activate 1 of these effects
46. Set 1 card that mentions "Light and Darkness Ritual"
47. Selected Mind Shuffle (Deck)
48. Activate Mind Shuffle (S1): activate this card
49. No
50. Activate Mind Shuffle (S1): Add 1 appropriate monster to your hand
51. Selected Skull Archfiend of Chaos (Deck)
52. Selected Skull Archfiend of Chaos (hand)
53. Yes
54. Selected Light and Darkness Ritual (Deck)
55. Selected Magician of Dark Chaos - Black Chaos (Deck)
56. Activate Light and Darkness Ritual (GY): Add both this card and 1 card that mentions "Light and Darkness Ritual" from your GY to your hand
57. Selected Skull Archfiend of Chaos (GY)
58. Activate Light and Darkness Ritual (hand): Ritual Summon 1 "Magician of Dark Chaos - Black Chaos" or "Black Luster Soldier - Soldier of Light and Darkness" from your hand
59. Selected Magician of Dark Chaos - Black Chaos (hand)
60. Selected Griffoh (GY) value 8 or 1
61. Yes
62. Selected Light and Darkness Ritual (GY)
63. Special Summon (procedure) Artmage Non-Finito (Extra Deck)
64. Selected Light and Darkness Ritual (hand)
65. Selected Nervedo the Shadebeast Power Patron (hand)
66. Yes
67. Selected Artmage Impasto -Recapture- (Deck)

End board:  LP 8000 | Hand 4 | Deck 26 | Extra 10 | GY 8 | Banished 9   Monsters: M1: Nerva the Power Patron of Creation Lv10 3300/3300 DEF || M3: Artmage Diactorus Lv8 2800/2500 ATK || M4: Magician of Dark Chaos - Black Chaos Lv8 2800/2600 ATK || M5: Artmage Non-Finito Lv7 2400/1500 ATK || EMZ-R: Medicurius the Power Patron of Illusions L3↙↓↘ 3000    Spell/Trap: S1: Mind Shuffle || S2: Artmage Impasto -Recapture- (Set)   GY: Pendulum Treasure, Purification Power Patron, Prohibited Power Patron Portal - Terminus, Junora the Power Patron of Tuning, Theorealize Liberation, Purification Power Patron, Light and Darkness Ritual, Nervedo the Shadebeast Power Patron   Banished: Plundered Power Patron Plane - 

## Order 7: best 12.05 [margin 3.43: ss_panama 4.54, elfnote 0.47, despia -1.17, angelechy 8.1] (, worst 12.05) — from search
Others: search → new early order 12.05 · search → new ending 12.05 · tries Normal Summon Nervedo the Shadebeast Power Patron 11.5 · tre1 11.39 · v52-treasure 10.58 · search → new early order 9.1 · search → new ending 6.98

1. Activate Pendulum Treasure (hand): Add to Extra Deck
2. Selected Vidolium the Unstable Power Patron of Unity (Deck)
3. Yes
4. Selected Prohibited Power Patron Portal - Terminus (Deck)
5. Set Spell/Trap Prohibited Power Patron Portal - Terminus
6. Activate Prohibited Power Patron Portal - Terminus (S1): Send 1 "Power Patron" monster from your Deck or Extra Deck to the GY, then you can add 1 DARK Fairy monster from your Deck to your hand
7. Selected Medicurius the Power Patron of Illusions (Extra Deck)
8. Yes
9. Selected Medius the Pure (Deck)
10. Normal Summon Medius the Pure (hand)
11. Yes
12. Selected Junoldo the Shadespirit Power Patron (Deck)
13. Special Summon it
14. Activate Junoldo the Shadespirit Power Patron (M3): Special Summon 1 "Junora the Power Patron of Tuning" from your Extra Deck
15. Selected Junora the Power Patron of Tuning (Extra Deck)
16. Yes
17. Selected Prohibited Power Patron Portal - Terminus (GY)
18. Link Summon Purification Power Patron (Extra Deck)
19. select Medius the Pure (M4)
20. select Junora the Power Patron of Tuning (EMZ-R)
21. Yes
22. Selected Theorealize Medius (Deck)
23. Activate Medius the Pure (GY): Shuffle 1 monster from your hand or face-up field into the Deck, and if you do, Special Summon this card
24. Selected Ash Blossom & Joyous Spring (hand)
25. Activate Theorealize Medius (hand): If a "Power Patron" card is on the field: You can Special Summon this card from your hand, then you can add 1 "Theorealize" Spell/Trap from your Deck to your hand
26. Yes
27. Selected Theorealize Liberation (Deck)
28. Activate Theorealize Liberation (hand): Add to your hand, or Special Summon, 1 monster from your Deck with 300 ATK/200 DEF
29. Activate Purification Power Patron (EMZ-R): Link Summon including this card as material
30. Selected Medicurius the Power Patron of Illusions (Extra Deck)
31. select Medius the Pure (M4)
32. Finish selection
33. Selected Nervedo the Shadebeast Power Patron (Deck)
34. Special Summon it
35. Yes
36. Special Summon 1 "Diactorus" monster
37. Selected Artmage Diactorus (Extra Deck)
38. Special Summon (procedure) Artmage Non-Finito (Extra Deck)
39. Selected Prohibited Power Patron Portal - Terminus (hand)
40. Selected Nervedo the Shadebeast Power Patron (M2)
41. Yes
42. Activate Artmage Non-Finito (M2): Set 1 "Artmage" Spell/Trap from your Deck
43. Selected Artmage Impasto -Recapture- (Deck)
44. Selected Artmage Graflare (Deck)

End board:  LP 8000 | Hand 3 | Deck 33 | Extra 12 | GY 6 | Banished 5   Monsters: M1: Artmage Diactorus Lv8 2800/2500 ATK || M2: Artmage Non-Finito Lv7 2400/1500 ATK || M3: Artmage Graflare Lv5 2100/1500 ATK || EMZ-L: Medicurius the Power Patron of Illusions L3↙↓↘ 3000    Spell/Trap: S1: Artmage Impasto -Recapture- (Set)   GY: Pendulum Treasure, Medicurius the Power Patron of Illusions, Junora the Power Patron of Tuning, Purification Power Patron, Theorealize Liberation, Prohibited Power Patron Portal - Terminus   Banished: Artmage Finmel (face-down), Artmage Vandalism -Assault- (face-down), Small World (face-down), Medius the Pure, Theorealize Medius   Hand: Ghost Ogre & Snow Rabbit, Droll & Lock Bird

## Order 8: best 13.9 [margin 5.88: ss_panama 4.9, elfnote null, despia 0.48, angelechy 9.8] (, worst 13.9) — from opening lanes → new ending
Others: opening lanes 12.1 · opening lanes → new ending 12.1 · v52-treasure 11.3 · opening lanes → new early order 11.3 · opening lanes → new ending → new early order 11.3 · tries Activate Ars Magna - "Citrinitas" 10.58 · search 10.1 · tre1 9.93 · tries Activate Ars Magna - "Citrinitas" 9.93

1. Set Spell/Trap Pendulum Treasure
2. Activate Pendulum Treasure (S1): Add to Extra Deck
3. Selected Vidolium the Unstable Power Patron of Unity (Deck)
4. Yes
5. Selected Prohibited Power Patron Portal - Terminus (Deck)
6. Activate Prohibited Power Patron Portal - Terminus (hand): Send 1 "Power Patron" monster from your Deck or Extra Deck to the GY, then you can add 1 DARK Fairy monster from your Deck to your hand
7. Selected Nervedo the Shadebeast Power Patron (Deck)
8. Yes
9. Selected Medius the Pure (Deck)
10. Normal Summon Medius the Pure (hand)
11. Yes
12. Selected Nervedo the Shadebeast Power Patron (Deck)
13. Special Summon it
14. Activate Nervedo the Shadebeast Power Patron (M4): Special Summon 1 "Nerva the Power Patron of Creation" from your Extra Deck
15. Selected Nerva the Power Patron of Creation (Extra Deck)
16. Yes
17. Selected Junoldo the Shadespirit Power Patron (Deck)
18. Activate Junoldo the Shadespirit Power Patron (M1): Special Summon 1 "Junora the Power Patron of Tuning" from your Extra Deck
19. Selected Junora the Power Patron of Tuning (Extra Deck)
20. Yes
21. Selected Nervedo the Shadebeast Power Patron (Extra Deck)
22. Link Summon Purification Power Patron (Extra Deck)
23. select Medius the Pure (M3)
24. select Junora the Power Patron of Tuning (M1)
25. Yes
26. Selected Theorealize Medius (Deck)
27. Activate Theorealize Medius (hand): If a "Power Patron" card is on the field: You can Special Summon this card from your hand, then you can add 1 "Theorealize" Spell/Trap from your Deck to your hand
28. Yes
29. Selected Theorealize Liberation (Deck)
30. Activate Medius the Pure (GY): Shuffle 1 monster from your hand or face-up field into the Deck, and if you do, Special Summon this card
31. Selected Ash Blossom & Joyous Spring (hand)
32. Activate Purification Power Patron (EMZ-R): Link Summon including this card as material
33. Activate Theorealize Liberation (hand): Add to your hand, or Special Summon, 1 monster from your Deck with 300 ATK/200 DEF
34. Selected Griffoh (Deck)
35. Add the card(s) to your hand
36. Selected Medicurius the Power Patron of Illusions (Extra Deck)
37. select Medius the Pure (M5)
38. Finish selection
39. Yes
40. Special Summon 1 "Diactorus" monster
41. Selected Artmage Diactorus (Extra Deck)
42. Activate Artmage Diactorus (M1): Change the battle position of 1 monster on the field
43. Selected Nerva the Power Patron of Creation (M4)
44. Activate Griffoh (hand): Activate 1 of these effects
45. Set 1 card that mentions "Light and Darkness Ritual"
46. Selected Mind Shuffle (Deck)
47. Activate Mind Shuffle (S1): activate this card
48. No
49. Activate Mind Shuffle (S1): Add 1 appropriate monster to your hand
50. Selected Skull Archfiend of Chaos (Deck)
51. Selected Skull Archfiend of Chaos (hand)
52. Yes
53. Selected Light and Darkness Ritual (Deck)
54. Selected Magician of Dark Chaos - Black Chaos (Deck)
55. Activate Light and Darkness Ritual (GY): Add both this card and 1 card that mentions "Light and Darkness Ritual" from your GY to your hand
56. Selected Skull Archfiend of Chaos (GY)
57. Activate Light and Darkness Ritual (hand): Ritual Summon 1 "Magician of Dark Chaos - Black Chaos" or "Black Luster Soldier - Soldier of Light and Darkness" from your hand
58. Selected Magician of Dark Chaos - Black Chaos (hand)
59. Selected Griffoh (GY) value 8 or 1
60. Yes
61. Selected Prohibited Power Patron Portal - Terminus (GY)
62. Special Summon (procedure) Artmage Non-Finito (Extra Deck)
63. Selected Prohibited Power Patron Portal - Terminus (hand)
64. Selected Nervedo the Shadebeast Power Patron (hand)
65. Yes
66. Selected Artmage Impasto -Recapture- (Deck)

End board:  LP 8000 | Hand 4 | Deck 25 | Extra 11 | GY 8 | Banished 9   Monsters: M1: Artmage Diactorus Lv8 2800/2500 ATK || M2: Magician of Dark Chaos - Black Chaos Lv8 2800/2600 ATK || M3: Artmage Non-Finito Lv7 2400/1500 ATK || M4: Nerva the Power Patron of Creation Lv10 3300/3300 DEF || EMZ-L: Medicurius the Power Patron of Illusions L3↙↓↘ 3000    Spell/Trap: S1: Mind Shuffle || S2: Artmage Impasto -Recapture- (Set)   GY: Pendulum Treasure, Nervedo the Shadebeast Power Patron, Junora the Power Patron of Tuning, Theorealize Liberation, Purification Power Patron, Light and Darkness Ritual, Prohibited Power Patron Portal - Terminus, Nervedo the Shadebeast Power Patron   Banished: Small World (face-dow

