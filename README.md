# japi

japi provides short aliases to installation commands.
japi is not a package manager. it doesn't provide commands to uninstall or reverse installations.

## Installation

japi is available on npm:
```shell
$ npm install -g @jwpjrdev/japi
```

## Usage

List all installers:
```shell
$ japi list
```

Run an installer:
```shell
$ japi [installer]
```
Note that dependencies such as `cURL` may be required for certain installers.

### Supported Installers
The currently supported installers can be seen in [`installers/src/`](installers/src/).

### Example Usage

To install the Rust language, the `rust` installer can be used:
```shell
$ japi rust
```
This runs the following script, found in [/installers/src/rust](/installers/src/rust):
```shell
$ curl --proto '=https' --tlsv1.2 -sSf https://sh.rustup.rs | sh
```

## Contributing

Please refer to [CONTRIBUTING.md](CONTRIBUTING.md).

## License

This project is licensed under the [MIT license](LICENSE).
