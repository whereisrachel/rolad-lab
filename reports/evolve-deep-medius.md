# Evolved lines — Medius the Pure, Ash Blossom & Joyous Spring, Infinite Impermanence, Droll & Lock Bird, Ghost Ogre & Snow Rabbit (findlist-1100)
2026-11-25T05:29:53.048Z

8 deck orders (different face-down banishes / draws), 3 opponent hands x o_ss_panama + o_elfnote + o_despia + o_angelechy per line, 5 min searches, 4 mutation rounds.
Fitness = average margin after their turn (what you keep minus what they build; −10 more if they OTK). Higher is better.

**Best line per deck order: average 5.78** (worst order 4.24). Winner came from: m1b 2, m1a → new ending 1, m1b → new ending 1, m1b → new early order 1, opening lanes 1, bx1 → new ending 1, tries Activate Mind Shuffle → new early order 1

| seed line | works as written | its score when it works | seed start + search finish (all orders) |
|---|---|---|---|
| br1 | 1/8 | 2.46 | 2.52 |
| bx1 | 0/8 | - | 2.91 |
| m1a | 5/8 | 2.92 | 3.08 |
| m1b | 5/8 | 2.75 | 4.12 |

## Weak points found automatically
Cards whose face-down banish (by your own costs) hurt the best line most (average best line without vs with that card banished):

| card | orders where it was banished | drop |
|---|---|---|
| Fiendsmith's Tract | 3/8 | 1.17 |
| Artmage Vandalism -Assault- | 4/8 | 1.12 |
| Ars Magna of Purification and Corruption | 2/8 | 0.87 |
| Mind Shuffle | 3/8 | 0.85 |
| Theorealize Medius | 3/8 | 0.67 |
| Griffoh | 3/8 | 0.44 |
| Nervedo the Shadebeast Power Patron | 4/8 | 0.23 |
| Lacrima the Crimson Tears | 2/8 | 0.04 |
| Vidolium the Unstable Power Patron of Unity | 3/8 | 0.03 |
| Pendulum Treasure | 5/8 | -0.32 |

Where the hand-designed lines broke (next step that no longer worked):
- br1: Griffoh (3x)
- bx1: Griffoh (3x)
- m1a: Past Lull (2x)
- m1b: Past Lull (2x)
- br1: Skull Archfiend (1x)
- bx1: Skull Archfiend (1x)
- bx1: Xyz Summon Evilswarm Exciton Knight (1x)
- bx1: Set 1 card (1x)
- br1: Set 1 card (1x)
- bx1: Magician of Dark Chaos (1x)
- br1: Magician of Dark Chaos (1x)
- m1b: Junoldo (1x)
- br1: Junoldo (1x)
- m1a: Junoldo (1x)
- bx1: Junoldo (1x)

List changes proposed for the list test (data/proposals-findlist-1100.json):
- +1 Fiendsmith's Tract, −1 Plundered Power Patron Plane - Vidolia — Fiendsmith's Tract: best line 1.17 worse when a cost banished it (3 of 8 orders) — Medius the Pure
- +1 Ars Magna of Purification and Corruption, −1 Artmage Vandalism -Assault- — Ars Magna of Purification and Corruption: best line 0.87 worse when a cost banished it (2 of 8 orders) — Medius the Pure
- +1 Mind Shuffle, −1 Small World — Mind Shuffle: best line 0.85 worse when a cost banished it (3 of 8 orders) — Medius the Pure
- +1 Theorealize Medius, −1 Plundered Power Patron Plane - Vidolia — Theorealize Medius: best line 0.67 worse when a cost banished it (3 of 8 orders) — Medius the Pure
- +1 Fiendsmith's Tract — Fiendsmith's Tract: best line 1.17 worse when a cost banished it (3 of 8 orders) — Medius the Pure (add only: deck grows, up to 60)
- +1 Ars Magna of Purification and Corruption — Ars Magna of Purification and Corruption: best line 0.87 worse when a cost banished it (2 of 8 orders) — Medius the Pure (add only: deck grows, up to 60)
- +1 Mind Shuffle — Mind Shuffle: best line 0.85 worse when a cost banished it (3 of 8 orders) — Medius the Pure (add only: deck grows, up to 60)
- +1 Theorealize Medius — Theorealize Medius: best line 0.67 worse when a cost banished it (3 of 8 orders) — Medius the Pure (add only: deck grows, up to 60)

