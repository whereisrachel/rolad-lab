# Evolved lines — Pendulum Treasure, Ash Blossom & Joyous Spring, Ash Blossom & Joyous Spring, Infinite Impermanence, Dark Magical Circle (br-berfomet)
2026-11-26T16:56:26.496Z

4 deck orders (different face-down banishes / draws), 3 opponent hands x o_ss_panama + o_elfnote + o_despia + o_angelechy per line, 5 min searches, 4 mutation rounds.
Fitness = end-board interruptions (the lab scorer, src/disrupt.mjs: wipe 2, negate 1-1.5, banish/protection less; hand traps kept count 1 each). The winner of each order is also played into the opponent decks: margin after their turn shown beside it.

**Margin after their turn (winners): average null** (worst 99)

**Best line per deck order: average 12.55** (worst order 12.3). Winner came from: tries Activate Junoldo the Shadespirit Power Patron 1, forced Xyz Summon Evilswarm Exciton Knight → new early order 1, forced Activate Theorealize Liberation 1, forced Activate Artmage Non-Finito 1

## Weak points found automatically
Cards whose face-down banish (by your own costs) hurt the best line most (average best line without vs with that card banished):

| card | orders where it was banished | drop |
|---|---|---|
| Black Chaos | 3/4 | 1 |
| Artmage Vandalism -Assault- | 3/4 | 1 |
| Theorealize Past Lull | 2/4 | 0.5 |
| Light and Darkness Ritual | 2/4 | 0.5 |
| Black Luster Soldier - Soldier of Light and Darkness | 2/4 | 0.5 |
| Plundered Power Patron Plane - Vidolia | 3/4 | -0.33 |
| Fiendsmith Engraver | 3/4 | -0.33 |
| Ars Magna - "Citrinitas" | 3/4 | -0.33 |
| Nervedo the Shadebeast Power Patron | 3/4 | -0.33 |
| Magician of Dark Chaos - Black Chaos | 3/4 | -0.33 |

List changes proposed for the list test (data/proposals-br-berfomet.json):
- +1 Black Chaos, −1 Plundered Power Patron Plane - Vidolia — Black Chaos: best line 1 worse when a cost banished it (3 of 4 orders) — Pendulum Treasure
- +1 Theorealize Past Lull, −1 Artmage Vandalism -Assault- — Theorealize Past Lull: best line 0.5 worse when a cost banished it (2 of 4 orders) — Pendulum Treasure
- +1 Light and Darkness Ritual, −1 Small World — Light and Darkness Ritual: best line 0.5 worse when a cost banished it (2 of 4 orders) — Pendulum Treasure
- +1 Black Luster Soldier - Soldier of Light and Darkness, −1 Plundered Power Patron Plane - Vidolia — Black Luster Soldier - Soldier of Light and Darkness: best line 0.5 worse when a cost banished it (2 of 4 orders) — Pendulum Treasure
- +1 Black Chaos — Black Chaos: best line 1 worse when a cost banished it (3 of 4 orders) — Pendulum Treasure (add only: deck grows, up to 60)
- +1 Theorealize Past Lull — Theorealize Past Lull: best line 0.5 worse when a cost banished it (2 of 4 orders) — Pendulum Treasure (add only: deck grows, up to 60)
- +1 Light and Darkness Ritual — Light and Darkness Ritual: best line 0.5 worse when a cost banished it (2 of 4 orders) — Pendulum Treasure (add only: deck grows, up to 60)
- +1 Black Luster Soldier - Soldier of Light and Darkness — Black Luster Soldier - Soldier of Light and Darkness: best line 0.5 worse when a cost banished it (2 of 4 orders) — Pendulum Treasure (add only: deck grows, up to 60)

Effects the search had not used, tried on purpose (best result so far):
- Activate Junoldo the Shadespirit Power Patron: 13.3
- Activate Artmage Vandalism -Assault-: 13.1
- Activate Vidolium the Unstable Power Patron of Unity: 12.3
- Activate Theorealize Medius: 11.95
- Activate Prohibited Power Patron Portal - Terminus: 11.2
- Normal Summon Medius the Pure: 10.85
- Activate Nervedo the Shadebeast Power Patron: 10.8
- Link Summon Purification Power Patron: 10.5

