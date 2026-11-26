# Evolved lines — Pendulum Treasure, Ash Blossom & Joyous Spring, Ash Blossom & Joyous Spring, Droll & Lock Bird, Ghost Ogre & Snow Rabbit (findlist-1100)
2026-11-26T01:20:00.130Z

8 deck orders (different face-down banishes / draws), 3 opponent hands x o_ss_panama + o_elfnote + o_despia + o_angelechy per line, 5 min searches, 6 mutation rounds.
Fitness = end-board interruptions (the lab scorer, src/disrupt.mjs: wipe 2, negate 1-1.5, banish/protection less; hand traps kept count 1 each). The winner of each order is also played into the opponent decks: margin after their turn shown beside it.

**Margin after their turn (winners): average 4.28** (worst -13.94)

**Best line per deck order: average 12.46** (worst order 11.35). Winner came from: tries Activate Prohibited Power Patron Portal - Terminus 1, tries Activate Light and Darkness Ritual 1, tries Activate Vidolium the Unstable Power Patron of Unity 1, tries Normal Summon Medius the Pure 1, forced Activate Fiendsmith's Sequence → new early order 1, tries Activate Vidolium the Unstable Power Patron of Unity → new ending 1, forced Activate Fiendsmith's Sequence 1, tries Activate Vidolium the Unstable Power Patron of Unity → new ending → new early order 1

## Weak points found automatically
Cards whose face-down banish (by your own costs) hurt the best line most (average best line without vs with that card banished):

| card | orders where it was banished | drop |
|---|---|---|
| Artmage Vandalism -Assault- | 7/8 | 1.65 |
| Mind Shuffle | 3/8 | 0.94 |
| Ars Magna of Infinity and Finity | 3/8 | 0.94 |
| Skull Archfiend of Chaos | 6/8 | 0.72 |
| Black Chaos | 3/8 | 0.57 |
| Fiendsmith's Tract | 5/8 | 0.39 |
| Medius the Pure | 5/8 | 0.39 |
| Artmage Impasto -Recapture- | 3/8 | 0.01 |
| Small World | 5/8 | -0.01 |
| Infinite Impermanence | 3/8 | -0.04 |

List changes proposed for the list test (data/proposals-findlist-1100.json):
- +1 Mind Shuffle, −1 Plundered Power Patron Plane - Vidolia — Mind Shuffle: best line 0.94 worse when a cost banished it (3 of 8 orders) — Pendulum Treasure
- +1 Ars Magna of Infinity and Finity, −1 Artmage Vandalism -Assault- — Ars Magna of Infinity and Finity: best line 0.94 worse when a cost banished it (3 of 8 orders) — Pendulum Treasure
- +1 Skull Archfiend of Chaos, −1 Small World — Skull Archfiend of Chaos: best line 0.72 worse when a cost banished it (6 of 8 orders) — Pendulum Treasure
- +1 Black Chaos, −1 Plundered Power Patron Plane - Vidolia — Black Chaos: best line 0.57 worse when a cost banished it (3 of 8 orders) — Pendulum Treasure
- +1 Mind Shuffle — Mind Shuffle: best line 0.94 worse when a cost banished it (3 of 8 orders) — Pendulum Treasure (add only: deck grows, up to 60)
- +1 Ars Magna of Infinity and Finity — Ars Magna of Infinity and Finity: best line 0.94 worse when a cost banished it (3 of 8 orders) — Pendulum Treasure (add only: deck grows, up to 60)
- +1 Skull Archfiend of Chaos — Skull Archfiend of Chaos: best line 0.72 worse when a cost banished it (6 of 8 orders) — Pendulum Treasure (add only: deck grows, up to 60)
- +1 Black Chaos — Black Chaos: best line 0.57 worse when a cost banished it (3 of 8 orders) — Pendulum Treasure (add only: deck grows, up to 60)

Effects the search had not used, tried on purpose (best result so far):
- Normal Summon Medius the Pure: 12.15
- Activate Vidolium the Unstable Power Patron of Unity: 12.1
- Activate Vidolium the Unstable Power Patron of Unity: 12.1
- Activate Prohibited Power Patron Portal - Terminus: 12.1
- Activate Vidolium the Unstable Power Patron of Unity: 12.1
- Activate Light and Darkness Ritual: 11.35
- Activate Nervedo the Shadebeast Power Patron: 10.5
- Activate Ars Magna of Purification and Corruption: 9.92

## Order 1: best 12.1 [margin 4.98: ss_panama 2.43, elfnote 3.71, despia 4.4, angelechy 8.1] (, worst 12.1) — from tries Activate Prohibited Power Patron Portal - Terminus
Others: opening lanes 12.1 · tries Activate Vidolium the Unstable Power Patron of Unity 12.1 · tries Activate Prohibited Power Patron Portal - Terminus → new early order 12.1 · tries Normal Summon Medius the Pure 12.05 · tries Activate Prohibited Power Patron Portal - Terminus → new early order 11 · tries Activate Prohibited Power Patron Portal - Terminus → new ending 10.57 · tries Activate Prohibited Power Patron Portal - Terminus → new early order 10.5 · tries Activate Mind Shuffle 9.59 · tries Activate Prohibited Power Patron Portal - Terminus → new ending 9.41 · tries Activate Prohibited Power Patron Portal - Terminus → new ending 9.41 · forced Activate Theorealize Past Lull 8.03 · search 7.13 · forced Activate Theorealize Liberation 7.13 · forced Link Summon S:P Little Knight 7.13 · forced Activate Light and Darkness Ritual: Ritual Summon 7.13 · forced Activate Fiendsmith's Sequence 7.13 · forced Special Summon (procedure) Dark Magician of Destruction 7.13 · tries Normal Summon Theorealize Medius 4.3 · forced Activate Artmage Graflare 4.05 · forced Synchro Summon Chaos Angel 3.4

