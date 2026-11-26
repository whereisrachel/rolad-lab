# Evolved lines — Medius the Pure, Ash Blossom & Joyous Spring, Infinite Impermanence, Droll & Lock Bird, Ghost Ogre & Snow Rabbit (findlist-1100)
2026-11-26T19:11:17.876Z

8 deck orders (different face-down banishes / draws), 3 opponent hands x o_ss_panama + o_elfnote + o_despia + o_angelechy per line, 15 min searches, 4 mutation rounds.
Fitness = end-board interruptions (the lab scorer, src/disrupt.mjs: wipe 2, negate 1-1.5, banish/protection less; hand traps kept count 1 each). The winner of each order is also played into the opponent decks: margin after their turn shown beside it.

**Margin after their turn (winners): average null** (worst 99)

**Best line per deck order: average 12.46** (worst order 12.3). Winner came from: tries Activate Junoldo the Shadespirit Power Patron → new ending → new early order 2, tries Activate Theorealize Past Lull → new ending → new early order 1, tries Activate Light and Darkness Ritual 1

## Weak points found automatically
Cards whose face-down banish (by your own costs) hurt the best line most (average best line without vs with that card banished):

| card | orders where it was banished | drop |
|---|---|---|
| Nervedo the Shadebeast Power Patron | 3/8 | 0.25 |
| Mind Shuffle | 3/8 | 0.25 |
| Dark Magical Circle | 2/8 | 0.17 |
| Artmage Vandalism -Assault- | 2/8 | 0.03 |
| Fiendsmith's Tract | 2/8 | 0.03 |
| Apprentice Illusion Magician | 2/8 | 0.03 |
| Medius the Pure | 3/8 | -0.02 |
| Vidolium the Unstable Power Patron of Unity | 3/8 | -0.02 |
| Black Luster Soldier - Soldier of Light and Darkness | 2/8 | -0.03 |
| Ars Magna - "Citrinitas" | 2/8 | -0.17 |

Effects the search had not used, tried on purpose (best result so far):
- Activate Junoldo the Shadespirit Power Patron: 12.3
- Activate Light and Darkness Ritual: 12.3
- Activate Theorealize Past Lull: 12.25
- Activate Fiendsmith Engraver: 12.25
- Activate Artmage Vandalism -Assault-: 11.8
- Special Summon (procedure) Artmage Non-Finito: 11.75
- Activate Junoldo the Shadespirit Power Patron: 11.75
- Activate Prohibited Power Patron Portal - Terminus: 11.75

## Order 1: best 12.65 (, worst 12.65) — from tries Activate Junoldo the Shadespirit Power Patron → new ending → new early order
Others: tries Activate Junoldo the Shadespirit Power Patron → new ending 12.45 · tries Activate Junoldo the Shadespirit Power Patron → new ending → new early order → new early order 12.45 · tries Activate Junoldo the Shadespirit Power Patron 12.3 · tries Activate Fiendsmith Engraver 12.25 · search 11.75 · tries Activate Prohibited Power Patron Portal - Terminus 11.75 · opening lanes 11.75 · tries Activate Vidolium the Unstable Power Patron of Unity 11.3 · tries Activate Fiendsmith's Tract 11.05 · tries Activate Mind Shuffle 10.7

