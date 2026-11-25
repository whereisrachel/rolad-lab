# Evolved lines — Fiendsmith Engraver, Medius the Pure, Ash Blossom & Joyous Spring, Droll & Lock Bird, Ghost Ogre & Snow Rabbit (findlist-1100)
2026-11-25T06:55:23.402Z

8 deck orders (different face-down banishes / draws), 3 opponent hands x o_ss_panama + o_elfnote + o_despia + o_angelechy per line, 1 min searches, 3 mutation rounds.
Fitness = average margin after their turn (what you keep minus what they build; −10 more if they OTK). Higher is better.

**Best line per deck order: average 4.69** (worst order 2.28). Winner came from: tries Activate Vidolium the Unstable Power Patron of Unity 1, e3 → new ending → new ending 1, tries Activate Vidolium the Unstable Power Patron of Unity → new early order 1, e3 → new ending 1, e3 1, tries Activate Light and Darkness Ritual 1, tries Activate Mind Shuffle → new ending → new ending 1, tries Normal Summon Lacrima the Crimson Tears → new ending 1

| seed line | works as written | its score when it works | seed start + search finish (all orders) |
|---|---|---|---|
| e3 | 2/8 | 2.42 | 2.25 |
| e3n | 8/8 | -1.64 | 1.75 |

## Weak points found automatically
Cards whose face-down banish (by your own costs) hurt the best line most (average best line without vs with that card banished):

| card | orders where it was banished | drop |
|---|---|---|
| Vidolium the Unstable Power Patron of Unity | 6/8 | 2.08 |
| Prohibited Power Patron Portal - Terminus | 3/8 | 1.09 |
| Ars Magna of Purification and Corruption | 5/8 | 1.09 |
| Artmage Vandalism -Assault- | 5/8 | 0.9 |
| Magician of Dark Chaos - Black Chaos | 5/8 | 0.83 |
| Nervedo the Shadebeast Power Patron | 3/8 | 0.5 |
| Medius the Pure | 4/8 | 0.5 |
| Griffoh | 4/8 | 0.18 |
| Junoldo the Shadespirit Power Patron | 3/8 | 0.11 |
| Artmage Graflare | 3/8 | 0.11 |

Where the hand-designed lines broke (next step that no longer worked):
- e3: Junoldo (2x)
- e3: Impasto (2x)
- e3: Past Lull (2x)

List changes proposed for the list test (data/proposals-findlist-1100.json):
- +1 Vidolium the Unstable Power Patron of Unity, −1 Plundered Power Patron Plane - Vidolia — Vidolium the Unstable Power Patron of Unity: best line 2.08 worse when a cost banished it (6 of 8 orders) — Fiendsmith Engraver
- +1 Prohibited Power Patron Portal - Terminus, −1 Artmage Vandalism -Assault- — Prohibited Power Patron Portal - Terminus: best line 1.09 worse when a cost banished it (3 of 8 orders) — Fiendsmith Engraver
- +1 Ars Magna of Purification and Corruption, −1 Small World — Ars Magna of Purification and Corruption: best line 1.09 worse when a cost banished it (5 of 8 orders) — Fiendsmith Engraver
- +1 Magician of Dark Chaos - Black Chaos, −1 Plundered Power Patron Plane - Vidolia — Magician of Dark Chaos - Black Chaos: best line 0.83 worse when a cost banished it (5 of 8 orders) — Fiendsmith Engraver
- +1 Vidolium the Unstable Power Patron of Unity — Vidolium the Unstable Power Patron of Unity: best line 2.08 worse when a cost banished it (6 of 8 orders) — Fiendsmith Engraver (add only: deck grows, up to 60)
- +1 Prohibited Power Patron Portal - Terminus — Prohibited Power Patron Portal - Terminus: best line 1.09 worse when a cost banished it (3 of 8 orders) — Fiendsmith Engraver (add only: deck grows, up to 60)
- +1 Ars Magna of Purification and Corruption — Ars Magna of Purification and Corruption: best line 1.09 worse when a cost banished it (5 of 8 orders) — Fiendsmith Engraver (add only: deck grows, up to 60)
- +1 Magician of Dark Chaos - Black Chaos — Magician of Dark Chaos - Black Chaos: best line 0.83 worse when a cost banished it (5 of 8 orders) — Fiendsmith Engraver (add only: deck grows, up to 60)

Effects the search had not used, tried on purpose (best result so far):
- Activate Griffoh: 4.67
- Activate Light and Darkness Ritual: 4.24
- Activate Nervedo the Shadebeast Power Patron: 4.18
- Normal Summon Lacrima the Crimson Tears: 4.04
- Activate Light and Darkness Ritual: 3.83
- Activate Mind Shuffle: 3.57
- Normal Summon Fiendsmith Engraver: 3.43
- Activate Artmage Diactorus: 3.37

## Order 1: best 2.78 (ss_panama 2.8, elfnote 3.58, despia 1.4, angelechy 3.15, worst 0) — from tries Activate Vidolium the Unstable Power Patron of Unity
Others: tries Normal Summon Nervedo the Shadebeast Power Patron 2.56 · e3 2.42 · tries Activate Vidolium the Unstable Power Patron of Unity → new early order 2.41 · opening lanes 2.22 · e3n 2.16 · tries Activate Vidolium the Unstable Power Patron of Unity → new ending 1.83 · tries Activate Vidolium the Unstable Power Patron of Unity → new ending 1.61 · search 0.99 · e3n -1.8

