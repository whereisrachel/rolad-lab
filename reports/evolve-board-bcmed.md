# Evolved lines — Black Chaos, Medius the Pure, Ash Blossom & Joyous Spring, Droll & Lock Bird, Ghost Ogre & Snow Rabbit (findlist-1100)
2026-11-25T18:51:33.997Z

8 deck orders (different face-down banishes / draws), 3 opponent hands x o_ss_panama + o_elfnote + o_despia + o_angelechy per line, 5 min searches, 4 mutation rounds.
Fitness = end-board interruptions (the lab scorer, src/disrupt.mjs: wipe 2, negate 1-1.5, banish/protection less; hand traps kept count 1 each). The winner of each order is also played into the opponent decks: margin after their turn shown beside it.

**Margin after their turn (winners): average 5.95** (worst -1.67)

**Best line per deck order: average 14.04** (worst order 13.75). Winner came from: search 2, opening lanes 1, v52-bcmed → new ending 1, v52-bcmed 2, v52-bcmed → new early order 1, search → new early order 1

| seed line | works as written | its score when it works | seed start + search finish (all orders) |
|---|---|---|---|
| bc1 | 3/8 | 8.46 | 11.3 |
| v52-bcmed | 8/8 | 13.45 | 13.54 |

## Weak points found automatically
Cards whose face-down banish (by your own costs) hurt the best line most (average best line without vs with that card banished):

| card | orders where it was banished | drop |
|---|---|---|
| Theorealize Past Lull | 5/8 | 0.61 |
| Ars Magna of Infinity and Finity | 5/8 | 0.53 |
| Black Luster Soldier - Soldier of Light and Darkness | 4/8 | 0.43 |
| Griffoh | 4/8 | 0.35 |
| Dark Magical Circle | 3/8 | 0.3 |
| Plundered Power Patron Plane - Vidolia | 3/8 | 0.3 |
| Light and Darkness Ritual | 2/8 | 0.29 |
| Artmage Graflare | 4/8 | 0.28 |
| Artmage Vandalism -Assault- | 7/8 | -0.16 |
| Small World | 5/8 | -0.22 |

Where the hand-designed lines broke (next step that no longer worked):
- bc1: Yes (3x)
- bc1: Impasto (2x)

List changes proposed for the list test (data/proposals-findlist-1100.json):
- +1 Theorealize Past Lull, −1 Plundered Power Patron Plane - Vidolia — Theorealize Past Lull: best line 0.61 worse when a cost banished it (5 of 8 orders) — Black Chaos
- +1 Ars Magna of Infinity and Finity, −1 Artmage Vandalism -Assault- — Ars Magna of Infinity and Finity: best line 0.53 worse when a cost banished it (5 of 8 orders) — Black Chaos
- +1 Theorealize Past Lull — Theorealize Past Lull: best line 0.61 worse when a cost banished it (5 of 8 orders) — Black Chaos (add only: deck grows, up to 60)
- +1 Ars Magna of Infinity and Finity — Ars Magna of Infinity and Finity: best line 0.53 worse when a cost banished it (5 of 8 orders) — Black Chaos (add only: deck grows, up to 60)

Effects the search had not used, tried on purpose (best result so far):
- Activate Junoldo the Shadespirit Power Patron: 13.75
- Activate Fiendsmith Engraver: 13.75
- Activate Fiendsmith's Tract: 13.75
- Activate Fiendsmith Engraver: 13.3
- Link Summon Fiendsmith's Requiem: 13.3
- Activate Prohibited Power Patron Portal - Terminus: 13.15
- Normal Summon Ars Magna of Purification and Corruption: 13.15
- Normal Summon Junoldo the Shadespirit Power Patron: 12.75

## Order 1: best 14.05 [margin 7.44: ss_panama null, elfnote 7.1, despia 3.88, angelechy 10.05] (, worst 14.05) — from search
Others: search → new ending 14.05 · v52-bcmed 13.75 · v52-bcmed 13.75 · tries Link Summon Fiendsmith's Requiem 13.3 · tries Activate Fiendsmith Engraver 13.3 · opening lanes 13.3 · search → new early order 12.75 · search → new ending 12.14 · bc1 11.48 · bc1 8.69

