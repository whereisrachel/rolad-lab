# Evolved lines — Mind Shuffle, Medius the Pure, Ash Blossom & Joyous Spring, Prohibited Power Patron Portal - Terminus, Ars Magna of Purification and Corruption (findlist-1100)
2026-11-26T18:48:38.510Z

8 deck orders (different face-down banishes / draws), 3 opponent hands x o_ss_panama + o_elfnote + o_despia + o_angelechy per line, 15 min searches, 4 mutation rounds.
Fitness = end-board interruptions (the lab scorer, src/disrupt.mjs: wipe 2, negate 1-1.5, banish/protection less; hand traps kept count 1 each). The winner of each order is also played into the opponent decks: margin after their turn shown beside it.

**Margin after their turn (winners): average null** (worst 99)

**Best line per deck order: average 13.93** (worst order 13.5). Winner came from: tries Normal Summon Ars Magna of Infinity and Finity → new early order 1, opening lanes 1, search 2

## Weak points found automatically
Cards whose face-down banish (by your own costs) hurt the best line most (average best line without vs with that card banished):

| card | orders where it was banished | drop |
|---|---|---|
| Ars Magna of Infinity and Finity | 2/8 | 0.75 |
| Ash Blossom & Joyous Spring | 3/8 | 0.5 |
| Theorealize Past Lull | 3/8 | 0.5 |
| Light and Darkness Ritual | 3/8 | 0.5 |
| Apprentice Illusion Magician | 2/8 | 0.05 |
| Magician of Dark Chaos - Black Chaos | 2/8 | 0.05 |
| Small World | 2/8 | 0.05 |
| Black Chaos | 2/8 | 0.05 |
| Fiendsmith Engraver | 2/8 | -0.05 |
| Theorealize Medius | 2/8 | -0.05 |

List changes proposed for the list test (data/proposals-findlist-1100.json):
- +1 Ars Magna of Infinity and Finity, −1 Plundered Power Patron Plane - Vidolia — Ars Magna of Infinity and Finity: best line 0.75 worse when a cost banished it (2 of 8 orders) — Mind Shuffle
- +1 Theorealize Past Lull, −1 Artmage Vandalism -Assault- — Theorealize Past Lull: best line 0.5 worse when a cost banished it (3 of 8 orders) — Mind Shuffle
- +1 Light and Darkness Ritual, −1 Small World — Light and Darkness Ritual: best line 0.5 worse when a cost banished it (3 of 8 orders) — Mind Shuffle
- +1 Ars Magna of Infinity and Finity — Ars Magna of Infinity and Finity: best line 0.75 worse when a cost banished it (2 of 8 orders) — Mind Shuffle (add only: deck grows, up to 60)
- +1 Theorealize Past Lull — Theorealize Past Lull: best line 0.5 worse when a cost banished it (3 of 8 orders) — Mind Shuffle (add only: deck grows, up to 60)
- +1 Light and Darkness Ritual — Light and Darkness Ritual: best line 0.5 worse when a cost banished it (3 of 8 orders) — Mind Shuffle (add only: deck grows, up to 60)

Effects the search had not used, tried on purpose (best result so far):
- Normal Summon Ars Magna of Infinity and Finity: 13.65
- Special Summon (procedure) Vidolium the Unstable Power Patron of Unity: 13.4
- Normal Summon Theorealize Medius: 13.3
- Activate Fiendsmith's Sequence: 13.2
- Normal Summon Ars Magna of Purification and Corruption: 13.2
- Activate Light and Darkness Ritual: 13.1
- Activate Mind Shuffle: 13.05
- Normal Summon Lacrima the Crimson Tears: 13

## Order 1: best 14.3 (, worst 14.3) — from tries Normal Summon Ars Magna of Infinity and Finity → new early order
Others: tries Normal Summon Ars Magna of Infinity and Finity → new early order → new ending 14.3 · tries Normal Summon Ars Magna of Infinity and Finity 13.65 · tries Normal Summon Ars Magna of Infinity and Finity → new ending 13.65 · search 13.3 · tries Activate Light and Darkness Ritual 13.1 · tries Activate Artmage Graflare 12.75 · tries Activate Small World 12.65 · tries Normal Summon Fiendsmith Engraver 12.2 · opening lanes 12.2 · tries Special Summon (procedure) Junoldo the Shadespirit Power Patron 12.2