1. Activate Fiendsmith Engraver (hand): Add 1 "Fiendsmith" Spell/Trap from your Deck to your hand
2. Selected Fiendsmith's Tract (Deck)
3. Set Spell/Trap Fiendsmith's Tract
4. Activate Fiendsmith's Tract (S1): Add 1 LIGHT Fiend monster from your Deck to your hand
5. Selected Lacrima the Crimson Tears (Deck)
6. Selected Lacrima the Crimson Tears (hand)
7. Activate Fiendsmith Engraver (GY): Special Summon this card
8. Selected Lacrima the Crimson Tears (GY)
9. Link Summon Fiendsmith's Requiem (Extra Deck)
10. select Fiendsmith Engraver (M4)
11. Activate Fiendsmith's Requiem (EMZ-L): Special Summon 1 "Fiendsmith" monster
12. Selected Lacrima the Crimson Tears (Deck)
13. Yes
14. Selected Fiendsmith's Tract (Deck)
15. Normal Summon Medius the Pure (hand)
16. Yes
17. Selected Vidolium the Unstable Power Patron of Unity (Deck)
18. Add the card(s) to your hand
19. Activate Vidolium the Unstable Power Patron of Unity (hand): Activate it as a Pendulum Spell
20. Link Summon Fiendsmith's Sequence (Extra Deck)
21. select Medius the Pure (M2)
22. select Lacrima the Crimson Tears (M1)
23. Activate Fiendsmith's Sequence (EMZ-R): Fusion Summon 1 Fiend Fusion Monster
24. Selected Fiendsmith's Desirae (Extra Deck)
25. select Fiendsmith's Requiem (GY)
26. select Lacrima the Crimson Tears (GY)
27. select Fiendsmith Engraver (GY)
28. Activate Fiendsmith's Sequence (EMZ-R): Equip this card to 1 non-Link LIGHT Fiend you control
29. Selected Fiendsmith's Desirae (M1)
30. Activate Vidolium the Unstable Power Patron of Unity (S1): Activate 1 of these effects
31. Your Level 12 "Power Patron" monsters gain 5000 ATK
32. Activate Fiendsmith's Desirae (M1): Negate the effects of face-up cards on the field
33. Selected Fiendsmith's Desirae (M1)
34. Yes
35. Selected Plundered Power Patron Plane - Vidolia (Deck)
36. Set Spell/Trap Plundered Power Patron Plane - Vidolia
37. Activate Plundered Power Patron Plane - Vidolia (Field): activate this card
38. Activate Plundered Power Patron Plane - Vidolia (Field): Banish (face-down) 1 card from your hand, then add to your hand, or Special Summon, 1 monster from your Deck that mentions the revealed monster
39. Selected Nerva the Power Patron of Creation (Extra Deck)
40. Selected Ash Blossom & Joyous Spring (hand)
41. Selected Nervedo the Shadebeast Power Patron (Deck)
42. Special Summon it
43. Activate Nervedo the Shadebeast Power Patron (M3): Special Summon 1 "Nerva the Power Patron of Creation" from your Extra Deck
44. Selected Nerva the Power Patron of Creation (Extra Deck)
45. Yes
46. Selected Artmage Finmel (Deck)

End board:  LP 8000 | Hand 2 | Deck 36 | Extra 14 | GY 3 | Banished 4   Monsters: M1: Fiendsmith's Desirae Lv9 2800/2400 ATK [NEGATED] || M2: Artmage Finmel Lv7 2400/1500 ATK || M4: Nerva the Power Patron of Creation Lv10 3300/3300 ATK   Spell/Trap: S2: Fiendsmith's Sequence || Field: Plundered Power Patron Plane - Vidolia   GY: Fiendsmith's Tract, Fiendsmith's Tract, Medius the Pure   Banished: Ash Blossom & Joyous Spring (face-down), Vidolium the Unstable Power Patron of Unity (face-down), Junoldo the Shadespirit Power Patron (face-down), Prohibited Power Patron Portal - Terminus (face-down)   Hand: Ghost Ogre & Snow Rabbit, Droll & Lock Bird   Extra Deck: 14 cards (view --ed to list)

## Order 2: best 5.75 (ss_panama 6.14, elfnote 7.47, despia 1.21, angelechy 8.75, worst -0.75) — from e3 → new ending → new ending
Others: e3 → new ending 5.3 · e3 4.34 · tries Normal Summon Fiendsmith Engraver 3.43 · e3n 3.38 · e3 → new ending → new early order 1.86 · opening lanes 1.46 · tries Activate Prohibited Power Patron Portal - Terminus 0.88 · search 0.01 · e3n -1.34

