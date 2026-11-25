# Evolved lines — Ars Magna of Infinity and Finity, Ash Blossom & Joyous Spring, Ash Blossom & Joyous Spring, Droll & Lock Bird, Ghost Ogre & Snow Rabbit (findlist-1100)
2026-11-25T06:48:58.209Z

8 deck orders (different face-down banishes / draws), 3 opponent hands x o_ss_panama + o_elfnote + o_despia + o_angelechy per line, 1 min searches, 3 mutation rounds.
Fitness = average margin after their turn (what you keep minus what they build; −10 more if they OTK). Higher is better.

**Best line per deck order: average 5.02** (worst order 2.67). Winner came from: search → new early order → new ending 1, tries Activate Theorealize Liberation 1, opening lanes 1, opening lanes → new ending → new early order 1, tries Activate Mind Shuffle 1, search → new ending 1, tries Activate Prohibited Power Patron Portal - Terminus 1, tries Activate Vidolium the Unstable Power Patron of Unity 1

| seed line | works as written | its score when it works | seed start + search finish (all orders) |
|---|---|---|---|
| inf1 | 8/8 | 0.88 | 1.32 |

## Weak points found automatically
Cards whose face-down banish (by your own costs) hurt the best line most (average best line without vs with that card banished):

| card | orders where it was banished | drop |
|---|---|---|
| Ash Blossom & Joyous Spring | 2/8 | 1.36 |
| Black Luster Soldier - Soldier of Light and Darkness | 2/8 | 1.32 |
| Skull Archfiend of Chaos | 2/8 | 1.32 |
| Ars Magna - "Citrinitas" | 3/8 | 1.2 |
| Artmage Vandalism -Assault- | 3/8 | 1.15 |
| Vidolium the Unstable Power Patron of Unity | 2/8 | 1.08 |
| Nervedo the Shadebeast Power Patron | 2/8 | 1.08 |
| Magician of Dark Chaos - Black Chaos | 3/8 | 0.61 |
| Light and Darkness Ritual | 3/8 | 0.29 |
| Apprentice Illusion Magician | 5/8 | -0.05 |

List changes proposed for the list test (data/proposals-findlist-1100.json):
- +1 Black Luster Soldier - Soldier of Light and Darkness, −1 Plundered Power Patron Plane - Vidolia — Black Luster Soldier - Soldier of Light and Darkness: best line 1.32 worse when a cost banished it (2 of 8 orders) — Ars Magna of Infinity and Finity
- +1 Skull Archfiend of Chaos, −1 Artmage Vandalism -Assault- — Skull Archfiend of Chaos: best line 1.32 worse when a cost banished it (2 of 8 orders) — Ars Magna of Infinity and Finity
- +1 Ars Magna - "Citrinitas", −1 Small World — Ars Magna - "Citrinitas": best line 1.2 worse when a cost banished it (3 of 8 orders) — Ars Magna of Infinity and Finity
- +1 Vidolium the Unstable Power Patron of Unity, −1 Plundered Power Patron Plane - Vidolia — Vidolium the Unstable Power Patron of Unity: best line 1.08 worse when a cost banished it (2 of 8 orders) — Ars Magna of Infinity and Finity
- +1 Black Luster Soldier - Soldier of Light and Darkness — Black Luster Soldier - Soldier of Light and Darkness: best line 1.32 worse when a cost banished it (2 of 8 orders) — Ars Magna of Infinity and Finity (add only: deck grows, up to 60)
- +1 Skull Archfiend of Chaos — Skull Archfiend of Chaos: best line 1.32 worse when a cost banished it (2 of 8 orders) — Ars Magna of Infinity and Finity (add only: deck grows, up to 60)
- +1 Ars Magna - "Citrinitas" — Ars Magna - "Citrinitas": best line 1.2 worse when a cost banished it (3 of 8 orders) — Ars Magna of Infinity and Finity (add only: deck grows, up to 60)
- +1 Vidolium the Unstable Power Patron of Unity — Vidolium the Unstable Power Patron of Unity: best line 1.08 worse when a cost banished it (2 of 8 orders) — Ars Magna of Infinity and Finity (add only: deck grows, up to 60)

Effects the search had not used, tried on purpose (best result so far):
- Activate Theorealize Liberation: 5.51
- Activate Prohibited Power Patron Portal - Terminus: 5.14
- Activate Mind Shuffle: 5.08
- Activate Griffoh: 4.67
- Normal Summon Theorealize Medius: 4.52
- Activate Fiendsmith Engraver: 4.3
- Activate Nervedo the Shadebeast Power Patron: 4.18
- Activate Artmage Diactorus: 3.37

## Order 1: best 5.75 (ss_panama 4.92, elfnote 4.03, despia 4.28, angelechy 7.85, worst 0.55) — from search → new early order → new ending
Others: search → new early order 5.19 · search 2.99 · opening lanes 2.3 · tries Activate Artmage Vandalism -Assault- 1.81 · tries Activate Artmage Vandalism -Assault- 0.8 · inf1 0.67 · inf1 0.58 · search → new ending -0.18

