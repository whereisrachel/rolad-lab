# Evolved lines — Pendulum Treasure, Ash Blossom & Joyous Spring, Ash Blossom & Joyous Spring, Droll & Lock Bird, Ghost Ogre & Snow Rabbit (findlist-1100)
2026-11-26T19:27:50.073Z

8 deck orders (different face-down banishes / draws), 3 opponent hands x o_ss_panama + o_elfnote + o_despia + o_angelechy per line, 15 min searches, 4 mutation rounds.
Fitness = end-board interruptions (the lab scorer, src/disrupt.mjs: wipe 2, negate 1-1.5, banish/protection less; hand traps kept count 1 each). The winner of each order is also played into the opponent decks: margin after their turn shown beside it.

**Margin after their turn (winners): average null** (worst 99)

**Best line per deck order: average 12.21** (worst order 10.65). Winner came from: search 1, tries Special Summon (procedure) Artmage Non-Finito 1, search → new ending 1, tries Activate Vidolium the Unstable Power Patron of Unity → new early order → new early order 1

## Weak points found automatically
Cards whose face-down banish (by your own costs) hurt the best line most (average best line without vs with that card banished):

| card | orders where it was banished | drop |
|---|---|---|
| Pendulum Treasure | 3/8 | 2.32 |
| Plundered Power Patron Plane - Vidolia | 2/8 | 1.67 |
| Artmage Impasto -Recapture- | 2/8 | 1.67 |
| Ash Blossom & Joyous Spring | 2/8 | 1.62 |
| Apprentice Illusion Magician | 2/8 | 0.17 |
| Artmage Vandalism -Assault- | 3/8 | -0.08 |
| Fiendsmith Engraver | 3/8 | -0.08 |
| Ars Magna - "Citrinitas" | 3/8 | -0.15 |
| Ars Magna of Purification and Corruption | 3/8 | -0.15 |
| Theorealize Medius | 2/8 | -1.62 |

List changes proposed for the list test (data/proposals-findlist-1100.json):
- +1 Plundered Power Patron Plane - Vidolia, −1 Artmage Vandalism -Assault- — Plundered Power Patron Plane - Vidolia: best line 1.67 worse when a cost banished it (2 of 8 orders) — Pendulum Treasure
- +1 Artmage Impasto -Recapture-, −1 Artmage Vandalism -Assault- — Artmage Impasto -Recapture-: best line 1.67 worse when a cost banished it (2 of 8 orders) — Pendulum Treasure
- +1 Plundered Power Patron Plane - Vidolia — Plundered Power Patron Plane - Vidolia: best line 1.67 worse when a cost banished it (2 of 8 orders) — Pendulum Treasure (add only: deck grows, up to 60)
- +1 Artmage Impasto -Recapture- — Artmage Impasto -Recapture-: best line 1.67 worse when a cost banished it (2 of 8 orders) — Pendulum Treasure (add only: deck grows, up to 60)

Effects the search had not used, tried on purpose (best result so far):
- Special Summon (procedure) Artmage Non-Finito: 12.1
- Activate Vidolium the Unstable Power Patron of Unity: 12
- Activate Ars Magna - "Citrinitas": 10.65
- Activate Artmage Vandalism -Assault-: 10.65
- Activate Ars Magna of Purification and Corruption: 10.57
- Special Summon (procedure) Nervedo the Shadebeast Power Patron: 10.29
- Activate Vidolium the Unstable Power Patron of Unity: 10.1
- Activate Theorealize Past Lull: 9.77

