# Evolved lines — Medius the Pure, Ash Blossom & Joyous Spring, Infinite Impermanence, Droll & Lock Bird, Ghost Ogre & Snow Rabbit (findlist-1100)
2026-11-25T18:53:49.704Z

8 deck orders (different face-down banishes / draws), 3 opponent hands x o_ss_panama + o_elfnote + o_despia + o_angelechy per line, 5 min searches, 4 mutation rounds.
Fitness = end-board interruptions (the lab scorer, src/disrupt.mjs: wipe 2, negate 1-1.5, banish/protection less; hand traps kept count 1 each). The winner of each order is also played into the opponent decks: margin after their turn shown beside it.

**Margin after their turn (winners): average 4.05** (worst -2.65)

**Best line per deck order: average 12.9** (worst order 12.05). Winner came from: m1b → new ending → new ending → new early order 1, m1b → new ending → new ending 1, m1b → new ending 1, m1b 1, bx1 → new ending 1, tries Activate Junoldo the Shadespirit Power Patron → new ending 1, bx1 1, bx1 → new early order 1

| seed line | works as written | its score when it works | seed start + search finish (all orders) |
|---|---|---|---|
| br1 | 1/8 | 10.4 | 9.6 |
| bx1 | 0/8 | - | 11.5 |
| m1a | 5/8 | 9.25 | 10.71 |
| m1b | 5/8 | 8.25 | 11.94 |
| v52-medius | 5/8 | 12.2 | 11.91 |

## Weak points found automatically
Cards whose face-down banish (by your own costs) hurt the best line most (average best line without vs with that card banished):

| card | orders where it was banished | drop |
|---|---|---|
| Griffoh | 4/8 | 0.92 |
| Medius the Pure | 4/8 | 0.88 |
| Vidolium the Unstable Power Patron of Unity | 2/8 | 0.77 |
| Mind Shuffle | 4/8 | 0.7 |
| Ars Magna - "Citrinitas" | 4/8 | 0.4 |
| Pendulum Treasure | 4/8 | 0.15 |
| Artmage Finmel | 2/8 | 0.13 |
| Ash Blossom & Joyous Spring | 2/8 | 0.13 |
| Fiendsmith Engraver | 4/8 | 0.08 |
| Artmage Vandalism -Assault- | 5/8 | 0.08 |

Where the hand-designed lines broke (next step that no longer worked):
- bx1: Griffoh (3x)
- br1: Griffoh (3x)
- m1a: Past Lull (2x)
- m1b: Past Lull (2x)
- v52-medius: Past Lull (2x)
- bx1: Skull Archfiend (1x)
- br1: Skull Archfiend (1x)
- bx1: Xyz Summon Evilswarm Exciton Knight (1x)
- bx1: Set 1 card (1x)
- br1: Set 1 card (1x)
- bx1: Magician of Dark Chaos (1x)
- br1: Magician of Dark Chaos (1x)
- bx1: Junoldo (1x)
- m1b: Junoldo (1x)
- m1a: Junoldo (1x)
- br1: Junoldo (1x)
- v52-medius: Junoldo (1x)

List changes proposed for the list test (data/proposals-findlist-1100.json):
- +1 Griffoh, −1 Plundered Power Patron Plane - Vidolia — Griffoh: best line 0.92 worse when a cost banished it (4 of 8 orders) — Medius the Pure
- +1 Vidolium the Unstable Power Patron of Unity, −1 Artmage Vandalism -Assault- — Vidolium the Unstable Power Patron of Unity: best line 0.77 worse when a cost banished it (2 of 8 orders) — Medius the Pure
- +1 Mind Shuffle, −1 Small World — Mind Shuffle: best line 0.7 worse when a cost banished it (4 of 8 orders) — Medius the Pure
- +1 Griffoh — Griffoh: best line 0.92 worse when a cost banished it (4 of 8 orders) — Medius the Pure (add only: deck grows, up to 60)
- +1 Vidolium the Unstable Power Patron of Unity — Vidolium the Unstable Power Patron of Unity: best line 0.77 worse when a cost banished it (2 of 8 orders) — Medius the Pure (add only: deck grows, up to 60)
- +1 Mind Shuffle — Mind Shuffle: best line 0.7 worse when a cost banished it (4 of 8 orders) — Medius the Pure (add only: deck grows, up to 60)

Effects the search had not used, tried on purpose (best result so far):
- Activate Mind Shuffle: 12.25
- Activate Theorealize Liberation: 12.15
- Activate Junoldo the Shadespirit Power Patron: 12.15
- Activate Light and Darkness Ritual: 11.5
- Activate Light and Darkness Ritual: 11.5
- Activate Junoldo the Shadespirit Power Patron: 11.3
- Activate Black Chaos: 11.25
- Activate Pendulum Treasure: 11.25

## Order 1: best 12.7 [margin 3.68: ss_panama -0.45, elfnote null, despia 0.4, angelechy 7.39] (, worst 12.7) — from m1b → new ending → new ending → new early order
Others: m1b → new ending → new ending 12.5 · m1b → new ending 12.35 · m1b 12.3 · m1b → new ending → new early order 12.3 · v52-medius 12.2 · v52-medius 12.2 · search 11.75 · tries Activate Light and Darkness Ritual 11.5 · tries Activate Light and Darkness Ritual 11.5 · opening lanes 11.5 · bx1 10.9 · m1a 9.8 · m1a 9.25 · br1 8.33 · m1b 8.25

