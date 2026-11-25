# Evolved lines — Small World, Ash Blossom & Joyous Spring, Ash Blossom & Joyous Spring, Droll & Lock Bird, Ghost Ogre & Snow Rabbit (findlist-1100)
2026-11-25T07:08:21.447Z

8 deck orders (different face-down banishes / draws), 3 opponent hands x o_ss_panama + o_elfnote + o_despia + o_angelechy per line, 5 min searches, 4 mutation rounds.
Fitness = average margin after their turn (what you keep minus what they build; −10 more if they OTK). Higher is better.

**Best line per deck order: average 5.98** (worst order 3.92). Winner came from: search → new ending → new early order 1, search 5, opening lanes 2

| seed line | works as written | its score when it works | seed start + search finish (all orders) |
|---|---|---|---|
| sw1 | 3/8 | 0.51 | 2.15 |

## Weak points found automatically
Cards whose face-down banish (by your own costs) hurt the best line most (average best line without vs with that card banished):

| card | orders where it was banished | drop |
|---|---|---|
| Artmage Vandalism -Assault- | 5/8 | 1.19 |
| Vidolium the Unstable Power Patron of Unity | 6/8 | 1.06 |
| Light and Darkness Ritual | 6/8 | 1.02 |
| Apprentice Illusion Magician | 3/8 | 0.71 |
| Plundered Power Patron Plane - Vidolia | 3/8 | 0.6 |
| Magician of Dark Chaos - Black Chaos | 6/8 | 0.59 |
| Fiendsmith's Tract | 3/8 | 0.25 |
| Mind Shuffle | 2/8 | 0.06 |
| Dark Magical Circle | 4/8 | 0.03 |
| Junoldo the Shadespirit Power Patron | 4/8 | 0.02 |

Where the hand-designed lines broke (next step that no longer worked):
- sw1: Junoldo (3x)
- sw1: Past Lull (1x)
- sw1: Impasto (1x)

List changes proposed for the list test (data/proposals-findlist-1100.json):
- +1 Vidolium the Unstable Power Patron of Unity, −1 Plundered Power Patron Plane - Vidolia — Vidolium the Unstable Power Patron of Unity: best line 1.06 worse when a cost banished it (6 of 8 orders) — Small World
- +1 Light and Darkness Ritual, −1 Artmage Vandalism -Assault- — Light and Darkness Ritual: best line 1.02 worse when a cost banished it (6 of 8 orders) — Small World
- +1 Apprentice Illusion Magician, −1 Small World — Apprentice Illusion Magician: best line 0.71 worse when a cost banished it (3 of 8 orders) — Small World
- +1 Plundered Power Patron Plane - Vidolia, −1 Small World — Plundered Power Patron Plane - Vidolia: best line 0.6 worse when a cost banished it (3 of 8 orders) — Small World
- +1 Vidolium the Unstable Power Patron of Unity — Vidolium the Unstable Power Patron of Unity: best line 1.06 worse when a cost banished it (6 of 8 orders) — Small World (add only: deck grows, up to 60)
- +1 Light and Darkness Ritual — Light and Darkness Ritual: best line 1.02 worse when a cost banished it (6 of 8 orders) — Small World (add only: deck grows, up to 60)
- +1 Apprentice Illusion Magician — Apprentice Illusion Magician: best line 0.71 worse when a cost banished it (3 of 8 orders) — Small World (add only: deck grows, up to 60)
- +1 Plundered Power Patron Plane - Vidolia — Plundered Power Patron Plane - Vidolia: best line 0.6 worse when a cost banished it (3 of 8 orders) — Small World (add only: deck grows, up to 60)

Effects the search had not used, tried on purpose (best result so far):
- Activate Griffoh: 4.67
- Normal Summon Theorealize Medius: 4.53
- Activate Nervedo the Shadebeast Power Patron: 4.18
- Activate Artmage Diactorus: 3.37
- Activate Fiendsmith's Sequence: 3.35
- Activate Junoldo the Shadespirit Power Patron: 3.2
- Activate Vidolium the Unstable Power Patron of Unity: 3.1
- Activate Artmage Vandalism -Assault-: 2.73

## Order 1: best 8.14 (ss_panama 6.74, elfnote 9.15, despia 7.73, angelechy 9, worst 4.33) — from search → new ending → new early order
Others: search → new ending → new early order → new ending 7.67 · search → new ending 7.29 · search 6.85 · search → new ending → new early order → new early order 5.03 · sw1 4.27 · opening lanes 3.51 · tries Activate Fiendsmith Engraver 0.59 · tries Link Summon Fiendsmith's Requiem -1.46