1. Activate Black Chaos (hand): Special Summon ("Black Chaos")
2. Selected Mind Shuffle (Deck)
3. Normal Summon Medius the Pure (hand)
4. Yes
5. Selected Nervedo the Shadebeast Power Patron (Deck)
6. Special Summon it
7. Activate Nervedo the Shadebeast Power Patron (M3): Special Summon 1 "Nerva the Power Patron of Creation" from your Extra Deck
8. Selected Nerva the Power Patron of Creation (Extra Deck)
9. Yes
10. Selected Junoldo the Shadespirit Power Patron (Deck)
11. Activate Junoldo the Shadespirit Power Patron (M2): Special Summon 1 "Junora the Power Patron of Tuning" from your Extra Deck
12. Selected Junora the Power Patron of Tuning (Extra Deck)
13. Yes
14. Selected Nervedo the Shadebeast Power Patron (Extra Deck)
15. Link Summon Purification Power Patron (Extra Deck)
16. select Junora the Power Patron of Tuning (M4)
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
36. Activate Light and Darkness Ritual (GY): Add both this card and 1 card that mentions "Light and Darkness Ritual" from your GY to your hand
37. Selected Skull Archfiend of Chaos (GY)
38. Activate Light and Darkness Ritual (hand): Ritual Summon 1 "Magician of Dark Chaos - Black Chaos" or "Black Luster Soldier - Soldier of Light and Darkness" from your hand
39. Selected Magician of Dark Chaos - Black Chaos (hand)
40. Selected Black Chaos (GY) value 8
41. Yes
42. Special Summon 1 "Diactorus" monster
43. Activate Magician of Dark Chaos - Black Chaos (M5): Add 1 Spell from your GY to your hand
44. Activate Purification Power Patron (EMZ-L): Link Summon including this card as material
45. Selected Medicurius the Power Patron of Illusions (Extra Deck)
46. select Junora the Power Patron of Tuning (M2)
47. Finish selection
48. Selected Light and Darkness Ritual (GY)
49. Selected Artmage Diactorus (Extra Deck)

End board:  LP 8000 | Hand 5 | Deck 29 | Extra 10 | GY 4 | Banished 9   Monsters: M1: Artmage Diactorus Lv8 2800/2500 ATK || M3: Nerva the Power Patron of Creation Lv10 3300/3300 ATK || M4: Artmage Non-Finito Lv7 2400/1500 ATK || M5: Magician of Dark Chaos - Black Chaos Lv8 2800/2600 ATK || EMZ-R: Medicurius the Power Patron of Illusions L3↙↓↘ 3000    Spell/Trap: S1: Mind Shuffle || S2: Artmage Impasto -Recapture- (Set)   GY: Medius the Pure, Nervedo the Shadebeast Power Patron, Junora the Power Patron of Tuning, Purification Power Patron   Banished: Fiendsmith Engraver (face-down), Theorealize Liberation (face-down), Griffoh (face-down), Vidolium the Unstable Power Patron of Unity (face-down), Theorea

## Order 2: best 13.9 [margin 6.7: ss_panama 6.03, elfnote 10.05, despia 1.77, angelechy 9.85] (, worst 13.9) — from opening lanes
Others: tries Activate Junoldo the Shadespirit Power Patron 13.75 · opening lanes → new early order 13.75 · opening lanes → new ending 13.75 · opening lanes → new early order 13.75 · v52-bcmed 13.2 · v52-bcmed 12.95 · search 11.5 · tries Normal Summon Theorealize Medius 11.5 · bc1 11.48 · opening lanes → new ending 11.45 · bc1 8.69

1. Normal Summon Medius the Pure (hand)
2. Yes
3. Selected Nervedo the Shadebeast Power Patron (Deck)
4. Special Summon it
5. Activate Nervedo the Shadebeast Power Patron (M1): Special Summon 1 "Nerva the Power Patron of Creation" from your Extra Deck
6. Selected Nerva the Power Patron of Creation (Extra Deck)
7. Yes
8. Selected Junoldo the Shadespirit Power Patron (Deck)
9. Activate Junoldo the Shadespirit Power Patron (M3): Special Summon 1 "Junora the Power Patron of Tuning" from your Extra Deck
10. Selected Junora the Power Patron of Tuning (Extra Deck)
11. Yes
12. Selected Nervedo the Shadebeast Power Patron (Extra Deck)
13. Activate Black Chaos (hand): Special Summon ("Black Chaos")
14. Selected Mind Shuffle (Deck)
15. Activate Mind Shuffle (S1): Add 1 appropriate monster to your hand
16. Selected Skull Archfiend of Chaos (Deck)
17. Selected Skull Archfiend of Chaos (hand)
18. Yes
19. Selected Light and Darkness Ritual (Deck)
20. Selected Magician of Dark Chaos - Black Chaos (Deck)
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
34. select Medius the Pure (M4)
35. select Junora the Power Patron of Tuning (EMZ-L)
36. Yes
37. Selected Theorealize Medius (Deck)
38. Activate Medius the Pure (GY): Shuffle 1 monster from your hand or face-up field into the Deck, and if you do, Special Summon this card
39. Selected Skull Archfiend of Chaos (hand)
40. Activate Theorealize Medius (hand): If a "Power Patron" card is on the field: You can Special Summon this card from your hand, then you can add 1 "Theorealize" Spell/Trap from your Deck to your hand
41. Yes
42. Selected Theorealize Past Lull (Deck)
43. Activate Purification Power Patron (EMZ-L): Link Summon including this card as material
44. Selected Medicurius the Power Patron of Illusions (Extra Deck)
45. select Medius the Pure (M4)
46. Finish selection
47. Yes
48. Special Summon 1 "Diactorus" monster
49. Selected Artmage Diactorus (Extra Deck)

