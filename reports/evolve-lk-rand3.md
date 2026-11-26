# Evolved lines — Mind Shuffle, Medius the Pure, Ash Blossom & Joyous Spring, Prohibited Power Patron Portal - Terminus, Ars Magna of Purification and Corruption (ed-alllinks)
2026-11-26T23:48:20.439Z

8 deck orders (different face-down banishes / draws), 3 opponent hands x o_ss_panama + o_elfnote + o_despia + o_angelechy per line, 20 min searches, 4 mutation rounds.
Fitness = end-board interruptions (the lab scorer, src/disrupt.mjs: wipe 2, negate 1-1.5, banish/protection less; hand traps kept count 1 each). The winner of each order is also played into the opponent decks: margin after their turn shown beside it.

**Margin after their turn (winners): average null** (worst 99)

**Best line per deck order: average 10.81** (worst order 9.95). Winner came from: opening lanes 2, tries Activate Junoldo the Shadespirit Power Patron → new ending 1, search → new ending 1

## Weak points found automatically
Cards whose face-down banish (by your own costs) hurt the best line most (average best line without vs with that card banished):

| card | orders where it was banished | drop |
|---|---|---|
| Artmage Vandalism -Assault- | 2/8 | 0.58 |
| Theorealize Past Lull | 2/8 | 0.58 |
| Artmage Finmel | 2/8 | 0.58 |
| Ars Magna - "Citrinitas" | 2/8 | -0.82 |
| Pendulum Treasure | 3/8 | -1.15 |
| Medius the Pure | 3/8 | -1.15 |
| Apprentice Illusion Magician | 2/8 | -1.48 |
| Ash Blossom & Joyous Spring | 2/8 | -1.48 |
| Fiendsmith Engraver | 2/8 | -1.48 |
| Light and Darkness Ritual | 2/8 | -1.48 |

List changes proposed for the list test (data/proposals-ed-alllinks.json):
- +1 Theorealize Past Lull, −1 Plundered Power Patron Plane - Vidolia — Theorealize Past Lull: best line 0.58 worse when a cost banished it (2 of 8 orders) — Mind Shuffle
- +1 Artmage Finmel, −1 Artmage Vandalism -Assault- — Artmage Finmel: best line 0.58 worse when a cost banished it (2 of 8 orders) — Mind Shuffle
- +1 Theorealize Past Lull — Theorealize Past Lull: best line 0.58 worse when a cost banished it (2 of 8 orders) — Mind Shuffle (add only: deck grows, up to 60)
- +1 Artmage Finmel — Artmage Finmel: best line 0.58 worse when a cost banished it (2 of 8 orders) — Mind Shuffle (add only: deck grows, up to 60)

Effects the search had not used, tried on purpose (best result so far):
- Activate Junoldo the Shadespirit Power Patron: 10.25
- Link Summon I: 10.1
- Link Summon Keel, Shipwright Fur Hire: 9.95
- Link Summon Barricadeborg Blocker: 9.95
- Activate Nervedo the Shadebeast Power Patron: 9.9
- Link Summon Dharc the Dark Charmer, Gloomy: 9.15
- Link Summon Silhouhatte Rabbit: 9.1
- Activate Junoldo the Shadespirit Power Patron: 9

## Order 1: best 10.2 (, worst 10.2) — from opening lanes
Others: tries Link Summon Barricadeborg Blocker 9.95 · tries Link Summon Silhouhatte Rabbit 9.1 · tries Link Summon Geonator Transverser 8.95 · tries Link Summon Code Talker 8.95 · tries Activate Artmage Vandalism -Assault- 7.7 · search 6.8 · tries Link Summon Knightmare Cerberus 6.65

