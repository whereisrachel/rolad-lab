# Evolved lines — Black Chaos, Medius the Pure, Ash Blossom & Joyous Spring, Droll & Lock Bird, Ghost Ogre & Snow Rabbit (findlist-1100)
2026-11-25T06:45:52.475Z

8 deck orders (different face-down banishes / draws), 3 opponent hands x o_ss_panama + o_elfnote + o_despia + o_angelechy per line, 1 min searches, 3 mutation rounds.
Fitness = average margin after their turn (what you keep minus what they build; −10 more if they OTK). Higher is better.

**Best line per deck order: average 5.82** (worst order 2.95). Winner came from: tries Activate Prohibited Power Patron Portal - Terminus → new ending 1, bc1 → new ending → new early order 2, tries Normal Summon Theorealize Medius 1, opening lanes → new ending 1, search 1, opening lanes 1, bc1 → new ending 1

| seed line | works as written | its score when it works | seed start + search finish (all orders) |
|---|---|---|---|
| bc1 | 3/8 | 2.2 | 3.7 |

## Weak points found automatically
Cards whose face-down banish (by your own costs) hurt the best line most (average best line without vs with that card banished):

| card | orders where it was banished | drop |
|---|---|---|
| Fiendsmith Engraver | 4/8 | 2.33 |
| Nervedo the Shadebeast Power Patron | 3/8 | 2.31 |
| Prohibited Power Patron Portal - Terminus | 3/8 | 2.25 |
| Light and Darkness Ritual | 2/8 | 2.14 |
| Ars Magna - "Citrinitas" | 2/8 | 2.13 |
| Theorealize Past Lull | 2/8 | 2.05 |
| Artmage Finmel | 3/8 | 1.88 |
| Ash Blossom & Joyous Spring | 3/8 | 1.82 |
| Theorealize Medius | 2/8 | 0.99 |
| Infinite Impermanence | 3/8 | 0.94 |

Where the hand-designed lines broke (next step that no longer worked):
- bc1: Yes (3x)
- bc1: Impasto (2x)

List changes proposed for the list test (data/proposals-findlist-1100.json):
- +1 Fiendsmith Engraver, −1 Plundered Power Patron Plane - Vidolia — Fiendsmith Engraver: best line 2.33 worse when a cost banished it (4 of 8 orders) — Black Chaos
- +1 Prohibited Power Patron Portal - Terminus, −1 Artmage Vandalism -Assault- — Prohibited Power Patron Portal - Terminus: best line 2.25 worse when a cost banished it (3 of 8 orders) — Black Chaos
- +1 Light and Darkness Ritual, −1 Small World — Light and Darkness Ritual: best line 2.14 worse when a cost banished it (2 of 8 orders) — Black Chaos
- +1 Ars Magna - "Citrinitas", −1 Plundered Power Patron Plane - Vidolia — Ars Magna - "Citrinitas": best line 2.13 worse when a cost banished it (2 of 8 orders) — Black Chaos
- +1 Fiendsmith Engraver — Fiendsmith Engraver: best line 2.33 worse when a cost banished it (4 of 8 orders) — Black Chaos (add only: deck grows, up to 60)
- +1 Prohibited Power Patron Portal - Terminus — Prohibited Power Patron Portal - Terminus: best line 2.25 worse when a cost banished it (3 of 8 orders) — Black Chaos (add only: deck grows, up to 60)
- +1 Light and Darkness Ritual — Light and Darkness Ritual: best line 2.14 worse when a cost banished it (2 of 8 orders) — Black Chaos (add only: deck grows, up to 60)
- +1 Ars Magna - "Citrinitas" — Ars Magna - "Citrinitas": best line 2.13 worse when a cost banished it (2 of 8 orders) — Black Chaos (add only: deck grows, up to 60)

Effects the search had not used, tried on purpose (best result so far):
- Activate Prohibited Power Patron Portal - Terminus: 6.81
- Normal Summon Theorealize Medius: 5.47
- Activate Junoldo the Shadespirit Power Patron: 5.1
- Activate Vidolium the Unstable Power Patron of Unity: 4.71
- Activate Griffoh: 4.67
- Activate Medius the Pure: 4.6
- Normal Summon Nervedo the Shadebeast Power Patron: 4.5
- Activate Nervedo the Shadebeast Power Patron: 4.18