## Order 1: best 13.3 (, worst 13.3) — from tries Activate Junoldo the Shadespirit Power Patron
Others: tries Activate Artmage Vandalism -Assault- 13.1 · tries Activate Junoldo the Shadespirit Power Patron → new early order 12.85 · tries Activate Junoldo the Shadespirit Power Patron → new ending 12.3 · forced Activate Theorealize Liberation 11.4 · forced Activate Artmage Non-Finito 11.3 · tries Activate Nervedo the Shadebeast Power Patron 10.8 · forced Activate Griffoh 10.2 · tries Activate Artmage Vandalism -Assault- 10.15 · tries Activate Junoldo the Shadespirit Power Patron → new early order 9.75 · opening lanes 9.4 · search 9.25 · tries Activate Junoldo the Shadespirit Power Patron → new ending 8.5 · forced Xyz Summon Evilswarm Exciton Knight 6.6 · forced Fusion Summon Berfomet 6.6 · forced Link Summon Fiendsmith's Requiem 6.6

1. Activate Pendulum Treasure (hand): Add to Extra Deck
2. Selected Nervedo the Shadebeast Power Patron (Deck)
3. Yes
4. Selected Junoldo the Shadespirit Power Patron (Deck)
5. Activate Junoldo the Shadespirit Power Patron (M3): Special Summon 1 "Junora the Power Patron of Tuning" from your Extra Deck
6. Selected Junora the Power Patron of Tuning (Extra Deck)
7. Yes
8. Selected Nervedo the Shadebeast Power Patron (Extra Deck)
9. Special Summon (procedure) Artmage Non-Finito (Extra Deck)
10. Selected Dark Magical Circle (hand)
11. Selected Nervedo the Shadebeast Power Patron (hand)
12. Yes
13. Selected Artmage Impasto -Recapture- (Deck)
14. Normal Summon Ash Blossom & Joyous Spring (hand)
15. Link Summon Purification Power Patron (Extra Deck)
16. select Junora the Power Patron of Tuning (M3)
17. select Ash Blossom & Joyous Spring (M5)
18. Yes
19. Selected Theorealize Past Lull (Deck)
20. Activate Theorealize Past Lull (hand): Special Summon 1 "Medius the Pure" from your hand or Deck
21. Selected Medius the Pure (Deck)
22. Yes
23. Selected Vidolium the Unstable Power Patron of Unity (Deck)
24. Add the card(s) to your hand
25. Activate Vidolium the Unstable Power Patron of Unity (hand): Activate it as a Pendulum Spell
26. Activate Vidolium the Unstable Power Patron of Unity (S5): Activate 1 of these effects
27. Special Summon 1 "Power Patron" monster
28. Selected Nervedo the Shadebeast Power Patron (GY)
29. Yes
30. Selected Theorealize Medius (Deck)
31. Activate Nervedo the Shadebeast Power Patron (M1): Special Summon 1 "Nerva the Power Patron of Creation" from your Extra Deck
32. Selected Nerva the Power Patron of Creation (Extra Deck)
33. Activate Theorealize Medius (hand): If a "Power Patron" card is on the field: You can Special Summon this card from your hand, then you can add 1 "Theorealize" Spell/Trap from your Deck to your hand
34. Yes
35. Selected Theorealize Liberation (Deck)
36. Activate Theorealize Liberation (hand): Add to your hand, or Special Summon, 1 monster from your Deck with 300 ATK/200 DEF
37. Selected Griffoh (Deck)
38. Add the card(s) to your hand
39. Activate Griffoh (hand): Activate 1 of these effects
40. Set 1 card that mentions "Light and Darkness Ritual"
41. Selected Mind Shuffle (Deck)
42. Activate Mind Shuffle (S2): activate this card
43. Yes
44. Activate Purification Power Patron (EMZ-L): Link Summon including this card as material
45. Selected Medicurius the Power Patron of Illusions (Extra Deck)
46. select Medius the Pure (M5)
47. Finish selection
48. Selected Skull Archfiend of Chaos (Deck)
49. Selected Skull Archfiend of Chaos (hand)
50. Yes
51. Selected Light and Darkness Ritual (Deck)
52. Selected Magician of Dark Chaos - Black Chaos (Deck)
53. Activate Light and Darkness Ritual (GY): Add both this card and 1 card that mentions "Light and Darkness Ritual" from your GY to your hand
54. Selected Skull Archfiend of Chaos (GY)
55. Activate Light and Darkness Ritual (hand): Ritual Summon 1 "Magician of Dark Chaos - Black Chaos" or "Black Luster Soldier - Soldier of Light and Darkness" from your hand
56. Selected Magician of Dark Chaos - Black Chaos (hand)
57. Selected Griffoh (GY) value 8 or 1
58. Yes
59. Special Summon 1 "Diactorus" monster
60. Activate Magician of Dark Chaos - Black Chaos (M2): Add 1 Spell from your GY to your hand
61. Selected Pendulum Treasure (GY)
62. Selected Artmage Diactorus (Extra Deck)

