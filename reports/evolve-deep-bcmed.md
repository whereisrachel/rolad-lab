# Evolved lines — Black Chaos, Medius the Pure, Ash Blossom & Joyous Spring, Droll & Lock Bird, Ghost Ogre & Snow Rabbit (findlist-1100)
2026-11-25T07:03:20.315Z

8 deck orders (different face-down banishes / draws), 3 opponent hands x o_ss_panama + o_elfnote + o_despia + o_angelechy per line, 5 min searches, 4 mutation rounds.
Fitness = average margin after their turn (what you keep minus what they build; −10 more if they OTK). Higher is better.

**Best line per deck order: average 6.55** (worst order 4.98). Winner came from: opening lanes 2, search 6

| seed line | works as written | its score when it works | seed start + search finish (all orders) |
|---|---|---|---|
| bc1 | 3/8 | 2.3 | 4.05 |

## Weak points found automatically
Cards whose face-down banish (by your own costs) hurt the best line most (average best line without vs with that card banished):

| card | orders where it was banished | drop |
|---|---|---|
| Apprentice Illusion Magician | 2/8 | 0.93 |
| Ars Magna of Infinity and Finity | 5/8 | 0.63 |
| Medius the Pure | 6/8 | 0.55 |
| Light and Darkness Ritual | 2/8 | 0.45 |
| Fiendsmith's Tract | 5/8 | 0.44 |
| Pendulum Treasure | 6/8 | 0.11 |
| Dark Magical Circle | 2/8 | -0.11 |
| Artmage Finmel | 4/8 | -0.15 |
| Ars Magna - "Citrinitas" | 2/8 | -0.23 |
| Nervedo the Shadebeast Power Patron | 4/8 | -0.29 |

Where the hand-designed lines broke (next step that no longer worked):
- bc1: Yes (3x)
- bc1: Impasto (2x)

List changes proposed for the list test (data/proposals-findlist-1100.json):
- +1 Apprentice Illusion Magician, −1 Plundered Power Patron Plane - Vidolia — Apprentice Illusion Magician: best line 0.93 worse when a cost banished it (2 of 8 orders) — Black Chaos
- +1 Ars Magna of Infinity and Finity, −1 Artmage Vandalism -Assault- — Ars Magna of Infinity and Finity: best line 0.63 worse when a cost banished it (5 of 8 orders) — Black Chaos
- +1 Apprentice Illusion Magician — Apprentice Illusion Magician: best line 0.93 worse when a cost banished it (2 of 8 orders) — Black Chaos (add only: deck grows, up to 60)
- +1 Ars Magna of Infinity and Finity — Ars Magna of Infinity and Finity: best line 0.63 worse when a cost banished it (5 of 8 orders) — Black Chaos (add only: deck grows, up to 60)

Effects the search had not used, tried on purpose (best result so far):
- Activate Junoldo the Shadespirit Power Patron: 6.63
- Normal Summon Ars Magna of Purification and Corruption: 6.12
- Activate Fiendsmith Engraver: 5.86
- Activate Vidolium the Unstable Power Patron of Unity: 5.59
- Activate Vidolium the Unstable Power Patron of Unity: 5.57
- Activate Theorealize Liberation: 4.75
- Activate Artmage Graflare: 4.73
- Link Summon Fiendsmith's Requiem: 4.68

## Order 1: best 6.74 (ss_panama 3.83, elfnote 7.32, despia 6.22, angelechy 9.6, worst 1.07) — from opening lanes
Others: search 6.72 · tries Activate Vidolium the Unstable Power Patron of Unity 5.59 · bc1 4.79 · tries Activate Theorealize Liberation 4.75 · bc1 1.59

