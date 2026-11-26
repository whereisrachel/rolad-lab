# Evolved lines — Black Chaos, Medius the Pure, Ash Blossom & Joyous Spring, Droll & Lock Bird, Ghost Ogre & Snow Rabbit (findlist-1100)
2026-11-26T03:23:04.314Z

8 deck orders (different face-down banishes / draws), 3 opponent hands x o_ss_panama + o_elfnote + o_despia + o_angelechy per line, 30 min searches, 4 mutation rounds.
Fitness = end-board interruptions (the lab scorer, src/disrupt.mjs: wipe 2, negate 1-1.5, banish/protection less; hand traps kept count 1 each). The winner of each order is also played into the opponent decks: margin after their turn shown beside it.

**Margin after their turn (winners): average 5.94** (worst -3.95)

**Best line per deck order: average 14.2** (worst order 14.2). Winner came from: tries Activate Theorealize Liberation → new early order 1, tries Activate Artmage Diactorus → new early order 1, opening lanes 1, tries Activate Theorealize Liberation → new ending 1

| seed line | works as written | its score when it works | seed start + search finish (all orders) |
|---|---|---|---|
| bc1 | 3/8 | 8.46 | 11.26 |
| v52-bcmed | 4/8 | 13.35 | 13.47 |

## Weak points found automatically
Cards whose face-down banish (by your own costs) hurt the best line most (average best line without vs with that card banished):

| card | orders where it was banished | drop |
|---|---|---|
| Small World | 3/8 | 0 |
| Griffoh | 2/8 | 0 |
| Vidolium the Unstable Power Patron of Unity | 2/8 | 0 |
| Nervedo the Shadebeast Power Patron | 3/8 | 0 |
| Ars Magna of Purification and Corruption | 2/8 | 0 |
| Lacrima the Crimson Tears | 2/8 | 0 |
| Fiendsmith Engraver | 3/8 | 0 |
| Ars Magna - "Citrinitas" | 3/8 | 0 |
| Ash Blossom & Joyous Spring | 2/8 | 0 |
| Theorealize Past Lull | 3/8 | 0 |

Where the hand-designed lines broke (next step that no longer worked):
- bc1: Yes (1x)

Effects the search had not used, tried on purpose (best result so far):
- Activate Theorealize Liberation: 14.05
- Activate Artmage Diactorus: 13.9
- Activate Prohibited Power Patron Portal - Terminus: 13.9
- Special Summon (procedure) Dark Magician of Destruction: 13.9
- Activate Fiendsmith Engraver: 13.9
- Special Summon (procedure) Apprentice Illusion Magician: 13.65
- Activate Griffoh: 4.67
- Activate Nervedo the Shadebeast Power Patron: 4.18

