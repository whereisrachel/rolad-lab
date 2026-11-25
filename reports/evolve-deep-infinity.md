# Evolved lines — Ars Magna of Infinity and Finity, Ash Blossom & Joyous Spring, Ash Blossom & Joyous Spring, Droll & Lock Bird, Ghost Ogre & Snow Rabbit (findlist-1100)
2026-11-25T07:14:44.895Z

8 deck orders (different face-down banishes / draws), 3 opponent hands x o_ss_panama + o_elfnote + o_despia + o_angelechy per line, 5 min searches, 4 mutation rounds.
Fitness = average margin after their turn (what you keep minus what they build; −10 more if they OTK). Higher is better.

**Best line per deck order: average 7.08** (worst order 5.63). Winner came from: tries Activate Fiendsmith's Tract → new early order 1, opening lanes → new ending 1, tries Special Summon (procedure) Artmage Non-Finito → new ending → new early order 1, tries Activate Artmage Graflare 1, opening lanes 4

| seed line | works as written | its score when it works | seed start + search finish (all orders) |
|---|---|---|---|
| inf1 | 8/8 | 0.37 | 2.49 |

## Weak points found automatically
Cards whose face-down banish (by your own costs) hurt the best line most (average best line without vs with that card banished):

| card | orders where it was banished | drop |
|---|---|---|
| Artmage Vandalism -Assault- | 3/8 | 1.84 |
| Black Luster Soldier - Soldier of Light and Darkness | 2/8 | 1.48 |
| Fiendsmith Engraver | 2/8 | 1.25 |
| Magician of Dark Chaos - Black Chaos | 2/8 | 0.93 |
| Pendulum Treasure | 3/8 | 0.75 |
| Skull Archfiend of Chaos | 3/8 | 0.51 |
| Artmage Finmel | 2/8 | 0.44 |
| Black Chaos | 2/8 | 0.42 |
| Apprentice Illusion Magician | 4/8 | 0.12 |
| Medius the Pure | 2/8 | 0.04 |

List changes proposed for the list test (data/proposals-findlist-1100.json):
- +1 Black Luster Soldier - Soldier of Light and Darkness, −1 Plundered Power Patron Plane - Vidolia — Black Luster Soldier - Soldier of Light and Darkness: best line 1.48 worse when a cost banished it (2 of 8 orders) — Ars Magna of Infinity and Finity
- +1 Fiendsmith Engraver, −1 Artmage Vandalism -Assault- — Fiendsmith Engraver: best line 1.25 worse when a cost banished it (2 of 8 orders) — Ars Magna of Infinity and Finity
- +1 Magician of Dark Chaos - Black Chaos, −1 Small World — Magician of Dark Chaos - Black Chaos: best line 0.93 worse when a cost banished it (2 of 8 orders) — Ars Magna of Infinity and Finity
- +1 Skull Archfiend of Chaos, −1 Plundered Power Patron Plane - Vidolia — Skull Archfiend of Chaos: best line 0.51 worse when a cost banished it (3 of 8 orders) — Ars Magna of Infinity and Finity
- +1 Black Luster Soldier - Soldier of Light and Darkness — Black Luster Soldier - Soldier of Light and Darkness: best line 1.48 worse when a cost banished it (2 of 8 orders) — Ars Magna of Infinity and Finity (add only: deck grows, up to 60)
- +1 Fiendsmith Engraver — Fiendsmith Engraver: best line 1.25 worse when a cost banished it (2 of 8 orders) — Ars Magna of Infinity and Finity (add only: deck grows, up to 60)
- +1 Magician of Dark Chaos - Black Chaos — Magician of Dark Chaos - Black Chaos: best line 0.93 worse when a cost banished it (2 of 8 orders) — Ars Magna of Infinity and Finity (add only: deck grows, up to 60)
- +1 Skull Archfiend of Chaos — Skull Archfiend of Chaos: best line 0.51 worse when a cost banished it (3 of 8 orders) — Ars Magna of Infinity and Finity (add only: deck grows, up to 60)

Effects the search had not used, tried on purpose (best result so far):
- Activate Artmage Graflare: 7.67
- Activate Light and Darkness Ritual: 7.39
- Activate Black Chaos: 6.67
- Activate Fiendsmith's Tract: 6.65
- Activate Light and Darkness Ritual: 6.64
- Activate Prohibited Power Patron Portal - Terminus: 6.52
- Activate Fiendsmith Engraver: 5.54
- Activate Theorealize Liberation: 5.3

