# Evolved lines — Medius the Pure, Ash Blossom & Joyous Spring, Infinite Impermanence, Droll & Lock Bird, Ghost Ogre & Snow Rabbit (findlist-1100)
2026-11-26T03:16:02.340Z

8 deck orders (different face-down banishes / draws), 3 opponent hands x o_ss_panama + o_elfnote + o_despia + o_angelechy per line, 30 min searches, 4 mutation rounds.
Fitness = end-board interruptions (the lab scorer, src/disrupt.mjs: wipe 2, negate 1-1.5, banish/protection less; hand traps kept count 1 each). The winner of each order is also played into the opponent decks: margin after their turn shown beside it.

**Margin after their turn (winners): average 4.16** (worst -1.05)

**Best line per deck order: average 12.76** (worst order 12.6). Winner came from: tries Activate Mind Shuffle → new ending 1, m1b → new ending 2, m1b 1

| seed line | works as written | its score when it works | seed start + search finish (all orders) |
|---|---|---|---|
| br1 | 0/8 | - | 8.12 |
| bx1 | 0/8 | - | 11.65 |
| m1a | 4/8 | 9.25 | 9.8 |
| m1b | 4/8 | 8.25 | 12.53 |
| v52-medius | 4/8 | 12.2 | 12.2 |

## Weak points found automatically
Cards whose face-down banish (by your own costs) hurt the best line most (average best line without vs with that card banished):

| card | orders where it was banished | drop |
|---|---|---|
| Mind Shuffle | 3/8 | 0.32 |
| Pendulum Treasure | 2/8 | 0.27 |
| Nervedo the Shadebeast Power Patron | 2/8 | 0.12 |
| Artmage Vandalism -Assault- | 2/8 | 0.07 |
| Artmage Graflare | 2/8 | -0.07 |
| Medius the Pure | 3/8 | -0.15 |
| Griffoh | 3/8 | -0.22 |

Where the hand-designed lines broke (next step that no longer worked):
- bx1: Griffoh (3x)
- br1: Griffoh (3x)
- bx1: Skull Archfiend (1x)
- br1: Skull Archfiend (1x)

Effects the search had not used, tried on purpose (best result so far):
- Activate Mind Shuffle: 12.65
- Activate Artmage Diactorus: 12.45
- Activate Prohibited Power Patron Portal - Terminus: 12.45
- Activate Black Chaos: 12.3
- Activate Fiendsmith Engraver: 12.3
- Activate Artmage Vandalism -Assault-: 11.8
- Activate Vidolium the Unstable Power Patron of Unity: 11.45
- Activate Mind Shuffle: 11.15

## Order 1: best 13 [margin 3.92: ss_panama 3.92, elfnote null, despia null, angelechy null] (, worst 13) — from tries Activate Mind Shuffle → new ending
Others: tries Activate Mind Shuffle 12.65 · tries Activate Prohibited Power Patron Portal - Terminus 12.45 · opening lanes 12.35 · search 12.3 · m1b 12.3 · v52-medius 12.2 · v52-medius 12.2 · tries Activate Mind Shuffle → new ending → new early order 11.5 · bx1 10.9 · m1a 9.8 · m1a 9.25 · br1 8.33 · m1b 8.25

