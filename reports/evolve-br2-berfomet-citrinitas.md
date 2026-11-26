# Evolved lines — Ars Magna - "Citrinitas", Ash Blossom & Joyous Spring, Ash Blossom & Joyous Spring, Infinite Impermanence, Dark Magical Circle (br-berfomet)
2026-11-26T16:57:09.675Z

4 deck orders (different face-down banishes / draws), 3 opponent hands x o_ss_panama + o_elfnote + o_despia + o_angelechy per line, 5 min searches, 4 mutation rounds.
Fitness = end-board interruptions (the lab scorer, src/disrupt.mjs: wipe 2, negate 1-1.5, banish/protection less; hand traps kept count 1 each). The winner of each order is also played into the opponent decks: margin after their turn shown beside it.

**Margin after their turn (winners): average null** (worst 99)

**Best line per deck order: average 11.98** (worst order 11.55). Winner came from: tries Activate Vidolium the Unstable Power Patron of Unity 1, forced Activate Griffoh → new ending 1, search 1, tries Activate Nervedo the Shadebeast Power Patron 1

## Weak points found automatically
Cards whose face-down banish (by your own costs) hurt the best line most (average best line without vs with that card banished):

| card | orders where it was banished | drop |
|---|---|---|
| Ars Magna - "Citrinitas" | 2/4 | 0.85 |
| Ars Magna of Purification and Corruption | 2/4 | 0.85 |
| Black Chaos | 2/4 | 0.85 |
| Theorealize Medius | 2/4 | 0.85 |
| Fiendsmith Engraver | 3/4 | -0.57 |
| Fiendsmith's Tract | 3/4 | -0.57 |
| Vidolium the Unstable Power Patron of Unity | 3/4 | -0.57 |
| Theorealize Past Lull | 3/4 | -0.57 |
| Small World | 3/4 | -0.57 |
| Artmage Vandalism -Assault- | 3/4 | -0.57 |

List changes proposed for the list test (data/proposals-br-berfomet.json):
- +1 Ars Magna - "Citrinitas", −1 Plundered Power Patron Plane - Vidolia — Ars Magna - "Citrinitas": best line 0.85 worse when a cost banished it (2 of 4 orders) — Ars Magna - "Citrinitas"
- +1 Ars Magna of Purification and Corruption, −1 Artmage Vandalism -Assault- — Ars Magna of Purification and Corruption: best line 0.85 worse when a cost banished it (2 of 4 orders) — Ars Magna - "Citrinitas"
- +1 Black Chaos, −1 Small World — Black Chaos: best line 0.85 worse when a cost banished it (2 of 4 orders) — Ars Magna - "Citrinitas"
- +1 Theorealize Medius, −1 Plundered Power Patron Plane - Vidolia — Theorealize Medius: best line 0.85 worse when a cost banished it (2 of 4 orders) — Ars Magna - "Citrinitas"
- +1 Ars Magna - "Citrinitas" — Ars Magna - "Citrinitas": best line 0.85 worse when a cost banished it (2 of 4 orders) — Ars Magna - "Citrinitas" (add only: deck grows, up to 60)
- +1 Ars Magna of Purification and Corruption — Ars Magna of Purification and Corruption: best line 0.85 worse when a cost banished it (2 of 4 orders) — Ars Magna - "Citrinitas" (add only: deck grows, up to 60)
- +1 Black Chaos — Black Chaos: best line 0.85 worse when a cost banished it (2 of 4 orders) — Ars Magna - "Citrinitas" (add only: deck grows, up to 60)
- +1 Theorealize Medius — Theorealize Medius: best line 0.85 worse when a cost banished it (2 of 4 orders) — Ars Magna - "Citrinitas" (add only: deck grows, up to 60)

