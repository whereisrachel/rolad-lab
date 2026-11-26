# Evolved lines — Medius the Pure, Ash Blossom & Joyous Spring, Ash Blossom & Joyous Spring, Infinite Impermanence, Dark Magical Circle (br-exciton)
2026-11-26T16:56:00.853Z

4 deck orders (different face-down banishes / draws), 3 opponent hands x o_ss_panama + o_elfnote + o_despia + o_angelechy per line, 5 min searches, 4 mutation rounds.
Fitness = end-board interruptions (the lab scorer, src/disrupt.mjs: wipe 2, negate 1-1.5, banish/protection less; hand traps kept count 1 each). The winner of each order is also played into the opponent decks: margin after their turn shown beside it.

**Margin after their turn (winners): average null** (worst 99)

**Best line per deck order: average 12.35** (worst order 11.5). Winner came from: forced Activate Griffoh → new ending 1, forced Activate Griffoh 2, tries Activate Vidolium the Unstable Power Patron of Unity 1

## Weak points found automatically
Cards whose face-down banish (by your own costs) hurt the best line most (average best line without vs with that card banished):

| card | orders where it was banished | drop |
|---|---|---|
| Nervedo the Shadebeast Power Patron | 3/4 | 1.27 |
| Griffoh | 3/4 | 1.27 |
| Prohibited Power Patron Portal - Terminus | 2/4 | 0.9 |
| Skull Archfiend of Chaos | 2/4 | 0.9 |
| Theorealize Medius | 3/4 | -0.07 |
| Fiendsmith's Tract | 3/4 | -0.07 |
| Ars Magna of Infinity and Finity | 3/4 | -0.07 |
| Artmage Graflare | 2/4 | -0.1 |
| Lacrima the Crimson Tears | 2/4 | -0.9 |
| Medius the Pure | 2/4 | -0.9 |

List changes proposed for the list test (data/proposals-br-exciton.json):
- +1 Griffoh, −1 Plundered Power Patron Plane - Vidolia — Griffoh: best line 1.27 worse when a cost banished it (3 of 4 orders) — Medius the Pure
- +1 Prohibited Power Patron Portal - Terminus, −1 Artmage Vandalism -Assault- — Prohibited Power Patron Portal - Terminus: best line 0.9 worse when a cost banished it (2 of 4 orders) — Medius the Pure
- +1 Skull Archfiend of Chaos, −1 Small World — Skull Archfiend of Chaos: best line 0.9 worse when a cost banished it (2 of 4 orders) — Medius the Pure
- +1 Griffoh — Griffoh: best line 1.27 worse when a cost banished it (3 of 4 orders) — Medius the Pure (add only: deck grows, up to 60)
- +1 Prohibited Power Patron Portal - Terminus — Prohibited Power Patron Portal - Terminus: best line 0.9 worse when a cost banished it (2 of 4 orders) — Medius the Pure (add only: deck grows, up to 60)
- +1 Skull Archfiend of Chaos — Skull Archfiend of Chaos: best line 0.9 worse when a cost banished it (2 of 4 orders) — Medius the Pure (add only: deck grows, up to 60)

Effects the search had not used, tried on purpose (best result so far):
- Activate Nervedo the Shadebeast Power Patron: 11.55
- Activate Vidolium the Unstable Power Patron of Unity: 11.5
- Activate Vidolium the Unstable Power Patron of Unity: 11.5
- Link Summon Purification Power Patron: 11.3
- Activate Junoldo the Shadespirit Power Patron: 11.3
- Activate Purification Power Patron: 11.3
- Activate Plundered Power Patron Plane - Vidolia: 10.5
- Activate Dark Magical Circle: 10.05

## Order 1: best 13.3 (, worst 13.3) — from forced Activate Griffoh → new ending
Others: forced Activate Griffoh 13.15 · forced Activate Griffoh → new ending 13 · forced Activate Griffoh → new early order 11.95 · forced Activate Theorealize Liberation 11.4 · tries Activate Junoldo the Shadespirit Power Patron 11.3 · forced Fusion Summon Berfomet 10.95 · tries Activate Dark Magical Circle 10.05 · tries Link Summon S 9.75 · forced Activate Artmage Non-Finito 9.2 · forced Xyz Summon Evilswarm Exciton Knight 9.05 · opening lanes 8.75 · search 8.6 · tries Xyz Summon Evilswarm Exciton Knight 8.05 · forced Activate Griffoh → new ending → new early order 8 · forced Link Summon Fiendsmith's Requiem 5.85