## Order 1: best 14.2 [margin 10.35: ss_panama 10.35, elfnote null, despia null, angelechy null] (, worst 14.2) — from tries Activate Theorealize Liberation → new early order
Others: tries Activate Theorealize Liberation 13.9 · tries Special Summon (procedure) Dark Magician of Destruction 13.9 · opening lanes 13.9 · tries Activate Theorealize Liberation → new ending 13.9 · v52-bcmed 13.75 · v52-bcmed 13.75 · tries Activate Theorealize Liberation → new early order → new ending 13.25 · bc1 11.48 · bc1 8.69

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
11. Set Spell/Trap Light and Darkness Ritual
12. Normal Summon Medius the Pure (hand)
13. Yes
14. Selected Nervedo the Shadebeast Power Patron (Deck)
15. #573
16. Activate Light and Darkness Ritual (S2): Ritual Summon 1 "Magician of Dark Chaos - Black Chaos" or "Black Luster Soldier - Soldier of Light and Darkness" from your hand
17. Selected Magician of Dark Chaos - Black Chaos (hand)
18. Selected Black Chaos (GY) value 8
19. Yes
20. Selected Light and Darkness Ritual (GY)
21. Special Summon (procedure) Dark Magician of Destruction (Extra Deck)
22. Selected Magician of Dark Chaos - Black Chaos (M2)
23. Yes
24. Selected Dark Magical Circle (Deck)
25. Special Summon (procedure) Artmage Non-Finito (Extra Deck)
26. Selected Light and Darkness Ritual (hand)
27. Selected Nervedo the Shadebeast Power Patron (hand)
28. Yes
29. Selected Artmage Impasto -Recapture- (Deck)
30. Link Summon Purification Power Patron (Extra Deck)
31. select Medius the Pure (M1)
32. select Dark Magician of Destruction (EMZ-L)
33. Yes
34. Selected Theorealize Medius (Deck)
35. Activate Theorealize Medius (hand): If a "Power Patron" card is on the field: You can Special Summon this card from your hand, then you can add 1 "Theorealize" Spell/Trap from your Deck to your hand
36. Yes
37. Selected Theorealize Liberation (Deck)
38. Activate Medius the Pure (GY): Shuffle 1 monster from your hand or face-up field into the Deck, and if you do, Special Summon this card
39. Selected Skull Archfiend of Chaos (hand)
40. Activate Theorealize Liberation (hand): Add to your hand, or Special Summon, 1 monster from your Deck with 300 ATK/200 DEF
41. Activate Purification Power Patron (EMZ-L): Link Summon including this card as material
42. Selected Medicurius the Power Patron of Illusions (Extra Deck)
43. select Medius the Pure (M2)
44. Finish selection
45. Selected Nervedo the Shadebeast Power Patron (Deck)
46. Special Summon it
47. Yes
48. Special Summon 1 "Diactorus" monster
49. Selected Artmage Diactorus (Extra Deck)
50. Activate Artmage Diactorus (M1): Change the battle position of 1 monster on the field
51. Selected Nervedo the Shadebeast Power Patron (M2)
52. Activate Nervedo the Shadebeast Power Patron (M2): Special Summon 1 "Nerva the Power Patron of Creation" from your Extra Deck
53. Selected Nerva the Power Patron of Creation (Extra Deck)
54. Yes
55. Selected Artmage Graflare (Deck)

End board:  LP 8000 | Hand 4 | Deck 31 | Extra 10 | GY 5 | Banished 7   Monsters: M1: Artmage Diactorus Lv8 2800/2500 ATK || M3: Artmage Graflare Lv5 2100/1500 ATK || M4: Artmage Non-Finito Lv7 2400/1500 ATK || M5: Nerva the Power Patron of Creation Lv10 3300/3300 ATK || EMZ-R: Medicurius the Power Patron of Illusions L3↙↓↘ 3000    Spell/Trap: S1: Mind Shuffle || S2: Artmage Impasto -Recapture- (Set)   GY: Light and Darkness Ritual, Nervedo the Shadebeast Power Patron, Dark Magician of Destruction, Purification Power Patron, Theorealize Liberation   Banished: Black Chaos, Magician of Dark Chaos - Black Chaos, Medius the Pure, Theorealize Medius, Small World (face-down), Artmage Finmel (face-down), Pend

## Order 2: best 14.2 [margin 6.49: ss_panama 6.49, elfnote null, despia null, angelechy null] (, worst 14.2) — from tries Activate Artmage Diactorus → new early order
Others: tries Activate Artmage Diactorus 13.9 · opening lanes 13.9 · tries Activate Artmage Diactorus → new ending 13.9 · tries Special Summon (procedure) Apprentice Illusion Magician 13.65 · v52-bcmed 13.2 · v52-bcmed 12.95 · bc1 11.48 · bc1 8.69 · tries Activate Artmage Diactorus → new early order → new ending 7.05

