# Evolved lines — Ars Magna of Infinity and Finity, Ash Blossom & Joyous Spring, Ash Blossom & Joyous Spring, Droll & Lock Bird, Ghost Ogre & Snow Rabbit (findlist-1100)
2026-11-25T18:52:13.672Z

8 deck orders (different face-down banishes / draws), 3 opponent hands x o_ss_panama + o_elfnote + o_despia + o_angelechy per line, 5 min searches, 4 mutation rounds.
Fitness = end-board interruptions (the lab scorer, src/disrupt.mjs: wipe 2, negate 1-1.5, banish/protection less; hand traps kept count 1 each). The winner of each order is also played into the opponent decks: margin after their turn shown beside it.

**Margin after their turn (winners): average 5.13** (worst -3.6)

**Best line per deck order: average 12.95** (worst order 10.94). Winner came from: opening lanes → new ending 1, search 3, v52-infinity 1, opening lanes 2, search → new early order 1

| seed line | works as written | its score when it works | seed start + search finish (all orders) |
|---|---|---|---|
| inf1 | 8/8 | 6.81 | 11 |
| v52-infinity | 6/8 | 11.6 | 12.32 |

## Weak points found automatically
Cards whose face-down banish (by your own costs) hurt the best line most (average best line without vs with that card banished):

| card | orders where it was banished | drop |
|---|---|---|
| Black Luster Soldier - Soldier of Light and Darkness | 2/8 | 1.11 |
| Fiendsmith Engraver | 3/8 | 0.94 |
| Skull Archfiend of Chaos | 3/8 | 0.86 |
| Artmage Finmel | 3/8 | 0.62 |
| Ars Magna - "Citrinitas" | 3/8 | 0.54 |
| Pendulum Treasure | 5/8 | 0.48 |
| Small World | 3/8 | -0.16 |
| Griffoh | 2/8 | -0.16 |
| Theorealize Medius | 2/8 | -0.16 |
| Apprentice Illusion Magician | 4/8 | -0.18 |

Where the hand-designed lines broke (next step that no longer worked):
- v52-infinity: Impasto (1x)
- v52-infinity: Past Lull (1x)

List changes proposed for the list test (data/proposals-findlist-1100.json):
- +1 Black Luster Soldier - Soldier of Light and Darkness, −1 Plundered Power Patron Plane - Vidolia — Black Luster Soldier - Soldier of Light and Darkness: best line 1.11 worse when a cost banished it (2 of 8 orders) — Ars Magna of Infinity and Finity
- +1 Fiendsmith Engraver, −1 Artmage Vandalism -Assault- — Fiendsmith Engraver: best line 0.94 worse when a cost banished it (3 of 8 orders) — Ars Magna of Infinity and Finity
- +1 Skull Archfiend of Chaos, −1 Small World — Skull Archfiend of Chaos: best line 0.86 worse when a cost banished it (3 of 8 orders) — Ars Magna of Infinity and Finity
- +1 Artmage Finmel, −1 Plundered Power Patron Plane - Vidolia — Artmage Finmel: best line 0.62 worse when a cost banished it (3 of 8 orders) — Ars Magna of Infinity and Finity
- +1 Black Luster Soldier - Soldier of Light and Darkness — Black Luster Soldier - Soldier of Light and Darkness: best line 1.11 worse when a cost banished it (2 of 8 orders) — Ars Magna of Infinity and Finity (add only: deck grows, up to 60)
- +1 Fiendsmith Engraver — Fiendsmith Engraver: best line 0.94 worse when a cost banished it (3 of 8 orders) — Ars Magna of Infinity and Finity (add only: deck grows, up to 60)
- +1 Skull Archfiend of Chaos — Skull Archfiend of Chaos: best line 0.86 worse when a cost banished it (3 of 8 orders) — Ars Magna of Infinity and Finity (add only: deck grows, up to 60)
- +1 Artmage Finmel — Artmage Finmel: best line 0.62 worse when a cost banished it (3 of 8 orders) — Ars Magna of Infinity and Finity (add only: deck grows, up to 60)

