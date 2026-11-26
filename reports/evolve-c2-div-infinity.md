# Evolved lines — Ars Magna of Infinity and Finity, Ash Blossom & Joyous Spring, Ash Blossom & Joyous Spring, Droll & Lock Bird, Ghost Ogre & Snow Rabbit (findlist-1100)
2026-11-26T01:23:04.721Z

8 deck orders (different face-down banishes / draws), 3 opponent hands x o_ss_panama + o_elfnote + o_despia + o_angelechy per line, 5 min searches, 6 mutation rounds.
Fitness = end-board interruptions (the lab scorer, src/disrupt.mjs: wipe 2, negate 1-1.5, banish/protection less; hand traps kept count 1 each). The winner of each order is also played into the opponent decks: margin after their turn shown beside it.

**Margin after their turn (winners): average 4.79** (worst -3.94)

**Best line per deck order: average 13.17** (worst order 12.25). Winner came from: forced Activate Griffoh 1, search 2, forced Activate Mind Shuffle → new ending 1, opening lanes → new ending 1, forced Synchro Summon Chaos Angel → new ending 1, forced Activate Griffoh → new ending → new early order 1, tries Special Summon (procedure) Artmage Non-Finito 1

## Weak points found automatically
Cards whose face-down banish (by your own costs) hurt the best line most (average best line without vs with that card banished):

| card | orders where it was banished | drop |
|---|---|---|
| Nervedo the Shadebeast Power Patron | 6/8 | 0.98 |
| Pendulum Treasure | 6/8 | 0.78 |
| Magician of Dark Chaos - Black Chaos | 4/8 | 0.72 |
| Dark Magical Circle | 2/8 | 0.72 |
| Small World | 5/8 | 0.69 |
| Fiendsmith Engraver | 5/8 | 0.69 |
| Black Luster Soldier - Soldier of Light and Darkness | 4/8 | 0.56 |
| Mind Shuffle | 3/8 | 0.51 |
| Medius the Pure | 4/8 | 0.42 |
| Light and Darkness Ritual | 3/8 | 0.27 |

List changes proposed for the list test (data/proposals-findlist-1100.json):
- +1 Magician of Dark Chaos - Black Chaos, −1 Plundered Power Patron Plane - Vidolia — Magician of Dark Chaos - Black Chaos: best line 0.72 worse when a cost banished it (4 of 8 orders) — Ars Magna of Infinity and Finity
- +1 Dark Magical Circle, −1 Artmage Vandalism -Assault- — Dark Magical Circle: best line 0.72 worse when a cost banished it (2 of 8 orders) — Ars Magna of Infinity and Finity
- +1 Small World, −1 Plundered Power Patron Plane - Vidolia — Small World: best line 0.69 worse when a cost banished it (5 of 8 orders) — Ars Magna of Infinity and Finity
- +1 Fiendsmith Engraver, −1 Plundered Power Patron Plane - Vidolia — Fiendsmith Engraver: best line 0.69 worse when a cost banished it (5 of 8 orders) — Ars Magna of Infinity and Finity
- +1 Magician of Dark Chaos - Black Chaos — Magician of Dark Chaos - Black Chaos: best line 0.72 worse when a cost banished it (4 of 8 orders) — Ars Magna of Infinity and Finity (add only: deck grows, up to 60)
- +1 Dark Magical Circle — Dark Magical Circle: best line 0.72 worse when a cost banished it (2 of 8 orders) — Ars Magna of Infinity and Finity (add only: deck grows, up to 60)
- +1 Small World — Small World: best line 0.69 worse when a cost banished it (5 of 8 orders) — Ars Magna of Infinity and Finity (add only: deck grows, up to 60)
- +1 Fiendsmith Engraver — Fiendsmith Engraver: best line 0.69 worse when a cost banished it (5 of 8 orders) — Ars Magna of Infinity and Finity (add only: deck grows, up to 60)

Effects the search had not used, tried on purpose (best result so far):
- Special Summon (procedure) Artmage Non-Finito: 13.3
- Activate Junoldo the Shadespirit Power Patron: 13
- Activate Junoldo the Shadespirit Power Patron: 13
- Synchro Summon Junora the Power Patron of Tuning: 13
- Normal Summon Theorealize Medius: 13
- Activate Theorealize Medius: 12.85
- Activate Theorealize Past Lull: 12.85
- Activate Plundered Power Patron Plane - Vidolia: 12.85

