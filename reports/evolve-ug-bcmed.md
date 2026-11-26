# Evolved lines — Black Chaos, Medius the Pure, Ash Blossom & Joyous Spring, Droll & Lock Bird, Ghost Ogre & Snow Rabbit (findlist-1100)
2026-11-26T19:11:21.122Z

8 deck orders (different face-down banishes / draws), 3 opponent hands x o_ss_panama + o_elfnote + o_despia + o_angelechy per line, 15 min searches, 4 mutation rounds.
Fitness = end-board interruptions (the lab scorer, src/disrupt.mjs: wipe 2, negate 1-1.5, banish/protection less; hand traps kept count 1 each). The winner of each order is also played into the opponent decks: margin after their turn shown beside it.

**Margin after their turn (winners): average null** (worst 99)

**Best line per deck order: average 13.99** (worst order 13.75). Winner came from: tries Normal Summon Ars Magna of Purification and Corruption 1, tries Activate Nervedo the Shadebeast Power Patron 1, tries Activate Junoldo the Shadespirit Power Patron 1, tries Activate Fiendsmith Engraver 1

## Weak points found automatically
Cards whose face-down banish (by your own costs) hurt the best line most (average best line without vs with that card banished):

| card | orders where it was banished | drop |
|---|---|---|
| Griffoh | 3/8 | 0.28 |
| Prohibited Power Patron Portal - Terminus | 3/8 | 0.28 |
| Pendulum Treasure | 3/8 | 0.28 |
| Nervedo the Shadebeast Power Patron | 2/8 | 0.03 |
| Dark Magical Circle | 2/8 | -0.03 |
| Magician of Dark Chaos - Black Chaos | 2/8 | -0.03 |
| Fiendsmith Engraver | 2/8 | -0.03 |
| Medius the Pure | 3/8 | -0.25 |
| Infinite Impermanence | 3/8 | -0.25 |
| Vidolium the Unstable Power Patron of Unity | 3/8 | -0.32 |

Effects the search had not used, tried on purpose (best result so far):
- Activate Junoldo the Shadespirit Power Patron: 14.2
- Normal Summon Ars Magna of Purification and Corruption: 14.2
- Activate Medius the Pure: 13.9
- Activate Pendulum Treasure: 13.9
- Activate Fiendsmith Engraver: 13.8
- Activate Nervedo the Shadebeast Power Patron: 13.75
- Normal Summon Nervedo the Shadebeast Power Patron: 13.75
- Normal Summon Ars Magna of Infinity and Finity: 13.75

## Order 1: best 14.2 (, worst 14.2) — from tries Normal Summon Ars Magna of Purification and Corruption
Others: tries Activate Medius the Pure 13.9 · search 13.75 · tries Normal Summon Ars Magna of Infinity and Finity 13.75 · tries Activate Small World 13.35 · tries Normal Summon Ars Magna of Purification and Corruption → new early order 13.3 · tries Normal Summon Ars Magna of Purification and Corruption → new early order 12.9 · opening lanes 12.45 · tries Normal Summon Ars Magna of Purification and Corruption → new ending 12.15 · tries Activate Fiendsmith's Sequence 12 · tries Activate Vidolium the Unstable Power Patron of Unity 11.5

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
17. Selected Magician of Dark Chaos - Black Chaos (M1)
18. Yes
19. Selected Apprentice Illusion Magician (Deck)
20. Normal Summon Medius the Pure (hand)
21. Yes
22. Selected Nervedo the Shadebeast Power Patron (Deck)
23. Add the card(s) to your hand
24. Special Summon (procedure) Artmage Non-Finito (Extra Deck)
25. Selected Light and Darkness Ritual (hand)
26. Selected Nervedo the Shadebeast Power Patron (hand)
27. Yes
28. Selected Artmage Impasto -Recapture- (Deck)
29. Link Summon Purification Power Patron (Extra Deck)
30. select Medius the Pure (M4)
31. select Dark Magician of Destruction (M3)
32. Yes
33. Selected Theorealize Medius (Deck)
34. Activate Medius the Pure (GY): Shuffle 1 monster from your hand or face-up field into the Deck, and if you do, Special Summon this card
35. Selected Apprentice Illusion Magician (hand)
36. Activate Theorealize Medius (hand): If a "Power Patron" card is on the field: You can Special Summon this card from your hand, then you can add 1 "Theorealize" Spell/Trap from your Deck to your hand
37. Yes
38. Selected Theorealize Liberation (Deck)
39. Activate Theorealize Liberation (hand): Add to your hand, or Special Summon, 1 monster from your Deck with 300 ATK/200 DEF
40. Activate Purification Power Patron (EMZ-L): Link Summon including this card as material
41. Selected Medicurius the Power Patron of Illusions (Extra Deck)
42. select Medius the Pure (M2)
43. Finish selection
44. Selected Nervedo the Shadebeast Power Patron (Deck)
45. Special Summon it
46. Yes
47. Special Summon 1 "Diactorus" monster
48. Selected Artmage Diactorus (Extra Deck)
49. Activate Nervedo the Shadebeast Power Patron (M4): Special Summon 1 "Nerva the Power Patron of Creation" from your Extra Deck
50. Selected Nerva the Power Patron of Creation (Extra Deck)
51. Yes
52. Selected Artmage Graflare (Deck)

