# Evolved lines — Ars Magna - "Citrinitas", Ash Blossom & Joyous Spring, Ash Blossom & Joyous Spring, Droll & Lock Bird, Ghost Ogre & Snow Rabbit (findlist-1100)
2026-11-26T01:15:46.052Z

8 deck orders (different face-down banishes / draws), 3 opponent hands x o_ss_panama + o_elfnote + o_despia + o_angelechy per line, 5 min searches, 6 mutation rounds.
Fitness = end-board interruptions (the lab scorer, src/disrupt.mjs: wipe 2, negate 1-1.5, banish/protection less; hand traps kept count 1 each). The winner of each order is also played into the opponent decks: margin after their turn shown beside it.

**Margin after their turn (winners): average 3.16** (worst -4.3)

**Best line per deck order: average 11.85** (worst order 10.95). Winner came from: search 6, tries Special Summon (procedure) Artmage Non-Finito → new early order 1, tries Activate Mind Shuffle 1

## Weak points found automatically
Cards whose face-down banish (by your own costs) hurt the best line most (average best line without vs with that card banished):

| card | orders where it was banished | drop |
|---|---|---|
| Apprentice Illusion Magician | 3/8 | 0.67 |
| Medius the Pure | 3/8 | 0.67 |
| Artmage Finmel | 4/8 | 0.5 |
| Theorealize Medius | 6/8 | 0.33 |
| Vidolium the Unstable Power Patron of Unity | 6/8 | 0.33 |
| Fiendsmith Engraver | 6/8 | 0.33 |
| Theorealize Liberation | 2/8 | 0.23 |
| Infinite Impermanence | 2/8 | 0.23 |
| Prohibited Power Patron Portal - Terminus | 2/8 | 0.23 |
| Ars Magna of Purification and Corruption | 3/8 | 0.21 |

List changes proposed for the list test (data/proposals-findlist-1100.json):
- +1 Apprentice Illusion Magician, −1 Plundered Power Patron Plane - Vidolia — Apprentice Illusion Magician: best line 0.67 worse when a cost banished it (3 of 8 orders) — Ars Magna - "Citrinitas"
- +1 Artmage Finmel, −1 Artmage Vandalism -Assault- — Artmage Finmel: best line 0.5 worse when a cost banished it (4 of 8 orders) — Ars Magna - "Citrinitas"
- +1 Apprentice Illusion Magician — Apprentice Illusion Magician: best line 0.67 worse when a cost banished it (3 of 8 orders) — Ars Magna - "Citrinitas" (add only: deck grows, up to 60)
- +1 Artmage Finmel — Artmage Finmel: best line 0.5 worse when a cost banished it (4 of 8 orders) — Ars Magna - "Citrinitas" (add only: deck grows, up to 60)

Effects the search had not used, tried on purpose (best result so far):
- Activate Prohibited Power Patron Portal - Terminus: 12.1
- Special Summon (procedure) Nerva the Power Patron of Creation: 12.1
- Activate Junoldo the Shadespirit Power Patron: 12.1
- Activate Griffoh: 12.1
- Activate Plundered Power Patron Plane - Vidolia: 12.1
- Synchro Summon Junora the Power Patron of Tuning: 12.1
- Activate Pendulum Treasure: 12.1
- Normal Summon Theorealize Medius: 12.1

## Order 1: best 12.1 [margin 4.29: ss_panama -2, elfnote 4.28, despia 1.74, angelechy 8.1] (, worst 12.1) — from search
Others: forced Activate Light and Darkness Ritual: Ritual Summon 12.1 · forced Activate Mind Shuffle 12.1 · opening lanes 12.1 · tries Activate Prohibited Power Patron Portal - Terminus 12.1 · forced Special Summon (procedure) Dark Magician of Destruction 12.1 · forced Synchro Summon Chaos Angel 12.1 · forced Activate Griffoh 12.1 · search → new ending 12.1 · search → new ending 12.1 · search → new ending 12.1 · search → new early order 12.1 · search → new early order 10.94 · search → new early order 10.94 · forced Activate Artmage Graflare 10.75 · tries Activate Theorealize Liberation 10.21 · forced Activate Theorealize Liberation 10.21 · tries Activate Theorealize Liberation 10.21 · tries Activate Theorealize Past Lull 7.83 · tries Activate Vidolium the Unstable Power Patron of Unity 6.3 · forced Link Summon S:P Little Knight 4.6 · tries Activate Ars Magna of Purification and Corruption 3.55

