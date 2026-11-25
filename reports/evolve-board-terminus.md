# Evolved lines — Prohibited Power Patron Portal - Terminus, Ash Blossom & Joyous Spring, Ash Blossom & Joyous Spring, Droll & Lock Bird, Ghost Ogre & Snow Rabbit (findlist-1100)
2026-11-25T18:52:40.361Z

8 deck orders (different face-down banishes / draws), 3 opponent hands x o_ss_panama + o_elfnote + o_despia + o_angelechy per line, 5 min searches, 4 mutation rounds.
Fitness = end-board interruptions (the lab scorer, src/disrupt.mjs: wipe 2, negate 1-1.5, banish/protection less; hand traps kept count 1 each). The winner of each order is also played into the opponent decks: margin after their turn shown beside it.

**Margin after their turn (winners): average 3.71** (worst -3.75)

**Best line per deck order: average 12.96** (worst order 12.1). Winner came from: tries Activate Fiendsmith's Tract 1, opening lanes 3, tries Activate Theorealize Past Lull → new ending → new early order 1, tries Activate Vidolium the Unstable Power Patron of Unity → new early order 1, tries Activate Black Chaos → new early order 1, tries Activate Mind Shuffle 1

| seed line | works as written | its score when it works | seed start + search finish (all orders) |
|---|---|---|---|
| ter1 | 3/8 | 8.61 | 8.14 |
| v52-terminus | 7/8 | 11.15 | 11.05 |

## Weak points found automatically
Cards whose face-down banish (by your own costs) hurt the best line most (average best line without vs with that card banished):

| card | orders where it was banished | drop |
|---|---|---|
| Black Luster Soldier - Soldier of Light and Darkness | 5/8 | 1.03 |
| Fiendsmith Engraver | 7/8 | 0.79 |
| Ars Magna - "Citrinitas" | 3/8 | 0.52 |
| Fiendsmith's Tract | 4/8 | 0.47 |
| Theorealize Medius | 5/8 | 0.36 |
| Infinite Impermanence | 3/8 | 0.28 |
| Mind Shuffle | 3/8 | 0.12 |
| Artmage Vandalism -Assault- | 7/8 | 0.11 |
| Small World | 7/8 | 0.11 |
| Nervedo the Shadebeast Power Patron | 4/8 | 0.09 |

Where the hand-designed lines broke (next step that no longer worked):
- ter1: Set 1 card (2x)
- ter1: Impasto (1x)
- ter1: Liberation (1x)
- v52-terminus: Junoldo (1x)
- ter1: Junoldo (1x)

List changes proposed for the list test (data/proposals-findlist-1100.json):
- +1 Black Luster Soldier - Soldier of Light and Darkness, −1 Plundered Power Patron Plane - Vidolia — Black Luster Soldier - Soldier of Light and Darkness: best line 1.03 worse when a cost banished it (5 of 8 orders) — Prohibited Power Patron Portal - Terminus
- +1 Fiendsmith Engraver, −1 Artmage Vandalism -Assault- — Fiendsmith Engraver: best line 0.79 worse when a cost banished it (7 of 8 orders) — Prohibited Power Patron Portal - Terminus
- +1 Ars Magna - "Citrinitas", −1 Small World — Ars Magna - "Citrinitas": best line 0.52 worse when a cost banished it (3 of 8 orders) — Prohibited Power Patron Portal - Terminus
- +1 Black Luster Soldier - Soldier of Light and Darkness — Black Luster Soldier - Soldier of Light and Darkness: best line 1.03 worse when a cost banished it (5 of 8 orders) — Prohibited Power Patron Portal - Terminus (add only: deck grows, up to 60)
- +1 Fiendsmith Engraver — Fiendsmith Engraver: best line 0.79 worse when a cost banished it (7 of 8 orders) — Prohibited Power Patron Portal - Terminus (add only: deck grows, up to 60)
- +1 Ars Magna - "Citrinitas" — Ars Magna - "Citrinitas": best line 0.52 worse when a cost banished it (3 of 8 orders) — Prohibited Power Patron Portal - Terminus (add only: deck grows, up to 60)

Effects the search had not used, tried on purpose (best result so far):
- Activate Vidolium the Unstable Power Patron of Unity: 14.05
- Activate Theorealize Past Lull: 12.6
- Activate Mind Shuffle: 12.4
- Activate Mind Shuffle: 12.4
- Activate Pendulum Treasure: 12.25
- Activate Vidolium the Unstable Power Patron of Unity: 12.1
- Activate Junoldo the Shadespirit Power Patron: 12.1
- Normal Summon Theorealize Medius: 12.1

## Order 1: best 12.1 [margin 4.95: ss_panama 2.43, elfnote 4.43, despia 1.74, angelechy 8.1] (, worst 12.1) — from tries Activate Fiendsmith's Tract
Others: tries Special Summon (procedure) Vidolium the Unstable Power Patron of Unity 12.1 · opening lanes 12.1 · search 12 · v52-terminus 11.15 · v52-terminus 11.15 · ter1 8.64 · ter1 8.15

1. Activate Prohibited Power Patron Portal - Terminus (hand): Send 1 "Power Patron" monster from your Deck or Extra Deck to the GY, then you can add 1 DARK Fairy monster from your Deck to your hand
2. Selected Purification Power Patron (Extra Deck)
3. Yes
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
19. select Junora the Power Patron of Tuning (EMZ-L)
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
31. Activate Purification Power Patron (EMZ-R): Link Summon including this card as material
32. Selected Medicurius the Power Patron of Illusions (Extra Deck)
33. select Medius the Pure (M3)
34. Finish selection
35. Selected Artmage Impasto -Recapture- (Deck)
36. Yes
37. Special Summon 1 "Diactorus" monster
38. Selected Artmage Diactorus (Extra Deck)
39. Activate Theorealize Past Lull (GY): Special Summon 1 Fusion, Synchro, or Xyz Monster from your GY
40. Selected Junora the Power Patron of Tuning (GY)
41. Link Summon S:P Little Knight (Extra Deck)
42. select Junora the Power Patron of Tuning (M3)
43. select Artmage Non-Finito (M2)
44. Yes
45. Selected Prohibited Power Patron Portal - Terminus (GY)

