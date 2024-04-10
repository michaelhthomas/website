---
title: NixOS Configuration Notes
slug: nixos-configuration-notes
type: post
cover_image: ./cover.png
date_published: 2021-04-05
date_updated: 2022-01-03
description: Tips and tricks for configuring NixOS, a declarative, immutable Linux distribution.
tags: ['NixOS', 'Linux']
featured: true
---

I recently began using NixOS, a declarative, immutable Linux distribution, as my primary operating system. NixOS is very unique in the Linux world, as each NixOS systems are configured through a single file, `configuration.nix`, which contains all the configuration for the operating system's state, packages, and configuration. Every package on the system has its own folder in the "Nix Store" (`/nix/store`), and the relevant paths are then added to the user's environment automatically.

The Nix package manager, the tool responsible for making this process work, was originally designed to allow for reproducible, 'pure', build environments. On an OS level, this means a system's configuration is stored in a small, source-controllable set of files. These files could be used to a configure another machine, which would end up having an identical set of installed packages, configuration files, file systems, etc.

It's pretty easy to experience the advantages that come with this centralized approach to OS configuration. Take, for example, setting up a Docker development environment. What might require some googling, adding a repository, installing packages, and enabling services on another distribution takes just a single line of configuration on NixOS.

```nix title="configuration.nix"
virtualization.docker.enable = true;
```

Adding this line to the system configuration and running `nixos-rebuild switch` is all it takes to start developing with Docker. Really. No adding a repo, fiddling with the package manager, or enabling services. It just works.

It takes just a few more lines to have a full system configuration, containing everything from kernel modules to browser preferences, and the ability to upgrade and roll-back to older configurations if something breaks.

:::note
If you'd like to get a feel for how this looks in practice, or you just prefer to learn by example, [check out my dotfiles](https://git.thomasfamily.duckdns.org/michael/nix-dots).
:::

# Configuring NixOS

The vast majority of a NixOS system's configuration is stored in the `configuration.nix` file. This isn't just any old configuration file, it's actually a program written in the [**Nix Expression Language**](https://nixos.wiki/wiki/Nix_Expression_Language), a language designed specifically for the Nix Package Manager. From the manual:

> The Nix expression language is a pure, lazy, functional language. Purity means that operations in the language don't have side-effects (for instance, there is no variable assignment). Laziness means that arguments to functions are evaluated only when they are needed. Functional means that functions are “normal” values that can be passed around and manipulated in interesting ways. The language is not a full-featured, general purpose language. Its main job is to describe packages, compositions of packages, and the variability within packages.

Nix is a language that is both incredibly powerful and a bit challenging to learn. Unfortunately, the documentation can be lacking at times, and I ended up having to read through package definitions and other users' configs to get an idea of both how to use the language and the options that are available. Once you've got a hold on it, though, Nix will quickly become your new best friend.

For a quick intro to the Nix language, [Nix By Example](https://medium.com/@MrJamesFisher/nix-by-example-a0063a1a4c55) is a wonderful resource to get you started. Some basic knowledge of the syntax is definitely helpful in putting together a working config.

Below are a few notes, tips, and tricks from my experience getting into NixOS as a beginner.

# Home Manager

[Home Manager](https://github.com/nix-community/home-manager) is a community-made tool which brings the declarative Nix approach to the userland, with configuration options for an individual user's shell, applications, etc. Additionally, Home Manager works on any machine with the Nix package manager installed, and can therefore be used on other Linux distributions (such as Ubuntu on WSL).

To get started with Home Manager, read over the [README](https://github.com/nix-community/home-manager/blob/master/README.md) and follow the installation instructions there. Be sure to add the home-manager channel which corresponds with your NixOS version. Once you've done that, go ahead and open your configuration at `~/.config/nixpkgs/home.nix`.

:::note
Home Manager exposes thousands of options to configure all of your user's applications and services. View the list of options in the [Home Manager manual](https://rycee.gitlab.io/home-manager/options.html), or use [this nifty tool](https://mipmip.github.io/home-manager-option-search/) which allows you to easily search through all available options.
:::

# Modularizing Configuration

[NixOS Modules](https://nixos.wiki/wiki/Module) allow the separation of parts of your NixOS (or Home Manager) configuration into separate files. Each file is its own Nix expression, and can be included through the `imports` section of your `configuration.nix`. Here's an example from the default configuration:

```nix title="configuration.nix"
imports =
  [ # Include the results of the hardware scan.
    ./hardware-configuration.nix
  ];
```

This code imports the `hardware-configuration.nix` module, which is automatically generated when you install NixOS. A typical module, using the shorthand for modules without declarations, has the following layout:

```nix title="module.nix"
{ config, pkgs, ... }:
{
  imports = [
    # paths to other modules
  ];

  # option definitions
}
```

There are two important things to note here:

1. This module is actually a function, which takes `config` and `pkgs` as arguments. This is not a requirement, but it is how modules are able to inherit values from their parents.
2. Any module can import other modules within the `imports` section.

Modules are an important component of NixOS configuration, and bring significant flexibility and organization improvements to the NixOS configuration system. To learn more about modules and how to use them in your configuration, [check out the wiki](https://nixos.wiki/wiki/Module).

# Configuring Services

## Custom Shell Configuration

On NixOS, custom shells cannot be enabled using a tool like `chsh`, but instead have to be configured in the system's `configuration.nix`. For example, to install and enable `zsh`, you must first install `zsh` globally:

```nix title="configuration.nix"
programs.zsh.enable = true;
```

Then set your user's shell property to the shell package in use:

```nix title="configuration.nix"
users.users.{yourName}.shell = pkgs.zsh;
```

After running `nixos-rebuild switch` and rebooting, `zsh` should now be enabled as your user's default shell, and can be configured using Home Manager.

Below is my configuration for `zsh`, using the [prezto configuration framework](https://github.com/sorin-ionescu/prezto) and [starship prompt](https://starship.rs/) with some custom modules and settings.

```nix title="zsh.nix"
{ config, pkgs, ... }:
{
  programs.zsh = {
    enable = true;
    prezto = {
      enable = true;
      pmodules = [
        "archive"
        "docker"
        "environment"
        "git"
        "terminal"
        "editor"
        "history"
        "directory"
        "spectrum"
        "utility"
        "completion"
        "command-not-found"
        "syntax-highlighting"
        "history-substring-search"
        "autosuggestions"
        "prompt"
      ];
    };
  };
  programs.starship = {
    enable = true;
    enableZshIntegration = true;
    settings = {
      character.success_symbol = "[➜](green)";
    };
  };
}
```

## Visual Studio Code

Visual Studio Code, my editor of choice, can be both installed and configured through Home Manager, making it easy to keep consistent configurations across systems. For example, the following configuration will install the Nix extension for proper syntax highlighting & code editing features, as well as configure some editor settings like the default font and tab size.

```nix title="vscode.nix"
{ config, pkgs, ... }:
{
  programs.vscode = {
    enable = true;
    extensions = [
      pkgs.vscode-extensions.bbenoist.Nix
    ];
    userSettings = {
      "editor.fontFamily" = "'FiraCode Nerd Font', 'Droid Sans Mono', 'monospace'";
      "editor.tabSize" = 2;
    };
  };
}
```
