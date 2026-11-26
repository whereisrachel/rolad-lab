# Evolved lines — Medius the Pure, Ash Blossom & Joyous Spring, Ash Blossom & Joyous Spring, Infinite Impermanence, Dark Magical Circle (findlist-1100)
2026-11-26T16:43:17.479Z

4 deck orders (different face-down banishes / draws), 3 opponent hands x o_ss_panama + o_elfnote + o_despia + o_angelechy per line, 5 min searches, 4 mutation rounds.
Fitness = end-board interruptions (the lab scorer, src/disrupt.mjs: wipe 2, negate 1-1.5, banish/protection less; hand traps kept count 1 each). The winner of each order is also played into the opponent decks: margin after their turn shown beside it.

**Margin after their turn (winners): average null** (worst 99)

**Best line per deck order: average 12.39** (worst order 11.65). Winner came from: tries Activate Nervedo the Shadebeast Power Patron → new early order 1, search 1, tries Activate Light and Darkness Ritual 1, tries Activate Mind Shuffle 1

## Weak points found automatically
Cards whose face-down banish (by your own costs) hurt the best line most (average best line without vs with that card banished):

| card | orders where it was banished | drop |
|---|---|---|
| Prohibited Power Patron Portal - Terminus | 2/4 | 0.82 |
| Fiendsmith Engraver | 2/4 | 0.82 |
| Pendulum Treasure | 2/4 | 0.18 |
| Ars Magna - "Citrinitas" | 2/4 | 0.18 |
| Theorealize Past Lull | 2/4 | 0.18 |
| Theorealize Medius | 3/4 | -0.12 |
| Medius the Pure | 2/4 | -0.18 |
| Black Luster Soldier - Soldier of Light and Darkness | 2/4 | -0.18 |
| Artmage Graflare | 2/4 | -0.82 |
| Griffoh | 3/4 | -0.98 |

List changes proposed for the list test (data/proposals-findlist-1100.json):
- +1 Prohibited Power Patron Portal - Terminus, −1 Plundered Power Patron Plane - Vidolia — Prohibited Power Patron Portal - Terminus: best line 0.82 worse when a cost banished it (2 of 4 orders) — Medius the Pure
- +1 Fiendsmith Engraver, −1 Artmage Vandalism -Assault- — Fiendsmith Engraver: best line 0.82 worse when a cost banished it (2 of 4 orders) — Medius the Pure
- +1 Prohibited Power Patron Portal - Terminus — Prohibited Power Patron Portal - Terminus: best line 0.82 worse when a cost banished it (2 of 4 orders) — Medius the Pure (add only: deck grows, up to 60)
- +1 Fiendsmith Engraver — Fiendsmith Engraver: best line 0.82 worse when a cost banished it (2 of 4 orders) — Medius the Pure (add only: deck grows, up to 60)

Effects the search had not used, tried on purpose (best result so far):
- Activate Nervedo the Shadebeast Power Patron: 13.15
- Activate Mind Shuffle: 12.3
- Activate Light and Darkness Ritual: 12.3
- Activate Mind Shuffle: 12.3
- Activate Black Chaos: 11.65
- Activate Vidolium the Unstable Power Patron of Unity: 11.55
- Activate Prohibited Power Patron Portal - Terminus: 11.55
- Activate Vidolium the Unstable Power Patron of Unity: 11.5

## Order 1: best 13.3 (, worst 13.3) — from tries Activate Nervedo the Shadebeast Power Patron → new early order
Others: tries Activate Nervedo the Shadebeast Power Patron 13.15 · opening lanes 12.25 · tries Activate Nervedo the Shadebeast Power Patron → new early order 11.95 · forced Activate Griffoh 11.8 · tries Activate Vidolium the Unstable Power Patron of Unity 11.55 · forced Fusion Summon Berfomet 11.35 · forced Xyz Summon Evilswarm Exciton Knight 11.35 · search 11.3 · forced Activate Theorealize Liberation 11.3 · tries Activate Junoldo the Shadespirit Power Patron 11.3 · tries Activate Prohibited Power Patron Portal - Terminus 10.6 · forced Link Summon Fiendsmith's Requiem 9.75 · forced Activate Artmage Non-Finito 6.95