1. Activate Black Chaos (hand): Special Summon ("Black Chaos")
2. Selected Mind Shuffle (Deck)
3. Normal Summon Medius the Pure (hand)
4. Yes
5. Selected Nervedo the Shadebeast Power Patron (Deck)
6. #573
7. Activate Mind Shuffle (S1): Add 1 appropriate monster to your hand
8. Selected Skull Archfiend of Chaos (Deck)
9. Selected Skull Archfiend of Chaos (hand)
10. Yes
11. Selected Light and Darkness Ritual (Deck)
12. Selected Magician of Dark Chaos - Black Chaos (Deck)
13. Activate Light and Darkness Ritual (GY): Add both this card and 1 card that mentions "Light and Darkness Ritual" from your GY to your hand
14. Selected Skull Archfiend of Chaos (GY)
15. Activate Light and Darkness Ritual (hand): Ritual Summon 1 "Magician of Dark Chaos - Black Chaos" or "Black Luster Soldier - Soldier of Light and Darkness" from your hand
16. Selected Magician of Dark Chaos - Black Chaos (hand)
17. Selected Black Chaos (GY) value 8
18. Yes
19. Selected Light and Darkness Ritual (GY)
20. Special Summon (procedure) Dark Magician of Destruction (Extra Deck)
21. Selected Magician of Dark Chaos - Black Chaos (M4)
22. Yes
23. Selected Dark Magical Circle (Deck)
24. Special Summon (procedure) Artmage Non-Finito (Extra Deck)
25. Selected Light and Darkness Ritual (hand)
26. Selected Nervedo the Shadebeast Power Patron (hand)
27. Yes
28. Selected Artmage Impasto -Recapture- (Deck)
29. Link Summon Purification Power Patron (Extra Deck)
30. select Medius the Pure (M3)
31. select Dark Magician of Destruction (EMZ-R)
32. Yes
33. Selected Theorealize Medius (Deck)
34. Activate Theorealize Medius (hand): If a "Power Patron" card is on the field: You can Special Summon this card from your hand, then you can add 1 "Theorealize" Spell/Trap from your Deck to your hand
35. Yes
36. Selected Theorealize Liberation (Deck)
37. Activate Medius the Pure (GY): Shuffle 1 monster from your hand or face-up field into the Deck, and if you do, Special Summon this card
38. Selected Skull Archfiend of Chaos (hand)
39. Activate Theorealize Liberation (hand): Add to your hand, or Special Summon, 1 monster from your Deck with 300 ATK/200 DEF
40. Activate Purification Power Patron (EMZ-L): Link Summon including this card as material
41. Selected Medicurius the Power Patron of Illusions (Extra Deck)
42. select Medius the Pure (M3)
43. Finish selection
44. Selected Nervedo the Shadebeast Power Patron (Deck)
45. Special Summon it
46. Yes
47. Special Summon 1 "Diactorus" monster
48. Selected Artmage Diactorus (Extra Deck)
49. Activate Nervedo the Shadebeast Power Patron (M3): Special Summon 1 "Nerva the Power Patron of Creation" from your Extra Deck
50. Selected Nerva the Power Patron of Creation (Extra Deck)
51. Yes
52. Selected Artmage Graflare (Deck)

End board:  LP 8000 | Hand 4 | Deck 31 | Extra 10 | GY 5 | Banished 7   Monsters: M1: Artmage Non-Finito Lv7 2400/1500 ATK || M2: Nerva the Power Patron of Creation Lv10 3300/3300 ATK || M3: Artmage Graflare Lv5 2100/1500 ATK || M4: Artmage Diactorus Lv8 2800/2500 ATK || EMZ-L: Medicurius the Power Patron of Illusions L3↙↓↘ 3000    Spell/Trap: S1: Mind Shuffle || S2: Artmage Impasto -Recapture- (Set)   GY: Light and Darkness Ritual, Nervedo the Shadebeast Power Patron, Dark Magician of Destruction, Purification Power Patron, Theorealize Liberation   Banished: Black Chaos, Magician of Dark Chaos - Black Chaos, Medius the Pure, Theorealize Medius, Ash Blossom & Joyous Spring (face-down), Medius the Pure 

## Order 3: best 14.2 [margin -1.54: ss_panama -1.85, elfnote -2.81, despia -0.06, angelechy -0.94] (, worst 14.2) — from opening lanes
Others: opening lanes → new early order 14.2 · search 13.9 · tries Activate Fiendsmith Engraver 13.9 · tries Activate Prohibited Power Patron Portal - Terminus 13.9 · v52-bcmed 13.2 · v52-bcmed 12.95 · bc1 11.03