1. Activate Black Chaos (hand): Special Summon ("Black Chaos")
2. Selected Mind Shuffle (Deck)
3. Normal Summon Medius the Pure (hand)
4. Yes
5. Selected Nervedo the Shadebeast Power Patron (Deck)
6. Special Summon it
7. Activate Nervedo the Shadebeast Power Patron (M4): Special Summon 1 "Nerva the Power Patron of Creation" from your Extra Deck
8. Selected Nerva the Power Patron of Creation (Extra Deck)
9. Yes
10. Selected Junoldo the Shadespirit Power Patron (Deck)
11. Activate Junoldo the Shadespirit Power Patron (M2): Special Summon 1 "Junora the Power Patron of Tuning" from your Extra Deck
12. Selected Junora the Power Patron of Tuning (Extra Deck)
13. Yes
14. Selected Nervedo the Shadebeast Power Patron (Extra Deck)
15. Link Summon Purification Power Patron (Extra Deck)
16. select Junora the Power Patron of Tuning (M2)
17. select Medius the Pure (M3)
18. Yes
19. Activate Mind Shuffle (S1): Add 1 appropriate monster to your hand
20. Selected Skull Archfiend of Chaos (Deck)
21. Selected Skull Archfiend of Chaos (hand)
22. Selected Theorealize Medius (Deck)
23. Yes
24. Selected Light and Darkness Ritual (Deck)
25. Selected Magician of Dark Chaos - Black Chaos (Deck)
26. Activate Theorealize Medius (hand): If a "Power Patron" card is on the field: You can Special Summon this card from your hand, then you can add 1 "Theorealize" Spell/Trap from your Deck to your hand
27. Yes
28. Selected Theorealize Past Lull (Deck)
29. Special Summon (procedure) Artmage Non-Finito (Extra Deck)
30. Selected Theorealize Past Lull (hand)
31. Selected Nervedo the Shadebeast Power Patron (hand)
32. Yes
33. Selected Artmage Impasto -Recapture- (Deck)
34. Activate Theorealize Past Lull (GY): Special Summon 1 Fusion, Synchro, or Xyz Monster from your GY
35. Selected Junora the Power Patron of Tuning (GY)
36. Activate Light and Darkness Ritual (GY): Add both this card and 1 card that mentions "Light and Darkness Ritual" from your GY to your hand
37. Selected Black Chaos (GY)
38. Special Summon (procedure) Black Chaos (hand)
39. select Magician of Dark Chaos - Black Chaos (hand)
40. Special Summon (procedure) Dark Magician of Destruction (Extra Deck)
41. Selected Black Chaos (M5)
42. Yes
43. Special Summon 1 "Diactorus" monster
44. Activate Dark Magician of Destruction (M5): Add 1 "Dark Magician" or 1 card that mentions it from your Deck to your hand
45. Selected Dark Magical Circle (Deck)
46. Selected Artmage Diactorus (Extra Deck)
47. Activate Medius the Pure (GY): Shuffle 1 monster from your hand or face-up field into the Deck, and if you do, Special Summon this card
48. Selected Dark Magician of Destruction (M5)
49. Activate Purification Power Patron (EMZ-R): Link Summon including this card as material
50. Selected Medicurius the Power Patron of Illusions (Extra Deck)
51. select Junora the Power Patron of Tuning (M4)
52. Finish selection
53. Activate Skull Archfiend of Chaos (GY): Special Summon this card
54. select Theorealize Medius (banishment)
55. select Purification Power Patron (GY)
56. select Black Chaos (banishment)
57. Default order
58. Synchro Summon Chaos Angel (Extra Deck)
59. select Medius the Pure (M5)
60. select Skull Archfiend of Chaos (M4)
61. No