1. Normal Summon Medius the Pure (hand)
2. Yes
3. Selected Nervedo the Shadebeast Power Patron (Deck)
4. Special Summon it
5. Activate Nervedo the Shadebeast Power Patron (M2): Special Summon 1 "Nerva the Power Patron of Creation" from your Extra Deck
6. Selected Nerva the Power Patron of Creation (Extra Deck)
7. Yes
8. Selected Artmage Graflare (Deck)
9. Link Summon Purification Power Patron (Extra Deck)
10. select Medius the Pure (M1)
11. select Nerva the Power Patron of Creation (M5)
12. Yes
13. Selected Theorealize Medius (Deck)
14. Activate Medius the Pure (GY): Shuffle 1 monster from your hand or face-up field into the Deck, and if you do, Special Summon this card
15. Selected Droll & Lock Bird (hand)
16. Activate Theorealize Medius (hand): If a "Power Patron" card is on the field: You can Special Summon this card from your hand, then you can add 1 "Theorealize" Spell/Trap from your Deck to your hand
17. Yes
18. Selected Theorealize Liberation (Deck)
19. Activate Theorealize Liberation (hand): Add to your hand, or Special Summon, 1 monster from your Deck with 300 ATK/200 DEF
20. Activate Purification Power Patron (EMZ-R): Link Summon including this card as material
21. Selected Medicurius the Power Patron of Illusions (Extra Deck)
22. select Medius the Pure (M5)
23. Finish selection
24. Selected Griffoh (Deck)
25. Add the card(s) to your hand
26. Yes
27. Special Summon 1 "Diactorus" monster
28. Selected Artmage Diactorus (Extra Deck)
29. Activate Griffoh (hand): Activate 1 of these effects
30. Set 1 card that mentions "Light and Darkness Ritual"
31. Selected Mind Shuffle (Deck)
32. Activate Mind Shuffle (S1): activate this card
33. No
34. Activate Mind Shuffle (S1): Add 1 appropriate monster to your hand
35. Selected Skull Archfiend of Chaos (Deck)
36. Selected Skull Archfiend of Chaos (hand)
37. Yes
38. Selected Light and Darkness Ritual (Deck)
39. Selected Magician of Dark Chaos - Black Chaos (Deck)
40. Activate Light and Darkness Ritual (GY): Add both this card and 1 card that mentions "Light and Darkness Ritual" from your GY to your hand
41. Selected Skull Archfiend of Chaos (GY)
42. Activate Light and Darkness Ritual (hand): Ritual Summon 1 "Magician of Dark Chaos - Black Chaos" or "Black Luster Soldier - Soldier of Light and Darkness" from your hand
43. Selected Magician of Dark Chaos - Black Chaos (hand)
44. Selected Griffoh (GY) value 8 or 1
45. Yes
46. Selected Theorealize Liberation (GY)
47. Special Summon (procedure) Artmage Non-Finito (Extra Deck)
48. Selected Theorealize Liberation (hand)
49. Selected Artmage Diactorus (M3)
50. Yes
51. Selected Artmage Impasto -Recapture- (Deck)

End board:  LP 8000 | Hand 4 | Deck 32 | Extra 11 | GY 5 | Banished 6   Monsters: M1: Magician of Dark Chaos - Black Chaos Lv8 2800/2600 ATK || M2: Artmage Graflare Lv5 2100/1500 ATK || M3: Artmage Non-Finito Lv7 2400/1500 ATK || EMZ-L: Medicurius the Power Patron of Illusions L3↙↓↘ 3000    Spell/Trap: S1: Mind Shuffle || S2: Artmage Impasto -Recapture- (Set)   GY: Nerva the Power Patron of Creation, Purification Power Patron, Light and Darkness Ritual, Theorealize Liberation, Artmage Diactorus   Banished: Medius the Pure (face-down), Ars Magna - "Citrinitas" (face-down), Ars Magna of Infinity and Finity (face-down), Medius the Pure, Theorealize Medius, Griffoh   Hand: Ghost Ogre & Snow Rabbit, Infinit

## Order 2: best 12.5 [margin 3.49: ss_panama 3.7, elfnote 3.3, despia -0.18, angelechy 7.2] (, worst 12.5) — from m1b → new ending → new ending
Others: m1b → new ending → new ending → new early order 12.45 · m1b → new ending 12.35 · m1b 12.3 · v52-medius 12.2 · v52-medius 12.2 · tries Activate Pendulum Treasure 11.25 · tries Activate Black Chaos 11.25 · opening lanes 11.25 · m1a 9.8 · search 9.5 · m1a 9.25 · bx1 9.25 · br1 8.33 · m1b 8.25

