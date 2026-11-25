# Evolved lines — Ars Magna of Infinity and Finity, Ash Blossom & Joyous Spring, Ash Blossom & Joyous Spring, Droll & Lock Bird, Ghost Ogre & Snow Rabbit (findlist-1100)
2026-11-25T16:05:44.416Z

8 deck orders (different face-down banishes / draws), 3 opponent hands x o_ss_panama + o_elfnote + o_despia + o_angelechy per line, 15 min searches, 4 mutation rounds.
Fitness = average margin after their turn (what you keep minus what they build; −10 more if they OTK). Higher is better.

**Best line per deck order: average 6.38** (worst order 4.54). Winner came from: tries Activate Fiendsmith's Tract → new ending 1, inf1 → new early order 1, inf1 1, opening lanes 4, opening lanes → new ending → new early order → new ending 1

| seed line | works as written | its score when it works | seed start + search finish (all orders) |
|---|---|---|---|
| inf1 | 8/8 | 0.55 | 4.36 |

## Weak points found automatically
Cards whose face-down banish (by your own costs) hurt the best line most (average best line without vs with that card banished):

| card | orders where it was banished | drop |
|---|---|---|
| Skull Archfiend of Chaos | 3/8 | 1.66 |
| Apprentice Illusion Magician | 4/8 | 1.48 |
| Black Luster Soldier - Soldier of Light and Darkness | 2/8 | 0.84 |
| Fiendsmith Engraver | 2/8 | 0.52 |
| Ars Magna - "Citrinitas" | 3/8 | 0.48 |
| Theorealize Medius | 3/8 | 0.41 |
| Artmage Vandalism -Assault- | 3/8 | 0.34 |
| Nervedo the Shadebeast Power Patron | 2/8 | 0.31 |
| Griffoh | 2/8 | 0.02 |
| Artmage Finmel | 2/8 | -0.03 |

List changes proposed for the list test (data/proposals-findlist-1100.json):
- +1 Skull Archfiend of Chaos, −1 Plundered Power Patron Plane - Vidolia — Skull Archfiend of Chaos: best line 1.66 worse when a cost banished it (3 of 8 orders) — Ars Magna of Infinity and Finity
- +1 Apprentice Illusion Magician, −1 Artmage Vandalism -Assault- — Apprentice Illusion Magician: best line 1.48 worse when a cost banished it (4 of 8 orders) — Ars Magna of Infinity and Finity
- +1 Black Luster Soldier - Soldier of Light and Darkness, −1 Small World — Black Luster Soldier - Soldier of Light and Darkness: best line 0.84 worse when a cost banished it (2 of 8 orders) — Ars Magna of Infinity and Finity
- +1 Fiendsmith Engraver, −1 Plundered Power Patron Plane - Vidolia — Fiendsmith Engraver: best line 0.52 worse when a cost banished it (2 of 8 orders) — Ars Magna of Infinity and Finity
- +1 Skull Archfiend of Chaos — Skull Archfiend of Chaos: best line 1.66 worse when a cost banished it (3 of 8 orders) — Ars Magna of Infinity and Finity (add only: deck grows, up to 60)
- +1 Apprentice Illusion Magician — Apprentice Illusion Magician: best line 1.48 worse when a cost banished it (4 of 8 orders) — Ars Magna of Infinity and Finity (add only: deck grows, up to 60)
- +1 Black Luster Soldier - Soldier of Light and Darkness — Black Luster Soldier - Soldier of Light and Darkness: best line 0.84 worse when a cost banished it (2 of 8 orders) — Ars Magna of Infinity and Finity (add only: deck grows, up to 60)
- +1 Fiendsmith Engraver — Fiendsmith Engraver: best line 0.52 worse when a cost banished it (2 of 8 orders) — Ars Magna of Infinity and Finity (add only: deck grows, up to 60)