End board:  LP 8000 | Hand 4 | Deck 30 | Extra 10 | GY 4 | Banished 9   Monsters: M1: Nerva the Power Patron of Creation Lv10 3300/3300 ATK || M2: Magician of Dark Chaos - Black Chaos Lv8 2800/2600 ATK || M3: Artmage Non-Finito Lv7 2400/1500 ATK || M4: Artmage Diactorus Lv8 2800/2500 ATK || EMZ-L: Medicurius the Power Patron of Illusions L3↙↓↘ 3000    Spell/Trap: S1: Mind Shuffle || S2: Artmage Impasto -Recapture- (Set)   GY: Light and Darkness Ritual, Nervedo the Shadebeast Power Patron, Junora the Power Patron of Tuning, Purification Power Patron   Banished: Pendulum Treasure (face-down), Fiendsmith's Tract (face-down), Pendulum Treasure (face-down), Ars Magna of Infinity and Finity (face-down), Pend

## Order 3: best 13.75 [margin 4.27: ss_panama 6.68, elfnote 3.59, despia -0.57, angelechy 6.36] (, worst 13.75) — from v52-bcmed → new ending
Others: v52-bcmed 13.2 · v52-bcmed 12.95 · v52-bcmed → new ending → new early order 12 · search 11.5 · bc1 11.03 · tries Normal Summon Nervedo the Shadebeast Power Patron 10.5 · tries Activate Pendulum Treasure 10.5 · opening lanes 10.5 · v52-bcmed → new ending 10.23

1. Activate Black Chaos (hand): Special Summon ("Black Chaos")
2. Selected Mind Shuffle (Deck)
3. Activate Mind Shuffle (S1): Add 1 appropriate monster to your hand
4. Selected Skull Archfiend of Chaos (Deck)
5. Selected Skull Archfiend of Chaos (hand)
6. Yes
7. Selected Light and Darkness Ritual (Deck)
8. Selected Magician of Dark Chaos - Black Chaos (Deck)
9. Activate Light and Darkness Ritual (GY): Add both this card and 1 card that mentions "Light and Darkness Ritual" from your GY to your hand
10. Selected Black Chaos (GY)
11. Activate Light and Darkness Ritual (hand): Ritual Summon 1 "Magician of Dark Chaos - Black Chaos" or "Black Luster Soldier - Soldier of Light and Darkness" from your hand
12. Selected Magician of Dark Chaos - Black Chaos (hand)
13. Selected Black Chaos (hand) value 8
14. Yes
15. Selected Light and Darkness Ritual (GY)
16. Normal Summon Medius the Pure (hand)
17. Yes
18. Selected Nervedo the Shadebeast Power Patron (Deck)
19. Special Summon it
20. Special Summon (procedure) Artmage Non-Finito (Extra Deck)
21. Selected Light and Darkness Ritual (hand)
22. Selected Nervedo the Shadebeast Power Patron (M3)
23. Yes
24. Activate Artmage Non-Finito (M3): Set 1 "Artmage" Spell/Trap from your Deck
25. Selected Artmage Impasto -Recapture- (Deck)
26. Selected Junoldo the Shadespirit Power Patron (Deck)
27. Activate Junoldo the Shadespirit Power Patron (M4): Special Summon 1 "Junora the Power Patron of Tuning" from your Extra Deck
28. Selected Junora the Power Patron of Tuning (Extra Deck)
29. Yes
30. Selected Nervedo the Shadebeast Power Patron (Extra Deck)
31. Link Summon Purification Power Patron (Extra Deck)
32. select Junora the Power Patron of Tuning (M4)
33. select Medius the Pure (M2)
34. Yes
35. Selected Theorealize Medius (Deck)
36. Activate Medius the Pure (GY): Shuffle 1 monster from your hand or face-up field into the Deck, and if you do, Special Summon this card
37. Selected Nervedo the Shadebeast Power Patron (hand)
38. Activate Theorealize Medius (hand): If a "Power Patron" card is on the field: You can Special Summon this card from your hand, then you can add 1 "Theorealize" Spell/Trap from your Deck to your hand
39. Yes
40. Selected Theorealize Liberation (Deck)
41. Activate Theorealize Liberation (hand): Add to your hand, or Special Summon, 1 monster from your Deck with 300 ATK/200 DEF
42. Activate Purification Power Patron (EMZ-R): Link Summon including this card as material
43. Selected Medicurius the Power Patron of Illusions (Extra Deck)
44. select Medius the Pure (M4)
45. Finish selection
46. Selected Nervedo the Shadebeast Power Patron (Deck)
47. Special Summon it
48. Yes
49. Special Summon 1 "Diactorus" monster
50. Selected Artmage Diactorus (Extra Deck)
51. Activate Theorealize Liberation (GY): Treat 1 monster you control as a Tuner this turn
52. Selected Medicurius the Power Patron of Illusions (EMZ-L)
53. Activate Nervedo the Shadebeast Power Patron (M4): Special Summon 1 "Nerva the Power Patron of Creation" from your Extra Deck
54. Selected Nerva the Power Patron of Creation (Extra Deck)

End board:  LP 8000 | Hand 3 | Deck 29 | Extra 11 | GY 5 | Banished 9   Monsters: M1: Magician of Dark Chaos - Black Chaos Lv8 2800/2600 ATK || M2: Nerva the Power Patron of Creation Lv10 3300/3300 ATK || M3: Artmage Non-Finito Lv7 2400/1500 ATK || M5: Artmage Diactorus Lv8 2800/2500 ATK || EMZ-L: Medicurius the Power Patron of Illusions L3↙↓↘ 3000    Spell/Trap: S1: Mind Shuffle || S2: Artmage Impasto -Recapture- (Set)   GY: Skull Archfiend of Chaos, Black Chaos, Light and Darkness Ritual, Junora the Power Patron of Tuning, Purification Power Patron   Banished: Small World (face-down), Artmage Vandalism -Assault- (face-down), Theorealize Past Lull (face-down), Medius the Pure, Theorealize Medius, Theo