Effects the search had not used, tried on purpose (best result so far):
- Activate Griffoh: 4.67
- Activate Nervedo the Shadebeast Power Patron: 4.18
- Activate Mind Shuffle: 3.96
- Activate Artmage Vandalism -Assault-: 3.83
- Activate Vidolium the Unstable Power Patron of Unity: 3.69
- Activate Light and Darkness Ritual: 3.38
- Activate Artmage Diactorus: 3.37
- Activate Vidolium the Unstable Power Patron of Unity: 3.27

## Order 1: best 7.13 (ss_panama 4.08, elfnote 4.43, despia 9.45, angelechy 9.3, worst -1.29) — from m1b (seed followed 33/33 steps)
Others: m1b → new early order 7.05 · m1b → new early order 7.04 · m1a 4.21 · m1b → new ending 3.84 · tries Activate Vidolium the Unstable Power Patron of Unity 3.69 · m1a 3.53 · m1b → new ending 3.44 · m1b 2.91 · tries Activate Theorealize Past Lull 2.25 · opening lanes 2.07 · br1 1.79 · bx1 1.45 · search 1.27

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
36. Special Summon 1 "Diactorus" monster
37. Selected Artmage Diactorus (Extra Deck)
38. Activate Artmage Diactorus (M3): Change the battle position of 1 monster on the field
39. Selected Artmage Diactorus (M3)
40. Link Summon S:P Little Knight (Extra Deck)
41. select Junora the Power Patron of Tuning (M2)
42. select Artmage Non-Finito (M4)
43. No

End board:  LP 8000 | Hand 2 | Deck 34 | Extra 9 | GY 4 | Banished 9   Monsters: M3: Artmage Diactorus Lv8 2800/2500 DEF || M4: S:P Little Knight L2←→ 1600  || M5: Nerva the Power Patron of Creation Lv10 3300/3300 ATK || EMZ-R: Medicurius the Power Patron of Illusions L3↙↓↘ 3000    Spell/Trap: S1: Artmage Impasto -Recapture- (Set) || S2: Infinite Impermanence (Set)   GY: Nervedo the Shadebeast Power Patron, Purification Power Patron, Junora the Power Patron of Tuning, Artmage Non-Finito   Banished: Medius the Pure (face-down), Ars Magna - "Citrinitas" (face-down), Ars Magna of Infinity and Finity (face-down), Fiendsmith Engraver (face-down), Artmage Graflare (face-down), Griffoh (face-down), Theorealiz

## Order 2: best 5.13 (ss_panama 6.8, elfnote 2.9, despia 0.32, angelechy 9.25, worst -0.5) — from m1a → new ending
Others: m1a → new ending → new early order 4.46 · m1a 3.98 · m1b 3.66 · m1a → new early order 3.44 · opening lanes 3.43 · m1a → new ending 3.42 · m1b 3.41 · bx1 3.3 · tries Activate Vidolium the Unstable Power Patron of Unity 3.27 · m1a 3.17 · tries Activate Junoldo the Shadespirit Power Patron 2.05 · br1 1.68 · search 1.36

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
13. Set Spell/Trap Infinite Impermanence
14. Link Summon Purification Power Patron (Extra Deck)
15. select Junora the Power Patron of Tuning (M2)
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
26. Activate Purification Power Patron (EMZ-L): Link Summon including this card as material
27. Selected Medicurius the Power Patron of Illusions (Extra Deck)
28. select Artmage Non-Finito (M3)
29. Finish selection
30. Selected Artmage Impasto -Recapture- (Deck)
31. Activate Theorealize Past Lull (GY): Special Summon 1 Fusion, Synchro, or Xyz Monster from your GY
32. Selected Junora the Power Patron of Tuning (GY)
33. Activate Medius the Pure (GY): Shuffle 1 monster from your hand or face-up field into the Deck, and if you do, Special Summon this card
34. Selected Droll & Lock Bird (hand)
35. Link Summon S:P Little Knight (Extra Deck)
36. select Junora the Power Patron of Tuning (M3)
37. select Medius the Pure (M4)
38. Yes
39. Special Summon 1 "Diactorus" monster
40. Selected Artmage Diactorus (Extra Deck)

