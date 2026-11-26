# Evolved lines — Ars Magna of Infinity and Finity, Ash Blossom & Joyous Spring, Ash Blossom & Joyous Spring, Droll & Lock Bird, Ghost Ogre & Snow Rabbit (findlist-1100)
2026-11-26T19:12:44.521Z

8 deck orders (different face-down banishes / draws), 3 opponent hands x o_ss_panama + o_elfnote + o_despia + o_angelechy per line, 15 min searches, 4 mutation rounds.
Fitness = end-board interruptions (the lab scorer, src/disrupt.mjs: wipe 2, negate 1-1.5, banish/protection less; hand traps kept count 1 each). The winner of each order is also played into the opponent decks: margin after their turn shown beside it.

**Margin after their turn (winners): average null** (worst 99)

**Best line per deck order: average 13.05** (worst order 12.3). Winner came from: tries Activate Junoldo the Shadespirit Power Patron 1, search → new ending 1, tries Special Summon (procedure) Artmage Non-Finito → new early order 1, tries Special Summon (procedure) Artmage Non-Finito → new ending 1

## Weak points found automatically
Cards whose face-down banish (by your own costs) hurt the best line most (average best line without vs with that card banished):

| card | orders where it was banished | drop |
|---|---|---|
| Medius the Pure | 2/8 | 0.5 |
| Artmage Finmel | 2/8 | 0.5 |
| Dark Magical Circle | 2/8 | 0.5 |
| Artmage Vandalism -Assault- | 2/8 | 0.5 |
| Ash Blossom & Joyous Spring | 3/8 | 0.33 |
| Pendulum Treasure | 3/8 | 0.33 |
| Fiendsmith Engraver | 3/8 | 0.33 |
| Artmage Impasto -Recapture- | 3/8 | 0.33 |
| Infinite Impermanence | 2/8 | -0.5 |
| Light and Darkness Ritual | 2/8 | -0.5 |

List changes proposed for the list test (data/proposals-findlist-1100.json):
- +1 Artmage Finmel, −1 Plundered Power Patron Plane - Vidolia — Artmage Finmel: best line 0.5 worse when a cost banished it (2 of 8 orders) — Ars Magna of Infinity and Finity
- +1 Dark Magical Circle, −1 Artmage Vandalism -Assault- — Dark Magical Circle: best line 0.5 worse when a cost banished it (2 of 8 orders) — Ars Magna of Infinity and Finity
- +1 Artmage Finmel — Artmage Finmel: best line 0.5 worse when a cost banished it (2 of 8 orders) — Ars Magna of Infinity and Finity (add only: deck grows, up to 60)
- +1 Dark Magical Circle — Dark Magical Circle: best line 0.5 worse when a cost banished it (2 of 8 orders) — Ars Magna of Infinity and Finity (add only: deck grows, up to 60)

Effects the search had not used, tried on purpose (best result so far):
- Activate Junoldo the Shadespirit Power Patron: 13.3
- Special Summon (procedure) Artmage Non-Finito: 13
- Activate Ars Magna of Infinity and Finity: 13
- Activate Theorealize Liberation: 12.9
- Activate Prohibited Power Patron Portal - Terminus: 12.85
- Activate Plundered Power Patron Plane - Vidolia: 12
- Activate Theorealize Liberation: 11.65
- Activate Junoldo the Shadespirit Power Patron: 11.65

## Order 1: best 13.3 (, worst 13.3) — from tries Activate Junoldo the Shadespirit Power Patron
Others: tries Activate Junoldo the Shadespirit Power Patron → new ending 13 · tries Activate Junoldo the Shadespirit Power Patron → new early order 12.85 · tries Activate Junoldo the Shadespirit Power Patron → new ending 12.85 · tries Activate Junoldo the Shadespirit Power Patron → new early order 12.6 · tries Activate Theorealize Liberation 11.65 · tries Activate Vidolium the Unstable Power Patron of Unity 9.78 · search 9.41 · opening lanes 9.41 · tries Activate Fiendsmith's Tract 9.41 · tries Activate Ars Magna of Purification and Corruption 9.41 · tries Activate Theorealize Past Lull 8.97