## Order 1: best 10.65 (, worst 10.65) — from search
Others: tries Special Summon (procedure) Nervedo the Shadebeast Power Patron 10.29 · tries Activate Theorealize Past Lull 9.77 · tries Activate Junoldo the Shadespirit Power Patron 8.85 · opening lanes 7.28 · tries Normal Summon Theorealize Medius 7.13 · tries Activate Junoldo the Shadespirit Power Patron 7.13 · search → new ending 6.28 · tries Activate Artmage Diactorus 4.05 · search → new early order 3.55 · search → new early order 3.55

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
14. Link Summon Purification Power Patron (Extra Deck)
15. select Medius the Pure (M3)
16. select Junoldo the Shadespirit Power Patron (M1)
17. Yes
18. Activate Purification Power Patron (EMZ-R): Add 1 "Theorealize" card from your Deck to your hand
19. Selected Theorealize Medius (Deck)
20. Selected Vidolium the Unstable Power Patron of Unity (Extra Deck)
21. Activate Theorealize Medius (hand): If a "Power Patron" card is on the field: You can Special Summon this card from your hand, then you can add 1 "Theorealize" Spell/Trap from your Deck to your hand
22. Yes
23. Selected Theorealize Past Lull (Deck)
24. Activate Medius the Pure (GY): Shuffle 1 monster from your hand or face-up field into the Deck, and if you do, Special Summon this card
25. Selected Droll & Lock Bird (hand)
26. Activate Vidolium the Unstable Power Patron of Unity (hand): Activate it as a Pendulum Spell
27. Activate Purification Power Patron (EMZ-R): Link Summon including this card as material
28. Selected Medicurius the Power Patron of Illusions (Extra Deck)
29. select Medius the Pure (M3)
30. Finish selection
31. Yes
32. Special Summon 1 "Diactorus" monster
33. Selected Artmage Diactorus (Extra Deck)
34. Special Summon (procedure) Artmage Non-Finito (Extra Deck)
35. Selected Theorealize Past Lull (hand)
36. Selected Artmage Diactorus (M4)
37. Yes
38. Selected Artmage Impasto -Recapture- (Deck)
39. Activate Vidolium the Unstable Power Patron of Unity (S1): Activate 1 of these effects
40. Special Summon 1 "Power Patron" monster
41. Selected Nervedo the Shadebeast Power Patron (GY)
42. Activate Nervedo the Shadebeast Power Patron (M1): Special Summon 1 "Nerva the Power Patron of Creation" from your Extra Deck
43. Selected Nerva the Power Patron of Creation (Extra Deck)
44. Yes
45. Selected Artmage Finmel (Deck)

End board:  LP 8000 | Hand 3 | Deck 33 | Extra 13 | GY 5 | Banished 5   Monsters: M3: Nerva the Power Patron of Creation Lv10 3300/3300 ATK || M4: Artmage Non-Finito Lv7 2400/1500 ATK || M5: Artmage Finmel Lv7 2400/1500 ATK || EMZ-R: Medicurius the Power Patron of Illusions L3↙↓↘ 3000    Spell/Trap: S2: Artmage Impasto -Recapture- (Set)   GY: Pendulum Treasure, Prohibited Power Patron Portal - Terminus, Purification Power Patron, Theorealize Past Lull, Artmage Diactorus   Banished: Medius the Pure, Theorealize Medius, Artmage Vandalism -Assault- (face-down), Plundered Power Patron Plane - Vidolia (face-down), Nervedo the Shadebeast Power Patron (face-down)   Hand: Ash Blossom & Joyous Spring, Ash Bloss

## Order 2: best 12.1 (, worst 12.1) — from tries Special Summon (procedure) Artmage Non-Finito
Others: tries Special Summon (procedure) Artmage Non-Finito → new ending 12.1 · tries Special Summon (procedure) Artmage Non-Finito → new early order 12.1 · tries Special Summon (procedure) Artmage Non-Finito → new ending 12.1 · tries Normal Summon Medius the Pure 9.7 · tries Activate Ars Magna - "Citrinitas" 8.9 · tries Activate Prohibited Power Patron Portal - Terminus 8.85 · opening lanes 8.85 · tries Activate Nervedo the Shadebeast Power Patron 8.78 · tries Activate Theorealize Liberation 8.55 · search 4.05 · tries Special Summon (procedure) Artmage Non-Finito → new early order 3.55

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
25. select Junora the Power Patron of Tuning (M2)
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
36. Activate Purification Power Patron (EMZ-R): Link Summon including this card as material
37. Selected Medicurius the Power Patron of Illusions (Extra Deck)
38. select Artmage Non-Finito (M3)
39. Finish selection
40. Activate Theorealize Past Lull (GY): Special Summon 1 Fusion, Synchro, or Xyz Monster from your GY
41. Selected Junora the Power Patron of Tuning (GY)
42. Activate Medius the Pure (GY): Shuffle 1 monster from your hand or face-up field into the Deck, and if you do, Special Summon this card
43. Selected Ash Blossom & Joyous Spring (hand)
44. Link Summon S:P Little Knight (Extra Deck)
45. select Medius the Pure (M4)
46. select Junora the Power Patron of Tuning (M3)
47. Yes
48. Special Summon 1 "Diactorus" monster
49. Selected Artmage Diactorus (Extra Deck)

End board:  LP 8000 | Hand 3 | Deck 31 | Extra 9 | GY 7 | Banished 9   Monsters: M1: Nerva the Power Patron of Creation Lv10 3300/3300 ATK || M2: Artmage Diactorus Lv8 2800/2500 ATK || M3: S:P Little Knight L2←→ 1600  || EMZ-L: Medicurius the Power Patron of Illusions L3↙↓↘ 3000    Spell/Trap: S1: Artmage Impasto -Recapture- (Set)   GY: Pendulum Treasure, Purification Power Patron, Prohibited Power Patron Portal - Terminus, Nervedo the Shadebeast Power Patron, Artmage Non-Finito, Purification Power Patron, Junora the Power Patron of Tuning   Banished: Medius the Pure (face-down), Apprentice Illusion Magician (face-down), Artmage Finmel (face-down), Pendulum Treasure (face-down), Nervedo the Shadebeast 

