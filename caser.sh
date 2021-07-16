#!/bin/bash
# Accept input & mess w input test

# relevant spec:
# https://web.mit.edu/rhel-doc/5/RHEL-5-manual/Deployment_Guide-en-US/s1-filesystem-fhs.html#:~:text=The%20FHS%20document%20is%20the,not%20covered%20by%20the%20standard.
echo "Alright, what're we calling the new subpage, Chief?\nPlease use only a-z or A-Z, because of directory naming rules (FHS)."
# user name for module
read input

echo "You chose $input"
echo $input | cut -c1-1 | tr '[:upper:]' '[:lower:]'
new=${input | cut -c1-1 | tr '[:upper:]' '[:lower:]'}
echo "Still with us, $new?\n"
echo "Above, it was guaranteed uncapitalized. Now, tho: $input" 

echo "You found out how to only affect the 1st character of the input, rly fast! Great job!"