1. Activate Ars Magna of Infinity and Finity (hand): You can banish this card from your hand; add 1 non-Warrior "Ars Magna" monster from your Deck to your hand
2. Selected Ars Magna of Purification and Corruption (Deck)
3. Activate Ars Magna of Purification and Corruption (hand): You can banish this card from your hand; add 1 "Ars Magna" Spell/Trap from your Deck to your hand
4. Selected Ars Magna - "Citrinitas" (Deck)
5. Set Spell/Trap Ars Magna - "Citrinitas"
6. Activate Ars Magna - "Citrinitas" (S1): activate this card
7. Activate Ars Magna - "Citrinitas" (S1): Add 1 "Medius" or "Ars Magna" monster from your Deck to your hand
8. Selected Medius the Pure (Deck)
9. Normal Summon Medius the Pure (hand)
10. Yes
11. Selected Nervedo the Shadebeast Power Patron (Deck)
12. Special Summon it
13. Activate Nervedo the Shadebeast Power Patron (M5): Special Summon 1 "Nerva the Power Patron of Creation" from your Extra Deck
14. Selected Nerva the Power Patron of Creation (Extra Deck)
15. Yes
16. Selected Junoldo the Shadespirit Power Patron (Deck)
17. Activate Junoldo the Shadespirit Power Patron (M3): Special Summon 1 "Junora the Power Patron of Tuning" from your Extra Deck
18. Selected Junora the Power Patron of Tuning (Extra Deck)
19. Yes
20. Selected Nervedo the Shadebeast Power Patron (Extra Deck)
21. Link Summon Purification Power Patron (Extra Deck)
22. select Junora the Power Patron of Tuning (EMZ-R)
23. select Medius the Pure (M4)
24. Activate Purification Power Patron (EMZ-R): Add 1 "Theorealize" card from your Deck to your hand
25. Selected Theorealize Medius (Deck)
26. Activate Theorealize Medius (hand): If a "Power Patron" card is on the field: You can Special Summon this card from your hand, then you can add 1 "Theorealize" Spell/Trap from your Deck to your hand
27. Yes
28. Selected Theorealize Past Lull (Deck)
29. Special Summon (procedure) Artmage Non-Finito (Extra Deck)
30. Selected Theorealize Past Lull (hand)
31. Selected Nervedo the Shadebeast Power Patron (hand)
32. Activate Ars Magna of Infinity and Finity (banishment): Special Summon this card
33. Activate Artmage Non-Finito (M1): Set 1 "Artmage" Spell/Trap from your Deck
34. Selected Artmage Impasto -Recapture- (Deck)
35. Activate Ars Magna of Infinity and Finity (M4): Banish 1 monster on the field
36. Selected Purification Power Patron (EMZ-R)
37. Activate Purification Power Patron (EMZ-R): Link Summon including this card as material
38. Selected Medicurius the Power Patron of Illusions (Extra Deck)
39. select Ars Magna of Infinity and Finity (M4)
40. Finish selection
41. No
42. Activate Medius the Pure (GY): Shuffle 1 monster from your hand or face-up field into the Deck, and if you do, Special Summon this card
43. Selected Ash Blossom & Joyous Spring (hand)
44. Activate Theorealize Past Lull (GY): Special Summon 1 Fusion, Synchro, or Xyz Monster from your GY
45. Selected Junora the Power Patron of Tuning (GY)
46. Link Summon S:P Little Knight (Extra Deck)
47. select Junora the Power Patron of Tuning (M4)
48. select Medius the Pure (M2)
49. Yes
50. Special Summon 1 "Diactorus" monster
51. Activate Ars Magna of Purification and Corruption (banishment): Special Summon this card
52. Selected Artmage Diactorus (Extra Deck)

