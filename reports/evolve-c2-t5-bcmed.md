# Evolved lines — Black Chaos, Medius the Pure, Ash Blossom & Joyous Spring, Droll & Lock Bird, Ghost Ogre & Snow Rabbit (findlist-1100)
2026-11-26T00:03:14.657Z

8 deck orders (different face-down banishes / draws), 3 opponent hands x o_ss_panama + o_elfnote + o_despia + o_angelechy per line, 5 min searches, 4 mutation rounds.
Fitness = end-board interruptions (the lab scorer, src/disrupt.mjs: wipe 2, negate 1-1.5, banish/protection less; hand traps kept count 1 each). The winner of each order is also played into the opponent decks: margin after their turn shown beside it.

**Margin after their turn (winners): average 5.9** (worst -1.34)

**Best line per deck order: average 13.9** (worst order 13.75). Winner came from: opening lanes 2, tries Activate Vidolium the Unstable Power Patron of Unity 1, search 1

| seed line | works as written | its score when it works | seed start + search finish (all orders) |
|---|---|---|---|
| bc1 | 3/8 | 8.46 | 11.26 |
| v52-bcmed | 4/8 | 13.35 | 13.47 |

## Weak points found automatically
Cards whose face-down banish (by your own costs) hurt the best line most (average best line without vs with that card banished):

| card | orders where it was banished | drop |
|---|---|---|
| Griffoh | 3/8 | 0.2 |
| Vidolium the Unstable Power Patron of Unity | 3/8 | 0.2 |
| Nervedo the Shadebeast Power Patron | 3/8 | 0.2 |
| Dark Magical Circle | 3/8 | 0.2 |
| Theorealize Past Lull | 3/8 | 0.2 |
| Ars Magna of Purification and Corruption | 2/8 | 0.16 |
| Small World | 2/8 | 0.16 |
| Black Luster Soldier - Soldier of Light and Darkness | 3/8 | 0 |
| Artmage Graflare | 3/8 | -0.2 |
| Prohibited Power Patron Portal - Terminus | 3/8 | -0.2 |

Where the hand-designed lines broke (next step that no longer worked):
- bc1: Yes (1x)

Effects the search had not used, tried on purpose (best result so far):
- Activate Vidolium the Unstable Power Patron of Unity: 14.05
- Activate Prohibited Power Patron Portal - Terminus: 13.9
- Activate Junoldo the Shadespirit Power Patron: 13.9
- Normal Summon Nervedo the Shadebeast Power Patron: 13.9
- Activate Fiendsmith Engraver: 13.9
- Activate Theorealize Liberation: 13.75
- Normal Summon Theorealize Medius: 13.75
- Activate Artmage Diactorus: 13.35

## Order 1: best 13.9 [margin 5.98: ss_panama 5, elfnote 3.18, despia 0.82, angelechy 9.9] (, worst 13.9) — from opening lanes
Others: tries Activate Fiendsmith Engraver 13.9 · tries Activate Prohibited Power Patron Portal - Terminus 13.9 · opening lanes → new early order 13.9 · opening lanes → new ending 13.9 · opening lanes → new early order 13.9 · v52-bcmed 13.75 · v52-bcmed 13.75 · search 11.5 · bc1 11.48 · opening lanes → new ending 11.45 · bc1 8.69

