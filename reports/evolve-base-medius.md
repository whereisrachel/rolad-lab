# Evolved lines — Medius the Pure, Ash Blossom & Joyous Spring, Infinite Impermanence, Droll & Lock Bird, Ghost Ogre & Snow Rabbit (findlist-1100)
2026-11-25T05:12:43.925Z

8 deck orders (different face-down banishes / draws), 3 opponent hands x o_ss_panama + o_elfnote + o_despia + o_angelechy per line, 1 min searches, 3 mutation rounds.
Fitness = average margin after their turn (what you keep minus what they build; −10 more if they OTK). Higher is better.

**Best line per deck order: average 6** (worst order 3.81). Winner came from: m1b 3, m1b → new ending 1, bx1 1, tries Activate Artmage Vandalism -Assault- 1, bx1 → new ending 1, br1 → new early order 1

| seed line | works as written | its score when it works | seed start + search finish (all orders) |
|---|---|---|---|
| br1 | 1/8 | 2.63 | 2.6 |
| bx1 | 0/8 | - | 2.62 |
| m1a | 5/8 | 2.77 | 2.93 |
| m1b | 5/8 | 2.57 | 4.4 |

## Weak points found automatically
Cards whose face-down banish (by your own costs) hurt the best line most (average best line without vs with that card banished):

| card | orders where it was banished | drop |
|---|---|---|
| Mind Shuffle | 4/8 | 2.55 |
| Artmage Vandalism -Assault- | 5/8 | 2.05 |
| Ghost Ogre & Snow Rabbit | 3/8 | 2.05 |
| Lacrima the Crimson Tears | 2/8 | 1.9 |
| Artmage Finmel | 2/8 | 1.9 |
| Fiendsmith's Tract | 5/8 | 1.55 |
| Theorealize Medius | 3/8 | 1.04 |
| Dark Magical Circle | 3/8 | 0.58 |
| Griffoh | 3/8 | 0.44 |
| Nervedo the Shadebeast Power Patron | 4/8 | 0.4 |

Where the hand-designed lines broke (next step that no longer worked):
- bx1: Griffoh (3x)
- br1: Griffoh (3x)
- m1b: Past Lull (2x)
- m1a: Past Lull (2x)
- br1: Skull Archfiend (1x)
- bx1: Skull Archfiend (1x)
- bx1: Xyz Summon Evilswarm Exciton Knight (1x)
- br1: Set 1 card (1x)
- bx1: Set 1 card (1x)
- bx1: Magician of Dark Chaos (1x)
- br1: Magician of Dark Chaos (1x)
- br1: Junoldo (1x)
- m1a: Junoldo (1x)
- m1b: Junoldo (1x)
- bx1: Junoldo (1x)

List changes proposed for the list test (data/proposals-findlist-1100.json):
- +1 Mind Shuffle, −1 Plundered Power Patron Plane - Vidolia — Mind Shuffle: best line 2.55 worse when a cost banished it (4 of 8 orders) — Medius the Pure
- +1 Lacrima the Crimson Tears, −1 Artmage Vandalism -Assault- — Lacrima the Crimson Tears: best line 1.9 worse when a cost banished it (2 of 8 orders) — Medius the Pure
- +1 Artmage Finmel, −1 Small World — Artmage Finmel: best line 1.9 worse when a cost banished it (2 of 8 orders) — Medius the Pure
- +1 Fiendsmith's Tract, −1 Plundered Power Patron Plane - Vidolia — Fiendsmith's Tract: best line 1.55 worse when a cost banished it (5 of 8 orders) — Medius the Pure
- +1 Mind Shuffle — Mind Shuffle: best line 2.55 worse when a cost banished it (4 of 8 orders) — Medius the Pure (add only: deck grows, up to 60)
- +1 Lacrima the Crimson Tears — Lacrima the Crimson Tears: best line 1.9 worse when a cost banished it (2 of 8 orders) — Medius the Pure (add only: deck grows, up to 60)
- +1 Artmage Finmel — Artmage Finmel: best line 1.9 worse when a cost banished it (2 of 8 orders) — Medius the Pure (add only: deck grows, up to 60)
- +1 Fiendsmith's Tract — Fiendsmith's Tract: best line 1.55 worse when a cost banished it (5 of 8 orders) — Medius the Pure (add only: deck grows, up to 60)

Effects the search had not used, tried on purpose (best result so far):
- Activate Artmage Vandalism -Assault-: 5.36
- Activate Griffoh: 4.67
- Activate Ars Magna of Purification and Corruption: 4.55
- Activate Nervedo the Shadebeast Power Patron: 4.18
- Activate Artmage Vandalism -Assault-: 4.13
- Activate Vidolium the Unstable Power Patron of Unity: 4.09
- Activate Artmage Diactorus: 3.37
- Activate Ars Magna - "Citrinitas": 2.96