Effects the search had not used, tried on purpose (best result so far):
- Activate Black Chaos: 13.9
- Activate Prohibited Power Patron Portal - Terminus: 13
- Activate Mind Shuffle: 13
- Activate Junoldo the Shadespirit Power Patron: 12.85
- Activate Pendulum Treasure: 12.85
- Normal Summon Theorealize Medius: 12.85
- Activate Junoldo the Shadespirit Power Patron: 12.85
- Activate Artmage Graflare: 12.85

## Order 1: best 13.3 [margin 6.83: ss_panama 4.18, elfnote 9.45, despia -0.53, angelechy 9.3] (, worst 13.3) — from opening lanes → new ending
Others: opening lanes 13 · tries Activate Mind Shuffle 13 · tries Activate Prohibited Power Patron Portal - Terminus 13 · opening lanes → new ending 12.85 · opening lanes → new early order 12.85 · v52-infinity 12.45 · v52-infinity 11.6 · opening lanes → new ending → new early order 11.45 · inf1 11.35 · search 9.41 · inf1 6.81

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
22. select Junora the Power Patron of Tuning (EMZ-R)
23. Activate Purification Power Patron (EMZ-L): Add 1 "Theorealize" card from your Deck to your hand
24. Selected Theorealize Medius (Deck)
25. Activate Theorealize Medius (hand): If a "Power Patron" card is on the field: You can Special Summon this card from your hand, then you can add 1 "Theorealize" Spell/Trap from your Deck to your hand
26. Yes
27. Selected Theorealize Past Lull (Deck)
28. Special Summon (procedure) Artmage Non-Finito (Extra Deck)
29. Selected Theorealize Past Lull (hand)
30. Selected Nervedo the Shadebeast Power Patron (hand)
31. Activate Artmage Non-Finito (M5): Set 1 "Artmage" Spell/Trap from your Deck
32. Activate Ars Magna of Infinity and Finity (banishment): Special Summon this card
33. Selected Artmage Impasto -Recapture- (Deck)
34. Activate Theorealize Past Lull (GY): Special Summon 1 Fusion, Synchro, or Xyz Monster from your GY
35. Selected Junora the Power Patron of Tuning (GY)
36. Activate Medius the Pure (GY): Shuffle 1 monster from your hand or face-up field into the Deck, and if you do, Special Summon this card
37. Activate Purification Power Patron (EMZ-L): Link Summon including this card as material
38. Selected Medicurius the Power Patron of Illusions (Extra Deck)
39. select Ars Magna of Infinity and Finity (M1)
40. Finish selection
41. Selected Ash Blossom & Joyous Spring (hand)
42. Link Summon S:P Little Knight (Extra Deck)
43. select Medius the Pure (M1)
44. select Junora the Power Patron of Tuning (M2)
45. Yes
46. Special Summon 1 "Diactorus" monster
47. Activate Ars Magna of Purification and Corruption (banishment): Special Summon this card
48. Selected Artmage Diactorus (Extra Deck)

End board:  LP 8000 | Hand 3 | Deck 31 | Extra 9 | GY 4 | Banished 9   Monsters: M1: S:P Little Knight L2←→ 1600  || M2: Ars Magna of Purification and Corruption Lv8 1000/2100 ATK || M3: Nerva the Power Patron of Creation Lv10 3300/3300 ATK || M4: Artmage Diactorus Lv8 2800/2500 ATK || M5: Artmage Non-Finito Lv7 2400/1500 ATK || EMZ-L: Medicurius the Power Patron of Illusions L3↙↓↘ 9000    Spell/Trap: S1: Ars Magna - "Citrinitas" || S2: Artmage Impasto -Recapture- (Set)   GY: Nervedo the Shadebeast Power Patron, Ars Magna of Infinity and Finity, Purification Power Patron, Junora the Power Patron of Tuning   Banished: Infinite Impermanence (face-down), Small World (face-down), Light and Darkness Ritual 

