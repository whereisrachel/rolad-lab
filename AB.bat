@echo off
cd /d "%~dp0"
if not exist results mkdir results
echo Running paired tests... > ab-log.txt
node --no-warnings abtest.mjs decks\ROLAD-L2.ydk decks\L2-skilled.ydk --n 400 --secs 2 --out results\ab-skilled.md >> ab-log.txt 2>&1
node --no-warnings abtest.mjs decks\ROLAD-L2.ydk decks\L2-rod.ydk --n 400 --secs 2 --out results\ab-rod.md >> ab-log.txt 2>&1
node --no-warnings abtest.mjs decks\ROLAD-L2.ydk decks\L2-rod.ydk --n 400 --secs 2 --script ash,droll,imperm --out results\ab-rod-traps.md >> ab-log.txt 2>&1
copy /y results\ab-*.md "%USERPROFILE%\Documents\" >nul
echo DONE >> ab-log.txt