1. Normal Summon Medius the Pure (hand)
2. Yes
3. Selected Nervedo the Shadebeast Power Patron (Deck)
4. Special Summon it
5. Activate Nervedo the Shadebeast Power Patron (M5): Special Summon 1 "Nerva the Power Patron of Creation" from your Extra Deck
6. Selected Nerva the Power Patron of Creation (Extra Deck)
7. Yes
8. Selected Artmage Finmel (Deck)
9. Link Summon Purification Power Patron (Extra Deck)
10. select Medius the Pure (M4)
11. select Nerva the Power Patron of Creation (M5)
12. Yes
13. Selected Theorealize Medius (Deck)
14. Activate Medius the Pure (GY): Shuffle 1 monster from your hand or face-up field into the Deck, and if you do, Special Summon this card
15. Selected Ghost Ogre & Snow Rabbit (hand)
16. Activate Theorealize Medius (hand): If a "Power Patron" card is on the field: You can Special Summon this card from your hand, then you can add 1 "Theorealize" Spell/Trap from your Deck to your hand
17. Yes
18. Selected Theorealize Liberation (Deck)
19. Activate Theorealize Liberation (hand): Add to your hand, or Special Summon, 1 monster from your Deck with 300 ATK/200 DEF
20. Selected Griffoh (Deck)
21. #573
22. Activate Griffoh (hand): Activate 1 of these effects
23. Set 1 card that mentions "Light and Darkness Ritual"
24. Activate Purification Power Patron (EMZ-L): Link Summon including this card as material
25. Selected Medicurius the Power Patron of Illusions (Extra Deck)
26. select Medius the Pure (M2)
27. Finish selection
28. Selected Mind Shuffle (Deck)
29. Yes
30. Special Summon 1 "Diactorus" monster
31. Selected Artmage Diactorus (Extra Deck)
32. Activate Artmage Diactorus (M1): Change the battle position of 1 monster on the field
33. Selected Artmage Finmel (M3)
34. Activate Mind Shuffle (S1): activate this card
35. No
36. Activate Mind Shuffle (S1): Add 1 appropriate monster to your hand
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
48. Selected Theorealize Liberation (GY)
49. Activate Skull Archfiend of Chaos (hand): Special Summon this card
50. select Light and Darkness Ritual (GY)
51. select Purification Power Patron (GY)
52. select Nerva the Power Patron of Creation (GY)
53. Special Summon (procedure) Artmage Non-Finito (Extra Deck)
54. Selected Theorealize Liberation (hand)
55. Selected Artmage Finmel (M3)
56. Yes
57. Selected Artmage Impasto -Recapture- (Deck)

End board:  LP 8000 | Hand 3 | Deck 33 | Extra 13 | GY 2 | Banished 6   Monsters: M1: Artmage Diactorus Lv8 2800/2500 ATK || M3: Artmage Non-Finito Lv7 2400/1500 ATK || M4: Magician of Dark Chaos - Black Chaos Lv8 2800/2600 ATK || M5: Skull Archfiend of Chaos Lv6 2500/1200 ATK || EMZ-R: Medicurius the Power Patron of Illusions L3↙↓↘ 3000    Spell/Trap: S1: Mind Shuffle || S2: Artmage Impasto -Recapture- (Set)   GY: Theorealize Liberation, Artmage Finmel   Banished: Medius the Pure (face-down), Ars Magna - "Citrinitas" (face-down), Ars Magna of Infinity and Finity (face-down), Medius the Pure, Theorealize Medius, Griffoh   Hand: Droll & Lock Bird, Infinite Impermanence, Ash Blossom & Joyous Spring   Ext

## Order 2: best 12.8 [margin 2.93: ss_panama 1.82, elfnote 2.05, despia 0.72, angelechy 6.57] (, worst 12.8) — from m1b → new ending
Others: m1b → new ending → new ending 12.8 · m1b 12.6 · search 12.45 · opening lanes 12.45 · tries Activate Fiendsmith Engraver 12.3 · m1b → new ending → new early order 12.3 · v52-medius 12.2 · v52-medius 12.2 · bx1 11.75 · tries Activate Mind Shuffle 11.15 · m1a 9.8 · m1a 9.25 · br1 8.33 · m1b 8.25

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
28. Activate Purification Power Patron (EMZ-L): Link Summon including this card as material
29. Selected S:P Little Knight (Extra Deck)
30. select Junora the Power Patron of Tuning (M2)
31. Yes
32. Selected Nervedo the Shadebeast Power Patron (GY)
33. Yes
34. Add 1 "Ars Magna" card from your Deck to your hand
35. Selected Ars Magna of Infinity and Finity (Deck)
36. Activate Ars Magna of Infinity and Finity (hand): You can banish this card from your hand; add 1 non-Warrior "Ars Magna" monster from your Deck to your hand
37. Selected Ars Magna of Purification and Corruption (Deck)
38. Activate Ars Magna of Purification and Corruption (hand): You can banish this card from your hand; add 1 "Ars Magna" Spell/Trap from your Deck to your hand
39. Selected Ars Magna - "Citrinitas" (Deck)
40. Set Spell/Trap Ars Magna - "Citrinitas"
41. Activate Ars Magna - "Citrinitas" (S2): activate this card
42. Activate Medius the Pure (GY): Shuffle 1 monster from your hand or face-up field into the Deck, and if you do, Special Summon this card
43. Selected Theorealize Medius (M3)
44. Activate Ars Magna - "Citrinitas" (S2): Add 1 "Medius" or "Ars Magna" monster from your Deck to your hand
45. Selected Medius the Pure (Deck)
46. Link Summon Medicurius the Power Patron of Illusions (Extra Deck)
47. select S:P Little Knight (EMZ-L)
48. select Medius the Pure (M3)
49. Finish selection
50. Activate Ars Magna of Infinity and Finity (banishment): Special Summon this card
51. Activate Ars Magna of Purification and Corruption (banishment): Special Summon this card