## Order 1: best 7.44 (ss_panama 4.38, elfnote 5.95, despia 9.45, angelechy 9.3, worst -0.7) — from m1b (seed followed 33/33 steps)
Others: m1a 3.82 · m1b → new ending 3.59 · m1a 3.09 · search 2.67 · m1b 2.47 · m1b → new early order 1.96 · bx1 1.85 · tries Activate Junoldo the Shadespirit Power Patron 1.54 · opening lanes 1.38 · br1 1.34 · tries Activate Mind Shuffle 0.86 · m1b → new ending 0.85

1. Normal Summon Medius the Pure (hand)
2. Yes
3. Selected Nervedo the Shadebeast Power Patron (Deck)
4. Special Summon it
5. Activate Nervedo the Shadebeast Power Patron (M2): Special Summon 1 "Nerva the Power Patron of Creation" from your Extra Deck
6. Selected Nerva the Power Patron of Creation (Extra Deck)
7. Yes
8. Selected Junoldo the Shadespirit Power Patron (Deck)
9. Activate Junoldo the Shadespirit Power Patron (M2): Special Summon 1 "Junora the Power Patron of Tuning" from your Extra Deck
10. Selected Junora the Power Patron of Tuning (Extra Deck)
11. Yes
12. Selected Nervedo the Shadebeast Power Patron (Extra Deck)
13. Link Summon Purification Power Patron (Extra Deck)
14. select Medius the Pure (M1)
15. select Junora the Power Patron of Tuning (M2)
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
26. Activate Theorealize Past Lull (GY): Special Summon 1 Fusion, Synchro, or Xyz Monster from your GY
27. Selected Junora the Power Patron of Tuning (GY)
28. Activate Medius the Pure (GY): Shuffle 1 monster from your hand or face-up field into the Deck, and if you do, Special Summon this card
29. Selected Ghost Ogre & Snow Rabbit (hand)
30. Set Spell/Trap Infinite Impermanence
31. Activate Purification Power Patron (EMZ-L): Link Summon including this card as material
32. Selected Medicurius the Power Patron of Illusions (Extra Deck)
33. select Medius the Pure (M1)
34. Finish selection
35. Yes
36. Special Summon 1 "Diactorus" monster
37. Selected Artmage Diactorus (Extra Deck)
38. Activate Artmage Diactorus (M3): Change the battle position of 1 monster on the field
39. Selected Artmage Diactorus (M3)
40. Link Summon S:P Little Knight (Extra Deck)
41. select Artmage Non-Finito (M4)
42. select Junora the Power Patron of Tuning (M2)
43. Yes
44. Selected Purification Power Patron (GY)

End board:  LP 8000 | Hand 2 | Deck 34 | Extra 9 | GY 3 | Banished 10   Monsters: M3: Artmage Diactorus Lv8 2800/2500 DEF || M4: S:P Little Knight L2←→ 1600  || M5: Nerva the Power Patron of Creation Lv10 3300/3300 ATK || EMZ-R: Medicurius the Power Patron of Illusions L3↙↓↘ 3000    Spell/Trap: S1: Artmage Impasto -Recapture- (Set) || S2: Infinite Impermanence (Set)   GY: Nervedo the Shadebeast Power Patron, Junora the Power Patron of Tuning, Artmage Non-Finito   Banished: Medius the Pure (face-down), Ars Magna - "Citrinitas" (face-down), Ars Magna of Infinity and Finity (face-down), Fiendsmith Engraver (face-down), Artmage Graflare (face-down), Griffoh (face-down), Theorealize Past Lull, Medius the Pu

## Order 2: best 4.99 (ss_panama null, elfnote 2.08, despia 1.84, angelechy 8.05, worst -0.75) — from m1b → new ending
Others: m1b 4.72 · tries Activate Artmage Vandalism -Assault- 4.13 · tries Activate Vidolium the Unstable Power Patron of Unity 4.09 · m1b 3.75 · m1a 3.56 · m1a 3.53 · m1b → new early order 2.97 · opening lanes 2.89 · bx1 2.58 · m1b → new ending 2.11 · br1 1.86 · search 1.38

