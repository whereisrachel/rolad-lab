# Evolved lines — Ars Magna - "Citrinitas", Ash Blossom & Joyous Spring, Ash Blossom & Joyous Spring, Droll & Lock Bird, Ghost Ogre & Snow Rabbit (findlist-1100)
2026-11-26T19:03:40.312Z

8 deck orders (different face-down banishes / draws), 3 opponent hands x o_ss_panama + o_elfnote + o_despia + o_angelechy per line, 15 min searches, 4 mutation rounds.
Fitness = end-board interruptions (the lab scorer, src/disrupt.mjs: wipe 2, negate 1-1.5, banish/protection less; hand traps kept count 1 each). The winner of each order is also played into the opponent decks: margin after their turn shown beside it.

**Margin after their turn (winners): average null** (worst 99)

**Best line per deck order: average 12.08** (worst order 11.8). Winner came from: search → new early order 1, tries Activate Mind Shuffle → new ending 1, search 2

## Weak points found automatically
Cards whose face-down banish (by your own costs) hurt the best line most (average best line without vs with that card banished):

| card | orders where it was banished | drop |
|---|---|---|
| Artmage Impasto -Recapture- | 2/8 | 0.25 |
| Prohibited Power Patron Portal - Terminus | 2/8 | 0.25 |
| Mind Shuffle | 2/8 | 0.25 |
| Theorealize Medius | 2/8 | 0.25 |
| Small World | 2/8 | 0.05 |
| Ars Magna - "Citrinitas" | 3/8 | 0.03 |
| Vidolium the Unstable Power Patron of Unity | 2/8 | -0.05 |
| Artmage Graflare | 2/8 | -0.05 |
| Ash Blossom & Joyous Spring | 2/8 | -0.05 |
| Fiendsmith's Tract | 2/8 | -0.25 |

Effects the search had not used, tried on purpose (best result so far):
- Activate Artmage Diactorus: 12.1
- Activate Mind Shuffle: 12.1
- Normal Summon Theorealize Medius: 12.1
- Activate Prohibited Power Patron Portal - Terminus: 12
- Activate Plundered Power Patron Plane - Vidolia: 11.25
- Activate Theorealize Liberation: 11
- Activate Mind Shuffle: 10.95
- Activate Medius the Pure: 10.89

## Order 1: best 12.3 (, worst 12.3) — from search → new early order
Others: search 12.1 · tries Activate Artmage Diactorus 12.1 · opening lanes 12.1 · search → new ending 12.1 · tries Activate Prohibited Power Patron Portal - Terminus 12 · search → new early order → new early order 11.12 · tries Activate Theorealize Liberation 11 · tries Activate Theorealize Liberation 10.75 · tries Activate Artmage Vandalism -Assault- 9.93 · tries Activate Artmage Vandalism -Assault- 9.93

