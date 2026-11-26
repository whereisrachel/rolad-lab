# Evolved lines — Medius the Pure, Ash Blossom & Joyous Spring, Infinite Impermanence, Droll & Lock Bird, Ghost Ogre & Snow Rabbit (findlist-1100)
2026-11-26T00:11:19.677Z

8 deck orders (different face-down banishes / draws), 3 opponent hands x o_ss_panama + o_elfnote + o_despia + o_angelechy per line, 5 min searches, 4 mutation rounds.
Fitness = end-board interruptions (the lab scorer, src/disrupt.mjs: wipe 2, negate 1-1.5, banish/protection less; hand traps kept count 1 each). The winner of each order is also played into the opponent decks: margin after their turn shown beside it.

**Margin after their turn (winners): average 4.2** (worst -0.35)

**Best line per deck order: average 12.66** (worst order 12.6). Winner came from: m1b → new ending → new ending → new early order 1, m1b 2, tries Activate Ars Magna of Purification and Corruption 1

| seed line | works as written | its score when it works | seed start + search finish (all orders) |
|---|---|---|---|
| br1 | 0/8 | - | 8.12 |
| bx1 | 0/8 | - | 11.34 |
| m1a | 4/8 | 9.25 | 9.8 |
| m1b | 4/8 | 8.25 | 12.53 |
| v52-medius | 4/8 | 12.2 | 12.2 |

## Weak points found automatically
Cards whose face-down banish (by your own costs) hurt the best line most (average best line without vs with that card banished):

| card | orders where it was banished | drop |
|---|---|---|
| Griffoh | 3/8 | 0.12 |
| Mind Shuffle | 2/8 | 0.12 |
| Artmage Vandalism -Assault- | 2/8 | 0.12 |
| Pendulum Treasure | 3/8 | 0.05 |
| Ars Magna - "Citrinitas" | 2/8 | 0.03 |
| Fiendsmith Engraver | 2/8 | 0.03 |
| Nervedo the Shadebeast Power Patron | 2/8 | -0.03 |
| Skull Archfiend of Chaos | 2/8 | -0.03 |
| Medius the Pure | 3/8 | -0.08 |

Where the hand-designed lines broke (next step that no longer worked):
- bx1: Griffoh (3x)
- br1: Griffoh (3x)
- bx1: Skull Archfiend (1x)
- br1: Skull Archfiend (1x)

Effects the search had not used, tried on purpose (best result so far):
- Activate Ars Magna of Purification and Corruption: 12.75
- Activate Artmage Diactorus: 12.45
- Activate Ars Magna of Purification and Corruption: 12.2
- Activate Artmage Vandalism -Assault-: 11.8
- Activate Ars Magna of Infinity and Finity: 11.7
- Activate Artmage Vandalism -Assault-: 11
- Activate Theorealize Liberation: 10.9
- Activate Ars Magna - "Citrinitas": 10.13

## Order 1: best 12.7 [margin 3.59: ss_panama 0.22, elfnote null, despia 0.91, angelechy 7.39] (, worst 12.7) — from m1b → new ending → new ending → new early order
Others: m1b → new ending → new ending 12.5 · m1b → new ending 12.35 · m1b 12.3 · v52-medius 12.2 · v52-medius 12.2 · tries Activate Ars Magna of Purification and Corruption 12.2 · opening lanes 11.75 · m1b → new ending → new early order 11.3 · bx1 10.9 · tries Activate Ars Magna - "Citrinitas" 10.13 · m1a 9.8 · m1a 9.25 · br1 8.33 · m1b 8.25