1. Activate Black Chaos (hand): Special Summon ("Black Chaos")
2. Selected Mind Shuffle (Deck)
3. Activate Mind Shuffle (S1): Add 1 appropriate monster to your hand
4. Selected Skull Archfiend of Chaos (Deck)
5. Selected Skull Archfiend of Chaos (hand)
6. Yes
7. Selected Light and Darkness Ritual (Deck)
8. Selected Magician of Dark Chaos - Black Chaos (Deck)
9. Activate Light and Darkness Ritual (GY): Add both this card and 1 card that mentions "Light and Darkness Ritual" from your GY to your hand
10. Selected Skull Archfiend of Chaos (GY)
11. Set Spell/Trap Light and Darkness Ritual
12. Normal Summon Medius the Pure (hand)
13. Yes
14. Selected Nervedo the Shadebeast Power Patron (Deck)
15. Special Summon it
16. Activate Nervedo the Shadebeast Power Patron (M1): Special Summon 1 "Nerva the Power Patron of Creation" from your Extra Deck
17. Selected Nerva the Power Patron of Creation (Extra Deck)
18. Yes
19. Selected Junoldo the Shadespirit Power Patron (Deck)
20. Activate Junoldo the Shadespirit Power Patron (M4): Special Summon 1 "Junora the Power Patron of Tuning" from your Extra Deck
21. Selected Junora the Power Patron of Tuning (Extra Deck)
22. Yes
23. Selected Nervedo the Shadebeast Power Patron (Extra Deck)
24. Link Summon Purification Power Patron (Extra Deck)
25. select Medius the Pure (M3)
26. select Junora the Power Patron of Tuning (M2)
27. Yes
28. Selected Theorealize Medius (Deck)
29. Activate Theorealize Medius (hand): If a "Power Patron" card is on the field: You can Special Summon this card from your hand, then you can add 1 "Theorealize" Spell/Trap from your Deck to your hand
30. Yes
31. Selected Theorealize Past Lull (Deck)
32. Activate Medius the Pure (GY): Shuffle 1 monster from your hand or face-up field into the Deck, and if you do, Special Summon this card
33. Selected Skull Archfiend of Chaos (hand)
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
48. Activate Light and Darkness Ritual (S2): Ritual Summon 1 "Magician of Dark Chaos - Black Chaos" or "Black Luster Soldier - Soldier of Light and Darkness" from your hand
49. Selected Magician of Dark Chaos - Black Chaos (hand)
50. Selected Black Chaos (GY) value 8
51. Yes
52. Selected Light and Darkness Ritual (GY)

End board:  LP 8000 | Hand 4 | Deck 30 | Extra 10 | GY 2 | Banished 10   Monsters: M1: Nerva the Power Patron of Creation Lv10 3300/3300 ATK || M2: Artmage Diactorus Lv8 2800/2500 ATK || M3: Junora the Power Patron of Tuning Lv10 3100/3800 ATK || M4: Magician of Dark Chaos - Black Chaos Lv8 2800/2600 ATK || M5: Artmage Non-Finito Lv7 2400/1500 ATK || EMZ-L: Medicurius the Power Patron of Illusions L3↙↓↘ 3000    Spell/Trap: S1: Mind Shuffle || S3: Artmage Impasto -Recapture- (Set)   GY: Nervedo the Shadebeast Power Patron, Purification Power Patron   Banished: Ars Magna of Infinity and Finity (face-down), Fiendsmith's Tract (face-down), Griffoh (face-down), Vidolium the Unstable Power Patron of Unity (f

## Order 2: best 14.05 [margin 6.42: ss_panama 6, elfnote 6.37, despia 1.3, angelechy 10] (, worst 14.05) — from tries Activate Vidolium the Unstable Power Patron of Unity
Others: tries Activate Vidolium the Unstable Power Patron of Unity → new ending 14.05 · search 13.75 · opening lanes 13.75 · tries Normal Summon Theorealize Medius 13.75 · tries Activate Vidolium the Unstable Power Patron of Unity → new early order 13.75 · tries Activate Vidolium the Unstable Power Patron of Unity → new early order 13.75 · v52-bcmed 13.2 · v52-bcmed 12.95 · tries Activate Vidolium the Unstable Power Patron of Unity → new ending 12.25 · bc1 11.48 · bc1 8.69

