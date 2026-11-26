# Evolved lines — Black Chaos, Medius the Pure, Ash Blossom & Joyous Spring, Droll & Lock Bird, Ghost Ogre & Snow Rabbit (findlist-1100)
2026-11-26T02:15:07.828Z

8 deck orders (different face-down banishes / draws), 3 opponent hands x o_ss_panama + o_elfnote + o_despia + o_angelechy per line, 5 min searches, 0 mutation rounds.
Fitness = end-board interruptions (the lab scorer, src/disrupt.mjs: wipe 2, negate 1-1.5, banish/protection less; hand traps kept count 1 each). The winner of each order is also played into the opponent decks: margin after their turn shown beside it.

**Margin after their turn (winners): average null** (worst 99)

**Best line per deck order: average 13.92** (worst order 13.45). Winner came from: opening lanes 2, search 5, drawpre-bcmed-b 1

| seed line | works as written | its score when it works | seed start + search finish (all orders) |
|---|---|---|---|
| drawpre-bcmed-a | 7/8 | 5.4 | 9.63 |
| drawpre-bcmed-b | 0/8 | - | 12.33 |

## Weak points found automatically
Cards whose face-down banish (by your own costs) hurt the best line most (average best line without vs with that card banished):

| card | orders where it was banished | drop |
|---|---|---|
| Medius the Pure | 6/8 | 0.47 |
| Nervedo the Shadebeast Power Patron | 6/8 | 0.28 |
| Theorealize Medius | 4/8 | 0.26 |
| Small World | 3/8 | 0.19 |
| Ars Magna of Infinity and Finity | 2/8 | 0.13 |
| Artmage Impasto -Recapture- | 2/8 | 0.13 |
| Vidolium the Unstable Power Patron of Unity | 3/8 | 0.03 |
| Fiendsmith's Tract | 7/8 | -0.02 |
| Pendulum Treasure | 6/8 | -0.02 |
| Magician of Dark Chaos - Black Chaos | 2/8 | -0.07 |

Where the hand-designed lines broke (next step that no longer worked):
- drawpre-bcmed-b: Default order (8x)
- drawpre-bcmed-a: Yes (1x)

Effects the search had not used, tried on purpose (best result so far):
- Activate Griffoh: 4.67
- Activate Nervedo the Shadebeast Power Patron: 4.18
- Activate Artmage Diactorus: 3.37
- Activate Artmage Vandalism -Assault-: 2.73
- Activate Vidolium the Unstable Power Patron of Unity: 2.37
- Activate Nervedo the Shadebeast Power Patron: 2.34
- Activate Junoldo the Shadespirit Power Patron: 2.14
- Activate Nervedo the Shadebeast Power Patron: 1.81

## Order 1: best 14.05 (, worst 14.05) — from opening lanes
Others: search 13.9 · drawpre-bcmed-a 13.55 · drawpre-bcmed-b 11.66 · drawpre-bcmed-a 7.74

1. Activate Black Chaos (hand): Special Summon ("Black Chaos")
2. Selected Mind Shuffle (Deck)
3. Normal Summon Medius the Pure (hand)
4. Yes
5. Selected Nervedo the Shadebeast Power Patron (Deck)
6. Special Summon it
7. Activate Nervedo the Shadebeast Power Patron (M4): Special Summon 1 "Nerva the Power Patron of Creation" from your Extra Deck
8. Selected Nerva the Power Patron of Creation (Extra Deck)
9. Yes
10. Selected Junoldo the Shadespirit Power Patron (Deck)
11. Activate Junoldo the Shadespirit Power Patron (M2): Special Summon 1 "Junora the Power Patron of Tuning" from your Extra Deck
12. Selected Junora the Power Patron of Tuning (Extra Deck)
13. Yes
14. Selected Nervedo the Shadebeast Power Patron (Extra Deck)
15. Link Summon Purification Power Patron (Extra Deck)
16. select Medius the Pure (M1)
17. select Junora the Power Patron of Tuning (EMZ-R)
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
47. Activate Magician of Dark Chaos - Black Chaos (M1): Add 1 Spell from your GY to your hand
48. Selected Light and Darkness Ritual (GY)
49. Selected Artmage Diactorus (Extra Deck)

