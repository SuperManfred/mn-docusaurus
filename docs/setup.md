---
title: Setup your Tools
slug: learn-programming/setup
---

<!--
import Tabs from "@theme/Tabs";
import TabItem from "@theme/TabItem"; -->

import codedot from "/static/img/codedot.png";
import shellcommand from "/static/img/shellcommand.png";
import verifygituseremail from "/static/img/verifygituseremail.png";

The tools you'll use to develop software continue to improve and become more accessible. It doesn't take much to get started, so lets take a look at what you'll use:

- [Terminal](#1-install-terminal)
- [Chrome Browser](#2-install-chrome)
- [Visual Studio Code](#3-install-visual-studio-code)
- [Git](#4-setup-git)

## 1. Install Terminal

Terminal is a command line interface (CLI) that provides deep customization and command of your computer, this is very handy for developers.

<!-- <Tabs
groupId="operating-systems"
defaultValue="win"
values={[
{ label: "Mac OS", value: "mac" },
{ label: "Windows", value: "windows" },
]}> {" "}
> <TabItem value="mac">

    Mac OS comes with terminal preinstalled, go to next step.

  </TabItem>
  <TabItem value="windows">
    Install Windows PowerShell from:
    <markdown>
      <a
        href="https://www.microsoft.com/en-us/p/powershell/9mz1snwt0n5d?activetab=pivot:overviewtab"
        target="_top"
      >
        {" "}
        Microsoft's website
      </a>
    </markdown>
  </TabItem>
</Tabs> -->

## 2. Install Chrome

Chrome is the preferred browser to use when developing software, its developer tools are excellent.

:::info
Please **<mark>use Chrome</mark>** for these exercises.
:::

- Install Chrome: https://www.google.com/chrome (if you already have Chrome go to the step)

## 3. Install Visual Studio Code

Visual Studo Code is most popular code editor, you use it edit files and write code, it also has terminal access build in.

a) Install VSCode: https://code.visualstudio.com

b) Open the Command Palette (⇧⌘P)

<img src={codedot} alt="topmenu: view, select Command Palette" />

c) type "shell command", then select "install 'code' command in PATH"

<img src={shellcommand} alt="shell command" />

## 4. Setup Git and GitHub

Git is an open source version control system, GitHub is the most advanced development platform

- Download and install Git: https://git-scm.com/downloads
- Verify git is setup, enter this command in terminal:

```
  git --version
```

You should get a response with a version, your version may be higher than mine, here's what I have:

<img src={gitversion} alt="check git --version" />

- Signup to get a GitHub user.name: https://github.com
- Configure terminal with your GitHub user.name: [follow these steps](https://docs.github.com/en/github/getting-started-with-github/setting-your-username-in-git) and user.email: [follow these steps](https://docs.github.com/en/github/setting-up-and-managing-your-github-user-account/setting-your-commit-email-address)
- Verify your GitHub user.name and user.email by entering these commands in terminal:

```
  git config -l | grep user.name
  git config -l | grep user.email
```

If you've done the previous steps properly you should get responses

<img
  src={verifygituseremail}
  alt="verify config of github user.name and user.email"
/>