End board:  LP 8000 | Hand 2 | Deck 34 | Extra 9 | GY 4 | Banished 9   Monsters: M3: S:P Little Knight L2←→ 1600  || M4: Artmage Diactorus Lv8 2800/2500 ATK || M5: Nerva the Power Patron of Creation Lv10 3300/3300 ATK || EMZ-R: Medicurius the Power Patron of Illusions L3↙↓↘ 3000    Spell/Trap: S1: Infinite Impermanence (Set) || S2: Artmage Impasto -Recapture- (Set)   GY: Nervedo the Shadebeast Power Patron, Artmage Non-Finito, Purification Power Patron, Junora the Power Patron of Tuning   Banished: Medius the Pure (face-down), Griffoh (face-down), Nervedo the Shadebeast Power Patron (face-down), Mind Shuffle (face-down), Artmage Vandalism -Assault- (face-down), Ars Magna - "Citrinitas" (face-down), The

## Order 3: best 4.24 (ss_panama 5.27, elfnote 1.88, despia -3.19, angelechy 8.1, worst -3.19) — from m1b → new ending
Others: m1b 4.03 · m1b 3.41 · m1b → new ending → new early order 3.39 · m1b → new ending 3.08 · m1a 2.61 · m1a 2.15 · tries Activate Mind Shuffle 1.98 · opening lanes 1.83 · bx1 1.23 · br1 1.1 · tries Activate Theorealize Liberation 0.73 · m1b → new early order -0.1 · search -0.33

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
29. Activate Purification Power Patron (EMZ-L): Link Summon including this card as material
30. Selected Medicurius the Power Patron of Illusions (Extra Deck)
31. select Junora the Power Patron of Tuning (M2)
32. Finish selection
33. Selected Ghost Ogre & Snow Rabbit (hand)
34. Link Summon S:P Little Knight (Extra Deck)
35. select Medius the Pure (M1)
36. select Artmage Non-Finito (M4)
37. Yes
38. Special Summon 1 "Diactorus" monster
39. Selected Artmage Diactorus (Extra Deck)

End board:  LP 8000 | Hand 3 | Deck 34 | Extra 9 | GY 4 | Banished 9   Monsters: M3: Artmage Diactorus Lv8 2800/2500 ATK || M4: S:P Little Knight L2←→ 1600  || M5: Nerva the Power Patron of Creation Lv10 3300/3300 ATK || EMZ-R: Medicurius the Power Patron of Illusions L3↙↓↘ 3000    Spell/Trap: S1: Artmage Impasto -Recapture- (Set)   GY: Nervedo the Shadebeast Power Patron, Junora the Power Patron of Tuning, Purification Power Patron, Artmage Non-Finito   Banished: Artmage Vandalism -Assault- (face-down), Mind Shuffle (face-down), Pendulum Treasure (face-down), Artmage Vandalism -Assault- (face-down), Fiendsmith's Tract (face-down), Griffoh (face-down), Theorealize Past Lull, Medius the Pure, Theorealiz

