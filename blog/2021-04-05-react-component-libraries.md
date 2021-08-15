---
slug: react-component-libraries
title: React Component Libraries
author: SuperManfred
author_title: Pick Packer
author_url: https://github.com/SuperManfred
author_image_url: https://avatars.githubusercontent.com/u/4617302?s=400&u=feb0ba66d6f6e7169077d2a3fd9f9e3dc7ca8a2f&v=4
tags: [react, design, ui, prototyping]
---

Whenever I'm about to start a new project, one of the first things I think about is what the UI will look and feel like. As much as I'd love to create a beautiful new _unique_ design for each new project, that would not be the best use of my time...<!-- truncate -->

The best thing for me is to get a decent looking prototype up and running ASAP. So the immediate objective is to select and adopt an existing [design system] (https://designsystemsrepo.com/design-systems) specification.

Since I usually work with React, I'm looking to choose from React Component Libraries. These libraries are constantly being updated and improved, forked, or depreicated. I've noticed I go through a similar process each time: I end up googling all these UI librarys, re-exploring them, and re-evaluating how attractive they are. I'm looking for what's changed in the latest releases, and how ready each one is to help me make my app functional and beautiful - in the least amount of time.

Previously this "process" has been pretty much adhoc and therefore inefficient. So I'm documenting a process to make choosing a great react component library faster.

## The selection process:

This blog post steps through what is important for me when I choose React Component Library. The trick is to think about what criteria are important before window shopping UI libraries and weighing up Pros & Cons.

### Criteria to consider

- looks beautiful and modern: this is a bit subjective 👀
- is well maintained: see github commit frequency and issues
- has certain functionalities and integrations: out of box vs ease extensibility
- other platforms: even if target is web, can you achieve consistancy on other platforms later?

These critera can be different for each project. For example if you don't need strict control over users entering their Date of Birth, then you might not need a datepicker or input mask. If you do need that then it narrows the list of suitable UI libraries, or you need to look into how easy it will be for _you_ to develop or import a solution and style it.

### List all libraries

- https://react.geist-ui.dev/en-us/components
- https://material-ui.com
- https://ant.design/components/overview
- https://react-rainbow.io/#/Components
- https://rsuitejs.com/components/overview/
- https://developer.microsoft.com/en-us/fluentui#/controls/web
- https://blueprintjs.com/docs/#core/components
- https://atlaskit.atlassian.com/packages/design-system
- https://v2.grommet.io/components
- https://www.primefaces.org/primereact/showcase/#
- https://react.semantic-ui.com/collections/form
- https://reakit.io/docs/form/
- https://react-bootstrap.github.io/components/forms/
- https://theme-ui.com/components/
- https://rebassjs.org/
- https://elemental-ui.com
- https://chakra-ui.com/docs/getting-started

### a more comprenhensive list

- https://wiki.nikitavoloboev.xyz/design/design-systems

### Standalone react components/packages

- Datepicker https://kiarash-z.github.io/react-modern-calendar-datepicker/