1. Normal Summon Medius the Pure (hand)
2. Yes
3. Selected Nervedo the Shadebeast Power Patron (Deck)
4. Special Summon it
5. Activate Nervedo the Shadebeast Power Patron (M2): Special Summon 1 "Nerva the Power Patron of Creation" from your Extra Deck
6. Selected Nerva the Power Patron of Creation (Extra Deck)
7. Yes
8. Selected Junoldo the Shadespirit Power Patron (Deck)
9. Activate Junoldo the Shadespirit Power Patron (M2): Special Summon 1 "Junora the Power Patron of Tuning" from your Extra Deck
10. Selected Junora the Power Patron of Tuning (Extra Deck)
11. Yes
12. Selected Nervedo the Shadebeast Power Patron (Extra Deck)
13. Link Summon Purification Power Patron (Extra Deck)
14. select Medius the Pure (M1)
15. select Junora the Power Patron of Tuning (M2)
16. Yes
17. Selected Theorealize Medius (Deck)
18. Activate Theorealize Medius (hand): If a "Power Patron" card is on the field: You can Special Summon this card from your hand, then you can add 1 "Theorealize" Spell/Trap from your Deck to your hand
19. Yes
20. Selected Theorealize Past Lull (Deck)
21. Activate Medius the Pure (GY): Shuffle 1 monster from your hand or face-up field into the Deck, and if you do, Special Summon this card
22. Selected Ghost Ogre & Snow Rabbit (hand)
23. Activate Purification Power Patron (EMZ-L): Link Summon including this card as material
24. Selected Medicurius the Power Patron of Illusions (Extra Deck)
25. select Medius the Pure (M4)
26. Finish selection
27. Yes
28. Special Summon 1 "Diactorus" monster
29. Selected Artmage Diactorus (Extra Deck)
30. Special Summon (procedure) Artmage Non-Finito (Extra Deck)
31. Selected Theorealize Past Lull (hand)
32. Selected Nervedo the Shadebeast Power Patron (hand)
33. Yes
34. Selected Artmage Impasto -Recapture- (Deck)
35. Activate Theorealize Past Lull (GY): Special Summon 1 Fusion, Synchro, or Xyz Monster from your GY
36. Selected Junora the Power Patron of Tuning (GY)
37. Link Summon S:P Little Knight (Extra Deck)
38. select Junora the Power Patron of Tuning (M4)
39. select Artmage Non-Finito (M1)
40. No

End board:  LP 8000 | Hand 3 | Deck 34 | Extra 9 | GY 4 | Banished 9   Monsters: M3: Artmage Diactorus Lv8 2800/2500 ATK || M4: S:P Little Knight L2←→ 1600  || M5: Nerva the Power Patron of Creation Lv10 3300/3300 ATK || EMZ-R: Medicurius the Power Patron of Illusions L3↙↓↘ 3000    Spell/Trap: S1: Artmage Impasto -Recapture- (Set)   GY: Purification Power Patron, Nervedo the Shadebeast Power Patron, Artmage Non-Finito, Junora the Power Patron of Tuning   Banished: Medius the Pure (face-down), Griffoh (face-down), Nervedo the Shadebeast Power Patron (face-down), Mind Shuffle (face-down), Artmage Vandalism -Assault- (face-down), Ars Magna - "Citrinitas" (face-down), Medius the Pure, Theorealize Medius, T

## Order 3: best 4.75 (ss_panama 3.37, elfnote 2.56, despia 0, angelechy 8.7, worst 0) — from bx1 (seed followed 26/58 steps)
Others: m1b 3.39 · m1b 3.04 · m1a 2.86 · m1a 2.45 · bx1 → new ending 2.16 · bx1 → new early order 1.81 · tries Activate Light and Darkness Ritual 1.61 · br1 1.48 · opening lanes 1.36 · search 1.18 · tries Activate Light and Darkness Ritual 0.76 · bx1 → new ending 0.31

