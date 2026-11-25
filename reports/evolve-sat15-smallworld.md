# Evolved lines — Small World, Ash Blossom & Joyous Spring, Ash Blossom & Joyous Spring, Droll & Lock Bird, Ghost Ogre & Snow Rabbit (findlist-1100)
2026-11-25T16:15:21.616Z

8 deck orders (different face-down banishes / draws), 3 opponent hands x o_ss_panama + o_elfnote + o_despia + o_angelechy per line, 15 min searches, 4 mutation rounds.
Fitness = average margin after their turn (what you keep minus what they build; −10 more if they OTK). Higher is better.

**Best line per deck order: average 5.87** (worst order 4.33). Winner came from: opening lanes → new ending 2, tries Normal Summon Theorealize Medius 1, search → new early order 2, sw1 1, opening lanes 2

| seed line | works as written | its score when it works | seed start + search finish (all orders) |
|---|---|---|---|
| sw1 | 3/8 | 1.2 | 1.86 |

## Weak points found automatically
Cards whose face-down banish (by your own costs) hurt the best line most (average best line without vs with that card banished):

| card | orders where it was banished | drop |
|---|---|---|
| Light and Darkness Ritual | 6/8 | 2.32 |
| Lacrima the Crimson Tears | 3/8 | 1.23 |
| Magician of Dark Chaos - Black Chaos | 3/8 | 1.1 |
| Black Chaos | 4/8 | 1.04 |
| Junoldo the Shadespirit Power Patron | 3/8 | 0.78 |
| Pendulum Treasure | 4/8 | 0.77 |
| Ars Magna - "Citrinitas" | 4/8 | 0.76 |
| Theorealize Liberation | 4/8 | 0.68 |
| Skull Archfiend of Chaos | 2/8 | 0.11 |
| Artmage Vandalism -Assault- | 5/8 | -0.04 |

Where the hand-designed lines broke (next step that no longer worked):
- sw1: Junoldo (3x)
- sw1: Past Lull (1x)
- sw1: Impasto (1x)

List changes proposed for the list test (data/proposals-findlist-1100.json):
- +1 Light and Darkness Ritual, −1 Plundered Power Patron Plane - Vidolia — Light and Darkness Ritual: best line 2.32 worse when a cost banished it (6 of 8 orders) — Small World
- +1 Lacrima the Crimson Tears, −1 Artmage Vandalism -Assault- — Lacrima the Crimson Tears: best line 1.23 worse when a cost banished it (3 of 8 orders) — Small World
- +1 Magician of Dark Chaos - Black Chaos, −1 Small World — Magician of Dark Chaos - Black Chaos: best line 1.1 worse when a cost banished it (3 of 8 orders) — Small World
- +1 Black Chaos, −1 Plundered Power Patron Plane - Vidolia — Black Chaos: best line 1.04 worse when a cost banished it (4 of 8 orders) — Small World
- +1 Light and Darkness Ritual — Light and Darkness Ritual: best line 2.32 worse when a cost banished it (6 of 8 orders) — Small World (add only: deck grows, up to 60)
- +1 Lacrima the Crimson Tears — Lacrima the Crimson Tears: best line 1.23 worse when a cost banished it (3 of 8 orders) — Small World (add only: deck grows, up to 60)
- +1 Magician of Dark Chaos - Black Chaos — Magician of Dark Chaos - Black Chaos: best line 1.1 worse when a cost banished it (3 of 8 orders) — Small World (add only: deck grows, up to 60)
- +1 Black Chaos — Black Chaos: best line 1.04 worse when a cost banished it (4 of 8 orders) — Small World (add only: deck grows, up to 60)

Effects the search had not used, tried on purpose (best result so far):
- Activate Griffoh: 4.67
- Normal Summon Theorealize Medius: 4.6
- Activate Nervedo the Shadebeast Power Patron: 4.18
- Activate Black Chaos: 3.43
- Activate Artmage Diactorus: 3.37
- Activate Vidolium the Unstable Power Patron of Unity: 3.18
- Activate Artmage Vandalism -Assault-: 2.73
- Activate Vidolium the Unstable Power Patron of Unity: 2.37

