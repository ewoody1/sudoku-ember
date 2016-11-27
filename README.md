# Sudoku-ember
This is a hybrid mobile application for Sudoku game.
The Web application is implemented using EmberJS.

## Multiple Screen Resolution
Using flex layout, tested Portrait/Landscape modes on device.

## Solver Solution
Constraint Propagation:
* Fewest possibility first
* Recursive backtracking search

See reference - http://norvig.com/sudoku.html

I investigated also other algorithms, such as naked pair, but not applied.
My implementation is slightly different than the reference
1. Using javascript databinding as much as possible between route and services for performance.
2. Cultivate data assets before solving.  
3. Before assign a digit into a square, validate unit lists to detect contradiction.
4. Eliminate assigned digit on Peers instead of eliminate other values on Square to reduce iterations.

## Web App Structure
* View is in components
 - **sudoku-board** is a component in *sudoku-ember/app/components/chess-board/*
 - **square-item** is a component in *sudoku-ember/app/components/square-item/*
* Services (in the folder - *sudoku-ember/app/services/*
   - **board-io** input/output from/to views
   - **sudoku-solver** depth-first search algorithm implementation
* Route, *sudoku-ember/app/home/route.js*, handles button events, and a solo point to access services
* Models are bound as external parameters of views.
* Styles are in *sudoku-ember/app/styles/app.css*


## Running WebApp on Browser

* `cd dist`
* `python -m SimpleHTTPServer 8000`
* Visit your app at [http://localhost:8000](http://localhost:8000).

## Running iOS app on iOS Simulator
* `xcrun simctl install booted sudoku-ember/cordova/platforms/ios/build/emulator/SudokuEmber.app`
* Visit your app at iOS simulator

# Development Environment Setup

## Prerequisites

You will need the following things properly installed on your computer.

* [Git](http://git-scm.com/)
* [Node.js](http://nodejs.org/) (with NPM)
* [Bower](http://bower.io/)
* [Ember CLI](http://ember-cli.com/)
* [PhantomJS](http://phantomjs.org/)

## Installation

* `git clone https://github.com/ewoody1/sudoku-ember.git`
* `cd sudoku-ember`
* `npm install`
* `bower install`

## Running / Development

* `ember serve`
* Visit your app at [http://localhost:4200](http://localhost:4200).

### Running Tests

* `npm install phantomjs --save-dev`
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