## Order 1: best 9.34 (ss_panama null, elfnote 9.45, despia null, angelechy 9.3, worst 9.3) — from tries Activate Fiendsmith's Tract → new early order
Others: tries Activate Fiendsmith's Tract → new early order → new ending 7.27 · tries Activate Fiendsmith's Tract 6.65 · tries Activate Fiendsmith Engraver 5.54 · tries Activate Fiendsmith's Tract → new ending 5.37 · tries Activate Fiendsmith's Tract → new early order → new early order 5.32 · search 3.27 · opening lanes 2.14 · inf1 1.6 · inf1 0.36

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
15. Activate Ars Magna of Infinity and Finity (banishment): Special Summon this card
16. Selected Junoldo the Shadespirit Power Patron (Deck)
17. Activate Junoldo the Shadespirit Power Patron (M3): Special Summon 1 "Junora the Power Patron of Tuning" from your Extra Deck
18. Selected Junora the Power Patron of Tuning (Extra Deck)
19. Yes
20. Selected Nervedo the Shadebeast Power Patron (Extra Deck)
21. Link Summon Purification Power Patron (Extra Deck)
22. select Ars Magna of Infinity and Finity (M5)
23. select Junora the Power Patron of Tuning (EMZ-L)
24. Activate Purification Power Patron (EMZ-L): Add 1 "Theorealize" card from your Deck to your hand
25. Selected Theorealize Medius (Deck)
26. Activate Theorealize Medius (hand): If a "Power Patron" card is on the field: You can Special Summon this card from your hand, then you can add 1 "Theorealize" Spell/Trap from your Deck to your hand
27. Activate Purification Power Patron (EMZ-L): Link Summon including this card as material
28. Selected Medicurius the Power Patron of Illusions (Extra Deck)
29. select Medius the Pure (M4)
30. Finish selection
31. Yes
32. Selected Theorealize Past Lull (Deck)
33. No
34. Activate Medius the Pure (GY): Shuffle 1 monster from your hand or face-up field into the Deck, and if you do, Special Summon this card
35. Selected Ash Blossom & Joyous Spring (hand)
36. Special Summon (procedure) Artmage Non-Finito (Extra Deck)
37. Selected Theorealize Past Lull (hand)
38. Selected Nervedo the Shadebeast Power Patron (hand)
39. Yes
40. Selected Artmage Impasto -Recapture- (Deck)
41. Activate Theorealize Past Lull (GY): Special Summon 1 Fusion, Synchro, or Xyz Monster from your GY
42. Selected Junora the Power Patron of Tuning (GY)
43. Link Summon S:P Little Knight (Extra Deck)
44. select Junora the Power Patron of Tuning (M3)
45. select Medius the Pure (M5)
46. Yes
47. Special Summon 1 "Diactorus" monster
48. Activate Ars Magna of Purification and Corruption (banishment): Special Summon this card
49. Activate S:P Little Knight (M3): Banish 1 card on the field or GY
50. Selected Purification Power Patron (GY)
51. Selected Artmage Diactorus (Extra Deck)

End board:  LP 8000 | Hand 3 | Deck 31 | Extra 9 | GY 3 | Banished 10   Monsters: M1: Nerva the Power Patron of Creation Lv10 3300/3300 ATK || M2: Artmage Non-Finito Lv7 2400/1500 ATK || M3: S:P Little Knight L2←→ 1600  || M4: Artmage Diactorus Lv8 2800/2500 ATK || M5: Ars Magna of Purification and Corruption Lv8 1000/2100 ATK || EMZ-L: Medicurius the Power Patron of Illusions L3↙↓↘ 9000    Spell/Trap: S1: Ars Magna - "Citrinitas" || S2: Artmage Impasto -Recapture- (Set)   GY: Ars Magna of Infinity and Finity, Nervedo the Shadebeast Power Patron, Junora the Power Patron of Tuning   Banished: Infinite Impermanence (face-down), Small World (face-down), Light and Darkness Ritual (face-down), Lacrima the C