End board:  LP 8000 | Hand 5 | Deck 30 | Extra 10 | GY 3 | Banished 9   Monsters: M1: Ars Magna of Infinity and Finity Lv8 1000/2400 ATK || M3: Ars Magna of Purification and Corruption Lv8 1000/2100 ATK || M4: Artmage Non-Finito Lv7 2400/1500 ATK || M5: Nerva the Power Patron of Creation Lv10 3300/3300 ATK || EMZ-R: Medicurius the Power Patron of Illusions L3↙↓↘ 9000    Spell/Trap: S1: Artmage Impasto -Recapture- (Set) || S2: Ars Magna - "Citrinitas"   GY: Junora the Power Patron of Tuning, Purification Power Patron, S:P Little Knight   Banished: Medius the Pure (face-down), Griffoh (face-down), Nervedo the Shadebeast Power Patron (face-down), Mind Shuffle (face-down), Artmage Vandalism -Assault- (face

## Order 3: best 12.65 [margin 3.33: ss_panama 4.73, elfnote 0.82, despia -1.05, angelechy 5.91] (, worst 12.65) — from m1b → new ending
Others: m1b 12.6 · tries Activate Artmage Diactorus 12.45 · opening lanes 12.35 · v52-medius 12.2 · v52-medius 12.2 · tries Activate Artmage Vandalism -Assault- 11.8 · bx1 11.75 · m1b → new ending → new early order 11.3 · m1a 9.8 · m1a 9.25 · br1 8.33 · m1b 8.25

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
30. Activate Purification Power Patron (EMZ-L): Link Summon including this card as material
31. Selected Medicurius the Power Patron of Illusions (Extra Deck)
32. select Medius the Pure (M1)
33. Finish selection
34. Yes
35. Add 1 "Ars Magna" card from your Deck to your hand
36. Selected Ars Magna of Infinity and Finity (Deck)
37. Activate Ars Magna of Infinity and Finity (hand): You can banish this card from your hand; add 1 non-Warrior "Ars Magna" monster from your Deck to your hand
38. Selected Ars Magna of Purification and Corruption (Deck)
39. Activate Ars Magna of Purification and Corruption (hand): You can banish this card from your hand; add 1 "Ars Magna" Spell/Trap from your Deck to your hand
40. Selected Ars Magna - "Citrinitas" (Deck)
41. Activate Ars Magna - "Citrinitas" (hand): activate this card
42. Activate Ars Magna - "Citrinitas" (S2): Add 1 "Medius" or "Ars Magna" monster from your Deck to your hand
43. Selected Theorealize Medius (Deck)
44. Link Summon S:P Little Knight (Extra Deck)
45. select Junora the Power Patron of Tuning (M2)
46. select Theorealize Medius (M3)
47. Activate Ars Magna of Infinity and Finity (banishment): Special Summon this card
48. Activate Ars Magna of Purification and Corruption (banishment): Special Summon this card

End board:  LP 8000 | Hand 4 | Deck 30 | Extra 10 | GY 4 | Banished 8   Monsters: M1: S:P Little Knight L2←→ 1600  || M2: Ars Magna of Purification and Corruption Lv8 1000/2100 ATK || M3: Ars Magna of Infinity and Finity Lv8 1000/2400 ATK || M4: Artmage Non-Finito Lv7 2400/1500 ATK || M5: Nerva the Power Patron of Creation Lv10 3300/3300 ATK || EMZ-L: Medicurius the Power Patron of Illusions L3↙↓↘ 9000    Spell/Trap: S1: Artmage Impasto -Recapture- (Set) || S2: Ars Magna - "Citrinitas"   GY: Nervedo the Shadebeast Power Patron, Purification Power Patron, Junora the Power Patron of Tuning, Theorealize Medius   Banished: Artmage Vandalism -Assault- (face-down), Mind Shuffle (face-down), Pendulum Treasure

## Order 4: best 12.6 [margin 6.46: ss_panama 6.84, elfnote 4.13, despia 6.45, angelechy 9.6] (, worst 12.6) — from m1b (seed followed 33/33 steps)
Others: opening lanes 12.6 · m1b → new early order 12.6 · m1b → new ending 12.6 · search 12.45 · tries Activate Black Chaos 12.3 · v52-medius 12.2 · v52-medius 12.2 · bx1 12.2 · m1b → new ending 12.15 · tries Activate Vidolium the Unstable Power Patron of Unity 11.45 · m1b → new early order 11.3 · m1a 9.8 · m1a 9.25 · m1b 8.25 · br1 7.49

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
31. Link Summon S:P Little Knight (Extra Deck)
32. select Medius the Pure (M1)
33. select Junora the Power Patron of Tuning (M2)
34. Yes
35. Add 1 "Ars Magna" card from your Deck to your hand
36. Selected Ars Magna of Infinity and Finity (Deck)
37. Activate Ars Magna of Infinity and Finity (hand): You can banish this card from your hand; add 1 non-Warrior "Ars Magna" monster from your Deck to your hand
38. Selected Ars Magna of Purification and Corruption (Deck)
39. Activate Ars Magna of Purification and Corruption (hand): You can banish this card from your hand; add 1 "Ars Magna" Spell/Trap from your Deck to your hand
40. Selected Ars Magna - "Citrinitas" (Deck)
41. Activate Ars Magna - "Citrinitas" (hand): activate this card
42. Activate Purification Power Patron (EMZ-L): Link Summon including this card as material
43. Selected Medicurius the Power Patron of Illusions (Extra Deck)
44. select Theorealize Medius (M3)
45. Finish selection
46. Activate Ars Magna of Purification and Corruption (banishment): Special Summon this card
47. Activate Ars Magna of Infinity and Finity (banishment): Special Summon this card
48. Activate Ars Magna - "Citrinitas" (S3): Add 1 "Medius" or "Ars Magna" monster from your Deck to your hand
49. Selected Theorealize Medius (Deck)

End board:  LP 8000 | Hand 3 | Deck 30 | Extra 10 | GY 4 | Banished 8   Monsters: M1: Ars Magna of Infinity and Finity Lv8 1000/2400 ATK || M2: S:P Little Knight L2←→ 1600  || M3: Ars Magna of Purification and Corruption Lv8 1000/2100 ATK || M4: Artmage Non-Finito Lv7 2400/1500 ATK || M5: Nerva the Power Patron of Creation Lv10 3300/3300 ATK || EMZ-R: Medicurius the Power Patron of Illusions L3↙↓↘ 9000    Spell/Trap: S1: Artmage Impasto -Recapture- (Set) || S2: Infinite Impermanence (Set) || S3: Ars Magna - "Citrinitas"   GY: Nervedo the Shadebeast Power Patron, Junora the Power Patron of Tuning, Theorealize Medius, Purification Power Patron   Banished: Black Luster Soldier - Soldier of Light and Darkn