## Order 1: best 8.6 (ss_panama 6.8, elfnote null, despia null, angelechy 9.2, worst 6.8) — from opening lanes → new ending
Others: opening lanes → new ending → new ending 7.75 · opening lanes 6.86 · opening lanes → new ending → new early order 5.7 · sw1 2.17 · tries Activate Fiendsmith Engraver 0.72 · tries Activate Fiendsmith's Tract 0.58 · search 0.06 · opening lanes → new ending → new early order -1.51

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
14. Activate Nervedo the Shadebeast Power Patron (M1): Special Summon 1 "Nerva the Power Patron of Creation" from your Extra Deck
15. Selected Nerva the Power Patron of Creation (Extra Deck)
16. Yes
17. Selected Artmage Finmel (Deck)
18. Link Summon Purification Power Patron (Extra Deck)
19. select Medius the Pure (M3)
20. select Nerva the Power Patron of Creation (M1)
21. Activate Purification Power Patron (EMZ-L): Add 1 "Theorealize" card from your Deck to your hand
22. Activate Ars Magna of Purification and Corruption (banishment): Special Summon this card
23. Selected Theorealize Medius (Deck)
24. Activate Ars Magna of Purification and Corruption (M1): Banish Spells/Traps on the field
25. Selected Ars Magna - "Citrinitas" (S1)
26. Activate Theorealize Medius (hand): If a "Power Patron" card is on the field: You can Special Summon this card from your hand, then you can add 1 "Theorealize" Spell/Trap from your Deck to your hand
27. Yes
28. Selected Theorealize Liberation (Deck)
29. Activate Purification Power Patron (EMZ-L): Link Summon including this card as material
30. Selected Medicurius the Power Patron of Illusions (Extra Deck)
31. select Ars Magna of Purification and Corruption (M1)
32. Finish selection
33. Activate Medius the Pure (GY): Shuffle 1 monster from your hand or face-up field into the Deck, and if you do, Special Summon this card
34. Selected Ash Blossom & Joyous Spring (hand)
35. Activate Theorealize Liberation (hand): Add to your hand, or Special Summon, 1 monster from your Deck with 300 ATK/200 DEF
36. Selected Griffoh (Deck)
37. Add the card(s) to your hand
38. Activate Griffoh (hand): Activate 1 of these effects
39. Set 1 card that mentions "Light and Darkness Ritual"
40. Selected Mind Shuffle (Deck)
41. Activate Mind Shuffle (S1): activate this card
42. Yes
43. Selected Skull Archfiend of Chaos (Deck)
44. Selected Skull Archfiend of Chaos (hand)
45. Yes
46. Selected Light and Darkness Ritual (Deck)
47. Selected Magician of Dark Chaos - Black Chaos (Deck)
48. Activate Light and Darkness Ritual (GY): Add both this card and 1 card that mentions "Light and Darkness Ritual" from your GY to your hand
49. Selected Griffoh (GY)
50. Set Spell/Trap Light and Darkness Ritual
51. Activate Light and Darkness Ritual (S2): Ritual Summon 1 "Magician of Dark Chaos - Black Chaos" or "Black Luster Soldier - Soldier of Light and Darkness" from your hand
52. Selected Magician of Dark Chaos - Black Chaos (hand)
53. Selected Ars Magna of Purification and Corruption (GY) value 8
54. No
55. Yes
56. Selected Theorealize Liberation (GY)
57. Special Summon (procedure) Artmage Non-Finito (Extra Deck)
58. Selected Theorealize Liberation (hand)
59. Selected Artmage Finmel (M2)
60. Yes
61. Selected Artmage Impasto -Recapture- (Deck)
62. Activate Theorealize Liberation (GY): Treat 1 monster you control as a Tuner this turn
63. Selected Theorealize Medius (M3)
64. Activate Skull Archfiend of Chaos (GY): Special Summon this card
65. select Light and Darkness Ritual (GY)
66. select Artmage Finmel (GY)
67. select Purification Power Patron (GY)
68. Default order
69. Synchro Summon Chaos Angel (Extra Deck)
70. select Medius the Pure (M4)
71. select Skull Archfiend of Chaos (M5)
72. Yes
73. Special Summon 1 "Diactorus" monster
74. Selected Artmage Diactorus (Extra Deck)

End board:  LP 8000 | Hand 3 | Deck 30 | Extra 11 | GY 3 | Banished 10   Monsters: M1: Magician of Dark Chaos - Black Chaos Lv8 2800/2600 ATK || M2: Artmage Non-Finito Lv7 2400/1500 ATK || M3: Artmage Diactorus Lv8 2800/2500 ATK || M4: Chaos Angel Lv10 3500/2800 ATK || EMZ-L: Medicurius the Power Patron of Illusions L3↙↓↘ 3000    Spell/Trap: S1: Mind Shuffle || S2: Artmage Impasto -Recapture- (Set)   GY: Small World, Nerva the Power Patron of Creation, Skull Archfiend of Chaos   Banished: Ghost Ogre & Snow Rabbit (face-down), Artmage Graflare (face-down), Plundered Power Patron Plane - Vidolia (face-down), Artmage Finmel (face-down), Fiendsmith's Tract (face-down), Ars Magna - "Citrinitas", Ars Magna o

## Order 2: best 4.6 (ss_panama -0.75, elfnote 4.33, despia -0.15, angelechy 8.05, worst -0.75) — from tries Normal Summon Theorealize Medius
Others: opening lanes 3.98 · tries Activate Vidolium the Unstable Power Patron of Unity 3.18 · sw1 2.73 · sw1 1.14 · search 0.05