End board:  LP 8000 | Hand 3 | Deck 33 | Extra 8 | GY 5 | Banished 10   Monsters: M3: S:P Little Knight L2←→ 1600  || M4: Nerva the Power Patron of Creation Lv10 3300/3300 DEF || M5: Artmage Diactorus Lv8 2800/2500 ATK || EMZ-R: Medicurius the Power Patron of Illusions L3↙↓↘ 3000    Spell/Trap: S1: Artmage Impasto -Recapture- (Set)   GY: Purification Power Patron, Nervedo the Shadebeast Power Patron, Purification Power Patron, Artmage Non-Finito, Junora the Power Patron of Tuning   Banished: Artmage Vandalism -Assault- (face-down), Fiendsmith's Tract (face-down), Magician of Dark Chaos - Black Chaos (face-down), Ars Magna - "Citrinitas" (face-down), Griffoh (face-down), Nervedo the Shadebeast Power Pat

## Order 2: best 12.15 [margin 5.88: ss_panama 1.14, elfnote 6.9, despia 4.42, angelechy 8.1] (, worst 12.15) — from opening lanes
Others: tries Normal Summon Nervedo the Shadebeast Power Patron 12.1 · tries Special Summon (procedure) Nervedo the Shadebeast Power Patron 12.1 · search 11.5 · v52-terminus 11.15 · v52-terminus 11.15 · ter1 4.1

1. Set Spell/Trap Prohibited Power Patron Portal - Terminus
2. Activate Prohibited Power Patron Portal - Terminus (S1): Send 1 "Power Patron" monster from your Deck or Extra Deck to the GY, then you can add 1 DARK Fairy monster from your Deck to your hand
3. Selected Theorealize Medius (Deck)
4. Yes
5. Selected Medius the Pure (Deck)
6. Normal Summon Medius the Pure (hand)
7. Yes
8. Selected Junoldo the Shadespirit Power Patron (Deck)
9. Special Summon it
10. Activate Junoldo the Shadespirit Power Patron (M3): Special Summon 1 "Junora the Power Patron of Tuning" from your Extra Deck
11. Selected Junora the Power Patron of Tuning (Extra Deck)
12. Yes
13. Selected Theorealize Medius (GY)
14. Activate Theorealize Medius (hand): If a "Power Patron" card is on the field: You can Special Summon this card from your hand, then you can add 1 "Theorealize" Spell/Trap from your Deck to your hand
15. Yes
16. Selected Theorealize Past Lull (Deck)
17. Link Summon Purification Power Patron (Extra Deck)
18. select Junora the Power Patron of Tuning (EMZ-R)
19. select Medius the Pure (M4)
20. Yes
21. Selected Theorealize Liberation (Deck)
22. Activate Medius the Pure (GY): Shuffle 1 monster from your hand or face-up field into the Deck, and if you do, Special Summon this card
23. Selected Ash Blossom & Joyous Spring (hand)
24. Activate Theorealize Liberation (hand): Add to your hand, or Special Summon, 1 monster from your Deck with 300 ATK/200 DEF
25. Selected Nervedo the Shadebeast Power Patron (Deck)
26. Special Summon it
27. Special Summon (procedure) Artmage Non-Finito (Extra Deck)
28. Selected Theorealize Past Lull (hand)
29. Selected Nervedo the Shadebeast Power Patron (M4)
30. Yes
31. Activate Artmage Non-Finito (M2): Set 1 "Artmage" Spell/Trap from your Deck
32. Activate Purification Power Patron (EMZ-L): Link Summon including this card as material
33. Selected Medicurius the Power Patron of Illusions (Extra Deck)
34. select Medius the Pure (M3)
35. Finish selection
36. Selected Artmage Impasto -Recapture- (Deck)
37. Selected Artmage Graflare (Deck)
38. Yes
39. Special Summon 1 "Diactorus" monster
40. Selected Artmage Diactorus (Extra Deck)
41. Activate Theorealize Past Lull (GY): Special Summon 1 Fusion, Synchro, or Xyz Monster from your GY
42. Selected Junora the Power Patron of Tuning (GY)
43. Link Summon S:P Little Knight (Extra Deck)
44. select Artmage Non-Finito (M2)
45. select Junora the Power Patron of Tuning (M5)
46. No

End board:  LP 8000 | Hand 3 | Deck 34 | Extra 11 | GY 5 | Banished 6   Monsters: M3: Artmage Diactorus Lv8 2800/2500 ATK || M4: Artmage Graflare Lv5 2100/1500 ATK || M5: S:P Little Knight L2←→ 1600  || EMZ-R: Medicurius the Power Patron of Illusions L3↙↓↘ 3000    Spell/Trap: S1: Artmage Impasto -Recapture- (Set)   GY: Prohibited Power Patron Portal - Terminus, Theorealize Liberation, Purification Power Patron, Artmage Non-Finito, Junora the Power Patron of Tuning   Banished: Fiendsmith's Tract (face-down), Artmage Vandalism -Assault- (face-down), Artmage Vandalism -Assault- (face-down), Medius the Pure, Theorealize Medius, Theorealize Past Lull   Hand: Droll & Lock Bird, Ash Blossom & Joyous Spring, G

## Order 3: best 13.65 [margin 3.79: ss_panama 7.21, elfnote -0.7, despia -0.91, angelechy 9.65] (, worst 13.65) — from tries Activate Theorealize Past Lull → new ending → new early order
Others: tries Activate Theorealize Past Lull → new ending 13.05 · tries Activate Theorealize Past Lull → new ending → new ending 12.85 · tries Activate Theorealize Past Lull 12.6 · tries Activate Theorealize Past Lull → new ending → new early order 12.25 · search 12.1 · tries Activate Vidolium the Unstable Power Patron of Unity 12.1 · opening lanes 12 · v52-terminus 11.15 · v52-terminus 11.15 · ter1 7.07

