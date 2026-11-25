# Evolved lines — Small World, Ash Blossom & Joyous Spring, Ash Blossom & Joyous Spring, Droll & Lock Bird, Ghost Ogre & Snow Rabbit (findlist-1100)
2026-11-25T19:00:15.227Z

8 deck orders (different face-down banishes / draws), 3 opponent hands x o_ss_panama + o_elfnote + o_despia + o_angelechy per line, 5 min searches, 4 mutation rounds.
Fitness = end-board interruptions (the lab scorer, src/disrupt.mjs: wipe 2, negate 1-1.5, banish/protection less; hand traps kept count 1 each). The winner of each order is also played into the opponent decks: margin after their turn shown beside it.

**Margin after their turn (winners): average 4.8** (worst -3.2)

**Best line per deck order: average 11.97** (worst order 11). Winner came from: v52-smallworld 2, search 1, opening lanes → new early order 2, opening lanes 2, opening lanes → new ending → new early order 1

| seed line | works as written | its score when it works | seed start + search finish (all orders) |
|---|---|---|---|
| sw1 | 3/8 | 6.84 | 8.48 |
| v52-smallworld | 4/8 | 11 | 11.17 |

## Weak points found automatically
Cards whose face-down banish (by your own costs) hurt the best line most (average best line without vs with that card banished):

| card | orders where it was banished | drop |
|---|---|---|
| Artmage Impasto -Recapture- | 2/8 | 1.23 |
| Artmage Graflare | 5/8 | 1.03 |
| Light and Darkness Ritual | 5/8 | 0.95 |
| Medius the Pure | 5/8 | 0.6 |
| Theorealize Liberation | 4/8 | 0.53 |
| Junoldo the Shadespirit Power Patron | 4/8 | 0.53 |
| Artmage Vandalism -Assault- | 5/8 | 0.39 |
| Prohibited Power Patron Portal - Terminus | 4/8 | 0.13 |
| Skull Archfiend of Chaos | 3/8 | 0.09 |
| Ars Magna - "Citrinitas" | 3/8 | 0.04 |

Where the hand-designed lines broke (next step that no longer worked):
- sw1: Junoldo (3x)
- v52-smallworld: Past Lull (2x)
- v52-smallworld: Impasto (2x)
- sw1: Past Lull (1x)
- sw1: Impasto (1x)

List changes proposed for the list test (data/proposals-findlist-1100.json):
- +1 Artmage Impasto -Recapture-, −1 Plundered Power Patron Plane - Vidolia — Artmage Impasto -Recapture-: best line 1.23 worse when a cost banished it (2 of 8 orders) — Small World
- +1 Artmage Graflare, −1 Artmage Vandalism -Assault- — Artmage Graflare: best line 1.03 worse when a cost banished it (5 of 8 orders) — Small World
- +1 Light and Darkness Ritual, −1 Small World — Light and Darkness Ritual: best line 0.95 worse when a cost banished it (5 of 8 orders) — Small World
- +1 Theorealize Liberation, −1 Plundered Power Patron Plane - Vidolia — Theorealize Liberation: best line 0.53 worse when a cost banished it (4 of 8 orders) — Small World
- +1 Artmage Impasto -Recapture- — Artmage Impasto -Recapture-: best line 1.23 worse when a cost banished it (2 of 8 orders) — Small World (add only: deck grows, up to 60)
- +1 Artmage Graflare — Artmage Graflare: best line 1.03 worse when a cost banished it (5 of 8 orders) — Small World (add only: deck grows, up to 60)
- +1 Light and Darkness Ritual — Light and Darkness Ritual: best line 0.95 worse when a cost banished it (5 of 8 orders) — Small World (add only: deck grows, up to 60)
- +1 Theorealize Liberation — Theorealize Liberation: best line 0.53 worse when a cost banished it (4 of 8 orders) — Small World (add only: deck grows, up to 60)

Effects the search had not used, tried on purpose (best result so far):
- Normal Summon Theorealize Medius: 12
- Activate Junoldo the Shadespirit Power Patron: 11.1
- Activate Prohibited Power Patron Portal - Terminus: 11.05
- Activate Vidolium the Unstable Power Patron of Unity: 10.1
- Activate Fiendsmith Engraver: 5.91
- Activate Fiendsmith Engraver: 5.91
- Link Summon Fiendsmith's Requiem: 5.91
- Activate Fiendsmith's Sequence: 5.91

## Order 1: best 12.9 [margin 7.04: ss_panama null, elfnote 1.63, despia null, angelechy 9.75] (, worst 12.9) — from v52-smallworld (seed followed 29/49 steps)
Others: v52-smallworld → new ending 12.3 · search 11.85 · opening lanes 11.85 · v52-smallworld → new early order 11.6 · sw1 9.1 · tries Activate Fiendsmith Engraver 5.91 · v52-smallworld → new early order 5.06 · tries Activate Fiendsmith's Tract 4.91 · v52-smallworld → new ending 3.1