1. Activate Fiendsmith Engraver (hand): Add 1 "Fiendsmith" Spell/Trap from your Deck to your hand
2. Selected Fiendsmith's Tract (Deck)
3. Activate Fiendsmith's Tract (hand): Add 1 LIGHT Fiend monster from your Deck to your hand
4. Selected Lacrima the Crimson Tears (Deck)
5. Selected Lacrima the Crimson Tears (hand)
6. Activate Fiendsmith Engraver (GY): Special Summon this card
7. Selected Lacrima the Crimson Tears (GY)
8. Link Summon Fiendsmith's Requiem (Extra Deck)
9. select Fiendsmith Engraver (M1)
10. Activate Fiendsmith's Requiem (EMZ-L): Special Summon 1 "Fiendsmith" monster
11. Selected Lacrima the Crimson Tears (Deck)
12. Yes
13. Selected Fiendsmith Engraver (Deck)
14. Normal Summon Medius the Pure (hand)
15. Yes
16. Selected Nervedo the Shadebeast Power Patron (Deck)
17. Special Summon it
18. Activate Nervedo the Shadebeast Power Patron (M2): Special Summon 1 "Nerva the Power Patron of Creation" from your Extra Deck
19. Selected Nerva the Power Patron of Creation (Extra Deck)
20. Yes
21. Selected Junoldo the Shadespirit Power Patron (Deck)
22. Activate Junoldo the Shadespirit Power Patron (M2): Special Summon 1 "Junora the Power Patron of Tuning" from your Extra Deck
23. Selected Junora the Power Patron of Tuning (Extra Deck)
24. Yes
25. Selected Nervedo the Shadebeast Power Patron (Extra Deck)
26. Link Summon Fiendsmith's Sequence (Extra Deck)
27. select Medius the Pure (M3)
28. select Lacrima the Crimson Tears (M1)
29. Activate Fiendsmith's Sequence (EMZ-R): Fusion Summon 1 Fiend Fusion Monster
30. Selected Fiendsmith's Desirae (Extra Deck)
31. select Fiendsmith Engraver (GY)
32. select Lacrima the Crimson Tears (GY)
33. select Fiendsmith's Requiem (GY)
34. Activate Medius the Pure (GY): Shuffle 1 monster from your hand or face-up field into the Deck, and if you do, Special Summon this card
35. Selected Ghost Ogre & Snow Rabbit (hand)
36. Activate Fiendsmith's Sequence (EMZ-R): Equip this card to 1 non-Link LIGHT Fiend you control
37. Selected Fiendsmith's Desirae (M1)
38. Activate Fiendsmith's Desirae (M1): Negate the effects of face-up cards on the field
39. Selected Fiendsmith's Desirae (M1)
40. Link Summon Purification Power Patron (Extra Deck)
41. select Medius the Pure (M4)
42. select Junora the Power Patron of Tuning (M2)
43. Yes
44. Selected Theorealize Medius (Deck)
45. Activate Theorealize Medius (hand): If a "Power Patron" card is on the field: You can Special Summon this card from your hand, then you can add 1 "Theorealize" Spell/Trap from your Deck to your hand
46. Yes
47. Selected Theorealize Past Lull (Deck)
48. Special Summon (procedure) Artmage Non-Finito (Extra Deck)
49. Selected Theorealize Past Lull (hand)
50. Selected Nervedo the Shadebeast Power Patron (hand)
51. Yes
52. Selected Ars Magna - "Citrinitas" (Deck)
53. Activate Theorealize Past Lull (GY): Special Summon 1 Fusion, Synchro, or Xyz Monster from your GY
54. Selected Junora the Power Patron of Tuning (GY)
55. Activate Ars Magna - "Citrinitas" (S2): activate this card
56. Activate Purification Power Patron (EMZ-L): Link Summon including this card as material
57. Selected Medicurius the Power Patron of Illusions (Extra Deck)
58. select Junora the Power Patron of Tuning (M2)
59. Finish selection
60. Activate Ars Magna - "Citrinitas" (S2): Add 1 "Medius" or "Ars Magna" monster from your Deck to your hand
61. Selected Ars Magna of Infinity and Finity (Deck)
62. Activate Ars Magna of Infinity and Finity (hand): You can banish this card from your hand; add 1 non-Warrior "Ars Magna" monster from your Deck to your hand
63. Selected Ars Magna of Purification and Corruption (Deck)
64. Yes
65. Special Summon 1 "Diactorus" monster
66. Selected Artmage Diactorus (Extra Deck)
67. Yes

End board:  LP 8000 | Hand 3 | Deck 31 | Extra 8 | GY 5 | Banished 9   Monsters: M1: Fiendsmith's Desirae Lv9 2800/2400 ATK [NEGATED] || M2: Artmage Diactorus Lv8 2800/2500 ATK || M3: Ars Magna of Infinity and Finity Lv8 1000/2400 ATK || M4: Artmage Non-Finito Lv7 2400/1500 ATK || M5: Nerva the Power Patron of Creation Lv10 3300/3300 ATK || EMZ-R: Medicurius the Power Patron of Illusions L3↙↓↘ 9000    Spell/Trap: S1: Fiendsmith's Sequence || S2: Ars Magna - "Citrinitas"   GY: Fiendsmith's Tract, Fiendsmith Engraver, Nervedo the Shadebeast Power Patron, Junora the Power Patron of Tuning, Purification Power Patron   Banished: Theorealize Medius (face-down), Vidolium the Unstable Power Patron of Unity (fa

## Order 3: best 3.12 (ss_panama 3.52, elfnote 0.85, despia -0.4, angelechy 7.2, worst -0.8) — from tries Activate Vidolium the Unstable Power Patron of Unity → new early order
Others: tries Activate Vidolium the Unstable Power Patron of Unity 2.01 · tries Activate Vidolium the Unstable Power Patron of Unity → new early order → new ending 1.67 · e3n 1.63 · e3 1.46 · tries Activate Fiendsmith's Sequence 1.04 · tries Activate Vidolium the Unstable Power Patron of Unity → new ending 1.02 · search 0.92 · opening lanes 0.51 · e3n -1.82

1. Activate Fiendsmith Engraver (hand): Add 1 "Fiendsmith" Spell/Trap from your Deck to your hand
2. Selected Fiendsmith's Tract (Deck)
3. Activate Fiendsmith's Tract (hand): Add 1 LIGHT Fiend monster from your Deck to your hand
4. Selected Lacrima the Crimson Tears (Deck)
5. Selected Lacrima the Crimson Tears (hand)
6. Activate Fiendsmith Engraver (GY): Special Summon this card
7. Selected Lacrima the Crimson Tears (GY)
8. Link Summon Fiendsmith's Requiem (Extra Deck)
9. select Fiendsmith Engraver (M3)
10. Activate Fiendsmith's Requiem (EMZ-R): Special Summon 1 "Fiendsmith" monster
11. Selected Fiendsmith Engraver (Deck)
12. Normal Summon Medius the Pure (hand)
13. Yes
14. Selected Nervedo the Shadebeast Power Patron (Deck)
15. Special Summon it
16. Activate Nervedo the Shadebeast Power Patron (M3): Special Summon 1 "Nerva the Power Patron of Creation" from your Extra Deck
17. Selected Nerva the Power Patron of Creation (Extra Deck)
18. Yes
19. Selected Junoldo the Shadespirit Power Patron (Deck)
20. Link Summon Fiendsmith's Sequence (Extra Deck)
21. select Nerva the Power Patron of Creation (EMZ-R)
22. select Fiendsmith Engraver (M4)
23. Activate Junoldo the Shadespirit Power Patron (M1): Special Summon 1 "Junora the Power Patron of Tuning" from your Extra Deck
24. Selected Junora the Power Patron of Tuning (Extra Deck)
25. Yes
26. Selected Nervedo the Shadebeast Power Patron (Extra Deck)
27. Activate Fiendsmith's Sequence (EMZ-R): Fusion Summon 1 Fiend Fusion Monster
28. Selected Fiendsmith's Desirae (Extra Deck)
29. select Fiendsmith Engraver (GY)
30. select Fiendsmith's Requiem (GY)
31. select Fiendsmith Engraver (GY)
32. Activate Fiendsmith's Sequence (EMZ-R): Equip this card to 1 non-Link LIGHT Fiend you control
33. Selected Fiendsmith's Desirae (M2)
34. Activate Fiendsmith's Desirae (M2): Negate the effects of face-up cards on the field
35. Selected Fiendsmith's Sequence (S1)
36. Link Summon Purification Power Patron (Extra Deck)
37. select Junora the Power Patron of Tuning (M1)
38. select Medius the Pure (M5)
39. Yes
40. Selected Theorealize Medius (Deck)
41. Activate Theorealize Medius (hand): If a "Power Patron" card is on the field: You can Special Summon this card from your hand, then you can add 1 "Theorealize" Spell/Trap from your Deck to your hand
42. Yes
43. Selected Theorealize Past Lull (Deck)
44. Activate Purification Power Patron (EMZ-L): Link Summon including this card as material
45. Selected Medicurius the Power Patron of Illusions (Extra Deck)
46. select Theorealize Medius (M3)
47. Finish selection
48. Special Summon (procedure) Artmage Non-Finito (Extra Deck)
49. Selected Theorealize Past Lull (hand)
50. Selected Nervedo the Shadebeast Power Patron (hand)
51. Yes
52. Selected Artmage Impasto -Recapture- (Deck)
53. Activate Theorealize Past Lull (GY): Special Summon 1 Fusion, Synchro, or Xyz Monster from your GY
54. Selected Junora the Power Patron of Tuning (GY)

