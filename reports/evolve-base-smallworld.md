# Evolved lines — Small World, Ash Blossom & Joyous Spring, Ash Blossom & Joyous Spring, Droll & Lock Bird, Ghost Ogre & Snow Rabbit (findlist-1100)
2026-11-25T06:45:37.909Z

8 deck orders (different face-down banishes / draws), 3 opponent hands x o_ss_panama + o_elfnote + o_despia + o_angelechy per line, 1 min searches, 3 mutation rounds.
Fitness = average margin after their turn (what you keep minus what they build; −10 more if they OTK). Higher is better.

**Best line per deck order: average 3.43** (worst order 1.03). Winner came from: opening lanes 1, sw1 → new ending 1, search → new ending 2, search 1, search → new early order → new ending 1, opening lanes → new early order 1, sw1 → new early order → new ending 1

| seed line | works as written | its score when it works | seed start + search finish (all orders) |
|---|---|---|---|
| sw1 | 3/8 | 1.16 | 0.43 |

## Weak points found automatically
Cards whose face-down banish (by your own costs) hurt the best line most (average best line without vs with that card banished):

| card | orders where it was banished | drop |
|---|---|---|
| Artmage Graflare | 3/8 | 1.45 |
| Theorealize Liberation | 2/8 | 0.85 |
| Ars Magna - "Citrinitas" | 2/8 | 0.85 |
| Dark Magical Circle | 3/8 | 0.06 |
| Plundered Power Patron Plane - Vidolia | 3/8 | 0 |
| Theorealize Medius | 6/8 | -0.11 |
| Artmage Finmel | 4/8 | -0.12 |
| Ghost Ogre & Snow Rabbit | 4/8 | -0.52 |
| Prohibited Power Patron Portal - Terminus | 2/8 | -0.53 |
| Medius the Pure | 6/8 | -0.55 |

Where the hand-designed lines broke (next step that no longer worked):
- sw1: Junoldo (3x)
- sw1: Past Lull (1x)
- sw1: Impasto (1x)

List changes proposed for the list test (data/proposals-findlist-1100.json):
- +1 Artmage Graflare, −1 Plundered Power Patron Plane - Vidolia — Artmage Graflare: best line 1.45 worse when a cost banished it (3 of 8 orders) — Small World
- +1 Theorealize Liberation, −1 Artmage Vandalism -Assault- — Theorealize Liberation: best line 0.85 worse when a cost banished it (2 of 8 orders) — Small World
- +1 Ars Magna - "Citrinitas", −1 Small World — Ars Magna - "Citrinitas": best line 0.85 worse when a cost banished it (2 of 8 orders) — Small World
- +1 Artmage Graflare — Artmage Graflare: best line 1.45 worse when a cost banished it (3 of 8 orders) — Small World (add only: deck grows, up to 60)
- +1 Theorealize Liberation — Theorealize Liberation: best line 0.85 worse when a cost banished it (2 of 8 orders) — Small World (add only: deck grows, up to 60)
- +1 Ars Magna - "Citrinitas" — Ars Magna - "Citrinitas": best line 0.85 worse when a cost banished it (2 of 8 orders) — Small World (add only: deck grows, up to 60)

Effects the search had not used, tried on purpose (best result so far):
- Activate Griffoh: 4.67
- Activate Nervedo the Shadebeast Power Patron: 4.18
- Activate Artmage Diactorus: 3.37
- Activate Artmage Vandalism -Assault-: 2.73
- Normal Summon Theorealize Medius: 2.4
- Activate Vidolium the Unstable Power Patron of Unity: 2.37
- Activate Nervedo the Shadebeast Power Patron: 2.34
- Activate Junoldo the Shadespirit Power Patron: 2.14

## Order 1: best 3.52 (ss_panama 1.65, elfnote null, despia 2.31, angelechy 4.95, worst 0.5) — from opening lanes
Others: opening lanes → new early order 2.62 · tries Normal Summon Theorealize Medius 2.4 · opening lanes → new ending 1.88 · opening lanes → new ending 0.95 · tries Activate Vidolium the Unstable Power Patron of Unity 0.53 · sw1 0.1 · search 0.03