1. Activate Pendulum Treasure (hand): Add to Extra Deck
2. Selected Vidolium the Unstable Power Patron of Unity (Deck)
3. Yes
4. Selected Prohibited Power Patron Portal - Terminus (Deck)
5. Set Spell/Trap Prohibited Power Patron Portal - Terminus
6. Activate Prohibited Power Patron Portal - Terminus (S1): Send 1 "Power Patron" monster from your Deck or Extra Deck to the GY, then you can add 1 DARK Fairy monster from your Deck to your hand
7. Selected Purification Power Patron (Extra Deck)
8. Yes
9. Selected Medius the Pure (Deck)
10. Normal Summon Medius the Pure (hand)
11. Yes
12. Selected Nervedo the Shadebeast Power Patron (Deck)
13. Special Summon it
14. Activate Nervedo the Shadebeast Power Patron (M1): Special Summon 1 "Nerva the Power Patron of Creation" from your Extra Deck
15. Selected Nerva the Power Patron of Creation (Extra Deck)
16. Yes
17. Selected Junoldo the Shadespirit Power Patron (Deck)
18. Activate Junoldo the Shadespirit Power Patron (M4): Special Summon 1 "Junora the Power Patron of Tuning" from your Extra Deck
19. Selected Junora the Power Patron of Tuning (Extra Deck)
20. Yes
21. Selected Nervedo the Shadebeast Power Patron (Extra Deck)
22. Link Summon Purification Power Patron (Extra Deck)
23. select Junora the Power Patron of Tuning (M4)
24. select Medius the Pure (M3)
25. Yes
26. Selected Theorealize Medius (Deck)
27. Activate Medius the Pure (GY): Shuffle 1 monster from your hand or face-up field into the Deck, and if you do, Special Summon this card
28. Selected Ash Blossom & Joyous Spring (hand)
29. Activate Theorealize Medius (hand): If a "Power Patron" card is on the field: You can Special Summon this card from your hand, then you can add 1 "Theorealize" Spell/Trap from your Deck to your hand
30. Yes
31. Selected Theorealize Past Lull (Deck)
32. Special Summon (procedure) Artmage Non-Finito (Extra Deck)
33. Selected Theorealize Past Lull (hand)
34. Selected Nervedo the Shadebeast Power Patron (hand)
35. Yes
36. Selected Artmage Impasto -Recapture- (Deck)
37. Activate Purification Power Patron (EMZ-R): Link Summon including this card as material
38. Selected Medicurius the Power Patron of Illusions (Extra Deck)
39. select Medius the Pure (M2)
40. Finish selection
41. Yes
42. Special Summon 1 "Diactorus" monster
43. Selected Artmage Diactorus (Extra Deck)
44. Activate Artmage Diactorus (M2): Change the battle position of 1 monster on the field
45. Selected Artmage Non-Finito (M5)
46. Activate Theorealize Past Lull (GY): Special Summon 1 Fusion, Synchro, or Xyz Monster from your GY
47. Selected Junora the Power Patron of Tuning (GY)
48. Link Summon S:P Little Knight (Extra Deck)
49. select Junora the Power Patron of Tuning (M3)
50. select Artmage Non-Finito (M5)
51. Yes
52. Selected Purification Power Patron (GY)

End board:  LP 8000 | Hand 3 | Deck 31 | Extra 9 | GY 6 | Banished 10   Monsters: M1: Nerva the Power Patron of Creation Lv10 3300/3300 ATK || M2: Artmage Diactorus Lv8 2800/2500 ATK || M3: S:P Little Knight L2←→ 1600  || EMZ-L: Medicurius the Power Patron of Illusions L3↙↓↘ 3000    Spell/Trap: S1: Artmage Impasto -Recapture- (Set)   GY: Pendulum Treasure, Purification Power Patron, Prohibited Power Patron Portal - Terminus, Nervedo the Shadebeast Power Patron, Junora the Power Patron of Tuning, Artmage Non-Finito   Banished: Artmage Vandalism -Assault- (face-down), Artmage Finmel (face-down), Black Luster Soldier - Soldier of Light and Darkness (face-down), Dark Magical Circle (face-down), Lacrima the

## Order 2: best 11.35 [margin 3.99: ss_panama 3.8, elfnote 0.11, despia 3.11, angelechy 7.3] (, worst 11.35) — from tries Activate Light and Darkness Ritual
Others: search 8.85 · tries Activate Theorealize Past Lull 8.85 · forced Activate Theorealize Past Lull 8.85 · forced Activate Theorealize Liberation 8.55 · tries Activate Theorealize Liberation 7.53 · tries Activate Mind Shuffle 7.28 · forced Synchro Summon Chaos Angel 7.28 · forced Activate Fiendsmith's Sequence 7.28 · tries Activate Light and Darkness Ritual 7.13 · forced Link Summon S:P Little Knight 7.13 · forced Activate Artmage Graflare 7.13 · opening lanes 7.13 · tries Activate Theorealize Liberation 7.13 · forced Activate Light and Darkness Ritual: Ritual Summon 7.13 · forced Activate Griffoh 7.13 · forced Special Summon (procedure) Dark Magician of Destruction 4.05 · forced Activate Mind Shuffle 4.05

1. Activate Pendulum Treasure (hand): Add to Extra Deck
2. Selected Vidolium the Unstable Power Patron of Unity (Deck)
3. Yes
4. Selected Prohibited Power Patron Portal - Terminus (Deck)
5. Activate Prohibited Power Patron Portal - Terminus (hand): Send 1 "Power Patron" monster from your Deck or Extra Deck to the GY, then you can add 1 DARK Fairy monster from your Deck to your hand
6. Selected Theorealize Medius (Deck)
7. Yes
8. Selected Medius the Pure (Deck)
9. Normal Summon Medius the Pure (hand)
10. Yes
11. Selected Junoldo the Shadespirit Power Patron (Deck)
12. Special Summon it
13. Activate Junoldo the Shadespirit Power Patron (M5): Special Summon 1 "Junora the Power Patron of Tuning" from your Extra Deck
14. Selected Junora the Power Patron of Tuning (Extra Deck)
15. Yes
16. Selected Theorealize Medius (GY)
17. Activate Theorealize Medius (hand): If a "Power Patron" card is on the field: You can Special Summon this card from your hand, then you can add 1 "Theorealize" Spell/Trap from your Deck to your hand
18. Yes
19. Selected Theorealize Liberation (Deck)
20. Activate Theorealize Liberation (hand): Add to your hand, or Special Summon, 1 monster from your Deck with 300 ATK/200 DEF
21. Selected Nervedo the Shadebeast Power Patron (Deck)
22. Special Summon it
23. Link Summon Purification Power Patron (Extra Deck)
24. select Theorealize Medius (M1)
25. select Junora the Power Patron of Tuning (EMZ-R)
26. Yes
27. Activate Purification Power Patron (EMZ-L): Link Summon including this card as material
28. Selected Medicurius the Power Patron of Illusions (Extra Deck)
29. select Medius the Pure (M4)
30. Finish selection
31. Selected Theorealize Past Lull (Deck)
32. Special Summon (procedure) Artmage Non-Finito (Extra Deck)
33. Selected Theorealize Past Lull (hand)
34. Selected Nervedo the Shadebeast Power Patron (M5)
35. Yes
36. Activate Artmage Non-Finito (M3): Set 1 "Artmage" Spell/Trap from your Deck
37. Selected Artmage Impasto -Recapture- (Deck)
38. Selected Artmage Finmel (Deck)
39. Activate Theorealize Past Lull (GY): Special Summon 1 Fusion, Synchro, or Xyz Monster from your GY
40. Selected Junora the Power Patron of Tuning (GY)
41. Activate Medius the Pure (GY): Shuffle 1 monster from your hand or face-up field into the Deck, and if you do, Special Summon this card
42. Selected Ash Blossom & Joyous Spring (hand)
43. Link Summon S:P Little Knight (Extra Deck)
44. select Junora the Power Patron of Tuning (M5)
45. select Medius the Pure (M1)
46. Yes
47. Selected Theorealize Medius (GY)

