# Sudoku-ember
This is a hybrid mobile application for Sudoku game.
The Web application is implemented using EmberJS.

## Multiple Screen Resolution
Using flex layout, tested in Portrait/Landscape modes on iPhoneSE.

## Solver Solution
Constraint Propagation:
* Fewest possibility first
* Recursive backtracking search

See reference - http://norvig.com/sudoku.html

* I have investigated other algorithms, such as naked pair, but not applied, since it can't solve a game if there are too few digits on the board.
* However, this search solution is not efficient enough to detect a contradiction some cases, but 'naked triple' may work much faster.

My implementation details -
1. Using two-way databindings between route and services for performance.
2. Cultivate data assets, peers and units, before solving.
3. Before assign a digit into a square, validate unit lists to detect contradiction.
4. Eliminate assigned digit on Peers.
5. Clone 'values' before an assign() in search(), and then revert 'values' if the assign() is failed. It can avoid clone() in several scenarios.
6. Because of (5), 'values' is possible to be a variable in solver service closure in order not to pass 'values' as function parameter. In the other words, 'values' is not owned by assign() and eliminate()

## Web App Structure
* View is in components
 - **sudoku-board** is a component in *sudoku-ember/app/components/chess-board/*
 - **square-item** is a component in *sudoku-ember/app/components/square-item/*
* Services in the folder - *sudoku-ember/app/services/*
   - **board-io** handles input/output from/to views
   - **sudoku-solver** includes depth-first search algorithm implementation
* Route, *sudoku-ember/app/home/route.js*, handles button events, and a solo point to access services
* Models are bound as external parameters of views. Models and views are separated.
* Styles are in *sudoku-ember/app/styles/app.css*

## Running iOS app on iOS Simulator

* Stand in the project root folder
* `xcrun simctl install booted cordova/platforms/ios/build/emulator/SudokuEmber.app`
* Visit your app at iOS simulator

## Running app on Mobile by PhoneGap Pairing
* Start PhoneGap on Desktop
* Click '+', and then click Open exiting PhoneGap project
* Choose *cordova* folder under project, and then click Open
* Click '>' icon on Desktop PhoneGap, see a URL in bottom green area
* Start PhoneGap on Mobile
* Input the URL and Connect

## Running WebApp in Browser on Desktop

* `cd dist`
* `python -m SimpleHTTPServer 8000`
* Visit your app at [http://localhost:8000](http://localhost:8000).


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

### Building

* `ember build` (development)
* `ember build --environment production` (production)
* `ember cordova:build --environment=production --platform=ios` (production cordova ios app)

### Running Tests

Test against Chrome
* `ember test --server`
* Uncheck *Hide passed tests*
* See test35-38, it takes about 40ms-80ms for a solver test.  

Test against PhantomJS
* `npm install phantomjs --save-dev`
* `ember test`

### Deploying

* `xcrun simctl install booted cordova/platforms/ios/build/emulator/SudokuEmber.app`
* Visit your app at iOS simulator

## Further Reading / Useful Links

* [ember.js](http://emberjs.com/)
* [ember-cli](http://ember-cli.com/)
* Development Browser Extensions
  * [ember inspector for chrome](https://chrome.google.com/webstore/detail/ember-inspector/bmdblncegkenkacieihfhpjfppoconhi)
  * [ember inspector for firefox](https://addons.mozilla.org/en-US/firefox/addon/ember-inspector/)