End board:  LP 8000 | Hand 4 | Deck 23 | Extra 12 | GY 8 | Banished 8   Monsters: M1: Artmage Diactorus Lv8 2800/2500 ATK || M2: Magician of Dark Chaos - Black Chaos Lv8 2800/2600 ATK || M3: Nerva the Power Patron of Creation Lv10 3300/3300 ATK || M4: Artmage Non-Finito Lv7 2400/1500 ATK || EMZ-L: Medicurius the Power Patron of Illusions L3↙↓↘ 3000    Spell/Trap: S1: Artmage Impasto -Recapture- (Set) || S2: Mind Shuffle   GY: Dark Magical Circle, Junora the Power Patron of Tuning, Ash Blossom & Joyous Spring, Theorealize Past Lull, Theorealize Liberation, Medius the Pure, Purification Power Patron, Light and Darkness Ritual   Banished: Artmage Finmel (face-down), Small World (face-down), Pendulum Treas

## Order 2: best 12.3 (, worst 12.3) — from forced Xyz Summon Evilswarm Exciton Knight → new early order
Others: forced Xyz Summon Evilswarm Exciton Knight → new early order → new ending 12.3 · forced Xyz Summon Evilswarm Exciton Knight 12.25 · forced Fusion Summon Berfomet 10.95 · forced Xyz Summon Evilswarm Exciton Knight → new ending 10.95 · tries Link Summon Purification Power Patron 10.5 · tries Activate Junoldo the Shadespirit Power Patron 10.25 · forced Link Summon Fiendsmith's Requiem 9.95 · opening lanes 9.75 · forced Activate Theorealize Liberation 9.4 · search 9.25 · forced Activate Griffoh 9.15 · forced Activate Artmage Non-Finito 7.8 · tries Activate Plundered Power Patron Plane - Vidolia 7 · tries Activate Dark Magical Circle 6.6 · forced Xyz Summon Evilswarm Exciton Knight → new early order → new early order 4.53

1. Set Spell/Trap Pendulum Treasure
2. Activate Pendulum Treasure (S1): Add to Extra Deck
3. Selected Vidolium the Unstable Power Patron of Unity (Deck)
4. Yes
5. Selected Prohibited Power Patron Portal - Terminus (Deck)
6. Set Spell/Trap Prohibited Power Patron Portal - Terminus
7. Activate Prohibited Power Patron Portal - Terminus (S1): Send 1 "Power Patron" monster from your Deck or Extra Deck to the GY, then you can add 1 DARK Fairy monster from your Deck to your hand
8. Selected Nervedo the Shadebeast Power Patron (Deck)
9. Yes
10. Selected Medius the Pure (Deck)
11. Normal Summon Medius the Pure (hand)
12. Yes
13. Selected Junoldo the Shadespirit Power Patron (Deck)
14. Special Summon it
15. Link Summon Purification Power Patron (Extra Deck)
16. select Medius the Pure (M4)
17. select Junoldo the Shadespirit Power Patron (M1)
18. Yes
19. Activate Purification Power Patron (EMZ-L): Add 1 "Theorealize" card from your Deck to your hand
20. Selected Theorealize Medius (Deck)
21. Selected Vidolium the Unstable Power Patron of Unity (Extra Deck)
22. Activate Vidolium the Unstable Power Patron of Unity (hand): Activate it as a Pendulum Spell
23. Activate Medius the Pure (GY): Shuffle 1 monster from your hand or face-up field into the Deck, and if you do, Special Summon this card
24. Selected Ash Blossom & Joyous Spring (hand)
25. Activate Theorealize Medius (hand): If a "Power Patron" card is on the field: You can Special Summon this card from your hand, then you can add 1 "Theorealize" Spell/Trap from your Deck to your hand
26. Yes
27. Selected Theorealize Liberation (Deck)
28. Activate Vidolium the Unstable Power Patron of Unity (S1): Activate 1 of these effects
29. Special Summon 1 "Power Patron" monster
30. Activate Purification Power Patron (EMZ-L): Link Summon including this card as material
31. Activate Theorealize Liberation (hand): Add to your hand, or Special Summon, 1 monster from your Deck with 300 ATK/200 DEF
32. Selected Nervedo the Shadebeast Power Patron (Deck)
33. Special Summon it
34. Selected Medicurius the Power Patron of Illusions (Extra Deck)
35. select Medius the Pure (M4)
36. Finish selection
37. Selected Nervedo the Shadebeast Power Patron (GY)
38. Yes
39. Special Summon 1 "Diactorus" monster
40. Selected Artmage Diactorus (Extra Deck)
41. Special Summon (procedure) Artmage Non-Finito (Extra Deck)
42. Selected Dark Magical Circle (hand)
43. Selected Nervedo the Shadebeast Power Patron (M2)
44. Yes
45. Activate Artmage Non-Finito (M5): Set 1 "Artmage" Spell/Trap from your Deck
46. Selected Artmage Impasto -Recapture- (Deck)
47. Selected Artmage Graflare (Deck)
48. Activate Nervedo the Shadebeast Power Patron (M4): Special Summon 1 "Nerva the Power Patron of Creation" from your Extra Deck
49. Selected Nerva the Power Patron of Creation (Extra Deck)