## Order 4: best 13.75 [margin 7.26: ss_panama 8.82, elfnote 2.88, despia 9.75, angelechy 9.75] (, worst 13.75) — from v52-bcmed
Others: v52-bcmed 13.75 · v52-bcmed → new early order 13.75 · search 13.45 · tries Normal Summon Ars Magna of Purification and Corruption 13.15 · opening lanes 13.15 · tries Activate Theorealize Liberation 12.25 · v52-bcmed → new ending 11.18 · bc1 11.04 · v52-bcmed → new ending 9.75 · v52-bcmed → new early order 8.58 · bc1 8

1. Activate Black Chaos (hand): Special Summon ("Black Chaos")
2. Selected Mind Shuffle (Deck)
3. Activate Mind Shuffle (S1): Add 1 appropriate monster to your hand
4. Selected Skull Archfiend of Chaos (Deck)
5. Selected Skull Archfiend of Chaos (hand)
6. Yes
7. Selected Light and Darkness Ritual (Deck)
8. Selected Magician of Dark Chaos - Black Chaos (Deck)
9. Activate Light and Darkness Ritual (GY): Add both this card and 1 card that mentions "Light and Darkness Ritual" from your GY to your hand
10. Selected Black Chaos (GY)
11. Activate Light and Darkness Ritual (hand): Ritual Summon 1 "Magician of Dark Chaos - Black Chaos" or "Black Luster Soldier - Soldier of Light and Darkness" from your hand
12. Selected Magician of Dark Chaos - Black Chaos (hand)
13. Selected Black Chaos (hand) value 8
14. Yes
15. Selected Light and Darkness Ritual (GY)
16. Normal Summon Medius the Pure (hand)
17. Yes
18. Selected Nervedo the Shadebeast Power Patron (Deck)
19. Special Summon it
20. Special Summon (procedure) Artmage Non-Finito (Extra Deck)
21. Selected Light and Darkness Ritual (hand)
22. Selected Nervedo the Shadebeast Power Patron (M3)
23. Yes
24. Activate Artmage Non-Finito (M3): Set 1 "Artmage" Spell/Trap from your Deck
25. Selected Artmage Impasto -Recapture- (Deck)
26. Selected Junoldo the Shadespirit Power Patron (Deck)
27. Activate Junoldo the Shadespirit Power Patron (M4): Special Summon 1 "Junora the Power Patron of Tuning" from your Extra Deck
28. Selected Junora the Power Patron of Tuning (Extra Deck)
29. Yes
30. Selected Nervedo the Shadebeast Power Patron (Extra Deck)
31. Link Summon Purification Power Patron (Extra Deck)
32. select Medius the Pure (M2)
33. select Junora the Power Patron of Tuning (M4)
34. Yes
35. Selected Theorealize Medius (Deck)
36. Activate Theorealize Medius (hand): If a "Power Patron" card is on the field: You can Special Summon this card from your hand, then you can add 1 "Theorealize" Spell/Trap from your Deck to your hand
37. Yes
38. Selected Theorealize Liberation (Deck)
39. Activate Medius the Pure (GY): Shuffle 1 monster from your hand or face-up field into the Deck, and if you do, Special Summon this card
40. Selected Nervedo the Shadebeast Power Patron (hand)
41. Activate Theorealize Liberation (hand): Add to your hand, or Special Summon, 1 monster from your Deck with 300 ATK/200 DEF
42. Selected Nervedo the Shadebeast Power Patron (Deck)
43. Special Summon it
44. Activate Nervedo the Shadebeast Power Patron (M5): Special Summon 1 "Nerva the Power Patron of Creation" from your Extra Deck
45. Selected Nerva the Power Patron of Creation (Extra Deck)
46. Activate Purification Power Patron (EMZ-L): Link Summon including this card as material
47. Selected Medicurius the Power Patron of Illusions (Extra Deck)
48. select Medius the Pure (M4)
49. Finish selection
50. Yes
51. Special Summon 1 "Diactorus" monster
52. Selected Artmage Diactorus (Extra Deck)

End board:  LP 8000 | Hand 3 | Deck 29 | Extra 11 | GY 6 | Banished 8   Monsters: M1: Magician of Dark Chaos - Black Chaos Lv8 2800/2600 ATK || M2: Artmage Diactorus Lv8 2800/2500 ATK || M3: Artmage Non-Finito Lv7 2400/1500 ATK || M5: Nerva the Power Patron of Creation Lv10 3300/3300 ATK || EMZ-L: Medicurius the Power Patron of Illusions L3↙↓↘ 3000    Spell/Trap: S1: Mind Shuffle || S2: Artmage Impasto -Recapture- (Set)   GY: Skull Archfiend of Chaos, Black Chaos, Light and Darkness Ritual, Junora the Power Patron of Tuning, Theorealize Liberation, Purification Power Patron   Banished: Theorealize Past Lull (face-down), Apprentice Illusion Magician (face-down), Small World (face-down), Medius the Pure 