End board:  LP 8000 | Hand 4 | Deck 31 | Extra 10 | GY 5 | Banished 7   Monsters: M1: Artmage Non-Finito Lv7 2400/1500 ATK || M3: Nerva the Power Patron of Creation Lv10 3300/3300 ATK || M4: Artmage Graflare Lv5 2100/1500 ATK || M5: Artmage Diactorus Lv8 2800/2500 ATK || EMZ-R: Medicurius the Power Patron of Illusions L3↙↓↘ 3000    Spell/Trap: S1: Mind Shuffle || S2: Artmage Impasto -Recapture- (Set)   GY: Light and Darkness Ritual, Nervedo the Shadebeast Power Patron, Dark Magician of Destruction, Purification Power Patron, Theorealize Liberation   Banished: Black Chaos, Magician of Dark Chaos - Black Chaos, Medius the Pure, Theorealize Medius, Theorealize Medius (face-down), Griffoh (face-down), Artm

## Order 2: best 13.75 (, worst 13.75) — from tries Activate Nervedo the Shadebeast Power Patron
Others: tries Activate Nervedo the Shadebeast Power Patron → new early order 13.75 · tries Activate Nervedo the Shadebeast Power Patron → new ending 13.75 · tries Activate Junoldo the Shadespirit Power Patron 13.6 · tries Activate Vidolium the Unstable Power Patron of Unity 13.5 · search 13 · opening lanes 12.9 · tries Activate Light and Darkness Ritual 12.8 · tries Activate Junoldo the Shadespirit Power Patron 12.65 · tries Activate Nervedo the Shadebeast Power Patron → new early order 12.5 · tries Activate Nervedo the Shadebeast Power Patron → new ending 11.03 · tries Activate Ars Magna of Purification and Corruption 10.86

