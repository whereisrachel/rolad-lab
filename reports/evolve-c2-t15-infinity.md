# Evolved lines — Ars Magna of Infinity and Finity, Ash Blossom & Joyous Spring, Ash Blossom & Joyous Spring, Droll & Lock Bird, Ghost Ogre & Snow Rabbit (findlist-1100)
2026-11-26T01:35:35.008Z

8 deck orders (different face-down banishes / draws), 3 opponent hands x o_ss_panama + o_elfnote + o_despia + o_angelechy per line, 15 min searches, 4 mutation rounds.
Fitness = end-board interruptions (the lab scorer, src/disrupt.mjs: wipe 2, negate 1-1.5, banish/protection less; hand traps kept count 1 each). The winner of each order is also played into the opponent decks: margin after their turn shown beside it.

**Margin after their turn (winners): average 4.93** (worst -3.53)

**Best line per deck order: average 12.89** (worst order 11.65). Winner came from: search 1, tries Activate Fiendsmith Engraver 1, inf1 → new early order 1, tries Activate Junoldo the Shadespirit Power Patron 1

| seed line | works as written | its score when it works | seed start + search finish (all orders) |
|---|---|---|---|
| inf1 | 4/8 | 6.81 | 11.77 |
| v52-infinity | 3/8 | 11.6 | 12.07 |

## Weak points found automatically
Cards whose face-down banish (by your own costs) hurt the best line most (average best line without vs with that card banished):

| card | orders where it was banished | drop |
|---|---|---|
| Fiendsmith Engraver | 2/8 | 0.82 |
| Pendulum Treasure | 3/8 | 0.55 |
| Infinite Impermanence | 2/8 | -0.82 |
| Light and Darkness Ritual | 2/8 | -0.82 |
| Fiendsmith's Tract | 2/8 | -0.82 |
| Apprentice Illusion Magician | 2/8 | -0.82 |
| Small World | 3/8 | -1.65 |

Where the hand-designed lines broke (next step that no longer worked):
- v52-infinity: Impasto (1x)

List changes proposed for the list test (data/proposals-findlist-1100.json):
- +1 Fiendsmith Engraver, −1 Plundered Power Patron Plane - Vidolia — Fiendsmith Engraver: best line 0.82 worse when a cost banished it (2 of 8 orders) — Ars Magna of Infinity and Finity
- +1 Fiendsmith Engraver — Fiendsmith Engraver: best line 0.82 worse when a cost banished it (2 of 8 orders) — Ars Magna of Infinity and Finity (add only: deck grows, up to 60)

Effects the search had not used, tried on purpose (best result so far):
- Activate Junoldo the Shadespirit Power Patron: 13.3
- Activate Fiendsmith Engraver: 13.3
- Activate Prohibited Power Patron Portal - Terminus: 13
- Activate Fiendsmith's Tract: 13
- Activate Fiendsmith Engraver: 13
- Activate Mind Shuffle: 9.41
- Activate Black Chaos: 9.41
- Activate Mind Shuffle: 9.41

