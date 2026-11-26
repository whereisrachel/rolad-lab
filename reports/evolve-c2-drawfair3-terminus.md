# Evolved lines — Prohibited Power Patron Portal - Terminus, Ash Blossom & Joyous Spring, Ash Blossom & Joyous Spring, Droll & Lock Bird, Ghost Ogre & Snow Rabbit (findlist-1100)
2026-11-26T02:46:07.482Z

8 deck orders (different face-down banishes / draws), 3 opponent hands x o_ss_panama + o_elfnote + o_despia + o_angelechy per line, 5 min searches, 0 mutation rounds.
Fitness = end-board interruptions (the lab scorer, src/disrupt.mjs: wipe 2, negate 1-1.5, banish/protection less; hand traps kept count 1 each). The winner of each order is also played into the opponent decks: margin after their turn shown beside it.

**Margin after their turn (winners): average null** (worst 99)

**Best line per deck order: average 12.58** (worst order 12.25). Winner came from: opening lanes 1, search 2

| seed line | works as written | its score when it works | seed start + search finish (all orders) |
|---|---|---|---|
| drawpre-terminus-a | 3/8 | 3.7 | - |
| drawpre-terminus-b | 3/8 | 3.7 | - |
| drawpre-terminus-c | 3/8 | 3.7 | - |

## Weak points found automatically
Cards whose face-down banish (by your own costs) hurt the best line most (average best line without vs with that card banished):

| card | orders where it was banished | drop |
|---|---|---|
| Magician of Dark Chaos - Black Chaos | 2/8 | 0.92 |
| Fiendsmith's Tract | 2/8 | 0.92 |
| Artmage Vandalism -Assault- | 2/8 | -0.42 |
| Pendulum Treasure | 2/8 | -0.42 |
| Theorealize Past Lull | 2/8 | -0.42 |
| Theorealize Medius | 2/8 | -0.5 |
| Black Luster Soldier - Soldier of Light and Darkness | 2/8 | -0.5 |
| Small World | 2/8 | -0.5 |

List changes proposed for the list test (data/proposals-findlist-1100.json):
- +1 Magician of Dark Chaos - Black Chaos, −1 Plundered Power Patron Plane - Vidolia — Magician of Dark Chaos - Black Chaos: best line 0.92 worse when a cost banished it (2 of 8 orders) — Prohibited Power Patron Portal - Terminus
- +1 Fiendsmith's Tract, −1 Artmage Vandalism -Assault- — Fiendsmith's Tract: best line 0.92 worse when a cost banished it (2 of 8 orders) — Prohibited Power Patron Portal - Terminus
- +1 Magician of Dark Chaos - Black Chaos — Magician of Dark Chaos - Black Chaos: best line 0.92 worse when a cost banished it (2 of 8 orders) — Prohibited Power Patron Portal - Terminus (add only: deck grows, up to 60)
- +1 Fiendsmith's Tract — Fiendsmith's Tract: best line 0.92 worse when a cost banished it (2 of 8 orders) — Prohibited Power Patron Portal - Terminus (add only: deck grows, up to 60)

Effects the search had not used, tried on purpose (best result so far):
- Activate Griffoh: 4.67
- Activate Nervedo the Shadebeast Power Patron: 4.18
- Activate Artmage Diactorus: 3.37
- Activate Artmage Vandalism -Assault-: 2.73
- Activate Vidolium the Unstable Power Patron of Unity: 2.37
- Activate Nervedo the Shadebeast Power Patron: 2.34
- Activate Junoldo the Shadespirit Power Patron: 2.14
- Activate Nervedo the Shadebeast Power Patron: 1.81

## Order 1: best 13.2 (, worst 13.2) — from opening lanes
Others: search 12.3 · drawpre-terminus-c 3.7 · drawpre-terminus-a 3.7 · drawpre-terminus-b 3.7

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
14. Selected Theorealize Medius (Deck)
15. Activate Theorealize Medius (hand): If a "Power Patron" card is on the field: You can Special Summon this card from your hand, then you can add 1 "Theorealize" Spell/Trap from your Deck to your hand
16. Yes
17. Selected Theorealize Liberation (Deck)
18. Activate Theorealize Liberation (hand): Add to your hand, or Special Summon, 1 monster from your Deck with 300 ATK/200 DEF
19. Selected Nervedo the Shadebeast Power Patron (Deck)
20. Special Summon it
21. Activate Nervedo the Shadebeast Power Patron (M1): Special Summon 1 "Nerva the Power Patron of Creation" from your Extra Deck
22. Selected Nerva the Power Patron of Creation (Extra Deck)
23. Yes
24. Selected Artmage Graflare (Deck)
25. Activate Junoldo the Shadespirit Power Patron (M3): Special Summon 1 "Junora the Power Patron of Tuning" from your Extra Deck
26. Selected Junora the Power Patron of Tuning (Extra Deck)
27. Yes
28. Selected Nervedo the Shadebeast Power Patron (Extra Deck)
29. Link Summon Purification Power Patron (Extra Deck)
30. select Junora the Power Patron of Tuning (M3)
31. select Medius the Pure (M4)
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
42. Selected Junora the Power Patron of Tuning (M4)
43. Activate Purification Power Patron (EMZ-R): Link Summon including this card as material
44. Selected Medicurius the Power Patron of Illusions (Extra Deck)
45. select Medius the Pure (M4)
46. Finish selection
47. Yes
48. Special Summon 1 "Diactorus" monster
49. Selected Artmage Diactorus (Extra Deck)

