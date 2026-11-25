# Evolved lines — Pendulum Treasure, Ash Blossom & Joyous Spring, Ash Blossom & Joyous Spring, Droll & Lock Bird, Ghost Ogre & Snow Rabbit (findlist-1100)
2026-11-25T07:13:34.999Z

8 deck orders (different face-down banishes / draws), 3 opponent hands x o_ss_panama + o_elfnote + o_despia + o_angelechy per line, 5 min searches, 4 mutation rounds.
Fitness = average margin after their turn (what you keep minus what they build; −10 more if they OTK). Higher is better.

**Best line per deck order: average 5.19** (worst order 3.25). Winner came from: search 3, tries Special Summon (procedure) Nervedo the Shadebeast Power Patron → new ending 1, tries Activate Ars Magna - "Citrinitas" → new early order 1, opening lanes → new ending → new early order 1, tre1 → new ending → new early order 1, tries Activate Light and Darkness Ritual 1

| seed line | works as written | its score when it works | seed start + search finish (all orders) |
|---|---|---|---|
| tre1 | 6/8 | 1.38 | 2.02 |

## Weak points found automatically
Cards whose face-down banish (by your own costs) hurt the best line most (average best line without vs with that card banished):

| card | orders where it was banished | drop |
|---|---|---|
| Griffoh | 2/8 | 1.99 |
| Black Chaos | 4/8 | 1.33 |
| Fiendsmith's Tract | 4/8 | 1.1 |
| Small World | 5/8 | 0.79 |
| Artmage Vandalism -Assault- | 3/8 | 0.52 |
| Skull Archfiend of Chaos | 3/8 | 0.47 |
| Pendulum Treasure | 6/8 | -0.34 |
| Medius the Pure | 5/8 | -0.39 |
| Artmage Finmel | 6/8 | -0.4 |
| Nervedo the Shadebeast Power Patron | 5/8 | -0.42 |

Where the hand-designed lines broke (next step that no longer worked):
- tre1: Junoldo (1x)
- tre1: Impasto (1x)

List changes proposed for the list test (data/proposals-findlist-1100.json):
- +1 Griffoh, −1 Plundered Power Patron Plane - Vidolia — Griffoh: best line 1.99 worse when a cost banished it (2 of 8 orders) — Pendulum Treasure
- +1 Black Chaos, −1 Artmage Vandalism -Assault- — Black Chaos: best line 1.33 worse when a cost banished it (4 of 8 orders) — Pendulum Treasure
- +1 Fiendsmith's Tract, −1 Small World — Fiendsmith's Tract: best line 1.1 worse when a cost banished it (4 of 8 orders) — Pendulum Treasure
- +1 Small World, −1 Artmage Vandalism -Assault- — Small World: best line 0.79 worse when a cost banished it (5 of 8 orders) — Pendulum Treasure
- +1 Griffoh — Griffoh: best line 1.99 worse when a cost banished it (2 of 8 orders) — Pendulum Treasure (add only: deck grows, up to 60)
- +1 Black Chaos — Black Chaos: best line 1.33 worse when a cost banished it (4 of 8 orders) — Pendulum Treasure (add only: deck grows, up to 60)
- +1 Fiendsmith's Tract — Fiendsmith's Tract: best line 1.1 worse when a cost banished it (4 of 8 orders) — Pendulum Treasure (add only: deck grows, up to 60)
- +1 Small World — Small World: best line 0.79 worse when a cost banished it (5 of 8 orders) — Pendulum Treasure (add only: deck grows, up to 60)

Effects the search had not used, tried on purpose (best result so far):
- Activate Vidolium the Unstable Power Patron of Unity: 5.46
- Normal Summon Theorealize Medius: 5.08
- Special Summon (procedure) Nervedo the Shadebeast Power Patron: 4.97
- Activate Griffoh: 4.67
- Activate Theorealize Liberation: 4.6
- Normal Summon Nervedo the Shadebeast Power Patron: 4.58
- Activate Light and Darkness Ritual: 4.34
- Activate Nervedo the Shadebeast Power Patron: 4.18

## Order 1: best 5.81 (ss_panama 8.25, elfnote 3.71, despia 4.4, angelechy 8.1, worst 0.55) — from search
Others: tries Activate Vidolium the Unstable Power Patron of Unity 5.46 · tries Activate Light and Darkness Ritual 4.34 · opening lanes 3.66 · tre1 1.98 · tre1 0.71