1. Normal Summon Medius the Pure (hand)
2. Yes
3. Selected Nervedo the Shadebeast Power Patron (Deck)
4. Special Summon it
5. Activate Nervedo the Shadebeast Power Patron (M2): Special Summon 1 "Nerva the Power Patron of Creation" from your Extra Deck
6. Selected Nerva the Power Patron of Creation (Extra Deck)
7. Yes
8. Selected Junoldo the Shadespirit Power Patron (Deck)
9. Activate Junoldo the Shadespirit Power Patron (M2): Special Summon 1 "Junora the Power Patron of Tuning" from your Extra Deck
10. Selected Junora the Power Patron of Tuning (Extra Deck)
11. Yes
12. Selected Nervedo the Shadebeast Power Patron (Extra Deck)
13. Link Summon Purification Power Patron (Extra Deck)
14. select Medius the Pure (M1)
15. select Junora the Power Patron of Tuning (M2)
16. Yes
17. Selected Theorealize Medius (Deck)
18. Activate Theorealize Medius (hand): If a "Power Patron" card is on the field: You can Special Summon this card from your hand, then you can add 1 "Theorealize" Spell/Trap from your Deck to your hand
19. Yes
20. Selected Theorealize Past Lull (Deck)
21. Special Summon (procedure) Artmage Non-Finito (Extra Deck)
22. Selected Theorealize Past Lull (hand)
23. Selected Nervedo the Shadebeast Power Patron (hand)
24. Yes
25. Selected Artmage Impasto -Recapture- (Deck)
26. Activate Medius the Pure (GY): Shuffle 1 monster from your hand or face-up field into the Deck, and if you do, Special Summon this card
27. Selected Artmage Non-Finito (M2)
28. Activate Theorealize Past Lull (GY): Special Summon 1 Fusion, Synchro, or Xyz Monster from your GY
29. Selected Junora the Power Patron of Tuning (GY)
30. Activate Purification Power Patron (EMZ-L): Link Summon including this card as material
31. Selected Medicurius the Power Patron of Illusions (Extra Deck)
32. select Medius the Pure (M4)
33. Finish selection
34. Yes
35. Special Summon 1 "Diactorus" monster
36. Selected Artmage Diactorus (Extra Deck)

End board:  LP 8000 | Hand 4 | Deck 33 | Extra 11 | GY 2 | Banished 9   Monsters: M3: Artmage Diactorus Lv8 2800/2500 ATK || M4: Junora the Power Patron of Tuning Lv10 3100/3800 ATK || M5: Nerva the Power Patron of Creation Lv10 3300/3300 ATK || EMZ-R: Medicurius the Power Patron of Illusions L3↙↓↘ 3000    Spell/Trap: S1: Artmage Impasto -Recapture- (Set)   GY: Nervedo the Shadebeast Power Patron, Purification Power Patron   Banished: Medius the Pure (face-down), Griffoh (face-down), Nervedo the Shadebeast Power Patron (face-down), Mind Shuffle (face-down), Artmage Vandalism -Assault- (face-down), Ars Magna - "Citrinitas" (face-down), Theorealize Past Lull, Medius the Pure, Theorealize Medius   Hand: G

## Order 3: best 12.5 [margin 3.35: ss_panama 3.58, elfnote null, despia -0.77, angelechy 7.25] (, worst 12.5) — from m1b → new ending
Others: m1b 12.3 · tries Activate Mind Shuffle 12.25 · opening lanes 12.25 · v52-medius 12.2 · v52-medius 12.2 · m1b → new ending → new early order 11.75 · m1b → new ending → new ending 11.05 · bx1 10.9 · search 10.1 · m1a 9.8 · m1a 9.25 · m1b → new ending → new early order 9.1 · br1 8.33 · m1b 8.25 · tries Activate Prohibited Power Patron Portal - Terminus 5.65

1. Normal Summon Medius the Pure (hand)
2. Yes
3. Selected Nervedo the Shadebeast Power Patron (Deck)
4. Special Summon it
5. Activate Nervedo the Shadebeast Power Patron (M2): Special Summon 1 "Nerva the Power Patron of Creation" from your Extra Deck
6. Selected Nerva the Power Patron of Creation (Extra Deck)
7. Yes
8. Selected Junoldo the Shadespirit Power Patron (Deck)
9. Activate Junoldo the Shadespirit Power Patron (M2): Special Summon 1 "Junora the Power Patron of Tuning" from your Extra Deck
10. Selected Junora the Power Patron of Tuning (Extra Deck)
11. Yes
12. Selected Nervedo the Shadebeast Power Patron (Extra Deck)
13. Link Summon Purification Power Patron (Extra Deck)
14. select Medius the Pure (M1)
15. select Junora the Power Patron of Tuning (M2)
16. Yes
17. Selected Theorealize Medius (Deck)
18. Activate Theorealize Medius (hand): If a "Power Patron" card is on the field: You can Special Summon this card from your hand, then you can add 1 "Theorealize" Spell/Trap from your Deck to your hand
19. Yes
20. Selected Theorealize Past Lull (Deck)
21. Special Summon (procedure) Artmage Non-Finito (Extra Deck)
22. Selected Theorealize Past Lull (hand)
23. Selected Nervedo the Shadebeast Power Patron (hand)
24. Yes
25. Selected Artmage Impasto -Recapture- (Deck)
26. Activate Medius the Pure (GY): Shuffle 1 monster from your hand or face-up field into the Deck, and if you do, Special Summon this card
27. Selected Artmage Non-Finito (M4)
28. Activate Purification Power Patron (EMZ-L): Link Summon including this card as material
29. Selected Medicurius the Power Patron of Illusions (Extra Deck)
30. select Medius the Pure (M1)
31. Finish selection
32. Yes
33. Special Summon 1 "Diactorus" monster
34. Selected Artmage Diactorus (Extra Deck)
35. Activate Theorealize Past Lull (GY): Special Summon 1 Fusion, Synchro, or Xyz Monster from your GY
36. Selected Junora the Power Patron of Tuning (GY)