End board:  LP 8000 | Hand 4 | Deck 29 | Extra 12 | GY 4 | Banished 9   Monsters: M1: Nerva the Power Patron of Creation Lv10 3300/3300 ATK || M2: Artmage Graflare Lv5 2100/1500 ATK || M3: Artmage Non-Finito Lv7 2400/1500 ATK || M4: Artmage Diactorus Lv8 2800/2500 ATK || EMZ-L: Medicurius the Power Patron of Illusions L3↙↓↘ 3000    Spell/Trap: S1: Artmage Impasto -Recapture- (Set)   GY: Prohibited Power Patron Portal - Terminus, Theorealize Liberation, Nervedo the Shadebeast Power Patron, Purification Power Patron   Banished: Medius the Pure (face-down), Vidolium the Unstable Power Patron of Unity (face-down), Artmage Vandalism -Assault- (face-down), Apprentice Illusion Magician (face-down), Lacrima th

## Order 3: best 12.25 (, worst 12.25) — from search
Others: opening lanes 12.05 · drawpre-terminus-c 3.7 · drawpre-terminus-b 3.7 · drawpre-terminus-a 3.7

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
15. Activate Nervedo the Shadebeast Power Patron (M5): Special Summon 1 "Nerva the Power Patron of Creation" from your Extra Deck
16. Selected Nerva the Power Patron of Creation (Extra Deck)
17. Yes
18. Selected Junoldo the Shadespirit Power Patron (Deck)
19. Activate Junoldo the Shadespirit Power Patron (M5): Special Summon 1 "Junora the Power Patron of Tuning" from your Extra Deck
20. Selected Junora the Power Patron of Tuning (Extra Deck)
21. Yes
22. Selected Nervedo the Shadebeast Power Patron (Extra Deck)
23. Link Summon Purification Power Patron (Extra Deck)
24. select Medius the Pure (M4)
25. select Junora the Power Patron of Tuning (EMZ-L)
26. Yes
27. Selected Theorealize Medius (Deck)
28. Activate Theorealize Medius (hand): If a "Power Patron" card is on the field: You can Special Summon this card from your hand, then you can add 1 "Theorealize" Spell/Trap from your Deck to your hand
29. Yes
30. Selected Theorealize Past Lull (Deck)
31. Special Summon (procedure) Artmage Non-Finito (Extra Deck)
32. Selected Theorealize Past Lull (hand)
33. Selected Nervedo the Shadebeast Power Patron (hand)
34. Yes
35. Selected Artmage Impasto -Recapture- (Deck)
36. Activate Medius the Pure (GY): Shuffle 1 monster from your hand or face-up field into the Deck, and if you do, Special Summon this card
37. Selected Ash Blossom & Joyous Spring (hand)
38. Activate Purification Power Patron (EMZ-R): Link Summon including this card as material
39. Selected Medicurius the Power Patron of Illusions (Extra Deck)
40. select Medius the Pure (M5)
41. Finish selection
42. Yes
43. Special Summon 1 "Diactorus" monster
44. Selected Artmage Diactorus (Extra Deck)
45. Activate Theorealize Past Lull (GY): Special Summon 1 Fusion, Synchro, or Xyz Monster from your GY
46. Selected Junora the Power Patron of Tuning (GY)
47. Link Summon S:P Little Knight (Extra Deck)
48. select Junora the Power Patron of Tuning (M5)
49. select Artmage Non-Finito (M1)
50. Yes
51. Selected Purification Power Patron (GY)

