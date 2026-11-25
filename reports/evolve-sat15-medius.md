# Evolved lines — Medius the Pure, Ash Blossom & Joyous Spring, Infinite Impermanence, Droll & Lock Bird, Ghost Ogre & Snow Rabbit (findlist-1100)
2026-11-25T16:18:38.586Z

8 deck orders (different face-down banishes / draws), 3 opponent hands x o_ss_panama + o_elfnote + o_despia + o_angelechy per line, 15 min searches, 4 mutation rounds.
Fitness = average margin after their turn (what you keep minus what they build; −10 more if they OTK). Higher is better.

**Best line per deck order: average 6.51** (worst order 4.81). Winner came from: m1b 2, m1b → new early order 1, tries Activate Mind Shuffle 1, search → new early order 1, search 1, bx1 → new ending 1, m1b → new ending 1

| seed line | works as written | its score when it works | seed start + search finish (all orders) |
|---|---|---|---|
| br1 | 1/8 | 2.76 | 2.04 |
| bx1 | 0/8 | - | 3.01 |
| m1a | 5/8 | 2.24 | 3.16 |
| m1b | 5/8 | 3.12 | 4.59 |

## Weak points found automatically
Cards whose face-down banish (by your own costs) hurt the best line most (average best line without vs with that card banished):

| card | orders where it was banished | drop |
|---|---|---|
| Artmage Vandalism -Assault- | 6/8 | 2.26 |
| Mind Shuffle | 3/8 | 2.24 |
| Lacrima the Crimson Tears | 2/8 | 1.48 |
| Light and Darkness Ritual | 3/8 | 1.28 |
| Griffoh | 3/8 | 1.01 |
| Pendulum Treasure | 6/8 | 0.98 |
| Plundered Power Patron Plane - Vidolia | 2/8 | 0.8 |
| Skull Archfiend of Chaos | 2/8 | 0.8 |
| Medius the Pure | 4/8 | 0.7 |
| Ars Magna of Infinity and Finity | 2/8 | 0.53 |

Where the hand-designed lines broke (next step that no longer worked):
- bx1: Griffoh (3x)
- br1: Griffoh (3x)
- m1b: Past Lull (2x)
- m1a: Past Lull (2x)
- br1: Skull Archfiend (1x)
- bx1: Skull Archfiend (1x)
- bx1: Xyz Summon Evilswarm Exciton Knight (1x)
- br1: Set 1 card (1x)
- bx1: Set 1 card (1x)
- bx1: Magician of Dark Chaos (1x)
- br1: Magician of Dark Chaos (1x)
- m1b: Junoldo (1x)
- bx1: Junoldo (1x)
- br1: Junoldo (1x)
- m1a: Junoldo (1x)

List changes proposed for the list test (data/proposals-findlist-1100.json):
- +1 Mind Shuffle, −1 Plundered Power Patron Plane - Vidolia — Mind Shuffle: best line 2.24 worse when a cost banished it (3 of 8 orders) — Medius the Pure
- +1 Lacrima the Crimson Tears, −1 Artmage Vandalism -Assault- — Lacrima the Crimson Tears: best line 1.48 worse when a cost banished it (2 of 8 orders) — Medius the Pure
- +1 Light and Darkness Ritual, −1 Small World — Light and Darkness Ritual: best line 1.28 worse when a cost banished it (3 of 8 orders) — Medius the Pure
- +1 Griffoh, −1 Plundered Power Patron Plane - Vidolia — Griffoh: best line 1.01 worse when a cost banished it (3 of 8 orders) — Medius the Pure
- +1 Mind Shuffle — Mind Shuffle: best line 2.24 worse when a cost banished it (3 of 8 orders) — Medius the Pure (add only: deck grows, up to 60)
- +1 Lacrima the Crimson Tears — Lacrima the Crimson Tears: best line 1.48 worse when a cost banished it (2 of 8 orders) — Medius the Pure (add only: deck grows, up to 60)
- +1 Light and Darkness Ritual — Light and Darkness Ritual: best line 1.28 worse when a cost banished it (3 of 8 orders) — Medius the Pure (add only: deck grows, up to 60)
- +1 Griffoh — Griffoh: best line 1.01 worse when a cost banished it (3 of 8 orders) — Medius the Pure (add only: deck grows, up to 60)

