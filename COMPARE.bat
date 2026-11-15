@echo off
setlocal enabledelayedexpansion
rem Edit compare.txt: one line per test = "baseline.ydk variant.ydk [handtraps comma list]". Put new decks in the decks folder.
cd /d "%~dp0"
if not exist results mkdir results
echo start > compare-log.txt
set i=0
for /f "usebackq tokens=1,2,3" %%a in ("compare.txt") do (
  set /a i+=1
  if "%%c"=="" (node --no-warnings abtest.mjs %%a %%b --n 400 --secs 2 --out results\cmp-!i!.md >> compare-log.txt 2>&1) else (node --no-warnings abtest.mjs %%a %%b --n 400 --secs 2 --script %%c --out results\cmp-!i!.md >> compare-log.txt 2>&1)
)
copy /y results\cmp-*.md "%USERPROFILE%\Documents\" >nul
echo DONE >> compare-log.txt
