@echo off
cd /d "%~dp0"
if not exist results mkdir results
echo start %date% %time% > sweep2-log.txt
node --no-warnings sweep2.mjs --n 150 --secs 2 --max 400 >> sweep2-log.txt 2>&1
copy /y results\sweep2.md "%USERPROFILE%\Documents\" >nul
node --no-warnings sweep2.mjs --n 150 --secs 2 --max 400 --script ash,droll,imperm >> sweep2-log.txt 2>&1
copy /y results\sweep2-traps.md "%USERPROFILE%\Documents\" >nul
echo ALLDONE >> sweep2-log.txt
