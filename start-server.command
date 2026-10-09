#!/bin/bash
# Double-click this file to run Leen Science with a tiny local web server.
# (Opening index.html directly also works; the server just guarantees that
#  progress and stars are saved reliably.)
cd "$(dirname "$0")" || exit 1
PORT=8777
python3 -m http.server $PORT >/dev/null 2>&1 &
SERVER=$!
sleep 1
open "http://localhost:$PORT/"
echo ""
echo "  Leen Science is running at  http://localhost:$PORT/"
echo "  اقفل الشباك ده أو اضغط Ctrl+C لما تخلصي."
echo ""
trap "kill $SERVER 2>/dev/null" EXIT
wait $SERVER
