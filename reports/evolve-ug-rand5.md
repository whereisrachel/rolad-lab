# Evolved lines — Infinite Impermanence, Small World, Medius the Pure, Artmage Graflare, Dark Magical Circle (findlist-1100)
2026-11-26T19:27:49.554Z

8 deck orders (different face-down banishes / draws), 3 opponent hands x o_ss_panama + o_elfnote + o_despia + o_angelechy per line, 15 min searches, 4 mutation rounds.
Fitness = end-board interruptions (the lab scorer, src/disrupt.mjs: wipe 2, negate 1-1.5, banish/protection less; hand traps kept count 1 each). The winner of each order is also played into the opponent decks: margin after their turn shown beside it.

**Margin after their turn (winners): average null** (worst 99)

**Best line per deck order: average 14.25** (worst order 13.5). Winner came from: tries Activate Junoldo the Shadespirit Power Patron → new ending 1, tries Normal Summon Junoldo the Shadespirit Power Patron 1, tries Activate Junoldo the Shadespirit Power Patron → new early order 1, tries Activate Prohibited Power Patron Portal - Terminus → new early order 1

## Weak points found automatically
Cards whose face-down banish (by your own costs) hurt the best line most (average best line without vs with that card banished):

| card | orders where it was banished | drop |
|---|---|---|
| Fiendsmith's Tract | 2/8 | 0.55 |
| Light and Darkness Ritual | 2/8 | 0.55 |
| Ars Magna of Purification and Corruption | 3/8 | 0.47 |
| Ars Magna of Infinity and Finity | 2/8 | 0.4 |
| Artmage Finmel | 2/8 | 0.4 |
| Plundered Power Patron Plane - Vidolia | 3/8 | 0.27 |
| Nervedo the Shadebeast Power Patron | 3/8 | 0.27 |
| Ars Magna - "Citrinitas" | 3/8 | 0.27 |
| Prohibited Power Patron Portal - Terminus | 2/8 | -0.55 |
| Griffoh | 3/8 | -1 |

List changes proposed for the list test (data/proposals-findlist-1100.json):
- +1 Fiendsmith's Tract, −1 Plundered Power Patron Plane - Vidolia — Fiendsmith's Tract: best line 0.55 worse when a cost banished it (2 of 8 orders) — Infinite Impermanence
- +1 Light and Darkness Ritual, −1 Artmage Vandalism -Assault- — Light and Darkness Ritual: best line 0.55 worse when a cost banished it (2 of 8 orders) — Infinite Impermanence
- +1 Fiendsmith's Tract — Fiendsmith's Tract: best line 0.55 worse when a cost banished it (2 of 8 orders) — Infinite Impermanence (add only: deck grows, up to 60)
- +1 Light and Darkness Ritual — Light and Darkness Ritual: best line 0.55 worse when a cost banished it (2 of 8 orders) — Infinite Impermanence (add only: deck grows, up to 60)

Effects the search had not used, tried on purpose (best result so far):
- Normal Summon Junoldo the Shadespirit Power Patron: 14.45
- Activate Junoldo the Shadespirit Power Patron: 14
- Activate Junoldo the Shadespirit Power Patron: 13.65
- Activate Junoldo the Shadespirit Power Patron: 13.6
- Activate Black Chaos: 13.45
- Activate Prohibited Power Patron Portal - Terminus: 13.35
- Normal Summon Ars Magna of Infinity and Finity: 13.35
- Normal Summon Artmage Graflare: 13.25

