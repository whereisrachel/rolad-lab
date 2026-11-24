#!/bin/bash
# Runs every 10 min from cron on the library servers: pulls new code from GitHub (branch vm) and restarts the services if it changed.
# Means code updates never need the Oracle console.
cd /home/ubuntu/rolad-lab || exit 0
old=$(git rev-parse HEAD)
git fetch -q origin vm || exit 0
git reset -q --hard origin/vm
new=$(git rev-parse HEAD)
# the engine package must load; reinstall it if not (self-repair)
[ -f node_modules/ocgcore-wasm/package.json ] || { rm -rf node_modules; npm ci --silent; sudo systemctl restart libbuild libserve; echo "$(date -Is) reinstalled packages" >> /home/ubuntu/autoupdate.log; }
[ "$old" = "$new" ] && exit 0
changed=$(git diff --name-only "$old" "$new")
echo "$changed" | grep -q package-lock.json && npm ci --silent
# the hub (libserve) holds the queue of test pieces in memory: restart it only when its own code changed, so updates don't drop running tests
if echo "$changed" | grep -qE '^(libserve\.mjs|package-lock\.json)$'; then sudo systemctl restart libbuild libserve; else sudo systemctl restart libbuild; fi
echo "$(date -Is) updated ${old:0:8} -> ${new:0:8}" >> /home/ubuntu/autoupdate.log