End board:  LP 8000 | Hand 4 | Deck 31 | Extra 10 | GY 4 | Banished 10   Monsters: M3: Nerva the Power Patron of Creation Lv10 3300/3300 ATK || M4: Artmage Diactorus Lv8 2800/2500 ATK || M5: S:P Little Knight L2←→ 1600  || EMZ-R: Medicurius the Power Patron of Illusions L3↙↓↘ 3000    Spell/Trap: S1: Artmage Impasto -Recapture- (Set)   GY: Prohibited Power Patron Portal - Terminus, Nervedo the Shadebeast Power Patron, Artmage Non-Finito, Junora the Power Patron of Tuning   Banished: Pendulum Treasure (face-down), Magician of Dark Chaos - Black Chaos (face-down), Theorealize Liberation (face-down), Black Chaos (face-down), Artmage Vandalism -Assault- (face-down), Lacrima the Crimson Tears (face-down), Me

## Order 8: best 12.3 (, worst 12.3) — from search
Others: opening lanes 12.05 · drawpre-terminus-c 3.7 · drawpre-terminus-a 3.7 · drawpre-terminus-b 3.7

1. Activate Prohibited Power Patron Portal - Terminus (hand): Send 1 "Power Patron" monster from your Deck or Extra Deck to the GY, then you can add 1 DARK Fairy monster from your Deck to your hand
2. Selected Junoldo the Shadespirit Power Patron (Deck)
3. Yes
4. Selected Vidolium the Unstable Power Patron of Unity (Deck)
5. Activate Vidolium the Unstable Power Patron of Unity (hand): #1160
6. Activate Vidolium the Unstable Power Patron of Unity (S1): Activate 1 of these effects
7. Special Summon 1 "Power Patron" monster
8. Selected Junoldo the Shadespirit Power Patron (GY)
9. Yes
10. Selected Nervedo the Shadebeast Power Patron (Deck)
11. Activate Junoldo the Shadespirit Power Patron (M1): Special Summon 1 "Junora the Power Patron of Tuning" from your Extra Deck
12. Selected Junora the Power Patron of Tuning (Extra Deck)
13. Yes
14. Selected Prohibited Power Patron Portal - Terminus (GY)
15. Special Summon (procedure) Artmage Non-Finito (Extra Deck)
16. Selected Prohibited Power Patron Portal - Terminus (hand)
17. Selected Nervedo the Shadebeast Power Patron (hand)
18. Yes
19. Selected Artmage Impasto -Recapture- (Deck)
20. Normal Summon Ash Blossom & Joyous Spring (hand)
21. Link Summon Purification Power Patron (Extra Deck)
22. select Ash Blossom & Joyous Spring (M3)
23. select Junora the Power Patron of Tuning (EMZ-R)
24. Yes
25. Selected Theorealize Medius (Deck)
26. Activate Theorealize Medius (hand): If a "Power Patron" card is on the field: You can Special Summon this card from your hand, then you can add 1 "Theorealize" Spell/Trap from your Deck to your hand
27. Yes
28. Selected Theorealize Past Lull (Deck)
29. Activate Purification Power Patron (EMZ-R): Link Summon including this card as material
30. Selected S:P Little Knight (Extra Deck)
31. select Artmage Non-Finito (M4)
32. Yes
33. Selected Nervedo the Shadebeast Power Patron (GY)
34. Yes
35. Special Summon 1 "Diactorus" monster
36. Selected Artmage Diactorus (Extra Deck)
37. Activate Theorealize Past Lull (hand): Special Summon 1 "Medius the Pure" from your hand or Deck
38. Selected Medius the Pure (Deck)
39. Yes
40. Selected Nervedo the Shadebeast Power Patron (Deck)
41. Special Summon it
42. Activate Nervedo the Shadebeast Power Patron (M2): Special Summon 1 "Nerva the Power Patron of Creation" from your Extra Deck
43. Selected Nerva the Power Patron of Creation (Extra Deck)
44. Yes
45. Selected Artmage Graflare (Deck)
46. Link Summon Medicurius the Power Patron of Illusions (Extra Deck)
47. select Medius the Pure (M4)
48. select S:P Little Knight (EMZ-R)
49. Finish selection

End board:  LP 8000 | Hand 3 | Deck 29 | Extra 11 | GY 8 | Banished 8   Monsters: M1: Artmage Diactorus Lv8 2800/2500 ATK || M2: Artmage Graflare Lv5 2100/1500 ATK || M3: Nerva the Power Patron of Creation Lv10 3300/3300 DEF || EMZ-L: Medicurius the Power Patron of Illusions L3↙↓↘ 3000    Spell/Trap: S1: Artmage Impasto -Recapture- (Set)   GY: Prohibited Power Patron Portal - Terminus, Ash Blossom & Joyous Spring, Junora the Power Patron of Tuning, Artmage Non-Finito, Purification Power Patron, Theorealize Past Lull, Medius the Pure, S:P Little Knight   Banished: Small World (face-down), Griffoh (face-down), Artmage Finmel (face-down), Nervedo the Shadebeast Power Patron, Theorealize Medius, Black Lust

