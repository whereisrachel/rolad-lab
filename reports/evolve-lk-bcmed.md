# Evolved lines — Black Chaos, Medius the Pure, Ash Blossom & Joyous Spring, Droll & Lock Bird, Ghost Ogre & Snow Rabbit (ed-alllinks)
2026-11-27T00:00:38.030Z

8 deck orders (different face-down banishes / draws), 3 opponent hands x o_ss_panama + o_elfnote + o_despia + o_angelechy per line, 20 min searches, 4 mutation rounds.
Fitness = end-board interruptions (the lab scorer, src/disrupt.mjs: wipe 2, negate 1-1.5, banish/protection less; hand traps kept count 1 each). The winner of each order is also played into the opponent decks: margin after their turn shown beside it.

**Margin after their turn (winners): average null** (worst 99)

**Best line per deck order: average 10.79** (worst order 9.9). Winner came from: search → new ending 2, tries Activate Junoldo the Shadespirit Power Patron 1, tries Link Summon Space Insulator → new ending 1

## Weak points found automatically
Cards whose face-down banish (by your own costs) hurt the best line most (average best line without vs with that card banished):

| card | orders where it was banished | drop |
|---|---|---|
| Theorealize Past Lull | 2/8 | 0.87 |

List changes proposed for the list test (data/proposals-ed-alllinks.json):
- +1 Theorealize Past Lull, −1 Plundered Power Patron Plane - Vidolia — Theorealize Past Lull: best line 0.87 worse when a cost banished it (2 of 8 orders) — Black Chaos
- +1 Theorealize Past Lull — Theorealize Past Lull: best line 0.87 worse when a cost banished it (2 of 8 orders) — Black Chaos (add only: deck grows, up to 60)

Effects the search had not used, tried on purpose (best result so far):
- Link Summon Space Insulator: 10.75
- Link Summon Pitknight Filly: 9.95
- Activate Junoldo the Shadespirit Power Patron: 9.9
- Link Summon Pitknight Earlie: 9.85
- Activate Nervedo the Shadebeast Power Patron: 9.75
- Link Summon I: 9.7
- Link Summon S: 9.65
- Link Summon Crossrose Dragon: 9.65

## Order 1: best 10.8 (, worst 10.8) — from search → new ending
Others: search 10.75 · opening lanes 9.85 · tries Link Summon I 9.7 · tries Activate Medius the Pure 9.65 · tries Link Summon Keel, Shipwright Fur Hire 9.65 · tries Link Summon Dharc the Dark Charmer, Gloomy 9.65 · tries Link Summon Artifact Dagda 9.65 · search → new ending → new early order 9.65 · search → new ending → new early order 8.8 · tries Link Summon Artemis, the Magistus Moon Maiden 8 · search → new ending → new ending 7.5

1. Activate Black Chaos (hand): Special Summon ("Black Chaos")
2. Selected Mind Shuffle (Deck)
3. Normal Summon Medius the Pure (hand)
4. Yes
5. Selected Nervedo the Shadebeast Power Patron (Deck)
6. Special Summon it
7. Link Summon Pitknight Earlie (Extra Deck)
8. select Nervedo the Shadebeast Power Patron (M1)
9. select Medius the Pure (M3)
10. Yes
11. Selected Junoldo the Shadespirit Power Patron (Deck)
12. Link Summon Odd-Eyes Override Dragon (Extra Deck)
13. select Junoldo the Shadespirit Power Patron (M4)
14. select Pitknight Earlie (EMZ-R)
15. Yes
16. Selected Nervedo the Shadebeast Power Patron (Extra Deck)
17. Activate Odd-Eyes Override Dragon (EMZ-R): Destroy 1 other card you control and draw 1 card
18. Selected Mind Shuffle (S1)
19. Activate Mind Shuffle (S1): Add 1 appropriate monster to your hand
20. Selected Skull Archfiend of Chaos (Deck)
21. Selected Skull Archfiend of Chaos (hand)
22. Yes
23. Selected Light and Darkness Ritual (Deck)
24. Selected Magician of Dark Chaos - Black Chaos (Deck)
25. Activate Light and Darkness Ritual (GY): Add both this card and 1 card that mentions "Light and Darkness Ritual" from your GY to your hand
26. Selected Black Chaos (GY)
27. Activate Black Chaos (hand): Special Summon ("Black Chaos")
28. Selected Mind Shuffle (GY)
29. Activate Light and Darkness Ritual (hand): Ritual Summon 1 "Magician of Dark Chaos - Black Chaos" or "Black Luster Soldier - Soldier of Light and Darkness" from your hand
30. Selected Magician of Dark Chaos - Black Chaos (hand)
31. Selected Black Chaos (GY) value 8
32. Yes
33. Selected Light and Darkness Ritual (GY)
34. Special Summon (procedure) Artmage Non-Finito (Extra Deck)
35. Selected Light and Darkness Ritual (hand)
36. Selected Nervedo the Shadebeast Power Patron (hand)
37. Yes
38. Selected Artmage Impasto -Recapture- (Deck)
39. Activate Skull Archfiend of Chaos (GY): Special Summon this card
40. select Black Chaos (banishment)
41. select Nervedo the Shadebeast Power Patron (GY)
42. select Light and Darkness Ritual (GY)
43. Default order
44. Link Summon Firewall Dragon (Extra Deck)
45. select Skull Archfiend of Chaos (M2)
46. select Odd-Eyes Override Dragon (EMZ-R)
47. Finish selection