End board:  LP 8000 | Hand 5 | Deck 29 | Extra 10 | GY 4 | Banished 9   Monsters: M1: Magician of Dark Chaos - Black Chaos Lv8 2800/2600 ATK || M2: Artmage Diactorus Lv8 2800/2500 ATK || M3: Nerva the Power Patron of Creation Lv10 3300/3300 ATK || M5: Artmage Non-Finito Lv7 2400/1500 ATK || EMZ-L: Medicurius the Power Patron of Illusions L3↙↓↘ 3000    Spell/Trap: S1: Mind Shuffle || S2: Artmage Impasto -Recapture- (Set)   GY: Medius the Pure, Nervedo the Shadebeast Power Patron, Junora the Power Patron of Tuning, Purification Power Patron   Banished: Fiendsmith Engraver (face-down), Theorealize Liberation (face-down), Griffoh (face-down), Vidolium the Unstable Power Patron of Unity (face-down), Theorea

## Order 2: best 13.45 (, worst 13.45) — from search
Others: opening lanes 13.35 · drawpre-bcmed-b 11.9 · drawpre-bcmed-a 9.64 · drawpre-bcmed-a 5.1

1. Normal Summon Medius the Pure (hand)
2. Yes
3. Selected Nervedo the Shadebeast Power Patron (Deck)
4. Special Summon it
5. Activate Nervedo the Shadebeast Power Patron (M3): Special Summon 1 "Nerva the Power Patron of Creation" from your Extra Deck
6. Selected Nerva the Power Patron of Creation (Extra Deck)
7. Yes
8. Selected Junoldo the Shadespirit Power Patron (Deck)
9. Activate Junoldo the Shadespirit Power Patron (M5): Special Summon 1 "Junora the Power Patron of Tuning" from your Extra Deck
10. Selected Junora the Power Patron of Tuning (Extra Deck)
11. Yes
12. Selected Nervedo the Shadebeast Power Patron (Extra Deck)
13. Activate Black Chaos (hand): Special Summon ("Black Chaos")
14. Selected Mind Shuffle (Deck)
15. Link Summon Purification Power Patron (Extra Deck)
16. select Medius the Pure (M1)
17. select Junora the Power Patron of Tuning (EMZ-R)
18. Yes
19. Activate Mind Shuffle (S1): Add 1 appropriate monster to your hand
20. Selected Skull Archfiend of Chaos (Deck)
21. Selected Skull Archfiend of Chaos (hand)
22. Selected Theorealize Medius (Deck)
23. Yes
24. Selected Light and Darkness Ritual (Deck)
25. Selected Black Luster Soldier - Soldier of Light and Darkness (Deck)
26. Activate Medius the Pure (GY): Shuffle 1 monster from your hand or face-up field into the Deck, and if you do, Special Summon this card
27. Selected Black Luster Soldier - Soldier of Light and Darkness (hand)
28. Activate Theorealize Medius (hand): If a "Power Patron" card is on the field: You can Special Summon this card from your hand, then you can add 1 "Theorealize" Spell/Trap from your Deck to your hand
29. Yes
30. Selected Theorealize Past Lull (Deck)
31. Activate Light and Darkness Ritual (GY): Add both this card and 1 card that mentions "Light and Darkness Ritual" from your GY to your hand
32. Selected Black Chaos (GY)
33. Special Summon (procedure) Artmage Non-Finito (Extra Deck)
34. Selected Light and Darkness Ritual (hand)
35. Selected Nervedo the Shadebeast Power Patron (hand)
36. Yes
37. Activate Purification Power Patron (EMZ-L): Link Summon including this card as material
38. Selected Medicurius the Power Patron of Illusions (Extra Deck)
39. select Medius the Pure (M2)
40. Finish selection
41. Selected Artmage Impasto -Recapture- (Deck)
42. Yes
43. Special Summon 1 "Diactorus" monster
44. Selected Artmage Diactorus (Extra Deck)
45. Activate Skull Archfiend of Chaos (GY): Special Summon this card
46. select Light and Darkness Ritual (GY)
47. select Purification Power Patron (GY)
48. select Nervedo the Shadebeast Power Patron (GY)
49. Default order
50. Set Spell/Trap Theorealize Past Lull
51. Activate Theorealize Past Lull (S3): Special Summon 1 "Medius the Pure" from your hand or Deck
52. Selected Medius the Pure (Deck)
53. Synchro Summon Chaos Angel (Extra Deck)
54. select Skull Archfiend of Chaos (M2)
55. select Medius the Pure (M5)
56. No