1. Normal Summon Medius the Pure (hand)
2. Yes
3. Selected Nervedo the Shadebeast Power Patron (Deck)
4. Special Summon it
5. Activate Nervedo the Shadebeast Power Patron (M2): Special Summon 1 "Nerva the Power Patron of Creation" from your Extra Deck
6. Selected Nerva the Power Patron of Creation (Extra Deck)
7. Yes
8. Selected Junoldo the Shadespirit Power Patron (Deck)
9. Activate Junoldo the Shadespirit Power Patron (M2): Special Summon 1 "Junora the Power Patron of Tuning" from your Extra Deck
10. Selected Junora the Power Patron of Tuning (Extra Deck)
11. Yes
12. Selected Nervedo the Shadebeast Power Patron (Extra Deck)
13. Link Summon Purification Power Patron (Extra Deck)
14. select Medius the Pure (M1)
15. select Junora the Power Patron of Tuning (M2)
16. Yes
17. Selected Theorealize Medius (Deck)
18. Activate Theorealize Medius (hand): If a "Power Patron" card is on the field: You can Special Summon this card from your hand, then you can add 1 "Theorealize" Spell/Trap from your Deck to your hand
19. Yes
20. Selected Theorealize Liberation (Deck)
21. Activate Medius the Pure (GY): Shuffle 1 monster from your hand or face-up field into the Deck, and if you do, Special Summon this card
22. Selected Ghost Ogre & Snow Rabbit (hand)
23. Activate Theorealize Liberation (hand): Add to your hand, or Special Summon, 1 monster from your Deck with 300 ATK/200 DEF
24. Selected Nervedo the Shadebeast Power Patron (Deck)
25. Add the card(s) to your hand
26. Set Spell/Trap Infinite Impermanence
27. Activate Purification Power Patron (EMZ-L): Link Summon including this card as material
28. Selected Medicurius the Power Patron of Illusions (Extra Deck)
29. select Medius the Pure (M1)
30. Finish selection
31. Yes
32. Add 1 "Ars Magna" card from your Deck to your hand
33. Selected Ars Magna of Infinity and Finity (Deck)
34. Activate Theorealize Liberation (GY): Treat 1 monster you control as a Tuner this turn
35. Selected Theorealize Medius (M3)
36. Activate Ars Magna of Infinity and Finity (hand): You can banish this card from your hand; add 1 non-Warrior "Ars Magna" monster from your Deck to your hand
37. Selected Ars Magna of Purification and Corruption (Deck)
38. Activate Ars Magna of Purification and Corruption (hand): You can banish this card from your hand; add 1 "Ars Magna" Spell/Trap from your Deck to your hand
39. Selected Ars Magna - "Citrinitas" (Deck)
40. Special Summon (procedure) Artmage Non-Finito (Extra Deck)
41. Selected Ars Magna - "Citrinitas" (hand)
42. Selected Nervedo the Shadebeast Power Patron (hand)
43. Activate Artmage Non-Finito (M4): Set 1 "Artmage" Spell/Trap from your Deck
44. Activate Ars Magna of Infinity and Finity (banishment): Special Summon this card
45. Selected Artmage Impasto -Recapture- (Deck)
46. Link Summon S:P Little Knight (Extra Deck)
47. select Ars Magna of Infinity and Finity (M1)
48. select Theorealize Medius (M3)
49. Yes

End board:  LP 8000 | Hand 3 | Deck 30 | Extra 10 | GY 6 | Banished 8   Monsters: M1: Ars Magna of Purification and Corruption Lv8 1000/2100 ATK || M3: S:P Little Knight L2←→ 1600  || M4: Artmage Non-Finito Lv7 2400/1500 ATK || M5: Nerva the Power Patron of Creation Lv10 3300/3300 ATK || EMZ-R: Medicurius the Power Patron of Illusions L3↙↓↘ 9000    Spell/Trap: S1: Infinite Impermanence (Set) || S2: Artmage Impasto -Recapture- (Set)   GY: Junora the Power Patron of Tuning, Purification Power Patron, Ars Magna - "Citrinitas", Nervedo the Shadebeast Power Patron, Ars Magna of Infinity and Finity, Theorealize Medius   Banished: Artmage Vandalism -Assault- (face-down), Mind Shuffle (face-down), Pendulum Tre

## Order 4: best 8.11 (ss_panama 7.38, elfnote 6.15, despia 8.27, angelechy 9.6, worst 5.01) — from m1b (seed followed 33/33 steps)
Others: m1b → new early order 7.34 · m1b → new ending 5.35 · tries Activate Ars Magna of Purification and Corruption 4.55 · m1b → new ending 3.53 · m1a 3.43 · tries Activate Artmage Diactorus 2.72 · br1 2.58 · m1a 2.55 · opening lanes 2.49 · m1b 2.02 · bx1 1.19 · search 0.52