Effects the search had not used, tried on purpose (best result so far):
- Activate Vidolium the Unstable Power Patron of Unity: 11.55
- Activate Vidolium the Unstable Power Patron of Unity: 11.55
- Activate Nervedo the Shadebeast Power Patron: 11.55
- Activate Theorealize Liberation: 11.55
- Link Summon Purification Power Patron: 11.35
- Activate Medius the Pure: 11.35
- Activate Junoldo the Shadespirit Power Patron: 11.35
- Activate Junoldo the Shadespirit Power Patron: 11.3

## Order 1: best 11.55 (, worst 11.55) — from tries Activate Vidolium the Unstable Power Patron of Unity
Others: opening lanes 11.55 · tries Activate Vidolium the Unstable Power Patron of Unity 11.55 · tries Activate Vidolium the Unstable Power Patron of Unity → new ending 11.55 · tries Activate Vidolium the Unstable Power Patron of Unity → new early order 11.55 · search 11.35 · forced Activate Artmage Non-Finito 11.3 · forced Xyz Summon Evilswarm Exciton Knight 10.65 · tries Activate Nervedo the Shadebeast Power Patron 10.55 · forced Link Summon Fiendsmith's Requiem 10.5 · forced Fusion Summon Berfomet 9.9 · tries Activate Vidolium the Unstable Power Patron of Unity → new ending 8.15 · forced Activate Theorealize Liberation 8 · tries Link Summon Medicurius the Power Patron of Illusions 7.75 · forced Activate Griffoh 7.05 · tries Activate Vidolium the Unstable Power Patron of Unity → new early order 3.95

1. Activate Ars Magna - "Citrinitas" (hand): activate this card
2. Activate Ars Magna - "Citrinitas" (S1): Add 1 "Medius" or "Ars Magna" monster from your Deck to your hand
3. Selected Medius the Pure (Deck)
4. Normal Summon Medius the Pure (hand)
5. Yes
6. Selected Vidolium the Unstable Power Patron of Unity (Deck)
7. Add the card(s) to your hand
8. Activate Vidolium the Unstable Power Patron of Unity (hand): Activate it as a Pendulum Spell
9. Activate Vidolium the Unstable Power Patron of Unity (S5): Activate 1 of these effects
10. Your Level 12 "Power Patron" monsters gain 5000 ATK
11. Yes
12. Selected Nervedo the Shadebeast Power Patron (Deck)
13. Special Summon (procedure) Artmage Non-Finito (Extra Deck)
14. Selected Dark Magical Circle (hand)
15. Selected Nervedo the Shadebeast Power Patron (hand)
16. Yes
17. Selected Artmage Impasto -Recapture- (Deck)
18. Link Summon Purification Power Patron (Extra Deck)
19. select Artmage Non-Finito (EMZ-R)
20. select Medius the Pure (M1)
21. Yes
22. Selected Theorealize Medius (Deck)
23. Activate Medius the Pure (GY): Shuffle 1 monster from your hand or face-up field into the Deck, and if you do, Special Summon this card
24. Selected Ash Blossom & Joyous Spring (hand)
25. Activate Theorealize Medius (hand): If a "Power Patron" card is on the field: You can Special Summon this card from your hand, then you can add 1 "Theorealize" Spell/Trap from your Deck to your hand
26. Yes
27. Selected Theorealize Liberation (Deck)
28. Activate Theorealize Liberation (hand): Add to your hand, or Special Summon, 1 monster from your Deck with 300 ATK/200 DEF
29. Activate Purification Power Patron (EMZ-R): Link Summon including this card as material
30. Selected Medicurius the Power Patron of Illusions (Extra Deck)
31. select Medius the Pure (M4)
32. Finish selection
33. Selected Nervedo the Shadebeast Power Patron (Deck)
34. Special Summon it
35. Yes
36. Special Summon 1 "Diactorus" monster
37. Selected Artmage Diactorus (Extra Deck)
38. Activate Nervedo the Shadebeast Power Patron (M4): Special Summon 1 "Nerva the Power Patron of Creation" from your Extra Deck
39. Selected Nerva the Power Patron of Creation (Extra Deck)
40. Yes
41. Selected Artmage Graflare (Deck)

