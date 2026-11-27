# Evolved lines — Ars Magna - "Citrinitas", Ash Blossom & Joyous Spring, Ash Blossom & Joyous Spring, Droll & Lock Bird, Ghost Ogre & Snow Rabbit (ed-alllinks)
2026-11-27T00:00:40.418Z

8 deck orders (different face-down banishes / draws), 3 opponent hands x o_ss_panama + o_elfnote + o_despia + o_angelechy per line, 20 min searches, 4 mutation rounds.
Fitness = end-board interruptions (the lab scorer, src/disrupt.mjs: wipe 2, negate 1-1.5, banish/protection less; hand traps kept count 1 each). The winner of each order is also played into the opponent decks: margin after their turn shown beside it.

**Margin after their turn (winners): average null** (worst 99)

**Best line per deck order: average 8.19** (worst order 7.65). Winner came from: search 2, tries Link Summon Powercode Talker 1, tries Link Summon Crossrose Dragon → new early order 1

## Weak points found automatically
Cards whose face-down banish (by your own costs) hurt the best line most (average best line without vs with that card banished):

| card | orders where it was banished | drop |
|---|---|---|
| Ars Magna - "Citrinitas" | 2/8 | 1.08 |
| Vidolium the Unstable Power Patron of Unity | 2/8 | -1.08 |

List changes proposed for the list test (data/proposals-ed-alllinks.json):
- +1 Ars Magna - "Citrinitas", −1 Plundered Power Patron Plane - Vidolia — Ars Magna - "Citrinitas": best line 1.08 worse when a cost banished it (2 of 8 orders) — Ars Magna - "Citrinitas"
- +1 Ars Magna - "Citrinitas" — Ars Magna - "Citrinitas": best line 1.08 worse when a cost banished it (2 of 8 orders) — Ars Magna - "Citrinitas" (add only: deck grows, up to 60)

Effects the search had not used, tried on purpose (best result so far):
- Link Summon S: 7.65
- Link Summon Crossrose Dragon: 7.65
- Link Summon Artifact Dagda: 7.65
- Link Summon Barricadeborg Blocker: 7.65
- Link Summon Geonator Transverser: 7.65
- Link Summon Dharc the Dark Charmer, Gloomy: 7.65
- Link Summon Powercode Talker: 7.65
- Link Summon Purification Power Patron: 7.65

## Order 1: best 7.65 (, worst 7.65) — from search
Others: tries Link Summon S 7.65 · search → new ending 7.65 · search → new ending 7.65 · tries Activate Nervedo the Shadebeast Power Patron 6.45 · search → new early order 6.45 · opening lanes 6.29 · tries Activate Ars Magna of Infinity and Finity 4.55 · tries Activate Ars Magna of Purification and Corruption 4.55 · tries Link Summon Artemis, the Magistus Moon Maiden 4.55 · search → new early order 3.55 · tries Normal Summon Theorealize Medius 3.4

1. Set Spell/Trap Ars Magna - "Citrinitas"
2. Activate Ars Magna - "Citrinitas" (S1): activate this card
3. Activate Ars Magna - "Citrinitas" (S1): Add 1 "Medius" or "Ars Magna" monster from your Deck to your hand
4. Selected Medius the Pure (Deck)
5. Normal Summon Medius the Pure (hand)
6. Yes
7. Selected Nervedo the Shadebeast Power Patron (Deck)
8. Special Summon it
9. Link Summon Protector Whelp of the Destruction Swordsman (Extra Deck)
10. select Nervedo the Shadebeast Power Patron (M3)
11. select Medius the Pure (M1)
12. Yes
13. Selected Junoldo the Shadespirit Power Patron (Deck)
14. Link Summon Odd-Eyes Override Dragon (Extra Deck)
15. select Junoldo the Shadespirit Power Patron (M3)
16. select Protector Whelp of the Destruction Swordsman (EMZ-L)
17. Yes
18. Selected Nervedo the Shadebeast Power Patron (Extra Deck)
19. Activate Odd-Eyes Override Dragon (EMZ-L): Destroy 1 other card you control and draw 1 card
20. Selected Ars Magna - "Citrinitas" (S1)
21. Special Summon (procedure) Artmage Non-Finito (Extra Deck)
22. Selected Artmage Vandalism -Assault- (hand)
23. Selected Nervedo the Shadebeast Power Patron (hand)
24. Yes
25. Selected Artmage Impasto -Recapture- (Deck)