1. Set Spell/Trap Prohibited Power Patron Portal - Terminus
2. Activate Prohibited Power Patron Portal - Terminus (S1): Send 1 "Power Patron" monster from your Deck or Extra Deck to the GY, then you can add 1 DARK Fairy monster from your Deck to your hand
3. Selected Nervedo the Shadebeast Power Patron (Deck)
4. Yes
5. Selected Medius the Pure (Deck)
6. Normal Summon Medius the Pure (hand)
7. Yes
8. Selected Vidolium the Unstable Power Patron of Unity (Deck)
9. Add the card(s) to your hand
10. Activate Vidolium the Unstable Power Patron of Unity (hand): Activate it as a Pendulum Spell
11. Activate Vidolium the Unstable Power Patron of Unity (S1): Activate 1 of these effects
12. Special Summon 1 "Power Patron" monster
13. Selected Nervedo the Shadebeast Power Patron (GY)
14. Yes
15. Selected Junoldo the Shadespirit Power Patron (Deck)
16. Activate Nervedo the Shadebeast Power Patron (M5): Special Summon 1 "Nerva the Power Patron of Creation" from your Extra Deck
17. Selected Nerva the Power Patron of Creation (Extra Deck)
18. Yes
19. Selected Artmage Finmel (Deck)
20. Link Summon Purification Power Patron (Extra Deck)
21. select Nerva the Power Patron of Creation (M1)
22. select Medius the Pure (M4)
23. Yes
24. Selected Theorealize Medius (Deck)
25. Activate Medius the Pure (GY): Shuffle 1 monster from your hand or face-up field into the Deck, and if you do, Special Summon this card
26. Selected Ash Blossom & Joyous Spring (hand)
27. Activate Purification Power Patron (EMZ-L): Link Summon including this card as material
28. Selected S:P Little Knight (Extra Deck)
29. select Medius the Pure (M1)
30. Yes
31. Selected Purification Power Patron (GY)
32. Activate Junoldo the Shadespirit Power Patron (hand): Activate it as a Pendulum Spell
33. Activate Theorealize Medius (hand): If a "Power Patron" card is on the field: You can Special Summon this card from your hand, then you can add 1 "Theorealize" Spell/Trap from your Deck to your hand
34. Yes
35. Selected Theorealize Past Lull (Deck)
36. Yes
37. Selected Theorealize Past Lull (hand)
38. Yes
39. Selected Nervedo the Shadebeast Power Patron (Extra Deck)
40. Activate Artmage Graflare (hand): Special Summon this card from your hand
41. Yes
42. Selected Ars Magna - "Citrinitas" (Deck)
43. Activate Ars Magna - "Citrinitas" (S1): activate this card
44. Activate Ars Magna - "Citrinitas" (S1): Add 1 "Medius" or "Ars Magna" monster from your Deck to your hand
45. Selected Ars Magna of Infinity and Finity (Deck)
46. Activate Ars Magna of Infinity and Finity (hand): You can banish this card from your hand; add 1 non-Warrior "Ars Magna" monster from your Deck to your hand
47. Selected Ars Magna of Purification and Corruption (Deck)
48. Yes
49. Special Summon 1 "Diactorus" monster
50. Selected Artmage Diactorus (Extra Deck)
51. Yes
52. Activate Artmage Diactorus (M1): Change the battle position of 1 monster on the field
53. Selected Ars Magna of Infinity and Finity (M4)
54. Activate Fiendsmith Engraver (hand): Add 1 "Fiendsmith" Spell/Trap from your Deck to your hand
55. Selected Fiendsmith's Tract (Deck)
56. Special Summon (procedure) Artmage Non-Finito (Extra Deck)
57. Selected Fiendsmith's Tract (hand)
58. Selected Nervedo the Shadebeast Power Patron (hand)
59. Yes
60. Selected Artmage Impasto -Recapture- (Deck)
61. Activate Ars Magna of Purification and Corruption (hand): You can banish this card from your hand; add 1 "Ars Magna" Spell/Trap from your Deck to your hand
62. Selected Ars Magna - "Citrinitas" (Deck)
63. Link Summon Medicurius the Power Patron of Illusions (Extra Deck)
64. select Ars Magna of Infinity and Finity (M4)
65. select S:P Little Knight (EMZ-L)
66. Finish selection
67. Yes

End board:  LP 8000 | Hand 4 | Deck 27 | Extra 11 | GY 8 | Banished 6   Monsters: M1: Artmage Diactorus Lv8 2800/2500 ATK || M2: Artmage Non-Finito Lv7 2400/1500 ATK || M3: Artmage Finmel Lv7 2400/1500 ATK || M4: Ars Magna of Purification and Corruption Lv8 1000/2100 ATK || M5: Artmage Graflare Lv5 2100/1500 ATK || EMZ-L: Medicurius the Power Patron of Illusions L3↙↓↘ 9000    Spell/Trap: S1: Ars Magna - "Citrinitas" || S2: Artmage Impasto -Recapture- (Set)   GY: Prohibited Power Patron Portal - Terminus, Nerva the Power Patron of Creation, Theorealize Past Lull, Fiendsmith Engraver, Fiendsmith's Tract, Nervedo the Shadebeast Power Patron, Ars Magna of Infinity and Finity, S:P Little Knight   Banished: 

## Order 4: best 12.55 [margin 4.29: ss_panama 1.78, elfnote 3.45, despia 5.09, angelechy 8.55] (, worst 12.55) — from opening lanes
Others: tries Activate Pendulum Treasure 12.25 · ter1 12.1 · tries Activate Fiendsmith Engraver 12.1 · v52-terminus 11.15 · v52-terminus 11.15 · search 10