End board:  LP 8000 | Hand 4 | Deck 33 | Extra 11 | GY 2 | Banished 9   Monsters: M3: Artmage Diactorus Lv8 2800/2500 ATK || M4: Junora the Power Patron of Tuning Lv10 3100/3800 ATK || M5: Nerva the Power Patron of Creation Lv10 3300/3300 ATK || EMZ-R: Medicurius the Power Patron of Illusions L3↙↓↘ 3000    Spell/Trap: S1: Artmage Impasto -Recapture- (Set)   GY: Nervedo the Shadebeast Power Patron, Purification Power Patron   Banished: Artmage Vandalism -Assault- (face-down), Mind Shuffle (face-down), Pendulum Treasure (face-down), Artmage Vandalism -Assault- (face-down), Fiendsmith's Tract (face-down), Griffoh (face-down), Medius the Pure, Theorealize Medius, Theorealize Past Lull   Hand: Ghost Ogre & 

## Order 4: best 12.6 [margin 6.96: ss_panama 7.83, elfnote 5.95, despia 5.3, angelechy 9.6] (, worst 12.6) — from m1b (seed followed 33/33 steps)
Others: v52-medius 12.2 · v52-medius 12.2 · opening lanes 12.2 · bx1 11.8 · search 11.75 · m1b → new early order 11.75 · m1b → new early order 11 · tries Activate Artmage Vandalism -Assault- 10.85 · tries Activate Artmage Vandalism -Assault- 10.85 · m1b → new ending 10.75 · m1a 9.8 · m1a 9.25 · m1b 8.25 · m1b → new ending 8.1 · br1 7.49

1. Normal Summon Medius the Pure (hand)
2. Yes
3. Selected Nervedo the Shadebeast Power Patron (Deck)
4. Special Summon it
5. Activate Nervedo the Shadebeast Power Patron (M2): Special Summon 1 "Nerva the Power Patron of Creation" from your Extra Deck
6. Selected Nerva the Power Patron of Creation (Extra Deck)
7. Yes
8. Selected Junoldo the Shadespirit Power Patron (Deck)
9. Activate Junoldo the Shadespirit Power Patron (M2): Special Summon 1 "Junora the Power Patron of Tuning" from your Extra Deck
10. Selected Junora the Power Patron of Tuning (Extra Deck)
11. Yes
12. Selected Nervedo the Shadebeast Power Patron (Extra Deck)
13. Link Summon Purification Power Patron (Extra Deck)
14. select Medius the Pure (M1)
15. select Junora the Power Patron of Tuning (M2)
16. Yes
17. Selected Theorealize Medius (Deck)
18. Activate Theorealize Medius (hand): If a "Power Patron" card is on the field: You can Special Summon this card from your hand, then you can add 1 "Theorealize" Spell/Trap from your Deck to your hand
19. Yes
20. Selected Theorealize Past Lull (Deck)
21. Special Summon (procedure) Artmage Non-Finito (Extra Deck)
22. Selected Theorealize Past Lull (hand)
23. Selected Nervedo the Shadebeast Power Patron (hand)
24. Yes
25. Selected Artmage Impasto -Recapture- (Deck)
26. Activate Theorealize Past Lull (GY): Special Summon 1 Fusion, Synchro, or Xyz Monster from your GY
27. Selected Junora the Power Patron of Tuning (GY)
28. Activate Medius the Pure (GY): Shuffle 1 monster from your hand or face-up field into the Deck, and if you do, Special Summon this card
29. Selected Ghost Ogre & Snow Rabbit (hand)
30. Set Spell/Trap Infinite Impermanence
31. Link Summon S:P Little Knight (Extra Deck)
32. select Medius the Pure (M1)
33. select Junora the Power Patron of Tuning (M2)
34. Yes
35. Add 1 "Ars Magna" card from your Deck to your hand
36. Selected Ars Magna of Infinity and Finity (Deck)
37. Activate Ars Magna of Infinity and Finity (hand): You can banish this card from your hand; add 1 non-Warrior "Ars Magna" monster from your Deck to your hand
38. Selected Ars Magna of Purification and Corruption (Deck)
39. Activate Ars Magna of Purification and Corruption (hand): You can banish this card from your hand; add 1 "Ars Magna" Spell/Trap from your Deck to your hand
40. Activate Purification Power Patron (EMZ-L): Link Summon including this card as material
41. Selected Medicurius the Power Patron of Illusions (Extra Deck)
42. select Theorealize Medius (M3)
43. Finish selection
44. Selected Ars Magna - "Citrinitas" (Deck)
45. Activate Ars Magna of Purification and Corruption (banishment): Special Summon this card
46. Activate Ars Magna of Infinity and Finity (banishment): Special Summon this card
47. Activate Ars Magna - "Citrinitas" (hand): activate this card
48. Activate Ars Magna - "Citrinitas" (S3): Add 1 "Medius" or "Ars Magna" monster from your Deck to your hand
49. Selected Medius the Pure (Deck)

