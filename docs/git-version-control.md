---
title: Add version control
slug: git-version-control
---

import gitversion from "/static/img/gitversion.png";
import repoGitUsername from "/static/img/repoGitUsername.png";
import commands from "/static/img/commands.png";
import liveoninternet from "/static/img/liveoninternet.png";

Ok, let's add git version control to our project. Git helps track changes to your code and manage it as a repository.

### 1. Initialise Git in your project

:::info

- the command `git init` will _initialise git_ in your project

:::

Open your terminal, navigate into the location of your project, then enter this command:

```
git init
```

### 2. Create a repository on Github

Ordinarily I name a repository exactly as my project is named, for example "my-website", but this instance is an exception.

In addition to hosting the source code of your repository free on GitHub, in order to get your website hosted for _free_ we need to create the repo that is named _exactly_ the same as your GitHub user.name with a .github.io on the end `¯\_(ツ)\_/¯`

Here's how mine looks:

<img src={repoGitUsername} alt="create new repo user.name.github.io" />

Now you do it, just enter your username as the name of your new repository:

- Create a new repo here: https://github.com/new
- Name your repository exactly as your username is spelt with `.github.io` on the end
- Ignore the other options for now (keep it public ect)

After you press "Create Repository" you will get a screen with some commands to configue git in your project with the new repo. We need those for the next step so don't click away.

Here's what I got from previous step: (note the highlighted area, we need those commands)

<img src={commands} alt="enter the commands to configure your project and the repo" />

### 3. Configure your project to the repo on GitHub

Open your terminal, navigate into the location of our project, enter these commands:

(replace `<YourGithubUsername>` with _YourGithubUsername_ )

```
git remote add origin https://github.com/<YourGithubUsername>/<YourGithubUsername>.github.io.git
```

Great. Now if anyone is going to clone or contribute to your respository, the origin they use is the source code at that url rather than the project on your local machine (which probably isn't connected to the internet 24/7)

Now let's ensure the main branch is set:

```
git branch -M main
```

Finally, let's check that our local project and the origin repository are both up to date with each other.

```
git status
```

If there are changes to your files that have not been committed, the there will be a list of the files that need to be committed. It will also tell you if the origin repository has some changes that are not yet reflected in your local project. We will get to that in the next step :)
