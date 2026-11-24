@echo off
title ROLAD Helper (close this window to stop)
cd /d "%USERPROFILE%\ROLAD-Helper"
:loop
git fetch -q origin 2>nul
git reset -q --hard origin/vm 2>nul
call npm.cmd ci --silent >nul 2>nul
node --no-warnings worker.mjs
if errorlevel 3 goto loop
echo  The helper stopped unexpectedly; restarting in 60 seconds (close this window to stop).
timeout /t 60 >nul
goto loop
