# Evolved lines — Pendulum Treasure, Ash Blossom & Joyous Spring, Ash Blossom & Joyous Spring, Droll & Lock Bird, Ghost Ogre & Snow Rabbit (findlist-1100)
2026-11-25T06:48:17.198Z

8 deck orders (different face-down banishes / draws), 3 opponent hands x o_ss_panama + o_elfnote + o_despia + o_angelechy per line, 1 min searches, 3 mutation rounds.
Fitness = average margin after their turn (what you keep minus what they build; −10 more if they OTK). Higher is better.

**Best line per deck order: average 4.11** (worst order 2.56). Winner came from: opening lanes → new early order 3, search → new ending 1, opening lanes 1, search → new early order 1, tries Normal Summon Theorealize Medius → new ending → new early order 1, tries Special Summon (procedure) Vidolium the Unstable Power Patron of Unity → new ending 1

| seed line | works as written | its score when it works | seed start + search finish (all orders) |
|---|---|---|---|
| tre1 | 6/8 | 1.34 | 1.78 |

## Weak points found automatically
Cards whose face-down banish (by your own costs) hurt the best line most (average best line without vs with that card banished):

| card | orders where it was banished | drop |
|---|---|---|
| Nervedo the Shadebeast Power Patron | 4/8 | 1.17 |
| Artmage Graflare | 2/8 | 0.91 |
| Plundered Power Patron Plane - Vidolia | 2/8 | 0.7 |
| Mind Shuffle | 3/8 | 0.58 |
| Apprentice Illusion Magician | 3/8 | 0.58 |
| Small World | 6/8 | 0.45 |
| Pendulum Treasure | 4/8 | 0.35 |
| Griffoh | 3/8 | 0.31 |
| Fiendsmith's Tract | 5/8 | 0.19 |
| Medius the Pure | 5/8 | 0.06 |

Where the hand-designed lines broke (next step that no longer worked):
- tre1: Junoldo (1x)
- tre1: Impasto (1x)

List changes proposed for the list test (data/proposals-findlist-1100.json):
- +1 Artmage Graflare, −1 Plundered Power Patron Plane - Vidolia — Artmage Graflare: best line 0.91 worse when a cost banished it (2 of 8 orders) — Pendulum Treasure
- +1 Plundered Power Patron Plane - Vidolia, −1 Small World — Plundered Power Patron Plane - Vidolia: best line 0.7 worse when a cost banished it (2 of 8 orders) — Pendulum Treasure
- +1 Mind Shuffle, −1 Small World — Mind Shuffle: best line 0.58 worse when a cost banished it (3 of 8 orders) — Pendulum Treasure
- +1 Apprentice Illusion Magician, −1 Plundered Power Patron Plane - Vidolia — Apprentice Illusion Magician: best line 0.58 worse when a cost banished it (3 of 8 orders) — Pendulum Treasure
- +1 Artmage Graflare — Artmage Graflare: best line 0.91 worse when a cost banished it (2 of 8 orders) — Pendulum Treasure (add only: deck grows, up to 60)
- +1 Plundered Power Patron Plane - Vidolia — Plundered Power Patron Plane - Vidolia: best line 0.7 worse when a cost banished it (2 of 8 orders) — Pendulum Treasure (add only: deck grows, up to 60)
- +1 Mind Shuffle — Mind Shuffle: best line 0.58 worse when a cost banished it (3 of 8 orders) — Pendulum Treasure (add only: deck grows, up to 60)
- +1 Apprentice Illusion Magician — Apprentice Illusion Magician: best line 0.58 worse when a cost banished it (3 of 8 orders) — Pendulum Treasure (add only: deck grows, up to 60)

Effects the search had not used, tried on purpose (best result so far):
- Activate Griffoh: 4.67
- Activate Nervedo the Shadebeast Power Patron: 4.18
- Activate Artmage Diactorus: 3.37
- Activate Junoldo the Shadespirit Power Patron: 2.95
- Normal Summon Theorealize Medius: 2.79
- Activate Artmage Vandalism -Assault-: 2.73
- Special Summon (procedure) Nervedo the Shadebeast Power Patron: 2.46
- Activate Vidolium the Unstable Power Patron of Unity: 2.37

