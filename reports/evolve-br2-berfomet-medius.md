# Evolved lines — Medius the Pure, Ash Blossom & Joyous Spring, Ash Blossom & Joyous Spring, Infinite Impermanence, Dark Magical Circle (br-berfomet)
2026-11-26T16:56:59.762Z

4 deck orders (different face-down banishes / draws), 3 opponent hands x o_ss_panama + o_elfnote + o_despia + o_angelechy per line, 5 min searches, 4 mutation rounds.
Fitness = end-board interruptions (the lab scorer, src/disrupt.mjs: wipe 2, negate 1-1.5, banish/protection less; hand traps kept count 1 each). The winner of each order is also played into the opponent decks: margin after their turn shown beside it.

**Margin after their turn (winners): average null** (worst 99)

**Best line per deck order: average 12.24** (worst order 11.65). Winner came from: tries Activate Prohibited Power Patron Portal - Terminus 1, forced Activate Griffoh 1, forced Xyz Summon Evilswarm Exciton Knight 1, forced Fusion Summon Berfomet 1

## Weak points found automatically
Cards whose face-down banish (by your own costs) hurt the best line most (average best line without vs with that card banished):

| card | orders where it was banished | drop |
|---|---|---|
| Skull Archfiend of Chaos | 2/4 | 1.12 |
| Artmage Finmel | 2/4 | 1.12 |
| Apprentice Illusion Magician | 2/4 | 0.52 |
| Light and Darkness Ritual | 2/4 | 0.48 |
| Ars Magna - "Citrinitas" | 3/4 | 0.08 |
| Theorealize Liberation | 2/4 | -0.48 |
| Griffoh | 2/4 | -0.52 |
| Theorealize Past Lull | 2/4 | -0.52 |
| Theorealize Medius | 3/4 | -0.72 |
| Prohibited Power Patron Portal - Terminus | 3/4 | -0.72 |

List changes proposed for the list test (data/proposals-br-berfomet.json):
- +1 Skull Archfiend of Chaos, −1 Plundered Power Patron Plane - Vidolia — Skull Archfiend of Chaos: best line 1.12 worse when a cost banished it (2 of 4 orders) — Medius the Pure
- +1 Artmage Finmel, −1 Artmage Vandalism -Assault- — Artmage Finmel: best line 1.12 worse when a cost banished it (2 of 4 orders) — Medius the Pure
- +1 Apprentice Illusion Magician, −1 Small World — Apprentice Illusion Magician: best line 0.52 worse when a cost banished it (2 of 4 orders) — Medius the Pure
- +1 Skull Archfiend of Chaos — Skull Archfiend of Chaos: best line 1.12 worse when a cost banished it (2 of 4 orders) — Medius the Pure (add only: deck grows, up to 60)
- +1 Artmage Finmel — Artmage Finmel: best line 1.12 worse when a cost banished it (2 of 4 orders) — Medius the Pure (add only: deck grows, up to 60)
- +1 Apprentice Illusion Magician — Apprentice Illusion Magician: best line 0.52 worse when a cost banished it (2 of 4 orders) — Medius the Pure (add only: deck grows, up to 60)

Effects the search had not used, tried on purpose (best result so far):
- Activate Prohibited Power Patron Portal - Terminus: 13.3
- Activate Nervedo the Shadebeast Power Patron: 11.55
- Activate Vidolium the Unstable Power Patron of Unity: 11.55
- Activate Junoldo the Shadespirit Power Patron: 11.3
- Activate Junoldo the Shadespirit Power Patron: 11.3
- Link Summon Medicurius the Power Patron of Illusions: 10.95
- Activate Ars Magna - "Citrinitas": 10.8
- Activate Plundered Power Patron Plane - Vidolia: 10.8

