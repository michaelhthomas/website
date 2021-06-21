---
title: NixOS Configuration Notes
slug: nixos-configuration-notes
cover_image: ./cover.png
date_published: 2021-04-05
date_updated: 2021-04-05
tags: ['NixOS', 'Linux']
---

I recently began using NixOS, a declarative, immutable Linux distro, as my daily driver. NixOS has a configuration file, `configuration.nix`, which allows me to configure the entire operating system's state, packages, and configuration in a single, commitable file. 

If you'd like to take a peek at exactly what that looks like, this git repo contains the entirety of my system configurations: [https://git.thomasfamily.duckdns.org/michael/nix-dots](https://git.thomasfamily.duckdns.org/michael/nix-dots). 

I'll go ahead and explain what makes this so useful in a single line:

    virtualisation.docker.enable = true;

With this single line in my `configuration.nix`, docker is now installed and running on my system. Really. No adding a repo, fiddling with the package manager, or enabling services. It just works. 

Adding a few more lines gets me a full system configuration which has everything just the way I like it, with the ability to upgrade and roll-back at will, as well as even provision another system with the exact same settings. 

But this isn't just any old configuration file. You may have noticed the `.nix` extension used on our system configuration file. This file extension is for the [**Nix Expression Language**](https://nixos.wiki/wiki/Nix_Expression_Language)**,** a language designed specifically for use with the Nix package manager, and by extension, NixOS. From the docs:

> The Nix expression language is a pure, lazy, functional language. Purity means that operations in the language don't have side-effects (for instance, there is no variable assignment). Laziness means that arguments to functions are evaluated only when they are needed. Functional means that functions are “normal” values that can be passed around and manipulated in interesting ways. The language is not a full-featured, general purpose language. Its main job is to describe packages, compositions of packages, and the variability within packages.

Nix is a language that is both incredibly powerful and a bit challenging to learn. Unfortunately, the documentation can be lacking at times, and I ended up having to read through package definitions and other users' configs to get an idea of both how to use the language and the options that are available. Once you've got a hold on it, though, Nix will quickly become your new best friend. 

For a quick intro to the Nix language, [Nix By Example](https://medium.com/@MrJamesFisher/nix-by-example-a0063a1a4c55) is a wonderful resource to get you started. Some basic knowledge of the syntax is definitely helpful in putting together a working config. 

Below are a few notes, tips, and tricks from my experience getting into NixOS as a beginner.

## Getting Started with Home Manager

[Home Manager](https://github.com/nix-community/home-manager) is an incredibly powerful tool for extending the declarative Nix approach to the userland, and brings with it configuration options for nearly everything. 

To get started with Home Manager, read over the [README](https://github.com/nix-community/home-manager/blob/master/README.md) and follow the installation instruction there. Be sure to add the home-manager channel which corresponds with your NixOS version. Once you've done that, go ahead and open your configuration at `~/.config/nixpkgs/home.nix`. 

## Setting a Custom Shell

In order to set a custom shell as the default shell for a user, you'll have to set it in configuration.nix. First ensure the shell is enabled, i'll be using zsh in this example: `programs.zsh.enable = true;`. Next, set the user's shell property to the shell package in use: `users.users.{yourName}.shell = pkgs.zsh;`. After running `nixos-rebuild switch` and rebooting, zsh should now be your user's default shell. 

## Visual Studio Code

Visual Studio Code, my editor of choice, can be both installed and configured through Home Manager, making it easy to keep consistent configurations across systems. For example, the following configuration will install the Nix extension for proper syntax highlighting & code editing features, as well as configure some editor settings like the default font and tab size. 

    { config, pkgs, libs, ... }:
    {
      programs = {
        vscode = {
          enable = true;
          extensions = [
            pkgs.vscode-extensions.bbenoist.Nix
          ];
          userSettings = {
            "editor.fontFamily" = "'FiraCode Nerd Font', 'Droid Sans Mono', 'monospace'";
            "editor.tabSize" = 2;
          };
        };
      };
    }

vscode.nix