## Order 1: best 13 [margin 4.38: ss_panama 1.3, elfnote 5.88, despia 1.33, angelechy 9] (, worst 13) — from forced Activate Griffoh
Others: tries Synchro Summon Junora the Power Patron of Tuning 13 · forced Special Summon (procedure) Dark Magician of Destruction 13 · forced Activate Griffoh → new ending 13 · forced Activate Griffoh → new ending 13 · tries Activate Theorealize Medius 12.85 · forced Activate Theorealize Liberation 11.65 · tries Activate Purification Power Patron 11.65 · tries Activate Junoldo the Shadespirit Power Patron 11.65 · forced Activate Theorealize Past Lull 11.05 · tries Special Summon (procedure) Nerva the Power Patron of Creation 11 · forced Activate Griffoh → new ending 10.73 · tries Activate Vidolium the Unstable Power Patron of Unity 10.45 · search 9.41 · opening lanes 9.41 · forced Activate Light and Darkness Ritual: Ritual Summon 9.41 · forced Synchro Summon Chaos Angel 9.41 · forced Activate Mind Shuffle 9.41 · forced Link Summon S:P Little Knight 9.41 · forced Activate Artmage Graflare 9.41 · forced Activate Fiendsmith's Sequence 9.41 · forced Activate Griffoh → new early order 9.41 · forced Activate Griffoh → new early order 9.41 · forced Activate Griffoh → new early order 8.41

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
13. Activate Nervedo the Shadebeast Power Patron (M3): Special Summon 1 "Nerva the Power Patron of Creation" from your Extra Deck
14. Selected Nerva the Power Patron of Creation (Extra Deck)
15. Yes
16. Activate Ars Magna of Infinity and Finity (banishment): Special Summon this card
17. Selected Junoldo the Shadespirit Power Patron (Deck)
18. Activate Junoldo the Shadespirit Power Patron (M4): Special Summon 1 "Junora the Power Patron of Tuning" from your Extra Deck
19. Selected Junora the Power Patron of Tuning (Extra Deck)
20. Yes
21. Selected Nervedo the Shadebeast Power Patron (Extra Deck)
22. Link Summon Purification Power Patron (Extra Deck)
23. select Ars Magna of Infinity and Finity (M3)
24. select Junora the Power Patron of Tuning (EMZ-R)
25. Activate Purification Power Patron (EMZ-L): Add 1 "Theorealize" card from your Deck to your hand
26. Activate Ars Magna of Purification and Corruption (banishment): Special Summon this card
27. Activate Purification Power Patron (EMZ-L): Link Summon including this card as material
28. Selected Medicurius the Power Patron of Illusions (Extra Deck)
29. select Medius the Pure (M1)
30. Finish selection
31. Selected Theorealize Medius (Deck)
32. Activate Ars Magna of Purification and Corruption (M1): Banish Spells/Traps on the field
33. Selected Ars Magna - "Citrinitas" (S1)
34. Activate Theorealize Medius (hand): If a "Power Patron" card is on the field: You can Special Summon this card from your hand, then you can add 1 "Theorealize" Spell/Trap from your Deck to your hand
35. Yes
36. Selected Theorealize Past Lull (Deck)
37. Special Summon (procedure) Artmage Non-Finito (Extra Deck)
38. Selected Theorealize Past Lull (hand)
39. Selected Nervedo the Shadebeast Power Patron (hand)
40. Yes
41. Selected Artmage Impasto -Recapture- (Deck)
42. Activate Theorealize Past Lull (GY): Special Summon 1 Fusion, Synchro, or Xyz Monster from your GY
43. Selected Junora the Power Patron of Tuning (GY)
44. Activate Medius the Pure (GY): Shuffle 1 monster from your hand or face-up field into the Deck, and if you do, Special Summon this card
45. Selected Ars Magna of Purification and Corruption (M1)
46. Link Summon S:P Little Knight (Extra Deck)
47. select Medius the Pure (M1)
48. select Junora the Power Patron of Tuning (M3)
49. Yes
50. Special Summon 1 "Diactorus" monster
51. Activate S:P Little Knight (M3): Banish 1 card on the field or GY
52. Selected Nervedo the Shadebeast Power Patron (GY)
53. Selected Artmage Diactorus (Extra Deck)

End board:  LP 8000 | Hand 4 | Deck 31 | Extra 9 | GY 3 | Banished 11   Monsters: M2: Nerva the Power Patron of Creation Lv10 3300/3300 ATK || M3: S:P Little Knight L2←→ 1600  || M4: Artmage Diactorus Lv8 2800/2500 ATK || M5: Artmage Non-Finito Lv7 2400/1500 ATK || EMZ-R: Medicurius the Power Patron of Illusions L3↙↓↘ 9000    Spell/Trap: S1: Artmage Impasto -Recapture- (Set)   GY: Ars Magna of Infinity and Finity, Purification Power Patron, Junora the Power Patron of Tuning   Banished: Infinite Impermanence (face-down), Small World (face-down), Light and Darkness Ritual (face-down), Lacrima the Crimson Tears (face-down), Fiendsmith's Tract (face-down), Mind Shuffle (face-down), Ars Magna - "Citrinitas"