1. Normal Summon Medius the Pure (hand)
2. Yes
3. Selected Vidolium the Unstable Power Patron of Unity (Deck)
4. Add the card(s) to your hand
5. Activate Ars Magna of Purification and Corruption (hand): You can banish this card from your hand; add 1 "Ars Magna" Spell/Trap from your Deck to your hand
6. Selected Ars Magna - "Citrinitas" (Deck)
7. Activate Ars Magna - "Citrinitas" (hand): activate this card
8. Activate Ars Magna - "Citrinitas" (S1): Add 1 "Medius" or "Ars Magna" monster from your Deck to your hand
9. Selected Theorealize Medius (Deck)
10. Activate Prohibited Power Patron Portal - Terminus (hand): Send 1 "Power Patron" monster from your Deck or Extra Deck to the GY, then you can add 1 DARK Fairy monster from your Deck to your hand
11. Selected Theorealize Medius (Deck)
12. Yes
13. Selected Medius the Pure (Deck)
14. Activate Vidolium the Unstable Power Patron of Unity (hand): Activate it as a Pendulum Spell
15. Activate Vidolium the Unstable Power Patron of Unity (S5): Activate 1 of these effects
16. Special Summon 1 "Power Patron" monster
17. Selected Theorealize Medius (GY)
18. Yes
19. Selected Junoldo the Shadespirit Power Patron (Deck)
20. Activate Theorealize Medius (hand): If a "Power Patron" card is on the field: You can Special Summon this card from your hand, then you can add 1 "Theorealize" Spell/Trap from your Deck to your hand
21. Yes
22. Selected Theorealize Liberation (Deck)
23. Activate Theorealize Liberation (hand): Add to your hand, or Special Summon, 1 monster from your Deck with 300 ATK/200 DEF
24. Selected Nervedo the Shadebeast Power Patron (Deck)
25. Special Summon it
26. Set Spell/Trap Mind Shuffle
27. Activate Nervedo the Shadebeast Power Patron (M3): Special Summon 1 "Nerva the Power Patron of Creation" from your Extra Deck
28. Selected Nerva the Power Patron of Creation (Extra Deck)
29. Yes
30. Selected Artmage Graflare (Deck)
31. Activate Junoldo the Shadespirit Power Patron (hand): Activate it as a Pendulum Spell
32. Activate Theorealize Liberation (GY): Treat 1 monster you control as a Tuner this turn
33. Selected Theorealize Medius (M1)
34. Link Summon S:P Little Knight (Extra Deck)
35. select Medius the Pure (M4)
36. select Theorealize Medius (M1)
37. Yes
38. Activate Medius the Pure (GY): Shuffle 1 monster from your hand or face-up field into the Deck, and if you do, Special Summon this card
39. Selected Ars Magna of Purification and Corruption (M1)
40. Link Summon Medicurius the Power Patron of Illusions (Extra Deck)
41. select Medius the Pure (M4)
42. select S:P Little Knight (EMZ-L)
43. Finish selection
44. Yes
45. Special Summon 1 "Diactorus" monster
46. Activate Junoldo the Shadespirit Power Patron (S5): Destroy this card, draw 2 cards, then discard 1 card
47. Selected Medius the Pure (hand)
48. Selected Artmage Diactorus (Extra Deck)
49. Yes
50. Selected Nervedo the Shadebeast Power Patron (Extra Deck)
51. Special Summon (procedure) Artmage Non-Finito (Extra Deck)
52. Selected Dark Magical Circle (hand)
53. Selected Nervedo the Shadebeast Power Patron (hand)
54. Yes
55. Selected Artmage Impasto -Recapture- (Deck)
56. Activate Artmage Finmel (hand): Special Summon this card from your hand
57. Yes

End board:  LP 8000 | Hand 2 | Deck 27 | Extra 12 | GY 6 | Banished 6   Monsters: M1: Artmage Non-Finito Lv7 2400/1500 ATK || M2: Nerva the Power Patron of Creation Lv10 3300/3300 ATK || M3: Artmage Graflare Lv5 2100/1500 ATK || M4: Artmage Diactorus Lv8 2800/2500 ATK || M5: Artmage Finmel Lv7 2400/1500 ATK || EMZ-R: Medicurius the Power Patron of Illusions L3↙↓↘ 3000    Spell/Trap: S1: Ars Magna - "Citrinitas" || S2: Mind Shuffle (Set) || S3: Artmage Impasto -Recapture- (Set)   GY: Prohibited Power Patron Portal - Terminus, Theorealize Medius, S:P Little Knight, Medius the Pure, Dark Magical Circle, Nervedo the Shadebeast Power Patron   Banished: Apprentice Illusion Magician (face-down), Pendulum Trea

