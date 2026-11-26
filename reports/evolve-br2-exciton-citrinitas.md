# Evolved lines — Ars Magna - "Citrinitas", Ash Blossom & Joyous Spring, Ash Blossom & Joyous Spring, Infinite Impermanence, Dark Magical Circle (br-exciton)
2026-11-26T17:15:32.332Z

4 deck orders (different face-down banishes / draws), 3 opponent hands x o_ss_panama + o_elfnote + o_despia + o_angelechy per line, 5 min searches, 4 mutation rounds.
Fitness = end-board interruptions (the lab scorer, src/disrupt.mjs: wipe 2, negate 1-1.5, banish/protection less; hand traps kept count 1 each). The winner of each order is also played into the opponent decks: margin after their turn shown beside it.

**Margin after their turn (winners): average null** (worst 99)

**Best line per deck order: average 11.66** (worst order 10.5). Winner came from: search 1, forced Activate Griffoh → new ending → new early order 1, tries Activate Vidolium the Unstable Power Patron of Unity 1, tries Activate Theorealize Medius 1

## Weak points found automatically
Cards whose face-down banish (by your own costs) hurt the best line most (average best line without vs with that card banished):

| card | orders where it was banished | drop |
|---|---|---|
| Medius the Pure | 3/4 | 2.12 |
| Griffoh | 2/4 | 1.27 |
| Ars Magna - "Citrinitas" | 2/4 | 1.27 |
| Fiendsmith Engraver | 3/4 | -0.15 |
| Artmage Finmel | 3/4 | -0.15 |
| Small World | 3/4 | -0.42 |
| Fiendsmith's Tract | 3/4 | -0.42 |
| Pendulum Treasure | 2/4 | -0.43 |
| Ars Magna of Infinity and Finity | 2/4 | -1.27 |
| Black Luster Soldier - Soldier of Light and Darkness | 2/4 | -1.27 |

List changes proposed for the list test (data/proposals-br-exciton.json):
- +1 Griffoh, −1 Plundered Power Patron Plane - Vidolia — Griffoh: best line 1.27 worse when a cost banished it (2 of 4 orders) — Ars Magna - "Citrinitas"
- +1 Ars Magna - "Citrinitas", −1 Artmage Vandalism -Assault- — Ars Magna - "Citrinitas": best line 1.27 worse when a cost banished it (2 of 4 orders) — Ars Magna - "Citrinitas"
- +1 Griffoh — Griffoh: best line 1.27 worse when a cost banished it (2 of 4 orders) — Ars Magna - "Citrinitas" (add only: deck grows, up to 60)
- +1 Ars Magna - "Citrinitas" — Ars Magna - "Citrinitas": best line 1.27 worse when a cost banished it (2 of 4 orders) — Ars Magna - "Citrinitas" (add only: deck grows, up to 60)

Effects the search had not used, tried on purpose (best result so far):
- Activate Junoldo the Shadespirit Power Patron: 11.65
- Activate Vidolium the Unstable Power Patron of Unity: 11.55
- Activate Vidolium the Unstable Power Patron of Unity: 11.55
- Activate Theorealize Medius: 11.35
- Activate Junoldo the Shadespirit Power Patron: 11.35
- Activate Nervedo the Shadebeast Power Patron: 11.35
- Activate Nervedo the Shadebeast Power Patron: 11.25
- Link Summon Purification Power Patron: 10.75

## Order 1: best 10.5 (, worst 10.5) — from search
Others: forced Fusion Summon Berfomet 10.5 · search → new ending 10.5 · search → new early order 10.5 · forced Link Summon Fiendsmith's Requiem 10.05 · opening lanes 9.75 · forced Activate Artmage Non-Finito 9.7 · search → new ending 9.15 · tries Activate Dark Magical Circle 8.8 · forced Activate Theorealize Liberation 8.15 · forced Activate Griffoh 8.05 · search → new early order 6.75 · forced Xyz Summon Evilswarm Exciton Knight 5.85 · tries Activate Ars Magna of Infinity and Finity 3.95 · tries Activate Ars Magna of Purification and Corruption 3.95 · tries Normal Summon Theorealize Medius 3.8