1. Set Spell/Trap Prohibited Power Patron Portal - Terminus
2. Activate Prohibited Power Patron Portal - Terminus (S1): Send 1 "Power Patron" monster from your Deck or Extra Deck to the GY, then you can add 1 DARK Fairy monster from your Deck to your hand
3. Selected Nervedo the Shadebeast Power Patron (Deck)
4. Yes
5. Selected Medius the Pure (Deck)
6. Normal Summon Medius the Pure (hand)
7. Yes
8. Selected Vidolium the Unstable Power Patron of Unity (Deck)
9. Add the card(s) to your hand
10. Activate Vidolium the Unstable Power Patron of Unity (hand): Activate it as a Pendulum Spell
11. Activate Vidolium the Unstable Power Patron of Unity (S1): Activate 1 of these effects
12. Special Summon 1 "Power Patron" monster
13. Selected Nervedo the Shadebeast Power Patron (GY)
14. Yes
15. Selected Junoldo the Shadespirit Power Patron (Deck)
16. Activate Nervedo the Shadebeast Power Patron (M3): Special Summon 1 "Nerva the Power Patron of Creation" from your Extra Deck
17. Selected Nerva the Power Patron of Creation (Extra Deck)
18. Yes
19. Selected Artmage Finmel (Deck)
20. Activate Junoldo the Shadespirit Power Patron (hand): Activate it as a Pendulum Spell
21. Link Summon Purification Power Patron (Extra Deck)
22. select Medius the Pure (M1)
23. select Nerva the Power Patron of Creation (EMZ-L)
24. Activate Junoldo the Shadespirit Power Patron (S1): Destroy this card, draw 2 cards, then discard 1 card
25. Activate Purification Power Patron (EMZ-R): Add 1 "Theorealize" card from your Deck to your hand
26. Selected Theorealize Liberation (Deck)
27. Selected Skull Archfiend of Chaos (hand)
28. Yes
29. Activate Skull Archfiend of Chaos (GY): Add 1 Ritual Monster mentioned on that card from your Deck to your hand
30. Selected Light and Darkness Ritual (Deck)
31. Selected Magician of Dark Chaos - Black Chaos (Deck)
32. Selected Nervedo the Shadebeast Power Patron (Extra Deck)
33. Special Summon (procedure) Artmage Non-Finito (Extra Deck)
34. Selected Fiendsmith's Tract (hand)
35. Selected Nervedo the Shadebeast Power Patron (hand)
36. Yes
37. Selected Artmage Impasto -Recapture- (Deck)
38. Activate Light and Darkness Ritual (GY): Add both this card and 1 card that mentions "Light and Darkness Ritual" from your GY to your hand
39. Selected Skull Archfiend of Chaos (GY)
40. Activate Medius the Pure (GY): Shuffle 1 monster from your hand or face-up field into the Deck, and if you do, Special Summon this card
41. Selected Magician of Dark Chaos - Black Chaos (hand)
42. Activate Theorealize Liberation (hand): Add to your hand, or Special Summon, 1 monster from your Deck with 300 ATK/200 DEF
43. Selected Griffoh (Deck)
44. Add the card(s) to your hand
45. Activate Purification Power Patron (EMZ-R): Link Summon including this card as material
46. Selected Medicurius the Power Patron of Illusions (Extra Deck)
47. select Medius the Pure (M5)
48. Finish selection
49. Activate Griffoh (hand): Activate 1 of these effects
50. Set 1 card that mentions "Light and Darkness Ritual"
51. Selected Mind Shuffle (Deck)
52. Activate Mind Shuffle (S2): activate this card
53. No
54. Activate Mind Shuffle (S2): Add 1 appropriate monster to your hand
55. Selected Magician of Dark Chaos - Black Chaos (Deck)
56. Selected Skull Archfiend of Chaos (hand)
57. Set Spell/Trap Light and Darkness Ritual
58. Activate Light and Darkness Ritual (S3): Ritual Summon 1 "Magician of Dark Chaos - Black Chaos" or "Black Luster Soldier - Soldier of Light and Darkness" from your hand
59. Selected Magician of Dark Chaos - Black Chaos (hand)
60. Selected Griffoh (GY) value 8 or 1
61. Yes
62. Selected Light and Darkness Ritual (GY)

End board:  LP 8000 | Hand 5 | Deck 28 | Extra 13 | GY 6 | Banished 6   Monsters: M3: Artmage Finmel Lv7 2400/1500 ATK || M4: Artmage Non-Finito Lv7 2400/1500 ATK || M5: Magician of Dark Chaos - Black Chaos Lv8 2800/2600 ATK || EMZ-R: Medicurius the Power Patron of Illusions L3↙↓↘ 3000    Spell/Trap: S1: Artmage Impasto -Recapture- (Set) || S2: Mind Shuffle   GY: Prohibited Power Patron Portal - Terminus, Nerva the Power Patron of Creation, Fiendsmith's Tract, Nervedo the Shadebeast Power Patron, Purification Power Patron, Skull Archfiend of Chaos   Banished: Theorealize Medius (face-down), Artmage Finmel (face-down), Artmage Vandalism -Assault- (face-down), Medius the Pure, Theorealize Liberation, Gri

## Order 5: best 13.65 [margin 2.82: ss_panama 3.92, elfnote null, despia -1.44, angelechy 6.33] (, worst 13.65) — from opening lanes
Others: opening lanes → new ending 13.55 · opening lanes → new early order 13.45 · opening lanes → new early order 13.35 · tries Activate Junoldo the Shadespirit Power Patron 12.1 · v52-terminus 10.35 · search 9.85 · tries Activate Artmage Vandalism -Assault- 9.85 · opening lanes → new ending 9.77 · ter1 9.25 · ter1 8.84