## Order 1: best 13.3 [margin 5.11: ss_panama 1.07, elfnote 7.69, despia 2.77, angelechy 9.3] (, worst 13.3) — from search
Others: opening lanes 13.3 · tries Activate Fiendsmith Engraver 13 · search → new early order 13 · v52-infinity 12.45 · search → new ending 12.45 · search → new early order 11.9 · v52-infinity 11.6 · inf1 11.35 · search → new ending 10.94 · tries Activate Mind Shuffle 9.41 · inf1 6.81

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
12. Activate Nervedo the Shadebeast Power Patron (M5): Special Summon 1 "Nerva the Power Patron of Creation" from your Extra Deck
13. Selected Nerva the Power Patron of Creation (Extra Deck)
14. Yes
15. Activate Ars Magna of Infinity and Finity (banishment): Special Summon this card
16. Selected Junoldo the Shadespirit Power Patron (Deck)
17. Activate Junoldo the Shadespirit Power Patron (M1): Special Summon 1 "Junora the Power Patron of Tuning" from your Extra Deck
18. Selected Junora the Power Patron of Tuning (Extra Deck)
19. Yes
20. Selected Nervedo the Shadebeast Power Patron (Extra Deck)
21. Link Summon Purification Power Patron (Extra Deck)
22. select Ars Magna of Infinity and Finity (M3)
23. select Junora the Power Patron of Tuning (EMZ-R)
24. Activate Purification Power Patron (EMZ-R): Add 1 "Theorealize" card from your Deck to your hand
25. Selected Theorealize Medius (Deck)
26. Activate Purification Power Patron (EMZ-R): Link Summon including this card as material
27. Selected Medicurius the Power Patron of Illusions (Extra Deck)
28. select Medius the Pure (M4)
29. Finish selection
30. No
31. Activate Theorealize Medius (hand): If a "Power Patron" card is on the field: You can Special Summon this card from your hand, then you can add 1 "Theorealize" Spell/Trap from your Deck to your hand
32. Yes
33. Selected Theorealize Past Lull (Deck)
34. Activate Medius the Pure (GY): Shuffle 1 monster from your hand or face-up field into the Deck, and if you do, Special Summon this card
35. Selected Ash Blossom & Joyous Spring (hand)
36. Special Summon (procedure) Artmage Non-Finito (Extra Deck)
37. Selected Theorealize Past Lull (hand)
38. Selected Nervedo the Shadebeast Power Patron (hand)
39. Yes
40. Selected Artmage Impasto -Recapture- (Deck)
41. Activate Theorealize Past Lull (GY): Special Summon 1 Fusion, Synchro, or Xyz Monster from your GY
42. Selected Junora the Power Patron of Tuning (GY)
43. Link Summon S:P Little Knight (Extra Deck)
44. select Junora the Power Patron of Tuning (M2)
45. select Medius the Pure (M1)
46. Yes
47. Special Summon 1 "Diactorus" monster
48. Activate Ars Magna of Purification and Corruption (banishment): Special Summon this card
49. Selected Artmage Diactorus (Extra Deck)

End board:  LP 8000 | Hand 3 | Deck 31 | Extra 9 | GY 4 | Banished 9   Monsters: M1: S:P Little Knight L2←→ 1600  || M2: Ars Magna of Purification and Corruption Lv8 1000/2100 ATK || M3: Artmage Diactorus Lv8 2800/2500 ATK || M4: Artmage Non-Finito Lv7 2400/1500 ATK || M5: Nerva the Power Patron of Creation Lv10 3300/3300 ATK || EMZ-L: Medicurius the Power Patron of Illusions L3↙↓↘ 9000    Spell/Trap: S1: Ars Magna - "Citrinitas" || S2: Artmage Impasto -Recapture- (Set)   GY: Ars Magna of Infinity and Finity, Purification Power Patron, Nervedo the Shadebeast Power Patron, Junora the Power Patron of Tuning   Banished: Infinite Impermanence (face-down), Small World (face-down), Light and Darkness Ritual 

## Order 2: best 13.3 [margin 6.24: ss_panama 6.2, elfnote 3.4, despia 0.08, angelechy 9.25] (, worst 13.3) — from tries Activate Fiendsmith Engraver
Others: tries Activate Fiendsmith Engraver → new ending 13.3 · tries Activate Fiendsmith Engraver → new early order 13.3 · inf1 13.2 · search 13 · tries Activate Fiendsmith's Tract 13 · opening lanes 13 · tries Activate Fiendsmith Engraver → new ending 13 · tries Activate Fiendsmith Engraver → new early order 13 · v52-infinity 12.45 · v52-infinity 11.6 · inf1 6.81

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
21. select Medius the Pure (M1)
22. select Junora the Power Patron of Tuning (EMZ-L)
23. Activate Ars Magna of Infinity and Finity (banishment): Special Summon this card
24. Activate Purification Power Patron (EMZ-L): Add 1 "Theorealize" card from your Deck to your hand
25. Selected Theorealize Medius (Deck)
26. Activate Theorealize Medius (hand): If a "Power Patron" card is on the field: You can Special Summon this card from your hand, then you can add 1 "Theorealize" Spell/Trap from your Deck to your hand
27. Yes
28. Selected Theorealize Past Lull (Deck)
29. Activate Purification Power Patron (EMZ-L): Link Summon including this card as material
30. Selected Medicurius the Power Patron of Illusions (Extra Deck)
31. select Ars Magna of Infinity and Finity (M2)
32. Finish selection
33. No
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
44. select Medius the Pure (M5)
45. select Junora the Power Patron of Tuning (M2)
46. Yes
47. Special Summon 1 "Diactorus" monster
48. Activate Ars Magna of Purification and Corruption (banishment): Special Summon this card
49. Selected Artmage Diactorus (Extra Deck)