Effects the search had not used, tried on purpose (best result so far):
- Activate Junoldo the Shadespirit Power Patron: 6.1
- Activate Light and Darkness Ritual: 5.72
- Activate Mind Shuffle: 5.58
- Activate Mind Shuffle: 5.43
- Activate Artmage Diactorus: 5.39
- Activate Ars Magna - "Citrinitas": 4.69
- Activate Griffoh: 4.67
- Activate Nervedo the Shadebeast Power Patron: 4.18

## Order 1: best 7.13 (ss_panama 4.22, elfnote 4.13, despia 9.45, angelechy 9.3, worst 1.25) — from m1b (seed followed 33/33 steps)
Others: m1b → new early order 7 · tries Activate Junoldo the Shadespirit Power Patron 6.1 · tries Activate Light and Darkness Ritual 5.72 · m1b → new ending 4.76 · m1b → new ending 3.84 · opening lanes 3.78 · m1b 3.4 · m1a 3.25 · m1b → new early order 2.77 · m1a 2.66 · search 2.06 · bx1 1.92 · br1 -0.28

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
31. Activate Purification Power Patron (EMZ-L): Link Summon including this card as material
32. Selected Medicurius the Power Patron of Illusions (Extra Deck)
33. select Junora the Power Patron of Tuning (M2)
34. Finish selection
35. Link Summon S:P Little Knight (Extra Deck)
36. select Medius the Pure (M1)
37. select Artmage Non-Finito (M4)
38. Yes
39. Special Summon 1 "Diactorus" monster
40. Activate S:P Little Knight (M4): Banish 1 card on the field or GY
41. Selected Junora the Power Patron of Tuning (GY)
42. Selected Artmage Diactorus (Extra Deck)

End board:  LP 8000 | Hand 2 | Deck 34 | Extra 9 | GY 3 | Banished 10   Monsters: M3: Artmage Diactorus Lv8 2800/2500 ATK || M4: S:P Little Knight L2←→ 1600  || M5: Nerva the Power Patron of Creation Lv10 3300/3300 ATK || EMZ-R: Medicurius the Power Patron of Illusions L3↙↓↘ 3000    Spell/Trap: S1: Artmage Impasto -Recapture- (Set) || S2: Infinite Impermanence (Set)   GY: Nervedo the Shadebeast Power Patron, Purification Power Patron, Artmage Non-Finito   Banished: Medius the Pure (face-down), Ars Magna - "Citrinitas" (face-down), Ars Magna of Infinity and Finity (face-down), Fiendsmith Engraver (face-down), Artmage Graflare (face-down), Griffoh (face-down), Theorealize Past Lull, Medius the Pure, Juno

## Order 2: best 5.09 (ss_panama null, elfnote 2.9, despia 1.05, angelechy 9.25, worst -0.3) — from m1b → new early order
Others: m1b 4.39 · m1b → new early order → new ending 4.22 · opening lanes 3.94 · m1a 3.92 · m1b 3.75 · m1b → new early order → new early order 3.64 · m1b → new ending 3.57 · search 3.55 · tries Activate Black Chaos 3.45 · bx1 3.04 · m1a 2.29 · br1 1.78 · tries Activate Prohibited Power Patron Portal - Terminus -1.42

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
13. Set Spell/Trap Infinite Impermanence
14. Link Summon Purification Power Patron (Extra Deck)
15. select Junora the Power Patron of Tuning (M2)
16. select Medius the Pure (M1)
17. Yes
18. Selected Theorealize Medius (Deck)
19. Activate Theorealize Medius (hand): If a "Power Patron" card is on the field: You can Special Summon this card from your hand, then you can add 1 "Theorealize" Spell/Trap from your Deck to your hand
20. Yes
21. Selected Theorealize Past Lull (Deck)
22. Special Summon (procedure) Artmage Non-Finito (Extra Deck)
23. Selected Theorealize Past Lull (hand)
24. Selected Nervedo the Shadebeast Power Patron (hand)
25. Yes
26. Activate Purification Power Patron (EMZ-L): Link Summon including this card as material
27. Selected Medicurius the Power Patron of Illusions (Extra Deck)
28. select Artmage Non-Finito (M3)
29. Finish selection
30. Selected Artmage Impasto -Recapture- (Deck)
31. Activate Theorealize Past Lull (GY): Special Summon 1 Fusion, Synchro, or Xyz Monster from your GY
32. Selected Junora the Power Patron of Tuning (GY)
33. Activate Medius the Pure (GY): Shuffle 1 monster from your hand or face-up field into the Deck, and if you do, Special Summon this card
34. Selected Droll & Lock Bird (hand)
35. Link Summon S:P Little Knight (Extra Deck)
36. select Junora the Power Patron of Tuning (M3)
37. select Medius the Pure (M4)
38. Yes
39. Special Summon 1 "Diactorus" monster
40. Selected Artmage Diactorus (Extra Deck)