End board:  LP 8000 | Hand 2 | Deck 32 | Extra 12 | GY 5 | Banished 5   Monsters: M3: Artmage Graflare Lv5 2100/1500 ATK || M4: Nerva the Power Patron of Creation Lv10 3300/3300 ATK || M5: Artmage Diactorus Lv8 2800/2500 ATK || EMZ-R: Medicurius the Power Patron of Illusions L3↙↓↘ 3000    Spell/Trap: S1: Ars Magna - "Citrinitas" || S2: Artmage Impasto -Recapture- (Set)   GY: Dark Magical Circle, Nervedo the Shadebeast Power Patron, Artmage Non-Finito, Purification Power Patron, Theorealize Liberation   Banished: Medius the Pure, Theorealize Medius, Fiendsmith Engraver (face-down), Nervedo the Shadebeast Power Patron (face-down), Ars Magna - "Citrinitas" (face-down)   Hand: Ash Blossom & Joyous Spring, 

## Order 2: best 13.25 (, worst 13.25) — from forced Activate Griffoh → new ending
Others: forced Activate Griffoh → new ending → new early order 13.25 · forced Activate Griffoh → new ending → new ending 13.25 · forced Activate Griffoh → new ending → new early order 13.25 · forced Activate Griffoh 11.75 · forced Xyz Summon Evilswarm Exciton Knight 11.55 · tries Activate Theorealize Liberation 11.55 · opening lanes 11.35 · forced Fusion Summon Berfomet 11.35 · tries Link Summon Purification Power Patron 11.35 · tries Activate Medius the Pure 11.35 · tries Activate Junoldo the Shadespirit Power Patron 11.35 · forced Link Summon Fiendsmith's Requiem 10 · forced Activate Theorealize Liberation 9.8 · forced Activate Artmage Non-Finito 8.1 · search 8

1. Set Spell/Trap Infinite Impermanence
2. Activate Ars Magna - "Citrinitas" (hand): activate this card
3. Activate Ars Magna - "Citrinitas" (S2): Add 1 "Medius" or "Ars Magna" monster from your Deck to your hand
4. Selected Medius the Pure (Deck)
5. Normal Summon Medius the Pure (hand)
6. Yes
7. Selected Nervedo the Shadebeast Power Patron (Deck)
8. Special Summon it
9. Activate Nervedo the Shadebeast Power Patron (M4): Special Summon 1 "Nerva the Power Patron of Creation" from your Extra Deck
10. Selected Nerva the Power Patron of Creation (Extra Deck)
11. Yes
12. Selected Junoldo the Shadespirit Power Patron (Deck)
13. Activate Junoldo the Shadespirit Power Patron (M4): Special Summon 1 "Junora the Power Patron of Tuning" from your Extra Deck
14. Selected Junora the Power Patron of Tuning (Extra Deck)
15. Yes
16. Selected Nervedo the Shadebeast Power Patron (Extra Deck)
17. Special Summon (procedure) Artmage Non-Finito (Extra Deck)
18. Selected Dark Magical Circle (hand)
19. Selected Nervedo the Shadebeast Power Patron (hand)
20. Yes
21. Selected Artmage Impasto -Recapture- (Deck)
22. Link Summon Purification Power Patron (Extra Deck)
23. select Medius the Pure (M1)
24. select Junora the Power Patron of Tuning (M2)
25. Yes
26. Selected Theorealize Medius (Deck)
27. Activate Medius the Pure (GY): Shuffle 1 monster from your hand or face-up field into the Deck, and if you do, Special Summon this card
28. Selected Ash Blossom & Joyous Spring (hand)
29. Activate Theorealize Medius (hand): If a "Power Patron" card is on the field: You can Special Summon this card from your hand, then you can add 1 "Theorealize" Spell/Trap from your Deck to your hand
30. Yes
31. Selected Theorealize Liberation (Deck)
32. Activate Theorealize Liberation (hand): Add to your hand, or Special Summon, 1 monster from your Deck with 300 ATK/200 DEF
33. Selected Griffoh (Deck)
34. Add the card(s) to your hand
35. Activate Griffoh (hand): Activate 1 of these effects
36. Set 1 card that mentions "Light and Darkness Ritual"
37. Activate Purification Power Patron (EMZ-L): Link Summon including this card as material
38. Selected Medicurius the Power Patron of Illusions (Extra Deck)
39. select Medius the Pure (M2)
40. Finish selection
41. Selected Mind Shuffle (Deck)
42. Yes
43. Special Summon 1 "Diactorus" monster
44. Selected Artmage Diactorus (Extra Deck)
45. Activate Artmage Diactorus (M5): Change the battle position of 1 monster on the field
46. Selected Artmage Non-Finito (M4)
47. Activate Mind Shuffle (S4): activate this card
48. No
49. Activate Mind Shuffle (S4): Add 1 appropriate monster to your hand
50. Selected Skull Archfiend of Chaos (Deck)
51. Selected Skull Archfiend of Chaos (hand)
52. Yes
53. Selected Light and Darkness Ritual (Deck)
54. Selected Magician of Dark Chaos - Black Chaos (Deck)
55. Activate Light and Darkness Ritual (GY): Add both this card and 1 card that mentions "Light and Darkness Ritual" from your GY to your hand
56. Selected Skull Archfiend of Chaos (GY)
57. Activate Light and Darkness Ritual (hand): Ritual Summon 1 "Magician of Dark Chaos - Black Chaos" or "Black Luster Soldier - Soldier of Light and Darkness" from your hand
58. Selected Magician of Dark Chaos - Black Chaos (hand)
59. Selected Griffoh (GY) value 8 or 1
60. Yes
61. Selected Light and Darkness Ritual (GY)