1. Set Spell/Trap Prohibited Power Patron Portal - Terminus
2. Activate Prohibited Power Patron Portal - Terminus (S1): Send 1 "Power Patron" monster from your Deck or Extra Deck to the GY, then you can add 1 DARK Fairy monster from your Deck to your hand
3. Selected Nervedo the Shadebeast Power Patron (Deck)
4. Yes
5. Selected Medius the Pure (Deck)
6. Normal Summon Medius the Pure (hand)
7. Yes
8. Selected Vidolium the Unstable Power Patron of Unity (Deck)
9. Add the card(s) to your hand
10. Activate Vidolium the Unstable Power Patron of Unity (hand): Activate it as a Pendulum Spell
11. Activate Vidolium the Unstable Power Patron of Unity (S1): Activate 1 of these effects
12. Special Summon 1 "Power Patron" monster
13. Selected Nervedo the Shadebeast Power Patron (GY)
14. Yes
15. Selected Junoldo the Shadespirit Power Patron (Deck)
16. Activate Nervedo the Shadebeast Power Patron (M1): Special Summon 1 "Nerva the Power Patron of Creation" from your Extra Deck
17. Selected Nerva the Power Patron of Creation (Extra Deck)
18. Yes
19. Selected Artmage Graflare (Deck)
20. Activate Junoldo the Shadespirit Power Patron (hand): Activate it as a Pendulum Spell
21. Link Summon Purification Power Patron (Extra Deck)
22. select Medius the Pure (M3)
23. select Nerva the Power Patron of Creation (M4)
24. Activate Purification Power Patron (EMZ-L): Add 1 "Theorealize" card from your Deck to your hand
25. Activate Junoldo the Shadespirit Power Patron (S1): Destroy this card, draw 2 cards, then discard 1 card
26. Selected Pendulum Treasure (hand)
27. Selected Theorealize Medius (Deck)
28. Yes
29. Selected Nervedo the Shadebeast Power Patron (Extra Deck)
30. Activate Medius the Pure (GY): Shuffle 1 monster from your hand or face-up field into the Deck, and if you do, Special Summon this card
31. Selected Ash Blossom & Joyous Spring (hand)
32. Activate Purification Power Patron (EMZ-L): Link Summon including this card as material
33. Selected Medicurius the Power Patron of Illusions (Extra Deck)
34. select Medius the Pure (M4)
35. Finish selection
36. Activate Theorealize Medius (hand): If a "Power Patron" card is on the field: You can Special Summon this card from your hand, then you can add 1 "Theorealize" Spell/Trap from your Deck to your hand
37. Yes
38. Selected Theorealize Past Lull (Deck)
39. Special Summon (procedure) Artmage Non-Finito (Extra Deck)
40. Selected Theorealize Past Lull (hand)
41. Selected Nervedo the Shadebeast Power Patron (hand)
42. Yes
43. Selected Artmage Impasto -Recapture- (Deck)
44. Activate Artmage Finmel (hand): Special Summon this card from your hand
45. Yes
46. Activate Ars Magna of Infinity and Finity (hand): You can banish this card from your hand; add 1 non-Warrior "Ars Magna" monster from your Deck to your hand
47. Selected Ars Magna of Purification and Corruption (Deck)
48. Yes
49. Special Summon 1 "Diactorus" monster
50. Selected Artmage Diactorus (Extra Deck)
51. Yes
52. Activate Ars Magna of Purification and Corruption (hand): You can banish this card from your hand; add 1 "Ars Magna" Spell/Trap from your Deck to your hand
53. Selected Ars Magna - "Citrinitas" (Deck)
54. Activate Ars Magna - "Citrinitas" (hand): activate this card
55. Activate Ars Magna - "Citrinitas" (S2): Add 1 "Medius" or "Ars Magna" monster from your Deck to your hand
56. Selected Medius the Pure (Deck)

End board:  LP 8000 | Hand 4 | Deck 28 | Extra 12 | GY 6 | Banished 6   Monsters: M1: Artmage Graflare Lv5 2100/1500 ATK || M2: Ars Magna of Infinity and Finity Lv8 1000/2400 ATK || M3: Artmage Finmel Lv7 2400/1500 ATK || M4: Artmage Diactorus Lv8 2800/2500 ATK || M5: Artmage Non-Finito Lv7 2400/1500 ATK || EMZ-L: Medicurius the Power Patron of Illusions L3↙↓↘ 9000    Spell/Trap: S1: Artmage Impasto -Recapture- (Set) || S2: Ars Magna - "Citrinitas"   GY: Prohibited Power Patron Portal - Terminus, Nerva the Power Patron of Creation, Pendulum Treasure, Purification Power Patron, Theorealize Past Lull, Nervedo the Shadebeast Power Patron   Banished: Artmage Vandalism -Assault- (face-down), Theorealize Med

## Order 6: best 14.1 [margin 3.9: ss_panama 1.44, elfnote 2.8, despia 0.79, angelechy 10.02] (, worst 14.1) — from tries Activate Vidolium the Unstable Power Patron of Unity → new early order
Others: tries Activate Vidolium the Unstable Power Patron of Unity 14.05 · opening lanes 14.05 · tries Activate Vidolium the Unstable Power Patron of Unity → new ending 14.05 · tries Normal Summon Theorealize Medius 12.1 · search 12 · v52-terminus 11.15 · v52-terminus 11.15 · ter1 9.25 · ter1 8.84 · tries Activate Vidolium the Unstable Power Patron of Unity → new early order 3.55

