# Changelog

All notable changes to the StructKit VS Code / Cursor extension are documented in this file.

The format is based on [Keep a Changelog](https://keepachangelog.com/en/1.1.0/),
and this project adheres to [Semantic Versioning](https://semver.org/spec/v2.0.0.html).

Entries are taken from README release notes, git history, and GitHub releases. GitHub releases `v0.1.1`-`v0.1.3` recorded "No changes"; the notes below for those tags come from the commits they include.

## [0.2.0] - Unreleased

Version in `package.json` since 2026-10-08. Not yet tagged; latest published GitHub release is `v0.1.3`.

### Added

- Recognize StructKit's default project file `.structkit.yaml` / `*.structkit.yaml` (introduced in structkit v3.3.0).
- Marketplace packaging metadata: extension icon, keywords, gallery banner, `CHANGELOG.md`, and HTTPS `repository.url`.
- On GitHub release published, package the VSIX once and publish to the Visual Studio Marketplace and Open VSX when `VSCE_PAT` / `OVSX_PAT` are set.

### Changed

- Continue supporting legacy `.struct.yaml` / `*.struct.yaml`.
- Rename the extension package to `vscode-structkit` (Marketplace ID becomes `kennethbelitzky.vscode-structkit`).
- Rebrand from "Struct YAML Support" to the official StructKit extension for VS Code and Cursor ([#2](https://github.com/httpdss/vscode-structkit/pull/2)).
- Prefer `structkit.commandPath` and `structkit.customStructuresPath`; deprecate `struct.commandPath` and `struct.customStructuresPath`.
- Default CLI path is `structkit` instead of `struct`.
- Command category, status bar, and messages use StructKit naming; custom schema generation uses `pip install structkit`.
- README title and introduction present this as a companion to [StructKit](https://github.com/httpdss/structkit) ([#3](https://github.com/httpdss/vscode-structkit/pull/3)).
- License metadata matches the Apache-2.0 `LICENSE` file and StructKit core ([#5](https://github.com/httpdss/vscode-structkit/pull/5)).

### Fixed

- Publisher in `package.json` set to `kennethbelitzky` to match the current author.

## [0.1.3] - 2025-07-31

GitHub release notes: no changes. Commits on this tag:

- Upload release assets with `softprops/action-gh-release`.
- Add a testing framework and initial test cases.

## [0.1.2] - 2025-07-31

GitHub release notes: no changes. Commits on this tag:

- Update the release-asset upload method to use GitHub CLI.

## [0.1.1] - 2025-07-31

GitHub release notes: no changes. Commits on this tag:

- Custom schema generation and YAML schema association.
- Rename `structure` to `files` in the example Struct YAML.
- Add ESLint and TypeScript ESLint plugins.
- Stop ignoring `struct-custom-schema.json`.

## [0.1.0] - 2025-07-31

Initial release:

- Schema validation for `*.struct.yaml` files using the official StructKit schema.
- Custom schema generation support.
- Configurable command path and custom structures path.
- Support for VS Code and Cursor.