## Order 1: best 6.98 (ss_panama 9.75, elfnote 0.5, despia 4.9, angelechy 9.6, worst 0.05) — from tries Activate Prohibited Power Patron Portal - Terminus → new ending
Others: tries Activate Prohibited Power Patron Portal - Terminus 6.81 · opening lanes 6.71 · tries Activate Prohibited Power Patron Portal - Terminus → new ending 6.58 · bc1 5.17 · tries Activate Vidolium the Unstable Power Patron of Unity 4.71 · bc1 2.18 · search 1.86 · tries Activate Prohibited Power Patron Portal - Terminus → new early order -0.36

1. Normal Summon Medius the Pure (hand)
2. Yes
3. Selected Nervedo the Shadebeast Power Patron (Deck)
4. Special Summon it
5. Activate Nervedo the Shadebeast Power Patron (M4): Special Summon 1 "Nerva the Power Patron of Creation" from your Extra Deck
6. Selected Nerva the Power Patron of Creation (Extra Deck)
7. Yes
8. Selected Junoldo the Shadespirit Power Patron (Deck)
9. Activate Junoldo the Shadespirit Power Patron (M4): Special Summon 1 "Junora the Power Patron of Tuning" from your Extra Deck
10. Selected Junora the Power Patron of Tuning (Extra Deck)
11. Yes
12. Selected Nervedo the Shadebeast Power Patron (Extra Deck)
13. Activate Black Chaos (hand): Special Summon ("Black Chaos")
14. Selected Mind Shuffle (Deck)
15. Activate Mind Shuffle (S1): Add 1 appropriate monster to your hand
16. Selected Skull Archfiend of Chaos (Deck)
17. Selected Skull Archfiend of Chaos (hand)
18. Yes
19. Selected Light and Darkness Ritual (Deck)
20. Selected Black Luster Soldier - Soldier of Light and Darkness (Deck)
21. Activate Light and Darkness Ritual (GY): Add both this card and 1 card that mentions "Light and Darkness Ritual" from your GY to your hand
22. Selected Black Chaos (GY)
23. Special Summon (procedure) Artmage Non-Finito (Extra Deck)
24. Selected Light and Darkness Ritual (hand)
25. Selected Nervedo the Shadebeast Power Patron (hand)
26. Yes
27. Selected Artmage Impasto -Recapture- (Deck)
28. Special Summon (procedure) Black Chaos (hand)
29. select Black Luster Soldier - Soldier of Light and Darkness (hand)
30. Link Summon Purification Power Patron (Extra Deck)
31. select Medius the Pure (M1)
32. select Junora the Power Patron of Tuning (EMZ-R)
33. Yes
34. Selected Theorealize Medius (Deck)
35. Activate Skull Archfiend of Chaos (GY): Special Summon this card
36. select Light and Darkness Ritual (GY)
37. select Junora the Power Patron of Tuning (GY)
38. select Medius the Pure (GY)
39. Default order
40. Activate Theorealize Medius (hand): If a "Power Patron" card is on the field: You can Special Summon this card from your hand, then you can add 1 "Theorealize" Spell/Trap from your Deck to your hand
41. Yes
42. Selected Theorealize Liberation (Deck)
43. Special Summon (procedure) Dark Magician of Destruction (Extra Deck)
44. Selected Black Chaos (M4)
45. Yes
46. Special Summon 1 "Diactorus" monster
47. Activate Dark Magician of Destruction (M4): Add 1 "Dark Magician" or 1 card that mentions it from your Deck to your hand
48. Activate Purification Power Patron (EMZ-L): Link Summon including this card as material
49. Selected Medicurius the Power Patron of Illusions (Extra Deck)
50. select Skull Archfiend of Chaos (M5)
51. Finish selection
52. Selected Apprentice Illusion Magician (Deck)
53. Selected Artmage Diactorus (Extra Deck)
54. Special Summon (procedure) Apprentice Illusion Magician (hand)
55. select Theorealize Liberation (hand)
56. Link Summon S:P Little Knight (Extra Deck)
57. select Dark Magician of Destruction (M4)
58. select Apprentice Illusion Magician (M1)
59. Yes
60. Selected Purification Power Patron (GY)

End board:  LP 8000 | Hand 3 | Deck 31 | Extra 9 | GY 5 | Banished 9   Monsters: M2: Artmage Non-Finito Lv7 2400/1500 ATK || M3: Nerva the Power Patron of Creation Lv10 3300/3300 ATK || M4: S:P Little Knight L2←→ 1600  || M5: Artmage Diactorus Lv8 2800/2500 ATK || EMZ-R: Medicurius the Power Patron of Illusions L3↙↓↘ 3000    Spell/Trap: S1: Mind Shuffle || S2: Artmage Impasto -Recapture- (Set)   GY: Nervedo the Shadebeast Power Patron, Skull Archfiend of Chaos, Theorealize Liberation, Apprentice Illusion Magician, Dark Magician of Destruction   Banished: Medius the Pure (face-down), Fiendsmith's Tract (face-down), Ars Magna of Purification and Corruption (face-down), Artmage Vandalism -Assault- (face-d