## Order 2: best 13.6 (, worst 13.6) — from opening lanes
Others: tries Normal Summon Theorealize Medius 13.3 · tries Activate Fiendsmith's Sequence 13.2 · tries Normal Summon Lacrima the Crimson Tears 13 · search 12.8 · tries Special Summon (procedure) Nervedo the Shadebeast Power Patron 12.5 · tries Activate Fiendsmith's Requiem 11.35 · tries Activate Fiendsmith's Sequence 9.95

1. Activate Prohibited Power Patron Portal - Terminus (hand): Send 1 "Power Patron" monster from your Deck or Extra Deck to the GY, then you can add 1 DARK Fairy monster from your Deck to your hand
2. Selected Nervedo the Shadebeast Power Patron (Deck)
3. Yes
4. Selected Vidolium the Unstable Power Patron of Unity (Deck)
5. Normal Summon Medius the Pure (hand)
6. Yes
7. Selected Nervedo the Shadebeast Power Patron (Deck)
8. Special Summon it
9. Activate Nervedo the Shadebeast Power Patron (M3): Special Summon 1 "Nerva the Power Patron of Creation" from your Extra Deck
10. Selected Nerva the Power Patron of Creation (Extra Deck)
11. Yes
12. Selected Artmage Graflare (Deck)
13. Activate Vidolium the Unstable Power Patron of Unity (hand): Activate it as a Pendulum Spell
14. Set Spell/Trap Mind Shuffle
15. Activate Vidolium the Unstable Power Patron of Unity (S1): Activate 1 of these effects
16. Special Summon 1 "Power Patron" monster
17. Selected Nervedo the Shadebeast Power Patron (GY)
18. Yes
19. Selected Vidolium the Unstable Power Patron of Unity (Deck)
20. Activate Vidolium the Unstable Power Patron of Unity (hand): Activate it as a Pendulum Spell
21. Activate Ars Magna of Purification and Corruption (hand): You can banish this card from your hand; add 1 "Ars Magna" Spell/Trap from your Deck to your hand
22. Selected Ars Magna - "Citrinitas" (Deck)
23. Activate Ars Magna - "Citrinitas" (hand): activate this card
24. Activate Ars Magna - "Citrinitas" (S3): Add 1 "Medius" or "Ars Magna" monster from your Deck to your hand
25. Selected Theorealize Medius (Deck)
26. Activate Theorealize Medius (hand): If a "Power Patron" card is on the field: You can Special Summon this card from your hand, then you can add 1 "Theorealize" Spell/Trap from your Deck to your hand
27. Yes
28. Selected Theorealize Liberation (Deck)
29. Activate Theorealize Liberation (hand): Add to your hand, or Special Summon, 1 monster from your Deck with 300 ATK/200 DEF
30. Selected Junoldo the Shadespirit Power Patron (Deck)
31. Add the card(s) to your hand
32. Activate Junoldo the Shadespirit Power Patron (hand): Activate it as a Pendulum Spell
33. Special Summon (procedure) Vidolium the Unstable Power Patron of Unity (S1)
34. select Nervedo the Shadebeast Power Patron (Extra Deck)
35. Yes
36. Selected Nervedo the Shadebeast Power Patron (hand)
37. Yes
38. Selected Prohibited Power Patron Portal - Terminus (GY)
39. Special Summon (procedure) Artmage Non-Finito (Extra Deck)
40. Selected Prohibited Power Patron Portal - Terminus (hand)
41. select Nervedo the Shadebeast Power Patron (M3)
42. Yes
43. Selected Artmage Impasto -Recapture- (Deck)
44. Link Summon Purification Power Patron (Extra Deck)
45. select Nerva the Power Patron of Creation (M2)
46. select Nervedo the Shadebeast Power Patron (EMZ-R)
47. Activate Ars Magna of Purification and Corruption (banishment): Special Summon this card
48. Activate Purification Power Patron (EMZ-R): Add 1 "Theorealize" card from your Deck to your hand
49. Activate Purification Power Patron (EMZ-R): Link Summon including this card as material
50. Selected Medicurius the Power Patron of Illusions (Extra Deck)
51. select Medius the Pure (M1)
52. Finish selection
53. Selected Theorealize Past Lull (Deck)
54. Activate Ars Magna of Purification and Corruption (M1): Banish Spells/Traps on the field
55. Selected Vidolium the Unstable Power Patron of Unity (S1)
56. Yes
57. Special Summon 1 "Diactorus" monster
58. Selected Artmage Diactorus (Extra Deck)
59. Activate Theorealize Past Lull (hand): Special Summon 1 "Medius the Pure" from your hand or Deck
60. Selected Medius the Pure (Deck)
61. Activate Medius the Pure (GY): Shuffle 1 monster from your hand or face-up field into the Deck, and if you do, Special Summon this card
62. Selected Artmage Non-Finito (M3)
63. Link Summon S:P Little Knight (Extra Deck)
64. select Medius the Pure (M3)
65. select Medius the Pure (M5)
66. Activate Artmage Finmel (hand): Special Summon this card from your hand
67. Yes

