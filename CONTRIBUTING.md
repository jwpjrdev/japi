# Contributing

## Adding new installers

1. Fork this repository and clone your fork
2. Create a file and set its name to the name of the installer in [`installers/src/`](installers/src/)
3. Write the installation command to the file's contents
4. Run [`./scripts/rebuild_installers_list.sh`](scripts/rebuild_installers_list.sh)
5. Commit & push your changes, including the new [`installers/list`](installers/list) file
6. Open a pull request