End board:  LP 8000 | Hand 3 | Deck 31 | Extra 9 | GY 4 | Banished 9   Monsters: M1: Artmage Non-Finito Lv7 2400/1500 ATK || M2: S:P Little Knight L2←→ 1600  || M3: Nerva the Power Patron of Creation Lv10 3300/3300 ATK || M4: Artmage Diactorus Lv8 2800/2500 ATK || M5: Ars Magna of Purification and Corruption Lv8 1000/2100 ATK || EMZ-L: Medicurius the Power Patron of Illusions L3↙↓↘ 9000    Spell/Trap: S1: Ars Magna - "Citrinitas" || S2: Artmage Impasto -Recapture- (Set)   GY: Ars Magna of Infinity and Finity, Purification Power Patron, Nervedo the Shadebeast Power Patron, Junora the Power Patron of Tuning   Banished: Small World (face-down), Artmage Finmel (face-down), Griffoh (face-down), Apprentice I

## Order 3: best 11.65 [margin 3.34: ss_panama 6.36, elfnote 1.35, despia 1.38, angelechy 5.25] (, worst 11.65) — from inf1 → new early order
Others: inf1 11.5 · inf1 → new ending 11.5 · inf1 → new ending 11.5 · v52-infinity 10.94 · inf1 → new early order 10.73 · search 9.41 · tries Activate Mind Shuffle 9.41 · opening lanes 9.41 · tries Activate Black Chaos 9.41 · inf1 6.81

1. Activate Ars Magna of Infinity and Finity (hand): You can banish this card from your hand; add 1 non-Warrior "Ars Magna" monster from your Deck to your hand
2. Selected Ars Magna of Purification and Corruption (Deck)
3. Activate Ars Magna of Purification and Corruption (hand): You can banish this card from your hand; add 1 "Ars Magna" Spell/Trap from your Deck to your hand
4. Selected Ars Magna - "Citrinitas" (Deck)
5. Activate Ars Magna - "Citrinitas" (hand): activate this card
6. Activate Ars Magna - "Citrinitas" (S1): Add 1 "Medius" or "Ars Magna" monster from your Deck to your hand
7. Selected Medius the Pure (Deck)
8. Normal Summon Medius the Pure (hand)
9. Yes
10. Selected Junoldo the Shadespirit Power Patron (Deck)
11. Special Summon it
12. Activate Junoldo the Shadespirit Power Patron (M3): Special Summon 1 "Junora the Power Patron of Tuning" from your Extra Deck
13. Selected Junora the Power Patron of Tuning (Extra Deck)
14. Link Summon Purification Power Patron (Extra Deck)
15. select Medius the Pure (M1)
16. select Junora the Power Patron of Tuning (M2)
17. Activate Purification Power Patron (EMZ-L): Add 1 "Theorealize" card from your Deck to your hand
18. Selected Theorealize Medius (Deck)
19. Activate Theorealize Medius (hand): If a "Power Patron" card is on the field: You can Special Summon this card from your hand, then you can add 1 "Theorealize" Spell/Trap from your Deck to your hand
20. Yes
21. Selected Theorealize Liberation (Deck)
22. Activate Medius the Pure (GY): Shuffle 1 monster from your hand or face-up field into the Deck, and if you do, Special Summon this card
23. Selected Ash Blossom & Joyous Spring (hand)
24. Activate Theorealize Liberation (hand): Add to your hand, or Special Summon, 1 monster from your Deck with 300 ATK/200 DEF
25. Activate Purification Power Patron (EMZ-L): Link Summon including this card as material
26. Selected Medicurius the Power Patron of Illusions (Extra Deck)
27. select Medius the Pure (M3)
28. Finish selection
29. Selected Nervedo the Shadebeast Power Patron (Deck)
30. Special Summon it
31. Yes
32. Special Summon 1 "Diactorus" monster
33. Activate Ars Magna of Purification and Corruption (banishment): Special Summon this card
34. Selected Artmage Diactorus (Extra Deck)
35. Yes
36. Activate Nervedo the Shadebeast Power Patron (M1): Special Summon 1 "Nerva the Power Patron of Creation" from your Extra Deck
37. Selected Nerva the Power Patron of Creation (Extra Deck)
38. Yes
39. Selected Artmage Finmel (Deck)

