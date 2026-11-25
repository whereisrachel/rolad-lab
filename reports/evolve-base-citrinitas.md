# Evolved lines — Ars Magna - "Citrinitas", Ash Blossom & Joyous Spring, Ash Blossom & Joyous Spring, Droll & Lock Bird, Ghost Ogre & Snow Rabbit (findlist-1100)
2026-11-25T06:46:36.022Z

8 deck orders (different face-down banishes / draws), 3 opponent hands x o_ss_panama + o_elfnote + o_despia + o_angelechy per line, 1 min searches, 3 mutation rounds.
Fitness = average margin after their turn (what you keep minus what they build; −10 more if they OTK). Higher is better.

**Best line per deck order: average 3.84** (worst order 1.15). Winner came from: opening lanes 3, search 2, opening lanes → new early order 1, tries Activate Junoldo the Shadespirit Power Patron → new ending 1, tries Activate Theorealize Liberation → new ending → new early order 1

| seed line | works as written | its score when it works | seed start + search finish (all orders) |
|---|---|---|---|
| cit1 | 6/8 | 1.43 | 1.01 |

## Weak points found automatically
Cards whose face-down banish (by your own costs) hurt the best line most (average best line without vs with that card banished):

| card | orders where it was banished | drop |
|---|---|---|
| Artmage Impasto -Recapture- | 2/8 | 2.39 |
| Prohibited Power Patron Portal - Terminus | 2/8 | 1.48 |
| Pendulum Treasure | 4/8 | 1.46 |
| Nervedo the Shadebeast Power Patron | 3/8 | 1.33 |
| Theorealize Medius | 5/8 | 0.49 |
| Mind Shuffle | 4/8 | 0.26 |
| Ars Magna - "Citrinitas" | 5/8 | 0.17 |
| Magician of Dark Chaos - Black Chaos | 2/8 | -0.26 |
| Apprentice Illusion Magician | 2/8 | -0.41 |
| Fiendsmith Engraver | 2/8 | -0.44 |

Where the hand-designed lines broke (next step that no longer worked):
- cit1: Impasto (1x)
- cit1: Junoldo (1x)

List changes proposed for the list test (data/proposals-findlist-1100.json):
- +1 Artmage Impasto -Recapture-, −1 Plundered Power Patron Plane - Vidolia — Artmage Impasto -Recapture-: best line 2.39 worse when a cost banished it (2 of 8 orders) — Ars Magna - "Citrinitas"
- +1 Prohibited Power Patron Portal - Terminus, −1 Artmage Vandalism -Assault- — Prohibited Power Patron Portal - Terminus: best line 1.48 worse when a cost banished it (2 of 8 orders) — Ars Magna - "Citrinitas"
- +1 Artmage Impasto -Recapture- — Artmage Impasto -Recapture-: best line 2.39 worse when a cost banished it (2 of 8 orders) — Ars Magna - "Citrinitas" (add only: deck grows, up to 60)
- +1 Prohibited Power Patron Portal - Terminus — Prohibited Power Patron Portal - Terminus: best line 1.48 worse when a cost banished it (2 of 8 orders) — Ars Magna - "Citrinitas" (add only: deck grows, up to 60)

Effects the search had not used, tried on purpose (best result so far):
- Activate Griffoh: 4.67
- Activate Junoldo the Shadespirit Power Patron: 4.55
- Activate Nervedo the Shadebeast Power Patron: 4.18
- Activate Vidolium the Unstable Power Patron of Unity: 3.97
- Activate Artmage Diactorus: 3.37
- Activate Ars Magna of Infinity and Finity: 3.24
- Activate Theorealize Liberation: 3.08
- Activate Artmage Vandalism -Assault-: 2.73

