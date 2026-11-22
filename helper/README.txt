ROLAD Helper - lends spare CPU cores to Belal's Yu-Gi-Oh deck testing lab.

1. Install Node.js (https://nodejs.org, LTS) and Git (https://git-scm.com/download/win).
2. Double-click "Install ROLAD Helper.bat" (about 2 minutes).
3. Double-click "Start ROLAD Helper" on your Desktop. Close its window to stop.

What it does: takes pieces of Belal's tests from his server, plays them with the lab's game engine, and sends the
results back. When there is nothing to do, it searches for new combo lines and uploads them. It only runs the lab's own
scripts and never opens ports on your network. It keeps itself up to date.

Cores: by default all but 2. To change it, edit %USERPROFILE%\ROLAD-Helper\worker.json and add for example  "slots": 8