## Order 1: best 13.3 (, worst 13.3) — from tries Activate Prohibited Power Patron Portal - Terminus
Others: tries Activate Prohibited Power Patron Portal - Terminus → new ending 13.3 · opening lanes 12.55 · forced Activate Griffoh 12.3 · forced Link Summon Fiendsmith's Requiem 11.55 · tries Activate Vidolium the Unstable Power Patron of Unity 11.55 · forced Fusion Summon Berfomet 11.4 · search 11.35 · forced Xyz Summon Evilswarm Exciton Knight 11.35 · forced Activate Theorealize Liberation 11.3 · tries Link Summon Medicurius the Power Patron of Illusions 10.95 · tries Activate Prohibited Power Patron Portal - Terminus → new early order 10.65 · tries Activate Prohibited Power Patron Portal - Terminus → new early order 10.4 · tries Activate Vidolium the Unstable Power Patron of Unity 9.9 · tries Activate Prohibited Power Patron Portal - Terminus → new ending 8 · forced Activate Artmage Non-Finito 6.95

1. Normal Summon Medius the Pure (hand)
2. Yes
3. Selected Nervedo the Shadebeast Power Patron (Deck)
4. Special Summon it
5. Activate Nervedo the Shadebeast Power Patron (M4): Special Summon 1 "Nerva the Power Patron of Creation" from your Extra Deck
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
19. select Medius the Pure (M1)
20. select Junora the Power Patron of Tuning (M4)
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
31. Activate Griffoh (hand): Activate 1 of these effects
32. Set 1 card that mentions "Light and Darkness Ritual"
33. Activate Purification Power Patron (EMZ-R): Link Summon including this card as material
34. Selected Medicurius the Power Patron of Illusions (Extra Deck)
35. select Medius the Pure (M5)
36. Finish selection
37. Selected Mind Shuffle (Deck)
38. Yes
39. Special Summon 1 "Diactorus" monster
40. Activate Mind Shuffle (S2): activate this card
41. Yes
42. Selected Skull Archfiend of Chaos (Deck)
43. Selected Skull Archfiend of Chaos (hand)
44. Selected Artmage Diactorus (Extra Deck)
45. Yes
46. Selected Light and Darkness Ritual (Deck)
47. Selected Magician of Dark Chaos - Black Chaos (Deck)
48. Activate Light and Darkness Ritual (GY): Add both this card and 1 card that mentions "Light and Darkness Ritual" from your GY to your hand
49. Selected Skull Archfiend of Chaos (GY)
50. Activate Light and Darkness Ritual (hand): Ritual Summon 1 "Magician of Dark Chaos - Black Chaos" or "Black Luster Soldier - Soldier of Light and Darkness" from your hand
51. Selected Magician of Dark Chaos - Black Chaos (hand)
52. Selected Griffoh (GY) value 8 or 1
53. Yes
54. Selected Dark Magical Circle (GY)

End board:  LP 8000 | Hand 4 | Deck 27 | Extra 10 | GY 5 | Banished 9   Monsters: M1: Artmage Diactorus Lv8 2800/2500 ATK || M2: Artmage Non-Finito Lv7 2400/1500 ATK || M3: Nerva the Power Patron of Creation Lv10 3300/3300 ATK || M4: Magician of Dark Chaos - Black Chaos Lv8 2800/2600 ATK || EMZ-L: Medicurius the Power Patron of Illusions L3↙↓↘ 3000    Spell/Trap: S1: Artmage Impasto -Recapture- (Set) || S2: Mind Shuffle   GY: Nervedo the Shadebeast Power Patron, Junora the Power Patron of Tuning, Theorealize Liberation, Purification Power Patron, Light and Darkness Ritual   Banished: Theorealize Medius (face-down), Fiendsmith's Tract (face-down), Lacrima the Crimson Tears (face-down), Medius the Pure (