1. Activate Black Chaos (hand): Special Summon ("Black Chaos")
2. Selected Mind Shuffle (Deck)
3. Activate Mind Shuffle (S1): Add 1 appropriate monster to your hand
4. Selected Skull Archfiend of Chaos (Deck)
5. Selected Skull Archfiend of Chaos (hand)
6. Yes
7. Selected Light and Darkness Ritual (Deck)
8. Selected Black Luster Soldier - Soldier of Light and Darkness (Deck)
9. Activate Light and Darkness Ritual (GY): Add both this card and 1 card that mentions "Light and Darkness Ritual" from your GY to your hand
10. Selected Black Chaos (GY)
11. Special Summon (procedure) Black Chaos (hand)
12. select Black Luster Soldier - Soldier of Light and Darkness (hand)
13. Normal Summon Medius the Pure (hand)
14. Yes
15. Selected Nervedo the Shadebeast Power Patron (Deck)
16. Special Summon it
17. Activate Nervedo the Shadebeast Power Patron (M5): Special Summon 1 "Nerva the Power Patron of Creation" from your Extra Deck
18. Selected Nerva the Power Patron of Creation (Extra Deck)
19. Yes
20. Selected Junoldo the Shadespirit Power Patron (Deck)
21. Special Summon (procedure) Dark Magician of Destruction (Extra Deck)
22. Selected Black Chaos (M3)
23. Yes
24. Selected Apprentice Illusion Magician (Deck)
25. Activate Junoldo the Shadespirit Power Patron (M5): Special Summon 1 "Junora the Power Patron of Tuning" from your Extra Deck
26. Selected Junora the Power Patron of Tuning (Extra Deck)
27. Yes
28. Selected Nervedo the Shadebeast Power Patron (Extra Deck)
29. Special Summon (procedure) Artmage Non-Finito (Extra Deck)
30. Selected Light and Darkness Ritual (hand)
31. Selected Nervedo the Shadebeast Power Patron (hand)
32. Yes
33. Selected Artmage Impasto -Recapture- (Deck)
34. Activate Skull Archfiend of Chaos (GY): Special Summon this card
35. select Light and Darkness Ritual (GY)
36. select Nervedo the Shadebeast Power Patron (GY)
37. select Black Chaos (banishment)
38. Default order
39. Link Summon Purification Power Patron (Extra Deck)
40. select Junora the Power Patron of Tuning (M3)
41. select Dark Magician of Destruction (EMZ-L)
42. Yes
43. Selected Theorealize Medius (Deck)
44. Activate Purification Power Patron (EMZ-L): Link Summon including this card as material
45. Selected Medicurius the Power Patron of Illusions (Extra Deck)
46. select Medius the Pure (M4)
47. Finish selection
48. Activate Theorealize Medius (hand): If a "Power Patron" card is on the field: You can Special Summon this card from your hand, then you can add 1 "Theorealize" Spell/Trap from your Deck to your hand
49. Yes
50. Selected Theorealize Past Lull (Deck)
51. Activate Medius the Pure (GY): Shuffle 1 monster from your hand or face-up field into the Deck, and if you do, Special Summon this card
52. Selected Apprentice Illusion Magician (hand)
53. Link Summon S:P Little Knight (Extra Deck)
54. select Skull Archfiend of Chaos (M2)
55. select Medius the Pure (M4)
56. Yes
57. Special Summon 1 "Diactorus" monster
58. Selected Artmage Diactorus (Extra Deck)

End board:  LP 8000 | Hand 4 | Deck 33 | Extra 8 | GY 4 | Banished 8   Monsters: M1: Nerva the Power Patron of Creation Lv10 3300/3300 ATK || M3: Artmage Diactorus Lv8 2800/2500 ATK || M4: S:P Little Knight L2←→ 1600  || M5: Artmage Non-Finito Lv7 2400/1500 ATK || EMZ-R: Medicurius the Power Patron of Illusions L3↙↓↘ 3000    Spell/Trap: S1: Mind Shuffle || S2: Artmage Impasto -Recapture- (Set)   GY: Junora the Power Patron of Tuning, Dark Magician of Destruction, Purification Power Patron, Skull Archfiend of Chaos   Banished: Prohibited Power Patron Portal - Terminus (face-down), Ars Magna - "Citrinitas" (face-down), Artmage Finmel (face-down), Infinite Impermanence (face-down), Ars Magna of Infinity a

## Order 3: best 14.2 (, worst 14.2) — from tries Activate Junoldo the Shadespirit Power Patron
Others: tries Activate Junoldo the Shadespirit Power Patron → new ending 14.2 · tries Activate Junoldo the Shadespirit Power Patron → new ending 14.2 · tries Activate Pendulum Treasure 13.9 · search 13.75 · tries Normal Summon Nervedo the Shadebeast Power Patron 13.75 · tries Activate Fiendsmith's Sequence 12.9 · tries Activate Junoldo the Shadespirit Power Patron → new early order 12.5 · tries Activate Vidolium the Unstable Power Patron of Unity 11.7 · opening lanes 11.5 · tries Normal Summon Theorealize Medius 9.6 · tries Activate Junoldo the Shadespirit Power Patron → new early order 2.5

