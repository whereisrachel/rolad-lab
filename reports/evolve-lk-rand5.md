# Evolved lines — Infinite Impermanence, Small World, Medius the Pure, Artmage Graflare, Dark Magical Circle (ed-alllinks)
2026-11-27T00:06:05.533Z

8 deck orders (different face-down banishes / draws), 3 opponent hands x o_ss_panama + o_elfnote + o_despia + o_angelechy per line, 20 min searches, 4 mutation rounds.
Fitness = end-board interruptions (the lab scorer, src/disrupt.mjs: wipe 2, negate 1-1.5, banish/protection less; hand traps kept count 1 each). The winner of each order is also played into the opponent decks: margin after their turn shown beside it.

**Margin after their turn (winners): average null** (worst 99)

**Best line per deck order: average 10.11** (worst order 9.5). Winner came from: search → new ending 1, tries Activate Griffoh → new ending 1, tries Activate Junoldo the Shadespirit Power Patron 1, search 1

## Weak points found automatically
Cards whose face-down banish (by your own costs) hurt the best line most (average best line without vs with that card banished):

| card | orders where it was banished | drop |
|---|---|---|
| Artmage Graflare | 3/8 | 1.78 |
| Ars Magna of Purification and Corruption | 3/8 | 1.78 |
| Vidolium the Unstable Power Patron of Unity | 2/8 | 1.08 |
| Pendulum Treasure | 2/8 | 1.08 |
| Ars Magna - "Citrinitas" | 2/8 | 0.87 |
| Artmage Vandalism -Assault- | 2/8 | 0.72 |
| Theorealize Medius | 3/8 | -0.35 |
| Fiendsmith's Tract | 3/8 | -0.82 |
| Black Chaos | 2/8 | -0.87 |

List changes proposed for the list test (data/proposals-ed-alllinks.json):
- +1 Artmage Graflare, −1 Plundered Power Patron Plane - Vidolia — Artmage Graflare: best line 1.78 worse when a cost banished it (3 of 8 orders) — Infinite Impermanence
- +1 Ars Magna of Purification and Corruption, −1 Artmage Vandalism -Assault- — Ars Magna of Purification and Corruption: best line 1.78 worse when a cost banished it (3 of 8 orders) — Infinite Impermanence
- +1 Vidolium the Unstable Power Patron of Unity, −1 Small World — Vidolium the Unstable Power Patron of Unity: best line 1.08 worse when a cost banished it (2 of 8 orders) — Infinite Impermanence
- +1 Ars Magna - "Citrinitas", −1 Plundered Power Patron Plane - Vidolia — Ars Magna - "Citrinitas": best line 0.87 worse when a cost banished it (2 of 8 orders) — Infinite Impermanence
- +1 Artmage Graflare — Artmage Graflare: best line 1.78 worse when a cost banished it (3 of 8 orders) — Infinite Impermanence (add only: deck grows, up to 60)
- +1 Ars Magna of Purification and Corruption — Ars Magna of Purification and Corruption: best line 1.78 worse when a cost banished it (3 of 8 orders) — Infinite Impermanence (add only: deck grows, up to 60)
- +1 Vidolium the Unstable Power Patron of Unity — Vidolium the Unstable Power Patron of Unity: best line 1.08 worse when a cost banished it (2 of 8 orders) — Infinite Impermanence (add only: deck grows, up to 60)
- +1 Ars Magna - "Citrinitas" — Ars Magna - "Citrinitas": best line 0.87 worse when a cost banished it (2 of 8 orders) — Infinite Impermanence (add only: deck grows, up to 60)

Effects the search had not used, tried on purpose (best result so far):
- Activate Junoldo the Shadespirit Power Patron: 9.85
- Activate Theorealize Medius: 9.8
- Activate Ars Magna - "Citrinitas": 9.7
- Activate Griffoh: 8.9
- Link Summon S: 8.85
- Link Summon Knightmare Phoenix: 8.85
- Link Summon I: 8.6
- Activate Mind Shuffle: 8.6

## Order 1: best 11.45 (, worst 11.45) — from search → new ending
Others: search → new ending → new ending 11.45 · search → new ending → new early order 10.7 · search 9.9 · tries Activate Ars Magna - "Citrinitas" 9.7 · search → new ending → new early order 9.25 · opening lanes 9 · tries Link Summon Knightmare Phoenix 8.85 · tries Link Summon Keel, Shipwright Fur Hire 8.2 · tries Activate Ars Magna of Purification and Corruption 8.1 · tries Activate Ars Magna - "Citrinitas" 7.25 · tries Link Summon Dharc the Dark Charmer, Gloomy 7.1