1. Normal Summon Medius the Pure (hand)
2. Yes
3. Selected Nervedo the Shadebeast Power Patron (Deck)
4. Special Summon it
5. Activate Nervedo the Shadebeast Power Patron (M4): Special Summon 1 "Nerva the Power Patron of Creation" from your Extra Deck
6. Selected Nerva the Power Patron of Creation (Extra Deck)
7. Yes
8. Selected Junoldo the Shadespirit Power Patron (Deck)
9. Activate Junoldo the Shadespirit Power Patron (M3): Special Summon 1 "Junora the Power Patron of Tuning" from your Extra Deck
10. Selected Junora the Power Patron of Tuning (Extra Deck)
11. Yes
12. Selected Nervedo the Shadebeast Power Patron (Extra Deck)
13. Activate Black Chaos (hand): Special Summon ("Black Chaos")
14. Selected Mind Shuffle (Deck)
15. Link Summon Purification Power Patron (Extra Deck)
16. select Junora the Power Patron of Tuning (M3)
17. select Medius the Pure (M1)
18. Yes
19. Activate Mind Shuffle (S1): Add 1 appropriate monster to your hand
20. Selected Skull Archfiend of Chaos (Deck)
21. Selected Skull Archfiend of Chaos (hand)
22. Selected Theorealize Medius (Deck)
23. Yes
24. Selected Light and Darkness Ritual (Deck)
25. Selected Magician of Dark Chaos - Black Chaos (Deck)
26. Activate Theorealize Medius (hand): If a "Power Patron" card is on the field: You can Special Summon this card from your hand, then you can add 1 "Theorealize" Spell/Trap from your Deck to your hand
27. Yes
28. Selected Theorealize Past Lull (Deck)
29. Special Summon (procedure) Artmage Non-Finito (Extra Deck)
30. Selected Theorealize Past Lull (hand)
31. Selected Nervedo the Shadebeast Power Patron (hand)
32. Yes
33. Selected Artmage Impasto -Recapture- (Deck)
34. Activate Theorealize Past Lull (GY): Special Summon 1 Fusion, Synchro, or Xyz Monster from your GY
35. Selected Junora the Power Patron of Tuning (GY)
36. Activate Purification Power Patron (EMZ-L): Link Summon including this card as material
37. Selected Medicurius the Power Patron of Illusions (Extra Deck)
38. select Junora the Power Patron of Tuning (M2)
39. Finish selection
40. Activate Light and Darkness Ritual (GY): Add both this card and 1 card that mentions "Light and Darkness Ritual" from your GY to your hand
41. Selected Skull Archfiend of Chaos (GY)
42. Activate Light and Darkness Ritual (hand): Ritual Summon 1 "Magician of Dark Chaos - Black Chaos" or "Black Luster Soldier - Soldier of Light and Darkness" from your hand
43. Selected Magician of Dark Chaos - Black Chaos (hand)
44. Selected Black Chaos (GY) value 8
45. Yes
46. Special Summon 1 "Diactorus" monster
47. Activate Magician of Dark Chaos - Black Chaos (M2): Add 1 Spell from your GY to your hand
48. Selected Light and Darkness Ritual (GY)
49. Selected Artmage Diactorus (Extra Deck)

End board:  LP 8000 | Hand 5 | Deck 29 | Extra 10 | GY 4 | Banished 9   Monsters: M1: Artmage Diactorus Lv8 2800/2500 ATK || M2: Magician of Dark Chaos - Black Chaos Lv8 2800/2600 ATK || M3: Artmage Non-Finito Lv7 2400/1500 ATK || M4: Nerva the Power Patron of Creation Lv10 3300/3300 ATK || EMZ-L: Medicurius the Power Patron of Illusions L3↙↓↘ 3000    Spell/Trap: S1: Mind Shuffle || S2: Artmage Impasto -Recapture- (Set)   GY: Medius the Pure, Nervedo the Shadebeast Power Patron, Junora the Power Patron of Tuning, Purification Power Patron   Banished: Pendulum Treasure (face-down), Fiendsmith's Tract (face-down), Pendulum Treasure (face-down), Ars Magna of Infinity and Finity (face-down), Pendulum Treas

## Order 3: best 13.75 [margin 5.71: ss_panama 4.17, elfnote 7.92, despia -0.03, angelechy 7.68] (, worst 13.75) — from opening lanes
Others: tries Activate Theorealize Liberation 13.75 · tries Activate Artmage Diactorus 13.35 · v52-bcmed 13.2 · v52-bcmed 12.95 · bc1 11.03