End board:  LP 8000 | Hand 3 | Deck 31 | Extra 12 | GY 3 | Banished 8   Monsters: M1: Artmage Finmel Lv7 2400/1500 ATK || M2: Artmage Diactorus Lv8 2800/2500 ATK || M3: Ars Magna of Purification and Corruption Lv8 1000/2100 ATK || M4: Ars Magna of Infinity and Finity Lv8 1000/2400 ATK || M5: Nerva the Power Patron of Creation Lv10 3300/3300 ATK || EMZ-R: Medicurius the Power Patron of Illusions L3↙↓↘ 9000    Spell/Trap: S1: Ars Magna - "Citrinitas"   GY: Junora the Power Patron of Tuning, Purification Power Patron, Theorealize Liberation   Banished: Dark Magical Circle (face-down), Magician of Dark Chaos - Black Chaos (face-down), Fiendsmith Engraver (face-down), Medius the Pure, Theorealize Medius, Ne

## Order 4: best 13.3 [margin 5.03: ss_panama 4.67, elfnote 4.36, despia 1.45, angelechy 9.3] (, worst 13.3) — from tries Activate Junoldo the Shadespirit Power Patron
Others: opening lanes 13.3 · tries Activate Junoldo the Shadespirit Power Patron → new early order 13.3 · search 13 · tries Activate Prohibited Power Patron Portal - Terminus 13 · tries Activate Junoldo the Shadespirit Power Patron → new ending 12.85 · tries Activate Junoldo the Shadespirit Power Patron → new ending 12.55 · v52-infinity 12.45 · tries Activate Junoldo the Shadespirit Power Patron → new early order 11.9 · v52-infinity 11.6 · inf1 11.05 · inf1 6.81

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
15. Activate Ars Magna of Infinity and Finity (banishment): Special Summon this card
16. Selected Junoldo the Shadespirit Power Patron (Deck)
17. Activate Junoldo the Shadespirit Power Patron (M2): Special Summon 1 "Junora the Power Patron of Tuning" from your Extra Deck
18. Selected Junora the Power Patron of Tuning (Extra Deck)
19. Yes
20. Selected Nervedo the Shadebeast Power Patron (Extra Deck)
21. Link Summon Purification Power Patron (Extra Deck)
22. select Ars Magna of Infinity and Finity (M5)
23. select Junora the Power Patron of Tuning (EMZ-R)
24. Activate Purification Power Patron (EMZ-L): Add 1 "Theorealize" card from your Deck to your hand
25. Selected Theorealize Medius (Deck)
26. Activate Purification Power Patron (EMZ-L): Link Summon including this card as material
27. Selected Medicurius the Power Patron of Illusions (Extra Deck)
28. select Medius the Pure (M1)
29. Finish selection
30. No
31. Activate Theorealize Medius (hand): If a "Power Patron" card is on the field: You can Special Summon this card from your hand, then you can add 1 "Theorealize" Spell/Trap from your Deck to your hand
32. Yes
33. Selected Theorealize Past Lull (Deck)
34. Activate Medius the Pure (GY): Shuffle 1 monster from your hand or face-up field into the Deck, and if you do, Special Summon this card
35. Selected Ash Blossom & Joyous Spring (hand)
36. Special Summon (procedure) Artmage Non-Finito (Extra Deck)
37. Selected Theorealize Past Lull (hand)
38. Selected Nervedo the Shadebeast Power Patron (hand)
39. Yes
40. Selected Artmage Impasto -Recapture- (Deck)
41. Activate Theorealize Past Lull (GY): Special Summon 1 Fusion, Synchro, or Xyz Monster from your GY
42. Selected Junora the Power Patron of Tuning (GY)
43. Link Summon S:P Little Knight (Extra Deck)
44. select Junora the Power Patron of Tuning (M3)
45. select Medius the Pure (M2)
46. Yes
47. Special Summon 1 "Diactorus" monster
48. Activate Ars Magna of Purification and Corruption (banishment): Special Summon this card
49. Selected Artmage Diactorus (Extra Deck)

End board:  LP 8000 | Hand 3 | Deck 31 | Extra 9 | GY 4 | Banished 9   Monsters: M1: Artmage Diactorus Lv8 2800/2500 ATK || M2: Ars Magna of Purification and Corruption Lv8 1000/2100 ATK || M3: S:P Little Knight L2←→ 1600  || M4: Nerva the Power Patron of Creation Lv10 3300/3300 ATK || M5: Artmage Non-Finito Lv7 2400/1500 ATK || EMZ-R: Medicurius the Power Patron of Illusions L3↙↓↘ 9000    Spell/Trap: S1: Ars Magna - "Citrinitas" || S2: Artmage Impasto -Recapture- (Set)   GY: Ars Magna of Infinity and Finity, Purification Power Patron, Nervedo the Shadebeast Power Patron, Junora the Power Patron of Tuning   Banished: Fiendsmith's Tract (face-down), Light and Darkness Ritual (face-down), Small World (fa