## Order 2: best 7.3 (ss_panama 10.2, elfnote 5.85, despia 2.54, angelechy 10, worst 0.67) — from bc1 → new ending → new early order
Others: bc1 → new ending → new early order → new ending 7.06 · bc1 → new ending 6.53 · bc1 4.96 · bc1 3.08 · tries Normal Summon Ars Magna of Purification and Corruption 2.96 · search 2.52 · opening lanes 2.07 · tries Activate Artmage Diactorus 1.71

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
13. Activate Black Chaos (hand): Special Summon ("Black Chaos")
14. Selected Mind Shuffle (Deck)
15. Link Summon Purification Power Patron (Extra Deck)
16. select Junora the Power Patron of Tuning (M2)
17. select Medius the Pure (M1)
18. Yes
19. Selected Theorealize Medius (Deck)
20. Activate Theorealize Medius (hand): If a "Power Patron" card is on the field: You can Special Summon this card from your hand, then you can add 1 "Theorealize" Spell/Trap from your Deck to your hand
21. Activate Mind Shuffle (S1): Add 1 appropriate monster to your hand
22. Selected Skull Archfiend of Chaos (Deck)
23. Selected Skull Archfiend of Chaos (hand)
24. Yes
25. Selected Theorealize Past Lull (Deck)
26. Yes
27. Selected Light and Darkness Ritual (Deck)
28. Selected Magician of Dark Chaos - Black Chaos (Deck)
29. Special Summon (procedure) Artmage Non-Finito (Extra Deck)
30. Selected Theorealize Past Lull (hand)
31. Selected Nervedo the Shadebeast Power Patron (hand)
32. Yes
33. Selected Artmage Impasto -Recapture- (Deck)
34. Activate Theorealize Past Lull (GY): Special Summon 1 Fusion, Synchro, or Xyz Monster from your GY
35. Selected Junora the Power Patron of Tuning (GY)
36. Activate Light and Darkness Ritual (GY): Add both this card and 1 card that mentions "Light and Darkness Ritual" from your GY to your hand
37. Selected Skull Archfiend of Chaos (GY)
38. Activate Light and Darkness Ritual (hand): Ritual Summon 1 "Magician of Dark Chaos - Black Chaos" or "Black Luster Soldier - Soldier of Light and Darkness" from your hand
39. Selected Magician of Dark Chaos - Black Chaos (hand)
40. Selected Black Chaos (GY) value 8
41. Yes
42. Special Summon 1 "Diactorus" monster
43. Activate Magician of Dark Chaos - Black Chaos (M3): Add 1 Spell from your GY to your hand
44. Activate Purification Power Patron (EMZ-L): Link Summon including this card as material
45. Selected Medicurius the Power Patron of Illusions (Extra Deck)
46. select Junora the Power Patron of Tuning (M2)
47. Finish selection
48. Selected Light and Darkness Ritual (GY)
49. Selected Artmage Diactorus (Extra Deck)

End board:  LP 8000 | Hand 5 | Deck 29 | Extra 10 | GY 4 | Banished 9   Monsters: M1: Artmage Diactorus Lv8 2800/2500 ATK || M3: Magician of Dark Chaos - Black Chaos Lv8 2800/2600 ATK || M4: Artmage Non-Finito Lv7 2400/1500 ATK || M5: Nerva the Power Patron of Creation Lv10 3300/3300 ATK || EMZ-R: Medicurius the Power Patron of Illusions L3↙↓↘ 3000    Spell/Trap: S1: Mind Shuffle || S2: Artmage Impasto -Recapture- (Set)   GY: Medius the Pure, Nervedo the Shadebeast Power Patron, Junora the Power Patron of Tuning, Purification Power Patron   Banished: Pendulum Treasure (face-down), Fiendsmith's Tract (face-down), Pendulum Treasure (face-down), Ars Magna of Infinity and Finity (face-down), Pendulum Treas