1. Set Spell/Trap Small World
2. Activate Small World (S1): activate this card
3. Selected Ghost Ogre & Snow Rabbit (hand)
4. Selected Artmage Finmel (Deck)
5. Selected Ars Magna of Infinity and Finity (Deck)
6. Activate Ars Magna of Infinity and Finity (hand): You can banish this card from your hand; add 1 non-Warrior "Ars Magna" monster from your Deck to your hand
7. Selected Ars Magna of Purification and Corruption (Deck)
8. Activate Ars Magna of Purification and Corruption (hand): You can banish this card from your hand; add 1 "Ars Magna" Spell/Trap from your Deck to your hand
9. Selected Ars Magna - "Citrinitas" (Deck)
10. Set Spell/Trap Ars Magna - "Citrinitas"
11. Activate Ars Magna - "Citrinitas" (S1): activate this card
12. Activate Ars Magna - "Citrinitas" (S1): Add 1 "Medius" or "Ars Magna" monster from your Deck to your hand
13. Selected Medius the Pure (Deck)
14. Normal Summon Medius the Pure (hand)
15. Yes
16. Selected Nervedo the Shadebeast Power Patron (Deck)
17. Special Summon it
18. Activate Nervedo the Shadebeast Power Patron (M4): Special Summon 1 "Nerva the Power Patron of Creation" from your Extra Deck
19. Selected Nerva the Power Patron of Creation (Extra Deck)
20. Yes
21. Activate Ars Magna of Infinity and Finity (banishment): Special Summon this card
22. Selected Junoldo the Shadespirit Power Patron (Deck)
23. Activate Junoldo the Shadespirit Power Patron (M5): Special Summon 1 "Junora the Power Patron of Tuning" from your Extra Deck
24. Selected Junora the Power Patron of Tuning (Extra Deck)
25. Yes
26. Selected Nervedo the Shadebeast Power Patron (Extra Deck)
27. Link Summon Purification Power Patron (Extra Deck)
28. select Ars Magna of Infinity and Finity (M4)
29. select Junora the Power Patron of Tuning (EMZ-L)
30. Activate Purification Power Patron (EMZ-L): Add 1 "Theorealize" card from your Deck to your hand
31. Activate Ars Magna of Purification and Corruption (banishment): Special Summon this card
32. Selected Theorealize Medius (Deck)
33. Activate Purification Power Patron (EMZ-L): Link Summon including this card as material
34. Activate Ars Magna of Purification and Corruption (M2): Banish Spells/Traps on the field
35. Selected Ars Magna - "Citrinitas" (S1)
36. Selected Medicurius the Power Patron of Illusions (Extra Deck)
37. select Medius the Pure (M3)
38. Finish selection
39. Activate Theorealize Medius (hand): If a "Power Patron" card is on the field: You can Special Summon this card from your hand, then you can add 1 "Theorealize" Spell/Trap from your Deck to your hand
40. Yes
41. Selected Theorealize Past Lull (Deck)
42. Special Summon (procedure) Artmage Non-Finito (Extra Deck)
43. Selected Theorealize Past Lull (hand)
44. Selected Nervedo the Shadebeast Power Patron (hand)
45. Yes
46. Selected Artmage Impasto -Recapture- (Deck)
47. Activate Theorealize Past Lull (GY): Special Summon 1 Fusion, Synchro, or Xyz Monster from your GY
48. Selected Junora the Power Patron of Tuning (GY)
49. Link Summon S:P Little Knight (Extra Deck)
50. select Junora the Power Patron of Tuning (M5)
51. select Ars Magna of Purification and Corruption (M2)
52. Yes
53. Selected Junora the Power Patron of Tuning (GY)
54. Yes
55. Special Summon 1 "Diactorus" monster
56. Selected Artmage Diactorus (Extra Deck)

End board:  LP 8000 | Hand 3 | Deck 28 | Extra 9 | GY 6 | Banished 12   Monsters: M1: Nerva the Power Patron of Creation Lv10 3300/3300 ATK || M3: Artmage Diactorus Lv8 2800/2500 ATK || M4: Artmage Non-Finito Lv7 2400/1500 ATK || M5: S:P Little Knight L2←→ 1600  || EMZ-R: Medicurius the Power Patron of Illusions L3↙↓↘ 9000    Spell/Trap: S1: Artmage Impasto -Recapture- (Set)   GY: Small World, Ars Magna of Infinity and Finity, Medius the Pure, Purification Power Patron, Nervedo the Shadebeast Power Patron, Ars Magna of Purification and Corruption   Banished: Ghost Ogre & Snow Rabbit (face-down), Artmage Finmel (face-down), Light and Darkness Ritual (face-down), Lacrima the Crimson Tears (face-down), Me

## Order 2: best 6.45 (ss_panama null, elfnote 4.33, despia 3.78, angelechy 8.05, worst 3.78) — from search
Others: opening lanes 3.31 · sw1 1.44 · sw1 0.4 · tries Activate Black Chaos -0.28 · tries Activate Mind Shuffle -0.38