1. Normal Summon Medius the Pure (hand)
2. Yes
3. Selected Nervedo the Shadebeast Power Patron (Deck)
4. Special Summon it
5. Activate Nervedo the Shadebeast Power Patron (M2): Special Summon 1 "Nerva the Power Patron of Creation" from your Extra Deck
6. Selected Nerva the Power Patron of Creation (Extra Deck)
7. Yes
8. Selected Junoldo the Shadespirit Power Patron (Deck)
9. Activate Junoldo the Shadespirit Power Patron (M2): Special Summon 1 "Junora the Power Patron of Tuning" from your Extra Deck
10. Selected Junora the Power Patron of Tuning (Extra Deck)
11. Yes
12. Selected Nervedo the Shadebeast Power Patron (Extra Deck)
13. Link Summon Purification Power Patron (Extra Deck)
14. select Medius the Pure (M1)
15. select Junora the Power Patron of Tuning (M2)
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
26. Activate Theorealize Past Lull (GY): Special Summon 1 Fusion, Synchro, or Xyz Monster from your GY
27. Selected Junora the Power Patron of Tuning (GY)
28. Activate Medius the Pure (GY): Shuffle 1 monster from your hand or face-up field into the Deck, and if you do, Special Summon this card
29. Selected Ghost Ogre & Snow Rabbit (hand)
30. Set Spell/Trap Infinite Impermanence
31. Activate Purification Power Patron (EMZ-L): Link Summon including this card as material
32. Selected Medicurius the Power Patron of Illusions (Extra Deck)
33. select Medius the Pure (M1)
34. Finish selection
35. Yes
36. Add 1 "Ars Magna" card from your Deck to your hand
37. Selected Ars Magna of Infinity and Finity (Deck)
38. Activate Ars Magna of Infinity and Finity (hand): You can banish this card from your hand; add 1 non-Warrior "Ars Magna" monster from your Deck to your hand
39. Selected Ars Magna of Purification and Corruption (Deck)
40. Activate Ars Magna of Purification and Corruption (hand): You can banish this card from your hand; add 1 "Ars Magna" Spell/Trap from your Deck to your hand
41. Selected Ars Magna - "Citrinitas" (Deck)
42. Activate Ars Magna - "Citrinitas" (hand): activate this card
43. Activate Ars Magna - "Citrinitas" (S3): Add 1 "Medius" or "Ars Magna" monster from your Deck to your hand
44. Selected Theorealize Medius (Deck)
45. Link Summon S:P Little Knight (Extra Deck)
46. select Junora the Power Patron of Tuning (M2)
47. select Theorealize Medius (M3)
48. Activate S:P Little Knight (M1): Banish 1 card on the field or GY
49. Selected Purification Power Patron (GY)
50. Activate Ars Magna of Purification and Corruption (banishment): Special Summon this card
51. Activate Ars Magna of Infinity and Finity (banishment): Special Summon this card

End board:  LP 8000 | Hand 3 | Deck 30 | Extra 10 | GY 3 | Banished 9   Monsters: M1: S:P Little Knight L2←→ 1600  || M2: Ars Magna of Infinity and Finity Lv8 1000/2400 ATK || M3: Ars Magna of Purification and Corruption Lv8 1000/2100 ATK || M4: Artmage Non-Finito Lv7 2400/1500 ATK || M5: Nerva the Power Patron of Creation Lv10 3300/3300 ATK || EMZ-L: Medicurius the Power Patron of Illusions L3↙↓↘ 9000    Spell/Trap: S1: Artmage Impasto -Recapture- (Set) || S2: Infinite Impermanence (Set) || S3: Ars Magna - "Citrinitas"   GY: Nervedo the Shadebeast Power Patron, Junora the Power Patron of Tuning, Theorealize Medius   Banished: Black Luster Soldier - Soldier of Light and Darkness (face-down), Nervedo th

## Order 5: best 3.81 (ss_panama 2.9, elfnote 2.33, despia 1.63, angelechy 9.13, worst -0.3) — from m1b (seed followed 33/33 steps)
Others: bx1 3.65 · br1 2.63 · tries Activate Ars Magna - "Citrinitas" 2.58 · m1a 2.56 · br1 2.41 · m1a 2.22 · tries Activate Vidolium the Unstable Power Patron of Unity 2.18 · m1b → new ending 1.98 · m1b → new ending 1.64 · m1b 1.55 · search 1.43 · m1b → new early order 0.9 · opening lanes 0.31

1. Normal Summon Medius the Pure (hand)
2. Yes
3. Selected Nervedo the Shadebeast Power Patron (Deck)
4. Special Summon it
5. Activate Nervedo the Shadebeast Power Patron (M2): Special Summon 1 "Nerva the Power Patron of Creation" from your Extra Deck
6. Selected Nerva the Power Patron of Creation (Extra Deck)
7. Yes
8. Selected Junoldo the Shadespirit Power Patron (Deck)
9. Activate Junoldo the Shadespirit Power Patron (M2): Special Summon 1 "Junora the Power Patron of Tuning" from your Extra Deck
10. Selected Junora the Power Patron of Tuning (Extra Deck)
11. Yes
12. Selected Nervedo the Shadebeast Power Patron (Extra Deck)
13. Link Summon Purification Power Patron (Extra Deck)
14. select Medius the Pure (M1)
15. select Junora the Power Patron of Tuning (M2)
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
26. Activate Theorealize Past Lull (GY): Special Summon 1 Fusion, Synchro, or Xyz Monster from your GY
27. Selected Junora the Power Patron of Tuning (GY)
28. Activate Medius the Pure (GY): Shuffle 1 monster from your hand or face-up field into the Deck, and if you do, Special Summon this card
29. Selected Ghost Ogre & Snow Rabbit (hand)
30. Set Spell/Trap Infinite Impermanence
31. Link Summon Medicurius the Power Patron of Illusions (Extra Deck)
32. select Medius the Pure (M1)
33. select Purification Power Patron (EMZ-L)
34. Finish selection
35. Yes
36. Special Summon 1 "Diactorus" monster
37. Selected Artmage Diactorus (Extra Deck)

