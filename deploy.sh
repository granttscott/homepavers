#!/bin/bash

# HomePavers Deployment Script
echo "🚀 Starting HomePavers deployment..."

# Build the project
echo "📦 Building project..."
npm run build

# Check if build was successful
if [ ! -d "dist" ]; then
    echo "❌ Build failed! No dist folder found."
    exit 1
fi

echo "✅ Build successful!"
echo "📁 Contents of dist folder:"
ls -la dist/

echo ""
echo "📋 Next steps:"
echo "1. Go to your GoDaddy cPanel File Manager"
echo "2. Navigate to public_html folder"
echo "3. Upload ALL contents from the dist/ folder"
echo "4. Make sure index.html is in the root of public_html"
echo ""
echo "📂 Files to upload:"
echo "   - index.html"
echo "   - assets/ folder (with all CSS and JS files)"
echo "   - Any other files in dist/"
echo ""
echo "🎯 Your website should be live after uploading!"
