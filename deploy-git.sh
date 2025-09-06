#!/bin/bash

# HomePavers Git Deployment Script
echo "🚀 Starting HomePavers Git deployment..."

# Build the project
echo "📦 Building project..."
npm run build

# Check if build was successful
if [ ! -d "dist" ]; then
    echo "❌ Build failed! No dist folder found."
    exit 1
fi

echo "✅ Build successful!"

# Add dist folder to git
echo "📁 Adding dist folder to Git..."
git add dist/

# Commit the changes
echo "💾 Committing changes..."
git commit -m "Deploy: Update production build $(date '+%Y-%m-%d %H:%M:%S')"

# Push to main branch
echo "🚀 Pushing to main branch..."
git push origin main

echo ""
echo "✅ Deployment complete!"
echo "🎯 GoDaddy will automatically deploy from the main branch"
echo "📋 Check your GoDaddy cPanel Git Version Control for deployment status"