End board:  LP 8000 | Hand 3 | Deck 31 | Extra 9 | GY 4 | Banished 9   Monsters: M1: Artmage Non-Finito Lv7 2400/1500 ATK || M2: Ars Magna of Purification and Corruption Lv8 1000/2100 ATK || M3: Artmage Diactorus Lv8 2800/2500 ATK || M4: S:P Little Knight L2←→ 1600  || M5: Nerva the Power Patron of Creation Lv10 3300/3300 ATK || EMZ-R: Medicurius the Power Patron of Illusions L3↙↓↘ 9000    Spell/Trap: S1: Ars Magna - "Citrinitas" || S2: Artmage Impasto -Recapture- (Set)   GY: Nervedo the Shadebeast Power Patron, Ars Magna of Infinity and Finity, Purification Power Patron, Junora the Power Patron of Tuning   Banished: Infinite Impermanence (face-down), Small World (face-down), Light and Darkness Ritual 

## Order 2: best 13.3 (, worst 13.3) — from search → new ending
Others: search → new ending → new ending 13.3 · search 13 · tries Activate Ars Magna of Infinity and Finity 13 · tries Activate Plundered Power Patron Plane - Vidolia 12 · search → new ending → new early order 11.9 · tries Activate Plundered Power Patron Plane - Vidolia 10.55 · tries Activate Medius the Pure 9.93 · tries Normal Summon Theorealize Medius 9.41 · opening lanes 9.41 · search → new ending → new early order 9.41 · tries Activate Vidolium the Unstable Power Patron of Unity 8.41

1. Activate Ars Magna of Infinity and Finity (hand): You can banish this card from your hand; add 1 non-Warrior "Ars Magna" monster from your Deck to your hand
2. Selected Ars Magna of Purification and Corruption (Deck)
3. Activate Ars Magna of Purification and Corruption (hand): You can banish this card from your hand; add 1 "Ars Magna" Spell/Trap from your Deck to your hand
4. Selected Ars Magna - "Citrinitas" (Deck)
5. Set Spell/Trap Ars Magna - "Citrinitas"
6. Activate Ars Magna - "Citrinitas" (S1): activate this card
7. Activate Ars Magna - "Citrinitas" (S1): Add 1 "Medius" or "Ars Magna" monster from your Deck to your hand
8. Selected Medius the Pure (Deck)
9. Normal Summon Medius the Pure (hand)
10. Yes
11. Selected Nervedo the Shadebeast Power Patron (Deck)
12. Special Summon it
13. Activate Nervedo the Shadebeast Power Patron (M5): Special Summon 1 "Nerva the Power Patron of Creation" from your Extra Deck
14. Selected Nerva the Power Patron of Creation (Extra Deck)
15. Yes
16. Activate Ars Magna of Infinity and Finity (banishment): Special Summon this card
17. Selected Junoldo the Shadespirit Power Patron (Deck)
18. Activate Junoldo the Shadespirit Power Patron (M1): Special Summon 1 "Junora the Power Patron of Tuning" from your Extra Deck
19. Selected Junora the Power Patron of Tuning (Extra Deck)
20. Yes
21. Selected Nervedo the Shadebeast Power Patron (Extra Deck)
22. Link Summon Purification Power Patron (Extra Deck)
23. select Ars Magna of Infinity and Finity (M3)
24. select Junora the Power Patron of Tuning (EMZ-R)
25. Activate Purification Power Patron (EMZ-L): Add 1 "Theorealize" card from your Deck to your hand
26. Selected Theorealize Medius (Deck)
27. Activate Theorealize Medius (hand): If a "Power Patron" card is on the field: You can Special Summon this card from your hand, then you can add 1 "Theorealize" Spell/Trap from your Deck to your hand
28. Activate Purification Power Patron (EMZ-L): Link Summon including this card as material
29. Selected Medicurius the Power Patron of Illusions (Extra Deck)
30. select Medius the Pure (M4)
31. Finish selection
32. Yes
33. Selected Theorealize Past Lull (Deck)
34. No
35. Special Summon (procedure) Artmage Non-Finito (Extra Deck)
36. Selected Theorealize Past Lull (hand)
37. Selected Nervedo the Shadebeast Power Patron (hand)
38. Yes
39. Selected Artmage Impasto -Recapture- (Deck)
40. Activate Theorealize Past Lull (GY): Special Summon 1 Fusion, Synchro, or Xyz Monster from your GY
41. Selected Junora the Power Patron of Tuning (GY)
42. Activate Medius the Pure (GY): Shuffle 1 monster from your hand or face-up field into the Deck, and if you do, Special Summon this card
43. Selected Ash Blossom & Joyous Spring (hand)
44. Link Summon S:P Little Knight (Extra Deck)
45. select Junora the Power Patron of Tuning (M1)
46. select Medius the Pure (M2)
47. Yes
48. Special Summon 1 "Diactorus" monster
49. Activate Ars Magna of Purification and Corruption (banishment): Special Summon this card
50. Selected Artmage Diactorus (Extra Deck)