1. Normal Summon Medius the Pure (hand)
2. Yes
3. Selected Nervedo the Shadebeast Power Patron (Deck)
4. Special Summon it
5. Activate Nervedo the Shadebeast Power Patron (M5): Special Summon 1 "Nerva the Power Patron of Creation" from your Extra Deck
6. Selected Nerva the Power Patron of Creation (Extra Deck)
7. Yes
8. Selected Junoldo the Shadespirit Power Patron (Deck)
9. Activate Junoldo the Shadespirit Power Patron (M3): Special Summon 1 "Junora the Power Patron of Tuning" from your Extra Deck
10. Selected Junora the Power Patron of Tuning (Extra Deck)
11. Yes
12. Selected Nervedo the Shadebeast Power Patron (Extra Deck)
13. Special Summon (procedure) Artmage Non-Finito (Extra Deck)
14. Selected Dark Magical Circle (hand)
15. Selected Nervedo the Shadebeast Power Patron (hand)
16. Yes
17. Selected Artmage Impasto -Recapture- (Deck)
18. Link Summon Purification Power Patron (Extra Deck)
19. select Medius the Pure (M4)
20. select Junora the Power Patron of Tuning (EMZ-L)
21. Yes
22. Selected Theorealize Medius (Deck)
23. Activate Medius the Pure (GY): Shuffle 1 monster from your hand or face-up field into the Deck, and if you do, Special Summon this card
24. Selected Ash Blossom & Joyous Spring (hand)
25. Activate Theorealize Medius (hand): If a "Power Patron" card is on the field: You can Special Summon this card from your hand, then you can add 1 "Theorealize" Spell/Trap from your Deck to your hand
26. Yes
27. Selected Theorealize Liberation (Deck)
28. Activate Theorealize Liberation (hand): Add to your hand, or Special Summon, 1 monster from your Deck with 300 ATK/200 DEF
29. Selected Griffoh (Deck)
30. Add the card(s) to your hand
31. Activate Theorealize Liberation (GY): Treat 1 monster you control as a Tuner this turn
32. Selected Medius the Pure (M2)
33. Activate Griffoh (hand): Activate 1 of these effects
34. Set 1 card that mentions "Light and Darkness Ritual"
35. Activate Purification Power Patron (EMZ-L): Link Summon including this card as material
36. Selected Medicurius the Power Patron of Illusions (Extra Deck)
37. select Medius the Pure (M2)
38. Finish selection
39. Selected Mind Shuffle (Deck)
40. Yes
41. Special Summon 1 "Diactorus" monster
42. Selected Artmage Diactorus (Extra Deck)
43. Activate Mind Shuffle (S2): activate this card
44. Yes
45. Selected Skull Archfiend of Chaos (Deck)
46. Selected Skull Archfiend of Chaos (hand)
47. Yes
48. Selected Light and Darkness Ritual (Deck)
49. Selected Magician of Dark Chaos - Black Chaos (Deck)
50. Activate Light and Darkness Ritual (GY): Add both this card and 1 card that mentions "Light and Darkness Ritual" from your GY to your hand
51. Selected Skull Archfiend of Chaos (GY)
52. Set Spell/Trap Light and Darkness Ritual
53. Activate Light and Darkness Ritual (S3): Ritual Summon 1 "Magician of Dark Chaos - Black Chaos" or "Black Luster Soldier - Soldier of Light and Darkness" from your hand
54. Selected Magician of Dark Chaos - Black Chaos (hand)
55. Selected Griffoh (GY) value 8 or 1
56. Yes
57. Selected Dark Magical Circle (GY)

End board:  LP 8000 | Hand 4 | Deck 27 | Extra 10 | GY 4 | Banished 10   Monsters: M1: Nerva the Power Patron of Creation Lv10 3300/3300 ATK || M3: Artmage Non-Finito Lv7 2400/1500 ATK || M4: Artmage Diactorus Lv8 2800/2500 ATK || M5: Magician of Dark Chaos - Black Chaos Lv8 2800/2600 ATK || EMZ-R: Medicurius the Power Patron of Illusions L3↙↓↘ 3000    Spell/Trap: S1: Artmage Impasto -Recapture- (Set) || S2: Mind Shuffle   GY: Nervedo the Shadebeast Power Patron, Junora the Power Patron of Tuning, Purification Power Patron, Light and Darkness Ritual   Banished: Theorealize Medius (face-down), Fiendsmith's Tract (face-down), Lacrima the Crimson Tears (face-down), Medius the Pure (face-down), Artmage Gra