## Order 1: best 14.45 (, worst 14.45) — from tries Activate Junoldo the Shadespirit Power Patron → new ending
Others: tries Activate Junoldo the Shadespirit Power Patron 14 · tries Activate Junoldo the Shadespirit Power Patron → new ending 14 · tries Activate Junoldo the Shadespirit Power Patron → new ending → new early order 14 · tries Activate Junoldo the Shadespirit Power Patron 13.65 · tries Normal Summon Ars Magna of Infinity and Finity 13.35 · tries Activate Junoldo the Shadespirit Power Patron → new early order 13.35 · tries Normal Summon Artmage Graflare 13.25 · tries Special Summon (procedure) Nervedo the Shadebeast Power Patron 13.1 · search 12.7 · tries Activate Vidolium the Unstable Power Patron of Unity 12.4 · opening lanes 11.8

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
13. Special Summon (procedure) Artmage Non-Finito (Extra Deck)
14. Selected Dark Magical Circle (hand)
15. Selected Nervedo the Shadebeast Power Patron (hand)
16. Yes
17. Selected Artmage Impasto -Recapture- (Deck)
18. Activate Artmage Graflare (hand): Special Summon this card from your hand
19. Yes
20. Selected Ars Magna - "Citrinitas" (Deck)
21. Activate Ars Magna - "Citrinitas" (S2): activate this card
22. Activate Ars Magna - "Citrinitas" (S2): Add 1 "Medius" or "Ars Magna" monster from your Deck to your hand
23. Selected Theorealize Medius (Deck)
24. Activate Theorealize Medius (hand): If a "Power Patron" card is on the field: You can Special Summon this card from your hand, then you can add 1 "Theorealize" Spell/Trap from your Deck to your hand
25. Yes
26. Selected Theorealize Liberation (Deck)
27. Activate Theorealize Liberation (hand): Add to your hand, or Special Summon, 1 monster from your Deck with 300 ATK/200 DEF
28. Selected Griffoh (Deck)
29. Add the card(s) to your hand
30. Activate Griffoh (hand): Activate 1 of these effects
31. Set 1 card that mentions "Light and Darkness Ritual"
32. Selected Mind Shuffle (Deck)
33. Set Spell/Trap Small World
34. Activate Mind Shuffle (S3): activate this card
35. No
36. Activate Mind Shuffle (S3): Add 1 appropriate monster to your hand
37. Selected Skull Archfiend of Chaos (Deck)
38. Selected Skull Archfiend of Chaos (hand)
39. Yes
40. Selected Light and Darkness Ritual (Deck)
41. Selected Magician of Dark Chaos - Black Chaos (Deck)
42. Activate Light and Darkness Ritual (GY): Add both this card and 1 card that mentions "Light and Darkness Ritual" from your GY to your hand
43. Selected Griffoh (GY)
44. Activate Small World (S4): activate this card
45. Selected Griffoh (hand)
46. Selected Fiendsmith Engraver (Deck)
47. Selected Artmage Finmel (Deck)
48. Set Spell/Trap Light and Darkness Ritual
49. Activate Light and Darkness Ritual (S4): Ritual Summon 1 "Magician of Dark Chaos - Black Chaos" or "Black Luster Soldier - Soldier of Light and Darkness" from your hand
50. Selected Magician of Dark Chaos - Black Chaos (hand)
51. select Junora the Power Patron of Tuning (M5)
52. Yes
53. Selected Dark Magical Circle (GY)
54. Link Summon S:P Little Knight (Extra Deck)
55. select Medius the Pure (M4)
56. select Artmage Non-Finito (EMZ-L)
57. Yes
58. Selected Junora the Power Patron of Tuning (GY)
59. Yes
60. Special Summon 1 "Diactorus" monster
61. Selected Artmage Diactorus (Extra Deck)
62. Activate Artmage Diactorus (M2): Change the battle position of 1 monster on the field
63. Selected Artmage Diactorus (M2)
64. Activate Skull Archfiend of Chaos (GY): Special Summon this card
65. select Junora the Power Patron of Tuning (banishment)
66. select Artmage Non-Finito (GY)
67. select Light and Darkness Ritual (GY)
68. Link Summon Medicurius the Power Patron of Illusions (Extra Deck)
69. select S:P Little Knight (EMZ-R)
70. select Skull Archfiend of Chaos (M4)
71. Finish selection
72. Activate Artmage Finmel (hand): Special Summon this card from your hand
73. Yes

End board:  LP 8000 | Hand 3 | Deck 23 | Extra 12 | GY 6 | Banished 9   Monsters: M1: Artmage Graflare Lv5 2100/1500 ATK || M2: Artmage Diactorus Lv8 2800/2500 DEF || M3: Nerva the Power Patron of Creation Lv10 3300/3300 ATK || M4: Artmage Finmel Lv7 2400/1500 ATK || M5: Magician of Dark Chaos - Black Chaos Lv8 2800/2600 ATK || EMZ-R: Medicurius the Power Patron of Illusions L3↙↓↘ 3000    Spell/Trap: S1: Artmage Impasto -Recapture- (Set) || S2: Ars Magna - "Citrinitas" || S3: Mind Shuffle   GY: Nervedo the Shadebeast Power Patron, Theorealize Liberation, Small World, Medius the Pure, Skull Archfiend of Chaos, S:P Little Knight   Banished: Theorealize Medius (face-down), Fiendsmith Engraver (face-down),