## Order 4: best 6.63 (ss_panama 7.83, elfnote 5.6, despia 6.21, angelechy 6.8, worst 1.2) — from m1b (seed followed 33/33 steps)
Others: opening lanes 5.22 · m1b → new ending 4.57 · m1b → new ending 3.68 · m1a 3.13 · br1 2.85 · tries Activate Black Chaos 2.79 · tries Activate Light and Darkness Ritual 2.79 · m1b → new early order 2.79 · search 2.69 · m1b 2.34 · m1b → new early order 2.28 · m1a 2.24 · bx1 1.93

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
31. Link Summon S:P Little Knight (Extra Deck)
32. select Medius the Pure (M1)
33. select Junora the Power Patron of Tuning (M2)
34. Yes
35. Add 1 "Ars Magna" card from your Deck to your hand
36. Selected Ars Magna of Infinity and Finity (Deck)
37. Activate Ars Magna of Infinity and Finity (hand): You can banish this card from your hand; add 1 non-Warrior "Ars Magna" monster from your Deck to your hand
38. Selected Ars Magna of Purification and Corruption (Deck)
39. Activate Ars Magna of Purification and Corruption (hand): You can banish this card from your hand; add 1 "Ars Magna" Spell/Trap from your Deck to your hand
40. Activate Purification Power Patron (EMZ-L): Link Summon including this card as material
41. Selected Medicurius the Power Patron of Illusions (Extra Deck)
42. select Theorealize Medius (M3)
43. Finish selection
44. Selected Ars Magna - "Citrinitas" (Deck)
45. Activate Ars Magna of Purification and Corruption (banishment): Special Summon this card
46. Activate Ars Magna of Infinity and Finity (banishment): Special Summon this card
47. Activate Ars Magna - "Citrinitas" (hand): activate this card
48. Activate Ars Magna - "Citrinitas" (S3): Add 1 "Medius" or "Ars Magna" monster from your Deck to your hand
49. Selected Medius the Pure (Deck)

End board:  LP 8000 | Hand 3 | Deck 30 | Extra 10 | GY 4 | Banished 8   Monsters: M1: Ars Magna of Infinity and Finity Lv8 1000/2400 ATK || M2: S:P Little Knight L2←→ 1600  || M3: Ars Magna of Purification and Corruption Lv8 1000/2100 ATK || M4: Artmage Non-Finito Lv7 2400/1500 ATK || M5: Nerva the Power Patron of Creation Lv10 3300/3300 ATK || EMZ-L: Medicurius the Power Patron of Illusions L3↙↓↘ 9000    Spell/Trap: S1: Artmage Impasto -Recapture- (Set) || S2: Infinite Impermanence (Set) || S3: Ars Magna - "Citrinitas"   GY: Nervedo the Shadebeast Power Patron, Junora the Power Patron of Tuning, Theorealize Medius, Purification Power Patron   Banished: Black Luster Soldier - Soldier of Light and Darkn

## Order 5: best 5.12 (ss_panama 6.38, elfnote 1.35, despia -1.33, angelechy 9.85, worst -1.82) — from m1b → new early order
Others: m1b 5.1 · search 4.96 · bx1 4.95 · opening lanes 4.94 · br1 4.09 · m1b → new early order 3.13 · m1a 3.07 · m1a 3.05 · br1 2.46 · m1b → new ending 2.31 · tries Activate Artmage Diactorus 1.81 · m1b 1.67 · m1b → new ending 1.59 · tries Activate Artmage Vandalism -Assault- 1.19