## Order 2: best 12.3 (, worst 12.3) — from forced Activate Griffoh
Others: forced Activate Griffoh → new ending 11.55 · opening lanes 11.4 · forced Fusion Summon Berfomet 11.4 · search 10.95 · forced Activate Griffoh → new early order 10.65 · tries Activate Plundered Power Patron Plane - Vidolia 10.5 · tries Activate Artmage Vandalism -Assault- 9.95 · forced Activate Artmage Non-Finito 9.8 · forced Activate Theorealize Liberation 9.15 · tries Activate Plundered Power Patron Plane - Vidolia 8.25 · forced Xyz Summon Evilswarm Exciton Knight 8.05 · forced Link Summon Fiendsmith's Requiem 7.95 · forced Activate Griffoh → new early order 7.7 · forced Activate Griffoh → new ending 7.25 · tries Activate Artmage Vandalism -Assault- 6.05

1. Normal Summon Medius the Pure (hand)
2. Yes
3. Selected Nervedo the Shadebeast Power Patron (Deck)
4. Special Summon it
5. Special Summon (procedure) Artmage Non-Finito (Extra Deck)
6. Selected Dark Magical Circle (hand)
7. Selected Nervedo the Shadebeast Power Patron (M5)
8. Yes
9. Activate Artmage Non-Finito (M5): Set 1 "Artmage" Spell/Trap from your Deck
10. Selected Artmage Impasto -Recapture- (Deck)
11. Selected Theorealize Medius (Deck)
12. Link Summon Purification Power Patron (Extra Deck)
13. select Medius the Pure (M4)
14. select Theorealize Medius (M1)
15. Yes
16. Selected Theorealize Medius (Deck)
17. Activate Medius the Pure (GY): Shuffle 1 monster from your hand or face-up field into the Deck, and if you do, Special Summon this card
18. Selected Ash Blossom & Joyous Spring (hand)
19. Activate Theorealize Medius (hand): If a "Power Patron" card is on the field: You can Special Summon this card from your hand, then you can add 1 "Theorealize" Spell/Trap from your Deck to your hand
20. Yes
21. Selected Theorealize Liberation (Deck)
22. Activate Theorealize Liberation (hand): Add to your hand, or Special Summon, 1 monster from your Deck with 300 ATK/200 DEF
23. Activate Purification Power Patron (EMZ-R): Link Summon including this card as material
24. Selected Medicurius the Power Patron of Illusions (Extra Deck)
25. select Medius the Pure (M3)
26. Finish selection
27. Selected Griffoh (Deck)
28. Add the card(s) to your hand
29. Yes
30. Special Summon 1 "Diactorus" monster
31. Selected Artmage Diactorus (Extra Deck)
32. Activate Artmage Diactorus (M3): Change the battle position of 1 monster on the field
33. Selected Artmage Diactorus (M3)
34. Activate Griffoh (hand): Activate 1 of these effects
35. Set 1 card that mentions "Light and Darkness Ritual"
36. Selected Mind Shuffle (Deck)
37. Activate Mind Shuffle (S2): activate this card
38. Yes
39. Selected Skull Archfiend of Chaos (Deck)
40. Selected Skull Archfiend of Chaos (hand)
41. Yes
42. Selected Light and Darkness Ritual (Deck)
43. Selected Magician of Dark Chaos - Black Chaos (Deck)
44. Activate Light and Darkness Ritual (GY): Add both this card and 1 card that mentions "Light and Darkness Ritual" from your GY to your hand
45. Selected Skull Archfiend of Chaos (GY)
46. Activate Light and Darkness Ritual (hand): Ritual Summon 1 "Magician of Dark Chaos - Black Chaos" or "Black Luster Soldier - Soldier of Light and Darkness" from your hand
47. Selected Magician of Dark Chaos - Black Chaos (hand)
48. Selected Griffoh (GY) value 8 or 1
49. Yes
50. Selected Theorealize Liberation (GY)

End board:  LP 8000 | Hand 4 | Deck 33 | Extra 12 | GY 4 | Banished 3   Monsters: M3: Artmage Diactorus Lv8 2800/2500 DEF || M4: Magician of Dark Chaos - Black Chaos Lv8 2800/2600 ATK || M5: Artmage Non-Finito Lv7 2400/1500 ATK || EMZ-R: Medicurius the Power Patron of Illusions L3↙↓↘ 3000    Spell/Trap: S1: Artmage Impasto -Recapture- (Set) || S2: Mind Shuffle   GY: Dark Magical Circle, Theorealize Medius, Purification Power Patron, Light and Darkness Ritual   Banished: Medius the Pure, Theorealize Medius, Griffoh   Hand: Ash Blossom & Joyous Spring, Theorealize Liberation, Skull Archfiend of Chaos, Infinite Impermanence   Extra Deck: 12 cards (view --ed to list)