End board:  LP 8000 | Hand 4 | Deck 39 | Extra 159 | GY 4 | Banished 0   Monsters: M1: Magician of Dark Chaos - Black Chaos Lv8 2800/2600 ATK || M3: Artmage Non-Finito Lv7 2400/1500 ATK || EMZ-L: Firewall Dragon L4↑←→↓ 2500    Spell/Trap: S1: Mind Shuffle || S2: Artmage Impasto -Recapture- (Set)   GY: Medius the Pure, Pitknight Earlie, Skull Archfiend of Chaos, Odd-Eyes Override Dragon   Hand: Infinite Impermanence, Ghost Ogre & Snow Rabbit, Ash Blossom & Joyous Spring, Droll & Lock Bird   Extra Deck: 159 cards (view --ed to list)

## Order 2: best 11.5 (, worst 11.5) — from search → new ending
Others: search 9.85 · opening lanes 9.85 · search → new early order 9.85 · tries Link Summon Geonator Transverser 9.65 · tries Link Summon Barricadeborg Blocker 9.65 · tries Link Summon Code Talker 9.65 · tries Link Summon Knightmare Cerberus 9.65 · tries Link Summon Knightmare Phoenix 9.65 · tries Link Summon Silhouhatte Rabbit 9.65 · search → new ending 7.2 · search → new ending → new early order 7

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
20. Special Summon (procedure) Apprentice Illusion Magician (hand)
21. select Skull Archfiend of Chaos (hand)
22. Link Summon Geonator Transverser (Extra Deck)
23. select Apprentice Illusion Magician (M3)
24. select Dark Magician of Destruction (EMZ-R)
25. Activate Skull Archfiend of Chaos (GY): Special Summon this card
26. select Magician of Dark Chaos - Black Chaos (banishment)
27. select Dark Magician of Destruction (GY)
28. select Apprentice Illusion Magician (GY)
29. Default order
30. Link Summon Medicurius the Power Patron of Illusions (Extra Deck)
31. select Geonator Transverser (EMZ-R)
32. select Skull Archfiend of Chaos (M1)
33. Normal Summon Medius the Pure (hand)
34. Yes
35. Selected Nervedo the Shadebeast Power Patron (Deck)
36. Special Summon it
37. Special Summon (procedure) Artmage Non-Finito (Extra Deck)
38. Selected Light and Darkness Ritual (hand)
39. Selected Nervedo the Shadebeast Power Patron (M1)
40. Yes
41. Activate Artmage Non-Finito (M1): Set 1 "Artmage" Spell/Trap from your Deck
42. Selected Artmage Impasto -Recapture- (Deck)
43. Selected Artmage Finmel (Deck)

End board:  LP 8000 | Hand 3 | Deck 38 | Extra 160 | GY 3 | Banished 1   Monsters: M1: Artmage Non-Finito Lv7 2400/1500 ATK || M2: Artmage Finmel Lv7 2400/1500 ATK || M3: Medius the Pure Lv4 1800/1800 ATK || EMZ-L: Medicurius the Power Patron of Illusions L3↙↓↘ 3000    Spell/Trap: S1: Mind Shuffle || S2: Artmage Impasto -Recapture- (Set)   GY: Skull Archfiend of Chaos, Geonator Transverser, Light and Darkness Ritual   Banished: Black Chaos   Hand: Ash Blossom & Joyous Spring, Droll & Lock Bird, Ghost Ogre & Snow Rabbit   Extra Deck: 160 cards (view --ed to list)