End board:  LP 8000 | Hand 3 | Deck 30 | Extra 10 | GY 4 | Banished 8   Monsters: M1: Ars Magna of Infinity and Finity Lv8 1000/2400 ATK || M2: S:P Little Knight L2←→ 1600  || M3: Ars Magna of Purification and Corruption Lv8 1000/2100 ATK || M4: Artmage Non-Finito Lv7 2400/1500 ATK || M5: Nerva the Power Patron of Creation Lv10 3300/3300 ATK || EMZ-L: Medicurius the Power Patron of Illusions L3↙↓↘ 9000    Spell/Trap: S1: Artmage Impasto -Recapture- (Set) || S2: Infinite Impermanence (Set) || S3: Ars Magna - "Citrinitas"   GY: Nervedo the Shadebeast Power Patron, Junora the Power Patron of Tuning, Theorealize Medius, Purification Power Patron   Banished: Black Luster Soldier - Soldier of Light and Darkn

## Order 5: best 14.15 [margin 6.42: ss_panama 7.83, elfnote null, despia -0.13, angelechy 9.85] (, worst 14.15) — from bx1 → new ending
Others: bx1 → new ending → new early order 14.1 · bx1 13.4 · bx1 → new ending → new ending 12.35 · bx1 → new ending → new early order 12.3 · v52-medius 12.2 · m1b 12.2 · v52-medius 12.2 · tries Activate Theorealize Liberation 12.15 · opening lanes 11.7 · br1 10.85 · search 10.75 · br1 10.4 · m1a 9.8 · tries Activate Vidolium the Unstable Power Patron of Unity 9.75 · m1a 9.25 · m1b 8.25

1. Normal Summon Medius the Pure (hand)
2. Yes
3. Selected Nervedo the Shadebeast Power Patron (Deck)
4. Special Summon it
5. Activate Nervedo the Shadebeast Power Patron (M2): Special Summon 1 "Nerva the Power Patron of Creation" from your Extra Deck
6. Selected Nerva the Power Patron of Creation (Extra Deck)
7. Yes
8. Selected Junoldo the Shadespirit Power Patron (Deck)
9. Activate Junoldo the Shadespirit Power Patron (M2): Special Summon 1 "Junora the Power Patron of Tuning" from your Extra Deck
10. Selected Junora the Power Patron of Tuning (Extra Deck)
11. Yes
12. Selected Nervedo the Shadebeast Power Patron (Extra Deck)
13. Link Summon Purification Power Patron (Extra Deck)
14. select Medius the Pure (M1)
15. select Junora the Power Patron of Tuning (M2)
16. Yes
17. Selected Theorealize Medius (Deck)
18. Activate Theorealize Medius (hand): If a "Power Patron" card is on the field: You can Special Summon this card from your hand, then you can add 1 "Theorealize" Spell/Trap from your Deck to your hand
19. Yes
20. Selected Theorealize Liberation (Deck)
21. Activate Medius the Pure (GY): Shuffle 1 monster from your hand or face-up field into the Deck, and if you do, Special Summon this card
22. Selected Ghost Ogre & Snow Rabbit (hand)
23. Activate Theorealize Liberation (hand): Add to your hand, or Special Summon, 1 monster from your Deck with 300 ATK/200 DEF
24. Selected Griffoh (Deck)
25. Add the card(s) to your hand
26. Activate Griffoh (hand): Activate 1 of these effects
27. Set 1 card that mentions "Light and Darkness Ritual"
28. Selected Mind Shuffle (Deck)
29. Activate Mind Shuffle (S1): activate this card
30. Yes
31. Selected Skull Archfiend of Chaos (Deck)
32. Selected Skull Archfiend of Chaos (hand)
33. Yes
34. Selected Light and Darkness Ritual (Deck)
35. Selected Magician of Dark Chaos - Black Chaos (Deck)
36. Activate Light and Darkness Ritual (GY): Add both this card and 1 card that mentions "Light and Darkness Ritual" from your GY to your hand
37. Selected Skull Archfiend of Chaos (GY)
38. Activate Purification Power Patron (EMZ-L): Link Summon including this card as material
39. Selected Medicurius the Power Patron of Illusions (Extra Deck)
40. select Medius the Pure (M1)
41. Finish selection
42. Yes
43. Special Summon 1 "Diactorus" monster
44. Selected Artmage Diactorus (Extra Deck)
45. Activate Light and Darkness Ritual (hand): Ritual Summon 1 "Magician of Dark Chaos - Black Chaos" or "Black Luster Soldier - Soldier of Light and Darkness" from your hand
46. Selected Magician of Dark Chaos - Black Chaos (hand)
47. Selected Griffoh (GY) value 8 or 1
48. Yes
49. Selected Light and Darkness Ritual (GY)
50. Special Summon (procedure) Artmage Non-Finito (Extra Deck)
51. Selected Light and Darkness Ritual (hand)
52. Selected Nervedo the Shadebeast Power Patron (hand)
53. Yes
54. Selected Artmage Impasto -Recapture- (Deck)