1. Activate Prohibited Power Patron Portal - Terminus (hand): Send 1 "Power Patron" monster from your Deck or Extra Deck to the GY, then you can add 1 DARK Fairy monster from your Deck to your hand
2. Selected Nervedo the Shadebeast Power Patron (Deck)
3. Yes
4. Selected Medius the Pure (Deck)
5. Normal Summon Medius the Pure (hand)
6. Yes
7. Selected Vidolium the Unstable Power Patron of Unity (Deck)
8. Add the card(s) to your hand
9. Activate Vidolium the Unstable Power Patron of Unity (hand): Activate it as a Pendulum Spell
10. Activate Vidolium the Unstable Power Patron of Unity (S1): Activate 1 of these effects
11. Special Summon 1 "Power Patron" monster
12. Selected Nervedo the Shadebeast Power Patron (GY)
13. Yes
14. Selected Junoldo the Shadespirit Power Patron (Deck)
15. Activate Junoldo the Shadespirit Power Patron (hand): Activate it as a Pendulum Spell
16. Activate Nervedo the Shadebeast Power Patron (M2): Special Summon 1 "Nerva the Power Patron of Creation" from your Extra Deck
17. Selected Nerva the Power Patron of Creation (Extra Deck)
18. Yes
19. Selected Artmage Graflare (Deck)
20. Link Summon Purification Power Patron (Extra Deck)
21. select Medius the Pure (M1)
22. select Nerva the Power Patron of Creation (EMZ-L)
23. Activate Purification Power Patron (EMZ-R): Add 1 "Theorealize" card from your Deck to your hand
24. Activate Junoldo the Shadespirit Power Patron (S1): Destroy this card, draw 2 cards, then discard 1 card
25. Selected Ash Blossom & Joyous Spring (hand)
26. Selected Theorealize Medius (Deck)
27. Yes
28. Selected Prohibited Power Patron Portal - Terminus (GY)
29. Activate Theorealize Medius (hand): If a "Power Patron" card is on the field: You can Special Summon this card from your hand, then you can add 1 "Theorealize" Spell/Trap from your Deck to your hand
30. Yes
31. Selected Theorealize Liberation (Deck)
32. Activate Medius the Pure (GY): Shuffle 1 monster from your hand or face-up field into the Deck, and if you do, Special Summon this card
33. Selected Medius the Pure (hand)
34. Activate Theorealize Liberation (hand): Add to your hand, or Special Summon, 1 monster from your Deck with 300 ATK/200 DEF
35. Activate Purification Power Patron (EMZ-R): Link Summon including this card as material
36. Selected Medicurius the Power Patron of Illusions (Extra Deck)
37. select Medius the Pure (M5)
38. Finish selection
39. Selected Griffoh (Deck)
40. Add the card(s) to your hand
41. Yes
42. Special Summon 1 "Diactorus" monster
43. Selected Artmage Diactorus (Extra Deck)
44. Activate Theorealize Liberation (GY): Treat 1 monster you control as a Tuner this turn
45. Selected Artmage Graflare (M2)
46. Activate Griffoh (hand): Activate 1 of these effects
47. Set 1 card that mentions "Light and Darkness Ritual"
48. Selected Mind Shuffle (Deck)
49. Activate Mind Shuffle (S1): activate this card
50. Yes
51. Selected Skull Archfiend of Chaos (Deck)
52. Selected Skull Archfiend of Chaos (hand)
53. Yes
54. Selected Light and Darkness Ritual (Deck)
55. Selected Magician of Dark Chaos - Black Chaos (Deck)
56. Special Summon (procedure) Artmage Non-Finito (Extra Deck)
57. Selected Prohibited Power Patron Portal - Terminus (hand)
58. Selected Nervedo the Shadebeast Power Patron (hand)
59. Yes
60. Selected Artmage Impasto -Recapture- (Deck)
61. Activate Light and Darkness Ritual (GY): Add both this card and 1 card that mentions "Light and Darkness Ritual" from your GY to your hand
62. Selected Skull Archfiend of Chaos (GY)
63. Set Spell/Trap Light and Darkness Ritual
64. Activate Light and Darkness Ritual (S3): Ritual Summon 1 "Magician of Dark Chaos - Black Chaos" or "Black Luster Soldier - Soldier of Light and Darkness" from your hand
65. Selected Magician of Dark Chaos - Black Chaos (hand)
66. Selected Griffoh (GY) value 8 or 1
67. Yes
68. Selected Prohibited Power Patron Portal - Terminus (GY)

End board:  LP 8000 | Hand 5 | Deck 27 | Extra 13 | GY 5 | Banished 7   Monsters: M1: Artmage Diactorus Lv8 2800/2500 ATK || M2: Artmage Graflare Lv5 2100/1500 ATK || M3: Artmage Non-Finito Lv7 2400/1500 ATK || M4: Magician of Dark Chaos - Black Chaos Lv8 2800/2600 ATK || EMZ-L: Medicurius the Power Patron of Illusions L3↙↓↘ 3000    Spell/Trap: S1: Mind Shuffle || S2: Artmage Impasto -Recapture- (Set)   GY: Nerva the Power Patron of Creation, Ash Blossom & Joyous Spring, Purification Power Patron, Nervedo the Shadebeast Power Patron, Light and Darkness Ritual   Banished: Infinite Impermanence (face-down), Nervedo the Shadebeast Power Patron (face-down), Pendulum Treasure (face-down), Medius the Pure, T

## Order 7: best 13.05 [margin 4.99: ss_panama 2.92, elfnote 6.05, despia 2.59, angelechy 9.1] (, worst 13.05) — from tries Activate Black Chaos → new early order
Others: tries Activate Black Chaos 12 · tries Normal Summon Junoldo the Shadespirit Power Patron 12 · opening lanes 12 · v52-terminus 11.15 · v52-terminus 11.15 · tries Activate Black Chaos → new ending 10.94 · ter1 10.59 · tries Activate Black Chaos → new early order → new ending 10.5 · search 7.65 · tries Activate Black Chaos → new early order → new early order 5.3