## Order 2: best 12.3 (, worst 12.3) — from forced Activate Griffoh
Others: forced Activate Griffoh → new ending 12.3 · search 11.65 · forced Fusion Summon Berfomet 11.65 · opening lanes 11.65 · forced Activate Griffoh → new early order 11.55 · forced Activate Griffoh → new early order 11.55 · forced Activate Theorealize Liberation 11.4 · forced Xyz Summon Evilswarm Exciton Knight 11.35 · forced Activate Artmage Non-Finito 11.3 · forced Link Summon Fiendsmith's Requiem 11.25 · tries Activate Plundered Power Patron Plane - Vidolia 10.8 · forced Activate Griffoh → new ending 9.8 · tries Activate Plundered Power Patron Plane - Vidolia 7.25 · tries Activate Artmage Vandalism -Assault- 5.55 · tries Activate Artmage Vandalism -Assault- 5.55

1. Normal Summon Medius the Pure (hand)
2. Yes
3. Selected Nervedo the Shadebeast Power Patron (Deck)
4. Special Summon it
5. Activate Nervedo the Shadebeast Power Patron (M1): Special Summon 1 "Nerva the Power Patron of Creation" from your Extra Deck
6. Selected Nerva the Power Patron of Creation (Extra Deck)
7. Yes
8. Selected Artmage Finmel (Deck)
9. Special Summon (procedure) Artmage Non-Finito (Extra Deck)
10. Selected Dark Magical Circle (hand)
11. Selected Artmage Finmel (M1)
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
27. Activate Griffoh (hand): Activate 1 of these effects
28. Set 1 card that mentions "Light and Darkness Ritual"
29. Selected Mind Shuffle (Deck)
30. Activate Mind Shuffle (S2): activate this card
31. No
32. Activate Purification Power Patron (EMZ-L): Link Summon including this card as material
33. Selected Medicurius the Power Patron of Illusions (Extra Deck)
34. select Medius the Pure (M2)
35. Finish selection
36. Yes
37. Special Summon 1 "Diactorus" monster
38. Selected Artmage Diactorus (Extra Deck)
39. Activate Artmage Diactorus (M4): Change the battle position of 1 monster on the field
40. Selected Artmage Non-Finito (M3)
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
53. Selected Theorealize Liberation (GY)

End board:  LP 8000 | Hand 4 | Deck 30 | Extra 11 | GY 5 | Banished 6   Monsters: M3: Artmage Non-Finito Lv7 2400/1500 DEF || M4: Artmage Diactorus Lv8 2800/2500 ATK || M5: Magician of Dark Chaos - Black Chaos Lv8 2800/2600 ATK || EMZ-R: Medicurius the Power Patron of Illusions L3↙↓↘ 3000    Spell/Trap: S1: Artmage Impasto -Recapture- (Set) || S2: Mind Shuffle   GY: Dark Magical Circle, Artmage Finmel, Nerva the Power Patron of Creation, Purification Power Patron, Light and Darkness Ritual   Banished: Artmage Vandalism -Assault- (face-down), Vidolium the Unstable Power Patron of Unity (face-down), Theorealize Medius (face-down), Medius the Pure, Theorealize Medius, Griffoh   Hand: Infinite Impermanence

## Order 3: best 11.65 (, worst 11.65) — from forced Xyz Summon Evilswarm Exciton Knight
Others: forced Xyz Summon Evilswarm Exciton Knight → new ending 11.65 · forced Xyz Summon Evilswarm Exciton Knight → new ending 11.65 · opening lanes 11.55 · search 11.5 · forced Fusion Summon Berfomet 11.4 · forced Xyz Summon Evilswarm Exciton Knight → new early order 11.35 · tries Activate Junoldo the Shadespirit Power Patron 11.3 · forced Activate Theorealize Liberation 11.3 · forced Link Summon Fiendsmith's Requiem 11.1 · forced Xyz Summon Evilswarm Exciton Knight → new early order 11.05 · tries Activate Ars Magna - "Citrinitas" 10.8 · forced Activate Griffoh 9.9 · tries Activate Ars Magna - "Citrinitas" 9.75 · tries Special Summon (procedure) Nerva the Power Patron of Creation 7 · forced Activate Artmage Non-Finito 6.95