## Order 2: best 12.85 [margin 6.74: ss_panama 9.15, elfnote 4.98, despia 3.34, angelechy 8.8] (, worst 12.85) — from search
Others: v52-infinity 12.45 · inf1 12.4 · v52-infinity 11.6 · tries Activate Fiendsmith's Tract 9.14 · tries Activate Fiendsmith Engraver 9.14 · opening lanes 9.14 · inf1 6.81

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
17. Activate Junoldo the Shadespirit Power Patron (M5): Special Summon 1 "Junora the Power Patron of Tuning" from your Extra Deck
18. Selected Junora the Power Patron of Tuning (Extra Deck)
19. Yes
20. Selected Nervedo the Shadebeast Power Patron (Extra Deck)
21. Link Summon Purification Power Patron (Extra Deck)
22. select Medius the Pure (M3)
23. select Junora the Power Patron of Tuning (EMZ-R)
24. Activate Purification Power Patron (EMZ-L): Add 1 "Theorealize" card from your Deck to your hand
25. Activate Ars Magna of Purification and Corruption (banishment): Special Summon this card
26. Selected Theorealize Medius (Deck)
27. Activate Medius the Pure (GY): Shuffle 1 monster from your hand or face-up field into the Deck, and if you do, Special Summon this card
28. Activate Ars Magna of Purification and Corruption (M3): Banish Spells/Traps on the field
29. Selected Ars Magna - "Citrinitas" (S1)
30. Selected Ash Blossom & Joyous Spring (hand)
31. Activate Purification Power Patron (EMZ-L): Link Summon including this card as material
32. Selected Medicurius the Power Patron of Illusions (Extra Deck)
33. select Ars Magna of Infinity and Finity (M1)
34. Finish selection
35. Activate Theorealize Medius (hand): If a "Power Patron" card is on the field: You can Special Summon this card from your hand, then you can add 1 "Theorealize" Spell/Trap from your Deck to your hand
36. Yes
37. Selected Theorealize Past Lull (Deck)
38. Special Summon (procedure) Artmage Non-Finito (Extra Deck)
39. Selected Theorealize Past Lull (hand)
40. Selected Nervedo the Shadebeast Power Patron (hand)
41. Yes
42. Selected Artmage Impasto -Recapture- (Deck)
43. Link Summon S:P Little Knight (Extra Deck)
44. select Medius the Pure (M2)
45. select Ars Magna of Purification and Corruption (M3)
46. Yes
47. Special Summon 1 "Diactorus" monster
48. Selected Artmage Diactorus (Extra Deck)
49. Activate Theorealize Past Lull (GY): Special Summon 1 Fusion, Synchro, or Xyz Monster from your GY
50. Selected Junora the Power Patron of Tuning (GY)

End board:  LP 8000 | Hand 3 | Deck 31 | Extra 9 | GY 4 | Banished 10   Monsters: M1: Junora the Power Patron of Tuning Lv10 3100/3800 ATK || M2: S:P Little Knight L2←→ 1600  || M3: Artmage Diactorus Lv8 2800/2500 ATK || M4: Nerva the Power Patron of Creation Lv10 3300/3300 DEF || M5: Artmage Non-Finito Lv7 2400/1500 ATK || EMZ-L: Medicurius the Power Patron of Illusions L3↙↓↘ 9000    Spell/Trap: S1: Artmage Impasto -Recapture- (Set)   GY: Ars Magna of Infinity and Finity, Purification Power Patron, Nervedo the Shadebeast Power Patron, Ars Magna of Purification and Corruption   Banished: Small World (face-down), Artmage Finmel (face-down), Griffoh (face-down), Apprentice Illusion Magician (face-down), 