End board:  LP 8000 | Hand 3 | Deck 33 | Extra 9 | GY 6 | Banished 7   Monsters: M1: Junora the Power Patron of Tuning Lv10 3100/3800 ATK || M2: Fiendsmith's Desirae Lv9 2800/2400 ATK || M3: Artmage Non-Finito Lv7 2400/1500 ATK || EMZ-L: Medicurius the Power Patron of Illusions L3↙↓↘ 3000    Spell/Trap: S1: Fiendsmith's Sequence [NEGATED] || S2: Artmage Impasto -Recapture- (Set)   GY: Fiendsmith's Tract, Nerva the Power Patron of Creation, Medius the Pure, Theorealize Medius, Purification Power Patron, Nervedo the Shadebeast Power Patron   Banished: Pendulum Treasure (face-down), Fiendsmith's Tract (face-down), Dark Magical Circle (face-down), Ash Blossom & Joyous Spring (face-down), Black Luster Soldi

## Order 4: best 6.85 (ss_panama 6.9, elfnote 6.38, despia 5.62, angelechy 8.35, worst 0.15) — from e3 → new ending
Others: e3 → new ending → new ending 5.48 · e3 → new ending → new early order 4.22 · e3 2.81 · opening lanes 2.46 · tries Normal Summon Theorealize Medius 2.42 · e3n 1.97 · search 0.62 · tries Activate Fiendsmith's Desirae 0.12 · e3n -1.89

1. Activate Fiendsmith Engraver (hand): Add 1 "Fiendsmith" Spell/Trap from your Deck to your hand
2. Selected Fiendsmith's Tract (Deck)
3. Activate Fiendsmith's Tract (hand): Add 1 LIGHT Fiend monster from your Deck to your hand
4. Selected Lacrima the Crimson Tears (Deck)
5. Selected Lacrima the Crimson Tears (hand)
6. Activate Fiendsmith Engraver (GY): Special Summon this card
7. Selected Lacrima the Crimson Tears (GY)
8. Link Summon Fiendsmith's Requiem (Extra Deck)
9. select Fiendsmith Engraver (M1)
10. Activate Fiendsmith's Requiem (EMZ-L): Special Summon 1 "Fiendsmith" monster
11. Selected Lacrima the Crimson Tears (Deck)
12. Yes
13. Selected Fiendsmith Engraver (Deck)
14. Normal Summon Medius the Pure (hand)
15. Yes
16. Selected Nervedo the Shadebeast Power Patron (Deck)
17. Special Summon it
18. Activate Nervedo the Shadebeast Power Patron (M2): Special Summon 1 "Nerva the Power Patron of Creation" from your Extra Deck
19. Selected Nerva the Power Patron of Creation (Extra Deck)
20. Yes
21. Selected Junoldo the Shadespirit Power Patron (Deck)
22. Activate Junoldo the Shadespirit Power Patron (M2): Special Summon 1 "Junora the Power Patron of Tuning" from your Extra Deck
23. Selected Junora the Power Patron of Tuning (Extra Deck)
24. Yes
25. Selected Nervedo the Shadebeast Power Patron (Extra Deck)
26. Link Summon Fiendsmith's Sequence (Extra Deck)
27. select Junora the Power Patron of Tuning (M2)
28. select Lacrima the Crimson Tears (M1)
29. Activate Fiendsmith's Sequence (EMZ-R): Fusion Summon 1 Fiend Fusion Monster
30. Selected Fiendsmith's Desirae (Extra Deck)
31. select Lacrima the Crimson Tears (GY)
32. select Fiendsmith Engraver (GY)
33. select Fiendsmith's Requiem (GY)
34. Link Summon Purification Power Patron (Extra Deck)
35. select Fiendsmith's Desirae (M1)
36. select Medius the Pure (M3)
37. No
38. Yes
39. Selected Theorealize Medius (Deck)
40. Activate Theorealize Medius (hand): If a "Power Patron" card is on the field: You can Special Summon this card from your hand, then you can add 1 "Theorealize" Spell/Trap from your Deck to your hand
41. Yes
42. Selected Theorealize Past Lull (Deck)
43. Special Summon (procedure) Artmage Non-Finito (Extra Deck)
44. Selected Theorealize Past Lull (hand)
45. Selected Nervedo the Shadebeast Power Patron (hand)
46. Yes
47. Activate Purification Power Patron (M3): Link Summon including this card as material
48. Selected Medicurius the Power Patron of Illusions (Extra Deck)
49. select Fiendsmith's Sequence (EMZ-R)
50. Finish selection
51. Selected Ars Magna - "Citrinitas" (Deck)
52. Activate Theorealize Past Lull (GY): Special Summon 1 Fusion, Synchro, or Xyz Monster from your GY
53. Selected Fiendsmith's Desirae (GY)
54. Activate Fiendsmith's Sequence (GY): Equip this card to 1 non-Link LIGHT Fiend you control
55. Selected Fiendsmith's Desirae (M3)
56. Activate Fiendsmith's Desirae (M3): Negate the effects of face-up cards on the field
57. Selected Fiendsmith's Sequence (S2)
58. Activate Ars Magna - "Citrinitas" (S1): activate this card
59. Activate Ars Magna - "Citrinitas" (S1): Add 1 "Medius" or "Ars Magna" monster from your Deck to your hand
60. Selected Ars Magna of Purification and Corruption (Deck)
61. Activate Ars Magna of Purification and Corruption (hand): You can banish this card from your hand; add 1 "Ars Magna" Spell/Trap from your Deck to your hand
62. Selected Ars Magna - "Citrinitas" (Deck)
63. Yes
64. Special Summon 1 "Diactorus" monster
65. Selected Artmage Diactorus (Extra Deck)

