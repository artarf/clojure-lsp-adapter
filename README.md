# IDE-clojure package

Clojure language support for [Atom-IDE](https://ide.atom.io/), powered by the [Clojure language server](https://github.com/snoe/clojure-lsp).

## Requirements

[`ide-clojure`](https://atom.io/packages/ide-clojure) requires [Atom `1.21+`](https://atom.io/), [Clojure language server `0.1+`](https://github.com/snoe/clojure-lsp) and the [`atom-ide-ui`](https://atom.io/packages/atom-ide-ui) package to expose the functionality within Atom.

## Installation

### Language Server

Install the language server [clojure-lsp](https://github.com/snoe/clojure-lsp#installation)

### Atom Package

Install `ide-clojure` and [`atom-ide-ui`](https://atom.io/packages/atom-ide-ui) from _Install_ in Atom's settings or run:

```bash
apm install atom-ide-ui
apm install ide-clojure
```

## Configuration

Configuration is loaded from zero or more configuration sources.

- `clojure-lsp`: full path to clojure-lsp executable if not in PATH

## Contributing

- [Filing bugs and feature requests](https://github.com/artarf/ide-clojure/issues/new)
- [Work with existing issues](https://github.com/artarf/ide-clojure/issues),

See Atom's guide to [contributing to packages](https://github.com/atom/atom/blob/master/docs/contributing-to-packages.md).

## License

[MIT License](LICENSE.md).
