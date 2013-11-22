# getversion

Simple CLI for obtaining the current version on your package.json file.

## Installation

Install it globally if you want to have it in your path:

```sh
$ npm install -g getversion
```

## Usage

Inside a Node.js package:

```sh
$ getversion
# will print 0.0.1
```

Get the version of a package in another directory:

```sh
$ getversion node_modules/request
```
