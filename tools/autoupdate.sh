#!/bin/bash
# Runs every 10 min from cron on the library servers: pulls new code from GitHub (branch vm) and restarts the services if it changed.
# Means code updates never need the Oracle console.
cd /home/ubuntu/rolad-lab || exit 0
old=$(git rev-parse HEAD)
git fetch -q origin vm || exit 0
git reset -q --hard origin/vm
new=$(git rev-parse HEAD)
[ "$old" = "$new" ] && exit 0
git diff --name-only "$old" "$new" | grep -q package-lock.json && npm ci --silent
sudo systemctl restart libbuild libserve
echo "$(date -Is) updated ${old:0:8} -> ${new:0:8}" >> /home/ubuntu/autoupdate.log
