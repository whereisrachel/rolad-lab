# Evolved lines — Medius the Pure, Ash Blossom & Joyous Spring, Infinite Impermanence, Droll & Lock Bird, Ghost Ogre & Snow Rabbit (findlist-1100)
2026-11-26T01:51:47.502Z

8 deck orders (different face-down banishes / draws), 3 opponent hands x o_ss_panama + o_elfnote + o_despia + o_angelechy per line, 15 min searches, 4 mutation rounds.
Fitness = end-board interruptions (the lab scorer, src/disrupt.mjs: wipe 2, negate 1-1.5, banish/protection less; hand traps kept count 1 each). The winner of each order is also played into the opponent decks: margin after their turn shown beside it.

**Margin after their turn (winners): average 3.69** (worst -2.09)

**Best line per deck order: average 12.56** (worst order 12.45). Winner came from: opening lanes 1, tries Activate Ars Magna - "Citrinitas" 1, m1b 1, tries Activate Prohibited Power Patron Portal - Terminus 1

| seed line | works as written | its score when it works | seed start + search finish (all orders) |
|---|---|---|---|
| br1 | 0/8 | - | 8.12 |
| bx1 | 0/8 | - | 11.55 |
| m1a | 4/8 | 9.25 | 9.8 |
| m1b | 4/8 | 8.25 | 12.38 |
| v52-medius | 4/8 | 12.2 | 12.2 |

## Weak points found automatically
Cards whose face-down banish (by your own costs) hurt the best line most (average best line without vs with that card banished):

| card | orders where it was banished | drop |
|---|---|---|
| Pendulum Treasure | 2/8 | 0.08 |
| Skull Archfiend of Chaos | 2/8 | 0.08 |
| Medius the Pure | 3/8 | 0.05 |
| Ars Magna - "Citrinitas" | 3/8 | -0.15 |
| Griffoh | 3/8 | -0.15 |
| Nervedo the Shadebeast Power Patron | 3/8 | -0.15 |
| Mind Shuffle | 2/8 | -0.23 |
| Artmage Vandalism -Assault- | 2/8 | -0.23 |

Where the hand-designed lines broke (next step that no longer worked):
- bx1: Griffoh (3x)
- br1: Griffoh (3x)
- bx1: Skull Archfiend (1x)
- br1: Skull Archfiend (1x)

Effects the search had not used, tried on purpose (best result so far):
- Activate Ars Magna - "Citrinitas": 12.75
- Activate Prohibited Power Patron Portal - Terminus: 12.45
- Activate Ars Magna - "Citrinitas": 11.8
- Activate Artmage Vandalism -Assault-: 11.8
- Activate Vidolium the Unstable Power Patron of Unity: 11.45
- Activate Mind Shuffle: 11.15
- Activate Mind Shuffle: 11.15
- Activate Artmage Vandalism -Assault-: 11.1

## Order 1: best 12.45 [margin 4.39: ss_panama 7.4, elfnote 4.2, despia -1.3, angelechy 7.25] (, worst 12.45) — from opening lanes
Others: m1b 12.3 · v52-medius 12.2 · v52-medius 12.2 · tries Activate Ars Magna - "Citrinitas" 11.8 · tries Activate Artmage Vandalism -Assault- 11.1 · bx1 10.9 · m1a 9.8 · m1a 9.25 · br1 8.33 · m1b 8.25