1. Activate Pendulum Treasure (hand): Add to Extra Deck
2. Selected Vidolium the Unstable Power Patron of Unity (Deck)
3. Yes
4. Selected Prohibited Power Patron Portal - Terminus (Deck)
5. Activate Prohibited Power Patron Portal - Terminus (hand): Send 1 "Power Patron" monster from your Deck or Extra Deck to the GY, then you can add 1 DARK Fairy monster from your Deck to your hand
6. Selected Vidolium the Unstable Power Patron of Unity (Deck)
7. Yes
8. Selected Medius the Pure (Deck)
9. Normal Summon Medius the Pure (hand)
10. Yes
11. Selected Nervedo the Shadebeast Power Patron (Deck)
12. Special Summon it
13. Activate Nervedo the Shadebeast Power Patron (M3): Special Summon 1 "Nerva the Power Patron of Creation" from your Extra Deck
14. Selected Nerva the Power Patron of Creation (Extra Deck)
15. Yes
16. Selected Junoldo the Shadespirit Power Patron (Deck)
17. Activate Junoldo the Shadespirit Power Patron (M3): Special Summon 1 "Junora the Power Patron of Tuning" from your Extra Deck
18. Selected Junora the Power Patron of Tuning (Extra Deck)
19. Yes
20. Selected Nervedo the Shadebeast Power Patron (Extra Deck)
21. Link Summon Purification Power Patron (Extra Deck)
22. select Medius the Pure (M1)
23. select Junora the Power Patron of Tuning (M3)
24. Yes
25. Selected Theorealize Medius (Deck)
26. Activate Medius the Pure (GY): Shuffle 1 monster from your hand or face-up field into the Deck, and if you do, Special Summon this card
27. Selected Ash Blossom & Joyous Spring (hand)
28. Activate Theorealize Medius (hand): If a "Power Patron" card is on the field: You can Special Summon this card from your hand, then you can add 1 "Theorealize" Spell/Trap from your Deck to your hand
29. Yes
30. Selected Theorealize Past Lull (Deck)
31. Special Summon (procedure) Artmage Non-Finito (Extra Deck)
32. Selected Theorealize Past Lull (hand)
33. Selected Nervedo the Shadebeast Power Patron (hand)
34. Yes
35. Selected Artmage Impasto -Recapture- (Deck)
36. Activate Purification Power Patron (EMZ-R): Link Summon including this card as material
37. Selected Medicurius the Power Patron of Illusions (Extra Deck)
38. select Medius the Pure (M5)
39. Finish selection
40. Yes
41. Special Summon 1 "Diactorus" monster
42. Selected Artmage Diactorus (Extra Deck)
43. Activate Theorealize Past Lull (GY): Special Summon 1 Fusion, Synchro, or Xyz Monster from your GY
44. Selected Junora the Power Patron of Tuning (GY)
45. Link Summon S:P Little Knight (Extra Deck)
46. select Artmage Non-Finito (M4)
47. select Junora the Power Patron of Tuning (M3)
48. Yes
49. Selected Purification Power Patron (GY)

End board:  LP 8000 | Hand 3 | Deck 30 | Extra 10 | GY 6 | Banished 10   Monsters: M1: Artmage Diactorus Lv8 2800/2500 ATK || M2: Nerva the Power Patron of Creation Lv10 3300/3300 DEF || M3: S:P Little Knight L2←→ 1600  || EMZ-L: Medicurius the Power Patron of Illusions L3↙↓↘ 3000    Spell/Trap: S1: Artmage Impasto -Recapture- (Set)   GY: Pendulum Treasure, Vidolium the Unstable Power Patron of Unity, Prohibited Power Patron Portal - Terminus, Nervedo the Shadebeast Power Patron, Junora the Power Patron of Tuning, Artmage Non-Finito   Banished: Ars Magna - "Citrinitas" (face-down), Fiendsmith Engraver (face-down), Artmage Finmel (face-down), Small World (face-down), Theorealize Liberation (face-down), 

