# Evolved lines — Fiendsmith Engraver, Medius the Pure, Ash Blossom & Joyous Spring, Droll & Lock Bird, Ghost Ogre & Snow Rabbit (ed-alllinks)
2026-11-26T23:33:38.829Z

8 deck orders (different face-down banishes / draws), 3 opponent hands x o_ss_panama + o_elfnote + o_despia + o_angelechy per line, 20 min searches, 4 mutation rounds.
Fitness = end-board interruptions (the lab scorer, src/disrupt.mjs: wipe 2, negate 1-1.5, banish/protection less; hand traps kept count 1 each). The winner of each order is also played into the opponent decks: margin after their turn shown beside it.

**Margin after their turn (winners): average null** (worst 99)

**Best line per deck order: average 8.28** (worst order 7.8). Winner came from: search 1, opening lanes 3

## Weak points found automatically
Cards whose face-down banish (by your own costs) hurt the best line most (average best line without vs with that card banished):

| card | orders where it was banished | drop |
|---|---|---|
| Nervedo the Shadebeast Power Patron | 2/8 | 0.95 |
| Black Luster Soldier - Soldier of Light and Darkness | 2/8 | 0.95 |
| Vidolium the Unstable Power Patron of Unity | 3/8 | 0.63 |
| Artmage Finmel | 2/8 | 0 |
| Ars Magna of Purification and Corruption | 2/8 | 0 |
| Pendulum Treasure | 2/8 | 0 |
| Small World | 2/8 | 0 |
| Medius the Pure | 2/8 | 0 |

List changes proposed for the list test (data/proposals-ed-alllinks.json):
- +1 Black Luster Soldier - Soldier of Light and Darkness, −1 Plundered Power Patron Plane - Vidolia — Black Luster Soldier - Soldier of Light and Darkness: best line 0.95 worse when a cost banished it (2 of 8 orders) — Fiendsmith Engraver
- +1 Vidolium the Unstable Power Patron of Unity, −1 Artmage Vandalism -Assault- — Vidolium the Unstable Power Patron of Unity: best line 0.63 worse when a cost banished it (3 of 8 orders) — Fiendsmith Engraver
- +1 Black Luster Soldier - Soldier of Light and Darkness — Black Luster Soldier - Soldier of Light and Darkness: best line 0.95 worse when a cost banished it (2 of 8 orders) — Fiendsmith Engraver (add only: deck grows, up to 60)
- +1 Vidolium the Unstable Power Patron of Unity — Vidolium the Unstable Power Patron of Unity: best line 0.63 worse when a cost banished it (3 of 8 orders) — Fiendsmith Engraver (add only: deck grows, up to 60)

Effects the search had not used, tried on purpose (best result so far):
- Activate Fiendsmith's Tract: 7.8
- Link Summon Fiendsmith's Requiem: 7.8
- Link Summon Keel, Shipwright Fur Hire: 7.6
- Link Summon Purification Power Patron: 7.5
- Link Summon S: 7.5
- Link Summon Crossrose Dragon: 7.5
- Link Summon I: 7.5
- Link Summon Artifact Dagda: 7.5

## Order 1: best 8.75 (, worst 8.75) — from search
Others: opening lanes 8.75 · search → new ending 8.75 · search → new ending 8.75 · tries Activate Fiendsmith's Tract 7.8 · tries Link Summon Purification Power Patron 7.5 · tries Link Summon S 7.5 · tries Link Summon Crossrose Dragon 7.5 · search → new early order 6.45 · search → new early order 6.4 · tries Normal Summon Lacrima the Crimson Tears 6.38 · tries Activate Junoldo the Shadespirit Power Patron 5.49

1. Activate Fiendsmith Engraver (hand): Add 1 "Fiendsmith" Spell/Trap from your Deck to your hand
2. Selected Fiendsmith's Tract (Deck)
3. Normal Summon Medius the Pure (hand)
4. Yes
5. Selected Nervedo the Shadebeast Power Patron (Deck)
6. Special Summon it
7. Activate Nervedo the Shadebeast Power Patron (M3): Special Summon 1 "Nerva the Power Patron of Creation" from your Extra Deck
8. Selected Nerva the Power Patron of Creation (Extra Deck)
9. Yes
10. Selected Junoldo the Shadespirit Power Patron (Deck)
11. Link Summon Pitknight Earlie (Extra Deck)
12. select Medius the Pure (M1)
13. select Junoldo the Shadespirit Power Patron (M2)
14. Yes
15. Selected Nervedo the Shadebeast Power Patron (Extra Deck)
16. Special Summon (procedure) Artmage Non-Finito (Extra Deck)
17. Selected Fiendsmith's Tract (hand)
18. Selected Nervedo the Shadebeast Power Patron (hand)
19. Yes
20. Selected Artmage Impasto -Recapture- (Deck)