1. Set Spell/Trap Ars Magna - "Citrinitas"
2. Activate Ars Magna - "Citrinitas" (S1): activate this card
3. Activate Ars Magna - "Citrinitas" (S1): Add 1 "Medius" or "Ars Magna" monster from your Deck to your hand
4. Selected Medius the Pure (Deck)
5. Normal Summon Medius the Pure (hand)
6. Yes
7. Selected Nervedo the Shadebeast Power Patron (Deck)
8. Special Summon it
9. Activate Nervedo the Shadebeast Power Patron (M5): Special Summon 1 "Nerva the Power Patron of Creation" from your Extra Deck
10. Selected Nerva the Power Patron of Creation (Extra Deck)
11. Yes
12. Selected Junoldo the Shadespirit Power Patron (Deck)
13. Activate Junoldo the Shadespirit Power Patron (M1): Special Summon 1 "Junora the Power Patron of Tuning" from your Extra Deck
14. Selected Junora the Power Patron of Tuning (Extra Deck)
15. Yes
16. Selected Nervedo the Shadebeast Power Patron (Extra Deck)
17. Link Summon Purification Power Patron (Extra Deck)
18. select Medius the Pure (M4)
19. select Junora the Power Patron of Tuning (EMZ-R)
20. Yes
21. Selected Theorealize Medius (Deck)
22. Activate Theorealize Medius (hand): If a "Power Patron" card is on the field: You can Special Summon this card from your hand, then you can add 1 "Theorealize" Spell/Trap from your Deck to your hand
23. Yes
24. Selected Theorealize Past Lull (Deck)
25. Special Summon (procedure) Artmage Non-Finito (Extra Deck)
26. Selected Theorealize Past Lull (hand)
27. Selected Nervedo the Shadebeast Power Patron (hand)
28. Yes
29. Selected Artmage Impasto -Recapture- (Deck)
30. Activate Medius the Pure (GY): Shuffle 1 monster from your hand or face-up field into the Deck, and if you do, Special Summon this card
31. Activate Purification Power Patron (EMZ-L): Link Summon including this card as material
32. Selected Medicurius the Power Patron of Illusions (Extra Deck)
33. select Artmage Non-Finito (M2)
34. Finish selection
35. Selected Ash Blossom & Joyous Spring (hand)
36. Activate Theorealize Past Lull (GY): Special Summon 1 Fusion, Synchro, or Xyz Monster from your GY
37. Selected Junora the Power Patron of Tuning (GY)
38. Link Summon S:P Little Knight (Extra Deck)
39. select Medius the Pure (M4)
40. select Junora the Power Patron of Tuning (M5)
41. Yes
42. Special Summon 1 "Diactorus" monster
43. Selected Artmage Diactorus (Extra Deck)

End board:  LP 8000 | Hand 3 | Deck 33 | Extra 9 | GY 4 | Banished 9   Monsters: M3: Nerva the Power Patron of Creation Lv10 3300/3300 ATK || M4: S:P Little Knight L2←→ 1600  || M5: Artmage Diactorus Lv8 2800/2500 ATK || EMZ-R: Medicurius the Power Patron of Illusions L3↙↓↘ 3000    Spell/Trap: S1: Ars Magna - "Citrinitas" || S2: Artmage Impasto -Recapture- (Set)   GY: Nervedo the Shadebeast Power Patron, Artmage Non-Finito, Purification Power Patron, Junora the Power Patron of Tuning   Banished: Artmage Vandalism -Assault- (face-down), Fiendsmith's Tract (face-down), Magician of Dark Chaos - Black Chaos (face-down), Ars Magna - "Citrinitas" (face-down), Griffoh (face-down), Nervedo the Shadebeast Power

## Order 2: best 11.25 [margin 3.16: ss_panama 0.88, elfnote 4.9, despia -2.38, angelechy 7.2] (, worst 11.25) — from tries Special Summon (procedure) Artmage Non-Finito → new early order
Others: tries Special Summon (procedure) Artmage Non-Finito 11.1 · tries Activate Vidolium the Unstable Power Patron of Unity 11 · opening lanes 10.75 · forced Activate Theorealize Liberation 10.75 · forced Activate Artmage Graflare 10.75 · forced Activate Theorealize Past Lull 9.2 · tries Activate Junoldo the Shadespirit Power Patron 8.9 · tries Special Summon (procedure) Artmage Non-Finito → new ending 8.7 · tries Special Summon (procedure) Artmage Non-Finito → new early order → new ending 8.7 · search 6.45 · forced Activate Mind Shuffle 6.45 · tries Activate Artmage Finmel 6.45 · forced Activate Griffoh 6.45 · forced Activate Light and Darkness Ritual: Ritual Summon 6.45 · forced Synchro Summon Chaos Angel 6.45 · forced Activate Fiendsmith's Sequence 6.45 · forced Special Summon (procedure) Dark Magician of Destruction 6.45 · forced Link Summon S:P Little Knight 4.6 · tries Activate Prohibited Power Patron Portal - Terminus 3.55 · tries Special Summon (procedure) Artmage Non-Finito → new early order 3.55 · tries Normal Summon Theorealize Medius 3.4