End board:  LP 8000 | Hand 2 | Deck 34 | Extra 10 | GY 2 | Banished 9   Monsters: M2: Junora the Power Patron of Tuning Lv10 3100/3800 ATK || M3: Artmage Diactorus Lv8 2800/2500 ATK || M4: Artmage Non-Finito Lv7 2400/1500 ATK || M5: Nerva the Power Patron of Creation Lv10 3300/3300 ATK || EMZ-R: Medicurius the Power Patron of Illusions L3↙↓↘ 3000    Spell/Trap: S1: Artmage Impasto -Recapture- (Set) || S2: Infinite Impermanence (Set)   GY: Nervedo the Shadebeast Power Patron, Purification Power Patron   Banished: Theorealize Medius (face-down), Pendulum Treasure (face-down), Artmage Vandalism -Assault- (face-down), Lacrima the Crimson Tears (face-down), Ars Magna of Purification and Corruption (face-dow

## Order 6: best 5.36 (ss_panama 3.1, elfnote 4.8, despia 5.2, angelechy 6.63, worst 0.85) — from tries Activate Artmage Vandalism -Assault-
Others: m1b 4.82 · m1a 3.93 · opening lanes 3.76 · tries Activate Artmage Vandalism -Assault- → new ending 2.88 · tries Activate Artmage Vandalism -Assault- → new ending 2.74 · tries Activate Theorealize Liberation 2.73 · search 2.71 · br1 2.24 · bx1 1.27 · tries Activate Artmage Vandalism -Assault- → new early order -0.14

1. Set Spell/Trap Infinite Impermanence
2. Normal Summon Medius the Pure (hand)
3. Yes
4. Selected Nervedo the Shadebeast Power Patron (Deck)
5. Special Summon it
6. Activate Nervedo the Shadebeast Power Patron (M1): Special Summon 1 "Nerva the Power Patron of Creation" from your Extra Deck
7. Selected Nerva the Power Patron of Creation (Extra Deck)
8. Yes
9. Selected Junoldo the Shadespirit Power Patron (Deck)
10. Activate Junoldo the Shadespirit Power Patron (M5): Special Summon 1 "Junora the Power Patron of Tuning" from your Extra Deck
11. Selected Junora the Power Patron of Tuning (Extra Deck)
12. Yes
13. Selected Nervedo the Shadebeast Power Patron (Extra Deck)
14. Link Summon Purification Power Patron (Extra Deck)
15. select Medius the Pure (M4)
16. select Nerva the Power Patron of Creation (EMZ-R)
17. Yes
18. Selected Theorealize Medius (Deck)
19. Activate Theorealize Medius (hand): If a "Power Patron" card is on the field: You can Special Summon this card from your hand, then you can add 1 "Theorealize" Spell/Trap from your Deck to your hand
20. Yes
21. Selected Theorealize Liberation (Deck)
22. Activate Medius the Pure (GY): Shuffle 1 monster from your hand or face-up field into the Deck, and if you do, Special Summon this card
23. Selected Ash Blossom & Joyous Spring (hand)
24. Special Summon (procedure) Artmage Non-Finito (Extra Deck)
25. Selected Theorealize Liberation (hand)
26. Selected Nervedo the Shadebeast Power Patron (hand)
27. Yes
28. Activate Purification Power Patron (EMZ-R): Link Summon including this card as material
29. Selected Medicurius the Power Patron of Illusions (Extra Deck)
30. select Medius the Pure (M1)
31. Finish selection
32. Selected Artmage Vandalism -Assault- (Deck)
33. Yes
34. Special Summon 1 "Diactorus" monster
35. Selected Artmage Diactorus (Extra Deck)
36. Activate Artmage Vandalism -Assault- (S2): When this card is activated: You can add 1 "Medius the Pure" from your Deck to your hand
37. Yes
38. Selected Medius the Pure (Deck)

End board:  LP 8000 | Hand 3 | Deck 33 | Extra 10 | GY 4 | Banished 8   Monsters: M3: Artmage Diactorus Lv8 2800/2500 ATK || M4: Artmage Non-Finito Lv7 2400/1500 ATK || M5: Junora the Power Patron of Tuning Lv10 3100/3800 ATK || EMZ-R: Medicurius the Power Patron of Illusions L3↙↓↘ 3000    Spell/Trap: S1: Infinite Impermanence (Set) || S2: Artmage Vandalism -Assault-   GY: Nerva the Power Patron of Creation, Theorealize Liberation, Nervedo the Shadebeast Power Patron, Purification Power Patron   Banished: Lacrima the Crimson Tears (face-down), Artmage Vandalism -Assault- (face-down), Mind Shuffle (face-down), Theorealize Past Lull (face-down), Artmage Vandalism -Assault- (face-down), Vidolium the Unsta

## Order 7: best 6.3 (ss_panama null, elfnote 6.73, despia 2.84, angelechy 9.35, worst -0.74) — from bx1 → new ending
Others: bx1 5.53 · bx1 → new ending → new ending 3.61 · m1b 2.11 · br1 1.98 · m1a 0.73 · bx1 → new ending → new early order 0.73 · tries Activate Mind Shuffle 0.47 · search -0.26 · opening lanes -1.03 · tries Activate Prohibited Power Patron Portal - Terminus -1.95

1. Normal Summon Medius the Pure (hand)
2. Yes
3. Selected Nervedo the Shadebeast Power Patron (Deck)
4. Special Summon it
5. Activate Nervedo the Shadebeast Power Patron (M2): Special Summon 1 "Nerva the Power Patron of Creation" from your Extra Deck
6. Selected Nerva the Power Patron of Creation (Extra Deck)
7. Yes
8. Selected Junoldo the Shadespirit Power Patron (Deck)
9. Activate Junoldo the Shadespirit Power Patron (M2): Special Summon 1 "Junora the Power Patron of Tuning" from your Extra Deck
10. Selected Junora the Power Patron of Tuning (Extra Deck)
11. Yes
12. Selected Nervedo the Shadebeast Power Patron (Extra Deck)
13. Link Summon Purification Power Patron (Extra Deck)
14. select Medius the Pure (M1)
15. select Junora the Power Patron of Tuning (M2)
16. Yes
17. Selected Theorealize Medius (Deck)
18. Activate Theorealize Medius (hand): If a "Power Patron" card is on the field: You can Special Summon this card from your hand, then you can add 1 "Theorealize" Spell/Trap from your Deck to your hand
19. Yes
20. Selected Theorealize Liberation (Deck)
21. Activate Medius the Pure (GY): Shuffle 1 monster from your hand or face-up field into the Deck, and if you do, Special Summon this card
22. Selected Ghost Ogre & Snow Rabbit (hand)
23. Activate Theorealize Liberation (hand): Add to your hand, or Special Summon, 1 monster from your Deck with 300 ATK/200 DEF
24. Selected Griffoh (Deck)
25. Add the card(s) to your hand
26. Activate Griffoh (hand): Activate 1 of these effects
27. Set 1 card that mentions "Light and Darkness Ritual"
28. Activate Purification Power Patron (EMZ-L): Link Summon including this card as material
29. Selected Medicurius the Power Patron of Illusions (Extra Deck)
30. select Medius the Pure (M1)
31. Finish selection
32. Selected Mind Shuffle (Deck)
33. Yes
34. Special Summon 1 "Diactorus" monster
35. Activate Mind Shuffle (S1): activate this card
36. Yes
37. Selected Skull Archfiend of Chaos (Deck)
38. Selected Skull Archfiend of Chaos (hand)
39. Selected Artmage Diactorus (Extra Deck)
40. Yes
41. Selected Light and Darkness Ritual (Deck)
42. Selected Black Luster Soldier - Soldier of Light and Darkness (Deck)
43. Activate Light and Darkness Ritual (GY): Add both this card and 1 card that mentions "Light and Darkness Ritual" from your GY to your hand
44. Selected Griffoh (GY)
45. Special Summon (procedure) Artmage Non-Finito (Extra Deck)
46. Selected Light and Darkness Ritual (hand)
47. Selected Nervedo the Shadebeast Power Patron (hand)
48. Yes
49. Selected Artmage Impasto -Recapture- (Deck)
50. Activate Skull Archfiend of Chaos (GY): Special Summon this card
51. select Nervedo the Shadebeast Power Patron (GY)
52. select Light and Darkness Ritual (GY)
53. select Purification Power Patron (GY)
54. Default order

End board:  LP 8000 | Hand 5 | Deck 31 | Extra 11 | GY 2 | Banished 8   Monsters: M1: Artmage Non-Finito Lv7 2400/1500 ATK || M3: Artmage Diactorus Lv8 2800/2500 ATK || M4: Skull Archfiend of Chaos Lv6 2500/1200 ATK || M5: Nerva the Power Patron of Creation Lv10 3300/3300 ATK || EMZ-R: Medicurius the Power Patron of Illusions L3↙↓↘ 3000    Spell/Trap: S1: Mind Shuffle || S2: Artmage Impasto -Recapture- (Set)   GY: Junora the Power Patron of Tuning, Theorealize Liberation   Banished: Fiendsmith's Tract (face-down), Ars Magna - "Citrinitas" (face-down), Nervedo the Shadebeast Power Patron (face-down), Fiendsmith Engraver (face-down), Magician of Dark Chaos - Black Chaos (face-down), Theorealize Past Lull

## Order 8: best 7.26 (ss_panama -0.96, elfnote null, despia null, angelechy 10, worst -0.96) — from br1 → new early order
Others: br1 6.94 · br1 → new ending 5.27 · br1 → new early order → new ending 4.18 · tries Activate Ars Magna - "Citrinitas" 2.96 · m1a 2.58 · search 1.73 · m1b 0.77 · opening lanes 0.57 · tries Activate Theorealize Past Lull 0.55 · bx1 0.14

1. Normal Summon Medius the Pure (hand)
2. Yes
3. Selected Nervedo the Shadebeast Power Patron (Deck)
4. Special Summon it
5. Activate Nervedo the Shadebeast Power Patron (M2): Special Summon 1 "Nerva the Power Patron of Creation" from your Extra Deck
6. Selected Nerva the Power Patron of Creation (Extra Deck)
7. Yes
8. Selected Artmage Finmel (Deck)
9. Set Spell/Trap Infinite Impermanence
10. Link Summon Purification Power Patron (Extra Deck)
11. select Medius the Pure (M1)
12. select Nerva the Power Patron of Creation (M5)
13. Yes
14. Selected Theorealize Medius (Deck)
15. Activate Medius the Pure (GY): Shuffle 1 monster from your hand or face-up field into the Deck, and if you do, Special Summon this card
16. Selected Droll & Lock Bird (hand)
17. Activate Theorealize Medius (hand): If a "Power Patron" card is on the field: You can Special Summon this card from your hand, then you can add 1 "Theorealize" Spell/Trap from your Deck to your hand
18. Yes
19. Selected Theorealize Liberation (Deck)
20. Activate Theorealize Liberation (hand): Add to your hand, or Special Summon, 1 monster from your Deck with 300 ATK/200 DEF
21. Activate Purification Power Patron (EMZ-R): Link Summon including this card as material
22. Selected Medicurius the Power Patron of Illusions (Extra Deck)
23. select Medius the Pure (M4)
24. Finish selection
25. Selected Griffoh (Deck)
26. Add the card(s) to your hand
27. Yes
28. Special Summon 1 "Diactorus" monster
29. Selected Artmage Diactorus (Extra Deck)
30. Activate Theorealize Liberation (GY): Treat 1 monster you control as a Tuner this turn
31. Selected Artmage Diactorus (M3)
32. Activate Griffoh (hand): Activate 1 of these effects
33. Set 1 card that mentions "Light and Darkness Ritual"
34. Selected Mind Shuffle (Deck)
35. Activate Mind Shuffle (S2): activate this card
36. Yes
37. Selected Skull Archfiend of Chaos (Deck)
38. Selected Skull Archfiend of Chaos (hand)
39. Yes
40. Selected Light and Darkness Ritual (Deck)
41. Selected Magician of Dark Chaos - Black Chaos (Deck)
42. Activate Light and Darkness Ritual (GY): Add both this card and 1 card that mentions "Light and Darkness Ritual" from your GY to your hand
43. Selected Skull Archfiend of Chaos (GY)
44. Activate Light and Darkness Ritual (hand): Ritual Summon 1 "Magician of Dark Chaos - Black Chaos" or "Black Luster Soldier - Soldier of Light and Darkness" from your hand
45. Selected Magician of Dark Chaos - Black Chaos (hand)
46. Selected Griffoh (GY) value 8 or 1
47. Yes
48. Selected Light and Darkness Ritual (GY)
49. Special Summon (procedure) Artmage Non-Finito (Extra Deck)
50. Selected Light and Darkness Ritual (hand)
51. Selected Artmage Finmel (M2)
52. Yes
53. Selected Artmage Impasto -Recapture- (Deck)

End board:  LP 8000 | Hand 3 | Deck 32 | Extra 11 | GY 4 | Banished 7   Monsters: M1: Magician of Dark Chaos - Black Chaos Lv8 2800/2600 ATK || M2: Artmage Non-Finito Lv7 2400/1500 ATK || M3: Artmage Diactorus Lv8 2800/2500 ATK || EMZ-L: Medicurius the Power Patron of Illusions L3↙↓↘ 3000    Spell/Trap: S1: Infinite Impermanence (Set) || S2: Mind Shuffle || S3: Artmage Impasto -Recapture- (Set)   GY: Nerva the Power Patron of Creation, Purification Power Patron, Light and Darkness Ritual, Artmage Finmel   Banished: Fiendsmith Engraver (face-down), Junoldo the Shadespirit Power Patron (face-down), Theorealize Medius (face-down), Medius the Pure, Theorealize Medius, Theorealize Liberation, Griffoh   Hand