End board:  LP 8000 | Hand 4 | Deck 39 | Extra 160 | GY 5 | Banished 0   Monsters: M3: Artmage Non-Finito Lv7 2400/1500 ATK || EMZ-L: Odd-Eyes Override Dragon L3↙↓↘ 2500    Spell/Trap: S1: Artmage Impasto -Recapture- (Set)   GY: Medius the Pure, Protector Whelp of the Destruction Swordsman, Ars Magna - "Citrinitas", Artmage Vandalism -Assault-, Nervedo the Shadebeast Power Patron   Hand: Droll & Lock Bird, Ash Blossom & Joyous Spring, Ghost Ogre & Snow Rabbit, Ash Blossom & Joyous Spring   Extra Deck: 160 cards (view --ed to list)

## Order 2: best 7.65 (, worst 7.65) — from tries Link Summon Powercode Talker
Others: tries Link Summon Powercode Talker → new ending 7.65 · tries Link Summon Powercode Talker → new ending 7.65 · search 6.45 · tries Link Summon Powercode Talker → new early order 6.45 · tries Special Summon (procedure) Nerva the Power Patron of Creation 6.29 · opening lanes 6.29 · tries Link Summon Powercode Talker → new early order 6.29 · tries Link Summon Medicurius the Power Patron of Illusions 6.2 · tries Link Summon Cyberse Enchanter 5.55 · tries Link Summon Decode Talker 5.55 · tries Link Summon W 4.55

1. Set Spell/Trap Ars Magna - "Citrinitas"
2. Activate Ars Magna - "Citrinitas" (S1): activate this card
3. Activate Ars Magna - "Citrinitas" (S1): Add 1 "Medius" or "Ars Magna" monster from your Deck to your hand
4. Selected Medius the Pure (Deck)
5. Normal Summon Medius the Pure (hand)
6. Yes
7. Selected Nervedo the Shadebeast Power Patron (Deck)
8. Special Summon it
9. Link Summon Space Insulator (Extra Deck)
10. select Medius the Pure (M3)
11. select Nervedo the Shadebeast Power Patron (M4)
12. Yes
13. Selected Junoldo the Shadespirit Power Patron (Deck)
14. Link Summon Odd-Eyes Override Dragon (Extra Deck)
15. select Space Insulator (EMZ-R)
16. select Junoldo the Shadespirit Power Patron (M5)
17. Yes
18. Selected Nervedo the Shadebeast Power Patron (Extra Deck)
19. Activate Odd-Eyes Override Dragon (EMZ-R): Destroy 1 other card you control and draw 1 card
20. Selected Ars Magna - "Citrinitas" (S1)
21. Special Summon (procedure) Artmage Non-Finito (Extra Deck)
22. Selected Fiendsmith's Tract (hand)
23. Selected Nervedo the Shadebeast Power Patron (hand)
24. Yes
25. Selected Artmage Impasto -Recapture- (Deck)

End board:  LP 8000 | Hand 4 | Deck 39 | Extra 160 | GY 5 | Banished 0   Monsters: M1: Artmage Non-Finito Lv7 2400/1500 ATK || EMZ-R: Odd-Eyes Override Dragon L3↙↓↘ 2500    Spell/Trap: S1: Artmage Impasto -Recapture- (Set)   GY: Medius the Pure, Space Insulator, Ars Magna - "Citrinitas", Fiendsmith's Tract, Nervedo the Shadebeast Power Patron   Hand: Droll & Lock Bird, Ash Blossom & Joyous Spring, Ghost Ogre & Snow Rabbit, Ash Blossom & Joyous Spring   Extra Deck: 160 cards (view --ed to list)