1. Set Spell/Trap Ars Magna - "Citrinitas"
2. Activate Ars Magna - "Citrinitas" (S1): activate this card
3. Activate Ars Magna - "Citrinitas" (S1): Add 1 "Medius" or "Ars Magna" monster from your Deck to your hand
4. Selected Medius the Pure (Deck)
5. Normal Summon Medius the Pure (hand)
6. Yes
7. Selected Nervedo the Shadebeast Power Patron (Deck)
8. Special Summon it
9. Activate Nervedo the Shadebeast Power Patron (M4): Special Summon 1 "Nerva the Power Patron of Creation" from your Extra Deck
10. Selected Nerva the Power Patron of Creation (Extra Deck)
11. Yes
12. Selected Junoldo the Shadespirit Power Patron (Deck)
13. Activate Junoldo the Shadespirit Power Patron (M5): Special Summon 1 "Junora the Power Patron of Tuning" from your Extra Deck
14. Selected Junora the Power Patron of Tuning (Extra Deck)
15. Yes
16. Selected Nervedo the Shadebeast Power Patron (Extra Deck)
17. Special Summon (procedure) Artmage Non-Finito (Extra Deck)
18. Selected Dark Magical Circle (hand)
19. Selected Nervedo the Shadebeast Power Patron (hand)
20. Yes
21. Selected Artmage Impasto -Recapture- (Deck)
22. Link Summon Purification Power Patron (Extra Deck)
23. select Medius the Pure (M3)
24. select Artmage Non-Finito (EMZ-R)
25. Yes
26. Selected Theorealize Medius (Deck)
27. Activate Theorealize Medius (hand): If a "Power Patron" card is on the field: You can Special Summon this card from your hand, then you can add 1 "Theorealize" Spell/Trap from your Deck to your hand
28. Activate Medius the Pure (GY): Shuffle 1 monster from your hand or face-up field into the Deck, and if you do, Special Summon this card
29. Selected Ash Blossom & Joyous Spring (hand)
30. Activate Purification Power Patron (EMZ-L): Link Summon including this card as material
31. Selected Medicurius the Power Patron of Illusions (Extra Deck)
32. select Medius the Pure (M2)
33. Finish selection
34. Yes
35. Special Summon 1 "Diactorus" monster
36. Selected Artmage Diactorus (Extra Deck)

End board:  LP 8000 | Hand 2 | Deck 32 | Extra 10 | GY 4 | Banished 8   Monsters: M3: Artmage Diactorus Lv8 2800/2500 ATK || M4: Nerva the Power Patron of Creation Lv10 3300/3300 ATK || M5: Junora the Power Patron of Tuning Lv10 3100/3800 ATK || EMZ-R: Medicurius the Power Patron of Illusions L3↙↓↘ 3000    Spell/Trap: S1: Ars Magna - "Citrinitas" || S2: Artmage Impasto -Recapture- (Set)   GY: Dark Magical Circle, Nervedo the Shadebeast Power Patron, Artmage Non-Finito, Purification Power Patron   Banished: Fiendsmith Engraver (face-down), Theorealize Liberation (face-down), Theorealize Past Lull (face-down), Fiendsmith Engraver (face-down), Small World (face-down), Medius the Pure (face-down), Medius t

## Order 2: best 13.25 (, worst 13.25) — from forced Activate Griffoh → new ending → new early order
Others: forced Activate Griffoh → new ending 12.7 · forced Activate Griffoh → new ending → new ending 12.7 · forced Activate Griffoh 12.25 · tries Activate Junoldo the Shadespirit Power Patron 11.65 · tries Activate Junoldo the Shadespirit Power Patron 11.35 · forced Activate Griffoh → new ending → new early order 11.35 · opening lanes 10.75 · search 9.7 · forced Activate Theorealize Liberation 9.15 · forced Fusion Summon Berfomet 8.3 · forced Activate Artmage Non-Finito 8.3 · tries Link Summon S 8 · tries Activate Theorealize Liberation 7.85 · forced Xyz Summon Evilswarm Exciton Knight 5.85 · forced Link Summon Fiendsmith's Requiem 5.85