## Order 5: best 13.9 [margin 6.11: ss_panama 7.75, elfnote 0.33, despia 3.75, angelechy 9.85] (, worst 13.9) — from v52-bcmed → new early order
Others: v52-bcmed 13.75 · v52-bcmed 13.75 · v52-bcmed → new ending 13.75 · v52-bcmed → new ending 13.75 · tries Normal Summon Ars Magna of Infinity and Finity 12.75 · tries Normal Summon Junoldo the Shadespirit Power Patron 12.75 · opening lanes 12.75 · search 11.5 · bc1 11.03

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
11. Activate Light and Darkness Ritual (hand): Ritual Summon 1 "Magician of Dark Chaos - Black Chaos" or "Black Luster Soldier - Soldier of Light and Darkness" from your hand
12. Selected Magician of Dark Chaos - Black Chaos (hand)
13. Selected Black Chaos (GY) value 8
14. Yes
15. Selected Light and Darkness Ritual (GY)
16. Normal Summon Medius the Pure (hand)
17. Yes
18. Selected Nervedo the Shadebeast Power Patron (Deck)
19. Special Summon it
20. Special Summon (procedure) Artmage Non-Finito (Extra Deck)
21. Selected Light and Darkness Ritual (hand)
22. Selected Nervedo the Shadebeast Power Patron (M4)
23. Yes
24. Activate Artmage Non-Finito (M4): Set 1 "Artmage" Spell/Trap from your Deck
25. Selected Artmage Impasto -Recapture- (Deck)
26. Selected Junoldo the Shadespirit Power Patron (Deck)
27. Activate Junoldo the Shadespirit Power Patron (M5): Special Summon 1 "Junora the Power Patron of Tuning" from your Extra Deck
28. Selected Junora the Power Patron of Tuning (Extra Deck)
29. Yes
30. Selected Nervedo the Shadebeast Power Patron (Extra Deck)
31. Link Summon Purification Power Patron (Extra Deck)
32. select Medius the Pure (M2)
33. select Junora the Power Patron of Tuning (EMZ-R)
34. Yes
35. Selected Theorealize Medius (Deck)
36. Activate Theorealize Medius (hand): If a "Power Patron" card is on the field: You can Special Summon this card from your hand, then you can add 1 "Theorealize" Spell/Trap from your Deck to your hand
37. Yes
38. Selected Theorealize Liberation (Deck)
39. Activate Medius the Pure (GY): Shuffle 1 monster from your hand or face-up field into the Deck, and if you do, Special Summon this card
40. Selected Skull Archfiend of Chaos (hand)
41. Activate Theorealize Liberation (hand): Add to your hand, or Special Summon, 1 monster from your Deck with 300 ATK/200 DEF
42. Activate Purification Power Patron (EMZ-R): Link Summon including this card as material
43. Selected Medicurius the Power Patron of Illusions (Extra Deck)
44. select Medius the Pure (M2)
45. Finish selection
46. Selected Nervedo the Shadebeast Power Patron (Deck)
47. Special Summon it
48. Yes
49. Special Summon 1 "Diactorus" monster
50. Selected Artmage Diactorus (Extra Deck)
51. Activate Nervedo the Shadebeast Power Patron (M5): Special Summon 1 "Nerva the Power Patron of Creation" from your Extra Deck
52. Selected Nerva the Power Patron of Creation (Extra Deck)

End board:  LP 8000 | Hand 4 | Deck 29 | Extra 11 | GY 4 | Banished 9   Monsters: M1: Magician of Dark Chaos - Black Chaos Lv8 2800/2600 ATK || M2: Artmage Diactorus Lv8 2800/2500 ATK || M3: Nerva the Power Patron of Creation Lv10 3300/3300 ATK || M4: Artmage Non-Finito Lv7 2400/1500 ATK || EMZ-L: Medicurius the Power Patron of Illusions L3↙↓↘ 3000    Spell/Trap: S1: Mind Shuffle || S2: Artmage Impasto -Recapture- (Set)   GY: Light and Darkness Ritual, Junora the Power Patron of Tuning, Purification Power Patron, Theorealize Liberation   Banished: Black Chaos, Vidolium the Unstable Power Patron of Unity (face-down), Theorealize Medius (face-down), Ars Magna of Infinity and Finity (face-down), Medius th

## Order 6: best 13.9 [margin 8.07: ss_panama 3.18, elfnote 10.2, despia 8.57, angelechy 8.5] (, worst 13.9) — from search
Others: search → new ending 13.9 · search → new early order 13.9 · v52-bcmed 13.2 · search → new early order 13.2 · tries Activate Prohibited Power Patron Portal - Terminus 13.15 · v52-bcmed 12.95 · bc1 11.84 · opening lanes 11.5 · search → new ending 11.18 · tries Activate Vidolium the Unstable Power Patron of Unity 10