## Order 2: best 5.47 (ss_panama null, elfnote null, despia 1.59, angelechy 8.05, worst -1.25) — from search
Others: tries Normal Summon Theorealize Medius 5.08 · opening lanes 4.3 · tre1 1.63 · tre1 1.38 · tries Activate Mind Shuffle 1.28

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
14. Activate Nervedo the Shadebeast Power Patron (M4): Special Summon 1 "Nerva the Power Patron of Creation" from your Extra Deck
15. Selected Nerva the Power Patron of Creation (Extra Deck)
16. Yes
17. Selected Junoldo the Shadespirit Power Patron (Deck)
18. Activate Junoldo the Shadespirit Power Patron (M1): Special Summon 1 "Junora the Power Patron of Tuning" from your Extra Deck
19. Selected Junora the Power Patron of Tuning (Extra Deck)
20. Yes
21. Selected Nervedo the Shadebeast Power Patron (Extra Deck)
22. Link Summon Purification Power Patron (Extra Deck)
23. select Junora the Power Patron of Tuning (EMZ-L)
24. select Medius the Pure (M3)
25. Yes
26. Selected Theorealize Medius (Deck)
27. Activate Medius the Pure (GY): Shuffle 1 monster from your hand or face-up field into the Deck, and if you do, Special Summon this card
28. Selected Ash Blossom & Joyous Spring (hand)
29. Activate Theorealize Medius (hand): If a "Power Patron" card is on the field: You can Special Summon this card from your hand, then you can add 1 "Theorealize" Spell/Trap from your Deck to your hand
30. Yes
31. Selected Theorealize Past Lull (Deck)
32. Activate Purification Power Patron (EMZ-R): Link Summon including this card as material
33. Selected Medicurius the Power Patron of Illusions (Extra Deck)
34. select Medius the Pure (M3)
35. Finish selection
36. Yes
37. Special Summon 1 "Diactorus" monster
38. Selected Artmage Diactorus (Extra Deck)
39. Special Summon (procedure) Artmage Non-Finito (Extra Deck)
40. Selected Theorealize Past Lull (hand)
41. Selected Nervedo the Shadebeast Power Patron (hand)
42. Yes
43. Selected Artmage Impasto -Recapture- (Deck)
44. Activate Theorealize Past Lull (GY): Special Summon 1 Fusion, Synchro, or Xyz Monster from your GY
45. Selected Junora the Power Patron of Tuning (GY)
46. Link Summon S:P Little Knight (Extra Deck)
47. select Junora the Power Patron of Tuning (M5)
48. select Artmage Non-Finito (M1)
49. No

End board:  LP 8000 | Hand 3 | Deck 31 | Extra 9 | GY 7 | Banished 9   Monsters: M3: Artmage Diactorus Lv8 2800/2500 DEF || M4: Nerva the Power Patron of Creation Lv10 3300/3300 ATK || M5: S:P Little Knight L2←→ 1600  || EMZ-R: Medicurius the Power Patron of Illusions L3↙↓↘ 3000    Spell/Trap: S1: Artmage Impasto -Recapture- (Set)   GY: Pendulum Treasure, Purification Power Patron, Prohibited Power Patron Portal - Terminus, Purification Power Patron, Nervedo the Shadebeast Power Patron, Artmage Non-Finito, Junora the Power Patron of Tuning   Banished: Medius the Pure (face-down), Apprentice Illusion Magician (face-down), Artmage Finmel (face-down), Pendulum Treasure (face-down), Nervedo the Shadebeast 

## Order 3: best 3.32 (ss_panama 7.47, elfnote 2.14, despia -2.04, angelechy 8.1, worst -3.04) — from search
Others: search → new ending 3.22 · opening lanes 2.9 · tries Activate Artmage Diactorus 2.53 · search → new ending 2.53 · search → new early order 2.24 · tries Activate Ars Magna - "Citrinitas" 1.96 · tre1 1.14 · tre1 0.4 · search → new early order -2.56

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
14. Activate Nervedo the Shadebeast Power Patron (M4): Special Summon 1 "Nerva the Power Patron of Creation" from your Extra Deck
15. Selected Nerva the Power Patron of Creation (Extra Deck)
16. Yes
17. Selected Junoldo the Shadespirit Power Patron (Deck)
18. Activate Junoldo the Shadespirit Power Patron (M5): Special Summon 1 "Junora the Power Patron of Tuning" from your Extra Deck
19. Selected Junora the Power Patron of Tuning (Extra Deck)
20. Yes
21. Selected Nervedo the Shadebeast Power Patron (Extra Deck)
22. Link Summon Purification Power Patron (Extra Deck)
23. select Medius the Pure (M1)
24. select Junora the Power Patron of Tuning (M5)
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
37. Activate Purification Power Patron (EMZ-L): Link Summon including this card as material
38. Selected Medicurius the Power Patron of Illusions (Extra Deck)
39. select Medius the Pure (M1)
40. Finish selection
41. Yes
42. Special Summon 1 "Diactorus" monster
43. Selected Artmage Diactorus (Extra Deck)
44. Activate Theorealize Past Lull (GY): Special Summon 1 Fusion, Synchro, or Xyz Monster from your GY
45. Selected Junora the Power Patron of Tuning (GY)
46. Link Summon S:P Little Knight (Extra Deck)
47. select Artmage Non-Finito (M2)
48. select Junora the Power Patron of Tuning (M5)
49. No