End board:  LP 8000 | Hand 3 | Deck 26 | Extra 10 | GY 5 | Banished 9   Monsters: M1: Magician of Dark Chaos - Black Chaos Lv8 2800/2600 ATK || M3: Nerva the Power Patron of Creation Lv10 3300/3300 ATK || M4: Artmage Non-Finito Lv7 2400/1500 DEF || M5: Artmage Diactorus Lv8 2800/2500 ATK || EMZ-R: Medicurius the Power Patron of Illusions L3↙↓↘ 3000    Spell/Trap: S1: Infinite Impermanence (Set) || S2: Ars Magna - "Citrinitas" || S3: Artmage Impasto -Recapture- (Set) || S4: Mind Shuffle   GY: Dark Magical Circle, Nervedo the Shadebeast Power Patron, Junora the Power Patron of Tuning, Theorealize Liberation, Purification Power Patron   Banished: Apprentice Illusion Magician (face-down), Pendulum Treasure

## Order 3: best 11.55 (, worst 11.55) — from search
Others: opening lanes 11.55 · forced Activate Theorealize Liberation 11.55 · search → new ending 11.55 · forced Activate Griffoh 11.4 · forced Link Summon Fiendsmith's Requiem 11.35 · search → new early order 11.35 · forced Activate Artmage Non-Finito 11.3 · forced Fusion Summon Berfomet 11.25 · forced Xyz Summon Evilswarm Exciton Knight 10.75 · tries Activate Dark Magical Circle 6.6 · search → new ending 4.53 · tries Activate Ars Magna of Purification and Corruption 3.95 · tries Activate Ars Magna of Infinity and Finity 3.95 · search → new early order 3.95 · tries Normal Summon Theorealize Medius 3.8