End board:  LP 8000 | Hand 2 | Deck 34 | Extra 9 | GY 4 | Banished 9   Monsters: M3: S:P Little Knight L2←→ 1600  || M4: Artmage Diactorus Lv8 2800/2500 ATK || M5: Nerva the Power Patron of Creation Lv10 3300/3300 ATK || EMZ-R: Medicurius the Power Patron of Illusions L3↙↓↘ 3000    Spell/Trap: S1: Infinite Impermanence (Set) || S2: Artmage Impasto -Recapture- (Set)   GY: Nervedo the Shadebeast Power Patron, Artmage Non-Finito, Purification Power Patron, Junora the Power Patron of Tuning   Banished: Medius the Pure (face-down), Griffoh (face-down), Nervedo the Shadebeast Power Patron (face-down), Mind Shuffle (face-down), Artmage Vandalism -Assault- (face-down), Ars Magna - "Citrinitas" (face-down), The

## Order 3: best 5.43 (ss_panama 4.6, elfnote 3.55, despia null, angelechy 8.15, worst 3.55) — from tries Activate Mind Shuffle
Others: m1b 4.05 · m1b 3.65 · tries Activate Mind Shuffle → new early order 3.63 · tries Activate Mind Shuffle → new early order 2.94 · m1a 2.6 · opening lanes 2.35 · tries Activate Ars Magna - "Citrinitas" 2.17 · m1a 2.02 · bx1 1.67 · search 1.42 · br1 -0.1 · tries Activate Mind Shuffle → new ending -1.1 · tries Activate Mind Shuffle → new ending -1.64

1. Normal Summon Medius the Pure (hand)
2. Yes
3. Selected Nervedo the Shadebeast Power Patron (Deck)
4. Add the card(s) to your hand
5. Special Summon (procedure) Artmage Non-Finito (Extra Deck)
6. Selected Infinite Impermanence (hand)
7. Selected Nervedo the Shadebeast Power Patron (hand)
8. Yes
9. Selected Artmage Impasto -Recapture- (Deck)
10. Link Summon Purification Power Patron (Extra Deck)
11. select Medius the Pure (M3)
12. select Artmage Non-Finito (M4)
13. Yes
14. Selected Theorealize Medius (Deck)
15. Activate Medius the Pure (GY): Shuffle 1 monster from your hand or face-up field into the Deck, and if you do, Special Summon this card
16. Selected Ghost Ogre & Snow Rabbit (hand)
17. Activate Theorealize Medius (hand): If a "Power Patron" card is on the field: You can Special Summon this card from your hand, then you can add 1 "Theorealize" Spell/Trap from your Deck to your hand
18. Yes
19. Selected Theorealize Liberation (Deck)
20. Activate Theorealize Liberation (hand): Add to your hand, or Special Summon, 1 monster from your Deck with 300 ATK/200 DEF
21. Activate Purification Power Patron (EMZ-L): Link Summon including this card as material
22. Selected Medicurius the Power Patron of Illusions (Extra Deck)
23. select Medius the Pure (M2)
24. Finish selection
25. Selected Griffoh (Deck)
26. Add the card(s) to your hand
27. Yes
28. Special Summon 1 "Diactorus" monster
29. Selected Artmage Diactorus (Extra Deck)
30. Activate Theorealize Liberation (GY): Treat 1 monster you control as a Tuner this turn
31. Selected Medicurius the Power Patron of Illusions (EMZ-L)
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
49. Activate Skull Archfiend of Chaos (hand): Special Summon this card
50. select Nervedo the Shadebeast Power Patron (GY)
51. select Purification Power Patron (GY)
52. select Griffoh (banishment)
53. Default order