## Order 3: best 5.47 (ss_panama 6.94, elfnote 3.31, despia 0.57, angelechy 8.6, worst 0.57) — from tries Normal Summon Theorealize Medius
Others: tries Activate Junoldo the Shadespirit Power Patron 5.1 · tries Normal Summon Theorealize Medius → new ending 3.72 · bc1 3.08 · tries Normal Summon Theorealize Medius → new ending 2.66 · search 1.76 · opening lanes 1.61 · tries Normal Summon Theorealize Medius → new early order 0.44

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
11. Normal Summon Medius the Pure (hand)
12. Yes
13. Selected Nervedo the Shadebeast Power Patron (Deck)
14. Special Summon it
15. Link Summon Purification Power Patron (Extra Deck)
16. select Medius the Pure (M1)
17. select Nervedo the Shadebeast Power Patron (M2)
18. Yes
19. Selected Junoldo the Shadespirit Power Patron (Deck)
20. Activate Junoldo the Shadespirit Power Patron (M4): Special Summon 1 "Junora the Power Patron of Tuning" from your Extra Deck
21. Selected Junora the Power Patron of Tuning (Extra Deck)
22. Yes
23. Selected Nervedo the Shadebeast Power Patron (Extra Deck)
24. Special Summon (procedure) Artmage Non-Finito (Extra Deck)
25. Selected Light and Darkness Ritual (hand)
26. Selected Nervedo the Shadebeast Power Patron (hand)
27. Yes
28. Selected Artmage Impasto -Recapture- (Deck)
29. Activate Skull Archfiend of Chaos (hand): Special Summon this card
30. select Black Chaos (GY)
31. select Nervedo the Shadebeast Power Patron (GY)
32. select Light and Darkness Ritual (GY)
33. Default order
34. Link Summon Purification Power Patron (Extra Deck)
35. select Junora the Power Patron of Tuning (M3)
36. select Skull Archfiend of Chaos (M4)
37. Yes
38. Activate Purification Power Patron (M2): Link Summon including this card as material
39. Selected Medicurius the Power Patron of Illusions (Extra Deck)
40. select Purification Power Patron (EMZ-L)
41. Finish selection
42. Selected Theorealize Medius (Deck)
43. Activate Theorealize Medius (hand): If a "Power Patron" card is on the field: You can Special Summon this card from your hand, then you can add 1 "Theorealize" Spell/Trap from your Deck to your hand
44. Yes
45. Selected Theorealize Past Lull (Deck)
46. Activate Medius the Pure (GY): Shuffle 1 monster from your hand or face-up field into the Deck, and if you do, Special Summon this card
47. Selected Magician of Dark Chaos - Black Chaos (hand)
48. Activate Theorealize Past Lull (hand): Special Summon 1 "Medius the Pure" from your hand or Deck
49. Selected Medius the Pure (Deck)
50. Link Summon S:P Little Knight (Extra Deck)
51. select Medius the Pure (M2)
52. select Medius the Pure (M5)
53. Yes
54. Special Summon 1 "Diactorus" monster
55. Selected Artmage Diactorus (Extra Deck)

End board:  LP 8000 | Hand 3 | Deck 35 | Extra 9 | GY 6 | Banished 5   Monsters: M1: Artmage Non-Finito Lv7 2400/1500 ATK || M2: S:P Little Knight L2←→ 1600  || M3: Artmage Diactorus Lv8 2800/2500 ATK || EMZ-L: Medicurius the Power Patron of Illusions L3↙↓↘ 3000    Spell/Trap: S1: Mind Shuffle || S2: Artmage Impasto -Recapture- (Set)   GY: Junora the Power Patron of Tuning, Skull Archfiend of Chaos, Purification Power Patron, Purification Power Patron, Theorealize Past Lull, Medius the Pure   Banished: Griffoh (face-down), Apprentice Illusion Magician (face-down), Pendulum Treasure (face-down), Medius the Pure, Theorealize Medius   Hand: Ash Blossom & Joyous Spring, Droll & Lock Bird, Ghost Ogre & Snow

## Order 4: best 8.05 (ss_panama 9.1, elfnote 5.71, despia 8.95, angelechy 8.95, worst 5.16) — from opening lanes → new ending
Others: opening lanes 5.11 · opening lanes → new ending → new ending 4.27 · opening lanes → new ending → new early order 4.12 · tries Activate Theorealize Past Lull 3.55 · bc1 3.08 · tries Activate Light and Darkness Ritual 2.54 · bc1 1.34 · search 1.27