## Order 3: best 10.94 [margin 3.4: ss_panama 7.09, elfnote 1.95, despia 1.43, angelechy 3.37] (, worst 10.94) — from v52-infinity (seed followed 40/54 steps)
Others: v52-infinity → new ending 10.94 · v52-infinity → new early order 10.92 · v52-infinity → new early order 10.73 · v52-infinity → new ending 10.09 · search 9.41 · opening lanes 9.41 · tries Activate Mind Shuffle 9.41 · inf1 8.55 · tries Activate Vidolium the Unstable Power Patron of Unity 8.41 · inf1 6.81

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
12. Activate Nervedo the Shadebeast Power Patron (M2): Special Summon 1 "Nerva the Power Patron of Creation" from your Extra Deck
13. Selected Nerva the Power Patron of Creation (Extra Deck)
14. Yes
15. Activate Ars Magna of Infinity and Finity (banishment): Special Summon this card
16. Selected Junoldo the Shadespirit Power Patron (Deck)
17. Activate Junoldo the Shadespirit Power Patron (M4): Special Summon 1 "Junora the Power Patron of Tuning" from your Extra Deck
18. Selected Junora the Power Patron of Tuning (Extra Deck)
19. Yes
20. Selected Nervedo the Shadebeast Power Patron (Extra Deck)
21. Link Summon Purification Power Patron (Extra Deck)
22. select Medius the Pure (M1)
23. select Junora the Power Patron of Tuning (M4)
24. Activate Purification Power Patron (EMZ-L): Add 1 "Theorealize" card from your Deck to your hand
25. Selected Theorealize Medius (Deck)
26. Activate Theorealize Medius (hand): If a "Power Patron" card is on the field: You can Special Summon this card from your hand, then you can add 1 "Theorealize" Spell/Trap from your Deck to your hand
27. Yes
28. Selected Theorealize Past Lull (Deck)
29. Special Summon (procedure) Artmage Non-Finito (Extra Deck)
30. Selected Theorealize Past Lull (hand)
31. Selected Nervedo the Shadebeast Power Patron (hand)
32. Yes
33. Selected Artmage Vandalism -Assault- (Deck)
34. Activate Medius the Pure (GY): Shuffle 1 monster from your hand or face-up field into the Deck, and if you do, Special Summon this card
35. Activate Purification Power Patron (EMZ-L): Link Summon including this card as material
36. Selected Medicurius the Power Patron of Illusions (Extra Deck)
37. select Ars Magna of Infinity and Finity (M3)
38. Finish selection
39. Selected Ash Blossom & Joyous Spring (hand)
40. No
41. Activate Artmage Vandalism -Assault- (S2): When this card is activated: You can add 1 "Medius the Pure" from your Deck to your hand
42. Yes
43. Selected Medius the Pure (Deck)
44. Activate Theorealize Past Lull (GY): Special Summon 1 Fusion, Synchro, or Xyz Monster from your GY
45. Selected Junora the Power Patron of Tuning (GY)
46. Activate Artmage Vandalism -Assault- (S2): Make 1 face-up monster you control able to be treated as an "Artmage" monster if used as Fusion Material
47. Selected Junora the Power Patron of Tuning (M5)
48. Link Summon S:P Little Knight (Extra Deck)
49. select Medius the Pure (M3)
50. select Junora the Power Patron of Tuning (M5)
51. Yes
52. Special Summon 1 "Diactorus" monster
53. Activate Ars Magna of Purification and Corruption (banishment): Special Summon this card
54. Selected Artmage Diactorus (Extra Deck)

End board:  LP 8000 | Hand 4 | Deck 30 | Extra 9 | GY 4 | Banished 9   Monsters: M1: Artmage Diactorus Lv8 2800/2500 ATK || M2: Nerva the Power Patron of Creation Lv10 3300/3300 ATK || M3: S:P Little Knight L2←→ 1600  || M4: Artmage Non-Finito Lv7 2400/1500 ATK || M5: Ars Magna of Purification and Corruption Lv8 1000/2100 ATK || EMZ-R: Medicurius the Power Patron of Illusions L3↙↓↘ 9000    Spell/Trap: S1: Ars Magna - "Citrinitas" || S2: Artmage Vandalism -Assault-   GY: Nervedo the Shadebeast Power Patron, Ars Magna of Infinity and Finity, Purification Power Patron, Junora the Power Patron of Tuning   Banished: Artmage Impasto -Recapture- (face-down), Magician of Dark Chaos - Black Chaos (face-down), A