End board:  LP 8000 | Hand 4 | Deck 29 | Extra 10 | GY 5 | Banished 9   Monsters: M1: Artmage Diactorus Lv8 2800/2500 ATK || M3: Artmage Non-Finito Lv7 2400/1500 ATK || M4: Magician of Dark Chaos - Black Chaos Lv8 2800/2600 ATK || M5: Nerva the Power Patron of Creation Lv10 3300/3300 ATK || EMZ-R: Medicurius the Power Patron of Illusions L3↙↓↘ 3000    Spell/Trap: S1: Mind Shuffle || S2: Artmage Impasto -Recapture- (Set)   GY: Junora the Power Patron of Tuning, Theorealize Liberation, Purification Power Patron, Light and Darkness Ritual, Nervedo the Shadebeast Power Patron   Banished: Theorealize Medius (face-down), Pendulum Treasure (face-down), Artmage Vandalism -Assault- (face-down), Lacrima the Crim

## Order 6: best 12.05 [margin 3.27: ss_panama 3.28, elfnote null, despia null, angelechy 3.26] (, worst 12.05) — from tries Activate Junoldo the Shadespirit Power Patron → new ending
Others: tries Activate Junoldo the Shadespirit Power Patron → new ending → new early order 11.55 · tries Activate Junoldo the Shadespirit Power Patron 11.3 · tries Activate Junoldo the Shadespirit Power Patron → new ending → new early order 11.2 · tries Activate Junoldo the Shadespirit Power Patron → new ending → new ending 11.05 · m1a 11 · m1b 11 · v52-medius 10.9 · opening lanes 10.85 · tries Activate Vidolium the Unstable Power Patron of Unity 10.7 · search 9.9 · bx1 9.1 · br1 8.18

1. Set Spell/Trap Infinite Impermanence
2. Normal Summon Medius the Pure (hand)
3. Yes
4. Selected Nervedo the Shadebeast Power Patron (Deck)
5. Special Summon it
6. Activate Nervedo the Shadebeast Power Patron (M3): Special Summon 1 "Nerva the Power Patron of Creation" from your Extra Deck
7. Selected Nerva the Power Patron of Creation (Extra Deck)
8. Yes
9. Selected Junoldo the Shadespirit Power Patron (Deck)
10. Activate Junoldo the Shadespirit Power Patron (M5): Special Summon 1 "Junora the Power Patron of Tuning" from your Extra Deck
11. Selected Junora the Power Patron of Tuning (Extra Deck)
12. Yes
13. Selected Nervedo the Shadebeast Power Patron (Extra Deck)
14. Link Summon Purification Power Patron (Extra Deck)
15. select Medius the Pure (M1)
16. select Junora the Power Patron of Tuning (M3)
17. Yes
18. Selected Theorealize Medius (Deck)
19. Activate Medius the Pure (GY): Shuffle 1 monster from your hand or face-up field into the Deck, and if you do, Special Summon this card
20. Selected Ghost Ogre & Snow Rabbit (hand)
21. Activate Theorealize Medius (hand): If a "Power Patron" card is on the field: You can Special Summon this card from your hand, then you can add 1 "Theorealize" Spell/Trap from your Deck to your hand
22. Yes
23. Selected Theorealize Liberation (Deck)
24. Activate Theorealize Liberation (hand): Add to your hand, or Special Summon, 1 monster from your Deck with 300 ATK/200 DEF
25. Activate Purification Power Patron (EMZ-L): Link Summon including this card as material
26. Selected Medicurius the Power Patron of Illusions (Extra Deck)
27. select Medius the Pure (M2)
28. Finish selection
29. Selected Griffoh (Deck)
30. Add the card(s) to your hand
31. Yes
32. Add 1 "Ars Magna" card from your Deck to your hand
33. Selected Ars Magna of Infinity and Finity (Deck)
34. Activate Ars Magna of Infinity and Finity (hand): You can banish this card from your hand; add 1 non-Warrior "Ars Magna" monster from your Deck to your hand
35. Selected Ars Magna of Purification and Corruption (Deck)
36. Activate Ars Magna of Purification and Corruption (hand): You can banish this card from your hand; add 1 "Ars Magna" Spell/Trap from your Deck to your hand
37. Selected Ars Magna - "Citrinitas" (Deck)
38. Special Summon (procedure) Artmage Non-Finito (Extra Deck)
39. Selected Ars Magna - "Citrinitas" (hand)
40. Selected Nervedo the Shadebeast Power Patron (hand)
41. Activate Artmage Non-Finito (M1): Set 1 "Artmage" Spell/Trap from your Deck
42. Activate Ars Magna of Infinity and Finity (banishment): Special Summon this card
43. Selected Artmage Impasto -Recapture- (Deck)
44. Activate Theorealize Liberation (GY): Treat 1 monster you control as a Tuner this turn
45. Selected Nerva the Power Patron of Creation (M4)
46. Link Summon S:P Little Knight (Extra Deck)
47. select Theorealize Medius (M5)
48. select Ars Magna of Infinity and Finity (M3)
49. Yes