Effects the search had not used, tried on purpose (best result so far):
- Activate Junoldo the Shadespirit Power Patron: 7.35
- Activate Prohibited Power Patron Portal - Terminus: 7.11
- Activate Fiendsmith's Tract: 7.05
- Normal Summon Theorealize Medius: 6.59
- Activate Fiendsmith Engraver: 6.5
- Activate Black Chaos: 5.69
- Activate Pendulum Treasure: 5.25
- Link Summon Fiendsmith's Requiem: 4.79

## Order 1: best 7.77 (ss_panama 9.15, elfnote 9.15, despia 4.55, angelechy 9, worst -0.05) — from tries Activate Fiendsmith's Tract → new ending
Others: tries Activate Fiendsmith's Tract 7.05 · tries Activate Fiendsmith's Tract → new ending → new ending 6.86 · tries Activate Fiendsmith's Tract → new ending → new early order 6.79 · opening lanes 6.54 · tries Activate Fiendsmith Engraver 6.5 · search 2.93 · inf1 2.45 · inf1 -0.04 · tries Activate Fiendsmith's Tract → new ending → new early order -0.49

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
17. Activate Junoldo the Shadespirit Power Patron (M4): Special Summon 1 "Junora the Power Patron of Tuning" from your Extra Deck
18. Selected Junora the Power Patron of Tuning (Extra Deck)
19. Yes
20. Selected Nervedo the Shadebeast Power Patron (Extra Deck)
21. Link Summon Purification Power Patron (Extra Deck)
22. select Ars Magna of Infinity and Finity (M3)
23. select Junora the Power Patron of Tuning (EMZ-R)
24. Activate Ars Magna of Purification and Corruption (banishment): Special Summon this card
25. Activate Purification Power Patron (EMZ-R): Add 1 "Theorealize" card from your Deck to your hand
26. Activate Purification Power Patron (EMZ-R): Link Summon including this card as material
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
43. Link Summon S:P Little Knight (Extra Deck)
44. select Ars Magna of Purification and Corruption (M4)
45. select Junora the Power Patron of Tuning (M3)
46. Yes
47. Selected Nervedo the Shadebeast Power Patron (GY)
48. Yes
49. Special Summon 1 "Diactorus" monster
50. Selected Artmage Diactorus (Extra Deck)

End board:  LP 8000 | Hand 4 | Deck 30 | Extra 9 | GY 5 | Banished 10   Monsters: M2: Nerva the Power Patron of Creation Lv10 3300/3300 ATK || M3: Artmage Diactorus Lv8 2800/2500 ATK || M4: S:P Little Knight L2←→ 1600  || M5: Artmage Non-Finito Lv7 2400/1500 ATK || EMZ-R: Medicurius the Power Patron of Illusions L3↙↓↘ 9000    Spell/Trap: S1: Artmage Impasto -Recapture- (Set)   GY: Ars Magna of Infinity and Finity, Medius the Pure, Purification Power Patron, Junora the Power Patron of Tuning, Ars Magna of Purification and Corruption   Banished: Infinite Impermanence (face-down), Small World (face-down), Light and Darkness Ritual (face-down), Lacrima the Crimson Tears (face-down), Fiendsmith's Tract (fac