## Order 3: best 11.5 (, worst 11.5) — from tries Activate Vidolium the Unstable Power Patron of Unity
Others: tries Activate Vidolium the Unstable Power Patron of Unity 11.5 · tries Activate Vidolium the Unstable Power Patron of Unity → new early order 11.5 · tries Activate Vidolium the Unstable Power Patron of Unity → new ending 11.5 · search 11.4 · opening lanes 11.4 · forced Fusion Summon Berfomet 11.4 · forced Activate Griffoh 11.4 · forced Activate Theorealize Liberation 11.3 · forced Activate Artmage Non-Finito 11.2 · tries Activate Vidolium the Unstable Power Patron of Unity → new ending 9.6 · forced Xyz Summon Evilswarm Exciton Knight 8.05 · forced Link Summon Fiendsmith's Requiem 8.05 · tries Link Summon Fiendsmith's Sequence 7.35 · tries Special Summon (procedure) Nerva the Power Patron of Creation 7 · tries Activate Vidolium the Unstable Power Patron of Unity → new early order 3.95

1. Normal Summon Medius the Pure (hand)
2. Yes
3. Selected Vidolium the Unstable Power Patron of Unity (Deck)
4. Add the card(s) to your hand
5. Activate Vidolium the Unstable Power Patron of Unity (hand): Activate it as a Pendulum Spell
6. Activate Vidolium the Unstable Power Patron of Unity (S1): Activate 1 of these effects
7. Your Level 12 "Power Patron" monsters gain 5000 ATK
8. Yes
9. Selected Nervedo the Shadebeast Power Patron (Deck)
10. Special Summon (procedure) Artmage Non-Finito (Extra Deck)
11. Selected Dark Magical Circle (hand)
12. Selected Nervedo the Shadebeast Power Patron (hand)
13. Yes
14. Selected Artmage Impasto -Recapture- (Deck)
15. Link Summon Purification Power Patron (Extra Deck)
16. select Artmage Non-Finito (M4)
17. select Medius the Pure (M3)
18. Yes
19. Selected Theorealize Medius (Deck)
20. Activate Medius the Pure (GY): Shuffle 1 monster from your hand or face-up field into the Deck, and if you do, Special Summon this card
21. Selected Ash Blossom & Joyous Spring (hand)
22. Activate Theorealize Medius (hand): If a "Power Patron" card is on the field: You can Special Summon this card from your hand, then you can add 1 "Theorealize" Spell/Trap from your Deck to your hand
23. Yes
24. Selected Theorealize Liberation (Deck)
25. Activate Theorealize Liberation (hand): Add to your hand, or Special Summon, 1 monster from your Deck with 300 ATK/200 DEF
26. Activate Purification Power Patron (EMZ-L): Link Summon including this card as material
27. Selected Medicurius the Power Patron of Illusions (Extra Deck)
28. select Medius the Pure (M2)
29. Finish selection
30. Selected Nervedo the Shadebeast Power Patron (Deck)
31. Special Summon it
32. Yes
33. Special Summon 1 "Diactorus" monster
34. Selected Artmage Diactorus (Extra Deck)
35. Activate Nervedo the Shadebeast Power Patron (M1): Special Summon 1 "Nerva the Power Patron of Creation" from your Extra Deck
36. Selected Nerva the Power Patron of Creation (Extra Deck)
37. Yes
38. Selected Artmage Finmel (Deck)

End board:  LP 8000 | Hand 2 | Deck 33 | Extra 12 | GY 5 | Banished 5   Monsters: M3: Artmage Finmel Lv7 2400/1500 ATK || M4: Artmage Diactorus Lv8 2800/2500 ATK || M5: Nerva the Power Patron of Creation Lv10 3300/3300 ATK || EMZ-R: Medicurius the Power Patron of Illusions L3↙↓↘ 3000    Spell/Trap: S1: Artmage Impasto -Recapture- (Set)   GY: Dark Magical Circle, Nervedo the Shadebeast Power Patron, Artmage Non-Finito, Purification Power Patron, Theorealize Liberation   Banished: Medius the Pure, Theorealize Medius, Griffoh (face-down), Fiendsmith's Tract (face-down), Artmage Graflare (face-down)   Hand: Infinite Impermanence, Ash Blossom & Joyous Spring   Extra Deck: 12 cards (view --ed to list)