## Order 1: best 3.56 (ss_panama 1.95, elfnote 0.7, despia 1.61, angelechy 7, worst 0) — from opening lanes
Others: tries Activate Ars Magna of Infinity and Finity 3.24 · tries Activate Theorealize Liberation 3.08 · search 2.12 · cit1 1.12 · cit1 0.71

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
19. select Junora the Power Patron of Tuning (M5)
20. Yes
21. Selected Theorealize Medius (Deck)
22. Activate Theorealize Medius (hand): If a "Power Patron" card is on the field: You can Special Summon this card from your hand, then you can add 1 "Theorealize" Spell/Trap from your Deck to your hand
23. Yes
24. Selected Theorealize Past Lull (Deck)
25. Activate Purification Power Patron (EMZ-L): Link Summon including this card as material
26. Selected S:P Little Knight (Extra Deck)
27. select Nerva the Power Patron of Creation (M3)
28. No
29. Special Summon (procedure) Artmage Non-Finito (Extra Deck)
30. Selected Theorealize Past Lull (hand)
31. Selected Nervedo the Shadebeast Power Patron (hand)
32. Yes
33. Selected Artmage Impasto -Recapture- (Deck)
34. Activate Medius the Pure (GY): Shuffle 1 monster from your hand or face-up field into the Deck, and if you do, Special Summon this card
35. Selected Ash Blossom & Joyous Spring (hand)
36. Link Summon Medicurius the Power Patron of Illusions (Extra Deck)
37. select Medius the Pure (M5)
38. select S:P Little Knight (EMZ-L)
39. Finish selection
40. Yes
41. Special Summon 1 "Diactorus" monster
42. Selected Artmage Diactorus (Extra Deck)
43. Activate Theorealize Past Lull (GY): Special Summon 1 Fusion, Synchro, or Xyz Monster from your GY
44. Selected Junora the Power Patron of Tuning (GY)

End board:  LP 8000 | Hand 3 | Deck 33 | Extra 9 | GY 4 | Banished 9   Monsters: M3: Artmage Diactorus Lv8 2800/2500 ATK || M4: Artmage Non-Finito Lv7 2400/1500 DEF || M5: Junora the Power Patron of Tuning Lv10 3100/3800 ATK || EMZ-R: Medicurius the Power Patron of Illusions L3↙↓↘ 3000    Spell/Trap: S1: Ars Magna - "Citrinitas" || S2: Artmage Impasto -Recapture- (Set)   GY: Nerva the Power Patron of Creation, Purification Power Patron, Nervedo the Shadebeast Power Patron, S:P Little Knight   Banished: Artmage Vandalism -Assault- (face-down), Fiendsmith's Tract (face-down), Magician of Dark Chaos - Black Chaos (face-down), Ars Magna - "Citrinitas" (face-down), Griffoh (face-down), Nervedo the Shadebeas

## Order 2: best 1.15 (ss_panama 0.4, elfnote 2.72, despia -1.37, angelechy 3.13, worst -3.1) — from search
Others: cit1 0.94 · opening lanes 0.15 · tries Normal Summon Theorealize Medius -0.13 · search → new ending -1.38 · search → new ending -1.59 · tries Activate Prohibited Power Patron Portal - Terminus -1.6 · search → new early order -1.98

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
12. Selected Artmage Finmel (Deck)
13. Link Summon Purification Power Patron (Extra Deck)
14. select Nerva the Power Patron of Creation (EMZ-R)
15. select Medius the Pure (M1)
16. Yes
17. Selected Theorealize Medius (Deck)
18. Activate Theorealize Medius (hand): If a "Power Patron" card is on the field: You can Special Summon this card from your hand, then you can add 1 "Theorealize" Spell/Trap from your Deck to your hand
19. Yes
20. Selected Theorealize Liberation (Deck)
21. Activate Purification Power Patron (EMZ-R): Link Summon including this card as material
22. Selected Medicurius the Power Patron of Illusions (Extra Deck)
23. select Theorealize Medius (M5)
24. Finish selection
25. Activate Medius the Pure (GY): Shuffle 1 monster from your hand or face-up field into the Deck, and if you do, Special Summon this card
26. Selected Ghost Ogre & Snow Rabbit (hand)
27. Activate Theorealize Liberation (hand): Add to your hand, or Special Summon, 1 monster from your Deck with 300 ATK/200 DEF
28. Selected Junoldo the Shadespirit Power Patron (Deck)
29. Special Summon it
30. Activate Junoldo the Shadespirit Power Patron (M5): Special Summon 1 "Junora the Power Patron of Tuning" from your Extra Deck
31. Selected Junora the Power Patron of Tuning (Extra Deck)
32. Yes
33. Selected Nervedo the Shadebeast Power Patron (Extra Deck)