End board:  LP 8000 | Hand 4 | Deck 30 | Extra 8 | GY 6 | Banished 9   Monsters: M1: Artmage Non-Finito Lv7 2400/1500 ATK || M2: Artmage Diactorus Lv8 2800/2500 ATK || M3: Fiendsmith's Desirae Lv9 2800/2400 ATK || M5: Nerva the Power Patron of Creation Lv10 3300/3300 ATK || EMZ-L: Medicurius the Power Patron of Illusions L3↙↓↘ 3000    Spell/Trap: S1: Ars Magna - "Citrinitas" || S2: Fiendsmith's Sequence [NEGATED]   GY: Fiendsmith's Tract, Fiendsmith Engraver, Junora the Power Patron of Tuning, Medius the Pure, Nervedo the Shadebeast Power Patron, Purification Power Patron   Banished: Ars Magna of Infinity and Finity (face-down), Small World (face-down), Magician of Dark Chaos - Black Chaos (face-down),

## Order 5: best 2.28 (ss_panama null, elfnote -3.1, despia -1.27, angelechy 8.25, worst -10.7) — from e3 (seed followed 44/44 steps)
Others: e3 2.02 · e3 → new early order 1.94 · e3n 1.55 · tries Activate Mind Shuffle 1.44 · e3 → new ending 1.25 · opening lanes 1.13 · tries Activate Prohibited Power Patron Portal - Terminus 0.94 · e3 → new ending 0.86 · search -0.07 · e3n -1.78

1. Activate Fiendsmith Engraver (hand): Add 1 "Fiendsmith" Spell/Trap from your Deck to your hand
2. Selected Fiendsmith's Tract (Deck)
3. Activate Fiendsmith's Tract (hand): Add 1 LIGHT Fiend monster from your Deck to your hand
4. Selected Lacrima the Crimson Tears (Deck)
5. Selected Lacrima the Crimson Tears (hand)
6. Activate Fiendsmith Engraver (GY): Special Summon this card
7. Selected Lacrima the Crimson Tears (GY)
8. Link Summon Fiendsmith's Requiem (Extra Deck)
9. select Fiendsmith Engraver (M1)
10. Activate Fiendsmith's Requiem (EMZ-L): Special Summon 1 "Fiendsmith" monster
11. Selected Lacrima the Crimson Tears (Deck)
12. Yes
13. Selected Fiendsmith Engraver (Deck)
14. Normal Summon Medius the Pure (hand)
15. Yes
16. Selected Nervedo the Shadebeast Power Patron (Deck)
17. Special Summon it
18. Activate Nervedo the Shadebeast Power Patron (M2): Special Summon 1 "Nerva the Power Patron of Creation" from your Extra Deck
19. Selected Nerva the Power Patron of Creation (Extra Deck)
20. Yes
21. Selected Junoldo the Shadespirit Power Patron (Deck)
22. Activate Junoldo the Shadespirit Power Patron (M2): Special Summon 1 "Junora the Power Patron of Tuning" from your Extra Deck
23. Selected Junora the Power Patron of Tuning (Extra Deck)
24. Yes
25. Selected Nervedo the Shadebeast Power Patron (Extra Deck)
26. Link Summon Purification Power Patron (Extra Deck)
27. select Lacrima the Crimson Tears (M1)
28. select Junora the Power Patron of Tuning (M2)
29. Yes
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
41. Link Summon S:P Little Knight (Extra Deck)
42. select Purification Power Patron (EMZ-L)
43. select Medius the Pure (M3)
44. Yes
45. Selected Purification Power Patron (GY)
46. Yes
47. Special Summon 1 "Diactorus" monster
48. Selected Artmage Diactorus (Extra Deck)
49. Activate Medius the Pure (GY): Shuffle 1 monster from your hand or face-up field into the Deck, and if you do, Special Summon this card
50. Selected Ghost Ogre & Snow Rabbit (hand)
51. Link Summon Medicurius the Power Patron of Illusions (Extra Deck)
52. select Medius the Pure (M1)
53. select S:P Little Knight (EMZ-L)
54. Finish selection

End board:  LP 8000 | Hand 2 | Deck 31 | Extra 8 | GY 7 | Banished 10   Monsters: M2: Junora the Power Patron of Tuning Lv10 3100/3800 ATK || M3: Artmage Diactorus Lv8 2800/2500 ATK || M4: Artmage Non-Finito Lv7 2400/1500 ATK || M5: Nerva the Power Patron of Creation Lv10 3300/3300 ATK || EMZ-R: Medicurius the Power Patron of Illusions L3↙↓↘ 3000    Spell/Trap: S1: Artmage Impasto -Recapture- (Set)   GY: Fiendsmith's Tract, Fiendsmith Engraver, Fiendsmith's Requiem, Fiendsmith Engraver, Lacrima the Crimson Tears, Nervedo the Shadebeast Power Patron, S:P Little Knight   Banished: Pendulum Treasure (face-down), Skull Archfiend of Chaos (face-down), Pendulum Treasure (face-down), Vidolium the Unstable Pow