1. Activate Ars Magna of Infinity and Finity (hand): You can banish this card from your hand; add 1 non-Warrior "Ars Magna" monster from your Deck to your hand
2. Selected Ars Magna of Purification and Corruption (Deck)
3. Activate Ars Magna of Purification and Corruption (hand): You can banish this card from your hand; add 1 "Ars Magna" Spell/Trap from your Deck to your hand
4. Selected Ars Magna - "Citrinitas" (Deck)
5. Set Spell/Trap Ars Magna - "Citrinitas"
6. Activate Ars Magna - "Citrinitas" (S1): activate this card
7. Activate Ars Magna - "Citrinitas" (S1): Add 1 "Medius" or "Ars Magna" monster from your Deck to your hand
8. Selected Medius the Pure (Deck)
9. Normal Summon Medius the Pure (hand)
10. Yes
11. Selected Nervedo the Shadebeast Power Patron (Deck)
12. Special Summon it
13. Activate Nervedo the Shadebeast Power Patron (M1): Special Summon 1 "Nerva the Power Patron of Creation" from your Extra Deck
14. Selected Nerva the Power Patron of Creation (Extra Deck)
15. Yes
16. Activate Ars Magna of Infinity and Finity (banishment): Special Summon this card
17. Selected Artmage Finmel (Deck)
18. Link Summon Purification Power Patron (Extra Deck)
19. select Medius the Pure (M3)
20. select Nerva the Power Patron of Creation (EMZ-L)
21. Activate Purification Power Patron (EMZ-L): Add 1 "Theorealize" card from your Deck to your hand
22. Selected Theorealize Medius (Deck)
23. Activate Theorealize Medius (hand): If a "Power Patron" card is on the field: You can Special Summon this card from your hand, then you can add 1 "Theorealize" Spell/Trap from your Deck to your hand
24. Yes
25. Selected Theorealize Liberation (Deck)
26. Activate Purification Power Patron (EMZ-L): Link Summon including this card as material
27. Selected Medicurius the Power Patron of Illusions (Extra Deck)
28. select Ars Magna of Infinity and Finity (M4)
29. Finish selection
30. Yes
31. Special Summon (procedure) Artmage Non-Finito (Extra Deck)
32. Selected Theorealize Liberation (hand)
33. Selected Artmage Finmel (M5)
34. Yes
35. Activate Ars Magna of Purification and Corruption (M4): Banish Spells/Traps on the field
36. Selected Ars Magna - "Citrinitas" (S1)
37. Selected Artmage Impasto -Recapture- (Deck)
38. Activate Medius the Pure (GY): Shuffle 1 monster from your hand or face-up field into the Deck, and if you do, Special Summon this card
39. Selected Ash Blossom & Joyous Spring (hand)
40. Link Summon S:P Little Knight (Extra Deck)
41. select Medius the Pure (M1)
42. select Ars Magna of Purification and Corruption (M4)
43. Yes
44. Special Summon 1 "Diactorus" monster
45. Selected Artmage Diactorus (Extra Deck)

End board:  LP 8000 | Hand 3 | Deck 34 | Extra 10 | GY 6 | Banished 6   Monsters: M3: Artmage Non-Finito Lv7 2400/1500 ATK || M4: S:P Little Knight L2←→ 1600  || M5: Artmage Diactorus Lv8 2800/2500 ATK || EMZ-R: Medicurius the Power Patron of Illusions L3↙↓↘ 9000    Spell/Trap: S1: Artmage Impasto -Recapture- (Set)   GY: Nerva the Power Patron of Creation, Ars Magna of Infinity and Finity, Purification Power Patron, Theorealize Liberation, Artmage Finmel, Ars Magna of Purification and Corruption   Banished: Infinite Impermanence (face-down), Small World (face-down), Light and Darkness Ritual (face-down), Ars Magna - "Citrinitas", Medius the Pure, Theorealize Medius   Hand: Ghost Ogre & Snow Rabbit, Dro

## Order 2: best 5.51 (ss_panama 8.68, elfnote 2.93, despia 0.59, angelechy 8.4, worst -0.07) — from tries Activate Theorealize Liberation
Others: tries Activate Theorealize Liberation → new ending 5.44 · tries Activate Theorealize Liberation → new ending 4.23 · opening lanes 3.35 · search 1.73 · tries Activate Fiendsmith's Tract 1.72 · inf1 1.7 · inf1 0 · tries Activate Theorealize Liberation → new early order -1.59