## Order 4: best 13 [margin 6.91: ss_panama 6.24, elfnote 6.11, despia 6.05, angelechy 9] (, worst 13) — from search
Others: search → new early order 13 · tries Activate Junoldo the Shadespirit Power Patron 12.85 · tries Activate Artmage Graflare 12.85 · opening lanes 12.85 · search → new ending 12.85 · v52-infinity 12.45 · v52-infinity 11.6 · inf1 11.05 · search → new ending 10.58 · search → new early order 9.41 · inf1 6.81

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
12. Activate Nervedo the Shadebeast Power Patron (M1): Special Summon 1 "Nerva the Power Patron of Creation" from your Extra Deck
13. Selected Nerva the Power Patron of Creation (Extra Deck)
14. Yes
15. Selected Junoldo the Shadespirit Power Patron (Deck)
16. Activate Junoldo the Shadespirit Power Patron (M5): Special Summon 1 "Junora the Power Patron of Tuning" from your Extra Deck
17. Selected Junora the Power Patron of Tuning (Extra Deck)
18. Yes
19. Selected Nervedo the Shadebeast Power Patron (Extra Deck)
20. Link Summon Purification Power Patron (Extra Deck)
21. select Junora the Power Patron of Tuning (EMZ-L)
22. select Medius the Pure (M3)
23. Activate Ars Magna of Purification and Corruption (banishment): Special Summon this card
24. Activate Purification Power Patron (EMZ-R): Add 1 "Theorealize" card from your Deck to your hand
25. Activate Ars Magna of Infinity and Finity (banishment): Special Summon this card
26. Selected Theorealize Medius (Deck)
27. Activate Ars Magna of Purification and Corruption (M1): Banish Spells/Traps on the field
28. Selected Ars Magna - "Citrinitas" (S1)
29. Activate Theorealize Medius (hand): If a "Power Patron" card is on the field: You can Special Summon this card from your hand, then you can add 1 "Theorealize" Spell/Trap from your Deck to your hand
30. Yes
31. Selected Theorealize Past Lull (Deck)
32. Activate Purification Power Patron (EMZ-R): Link Summon including this card as material
33. Selected Medicurius the Power Patron of Illusions (Extra Deck)
34. select Ars Magna of Purification and Corruption (M1)
35. Finish selection
36. Special Summon (procedure) Artmage Non-Finito (Extra Deck)
37. Selected Theorealize Past Lull (hand)
38. Selected Nervedo the Shadebeast Power Patron (hand)
39. Yes
40. Selected Artmage Impasto -Recapture- (Deck)
41. Activate Theorealize Past Lull (GY): Special Summon 1 Fusion, Synchro, or Xyz Monster from your GY
42. Selected Junora the Power Patron of Tuning (GY)
43. Activate Medius the Pure (GY): Shuffle 1 monster from your hand or face-up field into the Deck, and if you do, Special Summon this card
44. Selected Ars Magna of Infinity and Finity (M3)
45. Link Summon S:P Little Knight (Extra Deck)
46. select Medius the Pure (M3)
47. select Junora the Power Patron of Tuning (M5)
48. Yes
49. Special Summon 1 "Diactorus" monster
50. Selected Artmage Diactorus (Extra Deck)

End board:  LP 8000 | Hand 4 | Deck 31 | Extra 9 | GY 4 | Banished 10   Monsters: M1: Artmage Non-Finito Lv7 2400/1500 ATK || M3: Artmage Diactorus Lv8 2800/2500 ATK || M4: Nerva the Power Patron of Creation Lv10 3300/3300 ATK || M5: S:P Little Knight L2←→ 1600  || EMZ-R: Medicurius the Power Patron of Illusions L3↙↓↘ 9000    Spell/Trap: S1: Artmage Impasto -Recapture- (Set)   GY: Ars Magna of Purification and Corruption, Purification Power Patron, Nervedo the Shadebeast Power Patron, Junora the Power Patron of Tuning   Banished: Fiendsmith's Tract (face-down), Light and Darkness Ritual (face-down), Small World (face-down), Pendulum Treasure (face-down), Apprentice Illusion Magician (face-down), Infini