## Order 6: best 4.24 (ss_panama null, elfnote 2.61, despia 4.47, angelechy 6.33, worst -1.84) — from tries Activate Light and Darkness Ritual
Others: tries Activate Light and Darkness Ritual → new ending 4.05 · tries Activate Light and Darkness Ritual → new ending 3.93 · tries Activate Light and Darkness Ritual 3.83 · e3n 2.97 · tries Activate Light and Darkness Ritual → new early order 2.34 · search 2.31 · opening lanes 1.97 · e3 1.45 · e3n -1.27

1. Normal Summon Medius the Pure (hand)
2. Yes
3. Selected Nervedo the Shadebeast Power Patron (Deck)
4. Special Summon it
5. Activate Nervedo the Shadebeast Power Patron (M3): Special Summon 1 "Nerva the Power Patron of Creation" from your Extra Deck
6. Selected Nerva the Power Patron of Creation (Extra Deck)
7. Yes
8. Selected Junoldo the Shadespirit Power Patron (Deck)
9. Activate Junoldo the Shadespirit Power Patron (M1): Special Summon 1 "Junora the Power Patron of Tuning" from your Extra Deck
10. Selected Junora the Power Patron of Tuning (Extra Deck)
11. Yes
12. Selected Nervedo the Shadebeast Power Patron (Extra Deck)
13. Activate Fiendsmith Engraver (hand): Add 1 "Fiendsmith" Spell/Trap from your Deck to your hand
14. Selected Fiendsmith's Tract (Deck)
15. Activate Fiendsmith's Tract (hand): Add 1 LIGHT Fiend monster from your Deck to your hand
16. Selected Lacrima the Crimson Tears (Deck)
17. Selected Lacrima the Crimson Tears (hand)
18. Activate Fiendsmith Engraver (GY): Special Summon this card
19. Selected Lacrima the Crimson Tears (GY)
20. Link Summon Fiendsmith's Requiem (Extra Deck)
21. select Fiendsmith Engraver (M1)
22. Activate Fiendsmith's Requiem (EMZ-R): Special Summon 1 "Fiendsmith" monster
23. Selected Lacrima the Crimson Tears (Deck)
24. Yes
25. Selected Fiendsmith Engraver (Deck)
26. Link Summon Purification Power Patron (Extra Deck)
27. select Medius the Pure (M4)
28. select Junora the Power Patron of Tuning (M5)
29. Yes
30. Selected Theorealize Medius (Deck)
31. Activate Theorealize Medius (hand): If a "Power Patron" card is on the field: You can Special Summon this card from your hand, then you can add 1 "Theorealize" Spell/Trap from your Deck to your hand
32. Yes
33. Selected Theorealize Liberation (Deck)
34. Activate Purification Power Patron (EMZ-R): Link Summon including this card as material
35. Selected S:P Little Knight (Extra Deck)
36. select Lacrima the Crimson Tears (M1)
37. Yes
38. Selected Fiendsmith Engraver (GY)
39. Yes
40. Special Summon 1 "Diactorus" monster
41. Selected Artmage Diactorus (Extra Deck)
42. Special Summon (procedure) Artmage Non-Finito (Extra Deck)
43. Selected Theorealize Liberation (hand)
44. Selected Nervedo the Shadebeast Power Patron (hand)
45. Yes
46. Selected Artmage Impasto -Recapture- (Deck)

End board:  LP 8000 | Hand 3 | Deck 30 | Extra 9 | GY 9 | Banished 8   Monsters: M3: Nerva the Power Patron of Creation Lv10 3300/3300 ATK || M4: Artmage Diactorus Lv8 2800/2500 ATK || M5: Artmage Non-Finito Lv7 2400/1500 ATK || EMZ-R: S:P Little Knight L2←→ 1600    Spell/Trap: S1: Artmage Impasto -Recapture- (Set)   GY: Fiendsmith's Tract, Fiendsmith Engraver, Fiendsmith's Requiem, Medius the Pure, Junora the Power Patron of Tuning, Lacrima the Crimson Tears, Purification Power Patron, Theorealize Liberation, Nervedo the Shadebeast Power Patron   Banished: Small World (face-down), Artmage Vandalism -Assault- (face-down), Mind Shuffle (face-down), Theorealize Past Lull (face-down), Artmage Vandalism -A

## Order 7: best 6.13 (ss_panama 6.11, elfnote 7.78, despia 1.93, angelechy 9.25, worst -3.7) — from tries Activate Mind Shuffle → new ending → new ending
Others: tries Activate Mind Shuffle → new ending 4.16 · tries Activate Mind Shuffle 3.57 · tries Activate Mind Shuffle → new ending → new early order 1.81 · search 1.46 · e3n 1.44 · tries Activate Fiendsmith's Sequence 1.11 · opening lanes 0.89 · e3 0.56 · e3n -1.95

