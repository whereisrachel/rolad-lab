# Evolved lines — Prohibited Power Patron Portal - Terminus, Ash Blossom & Joyous Spring, Ash Blossom & Joyous Spring, Droll & Lock Bird, Ghost Ogre & Snow Rabbit (findlist-1100)
2026-11-26T02:34:38.435Z

8 deck orders (different face-down banishes / draws), 3 opponent hands x o_ss_panama + o_elfnote + o_despia + o_angelechy per line, 5 min searches, 0 mutation rounds.
Fitness = end-board interruptions (the lab scorer, src/disrupt.mjs: wipe 2, negate 1-1.5, banish/protection less; hand traps kept count 1 each). The winner of each order is also played into the opponent decks: margin after their turn shown beside it.

**Margin after their turn (winners): average null** (worst 99)

**Best line per deck order: average 13.36** (worst order 12.1). Winner came from: search 3, opening lanes 1, drawpre-terminus-c 3, drawpre-terminus-a 1

| seed line | works as written | its score when it works | seed start + search finish (all orders) |
|---|---|---|---|
| drawpre-terminus-a | 8/8 | 3.7 | 12.9 |
| drawpre-terminus-b | 8/8 | 3.7 | 12.81 |
| drawpre-terminus-c | 8/8 | 3.7 | 13.55 |

## Weak points found automatically
Cards whose face-down banish (by your own costs) hurt the best line most (average best line without vs with that card banished):

| card | orders where it was banished | drop |
|---|---|---|
| Theorealize Liberation | 2/8 | 1.18 |
| Ars Magna - "Citrinitas" | 3/8 | 1.1 |
| Vidolium the Unstable Power Patron of Unity | 3/8 | 0.73 |
| Griffoh | 3/8 | 0.73 |
| Theorealize Medius | 6/8 | 0.66 |
| Skull Archfiend of Chaos | 2/8 | 0.54 |
| Theorealize Past Lull | 3/8 | 0.46 |
| Magician of Dark Chaos - Black Chaos | 5/8 | 0.42 |
| Lacrima the Crimson Tears | 3/8 | 0.12 |
| Medius the Pure | 4/8 | 0.09 |

List changes proposed for the list test (data/proposals-findlist-1100.json):
- +1 Theorealize Liberation, −1 Plundered Power Patron Plane - Vidolia — Theorealize Liberation: best line 1.18 worse when a cost banished it (2 of 8 orders) — Prohibited Power Patron Portal - Terminus
- +1 Ars Magna - "Citrinitas", −1 Artmage Vandalism -Assault- — Ars Magna - "Citrinitas": best line 1.1 worse when a cost banished it (3 of 8 orders) — Prohibited Power Patron Portal - Terminus
- +1 Vidolium the Unstable Power Patron of Unity, −1 Small World — Vidolium the Unstable Power Patron of Unity: best line 0.73 worse when a cost banished it (3 of 8 orders) — Prohibited Power Patron Portal - Terminus
- +1 Griffoh, −1 Plundered Power Patron Plane - Vidolia — Griffoh: best line 0.73 worse when a cost banished it (3 of 8 orders) — Prohibited Power Patron Portal - Terminus
- +1 Theorealize Liberation — Theorealize Liberation: best line 1.18 worse when a cost banished it (2 of 8 orders) — Prohibited Power Patron Portal - Terminus (add only: deck grows, up to 60)
- +1 Ars Magna - "Citrinitas" — Ars Magna - "Citrinitas": best line 1.1 worse when a cost banished it (3 of 8 orders) — Prohibited Power Patron Portal - Terminus (add only: deck grows, up to 60)
- +1 Vidolium the Unstable Power Patron of Unity — Vidolium the Unstable Power Patron of Unity: best line 0.73 worse when a cost banished it (3 of 8 orders) — Prohibited Power Patron Portal - Terminus (add only: deck grows, up to 60)
- +1 Griffoh — Griffoh: best line 0.73 worse when a cost banished it (3 of 8 orders) — Prohibited Power Patron Portal - Terminus (add only: deck grows, up to 60)

Effects the search had not used, tried on purpose (best result so far):
- Activate Griffoh: 4.67
- Activate Nervedo the Shadebeast Power Patron: 4.18
- Activate Artmage Diactorus: 3.37
- Activate Artmage Vandalism -Assault-: 2.73
- Activate Vidolium the Unstable Power Patron of Unity: 2.37
- Activate Nervedo the Shadebeast Power Patron: 2.34
- Activate Junoldo the Shadespirit Power Patron: 2.14
- Activate Nervedo the Shadebeast Power Patron: 1.81

## Order 1: best 13.05 (, worst 13.05) — from search
Others: drawpre-terminus-c 3.7 · drawpre-terminus-a 3.7 · drawpre-terminus-b 3.7