End board:  LP 8000 | Hand 2 | Deck 24 | Extra 14 | GY 6 | Banished 7   Monsters: M1: Ars Magna of Purification and Corruption Lv8 1000/2100 ATK || M2: Artmage Diactorus Lv8 2800/2500 ATK || M3: S:P Little Knight L2←→ 1600  || M4: Artmage Graflare Lv5 2100/1500 ATK || M5: Artmage Finmel Lv7 2400/1500 ATK || EMZ-L: Medicurius the Power Patron of Illusions L3↙↓↘ 3000    Spell/Trap: S2: Mind Shuffle (Set) || S3: Ars Magna - "Citrinitas" || S4: Artmage Impasto -Recapture- (Set)   GY: Nervedo the Shadebeast Power Patron, Prohibited Power Patron Portal - Terminus, Nerva the Power Patron of Creation, Purification Power Patron, Theorealize Past Lull, Medius the Pure   Banished: Theorealize Medius (face-down), 

## Order 3: best 13.5 (, worst 13.5) — from search
Others: tries Activate Mind Shuffle 13.05 · tries Activate Fiendsmith's Tract 12.8 · opening lanes 12.65 · tries Activate Black Chaos 12.6 · tries Activate Fiendsmith Engraver 12 · tries Activate Fiendsmith Engraver 11.75 · tries Link Summon Fiendsmith's Requiem 10.45