1. Activate Ars Magna of Purification and Corruption (hand): You can banish this card from your hand; add 1 "Ars Magna" Spell/Trap from your Deck to your hand
2. Selected Ars Magna - "Citrinitas" (Deck)
3. Activate Ars Magna - "Citrinitas" (hand): activate this card
4. Activate Ars Magna - "Citrinitas" (S1): Add 1 "Medius" or "Ars Magna" monster from your Deck to your hand
5. Selected Theorealize Medius (Deck)
6. Activate Prohibited Power Patron Portal - Terminus (hand): Send 1 "Power Patron" monster from your Deck or Extra Deck to the GY, then you can add 1 DARK Fairy monster from your Deck to your hand
7. Selected Junoldo the Shadespirit Power Patron (Deck)
8. Yes
9. Selected Vidolium the Unstable Power Patron of Unity (Deck)
10. Activate Vidolium the Unstable Power Patron of Unity (hand): Activate it as a Pendulum Spell
11. Activate Vidolium the Unstable Power Patron of Unity (S5): Activate 1 of these effects
12. Special Summon 1 "Power Patron" monster
13. Selected Junoldo the Shadespirit Power Patron (GY)
14. Yes
15. Selected Vidolium the Unstable Power Patron of Unity (Deck)
16. Activate Theorealize Medius (hand): If a "Power Patron" card is on the field: You can Special Summon this card from your hand, then you can add 1 "Theorealize" Spell/Trap from your Deck to your hand
17. Yes
18. Selected Theorealize Past Lull (Deck)
19. Activate Theorealize Past Lull (hand): Special Summon 1 "Medius the Pure" from your hand or Deck
20. Selected Medius the Pure (Deck)
21. Yes
22. Selected Nervedo the Shadebeast Power Patron (Deck)
23. Special Summon it
24. Link Summon Keel, Shipwright Fur Hire (Extra Deck)
25. select Junoldo the Shadespirit Power Patron (M3)
26. select Medius the Pure (M2)
27. Yes
28. Activate Ars Magna of Purification and Corruption (banishment): Special Summon this card
29. Selected Prohibited Power Patron Portal - Terminus (GY)
30. Activate Medius the Pure (GY): Shuffle 1 monster from your hand or face-up field into the Deck, and if you do, Special Summon this card
31. Selected Vidolium the Unstable Power Patron of Unity (hand)
32. Special Summon (procedure) Artmage Non-Finito (Extra Deck)
33. Selected Prohibited Power Patron Portal - Terminus (hand)
34. Selected Nervedo the Shadebeast Power Patron (M4)
35. Yes
36. Activate Artmage Non-Finito (M4): Set 1 "Artmage" Spell/Trap from your Deck
37. Selected Artmage Impasto -Recapture- (Deck)
38. Selected Artmage Graflare (Deck)
39. Link Summon Pitknight Earlie (Extra Deck)
40. select Ars Magna of Purification and Corruption (M3)
41. select Medius the Pure (M2)
42. Yes
43. Special Summon 1 "Diactorus" monster
44. Selected Artmage Diactorus (Extra Deck)
45. Set Spell/Trap Mind Shuffle

End board:  LP 8000 | Hand 2 | Deck 33 | Extra 161 | GY 3 | Banished 2   Monsters: M1: Artmage Diactorus Lv8 2800/2500 ATK || M2: Pitknight Earlie L2↗→ 1500  || M4: Artmage Non-Finito Lv7 2400/1500 ATK || M5: Artmage Graflare Lv5 2100/1500 ATK || EMZ-L: Keel, Shipwright Fur Hire L2←↓ 1800    Spell/Trap: S1: Ars Magna - "Citrinitas" || S2: Mind Shuffle (Set) || S3: Artmage Impasto -Recapture- (Set)   GY: Theorealize Past Lull, Prohibited Power Patron Portal - Terminus, Ars Magna of Purification and Corruption   Banished: Medius the Pure, Theorealize Medius   Hand: Ash Blossom & Joyous Spring, Medius the Pure   Extra Deck: 161 cards (view --ed to list)

