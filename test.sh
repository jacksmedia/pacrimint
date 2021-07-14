#!/bin/bash
# Accept input & generate infrastructure test

echo "Alright, what shall we call the new subpage, Chief?\nPlease use all lowercase, because of directory naming rules."

read subpagemaker

# output location of new assets
echo "Awesome choice. We have generated assets for your new subpage at:
src/pages/$subpagemaker.js
content/$subpagemaker/$subpagemaker.json
content/$subpagemaker/content.md\n"