1. Set Spell/Trap Infinite Impermanence
2. Normal Summon Medius the Pure (hand)
3. Yes
4. Selected Nervedo the Shadebeast Power Patron (Deck)
5. Special Summon it
6. Activate Nervedo the Shadebeast Power Patron (M3): Special Summon 1 "Nerva the Power Patron of Creation" from your Extra Deck
7. Selected Nerva the Power Patron of Creation (Extra Deck)
8. Yes
9. Selected Artmage Graflare (Deck)
10. Link Summon Purification Power Patron (Extra Deck)
11. select Medius the Pure (M1)
12. select Nerva the Power Patron of Creation (M2)
13. Yes
14. Selected Theorealize Medius (Deck)
15. Activate Medius the Pure (GY): Shuffle 1 monster from your hand or face-up field into the Deck, and if you do, Special Summon this card
16. Selected Droll & Lock Bird (hand)
17. Activate Theorealize Medius (hand): If a "Power Patron" card is on the field: You can Special Summon this card from your hand, then you can add 1 "Theorealize" Spell/Trap from your Deck to your hand
18. Yes
19. Selected Theorealize Liberation (Deck)
20. Activate Theorealize Liberation (hand): Add to your hand, or Special Summon, 1 monster from your Deck with 300 ATK/200 DEF
21. Selected Griffoh (Deck)
22. #573
23. Activate Theorealize Liberation (GY): Treat 1 monster you control as a Tuner this turn
24. Selected Purification Power Patron (EMZ-R)
25. Activate Purification Power Patron (EMZ-R): Link Summon including this card as material
26. Selected Medicurius the Power Patron of Illusions (Extra Deck)
27. select Medius the Pure (M5)
28. Finish selection
29. Yes
30. Special Summon 1 "Diactorus" monster
31. Selected Artmage Diactorus (Extra Deck)
32. Activate Griffoh (hand): Activate 1 of these effects
33. Set 1 card that mentions "Light and Darkness Ritual"
34. Selected Mind Shuffle (Deck)
35. Activate Mind Shuffle (S2): activate this card
36. Yes
37. Selected Skull Archfiend of Chaos (Deck)
38. Selected Skull Archfiend of Chaos (hand)
39. Yes
40. Selected Light and Darkness Ritual (Deck)
41. Selected Magician of Dark Chaos - Black Chaos (Deck)
42. Activate Light and Darkness Ritual (GY): Add both this card and 1 card that mentions "Light and Darkness Ritual" from your GY to your hand
43. Selected Skull Archfiend of Chaos (GY)
44. Activate Light and Darkness Ritual (hand): Ritual Summon 1 "Magician of Dark Chaos - Black Chaos" or "Black Luster Soldier - Soldier of Light and Darkness" from your hand
45. Selected Magician of Dark Chaos - Black Chaos (hand)
46. Selected Griffoh (GY) value 8 or 1
47. Yes
48. Selected Light and Darkness Ritual (GY)
49. Special Summon (procedure) Artmage Non-Finito (Extra Deck)
50. Selected Light and Darkness Ritual (hand)
51. Selected Artmage Diactorus (M4)
52. Yes
53. Selected Artmage Impasto -Recapture- (Deck)

End board:  LP 8000 | Hand 3 | Deck 32 | Extra 11 | GY 4 | Banished 7   Monsters: M3: Artmage Graflare Lv5 2100/1500 ATK || M4: Artmage Non-Finito Lv7 2400/1500 ATK || M5: Magician of Dark Chaos - Black Chaos Lv8 2800/2600 ATK || EMZ-R: Medicurius the Power Patron of Illusions L3↙↓↘ 3000    Spell/Trap: S1: Infinite Impermanence (Set) || S2: Mind Shuffle || S3: Artmage Impasto -Recapture- (Set)   GY: Nerva the Power Patron of Creation, Purification Power Patron, Light and Darkness Ritual, Artmage Diactorus   Banished: Medius the Pure (face-down), Ars Magna - "Citrinitas" (face-down), Ars Magna of Infinity and Finity (face-down), Theorealize Liberation, Medius the Pure, Theorealize Medius, Griffoh   Hand

## Order 2: best 12.45 (, worst 12.45) — from tries Activate Junoldo the Shadespirit Power Patron → new ending → new early order
Others: tries Activate Junoldo the Shadespirit Power Patron → new ending → new early order → new ending 12.45 · tries Activate Junoldo the Shadespirit Power Patron → new ending 12.3 · tries Activate Junoldo the Shadespirit Power Patron 11.75 · tries Activate Artmage Finmel 11.75 · tries Activate Pendulum Treasure 11.75 · tries Special Summon (procedure) Artmage Non-Finito 11.75 · tries Activate Junoldo the Shadespirit Power Patron → new ending → new early order → new early order 11.65 · tries Activate Vidolium the Unstable Power Patron of Unity 11.05 · tries Special Summon (procedure) Vidolium the Unstable Power Patron of Unity 11.05 · search 11 · opening lanes 10.75