1. Activate Small World (hand): activate this card
2. Selected Droll & Lock Bird (hand)
3. Selected Griffoh (Deck)
4. Selected Medius the Pure (Deck)
5. Normal Summon Medius the Pure (hand)
6. Yes
7. Selected Nervedo the Shadebeast Power Patron (Deck)
8. Special Summon it
9. Activate Nervedo the Shadebeast Power Patron (M1): Special Summon 1 "Nerva the Power Patron of Creation" from your Extra Deck
10. Selected Nerva the Power Patron of Creation (Extra Deck)
11. Yes
12. Selected Junoldo the Shadespirit Power Patron (Deck)
13. Activate Junoldo the Shadespirit Power Patron (M2): Special Summon 1 "Junora the Power Patron of Tuning" from your Extra Deck
14. Selected Junora the Power Patron of Tuning (Extra Deck)
15. Yes
16. Selected Nervedo the Shadebeast Power Patron (Extra Deck)
17. Link Summon Purification Power Patron (Extra Deck)
18. select Medius the Pure (M3)
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
42. select Artmage Non-Finito (M4)
43. select Junora the Power Patron of Tuning (M2)
44. No

End board:  LP 8000 | Hand 2 | Deck 32 | Extra 9 | GY 5 | Banished 11   Monsters: M1: Nerva the Power Patron of Creation Lv10 3300/3300 ATK || M2: S:P Little Knight L2←→ 1600  || M3: Artmage Diactorus Lv8 2800/2500 ATK || EMZ-L: Medicurius the Power Patron of Illusions L3↙↓↘ 3000    Spell/Trap: S1: Artmage Impasto -Recapture- (Set)   GY: Small World, Nervedo the Shadebeast Power Patron, Purification Power Patron, Junora the Power Patron of Tuning, Artmage Non-Finito   Banished: Droll & Lock Bird (face-down), Griffoh (face-down), Light and Darkness Ritual (face-down), Theorealize Liberation (face-down), Fiendsmith Engraver (face-down), Artmage Graflare (face-down), Ars Magna - "Citrinitas" (face-down), 

## Order 3: best 4.57 (ss_panama 5.44, elfnote 4.53, despia -0.47, angelechy 8.77, worst -0.65) — from opening lanes → new ending
Others: opening lanes 3.91 · opening lanes → new ending → new early order 2.71 · tries Activate Junoldo the Shadespirit Power Patron 2.26 · sw1 1.73 · opening lanes → new ending 1.09 · search 0.73 · tries Activate Fiendsmith's Desirae 0.22 · opening lanes → new early order -2.25

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
14. Activate Nervedo the Shadebeast Power Patron (M4): Special Summon 1 "Nerva the Power Patron of Creation" from your Extra Deck
15. Selected Nerva the Power Patron of Creation (Extra Deck)
16. Yes
17. Selected Junoldo the Shadespirit Power Patron (Deck)
18. Activate Junoldo the Shadespirit Power Patron (M2): Special Summon 1 "Junora the Power Patron of Tuning" from your Extra Deck
19. Selected Junora the Power Patron of Tuning (Extra Deck)
20. Yes
21. Selected Nervedo the Shadebeast Power Patron (Extra Deck)
22. Link Summon Purification Power Patron (Extra Deck)
23. select Medius the Pure (M1)
24. select Junora the Power Patron of Tuning (M4)
25. Activate Purification Power Patron (EMZ-L): Add 1 "Theorealize" card from your Deck to your hand
26. Activate Ars Magna of Purification and Corruption (banishment): Special Summon this card
27. Selected Theorealize Medius (Deck)
28. Activate Ars Magna of Purification and Corruption (M4): Banish Spells/Traps on the field
29. Selected Ars Magna - "Citrinitas" (S1)
30. Activate Theorealize Medius (hand): If a "Power Patron" card is on the field: You can Special Summon this card from your hand, then you can add 1 "Theorealize" Spell/Trap from your Deck to your hand
31. Yes
32. Selected Theorealize Past Lull (Deck)
33. Activate Purification Power Patron (EMZ-L): Link Summon including this card as material
34. Selected Medicurius the Power Patron of Illusions (Extra Deck)
35. select Ars Magna of Purification and Corruption (M4)
36. Finish selection
37. Special Summon (procedure) Artmage Non-Finito (Extra Deck)
38. Selected Theorealize Past Lull (hand)
39. Selected Nervedo the Shadebeast Power Patron (hand)
40. Yes
41. Selected Artmage Impasto -Recapture- (Deck)
42. Activate Theorealize Past Lull (GY): Special Summon 1 Fusion, Synchro, or Xyz Monster from your GY
43. Selected Junora the Power Patron of Tuning (GY)
44. Activate Medius the Pure (GY): Shuffle 1 monster from your hand or face-up field into the Deck, and if you do, Special Summon this card
45. Selected Ash Blossom & Joyous Spring (hand)
46. Link Summon S:P Little Knight (Extra Deck)
47. select Junora the Power Patron of Tuning (M5)
48. select Medius the Pure (M1)
49. Yes
50. Special Summon 1 "Diactorus" monster
51. Selected Artmage Diactorus (Extra Deck)