1. Normal Summon Medius the Pure (hand)
2. Yes
3. Selected Junoldo the Shadespirit Power Patron (Deck)
4. Add the card(s) to your hand
5. Activate Junoldo the Shadespirit Power Patron (hand): Activate it as a Pendulum Spell
6. Activate Black Chaos (hand): Special Summon ("Black Chaos")
7. Selected Mind Shuffle (Deck)
8. Activate Mind Shuffle (S2): Add 1 appropriate monster to your hand
9. Selected Skull Archfiend of Chaos (Deck)
10. Selected Skull Archfiend of Chaos (hand)
11. Yes
12. Selected Light and Darkness Ritual (Deck)
13. Selected Magician of Dark Chaos - Black Chaos (Deck)
14. Activate Light and Darkness Ritual (GY): Add both this card and 1 card that mentions "Light and Darkness Ritual" from your GY to your hand
15. Selected Black Chaos (GY)
16. Special Summon (procedure) Black Chaos (hand)
17. select Magician of Dark Chaos - Black Chaos (hand)
18. Special Summon (procedure) Dark Magician of Destruction (Extra Deck)
19. Selected Black Chaos (M3)
20. Yes
21. Selected Dark Magical Circle (Deck)
22. Link Summon Purification Power Patron (Extra Deck)
23. select Dark Magician of Destruction (EMZ-L)
24. select Medius the Pure (M4)
25. Yes
26. Selected Prohibited Power Patron Portal - Terminus (hand)
27. Yes
28. Selected Prohibited Power Patron Portal - Terminus (GY)
29. Activate Prohibited Power Patron Portal - Terminus (hand): Send 1 "Power Patron" monster from your Deck or Extra Deck to the GY, then you can add 1 DARK Fairy monster from your Deck to your hand
30. Selected Nervedo the Shadebeast Power Patron (Deck)
31. Yes
32. Selected Theorealize Medius (Deck)
33. Activate Vidolium the Unstable Power Patron of Unity (hand): Activate it as a Pendulum Spell
34. Activate Vidolium the Unstable Power Patron of Unity (S1): Activate 1 of these effects
35. Special Summon 1 "Power Patron" monster
36. Selected Nervedo the Shadebeast Power Patron (GY)
37. Yes
38. Selected Theorealize Medius (Deck)
39. Activate Nervedo the Shadebeast Power Patron (M2): Special Summon 1 "Nerva the Power Patron of Creation" from your Extra Deck
40. Selected Nerva the Power Patron of Creation (Extra Deck)
41. Yes
42. Selected Artmage Graflare (Deck)
43. Activate Medius the Pure (GY): Shuffle 1 monster from your hand or face-up field into the Deck, and if you do, Special Summon this card
44. Selected Theorealize Medius (hand)
45. Activate Theorealize Medius (hand): If a "Power Patron" card is on the field: You can Special Summon this card from your hand, then you can add 1 "Theorealize" Spell/Trap from your Deck to your hand
46. Yes
47. Selected Theorealize Liberation (Deck)
48. Activate Theorealize Liberation (hand): Add to your hand, or Special Summon, 1 monster from your Deck with 300 ATK/200 DEF
49. Selected Nervedo the Shadebeast Power Patron (Deck)
50. Add the card(s) to your hand
51. Activate Theorealize Liberation (GY): Treat 1 monster you control as a Tuner this turn
52. Selected Medius the Pure (M2)
53. Special Summon (procedure) Artmage Non-Finito (Extra Deck)
54. Selected Dark Magical Circle (hand)
55. Selected Nervedo the Shadebeast Power Patron (hand)
56. Yes
57. Activate Purification Power Patron (EMZ-L): Link Summon including this card as material
58. Selected Medicurius the Power Patron of Illusions (Extra Deck)
59. select Medius the Pure (M2)
60. Finish selection
61. Selected Artmage Impasto -Recapture- (Deck)
62. Yes
63. Special Summon 1 "Diactorus" monster
64. Selected Artmage Diactorus (Extra Deck)