End board:  LP 8000 | Hand 3 | Deck 38 | Extra 12 | GY 2 | Banished 3   Monsters: M1: Magician of Dark Chaos - Black Chaos Lv8 2800/2600 ATK || M2: Skull Archfiend of Chaos Lv6 2500/1200 ATK || M3: Artmage Diactorus Lv8 2800/2500 ATK || EMZ-L: Medicurius the Power Patron of Illusions L3↙↓↘ 3000    Spell/Trap: S1: Artmage Impasto -Recapture- (Set) || S2: Mind Shuffle   GY: Infinite Impermanence, Artmage Non-Finito   Banished: Medius the Pure, Theorealize Medius, Theorealize Liberation   Hand: Droll & Lock Bird, Ash Blossom & Joyous Spring, Light and Darkness Ritual   Extra Deck: 12 cards (view --ed to list)

## Order 4: best 7.01 (ss_panama 7.38, elfnote 4.83, despia 6.21, angelechy 9.6, worst 2.81) — from m1b (seed followed 33/33 steps)
Others: tries Activate Artmage Diactorus 5.39 · m1b → new early order 4.86 · m1b → new early order 4.78 · opening lanes 3.11 · tries Activate Ars Magna of Purification and Corruption 2.99 · search 2.8 · m1b → new ending 2.79 · m1a 2.71 · m1b 2.65 · m1b → new ending 2.49 · m1a 2.03 · br1 1.49 · bx1 1.22

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

## Order 5: best 6 (ss_panama 6.45, elfnote null, despia -2.25, angelechy 11.05, worst -3.6) — from search → new early order
Others: search 5.84 · search → new early order → new ending 4.95 · bx1 4.76 · tries Activate Ars Magna - "Citrinitas" 4.69 · m1b 3.57 · search → new early order → new early order 3.56 · m1a 2.96 · br1 2.76 · br1 2.53 · opening lanes 2.45 · tries Activate Theorealize Past Lull 2.26 · m1a 2.2 · m1b 2.17 · search → new ending -0.14

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
13. Set Spell/Trap Infinite Impermanence
14. Link Summon Purification Power Patron (Extra Deck)
15. select Junora the Power Patron of Tuning (M2)
16. select Medius the Pure (M4)
17. Yes
18. Selected Theorealize Medius (Deck)
19. Activate Medius the Pure (GY): Shuffle 1 monster from your hand or face-up field into the Deck, and if you do, Special Summon this card
20. Selected Ghost Ogre & Snow Rabbit (hand)
21. Activate Theorealize Medius (hand): If a "Power Patron" card is on the field: You can Special Summon this card from your hand, then you can add 1 "Theorealize" Spell/Trap from your Deck to your hand
22. Yes
23. Selected Theorealize Liberation (Deck)
24. Activate Purification Power Patron (EMZ-R): Link Summon including this card as material
25. Activate Theorealize Liberation (hand): Add to your hand, or Special Summon, 1 monster from your Deck with 300 ATK/200 DEF
26. Selected Griffoh (Deck)
27. Add the card(s) to your hand
28. Selected Medicurius the Power Patron of Illusions (Extra Deck)
29. select Medius the Pure (M5)
30. Finish selection
31. Yes
32. Special Summon 1 "Diactorus" monster
33. Selected Artmage Diactorus (Extra Deck)
34. Activate Theorealize Liberation (GY): Treat 1 monster you control as a Tuner this turn
35. Selected Medicurius the Power Patron of Illusions (EMZ-L)
36. Activate Griffoh (hand): Activate 1 of these effects
37. Set 1 card that mentions "Light and Darkness Ritual"
38. Selected Mind Shuffle (Deck)
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
54. Special Summon (procedure) Artmage Non-Finito (Extra Deck)
55. Selected Light and Darkness Ritual (hand)
56. Selected Nervedo the Shadebeast Power Patron (hand)
57. Yes
58. Selected Artmage Impasto -Recapture- (Deck)