## Order 2: best 6.44 (ss_panama 4.4, elfnote 2.71, despia 5.94, angelechy 8.85, worst 2.26) — from opening lanes → new ending
Others: opening lanes 6.39 · opening lanes → new ending → new early order 5.41 · tries Activate Theorealize Liberation 5.3 · opening lanes → new ending → new early order 5.29 · tries Activate Ars Magna of Purification and Corruption 4.01 · inf1 3.81 · opening lanes → new ending → new ending 3.62 · search 2.33 · inf1 -0.2

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
17. Activate Junoldo the Shadespirit Power Patron (M2): Special Summon 1 "Junora the Power Patron of Tuning" from your Extra Deck
18. Selected Junora the Power Patron of Tuning (Extra Deck)
19. Yes
20. Selected Nervedo the Shadebeast Power Patron (Extra Deck)
21. Link Summon Purification Power Patron (Extra Deck)
22. select Junora the Power Patron of Tuning (EMZ-L)
23. select Medius the Pure (M1)
24. Activate Purification Power Patron (EMZ-R): Add 1 "Theorealize" card from your Deck to your hand
25. Selected Theorealize Medius (Deck)
26. Activate Theorealize Medius (hand): If a "Power Patron" card is on the field: You can Special Summon this card from your hand, then you can add 1 "Theorealize" Spell/Trap from your Deck to your hand
27. Yes
28. Selected Theorealize Liberation (Deck)
29. Activate Medius the Pure (GY): Shuffle 1 monster from your hand or face-up field into the Deck, and if you do, Special Summon this card
30. Selected Ash Blossom & Joyous Spring (hand)
31. Special Summon (procedure) Artmage Non-Finito (Extra Deck)
32. Selected Theorealize Liberation (hand)
33. Selected Nervedo the Shadebeast Power Patron (hand)
34. Yes
35. Selected Artmage Impasto -Recapture- (Deck)
36. Activate Theorealize Liberation (GY): Treat 1 monster you control as a Tuner this turn
37. Selected Theorealize Medius (M1)
38. Activate Ars Magna of Infinity and Finity (M5): Banish 1 monster on the field
39. Selected Purification Power Patron (EMZ-R)
40. Activate Purification Power Patron (EMZ-R): Link Summon including this card as material
41. Selected Medicurius the Power Patron of Illusions (Extra Deck)
42. select Medius the Pure (M2)
43. Finish selection
44. Yes
45. Special Summon 1 "Diactorus" monster
46. Activate Ars Magna of Purification and Corruption (banishment): Special Summon this card
47. Selected Artmage Diactorus (Extra Deck)

End board:  LP 8000 | Hand 3 | Deck 31 | Extra 10 | GY 3 | Banished 9   Monsters: M1: Artmage Diactorus Lv8 2800/2500 ATK || M2: Ars Magna of Purification and Corruption Lv8 1000/2100 ATK || M3: Artmage Non-Finito Lv7 2400/1500 ATK || M4: Nerva the Power Patron of Creation Lv10 3300/3300 ATK || M5: Ars Magna of Infinity and Finity Lv8 1000/2400 ATK || EMZ-L: Medicurius the Power Patron of Illusions L3↙↓↘ 9000    Spell/Trap: S1: Ars Magna - "Citrinitas" || S2: Artmage Impasto -Recapture- (Set)   GY: Junora the Power Patron of Tuning, Nervedo the Shadebeast Power Patron, Purification Power Patron   Banished: Small World (face-down), Artmage Finmel (face-down), Griffoh (face-down), Apprentice Illusion Mag