## Order 1: best 6.1 (ss_panama 8.25, elfnote 3.71, despia 4.4, angelechy 8.1, worst 0.55) — from opening lanes → new early order
Others: opening lanes 2.52 · tries Activate Artmage Diactorus 2.31 · tries Activate Ars Magna of Purification and Corruption 2.24 · opening lanes → new early order → new ending 1.82 · tre1 1.74 · tre1 1.59 · search 0.74 · opening lanes → new ending -1.45

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
14. Activate Nervedo the Shadebeast Power Patron (M2): Special Summon 1 "Nerva the Power Patron of Creation" from your Extra Deck
15. Selected Nerva the Power Patron of Creation (Extra Deck)
16. Yes
17. Selected Junoldo the Shadespirit Power Patron (Deck)
18. Activate Junoldo the Shadespirit Power Patron (M3): Special Summon 1 "Junora the Power Patron of Tuning" from your Extra Deck
19. Selected Junora the Power Patron of Tuning (Extra Deck)
20. Yes
21. Selected Nervedo the Shadebeast Power Patron (Extra Deck)
22. Link Summon Purification Power Patron (Extra Deck)
23. select Medius the Pure (M1)
24. select Junora the Power Patron of Tuning (M3)
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
36. Activate Purification Power Patron (EMZ-R): Link Summon including this card as material
37. Selected Medicurius the Power Patron of Illusions (Extra Deck)
38. select Medius the Pure (M4)
39. Finish selection
40. Selected Artmage Impasto -Recapture- (Deck)
41. Yes
42. Special Summon 1 "Diactorus" monster
43. Selected Artmage Diactorus (Extra Deck)
44. Activate Artmage Diactorus (M3): Change the battle position of 1 monster on the field
45. Selected Artmage Non-Finito (M5)
46. Activate Theorealize Past Lull (GY): Special Summon 1 Fusion, Synchro, or Xyz Monster from your GY
47. Selected Junora the Power Patron of Tuning (GY)
48. Link Summon S:P Little Knight (Extra Deck)
49. select Artmage Non-Finito (M5)
50. select Junora the Power Patron of Tuning (M1)
51. No

End board:  LP 8000 | Hand 3 | Deck 31 | Extra 9 | GY 7 | Banished 9   Monsters: M1: S:P Little Knight L2←→ 1600  || M2: Nerva the Power Patron of Creation Lv10 3300/3300 ATK || M3: Artmage Diactorus Lv8 2800/2500 ATK || EMZ-L: Medicurius the Power Patron of Illusions L3↙↓↘ 3000    Spell/Trap: S1: Artmage Impasto -Recapture- (Set)   GY: Pendulum Treasure, Purification Power Patron, Prohibited Power Patron Portal - Terminus, Nervedo the Shadebeast Power Patron, Purification Power Patron, Junora the Power Patron of Tuning, Artmage Non-Finito   Banished: Artmage Vandalism -Assault- (face-down), Artmage Finmel (face-down), Black Luster Soldier - Soldier of Light and Darkness (face-down), Dark Magical Circl