1. Normal Summon Medius the Pure (hand)
2. Yes
3. Selected Nervedo the Shadebeast Power Patron (Deck)
4. Special Summon it
5. Activate Black Chaos (hand): Special Summon ("Black Chaos")
6. Selected Mind Shuffle (Deck)
7. Activate Mind Shuffle (S1): Add 1 appropriate monster to your hand
8. Selected Skull Archfiend of Chaos (Deck)
9. Selected Skull Archfiend of Chaos (hand)
10. Yes
11. Selected Light and Darkness Ritual (Deck)
12. Selected Magician of Dark Chaos - Black Chaos (Deck)
13. Activate Nervedo the Shadebeast Power Patron (M2): Special Summon 1 "Nerva the Power Patron of Creation" from your Extra Deck
14. Selected Nerva the Power Patron of Creation (Extra Deck)
15. Yes
16. Selected Junoldo the Shadespirit Power Patron (Deck)
17. Activate Junoldo the Shadespirit Power Patron (M3): Special Summon 1 "Junora the Power Patron of Tuning" from your Extra Deck
18. Selected Junora the Power Patron of Tuning (Extra Deck)
19. Yes
20. Selected Nervedo the Shadebeast Power Patron (Extra Deck)
21. Activate Light and Darkness Ritual (GY): Add both this card and 1 card that mentions "Light and Darkness Ritual" from your GY to your hand
22. Selected Skull Archfiend of Chaos (GY)
23. Activate Light and Darkness Ritual (hand): Ritual Summon 1 "Magician of Dark Chaos - Black Chaos" or "Black Luster Soldier - Soldier of Light and Darkness" from your hand
24. Selected Magician of Dark Chaos - Black Chaos (hand)
25. Selected Black Chaos (GY) value 8
26. Yes
27. Selected Light and Darkness Ritual (GY)
28. Special Summon (procedure) Artmage Non-Finito (Extra Deck)
29. Selected Light and Darkness Ritual (hand)
30. Selected Nervedo the Shadebeast Power Patron (hand)
31. Yes
32. Selected Artmage Impasto -Recapture- (Deck)
33. Activate Skull Archfiend of Chaos (hand): Special Summon this card
34. select Black Chaos (banishment)
35. select Nervedo the Shadebeast Power Patron (GY)
36. select Light and Darkness Ritual (GY)
37. Default order
38. Link Summon Purification Power Patron (Extra Deck)
39. select Medius the Pure (M1)
40. select Junora the Power Patron of Tuning (EMZ-L)
41. Yes
42. Selected Theorealize Medius (Deck)
43. Activate Theorealize Medius (hand): If a "Power Patron" card is on the field: You can Special Summon this card from your hand, then you can add 1 "Theorealize" Spell/Trap from your Deck to your hand
44. Yes
45. Selected Theorealize Past Lull (Deck)
46. Activate Purification Power Patron (EMZ-L): Link Summon including this card as material
47. Selected S:P Little Knight (Extra Deck)
48. select Skull Archfiend of Chaos (M5)
49. Yes
50. Selected Medius the Pure (GY)
51. Yes
52. Special Summon 1 "Diactorus" monster
53. Selected Artmage Diactorus (Extra Deck)
54. Activate Artmage Diactorus (M5): Change the battle position of 1 monster on the field
55. Selected Artmage Non-Finito (M4)
56. Set Spell/Trap Theorealize Past Lull
57. Activate Theorealize Past Lull (S3): Special Summon 1 "Medius the Pure" from your hand or Deck
58. Selected Medius the Pure (Deck)
59. Link Summon Medicurius the Power Patron of Illusions (Extra Deck)
60. select Medius the Pure (M1)
61. select S:P Little Knight (EMZ-R)
62. Finish selection

End board:  LP 8000 | Hand 3 | Deck 31 | Extra 9 | GY 6 | Banished 8   Monsters: M2: Nerva the Power Patron of Creation Lv10 3300/3300 ATK || M3: Magician of Dark Chaos - Black Chaos Lv8 2800/2600 ATK || M4: Artmage Non-Finito Lv7 2400/1500 DEF || M5: Artmage Diactorus Lv8 2800/2500 ATK || EMZ-R: Medicurius the Power Patron of Illusions L3↙↓↘ 3000    Spell/Trap: S1: Mind Shuffle || S2: Artmage Impasto -Recapture- (Set)   GY: Junora the Power Patron of Tuning, Skull Archfiend of Chaos, Purification Power Patron, Theorealize Past Lull, Medius the Pure, S:P Little Knight   Banished: Plundered Power Patron Plane - Vidolia (face-down), Black Luster Soldier - Soldier of Light and Darkness (face-down), Griffo