1. Activate Black Chaos (hand): Special Summon ("Black Chaos")
2. Selected Mind Shuffle (Deck)
3. Normal Summon Medius the Pure (hand)
4. Yes
5. Activate Mind Shuffle (S1): Add 1 appropriate monster to your hand
6. Selected Skull Archfiend of Chaos (Deck)
7. Selected Skull Archfiend of Chaos (hand)
8. Selected Nervedo the Shadebeast Power Patron (Deck)
9. Special Summon it
10. Yes
11. Selected Light and Darkness Ritual (Deck)
12. Selected Magician of Dark Chaos - Black Chaos (Deck)
13. Activate Light and Darkness Ritual (GY): Add both this card and 1 card that mentions "Light and Darkness Ritual" from your GY to your hand
14. Selected Skull Archfiend of Chaos (GY)
15. Activate Light and Darkness Ritual (hand): Ritual Summon 1 "Magician of Dark Chaos - Black Chaos" or "Black Luster Soldier - Soldier of Light and Darkness" from your hand
16. Selected Magician of Dark Chaos - Black Chaos (hand)
17. Selected Black Chaos (GY) value 8
18. Yes
19. Selected Light and Darkness Ritual (GY)
20. Activate Nervedo the Shadebeast Power Patron (M3): Special Summon 1 "Nerva the Power Patron of Creation" from your Extra Deck
21. Selected Nerva the Power Patron of Creation (Extra Deck)
22. Yes
23. Selected Junoldo the Shadespirit Power Patron (Deck)
24. Activate Junoldo the Shadespirit Power Patron (M5): Special Summon 1 "Junora the Power Patron of Tuning" from your Extra Deck
25. Selected Junora the Power Patron of Tuning (Extra Deck)
26. Yes
27. Selected Nervedo the Shadebeast Power Patron (Extra Deck)
28. Special Summon (procedure) Artmage Non-Finito (Extra Deck)
29. Selected Light and Darkness Ritual (hand)
30. Selected Nervedo the Shadebeast Power Patron (hand)
31. Yes
32. Selected Artmage Impasto -Recapture- (Deck)
33. Activate Skull Archfiend of Chaos (hand): Special Summon this card
34. select Nervedo the Shadebeast Power Patron (GY)
35. select Light and Darkness Ritual (GY)
36. select Black Chaos (banishment)
37. Default order
38. Link Summon Purification Power Patron (Extra Deck)
39. select Medius the Pure (M4)
40. select Junora the Power Patron of Tuning (EMZ-L)
41. Yes
42. Selected Theorealize Medius (Deck)
43. Activate Medius the Pure (GY): Shuffle 1 monster from your hand or face-up field into the Deck, and if you do, Special Summon this card
44. Selected Skull Archfiend of Chaos (M5)
45. Activate Theorealize Medius (hand): If a "Power Patron" card is on the field: You can Special Summon this card from your hand, then you can add 1 "Theorealize" Spell/Trap from your Deck to your hand
46. Yes
47. Selected Theorealize Past Lull (Deck)
48. Activate Purification Power Patron (EMZ-L): Link Summon including this card as material
49. Selected Medicurius the Power Patron of Illusions (Extra Deck)
50. select Medius the Pure (M4)
51. Finish selection
52. Yes
53. Special Summon 1 "Diactorus" monster
54. Selected Artmage Diactorus (Extra Deck)

End board:  LP 8000 | Hand 4 | Deck 33 | Extra 10 | GY 2 | Banished 8   Monsters: M1: Magician of Dark Chaos - Black Chaos Lv8 2800/2600 ATK || M2: Nerva the Power Patron of Creation Lv10 3300/3300 ATK || M3: Artmage Non-Finito Lv7 2400/1500 ATK || M4: Artmage Diactorus Lv8 2800/2500 ATK || EMZ-L: Medicurius the Power Patron of Illusions L3↙↓↘ 3000    Spell/Trap: S1: Mind Shuffle || S2: Artmage Impasto -Recapture- (Set)   GY: Junora the Power Patron of Tuning, Purification Power Patron   Banished: Theorealize Medius (face-down), Fiendsmith's Tract (face-down), Artmage Graflare (face-down), Pendulum Treasure (face-down), Small World (face-down), Pendulum Treasure (face-down), Medius the Pure, Theorealiz

## Order 7: best 13.75 [margin 5.59: ss_panama 6.22, elfnote 1.41, despia 7.75, angelechy 9.82] (, worst 13.75) — from v52-bcmed
Others: v52-bcmed 13.75 · v52-bcmed → new early order 13.6 · v52-bcmed → new ending 13.35 · search 12.9 · v52-bcmed → new ending 12.9 · bc1 10.89 · tries Activate Small World 10.5 · opening lanes 10.5 · tries Activate Artmage Vandalism -Assault- 7.9