1. Normal Summon Medius the Pure (hand)
2. Yes
3. Selected Nervedo the Shadebeast Power Patron (Deck)
4. Special Summon it
5. Activate Nervedo the Shadebeast Power Patron (M4): Special Summon 1 "Nerva the Power Patron of Creation" from your Extra Deck
6. Selected Nerva the Power Patron of Creation (Extra Deck)
7. Yes
8. Selected Artmage Finmel (Deck)
9. Link Summon Purification Power Patron (Extra Deck)
10. select Medius the Pure (M3)
11. select Nerva the Power Patron of Creation (EMZ-L)
12. Yes
13. Selected Theorealize Medius (Deck)
14. Activate Medius the Pure (GY): Shuffle 1 monster from your hand or face-up field into the Deck, and if you do, Special Summon this card
15. Selected Ghost Ogre & Snow Rabbit (hand)
16. Activate Fiendsmith Engraver (hand): Add 1 "Fiendsmith" Spell/Trap from your Deck to your hand
17. Selected Fiendsmith's Tract (Deck)
18. Activate Theorealize Medius (hand): If a "Power Patron" card is on the field: You can Special Summon this card from your hand, then you can add 1 "Theorealize" Spell/Trap from your Deck to your hand
19. Yes
20. Selected Theorealize Liberation (Deck)
21. Activate Theorealize Liberation (hand): Add to your hand, or Special Summon, 1 monster from your Deck with 300 ATK/200 DEF
22. Activate Purification Power Patron (EMZ-R): Link Summon including this card as material
23. Selected S:P Little Knight (Extra Deck)
24. select Medius the Pure (M5)
25. Selected Griffoh (Deck)
26. Add the card(s) to your hand
27. Yes
28. Special Summon 1 "Diactorus" monster
29. Selected Artmage Diactorus (Extra Deck)
30. Activate Theorealize Liberation (GY): Treat 1 monster you control as a Tuner this turn
31. Selected Artmage Finmel (M1)
32. Activate Griffoh (hand): Activate 1 of these effects
33. Set 1 card that mentions "Light and Darkness Ritual"
34. Selected Mind Shuffle (Deck)
35. Special Summon (procedure) Artmage Non-Finito (Extra Deck)
36. Selected Fiendsmith's Tract (hand)
37. Selected Artmage Diactorus (M3)
38. Yes
39. Selected Artmage Impasto -Recapture- (Deck)
40. Activate Mind Shuffle (S1): activate this card
41. Yes
42. Selected Skull Archfiend of Chaos (Deck)
43. Selected Skull Archfiend of Chaos (hand)
44. Yes
45. Selected Light and Darkness Ritual (Deck)
46. Selected Magician of Dark Chaos - Black Chaos (Deck)
47. Activate Light and Darkness Ritual (GY): Add both this card and 1 card that mentions "Light and Darkness Ritual" from your GY to your hand
48. Selected Griffoh (GY)
49. Set Spell/Trap Light and Darkness Ritual
50. Activate Light and Darkness Ritual (S3): Ritual Summon 1 "Magician of Dark Chaos - Black Chaos" or "Black Luster Soldier - Soldier of Light and Darkness" from your hand
51. Selected Magician of Dark Chaos - Black Chaos (hand)
52. Selected Artmage Diactorus (GY) value 8
53. Yes
54. Selected Fiendsmith's Tract (GY)
55. Special Summon (procedure) Dark Magician of Destruction (Extra Deck)
56. Selected Magician of Dark Chaos - Black Chaos (M3)
57. Yes
58. Selected Apprentice Illusion Magician (Deck)
59. Special Summon (procedure) Apprentice Illusion Magician (hand)
60. select Griffoh (hand)
61. Activate Skull Archfiend of Chaos (GY): Special Summon this card
62. select Purification Power Patron (GY)
63. select Griffoh (GY)
64. select Light and Darkness Ritual (GY)
65. Default order
66. Activate Fiendsmith's Tract (hand): Add 1 LIGHT Fiend monster from your Deck to your hand
67. Selected Fiendsmith Engraver (Deck)
68. Selected Fiendsmith Engraver (hand)
69. Link Summon Medicurius the Power Patron of Illusions (Extra Deck)
70. select S:P Little Knight (EMZ-L)
71. select Skull Archfiend of Chaos (M5)
72. Finish selection
73. Activate Fiendsmith Engraver (GY): Special Summon this card
74. Selected Fiendsmith Engraver (GY)
75. Link Summon Fiendsmith's Requiem (Extra Deck)
76. select Fiendsmith Engraver (M5)
77. Activate Fiendsmith's Requiem (M5): Special Summon 1 "Fiendsmith" monster
78. Selected Fiendsmith Engraver (Deck)
79. Link Summon Fiendsmith's Sequence (Extra Deck)
80. select Fiendsmith Engraver (M5)
81. select Medicurius the Power Patron of Illusions (EMZ-R)
82. Activate Fiendsmith's Sequence (EMZ-L): Fusion Summon 1 Fiend Fusion Monster
83. Selected Fiendsmith's Desirae (Extra Deck)
84. select Fiendsmith's Requiem (GY)
85. select Fiendsmith Engraver (GY)
86. select Fiendsmith Engraver (GY)
87. Link Summon Medicurius the Power Patron of Illusions (Extra Deck)
88. select Apprentice Illusion Magician (M2)
89. select Fiendsmith's Sequence (EMZ-L)
90. Finish selection
91. Activate Fiendsmith's Sequence (GY): Equip this card to 1 non-Link LIGHT Fiend you control
92. Selected Fiendsmith's Desirae (M5)

End board:  LP 8000 | Hand 2 | Deck 33 | Extra 7 | GY 6 | Banished 8   Monsters: M1: Artmage Finmel Lv7 2400/1500 ATK || M3: Dark Magician of Destruction Lv8 2800/2600 ATK || M4: Artmage Non-Finito Lv7 2400/1500 ATK || M5: Fiendsmith's Desirae Lv9 2800/2400 ATK || EMZ-R: Medicurius the Power Patron of Illusions L3↙↓↘ 3000    Spell/Trap: S1: Mind Shuffle || S2: Artmage Impasto -Recapture- (Set) || S3: Fiendsmith's Sequence   GY: Nerva the Power Patron of Creation, Fiendsmith's Tract, Skull Archfiend of Chaos, S:P Little Knight, Medicurius the Power Patron of Illusions, Apprentice Illusion Magician   Banished: Black Chaos (face-down), Nervedo the Shadebeast Power Patron (face-down), Pendulum Treasure (fa

## Order 8: best 6.38 (ss_panama 3.72, elfnote null, despia 3.3, angelechy 10.2, worst 2.15) — from tries Normal Summon Lacrima the Crimson Tears → new ending
Others: tries Normal Summon Lacrima the Crimson Tears → new ending → new early order 4.71 · tries Normal Summon Lacrima the Crimson Tears 4.04 · e3 2.81 · e3 2.66 · tries Activate Junoldo the Shadespirit Power Patron 2.4 · search 1.66 · opening lanes 0.83 · tries Normal Summon Lacrima the Crimson Tears → new ending → new ending 0.07 · e3n -1.09 · e3n -1.29