1. Normal Summon Medius the Pure (hand)
2. Yes
3. Selected Nervedo the Shadebeast Power Patron (Deck)
4. Special Summon it
5. Activate Nervedo the Shadebeast Power Patron (M2): Special Summon 1 "Nerva the Power Patron of Creation" from your Extra Deck
6. Selected Nerva the Power Patron of Creation (Extra Deck)
7. Yes
8. Selected Artmage Graflare (Deck)
9. Link Summon Purification Power Patron (Extra Deck)
10. select Medius the Pure (M1)
11. select Nerva the Power Patron of Creation (M2)
12. Yes
13. Selected Theorealize Medius (Deck)
14. Activate Theorealize Medius (hand): If a "Power Patron" card is on the field: You can Special Summon this card from your hand, then you can add 1 "Theorealize" Spell/Trap from your Deck to your hand
15. Yes
16. Selected Theorealize Liberation (Deck)
17. Activate Medius the Pure (GY): Shuffle 1 monster from your hand or face-up field into the Deck, and if you do, Special Summon this card
18. Selected Ash Blossom & Joyous Spring (hand)
19. Activate Theorealize Liberation (hand): Add to your hand, or Special Summon, 1 monster from your Deck with 300 ATK/200 DEF
20. Activate Purification Power Patron (EMZ-L): Link Summon including this card as material
21. Selected Medicurius the Power Patron of Illusions (Extra Deck)
22. select Medius the Pure (M1)
23. Finish selection
24. Selected Griffoh (Deck)
25. Add the card(s) to your hand
26. Yes
27. Special Summon 1 "Diactorus" monster
28. Selected Artmage Diactorus (Extra Deck)
29. Activate Griffoh (hand): Activate 1 of these effects
30. Set 1 card that mentions "Light and Darkness Ritual"
31. Selected Mind Shuffle (Deck)
32. Activate Mind Shuffle (S1): activate this card
33. Yes
34. Selected Skull Archfiend of Chaos (Deck)
35. Selected Skull Archfiend of Chaos (hand)
36. Yes
37. Selected Light and Darkness Ritual (Deck)
38. Selected Magician of Dark Chaos - Black Chaos (Deck)
39. Activate Light and Darkness Ritual (GY): Add both this card and 1 card that mentions "Light and Darkness Ritual" from your GY to your hand
40. Selected Skull Archfiend of Chaos (GY)
41. Activate Light and Darkness Ritual (hand): Ritual Summon 1 "Magician of Dark Chaos - Black Chaos" or "Black Luster Soldier - Soldier of Light and Darkness" from your hand
42. Selected Magician of Dark Chaos - Black Chaos (hand)
43. Selected Griffoh (GY) value 8 or 1
44. Yes
45. Selected Light and Darkness Ritual (GY)
46. Activate Artmage Diactorus (M1): Change the battle position of 1 monster on the field
47. Selected Artmage Diactorus (M1)
48. Special Summon (procedure) Artmage Non-Finito (Extra Deck)
49. Selected Light and Darkness Ritual (hand)
50. Selected Artmage Diactorus (M1)
51. Yes
52. Selected Artmage Impasto -Recapture- (Deck)

End board:  LP 8000 | Hand 4 | Deck 32 | Extra 11 | GY 5 | Banished 6   Monsters: M1: Artmage Non-Finito Lv7 2400/1500 ATK || M2: Magician of Dark Chaos - Black Chaos Lv8 2800/2600 ATK || M3: Artmage Graflare Lv5 2100/1500 ATK || EMZ-L: Medicurius the Power Patron of Illusions L3↙↓↘ 3000    Spell/Trap: S1: Mind Shuffle || S2: Artmage Impasto -Recapture- (Set)   GY: Nerva the Power Patron of Creation, Purification Power Patron, Theorealize Liberation, Light and Darkness Ritual, Artmage Diactorus   Banished: Medius the Pure (face-down), Ars Magna - "Citrinitas" (face-down), Ars Magna of Infinity and Finity (face-down), Medius the Pure, Theorealize Medius, Griffoh   Hand: Infinite Impermanence, Droll & Lo

## Order 2: best 12.6 [margin 4.85: ss_panama 4.15, elfnote -0.14, despia 2.95, angelechy 9.6] (, worst 12.6) — from m1b (seed followed 33/33 steps)
Others: m1b → new ending 12.5 · v52-medius 12.2 · v52-medius 12.2 · opening lanes 11.8 · bx1 11.75 · m1b → new ending 11.75 · m1b → new early order 11.75 · tries Activate Ars Magna of Infinity and Finity 11.7 · m1b → new early order 11.15 · tries Activate Artmage Vandalism -Assault- 11 · m1a 9.8 · m1a 9.25 · br1 8.33 · m1b 8.25

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
44. Selected Medius the Pure (Deck)
45. Link Summon S:P Little Knight (Extra Deck)
46. select Theorealize Medius (M3)
47. select Junora the Power Patron of Tuning (M2)
48. Activate Ars Magna of Purification and Corruption (banishment): Special Summon this card
49. Activate Ars Magna of Infinity and Finity (banishment): Special Summon this card
50. Activate S:P Little Knight (M3): Banish 1 card on the field or GY
51. Selected Junora the Power Patron of Tuning (GY)