1. Set Spell/Trap Small World
2. Activate Small World (S1): activate this card
3. Selected Droll & Lock Bird (hand)
4. Selected Magician of Dark Chaos - Black Chaos (Deck)
5. Selected Medius the Pure (Deck)
6. Normal Summon Medius the Pure (hand)
7. Yes
8. Selected Nervedo the Shadebeast Power Patron (Deck)
9. Special Summon it
10. Activate Nervedo the Shadebeast Power Patron (M1): Special Summon 1 "Nerva the Power Patron of Creation" from your Extra Deck
11. Selected Nerva the Power Patron of Creation (Extra Deck)
12. Yes
13. Selected Artmage Finmel (Deck)
14. Link Summon Purification Power Patron (Extra Deck)
15. select Medius the Pure (M3)
16. select Nerva the Power Patron of Creation (EMZ-L)
17. Yes
18. Selected Theorealize Medius (Deck)
19. Activate Medius the Pure (GY): Shuffle 1 monster from your hand or face-up field into the Deck, and if you do, Special Summon this card
20. Selected Ash Blossom & Joyous Spring (hand)
21. Activate Theorealize Medius (hand): If a "Power Patron" card is on the field: You can Special Summon this card from your hand, then you can add 1 "Theorealize" Spell/Trap from your Deck to your hand
22. Yes
23. Selected Theorealize Liberation (Deck)
24. Activate Theorealize Liberation (hand): Add to your hand, or Special Summon, 1 monster from your Deck with 300 ATK/200 DEF
25. Activate Purification Power Patron (EMZ-R): Link Summon including this card as material
26. Selected Medicurius the Power Patron of Illusions (Extra Deck)
27. select Medius the Pure (M3)
28. Finish selection
29. Selected Griffoh (Deck)
30. Special Summon it
31. Yes
32. Special Summon 1 "Diactorus" monster
33. Selected Artmage Diactorus (Extra Deck)

End board:  LP 8000 | Hand 2 | Deck 35 | Extra 12 | GY 4 | Banished 7   Monsters: M3: Artmage Diactorus Lv8 2800/2500 ATK || M4: Artmage Finmel Lv7 2400/1500 ATK || M5: Griffoh Lv1 300/200 ATK || EMZ-R: Medicurius the Power Patron of Illusions L3↙↓↘ 3000    Spell/Trap: (none)   GY: Small World, Nerva the Power Patron of Creation, Purification Power Patron, Theorealize Liberation   Banished: Droll & Lock Bird (face-down), Magician of Dark Chaos - Black Chaos (face-down), Artmage Finmel (face-down), Fiendsmith Engraver (face-down), Vidolium the Unstable Power Patron of Unity (face-down), Medius the Pure, Theorealize Medius   Hand: Ash Blossom & Joyous Spring, Ghost Ogre & Snow Rabbit   Extra Deck: 12 car

## Order 2: best 2.41 (ss_panama 1.45, elfnote 1.3, despia 1.5, angelechy 4.78, worst -0.6) — from sw1 → new ending
Others: sw1 1.69 · sw1 → new ending → new ending 1.66 · sw1 1.12 · sw1 → new ending → new early order 0.58 · tries Activate Black Chaos -0.49 · opening lanes -0.84 · search -0.95 · tries Activate Fiendsmith Engraver -1.26

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
21. Selected Theorealize Past Lull (Deck)
22. Special Summon (procedure) Artmage Non-Finito (Extra Deck)
23. Selected Theorealize Past Lull (hand)
24. Selected Nervedo the Shadebeast Power Patron (hand)
25. Yes
26. Selected Artmage Impasto -Recapture- (Deck)
27. Activate Medius the Pure (GY): Shuffle 1 monster from your hand or face-up field into the Deck, and if you do, Special Summon this card
28. Selected Ash Blossom & Joyous Spring (hand)
29. Activate Theorealize Past Lull (GY): Special Summon 1 Fusion, Synchro, or Xyz Monster from your GY
30. Selected Junora the Power Patron of Tuning (GY)
31. Activate Purification Power Patron (EMZ-R): Link Summon including this card as material
32. Selected Medicurius the Power Patron of Illusions (Extra Deck)
33. select Medius the Pure (M1)
34. Finish selection

