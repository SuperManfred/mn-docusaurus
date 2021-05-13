---
title: Git Version Control
slug: git-version-control
---

import gitversion from "/static/img/gitversion.png";

<!-- [Use git version control](./git-version-control.md) -->

Bfore we try to add git to our project, lets verify git is installed. Open terminal and enter this command:

```
  git --version
  git config -l | grep user.name
```

Great! Now lets check we did infact do these previous steps properly,

add git version control to our project, git lets us track changes and manage the code as a repository.

### 1. Initialise Git in your project

Open your terminal, navigate into the location of our project, then enter this commands:

```
git init
```

:::info

- the command `git init` will _make a directory_ called "my-website"

:::

### 2. Create a repository on Github

Ordinarily I would usually name the repository exactly as my project is named "my-website", but this will be an exception. In order to host your website for free on GitHub, we need to create a repository the exact same as your GitHub user.name Now let's create a on GitHub, click here and call your repository "my-website".
https://github.com/new

### 3. Initialise Git in your project

Open your terminal, navigate into the location of our project, then enter this commands:

```
git remote add origin https://github.com/<YourGithubUsername>/<YourGithubUsername>.git
git branch -M main
git push -u origin main
```