## Order 3: best 12.15 (, worst 12.15) — from search → new ending
Others: search 12.1 · search → new ending → new early order 12.05 · search → new ending → new early order 12.05 · opening lanes 12 · tries Activate Artmage Vandalism -Assault- 10.65 · tries Activate Ars Magna of Purification and Corruption 10.57 · search → new ending → new ending 10.5 · tries Activate Ars Magna of Infinity and Finity 9.41 · tries Activate Artmage Vandalism -Assault- 9.28 · tries Activate Plundered Power Patron Plane - Vidolia 9.1 · tries Activate Plundered Power Patron Plane - Vidolia 8.7

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
14. Activate Junoldo the Shadespirit Power Patron (M1): Special Summon 1 "Junora the Power Patron of Tuning" from your Extra Deck
15. Selected Junora the Power Patron of Tuning (Extra Deck)
16. Yes
17. Selected Theorealize Medius (GY)
18. Activate Theorealize Medius (hand): If a "Power Patron" card is on the field: You can Special Summon this card from your hand, then you can add 1 "Theorealize" Spell/Trap from your Deck to your hand
19. Yes
20. Selected Theorealize Past Lull (Deck)
21. Link Summon Purification Power Patron (Extra Deck)
22. select Medius the Pure (M4)
23. select Junora the Power Patron of Tuning (EMZ-R)
24. Yes
25. Selected Theorealize Liberation (Deck)
26. Activate Medius the Pure (GY): Shuffle 1 monster from your hand or face-up field into the Deck, and if you do, Special Summon this card
27. Selected Ash Blossom & Joyous Spring (hand)
28. Activate Theorealize Liberation (hand): Add to your hand, or Special Summon, 1 monster from your Deck with 300 ATK/200 DEF
29. Selected Nervedo the Shadebeast Power Patron (Deck)
30. Special Summon it
31. Special Summon (procedure) Artmage Non-Finito (Extra Deck)
32. Selected Theorealize Past Lull (hand)
33. Selected Nervedo the Shadebeast Power Patron (M4)
34. Yes
35. Activate Artmage Non-Finito (M4): Set 1 "Artmage" Spell/Trap from your Deck
36. Activate Purification Power Patron (EMZ-R): Link Summon including this card as material
37. Selected Medicurius the Power Patron of Illusions (Extra Deck)
38. select Medius the Pure (M2)
39. Finish selection
40. Selected Artmage Impasto -Recapture- (Deck)
41. Selected Artmage Graflare (Deck)
42. Yes
43. Special Summon 1 "Diactorus" monster
44. Selected Artmage Diactorus (Extra Deck)
45. Activate Theorealize Past Lull (GY): Special Summon 1 Fusion, Synchro, or Xyz Monster from your GY
46. Selected Junora the Power Patron of Tuning (GY)
47. Link Summon S:P Little Knight (Extra Deck)
48. select Junora the Power Patron of Tuning (M2)
49. select Artmage Non-Finito (M4)
50. Yes
51. Selected Purification Power Patron (GY)

End board:  LP 8000 | Hand 3 | Deck 32 | Extra 12 | GY 5 | Banished 7   Monsters: M1: Artmage Diactorus Lv8 2800/2500 ATK || M2: S:P Little Knight L2←→ 1600  || M3: Artmage Graflare Lv5 2100/1500 ATK || EMZ-L: Medicurius the Power Patron of Illusions L3↙↓↘ 3000    Spell/Trap: S1: Artmage Impasto -Recapture- (Set)   GY: Pendulum Treasure, Prohibited Power Patron Portal - Terminus, Theorealize Liberation, Junora the Power Patron of Tuning, Artmage Non-Finito   Banished: Small World (face-down), Fiendsmith's Tract (face-down), Pendulum Treasure (face-down), Medius the Pure, Theorealize Medius, Theorealize Past Lull, Purification Power Patron   Hand: Droll & Lock Bird, Ghost Ogre & Snow Rabbit, Ash Blossom