End board:  LP 8000 | Hand 3 | Deck 31 | Extra 9 | GY 4 | Banished 9   Monsters: M1: S:P Little Knight L2←→ 1600  || M2: Ars Magna of Purification and Corruption Lv8 1000/2100 ATK || M3: Artmage Diactorus Lv8 2800/2500 ATK || M4: Artmage Non-Finito Lv7 2400/1500 ATK || M5: Nerva the Power Patron of Creation Lv10 3300/3300 ATK || EMZ-L: Medicurius the Power Patron of Illusions L3↙↓↘ 9000    Spell/Trap: S1: Ars Magna - "Citrinitas" || S2: Artmage Impasto -Recapture- (Set)   GY: Ars Magna of Infinity and Finity, Purification Power Patron, Nervedo the Shadebeast Power Patron, Junora the Power Patron of Tuning   Banished: Small World (face-down), Artmage Finmel (face-down), Griffoh (face-down), Apprentice I

## Order 3: best 12.3 (, worst 12.3) — from tries Special Summon (procedure) Artmage Non-Finito → new early order
Others: tries Special Summon (procedure) Artmage Non-Finito → new early order → new ending 12.3 · tries Special Summon (procedure) Artmage Non-Finito 12 · tries Activate Junoldo the Shadespirit Power Patron 11.65 · tries Special Summon (procedure) Artmage Non-Finito → new ending 11 · search 9.41 · tries Activate Prohibited Power Patron Portal - Terminus 9.41 · opening lanes 9.41 · tries Activate Mind Shuffle 9.41 · tries Normal Summon Theorealize Medius 9.41 · tries Special Summon (procedure) Artmage Non-Finito → new early order → new early order 9.41 · tries Activate Vidolium the Unstable Power Patron of Unity 8.41

