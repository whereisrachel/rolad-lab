# Evolved lines — Medius the Pure, Ash Blossom & Joyous Spring, Infinite Impermanence, Droll & Lock Bird, Ghost Ogre & Snow Rabbit (findlist-1100)
2026-11-26T01:15:44.143Z

8 deck orders (different face-down banishes / draws), 3 opponent hands x o_ss_panama + o_elfnote + o_despia + o_angelechy per line, 5 min searches, 6 mutation rounds.
Fitness = end-board interruptions (the lab scorer, src/disrupt.mjs: wipe 2, negate 1-1.5, banish/protection less; hand traps kept count 1 each). The winner of each order is also played into the opponent decks: margin after their turn shown beside it.

**Margin after their turn (winners): average 4.35** (worst -3.2)

**Best line per deck order: average 12.43** (worst order 11.3). Winner came from: opening lanes 1, tries Activate Junoldo the Shadespirit Power Patron 1, tries Activate Ars Magna - "Citrinitas" 1, tries Special Summon (procedure) Nerva the Power Patron of Creation 1, forced Activate Theorealize Past Lull → new ending 1, forced Activate Theorealize Liberation 1, tries Activate Ars Magna of Purification and Corruption → new ending → new ending → new early order 1, forced Activate Mind Shuffle 1

## Weak points found automatically
Cards whose face-down banish (by your own costs) hurt the best line most (average best line without vs with that card banished):

| card | orders where it was banished | drop |
|---|---|---|
| Ghost Ogre & Snow Rabbit | 2/8 | 0.73 |
| Artmage Impasto -Recapture- | 2/8 | 0.57 |
| Junoldo the Shadespirit Power Patron | 2/8 | 0.57 |
| Artmage Finmel | 2/8 | 0.53 |
| Lacrima the Crimson Tears | 3/8 | 0.47 |
| Prohibited Power Patron Portal - Terminus | 3/8 | 0.33 |
| Ars Magna - "Citrinitas" | 5/8 | 0.31 |
| Theorealize Past Lull | 4/8 | 0.3 |
| Light and Darkness Ritual | 4/8 | 0.27 |
| Vidolium the Unstable Power Patron of Unity | 5/8 | 0.23 |

List changes proposed for the list test (data/proposals-findlist-1100.json):
- +1 Artmage Impasto -Recapture-, −1 Plundered Power Patron Plane - Vidolia — Artmage Impasto -Recapture-: best line 0.57 worse when a cost banished it (2 of 8 orders) — Medius the Pure
- +1 Junoldo the Shadespirit Power Patron, −1 Artmage Vandalism -Assault- — Junoldo the Shadespirit Power Patron: best line 0.57 worse when a cost banished it (2 of 8 orders) — Medius the Pure
- +1 Artmage Finmel, −1 Small World — Artmage Finmel: best line 0.53 worse when a cost banished it (2 of 8 orders) — Medius the Pure
- +1 Artmage Impasto -Recapture- — Artmage Impasto -Recapture-: best line 0.57 worse when a cost banished it (2 of 8 orders) — Medius the Pure (add only: deck grows, up to 60)
- +1 Junoldo the Shadespirit Power Patron — Junoldo the Shadespirit Power Patron: best line 0.57 worse when a cost banished it (2 of 8 orders) — Medius the Pure (add only: deck grows, up to 60)
- +1 Artmage Finmel — Artmage Finmel: best line 0.53 worse when a cost banished it (2 of 8 orders) — Medius the Pure (add only: deck grows, up to 60)

Effects the search had not used, tried on purpose (best result so far):
- Activate Ars Magna - "Citrinitas": 12.75
- Special Summon (procedure) Nerva the Power Patron of Creation: 12.6
- Activate Junoldo the Shadespirit Power Patron: 12.45
- Activate Medius the Pure: 12.3
- Activate Junoldo the Shadespirit Power Patron: 12.3
- Special Summon (procedure) Artmage Non-Finito: 12.25
- Activate Mind Shuffle: 12.2
- Activate Artmage Vandalism -Assault-: 11.8

## Order 1: best 12.45 [margin 3.95: ss_panama 0.98, elfnote null, despia 0, angelechy 7.25] (, worst 12.45) — from opening lanes
Others: tries Special Summon (procedure) Artmage Non-Finito 12.25 · tries Activate Mind Shuffle 12.2 · forced Activate Theorealize Past Lull 11.75 · tries Activate Junoldo the Shadespirit Power Patron 11.75 · forced Activate Light and Darkness Ritual: Ritual Summon 11.75 · tries Activate Mind Shuffle 11.5 · forced Activate Griffoh 11.5 · search 11.05 · forced Activate Artmage Graflare 10.1 · forced Link Summon S:P Little Knight 8.6 · tries Activate Fiendsmith's Tract 7.75 · forced Synchro Summon Chaos Angel 7.75 · forced Activate Fiendsmith's Sequence 7.75 · forced Special Summon (procedure) Dark Magician of Destruction 7.75 · tries Activate Prohibited Power Patron Portal - Terminus 5.65