## Order 2: best 13 [margin 6.57: ss_panama 8.35, elfnote 4.98, despia -0.75, angelechy 8.95] (, worst 13) — from search
Others: tries Normal Summon Theorealize Medius 13 · forced Activate Mind Shuffle 13 · forced Activate Griffoh 13 · search → new ending 13 · search → new ending 13 · search → new early order 13 · search → new ending 12.85 · search → new early order 11.9 · tries Activate Theorealize Liberation 11.65 · forced Activate Theorealize Liberation 9.78 · tries Activate Prohibited Power Patron Portal - Terminus 9.41 · opening lanes 9.41 · forced Link Summon S:P Little Knight 9.41 · tries Activate Medius the Pure 9.41 · forced Activate Light and Darkness Ritual: Ritual Summon 9.41 · forced Activate Fiendsmith's Sequence 9.41 · forced Special Summon (procedure) Dark Magician of Destruction 9.41 · forced Activate Theorealize Past Lull 8.62 · search → new early order 3.55

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
12. Activate Nervedo the Shadebeast Power Patron (M3): Special Summon 1 "Nerva the Power Patron of Creation" from your Extra Deck
13. Selected Nerva the Power Patron of Creation (Extra Deck)
14. Yes
15. Activate Ars Magna of Infinity and Finity (banishment): Special Summon this card
16. Selected Junoldo the Shadespirit Power Patron (Deck)
17. Activate Junoldo the Shadespirit Power Patron (M2): Special Summon 1 "Junora the Power Patron of Tuning" from your Extra Deck
18. Selected Junora the Power Patron of Tuning (Extra Deck)
19. Yes
20. Selected Nervedo the Shadebeast Power Patron (Extra Deck)
21. Link Summon Purification Power Patron (Extra Deck)
22. select Ars Magna of Infinity and Finity (M4)
23. select Junora the Power Patron of Tuning (M2)
24. Activate Ars Magna of Purification and Corruption (banishment): Special Summon this card
25. Activate Purification Power Patron (EMZ-R): Add 1 "Theorealize" card from your Deck to your hand
26. Selected Theorealize Medius (Deck)
27. Activate Ars Magna of Purification and Corruption (M2): Banish Spells/Traps on the field
28. Selected Ars Magna - "Citrinitas" (S1)
29. Activate Purification Power Patron (EMZ-R): Link Summon including this card as material
30. Selected Medicurius the Power Patron of Illusions (Extra Deck)
31. select Ars Magna of Purification and Corruption (M2)
32. Finish selection
33. Activate Theorealize Medius (hand): If a "Power Patron" card is on the field: You can Special Summon this card from your hand, then you can add 1 "Theorealize" Spell/Trap from your Deck to your hand
34. Yes
35. Selected Theorealize Past Lull (Deck)
36. Special Summon (procedure) Artmage Non-Finito (Extra Deck)
37. Selected Theorealize Past Lull (hand)
38. Selected Nervedo the Shadebeast Power Patron (hand)
39. Yes
40. Selected Artmage Impasto -Recapture- (Deck)
41. Activate Theorealize Past Lull (GY): Special Summon 1 Fusion, Synchro, or Xyz Monster from your GY
42. Selected Junora the Power Patron of Tuning (GY)
43. Link Summon S:P Little Knight (Extra Deck)
44. select Junora the Power Patron of Tuning (M2)
45. select Medius the Pure (M1)
46. Yes
47. Selected Ars Magna of Purification and Corruption (GY)
48. Yes
49. Special Summon 1 "Diactorus" monster
50. Selected Artmage Diactorus (Extra Deck)

End board:  LP 8000 | Hand 4 | Deck 30 | Extra 9 | GY 5 | Banished 10   Monsters: M1: S:P Little Knight L2←→ 1600  || M2: Artmage Diactorus Lv8 2800/2500 ATK || M3: Nerva the Power Patron of Creation Lv10 3300/3300 ATK || M5: Artmage Non-Finito Lv7 2400/1500 ATK || EMZ-L: Medicurius the Power Patron of Illusions L3↙↓↘ 9000    Spell/Trap: S1: Artmage Impasto -Recapture- (Set)   GY: Ars Magna of Infinity and Finity, Purification Power Patron, Nervedo the Shadebeast Power Patron, Medius the Pure, Junora the Power Patron of Tuning   Banished: Small World (face-down), Artmage Finmel (face-down), Griffoh (face-down), Apprentice Illusion Magician (face-down), Fiendsmith Engraver (face-down), Theorealize Mediu

## Order 3: best 12.25 [margin 3.27: ss_panama 8.32, elfnote 0, despia -0.15, angelechy null] (, worst 12.25) — from forced Activate Mind Shuffle → new ending
Others: forced Activate Mind Shuffle 11.95 · forced Activate Theorealize Liberation 11.65 · forced Synchro Summon Chaos Angel 11.65 · tries Activate Theorealize Liberation 11.65 · tries Activate Theorealize Liberation 11.45 · forced Activate Mind Shuffle → new ending 11.25 · forced Activate Theorealize Past Lull 11.05 · forced Activate Mind Shuffle → new ending 11.05 · tries Activate Theorealize Past Lull 10.65 · forced Activate Artmage Graflare 10.6 · forced Activate Mind Shuffle → new early order 9.97 · search 9.41 · tries Activate Ars Magna of Purification and Corruption 9.41 · opening lanes 9.41 · tries Special Summon (procedure) Artmage Non-Finito 9.41 · forced Link Summon S:P Little Knight 9.41 · forced Special Summon (procedure) Dark Magician of Destruction 9.41 · forced Activate Griffoh 9.41 · forced Activate Light and Darkness Ritual: Ritual Summon 9.41 · forced Activate Mind Shuffle → new ending → new early order 9.41 · forced Activate Fiendsmith's Sequence 9.27 · tries Activate Prohibited Power Patron Portal - Terminus 3.55 · forced Activate Mind Shuffle → new early order 3.55

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
16. Selected Artmage Finmel (Deck)
17. Link Summon Purification Power Patron (Extra Deck)
18. select Ars Magna of Infinity and Finity (M2)
19. select Nerva the Power Patron of Creation (EMZ-R)
20. Activate Purification Power Patron (EMZ-L): Add 1 "Theorealize" card from your Deck to your hand
21. Activate Ars Magna of Purification and Corruption (banishment): Special Summon this card
22. Selected Theorealize Medius (Deck)
23. Activate Theorealize Medius (hand): If a "Power Patron" card is on the field: You can Special Summon this card from your hand, then you can add 1 "Theorealize" Spell/Trap from your Deck to your hand
24. Activate Purification Power Patron (EMZ-L): Link Summon including this card as material
25. Selected Medicurius the Power Patron of Illusions (Extra Deck)
26. select Medius the Pure (M1)
27. Finish selection
28. Yes
29. Selected Theorealize Liberation (Deck)
30. Activate Medius the Pure (GY): Shuffle 1 monster from your hand or face-up field into the Deck, and if you do, Special Summon this card
31. Selected Ash Blossom & Joyous Spring (hand)
32. Activate Theorealize Liberation (hand): Add to your hand, or Special Summon, 1 monster from your Deck with 300 ATK/200 DEF
33. Activate Ars Magna of Purification and Corruption (M2): Banish Spells/Traps on the field
34. Selected Theorealize Liberation (S2)
35. Selected Griffoh (Deck)
36. Add the card(s) to your hand
37. Activate Griffoh (hand): Activate 1 of these effects
38. Set 1 card that mentions "Light and Darkness Ritual"
39. Selected Mind Shuffle (Deck)
40. Activate Mind Shuffle (S2): activate this card
41. Yes
42. Selected Skull Archfiend of Chaos (Deck)
43. Selected Skull Archfiend of Chaos (hand)
44. No
45. Activate Skull Archfiend of Chaos (GY): Special Summon this card
46. select Theorealize Liberation (banishment)
47. select Griffoh (GY)
48. select Purification Power Patron (GY)
49. Default order
50. Link Summon S:P Little Knight (Extra Deck)
51. select Medius the Pure (M1)
52. select Skull Archfiend of Chaos (M5)
53. Activate Skull Archfiend of Chaos (GY): Add 1 Ritual Monster mentioned on that card from your Deck to your hand
54. Selected Light and Darkness Ritual (Deck)
55. Activate Theorealize Medius (M3): Activate 1 of these effects
56. Special Summon 1 "Diactorus" monster
57. Selected Artmage Diactorus (Extra Deck)
58. Selected Black Luster Soldier - Soldier of Light and Darkness (Deck)
59. Activate Light and Darkness Ritual (GY): Add both this card and 1 card that mentions "Light and Darkness Ritual" from your GY to your hand
60. Selected Skull Archfiend of Chaos (GY)