End board:  LP 8000 | Hand 4 | Deck 31 | Extra 10 | GY 4 | Banished 8   Monsters: M1: Artmage Non-Finito Lv7 2400/1500 ATK || M2: Chaos Angel Lv10 3500/2800 ATK || M3: Artmage Diactorus Lv8 2800/2500 ATK || M4: Nerva the Power Patron of Creation Lv10 3300/3300 DEF || EMZ-L: Medicurius the Power Patron of Illusions L3↙↓↘ 3000    Spell/Trap: S1: Mind Shuffle || S2: Artmage Impasto -Recapture- (Set)   GY: Junora the Power Patron of Tuning, Theorealize Past Lull, Skull Archfiend of Chaos, Medius the Pure   Banished: Pendulum Treasure (face-down), Fiendsmith's Tract (face-down), Pendulum Treasure (face-down), Ars Magna of Infinity and Finity (face-down), Pendulum Treasure (face-down), Medius the Pure (face-

## Order 3: best 13.9 (, worst 13.9) — from search
Others: drawpre-bcmed-b 11.75 · drawpre-bcmed-a 9.55

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
13. Activate Nervedo the Shadebeast Power Patron (M1): Special Summon 1 "Nerva the Power Patron of Creation" from your Extra Deck
14. Selected Nerva the Power Patron of Creation (Extra Deck)
15. Yes
16. Selected Junoldo the Shadespirit Power Patron (Deck)
17. Activate Junoldo the Shadespirit Power Patron (M1): Special Summon 1 "Junora the Power Patron of Tuning" from your Extra Deck
18. Selected Junora the Power Patron of Tuning (Extra Deck)
19. Yes
20. Selected Nervedo the Shadebeast Power Patron (Extra Deck)
21. Link Summon Purification Power Patron (Extra Deck)
22. select Medius the Pure (M4)
23. select Junora the Power Patron of Tuning (EMZ-R)
24. Yes
25. Selected Theorealize Medius (Deck)
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
47. Activate Magician of Dark Chaos - Black Chaos (M1): Add 1 Spell from your GY to your hand
48. Selected Light and Darkness Ritual (GY)
49. Selected Artmage Diactorus (Extra Deck)
50. Activate Skull Archfiend of Chaos (hand): Special Summon this card
51. select Black Chaos (banishment)
52. select Purification Power Patron (GY)
53. select Junora the Power Patron of Tuning (GY)

End board:  LP 8000 | Hand 4 | Deck 30 | Extra 12 | GY 2 | Banished 8   Monsters: M1: Magician of Dark Chaos - Black Chaos Lv8 2800/2600 ATK || M2: Skull Archfiend of Chaos Lv6 2500/1200 ATK || M3: Artmage Diactorus Lv8 2800/2500 ATK || M4: Artmage Non-Finito Lv7 2400/1500 ATK || M5: Nerva the Power Patron of Creation Lv10 3300/3300 ATK || EMZ-L: Medicurius the Power Patron of Illusions L3↙↓↘ 3000    Spell/Trap: S1: Mind Shuffle || S2: Artmage Impasto -Recapture- (Set)   GY: Medius the Pure, Nervedo the Shadebeast Power Patron   Banished: Pendulum Treasure (face-down), Pendulum Treasure (face-down), Fiendsmith's Tract (face-down), Theorealize Medius (face-down), Medius the Pure (face-down), Nervedo the