1. Normal Summon Medius the Pure (hand)
2. Yes
3. Selected Nervedo the Shadebeast Power Patron (Deck)
4. Special Summon it
5. Activate Nervedo the Shadebeast Power Patron (M1): Special Summon 1 "Nerva the Power Patron of Creation" from your Extra Deck
6. Selected Nerva the Power Patron of Creation (Extra Deck)
7. Yes
8. Selected Junoldo the Shadespirit Power Patron (Deck)
9. Link Summon Artifact Dagda (Extra Deck)
10. select Junoldo the Shadespirit Power Patron (M1)
11. select Medius the Pure (M3)
12. Yes
13. Selected Nervedo the Shadebeast Power Patron (Extra Deck)
14. Special Summon (procedure) Artmage Non-Finito (Extra Deck)
15. Selected Dark Magical Circle (hand)
16. Selected Nervedo the Shadebeast Power Patron (hand)
17. Yes
18. Selected Artmage Impasto -Recapture- (Deck)
19. Activate Artmage Graflare (hand): Special Summon this card from your hand
20. Yes
21. Selected Artmage Vandalism -Assault- (Deck)
22. Activate Artmage Vandalism -Assault- (S2): When this card is activated: You can add 1 "Medius the Pure" from your Deck to your hand
23. Yes
24. Selected Medius the Pure (Deck)
25. Activate Small World (hand): activate this card
26. Selected Medius the Pure (hand)
27. Selected Fiendsmith Engraver (Deck)
28. Selected Griffoh (Deck)
29. Activate Griffoh (hand): Activate 1 of these effects
30. Set 1 card that mentions "Light and Darkness Ritual"
31. Selected Mind Shuffle (Deck)
32. Activate Artmage Vandalism -Assault- (S2): Make 1 face-up monster you control able to be treated as an "Artmage" monster if used as Fusion Material
33. Selected Artmage Graflare (M5)
34. Activate Mind Shuffle (S3): activate this card
35. Yes
36. Selected Skull Archfiend of Chaos (Deck)
37. Selected Skull Archfiend of Chaos (hand)
38. Yes
39. Selected Light and Darkness Ritual (Deck)
40. Selected Magician of Dark Chaos - Black Chaos (Deck)
41. Activate Light and Darkness Ritual (GY): Add both this card and 1 card that mentions "Light and Darkness Ritual" from your GY to your hand
42. Selected Skull Archfiend of Chaos (GY)
43. Activate Light and Darkness Ritual (hand): Ritual Summon 1 "Magician of Dark Chaos - Black Chaos" or "Black Luster Soldier - Soldier of Light and Darkness" from your hand
44. Selected Magician of Dark Chaos - Black Chaos (hand)
45. Selected Griffoh (GY) value 8 or 1
46. Yes
47. Selected Small World (GY)
48. Activate Skull Archfiend of Chaos (hand): Special Summon this card
49. select Griffoh (banishment)
50. select Light and Darkness Ritual (GY)
51. select Nervedo the Shadebeast Power Patron (GY)
52. Default order
53. Link Summon Medicurius the Power Patron of Illusions (Extra Deck)
54. select Artifact Dagda (EMZ-L)
55. select Skull Archfiend of Chaos (M2)
56. Finish selection

End board:  LP 8000 | Hand 2 | Deck 31 | Extra 159 | GY 4 | Banished 5   Monsters: M1: Artmage Non-Finito Lv7 2400/1500 ATK || M3: Magician of Dark Chaos - Black Chaos Lv8 2800/2600 ATK || M4: Nerva the Power Patron of Creation Lv10 3300/3300 ATK || M5: Artmage Graflare Lv5 2100/1500 ATK || EMZ-R: Medicurius the Power Patron of Illusions L3↙↓↘ 3000    Spell/Trap: S1: Artmage Impasto -Recapture- (Set) || S2: Artmage Vandalism -Assault- || S3: Mind Shuffle   GY: Medius the Pure, Dark Magical Circle, Skull Archfiend of Chaos, Artifact Dagda   Banished: Theorealize Medius (face-down), Fiendsmith Engraver (face-down), Fiendsmith's Tract (face-down), Medius the Pure (face-down), Fiendsmith Engraver (face-dow