1. Activate Black Chaos (hand): Special Summon ("Black Chaos")
2. Selected Mind Shuffle (Deck)
3. Activate Mind Shuffle (S1): Add 1 appropriate monster to your hand
4. Selected Skull Archfiend of Chaos (Deck)
5. Selected Skull Archfiend of Chaos (hand)
6. Yes
7. Selected Light and Darkness Ritual (Deck)
8. Selected Magician of Dark Chaos - Black Chaos (Deck)
9. Activate Light and Darkness Ritual (GY): Add both this card and 1 card that mentions "Light and Darkness Ritual" from your GY to your hand
10. Selected Black Chaos (GY)
11. Activate Light and Darkness Ritual (hand): Ritual Summon 1 "Magician of Dark Chaos - Black Chaos" or "Black Luster Soldier - Soldier of Light and Darkness" from your hand
12. Selected Magician of Dark Chaos - Black Chaos (hand)
13. Selected Black Chaos (hand) value 8
14. Yes
15. Selected Light and Darkness Ritual (GY)
16. Normal Summon Medius the Pure (hand)
17. Yes
18. Selected Nervedo the Shadebeast Power Patron (Deck)
19. Special Summon it
20. Special Summon (procedure) Artmage Non-Finito (Extra Deck)
21. Selected Light and Darkness Ritual (hand)
22. Selected Nervedo the Shadebeast Power Patron (M3)
23. Yes
24. Activate Artmage Non-Finito (M3): Set 1 "Artmage" Spell/Trap from your Deck
25. Selected Artmage Impasto -Recapture- (Deck)
26. Selected Junoldo the Shadespirit Power Patron (Deck)
27. Activate Junoldo the Shadespirit Power Patron (M4): Special Summon 1 "Junora the Power Patron of Tuning" from your Extra Deck
28. Selected Junora the Power Patron of Tuning (Extra Deck)
29. Yes
30. Selected Nervedo the Shadebeast Power Patron (Extra Deck)
31. Link Summon Purification Power Patron (Extra Deck)
32. select Medius the Pure (M2)
33. select Junora the Power Patron of Tuning (M4)
34. Yes
35. Selected Theorealize Medius (Deck)
36. Activate Theorealize Medius (hand): If a "Power Patron" card is on the field: You can Special Summon this card from your hand, then you can add 1 "Theorealize" Spell/Trap from your Deck to your hand
37. Yes
38. Selected Theorealize Liberation (Deck)
39. Activate Medius the Pure (GY): Shuffle 1 monster from your hand or face-up field into the Deck, and if you do, Special Summon this card
40. Selected Nervedo the Shadebeast Power Patron (hand)
41. Activate Theorealize Liberation (hand): Add to your hand, or Special Summon, 1 monster from your Deck with 300 ATK/200 DEF
42. Selected Nervedo the Shadebeast Power Patron (Deck)
43. Special Summon it
44. Activate Nervedo the Shadebeast Power Patron (M5): Special Summon 1 "Nerva the Power Patron of Creation" from your Extra Deck
45. Selected Nerva the Power Patron of Creation (Extra Deck)
46. Activate Purification Power Patron (EMZ-L): Link Summon including this card as material
47. Selected Medicurius the Power Patron of Illusions (Extra Deck)
48. select Medius the Pure (M4)
49. Finish selection
50. Yes
51. Special Summon 1 "Diactorus" monster
52. Selected Artmage Diactorus (Extra Deck)