## Order 2: best 4.38 (ss_panama 2.5, elfnote -0.3, despia 2.17, angelechy 8.05, worst -1.55) — from search → new ending
Others: search 2.52 · tries Activate Theorealize Liberation 2.22 · search → new early order 2.03 · opening lanes 1.89 · tre1 1.81 · tre1 1.21 · search → new ending 0.89 · tries Activate Artmage Vandalism -Assault- -0.2

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
12. Selected Nervedo the Shadebeast Power Patron (Deck)
13. Special Summon it
14. Activate Nervedo the Shadebeast Power Patron (M1): Special Summon 1 "Nerva the Power Patron of Creation" from your Extra Deck
15. Selected Nerva the Power Patron of Creation (Extra Deck)
16. Yes
17. Selected Junoldo the Shadespirit Power Patron (Deck)
18. Activate Junoldo the Shadespirit Power Patron (M5): Special Summon 1 "Junora the Power Patron of Tuning" from your Extra Deck
19. Selected Junora the Power Patron of Tuning (Extra Deck)
20. Yes
21. Selected Nervedo the Shadebeast Power Patron (Extra Deck)
22. Link Summon Purification Power Patron (Extra Deck)
23. select Medius the Pure (M4)
24. select Junora the Power Patron of Tuning (M1)
25. Yes
26. Selected Theorealize Medius (Deck)
27. Activate Theorealize Medius (hand): If a "Power Patron" card is on the field: You can Special Summon this card from your hand, then you can add 1 "Theorealize" Spell/Trap from your Deck to your hand
28. Yes
29. Selected Theorealize Past Lull (Deck)
30. Special Summon (procedure) Artmage Non-Finito (Extra Deck)
31. Selected Theorealize Past Lull (hand)
32. Selected Nervedo the Shadebeast Power Patron (hand)
33. Yes
34. Activate Purification Power Patron (EMZ-R): Link Summon including this card as material
35. Selected Medicurius the Power Patron of Illusions (Extra Deck)
36. select Artmage Non-Finito (M5)
37. Finish selection
38. Selected Artmage Impasto -Recapture- (Deck)
39. Activate Theorealize Past Lull (GY): Special Summon 1 Fusion, Synchro, or Xyz Monster from your GY
40. Selected Junora the Power Patron of Tuning (GY)
41. Activate Medius the Pure (GY): Shuffle 1 monster from your hand or face-up field into the Deck, and if you do, Special Summon this card
42. Selected Ash Blossom & Joyous Spring (hand)
43. Link Summon S:P Little Knight (Extra Deck)
44. select Medius the Pure (M4)
45. select Junora the Power Patron of Tuning (M2)
46. Yes
47. Special Summon 1 "Diactorus" monster
48. Selected Artmage Diactorus (Extra Deck)

End board:  LP 8000 | Hand 3 | Deck 30 | Extra 10 | GY 7 | Banished 9   Monsters: M1: Artmage Diactorus Lv8 2800/2500 ATK || M2: S:P Little Knight L2←→ 1600  || M3: Nerva the Power Patron of Creation Lv10 3300/3300 ATK || EMZ-L: Medicurius the Power Patron of Illusions L3↙↓↘ 3000    Spell/Trap: S1: Artmage Impasto -Recapture- (Set)   GY: Pendulum Treasure, Vidolium the Unstable Power Patron of Unity, Prohibited Power Patron Portal - Terminus, Nervedo the Shadebeast Power Patron, Artmage Non-Finito, Purification Power Patron, Junora the Power Patron of Tuning   Banished: Mind Shuffle (face-down), Fiendsmith's Tract (face-down), Theorealize Medius (face-down), Infinite Impermanence (face-down), Small Wor

## Order 3: best 2.56 (ss_panama 4.25, elfnote 0.66, despia -1.68, angelechy 7, worst -3.2) — from opening lanes → new early order
Others: opening lanes 2.25 · opening lanes → new early order → new ending 2.04 · opening lanes → new ending 1.9 · tre1 1.4 · tre1 0.99 · search 0.56 · tries Activate Vidolium the Unstable Power Patron of Unity -0.33 · tries Activate Artmage Vandalism -Assault- -1.5

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
12. Selected Nervedo the Shadebeast Power Patron (Deck)
13. Special Summon it
14. Activate Nervedo the Shadebeast Power Patron (M4): Special Summon 1 "Nerva the Power Patron of Creation" from your Extra Deck
15. Selected Nerva the Power Patron of Creation (Extra Deck)
16. Yes
17. Selected Junoldo the Shadespirit Power Patron (Deck)
18. Activate Junoldo the Shadespirit Power Patron (M2): Special Summon 1 "Junora the Power Patron of Tuning" from your Extra Deck
19. Selected Junora the Power Patron of Tuning (Extra Deck)
20. Yes
21. Selected Nervedo the Shadebeast Power Patron (Extra Deck)
22. Link Summon Purification Power Patron (Extra Deck)
23. select Junora the Power Patron of Tuning (EMZ-R)
24. select Nerva the Power Patron of Creation (M3)
25. Yes
26. Selected Theorealize Medius (Deck)
27. Activate Theorealize Medius (hand): If a "Power Patron" card is on the field: You can Special Summon this card from your hand, then you can add 1 "Theorealize" Spell/Trap from your Deck to your hand
28. Activate Purification Power Patron (EMZ-L): Link Summon including this card as material
29. Selected S:P Little Knight (Extra Deck)
30. select Medius the Pure (M1)
31. Yes
32. Selected Theorealize Past Lull (Deck)
33. No
34. Special Summon (procedure) Artmage Non-Finito (Extra Deck)
35. Selected Theorealize Past Lull (hand)
36. Selected Nervedo the Shadebeast Power Patron (hand)
37. Yes
38. Selected Artmage Impasto -Recapture- (Deck)
39. Activate Medius the Pure (GY): Shuffle 1 monster from your hand or face-up field into the Deck, and if you do, Special Summon this card
40. Selected Ash Blossom & Joyous Spring (hand)
41. Link Summon Medicurius the Power Patron of Illusions (Extra Deck)
42. select S:P Little Knight (EMZ-L)
43. select Medius the Pure (M4)
44. Finish selection
45. Yes
46. Special Summon 1 "Diactorus" monster
47. Selected Artmage Diactorus (Extra Deck)
48. Activate Theorealize Past Lull (GY): Special Summon 1 Fusion, Synchro, or Xyz Monster from your GY
49. Selected Junora the Power Patron of Tuning (GY)

