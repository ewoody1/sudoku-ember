# Sudoku-ember
This is a simple hybrid mobiel app implementation. The web app part is implemented with EmberJs.


## Multiple Screen Resolution
Utilized flex layout in webview to auto layout UI -  Portrait/Landscape

## Solver Solution
Constraint Propagation: less possibility first, recursive, backtracking search

http://norvig.com/sudoku.html

I also tried naked pair algorithm.

## Web App Structure

* Components
 - Sudoku board is a component in sudoku-ember/app/components/chess-board
 - Square item is a component in sudoku-ember/app/components/square-item
     TODO: a. Display possibilities and select a candidate.
           b. Input a digit.  
* Services are in sudoku-ember/app/services/
   - board-io input/output from/to views
   - sudoku-solver depth-first search algorithm implementation
* Route, sudoku-ember/app/home/route.js, handles button events, and a solo service access point
* Views are in component .hbs files separated to control logic.
* Models are bound as views' external parameters.
* Styles are in sudoku-ember/app/styles/app.css

## TODO List
1. solve it
2. add unit tests
3. test ui response during solving


## Running WebApp on Browser

* `cd dist`
* `python -m SimpleHTTPServer 8000`
* Visit your app at [http://localhost:8000](http://localhost:8000).


## Running iOS app on iOS Simulator
* `xcrun simctl install booted sudoku-ember/cordova/platforms/ios/build/emulator/SudokuEmber.app`
* Visit your app at iOS simulator

# Dev Env Setup

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

### Running Tests

* `ember test`
* `ember test --server`

### Building

* `ember build` (development)
* `ember build --environment production` (production)
* `ember cordova:build --environment=production --platform=ios` (production cordova ios app)

### Deploying

* `xcrun simctl install booted cordova/platforms/ios/build/emulator/SudokuEmber.app`
* Visit your app at iOS simulator

## Further Reading / Useful Links

* [ember.js](http://emberjs.com/)
* [ember-cli](http://ember-cli.com/)
* Development Browser Extensions
  * [ember inspector for chrome](https://chrome.google.com/webstore/detail/ember-inspector/bmdblncegkenkacieihfhpjfppoconhi)
  * [ember inspector for firefox](https://addons.mozilla.org/en-US/firefox/addon/ember-inspector/)