1. Activate Prohibited Power Patron Portal - Terminus (hand): Send 1 "Power Patron" monster from your Deck or Extra Deck to the GY, then you can add 1 DARK Fairy monster from your Deck to your hand
2. Selected Nervedo the Shadebeast Power Patron (Deck)
3. Yes
4. Selected Theorealize Medius (Deck)
5. Set Spell/Trap Mind Shuffle
6. Activate Ars Magna of Purification and Corruption (hand): You can banish this card from your hand; add 1 "Ars Magna" Spell/Trap from your Deck to your hand
7. Selected Ars Magna - "Citrinitas" (Deck)
8. Activate Ars Magna - "Citrinitas" (hand): activate this card
9. Activate Ars Magna - "Citrinitas" (S2): Add 1 "Medius" or "Ars Magna" monster from your Deck to your hand
10. Selected Theorealize Medius (Deck)
11. Normal Summon Medius the Pure (hand)
12. Yes
13. Selected Vidolium the Unstable Power Patron of Unity (Deck)
14. Add the card(s) to your hand
15. Activate Vidolium the Unstable Power Patron of Unity (hand): Activate it as a Pendulum Spell
16. Activate Theorealize Medius (hand): If a "Power Patron" card is on the field: You can Special Summon this card from your hand, then you can add 1 "Theorealize" Spell/Trap from your Deck to your hand
17. Yes
18. Selected Theorealize Liberation (Deck)
19. Activate Theorealize Liberation (hand): Add to your hand, or Special Summon, 1 monster from your Deck with 300 ATK/200 DEF
20. Selected Griffoh (Deck)
21. Special Summon it
22. Link Summon S:P Little Knight (Extra Deck)
23. select Griffoh (M1)
24. select Medius the Pure (M4)
25. Yes
26. Activate Medius the Pure (GY): Shuffle 1 monster from your hand or face-up field into the Deck, and if you do, Special Summon this card
27. Selected Ars Magna of Purification and Corruption (M4)
28. Activate Vidolium the Unstable Power Patron of Unity (S5): Activate 1 of these effects
29. Special Summon 1 "Power Patron" monster
30. Selected Nervedo the Shadebeast Power Patron (GY)
31. Yes
32. Selected Junoldo the Shadespirit Power Patron (Deck)
33. Activate Nervedo the Shadebeast Power Patron (M2): Special Summon 1 "Nerva the Power Patron of Creation" from your Extra Deck
34. Selected Nerva the Power Patron of Creation (Extra Deck)
35. Yes
36. Selected Artmage Graflare (Deck)
37. Activate Junoldo the Shadespirit Power Patron (hand): Activate it as a Pendulum Spell
38. Link Summon Medicurius the Power Patron of Illusions (Extra Deck)
39. select Medius the Pure (M1)
40. select S:P Little Knight (EMZ-L)
41. Finish selection
42. Yes
43. Special Summon 1 "Diactorus" monster
44. Activate Junoldo the Shadespirit Power Patron (S5): Destroy this card, draw 2 cards, then discard 1 card
45. Selected Light and Darkness Ritual (hand)
46. Selected Artmage Diactorus (Extra Deck)
47. Yes
48. Selected Nervedo the Shadebeast Power Patron (Extra Deck)
49. Activate Artmage Finmel (hand): Special Summon this card from your hand
50. Yes
51. Activate Light and Darkness Ritual (GY): Add both this card and 1 card that mentions "Light and Darkness Ritual" from your GY to your hand
52. Selected Griffoh (GY)
53. Special Summon (procedure) Artmage Non-Finito (Extra Deck)
54. Selected Light and Darkness Ritual (hand)
55. Selected Nervedo the Shadebeast Power Patron (hand)
56. Yes
57. Selected Artmage Impasto -Recapture- (Deck)

End board:  LP 8000 | Hand 4 | Deck 27 | Extra 12 | GY 4 | Banished 6   Monsters: M1: Artmage Finmel Lv7 2400/1500 ATK || M2: Artmage Non-Finito Lv7 2400/1500 ATK || M3: Artmage Diactorus Lv8 2800/2500 ATK || M4: Nerva the Power Patron of Creation Lv10 3300/3300 ATK || M5: Artmage Graflare Lv5 2100/1500 ATK || EMZ-L: Medicurius the Power Patron of Illusions L3↙↓↘ 3000    Spell/Trap: S1: Mind Shuffle (Set) || S2: Ars Magna - "Citrinitas" || S3: Artmage Impasto -Recapture- (Set)   GY: Prohibited Power Patron Portal - Terminus, S:P Little Knight, Light and Darkness Ritual, Nervedo the Shadebeast Power Patron   Banished: Theorealize Liberation, Skull Archfiend of Chaos (face-down), Small World (face-down),

## Order 4: best 14.3 (, worst 14.3) — from search
Others: tries Special Summon (procedure) Vidolium the Unstable Power Patron of Unity 13.4 · tries Normal Summon Ars Magna of Purification and Corruption 13.2 · tries Normal Summon Junoldo the Shadespirit Power Patron 12.7 · opening lanes 12.5 · tries Activate Pendulum Treasure 12.45 · tries Activate Fiendsmith's Desirae 11.75 · tries Normal Summon Nervedo the Shadebeast Power Patron 11.25