End board:  LP 8000 | Hand 3 | Deck 30 | Extra 10 | GY 7 | Banished 9   Monsters: M1: Artmage Non-Finito Lv7 2400/1500 ATK || M2: Junora the Power Patron of Tuning Lv10 3100/3800 ATK || M3: Artmage Diactorus Lv8 2800/2500 ATK || EMZ-L: Medicurius the Power Patron of Illusions L3↙↓↘ 3000    Spell/Trap: S1: Artmage Impasto -Recapture- (Set)   GY: Pendulum Treasure, Vidolium the Unstable Power Patron of Unity, Prohibited Power Patron Portal - Terminus, Nerva the Power Patron of Creation, Purification Power Patron, Nervedo the Shadebeast Power Patron, S:P Little Knight   Banished: Fiendsmith's Tract (face-down), Fiendsmith's Tract (face-down), Small World (face-down), Artmage Finmel (face-down), Nervedo th

## Order 4: best 3.79 (ss_panama 3, elfnote 1.98, despia 3.38, angelechy 7, worst 0) — from opening lanes
Others: tries Activate Junoldo the Shadespirit Power Patron 2.95 · tries Normal Summon Nervedo the Shadebeast Power Patron 2.31 · tre1 2.19 · tre1 1.91 · search 0.01

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
13. Selected Nervedo the Shadebeast Power Patron (Deck)
14. Special Summon it
15. Activate Nervedo the Shadebeast Power Patron (M1): Special Summon 1 "Nerva the Power Patron of Creation" from your Extra Deck
16. Selected Nerva the Power Patron of Creation (Extra Deck)
17. Yes
18. Selected Junoldo the Shadespirit Power Patron (Deck)
19. Activate Junoldo the Shadespirit Power Patron (M5): Special Summon 1 "Junora the Power Patron of Tuning" from your Extra Deck
20. Selected Junora the Power Patron of Tuning (Extra Deck)
21. Yes
22. Selected Nervedo the Shadebeast Power Patron (GY)
23. Link Summon Purification Power Patron (Extra Deck)
24. select Medius the Pure (M3)
25. select Junora the Power Patron of Tuning (EMZ-R)
26. Yes
27. Selected Theorealize Medius (Deck)
28. Activate Theorealize Medius (hand): If a "Power Patron" card is on the field: You can Special Summon this card from your hand, then you can add 1 "Theorealize" Spell/Trap from your Deck to your hand
29. Yes
30. Selected Theorealize Past Lull (Deck)
31. Activate Purification Power Patron (EMZ-R): Link Summon including this card as material
32. Selected S:P Little Knight (Extra Deck)
33. select Nerva the Power Patron of Creation (M4)
34. Yes
35. Selected Purification Power Patron (GY)
36. Yes
37. Special Summon 1 "Diactorus" monster
38. Selected Artmage Diactorus (Extra Deck)
39. Special Summon (procedure) Artmage Non-Finito (Extra Deck)
40. Selected Theorealize Past Lull (hand)
41. Selected Nervedo the Shadebeast Power Patron (hand)
42. Yes
43. Selected Artmage Impasto -Recapture- (Deck)
44. Activate Medius the Pure (GY): Shuffle 1 monster from your hand or face-up field into the Deck, and if you do, Special Summon this card
45. Selected Ash Blossom & Joyous Spring (hand)
46. Link Summon Medicurius the Power Patron of Illusions (Extra Deck)
47. select Medius the Pure (M2)
48. select S:P Little Knight (EMZ-R)
49. Finish selection
50. Activate Theorealize Past Lull (GY): Special Summon 1 Fusion, Synchro, or Xyz Monster from your GY
51. Selected Junora the Power Patron of Tuning (GY)

