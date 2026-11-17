@echo off
title ROLAD Lab
cd /d "%~dp0"
set "NODE=%ProgramFiles%\nodejs\node.exe"
if not exist "%NODE%" set "NODE=node"
echo Starting ROLAD Lab... keep this window open while tests run. Close it to stop.
start "" cmd /c "timeout /t 3 >nul & start http://localhost:4747"
set "OPENED="
:run
"%NODE%" --no-warnings server.mjs
if %ERRORLEVEL%==42 (echo Updated - restarting... & goto run)
pause