1. Activate Ars Magna of Infinity and Finity (hand): You can banish this card from your hand; add 1 non-Warrior "Ars Magna" monster from your Deck to your hand
2. Selected Ars Magna of Purification and Corruption (Deck)
3. Activate Ars Magna of Purification and Corruption (hand): You can banish this card from your hand; add 1 "Ars Magna" Spell/Trap from your Deck to your hand
4. Selected Ars Magna - "Citrinitas" (Deck)
5. Set Spell/Trap Ars Magna - "Citrinitas"
6. Activate Ars Magna - "Citrinitas" (S1): activate this card
7. Activate Ars Magna - "Citrinitas" (S1): Add 1 "Medius" or "Ars Magna" monster from your Deck to your hand
8. Selected Medius the Pure (Deck)
9. Normal Summon Medius the Pure (hand)
10. Yes
11. Selected Nervedo the Shadebeast Power Patron (Deck)
12. Special Summon it
13. Link Summon Purification Power Patron (Extra Deck)
14. select Medius the Pure (M3)
15. select Nervedo the Shadebeast Power Patron (M4)
16. Yes
17. Selected Junoldo the Shadespirit Power Patron (Deck)
18. Activate Junoldo the Shadespirit Power Patron (M1): Special Summon 1 "Junora the Power Patron of Tuning" from your Extra Deck
19. Selected Junora the Power Patron of Tuning (Extra Deck)
20. Yes
21. Selected Nervedo the Shadebeast Power Patron (Extra Deck)
22. Activate Medius the Pure (GY): Shuffle 1 monster from your hand or face-up field into the Deck, and if you do, Special Summon this card
23. Selected Ash Blossom & Joyous Spring (hand)
24. Activate Purification Power Patron (EMZ-L): Link Summon including this card as material
25. Selected Medicurius the Power Patron of Illusions (Extra Deck)
26. select Medius the Pure (M5)
27. Finish selection
28. Activate Ars Magna of Infinity and Finity (banishment): Special Summon this card
29. Link Summon Purification Power Patron (Extra Deck)
30. select Junora the Power Patron of Tuning (M4)
31. select Ars Magna of Infinity and Finity (M1)
32. Activate Purification Power Patron (M4): Add 1 "Theorealize" card from your Deck to your hand
33. Selected Theorealize Medius (Deck)
34. Activate Theorealize Medius (hand): If a "Power Patron" card is on the field: You can Special Summon this card from your hand, then you can add 1 "Theorealize" Spell/Trap from your Deck to your hand
35. Yes
36. Selected Theorealize Past Lull (Deck)
37. Special Summon (procedure) Artmage Non-Finito (Extra Deck)
38. Selected Theorealize Past Lull (hand)
39. Selected Nervedo the Shadebeast Power Patron (hand)
40. Yes
41. Selected Artmage Impasto -Recapture- (Deck)
42. Activate Theorealize Past Lull (GY): Special Summon 1 Fusion, Synchro, or Xyz Monster from your GY
43. Selected Junora the Power Patron of Tuning (GY)
44. Link Summon S:P Little Knight (Extra Deck)
45. select Purification Power Patron (M4)
46. select Junora the Power Patron of Tuning (M3)
47. Activate Ars Magna of Purification and Corruption (banishment): Special Summon this card
48. Activate S:P Little Knight (M3): Banish 1 card on the field or GY
49. Selected Purification Power Patron (GY)
50. Yes
51. Special Summon 1 "Diactorus" monster
52. Selected Artmage Diactorus (Extra Deck)

End board:  LP 8000 | Hand 3 | Deck 34 | Extra 9 | GY 4 | Banished 7   Monsters: M2: Ars Magna of Purification and Corruption Lv8 1000/2100 ATK || M3: S:P Little Knight L2←→ 1600  || M4: Artmage Diactorus Lv8 2800/2500 ATK || M5: Artmage Non-Finito Lv7 2400/1500 ATK || EMZ-R: Medicurius the Power Patron of Illusions L3↙↓↘ 9000    Spell/Trap: S1: Ars Magna - "Citrinitas" || S2: Artmage Impasto -Recapture- (Set)   GY: Purification Power Patron, Ars Magna of Infinity and Finity, Nervedo the Shadebeast Power Patron, Junora the Power Patron of Tuning   Banished: Artmage Vandalism -Assault- (face-down), Dark Magical Circle (face-down), Artmage Vandalism -Assault- (face-down), Medius the Pure, Theorealize Pas

## Order 4: best 13.3 (, worst 13.3) — from tries Special Summon (procedure) Artmage Non-Finito → new ending
Others: tries Special Summon (procedure) Artmage Non-Finito 13 · tries Activate Theorealize Liberation 12.9 · tries Activate Prohibited Power Patron Portal - Terminus 12.85 · tries Special Summon (procedure) Artmage Non-Finito → new ending → new early order 11.9 · tries Special Summon (procedure) Artmage Non-Finito → new ending → new ending 11.2 · tries Activate Artmage Vandalism -Assault- 10.73 · search 9.41 · opening lanes 9.41 · tries Activate Artmage Vandalism -Assault- 9.41 · tries Activate Artmage Diactorus 9.41 · tries Special Summon (procedure) Artmage Non-Finito → new ending → new early order 9.41