End board:  LP 8000 | Hand 3 | Deck 30 | Extra 10 | GY 7 | Banished 9   Monsters: M3: Artmage Diactorus Lv8 2800/2500 ATK || M4: Nerva the Power Patron of Creation Lv10 3300/3300 ATK || M5: S:P Little Knight L2←→ 1600  || EMZ-R: Medicurius the Power Patron of Illusions L3↙↓↘ 3000    Spell/Trap: S1: Artmage Impasto -Recapture- (Set)   GY: Pendulum Treasure, Vidolium the Unstable Power Patron of Unity, Prohibited Power Patron Portal - Terminus, Nervedo the Shadebeast Power Patron, Purification Power Patron, Artmage Non-Finito, Junora the Power Patron of Tuning   Banished: Fiendsmith's Tract (face-down), Fiendsmith's Tract (face-down), Small World (face-down), Artmage Finmel (face-down), Nervedo the Shade

## Order 4: best 5.73 (ss_panama 5.58, elfnote 4.72, despia 3.17, angelechy 9.35, worst -1) — from tries Special Summon (procedure) Nervedo the Shadebeast Power Patron → new ending
Others: tries Special Summon (procedure) Nervedo the Shadebeast Power Patron 4.97 · tries Special Summon (procedure) Nervedo the Shadebeast Power Patron → new early order 4.9 · tries Normal Summon Nervedo the Shadebeast Power Patron 4.58 · tries Special Summon (procedure) Nervedo the Shadebeast Power Patron → new ending → new early order 3.48 · search 3.23 · opening lanes 2.47 · tre1 2.01 · tre1 0.77 · tries Special Summon (procedure) Nervedo the Shadebeast Power Patron → new ending -1.12

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
11. Selected Nervedo the Shadebeast Power Patron (Deck)
12. Special Summon it
13. Activate Nervedo the Shadebeast Power Patron (M3): Special Summon 1 "Nerva the Power Patron of Creation" from your Extra Deck
14. Selected Nerva the Power Patron of Creation (Extra Deck)
15. Yes
16. Selected Junoldo the Shadespirit Power Patron (Deck)
17. Activate Junoldo the Shadespirit Power Patron (M4): Special Summon 1 "Junora the Power Patron of Tuning" from your Extra Deck
18. Selected Junora the Power Patron of Tuning (Extra Deck)
19. Yes
20. Selected Nervedo the Shadebeast Power Patron (GY)
21. Link Summon Purification Power Patron (Extra Deck)
22. select Junora the Power Patron of Tuning (M4)
23. select Nerva the Power Patron of Creation (EMZ-R)
24. Yes
25. Activate Purification Power Patron (EMZ-R): Link Summon including this card as material
26. Selected Medicurius the Power Patron of Illusions (Extra Deck)
27. select Medius the Pure (M1)
28. Selected Theorealize Medius (Deck)
29. Activate Medius the Pure (GY): Shuffle 1 monster from your hand or face-up field into the Deck, and if you do, Special Summon this card
30. Selected Ash Blossom & Joyous Spring (hand)
31. Activate Theorealize Medius (hand): If a "Power Patron" card is on the field: You can Special Summon this card from your hand, then you can add 1 "Theorealize" Spell/Trap from your Deck to your hand
32. Yes
33. Selected Theorealize Liberation (Deck)
34. Activate Theorealize Liberation (hand): Add to your hand, or Special Summon, 1 monster from your Deck with 300 ATK/200 DEF
35. Selected Griffoh (Deck)
36. Add the card(s) to your hand
37. Activate Griffoh (hand): Activate 1 of these effects
38. Set 1 card that mentions "Light and Darkness Ritual"
39. Selected Mind Shuffle (Deck)
40. Activate Mind Shuffle (S1): activate this card
41. Yes
42. Selected Skull Archfiend of Chaos (Deck)
43. Selected Skull Archfiend of Chaos (hand)
44. Yes
45. Selected Light and Darkness Ritual (Deck)
46. Selected Magician of Dark Chaos - Black Chaos (Deck)
47. Activate Light and Darkness Ritual (GY): Add both this card and 1 card that mentions "Light and Darkness Ritual" from your GY to your hand
48. Selected Griffoh (GY)
49. Activate Light and Darkness Ritual (hand): Ritual Summon 1 "Magician of Dark Chaos - Black Chaos" or "Black Luster Soldier - Soldier of Light and Darkness" from your hand
50. Selected Magician of Dark Chaos - Black Chaos (hand)
51. Selected Griffoh (hand) value 8 or 1
52. Yes
53. Selected Light and Darkness Ritual (GY)
54. Special Summon (procedure) Artmage Non-Finito (Extra Deck)
55. Selected Light and Darkness Ritual (hand)
56. Selected Nervedo the Shadebeast Power Patron (hand)
57. Yes
58. Selected Artmage Impasto -Recapture- (Deck)
59. Activate Skull Archfiend of Chaos (GY): Special Summon this card
60. select Nervedo the Shadebeast Power Patron (GY)
61. select Light and Darkness Ritual (GY)
62. select Griffoh (GY)
63. Default order
64. Link Summon S:P Little Knight (Extra Deck)
65. select Skull Archfiend of Chaos (M3)
66. select Medius the Pure (M1)
67. Yes
68. Special Summon 1 "Diactorus" monster
69. Selected Artmage Diactorus (Extra Deck)