End board:  LP 8000 | Hand 2 | Deck 30 | Extra 14 | GY 5 | Banished 5   Monsters: M1: Artmage Graflare Lv5 2100/1500 ATK || M3: Artmage Diactorus Lv8 2800/2500 ATK || M4: Nerva the Power Patron of Creation Lv10 3300/3300 ATK || M5: Artmage Non-Finito Lv7 2400/1500 ATK || EMZ-R: Medicurius the Power Patron of Illusions L3↙↓↘ 3000    Spell/Trap: S1: Artmage Impasto -Recapture- (Set)   GY: Pendulum Treasure, Prohibited Power Patron Portal - Terminus, Purification Power Patron, Theorealize Liberation, Dark Magical Circle   Banished: Medius the Pure, Theorealize Medius, Black Chaos (face-down), Artmage Finmel (face-down), Ash Blossom & Joyous Spring (face-down)   Hand: Infinite Impermanence, Ash Blossom & J

## Order 3: best 12.3 (, worst 12.3) — from forced Activate Theorealize Liberation
Others: tries Activate Vidolium the Unstable Power Patron of Unity 12.3 · forced Activate Theorealize Liberation → new early order 12.3 · tries Activate Prohibited Power Patron Portal - Terminus 11.2 · tries Normal Summon Medius the Pure 10.85 · search 10.5 · forced Activate Griffoh 10.5 · forced Fusion Summon Berfomet 9.9 · opening lanes 9.75 · forced Activate Artmage Non-Finito 9.6 · tries Activate Vidolium the Unstable Power Patron of Unity 8.5 · forced Xyz Summon Evilswarm Exciton Knight 7.85 · forced Link Summon Fiendsmith's Requiem 6.6 · forced Activate Theorealize Liberation → new early order 5.75

