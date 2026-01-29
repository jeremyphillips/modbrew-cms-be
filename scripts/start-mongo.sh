#!/usr/bin/env bash

PORT=2701
CONFIG="$HOME/.config/mongodb/modbrew.conf"

if lsof -i :$PORT >/dev/null; then
  echo "Mongo already running on port $PORT"
  # Keep script alive so concurrently doesn't kill dev:api
  tail -f /dev/null
else
  echo "Starting Mongo on port $PORT..."
  mongod --config "$CONFIG"
fi