1. Activate Prohibited Power Patron Portal - Terminus (hand): Send 1 "Power Patron" monster from your Deck or Extra Deck to the GY, then you can add 1 DARK Fairy monster from your Deck to your hand
2. Selected Medicurius the Power Patron of Illusions (Extra Deck)
3. Yes
4. Selected Medius the Pure (Deck)
5. Normal Summon Medius the Pure (hand)
6. Yes
7. Selected Nervedo the Shadebeast Power Patron (Deck)
8. Special Summon it
9. Activate Nervedo the Shadebeast Power Patron (M4): Special Summon 1 "Nerva the Power Patron of Creation" from your Extra Deck
10. Selected Nerva the Power Patron of Creation (Extra Deck)
11. Yes
12. Selected Theorealize Medius (Deck)
13. Link Summon S:P Little Knight (Extra Deck)
14. select Medius the Pure (M3)
15. select Nerva the Power Patron of Creation (M4)
16. Yes
17. Selected Nerva the Power Patron of Creation (GY)
18. Yes
19. Add 1 "Ars Magna" card from your Deck to your hand
20. Selected Ars Magna of Purification and Corruption (Deck)
21. Activate Medius the Pure (GY): Shuffle 1 monster from your hand or face-up field into the Deck, and if you do, Special Summon this card
22. Selected Ash Blossom & Joyous Spring (hand)
23. Activate Ars Magna of Purification and Corruption (hand): You can banish this card from your hand; add 1 "Ars Magna" Spell/Trap from your Deck to your hand
24. Selected Ars Magna - "Citrinitas" (Deck)
25. Set Spell/Trap Ars Magna - "Citrinitas"
26. Activate Ars Magna - "Citrinitas" (S1): activate this card
27. Activate Ars Magna - "Citrinitas" (S1): Add 1 "Medius" or "Ars Magna" monster from your Deck to your hand
28. Selected Theorealize Medius (Deck)
29. Activate Theorealize Medius (hand): If a "Power Patron" card is on the field: You can Special Summon this card from your hand, then you can add 1 "Theorealize" Spell/Trap from your Deck to your hand
30. Yes
31. Selected Theorealize Liberation (Deck)
32. Activate Theorealize Liberation (hand): Add to your hand, or Special Summon, 1 monster from your Deck with 300 ATK/200 DEF
33. Selected Junoldo the Shadespirit Power Patron (Deck)
34. Add the card(s) to your hand
35. Activate Junoldo the Shadespirit Power Patron (hand): Activate it as a Pendulum Spell
36. Activate Theorealize Liberation (GY): Treat 1 monster you control as a Tuner this turn
37. Selected S:P Little Knight (EMZ-L)
38. Link Summon Medicurius the Power Patron of Illusions (Extra Deck)
39. select Medius the Pure (M4)
40. select S:P Little Knight (EMZ-L)
41. Finish selection
42. Activate Ars Magna of Purification and Corruption (banishment): Special Summon this card
43. Activate Junoldo the Shadespirit Power Patron (S5): Destroy this card, draw 2 cards, then discard 1 card
44. Selected Skull Archfiend of Chaos (hand)
45. Yes
46. Activate Skull Archfiend of Chaos (GY): Add 1 Ritual Monster mentioned on that card from your Deck to your hand
47. Selected Light and Darkness Ritual (Deck)
48. Activate Ars Magna of Purification and Corruption (M3): Banish Spells/Traps on the field
49. Selected Ars Magna - "Citrinitas" (S1)
50. Selected Magician of Dark Chaos - Black Chaos (Deck)
51. Selected Nervedo the Shadebeast Power Patron (Extra Deck)
52. Activate Light and Darkness Ritual (GY): Add both this card and 1 card that mentions "Light and Darkness Ritual" from your GY to your hand
53. Selected Skull Archfiend of Chaos (GY)
54. Activate Small World (hand): activate this card
55. Selected Magician of Dark Chaos - Black Chaos (hand)
56. Selected Ars Magna of Infinity and Finity (Deck)
57. Selected Artmage Finmel (Deck)
58. Special Summon (procedure) Artmage Non-Finito (Extra Deck)
59. Selected Light and Darkness Ritual (hand)
60. Selected Nervedo the Shadebeast Power Patron (hand)
61. Yes
62. Selected Artmage Impasto -Recapture- (Deck)
63. Link Summon Purification Power Patron (Extra Deck)
64. select Ars Magna of Purification and Corruption (M3)
65. select Theorealize Medius (M1)
66. Yes
67. Selected Theorealize Past Lull (Deck)
68. Activate Skull Archfiend of Chaos (hand): Special Summon this card
69. select S:P Little Knight (GY)
70. select Ars Magna of Purification and Corruption (GY)
71. select Light and Darkness Ritual (GY)
72. Default order
73. Activate Purification Power Patron (M3): Link Summon including this card as material
74. Selected S:P Little Knight (Extra Deck)
75. select Skull Archfiend of Chaos (M1)
76. Set Spell/Trap Theorealize Past Lull
77. Activate Theorealize Past Lull (S2): Special Summon 1 "Medius the Pure" from your hand or Deck
78. Selected Medius the Pure (Deck)
79. Activate Artmage Finmel (hand): Special Summon this card from your hand
80. Yes
81. Activate Fiendsmith Engraver (hand): Add 1 "Fiendsmith" Spell/Trap from your Deck to your hand
82. Selected Fiendsmith's Tract (Deck)
83. Set Spell/Trap Fiendsmith's Tract
84. Activate Fiendsmith's Tract (S2): Add 1 LIGHT Fiend monster from your Deck to your hand
85. Selected Lacrima the Crimson Tears (Deck)
86. Selected Lacrima the Crimson Tears (hand)
87. Link Summon Purification Power Patron (Extra Deck)
88. select Medius the Pure (M5)
89. select Theorealize Medius (M2)
90. Activate Fiendsmith Engraver (GY): Special Summon this card
91. Selected Lacrima the Crimson Tears (GY)
92. Link Summon Fiendsmith's Requiem (Extra Deck)
93. select Fiendsmith Engraver (M5)
94. Activate Fiendsmith's Requiem (M5): Special Summon 1 "Fiendsmith" monster
95. Selected Lacrima the Crimson Tears (Deck)
96. Yes
97. Selected Fiendsmith Engraver (Deck)
98. Link Summon Fiendsmith's Sequence (Extra Deck)
99. select Purification Power Patron (M2)
100. select Lacrima the Crimson Tears (M5)
101. Activate Fiendsmith's Sequence (M2): Fusion Summon 1 Fiend Fusion Monster
102. Selected Fiendsmith's Desirae (Extra Deck)
103. select Fiendsmith Engraver (GY)
104. select Lacrima the Crimson Tears (GY)
105. select Fiendsmith's Requiem (GY)
106. Activate Fiendsmith's Sequence (M2): Equip this card to 1 non-Link LIGHT Fiend you control
107. Selected Fiendsmith's Desirae (M5)
108. Activate Fiendsmith's Desirae (M5): Negate the effects of face-up cards on the field
109. Selected Artmage Non-Finito (M4)

End board:  LP 8000 | Hand 3 | Deck 25 | Extra 7 | GY 13 | Banished 9   Monsters: M1: Artmage Finmel Lv7 2400/1500 ATK || M3: S:P Little Knight L2←→ 1600  || M4: Artmage Non-Finito Lv7 2400/1500 ATK [NEGATED] || M5: Fiendsmith's Desirae Lv9 2800/2400 ATK || EMZ-R: Medicurius the Power Patron of Illusions L3↙↓↘ 3000    Spell/Trap: S1: Artmage Impasto -Recapture- (Set) || S2: Fiendsmith's Sequence   GY: Medicurius the Power Patron of Illusions, Prohibited Power Patron Portal - Terminus, Small World, Nervedo the Shadebeast Power Patron, Theorealize Medius, Skull Archfiend of Chaos, Purification Power Patron, Theorealize Past Lull, Fiendsmith's Tract, Theorealize Medius, Medius the Pure, Fiendsmith Engrave