End board:  LP 8000 | Hand 3 | Deck 30 | Extra 10 | GY 3 | Banished 9   Monsters: M1: Ars Magna of Infinity and Finity Lv8 1000/2400 ATK || M2: Ars Magna of Purification and Corruption Lv8 1000/2100 ATK || M3: S:P Little Knight L2←→ 1600  || M4: Artmage Non-Finito Lv7 2400/1500 ATK || M5: Nerva the Power Patron of Creation Lv10 3300/3300 ATK || EMZ-R: Medicurius the Power Patron of Illusions L3↙↓↘ 9000    Spell/Trap: S1: Artmage Impasto -Recapture- (Set) || S2: Infinite Impermanence (Set) || S3: Ars Magna - "Citrinitas"   GY: Nervedo the Shadebeast Power Patron, Purification Power Patron, Theorealize Medius   Banished: Medius the Pure (face-down), Griffoh (face-down), Nervedo the Shadebeast Power Patro

## Order 3: best 12.6 [margin 3.79: ss_panama 3.17, elfnote 0.52, despia 5.11, angelechy 5.05] (, worst 12.6) — from m1b (seed followed 33/33 steps)
Others: opening lanes 12.35 · m1b → new ending 12.35 · m1b → new early order 12.35 · v52-medius 12.2 · v52-medius 12.2 · tries Activate Artmage Vandalism -Assault- 11.8 · m1b → new early order 11.55 · bx1 10.9 · tries Activate Theorealize Liberation 10.9 · m1a 9.8 · m1a 9.25 · m1b → new ending 9 · br1 8.33 · m1b 8.25

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
44. Selected Medius the Pure (Deck)
45. Link Summon S:P Little Knight (Extra Deck)
46. select Theorealize Medius (M3)
47. select Junora the Power Patron of Tuning (M2)
48. Activate Ars Magna of Infinity and Finity (banishment): Special Summon this card
49. Activate Ars Magna of Purification and Corruption (banishment): Special Summon this card

End board:  LP 8000 | Hand 3 | Deck 30 | Extra 10 | GY 4 | Banished 8   Monsters: M1: Ars Magna of Purification and Corruption Lv8 1000/2100 ATK || M2: Ars Magna of Infinity and Finity Lv8 1000/2400 ATK || M3: S:P Little Knight L2←→ 1600  || M4: Artmage Non-Finito Lv7 2400/1500 ATK || M5: Nerva the Power Patron of Creation Lv10 3300/3300 ATK || EMZ-R: Medicurius the Power Patron of Illusions L3↙↓↘ 9000    Spell/Trap: S1: Artmage Impasto -Recapture- (Set) || S2: Infinite Impermanence (Set) || S3: Ars Magna - "Citrinitas"   GY: Nervedo the Shadebeast Power Patron, Purification Power Patron, Junora the Power Patron of Tuning, Theorealize Medius   Banished: Artmage Vandalism -Assault- (face-down), Mind Shu

## Order 4: best 12.75 [margin 4.56: ss_panama 6.46, elfnote 2.58, despia 3.87, angelechy 8.75] (, worst 12.75) — from tries Activate Ars Magna of Purification and Corruption
Others: tries Activate Ars Magna of Purification and Corruption → new ending 12.75 · m1b 12.6 · tries Activate Artmage Diactorus 12.45 · opening lanes 12.3 · tries Activate Ars Magna of Purification and Corruption → new early order 12.3 · v52-medius 12.2 · v52-medius 12.2 · bx1 11.8 · tries Activate Ars Magna of Purification and Corruption → new ending 11.8 · m1a 9.8 · tries Activate Ars Magna of Purification and Corruption → new early order 9.7 · m1a 9.25 · m1b 8.25 · br1 7.49