1. Normal Summon Medius the Pure (hand)
2. Yes
3. Selected Nervedo the Shadebeast Power Patron (Deck)
4. Special Summon it
5. Activate Nervedo the Shadebeast Power Patron (M2): Special Summon 1 "Nerva the Power Patron of Creation" from your Extra Deck
6. Selected Nerva the Power Patron of Creation (Extra Deck)
7. Yes
8. Selected Junoldo the Shadespirit Power Patron (Deck)
9. Activate Junoldo the Shadespirit Power Patron (M3): Special Summon 1 "Junora the Power Patron of Tuning" from your Extra Deck
10. Selected Junora the Power Patron of Tuning (Extra Deck)
11. Yes
12. Selected Nervedo the Shadebeast Power Patron (Extra Deck)
13. Link Summon Purification Power Patron (Extra Deck)
14. select Junora the Power Patron of Tuning (EMZ-L)
15. select Medius the Pure (M1)
16. Yes
17. Selected Theorealize Medius (Deck)
18. Activate Medius the Pure (GY): Shuffle 1 monster from your hand or face-up field into the Deck, and if you do, Special Summon this card
19. Selected Ghost Ogre & Snow Rabbit (hand)
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
30. select Medius the Pure (M1)
31. Finish selection
32. Selected Mind Shuffle (Deck)
33. Yes
34. Special Summon 1 "Diactorus" monster
35. Selected Artmage Diactorus (Extra Deck)
36. Activate Artmage Diactorus (M3): Change the battle position of 1 monster on the field
37. Selected Artmage Diactorus (M3)
38. Activate Mind Shuffle (S1): activate this card
39. No
40. Activate Mind Shuffle (S1): Add 1 appropriate monster to your hand
41. Selected Skull Archfiend of Chaos (Deck)
42. Selected Skull Archfiend of Chaos (hand)
43. Yes
44. Selected Light and Darkness Ritual (Deck)
45. Selected Magician of Dark Chaos - Black Chaos (Deck)
46. Activate Light and Darkness Ritual (GY): Add both this card and 1 card that mentions "Light and Darkness Ritual" from your GY to your hand
47. Selected Skull Archfiend of Chaos (GY)
48. Activate Light and Darkness Ritual (hand): Ritual Summon 1 "Magician of Dark Chaos - Black Chaos" or "Black Luster Soldier - Soldier of Light and Darkness" from your hand
49. Selected Magician of Dark Chaos - Black Chaos (hand)
50. Selected Griffoh (GY) value 8 or 1
51. Yes
52. Selected Theorealize Liberation (GY)
53. Special Summon (procedure) Artmage Non-Finito (Extra Deck)
54. Selected Theorealize Liberation (hand)
55. Selected Nervedo the Shadebeast Power Patron (hand)
56. Yes
57. Selected Artmage Impasto -Recapture- (Deck)

End board:  LP 8000 | Hand 4 | Deck 29 | Extra 10 | GY 5 | Banished 9   Monsters: M1: Magician of Dark Chaos - Black Chaos Lv8 2800/2600 ATK || M2: Nerva the Power Patron of Creation Lv10 3300/3300 ATK || M3: Artmage Diactorus Lv8 2800/2500 DEF || M4: Artmage Non-Finito Lv7 2400/1500 ATK || EMZ-L: Medicurius the Power Patron of Illusions L3↙↓↘ 3000    Spell/Trap: S1: Mind Shuffle || S2: Artmage Impasto -Recapture- (Set)   GY: Junora the Power Patron of Tuning, Purification Power Patron, Light and Darkness Ritual, Theorealize Liberation, Nervedo the Shadebeast Power Patron   Banished: Theorealize Medius (face-down), Pendulum Treasure (face-down), Artmage Vandalism -Assault- (face-down), Lacrima the Crim

## Order 6: best 6.37 (ss_panama null, elfnote 4.99, despia 6.07, angelechy 7.48, worst 3.8) — from opening lanes
Others: opening lanes → new ending 4.35 · m1a 4.01 · tries Activate Artmage Vandalism -Assault- 3.83 · bx1 3.71 · tries Activate Light and Darkness Ritual 3.38 · br1 2.52 · opening lanes → new ending 2.25 · m1b 1.49 · search 0.95 · opening lanes → new early order 0.91 · opening lanes → new early order 0.18