1. Set Spell/Trap Small World
2. Activate Small World (S1): activate this card
3. Selected Droll & Lock Bird (hand)
4. Selected Griffoh (Deck)
5. Selected Medius the Pure (Deck)
6. Normal Summon Medius the Pure (hand)
7. Yes
8. Selected Nervedo the Shadebeast Power Patron (Deck)
9. Special Summon it
10. Activate Nervedo the Shadebeast Power Patron (M1): Special Summon 1 "Nerva the Power Patron of Creation" from your Extra Deck
11. Selected Nerva the Power Patron of Creation (Extra Deck)
12. Yes
13. Selected Junoldo the Shadespirit Power Patron (Deck)
14. Activate Junoldo the Shadespirit Power Patron (M3): Special Summon 1 "Junora the Power Patron of Tuning" from your Extra Deck
15. Selected Junora the Power Patron of Tuning (Extra Deck)
16. Yes
17. Selected Nervedo the Shadebeast Power Patron (Extra Deck)
18. Link Summon Purification Power Patron (Extra Deck)
19. select Medius the Pure (M4)
20. select Junora the Power Patron of Tuning (EMZ-R)
21. Yes
22. Selected Theorealize Medius (Deck)
23. Activate Theorealize Medius (hand): If a "Power Patron" card is on the field: You can Special Summon this card from your hand, then you can add 1 "Theorealize" Spell/Trap from your Deck to your hand
24. Yes
25. Selected Theorealize Past Lull (Deck)
26. Activate Medius the Pure (GY): Shuffle 1 monster from your hand or face-up field into the Deck, and if you do, Special Summon this card
27. Selected Ash Blossom & Joyous Spring (hand)
28. Special Summon (procedure) Artmage Non-Finito (Extra Deck)
29. Selected Theorealize Past Lull (hand)
30. Selected Nervedo the Shadebeast Power Patron (hand)
31. Yes
32. Activate Purification Power Patron (EMZ-R): Link Summon including this card as material
33. Selected Medicurius the Power Patron of Illusions (Extra Deck)
34. select Medius the Pure (M2)
35. Finish selection
36. Selected Artmage Impasto -Recapture- (Deck)
37. Yes
38. Special Summon 1 "Diactorus" monster
39. Selected Artmage Diactorus (Extra Deck)
40. Activate Theorealize Past Lull (GY): Special Summon 1 Fusion, Synchro, or Xyz Monster from your GY
41. Selected Junora the Power Patron of Tuning (GY)
42. Link Summon S:P Little Knight (Extra Deck)
43. select Junora the Power Patron of Tuning (M2)
44. select Artmage Non-Finito (M5)
45. No

End board:  LP 8000 | Hand 2 | Deck 32 | Extra 9 | GY 5 | Banished 11   Monsters: M1: Nerva the Power Patron of Creation Lv10 3300/3300 ATK || M2: S:P Little Knight L2←→ 1600  || M3: Artmage Diactorus Lv8 2800/2500 ATK || EMZ-L: Medicurius the Power Patron of Illusions L3↙↓↘ 3000    Spell/Trap: S1: Artmage Impasto -Recapture- (Set)   GY: Small World, Nervedo the Shadebeast Power Patron, Purification Power Patron, Junora the Power Patron of Tuning, Artmage Non-Finito   Banished: Droll & Lock Bird (face-down), Griffoh (face-down), Light and Darkness Ritual (face-down), Theorealize Liberation (face-down), Fiendsmith Engraver (face-down), Artmage Graflare (face-down), Ars Magna - "Citrinitas" (face-down), 

## Order 3: best 4.78 (ss_panama 7.09, elfnote 1.8, despia -0.65, angelechy 6.03, worst -0.65) — from search
Others: search → new ending 4.21 · search → new ending 3.65 · search → new early order 3.19 · search → new early order 1.31 · sw1 0.99 · opening lanes 0.98 · tries Activate Fiendsmith's Tract -0.57 · tries Activate Fiendsmith Engraver -2.61

