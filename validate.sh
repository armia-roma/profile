#!/bin/bash

# Portfolio Website Validation Script
echo "🔍 Portfolio Website Validation"
echo "================================"

# Check if all required files exist
echo "📁 Checking file structure..."

# Required files
required_files=(
    "index.html"
    "css/main.css"
    "css/variables.css" 
    "css/reset.css"
    "css/utilities.css"
    "css/navigation.css"
    "css/hero.css"
    "css/skills.css"
    "css/projects.css"
    "css/logos.css"
    "css/contact.css"
    "css/modal.css"
    "css/footer.css"
    "js/app.js"
    "js/data.js"
    "js/components.js"
    "js/modal.js"
    "js/navigation.js"
    "README.md"
    "OPTIMIZATION_REPORT.md"
)

missing_files=0
for file in "${required_files[@]}"; do
    if [ -f "$file" ]; then
        echo "✅ $file"
    else
        echo "❌ $file (missing)"
        ((missing_files++))
    fi
done

echo ""
echo "📊 Validation Summary:"
echo "✅ Found: $((${#required_files[@]} - missing_files))/${#required_files[@]} files"
if [ $missing_files -eq 0 ]; then
    echo "🎉 All required files are present!"
else
    echo "⚠️  $missing_files files are missing"
fi

echo ""
echo "📈 File Statistics:"
echo "CSS files: $(find css/ -name "*.css" | wc -l)"
echo "JS files: $(find js/ -name "*.js" | wc -l)"
echo "Image files: $(find . -maxdepth 1 \( -name "*.png" -o -name "*.jpg" -o -name "*.jpeg" -o -name "*.webp" \) | wc -l)"
echo "Total project size: $(du -sh . | cut -f1)"

echo ""
echo "🚀 Portfolio is ready for deployment!"
echo "Run 'python3 -m http.server 8000' to test locally"