End board:  LP 8000 | Hand 6 | Deck 32 | Extra 12 | GY 2 | Banished 5   Monsters: M1: S:P Little Knight L2←→ 1600  || M2: Ars Magna of Purification and Corruption Lv8 1000/2100 ATK || M3: Artmage Diactorus Lv8 2800/2500 ATK || M4: Artmage Finmel Lv7 2400/1500 ATK || EMZ-L: Medicurius the Power Patron of Illusions L3↙↓↘ 9000    Spell/Trap: S1: Ars Magna - "Citrinitas" || S2: Mind Shuffle   GY: Ars Magna of Infinity and Finity, Nerva the Power Patron of Creation   Banished: Artmage Impasto -Recapture- (face-down), Magician of Dark Chaos - Black Chaos (face-down), Ars Magna - "Citrinitas" (face-down), Medius the Pure, Theorealize Medius   Hand: Ash Blossom & Joyous Spring, Light and Darkness Ritual, Skull

## Order 4: best 13 [margin 6.73: ss_panama 5.46, elfnote 6.01, despia 5.67, angelechy 9] (, worst 13) — from opening lanes → new ending
Others: opening lanes → new ending → new ending 13 · opening lanes 12.9 · tries Activate Theorealize Past Lull 12.85 · forced Activate Griffoh 12 · forced Special Summon (procedure) Dark Magician of Destruction 11.65 · forced Activate Artmage Graflare 11.65 · tries Activate Artmage Diactorus 11.65 · opening lanes → new ending → new early order 11.5 · opening lanes → new ending → new ending 10.73 · forced Activate Theorealize Liberation 10.43 · tries Activate Prohibited Power Patron Portal - Terminus 10.43 · tries Activate Artmage Vandalism -Assault- 10.21 · search 9.41 · forced Activate Mind Shuffle 9.41 · forced Activate Light and Darkness Ritual: Ritual Summon 9.41 · tries Activate Ars Magna of Infinity and Finity 9.41 · forced Link Summon S:P Little Knight 9.41 · forced Activate Fiendsmith's Sequence 9.41 · tries Activate Artmage Vandalism -Assault- 9.41 · opening lanes → new ending → new early order 9.28 · forced Synchro Summon Chaos Angel 9.14 · forced Activate Theorealize Past Lull 8.62 · opening lanes → new ending → new early order 3.55

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
13. Activate Nervedo the Shadebeast Power Patron (M3): Special Summon 1 "Nerva the Power Patron of Creation" from your Extra Deck
14. Selected Nerva the Power Patron of Creation (Extra Deck)
15. Yes
16. Selected Junoldo the Shadespirit Power Patron (Deck)
17. Activate Junoldo the Shadespirit Power Patron (M3): Special Summon 1 "Junora the Power Patron of Tuning" from your Extra Deck
18. Selected Junora the Power Patron of Tuning (Extra Deck)
19. Yes
20. Selected Nervedo the Shadebeast Power Patron (Extra Deck)
21. Link Summon Purification Power Patron (Extra Deck)
22. select Medius the Pure (M4)
23. select Junora the Power Patron of Tuning (EMZ-L)
24. Activate Ars Magna of Infinity and Finity (banishment): Special Summon this card
25. Activate Ars Magna of Purification and Corruption (banishment): Special Summon this card
26. Activate Purification Power Patron (EMZ-L): Add 1 "Theorealize" card from your Deck to your hand
27. Selected Theorealize Medius (Deck)
28. Activate Ars Magna of Purification and Corruption (M4): Banish Spells/Traps on the field
29. Selected Ars Magna - "Citrinitas" (S1)
30. Activate Medius the Pure (GY): Shuffle 1 monster from your hand or face-up field into the Deck, and if you do, Special Summon this card
31. Selected Ars Magna of Purification and Corruption (M4)
32. Activate Purification Power Patron (EMZ-L): Link Summon including this card as material
33. Selected Medicurius the Power Patron of Illusions (Extra Deck)
34. select Ars Magna of Infinity and Finity (M3)
35. Finish selection
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
47. select Junora the Power Patron of Tuning (M5)
48. select Medius the Pure (M2)
49. Yes
50. Special Summon 1 "Diactorus" monster
51. Selected Artmage Diactorus (Extra Deck)