1. Activate Small World (hand): activate this card
2. Selected Ghost Ogre & Snow Rabbit (hand)
3. Selected Artmage Graflare (Deck)
4. Selected Ars Magna of Purification and Corruption (Deck)
5. Activate Ars Magna of Purification and Corruption (hand): You can banish this card from your hand; add 1 "Ars Magna" Spell/Trap from your Deck to your hand
6. Selected Ars Magna - "Citrinitas" (Deck)
7. Set Spell/Trap Ars Magna - "Citrinitas"
8. Activate Ars Magna - "Citrinitas" (S1): activate this card
9. Activate Ars Magna - "Citrinitas" (S1): Add 1 "Medius" or "Ars Magna" monster from your Deck to your hand
10. Selected Medius the Pure (Deck)
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
23. Link Summon Purification Power Patron (Extra Deck)
24. select Medius the Pure (M3)
25. select Junora the Power Patron of Tuning (EMZ-R)
26. Activate Ars Magna of Purification and Corruption (banishment): Special Summon this card
27. Activate Purification Power Patron (EMZ-R): Add 1 "Theorealize" card from your Deck to your hand
28. Selected Theorealize Medius (Deck)
29. Activate Theorealize Medius (hand): If a "Power Patron" card is on the field: You can Special Summon this card from your hand, then you can add 1 "Theorealize" Spell/Trap from your Deck to your hand
30. Activate Ars Magna of Purification and Corruption (M3): Banish Spells/Traps on the field
31. Selected Ars Magna - "Citrinitas" (S1)
32. Yes
33. Selected Theorealize Past Lull (Deck)
34. Activate Purification Power Patron (EMZ-R): Link Summon including this card as material
35. Selected Medicurius the Power Patron of Illusions (Extra Deck)
36. select Ars Magna of Purification and Corruption (M3)
37. Finish selection
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
48. select Junora the Power Patron of Tuning (M3)
49. select Medius the Pure (M2)
50. Yes
51. Special Summon 1 "Diactorus" monster
52. Activate S:P Little Knight (M3): Banish 1 card on the field or GY
53. Selected Ars Magna of Purification and Corruption (GY)
54. Selected Artmage Diactorus (Extra Deck)

End board:  LP 8000 | Hand 2 | Deck 30 | Extra 9 | GY 4 | Banished 13   Monsters: M1: Artmage Non-Finito Lv7 2400/1500 ATK || M2: Artmage Diactorus Lv8 2800/2500 ATK || M3: S:P Little Knight L2←→ 1600  || M4: Nerva the Power Patron of Creation Lv10 3300/3300 ATK || EMZ-L: Medicurius the Power Patron of Illusions L3↙↓↘ 3000    Spell/Trap: S1: Artmage Impasto -Recapture- (Set)   GY: Small World, Purification Power Patron, Nervedo the Shadebeast Power Patron, Junora the Power Patron of Tuning   Banished: Ghost Ogre & Snow Rabbit (face-down), Artmage Graflare (face-down), Theorealize Medius (face-down), Vidolium the Unstable Power Patron of Unity (face-down), Mind Shuffle (face-down), Artmage Vandalism -As

## Order 4: best 7.1 (ss_panama 5.94, elfnote 4.75, despia 8.85, angelechy 8.85, worst 4.38) — from opening lanes
Others: opening lanes → new early order 6.86 · opening lanes → new early order 4.83 · opening lanes → new ending 3.36 · tries Activate Fiendsmith's Sequence 3.35 · tries Activate Vidolium the Unstable Power Patron of Unity 3.1 · opening lanes → new ending 2.58 · search 1.83 · sw1 1.7 · sw1 0.53

1. Activate Small World (hand): activate this card
2. Selected Ghost Ogre & Snow Rabbit (hand)
3. Selected Artmage Graflare (Deck)
4. Selected Ars Magna of Purification and Corruption (Deck)
5. Activate Ars Magna of Purification and Corruption (hand): You can banish this card from your hand; add 1 "Ars Magna" Spell/Trap from your Deck to your hand
6. Selected Ars Magna - "Citrinitas" (Deck)
7. Activate Ars Magna - "Citrinitas" (hand): activate this card
8. Activate Ars Magna - "Citrinitas" (S1): Add 1 "Medius" or "Ars Magna" monster from your Deck to your hand
9. Selected Medius the Pure (Deck)
10. Normal Summon Medius the Pure (hand)
11. Yes
12. Selected Nervedo the Shadebeast Power Patron (Deck)
13. Special Summon it
14. Activate Nervedo the Shadebeast Power Patron (M1): Special Summon 1 "Nerva the Power Patron of Creation" from your Extra Deck
15. Selected Nerva the Power Patron of Creation (Extra Deck)
16. Yes
17. Selected Junoldo the Shadespirit Power Patron (Deck)
18. Activate Junoldo the Shadespirit Power Patron (M2): Special Summon 1 "Junora the Power Patron of Tuning" from your Extra Deck
19. Selected Junora the Power Patron of Tuning (Extra Deck)
20. Yes
21. Selected Nervedo the Shadebeast Power Patron (Extra Deck)
22. Link Summon Purification Power Patron (Extra Deck)
23. select Medius the Pure (M4)
24. select Junora the Power Patron of Tuning (M2)
25. Activate Ars Magna of Purification and Corruption (banishment): Special Summon this card
26. Activate Purification Power Patron (EMZ-R): Add 1 "Theorealize" card from your Deck to your hand
27. Selected Theorealize Medius (Deck)
28. Activate Theorealize Medius (hand): If a "Power Patron" card is on the field: You can Special Summon this card from your hand, then you can add 1 "Theorealize" Spell/Trap from your Deck to your hand
29. Activate Ars Magna of Purification and Corruption (M3): Banish Spells/Traps on the field
30. Selected Ars Magna - "Citrinitas" (S1)
31. Yes
32. Selected Theorealize Past Lull (Deck)
33. Special Summon (procedure) Artmage Non-Finito (Extra Deck)
34. Selected Theorealize Past Lull (hand)
35. Selected Nervedo the Shadebeast Power Patron (hand)
36. Yes
37. Activate Purification Power Patron (EMZ-R): Link Summon including this card as material
38. Selected Medicurius the Power Patron of Illusions (Extra Deck)
39. select Ars Magna of Purification and Corruption (M3)
40. Finish selection
41. Selected Artmage Impasto -Recapture- (Deck)
42. Activate Theorealize Past Lull (GY): Special Summon 1 Fusion, Synchro, or Xyz Monster from your GY
43. Selected Junora the Power Patron of Tuning (GY)
44. Activate Medius the Pure (GY): Shuffle 1 monster from your hand or face-up field into the Deck, and if you do, Special Summon this card
45. Selected Ash Blossom & Joyous Spring (hand)
46. Link Summon S:P Little Knight (Extra Deck)
47. select Medius the Pure (M4)
48. select Junora the Power Patron of Tuning (M3)
49. Yes
50. Special Summon 1 "Diactorus" monster
51. Activate S:P Little Knight (M3): Banish 1 card on the field or GY
52. Selected Small World (GY)
53. Selected Artmage Diactorus (Extra Deck)

