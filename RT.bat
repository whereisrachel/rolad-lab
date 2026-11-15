@echo off
setlocal enabledelayedexpansion
rem Real test: each line of rt.txt = "baseline.ydk variant.ydk onecard|random". Results copied to Documents as rt-N.md
cd /d "%~dp0"
if not exist results mkdir results
echo start %date% %time% > rt-log.txt
set i=0
for /f "usebackq tokens=1,2,3" %%a in ("rt.txt") do (
  set /a i+=1
  node --no-warnings realtest.mjs %%a %%b --mode %%c --n 40 --macros 300 --scn none,ash,imperm --out results\rt-!i!.md >> rt-log.txt 2>&1
  copy /y results\rt-!i!.md "%USERPROFILE%\Documents\" >nul
)
echo ALLDONE >> rt-log.txt