End board:  LP 8000 | Hand 4 | Deck 31 | Extra 9 | GY 4 | Banished 10   Monsters: M1: Nerva the Power Patron of Creation Lv10 3300/3300 ATK || M3: Artmage Diactorus Lv8 2800/2500 ATK || M4: Artmage Non-Finito Lv7 2400/1500 ATK || M5: S:P Little Knight L2←→ 1600  || EMZ-R: Medicurius the Power Patron of Illusions L3↙↓↘ 9000    Spell/Trap: S1: Artmage Impasto -Recapture- (Set)   GY: Ars Magna of Infinity and Finity, Purification Power Patron, Nervedo the Shadebeast Power Patron, Junora the Power Patron of Tuning   Banished: Fiendsmith's Tract (face-down), Light and Darkness Ritual (face-down), Small World (face-down), Pendulum Treasure (face-down), Apprentice Illusion Magician (face-down), Infinite Imper

## Order 5: best 13.3 [margin 5.21: ss_panama 2.5, elfnote null, despia 2.98, angelechy 9.25] (, worst 13.3) — from forced Synchro Summon Chaos Angel → new ending
Others: forced Synchro Summon Chaos Angel → new ending → new ending 13.3 · forced Synchro Summon Chaos Angel 13 · forced Activate Griffoh 13 · forced Synchro Summon Chaos Angel → new ending 13 · forced Synchro Summon Chaos Angel → new early order 13 · tries Link Summon Fiendsmith's Requiem 12.85 · forced Synchro Summon Chaos Angel → new ending → new early order 12.02 · search 11.65 · forced Activate Theorealize Past Lull 10.6 · tries Activate Fiendsmith's Sequence 9.41 · tries Activate Fiendsmith Engraver 9.41 · tries Activate Fiendsmith's Tract 9.41 · opening lanes 9.41 · forced Link Summon S:P Little Knight 9.41 · tries Activate Fiendsmith Engraver 9.41 · forced Activate Artmage Graflare 9.41 · tries Activate Fiendsmith's Requiem 9.41 · forced Activate Light and Darkness Ritual: Ritual Summon 9.41 · forced Activate Mind Shuffle 9.41 · forced Activate Fiendsmith's Sequence 9.41 · forced Special Summon (procedure) Dark Magician of Destruction 9.41 · forced Activate Theorealize Liberation 9.27 · forced Synchro Summon Chaos Angel → new ending → new early order 8.41

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
13. Activate Nervedo the Shadebeast Power Patron (M4): Special Summon 1 "Nerva the Power Patron of Creation" from your Extra Deck
14. Selected Nerva the Power Patron of Creation (Extra Deck)
15. Yes
16. Activate Ars Magna of Infinity and Finity (banishment): Special Summon this card
17. Selected Junoldo the Shadespirit Power Patron (Deck)
18. Activate Junoldo the Shadespirit Power Patron (M4): Special Summon 1 "Junora the Power Patron of Tuning" from your Extra Deck
19. Selected Junora the Power Patron of Tuning (Extra Deck)
20. Yes
21. Selected Nervedo the Shadebeast Power Patron (Extra Deck)
22. Link Summon Purification Power Patron (Extra Deck)
23. select Ars Magna of Infinity and Finity (M2)
24. select Junora the Power Patron of Tuning (EMZ-R)
25. Activate Purification Power Patron (EMZ-L): Add 1 "Theorealize" card from your Deck to your hand
26. Selected Theorealize Medius (Deck)
27. Link Summon Medicurius the Power Patron of Illusions (Extra Deck)
28. select Medius the Pure (M3)
29. select Purification Power Patron (EMZ-L)
30. Finish selection
31. No
32. Activate Theorealize Medius (hand): If a "Power Patron" card is on the field: You can Special Summon this card from your hand, then you can add 1 "Theorealize" Spell/Trap from your Deck to your hand
33. Yes
34. Selected Theorealize Past Lull (Deck)
35. Special Summon (procedure) Artmage Non-Finito (Extra Deck)
36. Selected Theorealize Past Lull (hand)
37. Selected Nervedo the Shadebeast Power Patron (hand)
38. Yes
39. Selected Artmage Impasto -Recapture- (Deck)
40. Activate Theorealize Past Lull (GY): Special Summon 1 Fusion, Synchro, or Xyz Monster from your GY
41. Selected Junora the Power Patron of Tuning (GY)
42. Activate Medius the Pure (GY): Shuffle 1 monster from your hand or face-up field into the Deck, and if you do, Special Summon this card
43. Selected Ash Blossom & Joyous Spring (hand)
44. Link Summon S:P Little Knight (Extra Deck)
45. select Medius the Pure (M5)
46. select Junora the Power Patron of Tuning (M3)
47. Yes
48. Special Summon 1 "Diactorus" monster
49. Activate Ars Magna of Purification and Corruption (banishment): Special Summon this card
50. Activate S:P Little Knight (M3): Banish 1 card on the field or GY
51. Selected Purification Power Patron (GY)
52. Selected Artmage Diactorus (Extra Deck)

End board:  LP 8000 | Hand 3 | Deck 31 | Extra 9 | GY 3 | Banished 10   Monsters: M1: Nerva the Power Patron of Creation Lv10 3300/3300 ATK || M2: Artmage Diactorus Lv8 2800/2500 ATK || M3: S:P Little Knight L2←→ 1600  || M4: Artmage Non-Finito Lv7 2400/1500 ATK || M5: Ars Magna of Purification and Corruption Lv8 1000/2100 ATK || EMZ-R: Medicurius the Power Patron of Illusions L3↙↓↘ 9000    Spell/Trap: S1: Ars Magna - "Citrinitas" || S2: Artmage Impasto -Recapture- (Set)   GY: Ars Magna of Infinity and Finity, Nervedo the Shadebeast Power Patron, Junora the Power Patron of Tuning   Banished: Fiendsmith Engraver (face-down), Lacrima the Crimson Tears (face-down), Pendulum Treasure (face-down), Artmage V

