# Evolved lines — Prohibited Power Patron Portal - Terminus, Ash Blossom & Joyous Spring, Ash Blossom & Joyous Spring, Droll & Lock Bird, Ghost Ogre & Snow Rabbit (findlist-1100)
2026-11-25T16:10:34.484Z

8 deck orders (different face-down banishes / draws), 3 opponent hands x o_ss_panama + o_elfnote + o_despia + o_angelechy per line, 15 min searches, 4 mutation rounds.
Fitness = average margin after their turn (what you keep minus what they build; −10 more if they OTK). Higher is better.

**Best line per deck order: average 6.62** (worst order 4.61). Winner came from: tries Activate Fiendsmith's Tract 1, search 2, tries Activate Black Chaos 1, tries Activate Fiendsmith Engraver 1, tries Activate Pendulum Treasure 1, tries Activate Junoldo the Shadespirit Power Patron → new ending 1, tries Activate Mind Shuffle 1

| seed line | works as written | its score when it works | seed start + search finish (all orders) |
|---|---|---|---|
| ter1 | 3/8 | 1.34 | 1.27 |

## Weak points found automatically
Cards whose face-down banish (by your own costs) hurt the best line most (average best line without vs with that card banished):

| card | orders where it was banished | drop |
|---|---|---|
| Skull Archfiend of Chaos | 2/8 | 1.3 |
| Ars Magna - "Citrinitas" | 4/8 | 1.11 |
| Lacrima the Crimson Tears | 4/8 | 1.04 |
| Medius the Pure | 5/8 | 1.01 |
| Ars Magna of Purification and Corruption | 2/8 | 0.34 |
| Theorealize Past Lull | 4/8 | 0.33 |
| Black Chaos | 5/8 | 0.3 |
| Artmage Vandalism -Assault- | 7/8 | 0.3 |
| Small World | 7/8 | 0.3 |
| Theorealize Liberation | 3/8 | 0.23 |

Where the hand-designed lines broke (next step that no longer worked):
- ter1: Set 1 card (2x)
- ter1: Impasto (1x)
- ter1: Liberation (1x)
- ter1: Junoldo (1x)

List changes proposed for the list test (data/proposals-findlist-1100.json):
- +1 Skull Archfiend of Chaos, −1 Plundered Power Patron Plane - Vidolia — Skull Archfiend of Chaos: best line 1.3 worse when a cost banished it (2 of 8 orders) — Prohibited Power Patron Portal - Terminus
- +1 Ars Magna - "Citrinitas", −1 Artmage Vandalism -Assault- — Ars Magna - "Citrinitas": best line 1.11 worse when a cost banished it (4 of 8 orders) — Prohibited Power Patron Portal - Terminus
- +1 Lacrima the Crimson Tears, −1 Small World — Lacrima the Crimson Tears: best line 1.04 worse when a cost banished it (4 of 8 orders) — Prohibited Power Patron Portal - Terminus
- +1 Skull Archfiend of Chaos — Skull Archfiend of Chaos: best line 1.3 worse when a cost banished it (2 of 8 orders) — Prohibited Power Patron Portal - Terminus (add only: deck grows, up to 60)
- +1 Ars Magna - "Citrinitas" — Ars Magna - "Citrinitas": best line 1.11 worse when a cost banished it (4 of 8 orders) — Prohibited Power Patron Portal - Terminus (add only: deck grows, up to 60)
- +1 Lacrima the Crimson Tears — Lacrima the Crimson Tears: best line 1.04 worse when a cost banished it (4 of 8 orders) — Prohibited Power Patron Portal - Terminus (add only: deck grows, up to 60)

Effects the search had not used, tried on purpose (best result so far):
- Activate Fiendsmith Engraver: 8.85
- Activate Mind Shuffle: 6.69
- Special Summon (procedure) Nervedo the Shadebeast Power Patron: 6.34
- Activate Fiendsmith's Tract: 6.21
- Activate Pendulum Treasure: 5.98
- Activate Junoldo the Shadespirit Power Patron: 5.84
- Activate Theorealize Liberation: 5.6
- Link Summon Fiendsmith's Requiem: 5.14

## Order 1: best 6.21 (ss_panama 1.15, elfnote 6.64, despia 2.95, angelechy 8.7, worst 1.15) — from tries Activate Fiendsmith's Tract
Others: tries Activate Fiendsmith's Tract → new ending 4.96 · tries Activate Fiendsmith Engraver 3.71 · tries Activate Fiendsmith's Tract → new ending 3.27 · ter1 0.51 · ter1 0.25 · search 0.14 · opening lanes -0.62 · tries Activate Fiendsmith's Tract → new early order -1.21 · tries Activate Fiendsmith's Tract → new early order -1.42