End board:  LP 8000 | Hand 4 | Deck 31 | Extra 10 | GY 3 | Banished 8   Monsters: M1: Nerva the Power Patron of Creation Lv10 3300/3300 ATK || M2: Artmage Diactorus Lv8 2800/2500 ATK || M3: Artmage Non-Finito Lv7 2400/1500 ATK || M4: Chaos Angel Lv10 3500/2800 ATK || EMZ-L: Medicurius the Power Patron of Illusions L3↙↓↘ 3000    Spell/Trap: S1: Mind Shuffle || S2: Artmage Impasto -Recapture- (Set) || S3: Dark Magical Circle   GY: Nervedo the Shadebeast Power Patron, Junora the Power Patron of Tuning, Skull Archfiend of Chaos   Banished: Fiendsmith Engraver (face-down), Theorealize Liberation (face-down), Griffoh (face-down), Vidolium the Unstable Power Patron of Unity (face-down), Theorealize Medius (fa

## Order 2: best 4.98 (ss_panama 3.02, elfnote 5.2, despia -0.25, angelechy 9.55, worst -0.5) — from search
Others: tries Link Summon Fiendsmith's Requiem 4.68 · tries Activate Fiendsmith Engraver 4.48 · opening lanes 3.77 · bc1 3.68 · bc1 3.16

1. Activate Black Chaos (hand): Special Summon ("Black Chaos")
2. Selected Mind Shuffle (Deck)
3. Activate Mind Shuffle (S1): Add 1 appropriate monster to your hand
4. Selected Skull Archfiend of Chaos (Deck)
5. Selected Skull Archfiend of Chaos (hand)
6. Yes
7. Selected Light and Darkness Ritual (Deck)
8. Selected Magician of Dark Chaos - Black Chaos (Deck)
9. Activate Light and Darkness Ritual (GY): Add both this card and 1 card that mentions "Light and Darkness Ritual" from your GY to your hand
10. Selected Skull Archfiend of Chaos (GY)
11. Activate Light and Darkness Ritual (hand): Ritual Summon 1 "Magician of Dark Chaos - Black Chaos" or "Black Luster Soldier - Soldier of Light and Darkness" from your hand
12. Selected Magician of Dark Chaos - Black Chaos (hand)
13. Selected Black Chaos (GY) value 8
14. Yes
15. Selected Light and Darkness Ritual (GY)
16. Special Summon (procedure) Dark Magician of Destruction (Extra Deck)
17. Selected Magician of Dark Chaos - Black Chaos (M3)
18. Yes
19. Selected Apprentice Illusion Magician (Deck)
20. Special Summon (procedure) Apprentice Illusion Magician (hand)
21. select Skull Archfiend of Chaos (hand)
22. Link Summon Purification Power Patron (Extra Deck)
23. select Apprentice Illusion Magician (M1)
24. select Dark Magician of Destruction (EMZ-L)
25. Activate Skull Archfiend of Chaos (GY): Special Summon this card
26. select Dark Magician of Destruction (GY)
27. select Apprentice Illusion Magician (GY)
28. select Magician of Dark Chaos - Black Chaos (banishment)
29. Default order
30. Normal Summon Medius the Pure (hand)
31. Yes
32. Selected Nervedo the Shadebeast Power Patron (Deck)
33. Special Summon it
34. Special Summon (procedure) Artmage Non-Finito (Extra Deck)
35. Selected Light and Darkness Ritual (hand)
36. Selected Nervedo the Shadebeast Power Patron (M2)
37. Yes
38. Activate Artmage Non-Finito (M4): Set 1 "Artmage" Spell/Trap from your Deck
39. Activate Purification Power Patron (EMZ-L): Link Summon including this card as material
40. Selected Medicurius the Power Patron of Illusions (Extra Deck)
41. select Medius the Pure (M3)
42. Finish selection
43. Selected Artmage Impasto -Recapture- (Deck)
44. Selected Junoldo the Shadespirit Power Patron (Deck)
45. Link Summon Purification Power Patron (Extra Deck)
46. select Junoldo the Shadespirit Power Patron (M5)
47. select Skull Archfiend of Chaos (M1)
48. Yes
49. Activate Purification Power Patron (M5): Add 1 "Theorealize" card from your Deck to your hand
50. Selected Theorealize Medius (Deck)
51. Selected Nervedo the Shadebeast Power Patron (Extra Deck)
52. Activate Theorealize Medius (hand): If a "Power Patron" card is on the field: You can Special Summon this card from your hand, then you can add 1 "Theorealize" Spell/Trap from your Deck to your hand
53. Yes
54. Selected Theorealize Liberation (Deck)
55. Activate Medius the Pure (GY): Shuffle 1 monster from your hand or face-up field into the Deck, and if you do, Special Summon this card
56. Selected Nervedo the Shadebeast Power Patron (hand)
57. Activate Theorealize Liberation (hand): Add to your hand, or Special Summon, 1 monster from your Deck with 300 ATK/200 DEF
58. Selected Nervedo the Shadebeast Power Patron (Deck)
59. Special Summon it
60. Activate Nervedo the Shadebeast Power Patron (M3): Special Summon 1 "Nerva the Power Patron of Creation" from your Extra Deck
61. Selected Nerva the Power Patron of Creation (Extra Deck)
62. Link Summon S:P Little Knight (Extra Deck)
63. select Purification Power Patron (M5)
64. select Medius the Pure (M2)
65. Yes
66. Special Summon 1 "Diactorus" monster
67. Selected Artmage Diactorus (Extra Deck)

End board:  LP 8000 | Hand 3 | Deck 33 | Extra 10 | GY 4 | Banished 7   Monsters: M1: Artmage Diactorus Lv8 2800/2500 ATK || M3: Nerva the Power Patron of Creation Lv10 3300/3300 ATK || M4: Artmage Non-Finito Lv7 2400/1500 ATK || M5: S:P Little Knight L2←→ 1600  || EMZ-R: Medicurius the Power Patron of Illusions L3↙↓↘ 3000    Spell/Trap: S1: Mind Shuffle || S2: Artmage Impasto -Recapture- (Set)   GY: Light and Darkness Ritual, Purification Power Patron, Skull Archfiend of Chaos, Purification Power Patron   Banished: Black Chaos, Pendulum Treasure (face-down), Apprentice Illusion Magician (face-down), Fiendsmith Engraver (face-down), Theorealize Liberation, Medius the Pure, Theorealize Medius   Hand: Dr

## Order 3: best 5.85 (ss_panama 7.82, elfnote 3.14, despia 0.63, angelechy 7.43, worst 0.63) — from search
Others: tries Activate Prohibited Power Patron Portal - Terminus 4.32 · opening lanes 3.21 · bc1 2.54 · tries Activate Fiendsmith's Tract 1.25

1. Activate Black Chaos (hand): Special Summon ("Black Chaos")
2. Selected Mind Shuffle (Deck)
3. Activate Mind Shuffle (S1): Add 1 appropriate monster to your hand
4. Selected Skull Archfiend of Chaos (Deck)
5. Selected Skull Archfiend of Chaos (hand)
6. Yes
7. Selected Light and Darkness Ritual (Deck)
8. Selected Magician of Dark Chaos - Black Chaos (Deck)
9. Normal Summon Medius the Pure (hand)
10. Yes
11. Selected Nervedo the Shadebeast Power Patron (Deck)
12. Special Summon it
13. Activate Nervedo the Shadebeast Power Patron (M1): Special Summon 1 "Nerva the Power Patron of Creation" from your Extra Deck
14. Selected Nerva the Power Patron of Creation (Extra Deck)
15. Yes
16. Selected Junoldo the Shadespirit Power Patron (Deck)
17. Activate Junoldo the Shadespirit Power Patron (M2): Special Summon 1 "Junora the Power Patron of Tuning" from your Extra Deck
18. Selected Junora the Power Patron of Tuning (Extra Deck)
19. Yes
20. Selected Nervedo the Shadebeast Power Patron (Extra Deck)
21. Activate Light and Darkness Ritual (GY): Add both this card and 1 card that mentions "Light and Darkness Ritual" from your GY to your hand
22. Selected Black Chaos (GY)
23. Special Summon (procedure) Artmage Non-Finito (Extra Deck)
24. Selected Light and Darkness Ritual (hand)
25. Selected Nervedo the Shadebeast Power Patron (hand)
26. Yes
27. Selected Artmage Impasto -Recapture- (Deck)
28. Link Summon Purification Power Patron (Extra Deck)
29. select Medius the Pure (M3)
30. select Junora the Power Patron of Tuning (EMZ-R)
31. Yes
32. Selected Theorealize Medius (Deck)
33. Activate Skull Archfiend of Chaos (GY): Special Summon this card
34. select Junora the Power Patron of Tuning (GY)
35. select Medius the Pure (GY)
36. select Light and Darkness Ritual (GY)
37. Default order
38. Activate Theorealize Medius (hand): If a "Power Patron" card is on the field: You can Special Summon this card from your hand, then you can add 1 "Theorealize" Spell/Trap from your Deck to your hand
39. Yes
40. Selected Theorealize Liberation (Deck)
41. Activate Purification Power Patron (EMZ-L): Link Summon including this card as material
42. Selected Medicurius the Power Patron of Illusions (Extra Deck)
43. select Skull Archfiend of Chaos (M5)
44. Finish selection
45. Special Summon (procedure) Black Chaos (hand)
46. select Magician of Dark Chaos - Black Chaos (hand)
47. Special Summon (procedure) Dark Magician of Destruction (Extra Deck)
48. Selected Black Chaos (M5)
49. Yes
50. Special Summon 1 "Diactorus" monster
51. Activate Dark Magician of Destruction (M5): Add 1 "Dark Magician" or 1 card that mentions it from your Deck to your hand
52. Selected Apprentice Illusion Magician (Deck)
53. Selected Artmage Diactorus (Extra Deck)

End board:  LP 8000 | Hand 4 | Deck 31 | Extra 10 | GY 3 | Banished 8   Monsters: M1: Nerva the Power Patron of Creation Lv10 3300/3300 ATK || M3: Artmage Diactorus Lv8 2800/2500 ATK || M4: Artmage Non-Finito Lv7 2400/1500 ATK || M5: Dark Magician of Destruction Lv8 2800/2600 ATK || EMZ-R: Medicurius the Power Patron of Illusions L3↙↓↘ 3000    Spell/Trap: S1: Mind Shuffle || S2: Artmage Impasto -Recapture- (Set) || S3: Theorealize Liberation (Set)   GY: Nervedo the Shadebeast Power Patron, Skull Archfiend of Chaos, Purification Power Patron   Banished: Pendulum Treasure (face-down), Pendulum Treasure (face-down), Fiendsmith's Tract (face-down), Theorealize Medius (face-down), Medius the Pure (face-down

## Order 4: best 6.52 (ss_panama 6.59, elfnote 5.21, despia 4.4, angelechy 9.45, worst 0.78) — from opening lanes
Others: search 6.43 · tries Normal Summon Ars Magna of Purification and Corruption 6.12 · tries Activate Light and Darkness Ritual 3.1 · bc1 2.71 · bc1 2.15

1. Activate Black Chaos (hand): Special Summon ("Black Chaos")
2. Selected Mind Shuffle (Deck)
3. Normal Summon Medius the Pure (hand)
4. Yes
5. Activate Mind Shuffle (S1): Add 1 appropriate monster to your hand
6. Selected Skull Archfiend of Chaos (Deck)
7. Selected Skull Archfiend of Chaos (hand)
8. Selected Nervedo the Shadebeast Power Patron (Deck)
9. Special Summon it
10. Yes
11. Selected Light and Darkness Ritual (Deck)
12. Selected Magician of Dark Chaos - Black Chaos (Deck)
13. Activate Nervedo the Shadebeast Power Patron (M3): Special Summon 1 "Nerva the Power Patron of Creation" from your Extra Deck
14. Selected Nerva the Power Patron of Creation (Extra Deck)
15. Yes
16. Selected Junoldo the Shadespirit Power Patron (Deck)
17. Activate Junoldo the Shadespirit Power Patron (M1): Special Summon 1 "Junora the Power Patron of Tuning" from your Extra Deck
18. Selected Junora the Power Patron of Tuning (Extra Deck)
19. Yes
20. Selected Nervedo the Shadebeast Power Patron (Extra Deck)
21. Activate Light and Darkness Ritual (GY): Add both this card and 1 card that mentions "Light and Darkness Ritual" from your GY to your hand
22. Selected Black Chaos (GY)
23. Special Summon (procedure) Artmage Non-Finito (Extra Deck)
24. Selected Light and Darkness Ritual (hand)
25. Selected Nervedo the Shadebeast Power Patron (hand)
26. Yes
27. Selected Artmage Impasto -Recapture- (Deck)
28. Link Summon Purification Power Patron (Extra Deck)
29. select Medius the Pure (M4)
30. select Junora the Power Patron of Tuning (M5)
31. Yes
32. Selected Theorealize Medius (Deck)
33. Activate Medius the Pure (GY): Shuffle 1 monster from your hand or face-up field into the Deck, and if you do, Special Summon this card
34. Selected Magician of Dark Chaos - Black Chaos (hand)
35. Activate Theorealize Medius (hand): If a "Power Patron" card is on the field: You can Special Summon this card from your hand, then you can add 1 "Theorealize" Spell/Trap from your Deck to your hand
36. Yes
37. Selected Theorealize Past Lull (Deck)
38. Activate Purification Power Patron (EMZ-L): Link Summon including this card as material
39. Selected Medicurius the Power Patron of Illusions (Extra Deck)
40. select Medius the Pure (M4)
41. Finish selection
42. Yes
43. Special Summon 1 "Diactorus" monster
44. Selected Artmage Diactorus (Extra Deck)
45. Activate Skull Archfiend of Chaos (GY): Special Summon this card
46. select Nervedo the Shadebeast Power Patron (GY)
47. select Purification Power Patron (GY)
48. select Light and Darkness Ritual (GY)
49. Default order
50. Activate Theorealize Past Lull (hand): Special Summon 1 "Medius the Pure" from your hand or Deck
51. Selected Medius the Pure (Deck)
52. Synchro Summon Chaos Angel (Extra Deck)
53. select Skull Archfiend of Chaos (M5)
54. select Medius the Pure (M2)
55. No

End board:  LP 8000 | Hand 4 | Deck 31 | Extra 10 | GY 4 | Banished 8   Monsters: M1: Artmage Non-Finito Lv7 2400/1500 ATK || M3: Nerva the Power Patron of Creation Lv10 3300/3300 ATK || M4: Artmage Diactorus Lv8 2800/2500 DEF || M5: Chaos Angel Lv10 3500/2800 ATK || EMZ-R: Medicurius the Power Patron of Illusions L3↙↓↘ 3000    Spell/Trap: S1: Mind Shuffle || S2: Artmage Impasto -Recapture- (Set)   GY: Junora the Power Patron of Tuning, Theorealize Past Lull, Medius the Pure, Skull Archfiend of Chaos   Banished: Dark Magical Circle (face-down), Artmage Vandalism -Assault- (face-down), Ars Magna of Infinity and Finity (face-down), Medius the Pure (face-down), Fiendsmith Engraver (face-down), Theorealize

## Order 5: best 6.56 (ss_panama 6.9, elfnote null, despia -0.4, angelechy 9.52, worst -0.4) — from search
Others: search → new early order 5.16 · search → new early order 4.87 · search → new ending 3.23 · search → new ending 2.92 · opening lanes 2.83 · tries Normal Summon Nervedo the Shadebeast Power Patron 2.56 · bc1 2.15 · tries Activate Pendulum Treasure 2.03

1. Activate Black Chaos (hand): Special Summon ("Black Chaos")
2. Selected Mind Shuffle (Deck)
3. Normal Summon Medius the Pure (hand)
4. Yes
5. Activate Mind Shuffle (S1): Add 1 appropriate monster to your hand
6. Selected Skull Archfiend of Chaos (Deck)
7. Selected Skull Archfiend of Chaos (hand)
8. Selected Nervedo the Shadebeast Power Patron (Deck)
9. Special Summon it
10. Yes
11. Selected Light and Darkness Ritual (Deck)
12. Selected Magician of Dark Chaos - Black Chaos (Deck)
13. Activate Light and Darkness Ritual (GY): Add both this card and 1 card that mentions "Light and Darkness Ritual" from your GY to your hand
14. Selected Black Chaos (GY)
15. Activate Nervedo the Shadebeast Power Patron (M2): Special Summon 1 "Nerva the Power Patron of Creation" from your Extra Deck
16. Selected Nerva the Power Patron of Creation (Extra Deck)
17. Yes
18. Selected Junoldo the Shadespirit Power Patron (Deck)
19. Activate Junoldo the Shadespirit Power Patron (M5): Special Summon 1 "Junora the Power Patron of Tuning" from your Extra Deck
20. Selected Junora the Power Patron of Tuning (Extra Deck)
21. Yes
22. Selected Nervedo the Shadebeast Power Patron (Extra Deck)
23. Special Summon (procedure) Artmage Non-Finito (Extra Deck)
24. Selected Light and Darkness Ritual (hand)
25. Selected Nervedo the Shadebeast Power Patron (hand)
26. Yes
27. Selected Artmage Impasto -Recapture- (Deck)
28. Special Summon (procedure) Black Chaos (hand)
29. select Magician of Dark Chaos - Black Chaos (hand)
30. Special Summon (procedure) Dark Magician of Destruction (Extra Deck)
31. Selected Black Chaos (M2)
32. Yes
33. Selected Apprentice Illusion Magician (Deck)
34. Link Summon Purification Power Patron (Extra Deck)
35. select Dark Magician of Destruction (M2)
36. select Junora the Power Patron of Tuning (M3)
37. Yes
38. Selected Theorealize Medius (Deck)
39. Activate Theorealize Medius (hand): If a "Power Patron" card is on the field: You can Special Summon this card from your hand, then you can add 1 "Theorealize" Spell/Trap from your Deck to your hand
40. Yes
41. Selected Theorealize Liberation (Deck)
42. Activate Theorealize Liberation (hand): Add to your hand, or Special Summon, 1 monster from your Deck with 300 ATK/200 DEF
43. Activate Purification Power Patron (EMZ-R): Link Summon including this card as material
44. Selected Medicurius the Power Patron of Illusions (Extra Deck)
45. select Medius the Pure (M1)
46. Finish selection
47. Selected Griffoh (Deck)
48. Special Summon it
49. Activate Skull Archfiend of Chaos (GY): Special Summon this card
50. select Light and Darkness Ritual (GY)
51. select Theorealize Liberation (GY)
52. select Purification Power Patron (GY)
53. Default order
54. Activate Medius the Pure (GY): Shuffle 1 monster from your hand or face-up field into the Deck, and if you do, Special Summon this card
55. Selected Skull Archfiend of Chaos (M3)
56. Link Summon S:P Little Knight (Extra Deck)
57. select Medius the Pure (M3)
58. select Griffoh (M1)
59. Yes
60. Special Summon 1 "Diactorus" monster
61. Selected Artmage Diactorus (Extra Deck)

End board:  LP 8000 | Hand 4 | Deck 31 | Extra 9 | GY 4 | Banished 9   Monsters: M2: Artmage Diactorus Lv8 2800/2500 ATK || M3: S:P Little Knight L2←→ 1600  || M4: Nerva the Power Patron of Creation Lv10 3300/3300 ATK || M5: Artmage Non-Finito Lv7 2400/1500 ATK || EMZ-R: Medicurius the Power Patron of Illusions L3↙↓↘ 3000    Spell/Trap: S1: Mind Shuffle || S2: Artmage Impasto -Recapture- (Set)   GY: Nervedo the Shadebeast Power Patron, Dark Magician of Destruction, Junora the Power Patron of Tuning, Griffoh   Banished: Prohibited Power Patron Portal - Terminus (face-down), Fiendsmith Engraver (face-down), Ars Magna of Purification and Corruption (face-down), Theorealize Medius (face-down), Plundered Po

## Order 6: best 7.37 (ss_panama 4.53, elfnote 10.05, despia 6.99, angelechy 9.7, worst 1.72) — from search
Others: bc1 7.12 · tries Activate Artmage Graflare 4.73 · opening lanes 3.84 · tries Special Summon (procedure) Vidolium the Unstable Power Patron of Unity 3.5

1. Activate Black Chaos (hand): Special Summon ("Black Chaos")
2. Selected Mind Shuffle (Deck)
3. Activate Mind Shuffle (S1): Add 1 appropriate monster to your hand
4. Selected Skull Archfiend of Chaos (Deck)
5. Selected Skull Archfiend of Chaos (hand)
6. Yes
7. Selected Light and Darkness Ritual (Deck)
8. Selected Magician of Dark Chaos - Black Chaos (Deck)
9. Activate Light and Darkness Ritual (GY): Add both this card and 1 card that mentions "Light and Darkness Ritual" from your GY to your hand
10. Selected Black Chaos (GY)
11. Activate Light and Darkness Ritual (hand): Ritual Summon 1 "Magician of Dark Chaos - Black Chaos" or "Black Luster Soldier - Soldier of Light and Darkness" from your hand
12. Selected Magician of Dark Chaos - Black Chaos (hand)
13. Selected Black Chaos (hand) value 8
14. Yes
15. Selected Light and Darkness Ritual (GY)
16. Normal Summon Medius the Pure (hand)
17. Yes
18. Selected Nervedo the Shadebeast Power Patron (Deck)
19. Special Summon it
20. Special Summon (procedure) Artmage Non-Finito (Extra Deck)
21. Selected Light and Darkness Ritual (hand)
22. Selected Nervedo the Shadebeast Power Patron (M2)
23. Yes
24. Activate Artmage Non-Finito (M2): Set 1 "Artmage" Spell/Trap from your Deck
25. Selected Artmage Impasto -Recapture- (Deck)
26. Selected Theorealize Medius (Deck)
27. Link Summon Purification Power Patron (Extra Deck)
28. select Medius the Pure (M4)
29. select Theorealize Medius (M3)
30. Yes
31. Selected Theorealize Medius (Deck)
32. Activate Medius the Pure (GY): Shuffle 1 monster from your hand or face-up field into the Deck, and if you do, Special Summon this card
33. Selected Ash Blossom & Joyous Spring (hand)
34. Activate Theorealize Medius (hand): If a "Power Patron" card is on the field: You can Special Summon this card from your hand, then you can add 1 "Theorealize" Spell/Trap from your Deck to your hand
35. Yes
36. Selected Theorealize Liberation (Deck)
37. Activate Theorealize Liberation (hand): Add to your hand, or Special Summon, 1 monster from your Deck with 300 ATK/200 DEF
38. Activate Purification Power Patron (EMZ-L): Link Summon including this card as material
39. Selected Medicurius the Power Patron of Illusions (Extra Deck)
40. select Medius the Pure (M4)
41. Finish selection
42. Selected Nervedo the Shadebeast Power Patron (Deck)
43. Special Summon it
44. Yes
45. Special Summon 1 "Diactorus" monster
46. Selected Artmage Diactorus (Extra Deck)
47. Activate Skull Archfiend of Chaos (GY): Special Summon this card
48. select Light and Darkness Ritual (GY)
49. select Theorealize Liberation (GY)
50. select Purification Power Patron (GY)
51. Default order
52. Activate Nervedo the Shadebeast Power Patron (M3): Special Summon 1 "Nerva the Power Patron of Creation" from your Extra Deck
53. Selected Nerva the Power Patron of Creation (Extra Deck)

End board:  LP 8000 | Hand 2 | Deck 34 | Extra 13 | GY 2 | Banished 5   Monsters: M1: Magician of Dark Chaos - Black Chaos Lv8 2800/2600 ATK || M2: Artmage Non-Finito Lv7 2400/1500 DEF || M3: Nerva the Power Patron of Creation Lv10 3300/3300 ATK || M4: Artmage Diactorus Lv8 2800/2500 ATK || M5: Skull Archfiend of Chaos Lv6 2500/1200 ATK || EMZ-R: Medicurius the Power Patron of Illusions L3↙↓↘ 3000    Spell/Trap: S1: Mind Shuffle || S2: Artmage Impasto -Recapture- (Set)   GY: Black Chaos, Theorealize Medius   Banished: Medius the Pure, Theorealize Medius, Pendulum Treasure (face-down), Griffoh (face-down), Artmage Graflare (face-down)   Hand: Droll & Lock Bird, Ghost Ogre & Snow Rabbit   Extra Deck: 13 

## Order 7: best 7.64 (ss_panama 9.75, elfnote null, despia 5.49, angelechy 9.82, worst 0.48) — from search
Others: tries Activate Junoldo the Shadespirit Power Patron 6.63 · search → new early order 6.57 · search → new ending 6.56 · bc1 4.79 · search → new early order 4.54 · opening lanes 3.61 · tries Normal Summon Theorealize Medius 3.19 · search → new ending 0.79

1. Activate Black Chaos (hand): Special Summon ("Black Chaos")
2. Selected Mind Shuffle (Deck)
3. Activate Mind Shuffle (S1): Add 1 appropriate monster to your hand
4. Selected Skull Archfiend of Chaos (Deck)
5. Selected Skull Archfiend of Chaos (hand)
6. Yes
7. Selected Light and Darkness Ritual (Deck)
8. Selected Magician of Dark Chaos - Black Chaos (Deck)
9. Activate Light and Darkness Ritual (GY): Add both this card and 1 card that mentions "Light and Darkness Ritual" from your GY to your hand
10. Selected Black Chaos (GY)
11. Normal Summon Medius the Pure (hand)
12. Yes
13. Selected Nervedo the Shadebeast Power Patron (Deck)
14. Special Summon it
15. Activate Nervedo the Shadebeast Power Patron (M1): Special Summon 1 "Nerva the Power Patron of Creation" from your Extra Deck
16. Selected Nerva the Power Patron of Creation (Extra Deck)
17. Yes
18. Selected Junoldo the Shadespirit Power Patron (Deck)
19. Activate Junoldo the Shadespirit Power Patron (M4): Special Summon 1 "Junora the Power Patron of Tuning" from your Extra Deck
20. Selected Junora the Power Patron of Tuning (Extra Deck)
21. Yes
22. Selected Nervedo the Shadebeast Power Patron (Extra Deck)
23. Special Summon (procedure) Artmage Non-Finito (Extra Deck)
24. Selected Light and Darkness Ritual (hand)
25. Selected Nervedo the Shadebeast Power Patron (hand)
26. Yes
27. Selected Artmage Impasto -Recapture- (Deck)
28. Link Summon Purification Power Patron (Extra Deck)
29. select Medius the Pure (M3)
30. select Junora the Power Patron of Tuning (EMZ-R)
31. Yes
32. Selected Theorealize Medius (Deck)
33. Activate Skull Archfiend of Chaos (GY): Special Summon this card
34. select Medius the Pure (GY)
35. select Junora the Power Patron of Tuning (GY)
36. select Light and Darkness Ritual (GY)
37. Default order
38. Activate Theorealize Medius (hand): If a "Power Patron" card is on the field: You can Special Summon this card from your hand, then you can add 1 "Theorealize" Spell/Trap from your Deck to your hand
39. Yes
40. Selected Theorealize Past Lull (Deck)
41. Activate Theorealize Past Lull (hand): Special Summon 1 "Medius the Pure" from your hand or Deck
42. Selected Medius the Pure (Deck)
43. Activate Purification Power Patron (EMZ-R): Link Summon including this card as material
44. Selected Medicurius the Power Patron of Illusions (Extra Deck)
45. select Medius the Pure (M3)
46. Finish selection
47. Activate Medius the Pure (GY): Shuffle 1 monster from your hand or face-up field into the Deck, and if you do, Special Summon this card
48. Selected Magician of Dark Chaos - Black Chaos (hand)
49. Link Summon S:P Little Knight (Extra Deck)
50. select Medius the Pure (M3)
51. select Skull Archfiend of Chaos (M4)
52. Yes
53. Special Summon 1 "Diactorus" monster
54. Selected Artmage Diactorus (Extra Deck)

End board:  LP 8000 | Hand 4 | Deck 31 | Extra 10 | GY 4 | Banished 8   Monsters: M1: Nerva the Power Patron of Creation Lv10 3300/3300 ATK || M2: Artmage Non-Finito Lv7 2400/1500 ATK || M3: S:P Little Knight L2←→ 1600  || M5: Artmage Diactorus Lv8 2800/2500 ATK || EMZ-L: Medicurius the Power Patron of Illusions L3↙↓↘ 3000    Spell/Trap: S1: Mind Shuffle || S2: Artmage Impasto -Recapture- (Set)   GY: Nervedo the Shadebeast Power Patron, Theorealize Past Lull, Purification Power Patron, Skull Archfiend of Chaos   Banished: Infinite Impermanence (face-down), Small World (face-down), Vidolium the Unstable Power Patron of Unity (face-down), Pendulum Treasure (face-down), Ars Magna of Purification and Corru

## Order 8: best 6.71 (ss_panama 7.9, elfnote null, despia 0.88, angelechy 9.8, worst -1.78) — from search
Others: search → new early order 6.55 · opening lanes 6.33 · tries Activate Fiendsmith Engraver 5.86 · tries Activate Vidolium the Unstable Power Patron of Unity 5.57 · search → new ending 4.99 · bc1 4.65 · search → new early order 4.4 · search → new ending 3.28

1. Activate Black Chaos (hand): Special Summon ("Black Chaos")
2. Selected Mind Shuffle (Deck)
3. Normal Summon Medius the Pure (hand)
4. Yes
5. Activate Mind Shuffle (S1): Add 1 appropriate monster to your hand
6. Selected Skull Archfiend of Chaos (Deck)
7. Selected Skull Archfiend of Chaos (hand)
8. Selected Nervedo the Shadebeast Power Patron (Deck)
9. Special Summon it
10. Yes
11. Selected Light and Darkness Ritual (Deck)
12. Selected Magician of Dark Chaos - Black Chaos (Deck)
13. Activate Nervedo the Shadebeast Power Patron (M1): Special Summon 1 "Nerva the Power Patron of Creation" from your Extra Deck
14. Selected Nerva the Power Patron of Creation (Extra Deck)
15. Yes
16. Selected Junoldo the Shadespirit Power Patron (Deck)
17. Activate Light and Darkness Ritual (GY): Add both this card and 1 card that mentions "Light and Darkness Ritual" from your GY to your hand
18. Selected Skull Archfiend of Chaos (GY)
19. Activate Light and Darkness Ritual (hand): Ritual Summon 1 "Magician of Dark Chaos - Black Chaos" or "Black Luster Soldier - Soldier of Light and Darkness" from your hand
20. Selected Magician of Dark Chaos - Black Chaos (hand)
21. Selected Black Chaos (GY) value 8
22. Yes
23. Selected Light and Darkness Ritual (GY)
24. Activate Junoldo the Shadespirit Power Patron (M5): Special Summon 1 "Junora the Power Patron of Tuning" from your Extra Deck
25. Selected Junora the Power Patron of Tuning (Extra Deck)
26. Yes
27. Selected Nervedo the Shadebeast Power Patron (Extra Deck)
28. Special Summon (procedure) Artmage Non-Finito (Extra Deck)
29. Selected Light and Darkness Ritual (hand)
30. Selected Nervedo the Shadebeast Power Patron (hand)
31. Yes
32. Selected Artmage Impasto -Recapture- (Deck)
33. Link Summon Purification Power Patron (Extra Deck)
34. select Medius the Pure (M3)
35. select Junora the Power Patron of Tuning (M5)
36. Yes
37. Selected Theorealize Medius (Deck)
38. Activate Medius the Pure (GY): Shuffle 1 monster from your hand or face-up field into the Deck, and if you do, Special Summon this card
39. Selected Skull Archfiend of Chaos (hand)
40. Activate Theorealize Medius (hand): If a "Power Patron" card is on the field: You can Special Summon this card from your hand, then you can add 1 "Theorealize" Spell/Trap from your Deck to your hand
41. Yes
42. Selected Theorealize Past Lull (Deck)
43. Activate Purification Power Patron (EMZ-R): Link Summon including this card as material
44. Selected Medicurius the Power Patron of Illusions (Extra Deck)
45. select Medius the Pure (M3)
46. Finish selection
47. Yes
48. Special Summon 1 "Diactorus" monster
49. Selected Artmage Diactorus (Extra Deck)

End board:  LP 8000 | Hand 4 | Deck 30 | Extra 10 | GY 4 | Banished 9   Monsters: M1: Magician of Dark Chaos - Black Chaos Lv8 2800/2600 ATK || M2: Artmage Non-Finito Lv7 2400/1500 ATK || M3: Artmage Diactorus Lv8 2800/2500 ATK || M4: Nerva the Power Patron of Creation Lv10 3300/3300 ATK || EMZ-L: Medicurius the Power Patron of Illusions L3↙↓↘ 3000    Spell/Trap: S1: Mind Shuffle || S2: Artmage Impasto -Recapture- (Set)   GY: Light and Darkness Ritual, Nervedo the Shadebeast Power Patron, Junora the Power Patron of Tuning, Purification Power Patron   Banished: Artmage Vandalism -Assault- (face-down), Apprentice Illusion Magician (face-down), Fiendsmith's Tract (face-down), Black Chaos, Ars Magna of Pur