End board:  LP 8000 | Hand 2 | Deck 30 | Extra 9 | GY 4 | Banished 13   Monsters: M1: Nerva the Power Patron of Creation Lv10 3300/3300 ATK || M2: Artmage Non-Finito Lv7 2400/1500 ATK || M3: S:P Little Knight L2←→ 1600  || M5: Artmage Diactorus Lv8 2800/2500 ATK || EMZ-L: Medicurius the Power Patron of Illusions L3↙↓↘ 3000    Spell/Trap: S1: Artmage Impasto -Recapture- (Set)   GY: Nervedo the Shadebeast Power Patron, Ars Magna of Purification and Corruption, Purification Power Patron, Junora the Power Patron of Tuning   Banished: Ghost Ogre & Snow Rabbit (face-down), Artmage Graflare (face-down), Pendulum Treasure (face-down), Ars Magna of Infinity and Finity (face-down), Prohibited Power Patron Portal

## Order 5: best 6.41 (ss_panama 4.13, elfnote null, despia 3.97, angelechy 8.8, worst -0.75) — from opening lanes
Others: search 5.22 · opening lanes → new ending 5.03 · opening lanes → new ending 4.81 · opening lanes → new early order 4.26 · opening lanes → new early order 3.66 · sw1 2.16 · tries Activate Prohibited Power Patron Portal - Terminus 0.59 · tries Activate Mind Shuffle -0.83

1. Activate Small World (hand): activate this card
2. Selected Droll & Lock Bird (hand)
3. Selected Black Chaos (Deck)
4. Selected Ars Magna of Purification and Corruption (Deck)
5. Activate Ars Magna of Purification and Corruption (hand): You can banish this card from your hand; add 1 "Ars Magna" Spell/Trap from your Deck to your hand
6. Selected Ars Magna - "Citrinitas" (Deck)
7. Set Spell/Trap Ars Magna - "Citrinitas"
8. Activate Ars Magna - "Citrinitas" (S1): activate this card
9. Activate Ars Magna - "Citrinitas" (S1): Add 1 "Medius" or "Ars Magna" monster from your Deck to your hand
10. Selected Medius the Pure (Deck)
11. Normal Summon Medius the Pure (hand)
12. Yes
13. Selected Nervedo the Shadebeast Power Patron (Deck)
14. Special Summon it
15. Activate Nervedo the Shadebeast Power Patron (M4): Special Summon 1 "Nerva the Power Patron of Creation" from your Extra Deck
16. Selected Nerva the Power Patron of Creation (Extra Deck)
17. Yes
18. Selected Junoldo the Shadespirit Power Patron (Deck)
19. Activate Junoldo the Shadespirit Power Patron (M2): Special Summon 1 "Junora the Power Patron of Tuning" from your Extra Deck
20. Selected Junora the Power Patron of Tuning (Extra Deck)
21. Yes
22. Selected Nervedo the Shadebeast Power Patron (Extra Deck)
23. Link Summon Purification Power Patron (Extra Deck)
24. select Medius the Pure (M3)
25. select Junora the Power Patron of Tuning (M4)
26. Activate Purification Power Patron (EMZ-L): Add 1 "Theorealize" card from your Deck to your hand
27. Activate Ars Magna of Purification and Corruption (banishment): Special Summon this card
28. Selected Theorealize Medius (Deck)
29. Activate Ars Magna of Purification and Corruption (M4): Banish Spells/Traps on the field
30. Selected Ars Magna - "Citrinitas" (S1)
31. Activate Theorealize Medius (hand): If a "Power Patron" card is on the field: You can Special Summon this card from your hand, then you can add 1 "Theorealize" Spell/Trap from your Deck to your hand
32. Yes
33. Selected Theorealize Past Lull (Deck)
34. Activate Purification Power Patron (EMZ-L): Link Summon including this card as material
35. Selected Medicurius the Power Patron of Illusions (Extra Deck)
36. select Ars Magna of Purification and Corruption (M4)
37. Finish selection
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
49. select Junora the Power Patron of Tuning (M3)
50. Yes
51. Special Summon 1 "Diactorus" monster
52. Selected Artmage Diactorus (Extra Deck)