## Order 5: best 2.95 (ss_panama 3.75, elfnote -10.15, despia 6.28, angelechy 4.57, worst -10.15) — from search
Others: tries Activate Theorealize Liberation 2.77 · search → new early order 2.76 · tries Normal Summon Ars Magna of Infinity and Finity 2.72 · opening lanes 2.65 · bc1 2.11 · search → new ending 1.3 · search → new ending 0.2

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
16. Normal Summon Medius the Pure (hand)
17. Yes
18. Selected Nervedo the Shadebeast Power Patron (Deck)
19. Special Summon it
20. Special Summon (procedure) Artmage Non-Finito (Extra Deck)
21. Selected Light and Darkness Ritual (hand)
22. Selected Nervedo the Shadebeast Power Patron (M4)
23. Yes
24. Activate Artmage Non-Finito (M2): Set 1 "Artmage" Spell/Trap from your Deck
25. Selected Artmage Impasto -Recapture- (Deck)
26. Selected Artmage Finmel (Deck)

End board:  LP 8000 | Hand 4 | Deck 37 | Extra 15 | GY 1 | Banished 1   Monsters: M1: Medius the Pure Lv4 1800/1800 ATK || M2: Artmage Non-Finito Lv7 2400/1500 ATK || M3: Magician of Dark Chaos - Black Chaos Lv8 2800/2600 ATK || M4: Artmage Finmel Lv7 2400/1500 ATK   Spell/Trap: S1: Mind Shuffle || S2: Artmage Impasto -Recapture- (Set)   GY: Light and Darkness Ritual   Banished: Black Chaos   Hand: Skull Archfiend of Chaos, Droll & Lock Bird, Ash Blossom & Joyous Spring, Ghost Ogre & Snow Rabbit   Extra Deck: 15 cards (view --ed to list)

## Order 6: best 5.49 (ss_panama 4.04, elfnote 6.28, despia 5.48, angelechy 6.68, worst -2.76) — from bc1 → new ending → new early order
Others: bc1 → new ending 5.22 · bc1 4.97 · tries Activate Medius the Pure 4.6 · tries Normal Summon Nervedo the Shadebeast Power Patron 4.5 · opening lanes 3.11 · search 2.21 · bc1 → new ending → new early order → new ending 0.65

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
25. Selected Ars Magna - "Citrinitas" (Deck)
26. Activate Ars Magna - "Citrinitas" (S1): activate this card
27. Activate Purification Power Patron (EMZ-L): Link Summon including this card as material
28. Selected Medicurius the Power Patron of Illusions (Extra Deck)
29. select Artmage Non-Finito (M3)
30. Finish selection
31. Activate Ars Magna - "Citrinitas" (S1): Add 1 "Medius" or "Ars Magna" monster from your Deck to your hand
32. Selected Ars Magna of Infinity and Finity (Deck)
33. Activate Theorealize Past Lull (GY): Special Summon 1 Fusion, Synchro, or Xyz Monster from your GY
34. Selected Junora the Power Patron of Tuning (GY)
35. Activate Ars Magna of Infinity and Finity (hand): You can banish this card from your hand; add 1 non-Warrior "Ars Magna" monster from your Deck to your hand
36. Selected Ars Magna of Purification and Corruption (Deck)
37. Yes
38. Special Summon 1 "Diactorus" monster
39. Selected Artmage Diactorus (Extra Deck)
40. No
41. Activate Ars Magna of Purification and Corruption (hand): You can banish this card from your hand; add 1 "Ars Magna" Spell/Trap from your Deck to your hand
42. Selected Ars Magna - "Citrinitas" (Deck)
43. Set Spell/Trap Ars Magna - "Citrinitas"
44. Activate Ars Magna - "Citrinitas" (S2): activate this card
45. Activate Black Chaos (hand): Special Summon ("Black Chaos")
46. Selected Mind Shuffle (Deck)
47. Activate Mind Shuffle (S3): Add 1 appropriate monster to your hand
48. Selected Skull Archfiend of Chaos (Deck)
49. Selected Skull Archfiend of Chaos (hand)
50. Yes
51. Selected Light and Darkness Ritual (Deck)
52. Selected Magician of Dark Chaos - Black Chaos (Deck)
53. Activate Skull Archfiend of Chaos (GY): Special Summon this card
54. select Artmage Non-Finito (GY)
55. select Light and Darkness Ritual (GY)
56. select Black Chaos (GY)
57. Default order
58. Activate Artmage Diactorus (M4): Change the battle position of 1 monster on the field
59. Selected Skull Archfiend of Chaos (M3)
60. Link Summon S:P Little Knight (Extra Deck)
61. select Skull Archfiend of Chaos (M3)
62. select Junora the Power Patron of Tuning (M2)
63. Activate Ars Magna of Purification and Corruption (banishment): Special Summon this card
64. Activate Ars Magna of Infinity and Finity (banishment): Special Summon this card
65. Activate S:P Little Knight (M3): Banish 1 card on the field or GY
66. Selected Ars Magna - "Citrinitas" (S1)