End board:  LP 8000 | Hand 3 | Deck 32 | Extra 13 | GY 4 | Banished 7   Monsters: M3: Artmage Non-Finito Lv7 2400/1500 ATK || M4: Artmage Finmel Lv7 2400/1500 ATK || M5: S:P Little Knight L2←→ 1600  || EMZ-R: Medicurius the Power Patron of Illusions L3↙↓↘ 3000    Spell/Trap: S1: Artmage Impasto -Recapture- (Set)   GY: Pendulum Treasure, Prohibited Power Patron Portal - Terminus, Purification Power Patron, Junora the Power Patron of Tuning   Banished: Mind Shuffle (face-down), Fiendsmith's Tract (face-down), Theorealize Medius (face-down), Theorealize Liberation, Theorealize Past Lull, Medius the Pure, Theorealize Medius   Hand: Ghost Ogre & Snow Rabbit, Droll & Lock Bird, Ash Blossom & Joyous Spring   

## Order 3: best 12.1 [margin 1.56: ss_panama 4.82, elfnote -0.82, despia -2.57, angelechy 8.1] (, worst 12.1) — from tries Activate Vidolium the Unstable Power Patron of Unity
Others: tries Activate Vidolium the Unstable Power Patron of Unity → new ending 12.1 · tries Activate Vidolium the Unstable Power Patron of Unity → new early order 12.1 · tries Activate Vidolium the Unstable Power Patron of Unity → new ending 12.1 · tries Activate Vidolium the Unstable Power Patron of Unity → new early order 12 · forced Activate Fiendsmith's Sequence 11.35 · forced Activate Griffoh 11 · tries Activate Vidolium the Unstable Power Patron of Unity → new ending 10.57 · tries Activate Medius the Pure 9.78 · tries Activate Nervedo the Shadebeast Power Patron 9.78 · tries Special Summon (procedure) Nervedo the Shadebeast Power Patron 8.98 · opening lanes 8.85 · search 7.28 · forced Special Summon (procedure) Dark Magician of Destruction 7.28 · forced Activate Theorealize Past Lull 7.13 · forced Link Summon S:P Little Knight 7.13 · tries Special Summon (procedure) Vidolium the Unstable Power Patron of Unity 7.13 · tries Activate Junoldo the Shadespirit Power Patron 7.13 · forced Activate Artmage Graflare 7.13 · forced Activate Mind Shuffle 5.55 · forced Activate Light and Darkness Ritual: Ritual Summon 4.05 · tries Activate Vidolium the Unstable Power Patron of Unity → new early order 3.55 · forced Synchro Summon Chaos Angel 3.4

1. Activate Pendulum Treasure (hand): Add to Extra Deck
2. Selected Vidolium the Unstable Power Patron of Unity (Deck)
3. Yes
4. Selected Prohibited Power Patron Portal - Terminus (Deck)
5. Set Spell/Trap Prohibited Power Patron Portal - Terminus
6. Activate Prohibited Power Patron Portal - Terminus (S1): Send 1 "Power Patron" monster from your Deck or Extra Deck to the GY, then you can add 1 DARK Fairy monster from your Deck to your hand
7. Selected Nervedo the Shadebeast Power Patron (Deck)
8. Yes
9. Selected Medius the Pure (Deck)
10. Normal Summon Medius the Pure (hand)
11. Yes
12. Selected Vidolium the Unstable Power Patron of Unity (Deck)
13. Add the card(s) to your hand
14. Activate Vidolium the Unstable Power Patron of Unity (hand): Activate it as a Pendulum Spell
15. Activate Vidolium the Unstable Power Patron of Unity (S1): Activate 1 of these effects
16. Special Summon 1 "Power Patron" monster
17. Selected Nervedo the Shadebeast Power Patron (GY)
18. Activate Nervedo the Shadebeast Power Patron (M1): Special Summon 1 "Nerva the Power Patron of Creation" from your Extra Deck
19. Selected Nerva the Power Patron of Creation (Extra Deck)
20. Yes
21. Selected Junoldo the Shadespirit Power Patron (Deck)
22. Activate Junoldo the Shadespirit Power Patron (M5): Special Summon 1 "Junora the Power Patron of Tuning" from your Extra Deck
23. Selected Junora the Power Patron of Tuning (Extra Deck)
24. Yes
25. Selected Nervedo the Shadebeast Power Patron (Extra Deck)
26. Link Summon Purification Power Patron (Extra Deck)
27. select Medius the Pure (M4)
28. select Junora the Power Patron of Tuning (EMZ-R)
29. Yes
30. Selected Theorealize Medius (Deck)
31. Activate Theorealize Medius (hand): If a "Power Patron" card is on the field: You can Special Summon this card from your hand, then you can add 1 "Theorealize" Spell/Trap from your Deck to your hand
32. Yes
33. Selected Theorealize Past Lull (Deck)
34. Special Summon (procedure) Artmage Non-Finito (Extra Deck)
35. Selected Theorealize Past Lull (hand)
36. Selected Nervedo the Shadebeast Power Patron (hand)
37. Yes
38. Selected Artmage Impasto -Recapture- (Deck)
39. Activate Medius the Pure (GY): Shuffle 1 monster from your hand or face-up field into the Deck, and if you do, Special Summon this card
40. Selected Ash Blossom & Joyous Spring (hand)
41. Activate Theorealize Past Lull (GY): Special Summon 1 Fusion, Synchro, or Xyz Monster from your GY
42. Selected Junora the Power Patron of Tuning (GY)
43. Activate Purification Power Patron (EMZ-L): Link Summon including this card as material
44. Selected Medicurius the Power Patron of Illusions (Extra Deck)
45. select Medius the Pure (M1)
46. Finish selection
47. Yes
48. Special Summon 1 "Diactorus" monster
49. Selected Artmage Diactorus (Extra Deck)
50. Activate Artmage Diactorus (M4): Change the battle position of 1 monster on the field
51. Selected Junora the Power Patron of Tuning (M2)
52. Link Summon S:P Little Knight (Extra Deck)
53. select Junora the Power Patron of Tuning (M2)
54. select Artmage Non-Finito (M5)
55. Yes
56. Selected Purification Power Patron (GY)