End board:  LP 8000 | Hand 3 | Deck 30 | Extra 10 | GY 6 | Banished 8   Monsters: M1: Artmage Non-Finito Lv7 2400/1500 ATK || M3: S:P Little Knight L2←→ 1600  || M4: Nerva the Power Patron of Creation Lv10 3300/3300 ATK || M5: Ars Magna of Purification and Corruption Lv8 1000/2100 ATK || EMZ-R: Medicurius the Power Patron of Illusions L3↙↓↘ 9000    Spell/Trap: S1: Infinite Impermanence (Set) || S2: Artmage Impasto -Recapture- (Set)   GY: Junora the Power Patron of Tuning, Purification Power Patron, Ars Magna - "Citrinitas", Nervedo the Shadebeast Power Patron, Ars Magna of Infinity and Finity, Theorealize Medius   Banished: Lacrima the Crimson Tears (face-down), Artmage Vandalism -Assault- (face-down),

## Order 7: best 13.55 [margin 3.96: ss_panama 1.4, elfnote 4.93, despia -0.99, angelechy 9.23] (, worst 13.55) — from bx1 (seed followed 37/58 steps)
Others: bx1 → new ending 13.55 · bx1 → new ending 13.55 · m1a 13.5 · bx1 → new early order 13.5 · v52-medius 13.4 · br1 13.05 · search 12.55 · tries Activate Junoldo the Shadespirit Power Patron 12.15 · bx1 → new early order 11.3 · opening lanes 11.1 · m1b 10.6 · tries Activate Vidolium the Unstable Power Patron of Unity 6.75

1. Normal Summon Medius the Pure (hand)
2. Yes
3. Selected Nervedo the Shadebeast Power Patron (Deck)
4. Special Summon it
5. Activate Nervedo the Shadebeast Power Patron (M2): Special Summon 1 "Nerva the Power Patron of Creation" from your Extra Deck
6. Selected Nerva the Power Patron of Creation (Extra Deck)
7. Yes
8. Selected Junoldo the Shadespirit Power Patron (Deck)
9. Activate Junoldo the Shadespirit Power Patron (M2): Special Summon 1 "Junora the Power Patron of Tuning" from your Extra Deck
10. Selected Junora the Power Patron of Tuning (Extra Deck)
11. Yes
12. Selected Nervedo the Shadebeast Power Patron (Extra Deck)
13. Link Summon Purification Power Patron (Extra Deck)
14. select Medius the Pure (M1)
15. select Junora the Power Patron of Tuning (M2)
16. Yes
17. Selected Theorealize Medius (Deck)
18. Activate Theorealize Medius (hand): If a "Power Patron" card is on the field: You can Special Summon this card from your hand, then you can add 1 "Theorealize" Spell/Trap from your Deck to your hand
19. Yes
20. Selected Theorealize Liberation (Deck)
21. Activate Medius the Pure (GY): Shuffle 1 monster from your hand or face-up field into the Deck, and if you do, Special Summon this card
22. Selected Ghost Ogre & Snow Rabbit (hand)
23. Activate Theorealize Liberation (hand): Add to your hand, or Special Summon, 1 monster from your Deck with 300 ATK/200 DEF
24. Selected Griffoh (Deck)
25. Add the card(s) to your hand
26. Activate Griffoh (hand): Activate 1 of these effects
27. Set 1 card that mentions "Light and Darkness Ritual"
28. Selected Mind Shuffle (Deck)
29. Activate Mind Shuffle (S1): activate this card
30. Yes
31. Selected Skull Archfiend of Chaos (Deck)
32. Selected Skull Archfiend of Chaos (hand)
33. Yes
34. Selected Light and Darkness Ritual (Deck)
35. Selected Black Luster Soldier - Soldier of Light and Darkness (Deck)
36. Activate Light and Darkness Ritual (GY): Add both this card and 1 card that mentions "Light and Darkness Ritual" from your GY to your hand
37. Activate Purification Power Patron (EMZ-L): Link Summon including this card as material
38. Selected Medicurius the Power Patron of Illusions (Extra Deck)
39. select Medius the Pure (M1)
40. Finish selection
41. Selected Griffoh (GY)
42. Yes
43. Special Summon 1 "Diactorus" monster
44. Selected Artmage Diactorus (Extra Deck)
45. Special Summon (procedure) Artmage Non-Finito (Extra Deck)
46. Selected Light and Darkness Ritual (hand)
47. Selected Nervedo the Shadebeast Power Patron (hand)
48. Yes
49. Selected Artmage Impasto -Recapture- (Deck)
50. Activate Theorealize Liberation (GY): Treat 1 monster you control as a Tuner this turn
51. Selected Medicurius the Power Patron of Illusions (EMZ-R)
52. Activate Skull Archfiend of Chaos (GY): Special Summon this card
53. select Junora the Power Patron of Tuning (GY)
54. select Nervedo the Shadebeast Power Patron (GY)
55. select Light and Darkness Ritual (GY)
56. Default order