1. Normal Summon Medius the Pure (hand)
2. Yes
3. Selected Nervedo the Shadebeast Power Patron (Deck)
4. Special Summon it
5. Activate Nervedo the Shadebeast Power Patron (M3): Special Summon 1 "Nerva the Power Patron of Creation" from your Extra Deck
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
19. select Medius the Pure (M1)
20. select Junora the Power Patron of Tuning (EMZ-R)
21. Yes
22. Selected Theorealize Medius (Deck)
23. Activate Theorealize Medius (hand): If a "Power Patron" card is on the field: You can Special Summon this card from your hand, then you can add 1 "Theorealize" Spell/Trap from your Deck to your hand
24. Yes
25. Selected Theorealize Past Lull (Deck)
26. Activate Medius the Pure (GY): Shuffle 1 monster from your hand or face-up field into the Deck, and if you do, Special Summon this card
27. Selected Ash Blossom & Joyous Spring (hand)
28. Activate Theorealize Past Lull (hand): Special Summon 1 "Medius the Pure" from your hand or Deck
29. Activate Purification Power Patron (EMZ-L): Link Summon including this card as material
30. Selected Medicurius the Power Patron of Illusions (Extra Deck)
31. select Medius the Pure (M5)
32. Finish selection
33. Selected Medius the Pure (Deck)
34. Yes
35. Add 1 "Ars Magna" card from your Deck to your hand
36. Selected Ars Magna of Infinity and Finity (Deck)
37. Activate Ars Magna of Infinity and Finity (hand): You can banish this card from your hand; add 1 non-Warrior "Ars Magna" monster from your Deck to your hand
38. Selected Ars Magna of Purification and Corruption (Deck)
39. Activate Ars Magna of Purification and Corruption (hand): You can banish this card from your hand; add 1 "Ars Magna" Spell/Trap from your Deck to your hand
40. Selected Ars Magna - "Citrinitas" (Deck)
41. Activate Ars Magna - "Citrinitas" (hand): activate this card
42. Activate Ars Magna - "Citrinitas" (S2): Add 1 "Medius" or "Ars Magna" monster from your Deck to your hand
43. Selected Medius the Pure (Deck)
44. Link Summon S:P Little Knight (Extra Deck)
45. select Medius the Pure (M5)
46. select Theorealize Medius (M2)
47. Activate Ars Magna of Infinity and Finity (banishment): Special Summon this card
48. Activate Ars Magna of Purification and Corruption (banishment): Special Summon this card

End board:  LP 8000 | Hand 3 | Deck 27 | Extra 10 | GY 7 | Banished 7   Monsters: M1: S:P Little Knight L2←→ 1600  || M2: Ars Magna of Purification and Corruption Lv8 1000/2100 ATK || M3: Nerva the Power Patron of Creation Lv10 3300/3300 ATK || M4: Artmage Non-Finito Lv7 2400/1500 ATK || M5: Ars Magna of Infinity and Finity Lv8 1000/2400 ATK || EMZ-L: Medicurius the Power Patron of Illusions L3↙↓↘ 9000    Spell/Trap: S1: Artmage Impasto -Recapture- (Set) || S2: Ars Magna - "Citrinitas"   GY: Dark Magical Circle, Nervedo the Shadebeast Power Patron, Junora the Power Patron of Tuning, Purification Power Patron, Theorealize Past Lull, Theorealize Medius, Medius the Pure   Banished: Fiendsmith's Tract (fac