## Order 3: best 9.9 (, worst 9.9) — from tries Activate Junoldo the Shadespirit Power Patron
Others: tries Activate Junoldo the Shadespirit Power Patron → new ending 9.9 · search 9.85 · opening lanes 9.85 · tries Link Summon Pitknight Earlie 9.85 · tries Activate Nervedo the Shadebeast Power Patron 9.75 · tries Link Summon S 9.65 · tries Link Summon Crossrose Dragon 9.65 · tries Activate Junoldo the Shadespirit Power Patron → new early order 8.65 · tries Activate Junoldo the Shadespirit Power Patron → new early order 8.65 · tries Link Summon Purification Power Patron 7.4

1. Activate Black Chaos (hand): Special Summon ("Black Chaos")
2. Selected Mind Shuffle (Deck)
3. Normal Summon Medius the Pure (hand)
4. Yes
5. Selected Vidolium the Unstable Power Patron of Unity (Deck)
6. Add the card(s) to your hand
7. Activate Vidolium the Unstable Power Patron of Unity (hand): Activate it as a Pendulum Spell
8. Activate Mind Shuffle (S1): Add 1 appropriate monster to your hand
9. Selected Skull Archfiend of Chaos (Deck)
10. Selected Skull Archfiend of Chaos (hand)
11. Yes
12. Selected Light and Darkness Ritual (Deck)
13. Selected Magician of Dark Chaos - Black Chaos (Deck)
14. Activate Light and Darkness Ritual (GY): Add both this card and 1 card that mentions "Light and Darkness Ritual" from your GY to your hand
15. Selected Skull Archfiend of Chaos (GY)
16. Activate Vidolium the Unstable Power Patron of Unity (S5): Activate 1 of these effects
17. Your Level 12 "Power Patron" monsters gain 5000 ATK
18. Yes
19. Selected Junoldo the Shadespirit Power Patron (Deck)
20. Activate Junoldo the Shadespirit Power Patron (hand): Activate it as a Pendulum Spell
21. Set Spell/Trap Light and Darkness Ritual
22. Activate Light and Darkness Ritual (S2): Ritual Summon 1 "Magician of Dark Chaos - Black Chaos" or "Black Luster Soldier - Soldier of Light and Darkness" from your hand
23. Selected Magician of Dark Chaos - Black Chaos (hand)
24. Selected Black Chaos (GY) value 8
25. Yes
26. Selected Light and Darkness Ritual (GY)
27. Link Summon Purification Power Patron (Extra Deck)
28. select Magician of Dark Chaos - Black Chaos (M4)
29. select Medius the Pure (M1)
30. Yes
31. Selected Skull Archfiend of Chaos (hand)
32. Yes
33. Selected Vidolium the Unstable Power Patron of Unity (Extra Deck)
34. Activate Skull Archfiend of Chaos (GY): Special Summon this card
35. select Medius the Pure (GY)
36. select Magician of Dark Chaos - Black Chaos (GY)
37. select Black Chaos (banishment)
38. Default order
39. Link Summon Decode Talker (Extra Deck)
40. select Skull Archfiend of Chaos (M1)
41. select Purification Power Patron (EMZ-R)
42. Special Summon (procedure) Artmage Non-Finito (Extra Deck)
43. Selected Light and Darkness Ritual (hand)
44. Selected Nervedo the Shadebeast Power Patron (hand)
45. Yes
46. Selected Artmage Impasto -Recapture- (Deck)

End board:  LP 8000 | Hand 5 | Deck 38 | Extra 160 | GY 4 | Banished 0   Monsters: M5: Artmage Non-Finito Lv7 2400/1500 ATK || EMZ-R: Decode Talker L3↑↙↘ 2800    Spell/Trap: S1: Mind Shuffle || S2: Artmage Impasto -Recapture- (Set)   GY: Skull Archfiend of Chaos, Purification Power Patron, Light and Darkness Ritual, Nervedo the Shadebeast Power Patron   Hand: Vidolium the Unstable Power Patron of Unity, Ash Blossom & Joyous Spring, Ghost Ogre & Snow Rabbit, Droll & Lock Bird, Infinite Impermanence   Extra Deck: 160 cards (view --ed to list)