1. Activate Ars Magna - "Citrinitas" (hand): activate this card
2. Activate Ars Magna - "Citrinitas" (S1): Add 1 "Medius" or "Ars Magna" monster from your Deck to your hand
3. Selected Medius the Pure (Deck)
4. Normal Summon Medius the Pure (hand)
5. Yes
6. Selected Vidolium the Unstable Power Patron of Unity (Deck)
7. Add the card(s) to your hand
8. Activate Vidolium the Unstable Power Patron of Unity (hand): Activate it as a Pendulum Spell
9. Activate Vidolium the Unstable Power Patron of Unity (S5): Activate 1 of these effects
10. Your Level 12 "Power Patron" monsters gain 5000 ATK
11. Yes
12. Selected Nervedo the Shadebeast Power Patron (Deck)
13. Special Summon (procedure) Artmage Non-Finito (Extra Deck)
14. Selected Dark Magical Circle (hand)
15. Selected Nervedo the Shadebeast Power Patron (hand)
16. Yes
17. Selected Artmage Impasto -Recapture- (Deck)
18. Link Summon Purification Power Patron (Extra Deck)
19. select Medius the Pure (M4)
20. select Artmage Non-Finito (EMZ-L)
21. Yes
22. Selected Theorealize Medius (Deck)
23. Activate Medius the Pure (GY): Shuffle 1 monster from your hand or face-up field into the Deck, and if you do, Special Summon this card
24. Selected Ash Blossom & Joyous Spring (hand)
25. Activate Theorealize Medius (hand): If a "Power Patron" card is on the field: You can Special Summon this card from your hand, then you can add 1 "Theorealize" Spell/Trap from your Deck to your hand
26. Yes
27. Selected Theorealize Liberation (Deck)
28. Activate Theorealize Liberation (hand): Add to your hand, or Special Summon, 1 monster from your Deck with 300 ATK/200 DEF
29. Activate Purification Power Patron (EMZ-R): Link Summon including this card as material
30. Selected Medicurius the Power Patron of Illusions (Extra Deck)
31. select Medius the Pure (M5)
32. Finish selection
33. Selected Nervedo the Shadebeast Power Patron (Deck)
34. Special Summon it
35. Yes
36. Special Summon 1 "Diactorus" monster
37. Selected Artmage Diactorus (Extra Deck)
38. Activate Nervedo the Shadebeast Power Patron (M4): Special Summon 1 "Nerva the Power Patron of Creation" from your Extra Deck
39. Selected Nerva the Power Patron of Creation (Extra Deck)
40. Yes
41. Selected Artmage Graflare (Deck)

End board:  LP 8000 | Hand 2 | Deck 32 | Extra 12 | GY 5 | Banished 5   Monsters: M1: Artmage Diactorus Lv8 2800/2500 ATK || M2: Artmage Graflare Lv5 2100/1500 ATK || M3: Nerva the Power Patron of Creation Lv10 3300/3300 ATK || EMZ-L: Medicurius the Power Patron of Illusions L3↙↓↘ 3000    Spell/Trap: S1: Ars Magna - "Citrinitas" || S2: Artmage Impasto -Recapture- (Set)   GY: Dark Magical Circle, Nervedo the Shadebeast Power Patron, Artmage Non-Finito, Purification Power Patron, Theorealize Liberation   Banished: Medius the Pure, Theorealize Medius, Light and Darkness Ritual (face-down), Fiendsmith's Tract (face-down), Fiendsmith's Tract (face-down)   Hand: Ash Blossom & Joyous Spring, Infinite Imperman

## Order 4: best 11.55 (, worst 11.55) — from tries Activate Nervedo the Shadebeast Power Patron
Others: tries Activate Nervedo the Shadebeast Power Patron → new early order 11.55 · forced Activate Griffoh 11.4 · tries Activate Nervedo the Shadebeast Power Patron → new ending 11.4 · tries Activate Nervedo the Shadebeast Power Patron → new ending 11.4 · forced Xyz Summon Evilswarm Exciton Knight 11.3 · forced Fusion Summon Berfomet 11.3 · forced Activate Theorealize Liberation 11.3 · tries Activate Junoldo the Shadespirit Power Patron 11.3 · tries Link Summon S 7.95 · opening lanes 7 · search 6.95 · forced Activate Artmage Non-Finito 6.95 · forced Link Summon Fiendsmith's Requiem 6.95 · tries Activate Artmage Vandalism -Assault- 5.55