End board:  LP 8000 | Hand 2 | Deck 33 | Extra 11 | GY 3 | Banished 10   Monsters: M3: Artmage Non-Finito Lv7 2400/1500 ATK || M4: Junora the Power Patron of Tuning Lv10 3100/3800 ATK || M5: Nerva the Power Patron of Creation Lv10 3300/3300 ATK || EMZ-R: Medicurius the Power Patron of Illusions L3↙↓↘ 3000    Spell/Trap: S1: Artmage Impasto -Recapture- (Set)   GY: Small World, Nervedo the Shadebeast Power Patron, Purification Power Patron   Banished: Droll & Lock Bird (face-down), Griffoh (face-down), Light and Darkness Ritual (face-down), Theorealize Liberation (face-down), Fiendsmith Engraver (face-down), Artmage Graflare (face-down), Ars Magna - "Citrinitas" (face-down), Artmage Finmel (face-down), T

## Order 3: best 1.03 (ss_panama 1.06, elfnote 1.1, despia 1.29, angelechy 0.8, worst -0.45) — from search → new ending
Others: search → new ending → new ending 0.82 · search → new ending → new early order 0.8 · search 0.64 · tries Special Summon (procedure) Artmage Non-Finito 0.54 · opening lanes 0.22 · tries Activate Mind Shuffle -0.11 · sw1 -1.76

1. Set Spell/Trap Small World
2. Activate Small World (S1): activate this card
3. Selected Ash Blossom & Joyous Spring (hand)
4. Selected Medius the Pure (Deck)
5. Selected Lacrima the Crimson Tears (Deck)
6. Normal Summon Lacrima the Crimson Tears (hand)
7. Yes
8. Selected Fiendsmith Engraver (Deck)
9. Link Summon Fiendsmith's Requiem (Extra Deck)
10. select Lacrima the Crimson Tears (M4)
11. Activate Fiendsmith Engraver (GY): Special Summon this card
12. Selected Lacrima the Crimson Tears (GY)
13. Activate Fiendsmith's Requiem (EMZ-L): Special Summon 1 "Fiendsmith" monster
14. Selected Lacrima the Crimson Tears (Deck)
15. Link Summon Fiendsmith's Sequence (Extra Deck)
16. select Lacrima the Crimson Tears (M1)
17. select Fiendsmith Engraver (M3)
18. Activate Fiendsmith's Sequence (EMZ-L): Fusion Summon 1 Fiend Fusion Monster
19. Selected Fiendsmith's Desirae (Extra Deck)
20. select Fiendsmith's Requiem (GY)
21. select Fiendsmith Engraver (GY)
22. select Lacrima the Crimson Tears (GY)
23. Activate Fiendsmith's Sequence (EMZ-L): Equip this card to 1 non-Link LIGHT Fiend you control
24. Selected Fiendsmith's Desirae (M1)

End board:  LP 8000 | Hand 3 | Deck 43 | Extra 13 | GY 1 | Banished 2   Monsters: M1: Fiendsmith's Desirae Lv9 2800/2400 ATK   Spell/Trap: S1: Fiendsmith's Sequence   GY: Small World   Banished: Ash Blossom & Joyous Spring (face-down), Medius the Pure (face-down)   Hand: Ash Blossom & Joyous Spring, Ghost Ogre & Snow Rabbit, Droll & Lock Bird   Extra Deck: 13 cards (view --ed to list)

## Order 4: best 4.13 (ss_panama 4.08, elfnote 4.67, despia 3.69, angelechy 4.08, worst 2.22) — from search
Others: search → new ending 3.06 · opening lanes 1.25 · sw1 1.2 · search → new early order 1.09 · tries Normal Summon Lacrima the Crimson Tears 0.86 · sw1 0.63 · search → new ending 0.07 · tries Activate Junoldo the Shadespirit Power Patron -1.69