1. Activate Ars Magna - "Citrinitas" (hand): activate this card
2. Activate Ars Magna - "Citrinitas" (S1): Add 1 "Medius" or "Ars Magna" monster from your Deck to your hand
3. Selected Medius the Pure (Deck)
4. Normal Summon Medius the Pure (hand)
5. Yes
6. Selected Vidolium the Unstable Power Patron of Unity (Deck)
7. Add the card(s) to your hand
8. Activate Vidolium the Unstable Power Patron of Unity (hand): Activate it as a Pendulum Spell
9. Activate Vidolium the Unstable Power Patron of Unity (S5): Activate 1 of these effects
10. Your Level 12 "Power Patron" monsters gain 5000 ATK
11. Yes
12. Selected Plundered Power Patron Plane - Vidolia (Deck)
13. Set Spell/Trap Plundered Power Patron Plane - Vidolia
14. Activate Plundered Power Patron Plane - Vidolia (Field): activate this card
15. Activate Plundered Power Patron Plane - Vidolia (Field): Banish (face-down) 1 card from your hand, then add to your hand, or Special Summon, 1 monster from your Deck that mentions the revealed monster
16. Selected Nerva the Power Patron of Creation (Extra Deck)
17. Selected Ash Blossom & Joyous Spring (hand)
18. Selected Nervedo the Shadebeast Power Patron (Deck)
19. Special Summon it
20. Activate Nervedo the Shadebeast Power Patron (M1): Special Summon 1 "Nerva the Power Patron of Creation" from your Extra Deck
21. Selected Nerva the Power Patron of Creation (Extra Deck)
22. Yes
23. Selected Junoldo the Shadespirit Power Patron (Deck)
24. Activate Junoldo the Shadespirit Power Patron (M5): Special Summon 1 "Junora the Power Patron of Tuning" from your Extra Deck
25. Selected Junora the Power Patron of Tuning (Extra Deck)
26. Yes
27. Selected Nervedo the Shadebeast Power Patron (Extra Deck)
28. Link Summon Purification Power Patron (Extra Deck)
29. select Junora the Power Patron of Tuning (M1)
30. select Medius the Pure (M4)
31. Yes
32. Selected Theorealize Medius (Deck)
33. Activate Theorealize Medius (hand): If a "Power Patron" card is on the field: You can Special Summon this card from your hand, then you can add 1 "Theorealize" Spell/Trap from your Deck to your hand
34. Yes
35. Selected Theorealize Past Lull (Deck)
36. Special Summon (procedure) Artmage Non-Finito (Extra Deck)
37. Selected Theorealize Past Lull (hand)
38. Selected Nervedo the Shadebeast Power Patron (hand)
39. Yes
40. Selected Artmage Impasto -Recapture- (Deck)
41. Activate Medius the Pure (GY): Shuffle 1 monster from your hand or face-up field into the Deck, and if you do, Special Summon this card
42. Selected Artmage Non-Finito (M1)
43. Activate Purification Power Patron (EMZ-L): Link Summon including this card as material
44. Selected Medicurius the Power Patron of Illusions (Extra Deck)
45. select Medius the Pure (M1)
46. Finish selection
47. Yes
48. Special Summon 1 "Diactorus" monster
49. Selected Artmage Diactorus (Extra Deck)
50. Activate Theorealize Past Lull (GY): Special Summon 1 Fusion, Synchro, or Xyz Monster from your GY
51. Selected Junora the Power Patron of Tuning (GY)