## Order 6: best 14.5 [margin 4.22: ss_panama 5.69, elfnote 6.54, despia -0.81, angelechy 5.05] (, worst 14.5) — from forced Activate Griffoh → new ending → new early order
Others: forced Activate Griffoh → new ending 13.95 · forced Activate Griffoh 13.8 · forced Activate Griffoh → new ending → new early order 12.9 · forced Activate Griffoh → new ending → new early order 12.2 · forced Activate Fiendsmith's Sequence 12.1 · tries Special Summon (procedure) Artmage Non-Finito 11.9 · tries Activate Theorealize Liberation 11.65 · forced Activate Theorealize Liberation 11.65 · tries Activate Fiendsmith Engraver 11.65 · forced Activate Theorealize Past Lull 11.05 · opening lanes 9.77 · forced Activate Griffoh → new ending → new ending 9.62 · forced Activate Griffoh → new ending → new ending 9.62 · search 9.41 · tries Activate Small World 9.41 · tries Activate Fiendsmith's Tract 9.41 · forced Link Summon S:P Little Knight 9.41 · forced Activate Light and Darkness Ritual: Ritual Summon 9.41 · forced Activate Mind Shuffle 9.41 · forced Activate Artmage Graflare 9.41 · forced Synchro Summon Chaos Angel 9.41 · forced Special Summon (procedure) Dark Magician of Destruction 9.41 · tries Activate Theorealize Past Lull 9.34

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
15. Selected Junoldo the Shadespirit Power Patron (Deck)
16. Activate Junoldo the Shadespirit Power Patron (M2): Special Summon 1 "Junora the Power Patron of Tuning" from your Extra Deck
17. Selected Junora the Power Patron of Tuning (Extra Deck)
18. Yes
19. Selected Nervedo the Shadebeast Power Patron (Extra Deck)
20. Link Summon Purification Power Patron (Extra Deck)
21. select Junora the Power Patron of Tuning (EMZ-R)
22. select Medius the Pure (M3)
23. Activate Purification Power Patron (EMZ-R): Add 1 "Theorealize" card from your Deck to your hand
24. Activate Ars Magna of Infinity and Finity (banishment): Special Summon this card
25. Activate Ars Magna of Purification and Corruption (banishment): Special Summon this card
26. Selected Theorealize Medius (Deck)
27. Activate Ars Magna of Purification and Corruption (M5): Banish Spells/Traps on the field
28. Selected Ars Magna - "Citrinitas" (S1)
29. Activate Medius the Pure (GY): Shuffle 1 monster from your hand or face-up field into the Deck, and if you do, Special Summon this card
30. Selected Ash Blossom & Joyous Spring (hand)
31. Activate Purification Power Patron (EMZ-R): Link Summon including this card as material
32. Selected Medicurius the Power Patron of Illusions (Extra Deck)
33. select Ars Magna of Infinity and Finity (M3)
34. Finish selection
35. Activate Theorealize Medius (hand): If a "Power Patron" card is on the field: You can Special Summon this card from your hand, then you can add 1 "Theorealize" Spell/Trap from your Deck to your hand
36. Yes
37. Selected Theorealize Liberation (Deck)
38. Activate Theorealize Liberation (hand): Add to your hand, or Special Summon, 1 monster from your Deck with 300 ATK/200 DEF
39. Selected Griffoh (Deck)
40. Add the card(s) to your hand
41. Activate Griffoh (hand): Activate 1 of these effects
42. Set 1 card that mentions "Light and Darkness Ritual"
43. Selected Mind Shuffle (Deck)
44. Activate Mind Shuffle (S1): activate this card
45. Yes
46. Selected Skull Archfiend of Chaos (Deck)
47. Selected Skull Archfiend of Chaos (hand)
48. No
49. Link Summon Purification Power Patron (Extra Deck)
50. select Medius the Pure (M4)
51. select Ars Magna of Purification and Corruption (M5)
52. Yes
53. Special Summon 1 "Diactorus" monster
54. Selected Artmage Diactorus (Extra Deck)
55. Activate Skull Archfiend of Chaos (GY): Special Summon this card
56. select Ars Magna of Purification and Corruption (GY)
57. select Griffoh (GY)
58. select Theorealize Liberation (GY)
59. Default order
60. Link Summon S:P Little Knight (Extra Deck)
61. select Skull Archfiend of Chaos (M5)
62. select Purification Power Patron (M2)
63. Yes
64. Selected Light and Darkness Ritual (Deck)
65. Activate S:P Little Knight (M2): Banish 1 card on the field or GY
66. Selected Junora the Power Patron of Tuning (GY)
67. Selected Magician of Dark Chaos - Black Chaos (Deck)
68. Activate Light and Darkness Ritual (GY): Add both this card and 1 card that mentions "Light and Darkness Ritual" from your GY to your hand
69. Selected Skull Archfiend of Chaos (GY)
70. Set Spell/Trap Light and Darkness Ritual
71. Activate Light and Darkness Ritual (S2): Ritual Summon 1 "Magician of Dark Chaos - Black Chaos" or "Black Luster Soldier - Soldier of Light and Darkness" from your hand
72. Selected Magician of Dark Chaos - Black Chaos (hand)
73. Selected Ars Magna of Infinity and Finity (GY) value 8
74. Yes
75. Selected Light and Darkness Ritual (GY)
76. Special Summon (procedure) Artmage Non-Finito (Extra Deck)
77. Selected Light and Darkness Ritual (hand)
78. Selected Nervedo the Shadebeast Power Patron (hand)
79. Yes
80. Selected Artmage Impasto -Recapture- (Deck)