1. Set Spell/Trap Small World
2. Activate Small World (S1): activate this card
3. Selected Ghost Ogre & Snow Rabbit (hand)
4. Selected Artmage Graflare (Deck)
5. Selected Ars Magna of Purification and Corruption (Deck)
6. Activate Ars Magna of Purification and Corruption (hand): You can banish this card from your hand; add 1 "Ars Magna" Spell/Trap from your Deck to your hand
7. Selected Ars Magna - "Citrinitas" (Deck)
8. Set Spell/Trap Ars Magna - "Citrinitas"
9. Activate Ars Magna - "Citrinitas" (S1): activate this card
10. Activate Ars Magna - "Citrinitas" (S1): Add 1 "Medius" or "Ars Magna" monster from your Deck to your hand
11. Selected Medius the Pure (Deck)
12. Normal Summon Medius the Pure (hand)
13. Yes
14. Selected Nervedo the Shadebeast Power Patron (Deck)
15. Special Summon it
16. Activate Nervedo the Shadebeast Power Patron (M4): Special Summon 1 "Nerva the Power Patron of Creation" from your Extra Deck
17. Selected Nerva the Power Patron of Creation (Extra Deck)
18. Yes
19. Selected Artmage Finmel (Deck)
20. Link Summon Purification Power Patron (Extra Deck)
21. select Nerva the Power Patron of Creation (EMZ-R)
22. select Medius the Pure (M1)
23. Activate Ars Magna of Purification and Corruption (banishment): Special Summon this card
24. Activate Purification Power Patron (EMZ-R): Add 1 "Theorealize" card from your Deck to your hand
25. Selected Theorealize Medius (Deck)
26. Activate Theorealize Medius (hand): If a "Power Patron" card is on the field: You can Special Summon this card from your hand, then you can add 1 "Theorealize" Spell/Trap from your Deck to your hand
27. Activate Ars Magna of Purification and Corruption (M1): Banish Spells/Traps on the field
28. Selected Ars Magna - "Citrinitas" (S1)
29. Yes
30. Selected Theorealize Past Lull (Deck)
31. Special Summon (procedure) Artmage Non-Finito (Extra Deck)
32. Selected Theorealize Past Lull (hand)
33. Selected Artmage Finmel (M4)
34. Yes
35. Activate Purification Power Patron (EMZ-R): Link Summon including this card as material
36. Selected S:P Little Knight (Extra Deck)
37. select Ars Magna of Purification and Corruption (M1)
38. Selected Artmage Impasto -Recapture- (Deck)
39. Yes
40. Selected Artmage Finmel (GY)
41. Yes
42. Special Summon 1 "Diactorus" monster
43. Selected Artmage Diactorus (Extra Deck)

End board:  LP 8000 | Hand 3 | Deck 32 | Extra 11 | GY 6 | Banished 8   Monsters: M1: Artmage Diactorus Lv8 2800/2500 ATK || M3: Artmage Non-Finito Lv7 2400/1500 ATK || EMZ-L: S:P Little Knight L2←→ 1600    Spell/Trap: S1: Artmage Impasto -Recapture- (Set)   GY: Small World, Medius the Pure, Nerva the Power Patron of Creation, Theorealize Past Lull, Ars Magna of Purification and Corruption, Purification Power Patron   Banished: Ghost Ogre & Snow Rabbit (face-down), Artmage Graflare (face-down), Pendulum Treasure (face-down), Ars Magna of Infinity and Finity (face-down), Prohibited Power Patron Portal - Terminus (face-down), Ars Magna - "Citrinitas", Artmage Finmel, Theorealize Medius   Hand: Droll & Lo

## Order 5: best 3.92 (ss_panama -0.21, elfnote 0.78, despia -0.4, angelechy 9.15, worst -1.82) — from search → new early order → new ending
Others: search → new early order 3.87 · search 2.73 · opening lanes -0.03 · tries Activate Prohibited Power Patron Portal - Terminus -0.17 · search → new ending -0.17 · tries Activate Fiendsmith's Tract -0.4 · sw1 -1.87