1. Normal Summon Medius the Pure (hand)
2. Yes
3. Selected Nervedo the Shadebeast Power Patron (Deck)
4. Special Summon it
5. Activate Black Chaos (hand): Special Summon ("Black Chaos")
6. Selected Mind Shuffle (Deck)
7. Activate Nervedo the Shadebeast Power Patron (M1): Special Summon 1 "Nerva the Power Patron of Creation" from your Extra Deck
8. Activate Mind Shuffle (S1): Add 1 appropriate monster to your hand
9. Selected Skull Archfiend of Chaos (Deck)
10. Selected Skull Archfiend of Chaos (hand)
11. Selected Nerva the Power Patron of Creation (Extra Deck)
12. Yes
13. Selected Light and Darkness Ritual (Deck)
14. Activate Nervedo the Shadebeast Power Patron (Extra Deck): Special Summon 1 "Power Patron" or "Artmage" monster from your Deck or face-up Extra Deck
15. Selected Junoldo the Shadespirit Power Patron (Deck)
16. Selected Magician of Dark Chaos - Black Chaos (Deck)
17. Activate Junoldo the Shadespirit Power Patron (M1): Special Summon 1 "Junora the Power Patron of Tuning" from your Extra Deck
18. Selected Junora the Power Patron of Tuning (Extra Deck)
19. Yes
20. Selected Nervedo the Shadebeast Power Patron (Extra Deck)
21. Activate Light and Darkness Ritual (GY): Add both this card and 1 card that mentions "Light and Darkness Ritual" from your GY to your hand
22. Selected Black Chaos (GY)
23. Special Summon (procedure) Artmage Non-Finito (Extra Deck)
24. Selected Light and Darkness Ritual (hand)
25. Selected Nervedo the Shadebeast Power Patron (hand)
26. Yes
27. Selected Artmage Impasto -Recapture- (Deck)
28. Link Summon Purification Power Patron (Extra Deck)
29. select Junora the Power Patron of Tuning (M1)
30. select Medius the Pure (M4)
31. Yes
32. Selected Theorealize Medius (Deck)
33. Activate Theorealize Medius (hand): If a "Power Patron" card is on the field: You can Special Summon this card from your hand, then you can add 1 "Theorealize" Spell/Trap from your Deck to your hand
34. Yes
35. Selected Theorealize Liberation (Deck)
36. Activate Medius the Pure (GY): Shuffle 1 monster from your hand or face-up field into the Deck, and if you do, Special Summon this card
37. Selected Magician of Dark Chaos - Black Chaos (hand)
38. Activate Theorealize Liberation (hand): Add to your hand, or Special Summon, 1 monster from your Deck with 300 ATK/200 DEF
39. Activate Purification Power Patron (EMZ-L): Link Summon including this card as material
40. Selected Medicurius the Power Patron of Illusions (Extra Deck)
41. select Medius the Pure (M5)
42. Finish selection
43. Selected Griffoh (Deck)
44. Special Summon it
45. Yes
46. Special Summon 1 "Diactorus" monster
47. Selected Artmage Diactorus (Extra Deck)
48. Activate Skull Archfiend of Chaos (GY): Special Summon this card
49. select Medius the Pure (banishment)
50. select Purification Power Patron (GY)
51. select Light and Darkness Ritual (GY)
52. Default order
53. Link Summon S:P Little Knight (Extra Deck)
54. select Griffoh (M1)
55. select Skull Archfiend of Chaos (M5)

