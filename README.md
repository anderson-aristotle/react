[![General Assembly Logo](https://camo.githubusercontent.com/1a91b05b8f4d44b5bbfb83abac2b0996d8e26c92/687474703a2f2f692e696d6775722e636f6d2f6b6538555354712e706e67)](https://generalassemb.ly/education/web-development-immersive)

# React

React is a JavaScript framework for making richly interactive front-end
applications. There are many front-end frameworks out there, but React is
perhaps the most prominent framework in front-end development today. Vue.js and
Angular are very popular as well.

## Prerequisites

-   Familiarity with the DOM
-   Experience with javascript
-   [react-study](https://git.generalassemb.ly/ga-wdi-boston/react-study)

## Objectives

By the end of this, developers should be able to:

-   Explain what the Virtual DOM is and why it's important
-   Evaluate and write simple JSX
-   Explain react components
-   Build a simple component

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

The **Virtual DOM** gives us a javascript
representation of the actual DOM. When changes are made to the view we want to
show, we update the Virtual DOM first, which then checks the diffs between what
was changed to what is currently rendered, and changes ONLY the pieces that need
to be changed, rather than re-rendering the entire page. You can think about it
like a staging area for changes that will eventually be implemented.

## Components

The basic unit you'll be working with in ReactJS is a **component**. Components are pieces of our application that we can define once and reuse all over the place. They're a way
to modularize or compartmentalize features of our applications.

With components, there is more integration and less separation of HTML, CSS, and JavaScript.
Instead of creating a few large files, you will organize your web app into small, reusable components that encompass their own content, presentation, and behavior.

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

## Running the Server

Alright, enough talk! Let's dive in to creating a React app.

Turns out, there's already one in this repo. To see it,
use `npm start` to start a server that will serve your new React application!

After running `$ npm start`, you can view the app at `http://localhost:7165`.

Most of the important files are in the `src` directory. Specifically, we'll
be using `src/App.js` and `src/index.js` in this lesson.

## Directory Structure

Almost all the work we'll do on a React app will be in the `src` directory. This
directory contains all our components (both their markup and JavaScript), all
our styles, and the layout and structure of application. Here, we have two very
important files: `index.js` and `App.js`.

We won't usually modify `index.js`. The purpose of this file is to bundle up our
dependencies, and render our `App` component to the DOM. Our `App` component is
the entry point to our application. Any other components (and indeed, anything
at all) that we add to our app will be nested inside this `App` component. In
React, all our code and all our markup live in components!

Let's take a look at what's in `App.js`. See this?

```jsx
  const App = () => (
    <div>
      <h1>Welcome to React!</h1>
    </div>
  )
```

That's a component! For components that just render static HTML, like this one,
we can define them as arrow functions that return JSX (basically, HTML with
JavaScript in it). If we wanted our component to do anything, like make an AJAX
request or respond to user interaction, we'd need a different syntax.

The other way to define components is with the ES6 `class` syntax. Let's see an
example of that now.

## Building components

#### Code along: A Very Basic Component

Create a new file in `src` called `Movie.js`, and add this simple component to
it.

```js
// bring in React and Component from React

import React, { Component } from 'react';

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

##### `import React, { Component } from 'react'`
This imports React methods and the `Component` class from the React library.

##### `class Movie`
This is the component we're creating. In this example, we are creating a component and calling it "Movie."

##### `extends Component`

We inherit from the `Component` React library class to create our component definitions. Here, we are creating a new `Component` subclass called `Movie`.
- Because it extends (also known as inherits from) `Component`, our `Movie` class gets to reuse code and capabilities from `React.Component`.

##### `render()`
Every component has a `render` method. The `render` method is what renders the component to the screen, so it controls what is displayed for this component. From this function, we return what we want to display.
- In our case, we are rendering a movie heading: `<h1>Movie!</h1>`.

> Note! That heading tag above looks like it's straight out of HTML, but it's actually a  language called JSX. For now, know that JSX will act like HTML when it's rendered to the screen.

##### `export default Movie`
This exposes the `Movie` class to other files.  This means that other files can `import` from the `App.js` file in order to use the `Movie` class.

Let's try that now. Open, up `App.js` and add the following to the `import`
statements at the top.

The `default` keyword means that if we try to import anything from this file that the app can't find, JavaScript will automatically revert to importing `Movie` instead.
Only one default export is allowed per file.

```js
import Movie from './Movie.js'
```

Then, we can render our movie component, like this:

```jsx
  const App = () => (
    <div>
      <h1>Welcome to React!</h1>
      <Movie />
    </div>
  )
```

### Check it out!

If you switch to your browser and navigate to http://localhost:7165, you can see your movie heading. This app dynamically reloads each time you save, so you can check your changes at any point.

### Wait - What's that HTML doing in my Javascript?

Let's slightly modify the contents of our `src/Movie.js` file:

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

### Code-along: React Developer Tools

The regular Chrome inspector can still be useful to us when working with React,
but it has some limitations. For one, it won't show us which components were
looking at. Also, once we start to use props and state in our applications,
we'll want a way to view those directly.

There's a Chrome extension called [React Dev Tools](https://chrome.google.com/webstore/detail/react-developer-tools/fmkadmapgofadopljbjfkapdkoienihi?hl=en)
that can help us achieve all that and more! Let's install it now, then use it
to inspect the simple app we've already created.

### Lab: JSX play time!

Play around for 5 minutes adding different things to the `return` section of
the render method. Reference the [JSX documenation](https://reactjs.org/docs/jsx-in-depth.html) to find out what is and isn't
valid JSX!

### Code-along: display multiple movies

Our movie component isn't very dynamic. It can still only render a pre-determined
movie. Let's change that. First, let's hard code an array of movie titles in
`App.js`. Then, we'll iterate through our array, and render one `Movie` component
for each title. To pass the title into the `Movie` component, we'll need to use
something called "props". We'll learn more about them in the next lesson.

> Remember, the return statement in `render` can traditionally only return one DOM element!

## Additional Resources

- [React Crash Course Video](https://www.youtube.com/watch?v=sBws8MSXN7A)
- [ReactJS Koans](https://github.com/arkency/reactjs_koans)
- [React Developer Roadmap](https://github.com/adam-golab/react-developer-roadmap)
- [Introducing JSX](https://reactjs.org/docs/introducing-jsx.html)
- [JSX In Depth](https://reactjs.org/docs/jsx-in-depth.html)
- [React Internals: Virtual DOM](https://reactjs.org/docs/faq-internals.html)

## [License](LICENSE)

1.  All content is licensed under a CC­BY­NC­SA 4.0 license.
1.  All software code is licensed under GNU GPLv3. For commercial use or
    alternative licensing, please contact legal@ga.co.
