[![General Assembly Logo](https://camo.githubusercontent.com/1a91b05b8f4d44b5bbfb83abac2b0996d8e26c92/687474703a2f2f692e696d6775722e636f6d2f6b6538555354712e706e67)](https://generalassemb.ly/education/web-development-immersive)

# React

## Prerequisites

-   Familiarity with the DOM
-   Experience with javascript
-   [React-Workshop-Prework](https://git.generalassemb.ly/ga-wdi-boston/react-workshop-prework)

## Objectives

By the end of this, developers should be able to:

-   Explain what the Virtual DOM is and why it's important
-   Evaluate and write simple JSX
-   Explain what components are
-   Build a React app using `create-react-app`

## Preparation

1.  Fork and clone this repository.
 [FAQ](https://git.generalassemb.ly/ga-wdi-boston/meta/wiki/ForkAndClone)
1.  Create a new branch, `training`, for your work.
1.  Checkout to the `training` branch.
1.  Install dependencies with `npm install`.

## React Basics

The React framework was built to solve one problem: building large applications with data that changes over time.

In the old times, re-rendering one thing meant re-rendering everything. This had negative implications on processing power and ultimately user experience, which at times became glitchy and laggy.

Enter, React's Virtual DOM, Components, and JSX...

## Virtual DOM

You should already be familiar with the DOM. The **Virtual DOM** gives us a javascript
representation of the actual DOM. When changes are made to the view we want to
show, we update the Virtual DOM first, which then checks the diffs between what
was changed to what is currently rendered, and changes ONLY the pieces that need
to be changed, rather than re-rendering the entire page. You can think about it
like a staging area for changes that will eventually be implemented.

You'll see this later on when our code mentions `ReactDOM`. `ReactDOM` refers to
the **Virtual DOM**.

Watch [this video](https://generalassembly.wistia.com/medias/v5qyqsir0s) to find out more. _(note: right click for new tab!)_

## Components

The basic unit you'll be working with in ReactJS is a **component**. Components are pieces of our application that we can define once and reuse all over the place. They're a way
to modularize or compartmentalize features of our applications.

With components, there is more integration and less separation of HTML, CSS, and JavaScript.
- Instead of creating a few large files, you will organize your web app into small, reusable components that encompass their own content, presentation, and behavior.

### Discussion: Identifying Components

Take a look at [CraigsList](https://boston.craigslist.org/search/aap) (note: right click to open in a new tab!).

Each listing is a component. How can you identify this?
- Listings look identical in structure, but have different information populating them
- Listings are dynamically generated based on the user's search

### Lab: Identifying Components

Now, go to [Amtrak.com](https://www.amtrak.com/home) (note: right click to open in a new tab!). We want to look at the listing page, so put in any "From" (for example, New York - Penn Station), any "To" (for example, Boston - South Station), and pick any date. Hit "Find Trains". Now look at the listing page:

![Amtrak](https://git.generalassemb.ly/storage/user/5747/files/754db814-30fb-11e8-88c2-04ed98ab1834)

Scrolling down it, identify the visual "components" the website is comprised of. We suggest drawing this out on paper!

As you're drawing this out, think about the following questions...

* Where do you see "nested components;" that is, where are there components inside another component? Where do you see just one "layer" instead?
* Are there any components that share the same structure?
* For components that share the same structure, what is different about them?

## Initial Setup

Alright, enough talk! Let's get our hands dirty, shall we? We'll create a
skeleton React project and walk through it as we go.

We'll use a terminal program called `create-react-app` to make creating a
react template easy. In order to have access to it, run:

```sh
$ npm install --global create-react-app
```

Once it's installed, create a new directory to store the app you're about to write and `cd` to the folder. Then, use the tool to create a new React app. You'll have to give your new app a name; we're calling the example app "inventory-mostly-done-before", since that'll be our first project,
or `imdb` for short.

```sh
$ create-react-app imdb
```

The tool creates a new directory for your app, so move into it...

```sh
$ cd imdb
```

Use `npm start` to start a server that will serve your new React application!

GIT INIT AND COMMIT

```sh
$ npm start
```

> You have now set up a IMDB app that you will continue working on through the
workshop!

After running `$ npm start`, you can view the app at `http://localhost:3000`

> Note: If you ever need to stop the server, you can hit `ctrl-c` in the terminal window.

You can look in the directory and see the structure that `create-react-app` provides for us. It looks like this:

```sh
├── README.md
├── package.json
├── public
│   ├── favicon.ico
│   └── index.html
└── src
    ├── App.css
    ├── App.js
    ├── App.test.js
    ├── index.css
    ├── index.js
    └── logo.svg
```

Most of the important files are in the `src` directory. Specifically, we'll be using `src/App.js` and `src/index.js`.

---

## Lab: Investigate

Take some time and look at what's been generated. Specifically pay attention to `src/App.js` and `src/index.js`

Make small changes to the code in `src/App.js`, `src/index.js`, and `public/index.html` just to see what happens.

Your basic React app is up and running. Now you're ready to add complexity.

## Building components

#### Code along: A Very Basic Component

To start, remove the entire contents of the `src/App.js` file.

Then, add the component definition below:

```js
// bring in React and Component from React

import React, {Component} from 'react';

// define our Movie component
class Movie extends Component {
  // what should the component render?
  render () {
    // make sure to return some UI
    return (
      <h1>
        /*add the name of your favorite movie here!*/
      </h1>
    )
  }
}

export default Movie
```

Let's break down the things we see here...

##### `import React, {Component} from 'react'`
This imports React methods and the `Component` class from the React library.

##### `class Movie`
This is the component we're creating. In this example, we are creating a component and calling it "Movie."

##### `extends Component`

We inherit from the `Component` React library class to create our component definitions. Here, we are creating a new `Component` subclass called `Movie`.
- Because it extends (also known as inherits from) `Component`, our `Movie` class gets to reuse code and capabilities from `React.Component`.

##### `render()`
Every component has a `render` method. The `render` method is what renders the component to the screen, so it controls what is displayed for this component. From this function, we return what we want to display.
- In our case, we are rendering a movie heading: `<h1>Movie!</h1>`.

> Note! That heading tag above looks like it's straight out of HTML, but it's actually a special language called JSX, which you'll see soon. For now, know that JSX will act like HTML when it's rendered to the screen.

##### `export default Movie`
This exposes the `Movie` class to other files.  This means that other files can `import` from the `App.js` file in order to use the `Movie` class. In our case, we'll be importing it into `index.js` by calling an `import` to `App.js`.

When we try to import something from `App.js`, JavaScript will attempt to match a named export.
- Our only named export in `App.js` is `Movie`.

The `default` keyword means that if we try to import anything from this file that the app can't find, JavaScript will automatically revert to importing `Movie` instead.
- Only one default export is allowed per file.

### Check it out!

If you switch to your browser and navigate to http://localhost:3000, you can see your movie heading. This app dynamically reloads each time you save, so you can check your changes at any point.

### Wait - What's that HTML doing in my Javascript?

Well, turns out [Reese's may have been onto something...](https://www.youtube.com/watch?v=O7oD_oX-Gio)

Let's slightly modify the contents of our `src/App.js` file:

```js
// bring in React and Component from React

import React, {Component} from 'react';

// define our Movie component
class Movie extends Component {
  // what should the component render?
  render () {
    // make sure to return some UI
    const movie = {
      title: 'Lord of the React: Fellowship of React Components'
    }

    return (
      <h1>{movie.title}</h1>
    )
  }
}

export default Movie
```

Now, instead of hard coding the `return` value, we're interpolating using
`{movie.title}` (a variable local to the component).

So, JSX allows us to write code that strongly resembles HTML and can use
variable interpolation. It is eventually compiled to lightweight JavaScript
objects.

Your `Movie` component's `render` method:
- Currently returns JSX, not HTML.
- The JSX creates a DOM element with whatever you put in the `return ()` statement.
- Your component reads this and renders a movie heading (or multiple???).

### Lab: JSX play time!

Play around for 5 minutes adding different things to the `return` section of
the render method. Reference the JSX documenation to find out what is and isn't
valid JSX!

### Lab: Tagline time!

- Change your `Movie` component to return multiple movies.
  - Try hard coding it
  - Try using `.map()`

> Remember, the return statement in `render` can only return one DOM element!

## [License](LICENSE)

1.  All content is licensed under a CC­BY­NC­SA 4.0 license.
1.  All software code is licensed under GNU GPLv3. For commercial use or
    alternative licensing, please contact legal@ga.co.