## Order 2: best 4.97 (ss_panama null, elfnote 3.38, despia 1.53, angelechy 8.95, worst -0.5) — from inf1 → new early order
Others: inf1 4.85 · tries Link Summon Fiendsmith's Requiem 4.79 · tries Activate Fiendsmith Engraver 4.62 · opening lanes 4.55 · search 2.19 · inf1 → new ending 1.24 · inf1 0.29 · inf1 → new ending -1.3 · inf1 → new early order -1.64

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
12. Activate Nervedo the Shadebeast Power Patron (M5): Special Summon 1 "Nerva the Power Patron of Creation" from your Extra Deck
13. Selected Nerva the Power Patron of Creation (Extra Deck)
14. Yes
15. Activate Ars Magna of Infinity and Finity (banishment): Special Summon this card
16. Selected Junoldo the Shadespirit Power Patron (Deck)
17. Activate Junoldo the Shadespirit Power Patron (M2): Special Summon 1 "Junora the Power Patron of Tuning" from your Extra Deck
18. Selected Junora the Power Patron of Tuning (Extra Deck)
19. Yes
20. Selected Nervedo the Shadebeast Power Patron (Extra Deck)
21. Link Summon Purification Power Patron (Extra Deck)
22. select Ars Magna of Infinity and Finity (M3)
23. select Junora the Power Patron of Tuning (EMZ-R)
24. Activate Ars Magna of Purification and Corruption (banishment): Special Summon this card
25. Activate Purification Power Patron (EMZ-L): Add 1 "Theorealize" card from your Deck to your hand
26. Activate Purification Power Patron (EMZ-L): Link Summon including this card as material
27. Selected Medicurius the Power Patron of Illusions (Extra Deck)
28. select Medius the Pure (M4)
29. Finish selection
30. Selected Theorealize Medius (Deck)
31. Activate Ars Magna of Purification and Corruption (M2): Banish Spells/Traps on the field
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
44. Selected Ars Magna of Purification and Corruption (M2)
45. Link Summon S:P Little Knight (Extra Deck)
46. select Medius the Pure (M2)
47. select Junora the Power Patron of Tuning (M3)
48. Yes
49. Special Summon 1 "Diactorus" monster
50. Selected Artmage Diactorus (Extra Deck)

End board:  LP 8000 | Hand 4 | Deck 31 | Extra 9 | GY 4 | Banished 10   Monsters: M1: Nerva the Power Patron of Creation Lv10 3300/3300 ATK || M3: S:P Little Knight L2←→ 1600  || M4: Artmage Diactorus Lv8 2800/2500 ATK || M5: Artmage Non-Finito Lv7 2400/1500 ATK || EMZ-R: Medicurius the Power Patron of Illusions L3↙↓↘ 9000    Spell/Trap: S1: Artmage Impasto -Recapture- (Set)   GY: Ars Magna of Infinity and Finity, Purification Power Patron, Nervedo the Shadebeast Power Patron, Junora the Power Patron of Tuning   Banished: Small World (face-down), Artmage Finmel (face-down), Griffoh (face-down), Apprentice Illusion Magician (face-down), Fiendsmith Engraver (face-down), Theorealize Medius (face-down), Ar

## Order 3: best 5.86 (ss_panama 7.65, elfnote 4.54, despia 5.06, angelechy 7.35, worst 1.58) — from inf1 (seed followed 22/22 steps)
Others: inf1 → new early order 5.3 · inf1 → new ending 4 · tries Special Summon (procedure) Artmage Non-Finito 3.88 · opening lanes 1.81 · tries Activate Mind Shuffle 1.63 · search 1.6 · inf1 → new ending 1.14 · inf1 1.04 · inf1 → new early order -1.97

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
18. select Medius the Pure (M1)
19. select Ars Magna of Infinity and Finity (M2)
20. Yes
21. Link Summon Purification Power Patron (Extra Deck)
22. select Ars Magna of Purification and Corruption (M1)
23. select Nerva the Power Patron of Creation (M5)
24. Yes
25. Activate Purification Power Patron (EMZ-L): Link Summon including this card as material
26. Selected Medicurius the Power Patron of Illusions (Extra Deck)
27. select Purification Power Patron (M2)
28. Finish selection
29. Selected Theorealize Medius (Deck)
30. Activate Theorealize Medius (hand): If a "Power Patron" card is on the field: You can Special Summon this card from your hand, then you can add 1 "Theorealize" Spell/Trap from your Deck to your hand
31. Yes
32. Selected Theorealize Liberation (Deck)
33. Activate Medius the Pure (GY): Shuffle 1 monster from your hand or face-up field into the Deck, and if you do, Special Summon this card
34. Selected Ash Blossom & Joyous Spring (hand)
35. Activate Theorealize Liberation (hand): Add to your hand, or Special Summon, 1 monster from your Deck with 300 ATK/200 DEF
36. Selected Griffoh (Deck)
37. Add the card(s) to your hand
38. Activate Griffoh (hand): Activate 1 of these effects
39. Set 1 card that mentions "Light and Darkness Ritual"
40. Selected Mind Shuffle (Deck)
41. Activate Mind Shuffle (S2): activate this card
42. Yes
43. Selected Skull Archfiend of Chaos (Deck)
44. Selected Skull Archfiend of Chaos (hand)
45. No
46. Activate Skull Archfiend of Chaos (GY): Special Summon this card
47. select Ars Magna of Infinity and Finity (GY)
48. select Griffoh (GY)
49. select Theorealize Liberation (GY)
50. Default order
51. Synchro Summon Chaos Angel (Extra Deck)
52. select Medius the Pure (M1)
53. select Skull Archfiend of Chaos (M5)
54. Activate Skull Archfiend of Chaos (GY): Add 1 Ritual Monster mentioned on that card from your Deck to your hand
55. Selected Light and Darkness Ritual (Deck)
56. Activate Theorealize Medius (M4): Activate 1 of these effects
57. Special Summon 1 "Diactorus" monster
58. Selected Artmage Diactorus (Extra Deck)
59. Selected Black Luster Soldier - Soldier of Light and Darkness (Deck)
60. Activate Light and Darkness Ritual (GY): Add both this card and 1 card that mentions "Light and Darkness Ritual" from your GY to your hand
61. Selected Skull Archfiend of Chaos (GY)