1. Normal Summon Medius the Pure (hand)
2. Yes
3. Selected Nervedo the Shadebeast Power Patron (Deck)
4. Special Summon it
5. Activate Nervedo the Shadebeast Power Patron (M1): Special Summon 1 "Nerva the Power Patron of Creation" from your Extra Deck
6. Selected Nerva the Power Patron of Creation (Extra Deck)
7. Yes
8. Selected Junoldo the Shadespirit Power Patron (Deck)
9. Activate Junoldo the Shadespirit Power Patron (M2): Special Summon 1 "Junora the Power Patron of Tuning" from your Extra Deck
10. Selected Junora the Power Patron of Tuning (Extra Deck)
11. Yes
12. Selected Nervedo the Shadebeast Power Patron (Extra Deck)
13. Special Summon (procedure) Artmage Non-Finito (Extra Deck)
14. Selected Dark Magical Circle (hand)
15. Selected Nervedo the Shadebeast Power Patron (hand)
16. Yes
17. Selected Artmage Impasto -Recapture- (Deck)
18. Link Summon Purification Power Patron (Extra Deck)
19. select Medius the Pure (M3)
20. select Junora the Power Patron of Tuning (EMZ-R)
21. Yes
22. Selected Theorealize Medius (Deck)
23. Activate Theorealize Medius (hand): If a "Power Patron" card is on the field: You can Special Summon this card from your hand, then you can add 1 "Theorealize" Spell/Trap from your Deck to your hand
24. Yes
25. Selected Theorealize Liberation (Deck)
26. Activate Medius the Pure (GY): Shuffle 1 monster from your hand or face-up field into the Deck, and if you do, Special Summon this card
27. Selected Ash Blossom & Joyous Spring (hand)
28. Activate Theorealize Liberation (hand): Add to your hand, or Special Summon, 1 monster from your Deck with 300 ATK/200 DEF
29. Activate Purification Power Patron (EMZ-R): Link Summon including this card as material
30. Selected Medicurius the Power Patron of Illusions (Extra Deck)
31. select Medius the Pure (M3)
32. Finish selection
33. Selected Griffoh (Deck)
34. Add the card(s) to your hand
35. Yes
36. Special Summon 1 "Diactorus" monster
37. Selected Artmage Diactorus (Extra Deck)
38. Activate Griffoh (hand): Activate 1 of these effects
39. Set 1 card that mentions "Light and Darkness Ritual"
40. Selected Mind Shuffle (Deck)
41. Activate Theorealize Liberation (GY): Treat 1 monster you control as a Tuner this turn
42. Selected Artmage Diactorus (M3)
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

End board:  LP 8000 | Hand 4 | Deck 27 | Extra 10 | GY 4 | Banished 10   Monsters: M1: Nerva the Power Patron of Creation Lv10 3300/3300 ATK || M2: Magician of Dark Chaos - Black Chaos Lv8 2800/2600 ATK || M3: Artmage Diactorus Lv8 2800/2500 ATK || M4: Artmage Non-Finito Lv7 2400/1500 ATK || EMZ-L: Medicurius the Power Patron of Illusions L3↙↓↘ 3000    Spell/Trap: S1: Artmage Impasto -Recapture- (Set) || S2: Mind Shuffle   GY: Nervedo the Shadebeast Power Patron, Junora the Power Patron of Tuning, Purification Power Patron, Light and Darkness Ritual   Banished: Theorealize Medius (face-down), Fiendsmith's Tract (face-down), Lacrima the Crimson Tears (face-down), Medius the Pure (face-down), Artmage Gra

## Order 2: best 11.65 (, worst 11.65) — from search
Others: forced Fusion Summon Berfomet 11.65 · forced Link Summon Fiendsmith's Requiem 11.55 · forced Activate Griffoh 11.4 · opening lanes 11.35 · forced Xyz Summon Evilswarm Exciton Knight 11.35 · tries Activate Theorealize Liberation 11.3 · tries Activate Theorealize Past Lull 10.95 · forced Activate Theorealize Liberation 10.65 · forced Activate Artmage Non-Finito 9.95 · tries Activate Artmage Vandalism -Assault- 5.55 · tries Activate Artmage Vandalism -Assault- 5.55