1. Normal Summon Medius the Pure (hand)
2. Yes
3. Selected Nervedo the Shadebeast Power Patron (Deck)
4. Special Summon it
5. Activate Nervedo the Shadebeast Power Patron (M3): Special Summon 1 "Nerva the Power Patron of Creation" from your Extra Deck
6. Selected Nerva the Power Patron of Creation (Extra Deck)
7. Yes
8. Selected Junoldo the Shadespirit Power Patron (Deck)
9. Activate Junoldo the Shadespirit Power Patron (M4): Special Summon 1 "Junora the Power Patron of Tuning" from your Extra Deck
10. Selected Junora the Power Patron of Tuning (Extra Deck)
11. Yes
12. Selected Nervedo the Shadebeast Power Patron (Extra Deck)
13. Link Summon Purification Power Patron (Extra Deck)
14. select Medius the Pure (M1)
15. select Junora the Power Patron of Tuning (M4)
16. Yes
17. Selected Theorealize Medius (Deck)
18. Activate Theorealize Medius (hand): If a "Power Patron" card is on the field: You can Special Summon this card from your hand, then you can add 1 "Theorealize" Spell/Trap from your Deck to your hand
19. Yes
20. Selected Theorealize Past Lull (Deck)
21. Special Summon (procedure) Artmage Non-Finito (Extra Deck)
22. Selected Theorealize Past Lull (hand)
23. Selected Nervedo the Shadebeast Power Patron (hand)
24. Yes
25. Selected Artmage Impasto -Recapture- (Deck)
26. Activate Medius the Pure (GY): Shuffle 1 monster from your hand or face-up field into the Deck, and if you do, Special Summon this card
27. Selected Artmage Non-Finito (M4)
28. Activate Theorealize Past Lull (GY): Special Summon 1 Fusion, Synchro, or Xyz Monster from your GY
29. Selected Junora the Power Patron of Tuning (GY)
30. Activate Purification Power Patron (EMZ-R): Link Summon including this card as material
31. Selected Medicurius the Power Patron of Illusions (Extra Deck)
32. select Medius the Pure (M1)
33. Finish selection
34. Yes
35. Special Summon 1 "Diactorus" monster
36. Selected Artmage Diactorus (Extra Deck)

End board:  LP 8000 | Hand 3 | Deck 33 | Extra 11 | GY 2 | Banished 9   Monsters: M3: Nerva the Power Patron of Creation Lv10 3300/3300 ATK || M4: Junora the Power Patron of Tuning Lv10 3100/3800 ATK || M5: Artmage Diactorus Lv8 2800/2500 ATK || EMZ-R: Medicurius the Power Patron of Illusions L3↙↓↘ 3000    Spell/Trap: S1: Infinite Impermanence (Set) || S2: Artmage Impasto -Recapture- (Set)   GY: Nervedo the Shadebeast Power Patron, Purification Power Patron   Banished: Medius the Pure (face-down), Ars Magna - "Citrinitas" (face-down), Ars Magna of Infinity and Finity (face-down), Fiendsmith Engraver (face-down), Artmage Graflare (face-down), Griffoh (face-down), Theorealize Past Lull, Medius the Pure, 

## Order 2: best 12.75 [margin 4.02: ss_panama 0.3, elfnote 2.4, despia 2.79, angelechy 8.75] (, worst 12.75) — from tries Activate Ars Magna - "Citrinitas"
Others: tries Activate Ars Magna - "Citrinitas" → new ending 12.75 · tries Activate Ars Magna - "Citrinitas" → new early order 12.6 · tries Activate Ars Magna - "Citrinitas" → new early order 12.6 · tries Activate Ars Magna - "Citrinitas" → new ending 12.45 · opening lanes 12.35 · m1b 12.3 · v52-medius 12.2 · v52-medius 12.2 · tries Activate Artmage Vandalism -Assault- 11.8 · bx1 11.75 · m1a 9.8 · m1a 9.25 · br1 8.33 · m1b 8.25