## Order 4: best 14.2 (, worst 14.2) — from opening lanes
Others: search 13.75 · drawpre-bcmed-b 11.75 · drawpre-bcmed-a 10.55 · drawpre-bcmed-a 4.57

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
19. #573
20. Special Summon (procedure) Dark Magician of Destruction (Extra Deck)
21. Selected Magician of Dark Chaos - Black Chaos (M4)
22. Yes
23. Selected Dark Magical Circle (Deck)
24. Special Summon (procedure) Artmage Non-Finito (Extra Deck)
25. Selected Light and Darkness Ritual (hand)
26. Selected Nervedo the Shadebeast Power Patron (hand)
27. Yes
28. Selected Artmage Impasto -Recapture- (Deck)
29. Link Summon Purification Power Patron (Extra Deck)
30. select Medius the Pure (M5)
31. select Dark Magician of Destruction (EMZ-L)
32. Yes
33. Selected Theorealize Medius (Deck)
34. Activate Theorealize Medius (hand): If a "Power Patron" card is on the field: You can Special Summon this card from your hand, then you can add 1 "Theorealize" Spell/Trap from your Deck to your hand
35. Yes
36. Selected Theorealize Liberation (Deck)
37. Activate Medius the Pure (GY): Shuffle 1 monster from your hand or face-up field into the Deck, and if you do, Special Summon this card
38. Selected Skull Archfiend of Chaos (hand)
39. Activate Theorealize Liberation (hand): Add to your hand, or Special Summon, 1 monster from your Deck with 300 ATK/200 DEF
40. Activate Purification Power Patron (EMZ-R): Link Summon including this card as material
41. Selected Medicurius the Power Patron of Illusions (Extra Deck)
42. select Medius the Pure (M1)
43. Finish selection
44. Selected Nervedo the Shadebeast Power Patron (Deck)
45. Special Summon it
46. Yes
47. Special Summon 1 "Diactorus" monster
48. Selected Artmage Diactorus (Extra Deck)
49. Activate Nervedo the Shadebeast Power Patron (M4): Special Summon 1 "Nerva the Power Patron of Creation" from your Extra Deck
50. Selected Nerva the Power Patron of Creation (Extra Deck)
51. Yes
52. Selected Artmage Graflare (Deck)

End board:  LP 8000 | Hand 4 | Deck 31 | Extra 10 | GY 5 | Banished 7   Monsters: M1: Nerva the Power Patron of Creation Lv10 3300/3300 ATK || M2: Artmage Graflare Lv5 2100/1500 ATK || M3: Artmage Non-Finito Lv7 2400/1500 ATK || M5: Artmage Diactorus Lv8 2800/2500 ATK || EMZ-L: Medicurius the Power Patron of Illusions L3↙↓↘ 3000    Spell/Trap: S1: Mind Shuffle || S2: Artmage Impasto -Recapture- (Set)   GY: Light and Darkness Ritual, Nervedo the Shadebeast Power Patron, Dark Magician of Destruction, Purification Power Patron, Theorealize Liberation   Banished: Black Chaos, Magician of Dark Chaos - Black Chaos, Medius the Pure, Theorealize Medius, Pendulum Treasure (face-down), Prohibited Power Patron Po

## Order 5: best 13.75 (, worst 13.75) — from search
Others: drawpre-bcmed-b 11.66 · opening lanes 11.5 · drawpre-bcmed-a 5.1