End board:  LP 8000 | Hand 4 | Deck 28 | Extra 12 | GY 6 | Banished 7   Monsters: M1: Nerva the Power Patron of Creation Lv10 3300/3300 ATK || M2: Artmage Diactorus Lv8 2800/2500 ATK || M3: Artmage Non-Finito Lv7 2400/1500 ATK || M4: Artmage Graflare Lv5 2100/1500 ATK || EMZ-L: Medicurius the Power Patron of Illusions L3↙↓↘ 3000    Spell/Trap: S1: Artmage Impasto -Recapture- (Set) || S2: Mind Shuffle   GY: Skull Archfiend of Chaos, Dark Magician of Destruction, Prohibited Power Patron Portal - Terminus, Dark Magical Circle, Nervedo the Shadebeast Power Patron, Purification Power Patron   Banished: Black Chaos, Magician of Dark Chaos - Black Chaos (face-down), Medius the Pure (face-down), Artmage Finmel

## Order 4: best 13.8 (, worst 13.8) — from tries Activate Fiendsmith Engraver
Others: tries Activate Fiendsmith Engraver → new ending 13.8 · opening lanes 13.6 · tries Activate Fiendsmith Engraver 13.6 · search 12.9 · tries Activate Fiendsmith Engraver → new early order 12.9 · tries Activate Fiendsmith Engraver → new early order 12.9 · tries Activate Fiendsmith's Requiem 12.65 · tries Activate Prohibited Power Patron Portal - Terminus 12 · tries Link Summon Fiendsmith's Requiem 12 · tries Activate Fiendsmith's Tract 11.65 · tries Activate Fiendsmith Engraver → new ending 5.78

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
18. Selected Junoldo the Shadespirit Power Patron (Deck)
19. Special Summon it
20. Activate Junoldo the Shadespirit Power Patron (M3): Special Summon 1 "Junora the Power Patron of Tuning" from your Extra Deck
21. Selected Junora the Power Patron of Tuning (Extra Deck)
22. Link Summon Purification Power Patron (Extra Deck)
23. select Medius the Pure (M4)
24. select Junora the Power Patron of Tuning (EMZ-R)
25. Yes
26. Selected Theorealize Medius (Deck)
27. Activate Medius the Pure (GY): Shuffle 1 monster from your hand or face-up field into the Deck, and if you do, Special Summon this card
28. Selected Skull Archfiend of Chaos (hand)
29. Activate Theorealize Medius (hand): If a "Power Patron" card is on the field: You can Special Summon this card from your hand, then you can add 1 "Theorealize" Spell/Trap from your Deck to your hand
30. Yes
31. Selected Theorealize Liberation (Deck)
32. Activate Theorealize Liberation (hand): Add to your hand, or Special Summon, 1 monster from your Deck with 300 ATK/200 DEF
33. Selected Nervedo the Shadebeast Power Patron (Deck)
34. Special Summon it
35. Activate Purification Power Patron (EMZ-L): Link Summon including this card as material
36. Selected Medicurius the Power Patron of Illusions (Extra Deck)
37. select Medius the Pure (M4)
38. Finish selection
39. Yes
40. Special Summon 1 "Diactorus" monster
41. Selected Artmage Diactorus (Extra Deck)
42. Special Summon (procedure) Artmage Non-Finito (Extra Deck)
43. Selected Light and Darkness Ritual (hand)
44. Selected Nervedo the Shadebeast Power Patron (M2)
45. Yes
46. Activate Artmage Non-Finito (M5): Set 1 "Artmage" Spell/Trap from your Deck
47. Selected Artmage Impasto -Recapture- (Deck)
48. Selected Artmage Graflare (Deck)

End board:  LP 8000 | Hand 3 | Deck 32 | Extra 12 | GY 4 | Banished 6   Monsters: M1: Magician of Dark Chaos - Black Chaos Lv8 2800/2600 ATK || M3: Artmage Graflare Lv5 2100/1500 ATK || M4: Artmage Diactorus Lv8 2800/2500 ATK || M5: Artmage Non-Finito Lv7 2400/1500 ATK || EMZ-R: Medicurius the Power Patron of Illusions L3↙↓↘ 3000    Spell/Trap: S1: Mind Shuffle || S2: Artmage Impasto -Recapture- (Set)   GY: Junora the Power Patron of Tuning, Theorealize Liberation, Purification Power Patron, Light and Darkness Ritual   Banished: Black Chaos, Artmage Vandalism -Assault- (face-down), Ars Magna - "Citrinitas" (face-down), Artmage Finmel (face-down), Medius the Pure, Theorealize Medius   Hand: Droll & Lock