End board:  LP 8000 | Hand 3 | Deck 37 | Extra 160 | GY 4 | Banished 3   Monsters: M3: Nerva the Power Patron of Creation Lv10 3300/3300 ATK || M4: Artmage Non-Finito Lv7 2400/1500 ATK || EMZ-L: Pitknight Earlie L2↗→ 1500    Spell/Trap: S1: Artmage Impasto -Recapture- (Set)   GY: Fiendsmith Engraver, Medius the Pure, Fiendsmith's Tract, Nervedo the Shadebeast Power Patron   Banished: Artmage Finmel (face-down), Ars Magna of Purification and Corruption (face-down), Pendulum Treasure (face-down)   Hand: Ghost Ogre & Snow Rabbit, Droll & Lock Bird, Ash Blossom & Joyous Spring   Extra Deck: 160 cards (view --ed to list)

## Order 2: best 7.8 (, worst 7.8) — from opening lanes
Others: tries Link Summon Fiendsmith's Requiem 7.8 · search 7.5 · tries Activate Medius the Pure 7.5 · tries Activate Nervedo the Shadebeast Power Patron 7.5 · tries Activate Vidolium the Unstable Power Patron of Unity 6.8 · tries Activate Vidolium the Unstable Power Patron of Unity 6.5 · tries Normal Summon Fiendsmith Engraver 5.64

1. Activate Fiendsmith Engraver (hand): Add 1 "Fiendsmith" Spell/Trap from your Deck to your hand
2. Selected Fiendsmith's Tract (Deck)
3. Set Spell/Trap Fiendsmith's Tract
4. Activate Fiendsmith's Tract (S1): Add 1 LIGHT Fiend monster from your Deck to your hand
5. Selected Lacrima the Crimson Tears (Deck)
6. Selected Lacrima the Crimson Tears (hand)
7. Activate Fiendsmith Engraver (GY): Special Summon this card
8. Selected Lacrima the Crimson Tears (GY)
9. Link Summon Fiendsmith's Requiem (Extra Deck)
10. select Fiendsmith Engraver (M1)
11. Activate Fiendsmith's Requiem (EMZ-L): Special Summon 1 "Fiendsmith" monster
12. Selected Lacrima the Crimson Tears (Deck)
13. No
14. Normal Summon Medius the Pure (hand)
15. Yes
16. Selected Nervedo the Shadebeast Power Patron (Deck)
17. Special Summon it
18. Link Summon Pitknight Earlie (Extra Deck)
19. select Lacrima the Crimson Tears (M3)
20. select Medius the Pure (M1)
21. Activate Nervedo the Shadebeast Power Patron (M2): Special Summon 1 "Nerva the Power Patron of Creation" from your Extra Deck
22. Selected Nerva the Power Patron of Creation (Extra Deck)
23. Yes
24. Selected Artmage Finmel (Deck)

End board:  LP 8000 | Hand 3 | Deck 37 | Extra 160 | GY 5 | Banished 3   Monsters: M1: Artmage Finmel Lv7 2400/1500 ATK || M3: Nerva the Power Patron of Creation Lv10 3300/3300 ATK || EMZ-R: Pitknight Earlie L2↗→ 1500    Spell/Trap: (none)   GY: Fiendsmith's Tract, Fiendsmith Engraver, Medius the Pure, Lacrima the Crimson Tears, Fiendsmith's Requiem   Banished: Prohibited Power Patron Portal - Terminus (face-down), Small World (face-down), Magician of Dark Chaos - Black Chaos (face-down)   Hand: Droll & Lock Bird, Ash Blossom & Joyous Spring, Ghost Ogre & Snow Rabbit   Extra Deck: 160 cards (view --ed to list)

## Order 3: best 7.8 (, worst 7.8) — from opening lanes
Others: opening lanes → new ending 7.8 · opening lanes → new early order 7.8 · opening lanes → new ending 7.8 · opening lanes → new early order 7.8 · search 7.65 · tries Link Summon Keel, Shipwright Fur Hire 7.6 · tries Link Summon Knightmare Phoenix 7.5 · tries Link Summon Dharc the Dark Charmer, Gloomy 7.5 · tries Link Summon Artifact Dagda 7.5 · tries Link Summon I 7.5 · tries Link Summon Artemis, the Magistus Moon Maiden 7

