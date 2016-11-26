# Sudoku-ember
This is a simple hybrid mobiel app implementation. The web app part is implemented with EmberJs.


## Multiple Screen Resolution
Utilized flex layout in webview to auto layout UI -  Portrait/Landscape

## Solver Solution
Constraint Propagation: less possibility first, recursive, backtracking search

http://norvig.com/sudoku.html

I also tried naked pair algorithm.

## Web App Structure

1. The Sudoku board is a component in /sudoku-ember/app/components/chess-board
2. The square is a component in /sudoku-ember/app/components/square-item
     TODO: a. The square should be able to display and select possibilities.
           b. The square should be able to input a new game.  
3. Two services - board-io and sudoku-solver
4. One route, /app/home/route.js, handles button events and as the solo access point for services
5. Views are in component .hbs files separated to control logic.
5. Models are bound as external parameters of the components.

## TODO List
1. solve it
2. add unit tests
3. test phonegap (blank screen but the url works on mobile)


## Running without build

* `cd dist`
* `python -m SimpleHTTPServer 8000`
* Visit your app at [http://localhost:8000](http://localhost:8000).

## Prerequisites

You will need the following things properly installed on your computer.

* [Git](http://git-scm.com/)
* [Node.js](http://nodejs.org/) (with NPM)
* [Bower](http://bower.io/)
* [Ember CLI](http://ember-cli.com/)
* [PhantomJS](http://phantomjs.org/)

## Installation

* `git clone <repository-url>` this repository
* `cd sudoku-ember`
* `npm install`
* `bower install`

## Running / Development

* `ember serve`
* Visit your app at [http://localhost:4200](http://localhost:4200).

### Code Generators

Make use of the many generators for code, try `ember help generate` for more details

### Running Tests

* `ember test`
* `ember test --server`

### Building

* `ember build` (development)
* `ember build --environment production` (production)

### Deploying

TODO - How to run it on phonegap app or package to a standalone app?

## Further Reading / Useful Links

* [ember.js](http://emberjs.com/)
* [ember-cli](http://ember-cli.com/)
* Development Browser Extensions
  * [ember inspector for chrome](https://chrome.google.com/webstore/detail/ember-inspector/bmdblncegkenkacieihfhpjfppoconhi)
  * [ember inspector for firefox](https://addons.mozilla.org/en-US/firefox/addon/ember-inspector/)