1. Set Spell/Trap Ars Magna - "Citrinitas"
2. Activate Ars Magna - "Citrinitas" (S1): activate this card
3. Activate Ars Magna - "Citrinitas" (S1): Add 1 "Medius" or "Ars Magna" monster from your Deck to your hand
4. Selected Medius the Pure (Deck)
5. Normal Summon Medius the Pure (hand)
6. Yes
7. Selected Nervedo the Shadebeast Power Patron (Deck)
8. Special Summon it
9. Activate Nervedo the Shadebeast Power Patron (M3): Special Summon 1 "Nerva the Power Patron of Creation" from your Extra Deck
10. Selected Nerva the Power Patron of Creation (Extra Deck)
11. Yes
12. Selected Artmage Finmel (Deck)
13. Link Summon Purification Power Patron (Extra Deck)
14. select Medius the Pure (M1)
15. select Nerva the Power Patron of Creation (EMZ-R)
16. Yes
17. Selected Theorealize Medius (Deck)
18. Activate Medius the Pure (GY): Shuffle 1 monster from your hand or face-up field into the Deck, and if you do, Special Summon this card
19. Selected Ash Blossom & Joyous Spring (hand)
20. Activate Theorealize Medius (hand): If a "Power Patron" card is on the field: You can Special Summon this card from your hand, then you can add 1 "Theorealize" Spell/Trap from your Deck to your hand
21. Yes
22. Selected Theorealize Liberation (Deck)
23. Activate Theorealize Liberation (hand): Add to your hand, or Special Summon, 1 monster from your Deck with 300 ATK/200 DEF
24. Selected Griffoh (Deck)
25. Add the card(s) to your hand
26. Activate Griffoh (hand): Activate 1 of these effects
27. Set 1 card that mentions "Light and Darkness Ritual"
28. Activate Purification Power Patron (EMZ-R): Link Summon including this card as material
29. Selected Medicurius the Power Patron of Illusions (Extra Deck)
30. select Medius the Pure (M1)
31. Finish selection
32. Selected Mind Shuffle (Deck)
33. Yes
34. Special Summon 1 "Diactorus" monster
35. Selected Artmage Diactorus (Extra Deck)
36. Activate Mind Shuffle (S2): activate this card
37. No
38. Activate Mind Shuffle (S2): Add 1 appropriate monster to your hand
39. Selected Skull Archfiend of Chaos (Deck)
40. Selected Skull Archfiend of Chaos (hand)
41. Yes
42. Selected Light and Darkness Ritual (Deck)
43. Selected Black Luster Soldier - Soldier of Light and Darkness (Deck)
44. Activate Light and Darkness Ritual (GY): Add both this card and 1 card that mentions "Light and Darkness Ritual" from your GY to your hand
45. Selected Griffoh (GY)
46. Special Summon (procedure) Artmage Non-Finito (Extra Deck)
47. Selected Light and Darkness Ritual (hand)
48. Selected Artmage Finmel (M4)
49. Yes
50. Selected Artmage Impasto -Recapture- (Deck)
51. Activate Skull Archfiend of Chaos (GY): Special Summon this card
52. select Purification Power Patron (GY)
53. select Artmage Finmel (GY)
54. select Light and Darkness Ritual (GY)
55. Default order

End board:  LP 8000 | Hand 5 | Deck 33 | Extra 12 | GY 2 | Banished 5   Monsters: M1: Artmage Non-Finito Lv7 2400/1500 ATK || M2: Skull Archfiend of Chaos Lv6 2500/1200 ATK || M3: Artmage Diactorus Lv8 2800/2500 ATK || EMZ-L: Medicurius the Power Patron of Illusions L3↙↓↘ 3000    Spell/Trap: S1: Ars Magna - "Citrinitas" || S2: Mind Shuffle || S3: Artmage Impasto -Recapture- (Set)   GY: Nerva the Power Patron of Creation, Theorealize Liberation   Banished: Artmage Vandalism -Assault- (face-down), Fiendsmith's Tract (face-down), Magician of Dark Chaos - Black Chaos (face-down), Medius the Pure, Theorealize Medius   Hand: Griffoh, Droll & Lock Bird, Black Luster Soldier - Soldier of Light and Darkness, Gh

## Order 2: best 11.8 (, worst 11.8) — from tries Activate Mind Shuffle → new ending
Others: tries Activate Mind Shuffle 10.95 · tries Activate Medius the Pure 10.89 · tries Activate Mind Shuffle → new ending → new early order 10.75 · tries Activate Mind Shuffle → new ending → new ending 10.75 · tries Special Summon (procedure) Artmage Non-Finito 9.93 · tries Activate Junoldo the Shadespirit Power Patron 9.93 · tries Activate Theorealize Past Lull 9.2 · tries Activate Mind Shuffle 7.9 · search 6.45 · opening lanes 6.45 · tries Activate Mind Shuffle → new ending → new early order 3.55