## Order 2: best 9.5 (, worst 9.5) — from tries Activate Griffoh → new ending
Others: tries Activate Griffoh 8.9 · tries Activate Mind Shuffle 8.6 · tries Activate Mind Shuffle 8.6 · opening lanes 8.35 · search 8.2 · tries Activate Skull Archfiend of Chaos 8.05 · tries Activate Griffoh → new early order 7.95 · tries Normal Summon Griffoh 7.25 · tries Activate Griffoh → new ending 6.85 · tries Activate Griffoh → new ending → new early order 6.5 · tries Activate Nervedo the Shadebeast Power Patron 5.7

1. Activate Small World (hand): activate this card
2. Selected Artmage Graflare (hand)
3. Selected Fiendsmith Engraver (Deck)
4. Selected Griffoh (Deck)
5. Set Spell/Trap Dark Magical Circle
6. Activate Griffoh (hand): Activate 1 of these effects
7. Set 1 card that mentions "Light and Darkness Ritual"
8. Selected Mind Shuffle (Deck)
9. Activate Mind Shuffle (S2): activate this card
10. No
11. Activate Mind Shuffle (S2): Add 1 appropriate monster to your hand
12. Selected Skull Archfiend of Chaos (Deck)
13. Selected Skull Archfiend of Chaos (hand)
14. Yes
15. Selected Light and Darkness Ritual (Deck)
16. Selected Magician of Dark Chaos - Black Chaos (Deck)
17. Activate Light and Darkness Ritual (GY): Add both this card and 1 card that mentions "Light and Darkness Ritual" from your GY to your hand
18. Selected Skull Archfiend of Chaos (GY)
19. Activate Light and Darkness Ritual (hand): Ritual Summon 1 "Magician of Dark Chaos - Black Chaos" or "Black Luster Soldier - Soldier of Light and Darkness" from your hand
20. Selected Magician of Dark Chaos - Black Chaos (hand)
21. Selected Griffoh (GY) value 8 or 1
22. Yes
23. Selected Light and Darkness Ritual (GY)
24. Special Summon (procedure) Dark Magician of Destruction (Extra Deck)
25. Selected Magician of Dark Chaos - Black Chaos (M1)
26. Yes
27. Selected Apprentice Illusion Magician (Deck)
28. Special Summon (procedure) Apprentice Illusion Magician (hand)
29. select Skull Archfiend of Chaos (hand)
30. Link Summon Beat Cop from the Underworld (Extra Deck)
31. select Dark Magician of Destruction (EMZ-R)
32. select Apprentice Illusion Magician (M3)
33. Activate Skull Archfiend of Chaos (GY): Special Summon this card
34. select Apprentice Illusion Magician (GY)
35. select Dark Magician of Destruction (GY)
36. select Magician of Dark Chaos - Black Chaos (banishment)
37. Default order
38. Link Summon Medicurius the Power Patron of Illusions (Extra Deck)
39. select Skull Archfiend of Chaos (M4)
40. select Beat Cop from the Underworld (EMZ-L)
41. Normal Summon Medius the Pure (hand)
42. Yes
43. Selected Nervedo the Shadebeast Power Patron (Deck)
44. Special Summon it
45. Activate Nervedo the Shadebeast Power Patron (M3): Special Summon 1 "Nerva the Power Patron of Creation" from your Extra Deck
46. Selected Nerva the Power Patron of Creation (Extra Deck)
47. Yes
48. Selected Artmage Finmel (Deck)
49. Special Summon (procedure) Artmage Non-Finito (Extra Deck)
50. Selected Light and Darkness Ritual (hand)
51. Selected Artmage Finmel (M4)
52. Yes
53. Selected Artmage Impasto -Recapture- (Deck)

