---
title: Deploy your website
slug: deploy-your-website
---

import liveoninternet from "/static/img/liveoninternet.png";
import fontfamily from "/static/img/fontfamily.png";
import inspectelement from "/static/img/inspectelement.png";
import stylep from "/static/img/stylep.png";
import selectfont from "/static/img/selectfont.png";
import monospace from "/static/img/monospace.png";

### 1. Stage and commit changes

If you have made any changes to the project these need to be committed to be reflected in the origin source code repository.

Open your terminal, navigate into the location of our project, enter these commands:

```
git add .
git commit -m "comment with a description of the changes"
```

### 2. Deploy your project

Ok, now the big moment, lets push your website live!

```
git push -u origin main
```

Now visit your website: `https://<YourGithubUsername>.github.io`

## 🎊 🥳 🎉 Congratulations

Your website is live!!! Here's what mine looks like:

<img src={liveoninternet} alt="your site is live!" />

Ok ok... its pretty basic, but the right now anyone anywhere in the world can see it so that's pretty cool! Lets do a couple of rounds of iteration to imporve it.

### 3. Explore Chrome Dev Tools

- Open Chrome browser and visit your website: `https://<YourGithubUsername>.github.io`
- Hover over the text on the screen, Right-click a world, Select _inspect_
  <img src={inspectelement} alt="select inspect to open Chrome Dev Tools" />

Have a look at that, looks like our source code. That's Chrome Dev Tools! It has a lot of great functionalities to help us in development. Let's try something:

- Put your curser inside the brackets of the element.style {_here_} and start typing something
- Look at all those style properties... Wow!
- See how it optimistically adds style code to the `<p>` element as you scroll properties.
  <img src={fontfamily} alt="your site is live!" />

- Type `font-family:` with the colon, then use arrows on your keyboard to select a font
  <img src={selectfont} alt="your site is live!" />

- Note the code that was optimistically added to the `<p>` element
  <img src={monospace} alt="your site is live!" />

### 4. Iterate CI CD cycle

CI CD stands for Continuous Integration Continuous Deployment. Basically it means that as we make changes to our source code and then commit and push it to the origin repository, it automatically deploys the new changes live (seems trivial, but that used to be a lot of work)

Let's use the exact syntax shown in Chrome Dev Tools to add style property to the real `<p>` element in our project:

<img src={stylep} alt="your site is live!" />

- Add the changes to the opening `<p>` element your `index.html` file
- _Save_ the file/changes
- Open your terminal, in your project enter these commands:

```
git add .
git commit -m "add style property font-family to p element"
git push
```

Now refresh your website: `https://<YourGithubUsername>.github.io`

Excellent! Well I hope you feel good about what you've just done. You now have a little experience using the main tools you will need for software development, and you know you can actually do this!

Best of all, you can now impliment what your learning in real life as you learn new things. At this stage I would not be too fused about what your site looks like, just use it as a place to document your work.

The most important thing now is to find a structured path to continue learning. Here is a blog about choosing a path forward: {inset blog post}