1. Activate Ars Magna of Infinity and Finity (hand): You can banish this card from your hand; add 1 non-Warrior "Ars Magna" monster from your Deck to your hand
2. Selected Ars Magna of Purification and Corruption (Deck)
3. Activate Ars Magna of Purification and Corruption (hand): You can banish this card from your hand; add 1 "Ars Magna" Spell/Trap from your Deck to your hand
4. Selected Ars Magna - "Citrinitas" (Deck)
5. Activate Ars Magna - "Citrinitas" (hand): activate this card
6. Activate Ars Magna - "Citrinitas" (S1): Add 1 "Medius" or "Ars Magna" monster from your Deck to your hand
7. Selected Medius the Pure (Deck)
8. Normal Summon Medius the Pure (hand)
9. Yes
10. Selected Nervedo the Shadebeast Power Patron (Deck)
11. Special Summon it
12. Activate Nervedo the Shadebeast Power Patron (M4): Special Summon 1 "Nerva the Power Patron of Creation" from your Extra Deck
13. Selected Nerva the Power Patron of Creation (Extra Deck)
14. Yes
15. Activate Ars Magna of Infinity and Finity (banishment): Special Summon this card
16. Selected Junoldo the Shadespirit Power Patron (Deck)
17. Activate Junoldo the Shadespirit Power Patron (M1): Special Summon 1 "Junora the Power Patron of Tuning" from your Extra Deck
18. Selected Junora the Power Patron of Tuning (Extra Deck)
19. Yes
20. Selected Nervedo the Shadebeast Power Patron (Extra Deck)
21. Link Summon Purification Power Patron (Extra Deck)
22. select Medius the Pure (M3)
23. select Junora the Power Patron of Tuning (EMZ-L)
24. Activate Purification Power Patron (EMZ-R): Add 1 "Theorealize" card from your Deck to your hand
25. Activate Ars Magna of Infinity and Finity (M5): Banish 1 monster on the field
26. Selected Ars Magna of Infinity and Finity (M5)
27. Selected Theorealize Medius (Deck)
28. Activate Medius the Pure (GY): Shuffle 1 monster from your hand or face-up field into the Deck, and if you do, Special Summon this card
29. Selected Ash Blossom & Joyous Spring (hand)
30. Activate Theorealize Medius (hand): If a "Power Patron" card is on the field: You can Special Summon this card from your hand, then you can add 1 "Theorealize" Spell/Trap from your Deck to your hand
31. Yes
32. Selected Theorealize Liberation (Deck)
33. Special Summon (procedure) Artmage Non-Finito (Extra Deck)
34. Selected Theorealize Liberation (hand)
35. Selected Nervedo the Shadebeast Power Patron (hand)
36. Yes
37. Selected Artmage Impasto -Recapture- (Deck)
38. Activate Theorealize Liberation (GY): Treat 1 monster you control as a Tuner this turn
39. Selected Nerva the Power Patron of Creation (M4)
40. Activate Purification Power Patron (EMZ-R): Link Summon including this card as material
41. Selected Medicurius the Power Patron of Illusions (Extra Deck)
42. select Medius the Pure (M1)
43. Finish selection
44. Yes
45. Special Summon 1 "Diactorus" monster
46. Activate Ars Magna of Purification and Corruption (banishment): Special Summon this card
47. Selected Artmage Diactorus (Extra Deck)

End board:  LP 8000 | Hand 3 | Deck 31 | Extra 10 | GY 3 | Banished 10   Monsters: M1: Artmage Diactorus Lv8 2800/2500 ATK || M3: Ars Magna of Purification and Corruption Lv8 1000/2100 ATK || M4: Nerva the Power Patron of Creation Lv10 3300/3300 ATK || M5: Artmage Non-Finito Lv7 2400/1500 ATK || EMZ-R: Medicurius the Power Patron of Illusions L3↙↓↘ 9000    Spell/Trap: S1: Ars Magna - "Citrinitas" || S2: Artmage Impasto -Recapture- (Set)   GY: Junora the Power Patron of Tuning, Nervedo the Shadebeast Power Patron, Purification Power Patron   Banished: Small World (face-down), Artmage Finmel (face-down), Griffoh (face-down), Apprentice Illusion Magician (face-down), Fiendsmith Engraver (face-down), Theor

## Order 3: best 2.67 (ss_panama 4.08, elfnote 3.39, despia 1.19, angelechy 1.73, worst -1.95) — from opening lanes
Others: search 2.12 · opening lanes → new ending 1.97 · tries Activate Mind Shuffle 1.81 · inf1 1.35 · tries Special Summon (procedure) Artmage Non-Finito 1.31 · inf1 0.96 · opening lanes → new ending -0.62 · opening lanes → new early order -2.17

1. Activate Ars Magna of Infinity and Finity (hand): You can banish this card from your hand; add 1 non-Warrior "Ars Magna" monster from your Deck to your hand
2. Selected Ars Magna of Purification and Corruption (Deck)
3. Activate Ars Magna of Purification and Corruption (hand): You can banish this card from your hand; add 1 "Ars Magna" Spell/Trap from your Deck to your hand
4. Selected Ars Magna - "Citrinitas" (Deck)
5. Activate Ars Magna - "Citrinitas" (hand): activate this card
6. Activate Ars Magna - "Citrinitas" (S1): Add 1 "Medius" or "Ars Magna" monster from your Deck to your hand
7. Selected Medius the Pure (Deck)
8. Normal Summon Medius the Pure (hand)
9. Yes
10. Selected Nervedo the Shadebeast Power Patron (Deck)
11. Special Summon it
12. Activate Nervedo the Shadebeast Power Patron (M4): Special Summon 1 "Nerva the Power Patron of Creation" from your Extra Deck
13. Selected Nerva the Power Patron of Creation (Extra Deck)
14. Yes
15. Activate Ars Magna of Infinity and Finity (banishment): Special Summon this card
16. Selected Theorealize Medius (Deck)
17. Link Summon S:P Little Knight (Extra Deck)
18. select Medius the Pure (M3)
19. select Ars Magna of Infinity and Finity (M2)
20. Yes
21. Activate Medius the Pure (GY): Shuffle 1 monster from your hand or face-up field into the Deck, and if you do, Special Summon this card
22. Selected Ash Blossom & Joyous Spring (hand)
23. Link Summon Medicurius the Power Patron of Illusions (Extra Deck)
24. select S:P Little Knight (EMZ-R)
25. select Medius the Pure (M2)
26. Finish selection
27. Yes
28. Special Summon 1 "Diactorus" monster
29. Selected Artmage Diactorus (Extra Deck)