1. Normal Summon Medius the Pure (hand)
2. Yes
3. Selected Nervedo the Shadebeast Power Patron (Deck)
4. Special Summon it
5. Activate Nervedo the Shadebeast Power Patron (M1): Special Summon 1 "Nerva the Power Patron of Creation" from your Extra Deck
6. Selected Nerva the Power Patron of Creation (Extra Deck)
7. Yes
8. Selected Junoldo the Shadespirit Power Patron (Deck)
9. Activate Junoldo the Shadespirit Power Patron (M2): Special Summon 1 "Junora the Power Patron of Tuning" from your Extra Deck
10. Selected Junora the Power Patron of Tuning (Extra Deck)
11. Yes
12. Selected Nervedo the Shadebeast Power Patron (Extra Deck)
13. Special Summon (procedure) Artmage Non-Finito (Extra Deck)
14. Selected Dark Magical Circle (hand)
15. Selected Nervedo the Shadebeast Power Patron (hand)
16. Yes
17. Selected Artmage Impasto -Recapture- (Deck)
18. Link Summon Purification Power Patron (Extra Deck)
19. select Medius the Pure (M3)
20. select Junora the Power Patron of Tuning (EMZ-L)
21. Yes
22. Selected Theorealize Medius (Deck)
23. Activate Theorealize Medius (hand): If a "Power Patron" card is on the field: You can Special Summon this card from your hand, then you can add 1 "Theorealize" Spell/Trap from your Deck to your hand
24. Yes
25. Selected Theorealize Liberation (Deck)
26. Activate Medius the Pure (GY): Shuffle 1 monster from your hand or face-up field into the Deck, and if you do, Special Summon this card
27. Selected Ash Blossom & Joyous Spring (hand)
28. Activate Theorealize Liberation (hand): Add to your hand, or Special Summon, 1 monster from your Deck with 300 ATK/200 DEF
29. Activate Purification Power Patron (EMZ-L): Link Summon including this card as material
30. Selected Medicurius the Power Patron of Illusions (Extra Deck)
31. select Medius the Pure (M5)
32. Finish selection
33. Selected Nervedo the Shadebeast Power Patron (Deck)
34. Special Summon it
35. Yes
36. Add 1 "Ars Magna" card from your Deck to your hand
37. Selected Ars Magna of Infinity and Finity (Deck)
38. Activate Ars Magna of Infinity and Finity (hand): You can banish this card from your hand; add 1 non-Warrior "Ars Magna" monster from your Deck to your hand
39. Selected Ars Magna of Purification and Corruption (Deck)
40. Activate Ars Magna of Purification and Corruption (hand): You can banish this card from your hand; add 1 "Ars Magna" Spell/Trap from your Deck to your hand
41. Selected Ars Magna - "Citrinitas" (Deck)
42. Activate Ars Magna - "Citrinitas" (hand): activate this card
43. Activate Ars Magna - "Citrinitas" (S2): Add 1 "Medius" or "Ars Magna" monster from your Deck to your hand
44. Selected Medius the Pure (Deck)
45. Link Summon S:P Little Knight (Extra Deck)
46. select Theorealize Medius (M2)
47. select Nervedo the Shadebeast Power Patron (M5)
48. Activate Ars Magna of Infinity and Finity (banishment): Special Summon this card
49. Activate Ars Magna of Purification and Corruption (banishment): Special Summon this card

End board:  LP 8000 | Hand 3 | Deck 27 | Extra 11 | GY 5 | Banished 8   Monsters: M1: Nerva the Power Patron of Creation Lv10 3300/3300 ATK || M2: Ars Magna of Purification and Corruption Lv8 1000/2100 ATK || M3: S:P Little Knight L2←→ 1600  || M4: Artmage Non-Finito Lv7 2400/1500 ATK || M5: Ars Magna of Infinity and Finity Lv8 1000/2400 ATK || EMZ-L: Medicurius the Power Patron of Illusions L3↙↓↘ 9000    Spell/Trap: S1: Artmage Impasto -Recapture- (Set) || S2: Ars Magna - "Citrinitas"   GY: Dark Magical Circle, Nervedo the Shadebeast Power Patron, Junora the Power Patron of Tuning, Purification Power Patron, Theorealize Medius   Banished: Artmage Vandalism -Assault- (face-down), Vidolium the Unstable 