1. Activate Prohibited Power Patron Portal - Terminus (hand): Send 1 "Power Patron" monster from your Deck or Extra Deck to the GY, then you can add 1 DARK Fairy monster from your Deck to your hand
2. Selected Junoldo the Shadespirit Power Patron (Deck)
3. Yes
4. Selected Medius the Pure (Deck)
5. Normal Summon Medius the Pure (hand)
6. Yes
7. Selected Vidolium the Unstable Power Patron of Unity (Deck)
8. #573
9. Activate Vidolium the Unstable Power Patron of Unity (hand): #1160
10. Activate Vidolium the Unstable Power Patron of Unity (S1): Activate 1 of these effects
11. Special Summon 1 "Power Patron" monster
12. Selected Junoldo the Shadespirit Power Patron (GY)
13. Yes
14. Selected Nervedo the Shadebeast Power Patron (Deck)
15. Activate Junoldo the Shadespirit Power Patron (M5): Special Summon 1 "Junora the Power Patron of Tuning" from your Extra Deck
16. Selected Junora the Power Patron of Tuning (Extra Deck)
17. Yes
18. Selected Prohibited Power Patron Portal - Terminus (GY)
19. Special Summon (procedure) Artmage Non-Finito (Extra Deck)
20. Selected Prohibited Power Patron Portal - Terminus (hand)
21. Selected Nervedo the Shadebeast Power Patron (hand)
22. Yes
23. Selected Artmage Impasto -Recapture- (Deck)
24. Link Summon Purification Power Patron (Extra Deck)
25. select Junora the Power Patron of Tuning (EMZ-L)
26. select Medius the Pure (M4)
27. Yes
28. Selected Theorealize Medius (Deck)
29. Activate Medius the Pure (GY): Shuffle 1 monster from your hand or face-up field into the Deck, and if you do, Special Summon this card
30. Selected Ash Blossom & Joyous Spring (hand)
31. Activate Theorealize Medius (hand): If a "Power Patron" card is on the field: You can Special Summon this card from your hand, then you can add 1 "Theorealize" Spell/Trap from your Deck to your hand
32. Yes
33. Selected Theorealize Liberation (Deck)
34. Activate Theorealize Liberation (hand): Add to your hand, or Special Summon, 1 monster from your Deck with 300 ATK/200 DEF
35. Activate Purification Power Patron (EMZ-R): Link Summon including this card as material
36. Selected Medicurius the Power Patron of Illusions (Extra Deck)
37. select Medius the Pure (M3)
38. Finish selection
39. Selected Nervedo the Shadebeast Power Patron (Deck)
40. Special Summon it
41. Yes
42. Special Summon 1 "Diactorus" monster
43. Selected Artmage Diactorus (Extra Deck)
44. Activate Nervedo the Shadebeast Power Patron (M3): Special Summon 1 "Nerva the Power Patron of Creation" from your Extra Deck
45. Selected Nerva the Power Patron of Creation (Extra Deck)
46. Yes
47. Selected Artmage Graflare (Deck)

End board:  LP 8000 | Hand 3 | Deck 30 | Extra 12 | GY 4 | Banished 9   Monsters: M1: Artmage Graflare Lv5 2100/1500 ATK || M3: Nerva the Power Patron of Creation Lv10 3300/3300 ATK || M4: Artmage Diactorus Lv8 2800/2500 ATK || M5: Artmage Non-Finito Lv7 2400/1500 ATK || EMZ-R: Medicurius the Power Patron of Illusions L3↙↓↘ 3000    Spell/Trap: S1: Artmage Impasto -Recapture- (Set)   GY: Prohibited Power Patron Portal - Terminus, Nervedo the Shadebeast Power Patron, Junora the Power Patron of Tuning, Purification Power Patron   Banished: Artmage Vandalism -Assault- (face-down), Small World (face-down), Lacrima the Crimson Tears (face-down), Medius the Pure, Theorealize Medius, Theorealize Liberation, Me

## Order 2: best 14.05 (, worst 14.05) — from opening lanes
Others: drawpre-terminus-b 13.45 · search 13.2 · drawpre-terminus-a 12.15 · drawpre-terminus-a 3.7 · drawpre-terminus-c 3.7 · drawpre-terminus-b 3.7

1. Activate Prohibited Power Patron Portal - Terminus (hand): Send 1 "Power Patron" monster from your Deck or Extra Deck to the GY, then you can add 1 DARK Fairy monster from your Deck to your hand
2. Selected Nervedo the Shadebeast Power Patron (Deck)
3. Yes
4. Selected Medius the Pure (Deck)
5. Normal Summon Medius the Pure (hand)
6. Yes
7. Selected Vidolium the Unstable Power Patron of Unity (Deck)
8. #573
9. Activate Vidolium the Unstable Power Patron of Unity (hand): #1160
10. Activate Vidolium the Unstable Power Patron of Unity (S1): Activate 1 of these effects
11. Special Summon 1 "Power Patron" monster
12. Selected Nervedo the Shadebeast Power Patron (GY)
13. Yes
14. Selected Nervedo the Shadebeast Power Patron (Deck)
15. Activate Nervedo the Shadebeast Power Patron (M4): Special Summon 1 "Nerva the Power Patron of Creation" from your Extra Deck
16. Selected Nerva the Power Patron of Creation (Extra Deck)
17. Yes
18. Selected Junoldo the Shadespirit Power Patron (Deck)
19. Activate Junoldo the Shadespirit Power Patron (M5): Special Summon 1 "Junora the Power Patron of Tuning" from your Extra Deck
20. Selected Junora the Power Patron of Tuning (Extra Deck)
21. Yes
22. Selected Prohibited Power Patron Portal - Terminus (GY)
23. Special Summon (procedure) Artmage Non-Finito (Extra Deck)
24. Selected Prohibited Power Patron Portal - Terminus (hand)
25. Selected Nervedo the Shadebeast Power Patron (hand)
26. Yes
27. Selected Artmage Impasto -Recapture- (Deck)
28. Link Summon Purification Power Patron (Extra Deck)
29. select Medius the Pure (M3)
30. select Junora the Power Patron of Tuning (EMZ-L)
31. Yes
32. Selected Theorealize Medius (Deck)
33. Activate Theorealize Medius (hand): If a "Power Patron" card is on the field: You can Special Summon this card from your hand, then you can add 1 "Theorealize" Spell/Trap from your Deck to your hand
34. Yes
35. Selected Theorealize Liberation (Deck)
36. Activate Medius the Pure (GY): Shuffle 1 monster from your hand or face-up field into the Deck, and if you do, Special Summon this card
37. Selected Ash Blossom & Joyous Spring (hand)
38. Activate Theorealize Liberation (hand): Add to your hand, or Special Summon, 1 monster from your Deck with 300 ATK/200 DEF
39. Activate Purification Power Patron (EMZ-L): Link Summon including this card as material
40. Selected Medicurius the Power Patron of Illusions (Extra Deck)
41. select Medius the Pure (M3)
42. Finish selection
43. Selected Griffoh (Deck)
44. #573
45. Yes
46. Special Summon 1 "Diactorus" monster
47. Selected Artmage Diactorus (Extra Deck)
48. Activate Griffoh (hand): Activate 1 of these effects
49. Set 1 card that mentions "Light and Darkness Ritual"
50. Selected Mind Shuffle (Deck)
51. Activate Mind Shuffle (S2): activate this card
52. Yes
53. Selected Skull Archfiend of Chaos (Deck)
54. Selected Skull Archfiend of Chaos (hand)
55. Yes
56. Selected Light and Darkness Ritual (Deck)
57. Selected Magician of Dark Chaos - Black Chaos (Deck)
58. Activate Light and Darkness Ritual (GY): Add both this card and 1 card that mentions "Light and Darkness Ritual" from your GY to your hand
59. Selected Skull Archfiend of Chaos (GY)
60. Activate Light and Darkness Ritual (hand): Ritual Summon 1 "Magician of Dark Chaos - Black Chaos" or "Black Luster Soldier - Soldier of Light and Darkness" from your hand
61. Selected Magician of Dark Chaos - Black Chaos (hand)
62. Selected Griffoh (GY) value 8 or 1
63. Yes
64. Selected Prohibited Power Patron Portal - Terminus (GY)

