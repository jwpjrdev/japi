# installit

`installit` is a command-line interface for Linux-based systems that provides aliases to long one-liner installation commands.

# Installation

installit is available on npm:
```shell
$ npm install -g installit
```

# Usage

List all installers:
```shell
$ installit list
```

Run an installer:
```shell
$ installit [installer]
```
Note that dependencies such as `cURL` may be required for certain installers.

## Supported Installers
The currently supported installers can be seen in [`data/commands.properties`](data/commands.properties).

## Example Usage

To install the Rust language, the `rust` installer can be used:
```shell
$ installit rust
```
This runs the following one-liner:
```shell
$ curl --proto '=https' --tlsv1.2 -sSf https://sh.rustup.rs | sh
```

# Contributing

Please refer to [CONTRIBUTING.md](CONTRIBUTING.md).

# License

This project is licensed under the [MIT license](LICENSE).