End board:  LP 8000 | Hand 3 | Deck 30 | Extra 12 | GY 2 | Banished 10   Monsters: M1: Artmage Diactorus Lv8 2800/2500 ATK || M2: Junora the Power Patron of Tuning Lv10 3100/3800 ATK || M3: Nerva the Power Patron of Creation Lv10 3300/3300 ATK || EMZ-L: Medicurius the Power Patron of Illusions L3↙↓↘ 3000    Spell/Trap: S1: Ars Magna - "Citrinitas" || S2: Artmage Impasto -Recapture- (Set) || Field: Plundered Power Patron Plane - Vidolia   GY: Nervedo the Shadebeast Power Patron, Purification Power Patron   Banished: Ash Blossom & Joyous Spring (face-down), Ars Magna - "Citrinitas" (face-down), Infinite Impermanence (face-down), Vidolium the Unstable Power Patron of Unity (face-down), Pendulum Treasure (

## Order 3: best 12.1 [margin 2.58: ss_panama 3.2, elfnote 1.14, despia -2.12, angelechy 8.1] (, worst 12.1) — from search
Others: opening lanes 12.1 · tries Activate Pendulum Treasure 12.1 · tries Synchro Summon Junora the Power Patron of Tuning 12.1 · forced Activate Theorealize Past Lull 12.1 · tries Activate Griffoh 12.1 · forced Activate Fiendsmith's Sequence 12.1 · forced Activate Artmage Graflare 12.1 · forced Synchro Summon Chaos Angel 12.1 · forced Activate Griffoh 12.1 · forced Activate Light and Darkness Ritual: Ritual Summon 12.1 · search → new ending 12.1 · search → new early order 12.1 · search → new ending 12.1 · forced Special Summon (procedure) Dark Magician of Destruction 12 · forced Activate Theorealize Liberation 10.75 · forced Activate Mind Shuffle 10.75 · tries Activate Artmage Diactorus 10.75 · search → new early order 10.5 · search → new ending 10.1 · tries Activate Vidolium the Unstable Power Patron of Unity 9.35 · forced Link Summon S:P Little Knight 4.6 · tries Activate Ars Magna of Purification and Corruption 3.55 · search → new early order 3.55

1. Set Spell/Trap Ars Magna - "Citrinitas"
2. Activate Ars Magna - "Citrinitas" (S1): activate this card
3. Activate Ars Magna - "Citrinitas" (S1): Add 1 "Medius" or "Ars Magna" monster from your Deck to your hand
4. Selected Medius the Pure (Deck)
5. Normal Summon Medius the Pure (hand)
6. Yes
7. Selected Nervedo the Shadebeast Power Patron (Deck)
8. Special Summon it
9. Activate Nervedo the Shadebeast Power Patron (M1): Special Summon 1 "Nerva the Power Patron of Creation" from your Extra Deck
10. Selected Nerva the Power Patron of Creation (Extra Deck)
11. Yes
12. Selected Junoldo the Shadespirit Power Patron (Deck)
13. Activate Junoldo the Shadespirit Power Patron (M5): Special Summon 1 "Junora the Power Patron of Tuning" from your Extra Deck
14. Selected Junora the Power Patron of Tuning (Extra Deck)
15. Yes
16. Selected Nervedo the Shadebeast Power Patron (Extra Deck)
17. Link Summon Purification Power Patron (Extra Deck)
18. select Medius the Pure (M3)
19. select Junora the Power Patron of Tuning (EMZ-L)
20. Yes
21. Selected Theorealize Medius (Deck)
22. Activate Theorealize Medius (hand): If a "Power Patron" card is on the field: You can Special Summon this card from your hand, then you can add 1 "Theorealize" Spell/Trap from your Deck to your hand
23. Yes
24. Selected Theorealize Past Lull (Deck)
25. Activate Medius the Pure (GY): Shuffle 1 monster from your hand or face-up field into the Deck, and if you do, Special Summon this card
26. Selected Ash Blossom & Joyous Spring (hand)
27. Activate Purification Power Patron (EMZ-R): Link Summon including this card as material
28. Selected Medicurius the Power Patron of Illusions (Extra Deck)
29. select Medius the Pure (M3)
30. Finish selection
31. Yes
32. Special Summon 1 "Diactorus" monster
33. Selected Artmage Diactorus (Extra Deck)
34. Special Summon (procedure) Artmage Non-Finito (Extra Deck)
35. Selected Theorealize Past Lull (hand)
36. Selected Nervedo the Shadebeast Power Patron (hand)
37. Yes
38. Selected Artmage Impasto -Recapture- (Deck)
39. Activate Theorealize Past Lull (GY): Special Summon 1 Fusion, Synchro, or Xyz Monster from your GY
40. Selected Junora the Power Patron of Tuning (GY)
41. Link Summon S:P Little Knight (Extra Deck)
42. select Artmage Non-Finito (M1)
43. select Junora the Power Patron of Tuning (M3)
44. No

End board:  LP 8000 | Hand 3 | Deck 33 | Extra 9 | GY 4 | Banished 9   Monsters: M3: S:P Little Knight L2←→ 1600  || M4: Nerva the Power Patron of Creation Lv10 3300/3300 ATK || M5: Artmage Diactorus Lv8 2800/2500 ATK || EMZ-R: Medicurius the Power Patron of Illusions L3↙↓↘ 3000    Spell/Trap: S1: Ars Magna - "Citrinitas" || S2: Artmage Impasto -Recapture- (Set)   GY: Purification Power Patron, Nervedo the Shadebeast Power Patron, Artmage Non-Finito, Junora the Power Patron of Tuning   Banished: Nervedo the Shadebeast Power Patron (face-down), Ars Magna - "Citrinitas" (face-down), Vidolium the Unstable Power Patron of Unity (face-down), Prohibited Power Patron Portal - Terminus (face-down), Griffoh (fa

## Order 4: best 12.1 [margin 3.18: ss_panama 1.59, elfnote 1.58, despia 2.57, angelechy 8.1] (, worst 12.1) — from search
Others: forced Activate Light and Darkness Ritual: Ritual Summon 12.1 · opening lanes 12.1 · tries Activate Plundered Power Patron Plane - Vidolia 12.1 · forced Special Summon (procedure) Dark Magician of Destruction 12.1 · forced Activate Artmage Graflare 12.1 · tries Activate Junoldo the Shadespirit Power Patron 12.1 · forced Activate Fiendsmith's Sequence 12.1 · forced Synchro Summon Chaos Angel 12.1 · forced Activate Mind Shuffle 12 · forced Activate Griffoh 11.25 · tries Activate Plundered Power Patron Plane - Vidolia 11.25 · tries Activate Vidolium the Unstable Power Patron of Unity 11 · forced Activate Theorealize Liberation 10.1 · tries Normal Summon Theorealize Medius 7.28 · forced Link Summon S:P Little Knight 4.6 · forced Activate Theorealize Past Lull 4.6 · tries Activate Ars Magna of Purification and Corruption 3.55

1. Activate Ars Magna - "Citrinitas" (hand): activate this card
2. Activate Ars Magna - "Citrinitas" (S1): Add 1 "Medius" or "Ars Magna" monster from your Deck to your hand
3. Selected Medius the Pure (Deck)
4. Normal Summon Medius the Pure (hand)
5. Yes
6. Selected Nervedo the Shadebeast Power Patron (Deck)
7. Special Summon it
8. Activate Nervedo the Shadebeast Power Patron (M1): Special Summon 1 "Nerva the Power Patron of Creation" from your Extra Deck
9. Selected Nerva the Power Patron of Creation (Extra Deck)
10. Yes
11. Selected Junoldo the Shadespirit Power Patron (Deck)
12. Activate Junoldo the Shadespirit Power Patron (M5): Special Summon 1 "Junora the Power Patron of Tuning" from your Extra Deck
13. Selected Junora the Power Patron of Tuning (Extra Deck)
14. Yes
15. Selected Nervedo the Shadebeast Power Patron (Extra Deck)
16. Link Summon Purification Power Patron (Extra Deck)
17. select Medius the Pure (M3)
18. select Junora the Power Patron of Tuning (M1)
19. Yes
20. Selected Theorealize Medius (Deck)
21. Activate Medius the Pure (GY): Shuffle 1 monster from your hand or face-up field into the Deck, and if you do, Special Summon this card
22. Selected Ash Blossom & Joyous Spring (hand)
23. Activate Theorealize Medius (hand): If a "Power Patron" card is on the field: You can Special Summon this card from your hand, then you can add 1 "Theorealize" Spell/Trap from your Deck to your hand
24. Yes
25. Selected Theorealize Past Lull (Deck)
26. Special Summon (procedure) Artmage Non-Finito (Extra Deck)
27. Selected Theorealize Past Lull (hand)
28. Selected Nervedo the Shadebeast Power Patron (hand)
29. Yes
30. Activate Purification Power Patron (EMZ-L): Link Summon including this card as material
31. Selected Medicurius the Power Patron of Illusions (Extra Deck)
32. select Medius the Pure (M2)
33. Finish selection
34. Selected Artmage Impasto -Recapture- (Deck)
35. Yes
36. Special Summon 1 "Diactorus" monster
37. Selected Artmage Diactorus (Extra Deck)
38. Activate Theorealize Past Lull (GY): Special Summon 1 Fusion, Synchro, or Xyz Monster from your GY
39. Selected Junora the Power Patron of Tuning (GY)
40. Link Summon S:P Little Knight (Extra Deck)
41. select Junora the Power Patron of Tuning (M3)
42. select Artmage Non-Finito (M1)
43. No

End board:  LP 8000 | Hand 3 | Deck 33 | Extra 9 | GY 4 | Banished 9   Monsters: M3: S:P Little Knight L2←→ 1600  || M4: Nerva the Power Patron of Creation Lv10 3300/3300 ATK || M5: Artmage Diactorus Lv8 2800/2500 ATK || EMZ-R: Medicurius the Power Patron of Illusions L3↙↓↘ 3000    Spell/Trap: S1: Ars Magna - "Citrinitas" || S2: Artmage Impasto -Recapture- (Set)   GY: Nervedo the Shadebeast Power Patron, Purification Power Patron, Artmage Non-Finito, Junora the Power Patron of Tuning   Banished: Artmage Finmel (face-down), Dark Magical Circle (face-down), Vidolium the Unstable Power Patron of Unity (face-down), Black Chaos (face-down), Skull Archfiend of Chaos (face-down), Light and Darkness Ritual (fa

## Order 5: best 10.95 [margin 2.54: ss_panama 0.35, elfnote 4.7, despia -1.19, angelechy 5.04] (, worst 10.95) — from tries Activate Mind Shuffle
Others: forced Synchro Summon Chaos Angel 10.95 · opening lanes 10.95 · search 10.75 · forced Special Summon (procedure) Dark Magician of Destruction 10.75 · tries Activate Skull Archfiend of Chaos 10.75 · forced Activate Theorealize Liberation 10.75 · forced Activate Griffoh 9.99 · forced Activate Fiendsmith's Sequence 8.85 · forced Activate Artmage Graflare 8.85 · forced Activate Mind Shuffle 8.85 · tries Special Summon (procedure) Artmage Non-Finito 7.28 · forced Activate Light and Darkness Ritual: Ritual Summon 7.28 · tries Activate Artmage Vandalism -Assault- 4.6 · forced Activate Theorealize Past Lull 4.6 · forced Link Summon S:P Little Knight 4.6 · tries Activate Ars Magna of Infinity and Finity 3.55 · tries Activate Ars Magna of Infinity and Finity 3.55

1. Activate Ars Magna - "Citrinitas" (hand): activate this card
2. Activate Ars Magna - "Citrinitas" (S1): Add 1 "Medius" or "Ars Magna" monster from your Deck to your hand
3. Selected Medius the Pure (Deck)
4. Normal Summon Medius the Pure (hand)
5. Yes
6. Selected Junoldo the Shadespirit Power Patron (Deck)
7. Special Summon it
8. Activate Junoldo the Shadespirit Power Patron (M3): Special Summon 1 "Junora the Power Patron of Tuning" from your Extra Deck
9. Selected Junora the Power Patron of Tuning (Extra Deck)
10. Link Summon Purification Power Patron (Extra Deck)
11. select Medius the Pure (M1)
12. select Junora the Power Patron of Tuning (EMZ-R)
13. Yes
14. Selected Theorealize Medius (Deck)
15. Activate Medius the Pure (GY): Shuffle 1 monster from your hand or face-up field into the Deck, and if you do, Special Summon this card
16. Selected Ash Blossom & Joyous Spring (hand)
17. Activate Theorealize Medius (hand): If a "Power Patron" card is on the field: You can Special Summon this card from your hand, then you can add 1 "Theorealize" Spell/Trap from your Deck to your hand
18. Yes
19. Selected Theorealize Liberation (Deck)
20. Activate Theorealize Liberation (hand): Add to your hand, or Special Summon, 1 monster from your Deck with 300 ATK/200 DEF
21. Activate Purification Power Patron (EMZ-R): Link Summon including this card as material
22. Selected Medicurius the Power Patron of Illusions (Extra Deck)
23. select Medius the Pure (M3)
24. Finish selection
25. Selected Nervedo the Shadebeast Power Patron (Deck)
26. Special Summon it
27. Yes
28. Add 1 "Ars Magna" card from your Deck to your hand
29. Selected Ars Magna of Infinity and Finity (Deck)
30. Activate Ars Magna of Infinity and Finity (hand): You can banish this card from your hand; add 1 non-Warrior "Ars Magna" monster from your Deck to your hand
31. Selected Ars Magna of Purification and Corruption (Deck)
32. Activate Ars Magna of Purification and Corruption (hand): You can banish this card from your hand; add 1 "Ars Magna" Spell/Trap from your Deck to your hand
33. Selected Ars Magna - "Citrinitas" (Deck)
34. Special Summon (procedure) Artmage Non-Finito (Extra Deck)
35. Selected Ars Magna - "Citrinitas" (hand)
36. Selected Nervedo the Shadebeast Power Patron (M4)
37. Yes
38. Activate Ars Magna of Infinity and Finity (banishment): Special Summon this card
39. Activate Artmage Non-Finito (M4): Set 1 "Artmage" Spell/Trap from your Deck
40. Selected Artmage Impasto -Recapture- (Deck)
41. Selected Artmage Finmel (Deck)

End board:  LP 8000 | Hand 3 | Deck 32 | Extra 13 | GY 3 | Banished 6   Monsters: M1: Theorealize Medius Lv4 1800/1800 ATK || M2: Artmage Finmel Lv7 2400/1500 ATK || M3: Ars Magna of Infinity and Finity Lv8 1000/2400 ATK || M4: Artmage Non-Finito Lv7 2400/1500 ATK || EMZ-L: Medicurius the Power Patron of Illusions L3↙↓↘ 9000    Spell/Trap: S1: Ars Magna - "Citrinitas" || S2: Artmage Impasto -Recapture- (Set)   GY: Junora the Power Patron of Tuning, Purification Power Patron, Ars Magna - "Citrinitas"   Banished: Theorealize Past Lull (face-down), Artmage Finmel (face-down), Plundered Power Patron Plane - Vidolia (face-down), Medius the Pure, Theorealize Liberation, Ars Magna of Purification and Corrupti

## Order 6: best 12.1 [margin 4.79: ss_panama 4.03, elfnote 8.4, despia 2.18, angelechy 8.03] (, worst 12.1) — from search
Others: forced Activate Light and Darkness Ritual: Ritual Summon 12.1 · forced Activate Mind Shuffle 12.1 · forced Activate Fiendsmith's Sequence 12.1 · forced Special Summon (procedure) Dark Magician of Destruction 12.1 · forced Synchro Summon Chaos Angel 12.1 · forced Activate Artmage Graflare 12.1 · tries Normal Summon Theorealize Medius 12.1 · tries Special Summon (procedure) Nerva the Power Patron of Creation 12.1 · opening lanes 12.1 · tries Activate Junoldo the Shadespirit Power Patron 12.1 · forced Activate Griffoh 12 · forced Activate Theorealize Past Lull 11.25 · tries Activate Plundered Power Patron Plane - Vidolia 11.25 · tries Activate Nervedo the Shadebeast Power Patron 10.75 · forced Activate Theorealize Liberation 10.75 · search → new early order 10.4 · tries Activate Vidolium the Unstable Power Patron of Unity 10.25 · search → new ending 9.93 · search → new ending 9.7 · search → new early order 9.7 · search → new early order 8.85 · forced Link Summon S:P Little Knight 4.6 · search → new ending 4.1

1. Set Spell/Trap Ars Magna - "Citrinitas"
2. Activate Ars Magna - "Citrinitas" (S1): activate this card
3. Activate Ars Magna - "Citrinitas" (S1): Add 1 "Medius" or "Ars Magna" monster from your Deck to your hand
4. Selected Medius the Pure (Deck)
5. Normal Summon Medius the Pure (hand)
6. Yes
7. Selected Nervedo the Shadebeast Power Patron (Deck)
8. Special Summon it
9. Activate Nervedo the Shadebeast Power Patron (M5): Special Summon 1 "Nerva the Power Patron of Creation" from your Extra Deck
10. Selected Nerva the Power Patron of Creation (Extra Deck)
11. Yes
12. Selected Junoldo the Shadespirit Power Patron (Deck)
13. Activate Junoldo the Shadespirit Power Patron (M5): Special Summon 1 "Junora the Power Patron of Tuning" from your Extra Deck
14. Selected Junora the Power Patron of Tuning (Extra Deck)
15. Yes
16. Selected Nervedo the Shadebeast Power Patron (Extra Deck)
17. Link Summon Purification Power Patron (Extra Deck)
18. select Medius the Pure (M4)
19. select Junora the Power Patron of Tuning (EMZ-R)
20. Yes
21. Selected Theorealize Medius (Deck)
22. Activate Theorealize Medius (hand): If a "Power Patron" card is on the field: You can Special Summon this card from your hand, then you can add 1 "Theorealize" Spell/Trap from your Deck to your hand
23. Yes
24. Selected Theorealize Past Lull (Deck)
25. Special Summon (procedure) Artmage Non-Finito (Extra Deck)
26. Selected Theorealize Past Lull (hand)
27. Selected Nervedo the Shadebeast Power Patron (hand)
28. Yes
29. Activate Purification Power Patron (EMZ-L): Link Summon including this card as material
30. Selected Medicurius the Power Patron of Illusions (Extra Deck)
31. select Artmage Non-Finito (M1)
32. Finish selection
33. Selected Artmage Impasto -Recapture- (Deck)
34. Activate Theorealize Past Lull (GY): Special Summon 1 Fusion, Synchro, or Xyz Monster from your GY
35. Selected Junora the Power Patron of Tuning (GY)
36. Activate Medius the Pure (GY): Shuffle 1 monster from your hand or face-up field into the Deck, and if you do, Special Summon this card
37. Selected Ash Blossom & Joyous Spring (hand)
38. Link Summon S:P Little Knight (Extra Deck)
39. select Medius the Pure (M5)
40. select Junora the Power Patron of Tuning (M4)
41. Yes
42. Special Summon 1 "Diactorus" monster
43. Selected Artmage Diactorus (Extra Deck)

End board:  LP 8000 | Hand 3 | Deck 33 | Extra 9 | GY 4 | Banished 9   Monsters: M3: Nerva the Power Patron of Creation Lv10 3300/3300 ATK || M4: S:P Little Knight L2←→ 1600  || M5: Artmage Diactorus Lv8 2800/2500 ATK || EMZ-R: Medicurius the Power Patron of Illusions L3↙↓↘ 3000    Spell/Trap: S1: Ars Magna - "Citrinitas" || S2: Artmage Impasto -Recapture- (Set)   GY: Nervedo the Shadebeast Power Patron, Artmage Non-Finito, Purification Power Patron, Junora the Power Patron of Tuning   Banished: Theorealize Medius (face-down), Ars Magna - "Citrinitas" (face-down), Mind Shuffle (face-down), Skull Archfiend of Chaos (face-down), Small World (face-down), Vidolium the Unstable Power Patron of Unity (face-d

## Order 7: best 12.1 [margin 2.84: ss_panama null, elfnote 0, despia -1.07, angelechy 8.18] (, worst 12.1) — from search
Others: forced Activate Griffoh 12.1 · forced Special Summon (procedure) Dark Magician of Destruction 12.1 · forced Activate Artmage Graflare 12.1 · forced Synchro Summon Chaos Angel 12.1 · forced Activate Light and Darkness Ritual: Ritual Summon 12.1 · forced Activate Mind Shuffle 12.1 · forced Activate Fiendsmith's Sequence 12 · opening lanes 12 · forced Activate Theorealize Liberation 10.75 · tries Activate Artmage Diactorus 8.85 · tries Activate Artmage Vandalism -Assault- 7.28 · tries Activate Artmage Vandalism -Assault- 7.28 · tries Activate Plundered Power Patron Plane - Vidolia 7.13 · forced Link Summon S:P Little Knight 4.6 · forced Activate Theorealize Past Lull 4.6 · tries Activate Ars Magna of Infinity and Finity 3.55 · tries Activate Ars Magna of Infinity and Finity 3.55

1. Set Spell/Trap Ars Magna - "Citrinitas"
2. Activate Ars Magna - "Citrinitas" (S1): activate this card
3. Activate Ars Magna - "Citrinitas" (S1): Add 1 "Medius" or "Ars Magna" monster from your Deck to your hand
4. Selected Medius the Pure (Deck)
5. Normal Summon Medius the Pure (hand)
6. Yes
7. Selected Nervedo the Shadebeast Power Patron (Deck)
8. Special Summon it
9. Activate Nervedo the Shadebeast Power Patron (M4): Special Summon 1 "Nerva the Power Patron of Creation" from your Extra Deck
10. Selected Nerva the Power Patron of Creation (Extra Deck)
11. Yes
12. Selected Junoldo the Shadespirit Power Patron (Deck)
13. Activate Junoldo the Shadespirit Power Patron (M4): Special Summon 1 "Junora the Power Patron of Tuning" from your Extra Deck
14. Selected Junora the Power Patron of Tuning (Extra Deck)
15. Yes
16. Selected Nervedo the Shadebeast Power Patron (Extra Deck)
17. Link Summon Purification Power Patron (Extra Deck)
18. select Medius the Pure (M3)
19. select Junora the Power Patron of Tuning (M2)
20. Yes
21. Selected Theorealize Medius (Deck)
22. Activate Medius the Pure (GY): Shuffle 1 monster from your hand or face-up field into the Deck, and if you do, Special Summon this card
23. Selected Ash Blossom & Joyous Spring (hand)
24. Activate Theorealize Medius (hand): If a "Power Patron" card is on the field: You can Special Summon this card from your hand, then you can add 1 "Theorealize" Spell/Trap from your Deck to your hand
25. Yes
26. Selected Theorealize Past Lull (Deck)
27. Special Summon (procedure) Artmage Non-Finito (Extra Deck)
28. Selected Theorealize Past Lull (hand)
29. Selected Nervedo the Shadebeast Power Patron (hand)
30. Yes
31. Activate Purification Power Patron (EMZ-R): Link Summon including this card as material
32. Selected Medicurius the Power Patron of Illusions (Extra Deck)
33. select Medius the Pure (M4)
34. Finish selection
35. Selected Artmage Impasto -Recapture- (Deck)
36. Yes
37. Special Summon 1 "Diactorus" monster
38. Selected Artmage Diactorus (Extra Deck)
39. Activate Theorealize Past Lull (GY): Special Summon 1 Fusion, Synchro, or Xyz Monster from your GY
40. Selected Junora the Power Patron of Tuning (GY)
41. Link Summon S:P Little Knight (Extra Deck)
42. select Artmage Non-Finito (M5)
43. select Junora the Power Patron of Tuning (M3)
44. Yes
45. Selected Artmage Non-Finito (GY)

End board:  LP 8000 | Hand 3 | Deck 33 | Extra 9 | GY 3 | Banished 10   Monsters: M1: Nerva the Power Patron of Creation Lv10 3300/3300 ATK || M2: Artmage Diactorus Lv8 2800/2500 DEF || M3: S:P Little Knight L2←→ 1600  || EMZ-L: Medicurius the Power Patron of Illusions L3↙↓↘ 3000    Spell/Trap: S1: Ars Magna - "Citrinitas" || S2: Artmage Impasto -Recapture- (Set)   GY: Nervedo the Shadebeast Power Patron, Purification Power Patron, Junora the Power Patron of Tuning   Banished: Theorealize Medius (face-down), Ars Magna - "Citrinitas" (face-down), Griffoh (face-down), Pendulum Treasure (face-down), Lacrima the Crimson Tears (face-down), Vidolium the Unstable Power Patron of Unity (face-down), Medius the 

## Order 8: best 12.1 [margin 1.91: ss_panama -1.3, elfnote null, despia -2.52, angelechy 7.95] (, worst 12.1) — from search
Others: opening lanes 12.1 · forced Activate Fiendsmith's Sequence 12.1 · forced Activate Light and Darkness Ritual: Ritual Summon 12.1 · forced Activate Mind Shuffle 12.1 · forced Activate Artmage Graflare 12.1 · forced Special Summon (procedure) Dark Magician of Destruction 12.1 · forced Synchro Summon Chaos Angel 12.1 · tries Activate Theorealize Past Lull 11.25 · forced Activate Griffoh 11.25 · tries Activate Theorealize Liberation 10.95 · forced Activate Theorealize Liberation 10.75 · tries Activate Theorealize Liberation 10.75 · forced Activate Theorealize Past Lull 10.57 · tries Activate Artmage Vandalism -Assault- 9.93 · forced Link Summon S:P Little Knight 4.6 · tries Activate Ars Magna of Purification and Corruption 3.55 · tries Activate Prohibited Power Patron Portal - Terminus 3.55

1. Set Spell/Trap Ars Magna - "Citrinitas"
2. Activate Ars Magna - "Citrinitas" (S1): activate this card
3. Activate Ars Magna - "Citrinitas" (S1): Add 1 "Medius" or "Ars Magna" monster from your Deck to your hand
4. Selected Medius the Pure (Deck)
5. Normal Summon Medius the Pure (hand)
6. Yes
7. Selected Nervedo the Shadebeast Power Patron (Deck)
8. Special Summon it
9. Activate Nervedo the Shadebeast Power Patron (M3): Special Summon 1 "Nerva the Power Patron of Creation" from your Extra Deck
10. Selected Nerva the Power Patron of Creation (Extra Deck)
11. Yes
12. Selected Junoldo the Shadespirit Power Patron (Deck)
13. Activate Junoldo the Shadespirit Power Patron (M1): Special Summon 1 "Junora the Power Patron of Tuning" from your Extra Deck
14. Selected Junora the Power Patron of Tuning (Extra Deck)
15. Yes
16. Selected Nervedo the Shadebeast Power Patron (Extra Deck)
17. Link Summon Purification Power Patron (Extra Deck)
18. select Medius the Pure (M4)
19. select Junora the Power Patron of Tuning (EMZ-R)
20. Yes
21. Selected Theorealize Medius (Deck)
22. Activate Medius the Pure (GY): Shuffle 1 monster from your hand or face-up field into the Deck, and if you do, Special Summon this card
23. Selected Ash Blossom & Joyous Spring (hand)
24. Activate Theorealize Medius (hand): If a "Power Patron" card is on the field: You can Special Summon this card from your hand, then you can add 1 "Theorealize" Spell/Trap from your Deck to your hand
25. Yes
26. Selected Theorealize Past Lull (Deck)
27. Special Summon (procedure) Artmage Non-Finito (Extra Deck)
28. Selected Theorealize Past Lull (hand)
29. Selected Nervedo the Shadebeast Power Patron (hand)
30. Yes
31. Selected Artmage Impasto -Recapture- (Deck)
32. Activate Purification Power Patron (EMZ-R): Link Summon including this card as material
33. Selected Medicurius the Power Patron of Illusions (Extra Deck)
34. select Medius the Pure (M4)
35. Finish selection
36. Yes
37. Special Summon 1 "Diactorus" monster
38. Selected Artmage Diactorus (Extra Deck)
39. Activate Theorealize Past Lull (GY): Special Summon 1 Fusion, Synchro, or Xyz Monster from your GY
40. Selected Junora the Power Patron of Tuning (GY)
41. Link Summon S:P Little Knight (Extra Deck)
42. select Junora the Power Patron of Tuning (M4)
43. select Artmage Non-Finito (M1)
44. Yes
45. Selected Purification Power Patron (GY)

End board:  LP 8000 | Hand 3 | Deck 33 | Extra 9 | GY 3 | Banished 10   Monsters: M3: Artmage Diactorus Lv8 2800/2500 DEF || M4: S:P Little Knight L2←→ 1600  || M5: Nerva the Power Patron of Creation Lv10 3300/3300 ATK || EMZ-R: Medicurius the Power Patron of Illusions L3↙↓↘ 3000    Spell/Trap: S1: Ars Magna - "Citrinitas" || S2: Artmage Impasto -Recapture- (Set)   GY: Nervedo the Shadebeast Power Patron, Artmage Non-Finito, Junora the Power Patron of Tuning   Banished: Fiendsmith Engraver (face-down), Skull Archfiend of Chaos (face-down), Artmage Vandalism -Assault- (face-down), Mind Shuffle (face-down), Artmage Graflare (face-down), Pendulum Treasure (face-down), Medius the Pure, Theorealize Medius, 