End board:  LP 8000 | Hand 5 | Deck 26 | Extra 12 | GY 5 | Banished 9   Monsters: M1: Artmage Non-Finito Lv7 2400/1500 ATK || M2: Magician of Dark Chaos - Black Chaos Lv8 2800/2600 ATK || M3: Artmage Diactorus Lv8 2800/2500 ATK || M4: Nerva the Power Patron of Creation Lv10 3300/3300 ATK || EMZ-L: Medicurius the Power Patron of Illusions L3↙↓↘ 3000    Spell/Trap: S1: Artmage Impasto -Recapture- (Set) || S2: Mind Shuffle   GY: Nervedo the Shadebeast Power Patron, Junora the Power Patron of Tuning, Purification Power Patron, Theorealize Liberation, Light and Darkness Ritual   Banished: Fiendsmith's Tract (face-down), Medius the Pure (face-down), Ars Magna of Infinity and Finity (face-down), Artmage Vanda

## Order 3: best 12.1 (, worst 12.1) — from search
Others: drawpre-terminus-a 3.7 · drawpre-terminus-b 3.7 · drawpre-terminus-c 3.7

1. Set Spell/Trap Prohibited Power Patron Portal - Terminus
2. Activate Prohibited Power Patron Portal - Terminus (S1): Send 1 "Power Patron" monster from your Deck or Extra Deck to the GY, then you can add 1 DARK Fairy monster from your Deck to your hand
3. Selected Purification Power Patron (Extra Deck)
4. Yes
5. Selected Medius the Pure (Deck)
6. Normal Summon Medius the Pure (hand)
7. Yes
8. Selected Nervedo the Shadebeast Power Patron (Deck)
9. Special Summon it
10. Activate Nervedo the Shadebeast Power Patron (M5): Special Summon 1 "Nerva the Power Patron of Creation" from your Extra Deck
11. Selected Nerva the Power Patron of Creation (Extra Deck)
12. Yes
13. Selected Junoldo the Shadespirit Power Patron (Deck)
14. Activate Junoldo the Shadespirit Power Patron (M2): Special Summon 1 "Junora the Power Patron of Tuning" from your Extra Deck
15. Selected Junora the Power Patron of Tuning (Extra Deck)
16. Yes
17. Selected Nervedo the Shadebeast Power Patron (Extra Deck)
18. Link Summon Purification Power Patron (Extra Deck)
19. select Medius the Pure (M4)
20. select Junora the Power Patron of Tuning (EMZ-L)
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
31. Activate Theorealize Past Lull (GY): Special Summon 1 Fusion, Synchro, or Xyz Monster from your GY
32. Selected Junora the Power Patron of Tuning (GY)
33. Activate Purification Power Patron (EMZ-R): Link Summon including this card as material
34. Selected Medicurius the Power Patron of Illusions (Extra Deck)
35. select Artmage Non-Finito (M5)
36. Finish selection
37. Activate Medius the Pure (GY): Shuffle 1 monster from your hand or face-up field into the Deck, and if you do, Special Summon this card
38. Selected Ash Blossom & Joyous Spring (hand)
39. Link Summon S:P Little Knight (Extra Deck)
40. select Junora the Power Patron of Tuning (M2)
41. select Medius the Pure (M4)
42. Yes
43. Special Summon 1 "Diactorus" monster
44. Activate S:P Little Knight (M2): Banish 1 card on the field or GY
45. Selected Nervedo the Shadebeast Power Patron (GY)
46. Selected Artmage Diactorus (Extra Deck)