1. Set Spell/Trap Infinite Impermanence
2. Set Spell/Trap Ars Magna - "Citrinitas"
3. Activate Ars Magna - "Citrinitas" (S2): activate this card
4. Activate Ars Magna - "Citrinitas" (S2): Add 1 "Medius" or "Ars Magna" monster from your Deck to your hand
5. Selected Medius the Pure (Deck)
6. Normal Summon Medius the Pure (hand)
7. Yes
8. Selected Nervedo the Shadebeast Power Patron (Deck)
9. Special Summon it
10. Activate Nervedo the Shadebeast Power Patron (M2): Special Summon 1 "Nerva the Power Patron of Creation" from your Extra Deck
11. Selected Nerva the Power Patron of Creation (Extra Deck)
12. Yes
13. Selected Junoldo the Shadespirit Power Patron (Deck)
14. Activate Junoldo the Shadespirit Power Patron (M3): Special Summon 1 "Junora the Power Patron of Tuning" from your Extra Deck
15. Selected Junora the Power Patron of Tuning (Extra Deck)
16. Yes
17. Selected Nervedo the Shadebeast Power Patron (Extra Deck)
18. Special Summon (procedure) Artmage Non-Finito (Extra Deck)
19. Selected Dark Magical Circle (hand)
20. Selected Nervedo the Shadebeast Power Patron (hand)
21. Yes
22. Selected Artmage Impasto -Recapture- (Deck)
23. Link Summon Purification Power Patron (Extra Deck)
24. select Medius the Pure (M1)
25. select Junora the Power Patron of Tuning (M3)
26. Yes
27. Selected Theorealize Medius (Deck)
28. Activate Theorealize Medius (hand): If a "Power Patron" card is on the field: You can Special Summon this card from your hand, then you can add 1 "Theorealize" Spell/Trap from your Deck to your hand
29. Yes
30. Selected Theorealize Liberation (Deck)
31. Activate Medius the Pure (GY): Shuffle 1 monster from your hand or face-up field into the Deck, and if you do, Special Summon this card
32. Selected Ash Blossom & Joyous Spring (hand)
33. Activate Theorealize Liberation (hand): Add to your hand, or Special Summon, 1 monster from your Deck with 300 ATK/200 DEF
34. Activate Purification Power Patron (EMZ-L): Link Summon including this card as material
35. Selected Medicurius the Power Patron of Illusions (Extra Deck)
36. select Medius the Pure (M5)
37. Finish selection
38. Selected Griffoh (Deck)
39. Add the card(s) to your hand
40. Yes
41. Special Summon 1 "Diactorus" monster
42. Selected Artmage Diactorus (Extra Deck)
43. Activate Griffoh (hand): Activate 1 of these effects
44. Set 1 card that mentions "Light and Darkness Ritual"
45. Selected Mind Shuffle (Deck)
46. Activate Theorealize Liberation (GY): Treat 1 monster you control as a Tuner this turn
47. Selected Artmage Non-Finito (M4)
48. Activate Mind Shuffle (S4): activate this card
49. No
50. Activate Mind Shuffle (S4): Add 1 appropriate monster to your hand
51. Selected Skull Archfiend of Chaos (Deck)
52. Selected Skull Archfiend of Chaos (hand)
53. Yes
54. Selected Light and Darkness Ritual (Deck)
55. Selected Magician of Dark Chaos - Black Chaos (Deck)
56. Activate Light and Darkness Ritual (GY): Add both this card and 1 card that mentions "Light and Darkness Ritual" from your GY to your hand
57. Selected Skull Archfiend of Chaos (GY)
58. Activate Light and Darkness Ritual (hand): Ritual Summon 1 "Magician of Dark Chaos - Black Chaos" or "Black Luster Soldier - Soldier of Light and Darkness" from your hand
59. Selected Magician of Dark Chaos - Black Chaos (hand)
60. Selected Griffoh (GY) value 8 or 1
61. Yes
62. Selected Dark Magical Circle (GY)

End board:  LP 8000 | Hand 3 | Deck 26 | Extra 10 | GY 4 | Banished 10   Monsters: M1: Magician of Dark Chaos - Black Chaos Lv8 2800/2600 ATK || M2: Nerva the Power Patron of Creation Lv10 3300/3300 ATK || M3: Artmage Diactorus Lv8 2800/2500 ATK || M4: Artmage Non-Finito Lv7 2400/1500 ATK || EMZ-L: Medicurius the Power Patron of Illusions L3↙↓↘ 3000    Spell/Trap: S1: Infinite Impermanence (Set) || S2: Ars Magna - "Citrinitas" || S3: Artmage Impasto -Recapture- (Set) || S4: Mind Shuffle   GY: Nervedo the Shadebeast Power Patron, Junora the Power Patron of Tuning, Purification Power Patron, Light and Darkness Ritual   Banished: Apprentice Illusion Magician (face-down), Pendulum Treasure (face-down), Ars

## Order 3: best 11.55 (, worst 11.55) — from tries Activate Vidolium the Unstable Power Patron of Unity
Others: forced Activate Theorealize Liberation 11.55 · tries Activate Vidolium the Unstable Power Patron of Unity 11.55 · tries Activate Vidolium the Unstable Power Patron of Unity → new early order 11.55 · forced Activate Griffoh 11.5 · tries Activate Nervedo the Shadebeast Power Patron 11.35 · opening lanes 11.35 · forced Fusion Summon Berfomet 11.35 · tries Activate Nervedo the Shadebeast Power Patron 11.25 · forced Activate Artmage Non-Finito 11.2 · tries Activate Vidolium the Unstable Power Patron of Unity → new ending 10.15 · tries Activate Vidolium the Unstable Power Patron of Unity → new ending 10.15 · forced Link Summon Fiendsmith's Requiem 8.75 · forced Xyz Summon Evilswarm Exciton Knight 8.3 · search 8.05 · tries Activate Vidolium the Unstable Power Patron of Unity → new early order 3.95