End board:  LP 8000 | Hand 1 | Deck 31 | Extra 159 | GY 5 | Banished 6   Monsters: M1: Medius the Pure Lv4 1800/1800 ATK || M2: Nerva the Power Patron of Creation Lv10 3300/3300 ATK || M3: Artmage Non-Finito Lv7 2400/1500 ATK || EMZ-L: Medicurius the Power Patron of Illusions L3↙↓↘ 3000    Spell/Trap: S1: Dark Magical Circle (Set) || S2: Mind Shuffle || S3: Artmage Impasto -Recapture- (Set)   GY: Small World, Skull Archfiend of Chaos, Beat Cop from the Underworld, Light and Darkness Ritual, Artmage Finmel   Banished: Artmage Graflare (face-down), Fiendsmith Engraver (face-down), Griffoh, Theorealize Medius (face-down), Vidolium the Unstable Power Patron of Unity (face-down), Ars Magna - "Citrinitas" (f

## Order 3: best 9.85 (, worst 9.85) — from tries Activate Junoldo the Shadespirit Power Patron
Others: tries Activate Junoldo the Shadespirit Power Patron → new early order 9.85 · tries Activate Theorealize Medius 9.8 · search 9.1 · tries Activate Junoldo the Shadespirit Power Patron → new ending 8.5 · tries Activate Junoldo the Shadespirit Power Patron → new ending 8.45 · tries Activate Dark Magical Circle 8.1 · opening lanes 8.1 · tries Link Summon Purification Power Patron 6.95 · tries Activate Vidolium the Unstable Power Patron of Unity 6.55 · tries Activate Vidolium the Unstable Power Patron of Unity 6.05

1. Activate Small World (hand): activate this card
2. Selected Artmage Graflare (hand)
3. Selected Lacrima the Crimson Tears (Deck)
4. Selected Junoldo the Shadespirit Power Patron (Deck)
5. Normal Summon Medius the Pure (hand)
6. Yes
7. Selected Theorealize Medius (Deck)
8. Add the card(s) to your hand
9. Activate Junoldo the Shadespirit Power Patron (hand): Activate it as a Pendulum Spell
10. Activate Theorealize Medius (hand): If a "Power Patron" card is on the field: You can Special Summon this card from your hand, then you can add 1 "Theorealize" Spell/Trap from your Deck to your hand
11. Yes
12. Selected Theorealize Liberation (Deck)
13. Yes
14. Activate Theorealize Liberation (hand): Add to your hand, or Special Summon, 1 monster from your Deck with 300 ATK/200 DEF
15. Selected Griffoh (Deck)
16. Add the card(s) to your hand
17. Selected Nervedo the Shadebeast Power Patron (hand)
18. Yes
19. Selected Nervedo the Shadebeast Power Patron (GY)
20. Special Summon (procedure) Artmage Non-Finito (Extra Deck)
21. Selected Dark Magical Circle (hand)
22. Selected Nervedo the Shadebeast Power Patron (hand)
23. Yes
24. Selected Artmage Impasto -Recapture- (Deck)
25. Link Summon I:P Masquerena (Extra Deck)
26. select Artmage Non-Finito (M1)
27. select Medius the Pure (M3)
28. Activate Theorealize Liberation (GY): Treat 1 monster you control as a Tuner this turn
29. Selected I:P Masquerena (EMZ-L)
30. Activate Griffoh (hand): Activate 1 of these effects
31. Set 1 card that mentions "Light and Darkness Ritual"
32. Selected Mind Shuffle (Deck)
33. Activate Mind Shuffle (S2): activate this card
34. No
35. Activate Mind Shuffle (S2): Add 1 appropriate monster to your hand
36. Selected Skull Archfiend of Chaos (Deck)
37. Selected Skull Archfiend of Chaos (hand)
38. Yes
39. Selected Light and Darkness Ritual (Deck)
40. Selected Magician of Dark Chaos - Black Chaos (Deck)
41. Activate Light and Darkness Ritual (GY): Add both this card and 1 card that mentions "Light and Darkness Ritual" from your GY to your hand
42. Selected Skull Archfiend of Chaos (GY)
43. Activate Light and Darkness Ritual (hand): Ritual Summon 1 "Magician of Dark Chaos - Black Chaos" or "Black Luster Soldier - Soldier of Light and Darkness" from your hand
44. Selected Magician of Dark Chaos - Black Chaos (hand)
45. Selected Griffoh (GY) value 8 or 1
46. Yes
47. Special Summon 1 "Diactorus" monster
48. Activate Magician of Dark Chaos - Black Chaos (M5): Add 1 Spell from your GY to your hand
49. Selected Small World (GY)
50. Selected Artmage Diactorus (Extra Deck)

End board:  LP 8000 | Hand 4 | Deck 30 | Extra 160 | GY 5 | Banished 5   Monsters: M2: Artmage Diactorus Lv8 2800/2500 ATK || M5: Magician of Dark Chaos - Black Chaos Lv8 2800/2600 ATK || EMZ-L: I:P Masquerena L2↙↘ 800    Spell/Trap: S1: Artmage Impasto -Recapture- (Set) || S2: Mind Shuffle   GY: Dark Magical Circle, Nervedo the Shadebeast Power Patron, Artmage Non-Finito, Medius the Pure, Light and Darkness Ritual   Banished: Artmage Graflare (face-down), Lacrima the Crimson Tears (face-down), Theorealize Liberation, Griffoh, Theorealize Medius   Hand: Infinite Impermanence, Small World, Skull Archfiend of Chaos, Ash Blossom & Joyous Spring   Extra Deck: 160 cards (view --ed to list)

## Order 4: best 9.65 (, worst 9.65) — from search
Others: search → new ending 9.1 · search → new early order 9.1 · tries Link Summon S 8.85 · tries Link Summon I 8.6 · opening lanes 8.35 · search → new early order 8.25 · search → new ending 8.25 · tries Link Summon Pitknight Earlie 8.05 · tries Link Summon Crossrose Dragon 7.1 · tries Synchro Summon Chaos Angel 5.7 · tries Link Summon Abyss Actor - Super Producer 4.5

1. Activate Small World (hand): activate this card
2. Selected Artmage Graflare (hand)
3. Selected Lacrima the Crimson Tears (Deck)
4. Selected Griffoh (Deck)
5. Activate Griffoh (hand): Activate 1 of these effects
6. Set 1 card that mentions "Light and Darkness Ritual"
7. Selected Mind Shuffle (Deck)
8. Activate Mind Shuffle (S1): activate this card
9. No
10. Activate Mind Shuffle (S1): Add 1 appropriate monster to your hand
11. Selected Skull Archfiend of Chaos (Deck)
12. Selected Skull Archfiend of Chaos (hand)
13. Yes
14. Selected Light and Darkness Ritual (Deck)
15. Selected Magician of Dark Chaos - Black Chaos (Deck)
16. Activate Light and Darkness Ritual (GY): Add both this card and 1 card that mentions "Light and Darkness Ritual" from your GY to your hand
17. Selected Skull Archfiend of Chaos (GY)
18. Activate Light and Darkness Ritual (hand): Ritual Summon 1 "Magician of Dark Chaos - Black Chaos" or "Black Luster Soldier - Soldier of Light and Darkness" from your hand
19. Selected Magician of Dark Chaos - Black Chaos (hand)
20. Selected Griffoh (GY) value 8 or 1
21. Yes
22. Selected Light and Darkness Ritual (GY)
23. Special Summon (procedure) Dark Magician of Destruction (Extra Deck)
24. Selected Magician of Dark Chaos - Black Chaos (M1)
25. Yes
26. Selected Apprentice Illusion Magician (Deck)
27. Activate Skull Archfiend of Chaos (hand): Special Summon this card
28. select Small World (GY)
29. select Magician of Dark Chaos - Black Chaos (banishment)
30. select Griffoh (banishment)
31. Default order
32. Link Summon Artifact Dagda (Extra Deck)
33. select Skull Archfiend of Chaos (M1)
34. select Dark Magician of Destruction (M4)
35. Normal Summon Medius the Pure (hand)
36. No
37. Link Summon Medicurius the Power Patron of Illusions (Extra Deck)
38. select Medius the Pure (M1)
39. select Artifact Dagda (EMZ-L)
40. Activate Medius the Pure (GY): Shuffle 1 monster from your hand or face-up field into the Deck, and if you do, Special Summon this card
41. Selected Apprentice Illusion Magician (hand)
42. Yes
43. Selected Nervedo the Shadebeast Power Patron (Deck)
44. Special Summon it
45. Special Summon (procedure) Artmage Non-Finito (Extra Deck)
46. Selected Light and Darkness Ritual (hand)
47. Selected Nervedo the Shadebeast Power Patron (M4)
48. Yes
49. Activate Artmage Non-Finito (M1): Set 1 "Artmage" Spell/Trap from your Deck
50. Selected Artmage Impasto -Recapture- (Deck)
51. Selected Artmage Finmel (Deck)

End board:  LP 8000 | Hand 2 | Deck 36 | Extra 159 | GY 4 | Banished 2   Monsters: M1: Artmage Non-Finito Lv7 2400/1500 ATK || M2: Artmage Finmel Lv7 2400/1500 ATK || M3: Medius the Pure Lv4 1800/1800 ATK || EMZ-L: Medicurius the Power Patron of Illusions L3↙↓↘ 3000    Spell/Trap: S1: Mind Shuffle || S2: Artmage Impasto -Recapture- (Set)   GY: Skull Archfiend of Chaos, Dark Magician of Destruction, Artifact Dagda, Light and Darkness Ritual   Banished: Artmage Graflare (face-down), Lacrima the Crimson Tears (face-down)   Hand: Infinite Impermanence, Dark Magical Circle   Extra Deck: 159 cards (view --ed to list)