1. Normal Summon Medius the Pure (hand)
2. Yes
3. Selected Vidolium the Unstable Power Patron of Unity (Deck)
4. #573
5. Activate Black Chaos (hand): Special Summon ("Black Chaos")
6. Selected Mind Shuffle (Deck)
7. Activate Mind Shuffle (S1): Add 1 appropriate monster to your hand
8. Selected Skull Archfiend of Chaos (Deck)
9. Selected Skull Archfiend of Chaos (hand)
10. Yes
11. Selected Light and Darkness Ritual (Deck)
12. Selected Magician of Dark Chaos - Black Chaos (Deck)
13. Activate Vidolium the Unstable Power Patron of Unity (hand): #1160
14. Activate Vidolium the Unstable Power Patron of Unity (S5): Activate 1 of these effects
15. Your Level 12 "Power Patron" monsters gain 5000 ATK
16. Yes
17. Selected Nervedo the Shadebeast Power Patron (Deck)
18. Activate Light and Darkness Ritual (GY): Add both this card and 1 card that mentions "Light and Darkness Ritual" from your GY to your hand
19. Selected Skull Archfiend of Chaos (GY)
20. Activate Light and Darkness Ritual (hand): Ritual Summon 1 "Magician of Dark Chaos - Black Chaos" or "Black Luster Soldier - Soldier of Light and Darkness" from your hand
21. Selected Magician of Dark Chaos - Black Chaos (hand)
22. Selected Black Chaos (GY) value 8
23. Yes
24. Selected Light and Darkness Ritual (GY)
25. Special Summon (procedure) Dark Magician of Destruction (Extra Deck)
26. Selected Magician of Dark Chaos - Black Chaos (M5)
27. Yes
28. Selected Dark Magical Circle (Deck)
29. Special Summon (procedure) Artmage Non-Finito (Extra Deck)
30. Selected Light and Darkness Ritual (hand)
31. Selected Nervedo the Shadebeast Power Patron (hand)
32. Yes
33. Selected Artmage Impasto -Recapture- (Deck)
34. Link Summon Purification Power Patron (Extra Deck)
35. select Medius the Pure (M4)
36. select Dark Magician of Destruction (M3)
37. Yes
38. Selected Theorealize Medius (Deck)
39. Activate Medius the Pure (GY): Shuffle 1 monster from your hand or face-up field into the Deck, and if you do, Special Summon this card
40. Selected Skull Archfiend of Chaos (hand)
41. Activate Theorealize Medius (hand): If a "Power Patron" card is on the field: You can Special Summon this card from your hand, then you can add 1 "Theorealize" Spell/Trap from your Deck to your hand
42. Yes
43. Selected Theorealize Liberation (Deck)
44. Activate Theorealize Liberation (hand): Add to your hand, or Special Summon, 1 monster from your Deck with 300 ATK/200 DEF
45. Activate Purification Power Patron (EMZ-R): Link Summon including this card as material
46. Selected Medicurius the Power Patron of Illusions (Extra Deck)
47. select Medius the Pure (M5)
48. Finish selection
49. Selected Nervedo the Shadebeast Power Patron (Deck)
50. Special Summon it
51. Yes
52. Special Summon 1 "Diactorus" monster
53. Selected Artmage Diactorus (Extra Deck)
54. Activate Nervedo the Shadebeast Power Patron (M4): Special Summon 1 "Nerva the Power Patron of Creation" from your Extra Deck
55. Selected Nerva the Power Patron of Creation (Extra Deck)
56. Yes
57. Selected Artmage Graflare (Deck)

End board:  LP 8000 | Hand 4 | Deck 30 | Extra 11 | GY 5 | Banished 7   Monsters: M1: Artmage Non-Finito Lv7 2400/1500 ATK || M2: Nerva the Power Patron of Creation Lv10 3300/3300 ATK || M3: Artmage Diactorus Lv8 2800/2500 ATK || M4: Artmage Graflare Lv5 2100/1500 ATK || EMZ-L: Medicurius the Power Patron of Illusions L3↙↓↘ 3000    Spell/Trap: S1: Mind Shuffle || S2: Artmage Impasto -Recapture- (Set)   GY: Light and Darkness Ritual, Nervedo the Shadebeast Power Patron, Dark Magician of Destruction, Purification Power Patron, Theorealize Liberation   Banished: Black Chaos, Magician of Dark Chaos - Black Chaos, Medius the Pure, Theorealize Medius, Artmage Vandalism -Assault- (face-down), Theorealize Medi