1. Activate Small World (hand): activate this card
2. Selected Ghost Ogre & Snow Rabbit (hand)
3. Selected Lacrima the Crimson Tears (Deck)
4. Selected Medius the Pure (Deck)
5. Normal Summon Medius the Pure (hand)
6. Yes
7. Selected Nervedo the Shadebeast Power Patron (Deck)
8. Special Summon it
9. Activate Nervedo the Shadebeast Power Patron (M2): Special Summon 1 "Nerva the Power Patron of Creation" from your Extra Deck
10. Selected Nerva the Power Patron of Creation (Extra Deck)
11. Yes
12. Selected Junoldo the Shadespirit Power Patron (Deck)
13. Activate Junoldo the Shadespirit Power Patron (M3): Special Summon 1 "Junora the Power Patron of Tuning" from your Extra Deck
14. Selected Junora the Power Patron of Tuning (Extra Deck)
15. Yes
16. Selected Nervedo the Shadebeast Power Patron (Extra Deck)
17. Link Summon Purification Power Patron (Extra Deck)
18. select Medius the Pure (M1)
19. select Junora the Power Patron of Tuning (M3)
20. Yes
21. Selected Theorealize Medius (Deck)
22. Activate Theorealize Medius (hand): If a "Power Patron" card is on the field: You can Special Summon this card from your hand, then you can add 1 "Theorealize" Spell/Trap from your Deck to your hand
23. Yes
24. Selected Theorealize Liberation (Deck)
25. Activate Medius the Pure (GY): Shuffle 1 monster from your hand or face-up field into the Deck, and if you do, Special Summon this card
26. Selected Ash Blossom & Joyous Spring (hand)
27. Activate Purification Power Patron (EMZ-L): Link Summon including this card as material
28. Activate Theorealize Liberation (hand): Add to your hand, or Special Summon, 1 monster from your Deck with 300 ATK/200 DEF
29. Selected Griffoh (Deck)
30. Add the card(s) to your hand
31. Selected Medicurius the Power Patron of Illusions (Extra Deck)
32. select Medius the Pure (M3)
33. Finish selection
34. Yes
35. Special Summon 1 "Diactorus" monster
36. Selected Artmage Diactorus (Extra Deck)
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
48. Selected Skull Archfiend of Chaos (GY)
49. Set Spell/Trap Light and Darkness Ritual
50. Activate Light and Darkness Ritual (S2): Ritual Summon 1 "Magician of Dark Chaos - Black Chaos" or "Black Luster Soldier - Soldier of Light and Darkness" from your hand
51. Selected Magician of Dark Chaos - Black Chaos (hand)
52. Selected Griffoh (GY) value 8 or 1
53. Yes
54. Selected Theorealize Liberation (GY)
55. Special Summon (procedure) Artmage Non-Finito (Extra Deck)
56. Selected Theorealize Liberation (hand)
57. Selected Nervedo the Shadebeast Power Patron (hand)
58. Yes
59. Selected Artmage Impasto -Recapture- (Deck)

End board:  LP 8000 | Hand 3 | Deck 27 | Extra 10 | GY 6 | Banished 11   Monsters: M1: Artmage Non-Finito Lv7 2400/1500 ATK || M2: Nerva the Power Patron of Creation Lv10 3300/3300 ATK || M3: Artmage Diactorus Lv8 2800/2500 ATK || M4: Magician of Dark Chaos - Black Chaos Lv8 2800/2600 ATK || EMZ-L: Medicurius the Power Patron of Illusions L3↙↓↘ 3000    Spell/Trap: S1: Mind Shuffle || S2: Artmage Impasto -Recapture- (Set)   GY: Small World, Junora the Power Patron of Tuning, Purification Power Patron, Light and Darkness Ritual, Theorealize Liberation, Nervedo the Shadebeast Power Patron   Banished: Ghost Ogre & Snow Rabbit (face-down), Lacrima the Crimson Tears (face-down), Artmage Finmel (face-down), F

## Order 2: best 11.1 [margin 4.48: ss_panama null, elfnote -0.32, despia 1.51, angelechy 8.05] (, worst 11.1) — from search
Others: opening lanes 11.1 · v52-smallworld 11 · v52-smallworld 11 · sw1 7.33 · sw1 6.84 · tries Activate Fiendsmith's Sequence 5.91 · tries Normal Summon Lacrima the Crimson Tears 5.91

1. Activate Small World (hand): activate this card
2. Selected Droll & Lock Bird (hand)
3. Selected Black Chaos (Deck)
4. Selected Medius the Pure (Deck)
5. Normal Summon Medius the Pure (hand)
6. Yes
7. Selected Nervedo the Shadebeast Power Patron (Deck)
8. Special Summon it
9. Activate Nervedo the Shadebeast Power Patron (M1): Special Summon 1 "Nerva the Power Patron of Creation" from your Extra Deck
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
25. Activate Medius the Pure (GY): Shuffle 1 monster from your hand or face-up field into the Deck, and if you do, Special Summon this card
26. Selected Ash Blossom & Joyous Spring (hand)
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
42. select Junora the Power Patron of Tuning (M4)
43. select Artmage Non-Finito (M1)
44. No