End board:  LP 8000 | Hand 6 | Deck 33 | Extra 10 | GY 4 | Banished 5   Monsters: M3: Artmage Finmel Lv7 2400/1500 ATK || M4: Artmage Diactorus Lv8 2800/2500 ATK || M5: Chaos Angel Lv10 3500/2800 ATK || EMZ-R: Medicurius the Power Patron of Illusions L3↙↓↘ 9000    Spell/Trap: S1: Ars Magna - "Citrinitas" || S2: Mind Shuffle   GY: Ars Magna of Purification and Corruption, Nerva the Power Patron of Creation, Purification Power Patron, Purification Power Patron   Banished: Artmage Impasto -Recapture- (face-down), Magician of Dark Chaos - Black Chaos (face-down), Ars Magna - "Citrinitas" (face-down), Medius the Pure, Theorealize Medius   Hand: Skull Archfiend of Chaos, Black Luster Soldier - Soldier of Lig

## Order 4: best 7.43 (ss_panama 7.12, elfnote 4.96, despia 9.07, angelechy 9, worst 4.78) — from opening lanes
Others: opening lanes → new ending 7.16 · tries Activate Prohibited Power Patron Portal - Terminus 7.11 · tries Normal Summon Theorealize Medius 6.59 · opening lanes → new early order 6.55 · search 6.45 · opening lanes → new early order 6.14 · opening lanes → new ending 5.54 · inf1 3.94 · inf1 0.95

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
17. Activate Junoldo the Shadespirit Power Patron (M3): Special Summon 1 "Junora the Power Patron of Tuning" from your Extra Deck
18. Selected Junora the Power Patron of Tuning (Extra Deck)
19. Yes
20. Selected Nervedo the Shadebeast Power Patron (Extra Deck)
21. Link Summon Purification Power Patron (Extra Deck)
22. select Ars Magna of Infinity and Finity (M1)
23. select Junora the Power Patron of Tuning (EMZ-L)
24. Activate Purification Power Patron (EMZ-L): Add 1 "Theorealize" card from your Deck to your hand
25. Activate Ars Magna of Purification and Corruption (banishment): Special Summon this card
26. Activate Purification Power Patron (EMZ-L): Link Summon including this card as material
27. Selected Medicurius the Power Patron of Illusions (Extra Deck)
28. select Medius the Pure (M4)
29. Finish selection
30. Selected Theorealize Medius (Deck)
31. Activate Ars Magna of Purification and Corruption (M3): Banish Spells/Traps on the field
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
44. Selected Junora the Power Patron of Tuning (M2)
45. Link Summon S:P Little Knight (Extra Deck)
46. select Medius the Pure (M2)
47. select Ars Magna of Purification and Corruption (M3)
48. Yes
49. Special Summon 1 "Diactorus" monster
50. Selected Artmage Diactorus (Extra Deck)