End board:  LP 8000 | Hand 4 | Deck 33 | Extra 12 | GY 4 | Banished 6   Monsters: M3: Medius the Pure Lv4 1800/1800 ATK || M4: Artmage Finmel Lv7 2400/1500 ATK || M5: Junora the Power Patron of Tuning Lv10 3100/3800 ATK || EMZ-R: Medicurius the Power Patron of Illusions L3↙↓↘ 3000    Spell/Trap: S1: Ars Magna - "Citrinitas"   GY: Nerva the Power Patron of Creation, Theorealize Medius, Purification Power Patron, Theorealize Liberation   Banished: Artmage Impasto -Recapture- (face-down), Ars Magna - "Citrinitas" (face-down), Prohibited Power Patron Portal - Terminus (face-down), Vidolium the Unstable Power Patron of Unity (face-down), Nervedo the Shadebeast Power Patron (face-down), Black Luster Soldier 

## Order 3: best 4.31 (ss_panama 4.02, elfnote 6.83, despia -0.77, angelechy 6.32, worst -1.4) — from opening lanes
Others: opening lanes → new early order 3.6 · opening lanes → new ending 3.25 · opening lanes → new ending 2.86 · tries Activate Mind Shuffle 2.66 · tries Activate Artmage Vandalism -Assault- 1.55 · cit1 1.22 · search 1.11 · cit1 1.07

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
12. Activate Junoldo the Shadespirit Power Patron (M3): Special Summon 1 "Junora the Power Patron of Tuning" from your Extra Deck
13. Selected Junora the Power Patron of Tuning (Extra Deck)
14. Yes
15. Selected Nervedo the Shadebeast Power Patron (Extra Deck)
16. Link Summon Purification Power Patron (Extra Deck)
17. select Junora the Power Patron of Tuning (M3)
18. select Medius the Pure (M4)
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