## Order 4: best 10.95 (, worst 10.95) — from tries Link Summon Space Insulator → new ending
Others: tries Link Summon Space Insulator → new ending → new ending 10.95 · tries Link Summon Space Insulator 10.75 · tries Link Summon Pitknight Filly 9.95 · search 9.85 · opening lanes 9.85 · tries Link Summon Proxy F Magician 9.65 · tries Link Summon Space Insulator → new ending → new early order 9.65 · tries Link Summon Proxy Dragon 8.8 · tries Link Summon Protector of The Agents - Moon 8.65 · tries Link Summon Haggard Lizardose 8.65 · tries Link Summon Space Insulator → new ending → new early order 8.65

1. Normal Summon Medius the Pure (hand)
2. Yes
3. Selected Nervedo the Shadebeast Power Patron (Deck)
4. Special Summon it
5. Link Summon Space Insulator (Extra Deck)
6. select Medius the Pure (M4)
7. select Nervedo the Shadebeast Power Patron (M5)
8. Yes
9. Selected Junoldo the Shadespirit Power Patron (Deck)
10. Link Summon Odd-Eyes Override Dragon (Extra Deck)
11. select Space Insulator (EMZ-L)
12. select Junoldo the Shadespirit Power Patron (M1)
13. Yes
14. Selected Nervedo the Shadebeast Power Patron (Extra Deck)
15. Activate Black Chaos (hand): Special Summon ("Black Chaos")
16. Selected Mind Shuffle (Deck)
17. Activate Odd-Eyes Override Dragon (EMZ-R): Destroy 1 other card you control and draw 1 card
18. Selected Mind Shuffle (S1)
19. Activate Mind Shuffle (S1): Add 1 appropriate monster to your hand
20. Selected Skull Archfiend of Chaos (Deck)
21. Selected Skull Archfiend of Chaos (hand)
22. Yes
23. Selected Light and Darkness Ritual (Deck)
24. Selected Magician of Dark Chaos - Black Chaos (Deck)
25. Activate Light and Darkness Ritual (GY): Add both this card and 1 card that mentions "Light and Darkness Ritual" from your GY to your hand
26. Selected Mind Shuffle (GY)
27. Set Spell/Trap Mind Shuffle
28. Activate Light and Darkness Ritual (hand): Ritual Summon 1 "Magician of Dark Chaos - Black Chaos" or "Black Luster Soldier - Soldier of Light and Darkness" from your hand
29. Selected Magician of Dark Chaos - Black Chaos (hand)
30. Selected Black Chaos (GY) value 8
31. Yes
32. Selected Light and Darkness Ritual (GY)
33. Special Summon (procedure) Dark Magician of Destruction (Extra Deck)
34. Selected Magician of Dark Chaos - Black Chaos (M4)
35. Yes
36. Selected Apprentice Illusion Magician (Deck)
37. Activate Skull Archfiend of Chaos (GY): Special Summon this card
38. select Magician of Dark Chaos - Black Chaos (banishment)
39. select Space Insulator (GY)
40. select Medius the Pure (GY)
41. Default order
42. Link Summon I:P Masquerena (Extra Deck)
43. select Skull Archfiend of Chaos (M5)
44. select Dark Magician of Destruction (M4)
45. Special Summon (procedure) Artmage Non-Finito (Extra Deck)
46. Selected Light and Darkness Ritual (hand)
47. Selected Nervedo the Shadebeast Power Patron (hand)
48. Yes
49. Selected Artmage Impasto -Recapture- (Deck)

End board:  LP 8000 | Hand 5 | Deck 37 | Extra 159 | GY 4 | Banished 1   Monsters: M4: I:P Masquerena L2↙↘ 800  || M5: Artmage Non-Finito Lv7 2400/1500 ATK || EMZ-R: Odd-Eyes Override Dragon L3↙↓↘ 2500    Spell/Trap: S1: Mind Shuffle (Set) || S2: Artmage Impasto -Recapture- (Set)   GY: Dark Magician of Destruction, Skull Archfiend of Chaos, Light and Darkness Ritual, Nervedo the Shadebeast Power Patron   Banished: Black Chaos   Hand: Ash Blossom & Joyous Spring, Apprentice Illusion Magician, Infinite Impermanence, Droll & Lock Bird, Ghost Ogre & Snow Rabbit   Extra Deck: 159 cards (view --ed to list)