## Order 4: best 14.2 [margin 8.47: ss_panama null, elfnote 6.74, despia null, angelechy 10.2] (, worst 14.2) — from tries Activate Theorealize Liberation → new ending
Others: tries Activate Theorealize Liberation → new ending → new early order 14.2 · tries Activate Theorealize Liberation → new ending → new ending 14.2 · tries Activate Theorealize Liberation 14.05 · opening lanes 14.05 · tries Activate Artmage Diactorus 13.9 · tries Activate Theorealize Liberation → new ending → new early order 13.9 · v52-bcmed 13.75 · v52-bcmed 13.75 · bc1 11.04 · bc1 8

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
19. Add the card(s) to your hand
20. Special Summon (procedure) Artmage Non-Finito (Extra Deck)
21. Selected Light and Darkness Ritual (hand)
22. Selected Nervedo the Shadebeast Power Patron (hand)
23. Yes
24. Selected Artmage Impasto -Recapture- (Deck)
25. Special Summon (procedure) Dark Magician of Destruction (Extra Deck)
26. Selected Magician of Dark Chaos - Black Chaos (M3)
27. Yes
28. Selected Apprentice Illusion Magician (Deck)
29. Link Summon Purification Power Patron (Extra Deck)
30. select Medius the Pure (M4)
31. select Dark Magician of Destruction (EMZ-L)
32. Yes
33. Selected Theorealize Medius (Deck)
34. Activate Medius the Pure (GY): Shuffle 1 monster from your hand or face-up field into the Deck, and if you do, Special Summon this card
35. Selected Skull Archfiend of Chaos (hand)
36. Activate Theorealize Medius (hand): If a "Power Patron" card is on the field: You can Special Summon this card from your hand, then you can add 1 "Theorealize" Spell/Trap from your Deck to your hand
37. Yes
38. Selected Theorealize Liberation (Deck)
39. Activate Theorealize Liberation (hand): Add to your hand, or Special Summon, 1 monster from your Deck with 300 ATK/200 DEF
40. Selected Nervedo the Shadebeast Power Patron (Deck)
41. Special Summon it
42. Activate Nervedo the Shadebeast Power Patron (M2): Special Summon 1 "Nerva the Power Patron of Creation" from your Extra Deck
43. Activate Purification Power Patron (EMZ-R): Link Summon including this card as material
44. Selected Medicurius the Power Patron of Illusions (Extra Deck)
45. select Medius the Pure (M4)
46. Finish selection
47. Selected Nerva the Power Patron of Creation (Extra Deck)
48. Yes
49. Special Summon 1 "Diactorus" monster
50. Activate Nervedo the Shadebeast Power Patron (Extra Deck): Special Summon 1 "Power Patron" or "Artmage" monster from your Deck or face-up Extra Deck
51. Selected Artmage Graflare (Deck)
52. Selected Artmage Diactorus (Extra Deck)

End board:  LP 8000 | Hand 4 | Deck 31 | Extra 10 | GY 5 | Banished 7   Monsters: M2: Nerva the Power Patron of Creation Lv10 3300/3300 ATK || M3: Artmage Graflare Lv5 2100/1500 ATK || M4: Artmage Diactorus Lv8 2800/2500 ATK || M5: Artmage Non-Finito Lv7 2400/1500 ATK || EMZ-R: Medicurius the Power Patron of Illusions L3↙↓↘ 3000    Spell/Trap: S1: Mind Shuffle || S2: Artmage Impasto -Recapture- (Set)   GY: Light and Darkness Ritual, Nervedo the Shadebeast Power Patron, Dark Magician of Destruction, Theorealize Liberation, Purification Power Patron   Banished: Black Chaos, Magician of Dark Chaos - Black Chaos, Fiendsmith's Tract (face-down), Artmage Vandalism -Assault- (face-down), Ars Magna - "Citrinit

