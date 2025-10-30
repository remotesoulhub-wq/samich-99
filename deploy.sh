#!/bin/bash
set -e

echo "Stopping and removing old container..."
docker stop birdyprism 2>/dev/null || true
docker rm birdyprism 2>/dev/null || true
echo "Container cleanup complete"

echo "Removing old image..."
docker rmi birdyprism 2>/dev/null || true
echo "Image cleanup complete"

echo "Pulling latest code..."
sudo git pull
echo "Code updated"

echo "Building Docker image..."
docker build -t birdyprism .
if [ $? -eq 0 ]; then
    echo "Image built successfully"
else
    echo "Image build failed!"
    exit 1
fi

echo "Starting container..."
docker run -itd -p 7669:3000 --name birdyprism --restart unless-stopped birdyprism
if [ $? -eq 0 ]; then
    echo "Container started successfully"
    echo "Application is running on port 7669"
else
    echo "Container failed to start!"
    exit 1
fi