1. Set Spell/Trap Infinite Impermanence
2. Normal Summon Medius the Pure (hand)
3. Yes
4. Selected Nervedo the Shadebeast Power Patron (Deck)
5. Special Summon it
6. Activate Nervedo the Shadebeast Power Patron (M5): Special Summon 1 "Nerva the Power Patron of Creation" from your Extra Deck
7. Selected Nerva the Power Patron of Creation (Extra Deck)
8. Yes
9. Selected Junoldo the Shadespirit Power Patron (Deck)
10. Activate Junoldo the Shadespirit Power Patron (M3): Special Summon 1 "Junora the Power Patron of Tuning" from your Extra Deck
11. Selected Junora the Power Patron of Tuning (Extra Deck)
12. Yes
13. Selected Nervedo the Shadebeast Power Patron (Extra Deck)
14. Link Summon Purification Power Patron (Extra Deck)
15. select Medius the Pure (M4)
16. select Junora the Power Patron of Tuning (M3)
17. Yes
18. Selected Theorealize Medius (Deck)
19. Activate Theorealize Medius (hand): If a "Power Patron" card is on the field: You can Special Summon this card from your hand, then you can add 1 "Theorealize" Spell/Trap from your Deck to your hand
20. Yes
21. Selected Theorealize Past Lull (Deck)
22. Special Summon (procedure) Artmage Non-Finito (Extra Deck)
23. Selected Theorealize Past Lull (hand)
24. Selected Nervedo the Shadebeast Power Patron (hand)
25. Yes
26. Selected Artmage Impasto -Recapture- (Deck)
27. Activate Theorealize Past Lull (GY): Special Summon 1 Fusion, Synchro, or Xyz Monster from your GY
28. Selected Junora the Power Patron of Tuning (GY)
29. Activate Medius the Pure (GY): Shuffle 1 monster from your hand or face-up field into the Deck, and if you do, Special Summon this card
30. Selected Purification Power Patron (EMZ-L)
31. Link Summon Purification Power Patron (Extra Deck)
32. select Junora the Power Patron of Tuning (M2)
33. select Medius the Pure (M5)
34. Yes
35. Add 1 "Ars Magna" card from your Deck to your hand
36. Selected Ars Magna of Infinity and Finity (Deck)
37. Activate Ars Magna of Infinity and Finity (hand): You can banish this card from your hand; add 1 non-Warrior "Ars Magna" monster from your Deck to your hand
38. Selected Ars Magna of Purification and Corruption (Deck)
39. Activate Ars Magna of Purification and Corruption (hand): You can banish this card from your hand; add 1 "Ars Magna" Spell/Trap from your Deck to your hand
40. Activate Purification Power Patron (EMZ-L): Link Summon including this card as material
41. Selected Medicurius the Power Patron of Illusions (Extra Deck)
42. select Theorealize Medius (M3)
43. Finish selection
44. Selected Ars Magna - "Citrinitas" (Deck)
45. Activate Ars Magna of Purification and Corruption (banishment): Special Summon this card
46. Activate Ars Magna of Infinity and Finity (banishment): Special Summon this card
47. Activate Ars Magna - "Citrinitas" (hand): activate this card
48. Activate Ars Magna - "Citrinitas" (S3): Add 1 "Medius" or "Ars Magna" monster from your Deck to your hand
49. Selected Theorealize Medius (Deck)

End board:  LP 8000 | Hand 4 | Deck 29 | Extra 11 | GY 4 | Banished 8   Monsters: M1: Nerva the Power Patron of Creation Lv10 3300/3300 ATK || M2: Ars Magna of Purification and Corruption Lv8 1000/2100 ATK || M3: Ars Magna of Infinity and Finity Lv8 1000/2400 ATK || M4: Artmage Non-Finito Lv7 2400/1500 ATK || EMZ-L: Medicurius the Power Patron of Illusions L3↙↓↘ 9000    Spell/Trap: S1: Infinite Impermanence (Set) || S2: Artmage Impasto -Recapture- (Set) || S3: Ars Magna - "Citrinitas"   GY: Nervedo the Shadebeast Power Patron, Junora the Power Patron of Tuning, Theorealize Medius, Purification Power Patron   Banished: Black Luster Soldier - Soldier of Light and Darkness (face-down), Nervedo the Shadebe