End board:  LP 8000 | Hand 4 | Deck 30 | Extra 10 | GY 4 | Banished 10   Monsters: M1: Artmage Non-Finito Lv7 2400/1500 ATK || M2: Artmage Diactorus Lv8 2800/2500 ATK || M3: S:P Little Knight L2←→ 1600  || M5: Nerva the Power Patron of Creation Lv10 3300/3300 ATK || EMZ-L: Medicurius the Power Patron of Illusions L3↙↓↘ 9000    Spell/Trap: S1: Artmage Impasto -Recapture- (Set)   GY: Ars Magna of Infinity and Finity, Purification Power Patron, Nervedo the Shadebeast Power Patron, Ars Magna of Purification and Corruption   Banished: Fiendsmith's Tract (face-down), Light and Darkness Ritual (face-down), Small World (face-down), Pendulum Treasure (face-down), Apprentice Illusion Magician (face-down), Infini

## Order 5: best 7.01 (ss_panama -0.65, elfnote null, despia 8.85, angelechy 8.95, worst -0.65) — from opening lanes
Others: opening lanes → new early order 6.13 · opening lanes → new ending 5.28 · inf1 4.65 · opening lanes → new ending 4.17 · tries Activate Small World 3.97 · search 3.6 · tries Activate Mind Shuffle 2.18 · inf1 0.14 · opening lanes → new early order -3.05

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
17. Activate Junoldo the Shadespirit Power Patron (M4): Special Summon 1 "Junora the Power Patron of Tuning" from your Extra Deck
18. Selected Junora the Power Patron of Tuning (Extra Deck)
19. Yes
20. Selected Nervedo the Shadebeast Power Patron (Extra Deck)
21. Link Summon Purification Power Patron (Extra Deck)
22. select Ars Magna of Infinity and Finity (M2)
23. select Junora the Power Patron of Tuning (EMZ-R)
24. Activate Purification Power Patron (EMZ-L): Add 1 "Theorealize" card from your Deck to your hand
25. Selected Theorealize Medius (Deck)
26. Activate Purification Power Patron (EMZ-L): Link Summon including this card as material
27. Selected Medicurius the Power Patron of Illusions (Extra Deck)
28. select Medius the Pure (M3)
29. Finish selection
30. Yes
31. Activate Ars Magna of Purification and Corruption (M2): Banish Spells/Traps on the field
32. Selected Ars Magna - "Citrinitas" (S1)
33. Activate Medius the Pure (GY): Shuffle 1 monster from your hand or face-up field into the Deck, and if you do, Special Summon this card
34. Selected Ars Magna of Purification and Corruption (M2)
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
45. Link Summon S:P Little Knight (Extra Deck)
46. select Medius the Pure (M4)
47. select Junora the Power Patron of Tuning (M3)
48. Yes
49. Special Summon 1 "Diactorus" monster
50. Selected Artmage Diactorus (Extra Deck)

End board:  LP 8000 | Hand 4 | Deck 31 | Extra 9 | GY 4 | Banished 10   Monsters: M1: Nerva the Power Patron of Creation Lv10 3300/3300 ATK || M3: Artmage Diactorus Lv8 2800/2500 ATK || M4: S:P Little Knight L2←→ 1600  || M5: Artmage Non-Finito Lv7 2400/1500 ATK || EMZ-R: Medicurius the Power Patron of Illusions L3↙↓↘ 9000    Spell/Trap: S1: Artmage Impasto -Recapture- (Set)   GY: Ars Magna of Infinity and Finity, Purification Power Patron, Nervedo the Shadebeast Power Patron, Junora the Power Patron of Tuning   Banished: Fiendsmith Engraver (face-down), Lacrima the Crimson Tears (face-down), Pendulum Treasure (face-down), Artmage Vandalism -Assault- (face-down), Fiendsmith Engraver (face-down), Black 