1. Normal Summon Medius the Pure (hand)
2. Yes
3. Selected Nervedo the Shadebeast Power Patron (Deck)
4. Special Summon it
5. Activate Nervedo the Shadebeast Power Patron (M5): Special Summon 1 "Nerva the Power Patron of Creation" from your Extra Deck
6. Selected Nerva the Power Patron of Creation (Extra Deck)
7. Yes
8. Selected Junoldo the Shadespirit Power Patron (Deck)
9. Activate Junoldo the Shadespirit Power Patron (M1): Special Summon 1 "Junora the Power Patron of Tuning" from your Extra Deck
10. Selected Junora the Power Patron of Tuning (Extra Deck)
11. Yes
12. Selected Nervedo the Shadebeast Power Patron (Extra Deck)
13. Set Spell/Trap Infinite Impermanence
14. Link Summon Purification Power Patron (Extra Deck)
15. select Junora the Power Patron of Tuning (M1)
16. select Medius the Pure (M4)
17. Yes
18. Selected Theorealize Medius (Deck)
19. Activate Theorealize Medius (hand): If a "Power Patron" card is on the field: You can Special Summon this card from your hand, then you can add 1 "Theorealize" Spell/Trap from your Deck to your hand
20. Yes
21. Selected Theorealize Past Lull (Deck)
22. Special Summon (procedure) Artmage Non-Finito (Extra Deck)
23. Selected Theorealize Past Lull (hand)
24. Selected Nervedo the Shadebeast Power Patron (hand)
25. Yes
26. Selected Artmage Impasto -Recapture- (Deck)
27. Activate Medius the Pure (GY): Shuffle 1 monster from your hand or face-up field into the Deck, and if you do, Special Summon this card
28. Selected Artmage Non-Finito (M1)
29. Activate Purification Power Patron (EMZ-L): Link Summon including this card as material
30. Selected Medicurius the Power Patron of Illusions (Extra Deck)
31. select Medius the Pure (M4)
32. Finish selection
33. Yes
34. Special Summon 1 "Diactorus" monster
35. Selected Artmage Diactorus (Extra Deck)
36. Activate Theorealize Past Lull (GY): Special Summon 1 Fusion, Synchro, or Xyz Monster from your GY
37. Selected Junora the Power Patron of Tuning (GY)

End board:  LP 8000 | Hand 3 | Deck 33 | Extra 11 | GY 2 | Banished 9   Monsters: M1: Artmage Diactorus Lv8 2800/2500 ATK || M2: Junora the Power Patron of Tuning Lv10 3100/3800 ATK || M3: Nerva the Power Patron of Creation Lv10 3300/3300 ATK || EMZ-L: Medicurius the Power Patron of Illusions L3↙↓↘ 3000    Spell/Trap: S1: Infinite Impermanence (Set) || S2: Artmage Impasto -Recapture- (Set)   GY: Nervedo the Shadebeast Power Patron, Purification Power Patron   Banished: Medius the Pure (face-down), Griffoh (face-down), Nervedo the Shadebeast Power Patron (face-down), Mind Shuffle (face-down), Artmage Vandalism -Assault- (face-down), Ars Magna - "Citrinitas" (face-down), Medius the Pure, Theorealize Medi

## Order 3: best 12.45 (, worst 12.45) — from tries Activate Theorealize Past Lull → new ending → new early order
Others: tries Activate Theorealize Past Lull → new ending → new early order → new ending 12.45 · tries Activate Theorealize Past Lull → new ending 12.35 · tries Activate Theorealize Past Lull 12.25 · tries Activate Artmage Vandalism -Assault- 11.8 · search 11.75 · tries Activate Theorealize Liberation 11.25 · tries Activate Artmage Vandalism -Assault- 10.95 · opening lanes 10.75 · tries Activate Theorealize Liberation 10.6 · tries Activate Ars Magna - "Citrinitas" 9.62 · tries Activate Theorealize Past Lull → new ending → new early order → new early order 8.6

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
13. Set Spell/Trap Infinite Impermanence
14. Link Summon Purification Power Patron (Extra Deck)
15. select Medius the Pure (M1)
16. select Junora the Power Patron of Tuning (M2)
17. Yes
18. Selected Theorealize Medius (Deck)
19. Activate Theorealize Medius (hand): If a "Power Patron" card is on the field: You can Special Summon this card from your hand, then you can add 1 "Theorealize" Spell/Trap from your Deck to your hand
20. Yes
21. Selected Theorealize Past Lull (Deck)
22. Special Summon (procedure) Artmage Non-Finito (Extra Deck)
23. Selected Theorealize Past Lull (hand)
24. Selected Nervedo the Shadebeast Power Patron (hand)
25. Yes
26. Selected Artmage Impasto -Recapture- (Deck)
27. Activate Medius the Pure (GY): Shuffle 1 monster from your hand or face-up field into the Deck, and if you do, Special Summon this card
28. Selected Artmage Non-Finito (M1)
29. Activate Purification Power Patron (EMZ-R): Link Summon including this card as material
30. Selected Medicurius the Power Patron of Illusions (Extra Deck)
31. select Medius the Pure (M3)
32. Finish selection
33. Yes
34. Special Summon 1 "Diactorus" monster
35. Selected Artmage Diactorus (Extra Deck)
36. Activate Theorealize Past Lull (GY): Special Summon 1 Fusion, Synchro, or Xyz Monster from your GY
37. Selected Junora the Power Patron of Tuning (GY)