End board:  LP 8000 | Hand 2 | Deck 30 | Extra 9 | GY 5 | Banished 12   Monsters: M1: Nerva the Power Patron of Creation Lv10 3300/3300 ATK || M2: Artmage Diactorus Lv8 2800/2500 ATK || M3: S:P Little Knight L2←→ 1600  || M4: Artmage Non-Finito Lv7 2400/1500 ATK || EMZ-L: Medicurius the Power Patron of Illusions L3↙↓↘ 3000    Spell/Trap: S1: Artmage Impasto -Recapture- (Set)   GY: Small World, Ars Magna of Purification and Corruption, Purification Power Patron, Nervedo the Shadebeast Power Patron, Junora the Power Patron of Tuning   Banished: Droll & Lock Bird (face-down), Black Chaos (face-down), Ars Magna of Infinity and Finity (face-down), Skull Archfiend of Chaos (face-down), Fiendsmith's Tract (fa

## Order 6: best 5.47 (ss_panama 4.33, elfnote null, despia 4.8, angelechy 7.95, worst 0.9) — from search
Others: sw1 4.9 · tries Normal Summon Theorealize Medius 4.53 · opening lanes 4.22 · tries Normal Summon Lacrima the Crimson Tears 0.6

1. Set Spell/Trap Small World
2. Activate Small World (S1): activate this card
3. Selected Droll & Lock Bird (hand)
4. Selected Magician of Dark Chaos - Black Chaos (Deck)
5. Selected Medius the Pure (Deck)
6. Normal Summon Medius the Pure (hand)
7. Yes
8. Selected Nervedo the Shadebeast Power Patron (Deck)
9. Special Summon it
10. Activate Nervedo the Shadebeast Power Patron (M4): Special Summon 1 "Nerva the Power Patron of Creation" from your Extra Deck
11. Selected Nerva the Power Patron of Creation (Extra Deck)
12. Yes
13. Selected Junoldo the Shadespirit Power Patron (Deck)
14. Activate Junoldo the Shadespirit Power Patron (M5): Special Summon 1 "Junora the Power Patron of Tuning" from your Extra Deck
15. Selected Junora the Power Patron of Tuning (Extra Deck)
16. Yes
17. Selected Nervedo the Shadebeast Power Patron (Extra Deck)
18. Link Summon Purification Power Patron (Extra Deck)
19. select Medius the Pure (M1)
20. select Junora the Power Patron of Tuning (M5)
21. Yes
22. Selected Theorealize Medius (Deck)
23. Activate Medius the Pure (GY): Shuffle 1 monster from your hand or face-up field into the Deck, and if you do, Special Summon this card
24. Selected Ash Blossom & Joyous Spring (hand)
25. Activate Theorealize Medius (hand): If a "Power Patron" card is on the field: You can Special Summon this card from your hand, then you can add 1 "Theorealize" Spell/Trap from your Deck to your hand
26. Yes
27. Selected Theorealize Past Lull (Deck)
28. Special Summon (procedure) Artmage Non-Finito (Extra Deck)
29. Selected Theorealize Past Lull (hand)
30. Selected Nervedo the Shadebeast Power Patron (hand)
31. Yes
32. Activate Purification Power Patron (EMZ-R): Link Summon including this card as material
33. Selected Medicurius the Power Patron of Illusions (Extra Deck)
34. select Medius the Pure (M3)
35. Finish selection
36. Selected Artmage Impasto -Recapture- (Deck)
37. Yes
38. Special Summon 1 "Diactorus" monster
39. Selected Artmage Diactorus (Extra Deck)
40. Activate Theorealize Past Lull (GY): Special Summon 1 Fusion, Synchro, or Xyz Monster from your GY
41. Selected Junora the Power Patron of Tuning (GY)
42. Link Summon S:P Little Knight (Extra Deck)
43. select Artmage Non-Finito (M1)
44. select Junora the Power Patron of Tuning (M5)
45. Yes
46. Selected Artmage Non-Finito (GY)