End board:  LP 8000 | Hand 4 | Deck 31 | Extra 10 | GY 4 | Banished 8   Monsters: M1: S:P Little Knight L2←→ 1600  || M2: Artmage Non-Finito Lv7 2400/1500 ATK || M3: Nerva the Power Patron of Creation Lv10 3300/3300 ATK || M4: Artmage Diactorus Lv8 2800/2500 ATK || EMZ-L: Medicurius the Power Patron of Illusions L3↙↓↘ 3000    Spell/Trap: S1: Mind Shuffle || S2: Artmage Impasto -Recapture- (Set)   GY: Nervedo the Shadebeast Power Patron, Junora the Power Patron of Tuning, Griffoh, Skull Archfiend of Chaos   Banished: Medius the Pure (face-down), Ars Magna - "Citrinitas" (face-down), Artmage Vandalism -Assault- (face-down), Artmage Finmel (face-down), Vidolium the Unstable Power Patron of Unity (face-dow

## Order 4: best 13.9 [margin 5.5: ss_panama 6.33, elfnote 1.8, despia 3.02, angelechy 9.9] (, worst 13.9) — from search
Others: tries Activate Junoldo the Shadespirit Power Patron 13.9 · tries Normal Summon Nervedo the Shadebeast Power Patron 13.9 · opening lanes 13.9 · search → new ending 13.9 · search → new ending 13.9 · v52-bcmed 13.75 · v52-bcmed 13.75 · search → new early order 13.6 · search → new early order 11.05 · bc1 11.04 · bc1 8

1. Activate Black Chaos (hand): Special Summon ("Black Chaos")
2. Selected Mind Shuffle (Deck)
3. Activate Mind Shuffle (S1): Add 1 appropriate monster to your hand
4. Selected Skull Archfiend of Chaos (Deck)
5. Selected Skull Archfiend of Chaos (hand)
6. Yes
7. Selected Light and Darkness Ritual (Deck)
8. Selected Magician of Dark Chaos - Black Chaos (Deck)
9. Normal Summon Medius the Pure (hand)
10. Yes
11. Selected Nervedo the Shadebeast Power Patron (Deck)
12. Special Summon it
13. Activate Nervedo the Shadebeast Power Patron (M3): Special Summon 1 "Nerva the Power Patron of Creation" from your Extra Deck
14. Selected Nerva the Power Patron of Creation (Extra Deck)
15. Yes
16. Selected Junoldo the Shadespirit Power Patron (Deck)
17. Activate Junoldo the Shadespirit Power Patron (M2): Special Summon 1 "Junora the Power Patron of Tuning" from your Extra Deck
18. Selected Junora the Power Patron of Tuning (Extra Deck)
19. Yes
20. Selected Nervedo the Shadebeast Power Patron (Extra Deck)
21. Activate Light and Darkness Ritual (GY): Add both this card and 1 card that mentions "Light and Darkness Ritual" from your GY to your hand
22. Selected Skull Archfiend of Chaos (GY)
23. Activate Light and Darkness Ritual (hand): Ritual Summon 1 "Magician of Dark Chaos - Black Chaos" or "Black Luster Soldier - Soldier of Light and Darkness" from your hand
24. Selected Magician of Dark Chaos - Black Chaos (hand)
25. Selected Black Chaos (GY) value 8
26. Yes
27. Selected Light and Darkness Ritual (GY)
28. Special Summon (procedure) Artmage Non-Finito (Extra Deck)
29. Selected Light and Darkness Ritual (hand)
30. Selected Nervedo the Shadebeast Power Patron (hand)
31. Yes
32. Selected Artmage Impasto -Recapture- (Deck)
33. Link Summon Purification Power Patron (Extra Deck)
34. select Medius the Pure (M1)
35. select Junora the Power Patron of Tuning (EMZ-R)
36. Yes
37. Selected Theorealize Medius (Deck)
38. Activate Medius the Pure (GY): Shuffle 1 monster from your hand or face-up field into the Deck, and if you do, Special Summon this card
39. Selected Skull Archfiend of Chaos (hand)
40. Activate Theorealize Medius (hand): If a "Power Patron" card is on the field: You can Special Summon this card from your hand, then you can add 1 "Theorealize" Spell/Trap from your Deck to your hand
41. Yes
42. Selected Theorealize Past Lull (Deck)
43. Activate Purification Power Patron (EMZ-R): Link Summon including this card as material
44. Selected Medicurius the Power Patron of Illusions (Extra Deck)
45. select Medius the Pure (M5)
46. Finish selection
47. Yes
48. Special Summon 1 "Diactorus" monster
49. Selected Artmage Diactorus (Extra Deck)

End board:  LP 8000 | Hand 4 | Deck 30 | Extra 10 | GY 4 | Banished 9   Monsters: M1: Artmage Diactorus Lv8 2800/2500 ATK || M2: Artmage Non-Finito Lv7 2400/1500 ATK || M3: Nerva the Power Patron of Creation Lv10 3300/3300 ATK || M4: Magician of Dark Chaos - Black Chaos Lv8 2800/2600 ATK || EMZ-L: Medicurius the Power Patron of Illusions L3↙↓↘ 3000    Spell/Trap: S1: Mind Shuffle || S2: Artmage Impasto -Recapture- (Set)   GY: Light and Darkness Ritual, Nervedo the Shadebeast Power Patron, Junora the Power Patron of Tuning, Purification Power Patron   Banished: Fiendsmith Engraver (face-down), Pendulum Treasure (face-down), Ars Magna - "Citrinitas" (face-down), Vidolium the Unstable Power Patron of Unit