## Order 3: best 6.31 (ss_panama 7.77, elfnote 4.98, despia 0.15, angelechy 7.83, worst 0.15) — from tries Special Summon (procedure) Artmage Non-Finito → new ending → new early order
Others: tries Special Summon (procedure) Artmage Non-Finito → new ending 5.48 · tries Special Summon (procedure) Artmage Non-Finito → new ending → new early order → new early order 5.48 · tries Special Summon (procedure) Artmage Non-Finito 3.55 · tries Activate Theorealize Past Lull 2.44 · opening lanes 2.33 · search 2.22 · inf1 1.63 · inf1 -0.64 · tries Special Summon (procedure) Artmage Non-Finito → new ending → new early order → new ending -1.71

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
13. Link Summon Purification Power Patron (Extra Deck)
14. select Medius the Pure (M1)
15. select Nervedo the Shadebeast Power Patron (M3)
16. Yes
17. Selected Junoldo the Shadespirit Power Patron (Deck)
18. Activate Medius the Pure (GY): Shuffle 1 monster from your hand or face-up field into the Deck, and if you do, Special Summon this card
19. Selected Ash Blossom & Joyous Spring (hand)
20. Activate Purification Power Patron (EMZ-L): Link Summon including this card as material
21. Selected Medicurius the Power Patron of Illusions (Extra Deck)
22. select Junoldo the Shadespirit Power Patron (M1)
23. Finish selection
24. Yes
25. Activate Ars Magna of Infinity and Finity (banishment): Special Summon this card
26. Activate Ars Magna of Purification and Corruption (banishment): Special Summon this card
27. Selected Nervedo the Shadebeast Power Patron (Extra Deck)
28. Activate Ars Magna of Purification and Corruption (M4): Banish Spells/Traps on the field
29. Selected Ars Magna - "Citrinitas" (S1)
30. Link Summon Purification Power Patron (Extra Deck)
31. select Ars Magna of Purification and Corruption (M4)
32. select Ars Magna of Infinity and Finity (M5)
33. Yes
34. Selected Theorealize Medius (Deck)
35. Activate Theorealize Medius (hand): If a "Power Patron" card is on the field: You can Special Summon this card from your hand, then you can add 1 "Theorealize" Spell/Trap from your Deck to your hand
36. Yes
37. Selected Theorealize Liberation (Deck)
38. Activate Theorealize Liberation (hand): Add to your hand, or Special Summon, 1 monster from your Deck with 300 ATK/200 DEF
39. Selected Griffoh (Deck)
40. Add the card(s) to your hand
41. Link Summon S:P Little Knight (Extra Deck)
42. select Purification Power Patron (M1)
43. select Medius the Pure (M3)
44. Yes
45. Special Summon 1 "Diactorus" monster
46. Selected Artmage Diactorus (Extra Deck)
47. Activate Griffoh (hand): Activate 1 of these effects
48. Set 1 card that mentions "Light and Darkness Ritual"
49. Selected Mind Shuffle (Deck)
50. Activate Mind Shuffle (S1): activate this card
51. Yes
52. Selected Skull Archfiend of Chaos (Deck)
53. Selected Skull Archfiend of Chaos (hand)
54. Yes
55. Selected Light and Darkness Ritual (Deck)
56. Selected Magician of Dark Chaos - Black Chaos (Deck)
57. Activate Theorealize Liberation (GY): Treat 1 monster you control as a Tuner this turn
58. Selected Artmage Diactorus (M4)
59. Activate Light and Darkness Ritual (GY): Add both this card and 1 card that mentions "Light and Darkness Ritual" from your GY to your hand
60. Selected Skull Archfiend of Chaos (GY)
61. Activate Light and Darkness Ritual (hand): Ritual Summon 1 "Magician of Dark Chaos - Black Chaos" or "Black Luster Soldier - Soldier of Light and Darkness" from your hand
62. Selected Magician of Dark Chaos - Black Chaos (hand)
63. Selected Ars Magna of Purification and Corruption (GY) value 8
64. Yes
65. Selected Light and Darkness Ritual (GY)
66. Special Summon (procedure) Artmage Non-Finito (Extra Deck)
67. Selected Light and Darkness Ritual (hand)
68. Selected Nervedo the Shadebeast Power Patron (hand)
69. Yes
70. Selected Artmage Impasto -Recapture- (Deck)

End board:  LP 8000 | Hand 4 | Deck 32 | Extra 10 | GY 6 | Banished 5   Monsters: M1: S:P Little Knight L2←→ 1600  || M2: Artmage Non-Finito Lv7 2400/1500 ATK || M3: Magician of Dark Chaos - Black Chaos Lv8 2800/2600 ATK || M4: Artmage Diactorus Lv8 2800/2500 ATK || EMZ-L: Medicurius the Power Patron of Illusions L3↙↓↘ 9000    Spell/Trap: S1: Mind Shuffle || S2: Artmage Impasto -Recapture- (Set)   GY: Purification Power Patron, Ars Magna of Infinity and Finity, Purification Power Patron, Griffoh, Light and Darkness Ritual, Nervedo the Shadebeast Power Patron   Banished: Ars Magna - "Citrinitas", Medius the Pure, Theorealize Medius, Theorealize Liberation, Ars Magna of Purification and Corruption   Hand