End board:  LP 8000 | Hand 4 | Deck 29 | Extra 8 | GY 4 | Banished 11   Monsters: M1: Nerva the Power Patron of Creation Lv10 3300/3300 ATK || M2: S:P Little Knight L2←→ 1600  || M3: Artmage Non-Finito Lv7 2400/1500 ATK || M4: Artmage Diactorus Lv8 2800/2500 ATK || M5: Magician of Dark Chaos - Black Chaos Lv8 2800/2600 ATK || EMZ-L: Medicurius the Power Patron of Illusions L3↙↓↘ 9000    Spell/Trap: S1: Mind Shuffle || S2: Artmage Impasto -Recapture- (Set)   GY: Purification Power Patron, Purification Power Patron, Light and Darkness Ritual, Nervedo the Shadebeast Power Patron   Banished: Artmage Finmel (face-down), Fiendsmith's Tract (face-down), Lacrima the Crimson Tears (face-down), Theorealize Past 

## Order 7: best 13.3 [margin 2.87: ss_panama 1.8, elfnote 1.18, despia 0.03, angelechy 9.38] (, worst 13.3) — from tries Special Summon (procedure) Artmage Non-Finito
Others: tries Special Summon (procedure) Artmage Non-Finito → new ending 13.3 · tries Special Summon (procedure) Artmage Non-Finito → new ending 13.3 · tries Special Summon (procedure) Artmage Non-Finito → new early order 13.05 · tries Activate Junoldo the Shadespirit Power Patron 13 · tries Special Summon (procedure) Artmage Non-Finito → new early order 13 · tries Special Summon (procedure) Artmage Non-Finito → new ending 12.85 · forced Activate Mind Shuffle 12 · opening lanes 12 · search 11.65 · tries Activate Vidolium the Unstable Power Patron of Unity 11.65 · tries Activate Ars Magna of Purification and Corruption 11.65 · forced Activate Theorealize Past Lull 11.05 · tries Activate Mind Shuffle 9.41 · forced Link Summon S:P Little Knight 9.41 · tries Activate Mind Shuffle 9.41 · forced Activate Griffoh 9.41 · forced Activate Light and Darkness Ritual: Ritual Summon 9.41 · forced Special Summon (procedure) Dark Magician of Destruction 9.41 · forced Activate Artmage Graflare 9.41 · forced Synchro Summon Chaos Angel 9.41 · forced Activate Theorealize Liberation 9.27 · forced Activate Fiendsmith's Sequence 9.14 · tries Special Summon (procedure) Artmage Non-Finito → new early order 3.55

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
13. Activate Nervedo the Shadebeast Power Patron (M2): Special Summon 1 "Nerva the Power Patron of Creation" from your Extra Deck
14. Selected Nerva the Power Patron of Creation (Extra Deck)
15. Yes
16. Activate Ars Magna of Infinity and Finity (banishment): Special Summon this card
17. Selected Junoldo the Shadespirit Power Patron (Deck)
18. Activate Junoldo the Shadespirit Power Patron (M2): Special Summon 1 "Junora the Power Patron of Tuning" from your Extra Deck
19. Selected Junora the Power Patron of Tuning (Extra Deck)
20. Yes
21. Selected Nervedo the Shadebeast Power Patron (Extra Deck)
22. Link Summon Purification Power Patron (Extra Deck)
23. select Ars Magna of Infinity and Finity (M5)
24. select Junora the Power Patron of Tuning (EMZ-L)
25. Activate Purification Power Patron (EMZ-R): Add 1 "Theorealize" card from your Deck to your hand
26. Selected Theorealize Medius (Deck)
27. Activate Theorealize Medius (hand): If a "Power Patron" card is on the field: You can Special Summon this card from your hand, then you can add 1 "Theorealize" Spell/Trap from your Deck to your hand
28. Activate Purification Power Patron (EMZ-R): Link Summon including this card as material
29. Selected Medicurius the Power Patron of Illusions (Extra Deck)
30. select Medius the Pure (M1)
31. Finish selection
32. Yes
33. Selected Theorealize Past Lull (Deck)
34. No
35. Special Summon (procedure) Artmage Non-Finito (Extra Deck)
36. Selected Theorealize Past Lull (hand)
37. Selected Nervedo the Shadebeast Power Patron (hand)
38. Yes
39. Selected Artmage Impasto -Recapture- (Deck)
40. Activate Theorealize Past Lull (GY): Special Summon 1 Fusion, Synchro, or Xyz Monster from your GY
41. Selected Junora the Power Patron of Tuning (GY)
42. Activate Medius the Pure (GY): Shuffle 1 monster from your hand or face-up field into the Deck, and if you do, Special Summon this card
43. Selected Ash Blossom & Joyous Spring (hand)
44. Link Summon S:P Little Knight (Extra Deck)
45. select Medius the Pure (M3)
46. select Junora the Power Patron of Tuning (M2)
47. Yes
48. Special Summon 1 "Diactorus" monster
49. Activate Ars Magna of Purification and Corruption (banishment): Special Summon this card
50. Selected Artmage Diactorus (Extra Deck)