1. Normal Summon Medius the Pure (hand)
2. Yes
3. Selected Nervedo the Shadebeast Power Patron (Deck)
4. Special Summon it
5. Activate Nervedo the Shadebeast Power Patron (M2): Special Summon 1 "Nerva the Power Patron of Creation" from your Extra Deck
6. Selected Nerva the Power Patron of Creation (Extra Deck)
7. Yes
8. Selected Junoldo the Shadespirit Power Patron (Deck)
9. Activate Junoldo the Shadespirit Power Patron (M4): Special Summon 1 "Junora the Power Patron of Tuning" from your Extra Deck
10. Selected Junora the Power Patron of Tuning (Extra Deck)
11. Yes
12. Selected Nervedo the Shadebeast Power Patron (Extra Deck)
13. Link Summon Purification Power Patron (Extra Deck)
14. select Medius the Pure (M1)
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
27. Selected Artmage Non-Finito (M5)
28. Activate Purification Power Patron (EMZ-R): Link Summon including this card as material
29. Selected Medicurius the Power Patron of Illusions (Extra Deck)
30. select Medius the Pure (M1)
31. Finish selection
32. Yes
33. Special Summon 1 "Diactorus" monster
34. Selected Artmage Diactorus (Extra Deck)
35. Activate Theorealize Past Lull (GY): Special Summon 1 Fusion, Synchro, or Xyz Monster from your GY
36. Selected Junora the Power Patron of Tuning (GY)

End board:  LP 8000 | Hand 3 | Deck 33 | Extra 11 | GY 2 | Banished 9   Monsters: M1: Artmage Diactorus Lv8 2800/2500 ATK || M2: Junora the Power Patron of Tuning Lv10 3100/3800 ATK || M3: Nerva the Power Patron of Creation Lv10 3300/3300 DEF || EMZ-L: Medicurius the Power Patron of Illusions L3↙↓↘ 3000    Spell/Trap: S1: Infinite Impermanence (Set) || S2: Artmage Impasto -Recapture- (Set)   GY: Nervedo the Shadebeast Power Patron, Purification Power Patron   Banished: Medius the Pure (face-down), Ars Magna - "Citrinitas" (face-down), Ars Magna of Infinity and Finity (face-down), Fiendsmith Engraver (face-down), Artmage Graflare (face-down), Griffoh (face-down), Medius the Pure, Theorealize Medius, The

## Order 2: best 12.45 [margin 4.39: ss_panama 4.17, elfnote 3.77, despia -0.78, angelechy 8.4] (, worst 12.45) — from tries Activate Junoldo the Shadespirit Power Patron
Others: tries Activate Junoldo the Shadespirit Power Patron → new ending 12.45 · tries Activate Junoldo the Shadespirit Power Patron → new ending 12.45 · tries Activate Junoldo the Shadespirit Power Patron → new ending 12.45 · tries Activate Junoldo the Shadespirit Power Patron 12.3 · tries Activate Medius the Pure 12.3 · tries Activate Artmage Vandalism -Assault- 11.8 · forced Activate Light and Darkness Ritual: Ritual Summon 11.75 · forced Special Summon (procedure) Dark Magician of Destruction 11.75 · forced Activate Theorealize Past Lull 11.75 · forced Activate Griffoh 11.75 · tries Activate Junoldo the Shadespirit Power Patron → new early order 11.75 · tries Activate Vidolium the Unstable Power Patron of Unity 11.3 · forced Activate Theorealize Liberation 11.3 · forced Activate Mind Shuffle 11.05 · tries Special Summon (procedure) Artmage Non-Finito 10.75 · forced Synchro Summon Chaos Angel 10.35 · forced Link Summon S:P Little Knight 9.85 · opening lanes 8.6 · tries Activate Junoldo the Shadespirit Power Patron → new early order 8.6 · forced Activate Fiendsmith's Sequence 8 · search 7.75 · forced Activate Artmage Graflare 7.75 · tries Activate Junoldo the Shadespirit Power Patron → new early order 6.75

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
13. Set Spell/Trap Infinite Impermanence
14. Link Summon Purification Power Patron (Extra Deck)
15. select Medius the Pure (M1)
16. select Junora the Power Patron of Tuning (EMZ-R)
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
27. Activate Medius the Pure (GY): Shuffle 1 monster from your hand or face-up field into the Deck, and if you do, Special Summon this card
28. Selected Artmage Non-Finito (M4)
29. Activate Theorealize Past Lull (GY): Special Summon 1 Fusion, Synchro, or Xyz Monster from your GY
30. Selected Junora the Power Patron of Tuning (GY)
31. Activate Purification Power Patron (EMZ-R): Link Summon including this card as material
32. Selected Medicurius the Power Patron of Illusions (Extra Deck)
33. select Medius the Pure (M2)
34. Finish selection
35. Yes
36. Special Summon 1 "Diactorus" monster
37. Selected Artmage Diactorus (Extra Deck)