1. Activate Small World (hand): activate this card
2. Selected Ghost Ogre & Snow Rabbit (hand)
3. Selected Artmage Finmel (Deck)
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
16. Activate Nervedo the Shadebeast Power Patron (M4): Special Summon 1 "Nerva the Power Patron of Creation" from your Extra Deck
17. Selected Nerva the Power Patron of Creation (Extra Deck)
18. Yes
19. Activate Ars Magna of Infinity and Finity (banishment): Special Summon this card
20. Selected Junoldo the Shadespirit Power Patron (Deck)
21. Link Summon Purification Power Patron (Extra Deck)
22. select Junoldo the Shadespirit Power Patron (M1)
23. select Ars Magna of Infinity and Finity (M5)
24. Yes
25. Activate Ars Magna of Purification and Corruption (banishment): Special Summon this card
26. Activate Purification Power Patron (EMZ-R): Link Summon including this card as material
27. Selected Medicurius the Power Patron of Illusions (Extra Deck)
28. select Medius the Pure (M3)
29. Finish selection
30. Selected Nervedo the Shadebeast Power Patron (Extra Deck)
31. Link Summon Purification Power Patron (Extra Deck)
32. select Ars Magna of Purification and Corruption (M5)
33. select Nerva the Power Patron of Creation (M4)
34. Yes
35. Selected Theorealize Medius (Deck)
36. Activate Medius the Pure (GY): Shuffle 1 monster from your hand or face-up field into the Deck, and if you do, Special Summon this card
37. Selected Ash Blossom & Joyous Spring (hand)
38. Activate Theorealize Medius (hand): If a "Power Patron" card is on the field: You can Special Summon this card from your hand, then you can add 1 "Theorealize" Spell/Trap from your Deck to your hand
39. Yes
40. Selected Theorealize Liberation (Deck)
41. Activate Theorealize Liberation (hand): Add to your hand, or Special Summon, 1 monster from your Deck with 300 ATK/200 DEF
42. Selected Griffoh (Deck)
43. Add the card(s) to your hand
44. Activate Griffoh (hand): Activate 1 of these effects
45. Set 1 card that mentions "Light and Darkness Ritual"
46. Selected Mind Shuffle (Deck)
47. Activate Mind Shuffle (S2): activate this card
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
58. Selected Ars Magna of Infinity and Finity (GY) value 8
59. Yes
60. Special Summon 1 "Diactorus" monster
61. Activate Magician of Dark Chaos - Black Chaos (M2): Add 1 Spell from your GY to your hand
62. Selected Small World (GY)
63. Selected Artmage Diactorus (Extra Deck)
64. Special Summon (procedure) Artmage Non-Finito (Extra Deck)
65. Selected Small World (hand)
66. Selected Nervedo the Shadebeast Power Patron (hand)
67. Yes
68. Selected Artmage Impasto -Recapture- (Deck)

End board:  LP 8000 | Hand 3 | Deck 27 | Extra 10 | GY 8 | Banished 7   Monsters: M1: Medius the Pure Lv4 1800/1800 ATK || M2: Magician of Dark Chaos - Black Chaos Lv8 2800/2600 ATK || M3: Artmage Diactorus Lv8 2800/2500 ATK || M4: Purification Power Patron L2↑↓ 900  || M5: Artmage Non-Finito Lv7 2400/1500 ATK || EMZ-R: Medicurius the Power Patron of Illusions L3↙↓↘ 9000    Spell/Trap: S1: Ars Magna - "Citrinitas" || S2: Mind Shuffle || S3: Artmage Impasto -Recapture- (Set)   GY: Purification Power Patron, Nerva the Power Patron of Creation, Ars Magna of Purification and Corruption, Theorealize Liberation, Skull Archfiend of Chaos, Light and Darkness Ritual, Small World, Nervedo the Shadebeast Power Pa

## Order 6: best 7.13 (ss_panama null, elfnote 7.5, despia 7.45, angelechy 6.68, worst 5.8) — from opening lanes → new early order
Others: opening lanes 3.51 · opening lanes → new ending 3.19 · sw1 3.12 · opening lanes → new early order → new ending 1.35 · search 0.67 · tries Activate Fiendsmith Engraver 0.14 · tries Activate Mind Shuffle -0.07

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
12. Selected Junoldo the Shadespirit Power Patron (Deck)
13. Special Summon it
14. Activate Junoldo the Shadespirit Power Patron (M1): Special Summon 1 "Junora the Power Patron of Tuning" from your Extra Deck
15. Selected Junora the Power Patron of Tuning (Extra Deck)
16. Link Summon Purification Power Patron (Extra Deck)
17. select Medius the Pure (M4)
18. select Junora the Power Patron of Tuning (M3)
19. Activate Purification Power Patron (EMZ-R): Add 1 "Theorealize" card from your Deck to your hand
20. Activate Ars Magna of Purification and Corruption (banishment): Special Summon this card
21. Selected Theorealize Medius (Deck)
22. Activate Medius the Pure (GY): Shuffle 1 monster from your hand or face-up field into the Deck, and if you do, Special Summon this card
23. Selected Ash Blossom & Joyous Spring (hand)
24. Activate Theorealize Medius (hand): If a "Power Patron" card is on the field: You can Special Summon this card from your hand, then you can add 1 "Theorealize" Spell/Trap from your Deck to your hand
25. Yes
26. Selected Theorealize Liberation (Deck)
27. Activate Theorealize Liberation (hand): Add to your hand, or Special Summon, 1 monster from your Deck with 300 ATK/200 DEF
28. Activate Purification Power Patron (EMZ-R): Link Summon including this card as material
29. Selected Medicurius the Power Patron of Illusions (Extra Deck)
30. select Medius the Pure (M4)
31. Finish selection
32. Selected Nervedo the Shadebeast Power Patron (Deck)
33. Special Summon it
34. Yes
35. Special Summon 1 "Diactorus" monster
36. Selected Artmage Diactorus (Extra Deck)
37. Activate Nervedo the Shadebeast Power Patron (M2): Special Summon 1 "Nerva the Power Patron of Creation" from your Extra Deck
38. Selected Nerva the Power Patron of Creation (Extra Deck)
39. Yes
40. Selected Artmage Finmel (Deck)

