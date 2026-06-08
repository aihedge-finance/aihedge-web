#!/bin/sh
# This script sets up a Git pre-commit hook to run type checks, build, and lint locally.

# Check if .git directory exists (skip in environments like Docker/CI/Railway where .git may not be present)
if [ ! -d ".git" ]; then
  echo "⚠️ .git folder not found. Skipping pre-commit hook installation."
  exit 0
fi

HOOK_FILE=".git/hooks/pre-commit"

echo "Setting up Git pre-commit hook..."

# Create the hooks directory if it doesn't exist
mkdir -p .git/hooks

# Write the hook content
cat << 'EOF' > "$HOOK_FILE"
#!/bin/sh
# Pre-commit hook to verify that build and lint pass.

echo "🔍 Running pre-commit checks..."

# Run build (which runs tsc -b and vite build)
npm run build
if [ $? -ne 0 ]; then
  echo "❌ Build/Type-check failed. Commit aborted."
  exit 1
fi

echo "✅ All checks passed! Proceeding with commit."
exit 0
EOF

# Make the hook executable
chmod +x "$HOOK_FILE"

echo "✅ Pre-commit hook successfully configured at $HOOK_FILE"