1. Activate Ars Magna of Purification and Corruption (hand): You can banish this card from your hand; add 1 "Ars Magna" Spell/Trap from your Deck to your hand
2. Selected Ars Magna - "Citrinitas" (Deck)
3. Activate Ars Magna - "Citrinitas" (hand): activate this card
4. Normal Summon Medius the Pure (hand)
5. Yes
6. Selected Vidolium the Unstable Power Patron of Unity (Deck)
7. Add the card(s) to your hand
8. Activate Ars Magna - "Citrinitas" (S1): Add 1 "Medius" or "Ars Magna" monster from your Deck to your hand
9. Selected Ars Magna of Infinity and Finity (Deck)
10. Set Spell/Trap Prohibited Power Patron Portal - Terminus
11. Activate Prohibited Power Patron Portal - Terminus (S2): Send 1 "Power Patron" monster from your Deck or Extra Deck to the GY, then you can add 1 DARK Fairy monster from your Deck to your hand
12. Selected Nervedo the Shadebeast Power Patron (Deck)
13. Yes
14. Selected Theorealize Medius (Deck)
15. Set Spell/Trap Mind Shuffle
16. Activate Vidolium the Unstable Power Patron of Unity (hand): Activate it as a Pendulum Spell
17. Activate Theorealize Medius (hand): If a "Power Patron" card is on the field: You can Special Summon this card from your hand, then you can add 1 "Theorealize" Spell/Trap from your Deck to your hand
18. Yes
19. Selected Theorealize Past Lull (Deck)
20. Activate Theorealize Past Lull (hand): Special Summon 1 "Medius the Pure" from your hand or Deck
21. Selected Medius the Pure (Deck)
22. Link Summon S:P Little Knight (Extra Deck)
23. select Medius the Pure (M4)
24. select Medius the Pure (M5)
25. Yes
26. Activate Medius the Pure (GY): Shuffle 1 monster from your hand or face-up field into the Deck, and if you do, Special Summon this card
27. Selected Ars Magna of Purification and Corruption (M4)
28. Activate Ars Magna of Infinity and Finity (hand): You can banish this card from your hand; add 1 non-Warrior "Ars Magna" monster from your Deck to your hand
29. Selected Ars Magna of Purification and Corruption (Deck)
30. Yes
31. Special Summon 1 "Diactorus" monster
32. Selected Artmage Diactorus (Extra Deck)
33. No
34. Activate Vidolium the Unstable Power Patron of Unity (S5): Activate 1 of these effects
35. Special Summon 1 "Power Patron" monster
36. Selected Nervedo the Shadebeast Power Patron (GY)
37. Yes
38. Selected Junoldo the Shadespirit Power Patron (Deck)
39. Activate Junoldo the Shadespirit Power Patron (hand): Activate it as a Pendulum Spell
40. Activate Nervedo the Shadebeast Power Patron (M1): Special Summon 1 "Nerva the Power Patron of Creation" from your Extra Deck
41. Selected Nerva the Power Patron of Creation (Extra Deck)
42. Yes
43. Activate Ars Magna of Infinity and Finity (banishment): Special Summon this card
44. Selected Artmage Graflare (Deck)
45. Link Summon Medicurius the Power Patron of Illusions (Extra Deck)
46. select S:P Little Knight (EMZ-R)
47. select Medius the Pure (M4)
48. Finish selection
49. Yes
50. Activate Ars Magna of Infinity and Finity (M1): Banish 1 monster on the field
51. Selected Ars Magna of Infinity and Finity (M1)
52. Selected Ars Magna of Purification and Corruption (hand)
53. Yes
54. Selected Nervedo the Shadebeast Power Patron (Extra Deck)
55. Special Summon (procedure) Artmage Non-Finito (Extra Deck)
56. Selected Pendulum Treasure (hand)
57. Selected Nervedo the Shadebeast Power Patron (hand)
58. Yes
59. Selected Artmage Impasto -Recapture- (Deck)
60. Activate Artmage Finmel (hand): Special Summon this card from your hand
61. Yes

End board:  LP 8000 | Hand 2 | Deck 26 | Extra 12 | GY 7 | Banished 6   Monsters: M1: Artmage Non-Finito Lv7 2400/1500 ATK || M2: Artmage Graflare Lv5 2100/1500 ATK || M3: Nerva the Power Patron of Creation Lv10 3300/3300 ATK || M4: Artmage Finmel Lv7 2400/1500 ATK || M5: Artmage Diactorus Lv8 2800/2500 ATK || EMZ-L: Medicurius the Power Patron of Illusions L3↙↓↘ 9000    Spell/Trap: S1: Ars Magna - "Citrinitas" || S2: Mind Shuffle (Set) || S3: Artmage Impasto -Recapture- (Set)   GY: Prohibited Power Patron Portal - Terminus, Theorealize Past Lull, Medius the Pure, S:P Little Knight, Ars Magna of Purification and Corruption, Pendulum Treasure, Nervedo the Shadebeast Power Patron   Banished: Theorealize 