End board:  LP 8000 | Hand 3 | Deck 29 | Extra 10 | GY 4 | Banished 10   Monsters: M1: Nerva the Power Patron of Creation Lv10 3300/3300 ATK || M2: Magician of Dark Chaos - Black Chaos Lv8 2800/2600 ATK || M3: Artmage Diactorus Lv8 2800/2500 ATK || M4: Artmage Non-Finito Lv7 2400/1500 ATK || EMZ-L: Medicurius the Power Patron of Illusions L3↙↓↘ 3000    Spell/Trap: S1: Infinite Impermanence (Set) || S2: Mind Shuffle || S3: Artmage Impasto -Recapture- (Set)   GY: Junora the Power Patron of Tuning, Purification Power Patron, Light and Darkness Ritual, Nervedo the Shadebeast Power Patron   Banished: Theorealize Medius (face-down), Pendulum Treasure (face-down), Artmage Vandalism -Assault- (face-down), Lacr

## Order 6: best 4.81 (ss_panama null, elfnote 5.38, despia 1.75, angelechy 6.48, worst 0.85) — from search
Others: tries Activate Theorealize Liberation 3.65 · m1b 3.36 · m1a 3.36 · br1 2.42 · tries Activate Light and Darkness Ritual 1.92 · opening lanes 1.58 · bx1 1.48

1. Normal Summon Medius the Pure (hand)
2. Yes
3. Selected Nervedo the Shadebeast Power Patron (Deck)
4. Special Summon it
5. Activate Nervedo the Shadebeast Power Patron (M1): Special Summon 1 "Nerva the Power Patron of Creation" from your Extra Deck
6. Selected Nerva the Power Patron of Creation (Extra Deck)
7. Yes
8. Selected Junoldo the Shadespirit Power Patron (Deck)
9. Link Summon Purification Power Patron (Extra Deck)
10. select Medius the Pure (M4)
11. select Nerva the Power Patron of Creation (EMZ-R)
12. Yes
13. Selected Theorealize Medius (Deck)
14. Activate Junoldo the Shadespirit Power Patron (M3): Special Summon 1 "Junora the Power Patron of Tuning" from your Extra Deck
15. Selected Junora the Power Patron of Tuning (Extra Deck)
16. Yes
17. Selected Nervedo the Shadebeast Power Patron (Extra Deck)
18. Activate Theorealize Medius (hand): If a "Power Patron" card is on the field: You can Special Summon this card from your hand, then you can add 1 "Theorealize" Spell/Trap from your Deck to your hand
19. Yes
20. Selected Theorealize Past Lull (Deck)
21. Activate Purification Power Patron (EMZ-R): Link Summon including this card as material
22. Selected S:P Little Knight (Extra Deck)
23. select Junora the Power Patron of Tuning (M3)
24. Yes
25. Selected Nerva the Power Patron of Creation (GY)
26. Yes
27. Special Summon 1 "Diactorus" monster
28. Selected Artmage Diactorus (Extra Deck)
29. Special Summon (procedure) Artmage Non-Finito (Extra Deck)
30. Selected Theorealize Past Lull (hand)
31. Selected Nervedo the Shadebeast Power Patron (hand)
32. Yes
33. Selected Artmage Impasto -Recapture- (Deck)
34. Activate Medius the Pure (GY): Shuffle 1 monster from your hand or face-up field into the Deck, and if you do, Special Summon this card
35. Selected Ghost Ogre & Snow Rabbit (hand)
36. Link Summon Medicurius the Power Patron of Illusions (Extra Deck)
37. select Medius the Pure (M2)
38. select S:P Little Knight (EMZ-L)
39. Finish selection
40. Activate Theorealize Past Lull (GY): Special Summon 1 Fusion, Synchro, or Xyz Monster from your GY
41. Selected Junora the Power Patron of Tuning (GY)