## Order 4: best 7.67 (ss_panama 5.3, elfnote 5.98, despia 9.05, angelechy 9, worst 5.18) — from tries Activate Artmage Graflare
Others: tries Activate Artmage Graflare → new ending 7.11 · opening lanes 6.79 · search 6.06 · inf1 3.33 · tries Activate Artmage Graflare → new ending 2.99 · tries Activate Artmage Graflare → new early order 1.71 · inf1 0.58 · tries Activate Vidolium the Unstable Power Patron of Unity -0.26 · tries Activate Artmage Graflare → new early order -1.43

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
12. Activate Nervedo the Shadebeast Power Patron (M3): Special Summon 1 "Nerva the Power Patron of Creation" from your Extra Deck
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
24. Activate Ars Magna of Purification and Corruption (banishment): Special Summon this card
25. Activate Purification Power Patron (EMZ-L): Add 1 "Theorealize" card from your Deck to your hand
26. Selected Theorealize Medius (Deck)
27. Activate Ars Magna of Purification and Corruption (M1): Banish Spells/Traps on the field
28. Selected Ars Magna - "Citrinitas" (S1)
29. Activate Purification Power Patron (EMZ-L): Link Summon including this card as material
30. Selected Medicurius the Power Patron of Illusions (Extra Deck)
31. select Medius the Pure (M4)
32. Finish selection
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
43. Activate Medius the Pure (GY): Shuffle 1 monster from your hand or face-up field into the Deck, and if you do, Special Summon this card
44. Selected Ars Magna of Purification and Corruption (M1)
45. Link Summon S:P Little Knight (Extra Deck)
46. select Junora the Power Patron of Tuning (M4)
47. select Medius the Pure (M1)
48. Yes
49. Special Summon 1 "Diactorus" monster
50. Selected Artmage Diactorus (Extra Deck)

End board:  LP 8000 | Hand 4 | Deck 31 | Extra 9 | GY 4 | Banished 10   Monsters: M2: Artmage Non-Finito Lv7 2400/1500 ATK || M3: Artmage Diactorus Lv8 2800/2500 ATK || M4: S:P Little Knight L2←→ 1600  || M5: Nerva the Power Patron of Creation Lv10 3300/3300 ATK || EMZ-R: Medicurius the Power Patron of Illusions L3↙↓↘ 9000    Spell/Trap: S1: Artmage Impasto -Recapture- (Set)   GY: Ars Magna of Infinity and Finity, Purification Power Patron, Nervedo the Shadebeast Power Patron, Junora the Power Patron of Tuning   Banished: Fiendsmith's Tract (face-down), Light and Darkness Ritual (face-down), Small World (face-down), Pendulum Treasure (face-down), Apprentice Illusion Magician (face-down), Infinite Imper

## Order 5: best 5.85 (ss_panama 3.78, elfnote null, despia 3.9, angelechy 7.83, worst -0.9) — from opening lanes
Others: opening lanes → new ending 5.54 · opening lanes → new ending 5.47 · tries Activate Mind Shuffle 4.56 · search 3.89 · tries Activate Mind Shuffle 3.63 · inf1 2.71 · inf1 0.07 · opening lanes → new early order -1.39 · opening lanes → new early order -2.6

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
21. select Junora the Power Patron of Tuning (M4)
22. select Medius the Pure (M3)
23. Activate Purification Power Patron (EMZ-L): Add 1 "Theorealize" card from your Deck to your hand
24. Activate Ars Magna of Infinity and Finity (banishment): Special Summon this card
25. Activate Ars Magna of Purification and Corruption (banishment): Special Summon this card
26. Selected Theorealize Medius (Deck)
27. Activate Ars Magna of Purification and Corruption (M2): Banish Spells/Traps on the field
28. Selected Ars Magna - "Citrinitas" (S1)
29. Activate Theorealize Medius (hand): If a "Power Patron" card is on the field: You can Special Summon this card from your hand, then you can add 1 "Theorealize" Spell/Trap from your Deck to your hand
30. Yes
31. Selected Theorealize Past Lull (Deck)
32. Activate Purification Power Patron (EMZ-L): Link Summon including this card as material
33. Selected Medicurius the Power Patron of Illusions (Extra Deck)
34. select Ars Magna of Infinity and Finity (M4)
35. Finish selection
36. Special Summon (procedure) Artmage Non-Finito (Extra Deck)
37. Selected Theorealize Past Lull (hand)
38. Selected Nervedo the Shadebeast Power Patron (hand)
39. Yes
40. Selected Artmage Impasto -Recapture- (Deck)
41. Activate Theorealize Past Lull (GY): Special Summon 1 Fusion, Synchro, or Xyz Monster from your GY
42. Selected Junora the Power Patron of Tuning (GY)
43. Link Summon Purification Power Patron (Extra Deck)
44. select Ars Magna of Purification and Corruption (M2)
45. select Junora the Power Patron of Tuning (M3)
46. Activate Medius the Pure (GY): Shuffle 1 monster from your hand or face-up field into the Deck, and if you do, Special Summon this card
47. Selected Ash Blossom & Joyous Spring (hand)
48. Link Summon S:P Little Knight (Extra Deck)
49. select Purification Power Patron (M2)
50. select Medius the Pure (M3)
51. Yes
52. Special Summon 1 "Diactorus" monster
53. Selected Artmage Diactorus (Extra Deck)

