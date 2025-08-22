#!/bin/bash

# GitHub Pages Deployment Script
echo "🚀 GitHub Pages Deployment Helper"
echo "=================================="

# Check if git is initialized
if [ ! -d ".git" ]; then
    echo "📁 Initializing Git repository..."
    git init
    echo "✅ Git repository initialized"
else
    echo "✅ Git repository already exists"
fi

# Check if remote origin exists
if ! git remote get-url origin >/dev/null 2>&1; then
    echo ""
    echo "🔗 Setting up GitHub remote..."
    echo "Please enter your GitHub repository URL:"
    echo "Example: https://github.com/yourusername/portfolio.git"
    read -p "Repository URL: " repo_url
    
    if [ ! -z "$repo_url" ]; then
        git remote add origin "$repo_url"
        echo "✅ Remote origin added: $repo_url"
    else
        echo "❌ No repository URL provided"
        exit 1
    fi
else
    echo "✅ Remote origin already configured: $(git remote get-url origin)"
fi

# Add all files
echo ""
echo "📦 Adding files to git..."
git add .

# Check if there are changes to commit
if git diff --staged --quiet; then
    echo "ℹ️  No changes to commit"
else
    # Commit changes
    echo "💾 Committing changes..."
    read -p "Enter commit message (or press Enter for default): " commit_msg
    if [ -z "$commit_msg" ]; then
        commit_msg="Deploy portfolio to GitHub Pages"
    fi
    
    git commit -m "$commit_msg"
    echo "✅ Changes committed"
fi

# Push to GitHub
echo ""
echo "🚀 Pushing to GitHub..."
git branch -M main
git push -u origin main

echo ""
echo "🎉 Portfolio uploaded to GitHub!"
echo ""
echo "📝 Next steps:"
echo "1. Go to your GitHub repository"
echo "2. Click on 'Settings' tab"
echo "3. Scroll down to 'Pages' section"
echo "4. Under 'Source', select 'Deploy from a branch'"
echo "5. Choose 'main' branch and '/ (root)' folder"
echo "6. Click 'Save'"
echo ""
echo "Your portfolio will be live at:"
echo "https://yourusername.github.io/repository-name"
echo ""
echo "✅ Deployment complete!"