## Order 2: best 14.45 (, worst 14.45) — from tries Normal Summon Junoldo the Shadespirit Power Patron
Others: tries Normal Summon Ars Magna of Purification and Corruption 13.1 · search 12.25 · opening lanes 12.1 · tries Normal Summon Lacrima the Crimson Tears 12.1 · tries Activate Pendulum Treasure 12.05 · tries Activate Fiendsmith's Desirae 11.35 · tries Normal Summon Theorealize Medius 10.85

1. Normal Summon Medius the Pure (hand)
2. Yes
3. Selected Nervedo the Shadebeast Power Patron (Deck)
4. Special Summon it
5. Activate Artmage Graflare (hand): Special Summon this card from your hand
6. Yes
7. Selected Ars Magna - "Citrinitas" (Deck)
8. Activate Ars Magna - "Citrinitas" (S1): activate this card
9. Activate Nervedo the Shadebeast Power Patron (M4): Special Summon 1 "Nerva the Power Patron of Creation" from your Extra Deck
10. Selected Nerva the Power Patron of Creation (Extra Deck)
11. Yes
12. Selected Junoldo the Shadespirit Power Patron (Deck)
13. Activate Junoldo the Shadespirit Power Patron (M2): Special Summon 1 "Junora the Power Patron of Tuning" from your Extra Deck
14. Selected Junora the Power Patron of Tuning (Extra Deck)
15. Yes
16. Selected Nervedo the Shadebeast Power Patron (Extra Deck)
17. Special Summon (procedure) Artmage Non-Finito (Extra Deck)
18. Selected Dark Magical Circle (hand)
19. Selected Nervedo the Shadebeast Power Patron (hand)
20. Yes
21. Selected Artmage Impasto -Recapture- (Deck)
22. Activate Ars Magna - "Citrinitas" (S1): Add 1 "Medius" or "Ars Magna" monster from your Deck to your hand
23. Selected Theorealize Medius (Deck)
24. Activate Theorealize Medius (hand): If a "Power Patron" card is on the field: You can Special Summon this card from your hand, then you can add 1 "Theorealize" Spell/Trap from your Deck to your hand
25. Yes
26. Selected Theorealize Liberation (Deck)
27. Activate Theorealize Liberation (hand): Add to your hand, or Special Summon, 1 monster from your Deck with 300 ATK/200 DEF
28. Selected Griffoh (Deck)
29. Add the card(s) to your hand
30. Activate Griffoh (hand): Activate 1 of these effects
31. Set 1 card that mentions "Light and Darkness Ritual"
32. Selected Mind Shuffle (Deck)
33. Link Summon Purification Power Patron (Extra Deck)
34. select Artmage Non-Finito (M4)
35. select Junora the Power Patron of Tuning (EMZ-R)
36. Yes
37. Activate Purification Power Patron (EMZ-L): Link Summon including this card as material
38. Activate Mind Shuffle (S3): activate this card
39. No
40. Selected Medicurius the Power Patron of Illusions (Extra Deck)
41. select Medius the Pure (M1)
42. Finish selection
43. Selected Theorealize Medius (Deck)
44. Activate Mind Shuffle (S3): Add 1 appropriate monster to your hand
45. Selected Skull Archfiend of Chaos (Deck)
46. Selected Skull Archfiend of Chaos (hand)
47. Yes
48. Selected Light and Darkness Ritual (Deck)
49. Selected Magician of Dark Chaos - Black Chaos (Deck)
50. Activate Light and Darkness Ritual (GY): Add both this card and 1 card that mentions "Light and Darkness Ritual" from your GY to your hand
51. Selected Skull Archfiend of Chaos (GY)
52. Set Spell/Trap Light and Darkness Ritual
53. Activate Small World (hand): activate this card
54. Selected Theorealize Medius (hand)
55. Selected Fiendsmith Engraver (Deck)
56. Selected Artmage Finmel (Deck)
57. Activate Artmage Finmel (hand): Special Summon this card from your hand
58. Yes
59. Activate Light and Darkness Ritual (S4): Ritual Summon 1 "Magician of Dark Chaos - Black Chaos" or "Black Luster Soldier - Soldier of Light and Darkness" from your hand
60. Selected Magician of Dark Chaos - Black Chaos (hand)
61. Selected Griffoh (GY) value 8 or 1
62. Yes
63. Special Summon 1 "Diactorus" monster
64. Selected Artmage Diactorus (Extra Deck)