## Order 2: best 10.85 (, worst 10.85) — from tries Activate Junoldo the Shadespirit Power Patron → new ending
Others: tries Activate Junoldo the Shadespirit Power Patron → new ending → new early order 10.5 · tries Activate Junoldo the Shadespirit Power Patron 10.25 · tries Activate Junoldo the Shadespirit Power Patron → new ending → new early order 10.2 · opening lanes 10 · tries Activate Junoldo the Shadespirit Power Patron 9 · tries Link Summon S 8.9 · tries Activate Nervedo the Shadebeast Power Patron 8.2 · tries Link Summon Purification Power Patron 8 · tries Activate Junoldo the Shadespirit Power Patron → new ending → new ending 7.95 · search 7.7 · tries Link Summon Crossrose Dragon 6.8

1. Set Spell/Trap Mind Shuffle
2. Normal Summon Medius the Pure (hand)
3. Yes
4. Selected Junoldo the Shadespirit Power Patron (Deck)
5. Add the card(s) to your hand
6. Activate Junoldo the Shadespirit Power Patron (hand): Activate it as a Pendulum Spell
7. Activate Prohibited Power Patron Portal - Terminus (hand): Send 1 "Power Patron" monster from your Deck or Extra Deck to the GY, then you can add 1 DARK Fairy monster from your Deck to your hand
8. Selected Nervedo the Shadebeast Power Patron (Deck)
9. Yes
10. Selected Vidolium the Unstable Power Patron of Unity (Deck)
11. Activate Ars Magna of Purification and Corruption (hand): You can banish this card from your hand; add 1 "Ars Magna" Spell/Trap from your Deck to your hand
12. Selected Ars Magna - "Citrinitas" (Deck)
13. Set Spell/Trap Ars Magna - "Citrinitas"
14. Activate Ars Magna - "Citrinitas" (S2): activate this card
15. Activate Ars Magna - "Citrinitas" (S2): Add 1 "Medius" or "Ars Magna" monster from your Deck to your hand
16. Selected Theorealize Medius (Deck)
17. Activate Theorealize Medius (hand): If a "Power Patron" card is on the field: You can Special Summon this card from your hand, then you can add 1 "Theorealize" Spell/Trap from your Deck to your hand
18. Yes
19. Selected Theorealize Past Lull (Deck)
20. Yes
21. Selected Ash Blossom & Joyous Spring (hand)
22. Yes
23. Selected Prohibited Power Patron Portal - Terminus (GY)
24. Activate Vidolium the Unstable Power Patron of Unity (hand): Activate it as a Pendulum Spell
25. Link Summon Artifact Dagda (Extra Deck)
26. select Theorealize Medius (M1)
27. select Medius the Pure (M3)
28. Yes
29. Link Summon Medicurius the Power Patron of Illusions (Extra Deck)
30. select Artifact Dagda (EMZ-R)
31. select Ars Magna of Purification and Corruption (M1)
32. Activate Vidolium the Unstable Power Patron of Unity (S5): Activate 1 of these effects
33. Special Summon 1 "Power Patron" monster
34. Selected Nervedo the Shadebeast Power Patron (GY)
35. Yes
36. Selected Nervedo the Shadebeast Power Patron (Deck)
37. Activate Nervedo the Shadebeast Power Patron (M3): Special Summon 1 "Nerva the Power Patron of Creation" from your Extra Deck
38. Selected Nerva the Power Patron of Creation (Extra Deck)
39. Yes
40. Selected Artmage Graflare (Deck)
41. Special Summon (procedure) Artmage Non-Finito (Extra Deck)
42. Selected Prohibited Power Patron Portal - Terminus (hand)
43. Selected Nervedo the Shadebeast Power Patron (hand)
44. Yes
45. Selected Artmage Impasto -Recapture- (Deck)