1. Set Spell/Trap Infinite Impermanence
2. Normal Summon Medius the Pure (hand)
3. Yes
4. Selected Nervedo the Shadebeast Power Patron (Deck)
5. Special Summon it
6. Activate Nervedo the Shadebeast Power Patron (M4): Special Summon 1 "Nerva the Power Patron of Creation" from your Extra Deck
7. Selected Nerva the Power Patron of Creation (Extra Deck)
8. Yes
9. Selected Junoldo the Shadespirit Power Patron (Deck)
10. Activate Junoldo the Shadespirit Power Patron (M4): Special Summon 1 "Junora the Power Patron of Tuning" from your Extra Deck
11. Selected Junora the Power Patron of Tuning (Extra Deck)
12. Yes
13. Selected Nervedo the Shadebeast Power Patron (Extra Deck)
14. Link Summon Purification Power Patron (Extra Deck)
15. select Junora the Power Patron of Tuning (M4)
16. select Medius the Pure (M1)
17. Yes
18. Selected Theorealize Medius (Deck)
19. Activate Theorealize Medius (hand): If a "Power Patron" card is on the field: You can Special Summon this card from your hand, then you can add 1 "Theorealize" Spell/Trap from your Deck to your hand
20. Yes
21. Selected Theorealize Past Lull (Deck)
22. Special Summon (procedure) Artmage Non-Finito (Extra Deck)
23. Selected Theorealize Past Lull (hand)
24. Selected Nervedo the Shadebeast Power Patron (hand)
25. Yes
26. Selected Artmage Impasto -Recapture- (Deck)
27. Activate Theorealize Past Lull (GY): Special Summon 1 Fusion, Synchro, or Xyz Monster from your GY
28. Selected Junora the Power Patron of Tuning (GY)
29. Activate Purification Power Patron (EMZ-R): Link Summon including this card as material
30. Selected S:P Little Knight (Extra Deck)
31. select Junora the Power Patron of Tuning (M4)
32. Yes
33. Selected Purification Power Patron (GY)
34. Yes
35. Add 1 "Ars Magna" card from your Deck to your hand
36. Selected Ars Magna of Infinity and Finity (Deck)
37. Activate Medius the Pure (GY): Shuffle 1 monster from your hand or face-up field into the Deck, and if you do, Special Summon this card
38. Selected Theorealize Medius (M5)
39. Activate Ars Magna of Infinity and Finity (hand): You can banish this card from your hand; add 1 non-Warrior "Ars Magna" monster from your Deck to your hand
40. Selected Ars Magna of Purification and Corruption (Deck)
41. Activate Ars Magna of Purification and Corruption (hand): You can banish this card from your hand; add 1 "Ars Magna" Spell/Trap from your Deck to your hand
42. Selected Ars Magna - "Citrinitas" (Deck)
43. Activate Ars Magna - "Citrinitas" (hand): activate this card
44. Activate Ars Magna - "Citrinitas" (S3): Add 1 "Medius" or "Ars Magna" monster from your Deck to your hand
45. Selected Theorealize Medius (Deck)
46. Link Summon Medicurius the Power Patron of Illusions (Extra Deck)
47. select S:P Little Knight (EMZ-R)
48. select Medius the Pure (M4)
49. Finish selection
50. Activate Ars Magna of Purification and Corruption (banishment): Special Summon this card
51. Activate Ars Magna of Infinity and Finity (banishment): Special Summon this card

