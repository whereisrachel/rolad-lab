YGO LAB — runs on your PC, no Claude, no usage limits.

SETUP (once)
 1. Install Node.js LTS from nodejs.org (22 or newer).
 2. Unzip this folder, open a terminal in it, run:  npm install

COMMANDS
 node check.mjs decks\ROLAD-L2.ydk
     -> legality on the 2026.10 TCG list + missing scripts
 node evaldeck.mjs decks\ROLAD-L2.ydk 200 4 11 --out results\L2.json
     -> 200 random hands, 4 sec each, seed 11. Prints mean score, hands >=5, >=3, <2.
     Per-hand best line is in the JSON.
 Compare decks: same hand count + same seed, different .ydk.

NOTES
 - Hand scoring uses the ROLAD guide's solver (v5.1). Works on ROLAD lists.
 - Update card data: replace vendor\cdb and vendor\scripts with fresh copies of
   github.com/ProjectIgnis/BabelCDB and /CardScripts.

HAND-TRAP STRESS TEST (new)
 node oppstress.mjs decks\ROLAD-L2.ydk 30 3 11 --out results\stress.json
   -> same 30 hands solved vs: no interaction, Ash, Droll, Imperm, Nibiru, Ash+Imperm, Ash+Droll+Imperm.
   Opponent plays the trap whenever the engine allows it (first option, never onto its own link).
   ~10 min for 30 hands. Scores depend on the time budget and CPU speed: compare decks only
   on the same PC with the same hands/seconds/seed. Small samples (under ~30 hands) are noisy.
 What it can't see: their choices inside effects (what Imperm/Ash targets) take the first option,
 and nothing about their own turn or going second.

READ BEFORE TRUSTING THE STRESS TEST
 Under a trap the solver often finds nothing better than 'End Phase' (score 1), even at 30 s/hand
 (example: Medius/Treasure/Mind Shuffle/Black Chaos/Ash vs Ash -> 1, because it never tries
 Treasure first as bait). So these numbers are a PESSIMISTIC lower bound that mixes deck weakness
 with solver blind spots. Use them to spot which hands collapse, then check those hands by hand.
 Never use them alone to rank two decks.

CARD SEARCH (new)
 node search.mjs "Light and Darkness Ritual" --type monster --level 1-4 --legal
 Words must all appear in name or text; "quoted phrases" are exact. Filters: --type --attr --race --level --atk --def --name --legal --all --limit --full

THE BRAIN (new) — a Claude model that runs the lab by itself
 1. Get an API key at console.anthropic.com (billed per token, separate from your chat limits).
 2. PowerShell:  $env:ANTHROPIC_API_KEY="sk-ant-..."     (cmd: set ANTHROPIC_API_KEY=sk-ant-...)
 3. node brain.mjs --selftest                 (free; checks the tools)
 4. node brain.mjs "check decks\ROLAD-L2.ydk and list every card that fits as a bridge for Dark Magician hands"
 It can: search all cards, read exact card text, check deck legality, run hand odds / stress tests, play games, write NEW candidate decks.
 Safety: spend cap (default $3 per run, YGO_MAX_USD), turn cap (60), only reads/writes decks\ results\ notes\, never overwrites an
 existing deck, every tool call logged in logs\. Your standing rules are in notes\NOTES.md and in its instructions; edit that file to change them.
 Set YGO_PRICE_IN / YGO_PRICE_OUT to your model's real $/million-token prices so the cost estimate is right.
 Tested here only against a fake API (loop, tool calls, caching flags work). Not yet run with a real key.

FREE CARD-SWAP EXPLORER (new) — no AI, no API, no cost
 node explore.mjs decks\ROLAD-L2.ydk --cut "Small World" --text "Dark Magician" --type spell --hands 30 --secs 3
 node explore.mjs decks\ROLAD-L2.ydk --cut "Small World" --cands "Pot of Desires;Terraforming;Allure of Darkness"
 Swaps each candidate in for ONE copy of the cut card, solves the same opening hands, ranks by score change.
 Candidates come from the search filters (--text --type --attr --race --level --name) or --cands. Locked cards can't be cut.
 Takes about (candidates+1) x hands x secs. Leave it running overnight. Results saved in results\.
 Treat gains within 2 standard errors as noise. Proxy only: suggests candidates, never justifies a change.

FREE LOCAL BRAIN (Ollama) — no key, no cost per use
 1. Install Ollama (ollama.com), start it.
 2. Pull a model that supports tool calling, e.g.:  ollama pull qwen2.5:14b   (about 9 GB; wants a GPU with ~10 GB VRAM)
    Smaller PCs: ollama pull qwen2.5:7b  (weaker). Check ollama.com/library for models tagged "tools".
 3. PowerShell:  $env:YGO_BACKEND="ollama" ; $env:YGO_MODEL="qwen2.5:14b"
 4. node brain.mjs "check decks\ROLAD-L2.ydk"
 Optional: YGO_CTX=16384 (memory window), YGO_MAX_MIN=120 (time cap), OLLAMA_URL if Ollama runs elsewhere.
 Honest expectations: a local model is much weaker than Claude at card text and multi-step planning. It is fine for
 'run these searches and checks and summarise'. For real reasoning, bring the results to a Claude chat.
 Tested here only against a fake Ollama server (loop and tool calls work). Not tested with a real model.