End board:  LP 8000 | Hand 3 | Deck 28 | Extra 161 | GY 7 | Banished 3   Monsters: M3: Nerva the Power Patron of Creation Lv10 3300/3300 ATK || M4: Artmage Graflare Lv5 2100/1500 ATK || M5: Artmage Non-Finito Lv7 2400/1500 ATK || EMZ-R: Medicurius the Power Patron of Illusions L3↙↓↘ 3000    Spell/Trap: S1: Mind Shuffle (Set) || S2: Ars Magna - "Citrinitas" || S3: Artmage Impasto -Recapture- (Set)   GY: Ash Blossom & Joyous Spring, Theorealize Medius, Medius the Pure, Ars Magna of Purification and Corruption, Artifact Dagda, Prohibited Power Patron Portal - Terminus, Nervedo the Shadebeast Power Patron   Banished: Artmage Vandalism -Assault- (face-down), Fiendsmith's Tract (face-down), Lacrima the Crims

## Order 3: best 12.25 (, worst 12.25) — from search → new ending
Others: search → new ending → new early order 12.25 · search → new ending → new ending 12.25 · search 11.8 · search → new ending → new early order 10.65 · tries Link Summon I 10.1 · opening lanes 10.05 · tries Link Summon Keel, Shipwright Fur Hire 9.95 · tries Activate Nervedo the Shadebeast Power Patron 9.9 · tries Link Summon Dharc the Dark Charmer, Gloomy 9.15 · tries Link Summon Knightmare Phoenix 7.7 · tries Link Summon Artifact Dagda 7.7

1. Set Spell/Trap Mind Shuffle
2. Activate Ars Magna of Purification and Corruption (hand): You can banish this card from your hand; add 1 "Ars Magna" Spell/Trap from your Deck to your hand
3. Selected Ars Magna - "Citrinitas" (Deck)
4. Activate Ars Magna - "Citrinitas" (hand): activate this card
5. Activate Ars Magna - "Citrinitas" (S2): Add 1 "Medius" or "Ars Magna" monster from your Deck to your hand
6. Selected Ars Magna of Infinity and Finity (Deck)
7. Activate Prohibited Power Patron Portal - Terminus (hand): Send 1 "Power Patron" monster from your Deck or Extra Deck to the GY, then you can add 1 DARK Fairy monster from your Deck to your hand
8. Selected Theorealize Medius (Deck)
9. Yes
10. Selected Vidolium the Unstable Power Patron of Unity (Deck)
11. Activate Vidolium the Unstable Power Patron of Unity (hand): Activate it as a Pendulum Spell
12. Activate Vidolium the Unstable Power Patron of Unity (S5): Activate 1 of these effects
13. Special Summon 1 "Power Patron" monster
14. Selected Theorealize Medius (GY)
15. Yes
16. Selected Junoldo the Shadespirit Power Patron (Deck)
17. Activate Junoldo the Shadespirit Power Patron (hand): Activate it as a Pendulum Spell
18. Normal Summon Medius the Pure (hand)
19. Yes
20. Selected Nervedo the Shadebeast Power Patron (Deck)
21. Special Summon it
22. Yes
23. Selected Ars Magna of Infinity and Finity (hand)
24. Yes
25. Selected Prohibited Power Patron Portal - Terminus (GY)
26. Link Summon Pitknight Earlie (Extra Deck)
27. select Medius the Pure (M1)
28. select Nervedo the Shadebeast Power Patron (M2)
29. Yes
30. Selected Artmage Graflare (Deck)
31. Activate Artmage Finmel (hand): Special Summon this card from your hand
32. Yes
33. Special Summon (procedure) Artmage Non-Finito (Extra Deck)
34. Selected Prohibited Power Patron Portal - Terminus (hand)
35. Selected Artmage Finmel (hand)
36. Yes
37. Selected Artmage Impasto -Recapture- (Deck)
38. Link Summon Medicurius the Power Patron of Illusions (Extra Deck)
39. select Pitknight Earlie (EMZ-L)
40. select Theorealize Medius (M3)
41. Finish selection
42. Yes

