oclif-hello-world
=================

oclif example Hello World CLI

[![oclif](https://img.shields.io/badge/cli-oclif-brightgreen.svg)](https://oclif.io)
[![CircleCI](https://circleci.com/gh/oclif/hello-world/tree/main.svg?style=shield)](https://circleci.com/gh/oclif/hello-world/tree/main)
[![GitHub license](https://img.shields.io/github/license/oclif/hello-world)](https://github.com/oclif/hello-world/blob/main/LICENSE)

<!-- toc -->
* [Usage](#usage)
* [Commands](#commands)
<!-- tocstop -->
# Usage
<!-- usage -->
```sh-session
$ npm install -g @oclif/plugin-test-esm-2
$ esm2 COMMAND
running command...
$ esm2 (--version)
@oclif/plugin-test-esm-2/0.7.28 linux-x64 node-v18.20.4
$ esm2 --help [COMMAND]
USAGE
  $ esm2 COMMAND
...
```
<!-- usagestop -->
# Commands
<!-- commands -->
* [`esm2 esm2 [OPTIONALARG] [DEFAULTARG] [DEFAULTFNARG]`](#esm2-esm2-optionalarg-defaultarg-defaultfnarg)
* [`esm2 help [COMMAND]`](#esm2-help-command)
* [`esm2 plugins`](#esm2-plugins)
* [`esm2 plugins:inspect PLUGIN...`](#esm2-pluginsinspect-plugin)
* [`esm2 plugins install PLUGIN`](#esm2-plugins-install-plugin)
* [`esm2 plugins link PATH`](#esm2-plugins-link-path)
* [`esm2 plugins reset`](#esm2-plugins-reset)
* [`esm2 plugins uninstall [PLUGIN]`](#esm2-plugins-uninstall-plugin)
* [`esm2 plugins update`](#esm2-plugins-update)

## `esm2 esm2 [OPTIONALARG] [DEFAULTARG] [DEFAULTFNARG]`

```
USAGE
  $ esm2 esm2 [OPTIONALARG] [DEFAULTARG] [DEFAULTFNARG] [--json] [--optionalString <value>]
    [--defaultString <value>] [--defaultFnString <value>]

FLAGS
  --defaultFnString=<value>  [default: async fn default]
  --defaultString=<value>    [default: simple string default]
  --optionalString=<value>

GLOBAL FLAGS
  --json  Format output as json.
```

_See code: [src/commands/esm2.ts](https://github.com/oclif/plugin-test-esm-2/blob/0.7.28/src/commands/esm2.ts)_

## `esm2 help [COMMAND]`

Display help for esm2.

```
USAGE
  $ esm2 help [COMMAND...] [-n]

ARGUMENTS
  COMMAND...  Command to show help for.

FLAGS
  -n, --nested-commands  Include all nested commands in the output.

DESCRIPTION
  Display help for esm2.
```

_See code: [@oclif/plugin-help](https://github.com/oclif/plugin-help/blob/6.2.9/src/commands/help.ts)_

## `esm2 plugins`

List installed plugins.

```
USAGE
  $ esm2 plugins [--json] [--core]

FLAGS
  --core  Show core plugins.

GLOBAL FLAGS
  --json  Format output as json.

DESCRIPTION
  List installed plugins.

EXAMPLES
  $ esm2 plugins
```

_See code: [@oclif/plugin-plugins](https://github.com/oclif/plugin-plugins/blob/5.4.6/src/commands/plugins/index.ts)_

## `esm2 plugins:inspect PLUGIN...`

Displays installation properties of a plugin.

```
USAGE
  $ esm2 plugins inspect PLUGIN...

ARGUMENTS
  PLUGIN...  [default: .] Plugin to inspect.

FLAGS
  -h, --help     Show CLI help.
  -v, --verbose

GLOBAL FLAGS
  --json  Format output as json.

DESCRIPTION
  Displays installation properties of a plugin.

EXAMPLES
  $ esm2 plugins inspect myplugin
```

_See code: [@oclif/plugin-plugins](https://github.com/oclif/plugin-plugins/blob/5.4.6/src/commands/plugins/inspect.ts)_

## `esm2 plugins install PLUGIN`

Installs a plugin into esm2.

```
USAGE
  $ esm2 plugins install PLUGIN... [--json] [-f] [-h] [-s | -v]

ARGUMENTS
  PLUGIN...  Plugin to install.

FLAGS
  -f, --force    Force npm to fetch remote resources even if a local copy exists on disk.
  -h, --help     Show CLI help.
  -s, --silent   Silences npm output.
  -v, --verbose  Show verbose npm output.

GLOBAL FLAGS
  --json  Format output as json.

DESCRIPTION
  Installs a plugin into esm2.

  Uses npm to install plugins.

  Installation of a user-installed plugin will override a core plugin.

  Use the ESM2_NPM_LOG_LEVEL environment variable to set the npm loglevel.
  Use the ESM2_NPM_REGISTRY environment variable to set the npm registry.

ALIASES
  $ esm2 plugins add

EXAMPLES
  Install a plugin from npm registry.

    $ esm2 plugins install myplugin

  Install a plugin from a github url.

    $ esm2 plugins install https://github.com/someuser/someplugin

  Install a plugin from a github slug.

    $ esm2 plugins install someuser/someplugin
```

_See code: [@oclif/plugin-plugins](https://github.com/oclif/plugin-plugins/blob/5.4.6/src/commands/plugins/install.ts)_

## `esm2 plugins link PATH`

Links a plugin into the CLI for development.

```
USAGE
  $ esm2 plugins link PATH [-h] [--install] [-v]

ARGUMENTS
  PATH  [default: .] path to plugin

FLAGS
  -h, --help          Show CLI help.
  -v, --verbose
      --[no-]install  Install dependencies after linking the plugin.

DESCRIPTION
  Links a plugin into the CLI for development.
  Installation of a linked plugin will override a user-installed or core plugin.

  e.g. If you have a user-installed or core plugin that has a 'hello' command, installing a linked plugin with a 'hello'
  command will override the user-installed or core plugin implementation. This is useful for development work.


EXAMPLES
  $ esm2 plugins link myplugin
```

_See code: [@oclif/plugin-plugins](https://github.com/oclif/plugin-plugins/blob/5.4.6/src/commands/plugins/link.ts)_

## `esm2 plugins reset`

Remove all user-installed and linked plugins.

```
USAGE
  $ esm2 plugins reset [--hard] [--reinstall]

FLAGS
  --hard       Delete node_modules and package manager related files in addition to uninstalling plugins.
  --reinstall  Reinstall all plugins after uninstalling.
```

_See code: [@oclif/plugin-plugins](https://github.com/oclif/plugin-plugins/blob/5.4.6/src/commands/plugins/reset.ts)_

## `esm2 plugins uninstall [PLUGIN]`

Removes a plugin from the CLI.

```
USAGE
  $ esm2 plugins uninstall [PLUGIN...] [-h] [-v]

ARGUMENTS
  PLUGIN...  plugin to uninstall

FLAGS
  -h, --help     Show CLI help.
  -v, --verbose

DESCRIPTION
  Removes a plugin from the CLI.

ALIASES
  $ esm2 plugins unlink
  $ esm2 plugins remove

EXAMPLES
  $ esm2 plugins uninstall myplugin
```

_See code: [@oclif/plugin-plugins](https://github.com/oclif/plugin-plugins/blob/5.4.6/src/commands/plugins/uninstall.ts)_

## `esm2 plugins update`

Update installed plugins.

```
USAGE
  $ esm2 plugins update [-h] [-v]

FLAGS
  -h, --help     Show CLI help.
  -v, --verbose

DESCRIPTION
  Update installed plugins.
```

_See code: [@oclif/plugin-plugins](https://github.com/oclif/plugin-plugins/blob/5.4.6/src/commands/plugins/update.ts)_
<!-- commandsstop -->