End board:  LP 8000 | Hand 3 | Deck 34 | Extra 9 | GY 3 | Banished 10   Monsters: M1: Artmage Diactorus Lv8 2800/2500 DEF || M2: Junora the Power Patron of Tuning Lv10 3100/3800 ATK || M3: Artmage Non-Finito Lv7 2400/1500 ATK || EMZ-L: Medicurius the Power Patron of Illusions L3↙↓↘ 3000    Spell/Trap: S1: Artmage Impasto -Recapture- (Set)   GY: Purification Power Patron, Nervedo the Shadebeast Power Patron, S:P Little Knight   Banished: Lacrima the Crimson Tears (face-down), Artmage Vandalism -Assault- (face-down), Mind Shuffle (face-down), Light and Darkness Ritual (face-down), Pendulum Treasure (face-down), Plundered Power Patron Plane - Vidolia (face-down), Nerva the Power Patron of Creation, Theore

## Order 7: best 9.4 (ss_panama null, elfnote 9.3, despia 9.6, angelechy 9.3, worst 9.3) — from bx1 → new ending
Others: bx1 → new ending → new ending 5.35 · bx1 → new ending → new early order 4.9 · bx1 → new ending → new early order 3.96 · bx1 3.78 · search 2.97 · br1 2.26 · opening lanes 2.1 · tries Activate Artmage Vandalism -Assault- 1.1 · tries Activate Artmage Vandalism -Assault- 1.1 · m1b 1.01 · m1a 0.32

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
30. No
31. Activate Purification Power Patron (EMZ-L): Link Summon including this card as material
32. Selected Medicurius the Power Patron of Illusions (Extra Deck)
33. select Medius the Pure (M1)
34. Finish selection
35. Yes
36. Special Summon 1 "Diactorus" monster
37. Activate Mind Shuffle (S1): Add 1 appropriate monster to your hand
38. Selected Skull Archfiend of Chaos (Deck)
39. Selected Skull Archfiend of Chaos (hand)
40. Selected Artmage Diactorus (Extra Deck)
41. Yes
42. Selected Light and Darkness Ritual (Deck)
43. Selected Black Luster Soldier - Soldier of Light and Darkness (Deck)
44. Activate Light and Darkness Ritual (GY): Add both this card and 1 card that mentions "Light and Darkness Ritual" from your GY to your hand
45. Selected Griffoh (GY)
46. Activate Artmage Diactorus (M3): Change the battle position of 1 monster on the field
47. Selected Nerva the Power Patron of Creation (M5)
48. Special Summon (procedure) Artmage Non-Finito (Extra Deck)
49. Selected Light and Darkness Ritual (hand)
50. Selected Nervedo the Shadebeast Power Patron (hand)
51. Yes
52. Selected Artmage Impasto -Recapture- (Deck)
53. Activate Skull Archfiend of Chaos (GY): Special Summon this card
54. select Junora the Power Patron of Tuning (GY)
55. select Nervedo the Shadebeast Power Patron (GY)
56. select Light and Darkness Ritual (GY)
57. Default order

End board:  LP 8000 | Hand 5 | Deck 31 | Extra 11 | GY 2 | Banished 8   Monsters: M1: Artmage Non-Finito Lv7 2400/1500 ATK || M3: Artmage Diactorus Lv8 2800/2500 ATK || M4: Skull Archfiend of Chaos Lv6 2500/1200 ATK || M5: Nerva the Power Patron of Creation Lv10 3300/3300 DEF || EMZ-R: Medicurius the Power Patron of Illusions L3↙↓↘ 3000    Spell/Trap: S1: Mind Shuffle || S2: Artmage Impasto -Recapture- (Set)   GY: Theorealize Liberation, Purification Power Patron   Banished: Fiendsmith's Tract (face-down), Ars Magna - "Citrinitas" (face-down), Nervedo the Shadebeast Power Patron (face-down), Fiendsmith Engraver (face-down), Magician of Dark Chaos - Black Chaos (face-down), Theorealize Past Lull (face-d