## Order 4: best 13.95 (, worst 13.95) — from tries Activate Vidolium the Unstable Power Patron of Unity → new early order → new early order
Others: tries Activate Vidolium the Unstable Power Patron of Unity → new early order 12.05 · tries Activate Vidolium the Unstable Power Patron of Unity → new early order → new ending 12.05 · tries Activate Vidolium the Unstable Power Patron of Unity 12 · tries Activate Ars Magna - "Citrinitas" 10.65 · tries Activate Vidolium the Unstable Power Patron of Unity 10.1 · tries Special Summon (procedure) Artmage Non-Finito 9 · opening lanes 8.85 · tries Activate Medius the Pure 8.78 · search 6.45 · tries Activate Ars Magna of Purification and Corruption 4.05

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
14. Link Summon Purification Power Patron (Extra Deck)
15. select Junoldo the Shadespirit Power Patron (M5)
16. select Medius the Pure (M4)
17. Yes
18. Activate Purification Power Patron (EMZ-L): Add 1 "Theorealize" card from your Deck to your hand
19. Selected Theorealize Medius (Deck)
20. Selected Vidolium the Unstable Power Patron of Unity (Extra Deck)
21. Activate Medius the Pure (GY): Shuffle 1 monster from your hand or face-up field into the Deck, and if you do, Special Summon this card
22. Selected Ash Blossom & Joyous Spring (hand)
23. Activate Theorealize Medius (hand): If a "Power Patron" card is on the field: You can Special Summon this card from your hand, then you can add 1 "Theorealize" Spell/Trap from your Deck to your hand
24. Yes
25. Selected Theorealize Liberation (Deck)
26. Activate Theorealize Liberation (hand): Add to your hand, or Special Summon, 1 monster from your Deck with 300 ATK/200 DEF
27. Activate Purification Power Patron (EMZ-L): Link Summon including this card as material
28. Selected Medicurius the Power Patron of Illusions (Extra Deck)
29. select Medius the Pure (M4)
30. Finish selection
31. Selected Griffoh (Deck)
32. Add the card(s) to your hand
33. Yes
34. Special Summon 1 "Diactorus" monster
35. Selected Artmage Diactorus (Extra Deck)
36. Activate Griffoh (hand): Activate 1 of these effects
37. Set 1 card that mentions "Light and Darkness Ritual"
38. Selected Mind Shuffle (Deck)
39. Activate Mind Shuffle (S1): activate this card
40. No
41. Activate Mind Shuffle (S1): Add 1 appropriate monster to your hand
42. Selected Skull Archfiend of Chaos (Deck)
43. Selected Skull Archfiend of Chaos (hand)
44. Yes
45. Selected Light and Darkness Ritual (Deck)
46. Selected Magician of Dark Chaos - Black Chaos (Deck)
47. Activate Vidolium the Unstable Power Patron of Unity (hand): Activate it as a Pendulum Spell
48. Activate Vidolium the Unstable Power Patron of Unity (S5): Activate 1 of these effects
49. Special Summon 1 "Power Patron" monster
50. Selected Nervedo the Shadebeast Power Patron (GY)
51. Activate Light and Darkness Ritual (GY): Add both this card and 1 card that mentions "Light and Darkness Ritual" from your GY to your hand
52. Selected Skull Archfiend of Chaos (GY)
53. Activate Light and Darkness Ritual (hand): Ritual Summon 1 "Magician of Dark Chaos - Black Chaos" or "Black Luster Soldier - Soldier of Light and Darkness" from your hand
54. Selected Magician of Dark Chaos - Black Chaos (hand)
55. Selected Griffoh (GY) value 8 or 1
56. Yes
57. Selected Light and Darkness Ritual (GY)
58. Special Summon (procedure) Artmage Non-Finito (Extra Deck)
59. Selected Light and Darkness Ritual (hand)
60. Selected Nervedo the Shadebeast Power Patron (M1)
61. Yes
62. Activate Artmage Non-Finito (M5): Set 1 "Artmage" Spell/Trap from your Deck
63. Selected Artmage Impasto -Recapture- (Deck)
64. Selected Artmage Graflare (Deck)

End board:  LP 8000 | Hand 4 | Deck 31 | Extra 14 | GY 5 | Banished 3   Monsters: M2: Magician of Dark Chaos - Black Chaos Lv8 2800/2600 ATK || M3: Artmage Graflare Lv5 2100/1500 ATK || M4: Artmage Diactorus Lv8 2800/2500 ATK || M5: Artmage Non-Finito Lv7 2400/1500 ATK || EMZ-R: Medicurius the Power Patron of Illusions L3↙↓↘ 3000    Spell/Trap: S1: Mind Shuffle || S2: Artmage Impasto -Recapture- (Set)   GY: Pendulum Treasure, Prohibited Power Patron Portal - Terminus, Purification Power Patron, Theorealize Liberation, Light and Darkness Ritual   Banished: Medius the Pure, Theorealize Medius, Griffoh   Hand: Droll & Lock Bird, Ghost Ogre & Snow Rabbit, Ash Blossom & Joyous Spring, Skull Archfiend of Cha

