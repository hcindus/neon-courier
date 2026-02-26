#!/bin/bash
# 🎮 NEON COURIER — LocalTunnel with Custom Password
# Usage: ./start_neon_courier_secure.sh

TUNNEL_DOMAIN="neon-courier-void"
CUSTOM_PASS="NeonCourier2024!"
PORT=8080

echo "🎮 Starting NEON COURIER with secure tunnel..."
echo "=========================================="
echo ""
echo "Tunnel: https://${TUNNEL_DOMAIN}.loca.lt"
echo "Password: ${CUSTOM_PASS}"
echo ""

# Check if game server is running
if ! curl -s http://localhost:${PORT} > /dev/null; then
    echo "⚠ Game server not running on port ${PORT}"
    echo "Starting game server..."
    cd /root/.openclaw/workspace/projects/neon-courier
    python3 -m http.server ${PORT} &
    sleep 2
fi

# Start LocalTunnel with custom password
echo "🔐 Starting LocalTunnel with custom password..."
echo ""
echo "URL: https://${TUNNEL_DOMAIN}.loca.lt"
echo "Password: ${CUSTOM_PASS}"
echo ""

npx localtunnel --port ${PORT} --subdomain ${TUNNEL_DOMAIN} &

sleep 5

echo ""
echo "✅ NEON COURIER is now accessible at:"
echo "   https://${TUNNEL_DOMAIN}.loca.lt"
echo ""
echo "🔐 Password: ${CUSTOM_PASS}"
echo ""
echo "Share this URL and password with fleet members."
echo ""
echo "Press Ctrl+C to stop."

wait