## Order 8: best 7.22 (ss_panama -1.13, elfnote null, despia null, angelechy 10, worst -1.13) — from m1b → new ending
Others: m1b 6.19 · bx1 6.19 · br1 6.19 · m1a 6.19 · m1b → new early order 5.89 · tries Activate Mind Shuffle 5.58 · m1b → new ending 4.49 · m1b → new ending → new early order 1.79 · search 0.42 · opening lanes -0.6 · tries Activate Vidolium the Unstable Power Patron of Unity -0.88

1. Normal Summon Medius the Pure (hand)
2. Yes
3. Selected Nervedo the Shadebeast Power Patron (Deck)
4. Special Summon it
5. Activate Nervedo the Shadebeast Power Patron (M2): Special Summon 1 "Nerva the Power Patron of Creation" from your Extra Deck
6. Selected Nerva the Power Patron of Creation (Extra Deck)
7. Yes
8. Selected Artmage Finmel (Deck)
9. Set Spell/Trap Infinite Impermanence
10. Link Summon Purification Power Patron (Extra Deck)
11. select Medius the Pure (M1)
12. select Nerva the Power Patron of Creation (M5)
13. Yes
14. Selected Theorealize Medius (Deck)
15. Activate Medius the Pure (GY): Shuffle 1 monster from your hand or face-up field into the Deck, and if you do, Special Summon this card
16. Selected Droll & Lock Bird (hand)
17. Activate Theorealize Medius (hand): If a "Power Patron" card is on the field: You can Special Summon this card from your hand, then you can add 1 "Theorealize" Spell/Trap from your Deck to your hand
18. Yes
19. Selected Theorealize Liberation (Deck)
20. Activate Theorealize Liberation (hand): Add to your hand, or Special Summon, 1 monster from your Deck with 300 ATK/200 DEF
21. Activate Purification Power Patron (EMZ-R): Link Summon including this card as material
22. Selected Medicurius the Power Patron of Illusions (Extra Deck)
23. select Medius the Pure (M4)
24. Finish selection
25. Selected Griffoh (Deck)
26. Add the card(s) to your hand
27. Yes
28. Special Summon 1 "Diactorus" monster
29. Selected Artmage Diactorus (Extra Deck)
30. Activate Theorealize Liberation (GY): Treat 1 monster you control as a Tuner this turn
31. Selected Artmage Diactorus (M3)
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
42. Activate Artmage Diactorus (M3): Change the battle position of 1 monster on the field
43. Selected Artmage Finmel (M2)
44. Activate Light and Darkness Ritual (GY): Add both this card and 1 card that mentions "Light and Darkness Ritual" from your GY to your hand
45. Selected Skull Archfiend of Chaos (GY)
46. Activate Light and Darkness Ritual (hand): Ritual Summon 1 "Magician of Dark Chaos - Black Chaos" or "Black Luster Soldier - Soldier of Light and Darkness" from your hand
47. Selected Magician of Dark Chaos - Black Chaos (hand)
48. Selected Griffoh (GY) value 8 or 1
49. Yes
50. Selected Light and Darkness Ritual (GY)
51. Special Summon (procedure) Artmage Non-Finito (Extra Deck)
52. Selected Light and Darkness Ritual (hand)
53. Selected Artmage Finmel (M2)
54. Yes
55. Selected Artmage Impasto -Recapture- (Deck)

End board:  LP 8000 | Hand 3 | Deck 32 | Extra 11 | GY 4 | Banished 7   Monsters: M1: Magician of Dark Chaos - Black Chaos Lv8 2800/2600 ATK || M2: Artmage Non-Finito Lv7 2400/1500 ATK || M3: Artmage Diactorus Lv8 2800/2500 ATK || EMZ-L: Medicurius the Power Patron of Illusions L3↙↓↘ 3000    Spell/Trap: S1: Infinite Impermanence (Set) || S2: Mind Shuffle || S3: Artmage Impasto -Recapture- (Set)   GY: Nerva the Power Patron of Creation, Purification Power Patron, Light and Darkness Ritual, Artmage Finmel   Banished: Fiendsmith Engraver (face-down), Junoldo the Shadespirit Power Patron (face-down), Theorealize Medius (face-down), Medius the Pure, Theorealize Medius, Theorealize Liberation, Griffoh   Hand