End board:  LP 8000 | Hand 3 | Deck 21 | Extra 10 | GY 8 | Banished 11   Monsters: M1: Artmage Finmel Lv7 2400/1500 ATK || M2: Artmage Diactorus Lv8 2800/2500 ATK || M3: Nerva the Power Patron of Creation Lv10 3300/3300 ATK || M4: Magician of Dark Chaos - Black Chaos Lv8 2800/2600 ATK || M5: Artmage Graflare Lv5 2100/1500 ATK || EMZ-L: Medicurius the Power Patron of Illusions L3↙↓↘ 3000    Spell/Trap: S1: Ars Magna - "Citrinitas" || S2: Artmage Impasto -Recapture- (Set) || S3: Mind Shuffle   GY: Dark Magical Circle, Nervedo the Shadebeast Power Patron, Artmage Non-Finito, Junora the Power Patron of Tuning, Medius the Pure, Purification Power Patron, Small World, Light and Darkness Ritual   Banished: Ar

## Order 3: best 14.6 (, worst 14.6) — from tries Activate Junoldo the Shadespirit Power Patron → new early order
Others: tries Activate Junoldo the Shadespirit Power Patron → new early order → new ending 14.6 · tries Activate Junoldo the Shadespirit Power Patron → new early order → new early order 14.4 · tries Activate Junoldo the Shadespirit Power Patron 13.6 · search 13.5 · tries Activate Black Chaos 13.45 · tries Activate Fiendsmith's Requiem 13 · tries Activate Junoldo the Shadespirit Power Patron → new ending 12.65 · opening lanes 12.6 · tries Activate Vidolium the Unstable Power Patron of Unity 12.2 · tries Activate Fiendsmith's Sequence 11.25 · tries Activate Fiendsmith's Sequence 11

1. Normal Summon Medius the Pure (hand)
2. Yes
3. Selected Nervedo the Shadebeast Power Patron (Deck)
4. Special Summon it
5. Activate Nervedo the Shadebeast Power Patron (M4): Special Summon 1 "Nerva the Power Patron of Creation" from your Extra Deck
6. Selected Nerva the Power Patron of Creation (Extra Deck)
7. Yes
8. Selected Junoldo the Shadespirit Power Patron (Deck)
9. Activate Junoldo the Shadespirit Power Patron (M1): Special Summon 1 "Junora the Power Patron of Tuning" from your Extra Deck
10. Selected Junora the Power Patron of Tuning (Extra Deck)
11. Yes
12. Selected Nervedo the Shadebeast Power Patron (Extra Deck)
13. Special Summon (procedure) Artmage Non-Finito (Extra Deck)
14. Selected Dark Magical Circle (hand)
15. Selected Nervedo the Shadebeast Power Patron (hand)
16. Yes
17. Selected Artmage Impasto -Recapture- (Deck)
18. Activate Artmage Graflare (hand): Special Summon this card from your hand
19. Yes
20. Selected Ars Magna - "Citrinitas" (Deck)
21. Activate Ars Magna - "Citrinitas" (S2): activate this card
22. Activate Ars Magna - "Citrinitas" (S2): Add 1 "Medius" or "Ars Magna" monster from your Deck to your hand
23. Selected Ars Magna of Infinity and Finity (Deck)
24. Set Spell/Trap Small World
25. Activate Small World (S3): activate this card
26. Selected Ars Magna of Infinity and Finity (hand)
27. Selected Fiendsmith Engraver (Deck)
28. Selected Artmage Finmel (Deck)
29. Link Summon Purification Power Patron (Extra Deck)
30. select Junora the Power Patron of Tuning (M5)
31. select Medius the Pure (M3)
32. Yes
33. Selected Theorealize Medius (Deck)
34. Activate Artmage Finmel (hand): Special Summon this card from your hand
35. Yes
36. Activate Medius the Pure (GY): Shuffle 1 monster from your hand or face-up field into the Deck, and if you do, Special Summon this card
37. Selected Artmage Non-Finito (M1)
38. Activate Theorealize Medius (hand): If a "Power Patron" card is on the field: You can Special Summon this card from your hand, then you can add 1 "Theorealize" Spell/Trap from your Deck to your hand
39. Yes
40. Selected Theorealize Liberation (Deck)
41. Activate Theorealize Liberation (hand): Add to your hand, or Special Summon, 1 monster from your Deck with 300 ATK/200 DEF
42. Activate Purification Power Patron (EMZ-R): Link Summon including this card as material
43. Selected Medicurius the Power Patron of Illusions (Extra Deck)
44. select Medius the Pure (M3)
45. Finish selection
46. Selected Griffoh (Deck)
47. Add the card(s) to your hand
48. Yes
49. Special Summon 1 "Diactorus" monster
50. Selected Artmage Diactorus (Extra Deck)
51. Activate Griffoh (hand): Activate 1 of these effects
52. Set 1 card that mentions "Light and Darkness Ritual"
53. Selected Mind Shuffle (Deck)
54. Activate Mind Shuffle (S3): activate this card
55. Yes
56. Selected Skull Archfiend of Chaos (Deck)
57. Selected Skull Archfiend of Chaos (hand)
58. Yes
59. Selected Light and Darkness Ritual (Deck)
60. Selected Magician of Dark Chaos - Black Chaos (Deck)
61. Activate Light and Darkness Ritual (GY): Add both this card and 1 card that mentions "Light and Darkness Ritual" from your GY to your hand
62. Selected Skull Archfiend of Chaos (GY)
63. Set Spell/Trap Light and Darkness Ritual
64. Activate Light and Darkness Ritual (S4): Ritual Summon 1 "Magician of Dark Chaos - Black Chaos" or "Black Luster Soldier - Soldier of Light and Darkness" from your hand
65. Selected Magician of Dark Chaos - Black Chaos (hand)
66. Selected Griffoh (GY) value 8 or 1
67. Yes
68. Selected Small World (GY)

