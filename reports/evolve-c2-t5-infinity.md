# Evolved lines — Ars Magna of Infinity and Finity, Ash Blossom & Joyous Spring, Ash Blossom & Joyous Spring, Droll & Lock Bird, Ghost Ogre & Snow Rabbit (findlist-1100)
2026-11-25T23:47:01.845Z

8 deck orders (different face-down banishes / draws), 3 opponent hands x o_ss_panama + o_elfnote + o_despia + o_angelechy per line, 5 min searches, 4 mutation rounds.
Fitness = end-board interruptions (the lab scorer, src/disrupt.mjs: wipe 2, negate 1-1.5, banish/protection less; hand traps kept count 1 each). The winner of each order is also played into the opponent decks: margin after their turn shown beside it.

**Margin after their turn (winners): average 5.88** (worst -2)

**Best line per deck order: average 12.81** (worst order 11.9). Winner came from: opening lanes 1, search 2, search → new early order 1

| seed line | works as written | its score when it works | seed start + search finish (all orders) |
|---|---|---|---|
| inf1 | 4/8 | 6.81 | 10.18 |
| v52-infinity | 3/8 | 11.6 | 12.07 |

## Weak points found automatically
Cards whose face-down banish (by your own costs) hurt the best line most (average best line without vs with that card banished):

| card | orders where it was banished | drop |
|---|---|---|
| Fiendsmith Engraver | 2/8 | 0.73 |
| Magician of Dark Chaos - Black Chaos | 2/8 | 0.73 |
| Nervedo the Shadebeast Power Patron | 2/8 | 0.43 |
| Medius the Pure | 3/8 | 0.32 |
| Pendulum Treasure | 3/8 | 0.25 |
| Artmage Finmel | 2/8 | -0.43 |
| Apprentice Illusion Magician | 2/8 | -0.43 |
| Griffoh | 2/8 | -0.67 |
| Theorealize Medius | 2/8 | -0.67 |
| Infinite Impermanence | 2/8 | -0.73 |

Where the hand-designed lines broke (next step that no longer worked):
- v52-infinity: Impasto (1x)

List changes proposed for the list test (data/proposals-findlist-1100.json):
- +1 Fiendsmith Engraver, −1 Plundered Power Patron Plane - Vidolia — Fiendsmith Engraver: best line 0.73 worse when a cost banished it (2 of 8 orders) — Ars Magna of Infinity and Finity
- +1 Magician of Dark Chaos - Black Chaos, −1 Artmage Vandalism -Assault- — Magician of Dark Chaos - Black Chaos: best line 0.73 worse when a cost banished it (2 of 8 orders) — Ars Magna of Infinity and Finity
- +1 Fiendsmith Engraver — Fiendsmith Engraver: best line 0.73 worse when a cost banished it (2 of 8 orders) — Ars Magna of Infinity and Finity (add only: deck grows, up to 60)
- +1 Magician of Dark Chaos - Black Chaos — Magician of Dark Chaos - Black Chaos: best line 0.73 worse when a cost banished it (2 of 8 orders) — Ars Magna of Infinity and Finity (add only: deck grows, up to 60)

Effects the search had not used, tried on purpose (best result so far):
- Activate Black Chaos: 13
- Normal Summon Theorealize Medius: 13
- Activate Fiendsmith Engraver: 13
- Activate Fiendsmith's Tract: 13
- Activate Fiendsmith Engraver: 13
- Activate Vidolium the Unstable Power Patron of Unity: 11.65
- Activate Prohibited Power Patron Portal - Terminus: 9.41
- Activate Griffoh: 4.67