## Order 4: best 12.3 (, worst 12.3) — from forced Activate Griffoh
Others: forced Activate Griffoh → new early order 11.7 · tries Activate Nervedo the Shadebeast Power Patron 11.55 · opening lanes 11.5 · tries Link Summon Purification Power Patron 11.3 · tries Activate Purification Power Patron 11.3 · forced Activate Theorealize Liberation 11.3 · forced Fusion Summon Berfomet 9.8 · tries Link Summon Medicurius the Power Patron of Illusions 8.34 · search 8.3 · forced Xyz Summon Evilswarm Exciton Knight 8.3 · forced Activate Artmage Non-Finito 8.3 · forced Link Summon Fiendsmith's Requiem 7.95 · forced Activate Griffoh → new early order 5.42

1. Normal Summon Medius the Pure (hand)
2. Yes
3. Selected Nervedo the Shadebeast Power Patron (Deck)
4. Special Summon it
5. Activate Nervedo the Shadebeast Power Patron (M3): Special Summon 1 "Nerva the Power Patron of Creation" from your Extra Deck
6. Selected Nerva the Power Patron of Creation (Extra Deck)
7. Yes
8. Selected Artmage Finmel (Deck)
9. Special Summon (procedure) Artmage Non-Finito (Extra Deck)
10. Selected Dark Magical Circle (hand)
11. Selected Artmage Finmel (M5)
12. Yes
13. Selected Artmage Impasto -Recapture- (Deck)
14. Link Summon Purification Power Patron (Extra Deck)
15. select Medius the Pure (M4)
16. select Nerva the Power Patron of Creation (EMZ-L)
17. Yes
18. Selected Theorealize Medius (Deck)
19. Activate Medius the Pure (GY): Shuffle 1 monster from your hand or face-up field into the Deck, and if you do, Special Summon this card
20. Selected Ash Blossom & Joyous Spring (hand)
21. Activate Theorealize Medius (hand): If a "Power Patron" card is on the field: You can Special Summon this card from your hand, then you can add 1 "Theorealize" Spell/Trap from your Deck to your hand
22. Yes
23. Selected Theorealize Liberation (Deck)
24. Activate Theorealize Liberation (hand): Add to your hand, or Special Summon, 1 monster from your Deck with 300 ATK/200 DEF
25. Selected Griffoh (Deck)
26. Add the card(s) to your hand
27. Activate Purification Power Patron (EMZ-L): Link Summon including this card as material
28. Selected Medicurius the Power Patron of Illusions (Extra Deck)
29. select Medius the Pure (M2)
30. Finish selection
31. Yes
32. Special Summon 1 "Diactorus" monster
33. Selected Artmage Diactorus (Extra Deck)
34. Activate Theorealize Liberation (GY): Treat 1 monster you control as a Tuner this turn
35. Selected Artmage Non-Finito (M5)
36. Activate Griffoh (hand): Activate 1 of these effects
37. Set 1 card that mentions "Light and Darkness Ritual"
38. Selected Mind Shuffle (Deck)
39. Activate Mind Shuffle (S2): activate this card
40. Yes
41. Selected Skull Archfiend of Chaos (Deck)
42. Selected Skull Archfiend of Chaos (hand)
43. Yes
44. Selected Light and Darkness Ritual (Deck)
45. Selected Magician of Dark Chaos - Black Chaos (Deck)
46. Activate Light and Darkness Ritual (GY): Add both this card and 1 card that mentions "Light and Darkness Ritual" from your GY to your hand
47. Selected Skull Archfiend of Chaos (GY)
48. Set Spell/Trap Light and Darkness Ritual
49. Activate Light and Darkness Ritual (S3): Ritual Summon 1 "Magician of Dark Chaos - Black Chaos" or "Black Luster Soldier - Soldier of Light and Darkness" from your hand
50. Selected Magician of Dark Chaos - Black Chaos (hand)
51. Selected Griffoh (GY) value 8 or 1
52. Yes
53. Selected Light and Darkness Ritual (GY)

End board:  LP 8000 | Hand 4 | Deck 30 | Extra 11 | GY 4 | Banished 7   Monsters: M3: Magician of Dark Chaos - Black Chaos Lv8 2800/2600 ATK || M4: Artmage Diactorus Lv8 2800/2500 ATK || M5: Artmage Non-Finito Lv7 2400/1500 ATK || EMZ-R: Medicurius the Power Patron of Illusions L3↙↓↘ 3000    Spell/Trap: S1: Artmage Impasto -Recapture- (Set) || S2: Mind Shuffle   GY: Dark Magical Circle, Artmage Finmel, Nerva the Power Patron of Creation, Purification Power Patron   Banished: Theorealize Past Lull (face-down), Junoldo the Shadespirit Power Patron (face-down), Artmage Finmel (face-down), Medius the Pure, Theorealize Medius, Theorealize Liberation, Griffoh   Hand: Infinite Impermanence, Light and Darkness