End board:  LP 8000 | Hand 3 | Deck 30 | Extra 11 | GY 5 | Banished 10   Monsters: M3: Nerva the Power Patron of Creation Lv10 3300/3300 ATK || M4: Artmage Diactorus Lv8 2800/2500 ATK || M5: S:P Little Knight L2←→ 1600  || EMZ-R: Medicurius the Power Patron of Illusions L3↙↓↘ 3000    Spell/Trap: S1: Artmage Impasto -Recapture- (Set)   GY: Pendulum Treasure, Prohibited Power Patron Portal - Terminus, Nervedo the Shadebeast Power Patron, Junora the Power Patron of Tuning, Artmage Non-Finito   Banished: Artmage Vandalism -Assault- (face-down), Fiendsmith Engraver (face-down), Fiendsmith Engraver (face-down), Black Chaos (face-down), Pendulum Treasure (face-down), Artmage Graflare (face-down), Theorealize 

## Order 4: best 12.15 [margin 4.46: ss_panama 6.39, elfnote 0.78, despia 2.51, angelechy 8.15] (, worst 12.15) — from tries Normal Summon Medius the Pure
Others: tries Normal Summon Medius the Pure → new ending 12.15 · tries Activate Vidolium the Unstable Power Patron of Unity 12.1 · tries Normal Summon Medius the Pure → new early order 12.1 · tries Normal Summon Medius the Pure → new ending 12.1 · forced Activate Theorealize Liberation 12.05 · tries Normal Summon Medius the Pure → new early order 12.05 · opening lanes 12 · tries Activate Prohibited Power Patron Portal - Terminus 11 · forced Special Summon (procedure) Dark Magician of Destruction 10.8 · tries Normal Summon Medius the Pure → new ending 9.13 · forced Link Summon S:P Little Knight 8.85 · forced Activate Fiendsmith's Sequence 8.85 · forced Activate Theorealize Past Lull 8.85 · search 7.13 · forced Activate Mind Shuffle 7.13 · tries Activate Junoldo the Shadespirit Power Patron 7.13 · tries Activate Ars Magna - "Citrinitas" 5.75 · forced Activate Light and Darkness Ritual: Ritual Summon 4.05 · forced Activate Artmage Graflare 4.05 · tries Activate Ars Magna - "Citrinitas" 4.05 · forced Activate Griffoh 4.05 · tries Normal Summon Medius the Pure → new early order 3.55 · forced Synchro Summon Chaos Angel 3.4

1. Set Spell/Trap Pendulum Treasure
2. Activate Pendulum Treasure (S1): Add to Extra Deck
3. Selected Vidolium the Unstable Power Patron of Unity (Deck)
4. Yes
5. Selected Prohibited Power Patron Portal - Terminus (Deck)
6. Set Spell/Trap Prohibited Power Patron Portal - Terminus
7. Activate Prohibited Power Patron Portal - Terminus (S1): Send 1 "Power Patron" monster from your Deck or Extra Deck to the GY, then you can add 1 DARK Fairy monster from your Deck to your hand
8. Selected Theorealize Medius (Deck)
9. Yes
10. Selected Medius the Pure (Deck)
11. Normal Summon Medius the Pure (hand)
12. Yes
13. Selected Junoldo the Shadespirit Power Patron (Deck)
14. Special Summon it
15. Activate Junoldo the Shadespirit Power Patron (M4): Special Summon 1 "Junora the Power Patron of Tuning" from your Extra Deck
16. Selected Junora the Power Patron of Tuning (Extra Deck)
17. Yes
18. Selected Theorealize Medius (GY)
19. Activate Theorealize Medius (hand): If a "Power Patron" card is on the field: You can Special Summon this card from your hand, then you can add 1 "Theorealize" Spell/Trap from your Deck to your hand
20. Yes
21. Selected Theorealize Liberation (Deck)
22. Activate Theorealize Liberation (hand): Add to your hand, or Special Summon, 1 monster from your Deck with 300 ATK/200 DEF
23. Selected Nervedo the Shadebeast Power Patron (Deck)
24. Special Summon it
25. Activate Theorealize Liberation (GY): Treat 1 monster you control as a Tuner this turn
26. Selected Theorealize Medius (M2)
27. Link Summon Purification Power Patron (Extra Deck)
28. select Medius the Pure (M1)
29. select Junora the Power Patron of Tuning (M4)
30. Yes
31. Selected Theorealize Past Lull (Deck)
32. Special Summon (procedure) Artmage Non-Finito (Extra Deck)
33. Selected Theorealize Past Lull (hand)
34. Selected Nervedo the Shadebeast Power Patron (M3)
35. Yes
36. Activate Artmage Non-Finito (M4): Set 1 "Artmage" Spell/Trap from your Deck
37. Activate Purification Power Patron (EMZ-L): Link Summon including this card as material
38. Selected Medicurius the Power Patron of Illusions (Extra Deck)
39. select Artmage Non-Finito (M4)
40. Finish selection
41. Selected Artmage Impasto -Recapture- (Deck)
42. Selected Artmage Graflare (Deck)
43. Activate Theorealize Past Lull (GY): Special Summon 1 Fusion, Synchro, or Xyz Monster from your GY
44. Selected Junora the Power Patron of Tuning (GY)
45. Activate Medius the Pure (GY): Shuffle 1 monster from your hand or face-up field into the Deck, and if you do, Special Summon this card
46. Selected Ash Blossom & Joyous Spring (hand)
47. Link Summon S:P Little Knight (Extra Deck)
48. select Medius the Pure (M4)
49. select Junora the Power Patron of Tuning (M1)
50. Yes
51. Special Summon 1 "Diactorus" monster
52. Selected Artmage Diactorus (Extra Deck)