## Order 3: best 12.3 (, worst 12.3) — from tries Activate Light and Darkness Ritual
Others: tries Activate Light and Darkness Ritual → new ending 12.3 · tries Activate Light and Darkness Ritual → new ending 12.3 · search 11.65 · tries Activate Black Chaos 11.65 · forced Link Summon Fiendsmith's Requiem 11.65 · opening lanes 11.55 · tries Activate Vidolium the Unstable Power Patron of Unity 11.5 · tries Activate Light and Darkness Ritual 11.4 · forced Activate Theorealize Liberation 11.3 · forced Fusion Summon Berfomet 11.2 · forced Activate Griffoh 11.1 · tries Activate Light and Darkness Ritual → new early order 10.95 · tries Activate Light and Darkness Ritual → new early order 9.95 · forced Activate Artmage Non-Finito 7.65 · forced Xyz Summon Evilswarm Exciton Knight 7.15

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
16. select Nerva the Power Patron of Creation (EMZ-R)
17. Yes
18. Selected Theorealize Medius (Deck)
19. Activate Medius the Pure (GY): Shuffle 1 monster from your hand or face-up field into the Deck, and if you do, Special Summon this card
20. Selected Ash Blossom & Joyous Spring (hand)
21. Activate Theorealize Medius (hand): If a "Power Patron" card is on the field: You can Special Summon this card from your hand, then you can add 1 "Theorealize" Spell/Trap from your Deck to your hand
22. Yes
23. Selected Theorealize Liberation (Deck)
24. Activate Theorealize Liberation (hand): Add to your hand, or Special Summon, 1 monster from your Deck with 300 ATK/200 DEF
25. Activate Purification Power Patron (EMZ-L): Link Summon including this card as material
26. Selected Medicurius the Power Patron of Illusions (Extra Deck)
27. select Medius the Pure (M3)
28. Finish selection
29. Selected Griffoh (Deck)
30. Add the card(s) to your hand
31. Yes
32. Special Summon 1 "Diactorus" monster
33. Selected Artmage Diactorus (Extra Deck)
34. Activate Griffoh (hand): Activate 1 of these effects
35. Set 1 card that mentions "Light and Darkness Ritual"
36. Selected Mind Shuffle (Deck)
37. Activate Artmage Diactorus (M2): Change the battle position of 1 monster on the field
38. Selected Artmage Diactorus (M2)
39. Activate Mind Shuffle (S2): activate this card
40. No
41. Activate Mind Shuffle (S2): Add 1 appropriate monster to your hand
42. Selected Skull Archfiend of Chaos (Deck)
43. Selected Skull Archfiend of Chaos (hand)
44. Yes
45. Selected Light and Darkness Ritual (Deck)
46. Selected Magician of Dark Chaos - Black Chaos (Deck)
47. Activate Light and Darkness Ritual (GY): Add both this card and 1 card that mentions "Light and Darkness Ritual" from your GY to your hand
48. Selected Skull Archfiend of Chaos (GY)
49. Activate Light and Darkness Ritual (hand): Ritual Summon 1 "Magician of Dark Chaos - Black Chaos" or "Black Luster Soldier - Soldier of Light and Darkness" from your hand
50. Selected Magician of Dark Chaos - Black Chaos (hand)
51. Selected Griffoh (GY) value 8 or 1
52. Yes
53. Selected Light and Darkness Ritual (GY)