End board:  LP 8000 | Hand 2 | Deck 30 | Extra 12 | GY 4 | Banished 10   Monsters: M1: Nerva the Power Patron of Creation Lv10 3300/3300 ATK || M3: Ars Magna of Purification and Corruption Lv8 1000/2100 ATK || M4: Artmage Diactorus Lv8 2800/2500 ATK || M5: Artmage Finmel Lv7 2400/1500 ATK || EMZ-R: Medicurius the Power Patron of Illusions L3↙↓↘ 3000    Spell/Trap: S1: Ars Magna - "Citrinitas"   GY: Small World, Junora the Power Patron of Tuning, Purification Power Patron, Theorealize Liberation   Banished: Droll & Lock Bird (face-down), Magician of Dark Chaos - Black Chaos (face-down), Artmage Vandalism -Assault- (face-down), Theorealize Past Lull (face-down), Fiendsmith Engraver (face-down), Medius th

## Order 7: best 2.12 (ss_panama 2.93, elfnote 1.14, despia -0.45, angelechy 8.4, worst -0.65) — from sw1 → new early order → new ending
Others: sw1 → new early order 1.86 · sw1 1.74 · sw1 0.99 · search 0.82 · sw1 → new ending -0.24 · tries Link Summon Fiendsmith's Requiem -0.41 · tries Activate Fiendsmith's Requiem -0.51 · opening lanes -0.53

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
13. Activate Junoldo the Shadespirit Power Patron (M5): Special Summon 1 "Junora the Power Patron of Tuning" from your Extra Deck
14. Selected Junora the Power Patron of Tuning (Extra Deck)
15. Yes
16. Selected Nervedo the Shadebeast Power Patron (Extra Deck)
17. Link Summon Purification Power Patron (Extra Deck)
18. select Medius the Pure (M1)
19. select Junora the Power Patron of Tuning (EMZ-R)
20. Yes
21. Selected Theorealize Medius (Deck)
22. Activate Medius the Pure (GY): Shuffle 1 monster from your hand or face-up field into the Deck, and if you do, Special Summon this card
23. Selected Ash Blossom & Joyous Spring (hand)
24. Activate Theorealize Medius (hand): If a "Power Patron" card is on the field: You can Special Summon this card from your hand, then you can add 1 "Theorealize" Spell/Trap from your Deck to your hand
25. Yes
26. Selected Theorealize Past Lull (Deck)
27. Activate Purification Power Patron (EMZ-R): Link Summon including this card as material
28. Selected Medicurius the Power Patron of Illusions (Extra Deck)
29. select Medius the Pure (M3)
30. Finish selection
31. Yes
32. Special Summon 1 "Diactorus" monster
33. Selected Artmage Diactorus (Extra Deck)
34. Special Summon (procedure) Artmage Non-Finito (Extra Deck)
35. Selected Theorealize Past Lull (hand)
36. Selected Nervedo the Shadebeast Power Patron (hand)
37. Yes
38. Selected Artmage Impasto -Recapture- (Deck)
39. Activate Theorealize Past Lull (GY): Special Summon 1 Fusion, Synchro, or Xyz Monster from your GY
40. Selected Junora the Power Patron of Tuning (GY)
41. Activate Artmage Diactorus (M3): Change the battle position of 1 monster on the field
42. Selected Artmage Diactorus (M3)
43. Link Summon S:P Little Knight (Extra Deck)
44. select Artmage Non-Finito (M1)
45. select Junora the Power Patron of Tuning (M5)
46. Yes
47. Selected Nervedo the Shadebeast Power Patron (GY)