1. Set Spell/Trap Ars Magna - "Citrinitas"
2. Activate Ars Magna - "Citrinitas" (S1): activate this card
3. Activate Ars Magna - "Citrinitas" (S1): Add 1 "Medius" or "Ars Magna" monster from your Deck to your hand
4. Selected Medius the Pure (Deck)
5. Normal Summon Medius the Pure (hand)
6. Yes
7. Selected Vidolium the Unstable Power Patron of Unity (Deck)
8. Add the card(s) to your hand
9. Activate Vidolium the Unstable Power Patron of Unity (hand): Activate it as a Pendulum Spell
10. Activate Vidolium the Unstable Power Patron of Unity (S5): Activate 1 of these effects
11. Your Level 12 "Power Patron" monsters gain 5000 ATK
12. Yes
13. Selected Nervedo the Shadebeast Power Patron (Deck)
14. Special Summon (procedure) Artmage Non-Finito (Extra Deck)
15. Selected Dark Magical Circle (hand)
16. Selected Nervedo the Shadebeast Power Patron (hand)
17. Yes
18. Selected Artmage Impasto -Recapture- (Deck)
19. Link Summon Purification Power Patron (Extra Deck)
20. select Medius the Pure (M1)
21. select Artmage Non-Finito (M2)
22. Yes
23. Selected Theorealize Medius (Deck)
24. Activate Medius the Pure (GY): Shuffle 1 monster from your hand or face-up field into the Deck, and if you do, Special Summon this card
25. Selected Ash Blossom & Joyous Spring (hand)
26. Activate Theorealize Medius (hand): If a "Power Patron" card is on the field: You can Special Summon this card from your hand, then you can add 1 "Theorealize" Spell/Trap from your Deck to your hand
27. Yes
28. Selected Theorealize Liberation (Deck)
29. Activate Theorealize Liberation (hand): Add to your hand, or Special Summon, 1 monster from your Deck with 300 ATK/200 DEF
30. Activate Purification Power Patron (EMZ-L): Link Summon including this card as material
31. Selected Medicurius the Power Patron of Illusions (Extra Deck)
32. select Medius the Pure (M2)
33. Finish selection
34. Selected Nervedo the Shadebeast Power Patron (Deck)
35. Special Summon it
36. Yes
37. Special Summon 1 "Diactorus" monster
38. Selected Artmage Diactorus (Extra Deck)
39. Activate Theorealize Liberation (GY): Treat 1 monster you control as a Tuner this turn
40. Selected Nervedo the Shadebeast Power Patron (M1)
41. Activate Nervedo the Shadebeast Power Patron (M1): Special Summon 1 "Nerva the Power Patron of Creation" from your Extra Deck
42. Selected Nerva the Power Patron of Creation (Extra Deck)
43. Yes
44. Selected Artmage Graflare (Deck)

End board:  LP 8000 | Hand 2 | Deck 32 | Extra 12 | GY 4 | Banished 6   Monsters: M3: Artmage Diactorus Lv8 2800/2500 ATK || M4: Nerva the Power Patron of Creation Lv10 3300/3300 ATK || M5: Artmage Graflare Lv5 2100/1500 ATK || EMZ-R: Medicurius the Power Patron of Illusions L3↙↓↘ 3000    Spell/Trap: S1: Ars Magna - "Citrinitas" || S2: Artmage Impasto -Recapture- (Set)   GY: Dark Magical Circle, Nervedo the Shadebeast Power Patron, Artmage Non-Finito, Purification Power Patron   Banished: Medius the Pure, Theorealize Medius, Theorealize Liberation, Light and Darkness Ritual (face-down), Fiendsmith's Tract (face-down), Fiendsmith's Tract (face-down)   Hand: Ash Blossom & Joyous Spring, Infinite Imperman

