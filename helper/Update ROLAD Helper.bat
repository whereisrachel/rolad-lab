@echo off
title Update ROLAD Helper
echo  Updating the ROLAD Helper to the latest lab version...
cd /d "%USERPROFILE%\ROLAD-Helper" || (echo  ROLAD-Helper folder not found. & pause & exit /b 1)
taskkill /fi "WINDOWTITLE eq ROLAD Helper*" /t /f >nul 2>nul
git fetch -q origin && git reset -q --hard origin/vm || (echo  Update failed. Send a screenshot of this window to Belal. & pause & exit /b 1)
echo  Updated. Starting the helper again...
copy /y "helper\Start ROLAD Helper.bat" "%USERPROFILE%\Desktop\Start ROLAD Helper.bat" >nul
start "" "%USERPROFILE%\ROLAD-Helper\helper\Start ROLAD Helper.bat"
timeout /t 5 >nul