End board:  LP 8000 | Hand 3 | Deck 30 | Extra 11 | GY 5 | Banished 10   Monsters: M1: Artmage Non-Finito Lv7 2400/1500 ATK || M2: Junora the Power Patron of Tuning Lv10 3100/3800 ATK || M3: Artmage Diactorus Lv8 2800/2500 DEF || EMZ-L: Medicurius the Power Patron of Illusions L3↙↓↘ 3000    Spell/Trap: S1: Artmage Impasto -Recapture- (Set)   GY: Pendulum Treasure, Prohibited Power Patron Portal - Terminus, Nerva the Power Patron of Creation, Nervedo the Shadebeast Power Patron, S:P Little Knight   Banished: Black Chaos (face-down), Artmage Finmel (face-down), Lacrima the Crimson Tears (face-down), Artmage Vandalism -Assault- (face-down), Artmage Vandalism -Assault- (face-down), Small World (face-down),

## Order 5: best 4.59 (ss_panama null, elfnote 8.35, despia -0.25, angelechy 8.18, worst -0.8) — from search → new early order
Others: search 2.98 · search → new ending 2.56 · tries Special Summon (procedure) Nervedo the Shadebeast Power Patron 2.46 · search → new early order → new ending 2.22 · tre1 1.97 · opening lanes 1.86 · tre1 1.07 · tries Activate Theorealize Past Lull -1.06

1. Activate Pendulum Treasure (hand): Add to Extra Deck
2. Selected Vidolium the Unstable Power Patron of Unity (Deck)
3. Yes
4. Selected Prohibited Power Patron Portal - Terminus (Deck)
5. Set Spell/Trap Prohibited Power Patron Portal - Terminus
6. Activate Prohibited Power Patron Portal - Terminus (S1): Send 1 "Power Patron" monster from your Deck or Extra Deck to the GY, then you can add 1 DARK Fairy monster from your Deck to your hand
7. Selected Vidolium the Unstable Power Patron of Unity (Deck)
8. Yes
9. Selected Medius the Pure (Deck)
10. Normal Summon Medius the Pure (hand)
11. Yes
12. Selected Nervedo the Shadebeast Power Patron (Deck)
13. Special Summon it
14. Activate Nervedo the Shadebeast Power Patron (M2): Special Summon 1 "Nerva the Power Patron of Creation" from your Extra Deck
15. Selected Nerva the Power Patron of Creation (Extra Deck)
16. Yes
17. Selected Junoldo the Shadespirit Power Patron (Deck)
18. Activate Junoldo the Shadespirit Power Patron (M3): Special Summon 1 "Junora the Power Patron of Tuning" from your Extra Deck
19. Selected Junora the Power Patron of Tuning (Extra Deck)
20. Yes
21. Selected Nervedo the Shadebeast Power Patron (Extra Deck)
22. Link Summon Purification Power Patron (Extra Deck)
23. select Medius the Pure (M1)
24. select Junora the Power Patron of Tuning (EMZ-L)
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
38. select Medius the Pure (M3)
39. Finish selection
40. Selected Artmage Impasto -Recapture- (Deck)
41. Yes
42. Special Summon 1 "Diactorus" monster
43. Selected Artmage Diactorus (Extra Deck)
44. Activate Theorealize Past Lull (GY): Special Summon 1 Fusion, Synchro, or Xyz Monster from your GY
45. Selected Junora the Power Patron of Tuning (GY)