1. Normal Summon Medius the Pure (hand)
2. Yes
3. Selected Nervedo the Shadebeast Power Patron (Deck)
4. Special Summon it
5. Activate Nervedo the Shadebeast Power Patron (M3): Special Summon 1 "Nerva the Power Patron of Creation" from your Extra Deck
6. Selected Nerva the Power Patron of Creation (Extra Deck)
7. Yes
8. Selected Artmage Graflare (Deck)
9. Link Summon Purification Power Patron (Extra Deck)
10. select Medius the Pure (M4)
11. select Nerva the Power Patron of Creation (EMZ-L)
12. Yes
13. Selected Theorealize Medius (Deck)
14. Activate Medius the Pure (GY): Shuffle 1 monster from your hand or face-up field into the Deck, and if you do, Special Summon this card
15. Selected Droll & Lock Bird (hand)
16. Activate Theorealize Medius (hand): If a "Power Patron" card is on the field: You can Special Summon this card from your hand, then you can add 1 "Theorealize" Spell/Trap from your Deck to your hand
17. Yes
18. Selected Theorealize Liberation (Deck)
19. Activate Theorealize Liberation (hand): Add to your hand, or Special Summon, 1 monster from your Deck with 300 ATK/200 DEF
20. Activate Purification Power Patron (EMZ-R): Link Summon including this card as material
21. Selected Medicurius the Power Patron of Illusions (Extra Deck)
22. select Medius the Pure (M1)
23. Finish selection
24. Selected Junoldo the Shadespirit Power Patron (Deck)
25. Special Summon it
26. Yes
27. Special Summon 1 "Diactorus" monster
28. Selected Artmage Diactorus (Extra Deck)
29. Activate Junoldo the Shadespirit Power Patron (M4): Special Summon 1 "Junora the Power Patron of Tuning" from your Extra Deck
30. Selected Junora the Power Patron of Tuning (Extra Deck)
31. Yes
32. Selected Nervedo the Shadebeast Power Patron (Extra Deck)
33. Special Summon (procedure) Artmage Non-Finito (Extra Deck)
34. Selected Infinite Impermanence (hand)
35. Selected Nervedo the Shadebeast Power Patron (hand)
36. Yes
37. Selected Artmage Impasto -Recapture- (Deck)

End board:  LP 8000 | Hand 2 | Deck 33 | Extra 10 | GY 5 | Banished 8   Monsters: M1: Artmage Non-Finito Lv7 2400/1500 ATK || M3: Artmage Diactorus Lv8 2800/2500 ATK || M4: Junora the Power Patron of Tuning Lv10 3100/3800 ATK || M5: Artmage Graflare Lv5 2100/1500 ATK || EMZ-R: Medicurius the Power Patron of Illusions L3↙↓↘ 3000    Spell/Trap: S1: Artmage Impasto -Recapture- (Set)   GY: Nerva the Power Patron of Creation, Purification Power Patron, Theorealize Liberation, Infinite Impermanence, Nervedo the Shadebeast Power Patron   Banished: Lacrima the Crimson Tears (face-down), Artmage Vandalism -Assault- (face-down), Mind Shuffle (face-down), Medius the Pure, Theorealize Medius, Theorealize Past Lull