## Order 6: best 7.85 (ss_panama 0.27, elfnote 7.54, despia 8.09, angelechy 10.45, worst 0.27) — from opening lanes
Others: tries Activate Junoldo the Shadespirit Power Patron 7.35 · inf1 6.44 · tries Activate Black Chaos 5.69 · search 3.76 · inf1 1.27

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
15. Selected Junoldo the Shadespirit Power Patron (Deck)
16. Activate Junoldo the Shadespirit Power Patron (M3): Special Summon 1 "Junora the Power Patron of Tuning" from your Extra Deck
17. Selected Junora the Power Patron of Tuning (Extra Deck)
18. Yes
19. Selected Nervedo the Shadebeast Power Patron (Extra Deck)
20. Link Summon Purification Power Patron (Extra Deck)
21. select Medius the Pure (M1)
22. select Junora the Power Patron of Tuning (EMZ-R)
23. Activate Ars Magna of Purification and Corruption (banishment): Special Summon this card
24. Activate Ars Magna of Infinity and Finity (banishment): Special Summon this card
25. Activate Purification Power Patron (EMZ-L): Add 1 "Theorealize" card from your Deck to your hand
26. Selected Theorealize Medius (Deck)
27. Activate Theorealize Medius (hand): If a "Power Patron" card is on the field: You can Special Summon this card from your hand, then you can add 1 "Theorealize" Spell/Trap from your Deck to your hand
28. Yes
29. Selected Theorealize Liberation (Deck)
30. Activate Medius the Pure (GY): Shuffle 1 monster from your hand or face-up field into the Deck, and if you do, Special Summon this card
31. Selected Ash Blossom & Joyous Spring (hand)
32. Activate Theorealize Liberation (hand): Add to your hand, or Special Summon, 1 monster from your Deck with 300 ATK/200 DEF
33. Selected Griffoh (Deck)
34. Add the card(s) to your hand
35. Activate Theorealize Liberation (GY): Treat 1 monster you control as a Tuner this turn
36. Selected Nerva the Power Patron of Creation (M4)
37. Activate Griffoh (hand): Activate 1 of these effects
38. Set 1 card that mentions "Light and Darkness Ritual"
39. Activate Ars Magna of Infinity and Finity (M1): Banish 1 monster on the field
40. Selected Ars Magna of Purification and Corruption (M3)
41. Selected Mind Shuffle (Deck)
42. Yes
43. Special Summon 1 "Diactorus" monster
44. Selected Artmage Diactorus (Extra Deck)
45. Activate Mind Shuffle (S2): activate this card
46. No
47. Activate Mind Shuffle (S2): Add 1 appropriate monster to your hand
48. Selected Skull Archfiend of Chaos (Deck)
49. Selected Skull Archfiend of Chaos (hand)
50. No
51. Activate Skull Archfiend of Chaos (GY): Special Summon this card
52. select Theorealize Liberation (banishment)
53. select Griffoh (GY)
54. select Junora the Power Patron of Tuning (GY)
55. Activate Purification Power Patron (EMZ-L): Link Summon including this card as material
56. Selected Medicurius the Power Patron of Illusions (Extra Deck)
57. select Medius the Pure (M5)
58. Finish selection
59. Default order
60. Link Summon S:P Little Knight (Extra Deck)
61. select Skull Archfiend of Chaos (M5)
62. select Ars Magna of Infinity and Finity (M1)
63. Yes
64. Selected Light and Darkness Ritual (Deck)
65. Selected Magician of Dark Chaos - Black Chaos (Deck)
66. Activate Light and Darkness Ritual (GY): Add both this card and 1 card that mentions "Light and Darkness Ritual" from your GY to your hand
67. Selected Skull Archfiend of Chaos (GY)
68. Activate Light and Darkness Ritual (hand): Ritual Summon 1 "Magician of Dark Chaos - Black Chaos" or "Black Luster Soldier - Soldier of Light and Darkness" from your hand
69. Selected Magician of Dark Chaos - Black Chaos (hand)
70. Selected Ars Magna of Infinity and Finity (GY) value 8
71. Yes
72. Selected Light and Darkness Ritual (GY)
73. Special Summon (procedure) Artmage Non-Finito (Extra Deck)
74. Selected Light and Darkness Ritual (hand)
75. Selected Nervedo the Shadebeast Power Patron (hand)
76. Yes
77. Selected Artmage Impasto -Recapture- (Deck)

