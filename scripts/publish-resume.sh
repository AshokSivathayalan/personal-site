#!/bin/sh
# Commit and push assets/docs/resume.pdf.
# The PDF is copied here automatically whenever main.tex is built in VS Code
# (see .vscode/settings.json in the Resumes folder); this publishes it.

set -e
cd "$(dirname "$0")/.."

PDF=assets/docs/resume.pdf

if git diff --quiet HEAD -- "$PDF"; then
  echo "resume.pdf is unchanged; nothing to publish."
  exit 0
fi

git commit -m "Update resume" -- "$PDF"
git push