End board:  LP 8000 | Hand 2 | Deck 32 | Extra 9 | GY 5 | Banished 11   Monsters: M3: Artmage Diactorus Lv8 2800/2500 DEF || M4: S:P Little Knight L2←→ 1600  || M5: Nerva the Power Patron of Creation Lv10 3300/3300 ATK || EMZ-R: Medicurius the Power Patron of Illusions L3↙↓↘ 3000    Spell/Trap: S1: Artmage Impasto -Recapture- (Set)   GY: Small World, Nervedo the Shadebeast Power Patron, Purification Power Patron, Artmage Non-Finito, Junora the Power Patron of Tuning   Banished: Droll & Lock Bird (face-down), Black Chaos (face-down), Ars Magna of Purification and Corruption (face-down), Theorealize Liberation (face-down), Fiendsmith Engraver (face-down), Artmage Graflare (face-down), Ars Magna - "Citrin

## Order 3: best 11 [margin 3.27: ss_panama 6.34, elfnote 1.79, despia -0.55, angelechy 4.75] (, worst 11) — from opening lanes → new early order
Others: opening lanes 10.85 · opening lanes → new ending 10.85 · search 10.35 · v52-smallworld 9.94 · opening lanes → new early order 9.45 · sw1 9.43 · opening lanes → new ending 7.85 · tries Activate Fiendsmith's Sequence 5.91

1. Activate Small World (hand): activate this card
2. Selected Ghost Ogre & Snow Rabbit (hand)
3. Selected Artmage Graflare (Deck)
4. Selected Ars Magna of Purification and Corruption (Deck)
5. Activate Ars Magna of Purification and Corruption (hand): You can banish this card from your hand; add 1 "Ars Magna" Spell/Trap from your Deck to your hand
6. Selected Ars Magna - "Citrinitas" (Deck)
7. Activate Ars Magna - "Citrinitas" (hand): activate this card
8. Activate Ars Magna - "Citrinitas" (S1): Add 1 "Medius" or "Ars Magna" monster from your Deck to your hand
9. Selected Medius the Pure (Deck)
10. Normal Summon Medius the Pure (hand)
11. Yes
12. Selected Nervedo the Shadebeast Power Patron (Deck)
13. Special Summon it
14. Activate Nervedo the Shadebeast Power Patron (M5): Special Summon 1 "Nerva the Power Patron of Creation" from your Extra Deck
15. Selected Nerva the Power Patron of Creation (Extra Deck)
16. Yes
17. Selected Junoldo the Shadespirit Power Patron (Deck)
18. Activate Junoldo the Shadespirit Power Patron (M1): Special Summon 1 "Junora the Power Patron of Tuning" from your Extra Deck
19. Selected Junora the Power Patron of Tuning (Extra Deck)
20. Yes
21. Selected Nervedo the Shadebeast Power Patron (Extra Deck)
22. Link Summon Purification Power Patron (Extra Deck)
23. select Junora the Power Patron of Tuning (M1)
24. select Nerva the Power Patron of Creation (EMZ-R)
25. Activate Ars Magna of Purification and Corruption (banishment): Special Summon this card
26. Activate Purification Power Patron (EMZ-R): Add 1 "Theorealize" card from your Deck to your hand
27. Selected Theorealize Medius (Deck)
28. Activate Purification Power Patron (EMZ-R): Link Summon including this card as material
29. Selected Medicurius the Power Patron of Illusions (Extra Deck)
30. select Ars Magna of Purification and Corruption (M3)
31. Finish selection
32. Activate Theorealize Medius (hand): If a "Power Patron" card is on the field: You can Special Summon this card from your hand, then you can add 1 "Theorealize" Spell/Trap from your Deck to your hand
33. Yes
34. Selected Theorealize Past Lull (Deck)
35. Special Summon (procedure) Artmage Non-Finito (Extra Deck)
36. Selected Theorealize Past Lull (hand)
37. Selected Nervedo the Shadebeast Power Patron (hand)
38. Yes
39. Selected Artmage Impasto -Recapture- (Deck)
40. Activate Theorealize Past Lull (GY): Special Summon 1 Fusion, Synchro, or Xyz Monster from your GY
41. Selected Junora the Power Patron of Tuning (GY)
42. Link Summon S:P Little Knight (Extra Deck)
43. select Junora the Power Patron of Tuning (M3)
44. select Medius the Pure (M4)
45. Yes
46. Selected Nerva the Power Patron of Creation (GY)
47. Yes
48. Special Summon 1 "Diactorus" monster
49. Selected Artmage Diactorus (Extra Deck)