1. Set Spell/Trap Prohibited Power Patron Portal - Terminus
2. Activate Prohibited Power Patron Portal - Terminus (S1): Send 1 "Power Patron" monster from your Deck or Extra Deck to the GY, then you can add 1 DARK Fairy monster from your Deck to your hand
3. Selected Theorealize Medius (Deck)
4. Yes
5. Selected Medius the Pure (Deck)
6. Normal Summon Medius the Pure (hand)
7. Yes
8. Selected Vidolium the Unstable Power Patron of Unity (Deck)
9. Add the card(s) to your hand
10. Activate Vidolium the Unstable Power Patron of Unity (hand): Activate it as a Pendulum Spell
11. Activate Vidolium the Unstable Power Patron of Unity (S1): Activate 1 of these effects
12. Special Summon 1 "Power Patron" monster
13. Selected Theorealize Medius (GY)
14. Yes
15. Selected Junoldo the Shadespirit Power Patron (Deck)
16. Activate Junoldo the Shadespirit Power Patron (hand): Activate it as a Pendulum Spell
17. Link Summon Purification Power Patron (Extra Deck)
18. select Medius the Pure (M1)
19. select Theorealize Medius (M3)
20. Activate Junoldo the Shadespirit Power Patron (S1): Destroy this card, draw 2 cards, then discard 1 card
21. Activate Purification Power Patron (EMZ-L): Add 1 "Theorealize" card from your Deck to your hand
22. Selected Theorealize Past Lull (Deck)
23. Selected Theorealize Past Lull (hand)
24. Yes
25. Selected Theorealize Medius (GY)
26. Activate Medius the Pure (GY): Shuffle 1 monster from your hand or face-up field into the Deck, and if you do, Special Summon this card
27. Selected Ash Blossom & Joyous Spring (hand)
28. Activate Theorealize Medius (hand): If a "Power Patron" card is on the field: You can Special Summon this card from your hand, then you can add 1 "Theorealize" Spell/Trap from your Deck to your hand
29. Yes
30. Selected Theorealize Liberation (Deck)
31. Activate Theorealize Liberation (hand): Add to your hand, or Special Summon, 1 monster from your Deck with 300 ATK/200 DEF
32. Activate Purification Power Patron (EMZ-L): Link Summon including this card as material
33. Selected Medicurius the Power Patron of Illusions (Extra Deck)
34. select Medius the Pure (M1)
35. Finish selection
36. Selected Nervedo the Shadebeast Power Patron (Deck)
37. Special Summon it
38. Yes
39. Add 1 "Ars Magna" card from your Deck to your hand
40. Selected Ars Magna of Purification and Corruption (Deck)
41. Activate Nervedo the Shadebeast Power Patron (M1): Special Summon 1 "Nerva the Power Patron of Creation" from your Extra Deck
42. Selected Nerva the Power Patron of Creation (Extra Deck)
43. Yes
44. Selected Artmage Finmel (Deck)
45. Activate Artmage Graflare (hand): Special Summon this card from your hand
46. Yes
47. Selected Artmage Vandalism -Assault- (Deck)
48. Activate Artmage Vandalism -Assault- (S1): When this card is activated: You can add 1 "Medius the Pure" from your Deck to your hand
49. Yes
50. Selected Medius the Pure (Deck)
51. Activate Ars Magna of Purification and Corruption (hand): You can banish this card from your hand; add 1 "Ars Magna" Spell/Trap from your Deck to your hand
52. Selected Ars Magna - "Citrinitas" (Deck)
53. Special Summon (procedure) Artmage Non-Finito (Extra Deck)
54. Selected Ars Magna - "Citrinitas" (hand)
55. Selected Artmage Finmel (M1)
56. Yes
57. Selected Artmage Impasto -Recapture- (Deck)
58. Activate Theorealize Liberation (GY): Treat 1 monster you control as a Tuner this turn
59. Selected Artmage Non-Finito (M1)
60. Activate Artmage Finmel (hand): Special Summon this card from your hand
61. Yes
62. Activate Fiendsmith Engraver (hand): Add 1 "Fiendsmith" Spell/Trap from your Deck to your hand
63. Selected Fiendsmith's Tract (Deck)
64. Activate Fiendsmith's Tract (hand): Add 1 LIGHT Fiend monster from your Deck to your hand
65. Selected Lacrima the Crimson Tears (Deck)
66. Selected Medius the Pure (hand)

End board:  LP 8000 | Hand 4 | Deck 24 | Extra 14 | GY 8 | Banished 6   Monsters: M1: Artmage Non-Finito Lv7 2400/1500 ATK || M2: Artmage Graflare Lv5 2100/1500 ATK || M3: Theorealize Medius Lv4 1800/1800 ATK || M4: Nerva the Power Patron of Creation Lv10 3300/3300 ATK || M5: Artmage Finmel Lv7 2400/1500 ATK || EMZ-L: Medicurius the Power Patron of Illusions L3↙↓↘ 3000    Spell/Trap: S1: Artmage Vandalism -Assault- || S2: Artmage Impasto -Recapture- (Set)   GY: Prohibited Power Patron Portal - Terminus, Theorealize Past Lull, Purification Power Patron, Ars Magna - "Citrinitas", Artmage Finmel, Fiendsmith Engraver, Medius the Pure, Fiendsmith's Tract   Banished: Medius the Pure, Nervedo the Shadebeast P

## Order 2: best 6.75 (ss_panama 5.2, elfnote 3.64, despia 5.63, angelechy 10.1, worst 1.1) — from search
Others: tries Special Summon (procedure) Nervedo the Shadebeast Power Patron 6.34 · opening lanes 5.29 · tries Normal Summon Nervedo the Shadebeast Power Patron 3.06 · ter1 -1.17

1. Activate Prohibited Power Patron Portal - Terminus (hand): Send 1 "Power Patron" monster from your Deck or Extra Deck to the GY, then you can add 1 DARK Fairy monster from your Deck to your hand
2. Selected Nervedo the Shadebeast Power Patron (Deck)
3. Yes
4. Selected Medius the Pure (Deck)
5. Normal Summon Medius the Pure (hand)
6. Yes
7. Selected Vidolium the Unstable Power Patron of Unity (Deck)
8. Add the card(s) to your hand
9. Activate Vidolium the Unstable Power Patron of Unity (hand): Activate it as a Pendulum Spell
10. Activate Vidolium the Unstable Power Patron of Unity (S1): Activate 1 of these effects
11. Special Summon 1 "Power Patron" monster
12. Selected Nervedo the Shadebeast Power Patron (GY)
13. Yes
14. Selected Theorealize Medius (Deck)
15. Activate Theorealize Medius (hand): If a "Power Patron" card is on the field: You can Special Summon this card from your hand, then you can add 1 "Theorealize" Spell/Trap from your Deck to your hand
16. Yes
17. Selected Theorealize Liberation (Deck)
18. Activate Theorealize Liberation (hand): Add to your hand, or Special Summon, 1 monster from your Deck with 300 ATK/200 DEF
19. Selected Junoldo the Shadespirit Power Patron (Deck)
20. Add the card(s) to your hand
21. Activate Junoldo the Shadespirit Power Patron (hand): Activate it as a Pendulum Spell
22. Activate Nervedo the Shadebeast Power Patron (M4): Special Summon 1 "Nerva the Power Patron of Creation" from your Extra Deck
23. Selected Nerva the Power Patron of Creation (Extra Deck)
24. Yes
25. Activate Junoldo the Shadespirit Power Patron (S1): Destroy this card, draw 2 cards, then discard 1 card
26. Selected Ash Blossom & Joyous Spring (hand)
27. Selected Artmage Finmel (Deck)
28. Yes
29. Selected Nervedo the Shadebeast Power Patron (Extra Deck)
30. Activate Ars Magna of Infinity and Finity (hand): You can banish this card from your hand; add 1 non-Warrior "Ars Magna" monster from your Deck to your hand
31. Selected Ars Magna of Purification and Corruption (Deck)
32. Yes
33. Special Summon 1 "Diactorus" monster
34. Selected Artmage Diactorus (Extra Deck)
35. Yes
36. Activate Ars Magna of Purification and Corruption (hand): You can banish this card from your hand; add 1 "Ars Magna" Spell/Trap from your Deck to your hand
37. Selected Ars Magna - "Citrinitas" (Deck)
38. Special Summon (procedure) Artmage Non-Finito (Extra Deck)
39. Selected Ars Magna - "Citrinitas" (hand)
40. select Artmage Finmel (M5)
41. Yes
42. Selected Artmage Impasto -Recapture- (Deck)
43. Link Summon Purification Power Patron (Extra Deck)
44. select Ars Magna of Infinity and Finity (M2)
45. select Medius the Pure (M1)
46. Yes
47. Activate Medius the Pure (GY): Shuffle 1 monster from your hand or face-up field into the Deck, and if you do, Special Summon this card
48. Selected Ars Magna of Purification and Corruption (M1)
49. Activate Purification Power Patron (EMZ-R): Link Summon including this card as material
50. Selected Medicurius the Power Patron of Illusions (Extra Deck)
51. select Medius the Pure (M1)
52. Finish selection
53. Activate Artmage Finmel (hand): Special Summon this card from your hand
54. Yes
55. Set Spell/Trap Mind Shuffle