End board:  LP 8000 | Hand 3 | Deck 31 | Extra 9 | GY 4 | Banished 9   Monsters: M1: Artmage Diactorus Lv8 2800/2500 ATK || M2: Ars Magna of Purification and Corruption Lv8 1000/2100 ATK || M3: S:P Little Knight L2←→ 1600  || M4: Nerva the Power Patron of Creation Lv10 3300/3300 ATK || M5: Artmage Non-Finito Lv7 2400/1500 ATK || EMZ-L: Medicurius the Power Patron of Illusions L3↙↓↘ 9000    Spell/Trap: S1: Ars Magna - "Citrinitas" || S2: Artmage Impasto -Recapture- (Set)   GY: Ars Magna of Infinity and Finity, Purification Power Patron, Nervedo the Shadebeast Power Patron, Junora the Power Patron of Tuning   Banished: Black Luster Soldier - Soldier of Light and Darkness (face-down), Apprentice Illusion 

## Order 8: best 13 [margin 5.1: ss_panama null, elfnote null, despia -0.6, angelechy 8.9] (, worst 13) — from search
Others: forced Activate Fiendsmith's Sequence 13 · tries Activate Junoldo the Shadespirit Power Patron 13 · forced Activate Griffoh 13 · search → new early order 13 · search → new ending 13 · search → new early order 13 · forced Activate Theorealize Past Lull 12.85 · tries Activate Plundered Power Patron Plane - Vidolia 12.85 · search → new ending 12.85 · opening lanes 12.45 · forced Activate Artmage Graflare 11.45 · search → new ending 9.7 · forced Link Summon S:P Little Knight 9.41 · forced Activate Theorealize Liberation 9.41 · forced Activate Mind Shuffle 9.41 · forced Special Summon (procedure) Dark Magician of Destruction 9.41 · forced Synchro Summon Chaos Angel 9.41 · forced Activate Light and Darkness Ritual: Ritual Summon 9.41 · tries Normal Summon Theorealize Medius 9.41 · tries Activate Nervedo the Shadebeast Power Patron 9.41 · tries Activate Vidolium the Unstable Power Patron of Unity 8.42 · tries Activate Plundered Power Patron Plane - Vidolia 8.41 · search → new early order 3.55

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
12. Activate Nervedo the Shadebeast Power Patron (M3): Special Summon 1 "Nerva the Power Patron of Creation" from your Extra Deck
13. Selected Nerva the Power Patron of Creation (Extra Deck)
14. Yes
15. Activate Ars Magna of Infinity and Finity (banishment): Special Summon this card
16. Selected Junoldo the Shadespirit Power Patron (Deck)
17. Activate Junoldo the Shadespirit Power Patron (M4): Special Summon 1 "Junora the Power Patron of Tuning" from your Extra Deck
18. Selected Junora the Power Patron of Tuning (Extra Deck)
19. Yes
20. Selected Nervedo the Shadebeast Power Patron (Extra Deck)
21. Link Summon Purification Power Patron (Extra Deck)
22. select Ars Magna of Infinity and Finity (M2)
23. select Junora the Power Patron of Tuning (EMZ-L)
24. Activate Ars Magna of Purification and Corruption (banishment): Special Summon this card
25. Activate Purification Power Patron (EMZ-L): Add 1 "Theorealize" card from your Deck to your hand
26. Activate Purification Power Patron (EMZ-L): Link Summon including this card as material
27. Selected Medicurius the Power Patron of Illusions (Extra Deck)
28. select Medius the Pure (M1)
29. Finish selection
30. Selected Theorealize Medius (Deck)
31. Activate Ars Magna of Purification and Corruption (M4): Banish Spells/Traps on the field
32. Selected Ars Magna - "Citrinitas" (S1)
33. Activate Theorealize Medius (hand): If a "Power Patron" card is on the field: You can Special Summon this card from your hand, then you can add 1 "Theorealize" Spell/Trap from your Deck to your hand
34. Yes
35. Selected Theorealize Past Lull (Deck)
36. Special Summon (procedure) Artmage Non-Finito (Extra Deck)
37. Selected Theorealize Past Lull (hand)
38. Selected Nervedo the Shadebeast Power Patron (hand)
39. Yes
40. Selected Artmage Impasto -Recapture- (Deck)
41. Activate Theorealize Past Lull (GY): Special Summon 1 Fusion, Synchro, or Xyz Monster from your GY
42. Selected Junora the Power Patron of Tuning (GY)
43. Activate Medius the Pure (GY): Shuffle 1 monster from your hand or face-up field into the Deck, and if you do, Special Summon this card
44. Selected Ars Magna of Purification and Corruption (M4)
45. Link Summon S:P Little Knight (Extra Deck)
46. select Medius the Pure (M4)
47. select Junora the Power Patron of Tuning (M2)
48. Yes
49. Special Summon 1 "Diactorus" monster
50. Selected Artmage Diactorus (Extra Deck)

End board:  LP 8000 | Hand 4 | Deck 31 | Extra 9 | GY 4 | Banished 10   Monsters: M1: Artmage Diactorus Lv8 2800/2500 ATK || M2: S:P Little Knight L2←→ 1600  || M3: Nerva the Power Patron of Creation Lv10 3300/3300 ATK || M5: Artmage Non-Finito Lv7 2400/1500 ATK || EMZ-L: Medicurius the Power Patron of Illusions L3↙↓↘ 9000    Spell/Trap: S1: Artmage Impasto -Recapture- (Set)   GY: Ars Magna of Infinity and Finity, Purification Power Patron, Nervedo the Shadebeast Power Patron, Junora the Power Patron of Tuning   Banished: Nervedo the Shadebeast Power Patron (face-down), Apprentice Illusion Magician (face-down), Theorealize Liberation (face-down), Plundered Power Patron Plane - Vidolia (face-down), Ars 