End board:  LP 8000 | Hand 4 | Deck 21 | Extra 11 | GY 6 | Banished 11   Monsters: M1: Magician of Dark Chaos - Black Chaos Lv8 2800/2600 ATK || M2: Artmage Graflare Lv5 2100/1500 ATK || M3: Artmage Diactorus Lv8 2800/2500 ATK || M4: Nerva the Power Patron of Creation Lv10 3300/3300 ATK || M5: Artmage Finmel Lv7 2400/1500 ATK || EMZ-R: Medicurius the Power Patron of Illusions L3↙↓↘ 3000    Spell/Trap: S1: Artmage Impasto -Recapture- (Set) || S2: Ars Magna - "Citrinitas" || S3: Mind Shuffle   GY: Dark Magical Circle, Nervedo the Shadebeast Power Patron, Junora the Power Patron of Tuning, Purification Power Patron, Theorealize Liberation, Light and Darkness Ritual   Banished: Pendulum Treasure (face-down

## Order 4: best 13.5 (, worst 13.5) — from tries Activate Prohibited Power Patron Portal - Terminus → new early order
Others: tries Activate Prohibited Power Patron Portal - Terminus 13.35 · tries Activate Prohibited Power Patron Portal - Terminus → new ending 13.35 · search 13.1 · tries Activate Fiendsmith Engraver 12.6 · tries Activate Mind Shuffle 11.8 · opening lanes 11.6 · tries Activate Fiendsmith's Tract 9.85 · tries Link Summon Fiendsmith's Requiem 9.85 · tries Activate Fiendsmith Engraver 8.5

1. Normal Summon Medius the Pure (hand)
2. Yes
3. Selected Nervedo the Shadebeast Power Patron (Deck)
4. Add the card(s) to your hand
5. Special Summon (procedure) Artmage Non-Finito (Extra Deck)
6. Selected Dark Magical Circle (hand)
7. Selected Nervedo the Shadebeast Power Patron (hand)
8. Yes
9. Selected Artmage Impasto -Recapture- (Deck)
10. Activate Artmage Graflare (hand): Special Summon this card from your hand
11. Yes
12. Selected Ars Magna - "Citrinitas" (Deck)
13. Activate Ars Magna - "Citrinitas" (S2): activate this card
14. Activate Ars Magna - "Citrinitas" (S2): Add 1 "Medius" or "Ars Magna" monster from your Deck to your hand
15. Selected Theorealize Medius (Deck)
16. Activate Small World (hand): activate this card
17. Selected Theorealize Medius (hand)
18. Selected Lacrima the Crimson Tears (Deck)
19. Selected Artmage Finmel (Deck)
20. Activate Artmage Finmel (hand): Special Summon this card from your hand
21. Yes
22. Activate Griffoh (hand): Activate 1 of these effects
23. Set 1 card that mentions "Light and Darkness Ritual"
24. Selected Mind Shuffle (Deck)
25. Activate Mind Shuffle (S3): activate this card
26. Yes
27. Selected Skull Archfiend of Chaos (Deck)
28. Selected Skull Archfiend of Chaos (hand)
29. Yes
30. Selected Light and Darkness Ritual (Deck)
31. Selected Magician of Dark Chaos - Black Chaos (Deck)
32. Activate Light and Darkness Ritual (GY): Add both this card and 1 card that mentions "Light and Darkness Ritual" from your GY to your hand
33. Selected Skull Archfiend of Chaos (GY)
34. Set Spell/Trap Light and Darkness Ritual
35. Activate Light and Darkness Ritual (S4): Ritual Summon 1 "Magician of Dark Chaos - Black Chaos" or "Black Luster Soldier - Soldier of Light and Darkness" from your hand
36. Selected Magician of Dark Chaos - Black Chaos (hand)
37. Selected Griffoh (GY) value 8 or 1
38. Yes
39. Selected Small World (GY)
40. Link Summon Purification Power Patron (Extra Deck)
41. select Medius the Pure (M1)
42. select Artmage Finmel (M4)
43. Yes
44. Selected Theorealize Medius (Deck)
45. Activate Theorealize Medius (hand): If a "Power Patron" card is on the field: You can Special Summon this card from your hand, then you can add 1 "Theorealize" Spell/Trap from your Deck to your hand
46. Yes
47. Selected Theorealize Liberation (Deck)
48. Special Summon (procedure) Dark Magician of Destruction (Extra Deck)
49. Selected Magician of Dark Chaos - Black Chaos (M5)
50. Yes
51. Special Summon 1 "Diactorus" monster
52. Activate Dark Magician of Destruction (M4): Add 1 "Dark Magician" or 1 card that mentions it from your Deck to your hand
53. Selected Apprentice Illusion Magician (Deck)
54. Selected Artmage Diactorus (Extra Deck)
55. Activate Medius the Pure (GY): Shuffle 1 monster from your hand or face-up field into the Deck, and if you do, Special Summon this card
56. Selected Dark Magician of Destruction (M4)
57. Activate Theorealize Liberation (hand): Add to your hand, or Special Summon, 1 monster from your Deck with 300 ATK/200 DEF
58. Activate Purification Power Patron (EMZ-R): Link Summon including this card as material
59. Selected Medicurius the Power Patron of Illusions (Extra Deck)
60. select Medius the Pure (M4)
61. Finish selection
62. Selected Nervedo the Shadebeast Power Patron (Deck)
63. Special Summon it
64. Activate Theorealize Liberation (GY): Treat 1 monster you control as a Tuner this turn
65. Selected Medicurius the Power Patron of Illusions (EMZ-R)
66. Activate Artmage Diactorus (M5): Change the battle position of 1 monster on the field
67. Selected Nervedo the Shadebeast Power Patron (M4)
68. Activate Nervedo the Shadebeast Power Patron (M4): Special Summon 1 "Nerva the Power Patron of Creation" from your Extra Deck
69. Selected Nerva the Power Patron of Creation (Extra Deck)
70. Yes
71. Selected Artmage Finmel (Deck)

End board:  LP 8000 | Hand 4 | Deck 23 | Extra 11 | GY 5 | Banished 10   Monsters: M1: Nerva the Power Patron of Creation Lv10 3300/3300 ATK || M2: Artmage Non-Finito Lv7 2400/1500 ATK || M3: Artmage Graflare Lv5 2100/1500 ATK || M4: Artmage Finmel Lv7 2400/1500 ATK || M5: Artmage Diactorus Lv8 2800/2500 ATK || EMZ-R: Medicurius the Power Patron of Illusions L3↙↓↘ 3000    Spell/Trap: S1: Artmage Impasto -Recapture- (Set) || S2: Ars Magna - "Citrinitas" || S3: Mind Shuffle   GY: Dark Magical Circle, Nervedo the Shadebeast Power Patron, Light and Darkness Ritual, Artmage Finmel, Purification Power Patron   Banished: Theorealize Medius (face-down), Lacrima the Crimson Tears (face-down), Griffoh, Magician 