End board:  LP 8000 | Hand 3 | Deck 33 | Extra 8 | GY 5 | Banished 10   Monsters: M1: Nerva the Power Patron of Creation Lv10 3300/3300 ATK || M2: S:P Little Knight L2←→ 1600  || M3: Artmage Diactorus Lv8 2800/2500 ATK || EMZ-L: Medicurius the Power Patron of Illusions L3↙↓↘ 3000    Spell/Trap: S1: Artmage Impasto -Recapture- (Set)   GY: Purification Power Patron, Prohibited Power Patron Portal - Terminus, Artmage Non-Finito, Purification Power Patron, Junora the Power Patron of Tuning   Banished: Vidolium the Unstable Power Patron of Unity (face-down), Pendulum Treasure (face-down), Ars Magna - "Citrinitas" (face-down), Medius the Pure (face-down), Griffoh (face-down), Theorealize Medius (face-down), 

## Order 4: best 14.05 (, worst 14.05) — from drawpre-terminus-c (seed followed 33/33 steps)
Others: search 13.75 · drawpre-terminus-b 13.75 · drawpre-terminus-a 13.15 · opening lanes 13.05 · drawpre-terminus-c 3.7 · drawpre-terminus-b 3.7 · drawpre-terminus-a 3.7

1. Set Spell/Trap Prohibited Power Patron Portal - Terminus
2. Activate Prohibited Power Patron Portal - Terminus (S1): Send 1 "Power Patron" monster from your Deck or Extra Deck to the GY, then you can add 1 DARK Fairy monster from your Deck to your hand
3. Selected Nervedo the Shadebeast Power Patron (Deck)
4. Yes
5. Selected Medius the Pure (Deck)
6. Normal Summon Medius the Pure (hand)
7. Yes
8. Selected Vidolium the Unstable Power Patron of Unity (Deck)
9. Add the card(s) to your hand
10. Activate Vidolium the Unstable Power Patron of Unity (hand): Activate it as a Pendulum Spell
11. Activate Vidolium the Unstable Power Patron of Unity (S1): Activate 1 of these effects
12. Special Summon 1 "Power Patron" monster
13. Selected Nervedo the Shadebeast Power Patron (GY)
14. Yes
15. Selected Junoldo the Shadespirit Power Patron (Deck)
16. Activate Junoldo the Shadespirit Power Patron (hand): Activate it as a Pendulum Spell
17. Activate Nervedo the Shadebeast Power Patron (M2): Special Summon 1 "Nerva the Power Patron of Creation" from your Extra Deck
18. Selected Nerva the Power Patron of Creation (Extra Deck)
19. Yes
20. Activate Junoldo the Shadespirit Power Patron (S1): Destroy this card, draw 2 cards, then discard 1 card
21. Selected Vidolium the Unstable Power Patron of Unity (hand)
22. Selected Artmage Finmel (Deck)
23. Yes
24. Selected Vidolium the Unstable Power Patron of Unity (GY)
25. Link Summon Purification Power Patron (Extra Deck)
26. select Medius the Pure (M1)
27. select Nerva the Power Patron of Creation (M2)
28. Yes
29. Selected Theorealize Medius (Deck)
30. Activate Medius the Pure (GY): Shuffle 1 monster from your hand or face-up field into the Deck, and if you do, Special Summon this card
31. Selected Vidolium the Unstable Power Patron of Unity (hand)
32. Activate Theorealize Medius (hand): If a "Power Patron" card is on the field: You can Special Summon this card from your hand, then you can add 1 "Theorealize" Spell/Trap from your Deck to your hand
33. Yes
34. Selected Theorealize Liberation (Deck)
35. Activate Theorealize Liberation (hand): Add to your hand, or Special Summon, 1 monster from your Deck with 300 ATK/200 DEF
36. Selected Griffoh (Deck)
37. Add the card(s) to your hand
38. Activate Purification Power Patron (EMZ-L): Link Summon including this card as material
39. Selected Medicurius the Power Patron of Illusions (Extra Deck)
40. select Medius the Pure (M2)
41. Finish selection
42. Yes
43. Special Summon 1 "Diactorus" monster
44. Selected Artmage Diactorus (Extra Deck)
45. Activate Griffoh (hand): Activate 1 of these effects
46. Set 1 card that mentions "Light and Darkness Ritual"
47. Selected Mind Shuffle (Deck)
48. Activate Mind Shuffle (S1): activate this card
49. Yes
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
61. Selected Light and Darkness Ritual (GY)
62. Special Summon (procedure) Artmage Non-Finito (Extra Deck)
63. Selected Light and Darkness Ritual (hand)
64. Selected Nervedo the Shadebeast Power Patron (hand)
65. Yes
66. Selected Artmage Impasto -Recapture- (Deck)