1. Activate Ars Magna - "Citrinitas" (hand): activate this card
2. Activate Ars Magna - "Citrinitas" (S1): Add 1 "Medius" or "Ars Magna" monster from your Deck to your hand
3. Selected Medius the Pure (Deck)
4. Normal Summon Medius the Pure (hand)
5. Yes
6. Selected Vidolium the Unstable Power Patron of Unity (Deck)
7. Add the card(s) to your hand
8. Activate Vidolium the Unstable Power Patron of Unity (hand): Activate it as a Pendulum Spell
9. Activate Vidolium the Unstable Power Patron of Unity (S5): Activate 1 of these effects
10. Your Level 12 "Power Patron" monsters gain 5000 ATK
11. Yes
12. Selected Nervedo the Shadebeast Power Patron (Deck)
13. Special Summon (procedure) Artmage Non-Finito (Extra Deck)
14. Selected Dark Magical Circle (hand)
15. Selected Nervedo the Shadebeast Power Patron (hand)
16. Yes
17. Selected Artmage Impasto -Recapture- (Deck)
18. Link Summon Purification Power Patron (Extra Deck)
19. select Medius the Pure (M4)
20. select Artmage Non-Finito (M5)
21. Yes
22. Selected Theorealize Medius (Deck)
23. Activate Theorealize Medius (hand): If a "Power Patron" card is on the field: You can Special Summon this card from your hand, then you can add 1 "Theorealize" Spell/Trap from your Deck to your hand
24. Yes
25. Selected Theorealize Liberation (Deck)
26. Activate Medius the Pure (GY): Shuffle 1 monster from your hand or face-up field into the Deck, and if you do, Special Summon this card
27. Selected Ash Blossom & Joyous Spring (hand)
28. Activate Theorealize Liberation (hand): Add to your hand, or Special Summon, 1 monster from your Deck with 300 ATK/200 DEF
29. Activate Purification Power Patron (EMZ-L): Link Summon including this card as material
30. Selected Medicurius the Power Patron of Illusions (Extra Deck)
31. select Medius the Pure (M1)
32. Finish selection
33. Selected Nervedo the Shadebeast Power Patron (Deck)
34. Special Summon it
35. Yes
36. Special Summon 1 "Diactorus" monster
37. Selected Artmage Diactorus (Extra Deck)
38. Activate Theorealize Liberation (GY): Treat 1 monster you control as a Tuner this turn
39. Selected Medicurius the Power Patron of Illusions (EMZ-L)
40. Activate Nervedo the Shadebeast Power Patron (M1): Special Summon 1 "Nerva the Power Patron of Creation" from your Extra Deck
41. Selected Nerva the Power Patron of Creation (Extra Deck)
42. Yes
43. Selected Artmage Graflare (Deck)

End board:  LP 8000 | Hand 2 | Deck 32 | Extra 12 | GY 4 | Banished 6   Monsters: M1: Nerva the Power Patron of Creation Lv10 3300/3300 ATK || M2: Artmage Diactorus Lv8 2800/2500 ATK || M3: Artmage Graflare Lv5 2100/1500 ATK || EMZ-L: Medicurius the Power Patron of Illusions L3↙↓↘ 3000    Spell/Trap: S1: Ars Magna - "Citrinitas" || S2: Artmage Impasto -Recapture- (Set)   GY: Dark Magical Circle, Nervedo the Shadebeast Power Patron, Artmage Non-Finito, Purification Power Patron   Banished: Medius the Pure, Theorealize Medius, Theorealize Liberation, Pendulum Treasure (face-down), Magician of Dark Chaos - Black Chaos (face-down), Fiendsmith Engraver (face-down)   Hand: Infinite Impermanence, Ash Blossom 