## Order 3: best 7.65 (, worst 7.65) — from search
Others: tries Link Summon Dharc the Dark Charmer, Gloomy 7.65 · tries Link Summon I 7.65 · tries Link Summon Barricadeborg Blocker 7.65 · tries Link Summon Purification Power Patron 7.65 · tries Link Summon Geonator Transverser 7.65 · search → new ending 7.65 · opening lanes 6.45 · search → new early order 6.45 · search → new ending 5.7 · tries Link Summon Protector of The Agents - Moon 5.25 · search → new early order 3.55

1. Activate Ars Magna - "Citrinitas" (hand): activate this card
2. Activate Ars Magna - "Citrinitas" (S1): Add 1 "Medius" or "Ars Magna" monster from your Deck to your hand
3. Selected Medius the Pure (Deck)
4. Normal Summon Medius the Pure (hand)
5. Yes
6. Selected Nervedo the Shadebeast Power Patron (Deck)
7. Special Summon it
8. Link Summon Knightmare Phoenix (Extra Deck)
9. select Medius the Pure (M3)
10. select Nervedo the Shadebeast Power Patron (M1)
11. Yes
12. Selected Junoldo the Shadespirit Power Patron (Deck)
13. Link Summon Odd-Eyes Override Dragon (Extra Deck)
14. select Junoldo the Shadespirit Power Patron (M4)
15. select Knightmare Phoenix (EMZ-R)
16. Yes
17. Selected Nervedo the Shadebeast Power Patron (Extra Deck)
18. Activate Odd-Eyes Override Dragon (EMZ-R): Destroy 1 other card you control and draw 1 card
19. Selected Ars Magna - "Citrinitas" (S1)
20. Activate Vidolium the Unstable Power Patron of Unity (hand): Activate it as a Pendulum Spell
21. Activate Vidolium the Unstable Power Patron of Unity (S1): Activate 1 of these effects
22. Your Level 12 "Power Patron" monsters gain 5000 ATK
23. Yes
24. Selected Prohibited Power Patron Portal - Terminus (Deck)
25. Special Summon (procedure) Artmage Non-Finito (Extra Deck)
26. Selected Prohibited Power Patron Portal - Terminus (hand)
27. Selected Nervedo the Shadebeast Power Patron (hand)
28. Yes
29. Selected Artmage Impasto -Recapture- (Deck)

End board:  LP 8000 | Hand 4 | Deck 38 | Extra 161 | GY 5 | Banished 0   Monsters: M4: Artmage Non-Finito Lv7 2400/1500 ATK || EMZ-R: Odd-Eyes Override Dragon L3↙↓↘ 2500    Spell/Trap: S1: Artmage Impasto -Recapture- (Set)   GY: Medius the Pure, Knightmare Phoenix, Ars Magna - "Citrinitas", Prohibited Power Patron Portal - Terminus, Nervedo the Shadebeast Power Patron   Hand: Ash Blossom & Joyous Spring, Droll & Lock Bird, Ghost Ogre & Snow Rabbit, Ash Blossom & Joyous Spring   Extra Deck: 161 cards (view --ed to list)

## Order 4: best 9.8 (, worst 9.8) — from tries Link Summon Crossrose Dragon → new early order
Others: tries Link Summon Crossrose Dragon → new early order → new ending 9.8 · tries Link Summon Crossrose Dragon 7.65 · tries Link Summon Artifact Dagda 7.65 · tries Link Summon Crossrose Dragon → new ending 7.65 · tries Link Summon Crossrose Dragon → new early order → new early order 7.4 · search 6.45 · opening lanes 6.29 · tries Link Summon Pitknight Earlie 6.29 · tries Link Summon Knightmare Phoenix 5.55 · tries Link Summon Keel, Shipwright Fur Hire 4.55 · tries Link Summon Lyna the Light Charmer, Lustrous 4.55