## Order 4: best 11.7 (, worst 11.7) — from forced Fusion Summon Berfomet
Others: forced Activate Griffoh 11.65 · tries Activate Nervedo the Shadebeast Power Patron 11.55 · forced Link Summon Fiendsmith's Requiem 11.55 · forced Activate Theorealize Liberation 11.55 · forced Fusion Summon Berfomet → new early order 11.55 · tries Activate Junoldo the Shadespirit Power Patron 11.3 · opening lanes 11.3 · forced Xyz Summon Evilswarm Exciton Knight 11.3 · forced Fusion Summon Berfomet → new early order 11.3 · forced Fusion Summon Berfomet → new ending 10.15 · tries Activate Dark Magical Circle 10.05 · search 8 · forced Activate Artmage Non-Finito 7.65 · tries Link Summon S 7

1. Normal Summon Medius the Pure (hand)
2. Yes
3. Selected Nervedo the Shadebeast Power Patron (Deck)
4. Special Summon it
5. Activate Nervedo the Shadebeast Power Patron (M4): Special Summon 1 "Nerva the Power Patron of Creation" from your Extra Deck
6. Selected Nerva the Power Patron of Creation (Extra Deck)
7. Yes
8. Selected Artmage Graflare (Deck)
9. Link Summon Purification Power Patron (Extra Deck)
10. select Medius the Pure (M1)
11. select Nerva the Power Patron of Creation (M2)
12. Yes
13. Selected Theorealize Medius (Deck)
14. Activate Theorealize Medius (hand): If a "Power Patron" card is on the field: You can Special Summon this card from your hand, then you can add 1 "Theorealize" Spell/Trap from your Deck to your hand
15. Yes
16. Selected Theorealize Liberation (Deck)
17. Activate Medius the Pure (GY): Shuffle 1 monster from your hand or face-up field into the Deck, and if you do, Special Summon this card
18. Selected Ash Blossom & Joyous Spring (hand)
19. Activate Theorealize Liberation (hand): Add to your hand, or Special Summon, 1 monster from your Deck with 300 ATK/200 DEF
20. Activate Purification Power Patron (EMZ-R): Link Summon including this card as material
21. Selected Medicurius the Power Patron of Illusions (Extra Deck)
22. select Medius the Pure (M3)
23. Finish selection
24. Selected Griffoh (Deck)
25. Add the card(s) to your hand
26. Yes
27. Special Summon 1 "Diactorus" monster
28. Selected Artmage Diactorus (Extra Deck)
29. Special Summon (procedure) Artmage Non-Finito (Extra Deck)
30. Selected Dark Magical Circle (hand)
31. Selected Artmage Diactorus (M3)
32. Yes
33. Selected Artmage Impasto -Recapture- (Deck)
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
45. Selected Griffoh (GY)
46. Set Spell/Trap Light and Darkness Ritual
47. Activate Light and Darkness Ritual (S3): Ritual Summon 1 "Magician of Dark Chaos - Black Chaos" or "Black Luster Soldier - Soldier of Light and Darkness" from your hand
48. Selected Magician of Dark Chaos - Black Chaos (hand)
49. Selected Artmage Diactorus (GY) value 8
50. No

End board:  LP 8000 | Hand 3 | Deck 30 | Extra 11 | GY 6 | Banished 6   Monsters: M3: Magician of Dark Chaos - Black Chaos Lv8 2800/2600 ATK || M4: Artmage Graflare Lv5 2100/1500 ATK || M5: Artmage Non-Finito Lv7 2400/1500 ATK || EMZ-R: Medicurius the Power Patron of Illusions L3↙↓↘ 3000    Spell/Trap: S1: Artmage Impasto -Recapture- (Set) || S2: Mind Shuffle   GY: Nerva the Power Patron of Creation, Purification Power Patron, Theorealize Liberation, Dark Magical Circle, Skull Archfiend of Chaos, Light and Darkness Ritual   Banished: Theorealize Past Lull (face-down), Junoldo the Shadespirit Power Patron (face-down), Artmage Finmel (face-down), Medius the Pure, Theorealize Medius, Artmage Diactorus   H