End board:  LP 8000 | Hand 2 | Deck 30 | Extra 9 | GY 5 | Banished 12   Monsters: M1: Artmage Diactorus Lv8 2800/2500 ATK || M3: Nerva the Power Patron of Creation Lv10 3300/3300 ATK || M4: Artmage Non-Finito Lv7 2400/1500 ATK || M5: S:P Little Knight L2←→ 1600  || EMZ-R: Medicurius the Power Patron of Illusions L3↙↓↘ 3000    Spell/Trap: S1: Artmage Impasto -Recapture- (Set)   GY: Small World, Ars Magna of Purification and Corruption, Purification Power Patron, Nervedo the Shadebeast Power Patron, Junora the Power Patron of Tuning   Banished: Ghost Ogre & Snow Rabbit (face-down), Artmage Graflare (face-down), Theorealize Medius (face-down), Vidolium the Unstable Power Patron of Unity (face-down), Mind 

## Order 4: best 6.62 (ss_panama 8.82, elfnote 5.55, despia 1.05, angelechy 9.9, worst 1.05) — from search → new early order
Others: search 5.75 · search → new early order 5.55 · opening lanes 5.26 · search → new ending 3.34 · search → new ending 3.27 · sw1 1.81 · sw1 0.88 · tries Activate Fiendsmith Engraver 0.61 · tries Link Summon Fiendsmith's Requiem 0.01

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
14. Activate Nervedo the Shadebeast Power Patron (M1): Special Summon 1 "Nerva the Power Patron of Creation" from your Extra Deck
15. Selected Nerva the Power Patron of Creation (Extra Deck)
16. Yes
17. Selected Junoldo the Shadespirit Power Patron (Deck)
18. Activate Junoldo the Shadespirit Power Patron (M2): Special Summon 1 "Junora the Power Patron of Tuning" from your Extra Deck
19. Selected Junora the Power Patron of Tuning (Extra Deck)
20. Yes
21. Selected Nervedo the Shadebeast Power Patron (Extra Deck)
22. Link Summon Purification Power Patron (Extra Deck)
23. select Junora the Power Patron of Tuning (M2)
24. select Medius the Pure (M4)
25. Activate Purification Power Patron (EMZ-L): Add 1 "Theorealize" card from your Deck to your hand
26. Activate Ars Magna of Purification and Corruption (banishment): Special Summon this card
27. Selected Theorealize Medius (Deck)
28. Activate Ars Magna of Purification and Corruption (M4): Banish Spells/Traps on the field
29. Selected Ars Magna - "Citrinitas" (S1)
30. Activate Medius the Pure (GY): Shuffle 1 monster from your hand or face-up field into the Deck, and if you do, Special Summon this card
31. Selected Ash Blossom & Joyous Spring (hand)
32. Activate Purification Power Patron (EMZ-L): Link Summon including this card as material
33. Selected Medicurius the Power Patron of Illusions (Extra Deck)
34. select Ars Magna of Purification and Corruption (M4)
35. Finish selection
36. Activate Theorealize Medius (hand): If a "Power Patron" card is on the field: You can Special Summon this card from your hand, then you can add 1 "Theorealize" Spell/Trap from your Deck to your hand
37. Yes
38. Selected Theorealize Liberation (Deck)
39. Activate Theorealize Liberation (hand): Add to your hand, or Special Summon, 1 monster from your Deck with 300 ATK/200 DEF
40. Selected Griffoh (Deck)
41. Add the card(s) to your hand
42. Activate Theorealize Liberation (GY): Treat 1 monster you control as a Tuner this turn
43. Selected Theorealize Medius (M4)
44. Activate Griffoh (hand): Activate 1 of these effects
45. Set 1 card that mentions "Light and Darkness Ritual"
46. Selected Mind Shuffle (Deck)
47. Activate Mind Shuffle (S1): activate this card
48. Yes
49. Selected Skull Archfiend of Chaos (Deck)
50. Selected Skull Archfiend of Chaos (hand)
51. Yes
52. Selected Light and Darkness Ritual (Deck)
53. Selected Magician of Dark Chaos - Black Chaos (Deck)
54. Activate Light and Darkness Ritual (GY): Add both this card and 1 card that mentions "Light and Darkness Ritual" from your GY to your hand
55. Selected Griffoh (GY)
56. Activate Light and Darkness Ritual (hand): Ritual Summon 1 "Magician of Dark Chaos - Black Chaos" or "Black Luster Soldier - Soldier of Light and Darkness" from your hand
57. Selected Magician of Dark Chaos - Black Chaos (hand)
58. Selected Ars Magna of Purification and Corruption (GY) value 8
59. Yes
60. Special Summon 1 "Diactorus" monster
61. Activate Magician of Dark Chaos - Black Chaos (M3): Add 1 Spell from your GY to your hand
62. Selected Light and Darkness Ritual (GY)
63. Selected Artmage Diactorus (Extra Deck)
64. Special Summon (procedure) Artmage Non-Finito (Extra Deck)
65. Selected Light and Darkness Ritual (hand)
66. Selected Nervedo the Shadebeast Power Patron (hand)
67. Yes
68. Selected Artmage Impasto -Recapture- (Deck)