End board:  LP 8000 | Hand 4 | Deck 29 | Extra 12 | GY 7 | Banished 5   Monsters: M1: Artmage Finmel Lv7 2400/1500 ATK || M3: Artmage Diactorus Lv8 2800/2500 ATK || M4: Nerva the Power Patron of Creation Lv10 3300/3300 ATK || M5: Artmage Non-Finito Lv7 2400/1500 ATK || EMZ-R: Medicurius the Power Patron of Illusions L3↙↓↘ 9000    Spell/Trap: S1: Artmage Impasto -Recapture- (Set) || S2: Mind Shuffle (Set)   GY: Prohibited Power Patron Portal - Terminus, Theorealize Liberation, Ash Blossom & Joyous Spring, Ars Magna - "Citrinitas", Artmage Finmel, Ars Magna of Infinity and Finity, Purification Power Patron   Banished: Theorealize Past Lull (face-down), Fiendsmith's Tract (face-down), Apprentice Illusion 

## Order 3: best 4.61 (ss_panama 10.1, elfnote -2.7, despia 0.15, angelechy 7.85, worst -2.7) — from tries Activate Black Chaos
Others: tries Activate Black Chaos → new ending 3.14 · opening lanes 2.56 · tries Activate Black Chaos → new early order 2.35 · search 1.87 · ter1 1.31 · tries Activate Mind Shuffle 1.19

1. Set Spell/Trap Prohibited Power Patron Portal - Terminus
2. Activate Prohibited Power Patron Portal - Terminus (S1): Send 1 "Power Patron" monster from your Deck or Extra Deck to the GY, then you can add 1 DARK Fairy monster from your Deck to your hand
3. Selected Nervedo the Shadebeast Power Patron (Deck)
4. Yes
5. Selected Medius the Pure (Deck)
6. Normal Summon Medius the Pure (hand)
7. Yes
8. Selected Vidolium the Unstable Power Patron of Unity (Deck)
9. Add the card(s) to your hand
10. Activate Vidolium the Unstable Power Patron of Unity (hand): Activate it as a Pendulum Spell
11. Activate Vidolium the Unstable Power Patron of Unity (S1): Activate 1 of these effects
12. Special Summon 1 "Power Patron" monster
13. Selected Nervedo the Shadebeast Power Patron (GY)
14. Yes
15. Selected Junoldo the Shadespirit Power Patron (Deck)
16. Activate Nervedo the Shadebeast Power Patron (M4): Special Summon 1 "Nerva the Power Patron of Creation" from your Extra Deck
17. Selected Nerva the Power Patron of Creation (Extra Deck)
18. Yes
19. Selected Artmage Graflare (Deck)
20. Activate Junoldo the Shadespirit Power Patron (hand): Activate it as a Pendulum Spell
21. Link Summon Purification Power Patron (Extra Deck)
22. select Medius the Pure (M3)
23. select Nerva the Power Patron of Creation (M4)
24. Activate Junoldo the Shadespirit Power Patron (S1): Destroy this card, draw 2 cards, then discard 1 card
25. Activate Purification Power Patron (EMZ-L): Add 1 "Theorealize" card from your Deck to your hand
26. Selected Theorealize Medius (Deck)
27. Selected Pendulum Treasure (hand)
28. Yes
29. Selected Nervedo the Shadebeast Power Patron (Extra Deck)
30. Activate Black Chaos (hand): Special Summon ("Black Chaos")
31. Selected Mind Shuffle (Deck)
32. Activate Mind Shuffle (S1): Add 1 appropriate monster to your hand
33. Selected Skull Archfiend of Chaos (Deck)
34. Selected Skull Archfiend of Chaos (hand)
35. Yes
36. Selected Light and Darkness Ritual (Deck)
37. Selected Black Luster Soldier - Soldier of Light and Darkness (Deck)
38. Activate Light and Darkness Ritual (GY): Add both this card and 1 card that mentions "Light and Darkness Ritual" from your GY to your hand
39. Selected Black Chaos (GY)
40. Special Summon (procedure) Artmage Non-Finito (Extra Deck)
41. Selected Light and Darkness Ritual (hand)
42. Selected Nervedo the Shadebeast Power Patron (hand)
43. Yes
44. Selected Artmage Impasto -Recapture- (Deck)
45. Activate Skull Archfiend of Chaos (GY): Special Summon this card
46. select Light and Darkness Ritual (GY)
47. select Nervedo the Shadebeast Power Patron (GY)
48. select Pendulum Treasure (GY)
49. Default order
50. Activate Medius the Pure (GY): Shuffle 1 monster from your hand or face-up field into the Deck, and if you do, Special Summon this card
51. Selected Ash Blossom & Joyous Spring (hand)
52. Activate Purification Power Patron (EMZ-L): Link Summon including this card as material
53. Selected Medicurius the Power Patron of Illusions (Extra Deck)
54. select Skull Archfiend of Chaos (M3)
55. Finish selection
56. Activate Theorealize Medius (hand): If a "Power Patron" card is on the field: You can Special Summon this card from your hand, then you can add 1 "Theorealize" Spell/Trap from your Deck to your hand
57. Yes
58. Selected Theorealize Past Lull (Deck)
59. Activate Theorealize Past Lull (hand): Special Summon 1 "Medius the Pure" from your hand or Deck
60. Selected Medius the Pure (Deck)
61. Link Summon S:P Little Knight (Extra Deck)
62. select Medius the Pure (M3)
63. select Medius the Pure (M4)
64. Yes
65. Special Summon 1 "Diactorus" monster
66. Selected Artmage Diactorus (Extra Deck)
67. Activate Artmage Diactorus (M3): Change the battle position of 1 monster on the field
68. Selected Artmage Diactorus (M3)
69. Special Summon (procedure) Black Chaos (hand)
70. select Black Luster Soldier - Soldier of Light and Darkness (hand)