1. Set Spell/Trap Ars Magna - "Citrinitas"
2. Activate Ars Magna - "Citrinitas" (S1): activate this card
3. Activate Ars Magna - "Citrinitas" (S1): Add 1 "Medius" or "Ars Magna" monster from your Deck to your hand
4. Selected Medius the Pure (Deck)
5. Normal Summon Medius the Pure (hand)
6. Yes
7. Selected Theorealize Medius (Deck)
8. Special Summon it
9. Link Summon Purification Power Patron (Extra Deck)
10. select Medius the Pure (M1)
11. select Theorealize Medius (M3)
12. Yes
13. Selected Theorealize Medius (Deck)
14. Activate Medius the Pure (GY): Shuffle 1 monster from your hand or face-up field into the Deck, and if you do, Special Summon this card
15. Selected Ash Blossom & Joyous Spring (hand)
16. Activate Theorealize Medius (hand): If a "Power Patron" card is on the field: You can Special Summon this card from your hand, then you can add 1 "Theorealize" Spell/Trap from your Deck to your hand
17. Yes
18. Selected Theorealize Liberation (Deck)
19. Activate Theorealize Liberation (hand): Add to your hand, or Special Summon, 1 monster from your Deck with 300 ATK/200 DEF
20. Activate Purification Power Patron (EMZ-R): Link Summon including this card as material
21. Selected Medicurius the Power Patron of Illusions (Extra Deck)
22. select Medius the Pure (M3)
23. Finish selection
24. Selected Nervedo the Shadebeast Power Patron (Deck)
25. Special Summon it
26. Yes
27. Add 1 "Ars Magna" card from your Deck to your hand
28. Selected Ars Magna of Infinity and Finity (Deck)
29. Activate Ars Magna of Infinity and Finity (hand): You can banish this card from your hand; add 1 non-Warrior "Ars Magna" monster from your Deck to your hand
30. Selected Ars Magna of Purification and Corruption (Deck)
31. Activate Ars Magna of Purification and Corruption (hand): You can banish this card from your hand; add 1 "Ars Magna" Spell/Trap from your Deck to your hand
32. Selected Ars Magna - "Citrinitas" (Deck)
33. Special Summon (procedure) Artmage Non-Finito (Extra Deck)
34. Selected Ars Magna - "Citrinitas" (hand)
35. Selected Nervedo the Shadebeast Power Patron (M1)
36. Yes
37. Activate Ars Magna of Infinity and Finity (banishment): Special Summon this card
38. Activate Artmage Non-Finito (M3): Set 1 "Artmage" Spell/Trap from your Deck
39. Selected Artmage Impasto -Recapture- (Deck)
40. Selected Artmage Finmel (Deck)
41. Link Summon S:P Little Knight (Extra Deck)
42. select Ars Magna of Infinity and Finity (M1)
43. select Theorealize Medius (M4)
44. Yes