End board:  LP 8000 | Hand 4 | Deck 28 | Extra 10 | GY 5 | Banished 9   Monsters: M1: Ars Magna of Infinity and Finity Lv8 1000/2400 ATK || M2: Ars Magna of Purification and Corruption Lv8 1000/2100 ATK || M3: S:P Little Knight L2←→ 1600  || M4: Artmage Diactorus Lv8 2800/2500 ATK || M5: Nerva the Power Patron of Creation Lv10 3300/3300 ATK || EMZ-L: Medicurius the Power Patron of Illusions L3↙↓↘ 9000    Spell/Trap: S2: Ars Magna - "Citrinitas" || S3: Mind Shuffle   GY: Medius the Pure, Nervedo the Shadebeast Power Patron, Purification Power Patron, Junora the Power Patron of Tuning, Skull Archfiend of Chaos   Banished: Small World (face-down), Artmage Impasto -Recapture- (face-down), Fiendsmith Engrav

## Order 7: best 5.6 (ss_panama 3.15, elfnote 2.95, despia 5.47, angelechy 8.2, worst 2.8) — from opening lanes
Others: search 3.68 · bc1 2.01 · tries Activate Artmage Vandalism -Assault- 1.7 · tries Activate Artmage Vandalism -Assault- 1.42

1. Normal Summon Medius the Pure (hand)
2. Yes
3. Selected Nervedo the Shadebeast Power Patron (Deck)
4. Special Summon it
5. Activate Nervedo the Shadebeast Power Patron (M1): Special Summon 1 "Nerva the Power Patron of Creation" from your Extra Deck
6. Selected Nerva the Power Patron of Creation (Extra Deck)
7. Yes
8. Selected Artmage Finmel (Deck)
9. Link Summon Purification Power Patron (Extra Deck)
10. select Medius the Pure (M3)
11. select Nerva the Power Patron of Creation (EMZ-L)
12. Yes
13. Selected Theorealize Medius (Deck)
14. Activate Medius the Pure (GY): Shuffle 1 monster from your hand or face-up field into the Deck, and if you do, Special Summon this card
15. Selected Droll & Lock Bird (hand)
16. Activate Purification Power Patron (EMZ-R): Link Summon including this card as material
17. Selected Medicurius the Power Patron of Illusions (Extra Deck)
18. select Medius the Pure (M3)
19. Finish selection
20. Activate Theorealize Medius (hand): If a "Power Patron" card is on the field: You can Special Summon this card from your hand, then you can add 1 "Theorealize" Spell/Trap from your Deck to your hand
21. Yes
22. Selected Theorealize Liberation (Deck)
23. Special Summon (procedure) Artmage Non-Finito (Extra Deck)
24. Selected Theorealize Liberation (hand)
25. Selected Artmage Finmel (M4)
26. Yes
27. Selected Artmage Impasto -Recapture- (Deck)
28. Activate Black Chaos (hand): Special Summon ("Black Chaos")
29. Selected Mind Shuffle (Deck)
30. Activate Mind Shuffle (S2): Add 1 appropriate monster to your hand
31. Selected Skull Archfiend of Chaos (Deck)
32. Selected Skull Archfiend of Chaos (hand)
33. Yes
34. Selected Light and Darkness Ritual (Deck)
35. Selected Magician of Dark Chaos - Black Chaos (Deck)
36. Activate Light and Darkness Ritual (GY): Add both this card and 1 card that mentions "Light and Darkness Ritual" from your GY to your hand
37. Selected Black Chaos (GY)
38. Special Summon (procedure) Black Chaos (hand)
39. select Magician of Dark Chaos - Black Chaos (hand)
40. Special Summon (procedure) Dark Magician of Destruction (Extra Deck)
41. Selected Black Chaos (M1)
42. Yes
43. Special Summon 1 "Diactorus" monster
44. Selected Artmage Diactorus (Extra Deck)
45. Activate Skull Archfiend of Chaos (GY): Special Summon this card
46. select Purification Power Patron (GY)
47. select Artmage Finmel (GY)
48. select Black Chaos (banishment)
49. Default order