1. Activate Ars Magna - "Citrinitas" (hand): activate this card
2. Activate Ars Magna - "Citrinitas" (S1): Add 1 "Medius" or "Ars Magna" monster from your Deck to your hand
3. Selected Medius the Pure (Deck)
4. Normal Summon Medius the Pure (hand)
5. Yes
6. Selected Nervedo the Shadebeast Power Patron (Deck)
7. Special Summon it
8. Activate Nervedo the Shadebeast Power Patron (M4): Special Summon 1 "Nerva the Power Patron of Creation" from your Extra Deck
9. Selected Nerva the Power Patron of Creation (Extra Deck)
10. Yes
11. Selected Junoldo the Shadespirit Power Patron (Deck)
12. Link Summon Odd-Eyes Override Dragon (Extra Deck)
13. select Nerva the Power Patron of Creation (EMZ-L)
14. select Junoldo the Shadespirit Power Patron (M4)
15. select Medius the Pure (M3)
16. Yes
17. Selected Nervedo the Shadebeast Power Patron (Extra Deck)
18. Activate Odd-Eyes Override Dragon (EMZ-R): Destroy 1 other card you control and draw 1 card
19. Selected Ars Magna - "Citrinitas" (S1)
20. Activate Black Chaos (hand): Special Summon ("Black Chaos")
21. Selected Mind Shuffle (Deck)
22. Activate Mind Shuffle (S1): Add 1 appropriate monster to your hand
23. Selected Skull Archfiend of Chaos (Deck)
24. Selected Skull Archfiend of Chaos (hand)
25. Yes
26. Selected Light and Darkness Ritual (Deck)
27. Selected Magician of Dark Chaos - Black Chaos (Deck)
28. Activate Light and Darkness Ritual (GY): Add both this card and 1 card that mentions "Light and Darkness Ritual" from your GY to your hand
29. Selected Skull Archfiend of Chaos (GY)
30. Activate Light and Darkness Ritual (hand): Ritual Summon 1 "Magician of Dark Chaos - Black Chaos" or "Black Luster Soldier - Soldier of Light and Darkness" from your hand
31. Selected Magician of Dark Chaos - Black Chaos (hand)
32. Selected Black Chaos (GY) value 8
33. Yes
34. Selected Light and Darkness Ritual (GY)
35. Special Summon (procedure) Artmage Non-Finito (Extra Deck)
36. Selected Light and Darkness Ritual (hand)
37. Selected Nervedo the Shadebeast Power Patron (hand)
38. Yes
39. Selected Artmage Impasto -Recapture- (Deck)

End board:  LP 8000 | Hand 5 | Deck 32 | Extra 160 | GY 5 | Banished 4   Monsters: M1: Artmage Non-Finito Lv7 2400/1500 ATK || M3: Magician of Dark Chaos - Black Chaos Lv8 2800/2600 ATK || EMZ-R: Odd-Eyes Override Dragon L3↙↓↘ 2500    Spell/Trap: S1: Mind Shuffle || S2: Artmage Impasto -Recapture- (Set)   GY: Medius the Pure, Nerva the Power Patron of Creation, Ars Magna - "Citrinitas", Light and Darkness Ritual, Nervedo the Shadebeast Power Patron   Banished: Artmage Finmel (face-down), Dark Magical Circle (face-down), Vidolium the Unstable Power Patron of Unity (face-down), Black Chaos   Hand: Ash Blossom & Joyous Spring, Droll & Lock Bird, Ash Blossom & Joyous Spring, Ghost Ogre & Snow Rabbit, Skull