End board:  LP 8000 | Hand 4 | Deck 30 | Extra 11 | GY 5 | Banished 6   Monsters: M1: Artmage Non-Finito Lv7 2400/1500 ATK || M2: Artmage Diactorus Lv8 2800/2500 DEF || M3: Magician of Dark Chaos - Black Chaos Lv8 2800/2600 ATK || EMZ-L: Medicurius the Power Patron of Illusions L3↙↓↘ 3000    Spell/Trap: S1: Artmage Impasto -Recapture- (Set) || S2: Mind Shuffle   GY: Dark Magical Circle, Artmage Finmel, Nerva the Power Patron of Creation, Purification Power Patron, Theorealize Liberation   Banished: Fiendsmith's Tract (face-down), Pendulum Treasure (face-down), Pendulum Treasure (face-down), Medius the Pure, Theorealize Medius, Griffoh   Hand: Infinite Impermanence, Light and Darkness Ritual, Skull Arch

## Order 4: best 12.3 (, worst 12.3) — from tries Activate Mind Shuffle
Others: tries Activate Mind Shuffle 12.3 · forced Activate Griffoh 12.3 · tries Activate Mind Shuffle → new ending 12.3 · tries Activate Mind Shuffle → new early order 11.7 · search 11.55 · tries Activate Prohibited Power Patron Portal - Terminus 11.55 · forced Xyz Summon Evilswarm Exciton Knight 11.55 · forced Fusion Summon Berfomet 11.55 · forced Link Summon Fiendsmith's Requiem 11.55 · tries Activate Junoldo the Shadespirit Power Patron 11.3 · tries Activate Mind Shuffle → new early order 11.25 · forced Activate Theorealize Liberation 9.8 · opening lanes 9.5 · forced Activate Artmage Non-Finito 7.65 · tries Activate Mind Shuffle → new ending 6.8

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
11. Selected Artmage Finmel (M2)
12. Yes
13. Selected Artmage Impasto -Recapture- (Deck)
14. Link Summon Purification Power Patron (Extra Deck)
15. select Medius the Pure (M1)
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
27. select Medius the Pure (M4)
28. Finish selection
29. Selected Griffoh (Deck)
30. Add the card(s) to your hand
31. Yes
32. Special Summon 1 "Diactorus" monster
33. Selected Artmage Diactorus (Extra Deck)
34. Activate Griffoh (hand): Activate 1 of these effects
35. Set 1 card that mentions "Light and Darkness Ritual"
36. Selected Mind Shuffle (Deck)
37. Activate Mind Shuffle (S2): activate this card
38. No
39. Activate Mind Shuffle (S2): Add 1 appropriate monster to your hand
40. Selected Skull Archfiend of Chaos (Deck)
41. Selected Skull Archfiend of Chaos (hand)
42. Yes
43. Selected Light and Darkness Ritual (Deck)
44. Selected Magician of Dark Chaos - Black Chaos (Deck)
45. Activate Theorealize Liberation (GY): Treat 1 monster you control as a Tuner this turn
46. Selected Artmage Diactorus (M1)
47. Activate Light and Darkness Ritual (GY): Add both this card and 1 card that mentions "Light and Darkness Ritual" from your GY to your hand
48. Selected Skull Archfiend of Chaos (GY)
49. Activate Light and Darkness Ritual (hand): Ritual Summon 1 "Magician of Dark Chaos - Black Chaos" or "Black Luster Soldier - Soldier of Light and Darkness" from your hand
50. Selected Magician of Dark Chaos - Black Chaos (hand)
51. Selected Griffoh (GY) value 8 or 1
52. Yes
53. Selected Dark Magical Circle (GY)

End board:  LP 8000 | Hand 4 | Deck 30 | Extra 11 | GY 4 | Banished 7   Monsters: M1: Artmage Diactorus Lv8 2800/2500 ATK || M2: Magician of Dark Chaos - Black Chaos Lv8 2800/2600 ATK || M3: Artmage Non-Finito Lv7 2400/1500 ATK || EMZ-L: Medicurius the Power Patron of Illusions L3↙↓↘ 3000    Spell/Trap: S1: Artmage Impasto -Recapture- (Set) || S2: Mind Shuffle   GY: Artmage Finmel, Nerva the Power Patron of Creation, Purification Power Patron, Light and Darkness Ritual   Banished: Theorealize Past Lull (face-down), Junoldo the Shadespirit Power Patron (face-down), Artmage Finmel (face-down), Medius the Pure, Theorealize Medius, Theorealize Liberation, Griffoh   Hand: Infinite Impermanence, Dark Magical