End board:  LP 8000 | Hand 3 | Deck 33 | Extra 11 | GY 2 | Banished 9   Monsters: M3: Nerva the Power Patron of Creation Lv10 3300/3300 ATK || M4: Junora the Power Patron of Tuning Lv10 3100/3800 ATK || M5: Artmage Diactorus Lv8 2800/2500 ATK || EMZ-R: Medicurius the Power Patron of Illusions L3↙↓↘ 3000    Spell/Trap: S1: Infinite Impermanence (Set) || S2: Artmage Impasto -Recapture- (Set)   GY: Nervedo the Shadebeast Power Patron, Purification Power Patron   Banished: Medius the Pure (face-down), Griffoh (face-down), Nervedo the Shadebeast Power Patron (face-down), Mind Shuffle (face-down), Artmage Vandalism -Assault- (face-down), Ars Magna - "Citrinitas" (face-down), Theorealize Past Lull, Medius the

## Order 3: best 12.75 [margin 4.76: ss_panama 7.77, elfnote 1.44, despia 1.87, angelechy 6.87] (, worst 12.75) — from tries Activate Ars Magna - "Citrinitas"
Others: tries Activate Ars Magna - "Citrinitas" → new ending 12.75 · tries Activate Ars Magna - "Citrinitas" → new ending 12.75 · forced Activate Griffoh 12.3 · forced Activate Fiendsmith's Sequence 12.3 · forced Activate Theorealize Past Lull 12.25 · tries Activate Ars Magna - "Citrinitas" → new early order 12.2 · forced Activate Light and Darkness Ritual: Ritual Summon 11.75 · tries Activate Junoldo the Shadespirit Power Patron 11.75 · forced Activate Mind Shuffle 11.15 · tries Activate Ars Magna - "Citrinitas" → new early order 10.75 · tries Activate Ars Magna - "Citrinitas" → new ending 10.64 · forced Activate Theorealize Liberation 10.55 · forced Link Summon S:P Little Knight 9.85 · tries Special Summon (procedure) Artmage Non-Finito 8.6 · tries Activate Ars Magna - "Citrinitas" → new early order 8.55 · tries Activate Fiendsmith's Tract 8 · search 7.75 · tries Activate Fiendsmith Engraver 7.75 · opening lanes 7.75 · forced Activate Artmage Graflare 7.75 · forced Synchro Summon Chaos Angel 7.75 · forced Special Summon (procedure) Dark Magician of Destruction 7.75 · tries Activate Prohibited Power Patron Portal - Terminus 5.65

1. Set Spell/Trap Infinite Impermanence
2. Normal Summon Medius the Pure (hand)
3. Yes
4. Selected Nervedo the Shadebeast Power Patron (Deck)
5. Special Summon it
6. Activate Nervedo the Shadebeast Power Patron (M4): Special Summon 1 "Nerva the Power Patron of Creation" from your Extra Deck
7. Selected Nerva the Power Patron of Creation (Extra Deck)
8. Yes
9. Selected Junoldo the Shadespirit Power Patron (Deck)
10. Activate Junoldo the Shadespirit Power Patron (M1): Special Summon 1 "Junora the Power Patron of Tuning" from your Extra Deck
11. Selected Junora the Power Patron of Tuning (Extra Deck)
12. Yes
13. Selected Nervedo the Shadebeast Power Patron (Extra Deck)
14. Link Summon Purification Power Patron (Extra Deck)
15. select Medius the Pure (M3)
16. select Junora the Power Patron of Tuning (M5)
17. Yes
18. Selected Theorealize Medius (Deck)
19. Activate Theorealize Medius (hand): If a "Power Patron" card is on the field: You can Special Summon this card from your hand, then you can add 1 "Theorealize" Spell/Trap from your Deck to your hand
20. Yes
21. Selected Theorealize Past Lull (Deck)
22. Special Summon (procedure) Artmage Non-Finito (Extra Deck)
23. Selected Theorealize Past Lull (hand)
24. Selected Nervedo the Shadebeast Power Patron (hand)
25. Yes
26. Selected Ars Magna - "Citrinitas" (Deck)
27. Activate Ars Magna - "Citrinitas" (S2): activate this card
28. Activate Ars Magna - "Citrinitas" (S2): Add 1 "Medius" or "Ars Magna" monster from your Deck to your hand
29. Selected Ars Magna of Infinity and Finity (Deck)
30. Activate Ars Magna of Infinity and Finity (hand): You can banish this card from your hand; add 1 non-Warrior "Ars Magna" monster from your Deck to your hand
31. Selected Ars Magna of Purification and Corruption (Deck)
32. No
33. Activate Theorealize Past Lull (GY): Special Summon 1 Fusion, Synchro, or Xyz Monster from your GY
34. Selected Junora the Power Patron of Tuning (GY)
35. Activate Ars Magna of Purification and Corruption (hand): You can banish this card from your hand; add 1 "Ars Magna" Spell/Trap from your Deck to your hand
36. Activate Purification Power Patron (EMZ-L): Link Summon including this card as material
37. Selected Medicurius the Power Patron of Illusions (Extra Deck)
38. select Junora the Power Patron of Tuning (M2)
39. Finish selection
40. Selected Ars Magna - "Citrinitas" (Deck)
41. Yes
42. Special Summon 1 "Diactorus" monster
43. Activate Ars Magna of Purification and Corruption (banishment): Special Summon this card
44. Selected Artmage Diactorus (Extra Deck)
45. Yes