End board:  LP 8000 | Hand 3 | Deck 25 | Extra 10 | GY 6 | Banished 12   Monsters: M1: Nerva the Power Patron of Creation Lv10 3300/3300 ATK || M2: Medius the Pure Lv4 1800/1800 ATK || M3: Magician of Dark Chaos - Black Chaos Lv8 2800/2600 ATK || M4: Artmage Diactorus Lv8 2800/2500 ATK || M5: Artmage Non-Finito Lv7 2400/1500 ATK || EMZ-L: Medicurius the Power Patron of Illusions L3↙↓↘ 3000    Spell/Trap: S1: Mind Shuffle || S2: Artmage Impasto -Recapture- (Set)   GY: Small World, Junora the Power Patron of Tuning, Purification Power Patron, Skull Archfiend of Chaos, Light and Darkness Ritual, Nervedo the Shadebeast Power Patron   Banished: Ghost Ogre & Snow Rabbit (face-down), Artmage Graflare (face-do

## Order 5: best 7.25 (ss_panama 5.09, elfnote null, despia 6.38, angelechy 8.77, worst 5.09) — from search → new early order
Others: search 5.5 · search → new ending 2.68 · opening lanes 0.66 · search → new ending 0.46 · search → new early order -0.08 · sw1 -0.72 · tries Activate Fiendsmith's Sequence -1.42 · tries Normal Summon Lacrima the Crimson Tears -4.09

1. Activate Small World (hand): activate this card
2. Selected Droll & Lock Bird (hand)
3. Selected Black Chaos (Deck)
4. Selected Ars Magna of Purification and Corruption (Deck)
5. Activate Ars Magna of Purification and Corruption (hand): You can banish this card from your hand; add 1 "Ars Magna" Spell/Trap from your Deck to your hand
6. Selected Ars Magna - "Citrinitas" (Deck)
7. Set Spell/Trap Ars Magna - "Citrinitas"
8. Activate Ars Magna - "Citrinitas" (S1): activate this card
9. Activate Ars Magna - "Citrinitas" (S1): Add 1 "Medius" or "Ars Magna" monster from your Deck to your hand
10. Selected Medius the Pure (Deck)
11. Normal Summon Medius the Pure (hand)
12. Yes
13. Selected Nervedo the Shadebeast Power Patron (Deck)
14. Special Summon it
15. Activate Nervedo the Shadebeast Power Patron (M4): Special Summon 1 "Nerva the Power Patron of Creation" from your Extra Deck
16. Selected Nerva the Power Patron of Creation (Extra Deck)
17. Yes
18. Selected Junoldo the Shadespirit Power Patron (Deck)
19. Activate Junoldo the Shadespirit Power Patron (M1): Special Summon 1 "Junora the Power Patron of Tuning" from your Extra Deck
20. Selected Junora the Power Patron of Tuning (Extra Deck)
21. Yes
22. Selected Nervedo the Shadebeast Power Patron (Extra Deck)
23. Link Summon Purification Power Patron (Extra Deck)
24. select Medius the Pure (M3)
25. select Junora the Power Patron of Tuning (EMZ-R)
26. Activate Ars Magna of Purification and Corruption (banishment): Special Summon this card
27. Activate Purification Power Patron (EMZ-L): Add 1 "Theorealize" card from your Deck to your hand
28. Selected Theorealize Medius (Deck)
29. Activate Medius the Pure (GY): Shuffle 1 monster from your hand or face-up field into the Deck, and if you do, Special Summon this card
30. Selected Ash Blossom & Joyous Spring (hand)
31. Activate Purification Power Patron (EMZ-L): Link Summon including this card as material
32. Activate Ars Magna of Purification and Corruption (M1): Banish Spells/Traps on the field
33. Selected Ars Magna - "Citrinitas" (S1)
34. Selected Medicurius the Power Patron of Illusions (Extra Deck)
35. select Medius the Pure (M2)
36. Finish selection
37. Activate Theorealize Medius (hand): If a "Power Patron" card is on the field: You can Special Summon this card from your hand, then you can add 1 "Theorealize" Spell/Trap from your Deck to your hand
38. Yes
39. Selected Theorealize Past Lull (Deck)
40. Special Summon (procedure) Artmage Non-Finito (Extra Deck)
41. Selected Theorealize Past Lull (hand)
42. Selected Nervedo the Shadebeast Power Patron (hand)
43. Yes
44. Selected Artmage Impasto -Recapture- (Deck)
45. Activate Theorealize Past Lull (GY): Special Summon 1 Fusion, Synchro, or Xyz Monster from your GY
46. Selected Junora the Power Patron of Tuning (GY)
47. Link Summon S:P Little Knight (Extra Deck)
48. select Junora the Power Patron of Tuning (M2)
49. select Ars Magna of Purification and Corruption (M1)
50. Yes
51. Selected Purification Power Patron (GY)
52. Yes
53. Special Summon 1 "Diactorus" monster
54. Selected Artmage Diactorus (Extra Deck)

End board:  LP 8000 | Hand 2 | Deck 30 | Extra 9 | GY 4 | Banished 13   Monsters: M1: S:P Little Knight L2←→ 1600  || M2: Artmage Diactorus Lv8 2800/2500 ATK || M3: Artmage Non-Finito Lv7 2400/1500 ATK || M4: Nerva the Power Patron of Creation Lv10 3300/3300 ATK || EMZ-L: Medicurius the Power Patron of Illusions L3↙↓↘ 3000    Spell/Trap: S1: Artmage Impasto -Recapture- (Set)   GY: Small World, Nervedo the Shadebeast Power Patron, Ars Magna of Purification and Corruption, Junora the Power Patron of Tuning   Banished: Droll & Lock Bird (face-down), Black Chaos (face-down), Ars Magna of Infinity and Finity (face-down), Skull Archfiend of Chaos (face-down), Fiendsmith's Tract (face-down), Vidolium the Unst

## Order 6: best 5.21 (ss_panama 5.71, elfnote 5.34, despia 2.75, angelechy 7.09, worst 0.75) — from sw1 (seed followed 31/37 steps)
Others: sw1 → new ending 5.05 · search 4.83 · sw1 → new early order 4.83 · opening lanes 4.45 · sw1 → new ending 4.11 · sw1 → new early order 1.68 · tries Activate Mind Shuffle 1.03 · tries Activate Prohibited Power Patron Portal - Terminus 0.22

1. Activate Small World (hand): activate this card
2. Selected Droll & Lock Bird (hand)
3. Selected Griffoh (Deck)
4. Selected Medius the Pure (Deck)
5. Normal Summon Medius the Pure (hand)
6. Yes
7. Selected Nervedo the Shadebeast Power Patron (Deck)
8. Special Summon it
9. Activate Nervedo the Shadebeast Power Patron (M2): Special Summon 1 "Nerva the Power Patron of Creation" from your Extra Deck
10. Selected Nerva the Power Patron of Creation (Extra Deck)
11. Yes
12. Selected Junoldo the Shadespirit Power Patron (Deck)
13. Activate Junoldo the Shadespirit Power Patron (M2): Special Summon 1 "Junora the Power Patron of Tuning" from your Extra Deck
14. Selected Junora the Power Patron of Tuning (Extra Deck)
15. Yes
16. Selected Nervedo the Shadebeast Power Patron (Extra Deck)
17. Link Summon Purification Power Patron (Extra Deck)
18. select Medius the Pure (M1)
19. select Junora the Power Patron of Tuning (M2)
20. Yes
21. Selected Theorealize Medius (Deck)
22. Activate Theorealize Medius (hand): If a "Power Patron" card is on the field: You can Special Summon this card from your hand, then you can add 1 "Theorealize" Spell/Trap from your Deck to your hand
23. Yes
24. Selected Theorealize Past Lull (Deck)
25. Special Summon (procedure) Artmage Non-Finito (Extra Deck)
26. Selected Theorealize Past Lull (hand)
27. Selected Nervedo the Shadebeast Power Patron (hand)
28. Yes
29. Selected Ars Magna - "Citrinitas" (Deck)
30. Activate Theorealize Past Lull (GY): Special Summon 1 Fusion, Synchro, or Xyz Monster from your GY
31. Selected Junora the Power Patron of Tuning (GY)
32. Activate Ars Magna - "Citrinitas" (S1): activate this card
33. Activate Purification Power Patron (EMZ-L): Link Summon including this card as material
34. Selected Medicurius the Power Patron of Illusions (Extra Deck)
35. select Junora the Power Patron of Tuning (M2)
36. Finish selection
37. Activate Ars Magna - "Citrinitas" (S1): Add 1 "Medius" or "Ars Magna" monster from your Deck to your hand
38. Selected Ars Magna of Infinity and Finity (Deck)
39. Activate Ars Magna of Infinity and Finity (hand): You can banish this card from your hand; add 1 non-Warrior "Ars Magna" monster from your Deck to your hand
40. Selected Ars Magna of Purification and Corruption (Deck)
41. Yes
42. Special Summon 1 "Diactorus" monster
43. Selected Artmage Diactorus (Extra Deck)
44. Yes
45. Activate Ars Magna of Purification and Corruption (hand): You can banish this card from your hand; add 1 "Ars Magna" Spell/Trap from your Deck to your hand
46. Selected Ars Magna - "Citrinitas" (Deck)
47. Activate Artmage Diactorus (M3): Change the battle position of 1 monster on the field
48. Selected Ars Magna of Infinity and Finity (M1)
49. Activate Medius the Pure (GY): Shuffle 1 monster from your hand or face-up field into the Deck, and if you do, Special Summon this card
50. Selected Ash Blossom & Joyous Spring (hand)
51. Link Summon S:P Little Knight (Extra Deck)
52. select Medius the Pure (M2)
53. select Ars Magna of Infinity and Finity (M1)
54. Yes

End board:  LP 8000 | Hand 3 | Deck 29 | Extra 9 | GY 5 | Banished 11   Monsters: M1: S:P Little Knight L2←→ 1600  || M2: Ars Magna of Purification and Corruption Lv8 1000/2100 ATK || M3: Artmage Diactorus Lv8 2800/2500 ATK || M4: Artmage Non-Finito Lv7 2400/1500 ATK || M5: Nerva the Power Patron of Creation Lv10 3300/3300 ATK || EMZ-L: Medicurius the Power Patron of Illusions L3↙↓↘ 9000    Spell/Trap: S1: Ars Magna - "Citrinitas"   GY: Small World, Nervedo the Shadebeast Power Patron, Junora the Power Patron of Tuning, Purification Power Patron, Ars Magna of Infinity and Finity   Banished: Droll & Lock Bird (face-down), Griffoh (face-down), Light and Darkness Ritual (face-down), Artmage Vandalism -Ass

## Order 7: best 5.77 (ss_panama null, elfnote null, despia 2.65, angelechy 8.9, worst -2.15) — from opening lanes
Others: opening lanes → new ending 4.74 · opening lanes → new ending 4.1 · search 3.06 · sw1 1.57 · sw1 0.99 · tries Activate Fiendsmith's Requiem 0.74 · opening lanes → new early order 0.14 · tries Activate Fiendsmith's Sequence -0.17

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
14. Activate Nervedo the Shadebeast Power Patron (M4): Special Summon 1 "Nerva the Power Patron of Creation" from your Extra Deck
15. Selected Nerva the Power Patron of Creation (Extra Deck)
16. Yes
17. Selected Junoldo the Shadespirit Power Patron (Deck)
18. Activate Junoldo the Shadespirit Power Patron (M5): Special Summon 1 "Junora the Power Patron of Tuning" from your Extra Deck
19. Selected Junora the Power Patron of Tuning (Extra Deck)
20. Yes
21. Selected Nervedo the Shadebeast Power Patron (Extra Deck)
22. Link Summon Purification Power Patron (Extra Deck)
23. select Medius the Pure (M3)
24. select Junora the Power Patron of Tuning (EMZ-R)
25. Activate Purification Power Patron (EMZ-L): Add 1 "Theorealize" card from your Deck to your hand
26. Activate Ars Magna of Purification and Corruption (banishment): Special Summon this card
27. Selected Theorealize Medius (Deck)
28. Activate Medius the Pure (GY): Shuffle 1 monster from your hand or face-up field into the Deck, and if you do, Special Summon this card
29. Selected Ash Blossom & Joyous Spring (hand)
30. Activate Purification Power Patron (EMZ-L): Link Summon including this card as material
31. Activate Ars Magna of Purification and Corruption (M2): Banish Spells/Traps on the field
32. Selected Ars Magna - "Citrinitas" (S1)
33. Selected Medicurius the Power Patron of Illusions (Extra Deck)
34. select Ars Magna of Purification and Corruption (M2)
35. Finish selection
36. Activate Theorealize Medius (hand): If a "Power Patron" card is on the field: You can Special Summon this card from your hand, then you can add 1 "Theorealize" Spell/Trap from your Deck to your hand
37. Yes
38. Selected Theorealize Past Lull (Deck)
39. Special Summon (procedure) Artmage Non-Finito (Extra Deck)
40. Selected Theorealize Past Lull (hand)
41. Selected Nervedo the Shadebeast Power Patron (hand)
42. Yes
43. Selected Artmage Impasto -Recapture- (Deck)
44. Activate Theorealize Past Lull (GY): Special Summon 1 Fusion, Synchro, or Xyz Monster from your GY
45. Selected Junora the Power Patron of Tuning (GY)
46. Link Summon S:P Little Knight (Extra Deck)
47. select Medius the Pure (M3)
48. select Junora the Power Patron of Tuning (M5)
49. Yes
50. Special Summon 1 "Diactorus" monster
51. Activate S:P Little Knight (M5): Banish 1 card on the field or GY
52. Selected Small World (GY)
53. Selected Artmage Diactorus (Extra Deck)

End board:  LP 8000 | Hand 2 | Deck 30 | Extra 9 | GY 4 | Banished 13   Monsters: M2: Artmage Non-Finito Lv7 2400/1500 ATK || M3: Artmage Diactorus Lv8 2800/2500 ATK || M4: Nerva the Power Patron of Creation Lv10 3300/3300 ATK || M5: S:P Little Knight L2←→ 1600  || EMZ-R: Medicurius the Power Patron of Illusions L3↙↓↘ 3000    Spell/Trap: S1: Artmage Impasto -Recapture- (Set)   GY: Ars Magna of Purification and Corruption, Purification Power Patron, Nervedo the Shadebeast Power Patron, Junora the Power Patron of Tuning   Banished: Ghost Ogre & Snow Rabbit (face-down), Artmage Graflare (face-down), Magician of Dark Chaos - Black Chaos (face-down), Lacrima the Crimson Tears (face-down), Infinite Impermane

## Order 8: best 4.33 (ss_panama 3.88, elfnote 0.33, despia 0.05, angelechy 7.25, worst 0.05) — from opening lanes
Others: tries Activate Black Chaos 3.43 · search 2.3 · sw1 0.93 · tries Activate Mind Shuffle -0.06

1. Activate Small World (hand): activate this card
2. Selected Droll & Lock Bird (hand)
3. Selected Griffoh (Deck)
4. Selected Medius the Pure (Deck)
5. Normal Summon Medius the Pure (hand)
6. Yes
7. Selected Nervedo the Shadebeast Power Patron (Deck)
8. Special Summon it
9. Activate Nervedo the Shadebeast Power Patron (M4): Special Summon 1 "Nerva the Power Patron of Creation" from your Extra Deck
10. Selected Nerva the Power Patron of Creation (Extra Deck)
11. Yes
12. Selected Artmage Finmel (Deck)
13. Link Summon Purification Power Patron (Extra Deck)
14. select Medius the Pure (M1)
15. select Nerva the Power Patron of Creation (EMZ-R)
16. Yes
17. Selected Theorealize Medius (Deck)
18. Activate Theorealize Medius (hand): If a "Power Patron" card is on the field: You can Special Summon this card from your hand, then you can add 1 "Theorealize" Spell/Trap from your Deck to your hand
19. Yes
20. Selected Theorealize Liberation (Deck)
21. Activate Medius the Pure (GY): Shuffle 1 monster from your hand or face-up field into the Deck, and if you do, Special Summon this card
22. Selected Ash Blossom & Joyous Spring (hand)
23. Activate Theorealize Liberation (hand): Add to your hand, or Special Summon, 1 monster from your Deck with 300 ATK/200 DEF
24. Activate Purification Power Patron (EMZ-L): Link Summon including this card as material
25. Selected Medicurius the Power Patron of Illusions (Extra Deck)
26. select Medius the Pure (M5)
27. Finish selection
28. Selected Nervedo the Shadebeast Power Patron (Deck)
29. Special Summon it
30. Yes
31. Add 1 "Ars Magna" card from your Deck to your hand
32. Selected Ars Magna of Infinity and Finity (Deck)
33. Activate Ars Magna of Infinity and Finity (hand): You can banish this card from your hand; add 1 non-Warrior "Ars Magna" monster from your Deck to your hand
34. Selected Ars Magna of Purification and Corruption (Deck)
35. Activate Ars Magna of Purification and Corruption (hand): You can banish this card from your hand; add 1 "Ars Magna" Spell/Trap from your Deck to your hand
36. Selected Ars Magna - "Citrinitas" (Deck)
37. Special Summon (procedure) Artmage Non-Finito (Extra Deck)
38. Selected Ars Magna - "Citrinitas" (hand)
39. Selected Nervedo the Shadebeast Power Patron (M3)
40. Activate Artmage Non-Finito (M3): Set 1 "Artmage" Spell/Trap from your Deck
41. Activate Ars Magna of Infinity and Finity (banishment): Special Summon this card
42. Selected Artmage Impasto -Recapture- (Deck)
43. Link Summon Purification Power Patron (Extra Deck)
44. select Ars Magna of Infinity and Finity (M5)
45. select Theorealize Medius (M2)
46. Yes
47. Link Summon S:P Little Knight (Extra Deck)
48. select Purification Power Patron (M5)
49. select Ars Magna of Purification and Corruption (M1)
50. No

End board:  LP 8000 | Hand 2 | Deck 31 | Extra 11 | GY 8 | Banished 7   Monsters: M3: Artmage Non-Finito Lv7 2400/1500 ATK || M4: Artmage Finmel Lv7 2400/1500 ATK || M5: S:P Little Knight L2←→ 1600  || EMZ-R: Medicurius the Power Patron of Illusions L3↙↓↘ 9000    Spell/Trap: S1: Artmage Impasto -Recapture- (Set)   GY: Small World, Nerva the Power Patron of Creation, Purification Power Patron, Ars Magna - "Citrinitas", Theorealize Medius, Ars Magna of Infinity and Finity, Ars Magna of Purification and Corruption, Purification Power Patron   Banished: Droll & Lock Bird (face-down), Griffoh (face-down), Apprentice Illusion Magician (face-down), Junoldo the Shadespirit Power Patron (face-down), Vidolium th