End board:  LP 8000 | Hand 2 | Deck 32 | Extra 9 | GY 4 | Banished 12   Monsters: M3: Artmage Diactorus Lv8 2800/2500 DEF || M4: Nerva the Power Patron of Creation Lv10 3300/3300 ATK || M5: S:P Little Knight L2←→ 1600  || EMZ-R: Medicurius the Power Patron of Illusions L3↙↓↘ 3000    Spell/Trap: S1: Artmage Impasto -Recapture- (Set)   GY: Small World, Purification Power Patron, Artmage Non-Finito, Junora the Power Patron of Tuning   Banished: Droll & Lock Bird (face-down), Griffoh (face-down), Artmage Vandalism -Assault- (face-down), Pendulum Treasure (face-down), Light and Darkness Ritual (face-down), Dark Magical Circle (face-down), Vidolium the Unstable Power Patron of Unity (face-down), Plundered Po

## Order 8: best 3.18 (ss_panama 1.15, elfnote 0.33, despia 5.32, angelechy 5.28, worst -0.4) — from search → new ending
Others: search 3.02 · search → new ending → new early order 2.75 · opening lanes 2.68 · search → new ending → new ending 2.09 · tries Activate Fiendsmith's Sequence 0.97 · tries Activate Fiendsmith's Sequence 0.89 · sw1 -0.02

1. Set Spell/Trap Small World
2. Activate Small World (S1): activate this card
3. Selected Ghost Ogre & Snow Rabbit (hand)
4. Selected Lacrima the Crimson Tears (Deck)
5. Selected Medius the Pure (Deck)
6. Normal Summon Medius the Pure (hand)
7. Yes
8. Selected Nervedo the Shadebeast Power Patron (Deck)
9. Special Summon it
10. Activate Nervedo the Shadebeast Power Patron (M1): Special Summon 1 "Nerva the Power Patron of Creation" from your Extra Deck
11. Selected Nerva the Power Patron of Creation (Extra Deck)
12. Yes
13. Selected Junoldo the Shadespirit Power Patron (Deck)
14. Activate Junoldo the Shadespirit Power Patron (M1): Special Summon 1 "Junora the Power Patron of Tuning" from your Extra Deck
15. Selected Junora the Power Patron of Tuning (Extra Deck)
16. Yes
17. Selected Nervedo the Shadebeast Power Patron (Extra Deck)
18. Link Summon Purification Power Patron (Extra Deck)
19. select Junora the Power Patron of Tuning (M1)
20. select Medius the Pure (M4)
21. Yes
22. Selected Theorealize Medius (Deck)
23. Activate Theorealize Medius (hand): If a "Power Patron" card is on the field: You can Special Summon this card from your hand, then you can add 1 "Theorealize" Spell/Trap from your Deck to your hand
24. Yes
25. Selected Theorealize Past Lull (Deck)
26. Special Summon (procedure) Artmage Non-Finito (Extra Deck)
27. Selected Theorealize Past Lull (hand)
28. Selected Nervedo the Shadebeast Power Patron (hand)
29. Yes
30. Activate Purification Power Patron (EMZ-R): Link Summon including this card as material
31. Selected Medicurius the Power Patron of Illusions (Extra Deck)
32. select Theorealize Medius (M1)
33. Finish selection
34. Selected Artmage Impasto -Recapture- (Deck)
35. Activate Theorealize Past Lull (GY): Special Summon 1 Fusion, Synchro, or Xyz Monster from your GY
36. Selected Junora the Power Patron of Tuning (GY)

End board:  LP 8000 | Hand 3 | Deck 31 | Extra 11 | GY 5 | Banished 9   Monsters: M3: Junora the Power Patron of Tuning Lv10 3100/3800 ATK || M4: Artmage Non-Finito Lv7 2400/1500 ATK || M5: Nerva the Power Patron of Creation Lv10 3300/3300 ATK || EMZ-R: Medicurius the Power Patron of Illusions L3↙↓↘ 3000    Spell/Trap: S1: Artmage Impasto -Recapture- (Set)   GY: Small World, Medius the Pure, Nervedo the Shadebeast Power Patron, Theorealize Medius, Purification Power Patron   Banished: Ghost Ogre & Snow Rabbit (face-down), Lacrima the Crimson Tears (face-down), Medius the Pure (face-down), Skull Archfiend of Chaos (face-down), Light and Darkness Ritual (face-down), Theorealize Liberation (face-down), Pe