End board:  LP 8000 | Hand 3 | Deck 35 | Extra 12 | GY 6 | Banished 1   Monsters: M2: Artmage Finmel Lv7 2400/1500 ATK || M3: Artmage Non-Finito Lv7 2400/1500 ATK || M4: S:P Little Knight L2←→ 1600  || M5: Ars Magna of Purification and Corruption Lv8 1000/2100 ATK || EMZ-R: Medicurius the Power Patron of Illusions L3↙↓↘ 9000    Spell/Trap: S1: Ars Magna - "Citrinitas" || S2: Artmage Impasto -Recapture- (Set)   GY: Theorealize Medius, Purification Power Patron, Theorealize Liberation, Ars Magna - "Citrinitas", Ars Magna of Infinity and Finity, Theorealize Medius   Banished: Medius the Pure   Hand: Droll & Lock Bird, Ghost Ogre & Snow Rabbit, Ash Blossom & Joyous Spring   Extra Deck: 12 cards (view --ed 

## Order 3: best 12.1 (, worst 12.1) — from search
Others: tries Normal Summon Theorealize Medius 12.1 · opening lanes 12.1 · tries Activate Junoldo the Shadespirit Power Patron 10.75 · tries Activate Vidolium the Unstable Power Patron of Unity 9.35 · tries Activate Vidolium the Unstable Power Patron of Unity 9.35 · tries Activate Prohibited Power Patron Portal - Terminus 3.55 · tries Activate Ars Magna of Purification and Corruption 3.55

1. Activate Ars Magna - "Citrinitas" (hand): activate this card
2. Activate Ars Magna - "Citrinitas" (S1): Add 1 "Medius" or "Ars Magna" monster from your Deck to your hand
3. Selected Medius the Pure (Deck)
4. Normal Summon Medius the Pure (hand)
5. Yes
6. Selected Nervedo the Shadebeast Power Patron (Deck)
7. Special Summon it
8. Activate Nervedo the Shadebeast Power Patron (M1): Special Summon 1 "Nerva the Power Patron of Creation" from your Extra Deck
9. Selected Nerva the Power Patron of Creation (Extra Deck)
10. Yes
11. Selected Junoldo the Shadespirit Power Patron (Deck)
12. Activate Junoldo the Shadespirit Power Patron (M5): Special Summon 1 "Junora the Power Patron of Tuning" from your Extra Deck
13. Selected Junora the Power Patron of Tuning (Extra Deck)
14. Yes
15. Selected Nervedo the Shadebeast Power Patron (Extra Deck)
16. Link Summon Purification Power Patron (Extra Deck)
17. select Medius the Pure (M3)
18. select Junora the Power Patron of Tuning (EMZ-R)
19. Yes
20. Selected Theorealize Medius (Deck)
21. Activate Medius the Pure (GY): Shuffle 1 monster from your hand or face-up field into the Deck, and if you do, Special Summon this card
22. Selected Ash Blossom & Joyous Spring (hand)
23. Activate Theorealize Medius (hand): If a "Power Patron" card is on the field: You can Special Summon this card from your hand, then you can add 1 "Theorealize" Spell/Trap from your Deck to your hand
24. Yes
25. Selected Theorealize Past Lull (Deck)
26. Special Summon (procedure) Artmage Non-Finito (Extra Deck)
27. Selected Theorealize Past Lull (hand)
28. Selected Nervedo the Shadebeast Power Patron (hand)
29. Yes
30. Selected Artmage Impasto -Recapture- (Deck)
31. Activate Purification Power Patron (EMZ-L): Link Summon including this card as material
32. Selected Medicurius the Power Patron of Illusions (Extra Deck)
33. select Medius the Pure (M2)
34. Finish selection
35. Yes
36. Special Summon 1 "Diactorus" monster
37. Selected Artmage Diactorus (Extra Deck)
38. Activate Theorealize Past Lull (GY): Special Summon 1 Fusion, Synchro, or Xyz Monster from your GY
39. Selected Junora the Power Patron of Tuning (GY)
40. Link Summon S:P Little Knight (Extra Deck)
41. select Junora the Power Patron of Tuning (M5)
42. select Artmage Non-Finito (M1)
43. Yes
44. Selected Purification Power Patron (GY)

End board:  LP 8000 | Hand 3 | Deck 33 | Extra 9 | GY 3 | Banished 10   Monsters: M3: Artmage Diactorus Lv8 2800/2500 ATK || M4: Nerva the Power Patron of Creation Lv10 3300/3300 ATK || M5: S:P Little Knight L2←→ 1600  || EMZ-R: Medicurius the Power Patron of Illusions L3↙↓↘ 3000    Spell/Trap: S1: Ars Magna - "Citrinitas" || S2: Artmage Impasto -Recapture- (Set)   GY: Nervedo the Shadebeast Power Patron, Artmage Non-Finito, Junora the Power Patron of Tuning   Banished: Nervedo the Shadebeast Power Patron (face-down), Ars Magna - "Citrinitas" (face-down), Vidolium the Unstable Power Patron of Unity (face-down), Prohibited Power Patron Portal - Terminus (face-down), Griffoh (face-down), Theorealize Medi

## Order 4: best 12.1 (, worst 12.1) — from search
Others: tries Activate Mind Shuffle 12.1 · opening lanes 12 · tries Activate Plundered Power Patron Plane - Vidolia 11.25 · tries Activate Plundered Power Patron Plane - Vidolia 9.7 · tries Activate Ars Magna of Infinity and Finity 8.77 · tries Activate Ars Magna of Purification and Corruption 3.55 · tries Activate Ars Magna of Infinity and Finity 3.55

1. Set Spell/Trap Ars Magna - "Citrinitas"
2. Activate Ars Magna - "Citrinitas" (S1): activate this card
3. Activate Ars Magna - "Citrinitas" (S1): Add 1 "Medius" or "Ars Magna" monster from your Deck to your hand
4. Selected Medius the Pure (Deck)
5. Normal Summon Medius the Pure (hand)
6. Yes
7. Selected Nervedo the Shadebeast Power Patron (Deck)
8. Special Summon it
9. Activate Nervedo the Shadebeast Power Patron (M1): Special Summon 1 "Nerva the Power Patron of Creation" from your Extra Deck
10. Selected Nerva the Power Patron of Creation (Extra Deck)
11. Yes
12. Selected Junoldo the Shadespirit Power Patron (Deck)
13. Activate Junoldo the Shadespirit Power Patron (M4): Special Summon 1 "Junora the Power Patron of Tuning" from your Extra Deck
14. Selected Junora the Power Patron of Tuning (Extra Deck)
15. Yes
16. Selected Nervedo the Shadebeast Power Patron (Extra Deck)
17. Link Summon Purification Power Patron (Extra Deck)
18. select Medius the Pure (M3)
19. select Junora the Power Patron of Tuning (M4)
20. Yes
21. Selected Theorealize Medius (Deck)
22. Activate Theorealize Medius (hand): If a "Power Patron" card is on the field: You can Special Summon this card from your hand, then you can add 1 "Theorealize" Spell/Trap from your Deck to your hand
23. Yes
24. Selected Theorealize Past Lull (Deck)
25. Special Summon (procedure) Artmage Non-Finito (Extra Deck)
26. Selected Theorealize Past Lull (hand)
27. Selected Nervedo the Shadebeast Power Patron (hand)
28. Yes
29. Selected Artmage Impasto -Recapture- (Deck)
30. Activate Medius the Pure (GY): Shuffle 1 monster from your hand or face-up field into the Deck, and if you do, Special Summon this card
31. Selected Ash Blossom & Joyous Spring (hand)
32. Activate Purification Power Patron (EMZ-R): Link Summon including this card as material
33. Selected Medicurius the Power Patron of Illusions (Extra Deck)
34. select Medius the Pure (M3)
35. Finish selection
36. Yes
37. Special Summon 1 "Diactorus" monster
38. Selected Artmage Diactorus (Extra Deck)
39. Activate Theorealize Past Lull (GY): Special Summon 1 Fusion, Synchro, or Xyz Monster from your GY
40. Selected Junora the Power Patron of Tuning (GY)
41. Link Summon S:P Little Knight (Extra Deck)
42. select Artmage Non-Finito (M5)
43. select Junora the Power Patron of Tuning (M2)
44. No

End board:  LP 8000 | Hand 3 | Deck 33 | Extra 9 | GY 4 | Banished 9   Monsters: M1: Nerva the Power Patron of Creation Lv10 3300/3300 ATK || M2: S:P Little Knight L2←→ 1600  || M3: Artmage Diactorus Lv8 2800/2500 ATK || EMZ-L: Medicurius the Power Patron of Illusions L3↙↓↘ 3000    Spell/Trap: S1: Ars Magna - "Citrinitas" || S2: Artmage Impasto -Recapture- (Set)   GY: Nervedo the Shadebeast Power Patron, Purification Power Patron, Junora the Power Patron of Tuning, Artmage Non-Finito   Banished: Artmage Finmel (face-down), Dark Magical Circle (face-down), Vidolium the Unstable Power Patron of Unity (face-down), Black Chaos (face-down), Skull Archfiend of Chaos (face-down), Light and Darkness Ritual (fa