End board:  LP 8000 | Hand 3 | Deck 30 | Extra 11 | GY 5 | Banished 9   Monsters: M2: Nerva the Power Patron of Creation Lv10 3300/3300 ATK || M3: Artmage Diactorus Lv8 2800/2500 ATK || M4: Artmage Non-Finito Lv7 2400/1500 ATK || M5: Junora the Power Patron of Tuning Lv10 3100/3800 ATK || EMZ-R: Medicurius the Power Patron of Illusions L3↙↓↘ 3000    Spell/Trap: S1: Artmage Impasto -Recapture- (Set)   GY: Pendulum Treasure, Vidolium the Unstable Power Patron of Unity, Prohibited Power Patron Portal - Terminus, Nervedo the Shadebeast Power Patron, Purification Power Patron   Banished: Light and Darkness Ritual (face-down), Artmage Vandalism -Assault- (face-down), Black Chaos (face-down), Medius the Pure 

## Order 6: best 4.31 (ss_panama 4.12, elfnote 3.48, despia 0.4, angelechy 7.95, worst -0.8) — from tries Normal Summon Theorealize Medius → new ending → new early order
Others: tries Normal Summon Theorealize Medius → new ending 4.23 · tries Normal Summon Theorealize Medius → new ending → new early order → new ending 3.79 · tries Normal Summon Theorealize Medius 2.79 · tre1 2.46 · tries Activate Vidolium the Unstable Power Patron of Unity 1.88 · opening lanes 1.4 · tre1 1.28 · search 0.26

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
14. Activate Junoldo the Shadespirit Power Patron (M4): Special Summon 1 "Junora the Power Patron of Tuning" from your Extra Deck
15. Selected Junora the Power Patron of Tuning (Extra Deck)
16. Yes
17. Selected Theorealize Medius (GY)
18. Activate Theorealize Medius (hand): If a "Power Patron" card is on the field: You can Special Summon this card from your hand, then you can add 1 "Theorealize" Spell/Trap from your Deck to your hand
19. Yes
20. Selected Theorealize Liberation (Deck)
21. Activate Theorealize Liberation (hand): Add to your hand, or Special Summon, 1 monster from your Deck with 300 ATK/200 DEF
22. Selected Nervedo the Shadebeast Power Patron (Deck)
23. Special Summon it
24. Activate Nervedo the Shadebeast Power Patron (M2): Special Summon 1 "Nerva the Power Patron of Creation" from your Extra Deck
25. Selected Nerva the Power Patron of Creation (Extra Deck)
26. Yes
27. Selected Artmage Finmel (Deck)
28. Link Summon Purification Power Patron (Extra Deck)
29. select Medius the Pure (M3)
30. select Junora the Power Patron of Tuning (EMZ-R)
31. Yes
32. Selected Theorealize Past Lull (Deck)
33. Special Summon (procedure) Artmage Non-Finito (Extra Deck)
34. Selected Theorealize Past Lull (hand)
35. Selected Artmage Finmel (M5)
36. Yes
37. Selected Artmage Impasto -Recapture- (Deck)
38. Activate Medius the Pure (GY): Shuffle 1 monster from your hand or face-up field into the Deck, and if you do, Special Summon this card
39. Selected Ash Blossom & Joyous Spring (hand)
40. Activate Theorealize Liberation (GY): Treat 1 monster you control as a Tuner this turn
41. Selected Nerva the Power Patron of Creation (M4)
42. Activate Purification Power Patron (EMZ-R): Link Summon including this card as material
43. Selected Medicurius the Power Patron of Illusions (Extra Deck)
44. select Medius the Pure (M5)
45. Finish selection
46. Yes
47. Special Summon 1 "Diactorus" monster
48. Selected Artmage Diactorus (Extra Deck)
49. Activate Theorealize Past Lull (GY): Special Summon 1 Fusion, Synchro, or Xyz Monster from your GY
50. Selected Junora the Power Patron of Tuning (GY)

