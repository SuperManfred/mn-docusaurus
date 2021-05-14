---
title: Git Version Control
slug: git-version-control
---

import gitversion from "/static/img/gitversion.png";
import repoGitUsername from "/static/img/repoGitUsername.png";
import commands from "/static/img/commands.png";
import liveoninternet from "/static/img/liveoninternet.png";

Ok, let's add git version control to our project. Git helps track changes to your code and manage it as a repository.

### 1. Initialise Git in your project

Open your terminal, navigate into the location of your project, then enter this command:

```
git init
```

:::info

- the command `git init` will _initialise git_ in your project

:::

### 2. Create a repository on Github

Ordinarily I name a repository exactly as my project is named, for example "my-website", but this instance is an exception. In order to get your website hosted for _free_ on GitHub (in addition to hosting the source code of your repository free), we need to create the repo that is named _exactly_ the same as your GitHub user.name with a .github.io on the end `¯\_(ツ)\_/¯`

Here's how mine looks:

<img src={repoGitUsername} alt="create new repo user.name.github.io" />

Now you do it, just enter your username as the name of your new repository:

- Create a new here https://github.com/new
- Name your repository exactly as your username is spelt (don't worry about the other options)

After you press "Create Repository" you will get a screen with some commands to configue git in your project with the new repo. We need those for the next step so don't click away.

Here's what I got from previous step: (note the highlighted area, we need those commands)

<img src={commands} alt="enter the commands to configure your project and the repo" />

### 3. Configure your project to the repo on GitHub

Open your terminal, navigate into the location of our project, lets use those commands:

(replace `<YourGithubUsername>` with _YourGithubUsername_ )

```
git remote add origin https://github.com/<YourGithubUsername>/<YourGithubUsername>.github.io.git
git branch -M main
git push -u origin main
```

Now visit your website: `https://<YourGithubUsername>.github.io`

### Congratulations!!!

<img src={liveoninternet} alt="your site is live!" />

If you have changed your index.html file, you will have to do this:

```
git add .
git commit -m "comment with a description of what you did"
git push -u origin main
```

You will repeat those commands again and again as you make improvements to your website.