End board:  LP 8000 | Hand 3 | Deck 28 | Extra 11 | GY 7 | Banished 8   Monsters: M1: Artmage Diactorus Lv8 2800/2500 ATK || M3: S:P Little Knight L2←→ 1600  || M4: Magician of Dark Chaos - Black Chaos Lv8 2800/2600 ATK || M5: Artmage Non-Finito Lv7 2400/1500 ATK || EMZ-R: Medicurius the Power Patron of Illusions L3↙↓↘ 3000    Spell/Trap: S1: Mind Shuffle || S2: Artmage Impasto -Recapture- (Set)   GY: Pendulum Treasure, Prohibited Power Patron Portal - Terminus, Junora the Power Patron of Tuning, Nerva the Power Patron of Creation, Purification Power Patron, Theorealize Liberation, Skull Archfiend of Chaos   Banished: Black Chaos (face-down), Artmage Finmel (face-down), Lacrima the Crimson Tears (face-

## Order 5: best 3.25 (ss_panama null, elfnote null, despia -1.52, angelechy 8.03, worst -2.3) — from tries Activate Ars Magna - "Citrinitas" → new early order
Others: tries Activate Ars Magna - "Citrinitas" → new early order → new ending 3.23 · tries Activate Ars Magna - "Citrinitas" 2.73 · search 2.38 · tries Activate Theorealize Liberation 2.07 · tries Activate Ars Magna - "Citrinitas" → new ending 1.89 · tre1 1.78 · tre1 1.57 · opening lanes 1.41 · tries Activate Ars Magna - "Citrinitas" → new early order → new early order -1.42

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
15. Activate Nervedo the Shadebeast Power Patron (M3): Special Summon 1 "Nerva the Power Patron of Creation" from your Extra Deck
16. Selected Nerva the Power Patron of Creation (Extra Deck)
17. Yes
18. Selected Junoldo the Shadespirit Power Patron (Deck)
19. Activate Junoldo the Shadespirit Power Patron (M2): Special Summon 1 "Junora the Power Patron of Tuning" from your Extra Deck
20. Selected Junora the Power Patron of Tuning (Extra Deck)
21. Yes
22. Selected Nervedo the Shadebeast Power Patron (Extra Deck)
23. Link Summon Purification Power Patron (Extra Deck)
24. select Medius the Pure (M4)
25. select Junora the Power Patron of Tuning (EMZ-L)
26. Yes
27. Selected Theorealize Medius (Deck)
28. Activate Medius the Pure (GY): Shuffle 1 monster from your hand or face-up field into the Deck, and if you do, Special Summon this card
29. Selected Ash Blossom & Joyous Spring (hand)
30. Activate Theorealize Medius (hand): If a "Power Patron" card is on the field: You can Special Summon this card from your hand, then you can add 1 "Theorealize" Spell/Trap from your Deck to your hand
31. Yes
32. Selected Theorealize Past Lull (Deck)
33. Special Summon (procedure) Artmage Non-Finito (Extra Deck)
34. Selected Theorealize Past Lull (hand)
35. Selected Nervedo the Shadebeast Power Patron (hand)
36. Yes
37. Selected Artmage Impasto -Recapture- (Deck)
38. Activate Purification Power Patron (EMZ-R): Link Summon including this card as material
39. Selected Medicurius the Power Patron of Illusions (Extra Deck)
40. select Medius the Pure (M5)
41. Finish selection
42. Yes
43. Special Summon 1 "Diactorus" monster
44. Selected Artmage Diactorus (Extra Deck)
45. Activate Artmage Diactorus (M2): Change the battle position of 1 monster on the field
46. Selected Artmage Non-Finito (M4)
47. Activate Theorealize Past Lull (GY): Special Summon 1 Fusion, Synchro, or Xyz Monster from your GY
48. Selected Junora the Power Patron of Tuning (GY)
49. Link Summon S:P Little Knight (Extra Deck)
50. select Artmage Non-Finito (M4)
51. select Junora the Power Patron of Tuning (M3)
52. No

End board:  LP 8000 | Hand 3 | Deck 31 | Extra 9 | GY 7 | Banished 9   Monsters: M1: Nerva the Power Patron of Creation Lv10 3300/3300 ATK || M2: Artmage Diactorus Lv8 2800/2500 ATK || M3: S:P Little Knight L2←→ 1600  || EMZ-L: Medicurius the Power Patron of Illusions L3↙↓↘ 3000    Spell/Trap: S1: Artmage Impasto -Recapture- (Set)   GY: Pendulum Treasure, Purification Power Patron, Prohibited Power Patron Portal - Terminus, Nervedo the Shadebeast Power Patron, Purification Power Patron, Junora the Power Patron of Tuning, Artmage Non-Finito   Banished: Skull Archfiend of Chaos (face-down), Artmage Finmel (face-down), Griffoh (face-down), Pendulum Treasure (face-down), Ars Magna of Infinity and Finity (f

## Order 6: best 8.19 (ss_panama 5, elfnote 8.07, despia 8.25, angelechy 9.82, worst 4.65) — from opening lanes → new ending → new early order
Others: opening lanes → new ending 7.49 · opening lanes 7.08 · opening lanes → new ending → new ending 6.72 · search 4.87 · tries Activate Theorealize Liberation 4.6 · tre1 2.23 · tre1 1.42 · tries Activate Theorealize Past Lull 0.46 · opening lanes → new ending → new early order -1.77

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
19. Link Summon Purification Power Patron (Extra Deck)
20. select Medius the Pure (M3)
21. select Junoldo the Shadespirit Power Patron (M2)
22. Yes
23. Activate Purification Power Patron (EMZ-R): Add 1 "Theorealize" card from your Deck to your hand
24. Selected Theorealize Medius (Deck)
25. Selected Nervedo the Shadebeast Power Patron (Extra Deck)
26. Activate Medius the Pure (GY): Shuffle 1 monster from your hand or face-up field into the Deck, and if you do, Special Summon this card
27. Selected Ash Blossom & Joyous Spring (hand)
28. Activate Theorealize Medius (hand): If a "Power Patron" card is on the field: You can Special Summon this card from your hand, then you can add 1 "Theorealize" Spell/Trap from your Deck to your hand
29. Yes
30. Selected Theorealize Liberation (Deck)
31. Activate Theorealize Liberation (hand): Add to your hand, or Special Summon, 1 monster from your Deck with 300 ATK/200 DEF
32. Activate Purification Power Patron (EMZ-R): Link Summon including this card as material
33. Selected Medicurius the Power Patron of Illusions (Extra Deck)
34. select Medius the Pure (M2)
35. Finish selection
36. Selected Griffoh (Deck)
37. Add the card(s) to your hand
38. Yes
39. Special Summon 1 "Diactorus" monster
40. Selected Artmage Diactorus (Extra Deck)
41. Activate Griffoh (hand): Activate 1 of these effects
42. Set 1 card that mentions "Light and Darkness Ritual"
43. Selected Mind Shuffle (Deck)
44. Activate Mind Shuffle (S1): activate this card
45. No
46. Activate Theorealize Liberation (GY): Treat 1 monster you control as a Tuner this turn
47. Selected Medicurius the Power Patron of Illusions (EMZ-L)
48. Activate Mind Shuffle (S1): Add 1 appropriate monster to your hand
49. Selected Skull Archfiend of Chaos (Deck)
50. Selected Skull Archfiend of Chaos (hand)
51. Yes
52. Selected Light and Darkness Ritual (Deck)
53. Selected Magician of Dark Chaos - Black Chaos (Deck)
54. Activate Light and Darkness Ritual (GY): Add both this card and 1 card that mentions "Light and Darkness Ritual" from your GY to your hand
55. Selected Skull Archfiend of Chaos (GY)
56. Activate Light and Darkness Ritual (hand): Ritual Summon 1 "Magician of Dark Chaos - Black Chaos" or "Black Luster Soldier - Soldier of Light and Darkness" from your hand
57. Selected Magician of Dark Chaos - Black Chaos (hand)
58. Selected Griffoh (GY) value 8 or 1
59. Yes
60. Selected Light and Darkness Ritual (GY)
61. Special Summon (procedure) Artmage Non-Finito (Extra Deck)
62. Selected Light and Darkness Ritual (hand)
63. Selected Nervedo the Shadebeast Power Patron (hand)
64. Yes
65. Selected Artmage Impasto -Recapture- (Deck)

End board:  LP 8000 | Hand 4 | Deck 29 | Extra 11 | GY 6 | Banished 7   Monsters: M1: Nerva the Power Patron of Creation Lv10 3300/3300 ATK || M2: Magician of Dark Chaos - Black Chaos Lv8 2800/2600 ATK || M3: Artmage Diactorus Lv8 2800/2500 ATK || M4: Artmage Non-Finito Lv7 2400/1500 ATK || EMZ-L: Medicurius the Power Patron of Illusions L3↙↓↘ 3000    Spell/Trap: S1: Mind Shuffle || S2: Artmage Impasto -Recapture- (Set)   GY: Pendulum Treasure, Purification Power Patron, Prohibited Power Patron Portal - Terminus, Purification Power Patron, Light and Darkness Ritual, Nervedo the Shadebeast Power Patron   Banished: Plundered Power Patron Plane - Vidolia (face-down), Nervedo the Shadebeast Power Patron (f

## Order 7: best 5.63 (ss_panama 3.85, elfnote 1.67, despia 7.69, angelechy 7.44, worst 1.67) — from tre1 → new ending → new early order
Others: tre1 → new ending 5.06 · tre1 4.52 · tre1 → new ending → new early order → new early order 3.55 · tre1 → new ending → new early order → new ending 2.31 · search 1.42 · tries Activate Vidolium the Unstable Power Patron of Unity 1.35 · opening lanes 0.27 · tries Activate Junoldo the Shadespirit Power Patron -1.45

1. Activate Pendulum Treasure (hand): Add to Extra Deck
2. Selected Vidolium the Unstable Power Patron of Unity (Deck)
3. Yes
4. Selected Prohibited Power Patron Portal - Terminus (Deck)
5. Activate Prohibited Power Patron Portal - Terminus (hand): Send 1 "Power Patron" monster from your Deck or Extra Deck to the GY, then you can add 1 DARK Fairy monster from your Deck to your hand
6. Selected Vidolium the Unstable Power Patron of Unity (Deck)
7. Yes
8. Selected Medius the Pure (Deck)
9. Normal Summon Medius the Pure (hand)
10. Yes
11. Selected Nervedo the Shadebeast Power Patron (Deck)
12. Special Summon it
13. Activate Nervedo the Shadebeast Power Patron (M2): Special Summon 1 "Nerva the Power Patron of Creation" from your Extra Deck
14. Selected Nerva the Power Patron of Creation (Extra Deck)
15. Yes
16. Selected Artmage Graflare (Deck)
17. Link Summon Purification Power Patron (Extra Deck)
18. select Medius the Pure (M1)
19. select Nerva the Power Patron of Creation (M5)
20. Yes
21. Selected Theorealize Medius (Deck)
22. Activate Medius the Pure (GY): Shuffle 1 monster from your hand or face-up field into the Deck, and if you do, Special Summon this card
23. Selected Ash Blossom & Joyous Spring (hand)
24. Activate Theorealize Medius (hand): If a "Power Patron" card is on the field: You can Special Summon this card from your hand, then you can add 1 "Theorealize" Spell/Trap from your Deck to your hand
25. Yes
26. Selected Theorealize Liberation (Deck)
27. Activate Theorealize Liberation (hand): Add to your hand, or Special Summon, 1 monster from your Deck with 300 ATK/200 DEF
28. Activate Purification Power Patron (EMZ-L): Link Summon including this card as material
29. Selected Medicurius the Power Patron of Illusions (Extra Deck)
30. select Medius the Pure (M3)
31. Finish selection
32. Selected Griffoh (Deck)
33. Add the card(s) to your hand
34. Yes
35. Special Summon 1 "Diactorus" monster
36. Selected Artmage Diactorus (Extra Deck)
37. Activate Griffoh (hand): Activate 1 of these effects
38. Set 1 card that mentions "Light and Darkness Ritual"
39. Selected Mind Shuffle (Deck)
40. Activate Mind Shuffle (S1): activate this card
41. No
42. Activate Mind Shuffle (S1): Add 1 appropriate monster to your hand
43. Selected Skull Archfiend of Chaos (Deck)
44. Selected Skull Archfiend of Chaos (hand)
45. Yes
46. Selected Light and Darkness Ritual (Deck)
47. Selected Magician of Dark Chaos - Black Chaos (Deck)
48. Activate Light and Darkness Ritual (GY): Add both this card and 1 card that mentions "Light and Darkness Ritual" from your GY to your hand
49. Selected Skull Archfiend of Chaos (GY)
50. Activate Light and Darkness Ritual (hand): Ritual Summon 1 "Magician of Dark Chaos - Black Chaos" or "Black Luster Soldier - Soldier of Light and Darkness" from your hand
51. Selected Magician of Dark Chaos - Black Chaos (hand)
52. Selected Griffoh (GY) value 8 or 1
53. Yes
54. Selected Light and Darkness Ritual (GY)
55. Special Summon (procedure) Artmage Non-Finito (Extra Deck)
56. Selected Light and Darkness Ritual (hand)
57. Selected Artmage Diactorus (M4)
58. Yes
59. Selected Artmage Impasto -Recapture- (Deck)

End board:  LP 8000 | Hand 4 | Deck 28 | Extra 12 | GY 8 | Banished 6   Monsters: M1: Magician of Dark Chaos - Black Chaos Lv8 2800/2600 ATK || M2: Artmage Graflare Lv5 2100/1500 ATK || M3: Artmage Non-Finito Lv7 2400/1500 ATK || EMZ-L: Medicurius the Power Patron of Illusions L3↙↓↘ 3000    Spell/Trap: S1: Mind Shuffle || S2: Artmage Impasto -Recapture- (Set)   GY: Pendulum Treasure, Vidolium the Unstable Power Patron of Unity, Prohibited Power Patron Portal - Terminus, Nerva the Power Patron of Creation, Purification Power Patron, Theorealize Liberation, Light and Darkness Ritual, Artmage Diactorus   Banished: Pendulum Treasure (face-down), Nervedo the Shadebeast Power Patron (face-down), Junoldo the 

## Order 8: best 4.15 (ss_panama 3.56, elfnote 6.2, despia -1.69, angelechy 5.8, worst -1.69) — from tries Activate Light and Darkness Ritual
Others: tries Activate Light and Darkness Ritual → new ending 3.25 · search 3.24 · tries Activate Mind Shuffle 3.08 · tre1 2.9 · tries Activate Light and Darkness Ritual → new ending 2.58 · opening lanes 2.35 · tries Activate Light and Darkness Ritual → new early order -1.42 · tries Activate Light and Darkness Ritual → new early order -1.43

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
15. Link Summon Purification Power Patron (Extra Deck)
16. select Nervedo the Shadebeast Power Patron (M4)
17. select Medius the Pure (M3)
18. Yes
19. Activate Purification Power Patron (EMZ-L): Add 1 "Theorealize" card from your Deck to your hand
20. Selected Theorealize Medius (Deck)
21. Selected Artmage Finmel (Deck)
22. Activate Theorealize Medius (hand): If a "Power Patron" card is on the field: You can Special Summon this card from your hand, then you can add 1 "Theorealize" Spell/Trap from your Deck to your hand
23. Yes
24. Selected Theorealize Liberation (Deck)
25. Activate Medius the Pure (GY): Shuffle 1 monster from your hand or face-up field into the Deck, and if you do, Special Summon this card
26. Selected Ash Blossom & Joyous Spring (hand)
27. Activate Theorealize Liberation (hand): Add to your hand, or Special Summon, 1 monster from your Deck with 300 ATK/200 DEF
28. Activate Purification Power Patron (EMZ-L): Link Summon including this card as material
29. Selected S:P Little Knight (Extra Deck)
30. select Medius the Pure (M2)
31. Selected Griffoh (Deck)
32. Add the card(s) to your hand
33. Yes
34. Special Summon 1 "Diactorus" monster
35. Activate S:P Little Knight (EMZ-R): Banish 1 card on the field or GY
36. Selected Theorealize Liberation (GY)
37. Selected Artmage Diactorus (Extra Deck)
38. Activate Artmage Diactorus (M5): Change the battle position of 1 monster on the field
39. Selected Artmage Diactorus (M5)
40. Activate Griffoh (hand): Activate 1 of these effects
41. Set 1 card that mentions "Light and Darkness Ritual"
42. Selected Mind Shuffle (Deck)
43. Activate Mind Shuffle (S1): activate this card
44. Yes
45. Selected Skull Archfiend of Chaos (Deck)
46. Selected Skull Archfiend of Chaos (hand)
47. Yes
48. Selected Light and Darkness Ritual (Deck)
49. Selected Magician of Dark Chaos - Black Chaos (Deck)
50. Activate Light and Darkness Ritual (GY): Add both this card and 1 card that mentions "Light and Darkness Ritual" from your GY to your hand
51. Selected Skull Archfiend of Chaos (GY)
52. Special Summon (procedure) Artmage Non-Finito (Extra Deck)
53. Selected Light and Darkness Ritual (hand)
54. Selected Artmage Finmel (M4)
55. Yes
56. Selected Artmage Impasto -Recapture- (Deck)

End board:  LP 8000 | Hand 5 | Deck 32 | Extra 12 | GY 7 | Banished 3   Monsters: M1: Artmage Non-Finito Lv7 2400/1500 ATK || M5: Artmage Diactorus Lv8 2800/2500 DEF || EMZ-R: S:P Little Knight L2←→ 1600    Spell/Trap: S1: Mind Shuffle || S2: Artmage Impasto -Recapture- (Set)   GY: Pendulum Treasure, Purification Power Patron, Prohibited Power Patron Portal - Terminus, Purification Power Patron, Griffoh, Light and Darkness Ritual, Artmage Finmel   Banished: Medius the Pure, Theorealize Liberation, Theorealize Medius   Hand: Ash Blossom & Joyous Spring, Magician of Dark Chaos - Black Chaos, Droll & Lock Bird, Skull Archfiend of Chaos, Ghost Ogre & Snow Rabbit   Extra Deck: 12 cards (view --ed to list)