End board:  LP 8000 | Hand 5 | Deck 31 | Extra 11 | GY 1 | Banished 9   Monsters: M1: Skull Archfiend of Chaos Lv6 2500/1200 ATK || M3: Artmage Diactorus Lv8 2800/2500 ATK || M4: Artmage Non-Finito Lv7 2400/1500 ATK || M5: Nerva the Power Patron of Creation Lv10 3300/3300 ATK || EMZ-R: Medicurius the Power Patron of Illusions L3↙↓↘ 3000    Spell/Trap: S1: Mind Shuffle || S2: Artmage Impasto -Recapture- (Set)   GY: Purification Power Patron   Banished: Fiendsmith's Tract (face-down), Ars Magna - "Citrinitas" (face-down), Nervedo the Shadebeast Power Patron (face-down), Fiendsmith Engraver (face-down), Magician of Dark Chaos - Black Chaos (face-down), Theorealize Past Lull (face-down), Medius the Pure, T

## Order 8: best 13.15 [margin 1.27: ss_panama -0.01, elfnote null, despia -1.2, angelechy 8.75] (, worst 13.15) — from bx1 → new early order
Others: bx1 13.1 · bx1 → new ending 13.1 · bx1 → new early order 13.1 · m1b 12.2 · m1a 12.2 · br1 12.2 · opening lanes 11.25 · tries Activate Ars Magna of Purification and Corruption 10.75 · v52-medius 10 · tries Activate Theorealize Past Lull 9.95 · search 8.6 · bx1 → new ending 5.1

1. Normal Summon Medius the Pure (hand)
2. Yes
3. Selected Nervedo the Shadebeast Power Patron (Deck)
4. Special Summon it
5. Activate Nervedo the Shadebeast Power Patron (M2): Special Summon 1 "Nerva the Power Patron of Creation" from your Extra Deck
6. Selected Nerva the Power Patron of Creation (Extra Deck)
7. Yes
8. Selected Artmage Finmel (Deck)
9. Link Summon Purification Power Patron (Extra Deck)
10. select Medius the Pure (M1)
11. select Nerva the Power Patron of Creation (M5)
12. Yes
13. Selected Theorealize Medius (Deck)
14. Activate Theorealize Medius (hand): If a "Power Patron" card is on the field: You can Special Summon this card from your hand, then you can add 1 "Theorealize" Spell/Trap from your Deck to your hand
15. Yes
16. Selected Theorealize Liberation (Deck)
17. Activate Medius the Pure (GY): Shuffle 1 monster from your hand or face-up field into the Deck, and if you do, Special Summon this card
18. Selected Droll & Lock Bird (hand)
19. Activate Theorealize Liberation (hand): Add to your hand, or Special Summon, 1 monster from your Deck with 300 ATK/200 DEF
20. Selected Griffoh (Deck)
21. Add the card(s) to your hand
22. Activate Purification Power Patron (EMZ-R): Link Summon including this card as material
23. Selected Medicurius the Power Patron of Illusions (Extra Deck)
24. select Medius the Pure (M1)
25. Finish selection
26. Yes
27. Special Summon 1 "Diactorus" monster
28. Selected Artmage Diactorus (Extra Deck)
29. Activate Griffoh (hand): Activate 1 of these effects
30. Set 1 card that mentions "Light and Darkness Ritual"
31. Selected Mind Shuffle (Deck)
32. Activate Mind Shuffle (S1): activate this card
33. Yes
34. Selected Skull Archfiend of Chaos (Deck)
35. Selected Skull Archfiend of Chaos (hand)
36. Yes
37. Selected Light and Darkness Ritual (Deck)
38. Selected Magician of Dark Chaos - Black Chaos (Deck)
39. Activate Light and Darkness Ritual (GY): Add both this card and 1 card that mentions "Light and Darkness Ritual" from your GY to your hand
40. Selected Skull Archfiend of Chaos (GY)
41. Activate Light and Darkness Ritual (hand): Ritual Summon 1 "Magician of Dark Chaos - Black Chaos" or "Black Luster Soldier - Soldier of Light and Darkness" from your hand
42. Selected Magician of Dark Chaos - Black Chaos (hand)
43. Selected Griffoh (GY) value 8 or 1
44. Yes
45. Selected Light and Darkness Ritual (GY)
46. Special Summon (procedure) Artmage Non-Finito (Extra Deck)
47. Selected Light and Darkness Ritual (hand)
48. Selected Artmage Finmel (M2)
49. Yes
50. Selected Artmage Impasto -Recapture- (Deck)

End board:  LP 8000 | Hand 4 | Deck 32 | Extra 11 | GY 5 | Banished 6   Monsters: M3: Magician of Dark Chaos - Black Chaos Lv8 2800/2600 ATK || M4: Artmage Diactorus Lv8 2800/2500 ATK || M5: Artmage Non-Finito Lv7 2400/1500 ATK || EMZ-R: Medicurius the Power Patron of Illusions L3↙↓↘ 3000    Spell/Trap: S1: Mind Shuffle || S2: Artmage Impasto -Recapture- (Set)   GY: Nerva the Power Patron of Creation, Theorealize Liberation, Purification Power Patron, Light and Darkness Ritual, Artmage Finmel   Banished: Fiendsmith Engraver (face-down), Junoldo the Shadespirit Power Patron (face-down), Theorealize Medius (face-down), Medius the Pure, Theorealize Medius, Griffoh   Hand: Ash Blossom & Joyous Spring, Infi