End board:  LP 8000 | Hand 3 | Deck 31 | Extra 8 | GY 6 | Banished 10   Monsters: M1: Nerva the Power Patron of Creation Lv10 3300/3300 ATK || M2: Artmage Diactorus Lv8 2800/2500 ATK || M3: S:P Little Knight L2←→ 1600  || M4: Artmage Non-Finito Lv7 2400/1500 ATK || EMZ-L: Medicurius the Power Patron of Illusions L3↙↓↘ 9000    Spell/Trap: S1: Artmage Impasto -Recapture- (Set)   GY: Ars Magna of Infinity and Finity, Purification Power Patron, Nervedo the Shadebeast Power Patron, Ars Magna of Purification and Corruption, Junora the Power Patron of Tuning, Purification Power Patron   Banished: Fiendsmith Engraver (face-down), Lacrima the Crimson Tears (face-down), Pendulum Treasure (face-down), Artmage Van

## Order 6: best 7.06 (ss_panama 7.25, elfnote 5.1, despia 5.54, angelechy 9.1, worst -1.99) — from opening lanes
Others: tries Activate Black Chaos 6.67 · tries Activate Prohibited Power Patron Portal - Terminus 6.52 · search 5.19 · inf1 4.99 · inf1 1.53

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
12. Activate Nervedo the Shadebeast Power Patron (M3): Special Summon 1 "Nerva the Power Patron of Creation" from your Extra Deck
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
23. select Junora the Power Patron of Tuning (EMZ-L)
24. Activate Purification Power Patron (EMZ-R): Add 1 "Theorealize" card from your Deck to your hand
25. Selected Theorealize Medius (Deck)
26. Activate Purification Power Patron (EMZ-R): Link Summon including this card as material
27. Selected Medicurius the Power Patron of Illusions (Extra Deck)
28. select Medius the Pure (M4)
29. Finish selection
30. Yes
31. Activate Ars Magna of Purification and Corruption (M1): Banish Spells/Traps on the field
32. Selected Ars Magna - "Citrinitas" (S1)
33. Activate Medius the Pure (GY): Shuffle 1 monster from your hand or face-up field into the Deck, and if you do, Special Summon this card
34. Selected Ash Blossom & Joyous Spring (hand)
35. Activate Theorealize Medius (hand): If a "Power Patron" card is on the field: You can Special Summon this card from your hand, then you can add 1 "Theorealize" Spell/Trap from your Deck to your hand
36. Yes
37. Selected Theorealize Liberation (Deck)
38. Activate Theorealize Liberation (hand): Add to your hand, or Special Summon, 1 monster from your Deck with 300 ATK/200 DEF
39. Selected Griffoh (Deck)
40. Add the card(s) to your hand
41. Activate Griffoh (hand): Activate 1 of these effects
42. Set 1 card that mentions "Light and Darkness Ritual"
43. Selected Mind Shuffle (Deck)
44. Activate Mind Shuffle (S1): activate this card
45. Yes
46. Selected Skull Archfiend of Chaos (Deck)
47. Selected Skull Archfiend of Chaos (hand)
48. Yes
49. Selected Light and Darkness Ritual (Deck)
50. Selected Magician of Dark Chaos - Black Chaos (Deck)
51. Activate Light and Darkness Ritual (GY): Add both this card and 1 card that mentions "Light and Darkness Ritual" from your GY to your hand
52. Selected Skull Archfiend of Chaos (GY)
53. Special Summon (procedure) Artmage Non-Finito (Extra Deck)
54. Selected Light and Darkness Ritual (hand)
55. Selected Nervedo the Shadebeast Power Patron (hand)
56. Yes
57. Selected Artmage Impasto -Recapture- (Deck)
58. Link Summon Purification Power Patron (Extra Deck)
59. select Ars Magna of Purification and Corruption (M1)
60. select Medius the Pure (M4)
61. Yes
62. Special Summon 1 "Diactorus" monster
63. Selected Artmage Diactorus (Extra Deck)
64. Activate Skull Archfiend of Chaos (hand): Special Summon this card
65. select Junora the Power Patron of Tuning (GY)
66. select Ars Magna of Purification and Corruption (GY)
67. select Light and Darkness Ritual (GY)
68. Default order

