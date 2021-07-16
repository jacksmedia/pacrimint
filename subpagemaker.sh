#!/bin/bash
# Accept input & generate assets test

# relevant spec:
# https://web.mit.edu/rhel-doc/5/RHEL-5-manual/Deployment_Guide-en-US/s1-filesystem-fhs.html#:~:text=The%20FHS%20document%20is%20the,not%20covered%20by%20the%20standard.
echo "Alright, what're we calling the new subpage, Chief?\nPlease use only a-z or A-Z, because of directory naming rules (FHS)."
# user name for module
read subpagemaker

# scaffold 1 dir & 3 files to make a subpage for this webpage

# new file asset
touch src/pages/$subpagemaker.js
# new directory, no file created
mkdir content/$subpagemaker
# new file asset
touch content/$subpagemaker/$subpagemaker.json
# new file asset
touch content/$subpagemaker/content.md

# output location of new assets
echo "Awesome choice. We have generated assets for your new subpage at:
src/pages/$subpagemaker.js
content/$subpagemaker/$subpagemaker.json
content/$subpagemaker/content.md\n"