End board:  LP 8000 | Hand 4 | Deck 30 | Extra 10 | GY 3 | Banished 9   Monsters: M1: Artmage Non-Finito Lv7 2400/1500 ATK || M2: Ars Magna of Infinity and Finity Lv8 1000/2400 ATK || M3: Nerva the Power Patron of Creation Lv10 3300/3300 ATK || M4: Ars Magna of Purification and Corruption Lv8 1000/2100 ATK || EMZ-L: Medicurius the Power Patron of Illusions L3↙↓↘ 9000    Spell/Trap: S1: Infinite Impermanence (Set) || S2: Artmage Impasto -Recapture- (Set) || S3: Ars Magna - "Citrinitas"   GY: Nervedo the Shadebeast Power Patron, Junora the Power Patron of Tuning, S:P Little Knight   Banished: Medius the Pure (face-down), Griffoh (face-down), Nervedo the Shadebeast Power Patron (face-down), Mind Shuffle (

## Order 3: best 12.6 [margin 3.76: ss_panama 3.92, elfnote -0.7, despia 5.11, angelechy 6.63] (, worst 12.6) — from m1b (seed followed 33/33 steps)
Others: search 12.45 · opening lanes 12.35 · m1b → new ending 12.35 · v52-medius 12.2 · v52-medius 12.2 · bx1 11.75 · tries Activate Vidolium the Unstable Power Patron of Unity 11.45 · tries Activate Mind Shuffle 11.15 · m1b → new early order 11 · m1b → new early order 11 · m1a 9.8 · m1a 9.25 · m1b → new ending 9 · br1 8.33 · m1b 8.25

1. Normal Summon Medius the Pure (hand)
2. Yes
3. Selected Nervedo the Shadebeast Power Patron (Deck)
4. Special Summon it
5. Activate Nervedo the Shadebeast Power Patron (M2): Special Summon 1 "Nerva the Power Patron of Creation" from your Extra Deck
6. Selected Nerva the Power Patron of Creation (Extra Deck)
7. Yes
8. Selected Junoldo the Shadespirit Power Patron (Deck)
9. Activate Junoldo the Shadespirit Power Patron (M2): Special Summon 1 "Junora the Power Patron of Tuning" from your Extra Deck
10. Selected Junora the Power Patron of Tuning (Extra Deck)
11. Yes
12. Selected Nervedo the Shadebeast Power Patron (Extra Deck)
13. Link Summon Purification Power Patron (Extra Deck)
14. select Medius the Pure (M1)
15. select Junora the Power Patron of Tuning (M2)
16. Yes
17. Selected Theorealize Medius (Deck)
18. Activate Theorealize Medius (hand): If a "Power Patron" card is on the field: You can Special Summon this card from your hand, then you can add 1 "Theorealize" Spell/Trap from your Deck to your hand
19. Yes
20. Selected Theorealize Past Lull (Deck)
21. Special Summon (procedure) Artmage Non-Finito (Extra Deck)
22. Selected Theorealize Past Lull (hand)
23. Selected Nervedo the Shadebeast Power Patron (hand)
24. Yes
25. Selected Artmage Impasto -Recapture- (Deck)
26. Activate Theorealize Past Lull (GY): Special Summon 1 Fusion, Synchro, or Xyz Monster from your GY
27. Selected Junora the Power Patron of Tuning (GY)
28. Activate Medius the Pure (GY): Shuffle 1 monster from your hand or face-up field into the Deck, and if you do, Special Summon this card
29. Selected Ghost Ogre & Snow Rabbit (hand)
30. Set Spell/Trap Infinite Impermanence
31. Activate Purification Power Patron (EMZ-L): Link Summon including this card as material
32. Selected Medicurius the Power Patron of Illusions (Extra Deck)
33. select Medius the Pure (M1)
34. Finish selection
35. Yes
36. Add 1 "Ars Magna" card from your Deck to your hand
37. Selected Ars Magna of Infinity and Finity (Deck)
38. Activate Ars Magna of Infinity and Finity (hand): You can banish this card from your hand; add 1 non-Warrior "Ars Magna" monster from your Deck to your hand
39. Selected Ars Magna of Purification and Corruption (Deck)
40. Activate Ars Magna of Purification and Corruption (hand): You can banish this card from your hand; add 1 "Ars Magna" Spell/Trap from your Deck to your hand
41. Selected Ars Magna - "Citrinitas" (Deck)
42. Activate Ars Magna - "Citrinitas" (hand): activate this card
43. Activate Ars Magna - "Citrinitas" (S3): Add 1 "Medius" or "Ars Magna" monster from your Deck to your hand
44. Selected Theorealize Medius (Deck)
45. Link Summon S:P Little Knight (Extra Deck)
46. select Theorealize Medius (M3)
47. select Junora the Power Patron of Tuning (M2)
48. Activate Ars Magna of Purification and Corruption (banishment): Special Summon this card
49. Activate Ars Magna of Infinity and Finity (banishment): Special Summon this card
50. Activate S:P Little Knight (M3): Banish 1 card on the field or GY
51. Selected Nervedo the Shadebeast Power Patron (GY)

End board:  LP 8000 | Hand 3 | Deck 30 | Extra 10 | GY 3 | Banished 9   Monsters: M1: Ars Magna of Purification and Corruption Lv8 1000/2100 ATK || M2: Ars Magna of Infinity and Finity Lv8 1000/2400 ATK || M3: S:P Little Knight L2←→ 1600  || M4: Artmage Non-Finito Lv7 2400/1500 ATK || M5: Nerva the Power Patron of Creation Lv10 3300/3300 ATK || EMZ-R: Medicurius the Power Patron of Illusions L3↙↓↘ 9000    Spell/Trap: S1: Artmage Impasto -Recapture- (Set) || S2: Infinite Impermanence (Set) || S3: Ars Magna - "Citrinitas"   GY: Purification Power Patron, Junora the Power Patron of Tuning, Theorealize Medius   Banished: Artmage Vandalism -Assault- (face-down), Mind Shuffle (face-down), Pendulum Treasure (

## Order 4: best 12.45 [margin 2.57: ss_panama 1.02, elfnote 0.57, despia 0.92, angelechy 7.25] (, worst 12.45) — from tries Activate Prohibited Power Patron Portal - Terminus
Others: opening lanes 12.45 · search 12.3 · m1b 12.3 · v52-medius 12.2 · v52-medius 12.2 · bx1 11.8 · tries Activate Mind Shuffle 11.15 · m1a 9.8 · m1a 9.25 · m1b 8.25 · br1 7.49

1. Normal Summon Medius the Pure (hand)
2. Yes
3. Selected Nervedo the Shadebeast Power Patron (Deck)
4. Special Summon it
5. Activate Nervedo the Shadebeast Power Patron (M1): Special Summon 1 "Nerva the Power Patron of Creation" from your Extra Deck
6. Selected Nerva the Power Patron of Creation (Extra Deck)
7. Yes
8. Selected Junoldo the Shadespirit Power Patron (Deck)
9. Activate Junoldo the Shadespirit Power Patron (M1): Special Summon 1 "Junora the Power Patron of Tuning" from your Extra Deck
10. Selected Junora the Power Patron of Tuning (Extra Deck)
11. Yes
12. Selected Nervedo the Shadebeast Power Patron (Extra Deck)
13. Link Summon Purification Power Patron (Extra Deck)
14. select Medius the Pure (M4)
15. select Junora the Power Patron of Tuning (EMZ-L)
16. Yes
17. Selected Theorealize Medius (Deck)
18. Activate Theorealize Medius (hand): If a "Power Patron" card is on the field: You can Special Summon this card from your hand, then you can add 1 "Theorealize" Spell/Trap from your Deck to your hand
19. Yes
20. Selected Theorealize Past Lull (Deck)
21. Special Summon (procedure) Artmage Non-Finito (Extra Deck)
22. Selected Theorealize Past Lull (hand)
23. Selected Nervedo the Shadebeast Power Patron (hand)
24. Yes
25. Selected Artmage Impasto -Recapture- (Deck)
26. Activate Medius the Pure (GY): Shuffle 1 monster from your hand or face-up field into the Deck, and if you do, Special Summon this card
27. Selected Artmage Non-Finito (M1)
28. Activate Purification Power Patron (EMZ-L): Link Summon including this card as material
29. Selected Medicurius the Power Patron of Illusions (Extra Deck)
30. select Medius the Pure (M4)
31. Finish selection
32. Yes
33. Special Summon 1 "Diactorus" monster
34. Selected Artmage Diactorus (Extra Deck)
35. Activate Theorealize Past Lull (GY): Special Summon 1 Fusion, Synchro, or Xyz Monster from your GY
36. Selected Junora the Power Patron of Tuning (GY)

End board:  LP 8000 | Hand 3 | Deck 33 | Extra 11 | GY 2 | Banished 9   Monsters: M3: Junora the Power Patron of Tuning Lv10 3100/3800 ATK || M4: Artmage Diactorus Lv8 2800/2500 ATK || M5: Nerva the Power Patron of Creation Lv10 3300/3300 ATK || EMZ-R: Medicurius the Power Patron of Illusions L3↙↓↘ 3000    Spell/Trap: S1: Infinite Impermanence (Set) || S2: Artmage Impasto -Recapture- (Set)   GY: Nervedo the Shadebeast Power Patron, Purification Power Patron   Banished: Black Luster Soldier - Soldier of Light and Darkness (face-down), Nervedo the Shadebeast Power Patron (face-down), Pendulum Treasure (face-down), Plundered Power Patron Plane - Vidolia (face-down), Medius the Pure (face-down), Skull Arch