End board:  LP 8000 | Hand 3 | Deck 32 | Extra 12 | GY 5 | Banished 7   Monsters: M1: S:P Little Knight L2←→ 1600  || M2: Artmage Diactorus Lv8 2800/2500 ATK || M3: Artmage Graflare Lv5 2100/1500 ATK || EMZ-L: Medicurius the Power Patron of Illusions L3↙↓↘ 3000    Spell/Trap: S1: Artmage Impasto -Recapture- (Set)   GY: Pendulum Treasure, Prohibited Power Patron Portal - Terminus, Artmage Non-Finito, Purification Power Patron, Junora the Power Patron of Tuning   Banished: Black Chaos (face-down), Artmage Finmel (face-down), Lacrima the Crimson Tears (face-down), Theorealize Liberation, Theorealize Past Lull, Medius the Pure, Theorealize Medius   Hand: Ghost Ogre & Snow Rabbit, Droll & Lock Bird, Ash Blo

## Order 5: best 12.05 [margin 1.1: ss_panama 0.4, elfnote 1.1, despia -5.56, angelechy 8] (, worst 12.05) — from forced Activate Fiendsmith's Sequence → new early order
Others: forced Activate Fiendsmith's Sequence → new early order → new ending 12.05 · forced Activate Fiendsmith's Sequence → new early order → new early order 12.05 · forced Activate Fiendsmith's Sequence 12 · forced Activate Theorealize Past Lull 10.79 · forced Activate Fiendsmith's Sequence → new early order 10.5 · tries Activate Ars Magna of Infinity and Finity 9.77 · forced Activate Theorealize Liberation 9.35 · tries Activate Plundered Power Patron Plane - Vidolia 8.7 · search 8.02 · forced Activate Artmage Graflare 7.28 · tries Activate Plundered Power Patron Plane - Vidolia 7.18 · forced Activate Mind Shuffle 7.13 · tries Normal Summon Theorealize Medius 7.13 · forced Activate Fiendsmith's Sequence → new ending 7.13 · forced Activate Fiendsmith's Sequence → new ending 6.4 · opening lanes 4.05 · tries Activate Ars Magna of Infinity and Finity 4.05 · tries Activate Mind Shuffle 4.05 · forced Special Summon (procedure) Dark Magician of Destruction 4.05 · forced Activate Griffoh 4.05 · forced Activate Light and Darkness Ritual: Ritual Summon 4.05 · forced Link Summon S:P Little Knight 3.95 · forced Synchro Summon Chaos Angel 3.4

1. Activate Pendulum Treasure (hand): Add to Extra Deck
2. Selected Vidolium the Unstable Power Patron of Unity (Deck)
3. Yes
4. Selected Prohibited Power Patron Portal - Terminus (Deck)
5. Set Spell/Trap Prohibited Power Patron Portal - Terminus
6. Activate Prohibited Power Patron Portal - Terminus (S1): Send 1 "Power Patron" monster from your Deck or Extra Deck to the GY, then you can add 1 DARK Fairy monster from your Deck to your hand
7. Selected Junora the Power Patron of Tuning (Extra Deck)
8. Yes
9. Selected Medius the Pure (Deck)
10. Normal Summon Medius the Pure (hand)
11. Yes
12. Selected Junoldo the Shadespirit Power Patron (Deck)
13. Special Summon it
14. Link Summon Purification Power Patron (Extra Deck)
15. select Medius the Pure (M3)
16. select Junoldo the Shadespirit Power Patron (M4)
17. Yes
18. Activate Purification Power Patron (EMZ-L): Add 1 "Theorealize" card from your Deck to your hand
19. Selected Theorealize Medius (Deck)
20. Selected Prohibited Power Patron Portal - Terminus (GY)
21. Activate Theorealize Medius (hand): If a "Power Patron" card is on the field: You can Special Summon this card from your hand, then you can add 1 "Theorealize" Spell/Trap from your Deck to your hand
22. Yes
23. Selected Theorealize Liberation (Deck)
24. Activate Medius the Pure (GY): Shuffle 1 monster from your hand or face-up field into the Deck, and if you do, Special Summon this card
25. Selected Ash Blossom & Joyous Spring (hand)
26. Activate Theorealize Liberation (hand): Add to your hand, or Special Summon, 1 monster from your Deck with 300 ATK/200 DEF
27. Activate Purification Power Patron (EMZ-L): Link Summon including this card as material
28. Selected Medicurius the Power Patron of Illusions (Extra Deck)
29. select Medius the Pure (M3)
30. Finish selection
31. Selected Nervedo the Shadebeast Power Patron (Deck)
32. Special Summon it
33. Yes
34. Special Summon 1 "Diactorus" monster
35. Selected Artmage Diactorus (Extra Deck)
36. Activate Theorealize Liberation (GY): Treat 1 monster you control as a Tuner this turn
37. Selected Medicurius the Power Patron of Illusions (EMZ-R)
38. Special Summon (procedure) Artmage Non-Finito (Extra Deck)
39. Selected Prohibited Power Patron Portal - Terminus (hand)
40. Selected Nervedo the Shadebeast Power Patron (M2)
41. Yes
42. Activate Artmage Non-Finito (M4): Set 1 "Artmage" Spell/Trap from your Deck
43. Selected Artmage Impasto -Recapture- (Deck)
44. Selected Artmage Graflare (Deck)

End board:  LP 8000 | Hand 3 | Deck 36 | Extra 13 | GY 4 | Banished 3   Monsters: M3: Artmage Diactorus Lv8 2800/2500 ATK || M4: Artmage Non-Finito Lv7 2400/1500 ATK || M5: Artmage Graflare Lv5 2100/1500 ATK || EMZ-R: Medicurius the Power Patron of Illusions L3↙↓↘ 3000    Spell/Trap: S1: Artmage Impasto -Recapture- (Set)   GY: Pendulum Treasure, Junora the Power Patron of Tuning, Purification Power Patron, Prohibited Power Patron Portal - Terminus   Banished: Medius the Pure, Theorealize Medius, Theorealize Liberation   Hand: Droll & Lock Bird, Ghost Ogre & Snow Rabbit, Ash Blossom & Joyous Spring   Extra Deck: 13 cards (view --ed to list)