1. Activate Fiendsmith Engraver (hand): Add 1 "Fiendsmith" Spell/Trap from your Deck to your hand
2. Selected Fiendsmith's Tract (Deck)
3. Activate Fiendsmith's Tract (hand): Add 1 LIGHT Fiend monster from your Deck to your hand
4. Selected Lacrima the Crimson Tears (Deck)
5. Selected Medius the Pure (hand)
6. Normal Summon Lacrima the Crimson Tears (hand)
7. Yes
8. Selected Fiendsmith Engraver (Deck)
9. Link Summon Fiendsmith's Requiem (Extra Deck)
10. select Lacrima the Crimson Tears (M4)
11. Activate Fiendsmith Engraver (GY): Special Summon this card
12. Selected Fiendsmith Engraver (GY)
13. Activate Fiendsmith's Requiem (EMZ-R): Special Summon 1 "Fiendsmith" monster
14. Selected Fiendsmith Engraver (Deck)
15. Link Summon Fiendsmith's Sequence (Extra Deck)
16. select Fiendsmith Engraver (M3)
17. select Fiendsmith Engraver (M4)
18. Activate Fiendsmith's Sequence (EMZ-L): Fusion Summon 1 Fiend Fusion Monster
19. Selected Fiendsmith's Desirae (Extra Deck)
20. select Lacrima the Crimson Tears (GY)
21. select Fiendsmith Engraver (GY)
22. select Fiendsmith Engraver (GY)
23. Activate Fiendsmith's Sequence (EMZ-L): Equip this card to 1 non-Link LIGHT Fiend you control
24. Selected Fiendsmith's Desirae (M3)
25. Activate Fiendsmith's Desirae (M3): Negate the effects of face-up cards on the field
26. Selected Fiendsmith's Sequence (S1)
27. Activate Medius the Pure (GY): Shuffle 1 monster from your hand or face-up field into the Deck, and if you do, Special Summon this card
28. Selected Ash Blossom & Joyous Spring (hand)
29. Yes
30. Selected Nervedo the Shadebeast Power Patron (Deck)
31. Special Summon it
32. Activate Nervedo the Shadebeast Power Patron (M4): Special Summon 1 "Nerva the Power Patron of Creation" from your Extra Deck
33. Selected Nerva the Power Patron of Creation (Extra Deck)
34. Yes
35. Selected Junoldo the Shadespirit Power Patron (Deck)
36. Activate Junoldo the Shadespirit Power Patron (M2): Special Summon 1 "Junora the Power Patron of Tuning" from your Extra Deck
37. Selected Junora the Power Patron of Tuning (Extra Deck)
38. Yes
39. Selected Nervedo the Shadebeast Power Patron (Extra Deck)
40. Link Summon Purification Power Patron (Extra Deck)
41. select Junora the Power Patron of Tuning (M4)
42. select Nerva the Power Patron of Creation (EMZ-L)
43. Yes
44. Selected Theorealize Medius (Deck)
45. Activate Theorealize Medius (hand): If a "Power Patron" card is on the field: You can Special Summon this card from your hand, then you can add 1 "Theorealize" Spell/Trap from your Deck to your hand
46. Yes
47. Selected Theorealize Liberation (Deck)
48. Activate Purification Power Patron (EMZ-R): Link Summon including this card as material
49. Activate Theorealize Liberation (hand): Add to your hand, or Special Summon, 1 monster from your Deck with 300 ATK/200 DEF
50. Selected Griffoh (Deck)
51. Add the card(s) to your hand
52. Selected Medicurius the Power Patron of Illusions (Extra Deck)
53. select Medius the Pure (M1)
54. Finish selection
55. Yes
56. Special Summon 1 "Diactorus" monster
57. Selected Artmage Diactorus (Extra Deck)
58. Activate Griffoh (hand): Activate 1 of these effects
59. Set 1 card that mentions "Light and Darkness Ritual"
60. Selected Mind Shuffle (Deck)
61. Activate Theorealize Liberation (GY): Treat 1 monster you control as a Tuner this turn
62. Selected Fiendsmith's Desirae (M3)
63. Activate Fiendsmith's Requiem (GY): Equip this card to 1 non-Link LIGHT Fiend you control
64. Selected Fiendsmith's Desirae (M3)
65. Activate Mind Shuffle (S2): activate this card
66. No
67. Activate Mind Shuffle (S2): Add 1 appropriate monster to your hand
68. Selected Skull Archfiend of Chaos (Deck)
69. Selected Skull Archfiend of Chaos (hand)
70. Yes
71. Selected Light and Darkness Ritual (Deck)
72. Selected Magician of Dark Chaos - Black Chaos (Deck)
73. Activate Light and Darkness Ritual (GY): Add both this card and 1 card that mentions "Light and Darkness Ritual" from your GY to your hand
74. Selected Skull Archfiend of Chaos (GY)
75. Activate Light and Darkness Ritual (hand): Ritual Summon 1 "Magician of Dark Chaos - Black Chaos" or "Black Luster Soldier - Soldier of Light and Darkness" from your hand
76. Selected Magician of Dark Chaos - Black Chaos (hand)
77. Selected Griffoh (GY) value 8 or 1
78. Yes
79. Selected Light and Darkness Ritual (GY)
80. Activate Artmage Diactorus (M4): Change the battle position of 1 monster on the field
81. Selected Magician of Dark Chaos - Black Chaos (M1)
82. Special Summon (procedure) Artmage Non-Finito (Extra Deck)
83. Selected Light and Darkness Ritual (hand)
84. Selected Nervedo the Shadebeast Power Patron (hand)
85. Yes
86. Selected Artmage Impasto -Recapture- (Deck)

End board:  LP 8000 | Hand 3 | Deck 29 | Extra 7 | GY 6 | Banished 10   Monsters: M1: Magician of Dark Chaos - Black Chaos Lv8 2800/2600 DEF || M2: Artmage Non-Finito Lv7 2400/1500 ATK || M3: Fiendsmith's Desirae Lv9 3400/2400 ATK || M4: Artmage Diactorus Lv8 2800/2500 ATK || EMZ-L: Medicurius the Power Patron of Illusions L3↙↓↘ 3000    Spell/Trap: S1: Fiendsmith's Sequence [NEGATED] || S2: Mind Shuffle || S3: Fiendsmith's Requiem || S4: Artmage Impasto -Recapture- (Set)   GY: Fiendsmith's Tract, Junora the Power Patron of Tuning, Nerva the Power Patron of Creation, Purification Power Patron, Light and Darkness Ritual, Nervedo the Shadebeast Power Patron   Banished: Apprentice Illusion Magician (face-d