End board:  LP 8000 | Hand 3 | Deck 29 | Extra 12 | GY 4 | Banished 10   Monsters: M1: Artmage Diactorus Lv8 2800/2500 ATK || M2: Artmage Non-Finito Lv7 2400/1500 ATK || M3: Junora the Power Patron of Tuning Lv10 3100/3800 ATK || M4: Nerva the Power Patron of Creation Lv10 3300/3300 ATK || EMZ-L: Medicurius the Power Patron of Illusions L3↙↓↘ 3000    Spell/Trap: S1: Artmage Impasto -Recapture- (Set)   GY: Pendulum Treasure, Prohibited Power Patron Portal - Terminus, Artmage Finmel, Purification Power Patron   Banished: Pendulum Treasure (face-down), Artmage Finmel (face-down), Theorealize Medius (face-down), Medius the Pure (face-down), Ars Magna - "Citrinitas" (face-down), Small World (face-down), The

## Order 7: best 4.31 (ss_panama 5.84, elfnote 1.89, despia 0.68, angelechy 8.82, worst -0.15) — from tries Special Summon (procedure) Vidolium the Unstable Power Patron of Unity → new ending
Others: tries Special Summon (procedure) Vidolium the Unstable Power Patron of Unity → new ending → new ending 1.74 · tries Special Summon (procedure) Vidolium the Unstable Power Patron of Unity 1.44 · tries Special Summon (procedure) Vidolium the Unstable Power Patron of Unity → new ending → new early order 1.44 · tre1 0.44 · tries Activate Ars Magna - "Citrinitas" -0.03 · opening lanes -0.59 · search -0.84

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
11. Selected Vidolium the Unstable Power Patron of Unity (Deck)
12. Add the card(s) to your hand
13. Activate Vidolium the Unstable Power Patron of Unity (hand): Activate it as a Pendulum Spell
14. Activate Vidolium the Unstable Power Patron of Unity (S1): Activate 1 of these effects
15. Special Summon 1 "Power Patron" monster
16. Selected Nervedo the Shadebeast Power Patron (GY)
17. Activate Nervedo the Shadebeast Power Patron (M3): Special Summon 1 "Nerva the Power Patron of Creation" from your Extra Deck
18. Selected Nerva the Power Patron of Creation (Extra Deck)
19. Yes
20. Selected Artmage Finmel (Deck)
21. Link Summon Purification Power Patron (Extra Deck)
22. select Medius the Pure (M4)
23. select Nerva the Power Patron of Creation (M5)
24. Yes
25. Selected Theorealize Medius (Deck)
26. Activate Medius the Pure (GY): Shuffle 1 monster from your hand or face-up field into the Deck, and if you do, Special Summon this card
27. Selected Ash Blossom & Joyous Spring (hand)
28. Activate Theorealize Medius (hand): If a "Power Patron" card is on the field: You can Special Summon this card from your hand, then you can add 1 "Theorealize" Spell/Trap from your Deck to your hand
29. Yes
30. Selected Theorealize Liberation (Deck)
31. Activate Purification Power Patron (EMZ-R): Link Summon including this card as material
32. Activate Theorealize Liberation (hand): Add to your hand, or Special Summon, 1 monster from your Deck with 300 ATK/200 DEF
33. Selected Griffoh (Deck)
34. Add the card(s) to your hand
35. Selected S:P Little Knight (Extra Deck)
36. select Medius the Pure (M5)
37. Yes
38. Special Summon 1 "Diactorus" monster
39. Selected Artmage Diactorus (Extra Deck)
40. Activate Griffoh (hand): Activate 1 of these effects
41. Set 1 card that mentions "Light and Darkness Ritual"
42. Selected Mind Shuffle (Deck)
43. Activate Mind Shuffle (S1): activate this card
44. No
45. Activate Mind Shuffle (S1): Add 1 appropriate monster to your hand
46. Selected Skull Archfiend of Chaos (Deck)
47. Selected Skull Archfiend of Chaos (hand)
48. Yes
49. Selected Light and Darkness Ritual (Deck)
50. Selected Magician of Dark Chaos - Black Chaos (Deck)
51. Activate Light and Darkness Ritual (GY): Add both this card and 1 card that mentions "Light and Darkness Ritual" from your GY to your hand
52. Selected Skull Archfiend of Chaos (GY)
53. Activate Light and Darkness Ritual (hand): Ritual Summon 1 "Magician of Dark Chaos - Black Chaos" or "Black Luster Soldier - Soldier of Light and Darkness" from your hand
54. Selected Magician of Dark Chaos - Black Chaos (hand)
55. Selected Griffoh (GY) value 8 or 1
56. Yes
57. Selected Theorealize Liberation (GY)
58. Special Summon (procedure) Artmage Non-Finito (Extra Deck)
59. Selected Theorealize Liberation (hand)
60. Selected Artmage Finmel (M3)
61. Yes
62. Selected Artmage Impasto -Recapture- (Deck)
63. Activate Artmage Diactorus (M4): Change the battle position of 1 monster on the field
64. Selected Artmage Diactorus (M4)
65. Activate Skull Archfiend of Chaos (hand): Special Summon this card
66. select Medius the Pure (banishment)
67. select Artmage Finmel (GY)
68. select Light and Darkness Ritual (GY)
69. Default order
70. Link Summon Medicurius the Power Patron of Illusions (Extra Deck)
71. select S:P Little Knight (EMZ-R)
72. select Skull Archfiend of Chaos (M1)
73. Finish selection