## Order 5: best 13.3 [margin 3.43: ss_panama 3.07, elfnote null, despia -2.15, angelechy 9.25] (, worst 13.3) — from opening lanes
Others: inf1 13.2 · search 13 · tries Activate Junoldo the Shadespirit Power Patron 12.85 · tries Activate Pendulum Treasure 12.85 · v52-infinity 12.45 · v52-infinity 11.6 · inf1 6.81

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
22. select Ars Magna of Infinity and Finity (M4)
23. select Junora the Power Patron of Tuning (EMZ-R)
24. Activate Purification Power Patron (EMZ-L): Add 1 "Theorealize" card from your Deck to your hand
25. Selected Theorealize Medius (Deck)
26. Activate Theorealize Medius (hand): If a "Power Patron" card is on the field: You can Special Summon this card from your hand, then you can add 1 "Theorealize" Spell/Trap from your Deck to your hand
27. Activate Purification Power Patron (EMZ-L): Link Summon including this card as material
28. Selected Medicurius the Power Patron of Illusions (Extra Deck)
29. select Medius the Pure (M3)
30. Finish selection
31. Yes
32. Selected Theorealize Past Lull (Deck)
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
44. select Junora the Power Patron of Tuning (M3)
45. select Medius the Pure (M5)
46. Yes
47. Special Summon 1 "Diactorus" monster
48. Activate Ars Magna of Purification and Corruption (banishment): Special Summon this card
49. Selected Artmage Diactorus (Extra Deck)

End board:  LP 8000 | Hand 3 | Deck 31 | Extra 9 | GY 3 | Banished 10   Monsters: M1: Nerva the Power Patron of Creation Lv10 3300/3300 ATK || M2: Artmage Diactorus Lv8 2800/2500 ATK || M3: S:P Little Knight L2←→ 1600  || M4: Artmage Non-Finito Lv7 2400/1500 ATK || M5: Ars Magna of Purification and Corruption Lv8 1000/2100 ATK || EMZ-L: Medicurius the Power Patron of Illusions L3↙↓↘ 9000    Spell/Trap: S1: Ars Magna - "Citrinitas" || S2: Artmage Impasto -Recapture- (Set)   GY: Ars Magna of Infinity and Finity, Purification Power Patron, Junora the Power Patron of Tuning   Banished: Fiendsmith Engraver (face-down), Lacrima the Crimson Tears (face-down), Pendulum Treasure (face-down), Artmage Vandalism -

## Order 6: best 13.9 [margin 2.78: ss_panama -3.04, elfnote 2.33, despia 3.28, angelechy 6.62] (, worst 13.9) — from opening lanes
Others: tries Activate Black Chaos 13.9 · inf1 13.2 · v52-infinity 12.9 · search 12.85 · tries Normal Summon Theorealize Medius 12.85 · inf1 6.81

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
18. Activate Junoldo the Shadespirit Power Patron (M3): Special Summon 1 "Junora the Power Patron of Tuning" from your Extra Deck
19. Selected Junora the Power Patron of Tuning (Extra Deck)
20. Yes
21. Selected Nervedo the Shadebeast Power Patron (Extra Deck)
22. Link Summon Purification Power Patron (Extra Deck)
23. select Medius the Pure (M4)
24. select Junora the Power Patron of Tuning (EMZ-L)
25. Activate Purification Power Patron (EMZ-L): Add 1 "Theorealize" card from your Deck to your hand
26. Activate Ars Magna of Purification and Corruption (banishment): Special Summon this card
27. Activate Ars Magna of Infinity and Finity (M5): Banish 1 monster on the field
28. Selected Purification Power Patron (EMZ-L)
29. Selected Theorealize Medius (Deck)
30. Activate Theorealize Medius (hand): If a "Power Patron" card is on the field: You can Special Summon this card from your hand, then you can add 1 "Theorealize" Spell/Trap from your Deck to your hand
31. Yes
32. Selected Theorealize Liberation (Deck)
33. Activate Medius the Pure (GY): Shuffle 1 monster from your hand or face-up field into the Deck, and if you do, Special Summon this card
34. Selected Ash Blossom & Joyous Spring (hand)
35. Activate Theorealize Liberation (hand): Add to your hand, or Special Summon, 1 monster from your Deck with 300 ATK/200 DEF
36. Selected Griffoh (Deck)
37. Add the card(s) to your hand
38. Link Summon Purification Power Patron (Extra Deck)
39. select Medius the Pure (M2)
40. select Ars Magna of Purification and Corruption (M3)
41. Yes
42. Special Summon 1 "Diactorus" monster
43. Activate Purification Power Patron (EMZ-L): Link Summon including this card as material
44. Selected Medicurius the Power Patron of Illusions (Extra Deck)
45. select Ars Magna of Infinity and Finity (M5)
46. Finish selection
47. Selected Artmage Diactorus (Extra Deck)
48. Activate Griffoh (hand): Activate 1 of these effects
49. Set 1 card that mentions "Light and Darkness Ritual"
50. Selected Mind Shuffle (Deck)
51. Activate Mind Shuffle (S2): activate this card
52. No
53. Activate Mind Shuffle (S2): Add 1 appropriate monster to your hand
54. Selected Skull Archfiend of Chaos (Deck)
55. Selected Skull Archfiend of Chaos (hand)
56. Yes
57. Selected Light and Darkness Ritual (Deck)
58. Selected Magician of Dark Chaos - Black Chaos (Deck)
59. Activate Light and Darkness Ritual (GY): Add both this card and 1 card that mentions "Light and Darkness Ritual" from your GY to your hand
60. Selected Griffoh (GY)
61. Activate Light and Darkness Ritual (hand): Ritual Summon 1 "Magician of Dark Chaos - Black Chaos" or "Black Luster Soldier - Soldier of Light and Darkness" from your hand
62. Selected Magician of Dark Chaos - Black Chaos (hand)
63. Selected Ars Magna of Infinity and Finity (GY) value 8
64. Yes
65. Selected Light and Darkness Ritual (GY)
66. Special Summon (procedure) Artmage Non-Finito (Extra Deck)
67. Selected Light and Darkness Ritual (hand)
68. Selected Nervedo the Shadebeast Power Patron (hand)
69. Yes
70. Selected Artmage Impasto -Recapture- (Deck)