End board:  LP 8000 | Hand 2 | Deck 32 | Extra 9 | GY 4 | Banished 12   Monsters: M3: Artmage Diactorus Lv8 2800/2500 ATK || M4: Nerva the Power Patron of Creation Lv10 3300/3300 ATK || M5: S:P Little Knight L2←→ 1600  || EMZ-R: Medicurius the Power Patron of Illusions L3↙↓↘ 3000    Spell/Trap: S1: Artmage Impasto -Recapture- (Set)   GY: Small World, Nervedo the Shadebeast Power Patron, Purification Power Patron, Junora the Power Patron of Tuning   Banished: Droll & Lock Bird (face-down), Magician of Dark Chaos - Black Chaos (face-down), Ars Magna of Infinity and Finity (face-down), Artmage Vandalism -Assault- (face-down), Artmage Vandalism -Assault- (face-down), Vidolium the Unstable Power Patron of U

## Order 7: best 3.92 (ss_panama 4.78, elfnote 2.38, despia 0.51, angelechy 9.38, worst -1.75) — from search
Others: opening lanes 3.05 · sw1 1.03 · sw1 0.61 · tries Activate Fiendsmith's Sequence -0.75 · tries Activate Fiendsmith's Requiem -1.52

1. Set Spell/Trap Small World
2. Activate Small World (S1): activate this card
3. Selected Ghost Ogre & Snow Rabbit (hand)
4. Selected Artmage Finmel (Deck)
5. Selected Ars Magna of Infinity and Finity (Deck)
6. Activate Ars Magna of Infinity and Finity (hand): You can banish this card from your hand; add 1 non-Warrior "Ars Magna" monster from your Deck to your hand
7. Selected Ars Magna of Purification and Corruption (Deck)
8. Activate Ars Magna of Purification and Corruption (hand): You can banish this card from your hand; add 1 "Ars Magna" Spell/Trap from your Deck to your hand
9. Selected Ars Magna - "Citrinitas" (Deck)
10. Set Spell/Trap Ars Magna - "Citrinitas"
11. Activate Ars Magna - "Citrinitas" (S1): activate this card
12. Activate Ars Magna - "Citrinitas" (S1): Add 1 "Medius" or "Ars Magna" monster from your Deck to your hand
13. Selected Medius the Pure (Deck)
14. Normal Summon Medius the Pure (hand)
15. Yes
16. Selected Nervedo the Shadebeast Power Patron (Deck)
17. Special Summon it
18. Activate Nervedo the Shadebeast Power Patron (M3): Special Summon 1 "Nerva the Power Patron of Creation" from your Extra Deck
19. Selected Nerva the Power Patron of Creation (Extra Deck)
20. Yes
21. Activate Ars Magna of Infinity and Finity (banishment): Special Summon this card
22. Selected Junoldo the Shadespirit Power Patron (Deck)
23. Activate Junoldo the Shadespirit Power Patron (M4): Special Summon 1 "Junora the Power Patron of Tuning" from your Extra Deck
24. Selected Junora the Power Patron of Tuning (Extra Deck)
25. Yes
26. Selected Nervedo the Shadebeast Power Patron (Extra Deck)
27. Link Summon Purification Power Patron (Extra Deck)
28. select Ars Magna of Infinity and Finity (M2)
29. select Junora the Power Patron of Tuning (M4)
30. Activate Purification Power Patron (EMZ-L): Add 1 "Theorealize" card from your Deck to your hand
31. Selected Theorealize Medius (Deck)
32. Activate Theorealize Medius (hand): If a "Power Patron" card is on the field: You can Special Summon this card from your hand, then you can add 1 "Theorealize" Spell/Trap from your Deck to your hand
33. Activate Purification Power Patron (EMZ-L): Link Summon including this card as material
34. Selected Medicurius the Power Patron of Illusions (Extra Deck)
35. select Medius the Pure (M1)
36. Finish selection
37. Yes
38. Selected Theorealize Past Lull (Deck)
39. No
40. Special Summon (procedure) Artmage Non-Finito (Extra Deck)
41. Selected Theorealize Past Lull (hand)
42. Selected Nervedo the Shadebeast Power Patron (hand)
43. Yes
44. Selected Artmage Impasto -Recapture- (Deck)
45. Activate Medius the Pure (GY): Shuffle 1 monster from your hand or face-up field into the Deck, and if you do, Special Summon this card
46. Selected Ash Blossom & Joyous Spring (hand)
47. Activate Theorealize Past Lull (GY): Special Summon 1 Fusion, Synchro, or Xyz Monster from your GY
48. Selected Junora the Power Patron of Tuning (GY)
49. Link Summon S:P Little Knight (Extra Deck)
50. select Junora the Power Patron of Tuning (M5)
51. select Medius the Pure (M4)
52. Yes
53. Special Summon 1 "Diactorus" monster
54. Activate Ars Magna of Purification and Corruption (banishment): Special Summon this card
55. Selected Artmage Diactorus (Extra Deck)

