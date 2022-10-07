# napm

napm provides short aliases to installation commands.
napm is not a package manager. it doesn't provide commands to uninstall or reverse installations.

# Installation

napm is available on npm:
```shell
$ npm install -g napm
```

# Usage

List all installers:
```shell
$ napm list
```

Run an installer:
```shell
$ napm [installer]
```
Note that dependencies such as `cURL` may be required for certain installers.

## Supported Installers
The currently supported installers can be seen in [`installers/src/`](installers/src/).

## Example Usage

To install the Rust language, the `rust` installer can be used:
```shell
$ napm rust
```
This runs the following script:
```shell
$ curl --proto '=https' --tlsv1.2 -sSf https://sh.rustup.rs | sh
```

# Contributing

Please refer to [CONTRIBUTING.md](CONTRIBUTING.md).

# License

This project is licensed under the [MIT license](LICENSE).