End board:  LP 8000 | Hand 3 | Deck 31 | Extra 11 | GY 6 | Banished 5   Monsters: M1: Artmage Graflare Lv5 2100/1500 ATK || M2: Artmage Non-Finito Lv7 2400/1500 ATK || M3: Artmage Diactorus Lv8 2800/2500 DEF || M4: S:P Little Knight L2←→ 1600  || M5: Black Chaos Lv8 3000/2500 ATK || EMZ-R: Medicurius the Power Patron of Illusions L3↙↓↘ 3000    Spell/Trap: S1: Mind Shuffle || S2: Artmage Impasto -Recapture- (Set)   GY: Prohibited Power Patron Portal - Terminus, Nerva the Power Patron of Creation, Skull Archfiend of Chaos, Purification Power Patron, Theorealize Past Lull, Medius the Pure   Banished: Pendulum Treasure (face-down), Magician of Dark Chaos - Black Chaos (face-down), Theorealize Liberation (f

## Order 4: best 8.85 (ss_panama 11.15, elfnote 7.6, despia 7.19, angelechy 11, worst 3.06) — from tries Activate Fiendsmith Engraver
Others: tries Activate Fiendsmith Engraver → new ending 7.98 · tries Link Summon Fiendsmith's Requiem 5.14 · tries Activate Fiendsmith Engraver → new early order 4.76 · ter1 3.34 · tries Activate Fiendsmith Engraver → new early order 3.34 · opening lanes 2.76 · search 2.18

1. Activate Prohibited Power Patron Portal - Terminus (hand): Send 1 "Power Patron" monster from your Deck or Extra Deck to the GY, then you can add 1 DARK Fairy monster from your Deck to your hand
2. Selected Nervedo the Shadebeast Power Patron (Deck)
3. Yes
4. Selected Medius the Pure (Deck)
5. Normal Summon Medius the Pure (hand)
6. Yes
7. Selected Vidolium the Unstable Power Patron of Unity (Deck)
8. Add the card(s) to your hand
9. Activate Vidolium the Unstable Power Patron of Unity (hand): Activate it as a Pendulum Spell
10. Activate Vidolium the Unstable Power Patron of Unity (S1): Activate 1 of these effects
11. Special Summon 1 "Power Patron" monster
12. Selected Nervedo the Shadebeast Power Patron (GY)
13. Yes
14. Selected Junoldo the Shadespirit Power Patron (Deck)
15. Activate Nervedo the Shadebeast Power Patron (M3): Special Summon 1 "Nerva the Power Patron of Creation" from your Extra Deck
16. Selected Nerva the Power Patron of Creation (Extra Deck)
17. No
18. Activate Junoldo the Shadespirit Power Patron (hand): Activate it as a Pendulum Spell
19. Link Summon Purification Power Patron (Extra Deck)
20. select Medius the Pure (M4)
21. select Nerva the Power Patron of Creation (EMZ-R)
22. Activate Junoldo the Shadespirit Power Patron (S1): Destroy this card, draw 2 cards, then discard 1 card
23. Activate Purification Power Patron (EMZ-L): Add 1 "Theorealize" card from your Deck to your hand
24. Selected Theorealize Medius (Deck)
25. Selected Droll & Lock Bird (hand)
26. Yes
27. Selected Nervedo the Shadebeast Power Patron (Extra Deck)
28. Activate Medius the Pure (GY): Shuffle 1 monster from your hand or face-up field into the Deck, and if you do, Special Summon this card
29. Selected Ash Blossom & Joyous Spring (hand)
30. Activate Purification Power Patron (EMZ-L): Link Summon including this card as material
31. Selected Medicurius the Power Patron of Illusions (Extra Deck)
32. select Medius the Pure (M3)
33. Activate Fiendsmith Engraver (hand): Add 1 "Fiendsmith" Spell/Trap from your Deck to your hand
34. Selected Fiendsmith's Tract (Deck)
35. Activate Theorealize Medius (hand): If a "Power Patron" card is on the field: You can Special Summon this card from your hand, then you can add 1 "Theorealize" Spell/Trap from your Deck to your hand
36. Yes
37. Selected Theorealize Past Lull (Deck)
38. Special Summon (procedure) Artmage Non-Finito (Extra Deck)
39. Selected Theorealize Past Lull (hand)
40. Selected Nervedo the Shadebeast Power Patron (hand)
41. Yes
42. Selected Artmage Impasto -Recapture- (Deck)
43. Activate Artmage Finmel (hand): Special Summon this card from your hand
44. Yes
45. Activate Griffoh (hand): Activate 1 of these effects
46. Set 1 card that mentions "Light and Darkness Ritual"
47. Selected Mind Shuffle (Deck)
48. Activate Mind Shuffle (S2): activate this card
49. No
50. Set Spell/Trap Fiendsmith's Tract
51. Activate Fiendsmith's Tract (S3): Add 1 LIGHT Fiend monster from your Deck to your hand
52. Selected Lacrima the Crimson Tears (Deck)
53. Selected Lacrima the Crimson Tears (hand)
54. Activate Fiendsmith Engraver (GY): Special Summon this card
55. Selected Lacrima the Crimson Tears (GY)
56. Link Summon Fiendsmith's Requiem (Extra Deck)
57. select Fiendsmith Engraver (M3)
58. Activate Fiendsmith's Requiem (M3): Special Summon 1 "Fiendsmith" monster
59. Selected Fiendsmith Engraver (Deck)
60. Link Summon Fiendsmith's Sequence (Extra Deck)
61. select Artmage Non-Finito (M1)
62. select Fiendsmith Engraver (M5)
63. Activate Fiendsmith's Sequence (M3): Fusion Summon 1 Fiend Fusion Monster
64. Selected Fiendsmith's Desirae (Extra Deck)
65. select Fiendsmith Engraver (GY)
66. select Fiendsmith's Requiem (GY)
67. select Fiendsmith Engraver (GY)
68. Activate Fiendsmith's Sequence (M3): Equip this card to 1 non-Link LIGHT Fiend you control
69. Selected Fiendsmith's Desirae (M5)
70. Activate Fiendsmith's Desirae (M5): Negate the effects of face-up cards on the field
71. Selected Medicurius the Power Patron of Illusions (EMZ-L)
72. Activate Mind Shuffle (S2): Add 1 appropriate monster to your hand
73. Selected Skull Archfiend of Chaos (Deck)
74. Selected Skull Archfiend of Chaos (hand)
75. Yes
76. Selected Light and Darkness Ritual (Deck)
77. Selected Magician of Dark Chaos - Black Chaos (Deck)
78. Activate Light and Darkness Ritual (GY): Add both this card and 1 card that mentions "Light and Darkness Ritual" from your GY to your hand
79. Selected Skull Archfiend of Chaos (GY)
80. Set Spell/Trap Light and Darkness Ritual
81. Activate Light and Darkness Ritual (S4): Ritual Summon 1 "Magician of Dark Chaos - Black Chaos" or "Black Luster Soldier - Soldier of Light and Darkness" from your hand
82. Selected Magician of Dark Chaos - Black Chaos (hand)
83. Selected Griffoh (GY) value 8 or 1
84. Yes
85. Special Summon 1 "Diactorus" monster
86. Activate Magician of Dark Chaos - Black Chaos (M1): Add 1 Spell from your GY to your hand
87. Selected Light and Darkness Ritual (GY)
88. Selected Artmage Diactorus (Extra Deck)

End board:  LP 8000 | Hand 4 | Deck 28 | Extra 10 | GY 8 | Banished 6   Monsters: M1: Magician of Dark Chaos - Black Chaos Lv8 2800/2600 ATK || M2: Artmage Finmel Lv7 2400/1500 ATK || M3: Artmage Diactorus Lv8 2800/2500 ATK || M5: Fiendsmith's Desirae Lv9 2800/2400 ATK || EMZ-L: Medicurius the Power Patron of Illusions L3↙↓↘ 3000  [NEGATED]   Spell/Trap: S1: Artmage Impasto -Recapture- (Set) || S2: Mind Shuffle || S3: Fiendsmith's Sequence   GY: Prohibited Power Patron Portal - Terminus, Nerva the Power Patron of Creation, Droll & Lock Bird, Purification Power Patron, Theorealize Past Lull, Nervedo the Shadebeast Power Patron, Fiendsmith's Tract, Artmage Non-Finito   Banished: Theorealize Medius (face-

## Order 5: best 5.98 (ss_panama 2.28, elfnote 4.07, despia 8.9, angelechy 9, worst 0) — from tries Activate Pendulum Treasure
Others: tries Special Summon (procedure) Vidolium the Unstable Power Patron of Unity 2.73 · ter1 2.25 · tries Activate Pendulum Treasure → new ending 2.03 · search 1.74 · tries Activate Pendulum Treasure → new early order 1.69 · opening lanes 1.53 · ter1 0.65

1. Activate Prohibited Power Patron Portal - Terminus (hand): Send 1 "Power Patron" monster from your Deck or Extra Deck to the GY, then you can add 1 DARK Fairy monster from your Deck to your hand
2. Selected Junoldo the Shadespirit Power Patron (Deck)
3. Yes
4. Selected Medius the Pure (Deck)
5. Normal Summon Medius the Pure (hand)
6. Yes
7. Selected Vidolium the Unstable Power Patron of Unity (Deck)
8. Add the card(s) to your hand
9. Activate Vidolium the Unstable Power Patron of Unity (hand): Activate it as a Pendulum Spell
10. Activate Vidolium the Unstable Power Patron of Unity (S1): Activate 1 of these effects
11. Special Summon 1 "Power Patron" monster
12. Selected Junoldo the Shadespirit Power Patron (GY)
13. Yes
14. Selected Nervedo the Shadebeast Power Patron (Deck)
15. Activate Junoldo the Shadespirit Power Patron (M4): Special Summon 1 "Junora the Power Patron of Tuning" from your Extra Deck
16. Selected Junora the Power Patron of Tuning (Extra Deck)
17. Yes
18. Selected Prohibited Power Patron Portal - Terminus (GY)
19. Special Summon (procedure) Artmage Non-Finito (Extra Deck)
20. Selected Prohibited Power Patron Portal - Terminus (hand)
21. Selected Nervedo the Shadebeast Power Patron (hand)
22. Yes
23. Selected Artmage Impasto -Recapture- (Deck)
24. Link Summon Purification Power Patron (Extra Deck)
25. select Medius the Pure (M3)
26. select Junora the Power Patron of Tuning (M1)
27. Yes
28. Selected Theorealize Medius (Deck)
29. Activate Theorealize Medius (hand): If a "Power Patron" card is on the field: You can Special Summon this card from your hand, then you can add 1 "Theorealize" Spell/Trap from your Deck to your hand
30. Yes
31. Selected Theorealize Liberation (Deck)
32. Activate Medius the Pure (GY): Shuffle 1 monster from your hand or face-up field into the Deck, and if you do, Special Summon this card
33. Selected Ash Blossom & Joyous Spring (hand)
34. Activate Theorealize Liberation (hand): Add to your hand, or Special Summon, 1 monster from your Deck with 300 ATK/200 DEF
35. Activate Purification Power Patron (EMZ-R): Link Summon including this card as material
36. Selected Medicurius the Power Patron of Illusions (Extra Deck)
37. select Medius the Pure (M3)
38. Finish selection
39. Selected Nervedo the Shadebeast Power Patron (Deck)
40. Special Summon it
41. Yes
42. Special Summon 1 "Diactorus" monster
43. Selected Artmage Diactorus (Extra Deck)
44. Activate Nervedo the Shadebeast Power Patron (M5): Special Summon 1 "Nerva the Power Patron of Creation" from your Extra Deck
45. Selected Nerva the Power Patron of Creation (Extra Deck)
46. Yes
47. Selected Artmage Graflare (Deck)

End board:  LP 8000 | Hand 3 | Deck 30 | Extra 12 | GY 5 | Banished 8   Monsters: M1: Nerva the Power Patron of Creation Lv10 3300/3300 ATK || M2: Artmage Graflare Lv5 2100/1500 ATK || M3: Artmage Diactorus Lv8 2800/2500 ATK || M4: Artmage Non-Finito Lv7 2400/1500 ATK || EMZ-L: Medicurius the Power Patron of Illusions L3↙↓↘ 3000    Spell/Trap: S1: Artmage Impasto -Recapture- (Set)   GY: Prohibited Power Patron Portal - Terminus, Nervedo the Shadebeast Power Patron, Junora the Power Patron of Tuning, Purification Power Patron, Theorealize Liberation   Banished: Artmage Vandalism -Assault- (face-down), Ars Magna of Purification and Corruption (face-down), Nervedo the Shadebeast Power Patron (face-down), 

## Order 6: best 6.88 (ss_panama 2.3, elfnote 8.03, despia 6.9, angelechy 7.62, worst 0) — from search
Others: tries Activate Theorealize Liberation 5.6 · opening lanes 5.38 · tries Normal Summon Junoldo the Shadespirit Power Patron 3.54 · ter1 3.12 · ter1 2.68

1. Set Spell/Trap Prohibited Power Patron Portal - Terminus
2. Activate Prohibited Power Patron Portal - Terminus (S1): Send 1 "Power Patron" monster from your Deck or Extra Deck to the GY, then you can add 1 DARK Fairy monster from your Deck to your hand
3. Selected Nervedo the Shadebeast Power Patron (Deck)
4. Yes
5. Selected Medius the Pure (Deck)
6. Normal Summon Medius the Pure (hand)
7. Yes
8. Selected Vidolium the Unstable Power Patron of Unity (Deck)
9. Add the card(s) to your hand
10. Activate Vidolium the Unstable Power Patron of Unity (hand): Activate it as a Pendulum Spell
11. Activate Vidolium the Unstable Power Patron of Unity (S1): Activate 1 of these effects
12. Special Summon 1 "Power Patron" monster
13. Selected Nervedo the Shadebeast Power Patron (GY)
14. Yes
15. Selected Theorealize Medius (Deck)
16. Activate Nervedo the Shadebeast Power Patron (M3): Special Summon 1 "Nerva the Power Patron of Creation" from your Extra Deck
17. Selected Nerva the Power Patron of Creation (Extra Deck)
18. Yes
19. Selected Junoldo the Shadespirit Power Patron (Deck)
20. Activate Junoldo the Shadespirit Power Patron (M2): Special Summon 1 "Junora the Power Patron of Tuning" from your Extra Deck
21. Selected Junora the Power Patron of Tuning (Extra Deck)
22. Yes
23. Selected Nervedo the Shadebeast Power Patron (Extra Deck)
24. Activate Theorealize Medius (hand): If a "Power Patron" card is on the field: You can Special Summon this card from your hand, then you can add 1 "Theorealize" Spell/Trap from your Deck to your hand
25. Yes
26. Selected Theorealize Past Lull (Deck)
27. Special Summon (procedure) Artmage Non-Finito (Extra Deck)
28. Selected Theorealize Past Lull (hand)
29. Selected Nervedo the Shadebeast Power Patron (hand)
30. Yes
31. Selected Artmage Impasto -Recapture- (Deck)
32. Link Summon Purification Power Patron (Extra Deck)
33. select Medius the Pure (M1)
34. select Junora the Power Patron of Tuning (EMZ-R)
35. Yes
36. Selected Theorealize Liberation (Deck)
37. Activate Medius the Pure (GY): Shuffle 1 monster from your hand or face-up field into the Deck, and if you do, Special Summon this card
38. Selected Ash Blossom & Joyous Spring (hand)
39. Activate Theorealize Liberation (hand): Add to your hand, or Special Summon, 1 monster from your Deck with 300 ATK/200 DEF
40. Selected Griffoh (Deck)
41. Add the card(s) to your hand
42. Activate Purification Power Patron (EMZ-L): Link Summon including this card as material
43. Selected Medicurius the Power Patron of Illusions (Extra Deck)
44. select Medius the Pure (M1)
45. Finish selection
46. Yes
47. Special Summon 1 "Diactorus" monster
48. Selected Artmage Diactorus (Extra Deck)
49. Activate Griffoh (hand): Activate 1 of these effects
50. Set 1 card that mentions "Light and Darkness Ritual"
51. Selected Mind Shuffle (Deck)
52. Activate Mind Shuffle (S2): activate this card
53. Yes
54. Selected Skull Archfiend of Chaos (Deck)
55. Selected Skull Archfiend of Chaos (hand)
56. Yes
57. Selected Light and Darkness Ritual (Deck)
58. Selected Magician of Dark Chaos - Black Chaos (Deck)
59. Activate Light and Darkness Ritual (GY): Add both this card and 1 card that mentions "Light and Darkness Ritual" from your GY to your hand
60. Selected Skull Archfiend of Chaos (GY)
61. Activate Light and Darkness Ritual (hand): Ritual Summon 1 "Magician of Dark Chaos - Black Chaos" or "Black Luster Soldier - Soldier of Light and Darkness" from your hand
62. Selected Magician of Dark Chaos - Black Chaos (hand)
63. Selected Griffoh (GY) value 8 or 1
64. Yes
65. Selected Light and Darkness Ritual (GY)

End board:  LP 8000 | Hand 5 | Deck 26 | Extra 11 | GY 5 | Banished 10   Monsters: M1: Magician of Dark Chaos - Black Chaos Lv8 2800/2600 ATK || M3: Artmage Non-Finito Lv7 2400/1500 ATK || M4: Nerva the Power Patron of Creation Lv10 3300/3300 DEF || M5: Artmage Diactorus Lv8 2800/2500 ATK || EMZ-R: Medicurius the Power Patron of Illusions L3↙↓↘ 3000    Spell/Trap: S1: Artmage Impasto -Recapture- (Set) || S2: Mind Shuffle   GY: Prohibited Power Patron Portal - Terminus, Nervedo the Shadebeast Power Patron, Junora the Power Patron of Tuning, Theorealize Liberation, Purification Power Patron   Banished: Infinite Impermanence (face-down), Nervedo the Shadebeast Power Patron (face-down), Pendulum Treasure (

## Order 7: best 7 (ss_panama 2.27, elfnote 0, despia 10.35, angelechy 10.25, worst -5.8) — from tries Activate Junoldo the Shadespirit Power Patron → new ending
Others: tries Activate Junoldo the Shadespirit Power Patron 5.84 · tries Activate Junoldo the Shadespirit Power Patron → new ending → new ending 4.54 · search 3.61 · tries Activate Vidolium the Unstable Power Patron of Unity 2.59 · ter1 2.2 · opening lanes 1.96 · tries Activate Junoldo the Shadespirit Power Patron → new ending → new early order -3.58

1. Activate Prohibited Power Patron Portal - Terminus (hand): Send 1 "Power Patron" monster from your Deck or Extra Deck to the GY, then you can add 1 DARK Fairy monster from your Deck to your hand
2. Selected Nervedo the Shadebeast Power Patron (Deck)
3. Yes
4. Selected Medius the Pure (Deck)
5. Normal Summon Medius the Pure (hand)
6. Yes
7. Selected Vidolium the Unstable Power Patron of Unity (Deck)
8. Add the card(s) to your hand
9. Activate Vidolium the Unstable Power Patron of Unity (hand): Activate it as a Pendulum Spell
10. Activate Vidolium the Unstable Power Patron of Unity (S1): Activate 1 of these effects
11. Special Summon 1 "Power Patron" monster
12. Selected Nervedo the Shadebeast Power Patron (GY)
13. Yes
14. Selected Theorealize Medius (Deck)
15. Activate Nervedo the Shadebeast Power Patron (M4): Special Summon 1 "Nerva the Power Patron of Creation" from your Extra Deck
16. Selected Nerva the Power Patron of Creation (Extra Deck)
17. Yes
18. Selected Junoldo the Shadespirit Power Patron (Deck)
19. Activate Theorealize Medius (hand): If a "Power Patron" card is on the field: You can Special Summon this card from your hand, then you can add 1 "Theorealize" Spell/Trap from your Deck to your hand
20. Yes
21. Selected Theorealize Past Lull (Deck)
22. Activate Junoldo the Shadespirit Power Patron (M1): Special Summon 1 "Junora the Power Patron of Tuning" from your Extra Deck
23. Selected Junora the Power Patron of Tuning (Extra Deck)
24. Yes
25. Selected Nervedo the Shadebeast Power Patron (Extra Deck)
26. Special Summon (procedure) Artmage Non-Finito (Extra Deck)
27. Selected Theorealize Past Lull (hand)
28. Selected Nervedo the Shadebeast Power Patron (hand)
29. Yes
30. Selected Artmage Impasto -Recapture- (Deck)
31. Link Summon Purification Power Patron (Extra Deck)
32. select Junora the Power Patron of Tuning (EMZ-L)
33. select Medius the Pure (M3)
34. Yes
35. Selected Theorealize Liberation (Deck)
36. Activate Medius the Pure (GY): Shuffle 1 monster from your hand or face-up field into the Deck, and if you do, Special Summon this card
37. Selected Droll & Lock Bird (hand)
38. Activate Purification Power Patron (EMZ-L): Link Summon including this card as material
39. Activate Theorealize Liberation (hand): Add to your hand, or Special Summon, 1 monster from your Deck with 300 ATK/200 DEF
40. Selected Griffoh (Deck)
41. Add the card(s) to your hand
42. Selected Medicurius the Power Patron of Illusions (Extra Deck)
43. select Medius the Pure (M2)
44. Finish selection
45. Yes
46. Special Summon 1 "Diactorus" monster
47. Selected Artmage Diactorus (Extra Deck)
48. Activate Theorealize Past Lull (GY): Special Summon 1 Fusion, Synchro, or Xyz Monster from your GY
49. Selected Junora the Power Patron of Tuning (GY)
50. Activate Theorealize Liberation (GY): Treat 1 monster you control as a Tuner this turn
51. Selected Artmage Non-Finito (M1)
52. Activate Griffoh (hand): Activate 1 of these effects
53. Set 1 card that mentions "Light and Darkness Ritual"
54. Selected Mind Shuffle (Deck)
55. Activate Mind Shuffle (S2): activate this card
56. Yes
57. Selected Skull Archfiend of Chaos (Deck)
58. Selected Skull Archfiend of Chaos (hand)
59. Yes
60. Selected Light and Darkness Ritual (Deck)
61. Selected Magician of Dark Chaos - Black Chaos (Deck)
62. Activate Light and Darkness Ritual (GY): Add both this card and 1 card that mentions "Light and Darkness Ritual" from your GY to your hand
63. Selected Skull Archfiend of Chaos (GY)
64. Set Spell/Trap Light and Darkness Ritual
65. Activate Light and Darkness Ritual (S3): Ritual Summon 1 "Magician of Dark Chaos - Black Chaos" or "Black Luster Soldier - Soldier of Light and Darkness" from your hand
66. Selected Magician of Dark Chaos - Black Chaos (hand)
67. Selected Griffoh (GY) value 8 or 1
68. Yes
69. Selected Prohibited Power Patron Portal - Terminus (GY)

End board:  LP 8000 | Hand 5 | Deck 26 | Extra 11 | GY 3 | Banished 11   Monsters: M1: Artmage Non-Finito Lv7 2400/1500 ATK || M2: Junora the Power Patron of Tuning Lv10 3100/3800 ATK || M3: Magician of Dark Chaos - Black Chaos Lv8 2800/2600 ATK || M4: Nerva the Power Patron of Creation Lv10 3300/3300 ATK || M5: Artmage Diactorus Lv8 2800/2500 ATK || EMZ-L: Medicurius the Power Patron of Illusions L3↙↓↘ 3000    Spell/Trap: S1: Artmage Impasto -Recapture- (Set) || S2: Mind Shuffle   GY: Nervedo the Shadebeast Power Patron, Purification Power Patron, Light and Darkness Ritual   Banished: Apprentice Illusion Magician (face-down), Nervedo the Shadebeast Power Patron (face-down), Artmage Finmel (face-down),

## Order 8: best 6.69 (ss_panama 6.14, elfnote 5.34, despia -1.65, angelechy 10.1, worst -1.65) — from tries Activate Mind Shuffle
Others: opening lanes 5.85 · tries Activate Mind Shuffle → new early order 3.74 · search 2.42 · tries Activate Mind Shuffle → new ending 2.26 · tries Activate Mind Shuffle → new early order 1.53 · ter1 -0.94 · tries Normal Summon Theorealize Medius -1.63

1. Activate Prohibited Power Patron Portal - Terminus (hand): Send 1 "Power Patron" monster from your Deck or Extra Deck to the GY, then you can add 1 DARK Fairy monster from your Deck to your hand
2. Selected Nervedo the Shadebeast Power Patron (Deck)
3. Yes
4. Selected Medius the Pure (Deck)
5. Normal Summon Medius the Pure (hand)
6. Yes
7. Selected Vidolium the Unstable Power Patron of Unity (Deck)
8. Add the card(s) to your hand
9. Activate Vidolium the Unstable Power Patron of Unity (hand): Activate it as a Pendulum Spell
10. Activate Vidolium the Unstable Power Patron of Unity (S1): Activate 1 of these effects
11. Special Summon 1 "Power Patron" monster
12. Selected Nervedo the Shadebeast Power Patron (GY)
13. Yes
14. Selected Theorealize Medius (Deck)
15. Activate Theorealize Medius (hand): If a "Power Patron" card is on the field: You can Special Summon this card from your hand, then you can add 1 "Theorealize" Spell/Trap from your Deck to your hand
16. Yes
17. Selected Theorealize Liberation (Deck)
18. Activate Theorealize Liberation (hand): Add to your hand, or Special Summon, 1 monster from your Deck with 300 ATK/200 DEF
19. Selected Griffoh (Deck)
20. Add the card(s) to your hand
21. Activate Nervedo the Shadebeast Power Patron (M1): Special Summon 1 "Nerva the Power Patron of Creation" from your Extra Deck
22. Selected Nerva the Power Patron of Creation (Extra Deck)
23. Yes
24. Selected Junoldo the Shadespirit Power Patron (Deck)
25. Activate Junoldo the Shadespirit Power Patron (M4): Special Summon 1 "Junora the Power Patron of Tuning" from your Extra Deck
26. Selected Junora the Power Patron of Tuning (Extra Deck)
27. Yes
28. Selected Nervedo the Shadebeast Power Patron (Extra Deck)
29. Link Summon Purification Power Patron (Extra Deck)
30. select Medius the Pure (M3)
31. select Junora the Power Patron of Tuning (EMZ-L)
32. Yes
33. Selected Theorealize Past Lull (Deck)
34. Special Summon (procedure) Artmage Non-Finito (Extra Deck)
35. Selected Theorealize Past Lull (hand)
36. Selected Nervedo the Shadebeast Power Patron (hand)
37. Yes
38. Selected Artmage Impasto -Recapture- (Deck)
39. Activate Theorealize Past Lull (GY): Special Summon 1 Fusion, Synchro, or Xyz Monster from your GY
40. Selected Junora the Power Patron of Tuning (GY)
41. Activate Griffoh (hand): Activate 1 of these effects
42. Set 1 card that mentions "Light and Darkness Ritual"
43. Activate Purification Power Patron (EMZ-R): Link Summon including this card as material
44. Selected Medicurius the Power Patron of Illusions (Extra Deck)
45. select Junora the Power Patron of Tuning (M4)
46. Finish selection
47. Selected Mind Shuffle (Deck)
48. Activate Medius the Pure (GY): Shuffle 1 monster from your hand or face-up field into the Deck, and if you do, Special Summon this card
49. Activate Mind Shuffle (S2): activate this card
50. Yes
51. Selected Skull Archfiend of Chaos (Deck)
52. Selected Skull Archfiend of Chaos (hand)
53. Selected Ash Blossom & Joyous Spring (hand)
54. Yes
55. Selected Light and Darkness Ritual (Deck)
56. Selected Magician of Dark Chaos - Black Chaos (Deck)
57. Activate Light and Darkness Ritual (GY): Add both this card and 1 card that mentions "Light and Darkness Ritual" from your GY to your hand
58. Selected Skull Archfiend of Chaos (GY)
59. Activate Light and Darkness Ritual (hand): Ritual Summon 1 "Magician of Dark Chaos - Black Chaos" or "Black Luster Soldier - Soldier of Light and Darkness" from your hand
60. Selected Magician of Dark Chaos - Black Chaos (hand)
61. Selected Griffoh (GY) value 8 or 1
62. Yes
63. Special Summon 1 "Diactorus" monster
64. Activate Magician of Dark Chaos - Black Chaos (M5): Add 1 Spell from your GY to your hand
65. Selected Theorealize Liberation (GY)
66. Selected Artmage Diactorus (Extra Deck)
67. Set Spell/Trap Theorealize Liberation

End board:  LP 8000 | Hand 4 | Deck 26 | Extra 11 | GY 5 | Banished 9   Monsters: M1: Nerva the Power Patron of Creation Lv10 3300/3300 ATK || M2: Artmage Diactorus Lv8 2800/2500 ATK || M3: Artmage Non-Finito Lv7 2400/1500 ATK || M4: Medius the Pure Lv4 1800/1800 ATK || M5: Magician of Dark Chaos - Black Chaos Lv8 2800/2600 ATK || EMZ-L: Medicurius the Power Patron of Illusions L3↙↓↘ 3000    Spell/Trap: S1: Artmage Impasto -Recapture- (Set) || S2: Mind Shuffle || S3: Theorealize Liberation (Set)   GY: Prohibited Power Patron Portal - Terminus, Nervedo the Shadebeast Power Patron, Junora the Power Patron of Tuning, Purification Power Patron, Light and Darkness Ritual   Banished: Ars Magna of Infinity an

