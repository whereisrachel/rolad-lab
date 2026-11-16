@echo off
cd /d "%~dp0"
set "NODE=%ProgramFiles%\nodejs\node.exe"
if not exist "%NODE%" for /f "delims=" %%i in ('where node') do set "NODE=%%i"
schtasks /create /tn "ROLAD Lab nightly explorer" /tr "\"%NODE%\" --no-warnings \"%~dp0server.mjs\" --explore-now" /sc daily /st 01:15 /f
echo.
echo Done. Every night at 1:15 am the explorer starts (your PC must be on, signed in, and not asleep).
echo To remove it later: schtasks /delete /tn "ROLAD Lab nightly explorer" /f
pause