## Order 7: best 5.77 (ss_panama 1.87, elfnote 5.04, despia 0.67, angelechy 9.25, worst 0.67) — from bx1 → new ending
Others: bx1 → new ending → new early order 5.76 · bx1 4 · bx1 → new ending → new early order 3.76 · search 2.91 · br1 2.61 · tries Activate Ars Magna - "Citrinitas" 1.44 · bx1 → new ending → new ending 1.36 · tries Activate Ars Magna - "Citrinitas" 1.23 · m1b 1.19 · m1a 0.81 · opening lanes 0.31

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
20. Selected Theorealize Liberation (Deck)
21. Activate Medius the Pure (GY): Shuffle 1 monster from your hand or face-up field into the Deck, and if you do, Special Summon this card
22. Selected Ash Blossom & Joyous Spring (hand)
23. Activate Theorealize Liberation (hand): Add to your hand, or Special Summon, 1 monster from your Deck with 300 ATK/200 DEF
24. Activate Purification Power Patron (EMZ-L): Link Summon including this card as material
25. Selected Medicurius the Power Patron of Illusions (Extra Deck)
26. select Medius the Pure (M4)
27. Finish selection
28. Selected Griffoh (Deck)
29. Add the card(s) to your hand
30. Yes
31. Special Summon 1 "Diactorus" monster
32. Selected Artmage Diactorus (Extra Deck)
33. Activate Griffoh (hand): Activate 1 of these effects
34. Set 1 card that mentions "Light and Darkness Ritual"
35. Selected Mind Shuffle (Deck)
36. Activate Mind Shuffle (S1): activate this card
37. No
38. Activate Mind Shuffle (S1): Add 1 appropriate monster to your hand
39. Selected Skull Archfiend of Chaos (Deck)
40. Selected Skull Archfiend of Chaos (hand)
41. Yes
42. Selected Light and Darkness Ritual (Deck)
43. Selected Black Luster Soldier - Soldier of Light and Darkness (Deck)
44. Activate Light and Darkness Ritual (GY): Add both this card and 1 card that mentions "Light and Darkness Ritual" from your GY to your hand
45. Selected Griffoh (GY)
46. Activate Theorealize Liberation (GY): Treat 1 monster you control as a Tuner this turn
47. Selected Nerva the Power Patron of Creation (M5)
48. Special Summon (procedure) Artmage Non-Finito (Extra Deck)
49. Selected Light and Darkness Ritual (hand)
50. Selected Nervedo the Shadebeast Power Patron (hand)
51. Yes
52. Selected Artmage Impasto -Recapture- (Deck)
53. Activate Skull Archfiend of Chaos (GY): Special Summon this card
54. select Theorealize Liberation (banishment)
55. select Nervedo the Shadebeast Power Patron (GY)
56. select Light and Darkness Ritual (GY)
57. Default order

End board:  LP 8000 | Hand 5 | Deck 32 | Extra 10 | GY 2 | Banished 8   Monsters: M1: Skull Archfiend of Chaos Lv6 2500/1200 ATK || M3: Artmage Diactorus Lv8 2800/2500 ATK || M4: Artmage Non-Finito Lv7 2400/1500 ATK || M5: Nerva the Power Patron of Creation Lv10 3300/3300 ATK || EMZ-R: Medicurius the Power Patron of Illusions L3↙↓↘ 3000    Spell/Trap: S1: Mind Shuffle || S2: Artmage Impasto -Recapture- (Set)   GY: Junora the Power Patron of Tuning, Purification Power Patron   Banished: Fiendsmith's Tract (face-down), Ars Magna - "Citrinitas" (face-down), Nervedo the Shadebeast Power Patron (face-down), Fiendsmith Engraver (face-down), Magician of Dark Chaos - Black Chaos (face-down), Theorealize Past L

## Order 8: best 5.83 (ss_panama 3.92, elfnote null, despia -2.89, angelechy 10, worst -2.89) — from tries Activate Mind Shuffle → new early order
Others: tries Activate Mind Shuffle 3.96 · m1b 3.71 · tries Activate Mind Shuffle → new early order 3.65 · br1 3.55 · m1a 3.29 · tries Activate Mind Shuffle → new ending 2.96 · bx1 2.71 · search 1.83 · tries Activate Mind Shuffle → new ending 0.72 · opening lanes 0.31 · tries Activate Prohibited Power Patron Portal - Terminus -1.51