1. Activate Fiendsmith Engraver (hand): Add 1 "Fiendsmith" Spell/Trap from your Deck to your hand
2. Selected Fiendsmith's Tract (Deck)
3. Set Spell/Trap Fiendsmith's Tract
4. Activate Fiendsmith's Tract (S1): Add 1 LIGHT Fiend monster from your Deck to your hand
5. Selected Fiendsmith Engraver (Deck)
6. Selected Fiendsmith Engraver (hand)
7. Activate Fiendsmith Engraver (GY): Special Summon this card
8. Selected Fiendsmith Engraver (GY)
9. Link Summon Fiendsmith's Requiem (Extra Deck)
10. select Fiendsmith Engraver (M3)
11. Activate Fiendsmith's Requiem (EMZ-R): Special Summon 1 "Fiendsmith" monster
12. Selected Lacrima the Crimson Tears (Deck)
13. No
14. Normal Summon Medius the Pure (hand)
15. Yes
16. Selected Nervedo the Shadebeast Power Patron (Deck)
17. Special Summon it
18. Link Summon I:P Masquerena (Extra Deck)
19. select Medius the Pure (M2)
20. select Lacrima the Crimson Tears (M1)
21. Link Summon Odd-Eyes Override Dragon (Extra Deck)
22. select Nervedo the Shadebeast Power Patron (M4)
23. select I:P Masquerena (EMZ-R)
24. Yes
25. Selected Junoldo the Shadespirit Power Patron (Deck)
26. Activate Odd-Eyes Override Dragon (EMZ-R): Destroy 1 other card you control and draw 1 card
27. Selected Junoldo the Shadespirit Power Patron (M4)
28. Yes
29. Selected Nervedo the Shadebeast Power Patron (Extra Deck)
30. Special Summon (procedure) Artmage Non-Finito (Extra Deck)
31. Selected Ars Magna - "Citrinitas" (hand)
32. Selected Nervedo the Shadebeast Power Patron (hand)
33. Yes
34. Selected Artmage Impasto -Recapture- (Deck)

End board:  LP 8000 | Hand 3 | Deck 38 | Extra 159 | GY 8 | Banished 0   Monsters: M1: Artmage Non-Finito Lv7 2400/1500 ATK || EMZ-R: Odd-Eyes Override Dragon L3↙↓↘ 2500    Spell/Trap: S1: Artmage Impasto -Recapture- (Set)   GY: Fiendsmith's Tract, Fiendsmith Engraver, Fiendsmith's Requiem, Lacrima the Crimson Tears, Medius the Pure, I:P Masquerena, Ars Magna - "Citrinitas", Nervedo the Shadebeast Power Patron   Hand: Droll & Lock Bird, Ghost Ogre & Snow Rabbit, Ash Blossom & Joyous Spring   Extra Deck: 159 cards (view --ed to list)

## Order 4: best 8.75 (, worst 8.75) — from opening lanes
Others: opening lanes → new ending 8.75 · opening lanes → new early order 8.75 · opening lanes → new ending 8.75 · opening lanes → new early order 7.65

1. Activate Fiendsmith Engraver (hand): Add 1 "Fiendsmith" Spell/Trap from your Deck to your hand
2. Selected Fiendsmith's Tract (Deck)
3. Normal Summon Medius the Pure (hand)
4. Yes
5. Selected Nervedo the Shadebeast Power Patron (Deck)
6. Special Summon it
7. Activate Nervedo the Shadebeast Power Patron (M1): Special Summon 1 "Nerva the Power Patron of Creation" from your Extra Deck
8. Selected Nerva the Power Patron of Creation (Extra Deck)
9. Yes
10. Selected Junoldo the Shadespirit Power Patron (Deck)
11. Link Summon Pitknight Earlie (Extra Deck)
12. select Junoldo the Shadespirit Power Patron (M2)
13. select Medius the Pure (M3)
14. Yes
15. Selected Nervedo the Shadebeast Power Patron (Extra Deck)
16. Special Summon (procedure) Artmage Non-Finito (Extra Deck)
17. Selected Fiendsmith's Tract (hand)
18. Selected Nervedo the Shadebeast Power Patron (hand)
19. Yes
20. Selected Artmage Impasto -Recapture- (Deck)

End board:  LP 8000 | Hand 3 | Deck 37 | Extra 160 | GY 4 | Banished 3   Monsters: M1: Nerva the Power Patron of Creation Lv10 3300/3300 ATK || M3: Artmage Non-Finito Lv7 2400/1500 ATK || EMZ-R: Pitknight Earlie L2↗→ 1500    Spell/Trap: S1: Artmage Impasto -Recapture- (Set)   GY: Fiendsmith Engraver, Medius the Pure, Fiendsmith's Tract, Nervedo the Shadebeast Power Patron   Banished: Theorealize Liberation (face-down), Vidolium the Unstable Power Patron of Unity (face-down), Lacrima the Crimson Tears (face-down)   Hand: Ghost Ogre & Snow Rabbit, Droll & Lock Bird, Ash Blossom & Joyous Spring   Extra Deck: 160 cards (view --ed to list)