End board:  LP 8000 | Hand 4 | Deck 30 | Extra 10 | GY 4 | Banished 8   Monsters: M1: Ars Magna of Purification and Corruption Lv8 1000/2100 ATK || M2: Artmage Diactorus Lv8 2800/2500 ATK || M3: Ars Magna of Infinity and Finity Lv8 1000/2400 ATK || M4: Nerva the Power Patron of Creation Lv10 3300/3300 ATK || M5: Artmage Non-Finito Lv7 2400/1500 ATK || EMZ-L: Medicurius the Power Patron of Illusions L3↙↓↘ 9000    Spell/Trap: S1: Infinite Impermanence (Set) || S2: Ars Magna - "Citrinitas"   GY: Medius the Pure, Nervedo the Shadebeast Power Patron, Junora the Power Patron of Tuning, Purification Power Patron   Banished: Artmage Vandalism -Assault- (face-down), Mind Shuffle (face-down), Pendulum Treasure (

## Order 4: best 12.6 [margin 4.75: ss_panama 5.58, elfnote 2.1, despia 4, angelechy 7.3] (, worst 12.6) — from tries Special Summon (procedure) Nerva the Power Patron of Creation
Others: forced Activate Artmage Graflare 11.75 · tries Activate Purification Power Patron 11.3 · tries Activate Theorealize Medius 11.05 · tries Activate Medius the Pure 11.05 · forced Activate Theorealize Past Lull 10.75 · tries Activate Vidolium the Unstable Power Patron of Unity 9.9 · forced Link Summon S:P Little Knight 9.85 · forced Activate Theorealize Liberation 9.75 · forced Synchro Summon Chaos Angel 9.05 · tries Activate Griffoh 8.56 · forced Activate Fiendsmith's Sequence 8.45 · search 7.75 · forced Activate Light and Darkness Ritual: Ritual Summon 7.75 · opening lanes 7.75 · forced Special Summon (procedure) Dark Magician of Destruction 7.75 · forced Activate Griffoh 7.54 · forced Activate Mind Shuffle 7.54

1. Normal Summon Medius the Pure (hand)
2. Yes
3. Selected Nervedo the Shadebeast Power Patron (Deck)
4. Special Summon it
5. Activate Nervedo the Shadebeast Power Patron (M4): Special Summon 1 "Nerva the Power Patron of Creation" from your Extra Deck
6. Selected Nerva the Power Patron of Creation (Extra Deck)
7. Yes
8. Selected Junoldo the Shadespirit Power Patron (Deck)
9. Activate Junoldo the Shadespirit Power Patron (M2): Special Summon 1 "Junora the Power Patron of Tuning" from your Extra Deck
10. Selected Junora the Power Patron of Tuning (Extra Deck)
11. Yes
12. Selected Nervedo the Shadebeast Power Patron (Extra Deck)
13. Link Summon Purification Power Patron (Extra Deck)
14. select Medius the Pure (M1)
15. select Junora the Power Patron of Tuning (EMZ-R)
16. Yes
17. Selected Theorealize Medius (Deck)
18. Activate Medius the Pure (GY): Shuffle 1 monster from your hand or face-up field into the Deck, and if you do, Special Summon this card
19. Selected Droll & Lock Bird (hand)
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
33. Add 1 "Ars Magna" card from your Deck to your hand
34. Selected Ars Magna of Infinity and Finity (Deck)
35. Activate Theorealize Past Lull (GY): Special Summon 1 Fusion, Synchro, or Xyz Monster from your GY
36. Selected Junora the Power Patron of Tuning (GY)
37. Activate Ars Magna of Infinity and Finity (hand): You can banish this card from your hand; add 1 non-Warrior "Ars Magna" monster from your Deck to your hand
38. Selected Ars Magna of Purification and Corruption (Deck)
39. Activate Ars Magna of Purification and Corruption (hand): You can banish this card from your hand; add 1 "Ars Magna" Spell/Trap from your Deck to your hand
40. Selected Ars Magna - "Citrinitas" (Deck)
41. Set Spell/Trap Ars Magna - "Citrinitas"
42. Activate Ars Magna - "Citrinitas" (S3): activate this card
43. Activate Ars Magna - "Citrinitas" (S3): Add 1 "Medius" or "Ars Magna" monster from your Deck to your hand
44. Selected Theorealize Medius (Deck)
45. Link Summon S:P Little Knight (Extra Deck)
46. select Theorealize Medius (M4)
47. select Junora the Power Patron of Tuning (M1)
48. Activate Ars Magna of Infinity and Finity (banishment): Special Summon this card
49. Activate Ars Magna of Purification and Corruption (banishment): Special Summon this card
50. Activate S:P Little Knight (M1): Banish 1 card on the field or GY
51. Selected Purification Power Patron (GY)

End board:  LP 8000 | Hand 3 | Deck 30 | Extra 10 | GY 3 | Banished 9   Monsters: M1: S:P Little Knight L2←→ 1600  || M2: Ars Magna of Infinity and Finity Lv8 1000/2400 ATK || M3: Nerva the Power Patron of Creation Lv10 3300/3300 ATK || M4: Ars Magna of Purification and Corruption Lv8 1000/2100 ATK || M5: Artmage Non-Finito Lv7 2400/1500 ATK || EMZ-L: Medicurius the Power Patron of Illusions L3↙↓↘ 9000    Spell/Trap: S1: Infinite Impermanence (Set) || S2: Artmage Impasto -Recapture- (Set) || S3: Ars Magna - "Citrinitas"   GY: Nervedo the Shadebeast Power Patron, Junora the Power Patron of Tuning, Theorealize Medius   Banished: Black Luster Soldier - Soldier of Light and Darkness (face-down), Nervedo th

## Order 5: best 12.5 [margin 2.2: ss_panama 3.6, elfnote null, despia -1.58, angelechy 7.17] (, worst 12.5) — from forced Activate Theorealize Past Lull → new ending
Others: forced Activate Theorealize Past Lull → new ending → new ending 12.5 · forced Activate Theorealize Past Lull → new ending → new ending 12.5 · forced Activate Theorealize Past Lull → new ending → new early order 12.2 · forced Activate Theorealize Past Lull 11.75 · forced Activate Theorealize Past Lull → new ending → new early order 11.75 · forced Activate Griffoh 11.65 · forced Special Summon (procedure) Dark Magician of Destruction 11.3 · tries Activate Vidolium the Unstable Power Patron of Unity 11.3 · search 11.15 · forced Activate Theorealize Liberation 11.05 · forced Synchro Summon Chaos Angel 11.05 · forced Activate Artmage Graflare 11.05 · tries Activate Artmage Vandalism -Assault- 10.95 · forced Link Summon S:P Little Knight 10.75 · forced Activate Light and Darkness Ritual: Ritual Summon 10.7 · forced Activate Theorealize Past Lull → new ending → new early order 10.6 · tries Activate Ars Magna - "Citrinitas" 10.4 · tries Activate Ars Magna - "Citrinitas" 9.77 · forced Activate Mind Shuffle 8.6 · tries Activate Vidolium the Unstable Power Patron of Unity 8 · forced Activate Fiendsmith's Sequence 7.75 · tries Activate Artmage Finmel 7.75 · opening lanes 7.75

1. Normal Summon Medius the Pure (hand)
2. Yes
3. Selected Nervedo the Shadebeast Power Patron (Deck)
4. Special Summon it
5. Activate Nervedo the Shadebeast Power Patron (M4): Special Summon 1 "Nerva the Power Patron of Creation" from your Extra Deck
6. Selected Nerva the Power Patron of Creation (Extra Deck)
7. Yes
8. Selected Junoldo the Shadespirit Power Patron (Deck)
9. Activate Junoldo the Shadespirit Power Patron (M3): Special Summon 1 "Junora the Power Patron of Tuning" from your Extra Deck
10. Selected Junora the Power Patron of Tuning (Extra Deck)
11. Yes
12. Selected Nervedo the Shadebeast Power Patron (Extra Deck)
13. Link Summon Purification Power Patron (Extra Deck)
14. select Junora the Power Patron of Tuning (M4)
15. select Medius the Pure (M1)
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
28. Activate Purification Power Patron (EMZ-L): Link Summon including this card as material
29. Selected Medicurius the Power Patron of Illusions (Extra Deck)
30. select Medius the Pure (M1)
31. Finish selection
32. Yes
33. Special Summon 1 "Diactorus" monster
34. Selected Artmage Diactorus (Extra Deck)
35. Activate Artmage Diactorus (M3): Change the battle position of 1 monster on the field
36. Selected Nerva the Power Patron of Creation (M2)
37. Activate Theorealize Past Lull (GY): Special Summon 1 Fusion, Synchro, or Xyz Monster from your GY
38. Selected Junora the Power Patron of Tuning (GY)

End board:  LP 8000 | Hand 4 | Deck 33 | Extra 11 | GY 2 | Banished 9   Monsters: M1: Junora the Power Patron of Tuning Lv10 3100/3800 ATK || M2: Nerva the Power Patron of Creation Lv10 3300/3300 DEF || M3: Artmage Diactorus Lv8 2800/2500 ATK || EMZ-L: Medicurius the Power Patron of Illusions L3↙↓↘ 3000    Spell/Trap: S1: Artmage Impasto -Recapture- (Set)   GY: Nervedo the Shadebeast Power Patron, Purification Power Patron   Banished: Theorealize Medius (face-down), Pendulum Treasure (face-down), Artmage Vandalism -Assault- (face-down), Lacrima the Crimson Tears (face-down), Ars Magna of Purification and Corruption (face-down), Nervedo the Shadebeast Power Patron (face-down), Medius the Pure, Theoreali

## Order 6: best 11.3 [margin 7.5: ss_panama null, elfnote null, despia 6.04, angelechy 8.23] (, worst 11.3) — from forced Activate Theorealize Liberation
Others: forced Activate Theorealize Liberation → new ending 11.3 · forced Activate Theorealize Liberation → new early order 11.3 · forced Activate Theorealize Liberation → new ending 11.3 · forced Activate Theorealize Liberation → new ending 11.2 · tries Activate Nervedo the Shadebeast Power Patron 11.05 · opening lanes 11.05 · tries Activate Junoldo the Shadespirit Power Patron 11.05 · forced Activate Artmage Graflare 11.05 · forced Synchro Summon Chaos Angel 11.05 · forced Activate Mind Shuffle 11.05 · search 11 · forced Link Summon S:P Little Knight 10.55 · forced Activate Light and Darkness Ritual: Ritual Summon 10.25 · forced Activate Theorealize Past Lull 9.71 · forced Activate Griffoh 9.35 · tries Activate Ars Magna of Infinity and Finity 8.96 · forced Special Summon (procedure) Dark Magician of Destruction 8.18 · tries Activate Vidolium the Unstable Power Patron of Unity 8 · forced Activate Fiendsmith's Sequence 7.75 · tries Activate Plundered Power Patron Plane - Vidolia 6.75 · tries Activate Plundered Power Patron Plane - Vidolia 6.75

1. Normal Summon Medius the Pure (hand)
2. Yes
3. Selected Nervedo the Shadebeast Power Patron (Deck)
4. Add the card(s) to your hand
5. Special Summon (procedure) Artmage Non-Finito (Extra Deck)
6. Selected Infinite Impermanence (hand)
7. Selected Nervedo the Shadebeast Power Patron (hand)
8. Yes
9. Selected Artmage Impasto -Recapture- (Deck)
10. Link Summon Purification Power Patron (Extra Deck)
11. select Medius the Pure (M1)
12. select Artmage Non-Finito (M2)
13. Yes
14. Selected Theorealize Medius (Deck)
15. Activate Theorealize Medius (hand): If a "Power Patron" card is on the field: You can Special Summon this card from your hand, then you can add 1 "Theorealize" Spell/Trap from your Deck to your hand
16. Yes
17. Selected Theorealize Liberation (Deck)
18. Activate Medius the Pure (GY): Shuffle 1 monster from your hand or face-up field into the Deck, and if you do, Special Summon this card
19. Selected Droll & Lock Bird (hand)
20. Activate Theorealize Liberation (hand): Add to your hand, or Special Summon, 1 monster from your Deck with 300 ATK/200 DEF
21. Activate Purification Power Patron (EMZ-L): Link Summon including this card as material
22. Selected Medicurius the Power Patron of Illusions (Extra Deck)
23. select Medius the Pure (M1)
24. Finish selection
25. Selected Nervedo the Shadebeast Power Patron (Deck)
26. Special Summon it
27. Yes
28. Special Summon 1 "Diactorus" monster
29. Selected Artmage Diactorus (Extra Deck)
30. Activate Artmage Diactorus (M2): Change the battle position of 1 monster on the field
31. Selected Artmage Diactorus (M2)
32. Activate Nervedo the Shadebeast Power Patron (M1): Special Summon 1 "Nerva the Power Patron of Creation" from your Extra Deck
33. Selected Nerva the Power Patron of Creation (Extra Deck)
34. Yes
35. Selected Artmage Graflare (Deck)

End board:  LP 8000 | Hand 2 | Deck 36 | Extra 11 | GY 5 | Banished 5   Monsters: M1: Artmage Graflare Lv5 2100/1500 ATK || M2: Artmage Diactorus Lv8 2800/2500 DEF || M3: Nerva the Power Patron of Creation Lv10 3300/3300 ATK || EMZ-L: Medicurius the Power Patron of Illusions L3↙↓↘ 3000    Spell/Trap: S1: Artmage Impasto -Recapture- (Set)   GY: Infinite Impermanence, Nervedo the Shadebeast Power Patron, Artmage Non-Finito, Purification Power Patron, Theorealize Liberation   Banished: Medius the Pure, Theorealize Medius, Artmage Vandalism -Assault- (face-down), Pendulum Treasure (face-down), Plundered Power Patron Plane - Vidolia (face-down)   Hand: Ghost Ogre & Snow Rabbit, Ash Blossom & Joyous Spring  

## Order 7: best 12.65 [margin 2.52: ss_panama 2.18, elfnote 2.44, despia 1.23, angelechy 7.6] (, worst 12.65) — from tries Activate Ars Magna of Purification and Corruption → new ending → new ending → new early order
Others: tries Activate Ars Magna of Purification and Corruption → new ending → new ending 11.8 · tries Activate Ars Magna of Purification and Corruption → new ending 11.75 · tries Activate Ars Magna of Purification and Corruption 11.65 · forced Activate Artmage Graflare 11.3 · tries Activate Ars Magna of Purification and Corruption → new ending → new early order 11.3 · tries Activate Theorealize Past Lull 11.05 · forced Activate Theorealize Liberation 11.05 · forced Activate Fiendsmith's Sequence 11.05 · search 11 · opening lanes 10.6 · forced Activate Mind Shuffle 10.1 · forced Activate Griffoh 9.9 · tries Activate Ars Magna of Purification and Corruption → new ending → new ending → new ending 9.76 · forced Synchro Summon Chaos Angel 9.5 · forced Activate Theorealize Past Lull 8.9 · tries Activate Ars Magna of Purification and Corruption → new ending → new ending → new early order 8.9 · tries Activate Ars Magna of Infinity and Finity 8.87 · tries Activate Light and Darkness Ritual 8.65 · forced Link Summon S:P Little Knight 8.6 · tries Activate Light and Darkness Ritual 7.75 · forced Special Summon (procedure) Dark Magician of Destruction 7.75 · tries Activate Mind Shuffle 7.75 · forced Activate Light and Darkness Ritual: Ritual Summon 7.75

1. Normal Summon Medius the Pure (hand)
2. Yes
3. Selected Nervedo the Shadebeast Power Patron (Deck)
4. Special Summon it
5. Activate Nervedo the Shadebeast Power Patron (M1): Special Summon 1 "Nerva the Power Patron of Creation" from your Extra Deck
6. Selected Nerva the Power Patron of Creation (Extra Deck)
7. Yes
8. Selected Theorealize Medius (Deck)
9. Link Summon Purification Power Patron (Extra Deck)
10. select Medius the Pure (M3)
11. select Theorealize Medius (M2)
12. Yes
13. Selected Theorealize Medius (Deck)
14. Activate Medius the Pure (GY): Shuffle 1 monster from your hand or face-up field into the Deck, and if you do, Special Summon this card
15. Selected Ash Blossom & Joyous Spring (hand)
16. Activate Theorealize Medius (hand): If a "Power Patron" card is on the field: You can Special Summon this card from your hand, then you can add 1 "Theorealize" Spell/Trap from your Deck to your hand
17. Yes
18. Selected Theorealize Liberation (Deck)
19. Activate Theorealize Liberation (hand): Add to your hand, or Special Summon, 1 monster from your Deck with 300 ATK/200 DEF
20. Selected Griffoh (Deck)
21. Add the card(s) to your hand
22. Activate Griffoh (hand): Activate 1 of these effects
23. Set 1 card that mentions "Light and Darkness Ritual"
24. Activate Purification Power Patron (EMZ-R): Link Summon including this card as material
25. Selected Medicurius the Power Patron of Illusions (Extra Deck)
26. select Medius the Pure (M5)
27. Finish selection
28. Selected Mind Shuffle (Deck)
29. Yes
30. Special Summon 1 "Diactorus" monster
31. Selected Artmage Diactorus (Extra Deck)
32. Activate Mind Shuffle (S1): activate this card
33. No
34. Activate Mind Shuffle (S1): Add 1 appropriate monster to your hand
35. Selected Skull Archfiend of Chaos (Deck)
36. Selected Skull Archfiend of Chaos (hand)
37. Yes
38. Selected Light and Darkness Ritual (Deck)
39. Selected Magician of Dark Chaos - Black Chaos (Deck)
40. Activate Light and Darkness Ritual (GY): Add both this card and 1 card that mentions "Light and Darkness Ritual" from your GY to your hand
41. Selected Skull Archfiend of Chaos (GY)
42. Activate Light and Darkness Ritual (hand): Ritual Summon 1 "Magician of Dark Chaos - Black Chaos" or "Black Luster Soldier - Soldier of Light and Darkness" from your hand
43. Selected Magician of Dark Chaos - Black Chaos (hand)
44. Selected Griffoh (GY) value 8 or 1
45. Yes
46. Selected Theorealize Liberation (GY)
47. Special Summon (procedure) Artmage Non-Finito (Extra Deck)
48. Selected Theorealize Liberation (hand)
49. Selected Artmage Diactorus (M3)
50. Yes
51. Selected Artmage Impasto -Recapture- (Deck)

End board:  LP 8000 | Hand 4 | Deck 32 | Extra 11 | GY 5 | Banished 6   Monsters: M1: Nerva the Power Patron of Creation Lv10 3300/3300 ATK || M2: Magician of Dark Chaos - Black Chaos Lv8 2800/2600 ATK || M3: Artmage Non-Finito Lv7 2400/1500 ATK || EMZ-L: Medicurius the Power Patron of Illusions L3↙↓↘ 3000    Spell/Trap: S1: Mind Shuffle || S2: Artmage Impasto -Recapture- (Set)   GY: Theorealize Medius, Purification Power Patron, Light and Darkness Ritual, Theorealize Liberation, Artmage Diactorus   Banished: Fiendsmith's Tract (face-down), Ars Magna - "Citrinitas" (face-down), Nervedo the Shadebeast Power Patron (face-down), Medius the Pure, Theorealize Medius, Griffoh   Hand: Droll & Lock Bird, Ghost

## Order 8: best 12.7 [margin 4.72: ss_panama null, elfnote -0.22, despia 4.59, angelechy 7.31] (, worst 12.7) — from forced Activate Mind Shuffle
Others: forced Activate Mind Shuffle → new ending 12.7 · forced Activate Mind Shuffle → new early order 12.7 · forced Activate Griffoh 11.8 · forced Synchro Summon Chaos Angel 11.3 · forced Activate Theorealize Liberation 11.3 · forced Special Summon (procedure) Dark Magician of Destruction 11.25 · forced Activate Fiendsmith's Sequence 11.05 · tries Activate Theorealize Liberation 11.05 · tries Activate Artmage Diactorus 11.05 · tries Activate Prohibited Power Patron Portal - Terminus 11.05 · opening lanes 11.05 · forced Activate Mind Shuffle → new ending 11.05 · forced Activate Mind Shuffle → new early order 11.05 · forced Activate Mind Shuffle → new ending 10.84 · tries Activate Ars Magna of Purification and Corruption 10.8 · forced Activate Light and Darkness Ritual: Ritual Summon 10 · tries Activate Theorealize Past Lull 9.77 · forced Activate Theorealize Past Lull 8.9 · forced Activate Artmage Graflare 8.6 · tries Activate Theorealize Liberation 8 · search 7.75 · forced Link Summon S:P Little Knight 7.28 · forced Activate Mind Shuffle → new early order 6.38

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
11. select Nerva the Power Patron of Creation (M5)
12. Yes
13. Selected Theorealize Medius (Deck)
14. Activate Medius the Pure (GY): Shuffle 1 monster from your hand or face-up field into the Deck, and if you do, Special Summon this card
15. Selected Droll & Lock Bird (hand)
16. Activate Theorealize Medius (hand): If a "Power Patron" card is on the field: You can Special Summon this card from your hand, then you can add 1 "Theorealize" Spell/Trap from your Deck to your hand
17. Yes
18. Selected Theorealize Liberation (Deck)
19. Activate Theorealize Liberation (hand): Add to your hand, or Special Summon, 1 monster from your Deck with 300 ATK/200 DEF
20. Activate Purification Power Patron (EMZ-L): Link Summon including this card as material
21. Selected Medicurius the Power Patron of Illusions (Extra Deck)
22. select Medius the Pure (M4)
23. Finish selection
24. Selected Griffoh (Deck)
25. Add the card(s) to your hand
26. Yes
27. Special Summon 1 "Diactorus" monster
28. Selected Artmage Diactorus (Extra Deck)
29. Activate Artmage Diactorus (M3): Change the battle position of 1 monster on the field
30. Selected Artmage Diactorus (M3)
31. Activate Griffoh (hand): Activate 1 of these effects
32. Set 1 card that mentions "Light and Darkness Ritual"
33. Selected Mind Shuffle (Deck)
34. Activate Mind Shuffle (S1): activate this card
35. Yes
36. Selected Skull Archfiend of Chaos (Deck)
37. Selected Skull Archfiend of Chaos (hand)
38. Yes
39. Selected Light and Darkness Ritual (Deck)
40. Selected Magician of Dark Chaos - Black Chaos (Deck)
41. Activate Light and Darkness Ritual (GY): Add both this card and 1 card that mentions "Light and Darkness Ritual" from your GY to your hand
42. Selected Skull Archfiend of Chaos (GY)
43. Activate Light and Darkness Ritual (hand): Ritual Summon 1 "Magician of Dark Chaos - Black Chaos" or "Black Luster Soldier - Soldier of Light and Darkness" from your hand
44. Selected Magician of Dark Chaos - Black Chaos (hand)
45. Selected Griffoh (GY) value 8 or 1
46. Yes
47. Selected Light and Darkness Ritual (GY)
48. Special Summon (procedure) Artmage Non-Finito (Extra Deck)
49. Selected Light and Darkness Ritual (hand)
50. Selected Artmage Diactorus (M3)
51. Yes
52. Selected Artmage Impasto -Recapture- (Deck)

End board:  LP 8000 | Hand 4 | Deck 32 | Extra 11 | GY 5 | Banished 6   Monsters: M1: Artmage Graflare Lv5 2100/1500 ATK || M2: Magician of Dark Chaos - Black Chaos Lv8 2800/2600 ATK || M3: Artmage Non-Finito Lv7 2400/1500 ATK || EMZ-L: Medicurius the Power Patron of Illusions L3↙↓↘ 3000    Spell/Trap: S1: Mind Shuffle || S2: Artmage Impasto -Recapture- (Set)   GY: Nerva the Power Patron of Creation, Purification Power Patron, Theorealize Liberation, Light and Darkness Ritual, Artmage Diactorus   Banished: Fiendsmith Engraver (face-down), Junoldo the Shadespirit Power Patron (face-down), Theorealize Medius (face-down), Medius the Pure, Theorealize Medius, Griffoh   Hand: Ghost Ogre & Snow Rabbit, Infin