## Order 6: best 13.95 [margin 5.26: ss_panama 3.93, elfnote 10.25, despia 3.74, angelechy 6.43] (, worst 13.95) — from tries Activate Vidolium the Unstable Power Patron of Unity → new ending
Others: tries Activate Vidolium the Unstable Power Patron of Unity 12.05 · tries Activate Vidolium the Unstable Power Patron of Unity → new early order 12.05 · forced Activate Griffoh 9.59 · tries Activate Prohibited Power Patron Portal - Terminus 9 · forced Activate Theorealize Past Lull 8.85 · tries Activate Theorealize Liberation 8.35 · tries Special Summon (procedure) Nerva the Power Patron of Creation 8.18 · tries Activate Vidolium the Unstable Power Patron of Unity → new ending 7.78 · opening lanes 7.28 · forced Special Summon (procedure) Dark Magician of Destruction 7.28 · search 7.13 · forced Activate Light and Darkness Ritual: Ritual Summon 7.13 · forced Link Summon S:P Little Knight 7.13 · forced Activate Mind Shuffle 7.13 · forced Activate Fiendsmith's Sequence 7.13 · tries Activate Ars Magna - "Citrinitas" 6 · tries Activate Ars Magna - "Citrinitas" 4.05 · forced Activate Artmage Graflare 4.05 · forced Activate Theorealize Liberation 4.05 · forced Synchro Summon Chaos Angel 3.8 · tries Activate Vidolium the Unstable Power Patron of Unity → new early order 3.55 · tries Activate Vidolium the Unstable Power Patron of Unity → new ending → new early order 3.55

1. Activate Pendulum Treasure (hand): Add to Extra Deck
2. Selected Vidolium the Unstable Power Patron of Unity (Deck)
3. Yes
4. Selected Prohibited Power Patron Portal - Terminus (Deck)
5. Set Spell/Trap Prohibited Power Patron Portal - Terminus
6. Activate Prohibited Power Patron Portal - Terminus (S1): Send 1 "Power Patron" monster from your Deck or Extra Deck to the GY, then you can add 1 DARK Fairy monster from your Deck to your hand
7. Selected Nervedo the Shadebeast Power Patron (Deck)
8. Yes
9. Selected Medius the Pure (Deck)
10. Normal Summon Medius the Pure (hand)
11. Yes
12. Selected Junoldo the Shadespirit Power Patron (Deck)
13. Special Summon it
14. Activate Junoldo the Shadespirit Power Patron (M5): Special Summon 1 "Junora the Power Patron of Tuning" from your Extra Deck
15. Selected Junora the Power Patron of Tuning (Extra Deck)
16. Yes
17. Selected Vidolium the Unstable Power Patron of Unity (Extra Deck)
18. Activate Vidolium the Unstable Power Patron of Unity (hand): Activate it as a Pendulum Spell
19. Link Summon Purification Power Patron (Extra Deck)
20. select Medius the Pure (M4)
21. select Junora the Power Patron of Tuning (EMZ-L)
22. Yes
23. Selected Theorealize Medius (Deck)
24. Activate Theorealize Medius (hand): If a "Power Patron" card is on the field: You can Special Summon this card from your hand, then you can add 1 "Theorealize" Spell/Trap from your Deck to your hand
25. Yes
26. Selected Theorealize Liberation (Deck)
27. Activate Medius the Pure (GY): Shuffle 1 monster from your hand or face-up field into the Deck, and if you do, Special Summon this card
28. Selected Ash Blossom & Joyous Spring (hand)
29. Activate Theorealize Liberation (hand): Add to your hand, or Special Summon, 1 monster from your Deck with 300 ATK/200 DEF
30. Activate Purification Power Patron (EMZ-L): Link Summon including this card as material
31. Selected Medicurius the Power Patron of Illusions (Extra Deck)
32. select Medius the Pure (M3)
33. Finish selection
34. Selected Griffoh (Deck)
35. Add the card(s) to your hand
36. Yes
37. Special Summon 1 "Diactorus" monster
38. Selected Artmage Diactorus (Extra Deck)
39. Activate Griffoh (hand): Activate 1 of these effects
40. Set 1 card that mentions "Light and Darkness Ritual"
41. Selected Mind Shuffle (Deck)
42. Activate Mind Shuffle (S2): activate this card
43. Yes
44. Selected Skull Archfiend of Chaos (Deck)
45. Selected Skull Archfiend of Chaos (hand)
46. Yes
47. Selected Light and Darkness Ritual (Deck)
48. Selected Magician of Dark Chaos - Black Chaos (Deck)
49. Activate Light and Darkness Ritual (GY): Add both this card and 1 card that mentions "Light and Darkness Ritual" from your GY to your hand
50. Selected Skull Archfiend of Chaos (GY)
51. Activate Vidolium the Unstable Power Patron of Unity (S1): Activate 1 of these effects
52. Special Summon 1 "Power Patron" monster
53. Selected Nervedo the Shadebeast Power Patron (GY)
54. Activate Light and Darkness Ritual (hand): Ritual Summon 1 "Magician of Dark Chaos - Black Chaos" or "Black Luster Soldier - Soldier of Light and Darkness" from your hand
55. Selected Magician of Dark Chaos - Black Chaos (hand)
56. Selected Griffoh (GY) value 8 or 1
57. Yes
58. Selected Light and Darkness Ritual (GY)
59. Special Summon (procedure) Artmage Non-Finito (Extra Deck)
60. Selected Light and Darkness Ritual (hand)
61. Selected Nervedo the Shadebeast Power Patron (M4)
62. Yes
63. Activate Artmage Non-Finito (M2): Set 1 "Artmage" Spell/Trap from your Deck
64. Selected Artmage Impasto -Recapture- (Deck)
65. Selected Artmage Graflare (Deck)