End board:  LP 8000 | Hand 4 | Deck 26 | Extra 9 | GY 6 | Banished 11   Monsters: M1: Nerva the Power Patron of Creation Lv10 3300/3300 ATK || M3: Artmage Diactorus Lv8 2800/2500 ATK || M4: Magician of Dark Chaos - Black Chaos Lv8 2800/2600 ATK || M5: Artmage Non-Finito Lv7 2400/1500 ATK || EMZ-R: Medicurius the Power Patron of Illusions L3↙↓↘ 9000    Spell/Trap: S1: Ars Magna - "Citrinitas" || S2: Mind Shuffle || S3: Artmage Impasto -Recapture- (Set)   GY: Junora the Power Patron of Tuning, Ars Magna of Purification and Corruption, Purification Power Patron, Skull Archfiend of Chaos, Light and Darkness Ritual, Nervedo the Shadebeast Power Patron   Banished: Artmage Finmel (face-down), Fiendsmith's Tra

## Order 7: best 13.3 [margin 6.32: ss_panama 7.2, elfnote null, despia 2.72, angelechy 9.35] (, worst 13.3) — from search → new early order
Others: search → new early order → new ending 13 · search → new early order → new early order 13 · search 12.85 · tries Activate Prohibited Power Patron Portal - Terminus 12.85 · opening lanes 12.85 · search → new ending 12.85 · v52-infinity 12.45 · tries Activate Vidolium the Unstable Power Patron of Unity 11.7 · v52-infinity 11.6 · inf1 9.14 · inf1 6.81

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
17. Activate Junoldo the Shadespirit Power Patron (M4): Special Summon 1 "Junora the Power Patron of Tuning" from your Extra Deck
18. Selected Junora the Power Patron of Tuning (Extra Deck)
19. Yes
20. Selected Nervedo the Shadebeast Power Patron (Extra Deck)
21. Link Summon Purification Power Patron (Extra Deck)
22. select Ars Magna of Infinity and Finity (M2)
23. select Junora the Power Patron of Tuning (EMZ-L)
24. Activate Purification Power Patron (EMZ-L): Add 1 "Theorealize" card from your Deck to your hand
25. Selected Theorealize Medius (Deck)
26. Activate Purification Power Patron (EMZ-L): Link Summon including this card as material
27. Selected Medicurius the Power Patron of Illusions (Extra Deck)
28. select Medius the Pure (M1)
29. Finish selection
30. No
31. Activate Medius the Pure (GY): Shuffle 1 monster from your hand or face-up field into the Deck, and if you do, Special Summon this card
32. Selected Ash Blossom & Joyous Spring (hand)
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
43. Link Summon S:P Little Knight (Extra Deck)
44. select Junora the Power Patron of Tuning (M2)
45. select Medius the Pure (M1)
46. Yes
47. Special Summon 1 "Diactorus" monster
48. Activate Ars Magna of Purification and Corruption (banishment): Special Summon this card
49. Selected Artmage Diactorus (Extra Deck)

