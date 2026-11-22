@echo off
setlocal
title ROLAD Helper - install
echo.
echo  ROLAD Helper: lends this PC's spare cores to Belal's Yu-Gi-Oh testing lab.
echo  Needs: Node.js (nodejs.org, LTS) and Git (git-scm.com). Installs into %USERPROFILE%\ROLAD-Helper
echo.
where node >nul 2>nul || (echo  Node.js is not installed. Install it from https://nodejs.org (LTS), then run this again. & pause & exit /b 1)
where git >nul 2>nul || (echo  Git is not installed. Install it from https://git-scm.com/download/win, then run this again. & pause & exit /b 1)
set DIR=%USERPROFILE%\ROLAD-Helper
if exist "%DIR%\.git" (
  echo  Updating the existing copy...
  git -C "%DIR%" pull -q
) else (
  echo  Downloading the lab...
  git clone -q -b vm https://github.com/whereisrachel/rolad-lab "%DIR%" || (echo  Download failed. & pause & exit /b 1)
)
cd /d "%DIR%"
echo  Installing the game engine...
call npm ci --silent || (echo  Engine install failed. & pause & exit /b 1)
if exist "%~dp0worker.json" copy /y "%~dp0worker.json" worker.json >nul
if not exist worker.json (echo  worker.json is missing: keep it in the same folder as this installer. & pause & exit /b 1)
copy /y "helper\Start ROLAD Helper.bat" "%USERPROFILE%\Desktop\Start ROLAD Helper.bat" >nul
echo.
echo  Done. A "Start ROLAD Helper" shortcut is on your Desktop. Double-click it to start helping;
echo  close its window to stop. Cores used: edit "slots" in %DIR%\worker.json (default: all but 2).
echo.
pause