1. Activate Black Chaos (hand): Special Summon ("Black Chaos")
2. Selected Mind Shuffle (Deck)
3. Activate Mind Shuffle (S1): Add 1 appropriate monster to your hand
4. Selected Skull Archfiend of Chaos (Deck)
5. Selected Skull Archfiend of Chaos (hand)
6. Yes
7. Selected Light and Darkness Ritual (Deck)
8. Selected Black Luster Soldier - Soldier of Light and Darkness (Deck)
9. Activate Light and Darkness Ritual (GY): Add both this card and 1 card that mentions "Light and Darkness Ritual" from your GY to your hand
10. Selected Black Chaos (GY)
11. Normal Summon Medius the Pure (hand)
12. Yes
13. Selected Nervedo the Shadebeast Power Patron (Deck)
14. Special Summon it
15. Activate Nervedo the Shadebeast Power Patron (M3): Special Summon 1 "Nerva the Power Patron of Creation" from your Extra Deck
16. Selected Nerva the Power Patron of Creation (Extra Deck)
17. Yes
18. Selected Junoldo the Shadespirit Power Patron (Deck)
19. Activate Junoldo the Shadespirit Power Patron (M5): Special Summon 1 "Junora the Power Patron of Tuning" from your Extra Deck
20. Selected Junora the Power Patron of Tuning (Extra Deck)
21. Yes
22. Selected Nervedo the Shadebeast Power Patron (Extra Deck)
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
33. Activate Medius the Pure (GY): Shuffle 1 monster from your hand or face-up field into the Deck, and if you do, Special Summon this card
34. Selected Black Luster Soldier - Soldier of Light and Darkness (hand)
35. Activate Theorealize Medius (hand): If a "Power Patron" card is on the field: You can Special Summon this card from your hand, then you can add 1 "Theorealize" Spell/Trap from your Deck to your hand
36. Yes
37. Selected Theorealize Liberation (Deck)
38. Activate Skull Archfiend of Chaos (GY): Special Summon this card
39. select Light and Darkness Ritual (GY)
40. select Junora the Power Patron of Tuning (GY)
41. select Nervedo the Shadebeast Power Patron (GY)
42. Activate Purification Power Patron (EMZ-L): Link Summon including this card as material
43. Activate Theorealize Liberation (hand): Add to your hand, or Special Summon, 1 monster from your Deck with 300 ATK/200 DEF
44. Selected Griffoh (Deck)
45. Special Summon it
46. Selected Medicurius the Power Patron of Illusions (Extra Deck)
47. select Medius the Pure (M1)
48. Finish selection
49. Default order
50. Yes
51. Special Summon 1 "Diactorus" monster
52. Selected Artmage Diactorus (Extra Deck)
53. Link Summon S:P Little Knight (Extra Deck)
54. select Skull Archfiend of Chaos (M1)
55. select Griffoh (M4)