## Order 1: best 13.3 [margin 8.86: ss_panama null, elfnote 7.54, despia null, angelechy 9.3] (, worst 13.3) — from opening lanes
Others: opening lanes → new ending 13.3 · opening lanes → new ending 13.3 · search 13 · tries Activate Fiendsmith's Tract 13 · tries Activate Fiendsmith Engraver 13 · opening lanes → new early order 13 · opening lanes → new early order 12.85 · v52-infinity 12.45 · v52-infinity 11.6 · inf1 9.78 · inf1 6.81

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
13. Activate Nervedo the Shadebeast Power Patron (M2): Special Summon 1 "Nerva the Power Patron of Creation" from your Extra Deck
14. Selected Nerva the Power Patron of Creation (Extra Deck)
15. Yes
16. Activate Ars Magna of Infinity and Finity (banishment): Special Summon this card
17. Selected Junoldo the Shadespirit Power Patron (Deck)
18. Activate Junoldo the Shadespirit Power Patron (M5): Special Summon 1 "Junora the Power Patron of Tuning" from your Extra Deck
19. Selected Junora the Power Patron of Tuning (Extra Deck)
20. Yes
21. Selected Nervedo the Shadebeast Power Patron (Extra Deck)
22. Link Summon Purification Power Patron (Extra Deck)
23. select Ars Magna of Infinity and Finity (M4)
24. select Junora the Power Patron of Tuning (EMZ-R)
25. Activate Purification Power Patron (EMZ-L): Add 1 "Theorealize" card from your Deck to your hand
26. Selected Theorealize Medius (Deck)
27. Activate Theorealize Medius (hand): If a "Power Patron" card is on the field: You can Special Summon this card from your hand, then you can add 1 "Theorealize" Spell/Trap from your Deck to your hand
28. Yes
29. Selected Theorealize Past Lull (Deck)
30. Special Summon (procedure) Artmage Non-Finito (Extra Deck)
31. Selected Theorealize Past Lull (hand)
32. Selected Nervedo the Shadebeast Power Patron (hand)
33. Yes
34. Selected Artmage Impasto -Recapture- (Deck)
35. Activate Purification Power Patron (EMZ-L): Link Summon including this card as material
36. Selected Medicurius the Power Patron of Illusions (Extra Deck)
37. select Medius the Pure (M1)
38. Finish selection
39. No
40. Activate Medius the Pure (GY): Shuffle 1 monster from your hand or face-up field into the Deck, and if you do, Special Summon this card
41. Selected Ash Blossom & Joyous Spring (hand)
42. Activate Theorealize Past Lull (GY): Special Summon 1 Fusion, Synchro, or Xyz Monster from your GY
43. Selected Junora the Power Patron of Tuning (GY)
44. Link Summon S:P Little Knight (Extra Deck)
45. select Junora the Power Patron of Tuning (M5)
46. select Medius the Pure (M1)
47. Yes
48. Special Summon 1 "Diactorus" monster
49. Activate Ars Magna of Purification and Corruption (banishment): Special Summon this card
50. Selected Artmage Diactorus (Extra Deck)

End board:  LP 8000 | Hand 3 | Deck 31 | Extra 9 | GY 4 | Banished 9   Monsters: M1: Ars Magna of Purification and Corruption Lv8 1000/2100 ATK || M2: Artmage Non-Finito Lv7 2400/1500 ATK || M3: Nerva the Power Patron of Creation Lv10 3300/3300 ATK || M4: Artmage Diactorus Lv8 2800/2500 ATK || M5: S:P Little Knight L2←→ 1600  || EMZ-R: Medicurius the Power Patron of Illusions L3↙↓↘ 9000    Spell/Trap: S1: Ars Magna - "Citrinitas" || S2: Artmage Impasto -Recapture- (Set)   GY: Ars Magna of Infinity and Finity, Nervedo the Shadebeast Power Patron, Purification Power Patron, Junora the Power Patron of Tuning   Banished: Infinite Impermanence (face-down), Small World (face-down), Light and Darkness Ritual 

## Order 2: best 13 [margin 5.11: ss_panama 4.93, elfnote -1.8, despia 2.89, angelechy 8.95] (, worst 13) — from search
Others: opening lanes 13 · tries Activate Black Chaos 13 · tries Activate Fiendsmith Engraver 13 · v52-infinity 12.45 · v52-infinity 11.6 · inf1 11.35 · inf1 6.81

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
17. Activate Junoldo the Shadespirit Power Patron (M2): Special Summon 1 "Junora the Power Patron of Tuning" from your Extra Deck
18. Selected Junora the Power Patron of Tuning (Extra Deck)
19. Yes
20. Selected Nervedo the Shadebeast Power Patron (Extra Deck)
21. Link Summon Purification Power Patron (Extra Deck)
22. select Ars Magna of Infinity and Finity (M5)
23. select Junora the Power Patron of Tuning (EMZ-R)
24. Activate Purification Power Patron (EMZ-R): Add 1 "Theorealize" card from your Deck to your hand
25. Activate Ars Magna of Purification and Corruption (banishment): Special Summon this card
26. Activate Purification Power Patron (EMZ-R): Link Summon including this card as material
27. Selected Medicurius the Power Patron of Illusions (Extra Deck)
28. select Medius the Pure (M1)
29. Finish selection
30. Selected Theorealize Medius (Deck)
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
42. Selected Junora the Power Patron of Tuning (M2)
43. Link Summon S:P Little Knight (Extra Deck)
44. select Medius the Pure (M2)
45. select Ars Magna of Purification and Corruption (M5)
46. Yes
47. Special Summon 1 "Diactorus" monster
48. Selected Artmage Diactorus (Extra Deck)

