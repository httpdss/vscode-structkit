# StructKit for VS Code and Cursor

Companion to [StructKit](https://github.com/httpdss/structkit). Schema validation and autocomplete for `.structkit.yaml` (legacy `.struct.yaml` is still supported). Install the CLI with `pip install structkit`. Star the [core repo](https://github.com/httpdss/structkit).

## Features

- **Schema Validation**: Automatic validation of `.structkit.yaml` / `*.structkit.yaml` files (and legacy `.struct.yaml` / `*.struct.yaml`) using the official StructKit schema
- **Custom Schema Generation**: Generate custom schemas based on your StructKit configurations
- **Intelligent Autocomplete**: Get suggestions and validation while editing StructKit files
- **Configurable CLI Path**: Set custom path to your `structkit` command executable
- **Custom Structures Support**: Configure path to custom structures for enhanced validation

## Installation

### Prerequisites

Install the StructKit CLI:

```bash
pip install structkit
```

### Extension Installation

Extension ID: `kennethbelitzky.vscode-structkit`. Marketplace and Open VSX listing links go live after the first publish.

- **VS Code Marketplace**: search for "StructKit" in the Extensions view, or open [kennethbelitzky.vscode-structkit](https://marketplace.visualstudio.com/items?itemName=kennethbelitzky.vscode-structkit)
- **Open VSX** (Cursor and other Open VSX clients): search for "StructKit", or open [kennethbelitzky.vscode-structkit](https://open-vsx.org/extension/kennethbelitzky/vscode-structkit)
- **Command line**: `code --install-extension kennethbelitzky.vscode-structkit` (or `cursor --install-extension kennethbelitzky.vscode-structkit`)
- **From VSIX**: download the `.vsix` from [GitHub Releases](https://github.com/httpdss/vscode-structkit/releases) and install with `code --install-extension vscode-structkit-*.vsix`

## Configuration

### Extension Settings

This extension contributes the following settings:

- `structkit.commandPath`: Path to the structkit command executable (default: `structkit`)
- `structkit.customStructuresPath`: Path to custom structures directory (default: empty)

### Setting up the Extension

1. Install the extension
2. Install StructKit CLI: `pip install structkit`
3. Configure the structkit command path in VS Code settings (optional):
   - Open VS Code settings (Ctrl/Cmd + ,)
   - Search for "structkit"
   - Set `structkit.commandPath` to the path of your structkit executable
   - Optionally set `structkit.customStructuresPath` to your custom structures directory

## Commands

- `StructKit: Generate Custom Schema` - Generate a custom schema based on your StructKit configuration
- `StructKit: Refresh Schema` - Refresh the schema validation

## Usage

1. Create or open a file named `.structkit.yaml` (or any `*.structkit.yaml`). Legacy `.struct.yaml` / `*.struct.yaml` files still work.
2. The extension will automatically apply schema validation
3. If you have custom structures configured, use the "Generate Custom Schema" command to create enhanced validation
4. Enjoy intelligent autocomplete and validation while editing your StructKit files

See [`example.structkit.yaml`](example.structkit.yaml) for a sample project file.

## Requirements

- VS Code or Cursor 1.74.0 or higher
- StructKit CLI: `pip install structkit` (required for custom schema generation)

## Known Issues

- Custom schema generation requires the `structkit` command to be available in your system
- Schema validation applies to `.structkit.yaml` / `*.structkit.yaml`, with legacy `.struct.yaml` / `*.struct.yaml` still recognized

## Release Notes

See [CHANGELOG.md](CHANGELOG.md) for version history.

## Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

## License

Apache-2.0 - see [LICENSE](LICENSE) for details.