End board:  LP 8000 | Hand 4 | Deck 28 | Extra 10 | GY 3 | Banished 10   Monsters: M1: S:P Little Knight L2←→ 1600  || M2: Artmage Non-Finito Lv7 2400/1500 ATK || M3: Artmage Diactorus Lv8 2800/2500 DEF || M4: Nerva the Power Patron of Creation Lv10 3300/3300 ATK || M5: Magician of Dark Chaos - Black Chaos Lv8 2800/2600 ATK || EMZ-L: Medicurius the Power Patron of Illusions L3↙↓↘ 9000    Spell/Trap: S1: Ars Magna - "Citrinitas" || S2: Mind Shuffle || S3: Artmage Impasto -Recapture- (Set)   GY: Purification Power Patron, Light and Darkness Ritual, Nervedo the Shadebeast Power Patron   Banished: Artmage Finmel (face-down), Fiendsmith's Tract (face-down), Lacrima the Crimson Tears (face-down), Theorealize

## Order 7: best 5.64 (ss_panama 2.68, elfnote null, despia 3.22, angelechy 9.05, worst -1.64) — from opening lanes
Others: opening lanes → new ending 5.63 · tries Activate Pendulum Treasure 5.25 · opening lanes → new ending 4.85 · inf1 3.84 · opening lanes → new early order 3.52 · search 2.88 · opening lanes → new early order 2.36 · tries Activate Vidolium the Unstable Power Patron of Unity 0.75 · inf1 0.41

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
15. Selected Junoldo the Shadespirit Power Patron (Deck)
16. Activate Junoldo the Shadespirit Power Patron (M3): Special Summon 1 "Junora the Power Patron of Tuning" from your Extra Deck
17. Selected Junora the Power Patron of Tuning (Extra Deck)
18. Yes
19. Selected Nervedo the Shadebeast Power Patron (Extra Deck)
20. Link Summon Purification Power Patron (Extra Deck)
21. select Junora the Power Patron of Tuning (EMZ-L)
22. select Medius the Pure (M4)
23. Activate Purification Power Patron (EMZ-L): Add 1 "Theorealize" card from your Deck to your hand
24. Activate Ars Magna of Purification and Corruption (banishment): Special Summon this card
25. Activate Ars Magna of Infinity and Finity (banishment): Special Summon this card
26. Selected Theorealize Medius (Deck)
27. Activate Ars Magna of Purification and Corruption (M4): Banish Spells/Traps on the field
28. Selected Ars Magna - "Citrinitas" (S1)
29. Activate Theorealize Medius (hand): If a "Power Patron" card is on the field: You can Special Summon this card from your hand, then you can add 1 "Theorealize" Spell/Trap from your Deck to your hand
30. Yes
31. Selected Theorealize Past Lull (Deck)
32. Activate Purification Power Patron (EMZ-L): Link Summon including this card as material
33. Selected Medicurius the Power Patron of Illusions (Extra Deck)
34. select Ars Magna of Purification and Corruption (M4)
35. Finish selection
36. Special Summon (procedure) Artmage Non-Finito (Extra Deck)
37. Selected Theorealize Past Lull (hand)
38. Selected Nervedo the Shadebeast Power Patron (hand)
39. Yes
40. Selected Artmage Impasto -Recapture- (Deck)
41. Activate Theorealize Past Lull (GY): Special Summon 1 Fusion, Synchro, or Xyz Monster from your GY
42. Selected Junora the Power Patron of Tuning (GY)
43. Link Summon S:P Little Knight (Extra Deck)
44. select Junora the Power Patron of Tuning (M5)
45. select Ars Magna of Infinity and Finity (M2)
46. Yes
47. Selected Purification Power Patron (GY)
48. Yes
49. Special Summon 1 "Diactorus" monster
50. Selected Artmage Diactorus (Extra Deck)