End board:  LP 8000 | Hand 3 | Deck 33 | Extra 10 | GY 2 | Banished 9   Monsters: M1: Artmage Non-Finito Lv7 2400/1500 ATK || M3: Junora the Power Patron of Tuning Lv10 3100/3800 ATK || M4: Artmage Diactorus Lv8 2800/2500 ATK || M5: Nerva the Power Patron of Creation Lv10 3300/3300 ATK || EMZ-R: Medicurius the Power Patron of Illusions L3↙↓↘ 3000    Spell/Trap: S1: Ars Magna - "Citrinitas" || S2: Artmage Impasto -Recapture- (Set)   GY: Nervedo the Shadebeast Power Patron, Purification Power Patron   Banished: Nervedo the Shadebeast Power Patron (face-down), Ars Magna - "Citrinitas" (face-down), Vidolium the Unstable Power Patron of Unity (face-down), Prohibited Power Patron Portal - Terminus (face-down

## Order 4: best 5.07 (ss_panama 4.33, elfnote 3.2, despia 4.21, angelechy 8, worst 0.41) — from opening lanes → new early order
Others: opening lanes 4.61 · opening lanes → new early order → new ending 4.48 · search 2.39 · tries Activate Ars Magna of Purification and Corruption 2.11 · cit1 1.3 · opening lanes → new ending 1.19 · cit1 1.11 · tries Activate Theorealize Past Lull 1.02

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
12. Activate Junoldo the Shadespirit Power Patron (M4): Special Summon 1 "Junora the Power Patron of Tuning" from your Extra Deck
13. Selected Junora the Power Patron of Tuning (Extra Deck)
14. Yes
15. Selected Nervedo the Shadebeast Power Patron (Extra Deck)
16. Link Summon Purification Power Patron (Extra Deck)
17. select Medius the Pure (M3)
18. select Junora the Power Patron of Tuning (M2)
19. Yes
20. Selected Theorealize Medius (Deck)
21. Activate Medius the Pure (GY): Shuffle 1 monster from your hand or face-up field into the Deck, and if you do, Special Summon this card
22. Selected Ash Blossom & Joyous Spring (hand)
23. Activate Theorealize Medius (hand): If a "Power Patron" card is on the field: You can Special Summon this card from your hand, then you can add 1 "Theorealize" Spell/Trap from your Deck to your hand
24. Yes
25. Selected Theorealize Past Lull (Deck)
26. Activate Purification Power Patron (EMZ-R): Link Summon including this card as material
27. Selected Medicurius the Power Patron of Illusions (Extra Deck)
28. select Medius the Pure (M4)
29. Finish selection
30. Yes
31. Special Summon 1 "Diactorus" monster
32. Selected Artmage Diactorus (Extra Deck)
33. Special Summon (procedure) Artmage Non-Finito (Extra Deck)
34. Selected Theorealize Past Lull (hand)
35. Selected Nervedo the Shadebeast Power Patron (hand)
36. Yes
37. Selected Artmage Impasto -Recapture- (Deck)
38. Activate Theorealize Past Lull (GY): Special Summon 1 Fusion, Synchro, or Xyz Monster from your GY
39. Selected Junora the Power Patron of Tuning (GY)

End board:  LP 8000 | Hand 3 | Deck 33 | Extra 10 | GY 2 | Banished 9   Monsters: M1: Nerva the Power Patron of Creation Lv10 3300/3300 ATK || M2: Junora the Power Patron of Tuning Lv10 3100/3800 ATK || M3: Artmage Non-Finito Lv7 2400/1500 ATK || M4: Artmage Diactorus Lv8 2800/2500 ATK || EMZ-L: Medicurius the Power Patron of Illusions L3↙↓↘ 3000    Spell/Trap: S1: Ars Magna - "Citrinitas" || S2: Artmage Impasto -Recapture- (Set)   GY: Purification Power Patron, Nervedo the Shadebeast Power Patron   Banished: Artmage Finmel (face-down), Dark Magical Circle (face-down), Vidolium the Unstable Power Patron of Unity (face-down), Black Chaos (face-down), Skull Archfiend of Chaos (face-down), Light and Darkn

## Order 5: best 2.96 (ss_panama 5.67, elfnote -0.15, despia 0.62, angelechy 4.52, worst -4) — from opening lanes
Others: search 2.24 · opening lanes → new early order 2.11 · tries Activate Mind Shuffle 1.98 · opening lanes → new ending -0.21 · opening lanes → new ending -0.36 · tries Activate Medius the Pure -1.39 · cit1 -1.58

1. Activate Ars Magna - "Citrinitas" (hand): activate this card
2. Activate Ars Magna - "Citrinitas" (S1): Add 1 "Medius" or "Ars Magna" monster from your Deck to your hand
3. Selected Medius the Pure (Deck)
4. Normal Summon Medius the Pure (hand)
5. Yes
6. Selected Theorealize Medius (Deck)
7. Special Summon it
8. Link Summon Purification Power Patron (Extra Deck)
9. select Medius the Pure (M3)
10. select Theorealize Medius (M1)
11. Yes
12. Selected Theorealize Medius (Deck)
13. Activate Medius the Pure (GY): Shuffle 1 monster from your hand or face-up field into the Deck, and if you do, Special Summon this card
14. Selected Ash Blossom & Joyous Spring (hand)
15. Activate Theorealize Medius (hand): If a "Power Patron" card is on the field: You can Special Summon this card from your hand, then you can add 1 "Theorealize" Spell/Trap from your Deck to your hand
16. Yes
17. Selected Theorealize Liberation (Deck)
18. Activate Purification Power Patron (EMZ-R): Link Summon including this card as material
19. Activate Theorealize Liberation (hand): Add to your hand, or Special Summon, 1 monster from your Deck with 300 ATK/200 DEF
20. Selected Nervedo the Shadebeast Power Patron (Deck)
21. Special Summon it
22. Selected Medicurius the Power Patron of Illusions (Extra Deck)
23. select Medius the Pure (M3)
24. Finish selection
25. Yes
26. Special Summon 1 "Diactorus" monster
27. Selected Artmage Diactorus (Extra Deck)
28. Activate Nervedo the Shadebeast Power Patron (M5): Special Summon 1 "Nerva the Power Patron of Creation" from your Extra Deck
29. Selected Nerva the Power Patron of Creation (Extra Deck)
30. Yes
31. Selected Artmage Finmel (Deck)

End board:  LP 8000 | Hand 3 | Deck 36 | Extra 12 | GY 3 | Banished 5   Monsters: M3: Artmage Finmel Lv7 2400/1500 ATK || M4: Artmage Diactorus Lv8 2800/2500 ATK || M5: Nerva the Power Patron of Creation Lv10 3300/3300 ATK || EMZ-R: Medicurius the Power Patron of Illusions L3↙↓↘ 3000    Spell/Trap: S1: Ars Magna - "Citrinitas"   GY: Theorealize Medius, Theorealize Liberation, Purification Power Patron   Banished: Medius the Pure, Theorealize Medius, Pendulum Treasure (face-down), Dark Magical Circle (face-down), Artmage Impasto -Recapture- (face-down)   Hand: Droll & Lock Bird, Ghost Ogre & Snow Rabbit, Ash Blossom & Joyous Spring   Extra Deck: 12 cards (view --ed to list)

## Order 6: best 5.34 (ss_panama 3.57, elfnote 5.13, despia 4.28, angelechy 7.95, worst -1.35) — from tries Activate Junoldo the Shadespirit Power Patron → new ending
Others: tries Activate Junoldo the Shadespirit Power Patron → new ending → new early order 4.73 · tries Activate Junoldo the Shadespirit Power Patron 4.55 · tries Activate Vidolium the Unstable Power Patron of Unity 3.97 · opening lanes 2.67 · cit1 2.3 · search 2.21 · cit1 1.78 · tries Activate Junoldo the Shadespirit Power Patron → new ending → new ending -2.09

1. Activate Ars Magna - "Citrinitas" (hand): activate this card
2. Activate Ars Magna - "Citrinitas" (S1): Add 1 "Medius" or "Ars Magna" monster from your Deck to your hand
3. Selected Medius the Pure (Deck)
4. Normal Summon Medius the Pure (hand)
5. Yes
6. Selected Nervedo the Shadebeast Power Patron (Deck)
7. Special Summon it
8. Activate Nervedo the Shadebeast Power Patron (M3): Special Summon 1 "Nerva the Power Patron of Creation" from your Extra Deck
9. Selected Nerva the Power Patron of Creation (Extra Deck)
10. Yes
11. Selected Junoldo the Shadespirit Power Patron (Deck)
12. Activate Junoldo the Shadespirit Power Patron (M2): Special Summon 1 "Junora the Power Patron of Tuning" from your Extra Deck
13. Selected Junora the Power Patron of Tuning (Extra Deck)
14. Yes
15. Selected Nervedo the Shadebeast Power Patron (Extra Deck)
16. Link Summon Purification Power Patron (Extra Deck)
17. select Junora the Power Patron of Tuning (M2)
18. select Medius the Pure (M1)
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
30. Activate Purification Power Patron (EMZ-R): Link Summon including this card as material
31. Selected Medicurius the Power Patron of Illusions (Extra Deck)
32. select Medius the Pure (M5)
33. Finish selection
34. Selected Artmage Impasto -Recapture- (Deck)
35. Yes
36. Special Summon 1 "Diactorus" monster
37. Selected Artmage Diactorus (Extra Deck)
38. Activate Theorealize Past Lull (GY): Special Summon 1 Fusion, Synchro, or Xyz Monster from your GY
39. Selected Junora the Power Patron of Tuning (GY)

End board:  LP 8000 | Hand 3 | Deck 33 | Extra 10 | GY 2 | Banished 9   Monsters: M2: Artmage Non-Finito Lv7 2400/1500 ATK || M3: Nerva the Power Patron of Creation Lv10 3300/3300 ATK || M4: Artmage Diactorus Lv8 2800/2500 ATK || M5: Junora the Power Patron of Tuning Lv10 3100/3800 ATK || EMZ-R: Medicurius the Power Patron of Illusions L3↙↓↘ 3000    Spell/Trap: S1: Ars Magna - "Citrinitas" || S2: Artmage Impasto -Recapture- (Set)   GY: Nervedo the Shadebeast Power Patron, Purification Power Patron   Banished: Theorealize Medius (face-down), Ars Magna - "Citrinitas" (face-down), Mind Shuffle (face-down), Skull Archfiend of Chaos (face-down), Small World (face-down), Vidolium the Unstable Power Patron of

## Order 7: best 4.52 (ss_panama 4.05, elfnote 2.75, despia 2.07, angelechy 8.07, worst -0.15) — from tries Activate Theorealize Liberation → new ending → new early order
Others: tries Activate Theorealize Liberation → new ending 2.96 · tries Activate Theorealize Liberation → new ending → new early order → new ending 2.65 · tries Activate Theorealize Liberation 2.21 · cit1 2.06 · tries Activate Vidolium the Unstable Power Patron of Unity 1.87 · cit1 1.09 · search 0.67 · opening lanes -0.35

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
19. select Junora the Power Patron of Tuning (M5)
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
31. Activate Purification Power Patron (EMZ-L): Link Summon including this card as material
32. Selected Medicurius the Power Patron of Illusions (Extra Deck)
33. select Medius the Pure (M2)
34. Finish selection
35. Selected Artmage Impasto -Recapture- (Deck)
36. Yes
37. Special Summon 1 "Diactorus" monster
38. Selected Artmage Diactorus (Extra Deck)
39. Activate Theorealize Past Lull (GY): Special Summon 1 Fusion, Synchro, or Xyz Monster from your GY
40. Selected Junora the Power Patron of Tuning (GY)

End board:  LP 8000 | Hand 3 | Deck 33 | Extra 10 | GY 2 | Banished 9   Monsters: M1: Artmage Diactorus Lv8 2800/2500 ATK || M3: Artmage Non-Finito Lv7 2400/1500 ATK || M4: Nerva the Power Patron of Creation Lv10 3300/3300 ATK || M5: Junora the Power Patron of Tuning Lv10 3100/3800 ATK || EMZ-R: Medicurius the Power Patron of Illusions L3↙↓↘ 3000    Spell/Trap: S1: Ars Magna - "Citrinitas" || S2: Artmage Impasto -Recapture- (Set)   GY: Nervedo the Shadebeast Power Patron, Purification Power Patron   Banished: Theorealize Medius (face-down), Ars Magna - "Citrinitas" (face-down), Griffoh (face-down), Pendulum Treasure (face-down), Lacrima the Crimson Tears (face-down), Vidolium the Unstable Power Patron 

## Order 8: best 3.83 (ss_panama 3.96, elfnote null, despia -2.9, angelechy 6, worst -2.9) — from search
Others: tries Activate Prohibited Power Patron Portal - Terminus 2.72 · opening lanes 2.43 · cit1 1.96 · cit1 1.58 · tries Activate Artmage Vandalism -Assault- 0.35

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
13. Activate Junoldo the Shadespirit Power Patron (M2): Special Summon 1 "Junora the Power Patron of Tuning" from your Extra Deck
14. Selected Junora the Power Patron of Tuning (Extra Deck)
15. Yes
16. Selected Nervedo the Shadebeast Power Patron (Extra Deck)
17. Link Summon Purification Power Patron (Extra Deck)
18. select Medius the Pure (M1)
19. select Junora the Power Patron of Tuning (M4)
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
32. Activate Purification Power Patron (EMZ-L): Link Summon including this card as material
33. Selected S:P Little Knight (Extra Deck)
34. select Medius the Pure (M4)
35. No
36. Yes
37. Selected Nervedo the Shadebeast Power Patron (GY)
38. Yes
39. Special Summon 1 "Diactorus" monster
40. Selected Artmage Diactorus (Extra Deck)

End board:  LP 8000 | Hand 3 | Deck 33 | Extra 10 | GY 2 | Banished 10   Monsters: M1: Artmage Non-Finito Lv7 2400/1500 ATK || M2: Artmage Diactorus Lv8 2800/2500 ATK || M3: Nerva the Power Patron of Creation Lv10 3300/3300 ATK || EMZ-R: S:P Little Knight L2←→ 1600    Spell/Trap: S1: Ars Magna - "Citrinitas" || S2: Artmage Impasto -Recapture- (Set)   GY: Junora the Power Patron of Tuning, Purification Power Patron   Banished: Fiendsmith Engraver (face-down), Skull Archfiend of Chaos (face-down), Artmage Vandalism -Assault- (face-down), Mind Shuffle (face-down), Artmage Graflare (face-down), Pendulum Treasure (face-down), Theorealize Past Lull, Medius the Pure, Nervedo the Shadebeast Power Patron, Theor