End board:  LP 8000 | Hand 4 | Deck 28 | Extra 13 | GY 6 | Banished 6   Monsters: M1: Magician of Dark Chaos - Black Chaos Lv8 2800/2600 ATK || M2: Artmage Non-Finito Lv7 2400/1500 ATK || M3: Artmage Diactorus Lv8 2800/2500 ATK || M4: Artmage Graflare Lv5 2100/1500 ATK || EMZ-L: Medicurius the Power Patron of Illusions L3↙↓↘ 3000    Spell/Trap: S1: Artmage Impasto -Recapture- (Set) || S2: Mind Shuffle   GY: Pendulum Treasure, Prohibited Power Patron Portal - Terminus, Junora the Power Patron of Tuning, Purification Power Patron, Theorealize Liberation, Light and Darkness Ritual   Banished: Pendulum Treasure (face-down), Fiendsmith Engraver (face-down), Theorealize Medius (face-down), Medius the Pure, T

## Order 7: best 12.05 [margin 5.65: ss_panama 5.99, elfnote 5.94, despia 1.5, angelechy 8.1] (, worst 12.05) — from forced Activate Fiendsmith's Sequence
Others: forced Synchro Summon Chaos Angel 12.05 · forced Activate Artmage Graflare 12.05 · forced Activate Light and Darkness Ritual: Ritual Summon 12.05 · forced Activate Fiendsmith's Sequence → new early order 12.05 · forced Activate Fiendsmith's Sequence → new early order 12 · tries Activate Ars Magna of Purification and Corruption 9.92 · tries Activate Theorealize Past Lull 9.26 · forced Activate Theorealize Past Lull 8.85 · tries Activate Artmage Diactorus 8.85 · forced Activate Mind Shuffle 8.85 · search 7.28 · forced Special Summon (procedure) Dark Magician of Destruction 7.13 · forced Link Summon S:P Little Knight 7.13 · forced Activate Theorealize Liberation 7.13 · forced Activate Fiendsmith's Sequence → new ending 7.13 · forced Activate Fiendsmith's Sequence → new ending 7.13 · tries Activate Ars Magna of Purification and Corruption 4.6 · forced Activate Griffoh 4.6 · tries Activate Artmage Vandalism -Assault- 4.45 · tries Activate Artmage Vandalism -Assault- 4.45 · opening lanes 4.05 · forced Activate Fiendsmith's Sequence → new ending 3.95 · forced Activate Fiendsmith's Sequence → new early order 3.95

1. Set Spell/Trap Pendulum Treasure
2. Activate Pendulum Treasure (S1): Add to Extra Deck
3. Selected Vidolium the Unstable Power Patron of Unity (Deck)
4. Yes
5. Selected Prohibited Power Patron Portal - Terminus (Deck)
6. Activate Prohibited Power Patron Portal - Terminus (hand): Send 1 "Power Patron" monster from your Deck or Extra Deck to the GY, then you can add 1 DARK Fairy monster from your Deck to your hand
7. Selected Vidolium the Unstable Power Patron of Unity (Deck)
8. Yes
9. Selected Medius the Pure (Deck)
10. Normal Summon Medius the Pure (hand)
11. Yes
12. Selected Junoldo the Shadespirit Power Patron (Deck)
13. Special Summon it
14. Link Summon Purification Power Patron (Extra Deck)
15. select Medius the Pure (M4)
16. select Junoldo the Shadespirit Power Patron (M1)
17. Yes
18. Activate Purification Power Patron (EMZ-R): Add 1 "Theorealize" card from your Deck to your hand
19. Selected Theorealize Medius (Deck)
20. Selected Prohibited Power Patron Portal - Terminus (GY)
21. Activate Theorealize Medius (hand): If a "Power Patron" card is on the field: You can Special Summon this card from your hand, then you can add 1 "Theorealize" Spell/Trap from your Deck to your hand
22. Yes
23. Selected Theorealize Liberation (Deck)
24. Activate Medius the Pure (GY): Shuffle 1 monster from your hand or face-up field into the Deck, and if you do, Special Summon this card
25. Selected Ash Blossom & Joyous Spring (hand)
26. Activate Theorealize Liberation (hand): Add to your hand, or Special Summon, 1 monster from your Deck with 300 ATK/200 DEF
27. Selected Nervedo the Shadebeast Power Patron (Deck)
28. Special Summon it
29. Special Summon (procedure) Artmage Non-Finito (Extra Deck)
30. Selected Prohibited Power Patron Portal - Terminus (hand)
31. Selected Nervedo the Shadebeast Power Patron (M3)
32. Yes
33. Activate Artmage Non-Finito (M2): Set 1 "Artmage" Spell/Trap from your Deck
34. Activate Purification Power Patron (EMZ-R): Link Summon including this card as material
35. Selected Medicurius the Power Patron of Illusions (Extra Deck)
36. select Medius the Pure (M1)
37. Finish selection
38. Selected Artmage Impasto -Recapture- (Deck)
39. Selected Artmage Graflare (Deck)
40. Yes
41. Special Summon 1 "Diactorus" monster
42. Selected Artmage Diactorus (Extra Deck)

End board:  LP 8000 | Hand 3 | Deck 35 | Extra 14 | GY 5 | Banished 2   Monsters: M1: Artmage Graflare Lv5 2100/1500 ATK || M2: Artmage Non-Finito Lv7 2400/1500 ATK || M3: Artmage Diactorus Lv8 2800/2500 ATK || EMZ-L: Medicurius the Power Patron of Illusions L3↙↓↘ 3000    Spell/Trap: S1: Artmage Impasto -Recapture- (Set)   GY: Pendulum Treasure, Vidolium the Unstable Power Patron of Unity, Theorealize Liberation, Prohibited Power Patron Portal - Terminus, Purification Power Patron   Banished: Medius the Pure, Theorealize Medius   Hand: Droll & Lock Bird, Ash Blossom & Joyous Spring, Ghost Ogre & Snow Rabbit   Extra Deck: 14 cards (view --ed to list)