End board:  LP 8000 | Hand 4 | Deck 30 | Extra 9 | GY 5 | Banished 10   Monsters: M1: Nerva the Power Patron of Creation Lv10 3300/3300 ATK || M3: Artmage Diactorus Lv8 2800/2500 ATK || M4: Artmage Non-Finito Lv7 2400/1500 ATK || M5: S:P Little Knight L2←→ 1600  || EMZ-R: Medicurius the Power Patron of Illusions L3↙↓↘ 9000    Spell/Trap: S1: Artmage Impasto -Recapture- (Set)   GY: Medius the Pure, Ars Magna of Purification and Corruption, Nervedo the Shadebeast Power Patron, Ars Magna of Infinity and Finity, Junora the Power Patron of Tuning   Banished: Black Luster Soldier - Soldier of Light and Darkness (face-down), Apprentice Illusion Magician (face-down), Mind Shuffle (face-down), Skull Archfiend o

## Order 8: best 4.54 (ss_panama null, elfnote 5.08, despia -2.52, angelechy 8.9, worst -4.3) — from opening lanes → new ending → new early order → new ending
Others: opening lanes → new ending → new early order 4.43 · opening lanes → new ending → new early order → new ending → new early order 4.24 · opening lanes → new ending 4.21 · opening lanes 4.2 · tries Activate Artmage Vandalism -Assault- 3.77 · search 3.73 · tries Activate Artmage Vandalism -Assault- 3.04 · inf1 2.82 · inf1 0.31

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
24. select Junora the Power Patron of Tuning (M4)
25. Activate Ars Magna of Purification and Corruption (banishment): Special Summon this card
26. Activate Purification Power Patron (EMZ-L): Add 1 "Theorealize" card from your Deck to your hand
27. Activate Purification Power Patron (EMZ-L): Link Summon including this card as material
28. Selected Medicurius the Power Patron of Illusions (Extra Deck)
29. select Medius the Pure (M3)
30. Finish selection
31. Selected Theorealize Medius (Deck)
32. Activate Ars Magna of Purification and Corruption (M3): Banish Spells/Traps on the field
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
44. Link Summon S:P Little Knight (Extra Deck)
45. select Ars Magna of Purification and Corruption (M3)
46. select Junora the Power Patron of Tuning (M5)
47. Yes
48. Selected Purification Power Patron (GY)
49. Yes
50. Special Summon 1 "Diactorus" monster
51. Selected Artmage Diactorus (Extra Deck)

End board:  LP 8000 | Hand 4 | Deck 30 | Extra 9 | GY 5 | Banished 10   Monsters: M1: Nerva the Power Patron of Creation Lv10 3300/3300 ATK || M3: Artmage Diactorus Lv8 2800/2500 ATK || M4: Artmage Non-Finito Lv7 2400/1500 ATK || M5: S:P Little Knight L2←→ 1600  || EMZ-R: Medicurius the Power Patron of Illusions L3↙↓↘ 9000    Spell/Trap: S1: Artmage Impasto -Recapture- (Set)   GY: Ars Magna of Infinity and Finity, Medius the Pure, Nervedo the Shadebeast Power Patron, Ars Magna of Purification and Corruption, Junora the Power Patron of Tuning   Banished: Nervedo the Shadebeast Power Patron (face-down), Apprentice Illusion Magician (face-down), Theorealize Liberation (face-down), Plundered Power Patron P