End board:  LP 8000 | Hand 4 | Deck 31 | Extra 10 | GY 3 | Banished 9   Monsters: M2: Artmage Diactorus Lv8 2800/2500 ATK || M3: Nerva the Power Patron of Creation Lv10 3300/3300 ATK || M4: S:P Little Knight L2←→ 1600  || M5: Artmage Non-Finito Lv7 2400/1500 ATK || EMZ-R: Medicurius the Power Patron of Illusions L3↙↓↘ 3000    Spell/Trap: S1: Mind Shuffle || S2: Artmage Impasto -Recapture- (Set)   GY: Purification Power Patron, Skull Archfiend of Chaos, Griffoh   Banished: Lacrima the Crimson Tears (face-down), Ars Magna - "Citrinitas" (face-down), Artmage Finmel (face-down), Theorealize Past Lull (face-down), Ars Magna of Purification and Corruption (face-down), Nervedo the Shadebeast Power Patron (fac

## Order 6: best 13.9 (, worst 13.9) — from search
Others: drawpre-bcmed-b 13.85 · drawpre-bcmed-a 6.6 · drawpre-bcmed-a 5.1

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
20. Activate Nervedo the Shadebeast Power Patron (M2): Special Summon 1 "Nerva the Power Patron of Creation" from your Extra Deck
21. Selected Nerva the Power Patron of Creation (Extra Deck)
22. Yes
23. Selected Junoldo the Shadespirit Power Patron (Deck)
24. Activate Junoldo the Shadespirit Power Patron (M2): Special Summon 1 "Junora the Power Patron of Tuning" from your Extra Deck
25. Selected Junora the Power Patron of Tuning (Extra Deck)
26. Yes
27. Selected Nervedo the Shadebeast Power Patron (Extra Deck)
28. Link Summon Purification Power Patron (Extra Deck)
29. select Medius the Pure (M1)
30. select Junora the Power Patron of Tuning (M5)
31. Yes
32. Selected Theorealize Medius (Deck)
33. Activate Theorealize Medius (hand): If a "Power Patron" card is on the field: You can Special Summon this card from your hand, then you can add 1 "Theorealize" Spell/Trap from your Deck to your hand
34. Yes
35. Selected Theorealize Past Lull (Deck)
36. Activate Medius the Pure (GY): Shuffle 1 monster from your hand or face-up field into the Deck, and if you do, Special Summon this card
37. Selected Skull Archfiend of Chaos (hand)
38. Special Summon (procedure) Artmage Non-Finito (Extra Deck)
39. Selected Light and Darkness Ritual (hand)
40. Selected Nervedo the Shadebeast Power Patron (hand)
41. Yes
42. Activate Purification Power Patron (EMZ-R): Link Summon including this card as material
43. Selected Medicurius the Power Patron of Illusions (Extra Deck)
44. select Medius the Pure (M5)
45. Finish selection
46. Selected Artmage Impasto -Recapture- (Deck)
47. Yes
48. Special Summon 1 "Diactorus" monster
49. Selected Artmage Diactorus (Extra Deck)

End board:  LP 8000 | Hand 4 | Deck 30 | Extra 10 | GY 4 | Banished 9   Monsters: M2: Artmage Non-Finito Lv7 2400/1500 ATK || M3: Magician of Dark Chaos - Black Chaos Lv8 2800/2600 ATK || M4: Nerva the Power Patron of Creation Lv10 3300/3300 ATK || M5: Artmage Diactorus Lv8 2800/2500 ATK || EMZ-R: Medicurius the Power Patron of Illusions L3↙↓↘ 3000    Spell/Trap: S1: Mind Shuffle || S2: Artmage Impasto -Recapture- (Set)   GY: Junora the Power Patron of Tuning, Light and Darkness Ritual, Nervedo the Shadebeast Power Patron, Purification Power Patron   Banished: Black Chaos, Theorealize Liberation (face-down), Fiendsmith Engraver (face-down), Pendulum Treasure (face-down), Nervedo the Shadebeast Power Pa

## Order 7: best 14.35 (, worst 14.35) — from drawpre-bcmed-b (seed followed 56/106 steps)
Others: search 13.9 · drawpre-bcmed-a 11.34 · drawpre-bcmed-a 5.1

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
22. Selected Nervedo the Shadebeast Power Patron (M5)
23. Yes
24. Activate Artmage Non-Finito (M2): Set 1 "Artmage" Spell/Trap from your Deck
25. Selected Artmage Impasto -Recapture- (Deck)
26. Selected Theorealize Medius (Deck)
27. Special Summon (procedure) Dark Magician of Destruction (Extra Deck)
28. Selected Magician of Dark Chaos - Black Chaos (M1)
29. Yes
30. Add 1 "Ars Magna" card from your Deck to your hand
31. Selected Ars Magna of Infinity and Finity (Deck)
32. Activate Skull Archfiend of Chaos (hand): Special Summon this card
33. select Magician of Dark Chaos - Black Chaos (banishment)
34. select Light and Darkness Ritual (GY)
35. select Black Chaos (banishment)
36. Default order
37. Activate Ars Magna of Infinity and Finity (hand): You can banish this card from your hand; add 1 non-Warrior "Ars Magna" monster from your Deck to your hand
38. Selected Ars Magna of Purification and Corruption (Deck)
39. Activate Ars Magna of Purification and Corruption (hand): You can banish this card from your hand; add 1 "Ars Magna" Spell/Trap from your Deck to your hand
40. Selected Ars Magna - "Citrinitas" (Deck)
41. Activate Ars Magna - "Citrinitas" (hand): activate this card
42. Activate Ars Magna - "Citrinitas" (S3): Add 1 "Medius" or "Ars Magna" monster from your Deck to your hand
43. Selected Theorealize Medius (Deck)
44. Activate Theorealize Medius (hand): If a "Power Patron" card is on the field: You can Special Summon this card from your hand, then you can add 1 "Theorealize" Spell/Trap from your Deck to your hand
45. Yes
46. Selected Theorealize Liberation (Deck)
47. Activate Theorealize Liberation (hand): Add to your hand, or Special Summon, 1 monster from your Deck with 300 ATK/200 DEF
48. Selected Junoldo the Shadespirit Power Patron (Deck)
49. #573
50. Activate Junoldo the Shadespirit Power Patron (hand): #1160
51. Link Summon Purification Power Patron (Extra Deck)
52. select Skull Archfiend of Chaos (M1)
53. select Dark Magician of Destruction (EMZ-L)
54. Activate Ars Magna of Infinity and Finity (banishment): Special Summon this card
55. Activate Ars Magna of Purification and Corruption (banishment): Special Summon this card
56. Activate Junoldo the Shadespirit Power Patron (S5): Destroy this card, draw 2 cards, then discard 1 card
57. Activate Purification Power Patron (EMZ-R): Link Summon including this card as material
58. Selected Medicurius the Power Patron of Illusions (Extra Deck)
59. select Theorealize Medius (M3)
60. Finish selection
61. Selected Prohibited Power Patron Portal - Terminus (hand)
62. Yes
63. Selected Prohibited Power Patron Portal - Terminus (GY)
64. Activate Prohibited Power Patron Portal - Terminus (hand): Send 1 "Power Patron" monster from your Deck or Extra Deck to the GY, then you can add 1 DARK Fairy monster from your Deck to your hand
65. Activate Ars Magna of Purification and Corruption (M1): Banish Spells/Traps on the field
66. Selected Prohibited Power Patron Portal - Terminus (S4)
67. Selected Vidolium the Unstable Power Patron of Unity (Deck)
68. Yes
69. Selected Vidolium the Unstable Power Patron of Unity (Deck)
70. Activate Vidolium the Unstable Power Patron of Unity (hand): #1160
71. Activate Ars Magna of Infinity and Finity (M3): Banish 1 monster on the field
72. Selected Medius the Pure (M4)
73. Activate Vidolium the Unstable Power Patron of Unity (S5): Activate 1 of these effects
74. Your Level 12 "Power Patron" monsters gain 5000 ATK
75. Yes
76. Selected Plundered Power Patron Plane - Vidolia (Deck)
77. Activate Artmage Finmel (hand): Special Summon this card from your hand
78. Yes
79. Link Summon Purification Power Patron (Extra Deck)
80. select Ars Magna of Infinity and Finity (M3)
81. select Theorealize Medius (M5)
82. Yes
83. Selected Theorealize Past Lull (Deck)
84. Activate Plundered Power Patron Plane - Vidolia (hand): activate this card
85. Activate Plundered Power Patron Plane - Vidolia (Field): Banish (face-down) 1 card from your hand, then add to your hand, or Special Summon, 1 monster from your Deck that mentions the revealed monster
86. Selected Nerva the Power Patron of Creation (Extra Deck)
87. Selected Theorealize Past Lull (hand)
88. Selected Nervedo the Shadebeast Power Patron (Deck)
89. Special Summon it
90. Activate Nervedo the Shadebeast Power Patron (M5): Special Summon 1 "Nerva the Power Patron of Creation" from your Extra Deck
91. Selected Nerva the Power Patron of Creation (Extra Deck)
92. Activate Theorealize Liberation (GY): Treat 1 monster you control as a Tuner this turn
93. Selected Nerva the Power Patron of Creation (M5)
94. Link Summon S:P Little Knight (Extra Deck)
95. select Ars Magna of Purification and Corruption (M1)
96. select Purification Power Patron (M3)
97. No

End board:  LP 8000 | Hand 4 | Deck 23 | Extra 12 | GY 9 | Banished 7   Monsters: M2: Artmage Non-Finito Lv7 2400/1500 ATK || M3: S:P Little Knight L2←→ 1600  || M4: Artmage Finmel Lv7 2400/1500 ATK || M5: Nerva the Power Patron of Creation Lv10 3300/3300 ATK || EMZ-R: Medicurius the Power Patron of Illusions L3↙↓↘ 9000    Spell/Trap: S1: Mind Shuffle || S2: Artmage Impasto -Recapture- (Set) || S3: Ars Magna - "Citrinitas" || Field: Plundered Power Patron Plane - Vidolia   GY: Skull Archfiend of Chaos, Dark Magician of Destruction, Theorealize Medius, Purification Power Patron, Vidolium the Unstable Power Patron of Unity, Ars Magna of Infinity and Finity, Theorealize Medius, Ars Magna of Purification a

## Order 8: best 13.75 (, worst 13.75) — from search
Others: drawpre-bcmed-b 11.75 · drawpre-bcmed-a 6.2 · drawpre-bcmed-a 5.1

1. Activate Black Chaos (hand): Special Summon ("Black Chaos")
2. Selected Mind Shuffle (Deck)
3. Activate Mind Shuffle (S1): Add 1 appropriate monster to your hand
4. Selected Skull Archfiend of Chaos (Deck)
5. Selected Skull Archfiend of Chaos (hand)
6. Yes
7. Selected Light and Darkness Ritual (Deck)
8. Selected Black Luster Soldier - Soldier of Light and Darkness (Deck)
9. Activate Light and Darkness Ritual (GY): Add both this card and 1 card that mentions "Light and Darkness Ritual" from your GY to your hand
10. Selected Black Chaos (GY)
11. Normal Summon Medius the Pure (hand)
12. Yes
13. Selected Nervedo the Shadebeast Power Patron (Deck)
14. Special Summon it
15. Activate Nervedo the Shadebeast Power Patron (M1): Special Summon 1 "Nerva the Power Patron of Creation" from your Extra Deck
16. Selected Nerva the Power Patron of Creation (Extra Deck)
17. Yes
18. Selected Junoldo the Shadespirit Power Patron (Deck)
19. Activate Junoldo the Shadespirit Power Patron (M1): Special Summon 1 "Junora the Power Patron of Tuning" from your Extra Deck
20. Selected Junora the Power Patron of Tuning (Extra Deck)
21. Yes
22. Selected Nervedo the Shadebeast Power Patron (Extra Deck)
23. Special Summon (procedure) Artmage Non-Finito (Extra Deck)
24. Selected Light and Darkness Ritual (hand)
25. Selected Nervedo the Shadebeast Power Patron (hand)
26. Yes
27. Selected Artmage Impasto -Recapture- (Deck)
28. Link Summon Purification Power Patron (Extra Deck)
29. select Junora the Power Patron of Tuning (EMZ-L)
30. select Medius the Pure (M4)
31. Yes
32. Selected Theorealize Medius (Deck)
33. Activate Skull Archfiend of Chaos (GY): Special Summon this card
34. select Junora the Power Patron of Tuning (GY)
35. select Medius the Pure (GY)
36. select Light and Darkness Ritual (GY)
37. Default order
38. Activate Theorealize Medius (hand): If a "Power Patron" card is on the field: You can Special Summon this card from your hand, then you can add 1 "Theorealize" Spell/Trap from your Deck to your hand
39. Yes
40. Selected Theorealize Past Lull (Deck)
41. Activate Purification Power Patron (EMZ-L): Link Summon including this card as material
42. Selected Medicurius the Power Patron of Illusions (Extra Deck)
43. select Skull Archfiend of Chaos (M4)
44. Finish selection
45. Activate Theorealize Past Lull (hand): Special Summon 1 "Medius the Pure" from your hand or Deck
46. Selected Medius the Pure (Deck)
47. Special Summon (procedure) Black Chaos (hand)
48. select Black Luster Soldier - Soldier of Light and Darkness (hand)
49. Special Summon (procedure) Dark Magician of Destruction (Extra Deck)
50. Selected Black Chaos (M4)
51. Yes
52. Special Summon 1 "Diactorus" monster
53. Activate Dark Magician of Destruction (M4): Add 1 "Dark Magician" or 1 card that mentions it from your Deck to your hand
54. Selected Apprentice Illusion Magician (Deck)
55. Selected Artmage Diactorus (Extra Deck)
56. Link Summon S:P Little Knight (Extra Deck)
57. select Dark Magician of Destruction (M4)
58. select Medius the Pure (M2)
59. Yes
60. Selected Purification Power Patron (GY)

End board:  LP 8000 | Hand 4 | Deck 30 | Extra 9 | GY 5 | Banished 9   Monsters: M1: Artmage Diactorus Lv8 2800/2500 ATK || M2: S:P Little Knight L2←→ 1600  || M3: Artmage Non-Finito Lv7 2400/1500 DEF || M5: Nerva the Power Patron of Creation Lv10 3300/3300 ATK || EMZ-L: Medicurius the Power Patron of Illusions L3↙↓↘ 3000    Spell/Trap: S1: Mind Shuffle || S2: Artmage Impasto -Recapture- (Set)   GY: Nervedo the Shadebeast Power Patron, Skull Archfiend of Chaos, Theorealize Past Lull, Medius the Pure, Dark Magician of Destruction   Banished: Fiendsmith's Tract (face-down), Prohibited Power Patron Portal - Terminus (face-down), Pendulum Treasure (face-down), Theorealize Medius (face-down), Artmage Vandal