End board:  LP 8000 | Hand 3 | Deck 31 | Extra 9 | GY 4 | Banished 9   Monsters: M1: S:P Little Knight L2←→ 1600  || M2: Ars Magna of Purification and Corruption Lv8 1000/2100 ATK || M3: Nerva the Power Patron of Creation Lv10 3300/3300 ATK || M4: Artmage Diactorus Lv8 2800/2500 ATK || M5: Artmage Non-Finito Lv7 2400/1500 ATK || EMZ-L: Medicurius the Power Patron of Illusions L3↙↓↘ 9000    Spell/Trap: S1: Ars Magna - "Citrinitas" || S2: Artmage Impasto -Recapture- (Set)   GY: Ars Magna of Infinity and Finity, Purification Power Patron, Nervedo the Shadebeast Power Patron, Junora the Power Patron of Tuning   Banished: Black Luster Soldier - Soldier of Light and Darkness (face-down), Apprentice Illusion 

## Order 8: best 13 [margin 4.59: ss_panama 0, elfnote null, despia 0.65, angelechy 8.85] (, worst 13) — from search
Others: search → new ending 13 · search → new early order 13 · tries Activate Light and Darkness Ritual 12.6 · tries Activate Light and Darkness Ritual 12.6 · opening lanes 12.6 · v52-infinity 12.45 · v52-infinity 11.6 · search → new ending 10.73 · inf1 9.14 · inf1 6.81

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
23. select Junora the Power Patron of Tuning (M1)
24. Activate Purification Power Patron (EMZ-R): Add 1 "Theorealize" card from your Deck to your hand
25. Selected Theorealize Medius (Deck)
26. Activate Purification Power Patron (EMZ-R): Link Summon including this card as material
27. Selected Medicurius the Power Patron of Illusions (Extra Deck)
28. select Medius the Pure (M4)
29. Finish selection
30. Yes
31. Activate Ars Magna of Purification and Corruption (M4): Banish Spells/Traps on the field
32. Selected Ars Magna - "Citrinitas" (S1)
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
43. Link Summon S:P Little Knight (Extra Deck)
44. select Junora the Power Patron of Tuning (M2)
45. select Ars Magna of Purification and Corruption (M4)
46. Yes
47. Selected Nervedo the Shadebeast Power Patron (GY)
48. Yes
49. Special Summon 1 "Diactorus" monster
50. Selected Artmage Diactorus (Extra Deck)

End board:  LP 8000 | Hand 4 | Deck 30 | Extra 9 | GY 5 | Banished 10   Monsters: M1: Artmage Diactorus Lv8 2800/2500 ATK || M2: S:P Little Knight L2←→ 1600  || M3: Artmage Non-Finito Lv7 2400/1500 ATK || M5: Nerva the Power Patron of Creation Lv10 3300/3300 ATK || EMZ-L: Medicurius the Power Patron of Illusions L3↙↓↘ 9000    Spell/Trap: S1: Artmage Impasto -Recapture- (Set)   GY: Ars Magna of Infinity and Finity, Medius the Pure, Purification Power Patron, Junora the Power Patron of Tuning, Ars Magna of Purification and Corruption   Banished: Nervedo the Shadebeast Power Patron (face-down), Apprentice Illusion Magician (face-down), Theorealize Liberation (face-down), Plundered Power Patron Plane - Vid