## Order 8: best 12.4 [margin -0.9: ss_panama -3.11, elfnote 3.53, despia -0.32, angelechy -0.55] (, worst 12.4) — from tries Activate Mind Shuffle
Others: tries Activate Mind Shuffle 12.4 · opening lanes 12.05 · search 12 · v52-terminus 11.15 · v52-terminus 11.15 · ter1 4.1

1. Activate Prohibited Power Patron Portal - Terminus (hand): Send 1 "Power Patron" monster from your Deck or Extra Deck to the GY, then you can add 1 DARK Fairy monster from your Deck to your hand
2. Selected Junoldo the Shadespirit Power Patron (Deck)
3. Yes
4. Selected Medius the Pure (Deck)
5. Normal Summon Medius the Pure (hand)
6. Yes
7. Selected Vidolium the Unstable Power Patron of Unity (Deck)
8. #573
9. Activate Vidolium the Unstable Power Patron of Unity (hand): #1160
10. Activate Vidolium the Unstable Power Patron of Unity (S1): Activate 1 of these effects
11. Special Summon 1 "Power Patron" monster
12. Selected Junoldo the Shadespirit Power Patron (GY)
13. Yes
14. Selected Plundered Power Patron Plane - Vidolia (Deck)
15. Activate Junoldo the Shadespirit Power Patron (M3): Special Summon 1 "Junora the Power Patron of Tuning" from your Extra Deck
16. Selected Junora the Power Patron of Tuning (Extra Deck)
17. Yes
18. Selected Prohibited Power Patron Portal - Terminus (GY)
19. Set Spell/Trap Plundered Power Patron Plane - Vidolia
20. Activate Plundered Power Patron Plane - Vidolia (Field): activate this card
21. Activate Plundered Power Patron Plane - Vidolia (Field): Banish (face-down) 1 card from your hand, then add to your hand, or Special Summon, 1 monster from your Deck that mentions the revealed monster
22. Selected Nerva the Power Patron of Creation (Extra Deck)
23. Selected Prohibited Power Patron Portal - Terminus (hand)
24. Selected Nervedo the Shadebeast Power Patron (Deck)
25. Special Summon it
26. Link Summon Purification Power Patron (Extra Deck)
27. select Medius the Pure (M1)
28. select Junora the Power Patron of Tuning (EMZ-R)
29. Yes
30. Selected Theorealize Medius (Deck)
31. Activate Medius the Pure (GY): Shuffle 1 monster from your hand or face-up field into the Deck, and if you do, Special Summon this card
32. Selected Ash Blossom & Joyous Spring (hand)
33. Activate Theorealize Medius (hand): If a "Power Patron" card is on the field: You can Special Summon this card from your hand, then you can add 1 "Theorealize" Spell/Trap from your Deck to your hand
34. Yes
35. Selected Theorealize Past Lull (Deck)
36. Special Summon (procedure) Artmage Non-Finito (Extra Deck)
37. Selected Theorealize Past Lull (hand)
38. Selected Nervedo the Shadebeast Power Patron (M4)
39. Yes
40. Activate Artmage Non-Finito (M4): Set 1 "Artmage" Spell/Trap from your Deck
41. Activate Purification Power Patron (EMZ-L): Link Summon including this card as material
42. Selected Medicurius the Power Patron of Illusions (Extra Deck)
43. select Medius the Pure (M5)
44. Finish selection
45. Selected Artmage Impasto -Recapture- (Deck)
46. Selected Artmage Finmel (Deck)
47. Yes
48. Add 1 "Ars Magna" card from your Deck to your hand
49. Selected Ars Magna of Infinity and Finity (Deck)
50. Activate Theorealize Past Lull (GY): Special Summon 1 Fusion, Synchro, or Xyz Monster from your GY
51. Selected Junora the Power Patron of Tuning (GY)
52. Activate Ars Magna of Infinity and Finity (hand): You can banish this card from your hand; add 1 non-Warrior "Ars Magna" monster from your Deck to your hand
53. Selected Ars Magna of Purification and Corruption (Deck)
54. Activate Ars Magna of Purification and Corruption (hand): You can banish this card from your hand; add 1 "Ars Magna" Spell/Trap from your Deck to your hand
55. Selected Ars Magna - "Citrinitas" (Deck)
56. Activate Ars Magna - "Citrinitas" (hand): activate this card
57. Activate Ars Magna - "Citrinitas" (S2): Add 1 "Medius" or "Ars Magna" monster from your Deck to your hand
58. Selected Medius the Pure (Deck)
59. Link Summon S:P Little Knight (Extra Deck)
60. select Junora the Power Patron of Tuning (M2)
61. select Theorealize Medius (M1)
62. Activate Ars Magna of Purification and Corruption (banishment): Special Summon this card
63. Activate Ars Magna of Infinity and Finity (banishment): Special Summon this card

End board:  LP 8000 | Hand 4 | Deck 29 | Extra 13 | GY 3 | Banished 6   Monsters: M1: S:P Little Knight L2←→ 1600  || M2: Ars Magna of Infinity and Finity Lv8 1000/2400 ATK || M3: Artmage Finmel Lv7 2400/1500 ATK || M4: Artmage Non-Finito Lv7 2400/1500 ATK || M5: Ars Magna of Purification and Corruption Lv8 1000/2100 ATK || EMZ-L: Medicurius the Power Patron of Illusions L3↙↓↘ 9000    Spell/Trap: S1: Artmage Impasto -Recapture- (Set) || S2: Ars Magna - "Citrinitas" || Field: Plundered Power Patron Plane - Vidolia   GY: Purification Power Patron, Theorealize Medius, Junora the Power Patron of Tuning   Banished: Nervedo the Shadebeast Power Patron (face-down), Artmage Graflare (face-down), Lacrima the Cr