End board:  LP 8000 | Hand 3 | Deck 29 | Extra 11 | GY 6 | Banished 8   Monsters: M1: Magician of Dark Chaos - Black Chaos Lv8 2800/2600 ATK || M2: Artmage Diactorus Lv8 2800/2500 ATK || M3: Artmage Non-Finito Lv7 2400/1500 ATK || M5: Nerva the Power Patron of Creation Lv10 3300/3300 ATK || EMZ-L: Medicurius the Power Patron of Illusions L3↙↓↘ 3000    Spell/Trap: S1: Mind Shuffle || S2: Artmage Impasto -Recapture- (Set)   GY: Skull Archfiend of Chaos, Black Chaos, Light and Darkness Ritual, Junora the Power Patron of Tuning, Theorealize Liberation, Purification Power Patron   Banished: Theorealize Medius (face-down), Lacrima the Crimson Tears (face-down), Artmage Finmel (face-down), Pendulum Treasure (

## Order 8: best 15.3 [margin 2.14: ss_panama 0.72, elfnote null, despia 1.15, angelechy 3.42] (, worst 15.3) — from search → new early order
Others: search 13.9 · v52-bcmed 13.75 · v52-bcmed 13.75 · tries Activate Fiendsmith's Tract 13.75 · tries Activate Fiendsmith Engraver 13.75 · search → new early order 13.75 · search → new ending 13.6 · bc1 11.6 · search → new ending 11.45 · opening lanes 5.1

1. Activate Black Chaos (hand): Special Summon ("Black Chaos")
2. Selected Mind Shuffle (Deck)
3. Normal Summon Medius the Pure (hand)
4. Yes
5. Selected Nervedo the Shadebeast Power Patron (Deck)
6. Special Summon it
7. Activate Nervedo the Shadebeast Power Patron (M1): Special Summon 1 "Nerva the Power Patron of Creation" from your Extra Deck
8. Selected Nerva the Power Patron of Creation (Extra Deck)
9. Yes
10. Selected Theorealize Medius (Deck)
11. Activate Mind Shuffle (S1): Add 1 appropriate monster to your hand
12. Selected Skull Archfiend of Chaos (Deck)
13. Selected Skull Archfiend of Chaos (hand)
14. Yes
15. Selected Light and Darkness Ritual (Deck)
16. Selected Magician of Dark Chaos - Black Chaos (Deck)
17. Activate Light and Darkness Ritual (GY): Add both this card and 1 card that mentions "Light and Darkness Ritual" from your GY to your hand
18. Selected Skull Archfiend of Chaos (GY)
19. Activate Light and Darkness Ritual (hand): Ritual Summon 1 "Magician of Dark Chaos - Black Chaos" or "Black Luster Soldier - Soldier of Light and Darkness" from your hand
20. Selected Magician of Dark Chaos - Black Chaos (hand)
21. Selected Black Chaos (GY) value 8
22. Yes
23. Add 1 "Ars Magna" card from your Deck to your hand
24. Activate Magician of Dark Chaos - Black Chaos (M3): Add 1 Spell from your GY to your hand
25. Selected Light and Darkness Ritual (GY)
26. Selected Ars Magna of Infinity and Finity (Deck)
27. Activate Ars Magna of Infinity and Finity (hand): You can banish this card from your hand; add 1 non-Warrior "Ars Magna" monster from your Deck to your hand
28. Selected Ars Magna of Purification and Corruption (Deck)
29. Activate Ars Magna of Purification and Corruption (hand): You can banish this card from your hand; add 1 "Ars Magna" Spell/Trap from your Deck to your hand
30. Selected Ars Magna - "Citrinitas" (Deck)
31. Set Spell/Trap Ars Magna - "Citrinitas"
32. Activate Ars Magna - "Citrinitas" (S2): activate this card
33. Activate Ars Magna - "Citrinitas" (S2): Add 1 "Medius" or "Ars Magna" monster from your Deck to your hand
34. Selected Theorealize Medius (Deck)
35. Activate Theorealize Medius (hand): If a "Power Patron" card is on the field: You can Special Summon this card from your hand, then you can add 1 "Theorealize" Spell/Trap from your Deck to your hand
36. Yes
37. Selected Theorealize Liberation (Deck)
38. Activate Theorealize Liberation (hand): Add to your hand, or Special Summon, 1 monster from your Deck with 300 ATK/200 DEF
39. Selected Junoldo the Shadespirit Power Patron (Deck)
40. Add the card(s) to your hand
41. Activate Junoldo the Shadespirit Power Patron (hand): Activate it as a Pendulum Spell
42. Activate Theorealize Liberation (GY): Treat 1 monster you control as a Tuner this turn
43. Selected Medius the Pure (M4)
44. Link Summon S:P Little Knight (Extra Deck)
45. select Theorealize Medius (M2)
46. select Theorealize Medius (M5)
47. Activate Ars Magna of Purification and Corruption (banishment): Special Summon this card
48. Link Summon Medicurius the Power Patron of Illusions (Extra Deck)
49. select Ars Magna of Purification and Corruption (M2)
50. select S:P Little Knight (EMZ-R)
51. Finish selection
52. Activate Junoldo the Shadespirit Power Patron (S5): Destroy this card, draw 2 cards, then discard 1 card
53. Activate Ars Magna of Infinity and Finity (banishment): Special Summon this card
54. Selected Skull Archfiend of Chaos (hand)
55. Yes
56. Selected Nervedo the Shadebeast Power Patron (Extra Deck)
57. Activate Ars Magna of Infinity and Finity (M2): Banish 1 monster on the field
58. Selected Medius the Pure (M4)
59. Activate Skull Archfiend of Chaos (GY): Special Summon this card
60. select Theorealize Medius (GY)
61. select S:P Little Knight (GY)
62. select Black Chaos (banishment)
63. Default order
64. Special Summon (procedure) Artmage Non-Finito (Extra Deck)
65. Selected Light and Darkness Ritual (hand)
66. Selected Nervedo the Shadebeast Power Patron (hand)
67. Yes
68. Selected Artmage Impasto -Recapture- (Deck)
69. Link Summon S:P Little Knight (Extra Deck)
70. select Ars Magna of Infinity and Finity (M2)
71. select Skull Archfiend of Chaos (M4)
72. Activate Artmage Graflare (hand): Special Summon this card from your hand
73. Yes
74. Selected Artmage Vandalism -Assault- (Deck)
75. Activate Artmage Vandalism -Assault- (S4): When this card is activated: You can add 1 "Medius the Pure" from your Deck to your hand
76. Yes
77. Selected Medius the Pure (Deck)

End board:  LP 8000 | Hand 5 | Deck 26 | Extra 12 | GY 6 | Banished 5   Monsters: M1: Nerva the Power Patron of Creation Lv10 3300/3300 ATK || M2: S:P Little Knight L2←→ 1600  || M3: Magician of Dark Chaos - Black Chaos Lv8 2800/2600 ATK || M4: Artmage Graflare Lv5 2100/1500 ATK || M5: Artmage Non-Finito Lv7 2400/1500 ATK || EMZ-L: Medicurius the Power Patron of Illusions L3↙↓↘ 9000    Spell/Trap: S1: Mind Shuffle || S2: Ars Magna - "Citrinitas" || S3: Artmage Impasto -Recapture- (Set) || S4: Artmage Vandalism -Assault-   GY: Theorealize Medius, Ars Magna of Purification and Corruption, Light and Darkness Ritual, Nervedo the Shadebeast Power Patron, Ars Magna of Infinity and Finity, Skull Archfiend of 