1. Normal Summon Medius the Pure (hand)
2. Yes
3. Selected Nervedo the Shadebeast Power Patron (Deck)
4. Special Summon it
5. Activate Nervedo the Shadebeast Power Patron (M3): Special Summon 1 "Nerva the Power Patron of Creation" from your Extra Deck
6. Selected Nerva the Power Patron of Creation (Extra Deck)
7. Yes
8. Selected Artmage Finmel (Deck)
9. Set Spell/Trap Infinite Impermanence
10. Link Summon Purification Power Patron (Extra Deck)
11. select Medius the Pure (M1)
12. select Nerva the Power Patron of Creation (M2)
13. Yes
14. Selected Theorealize Medius (Deck)
15. Activate Medius the Pure (GY): Shuffle 1 monster from your hand or face-up field into the Deck, and if you do, Special Summon this card
16. Selected Droll & Lock Bird (hand)
17. Activate Theorealize Medius (hand): If a "Power Patron" card is on the field: You can Special Summon this card from your hand, then you can add 1 "Theorealize" Spell/Trap from your Deck to your hand
18. Yes
19. Selected Theorealize Liberation (Deck)
20. Activate Theorealize Liberation (hand): Add to your hand, or Special Summon, 1 monster from your Deck with 300 ATK/200 DEF
21. Activate Purification Power Patron (EMZ-L): Link Summon including this card as material
22. Selected Medicurius the Power Patron of Illusions (Extra Deck)
23. select Medius the Pure (M2)
24. Finish selection
25. Selected Griffoh (Deck)
26. Add the card(s) to your hand
27. Yes
28. Special Summon 1 "Diactorus" monster
29. Selected Artmage Diactorus (Extra Deck)
30. Activate Griffoh (hand): Activate 1 of these effects
31. Set 1 card that mentions "Light and Darkness Ritual"
32. Selected Mind Shuffle (Deck)
33. Activate Theorealize Liberation (GY): Treat 1 monster you control as a Tuner this turn
34. Selected Artmage Finmel (M3)
35. Activate Mind Shuffle (S2): activate this card
36. Yes
37. Selected Skull Archfiend of Chaos (Deck)
38. Selected Skull Archfiend of Chaos (hand)
39. Yes
40. Selected Light and Darkness Ritual (Deck)
41. Selected Magician of Dark Chaos - Black Chaos (Deck)
42. Activate Light and Darkness Ritual (GY): Add both this card and 1 card that mentions "Light and Darkness Ritual" from your GY to your hand
43. Selected Skull Archfiend of Chaos (GY)
44. Activate Light and Darkness Ritual (hand): Ritual Summon 1 "Magician of Dark Chaos - Black Chaos" or "Black Luster Soldier - Soldier of Light and Darkness" from your hand
45. Selected Magician of Dark Chaos - Black Chaos (hand)
46. Selected Griffoh (GY) value 8 or 1
47. Yes
48. Selected Light and Darkness Ritual (GY)
49. Special Summon (procedure) Artmage Non-Finito (Extra Deck)
50. Selected Light and Darkness Ritual (hand)
51. Selected Artmage Finmel (M3)
52. Yes
53. Selected Artmage Impasto -Recapture- (Deck)

End board:  LP 8000 | Hand 3 | Deck 32 | Extra 11 | GY 4 | Banished 7   Monsters: M3: Artmage Non-Finito Lv7 2400/1500 ATK || M4: Artmage Diactorus Lv8 2800/2500 ATK || M5: Magician of Dark Chaos - Black Chaos Lv8 2800/2600 ATK || EMZ-R: Medicurius the Power Patron of Illusions L3↙↓↘ 3000    Spell/Trap: S1: Infinite Impermanence (Set) || S2: Mind Shuffle || S3: Artmage Impasto -Recapture- (Set)   GY: Nerva the Power Patron of Creation, Purification Power Patron, Light and Darkness Ritual, Artmage Finmel   Banished: Fiendsmith Engraver (face-down), Junoldo the Shadespirit Power Patron (face-down), Theorealize Medius (face-down), Medius the Pure, Theorealize Medius, Theorealize Liberation, Griffoh   Hand