End board:  LP 8000 | Hand 4 | Deck 28 | Extra 10 | GY 4 | Banished 10   Monsters: M1: Purification Power Patron L2↑↓ 900  || M2: Skull Archfiend of Chaos Lv6 2500/1200 ATK || M3: Artmage Non-Finito Lv7 2400/1500 ATK || M4: Artmage Diactorus Lv8 2800/2500 DEF || M5: Nerva the Power Patron of Creation Lv10 3300/3300 ATK || EMZ-L: Medicurius the Power Patron of Illusions L3↙↓↘ 9000    Spell/Trap: S1: Mind Shuffle || S2: Artmage Impasto -Recapture- (Set)   GY: Ars Magna of Infinity and Finity, Purification Power Patron, Griffoh, Nervedo the Shadebeast Power Patron   Banished: Artmage Finmel (face-down), Fiendsmith's Tract (face-down), Lacrima the Crimson Tears (face-down), Theorealize Past Lull (face-down

## Order 7: best 5.63 (ss_panama null, elfnote null, despia 2.22, angelechy 9.05, worst -2.7) — from opening lanes
Others: opening lanes → new ending 3.95 · opening lanes → new ending 3.93 · tries Activate Junoldo the Shadespirit Power Patron 3.74 · tries Normal Summon Theorealize Medius 2.65 · inf1 1.5 · search 0.72 · inf1 0.7 · opening lanes → new early order 0.3 · opening lanes → new early order -1.68

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
12. Activate Nervedo the Shadebeast Power Patron (M3): Special Summon 1 "Nerva the Power Patron of Creation" from your Extra Deck
13. Selected Nerva the Power Patron of Creation (Extra Deck)
14. Yes
15. Activate Ars Magna of Infinity and Finity (banishment): Special Summon this card
16. Selected Junoldo the Shadespirit Power Patron (Deck)
17. Activate Junoldo the Shadespirit Power Patron (M2): Special Summon 1 "Junora the Power Patron of Tuning" from your Extra Deck
18. Selected Junora the Power Patron of Tuning (Extra Deck)
19. Yes
20. Selected Nervedo the Shadebeast Power Patron (Extra Deck)
21. Link Summon Purification Power Patron (Extra Deck)
22. select Junora the Power Patron of Tuning (M2)
23. select Ars Magna of Infinity and Finity (M3)
24. Activate Purification Power Patron (EMZ-R): Add 1 "Theorealize" card from your Deck to your hand
25. Activate Purification Power Patron (EMZ-R): Link Summon including this card as material
26. Selected Medicurius the Power Patron of Illusions (Extra Deck)
27. select Medius the Pure (M4)
28. Finish selection
29. Selected Theorealize Medius (Deck)
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
43. Activate Medius the Pure (GY): Shuffle 1 monster from your hand or face-up field into the Deck, and if you do, Special Summon this card
44. Selected Ars Magna of Purification and Corruption (M4)
45. Link Summon S:P Little Knight (Extra Deck)
46. select Junora the Power Patron of Tuning (M3)
47. select Medius the Pure (M4)
48. Yes
49. Special Summon 1 "Diactorus" monster
50. Selected Artmage Diactorus (Extra Deck)

End board:  LP 8000 | Hand 4 | Deck 31 | Extra 9 | GY 4 | Banished 10   Monsters: M1: Nerva the Power Patron of Creation Lv10 3300/3300 ATK || M2: Artmage Diactorus Lv8 2800/2500 ATK || M3: S:P Little Knight L2←→ 1600  || M5: Artmage Non-Finito Lv7 2400/1500 ATK || EMZ-L: Medicurius the Power Patron of Illusions L3↙↓↘ 9000    Spell/Trap: S1: Artmage Impasto -Recapture- (Set)   GY: Ars Magna of Infinity and Finity, Purification Power Patron, Nervedo the Shadebeast Power Patron, Junora the Power Patron of Tuning   Banished: Black Luster Soldier - Soldier of Light and Darkness (face-down), Apprentice Illusion Magician (face-down), Mind Shuffle (face-down), Skull Archfiend of Chaos (face-down), Prohibited 