1. Normal Summon Ash Blossom & Joyous Spring (hand)
2. Activate Pendulum Treasure (hand): Add to Extra Deck
3. Selected Nervedo the Shadebeast Power Patron (Deck)
4. Yes
5. Selected Junoldo the Shadespirit Power Patron (Deck)
6. Activate Junoldo the Shadespirit Power Patron (M3): Special Summon 1 "Junora the Power Patron of Tuning" from your Extra Deck
7. Selected Junora the Power Patron of Tuning (Extra Deck)
8. Yes
9. Selected Nervedo the Shadebeast Power Patron (Extra Deck)
10. Special Summon (procedure) Artmage Non-Finito (Extra Deck)
11. Selected Dark Magical Circle (hand)
12. Selected Nervedo the Shadebeast Power Patron (hand)
13. Yes
14. Selected Artmage Impasto -Recapture- (Deck)
15. Link Summon Purification Power Patron (Extra Deck)
16. select Junora the Power Patron of Tuning (M3)
17. select Ash Blossom & Joyous Spring (M4)
18. Yes
19. Selected Theorealize Past Lull (Deck)
20. Set Spell/Trap Theorealize Past Lull
21. Activate Theorealize Past Lull (S2): Special Summon 1 "Medius the Pure" from your hand or Deck
22. Selected Medius the Pure (Deck)
23. Yes
24. Selected Theorealize Medius (Deck)
25. Add the card(s) to your hand
26. Activate Theorealize Medius (hand): If a "Power Patron" card is on the field: You can Special Summon this card from your hand, then you can add 1 "Theorealize" Spell/Trap from your Deck to your hand
27. Yes
28. Selected Theorealize Liberation (Deck)
29. Activate Theorealize Liberation (hand): Add to your hand, or Special Summon, 1 monster from your Deck with 300 ATK/200 DEF
30. Selected Griffoh (Deck)
31. Add the card(s) to your hand
32. Activate Griffoh (hand): Activate 1 of these effects
33. Set 1 card that mentions "Light and Darkness Ritual"
34. Selected Mind Shuffle (Deck)
35. Activate Mind Shuffle (S2): activate this card
36. No
37. Activate Purification Power Patron (EMZ-L): Link Summon including this card as material
38. Selected Medicurius the Power Patron of Illusions (Extra Deck)
39. select Medius the Pure (M2)
40. Finish selection
41. Activate Mind Shuffle (S2): Add 1 appropriate monster to your hand
42. Selected Skull Archfiend of Chaos (Deck)
43. Selected Skull Archfiend of Chaos (hand)
44. Yes
45. Selected Light and Darkness Ritual (Deck)
46. Selected Magician of Dark Chaos - Black Chaos (Deck)
47. Activate Light and Darkness Ritual (GY): Add both this card and 1 card that mentions "Light and Darkness Ritual" from your GY to your hand
48. Selected Skull Archfiend of Chaos (GY)
49. Activate Light and Darkness Ritual (hand): Ritual Summon 1 "Magician of Dark Chaos - Black Chaos" or "Black Luster Soldier - Soldier of Light and Darkness" from your hand
50. Selected Magician of Dark Chaos - Black Chaos (hand)
51. Selected Griffoh (GY) value 8 or 1
52. Yes
53. Special Summon 1 "Diactorus" monster
54. Activate Magician of Dark Chaos - Black Chaos (M2): Add 1 Spell from your GY to your hand
55. Selected Theorealize Liberation (GY)
56. Selected Artmage Diactorus (Extra Deck)