End board:  LP 8000 | Hand 5 | Deck 27 | Extra 13 | GY 6 | Banished 6   Monsters: M1: Artmage Non-Finito Lv7 2400/1500 ATK || M3: Artmage Finmel Lv7 2400/1500 ATK || M4: Artmage Diactorus Lv8 2800/2500 ATK || M5: Magician of Dark Chaos - Black Chaos Lv8 2800/2600 ATK || EMZ-R: Medicurius the Power Patron of Illusions L3↙↓↘ 3000    Spell/Trap: S1: Mind Shuffle || S2: Artmage Impasto -Recapture- (Set)   GY: Prohibited Power Patron Portal - Terminus, Nerva the Power Patron of Creation, Theorealize Liberation, Purification Power Patron, Light and Darkness Ritual, Nervedo the Shadebeast Power Patron   Banished: Theorealize Medius (face-down), Artmage Finmel (face-down), Artmage Vandalism -Assault- (face-dow

## Order 5: best 12.85 (, worst 12.85) — from drawpre-terminus-c (seed followed 33/33 steps)
Others: search 12.1 · drawpre-terminus-b 11.7 · drawpre-terminus-c 3.7 · drawpre-terminus-b 3.7 · drawpre-terminus-a 3.7

1. Set Spell/Trap Prohibited Power Patron Portal - Terminus
2. Activate Prohibited Power Patron Portal - Terminus (S1): Send 1 "Power Patron" monster from your Deck or Extra Deck to the GY, then you can add 1 DARK Fairy monster from your Deck to your hand
3. Selected Nervedo the Shadebeast Power Patron (Deck)
4. Yes
5. Selected Medius the Pure (Deck)
6. Normal Summon Medius the Pure (hand)
7. Yes
8. Selected Vidolium the Unstable Power Patron of Unity (Deck)
9. Add the card(s) to your hand
10. Activate Vidolium the Unstable Power Patron of Unity (hand): Activate it as a Pendulum Spell
11. Activate Vidolium the Unstable Power Patron of Unity (S1): Activate 1 of these effects
12. Special Summon 1 "Power Patron" monster
13. Selected Nervedo the Shadebeast Power Patron (GY)
14. Yes
15. Selected Junoldo the Shadespirit Power Patron (Deck)
16. Activate Junoldo the Shadespirit Power Patron (hand): Activate it as a Pendulum Spell
17. Activate Nervedo the Shadebeast Power Patron (M2): Special Summon 1 "Nerva the Power Patron of Creation" from your Extra Deck
18. Selected Nerva the Power Patron of Creation (Extra Deck)
19. Yes
20. Activate Junoldo the Shadespirit Power Patron (S1): Destroy this card, draw 2 cards, then discard 1 card
21. Selected Plundered Power Patron Plane - Vidolia (hand)
22. Selected Artmage Finmel (Deck)
23. Yes
24. Selected Plundered Power Patron Plane - Vidolia (GY)
25. Activate Artmage Finmel (hand): Special Summon this card from your hand
26. Yes
27. Activate Ars Magna - "Citrinitas" (hand): activate this card
28. Activate Ars Magna - "Citrinitas" (S1): Add 1 "Medius" or "Ars Magna" monster from your Deck to your hand
29. Selected Theorealize Medius (Deck)
30. Activate Theorealize Medius (hand): If a "Power Patron" card is on the field: You can Special Summon this card from your hand, then you can add 1 "Theorealize" Spell/Trap from your Deck to your hand
31. Yes
32. Selected Theorealize Past Lull (Deck)
33. Set Spell/Trap Theorealize Past Lull
34. Special Summon (procedure) Artmage Non-Finito (Extra Deck)
35. Selected Plundered Power Patron Plane - Vidolia (hand)
36. select Artmage Finmel (M3)
37. Yes
38. Selected Artmage Impasto -Recapture- (Deck)
39. Link Summon Purification Power Patron (Extra Deck)
40. select Medius the Pure (M1)
41. select Nerva the Power Patron of Creation (M2)
42. Yes
43. Selected Theorealize Liberation (Deck)
44. Activate Theorealize Past Lull (S2): Special Summon 1 "Medius the Pure" from your hand or Deck
45. Selected Medius the Pure (Deck)
46. Activate Theorealize Liberation (hand): Add to your hand, or Special Summon, 1 monster from your Deck with 300 ATK/200 DEF
47. Selected Nervedo the Shadebeast Power Patron (Deck)
48. Special Summon it
49. Activate Purification Power Patron (EMZ-L): Link Summon including this card as material
50. Selected Medicurius the Power Patron of Illusions (Extra Deck)
51. select Medius the Pure (M1)
52. Finish selection
53. Activate Theorealize Liberation (GY): Treat 1 monster you control as a Tuner this turn
54. Selected Nervedo the Shadebeast Power Patron (M2)
55. Activate Medius the Pure (GY): Shuffle 1 monster from your hand or face-up field into the Deck, and if you do, Special Summon this card
56. Selected Ash Blossom & Joyous Spring (hand)
57. Link Summon S:P Little Knight (Extra Deck)
58. select Medius the Pure (M1)
59. select Nervedo the Shadebeast Power Patron (M2)
60. Yes
61. Special Summon 1 "Diactorus" monster
62. Selected Artmage Diactorus (Extra Deck)

End board:  LP 8000 | Hand 3 | Deck 28 | Extra 13 | GY 7 | Banished 6   Monsters: M1: S:P Little Knight L2←→ 1600  || M2: Artmage Diactorus Lv8 2800/2500 ATK || M3: Artmage Non-Finito Lv7 2400/1500 ATK || M4: Artmage Finmel Lv7 2400/1500 ATK || EMZ-L: Medicurius the Power Patron of Illusions L3↙↓↘ 3000    Spell/Trap: S1: Ars Magna - "Citrinitas" || S3: Artmage Impasto -Recapture- (Set)   GY: Prohibited Power Patron Portal - Terminus, Plundered Power Patron Plane - Vidolia, Artmage Finmel, Nerva the Power Patron of Creation, Theorealize Past Lull, Medius the Pure, Purification Power Patron   Banished: Artmage Vandalism -Assault- (face-down), Theorealize Medius (face-down), Griffoh (face-down), Theoreali

## Order 6: best 13.95 (, worst 13.95) — from drawpre-terminus-a (seed followed 27/27 steps)
Others: search 12.15 · drawpre-terminus-c 3.7 · drawpre-terminus-a 3.7 · drawpre-terminus-b 3.7

1. Set Spell/Trap Prohibited Power Patron Portal - Terminus
2. Activate Prohibited Power Patron Portal - Terminus (S1): Send 1 "Power Patron" monster from your Deck or Extra Deck to the GY, then you can add 1 DARK Fairy monster from your Deck to your hand
3. Selected Nervedo the Shadebeast Power Patron (Deck)
4. Yes
5. Selected Vidolium the Unstable Power Patron of Unity (Deck)
6. Activate Vidolium the Unstable Power Patron of Unity (hand): Activate it as a Pendulum Spell
7. Activate Vidolium the Unstable Power Patron of Unity (S1): Activate 1 of these effects
8. Special Summon 1 "Power Patron" monster
9. Selected Nervedo the Shadebeast Power Patron (GY)
10. Yes
11. Selected Junoldo the Shadespirit Power Patron (Deck)
12. Activate Junoldo the Shadespirit Power Patron (hand): Activate it as a Pendulum Spell
13. Activate Nervedo the Shadebeast Power Patron (M4): Special Summon 1 "Nerva the Power Patron of Creation" from your Extra Deck
14. Selected Nerva the Power Patron of Creation (Extra Deck)
15. Yes
16. Activate Junoldo the Shadespirit Power Patron (S1): Destroy this card, draw 2 cards, then discard 1 card
17. Selected Ash Blossom & Joyous Spring (hand)
18. Selected Theorealize Medius (Deck)
19. Yes
20. Selected Prohibited Power Patron Portal - Terminus (GY)
21. Link Summon Purification Power Patron (Extra Deck)
22. select Nerva the Power Patron of Creation (M1)
23. select Theorealize Medius (M2)
24. Yes
25. Selected Theorealize Medius (Deck)
26. Activate Fiendsmith Engraver (hand): Add 1 "Fiendsmith" Spell/Trap from your Deck to your hand
27. Selected Fiendsmith's Tract (Deck)
28. Activate Fiendsmith's Tract (hand): Add 1 LIGHT Fiend monster from your Deck to your hand
29. Selected Lacrima the Crimson Tears (Deck)
30. Selected Lacrima the Crimson Tears (hand)
31. Activate Fiendsmith Engraver (GY): Special Summon this card
32. Selected Lacrima the Crimson Tears (GY)
33. Link Summon Fiendsmith's Requiem (Extra Deck)
34. select Fiendsmith Engraver (M4)
35. Activate Fiendsmith's Requiem (M2): Special Summon 1 "Fiendsmith" monster
36. Selected Lacrima the Crimson Tears (Deck)
37. Yes
38. Selected Fiendsmith's Tract (Deck)
39. Activate Theorealize Medius (hand): If a "Power Patron" card is on the field: You can Special Summon this card from your hand, then you can add 1 "Theorealize" Spell/Trap from your Deck to your hand
40. Yes
41. Selected Theorealize Liberation (Deck)
42. Activate Purification Power Patron (EMZ-L): Link Summon including this card as material
43. Selected S:P Little Knight (Extra Deck)
44. select Lacrima the Crimson Tears (M3)
45. Yes
46. Selected Fiendsmith Engraver (GY)
47. Yes
48. Special Summon 1 "Diactorus" monster
49. Selected Artmage Diactorus (Extra Deck)
50. Activate Artmage Graflare (hand): Special Summon this card from your hand
51. Yes
52. Selected Artmage Vandalism -Assault- (Deck)
53. Activate Artmage Vandalism -Assault- (S1): When this card is activated: You can add 1 "Medius the Pure" from your Deck to your hand
54. Yes
55. Selected Medius the Pure (Deck)
56. Normal Summon Medius the Pure (hand)
57. Yes
58. Selected Nervedo the Shadebeast Power Patron (Deck)
59. Add the card(s) to your hand
60. Activate Theorealize Liberation (hand): Add to your hand, or Special Summon, 1 monster from your Deck with 300 ATK/200 DEF
61. Selected Griffoh (Deck)
62. Add the card(s) to your hand
63. Activate Griffoh (hand): Activate 1 of these effects
64. Set 1 card that mentions "Light and Darkness Ritual"
65. Selected Mind Shuffle (Deck)
66. Activate Mind Shuffle (S2): activate this card
67. No
68. Activate Mind Shuffle (S2): Add 1 appropriate monster to your hand
69. Selected Skull Archfiend of Chaos (Deck)
70. Selected Skull Archfiend of Chaos (hand)
71. Yes
72. Selected Light and Darkness Ritual (Deck)
73. Selected Black Luster Soldier - Soldier of Light and Darkness (Deck)
74. Activate Light and Darkness Ritual (GY): Add both this card and 1 card that mentions "Light and Darkness Ritual" from your GY to your hand
75. Selected Griffoh (GY)
76. Special Summon (procedure) Artmage Non-Finito (Extra Deck)
77. Selected Light and Darkness Ritual (hand)
78. Selected Nervedo the Shadebeast Power Patron (hand)
79. Yes
80. Selected Artmage Impasto -Recapture- (Deck)
81. Activate Theorealize Liberation (GY): Treat 1 monster you control as a Tuner this turn
82. Selected Artmage Graflare (M3)
83. Activate Skull Archfiend of Chaos (GY): Special Summon this card
84. select Theorealize Medius (banishment)
85. select Nervedo the Shadebeast Power Patron (GY)
86. select Light and Darkness Ritual (GY)
87. Default order
88. Synchro Summon Chaos Angel (Extra Deck)
89. select Medius the Pure (M1)
90. select Skull Archfiend of Chaos (M2)
91. No
92. Activate Medius the Pure (GY): Shuffle 1 monster from your hand or face-up field into the Deck, and if you do, Special Summon this card
93. Selected Black Luster Soldier - Soldier of Light and Darkness (hand)
94. Activate Artmage Diactorus (M4): Change the battle position of 1 monster on the field
95. Selected Artmage Diactorus (M4)
96. Link Summon Medicurius the Power Patron of Illusions (Extra Deck)
97. select S:P Little Knight (EMZ-L)
98. select Medius the Pure (M2)
99. Finish selection

End board:  LP 8000 | Hand 5 | Deck 25 | Extra 10 | GY 10 | Banished 6   Monsters: M1: Chaos Angel Lv10 3500/2800 ATK || M3: Artmage Graflare Lv5 2100/1500 ATK || M4: Artmage Diactorus Lv8 2800/2500 DEF || M5: Artmage Non-Finito Lv7 2400/1500 ATK || EMZ-R: Medicurius the Power Patron of Illusions L3↙↓↘ 3000    Spell/Trap: S1: Artmage Vandalism -Assault- || S2: Mind Shuffle || S3: Artmage Impasto -Recapture- (Set)   GY: Ash Blossom & Joyous Spring, Nerva the Power Patron of Creation, Theorealize Medius, Fiendsmith's Tract, Fiendsmith's Requiem, Fiendsmith's Tract, Lacrima the Crimson Tears, Purification Power Patron, Skull Archfiend of Chaos, S:P Little Knight   Banished: Artmage Finmel (face-down), Pen

## Order 7: best 13.75 (, worst 13.75) — from drawpre-terminus-c (seed followed 33/33 steps)
Others: drawpre-terminus-a 12.35 · drawpre-terminus-b 12.35 · search 12.1 · drawpre-terminus-b 3.7 · drawpre-terminus-a 3.7 · drawpre-terminus-c 3.7

1. Set Spell/Trap Prohibited Power Patron Portal - Terminus
2. Activate Prohibited Power Patron Portal - Terminus (S1): Send 1 "Power Patron" monster from your Deck or Extra Deck to the GY, then you can add 1 DARK Fairy monster from your Deck to your hand
3. Selected Nervedo the Shadebeast Power Patron (Deck)
4. Yes
5. Selected Medius the Pure (Deck)
6. Normal Summon Medius the Pure (hand)
7. Yes
8. Selected Vidolium the Unstable Power Patron of Unity (Deck)
9. Add the card(s) to your hand
10. Activate Vidolium the Unstable Power Patron of Unity (hand): Activate it as a Pendulum Spell
11. Activate Vidolium the Unstable Power Patron of Unity (S1): Activate 1 of these effects
12. Special Summon 1 "Power Patron" monster
13. Selected Nervedo the Shadebeast Power Patron (GY)
14. Yes
15. Selected Junoldo the Shadespirit Power Patron (Deck)
16. Activate Junoldo the Shadespirit Power Patron (hand): Activate it as a Pendulum Spell
17. Activate Nervedo the Shadebeast Power Patron (M2): Special Summon 1 "Nerva the Power Patron of Creation" from your Extra Deck
18. Selected Nerva the Power Patron of Creation (Extra Deck)
19. Yes
20. Activate Junoldo the Shadespirit Power Patron (S1): Destroy this card, draw 2 cards, then discard 1 card
21. Selected Vidolium the Unstable Power Patron of Unity (hand)
22. Selected Artmage Finmel (Deck)
23. Yes
24. Selected Vidolium the Unstable Power Patron of Unity (GY)
25. Activate Black Chaos (hand): Special Summon ("Black Chaos")
26. Selected Mind Shuffle (Deck)
27. Link Summon Purification Power Patron (Extra Deck)
28. select Medius the Pure (M1)
29. select Nerva the Power Patron of Creation (M2)
30. Yes
31. Activate Mind Shuffle (S1): Add 1 appropriate monster to your hand
32. Selected Skull Archfiend of Chaos (Deck)
33. Selected Skull Archfiend of Chaos (hand)
34. Selected Theorealize Medius (Deck)
35. Yes
36. Selected Light and Darkness Ritual (Deck)
37. Selected Black Luster Soldier - Soldier of Light and Darkness (Deck)
38. Activate Theorealize Medius (hand): If a "Power Patron" card is on the field: You can Special Summon this card from your hand, then you can add 1 "Theorealize" Spell/Trap from your Deck to your hand
39. Yes
40. Selected Theorealize Liberation (Deck)
41. Activate Medius the Pure (GY): Shuffle 1 monster from your hand or face-up field into the Deck, and if you do, Special Summon this card
42. Selected Ash Blossom & Joyous Spring (hand)
43. Activate Theorealize Liberation (hand): Add to your hand, or Special Summon, 1 monster from your Deck with 300 ATK/200 DEF
44. Activate Purification Power Patron (EMZ-L): Link Summon including this card as material
45. Selected Medicurius the Power Patron of Illusions (Extra Deck)
46. select Medius the Pure (M4)
47. Finish selection
48. Selected Nervedo the Shadebeast Power Patron (Deck)
49. Add the card(s) to your hand
50. Yes
51. Special Summon 1 "Diactorus" monster
52. Selected Artmage Diactorus (Extra Deck)
53. Activate Light and Darkness Ritual (GY): Add both this card and 1 card that mentions "Light and Darkness Ritual" from your GY to your hand
54. Selected Black Chaos (GY)
55. Special Summon (procedure) Artmage Non-Finito (Extra Deck)
56. Selected Light and Darkness Ritual (hand)
57. Selected Nervedo the Shadebeast Power Patron (hand)
58. Yes
59. Selected Artmage Impasto -Recapture- (Deck)
60. Activate Skull Archfiend of Chaos (GY): Special Summon this card
61. select Nervedo the Shadebeast Power Patron (GY)
62. select Light and Darkness Ritual (GY)
63. select Theorealize Liberation (GY)
64. Default order
65. Activate Artmage Diactorus (M1): Change the battle position of 1 monster on the field
66. Selected Artmage Finmel (M3)
67. Special Summon (procedure) Black Chaos (hand)
68. select Black Luster Soldier - Soldier of Light and Darkness (hand)
69. Special Summon (procedure) Dark Magician of Destruction (Extra Deck)
70. Selected Black Chaos (M2)
71. No
72. Link Summon S:P Little Knight (Extra Deck)
73. select Skull Archfiend of Chaos (M5)
74. select Dark Magician of Destruction (M2)
75. No

End board:  LP 8000 | Hand 4 | Deck 31 | Extra 11 | GY 5 | Banished 6   Monsters: M1: Artmage Diactorus Lv8 2800/2500 ATK || M2: S:P Little Knight L2←→ 1600  || M3: Artmage Finmel Lv7 2400/1500 DEF || M4: Artmage Non-Finito Lv7 2400/1500 ATK || EMZ-L: Medicurius the Power Patron of Illusions L3↙↓↘ 3000    Spell/Trap: S1: Mind Shuffle || S2: Artmage Impasto -Recapture- (Set)   GY: Prohibited Power Patron Portal - Terminus, Nerva the Power Patron of Creation, Purification Power Patron, Dark Magician of Destruction, Skull Archfiend of Chaos   Banished: Apprentice Illusion Magician (face-down), Nervedo the Shadebeast Power Patron (face-down), Artmage Finmel (face-down), Medius the Pure, Theorealize Medius,

## Order 8: best 13.05 (, worst 13.05) — from search
Others: opening lanes 13.05 · drawpre-terminus-c 3.7 · drawpre-terminus-a 3.7 · drawpre-terminus-b 3.7

1. Activate Prohibited Power Patron Portal - Terminus (hand): Send 1 "Power Patron" monster from your Deck or Extra Deck to the GY, then you can add 1 DARK Fairy monster from your Deck to your hand
2. Selected Junoldo the Shadespirit Power Patron (Deck)
3. Yes
4. Selected Medius the Pure (Deck)
5. Normal Summon Medius the Pure (hand)
6. Yes
7. Selected Vidolium the Unstable Power Patron of Unity (Deck)
8. #573
9. Activate Vidolium the Unstable Power Patron of Unity (hand): #1160
10. Activate Vidolium the Unstable Power Patron of Unity (S1): Activate 1 of these effects
11. Special Summon 1 "Power Patron" monster
12. Selected Junoldo the Shadespirit Power Patron (GY)
13. Yes
14. Selected Nervedo the Shadebeast Power Patron (Deck)
15. Activate Junoldo the Shadespirit Power Patron (M1): Special Summon 1 "Junora the Power Patron of Tuning" from your Extra Deck
16. Selected Junora the Power Patron of Tuning (Extra Deck)
17. Yes
18. Selected Prohibited Power Patron Portal - Terminus (GY)
19. Special Summon (procedure) Artmage Non-Finito (Extra Deck)
20. Selected Prohibited Power Patron Portal - Terminus (hand)
21. Selected Nervedo the Shadebeast Power Patron (hand)
22. Yes
23. Selected Artmage Impasto -Recapture- (Deck)
24. Link Summon Purification Power Patron (Extra Deck)
25. select Medius the Pure (M3)
26. select Junora the Power Patron of Tuning (M4)
27. Yes
28. Selected Theorealize Medius (Deck)
29. Activate Medius the Pure (GY): Shuffle 1 monster from your hand or face-up field into the Deck, and if you do, Special Summon this card
30. Selected Ash Blossom & Joyous Spring (hand)
31. Activate Theorealize Medius (hand): If a "Power Patron" card is on the field: You can Special Summon this card from your hand, then you can add 1 "Theorealize" Spell/Trap from your Deck to your hand
32. Yes
33. Selected Theorealize Liberation (Deck)
34. Activate Theorealize Liberation (hand): Add to your hand, or Special Summon, 1 monster from your Deck with 300 ATK/200 DEF
35. Selected Nervedo the Shadebeast Power Patron (Deck)
36. Special Summon it
37. Activate Nervedo the Shadebeast Power Patron (M3): Special Summon 1 "Nerva the Power Patron of Creation" from your Extra Deck
38. Selected Nerva the Power Patron of Creation (Extra Deck)
39. Yes
40. Activate Purification Power Patron (EMZ-R): Link Summon including this card as material
41. Selected Medicurius the Power Patron of Illusions (Extra Deck)
42. select Medius the Pure (M2)
43. Finish selection
44. Selected Artmage Graflare (Deck)
45. Yes
46. Special Summon 1 "Diactorus" monster
47. Selected Artmage Diactorus (Extra Deck)

End board:  LP 8000 | Hand 3 | Deck 30 | Extra 12 | GY 5 | Banished 8   Monsters: M1: Artmage Non-Finito Lv7 2400/1500 ATK || M2: Artmage Diactorus Lv8 2800/2500 ATK || M3: Artmage Graflare Lv5 2100/1500 ATK || M5: Nerva the Power Patron of Creation Lv10 3300/3300 ATK || EMZ-L: Medicurius the Power Patron of Illusions L3↙↓↘ 3000    Spell/Trap: S1: Artmage Impasto -Recapture- (Set)   GY: Prohibited Power Patron Portal - Terminus, Nervedo the Shadebeast Power Patron, Junora the Power Patron of Tuning, Theorealize Liberation, Purification Power Patron   Banished: Light and Darkness Ritual (face-down), Plundered Power Patron Plane - Vidolia (face-down), Lacrima the Crimson Tears (face-down), Skull Archfien