End board:  LP 8000 | Hand 3 | Deck 29 | Extra 9 | GY 6 | Banished 11   Monsters: M1: Artmage Non-Finito Lv7 2400/1500 ATK || M2: S:P Little Knight L2←→ 1600  || M3: Artmage Diactorus Lv8 2800/2500 ATK || EMZ-L: Medicurius the Power Patron of Illusions L3↙↓↘ 3000    Spell/Trap: S1: Ars Magna - "Citrinitas" || S2: Artmage Impasto -Recapture- (Set)   GY: Small World, Ars Magna of Purification and Corruption, Purification Power Patron, Nervedo the Shadebeast Power Patron, Junora the Power Patron of Tuning, Medius the Pure   Banished: Ghost Ogre & Snow Rabbit (face-down), Artmage Graflare (face-down), Theorealize Medius (face-down), Vidolium the Unstable Power Patron of Unity (face-down), Mind Shuffle (fac

## Order 4: best 11.9 [margin 4.4: ss_panama null, elfnote 3.39, despia 2.08, angelechy 8.9] (, worst 11.9) — from opening lanes → new early order
Others: opening lanes 11.85 · opening lanes → new ending 11.85 · search 11.1 · opening lanes → new ending 11.1 · v52-smallworld 11 · v52-smallworld 11 · sw1 7.33 · sw1 6.84 · tries Activate Fiendsmith Engraver 5.91 · tries Link Summon Fiendsmith's Requiem 5.91 · opening lanes → new early order 2.55

1. Activate Small World (hand): activate this card
2. Selected Droll & Lock Bird (hand)
3. Selected Magician of Dark Chaos - Black Chaos (Deck)
4. Selected Ars Magna of Purification and Corruption (Deck)
5. Activate Ars Magna of Purification and Corruption (hand): You can banish this card from your hand; add 1 "Ars Magna" Spell/Trap from your Deck to your hand
6. Selected Ars Magna - "Citrinitas" (Deck)
7. Activate Ars Magna - "Citrinitas" (hand): activate this card
8. Activate Ars Magna - "Citrinitas" (S1): Add 1 "Medius" or "Ars Magna" monster from your Deck to your hand
9. Selected Medius the Pure (Deck)
10. Normal Summon Medius the Pure (hand)
11. Yes
12. Selected Nervedo the Shadebeast Power Patron (Deck)
13. Special Summon it
14. Activate Nervedo the Shadebeast Power Patron (M2): Special Summon 1 "Nerva the Power Patron of Creation" from your Extra Deck
15. Selected Nerva the Power Patron of Creation (Extra Deck)
16. Yes
17. Selected Artmage Finmel (Deck)
18. Link Summon Purification Power Patron (Extra Deck)
19. select Medius the Pure (M1)
20. select Nerva the Power Patron of Creation (M2)
21. Activate Purification Power Patron (EMZ-R): Add 1 "Theorealize" card from your Deck to your hand
22. Activate Ars Magna of Purification and Corruption (banishment): Special Summon this card
23. Selected Theorealize Medius (Deck)
24. Activate Ars Magna of Purification and Corruption (M5): Banish Spells/Traps on the field
25. Selected Ars Magna - "Citrinitas" (S1)
26. Activate Medius the Pure (GY): Shuffle 1 monster from your hand or face-up field into the Deck, and if you do, Special Summon this card
27. Selected Ash Blossom & Joyous Spring (hand)
28. Activate Theorealize Medius (hand): If a "Power Patron" card is on the field: You can Special Summon this card from your hand, then you can add 1 "Theorealize" Spell/Trap from your Deck to your hand
29. Yes
30. Selected Theorealize Liberation (Deck)
31. Activate Theorealize Liberation (hand): Add to your hand, or Special Summon, 1 monster from your Deck with 300 ATK/200 DEF
32. Activate Purification Power Patron (EMZ-R): Link Summon including this card as material
33. Selected Medicurius the Power Patron of Illusions (Extra Deck)
34. select Medius the Pure (M4)
35. Finish selection
36. Selected Griffoh (Deck)
37. Add the card(s) to your hand
38. Yes
39. Special Summon 1 "Diactorus" monster
40. Selected Artmage Diactorus (Extra Deck)
41. Activate Theorealize Liberation (GY): Treat 1 monster you control as a Tuner this turn
42. Selected Ars Magna of Purification and Corruption (M5)
43. Activate Griffoh (hand): Activate 1 of these effects
44. Set 1 card that mentions "Light and Darkness Ritual"
45. Selected Mind Shuffle (Deck)
46. Activate Mind Shuffle (S1): activate this card
47. No
48. Activate Mind Shuffle (S1): Add 1 appropriate monster to your hand
49. Selected Skull Archfiend of Chaos (Deck)
50. Selected Skull Archfiend of Chaos (hand)
51. Yes
52. Selected Light and Darkness Ritual (Deck)
53. Selected Black Luster Soldier - Soldier of Light and Darkness (Deck)
54. Activate Light and Darkness Ritual (GY): Add both this card and 1 card that mentions "Light and Darkness Ritual" from your GY to your hand
55. Selected Griffoh (GY)
56. Special Summon (procedure) Artmage Non-Finito (Extra Deck)
57. Selected Light and Darkness Ritual (hand)
58. Selected Artmage Finmel (M3)
59. Yes
60. Selected Artmage Impasto -Recapture- (Deck)
61. Activate Skull Archfiend of Chaos (GY): Special Summon this card
62. select Ars Magna - "Citrinitas" (banishment)
63. select Artmage Finmel (GY)
64. select Light and Darkness Ritual (GY)
65. Default order
66. Link Summon S:P Little Knight (Extra Deck)
67. select Skull Archfiend of Chaos (M2)
68. select Ars Magna of Purification and Corruption (M5)

End board:  LP 8000 | Hand 4 | Deck 31 | Extra 10 | GY 5 | Banished 8   Monsters: M1: Artmage Diactorus Lv8 2800/2500 ATK || M2: S:P Little Knight L2←→ 1600  || M3: Artmage Non-Finito Lv7 2400/1500 ATK || EMZ-L: Medicurius the Power Patron of Illusions L3↙↓↘ 3000    Spell/Trap: S1: Mind Shuffle || S2: Artmage Impasto -Recapture- (Set)   GY: Small World, Nerva the Power Patron of Creation, Purification Power Patron, Skull Archfiend of Chaos, Ars Magna of Purification and Corruption   Banished: Droll & Lock Bird (face-down), Magician of Dark Chaos - Black Chaos (face-down), Pendulum Treasure (face-down), Lacrima the Crimson Tears (face-down), Prohibited Power Patron Portal - Terminus (face-down), Medius 

## Order 5: best 12.9 [margin 5.11: ss_panama null, elfnote 4.35, despia -2.87, angelechy 8.02] (, worst 12.9) — from v52-smallworld (seed followed 29/49 steps)
Others: v52-smallworld → new ending 12.9 · v52-smallworld → new early order 12.9 · v52-smallworld → new ending 12.9 · tries Normal Summon Theorealize Medius 12 · opening lanes 11.85 · v52-smallworld → new early order 10.25 · sw1 8.7 · search 5.91 · tries Activate Fiendsmith's Desirae 5.91

1. Activate Small World (hand): activate this card
2. Selected Ghost Ogre & Snow Rabbit (hand)
3. Selected Lacrima the Crimson Tears (Deck)
4. Selected Medius the Pure (Deck)
5. Normal Summon Medius the Pure (hand)
6. Yes
7. Selected Nervedo the Shadebeast Power Patron (Deck)
8. Special Summon it
9. Activate Nervedo the Shadebeast Power Patron (M2): Special Summon 1 "Nerva the Power Patron of Creation" from your Extra Deck
10. Selected Nerva the Power Patron of Creation (Extra Deck)
11. Yes
12. Selected Junoldo the Shadespirit Power Patron (Deck)
13. Activate Junoldo the Shadespirit Power Patron (M3): Special Summon 1 "Junora the Power Patron of Tuning" from your Extra Deck
14. Selected Junora the Power Patron of Tuning (Extra Deck)
15. Yes
16. Selected Nervedo the Shadebeast Power Patron (Extra Deck)
17. Link Summon Purification Power Patron (Extra Deck)
18. select Medius the Pure (M1)
19. select Junora the Power Patron of Tuning (M3)
20. Yes
21. Selected Theorealize Medius (Deck)
22. Activate Theorealize Medius (hand): If a "Power Patron" card is on the field: You can Special Summon this card from your hand, then you can add 1 "Theorealize" Spell/Trap from your Deck to your hand
23. Yes
24. Selected Theorealize Liberation (Deck)
25. Activate Medius the Pure (GY): Shuffle 1 monster from your hand or face-up field into the Deck, and if you do, Special Summon this card
26. Selected Ash Blossom & Joyous Spring (hand)
27. Activate Theorealize Liberation (hand): Add to your hand, or Special Summon, 1 monster from your Deck with 300 ATK/200 DEF
28. Selected Griffoh (Deck)
29. Add the card(s) to your hand
30. Activate Purification Power Patron (EMZ-L): Link Summon including this card as material
31. Selected Medicurius the Power Patron of Illusions (Extra Deck)
32. select Medius the Pure (M3)
33. Finish selection
34. Yes
35. Special Summon 1 "Diactorus" monster
36. Selected Artmage Diactorus (Extra Deck)
37. Activate Theorealize Liberation (GY): Treat 1 monster you control as a Tuner this turn
38. Selected Medicurius the Power Patron of Illusions (EMZ-L)
39. Activate Artmage Diactorus (M4): Change the battle position of 1 monster on the field
40. Selected Nerva the Power Patron of Creation (M2)
41. Activate Griffoh (hand): Activate 1 of these effects
42. Set 1 card that mentions "Light and Darkness Ritual"
43. Selected Mind Shuffle (Deck)
44. Activate Mind Shuffle (S1): activate this card
45. No
46. Activate Mind Shuffle (S1): Add 1 appropriate monster to your hand
47. Selected Skull Archfiend of Chaos (Deck)
48. Selected Skull Archfiend of Chaos (hand)
49. Yes
50. Selected Light and Darkness Ritual (Deck)
51. Selected Magician of Dark Chaos - Black Chaos (Deck)
52. Activate Light and Darkness Ritual (GY): Add both this card and 1 card that mentions "Light and Darkness Ritual" from your GY to your hand
53. Selected Skull Archfiend of Chaos (GY)
54. Activate Light and Darkness Ritual (hand): Ritual Summon 1 "Magician of Dark Chaos - Black Chaos" or "Black Luster Soldier - Soldier of Light and Darkness" from your hand
55. Selected Magician of Dark Chaos - Black Chaos (hand)
56. Selected Griffoh (GY) value 8 or 1
57. Yes
58. Selected Light and Darkness Ritual (GY)
59. Special Summon (procedure) Artmage Non-Finito (Extra Deck)
60. Selected Light and Darkness Ritual (hand)
61. Selected Nervedo the Shadebeast Power Patron (hand)
62. Yes
63. Selected Artmage Impasto -Recapture- (Deck)

End board:  LP 8000 | Hand 3 | Deck 27 | Extra 10 | GY 5 | Banished 12   Monsters: M1: Magician of Dark Chaos - Black Chaos Lv8 2800/2600 ATK || M2: Nerva the Power Patron of Creation Lv10 3300/3300 DEF || M3: Artmage Non-Finito Lv7 2400/1500 ATK || M4: Artmage Diactorus Lv8 2800/2500 ATK || EMZ-L: Medicurius the Power Patron of Illusions L3↙↓↘ 3000    Spell/Trap: S1: Mind Shuffle || S2: Artmage Impasto -Recapture- (Set)   GY: Small World, Junora the Power Patron of Tuning, Purification Power Patron, Light and Darkness Ritual, Nervedo the Shadebeast Power Patron   Banished: Ghost Ogre & Snow Rabbit (face-down), Lacrima the Crimson Tears (face-down), Fiendsmith Engraver (face-down), Artmage Finmel (face

## Order 6: best 11.1 [margin 4.81: ss_panama 5.93, elfnote 8.4, despia 2.18, angelechy 7.95] (, worst 11.1) — from opening lanes
Others: opening lanes → new ending 11.1 · tries Activate Prohibited Power Patron Portal - Terminus 11.05 · sw1 9.94 · v52-smallworld 9.65 · opening lanes → new ending 8.93 · search 6.28 · tries Activate Mind Shuffle 4.8 · opening lanes → new early order 2.55 · opening lanes → new early order 2.55

1. Activate Small World (hand): activate this card
2. Selected Droll & Lock Bird (hand)
3. Selected Black Chaos (Deck)
4. Selected Medius the Pure (Deck)
5. Normal Summon Medius the Pure (hand)
6. Yes
7. Selected Nervedo the Shadebeast Power Patron (Deck)
8. Special Summon it
9. Activate Nervedo the Shadebeast Power Patron (M1): Special Summon 1 "Nerva the Power Patron of Creation" from your Extra Deck
10. Selected Nerva the Power Patron of Creation (Extra Deck)
11. Yes
12. Selected Junoldo the Shadespirit Power Patron (Deck)
13. Activate Junoldo the Shadespirit Power Patron (M1): Special Summon 1 "Junora the Power Patron of Tuning" from your Extra Deck
14. Selected Junora the Power Patron of Tuning (Extra Deck)
15. Yes
16. Selected Nervedo the Shadebeast Power Patron (Extra Deck)
17. Link Summon Purification Power Patron (Extra Deck)
18. select Junora the Power Patron of Tuning (M5)
19. select Medius the Pure (M4)
20. Yes
21. Selected Theorealize Medius (Deck)
22. Activate Theorealize Medius (hand): If a "Power Patron" card is on the field: You can Special Summon this card from your hand, then you can add 1 "Theorealize" Spell/Trap from your Deck to your hand
23. Yes
24. Selected Theorealize Past Lull (Deck)
25. Special Summon (procedure) Artmage Non-Finito (Extra Deck)
26. Selected Theorealize Past Lull (hand)
27. Selected Nervedo the Shadebeast Power Patron (hand)
28. Yes
29. Activate Purification Power Patron (EMZ-R): Link Summon including this card as material
30. Selected Medicurius the Power Patron of Illusions (Extra Deck)
31. select Artmage Non-Finito (M5)
32. Finish selection
33. Selected Artmage Impasto -Recapture- (Deck)
34. Activate Theorealize Past Lull (GY): Special Summon 1 Fusion, Synchro, or Xyz Monster from your GY
35. Selected Junora the Power Patron of Tuning (GY)
36. Activate Medius the Pure (GY): Shuffle 1 monster from your hand or face-up field into the Deck, and if you do, Special Summon this card
37. Selected Ash Blossom & Joyous Spring (hand)
38. Link Summon S:P Little Knight (Extra Deck)
39. select Medius the Pure (M4)
40. select Junora the Power Patron of Tuning (M2)
41. Yes
42. Special Summon 1 "Diactorus" monster
43. Activate S:P Little Knight (M2): Banish 1 card on the field or GY
44. Selected Junora the Power Patron of Tuning (GY)
45. Selected Artmage Diactorus (Extra Deck)

End board:  LP 8000 | Hand 2 | Deck 32 | Extra 9 | GY 4 | Banished 12   Monsters: M1: Artmage Diactorus Lv8 2800/2500 ATK || M2: S:P Little Knight L2←→ 1600  || M3: Nerva the Power Patron of Creation Lv10 3300/3300 ATK || EMZ-L: Medicurius the Power Patron of Illusions L3↙↓↘ 3000    Spell/Trap: S1: Artmage Impasto -Recapture- (Set)   GY: Small World, Nervedo the Shadebeast Power Patron, Artmage Non-Finito, Purification Power Patron   Banished: Droll & Lock Bird (face-down), Black Chaos (face-down), Ars Magna of Infinity and Finity (face-down), Artmage Vandalism -Assault- (face-down), Artmage Vandalism -Assault- (face-down), Vidolium the Unstable Power Patron of Unity (face-down), Theorealize Medius (fa

## Order 7: best 13.05 [margin 5.22: ss_panama 3.8, elfnote 0.92, despia 5.74, angelechy 9.9] (, worst 13.05) — from opening lanes → new ending → new early order
Others: opening lanes → new ending → new early order → new ending 13.05 · opening lanes → new ending → new early order → new early order 12.9 · opening lanes → new ending 12 · opening lanes 11.85 · search 11.1 · tries Activate Junoldo the Shadespirit Power Patron 11.1 · v52-smallworld 11 · v52-smallworld 11 · tries Activate Vidolium the Unstable Power Patron of Unity 10.1 · sw1 7.33 · sw1 6.84

1. Activate Small World (hand): activate this card
2. Selected Droll & Lock Bird (hand)
3. Selected Magician of Dark Chaos - Black Chaos (Deck)
4. Selected Ars Magna of Infinity and Finity (Deck)
5. Activate Ars Magna of Infinity and Finity (hand): You can banish this card from your hand; add 1 non-Warrior "Ars Magna" monster from your Deck to your hand
6. Selected Ars Magna of Purification and Corruption (Deck)
7. Activate Ars Magna of Purification and Corruption (hand): You can banish this card from your hand; add 1 "Ars Magna" Spell/Trap from your Deck to your hand
8. Selected Ars Magna - "Citrinitas" (Deck)
9. Activate Ars Magna - "Citrinitas" (hand): activate this card
10. Activate Ars Magna - "Citrinitas" (S1): Add 1 "Medius" or "Ars Magna" monster from your Deck to your hand
11. Selected Medius the Pure (Deck)
12. Normal Summon Medius the Pure (hand)
13. Yes
14. Selected Nervedo the Shadebeast Power Patron (Deck)
15. Special Summon it
16. Activate Nervedo the Shadebeast Power Patron (M2): Special Summon 1 "Nerva the Power Patron of Creation" from your Extra Deck
17. Selected Nerva the Power Patron of Creation (Extra Deck)
18. Yes
19. Activate Ars Magna of Infinity and Finity (banishment): Special Summon this card
20. Selected Junoldo the Shadespirit Power Patron (Deck)
21. Activate Junoldo the Shadespirit Power Patron (M4): Special Summon 1 "Junora the Power Patron of Tuning" from your Extra Deck
22. Selected Junora the Power Patron of Tuning (Extra Deck)
23. Yes
24. Selected Nervedo the Shadebeast Power Patron (Extra Deck)
25. Link Summon Purification Power Patron (Extra Deck)
26. select Ars Magna of Infinity and Finity (M2)
27. select Junora the Power Patron of Tuning (EMZ-R)
28. Activate Purification Power Patron (EMZ-L): Add 1 "Theorealize" card from your Deck to your hand
29. Selected Theorealize Medius (Deck)
30. Activate Theorealize Medius (hand): If a "Power Patron" card is on the field: You can Special Summon this card from your hand, then you can add 1 "Theorealize" Spell/Trap from your Deck to your hand
31. Yes
32. Selected Theorealize Liberation (Deck)
33. Activate Theorealize Liberation (hand): Add to your hand, or Special Summon, 1 monster from your Deck with 300 ATK/200 DEF
34. Activate Purification Power Patron (EMZ-L): Link Summon including this card as material
35. Selected Medicurius the Power Patron of Illusions (Extra Deck)
36. select Medius the Pure (M1)
37. Finish selection
38. Selected Griffoh (Deck)
39. Add the card(s) to your hand
40. Yes
41. Activate Ars Magna of Purification and Corruption (M4): Banish Spells/Traps on the field
42. Selected Ars Magna - "Citrinitas" (S1)
43. Activate Griffoh (hand): Activate 1 of these effects
44. Set 1 card that mentions "Light and Darkness Ritual"
45. Selected Mind Shuffle (Deck)
46. Activate Mind Shuffle (S1): activate this card
47. Yes
48. Selected Skull Archfiend of Chaos (Deck)
49. Selected Skull Archfiend of Chaos (hand)
50. Yes
51. Selected Light and Darkness Ritual (Deck)
52. Selected Black Luster Soldier - Soldier of Light and Darkness (Deck)
53. Activate Light and Darkness Ritual (GY): Add both this card and 1 card that mentions "Light and Darkness Ritual" from your GY to your hand
54. Selected Griffoh (GY)
55. Special Summon (procedure) Artmage Non-Finito (Extra Deck)
56. Selected Light and Darkness Ritual (hand)
57. Selected Nervedo the Shadebeast Power Patron (hand)
58. Yes
59. Selected Artmage Impasto -Recapture- (Deck)
60. Activate Skull Archfiend of Chaos (GY): Special Summon this card
61. select Purification Power Patron (GY)
62. select Nervedo the Shadebeast Power Patron (GY)
63. select Light and Darkness Ritual (GY)
64. Default order
65. Activate Medius the Pure (GY): Shuffle 1 monster from your hand or face-up field into the Deck, and if you do, Special Summon this card
66. Selected Ars Magna of Purification and Corruption (M4)
67. Link Summon S:P Little Knight (Extra Deck)
68. select Medius the Pure (M4)
69. select Skull Archfiend of Chaos (M5)
70. Yes
71. Special Summon 1 "Diactorus" monster
72. Selected Artmage Diactorus (Extra Deck)

End board:  LP 8000 | Hand 5 | Deck 26 | Extra 10 | GY 5 | Banished 11   Monsters: M1: Artmage Non-Finito Lv7 2400/1500 ATK || M3: Nerva the Power Patron of Creation Lv10 3300/3300 ATK || M4: S:P Little Knight L2←→ 1600  || M5: Artmage Diactorus Lv8 2800/2500 ATK || EMZ-R: Medicurius the Power Patron of Illusions L3↙↓↘ 9000    Spell/Trap: S1: Mind Shuffle || S2: Artmage Impasto -Recapture- (Set)   GY: Small World, Ars Magna of Infinity and Finity, Junora the Power Patron of Tuning, Theorealize Liberation, Skull Archfiend of Chaos   Banished: Droll & Lock Bird (face-down), Magician of Dark Chaos - Black Chaos (face-down), Dark Magical Circle (face-down), Vidolium the Unstable Power Patron of Unity (face

## Order 8: best 11.85 [margin 4.1: ss_panama 0.55, elfnote 4.88, despia -1.33, angelechy 8.65] (, worst 11.85) — from opening lanes
Others: opening lanes → new ending 11.85 · opening lanes → new early order 11.85 · search 11.1 · v52-smallworld 11 · v52-smallworld 11 · opening lanes → new ending 9.14 · sw1 8.7 · opening lanes → new early order 5.41 · tries Activate Black Chaos 4.8 · tries Activate Mind Shuffle 4.8

1. Set Spell/Trap Small World
2. Activate Small World (S1): activate this card
3. Selected Ghost Ogre & Snow Rabbit (hand)
4. Selected Artmage Graflare (Deck)
5. Selected Ars Magna of Purification and Corruption (Deck)
6. Activate Ars Magna of Purification and Corruption (hand): You can banish this card from your hand; add 1 "Ars Magna" Spell/Trap from your Deck to your hand
7. Selected Ars Magna - "Citrinitas" (Deck)
8. Activate Ars Magna - "Citrinitas" (hand): activate this card
9. Activate Ars Magna - "Citrinitas" (S1): Add 1 "Medius" or "Ars Magna" monster from your Deck to your hand
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
26. Activate Purification Power Patron (EMZ-L): Add 1 "Theorealize" card from your Deck to your hand
27. Activate Ars Magna of Purification and Corruption (banishment): Special Summon this card
28. Selected Theorealize Medius (Deck)
29. Activate Medius the Pure (GY): Shuffle 1 monster from your hand or face-up field into the Deck, and if you do, Special Summon this card
30. Selected Ash Blossom & Joyous Spring (hand)
31. Activate Theorealize Medius (hand): If a "Power Patron" card is on the field: You can Special Summon this card from your hand, then you can add 1 "Theorealize" Spell/Trap from your Deck to your hand
32. Yes
33. Selected Theorealize Past Lull (Deck)
34. Special Summon (procedure) Artmage Non-Finito (Extra Deck)
35. Selected Theorealize Past Lull (hand)
36. Selected Nervedo the Shadebeast Power Patron (hand)
37. Yes
38. Activate Purification Power Patron (EMZ-L): Link Summon including this card as material
39. Selected Medicurius the Power Patron of Illusions (Extra Deck)
40. select Medius the Pure (M4)
41. Finish selection
42. Selected Artmage Impasto -Recapture- (Deck)
43. Yes
44. Special Summon 1 "Diactorus" monster
45. Selected Artmage Diactorus (Extra Deck)
46. Activate Theorealize Past Lull (GY): Special Summon 1 Fusion, Synchro, or Xyz Monster from your GY
47. Selected Junora the Power Patron of Tuning (GY)
48. Link Summon S:P Little Knight (Extra Deck)
49. select Ars Magna of Purification and Corruption (M2)
50. select Junora the Power Patron of Tuning (M4)
51. No

End board:  LP 8000 | Hand 2 | Deck 30 | Extra 9 | GY 5 | Banished 11   Monsters: M1: Nerva the Power Patron of Creation Lv10 3300/3300 ATK || M3: Artmage Diactorus Lv8 2800/2500 ATK || M4: S:P Little Knight L2←→ 1600  || M5: Artmage Non-Finito Lv7 2400/1500 ATK || EMZ-R: Medicurius the Power Patron of Illusions L3↙↓↘ 3000    Spell/Trap: S1: Ars Magna - "Citrinitas" || S2: Artmage Impasto -Recapture- (Set)   GY: Small World, Nervedo the Shadebeast Power Patron, Purification Power Patron, Ars Magna of Purification and Corruption, Junora the Power Patron of Tuning   Banished: Ghost Ogre & Snow Rabbit (face-down), Artmage Graflare (face-down), Medius the Pure (face-down), Griffoh (face-down), Prohibited P