End board:  LP 8000 | Hand 3 | Deck 37 | Extra 12 | GY 2 | Banished 5   Monsters: M1: Nerva the Power Patron of Creation Lv10 3300/3300 ATK || M2: Artmage Diactorus Lv8 2800/2500 ATK || M3: Ars Magna of Purification and Corruption Lv8 1000/2100 ATK || EMZ-L: Medicurius the Power Patron of Illusions L3↙↓↘ 9000    Spell/Trap: S1: Ars Magna - "Citrinitas"   GY: Ars Magna of Infinity and Finity, S:P Little Knight   Banished: Artmage Impasto -Recapture- (face-down), Magician of Dark Chaos - Black Chaos (face-down), Ars Magna - "Citrinitas" (face-down), Medius the Pure, Theorealize Medius   Hand: Ash Blossom & Joyous Spring, Droll & Lock Bird, Ghost Ogre & Snow Rabbit   Extra Deck: 12 cards (view --ed to lis

## Order 4: best 5.86 (ss_panama 5.69, elfnote 2.29, despia 6.89, angelechy 8.85, worst 0.2) — from opening lanes → new ending → new early order
Others: opening lanes → new ending 5.81 · opening lanes → new ending → new early order → new ending 5.52 · opening lanes 3.33 · tries Activate Artmage Diactorus 2.94 · tries Activate Theorealize Past Lull 2.43 · search 1.69 · inf1 1.58 · inf1 1.07

1. Activate Ars Magna of Infinity and Finity (hand): You can banish this card from your hand; add 1 non-Warrior "Ars Magna" monster from your Deck to your hand
2. Selected Ars Magna of Purification and Corruption (Deck)
3. Activate Ars Magna of Purification and Corruption (hand): You can banish this card from your hand; add 1 "Ars Magna" Spell/Trap from your Deck to your hand
4. Selected Ars Magna - "Citrinitas" (Deck)
5. Activate Ars Magna - "Citrinitas" (hand): activate this card
6. Activate Ars Magna - "Citrinitas" (S1): Add 1 "Medius" or "Ars Magna" monster from your Deck to your hand
7. Selected Medius the Pure (Deck)
8. Normal Summon Medius the Pure (hand)
9. Yes
10. Selected Nervedo the Shadebeast Power Patron (Deck)
11. Special Summon it
12. Activate Nervedo the Shadebeast Power Patron (M2): Special Summon 1 "Nerva the Power Patron of Creation" from your Extra Deck
13. Selected Nerva the Power Patron of Creation (Extra Deck)
14. Yes
15. Activate Ars Magna of Infinity and Finity (banishment): Special Summon this card
16. Selected Junoldo the Shadespirit Power Patron (Deck)
17. Activate Junoldo the Shadespirit Power Patron (M2): Special Summon 1 "Junora the Power Patron of Tuning" from your Extra Deck
18. Selected Junora the Power Patron of Tuning (Extra Deck)
19. Yes
20. Selected Nervedo the Shadebeast Power Patron (Extra Deck)
21. Link Summon Purification Power Patron (Extra Deck)
22. select Medius the Pure (M1)
23. select Ars Magna of Infinity and Finity (M4)
24. Yes
25. Activate Medius the Pure (GY): Shuffle 1 monster from your hand or face-up field into the Deck, and if you do, Special Summon this card
26. Selected Ash Blossom & Joyous Spring (hand)
27. Activate Purification Power Patron (EMZ-R): Link Summon including this card as material
28. Selected Medicurius the Power Patron of Illusions (Extra Deck)
29. select Medius the Pure (M4)
30. Finish selection
31. Link Summon Purification Power Patron (Extra Deck)
32. select Ars Magna of Purification and Corruption (M1)
33. select Junora the Power Patron of Tuning (M2)
34. Yes
35. Selected Theorealize Medius (Deck)
36. Activate Theorealize Medius (hand): If a "Power Patron" card is on the field: You can Special Summon this card from your hand, then you can add 1 "Theorealize" Spell/Trap from your Deck to your hand
37. Yes
38. Selected Theorealize Past Lull (Deck)
39. Special Summon (procedure) Artmage Non-Finito (Extra Deck)
40. Selected Theorealize Past Lull (hand)
41. Selected Nervedo the Shadebeast Power Patron (hand)
42. Yes
43. Selected Artmage Impasto -Recapture- (Deck)
44. Activate Theorealize Past Lull (GY): Special Summon 1 Fusion, Synchro, or Xyz Monster from your GY
45. Selected Junora the Power Patron of Tuning (GY)
46. Link Summon S:P Little Knight (Extra Deck)
47. select Purification Power Patron (M1)
48. select Junora the Power Patron of Tuning (M2)
49. Yes
50. Selected Ars Magna of Purification and Corruption (GY)
51. Yes
52. Special Summon 1 "Diactorus" monster
53. Selected Artmage Diactorus (Extra Deck)

End board:  LP 8000 | Hand 3 | Deck 31 | Extra 8 | GY 5 | Banished 10   Monsters: M1: S:P Little Knight L2←→ 1600  || M2: Artmage Diactorus Lv8 2800/2500 ATK || M3: Nerva the Power Patron of Creation Lv10 3300/3300 ATK || M5: Artmage Non-Finito Lv7 2400/1500 ATK || EMZ-L: Medicurius the Power Patron of Illusions L3↙↓↘ 9000    Spell/Trap: S1: Ars Magna - "Citrinitas" || S2: Artmage Impasto -Recapture- (Set)   GY: Ars Magna of Infinity and Finity, Purification Power Patron, Nervedo the Shadebeast Power Patron, Purification Power Patron, Junora the Power Patron of Tuning   Banished: Fiendsmith's Tract (face-down), Light and Darkness Ritual (face-down), Small World (face-down), Pendulum Treasure (face-down

## Order 5: best 5.08 (ss_panama 7.94, elfnote null, despia -1.47, angelechy 8.77, worst -2.65) — from tries Activate Mind Shuffle
Others: tries Activate Mind Shuffle → new ending 4.61 · tries Activate Fiendsmith Engraver 4.3 · opening lanes 3.45 · tries Activate Mind Shuffle → new ending 3.06 · search 1.34 · inf1 1.28 · inf1 1.2 · tries Activate Mind Shuffle → new early order 0.64

1. Activate Ars Magna of Infinity and Finity (hand): You can banish this card from your hand; add 1 non-Warrior "Ars Magna" monster from your Deck to your hand
2. Selected Ars Magna of Purification and Corruption (Deck)
3. Activate Ars Magna of Purification and Corruption (hand): You can banish this card from your hand; add 1 "Ars Magna" Spell/Trap from your Deck to your hand
4. Selected Ars Magna - "Citrinitas" (Deck)
5. Set Spell/Trap Ars Magna - "Citrinitas"
6. Activate Ars Magna - "Citrinitas" (S1): activate this card
7. Activate Ars Magna - "Citrinitas" (S1): Add 1 "Medius" or "Ars Magna" monster from your Deck to your hand
8. Selected Medius the Pure (Deck)
9. Normal Summon Medius the Pure (hand)
10. Yes
11. Selected Nervedo the Shadebeast Power Patron (Deck)
12. Special Summon it
13. Activate Nervedo the Shadebeast Power Patron (M5): Special Summon 1 "Nerva the Power Patron of Creation" from your Extra Deck
14. Selected Nerva the Power Patron of Creation (Extra Deck)
15. Yes
16. Activate Ars Magna of Infinity and Finity (banishment): Special Summon this card
17. Selected Junoldo the Shadespirit Power Patron (Deck)
18. Activate Junoldo the Shadespirit Power Patron (M1): Special Summon 1 "Junora the Power Patron of Tuning" from your Extra Deck
19. Selected Junora the Power Patron of Tuning (Extra Deck)
20. Yes
21. Selected Nervedo the Shadebeast Power Patron (Extra Deck)
22. Link Summon Purification Power Patron (Extra Deck)
23. select Medius the Pure (M4)
24. select Ars Magna of Infinity and Finity (M5)
25. Yes
26. Link Summon Purification Power Patron (Extra Deck)
27. select Ars Magna of Purification and Corruption (M2)
28. select Junora the Power Patron of Tuning (M1)
29. Yes
30. Activate Purification Power Patron (M2): Link Summon including this card as material
31. Selected Medicurius the Power Patron of Illusions (Extra Deck)
32. select Purification Power Patron (EMZ-L)
33. Finish selection
34. Selected Theorealize Medius (Deck)
35. Activate Theorealize Medius (hand): If a "Power Patron" card is on the field: You can Special Summon this card from your hand, then you can add 1 "Theorealize" Spell/Trap from your Deck to your hand
36. Yes
37. Selected Theorealize Past Lull (Deck)
38. Special Summon (procedure) Artmage Non-Finito (Extra Deck)
39. Selected Theorealize Past Lull (hand)
40. Selected Nervedo the Shadebeast Power Patron (hand)
41. Yes
42. Selected Artmage Impasto -Recapture- (Deck)
43. Activate Theorealize Past Lull (GY): Special Summon 1 Fusion, Synchro, or Xyz Monster from your GY
44. Selected Junora the Power Patron of Tuning (GY)
45. Activate Medius the Pure (GY): Shuffle 1 monster from your hand or face-up field into the Deck, and if you do, Special Summon this card
46. Selected Ash Blossom & Joyous Spring (hand)
47. Link Summon S:P Little Knight (Extra Deck)
48. select Medius the Pure (M5)
49. select Junora the Power Patron of Tuning (M2)
50. Yes
51. Special Summon 1 "Diactorus" monster
52. Selected Artmage Diactorus (Extra Deck)

End board:  LP 8000 | Hand 3 | Deck 31 | Extra 8 | GY 6 | Banished 9   Monsters: M1: Artmage Diactorus Lv8 2800/2500 ATK || M2: S:P Little Knight L2←→ 1600  || M3: Nerva the Power Patron of Creation Lv10 3300/3300 ATK || M4: Artmage Non-Finito Lv7 2400/1500 ATK || EMZ-L: Medicurius the Power Patron of Illusions L3↙↓↘ 9000    Spell/Trap: S1: Ars Magna - "Citrinitas" || S2: Artmage Impasto -Recapture- (Set)   GY: Ars Magna of Infinity and Finity, Ars Magna of Purification and Corruption, Purification Power Patron, Purification Power Patron, Nervedo the Shadebeast Power Patron, Junora the Power Patron of Tuning   Banished: Fiendsmith Engraver (face-down), Lacrima the Crimson Tears (face-down), Pendulum Tr

## Order 6: best 7.23 (ss_panama 4.13, elfnote 9.8, despia 5.3, angelechy 9.43, worst 4.13) — from search → new ending
Others: search → new ending → new early order 5.99 · search 4.48 · search → new ending → new ending 3.04 · inf1 1.79 · tries Activate Light and Darkness Ritual 1.66 · inf1 1.51 · tries Activate Light and Darkness Ritual 1.1

1. Activate Ars Magna of Infinity and Finity (hand): You can banish this card from your hand; add 1 non-Warrior "Ars Magna" monster from your Deck to your hand
2. Selected Ars Magna of Purification and Corruption (Deck)
3. Activate Ars Magna of Purification and Corruption (hand): You can banish this card from your hand; add 1 "Ars Magna" Spell/Trap from your Deck to your hand
4. Selected Ars Magna - "Citrinitas" (Deck)
5. Set Spell/Trap Ars Magna - "Citrinitas"
6. Activate Ars Magna - "Citrinitas" (S1): activate this card
7. Activate Ars Magna - "Citrinitas" (S1): Add 1 "Medius" or "Ars Magna" monster from your Deck to your hand
8. Selected Medius the Pure (Deck)
9. Normal Summon Medius the Pure (hand)
10. Yes
11. Selected Nervedo the Shadebeast Power Patron (Deck)
12. Special Summon it
13. Activate Nervedo the Shadebeast Power Patron (M5): Special Summon 1 "Nerva the Power Patron of Creation" from your Extra Deck
14. Selected Nerva the Power Patron of Creation (Extra Deck)
15. Yes
16. Activate Ars Magna of Infinity and Finity (banishment): Special Summon this card
17. Selected Junoldo the Shadespirit Power Patron (Deck)
18. Activate Junoldo the Shadespirit Power Patron (M1): Special Summon 1 "Junora the Power Patron of Tuning" from your Extra Deck
19. Selected Junora the Power Patron of Tuning (Extra Deck)
20. Yes
21. Selected Nervedo the Shadebeast Power Patron (Extra Deck)
22. Link Summon Purification Power Patron (Extra Deck)
23. select Ars Magna of Infinity and Finity (M3)
24. select Junora the Power Patron of Tuning (EMZ-L)
25. Link Summon Purification Power Patron (Extra Deck)
26. select Medius the Pure (M4)
27. select Nerva the Power Patron of Creation (M5)
28. Activate Purification Power Patron (M2): Add 1 "Theorealize" card from your Deck to your hand
29. Activate Ars Magna of Purification and Corruption (banishment): Special Summon this card
30. Activate Purification Power Patron (EMZ-L): Link Summon including this card as material
31. Selected Medicurius the Power Patron of Illusions (Extra Deck)
32. select Purification Power Patron (M2)
33. Selected Theorealize Medius (Deck)
34. Activate Ars Magna of Purification and Corruption (M3): Banish Spells/Traps on the field
35. Selected Ars Magna - "Citrinitas" (S1)
36. Activate Medius the Pure (GY): Shuffle 1 monster from your hand or face-up field into the Deck, and if you do, Special Summon this card
37. Selected Ash Blossom & Joyous Spring (hand)
38. Activate Theorealize Medius (hand): If a "Power Patron" card is on the field: You can Special Summon this card from your hand, then you can add 1 "Theorealize" Spell/Trap from your Deck to your hand
39. Yes
40. Selected Theorealize Liberation (Deck)
41. Activate Theorealize Liberation (hand): Add to your hand, or Special Summon, 1 monster from your Deck with 300 ATK/200 DEF
42. Selected Griffoh (Deck)
43. Add the card(s) to your hand
44. Activate Griffoh (hand): Activate 1 of these effects
45. Set 1 card that mentions "Light and Darkness Ritual"
46. Selected Mind Shuffle (Deck)
47. Activate Mind Shuffle (S1): activate this card
48. Yes
49. Selected Skull Archfiend of Chaos (Deck)
50. Selected Skull Archfiend of Chaos (hand)
51. Yes
52. Selected Light and Darkness Ritual (Deck)
53. Selected Magician of Dark Chaos - Black Chaos (Deck)
54. Activate Light and Darkness Ritual (GY): Add both this card and 1 card that mentions "Light and Darkness Ritual" from your GY to your hand
55. Selected Griffoh (GY)
56. Link Summon S:P Little Knight (Extra Deck)
57. select Medius the Pure (M4)
58. select Ars Magna of Purification and Corruption (M3)
59. Yes
60. Special Summon 1 "Diactorus" monster
61. Selected Artmage Diactorus (Extra Deck)
62. Activate Light and Darkness Ritual (hand): Ritual Summon 1 "Magician of Dark Chaos - Black Chaos" or "Black Luster Soldier - Soldier of Light and Darkness" from your hand
63. Selected Magician of Dark Chaos - Black Chaos (hand)
64. Selected Ars Magna of Purification and Corruption (GY) value 8
65. Yes
66. Selected Light and Darkness Ritual (GY)
67. Special Summon (procedure) Artmage Non-Finito (Extra Deck)
68. Selected Light and Darkness Ritual (hand)
69. Selected Nervedo the Shadebeast Power Patron (hand)
70. Yes
71. Selected Artmage Impasto -Recapture- (Deck)

End board:  LP 8000 | Hand 4 | Deck 26 | Extra 8 | GY 9 | Banished 10   Monsters: M1: Magician of Dark Chaos - Black Chaos Lv8 2800/2600 ATK || M2: S:P Little Knight L2←→ 1600  || M3: Artmage Diactorus Lv8 2800/2500 ATK || M4: Artmage Non-Finito Lv7 2400/1500 ATK || EMZ-L: Medicurius the Power Patron of Illusions L3↙↓↘ 9000    Spell/Trap: S1: Mind Shuffle || S2: Artmage Impasto -Recapture- (Set)   GY: Ars Magna of Infinity and Finity, Junora the Power Patron of Tuning, Nerva the Power Patron of Creation, Purification Power Patron, Purification Power Patron, Theorealize Liberation, Skull Archfiend of Chaos, Light and Darkness Ritual, Nervedo the Shadebeast Power Patron   Banished: Artmage Finmel (face-d

## Order 7: best 5.14 (ss_panama null, elfnote null, despia 1.38, angelechy 8.9, worst -2.15) — from tries Activate Prohibited Power Patron Portal - Terminus
Others: tries Activate Prohibited Power Patron Portal - Terminus → new ending 4.86 · tries Normal Summon Theorealize Medius 4.52 · tries Activate Prohibited Power Patron Portal - Terminus → new ending 4.02 · search 1.85 · inf1 1.58 · inf1 0.41 · opening lanes 0.17 · tries Activate Prohibited Power Patron Portal - Terminus → new early order -1.72

1. Activate Ars Magna of Infinity and Finity (hand): You can banish this card from your hand; add 1 non-Warrior "Ars Magna" monster from your Deck to your hand
2. Selected Ars Magna of Purification and Corruption (Deck)
3. Activate Ars Magna of Purification and Corruption (hand): You can banish this card from your hand; add 1 "Ars Magna" Spell/Trap from your Deck to your hand
4. Selected Ars Magna - "Citrinitas" (Deck)
5. Activate Ars Magna - "Citrinitas" (hand): activate this card
6. Activate Ars Magna - "Citrinitas" (S1): Add 1 "Medius" or "Ars Magna" monster from your Deck to your hand
7. Selected Medius the Pure (Deck)
8. Normal Summon Medius the Pure (hand)
9. Yes
10. Selected Nervedo the Shadebeast Power Patron (Deck)
11. Special Summon it
12. Activate Nervedo the Shadebeast Power Patron (M1): Special Summon 1 "Nerva the Power Patron of Creation" from your Extra Deck
13. Selected Nerva the Power Patron of Creation (Extra Deck)
14. Yes
15. Activate Ars Magna of Infinity and Finity (banishment): Special Summon this card
16. Selected Junoldo the Shadespirit Power Patron (Deck)
17. Link Summon Purification Power Patron (Extra Deck)
18. select Medius the Pure (M3)
19. select Ars Magna of Infinity and Finity (M4)
20. Yes
21. Activate Ars Magna of Purification and Corruption (M3): Banish Spells/Traps on the field
22. Selected Ars Magna - "Citrinitas" (S1)
23. Activate Junoldo the Shadespirit Power Patron (M5): Special Summon 1 "Junora the Power Patron of Tuning" from your Extra Deck
24. Selected Junora the Power Patron of Tuning (Extra Deck)
25. Yes
26. Selected Nervedo the Shadebeast Power Patron (Extra Deck)
27. Link Summon Purification Power Patron (Extra Deck)
28. select Ars Magna of Purification and Corruption (M3)
29. select Junora the Power Patron of Tuning (M4)
30. Yes
31. Activate Purification Power Patron (M2): Link Summon including this card as material
32. Selected Medicurius the Power Patron of Illusions (Extra Deck)
33. select Purification Power Patron (EMZ-L)
34. Finish selection
35. Selected Theorealize Medius (Deck)
36. Activate Theorealize Medius (hand): If a "Power Patron" card is on the field: You can Special Summon this card from your hand, then you can add 1 "Theorealize" Spell/Trap from your Deck to your hand
37. Yes
38. Selected Theorealize Past Lull (Deck)
39. Special Summon (procedure) Artmage Non-Finito (Extra Deck)
40. Selected Theorealize Past Lull (hand)
41. Selected Nervedo the Shadebeast Power Patron (hand)
42. Yes
43. Selected Artmage Impasto -Recapture- (Deck)
44. Activate Medius the Pure (GY): Shuffle 1 monster from your hand or face-up field into the Deck, and if you do, Special Summon this card
45. Selected Ash Blossom & Joyous Spring (hand)
46. Activate Theorealize Past Lull (GY): Special Summon 1 Fusion, Synchro, or Xyz Monster from your GY
47. Selected Junora the Power Patron of Tuning (GY)
48. Link Summon S:P Little Knight (Extra Deck)
49. select Medius the Pure (M5)
50. select Junora the Power Patron of Tuning (M2)
51. Yes
52. Special Summon 1 "Diactorus" monster
53. Selected Artmage Diactorus (Extra Deck)

End board:  LP 8000 | Hand 3 | Deck 31 | Extra 8 | GY 6 | Banished 10   Monsters: M1: Nerva the Power Patron of Creation Lv10 3300/3300 ATK || M2: S:P Little Knight L2←→ 1600  || M3: Artmage Diactorus Lv8 2800/2500 ATK || M4: Artmage Non-Finito Lv7 2400/1500 ATK || EMZ-L: Medicurius the Power Patron of Illusions L3↙↓↘ 9000    Spell/Trap: S1: Artmage Impasto -Recapture- (Set)   GY: Ars Magna of Infinity and Finity, Ars Magna of Purification and Corruption, Purification Power Patron, Purification Power Patron, Nervedo the Shadebeast Power Patron, Junora the Power Patron of Tuning   Banished: Black Luster Soldier - Soldier of Light and Darkness (face-down), Apprentice Illusion Magician (face-down), Mind S

## Order 8: best 2.92 (ss_panama 0.2, elfnote 1.68, despia 2.58, angelechy 5.49, worst -1.27) — from tries Activate Vidolium the Unstable Power Patron of Unity
Others: search 2.47 · tries Activate Vidolium the Unstable Power Patron of Unity → new ending 2.45 · tries Activate Vidolium the Unstable Power Patron of Unity → new ending 2.28 · tries Activate Junoldo the Shadespirit Power Patron 2.11 · opening lanes 1.26 · inf1 1.24 · inf1 0.71 · tries Activate Vidolium the Unstable Power Patron of Unity → new early order -1.41

1. Activate Ars Magna of Infinity and Finity (hand): You can banish this card from your hand; add 1 non-Warrior "Ars Magna" monster from your Deck to your hand
2. Selected Ars Magna of Purification and Corruption (Deck)
3. Activate Ars Magna of Purification and Corruption (hand): You can banish this card from your hand; add 1 "Ars Magna" Spell/Trap from your Deck to your hand
4. Selected Ars Magna - "Citrinitas" (Deck)
5. Set Spell/Trap Ars Magna - "Citrinitas"
6. Activate Ars Magna - "Citrinitas" (S1): activate this card
7. Activate Ars Magna - "Citrinitas" (S1): Add 1 "Medius" or "Ars Magna" monster from your Deck to your hand
8. Selected Medius the Pure (Deck)
9. Normal Summon Medius the Pure (hand)
10. Yes
11. Selected Vidolium the Unstable Power Patron of Unity (Deck)
12. Add the card(s) to your hand
13. Activate Vidolium the Unstable Power Patron of Unity (hand): Activate it as a Pendulum Spell
14. Activate Vidolium the Unstable Power Patron of Unity (S5): Activate 1 of these effects
15. Your Level 12 "Power Patron" monsters gain 5000 ATK
16. Yes
17. Selected Plundered Power Patron Plane - Vidolia (Deck)
18. Set Spell/Trap Plundered Power Patron Plane - Vidolia
19. Activate Plundered Power Patron Plane - Vidolia (Field): activate this card
20. Activate Plundered Power Patron Plane - Vidolia (Field): Banish (face-down) 1 card from your hand, then add to your hand, or Special Summon, 1 monster from your Deck that mentions the revealed monster
21. Selected Nerva the Power Patron of Creation (Extra Deck)
22. Selected Ash Blossom & Joyous Spring (hand)
23. Selected Nervedo the Shadebeast Power Patron (Deck)
24. Special Summon it
25. Activate Nervedo the Shadebeast Power Patron (M4): Special Summon 1 "Nerva the Power Patron of Creation" from your Extra Deck
26. Selected Nerva the Power Patron of Creation (Extra Deck)
27. Yes
28. Activate Ars Magna of Infinity and Finity (banishment): Special Summon this card
29. Selected Junoldo the Shadespirit Power Patron (Deck)
30. Activate Junoldo the Shadespirit Power Patron (M5): Special Summon 1 "Junora the Power Patron of Tuning" from your Extra Deck
31. Selected Junora the Power Patron of Tuning (Extra Deck)
32. Yes
33. Selected Nervedo the Shadebeast Power Patron (Extra Deck)
34. Link Summon Purification Power Patron (Extra Deck)
35. select Ars Magna of Infinity and Finity (M3)
36. select Junora the Power Patron of Tuning (EMZ-R)
37. Activate Purification Power Patron (EMZ-L): Add 1 "Theorealize" card from your Deck to your hand
38. Selected Theorealize Past Lull (Deck)
39. Activate Purification Power Patron (EMZ-L): Link Summon including this card as material
40. Selected Medicurius the Power Patron of Illusions (Extra Deck)
41. select Medius the Pure (M1)
42. Finish selection
43. Yes
44. Activate Ars Magna of Purification and Corruption (M5): Banish Spells/Traps on the field
45. Selected Plundered Power Patron Plane - Vidolia (Field)
46. Special Summon (procedure) Artmage Non-Finito (Extra Deck)
47. Selected Theorealize Past Lull (hand)
48. Selected Nervedo the Shadebeast Power Patron (hand)
49. Yes
50. Selected Artmage Impasto -Recapture- (Deck)
51. Activate Theorealize Past Lull (GY): Special Summon 1 Fusion, Synchro, or Xyz Monster from your GY
52. Selected Junora the Power Patron of Tuning (GY)

End board:  LP 8000 | Hand 3 | Deck 29 | Extra 12 | GY 4 | Banished 9   Monsters: M1: Artmage Non-Finito Lv7 2400/1500 ATK || M3: Junora the Power Patron of Tuning Lv10 3100/3800 ATK || M4: Nerva the Power Patron of Creation Lv10 3300/3300 ATK || M5: Ars Magna of Purification and Corruption Lv8 1000/2100 ATK || EMZ-R: Medicurius the Power Patron of Illusions L3↙↓↘ 9000    Spell/Trap: S1: Ars Magna - "Citrinitas" || S2: Artmage Impasto -Recapture- (Set)   GY: Ars Magna of Infinity and Finity, Medius the Pure, Purification Power Patron, Nervedo the Shadebeast Power Patron   Banished: Ash Blossom & Joyous Spring (face-down), Black Luster Soldier - Soldier of Light and Darkness (face-down), Vidolium the Un