## Order 8: best 13.9 [margin 7.25: ss_panama null, elfnote null, despia -0.4, angelechy 9.8] (, worst 13.9) — from tries Activate Vidolium the Unstable Power Patron of Unity → new ending → new early order
Others: tries Activate Vidolium the Unstable Power Patron of Unity → new ending 13.2 · tries Activate Vidolium the Unstable Power Patron of Unity 12.1 · tries Activate Vidolium the Unstable Power Patron of Unity → new ending 12.1 · forced Activate Theorealize Liberation 12.05 · forced Activate Fiendsmith's Sequence 12 · forced Activate Mind Shuffle 11.65 · tries Activate Vidolium the Unstable Power Patron of Unity → new ending 10.94 · opening lanes 10.9 · tries Activate Nervedo the Shadebeast Power Patron 10.5 · forced Activate Griffoh 10.5 · tries Special Summon (procedure) Nervedo the Shadebeast Power Patron 9.78 · forced Activate Light and Darkness Ritual: Ritual Summon 9.75 · forced Activate Theorealize Past Lull 9.66 · tries Special Summon (procedure) Artmage Non-Finito 7.13 · tries Activate Junoldo the Shadespirit Power Patron 7.13 · forced Special Summon (procedure) Dark Magician of Destruction 7.13 · forced Activate Artmage Graflare 7.13 · tries Special Summon (procedure) Vidolium the Unstable Power Patron of Unity 7.13 · forced Link Summon S:P Little Knight 7.13 · search 4.05 · tries Activate Vidolium the Unstable Power Patron of Unity → new early order 3.55 · tries Activate Vidolium the Unstable Power Patron of Unity → new early order 3.55 · forced Synchro Summon Chaos Angel 3.4

1. Activate Pendulum Treasure (hand): Add to Extra Deck
2. Selected Vidolium the Unstable Power Patron of Unity (Deck)
3. Yes
4. Selected Prohibited Power Patron Portal - Terminus (Deck)
5. Activate Prohibited Power Patron Portal - Terminus (hand): Send 1 "Power Patron" monster from your Deck or Extra Deck to the GY, then you can add 1 DARK Fairy monster from your Deck to your hand
6. Selected Nervedo the Shadebeast Power Patron (Deck)
7. Yes
8. Selected Medius the Pure (Deck)
9. Normal Summon Medius the Pure (hand)
10. Yes
11. Selected Junoldo the Shadespirit Power Patron (Deck)
12. Special Summon it
13. Link Summon Purification Power Patron (Extra Deck)
14. select Medius the Pure (M1)
15. select Junoldo the Shadespirit Power Patron (M3)
16. Yes
17. Activate Purification Power Patron (EMZ-L): Add 1 "Theorealize" card from your Deck to your hand
18. Selected Theorealize Medius (Deck)
19. Selected Vidolium the Unstable Power Patron of Unity (Extra Deck)
20. Activate Theorealize Medius (hand): If a "Power Patron" card is on the field: You can Special Summon this card from your hand, then you can add 1 "Theorealize" Spell/Trap from your Deck to your hand
21. Yes
22. Selected Theorealize Liberation (Deck)
23. Activate Medius the Pure (GY): Shuffle 1 monster from your hand or face-up field into the Deck, and if you do, Special Summon this card
24. Selected Ash Blossom & Joyous Spring (hand)
25. Activate Theorealize Liberation (hand): Add to your hand, or Special Summon, 1 monster from your Deck with 300 ATK/200 DEF
26. Activate Purification Power Patron (EMZ-L): Link Summon including this card as material
27. Selected Medicurius the Power Patron of Illusions (Extra Deck)
28. select Medius the Pure (M3)
29. Finish selection
30. Selected Griffoh (Deck)
31. Add the card(s) to your hand
32. Yes
33. Special Summon 1 "Diactorus" monster
34. Selected Artmage Diactorus (Extra Deck)
35. Activate Vidolium the Unstable Power Patron of Unity (hand): Activate it as a Pendulum Spell
36. Activate Griffoh (hand): Activate 1 of these effects
37. Set 1 card that mentions "Light and Darkness Ritual"
38. Selected Mind Shuffle (Deck)
39. Activate Theorealize Liberation (GY): Treat 1 monster you control as a Tuner this turn
40. Selected Artmage Diactorus (M1)
41. Activate Mind Shuffle (S2): activate this card
42. No
43. Activate Vidolium the Unstable Power Patron of Unity (S1): Activate 1 of these effects
44. Special Summon 1 "Power Patron" monster
45. Selected Nervedo the Shadebeast Power Patron (GY)
46. Activate Nervedo the Shadebeast Power Patron (M4): Special Summon 1 "Nerva the Power Patron of Creation" from your Extra Deck
47. Activate Mind Shuffle (S2): Add 1 appropriate monster to your hand
48. Selected Skull Archfiend of Chaos (Deck)
49. Selected Skull Archfiend of Chaos (hand)
50. Selected Nerva the Power Patron of Creation (Extra Deck)
51. Yes
52. Selected Light and Darkness Ritual (Deck)
53. Activate Nervedo the Shadebeast Power Patron (Extra Deck): Special Summon 1 "Power Patron" or "Artmage" monster from your Deck or face-up Extra Deck
54. Selected Artmage Finmel (Deck)
55. Selected Magician of Dark Chaos - Black Chaos (Deck)
56. Activate Light and Darkness Ritual (GY): Add both this card and 1 card that mentions "Light and Darkness Ritual" from your GY to your hand
57. Selected Skull Archfiend of Chaos (GY)
58. Set Spell/Trap Light and Darkness Ritual
59. Activate Light and Darkness Ritual (S1): Ritual Summon 1 "Magician of Dark Chaos - Black Chaos" or "Black Luster Soldier - Soldier of Light and Darkness" from your hand
60. Selected Magician of Dark Chaos - Black Chaos (hand)
61. Selected Griffoh (GY) value 8 or 1
62. Yes
63. Selected Pendulum Treasure (GY)
64. Special Summon (procedure) Artmage Non-Finito (Extra Deck)
65. Selected Pendulum Treasure (hand)
66. Selected Artmage Finmel (M5)
67. Yes
68. Selected Artmage Impasto -Recapture- (Deck)

End board:  LP 8000 | Hand 4 | Deck 28 | Extra 13 | GY 5 | Banished 7   Monsters: M1: Artmage Diactorus Lv8 2800/2500 ATK || M2: Artmage Non-Finito Lv7 2400/1500 ATK || M3: Magician of Dark Chaos - Black Chaos Lv8 2800/2600 ATK || M4: Nerva the Power Patron of Creation Lv10 3300/3300 ATK || EMZ-L: Medicurius the Power Patron of Illusions L3↙↓↘ 3000    Spell/Trap: S1: Artmage Impasto -Recapture- (Set) || S2: Mind Shuffle   GY: Prohibited Power Patron Portal - Terminus, Purification Power Patron, Light and Darkness Ritual, Pendulum Treasure, Artmage Finmel   Banished: Medius the Pure, Theorealize Medius, Theorealize Liberation, Fiendsmith Engraver (face-down), Apprentice Illusion Magician (face-down), Ar

