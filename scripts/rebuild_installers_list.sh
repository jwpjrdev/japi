#!/bin/bash

function joinArr {
  local IFS="$1";
  shift;
  echo "$*";
}

installers_dir="./installers/src/"
list_file="./installers/list"

echo "Rebuilding installers list..."

files=( $(ls $installers_dir) )
list=$(joinArr , ${files[@]})

contents=$(printf "# do not manually edit this file
# this file is automatically regenerated by scripts/rebuild_installers_list.sh on git push
$list")

if [ -f "$list_file" ] ; then
    rm "$list_file"
fi
echo "$contents" > $list_file

echo "Saved rebuilt installers list to $list_file"

# git add $list_file
# git commit --amend --no-edit
# echo "Adding changes to latest commit.."