End board:  LP 8000 | Hand 2 | Deck 31 | Extra 162 | GY 6 | Banished 0   Monsters: M1: Artmage Graflare Lv5 2100/1500 ATK || M2: Artmage Finmel Lv7 2400/1500 ATK || M3: Ars Magna of Purification and Corruption Lv8 1000/2100 ATK || M4: Artmage Non-Finito Lv7 2400/1500 ATK || EMZ-L: Medicurius the Power Patron of Illusions L3↙↓↘ 3000    Spell/Trap: S1: Mind Shuffle (Set) || S2: Ars Magna - "Citrinitas" || S3: Artmage Impasto -Recapture- (Set)   GY: Ars Magna of Infinity and Finity, Medius the Pure, Prohibited Power Patron Portal - Terminus, Artmage Finmel, Theorealize Medius, Pitknight Earlie   Hand: Ash Blossom & Joyous Spring, Infinite Impermanence   Extra Deck: 162 cards (view --ed to list)

## Order 4: best 9.95 (, worst 9.95) — from opening lanes
Others: 

1. Set Spell/Trap Mind Shuffle
2. Activate Ars Magna of Purification and Corruption (hand): You can banish this card from your hand; add 1 "Ars Magna" Spell/Trap from your Deck to your hand
3. Selected Ars Magna - "Citrinitas" (Deck)
4. Activate Ars Magna - "Citrinitas" (hand): activate this card
5. Activate Prohibited Power Patron Portal - Terminus (hand): Send 1 "Power Patron" monster from your Deck or Extra Deck to the GY, then you can add 1 DARK Fairy monster from your Deck to your hand
6. Selected Junoldo the Shadespirit Power Patron (Deck)
7. Yes
8. Selected Vidolium the Unstable Power Patron of Unity (Deck)
9. Activate Vidolium the Unstable Power Patron of Unity (hand): Activate it as a Pendulum Spell
10. Activate Vidolium the Unstable Power Patron of Unity (S5): Activate 1 of these effects
11. Special Summon 1 "Power Patron" monster
12. Selected Junoldo the Shadespirit Power Patron (GY)
13. Yes
14. Selected Theorealize Medius (Deck)
15. Activate Theorealize Medius (hand): If a "Power Patron" card is on the field: You can Special Summon this card from your hand, then you can add 1 "Theorealize" Spell/Trap from your Deck to your hand
16. Yes
17. Selected Theorealize Liberation (Deck)
18. Link Summon Pitknight Earlie (Extra Deck)
19. select Junoldo the Shadespirit Power Patron (M1)
20. select Theorealize Medius (M2)
21. Yes
22. Selected Prohibited Power Patron Portal - Terminus (GY)
23. Normal Summon Medius the Pure (hand)
24. Yes
25. Selected Nervedo the Shadebeast Power Patron (Deck)
26. Special Summon it
27. Special Summon (procedure) Artmage Non-Finito (Extra Deck)
28. Selected Prohibited Power Patron Portal - Terminus (hand)
29. Selected Nervedo the Shadebeast Power Patron (M4)
30. Yes
31. Activate Artmage Non-Finito (M4): Set 1 "Artmage" Spell/Trap from your Deck
32. Selected Artmage Impasto -Recapture- (Deck)
33. Selected Artmage Finmel (Deck)
34. Link Summon Medicurius the Power Patron of Illusions (Extra Deck)
35. select Medius the Pure (M3)
36. select Pitknight Earlie (EMZ-R)
37. Finish selection
38. Yes

End board:  LP 8000 | Hand 1 | Deck 34 | Extra 162 | GY 4 | Banished 0   Monsters: M3: Ars Magna of Purification and Corruption Lv8 1000/2100 ATK || M4: Artmage Non-Finito Lv7 2400/1500 ATK || M5: Artmage Finmel Lv7 2400/1500 ATK || EMZ-R: Medicurius the Power Patron of Illusions L3↙↓↘ 3000    Spell/Trap: S1: Mind Shuffle (Set) || S2: Ars Magna - "Citrinitas" || S3: Theorealize Liberation (Set) || S4: Artmage Impasto -Recapture- (Set)   GY: Theorealize Medius, Prohibited Power Patron Portal - Terminus, Medius the Pure, Pitknight Earlie   Hand: Ash Blossom & Joyous Spring   Extra Deck: 162 cards (view --ed to list)

