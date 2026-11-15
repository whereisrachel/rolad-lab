@echo off
cd /d "%~dp0"
if not exist results mkdir results
echo waiting for RT to finish... > screen-log.txt
:wait
findstr /c:"ALLDONE" rt-log.txt >nul 2>&1
if errorlevel 1 (
  timeout /t 60 /nobreak >nul
  goto wait
)
echo start %date% %time% >> screen-log.txt
node --no-warnings screen.mjs --n 16 --scn none,ash --passes 1 --macros 200 >> screen-log.txt 2>&1
copy /y results\screen.md "%USERPROFILE%\Documents\screen.md" >nul
echo ALLDONE >> screen-log.txt
