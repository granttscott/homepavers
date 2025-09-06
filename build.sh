#!/bin/bash

# Build script for GoDaddy cPanel deployment
echo "Starting build process..."

# Install dependencies
echo "Installing dependencies..."
npm ci

# Build the project
echo "Building project..."
npm run build

# Check if build was successful
if [ -d "dist" ]; then
    echo "Build successful! Contents of dist folder:"
    ls -la dist/
else
    echo "Build failed! No dist folder found."
    exit 1
fi

echo "Build process completed."