End board:  LP 8000 | Hand 3 | Deck 33 | Extra 11 | GY 2 | Banished 9   Monsters: M3: Artmage Diactorus Lv8 2800/2500 ATK || M4: Nerva the Power Patron of Creation Lv10 3300/3300 ATK || M5: Junora the Power Patron of Tuning Lv10 3100/3800 ATK || EMZ-R: Medicurius the Power Patron of Illusions L3↙↓↘ 3000    Spell/Trap: S1: Infinite Impermanence (Set) || S2: Artmage Impasto -Recapture- (Set)   GY: Nervedo the Shadebeast Power Patron, Purification Power Patron   Banished: Artmage Vandalism -Assault- (face-down), Mind Shuffle (face-down), Pendulum Treasure (face-down), Artmage Vandalism -Assault- (face-down), Fiendsmith's Tract (face-down), Griffoh (face-down), Medius the Pure, Theorealize Medius, Theoreal

## Order 4: best 12.3 (, worst 12.3) — from tries Activate Light and Darkness Ritual
Others: search 11.75 · tries Activate Junoldo the Shadespirit Power Patron 11.75 · tries Activate Light and Darkness Ritual 11.75 · tries Activate Mind Shuffle 11.75 · opening lanes 11.75 · tries Activate Vidolium the Unstable Power Patron of Unity 11.3 · tries Activate Medius the Pure 11.25

1. Normal Summon Medius the Pure (hand)
2. Yes
3. Selected Nervedo the Shadebeast Power Patron (Deck)
4. Special Summon it
5. Activate Nervedo the Shadebeast Power Patron (M1): Special Summon 1 "Nerva the Power Patron of Creation" from your Extra Deck
6. Selected Nerva the Power Patron of Creation (Extra Deck)
7. Yes
8. Selected Junoldo the Shadespirit Power Patron (Deck)
9. Activate Junoldo the Shadespirit Power Patron (M1): Special Summon 1 "Junora the Power Patron of Tuning" from your Extra Deck
10. Selected Junora the Power Patron of Tuning (Extra Deck)
11. Yes
12. Selected Nervedo the Shadebeast Power Patron (Extra Deck)
13. Link Summon Purification Power Patron (Extra Deck)
14. select Medius the Pure (M4)
15. select Junora the Power Patron of Tuning (EMZ-R)
16. Yes
17. Selected Theorealize Medius (Deck)
18. Activate Medius the Pure (GY): Shuffle 1 monster from your hand or face-up field into the Deck, and if you do, Special Summon this card
19. Selected Ash Blossom & Joyous Spring (hand)
20. Activate Theorealize Medius (hand): If a "Power Patron" card is on the field: You can Special Summon this card from your hand, then you can add 1 "Theorealize" Spell/Trap from your Deck to your hand
21. Yes
22. Selected Theorealize Past Lull (Deck)
23. Special Summon (procedure) Artmage Non-Finito (Extra Deck)
24. Selected Theorealize Past Lull (hand)
25. Selected Nervedo the Shadebeast Power Patron (hand)
26. Yes
27. Activate Purification Power Patron (EMZ-R): Link Summon including this card as material
28. Selected Medicurius the Power Patron of Illusions (Extra Deck)
29. select Medius the Pure (M3)
30. Finish selection
31. Selected Artmage Impasto -Recapture- (Deck)
32. Yes
33. Special Summon 1 "Diactorus" monster
34. Selected Artmage Diactorus (Extra Deck)
35. Activate Theorealize Past Lull (GY): Special Summon 1 Fusion, Synchro, or Xyz Monster from your GY
36. Selected Junora the Power Patron of Tuning (GY)
37. Link Summon S:P Little Knight (Extra Deck)
38. select Junora the Power Patron of Tuning (M3)
39. select Artmage Non-Finito (M1)
40. No

End board:  LP 8000 | Hand 2 | Deck 34 | Extra 9 | GY 4 | Banished 9   Monsters: M3: S:P Little Knight L2←→ 1600  || M4: Artmage Diactorus Lv8 2800/2500 ATK || M5: Nerva the Power Patron of Creation Lv10 3300/3300 DEF || EMZ-R: Medicurius the Power Patron of Illusions L3↙↓↘ 3000    Spell/Trap: S1: Infinite Impermanence (Set) || S2: Artmage Impasto -Recapture- (Set)   GY: Nervedo the Shadebeast Power Patron, Purification Power Patron, Artmage Non-Finito, Junora the Power Patron of Tuning   Banished: Black Luster Soldier - Soldier of Light and Darkness (face-down), Nervedo the Shadebeast Power Patron (face-down), Pendulum Treasure (face-down), Plundered Power Patron Plane - Vidolia (face-down), Medius th