End board:  LP 8000 | Hand 4 | Deck 27 | Extra 11 | GY 9 | Banished 5   Monsters: M1: Artmage Non-Finito Lv7 2400/1500 ATK || M2: Magician of Dark Chaos - Black Chaos Lv8 2800/2600 ATK || M3: Artmage Diactorus Lv8 2800/2500 ATK || EMZ-L: Medicurius the Power Patron of Illusions L3↙↓↘ 3000    Spell/Trap: S1: Artmage Impasto -Recapture- (Set) || S2: Mind Shuffle   GY: Pendulum Treasure, Dark Magical Circle, Nervedo the Shadebeast Power Patron, Junora the Power Patron of Tuning, Ash Blossom & Joyous Spring, Theorealize Past Lull, Medius the Pure, Purification Power Patron, Light and Darkness Ritual   Banished: Artmage Vandalism -Assault- (face-down), Artmage Graflare (face-down), Pendulum Treasure (face-d

## Order 4: best 12.3 (, worst 12.3) — from forced Activate Artmage Non-Finito
Others: tries Activate Theorealize Medius 11.95 · forced Activate Theorealize Liberation 11.95 · forced Activate Artmage Non-Finito → new ending 11.8 · forced Activate Artmage Non-Finito → new ending 11.8 · search 10.8 · forced Activate Artmage Non-Finito → new early order 10.8 · tries Link Summon Medicurius the Power Patron of Illusions 9.75 · tries Normal Summon Theorealize Medius 9.35 · forced Xyz Summon Evilswarm Exciton Knight 7.15 · tries Link Summon S 6.6 · forced Link Summon Fiendsmith's Requiem 6.6 · forced Activate Griffoh 6.6 · forced Fusion Summon Berfomet 6.6 · opening lanes 6.6 · forced Activate Artmage Non-Finito → new early order 3.95

1. Set Spell/Trap Pendulum Treasure
2. Activate Pendulum Treasure (S1): Add to Extra Deck
3. Selected Vidolium the Unstable Power Patron of Unity (Deck)
4. Yes
5. Selected Prohibited Power Patron Portal - Terminus (Deck)
6. Set Spell/Trap Prohibited Power Patron Portal - Terminus
7. Activate Prohibited Power Patron Portal - Terminus (S1): Send 1 "Power Patron" monster from your Deck or Extra Deck to the GY, then you can add 1 DARK Fairy monster from your Deck to your hand
8. Selected Nervedo the Shadebeast Power Patron (Deck)
9. Yes
10. Selected Medius the Pure (Deck)
11. Normal Summon Medius the Pure (hand)
12. Yes
13. Selected Junoldo the Shadespirit Power Patron (Deck)
14. Special Summon it
15. Activate Junoldo the Shadespirit Power Patron (M1): Special Summon 1 "Junora the Power Patron of Tuning" from your Extra Deck
16. Selected Junora the Power Patron of Tuning (Extra Deck)
17. Yes
18. Selected Vidolium the Unstable Power Patron of Unity (Extra Deck)
19. Activate Vidolium the Unstable Power Patron of Unity (hand): Activate it as a Pendulum Spell
20. Activate Vidolium the Unstable Power Patron of Unity (S1): Activate 1 of these effects
21. Special Summon 1 "Power Patron" monster
22. Selected Nervedo the Shadebeast Power Patron (GY)
23. Special Summon (procedure) Artmage Non-Finito (Extra Deck)
24. Selected Dark Magical Circle (hand)
25. Selected Nervedo the Shadebeast Power Patron (M1)
26. Yes
27. Activate Artmage Non-Finito (M5): Set 1 "Artmage" Spell/Trap from your Deck
28. Selected Artmage Impasto -Recapture- (Deck)
29. Selected Artmage Graflare (Deck)
30. Link Summon Purification Power Patron (Extra Deck)
31. select Medius the Pure (M4)
32. select Junora the Power Patron of Tuning (EMZ-L)
33. Yes
34. Selected Theorealize Medius (Deck)
35. Activate Medius the Pure (GY): Shuffle 1 monster from your hand or face-up field into the Deck, and if you do, Special Summon this card
36. Selected Ash Blossom & Joyous Spring (hand)
37. Activate Theorealize Medius (hand): If a "Power Patron" card is on the field: You can Special Summon this card from your hand, then you can add 1 "Theorealize" Spell/Trap from your Deck to your hand
38. Yes
39. Selected Theorealize Liberation (Deck)
40. Activate Theorealize Liberation (hand): Add to your hand, or Special Summon, 1 monster from your Deck with 300 ATK/200 DEF
41. Activate Purification Power Patron (EMZ-R): Link Summon including this card as material
42. Selected Medicurius the Power Patron of Illusions (Extra Deck)
43. select Medius the Pure (M1)
44. Finish selection
45. Selected Nervedo the Shadebeast Power Patron (Deck)
46. Special Summon it
47. Yes
48. Special Summon 1 "Diactorus" monster
49. Selected Artmage Diactorus (Extra Deck)
50. Activate Artmage Diactorus (M1): Change the battle position of 1 monster on the field
51. Selected Nervedo the Shadebeast Power Patron (M4)
52. Activate Nervedo the Shadebeast Power Patron (M4): Special Summon 1 "Nerva the Power Patron of Creation" from your Extra Deck
53. Selected Nerva the Power Patron of Creation (Extra Deck)

End board:  LP 8000 | Hand 2 | Deck 27 | Extra 13 | GY 6 | Banished 8   Monsters: M1: Artmage Diactorus Lv8 2800/2500 ATK || M3: Artmage Graflare Lv5 2100/1500 ATK || M4: Nerva the Power Patron of Creation Lv10 3300/3300 ATK || M5: Artmage Non-Finito Lv7 2400/1500 ATK || EMZ-R: Medicurius the Power Patron of Illusions L3↙↓↘ 3000    Spell/Trap: S1: Artmage Impasto -Recapture- (Set)   GY: Pendulum Treasure, Prohibited Power Patron Portal - Terminus, Dark Magical Circle, Junora the Power Patron of Tuning, Purification Power Patron, Theorealize Liberation   Banished: Artmage Vandalism -Assault- (face-down), Ars Magna - "Citrinitas" (face-down), Plundered Power Patron Plane - Vidolia (face-down), Medius the