End board:  LP 8000 | Hand 2 | Deck 29 | Extra 9 | GY 4 | Banished 12   Monsters: M1: Artmage Diactorus Lv8 2800/2500 ATK || M2: Artmage Non-Finito Lv7 2400/1500 ATK || M3: Nerva the Power Patron of Creation Lv10 3300/3300 ATK || M4: S:P Little Knight L2←→ 1600  || M5: Ars Magna of Purification and Corruption Lv8 1000/2100 ATK || EMZ-R: Medicurius the Power Patron of Illusions L3↙↓↘ 9000    Spell/Trap: S1: Ars Magna - "Citrinitas" || S2: Artmage Impasto -Recapture- (Set)   GY: Small World, Ars Magna of Infinity and Finity, Nervedo the Shadebeast Power Patron, Junora the Power Patron of Tuning   Banished: Ghost Ogre & Snow Rabbit (face-down), Artmage Finmel (face-down), Magician of Dark Chaos - Black Ch

## Order 8: best 5.61 (ss_panama null, elfnote null, despia -3.8, angelechy 8.75, worst -3.8) — from search
Others: search → new ending 4.77 · search → new early order 4.59 · opening lanes 3.38 · tries Activate Junoldo the Shadespirit Power Patron 3.2 · search → new ending 2.07 · tries Activate Fiendsmith's Desirae 0.98 · sw1 0.73 · search → new early order -1.71

1. Activate Small World (hand): activate this card
2. Selected Droll & Lock Bird (hand)
3. Selected Black Chaos (Deck)
4. Selected Ars Magna of Purification and Corruption (Deck)
5. Activate Ars Magna of Purification and Corruption (hand): You can banish this card from your hand; add 1 "Ars Magna" Spell/Trap from your Deck to your hand
6. Selected Ars Magna - "Citrinitas" (Deck)
7. Set Spell/Trap Ars Magna - "Citrinitas"
8. Activate Ars Magna - "Citrinitas" (S1): activate this card
9. Activate Ars Magna - "Citrinitas" (S1): Add 1 "Medius" or "Ars Magna" monster from your Deck to your hand
10. Selected Medius the Pure (Deck)
11. Normal Summon Medius the Pure (hand)
12. Yes
13. Selected Nervedo the Shadebeast Power Patron (Deck)
14. Special Summon it
15. Activate Nervedo the Shadebeast Power Patron (M4): Special Summon 1 "Nerva the Power Patron of Creation" from your Extra Deck
16. Selected Nerva the Power Patron of Creation (Extra Deck)
17. Yes
18. Selected Junoldo the Shadespirit Power Patron (Deck)
19. Activate Junoldo the Shadespirit Power Patron (M4): Special Summon 1 "Junora the Power Patron of Tuning" from your Extra Deck
20. Selected Junora the Power Patron of Tuning (Extra Deck)
21. Yes
22. Selected Nervedo the Shadebeast Power Patron (Extra Deck)
23. Link Summon Purification Power Patron (Extra Deck)
24. select Medius the Pure (M3)
25. select Junora the Power Patron of Tuning (M2)
26. Activate Ars Magna of Purification and Corruption (banishment): Special Summon this card
27. Activate Purification Power Patron (EMZ-R): Add 1 "Theorealize" card from your Deck to your hand
28. Selected Theorealize Medius (Deck)
29. Activate Ars Magna of Purification and Corruption (M4): Banish Spells/Traps on the field
30. Selected Ars Magna - "Citrinitas" (S1)
31. Activate Theorealize Medius (hand): If a "Power Patron" card is on the field: You can Special Summon this card from your hand, then you can add 1 "Theorealize" Spell/Trap from your Deck to your hand
32. Yes
33. Selected Theorealize Past Lull (Deck)
34. Activate Purification Power Patron (EMZ-R): Link Summon including this card as material
35. Selected Medicurius the Power Patron of Illusions (Extra Deck)
36. select Ars Magna of Purification and Corruption (M4)
37. Finish selection
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

End board:  LP 8000 | Hand 2 | Deck 30 | Extra 9 | GY 5 | Banished 12   Monsters: M1: Nerva the Power Patron of Creation Lv10 3300/3300 ATK || M2: S:P Little Knight L2←→ 1600  || M3: Artmage Diactorus Lv8 2800/2500 ATK || M4: Artmage Non-Finito Lv7 2400/1500 ATK || EMZ-L: Medicurius the Power Patron of Illusions L3↙↓↘ 3000    Spell/Trap: S1: Artmage Impasto -Recapture- (Set)   GY: Small World, Ars Magna of Purification and Corruption, Purification Power Patron, Nervedo the Shadebeast Power Patron, Junora the Power Patron of Tuning   Banished: Droll & Lock Bird (face-down), Black Chaos (face-down), Medius the Pure (face-down), Griffoh (face-down), Prohibited Power Patron Portal - Terminus (face-down), L