End board:  LP 8000 | Hand 4 | Deck 30 | Extra 10 | GY 4 | Banished 10   Monsters: M1: Artmage Diactorus Lv8 2800/2500 ATK || M2: S:P Little Knight L2←→ 1600  || M3: Artmage Non-Finito Lv7 2400/1500 ATK || M4: Nerva the Power Patron of Creation Lv10 3300/3300 ATK || EMZ-L: Medicurius the Power Patron of Illusions L3↙↓↘ 9000    Spell/Trap: S2: Artmage Impasto -Recapture- (Set)   GY: Ars Magna of Infinity and Finity, Purification Power Patron, Nervedo the Shadebeast Power Patron, Ars Magna of Purification and Corruption   Banished: Small World (face-down), Artmage Finmel (face-down), Griffoh (face-down), Apprentice Illusion Magician (face-down), Fiendsmith Engraver (face-down), Theorealize Medius (face-d

## Order 3: best 11.9 [margin 3.49: ss_panama 4.33, elfnote 3.26, despia 0.25, angelechy 5.25] (, worst 11.9) — from search → new early order
Others: search 11.65 · search → new early order 11.65 · v52-infinity 10.94 · search → new ending 9.99 · search → new ending 9.62 · tries Activate Prohibited Power Patron Portal - Terminus 9.41 · opening lanes 9.41 · inf1 8.55 · inf1 6.81

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
12. Link Summon Purification Power Patron (Extra Deck)
13. select Medius the Pure (M4)
14. select Nervedo the Shadebeast Power Patron (M1)
15. Yes
16. Selected Junoldo the Shadespirit Power Patron (Deck)
17. Activate Junoldo the Shadespirit Power Patron (M2): Special Summon 1 "Junora the Power Patron of Tuning" from your Extra Deck
18. Selected Junora the Power Patron of Tuning (Extra Deck)
19. Yes
20. Selected Nervedo the Shadebeast Power Patron (Extra Deck)
21. Activate Medius the Pure (GY): Shuffle 1 monster from your hand or face-up field into the Deck, and if you do, Special Summon this card
22. Selected Ash Blossom & Joyous Spring (hand)
23. Link Summon Purification Power Patron (Extra Deck)
24. select Medius the Pure (M3)
25. select Junora the Power Patron of Tuning (M2)
26. Activate Ars Magna of Purification and Corruption (banishment): Special Summon this card
27. Activate Purification Power Patron (M2): Add 1 "Theorealize" card from your Deck to your hand
28. Activate Purification Power Patron (M2): Link Summon including this card as material
29. Selected Medicurius the Power Patron of Illusions (Extra Deck)
30. select Purification Power Patron (EMZ-L)
31. Selected Theorealize Medius (Deck)
32. Yes
33. Activate Theorealize Medius (hand): If a "Power Patron" card is on the field: You can Special Summon this card from your hand, then you can add 1 "Theorealize" Spell/Trap from your Deck to your hand
34. Yes
35. Selected Theorealize Past Lull (Deck)
36. Special Summon (procedure) Artmage Non-Finito (Extra Deck)
37. Selected Theorealize Past Lull (hand)
38. Selected Nervedo the Shadebeast Power Patron (hand)
39. Yes
40. Selected Artmage Impasto -Recapture- (Deck)
41. Activate Theorealize Past Lull (GY): Special Summon 1 Fusion, Synchro, or Xyz Monster from your GY
42. Selected Junora the Power Patron of Tuning (GY)
43. Activate Ars Magna of Infinity and Finity (M1): Banish 1 monster on the field
44. Selected Junora the Power Patron of Tuning (M2)
45. Yes
46. Special Summon 1 "Diactorus" monster
47. Selected Artmage Diactorus (Extra Deck)

End board:  LP 8000 | Hand 3 | Deck 34 | Extra 10 | GY 3 | Banished 7   Monsters: M1: Ars Magna of Infinity and Finity Lv8 1000/2400 ATK || M2: Artmage Diactorus Lv8 2800/2500 ATK || M3: Ars Magna of Purification and Corruption Lv8 1000/2100 ATK || M5: Artmage Non-Finito Lv7 2400/1500 ATK || EMZ-L: Medicurius the Power Patron of Illusions L3↙↓↘ 9000    Spell/Trap: S1: Ars Magna - "Citrinitas" || S2: Artmage Impasto -Recapture- (Set)   GY: Purification Power Patron, Purification Power Patron, Nervedo the Shadebeast Power Patron   Banished: Artmage Vandalism -Assault- (face-down), Dark Magical Circle (face-down), Artmage Vandalism -Assault- (face-down), Medius the Pure, Theorealize Past Lull, Junora the 

## Order 4: best 13.05 [margin 6.07: ss_panama 5.85, elfnote 4.93, despia 3.53, angelechy 9.05] (, worst 13.05) — from search
Others: tries Normal Summon Theorealize Medius 13 · opening lanes 13 · search → new ending 13 · search → new early order 12.9 · search → new ending 12.9 · search → new early order 12.9 · v52-infinity 12.45 · tries Activate Vidolium the Unstable Power Patron of Unity 11.65 · v52-infinity 11.6 · inf1 11.05 · inf1 6.81

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
12. Activate Nervedo the Shadebeast Power Patron (M4): Special Summon 1 "Nerva the Power Patron of Creation" from your Extra Deck
13. Selected Nerva the Power Patron of Creation (Extra Deck)
14. Yes
15. Selected Junoldo the Shadespirit Power Patron (Deck)
16. Activate Junoldo the Shadespirit Power Patron (M2): Special Summon 1 "Junora the Power Patron of Tuning" from your Extra Deck
17. Selected Junora the Power Patron of Tuning (Extra Deck)
18. Yes
19. Selected Nervedo the Shadebeast Power Patron (Extra Deck)
20. Link Summon Purification Power Patron (Extra Deck)
21. select Medius the Pure (M3)
22. select Junora the Power Patron of Tuning (EMZ-L)
23. Activate Ars Magna of Infinity and Finity (banishment): Special Summon this card
24. Activate Purification Power Patron (EMZ-R): Add 1 "Theorealize" card from your Deck to your hand
25. Selected Theorealize Medius (Deck)
26. Activate Theorealize Medius (hand): If a "Power Patron" card is on the field: You can Special Summon this card from your hand, then you can add 1 "Theorealize" Spell/Trap from your Deck to your hand
27. Yes
28. Selected Theorealize Past Lull (Deck)
29. Special Summon (procedure) Artmage Non-Finito (Extra Deck)
30. Selected Theorealize Past Lull (hand)
31. Selected Nervedo the Shadebeast Power Patron (hand)
32. Yes
33. Selected Artmage Impasto -Recapture- (Deck)
34. Activate Theorealize Past Lull (GY): Special Summon 1 Fusion, Synchro, or Xyz Monster from your GY
35. Selected Junora the Power Patron of Tuning (GY)
36. Activate Medius the Pure (GY): Shuffle 1 monster from your hand or face-up field into the Deck, and if you do, Special Summon this card
37. Selected Junora the Power Patron of Tuning (M4)
38. Link Summon Medicurius the Power Patron of Illusions (Extra Deck)
39. select Medius the Pure (M4)
40. select Purification Power Patron (EMZ-R)
41. Finish selection
42. Yes
43. Special Summon 1 "Diactorus" monster
44. Activate Ars Magna of Purification and Corruption (banishment): Special Summon this card
45. Selected Artmage Diactorus (Extra Deck)

End board:  LP 8000 | Hand 4 | Deck 30 | Extra 11 | GY 2 | Banished 9   Monsters: M1: Nerva the Power Patron of Creation Lv10 3300/3300 ATK || M2: Artmage Non-Finito Lv7 2400/1500 ATK || M3: Artmage Diactorus Lv8 2800/2500 ATK || M4: Ars Magna of Purification and Corruption Lv8 1000/2100 ATK || M5: Ars Magna of Infinity and Finity Lv8 1000/2400 ATK || EMZ-R: Medicurius the Power Patron of Illusions L3↙↓↘ 9000    Spell/Trap: S1: Ars Magna - "Citrinitas" || S2: Artmage Impasto -Recapture- (Set)   GY: Nervedo the Shadebeast Power Patron, Purification Power Patron   Banished: Fiendsmith's Tract (face-down), Light and Darkness Ritual (face-down), Small World (face-down), Pendulum Treasure (face-down), Appre