## Order 4: best 11.35 (, worst 11.35) — from tries Activate Theorealize Medius
Others: tries Link Summon Purification Power Patron 10.75 · forced Activate Theorealize Liberation 10.1 · tries Activate Theorealize Medius → new ending 9.95 · forced Fusion Summon Berfomet 9.9 · forced Activate Griffoh 9.85 · tries Activate Theorealize Medius → new ending 9.85 · tries Activate Purification Power Patron 8.65 · search 8.3 · forced Xyz Summon Evilswarm Exciton Knight 8.3 · opening lanes 8.3 · forced Link Summon Fiendsmith's Requiem 8.3 · forced Activate Artmage Non-Finito 8.05 · tries Link Summon Medicurius the Power Patron of Illusions 6.6 · tries Activate Theorealize Medius → new early order 5.95 · tries Activate Theorealize Medius → new early order 3.9

1. Set Spell/Trap Infinite Impermanence
2. Set Spell/Trap Ars Magna - "Citrinitas"
3. Activate Ars Magna - "Citrinitas" (S2): activate this card
4. Activate Ars Magna - "Citrinitas" (S2): Add 1 "Medius" or "Ars Magna" monster from your Deck to your hand
5. Selected Medius the Pure (Deck)
6. Normal Summon Medius the Pure (hand)
7. Yes
8. Selected Nervedo the Shadebeast Power Patron (Deck)
9. Special Summon it
10. Activate Nervedo the Shadebeast Power Patron (M4): Special Summon 1 "Nerva the Power Patron of Creation" from your Extra Deck
11. Selected Nerva the Power Patron of Creation (Extra Deck)
12. Yes
13. Selected Junoldo the Shadespirit Power Patron (Deck)
14. Activate Junoldo the Shadespirit Power Patron (M4): Special Summon 1 "Junora the Power Patron of Tuning" from your Extra Deck
15. Selected Junora the Power Patron of Tuning (Extra Deck)
16. Yes
17. Selected Nervedo the Shadebeast Power Patron (Extra Deck)
18. Special Summon (procedure) Artmage Non-Finito (Extra Deck)
19. Selected Dark Magical Circle (hand)
20. Selected Nervedo the Shadebeast Power Patron (hand)
21. Yes
22. Selected Artmage Impasto -Recapture- (Deck)
23. Link Summon Purification Power Patron (Extra Deck)
24. select Junora the Power Patron of Tuning (M2)
25. select Medius the Pure (M3)
26. Yes
27. Selected Theorealize Medius (Deck)
28. Activate Medius the Pure (GY): Shuffle 1 monster from your hand or face-up field into the Deck, and if you do, Special Summon this card
29. Selected Ash Blossom & Joyous Spring (hand)
30. Activate Theorealize Medius (hand): If a "Power Patron" card is on the field: You can Special Summon this card from your hand, then you can add 1 "Theorealize" Spell/Trap from your Deck to your hand
31. Yes
32. Selected Theorealize Past Lull (Deck)
33. Activate Theorealize Past Lull (hand): Special Summon 1 "Medius the Pure" from your hand or Deck
34. Activate Purification Power Patron (EMZ-L): Link Summon including this card as material
35. Selected Medicurius the Power Patron of Illusions (Extra Deck)
36. select Medius the Pure (M5)
37. Finish selection
38. Selected Medius the Pure (Deck)
39. Yes
40. Add 1 "Ars Magna" card from your Deck to your hand
41. Selected Ars Magna of Purification and Corruption (Deck)
42. Activate Ars Magna of Purification and Corruption (hand): You can banish this card from your hand; add 1 "Ars Magna" Spell/Trap from your Deck to your hand
43. Selected Ars Magna - "Citrinitas" (Deck)
44. Xyz Summon Evilswarm Exciton Knight (Extra Deck)
45. select Theorealize Medius (M2)
46. select Medius the Pure (M3)
47. Yes

End board:  LP 8000 | Hand 2 | Deck 28 | Extra 10 | GY 5 | Banished 7   Monsters: M1: Nerva the Power Patron of Creation Lv10 3300/3300 ATK || M2: Evilswarm Exciton Knight R4 1900/0 ATK [2 mat: Medius the Pure, Theorealize Medius] || M3: Ars Magna of Purification and Corruption Lv8 1000/2100 ATK || M4: Artmage Non-Finito Lv7 2400/1500 ATK || EMZ-L: Medicurius the Power Patron of Illusions L3↙↓↘ 3000    Spell/Trap: S1: Infinite Impermanence (Set) || S2: Ars Magna - "Citrinitas" || S3: Artmage Impasto -Recapture- (Set)   GY: Dark Magical Circle, Nervedo the Shadebeast Power Patron, Junora the Power Patron of Tuning, Purification Power Patron, Theorealize Past Lull   Banished: Artmage Vandalism -Assault- 