1. Activate Ars Magna of Infinity and Finity (hand): You can banish this card from your hand; add 1 non-Warrior "Ars Magna" monster from your Deck to your hand
2. Selected Ars Magna of Purification and Corruption (Deck)
3. Activate Ars Magna of Purification and Corruption (hand): You can banish this card from your hand; add 1 "Ars Magna" Spell/Trap from your Deck to your hand
4. Selected Ars Magna - "Citrinitas" (Deck)
5. Activate Ars Magna - "Citrinitas" (hand): activate this card
6. Activate Ars Magna - "Citrinitas" (S1): Add 1 "Medius" or "Ars Magna" monster from your Deck to your hand
7. Selected Medius the Pure (Deck)
8. Normal Summon Medius the Pure (hand)
9. Yes
10. Selected Nervedo the Shadebeast Power Patron (Deck)
11. Special Summon it
12. Activate Nervedo the Shadebeast Power Patron (M3): Special Summon 1 "Nerva the Power Patron of Creation" from your Extra Deck
13. Selected Nerva the Power Patron of Creation (Extra Deck)
14. Yes
15. Activate Ars Magna of Infinity and Finity (banishment): Special Summon this card
16. Selected Junoldo the Shadespirit Power Patron (Deck)
17. Activate Junoldo the Shadespirit Power Patron (M3): Special Summon 1 "Junora the Power Patron of Tuning" from your Extra Deck
18. Selected Junora the Power Patron of Tuning (Extra Deck)
19. Yes
20. Selected Nervedo the Shadebeast Power Patron (Extra Deck)
21. Link Summon Purification Power Patron (Extra Deck)
22. select Ars Magna of Infinity and Finity (M5)
23. select Junora the Power Patron of Tuning (EMZ-R)
24. Activate Purification Power Patron (EMZ-R): Add 1 "Theorealize" card from your Deck to your hand
25. Activate Purification Power Patron (EMZ-R): Link Summon including this card as material
26. Selected Medicurius the Power Patron of Illusions (Extra Deck)
27. select Medius the Pure (M1)
28. Finish selection
29. Selected Theorealize Medius (Deck)
30. No
31. Activate Theorealize Medius (hand): If a "Power Patron" card is on the field: You can Special Summon this card from your hand, then you can add 1 "Theorealize" Spell/Trap from your Deck to your hand
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
42. Selected Ash Blossom & Joyous Spring (hand)
43. Link Summon S:P Little Knight (Extra Deck)
44. select Junora the Power Patron of Tuning (M5)
45. select Medius the Pure (M2)
46. Yes
47. Special Summon 1 "Diactorus" monster
48. Activate Ars Magna of Purification and Corruption (banishment): Special Summon this card
49. Selected Artmage Diactorus (Extra Deck)

End board:  LP 8000 | Hand 3 | Deck 31 | Extra 9 | GY 4 | Banished 9   Monsters: M1: Artmage Non-Finito Lv7 2400/1500 ATK || M2: Ars Magna of Purification and Corruption Lv8 1000/2100 ATK || M3: Artmage Diactorus Lv8 2800/2500 ATK || M4: Nerva the Power Patron of Creation Lv10 3300/3300 ATK || M5: S:P Little Knight L2←→ 1600  || EMZ-R: Medicurius the Power Patron of Illusions L3↙↓↘ 9000    Spell/Trap: S1: Ars Magna - "Citrinitas" || S2: Artmage Impasto -Recapture- (Set)   GY: Ars Magna of Infinity and Finity, Purification Power Patron, Nervedo the Shadebeast Power Patron, Junora the Power Patron of Tuning   Banished: Fiendsmith's Tract (face-down), Light and Darkness Ritual (face-down), Small World (fa