## Order 8: best 8.33 (ss_panama 7.08, elfnote null, despia null, angelechy 8.75, worst 7.08) — from opening lanes
Others: opening lanes → new ending 7.97 · tries Activate Light and Darkness Ritual 7.39 · tries Activate Light and Darkness Ritual 6.64 · search 6.02 · opening lanes → new ending 4.73 · opening lanes → new early order 4.42 · opening lanes → new early order 1.96 · inf1 0.53 · inf1 0.38

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
13. Activate Nervedo the Shadebeast Power Patron (M2): Special Summon 1 "Nerva the Power Patron of Creation" from your Extra Deck
14. Selected Nerva the Power Patron of Creation (Extra Deck)
15. Yes
16. Activate Ars Magna of Infinity and Finity (banishment): Special Summon this card
17. Selected Junoldo the Shadespirit Power Patron (Deck)
18. Activate Junoldo the Shadespirit Power Patron (M4): Special Summon 1 "Junora the Power Patron of Tuning" from your Extra Deck
19. Selected Junora the Power Patron of Tuning (Extra Deck)
20. Yes
21. Selected Nervedo the Shadebeast Power Patron (Extra Deck)
22. Link Summon Purification Power Patron (Extra Deck)
23. select Ars Magna of Infinity and Finity (M3)
24. select Junora the Power Patron of Tuning (EMZ-L)
25. Activate Purification Power Patron (EMZ-L): Add 1 "Theorealize" card from your Deck to your hand
26. Selected Theorealize Medius (Deck)
27. Activate Theorealize Medius (hand): If a "Power Patron" card is on the field: You can Special Summon this card from your hand, then you can add 1 "Theorealize" Spell/Trap from your Deck to your hand
28. Yes
29. Selected Theorealize Past Lull (Deck)
30. Special Summon (procedure) Artmage Non-Finito (Extra Deck)
31. Selected Theorealize Past Lull (hand)
32. Selected Nervedo the Shadebeast Power Patron (hand)
33. Yes
34. Activate Purification Power Patron (EMZ-L): Link Summon including this card as material
35. Selected Medicurius the Power Patron of Illusions (Extra Deck)
36. select Medius the Pure (M1)
37. Finish selection
38. Selected Artmage Impasto -Recapture- (Deck)
39. Yes
40. Activate Theorealize Past Lull (GY): Special Summon 1 Fusion, Synchro, or Xyz Monster from your GY
41. Selected Junora the Power Patron of Tuning (GY)
42. Link Summon Purification Power Patron (Extra Deck)
43. select Ars Magna of Purification and Corruption (M1)
44. select Junora the Power Patron of Tuning (M3)
45. Activate Medius the Pure (GY): Shuffle 1 monster from your hand or face-up field into the Deck, and if you do, Special Summon this card
46. Selected Ash Blossom & Joyous Spring (hand)
47. Link Summon S:P Little Knight (Extra Deck)
48. select Purification Power Patron (M1)
49. select Medius the Pure (M3)
50. Yes
51. Special Summon 1 "Diactorus" monster
52. Selected Artmage Diactorus (Extra Deck)

End board:  LP 8000 | Hand 3 | Deck 31 | Extra 8 | GY 6 | Banished 9   Monsters: M1: Artmage Diactorus Lv8 2800/2500 ATK || M2: Nerva the Power Patron of Creation Lv10 3300/3300 ATK || M3: S:P Little Knight L2←→ 1600  || M5: Artmage Non-Finito Lv7 2400/1500 ATK || EMZ-L: Medicurius the Power Patron of Illusions L3↙↓↘ 9000    Spell/Trap: S1: Ars Magna - "Citrinitas" || S2: Artmage Impasto -Recapture- (Set)   GY: Ars Magna of Infinity and Finity, Nervedo the Shadebeast Power Patron, Purification Power Patron, Ars Magna of Purification and Corruption, Junora the Power Patron of Tuning, Purification Power Patron   Banished: Nervedo the Shadebeast Power Patron (face-down), Apprentice Illusion Magician (face