End board:  LP 8000 | Hand 3 | Deck 31 | Extra 12 | GY 7 | Banished 5   Monsters: M3: Artmage Non-Finito Lv7 2400/1500 ATK || M4: Artmage Diactorus Lv8 2800/2500 DEF || M5: Magician of Dark Chaos - Black Chaos Lv8 2800/2600 ATK || EMZ-R: Medicurius the Power Patron of Illusions L3↙↓↘ 3000    Spell/Trap: S1: Mind Shuffle || S2: Artmage Impasto -Recapture- (Set)   GY: Pendulum Treasure, Prohibited Power Patron Portal - Terminus, Nerva the Power Patron of Creation, Purification Power Patron, Theorealize Liberation, Skull Archfiend of Chaos, S:P Little Knight   Banished: Infinite Impermanence (face-down), Theorealize Medius (face-down), Artmage Vandalism -Assault- (face-down), Theorealize Medius, Griffoh  

## Order 8: best 2.87 (ss_panama 3.54, elfnote 0.75, despia -1.82, angelechy 7.95, worst -2.9) — from opening lanes → new early order
Others: opening lanes 2.32 · tre1 2.25 · opening lanes → new early order → new ending 1.92 · opening lanes → new ending 1.68 · tries Activate Theorealize Liberation 1.19 · search 0.99 · tries Activate Ars Magna - "Citrinitas" 0.21

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
23. select Medius the Pure (M1)
24. select Junora the Power Patron of Tuning (EMZ-L)
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
36. Activate Purification Power Patron (EMZ-L): Link Summon including this card as material
37. Selected Medicurius the Power Patron of Illusions (Extra Deck)
38. select Medius the Pure (M3)
39. Finish selection
40. Selected Artmage Impasto -Recapture- (Deck)
41. Yes
42. Special Summon 1 "Diactorus" monster
43. Selected Artmage Diactorus (Extra Deck)
44. Activate Theorealize Past Lull (GY): Special Summon 1 Fusion, Synchro, or Xyz Monster from your GY
45. Selected Junora the Power Patron of Tuning (GY)
46. Link Summon S:P Little Knight (Extra Deck)
47. select Junora the Power Patron of Tuning (M3)
48. select Artmage Non-Finito (M4)
49. No

End board:  LP 8000 | Hand 3 | Deck 30 | Extra 10 | GY 7 | Banished 9   Monsters: M1: Artmage Diactorus Lv8 2800/2500 ATK || M2: Nerva the Power Patron of Creation Lv10 3300/3300 ATK || M3: S:P Little Knight L2←→ 1600  || EMZ-L: Medicurius the Power Patron of Illusions L3↙↓↘ 3000    Spell/Trap: S1: Artmage Impasto -Recapture- (Set)   GY: Pendulum Treasure, Theorealize Medius, Prohibited Power Patron Portal - Terminus, Nervedo the Shadebeast Power Patron, Purification Power Patron, Junora the Power Patron of Tuning, Artmage Non-Finito   Banished: Nervedo the Shadebeast Power Patron (face-down), Plundered Power Patron Plane - Vidolia (face-down), Dark Magical Circle (face-down), Griffoh (face-down), Fien