End board:  LP 8000 | Hand 3 | Deck 36 | Extra 11 | GY 1 | Banished 6   Monsters: M1: Artmage Diactorus Lv8 2800/2500 ATK || M2: Skull Archfiend of Chaos Lv6 2500/1200 ATK || M3: Artmage Non-Finito Lv7 2400/1500 ATK || M4: Dark Magician of Destruction Lv8 2800/2600 ATK || EMZ-L: Medicurius the Power Patron of Illusions L3↙↓↘ 3000    Spell/Trap: S1: Artmage Impasto -Recapture- (Set) || S2: Mind Shuffle   GY: Nerva the Power Patron of Creation   Banished: Ash Blossom & Joyous Spring (face-down), Prohibited Power Patron Portal - Terminus (face-down), Pendulum Treasure (face-down), Medius the Pure, Theorealize Liberation, Theorealize Medius   Hand: Ghost Ogre & Snow Rabbit, Ash Blossom & Joyous Spring, Lig

## Order 8: best 4.68 (ss_panama 0.82, elfnote 7.75, despia 1.08, angelechy 7.35, worst -0.05) — from bc1 → new ending
Others: bc1 4.23 · search 4.12 · opening lanes 4.03 · tries Normal Summon Junoldo the Shadespirit Power Patron 3.6 · bc1 → new ending 3.43 · tries Activate Fiendsmith's Tract 3.3 · bc1 → new early order 0.01

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
25. Selected Artmage Vandalism -Assault- (Deck)
26. Activate Theorealize Past Lull (GY): Special Summon 1 Fusion, Synchro, or Xyz Monster from your GY
27. Selected Junora the Power Patron of Tuning (GY)
28. Activate Purification Power Patron (EMZ-L): Link Summon including this card as material
29. Selected Medicurius the Power Patron of Illusions (Extra Deck)
30. select Junora the Power Patron of Tuning (M2)
31. Finish selection
32. Activate Black Chaos (hand): Special Summon ("Black Chaos")
33. Selected Mind Shuffle (Deck)
34. Activate Artmage Vandalism -Assault- (S1): When this card is activated: You can add 1 "Medius the Pure" from your Deck to your hand
35. Yes
36. Selected Medius the Pure (Deck)
37. Activate Medius the Pure (GY): Shuffle 1 monster from your hand or face-up field into the Deck, and if you do, Special Summon this card
38. Selected Medius the Pure (hand)
39. Activate Mind Shuffle (S2): Add 1 appropriate monster to your hand
40. Selected Skull Archfiend of Chaos (Deck)
41. Selected Skull Archfiend of Chaos (hand)
42. Yes
43. Selected Light and Darkness Ritual (Deck)
44. Selected Magician of Dark Chaos - Black Chaos (Deck)
45. Activate Light and Darkness Ritual (GY): Add both this card and 1 card that mentions "Light and Darkness Ritual" from your GY to your hand
46. Selected Skull Archfiend of Chaos (GY)
47. Set Spell/Trap Light and Darkness Ritual
48. Activate Light and Darkness Ritual (S3): Ritual Summon 1 "Magician of Dark Chaos - Black Chaos" or "Black Luster Soldier - Soldier of Light and Darkness" from your hand
49. Selected Magician of Dark Chaos - Black Chaos (hand)
50. Selected Black Chaos (GY) value 8
51. Yes
52. Special Summon 1 "Diactorus" monster
53. Activate Magician of Dark Chaos - Black Chaos (M2): Add 1 Spell from your GY to your hand
54. Selected Light and Darkness Ritual (GY)
55. Selected Artmage Diactorus (Extra Deck)

End board:  LP 8000 | Hand 5 | Deck 29 | Extra 10 | GY 3 | Banished 9   Monsters: M1: Medius the Pure Lv4 1800/1800 ATK || M2: Magician of Dark Chaos - Black Chaos Lv8 2800/2600 ATK || M3: Artmage Diactorus Lv8 2800/2500 ATK || M4: Artmage Non-Finito Lv7 2400/1500 ATK || M5: Nerva the Power Patron of Creation Lv10 3300/3300 ATK || EMZ-L: Medicurius the Power Patron of Illusions L3↙↓↘ 3000    Spell/Trap: S1: Artmage Vandalism -Assault- || S2: Mind Shuffle   GY: Nervedo the Shadebeast Power Patron, Junora the Power Patron of Tuning, Purification Power Patron   Banished: Fiendsmith Engraver (face-down), Nervedo the Shadebeast Power Patron (face-down), Artmage Impasto -Recapture- (face-down), Pendulum Trea

