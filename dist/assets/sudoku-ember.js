"use strict";

/* jshint ignore:start */



/* jshint ignore:end */

define('sudoku-ember/app', ['exports', 'ember', 'sudoku-ember/resolver', 'ember-load-initializers', 'sudoku-ember/config/environment'], function (exports, _ember, _sudokuEmberResolver, _emberLoadInitializers, _sudokuEmberConfigEnvironment) {

  var App = undefined;

  _ember['default'].MODEL_FACTORY_INJECTIONS = true;

  App = _ember['default'].Application.extend({
    modulePrefix: _sudokuEmberConfigEnvironment['default'].modulePrefix,
    podModulePrefix: _sudokuEmberConfigEnvironment['default'].podModulePrefix,
    Resolver: _sudokuEmberResolver['default']
  });

  (0, _emberLoadInitializers['default'])(App, _sudokuEmberConfigEnvironment['default'].modulePrefix);

  exports['default'] = App;
});
define('sudoku-ember/components/chess-board/component', ['exports', 'ember'], function (exports, _ember) {
  var Component = _ember['default'].Component;
  exports['default'] = Component.extend({
    tagName: 'table'
  });
});
define("sudoku-ember/components/chess-board/template", ["exports"], function (exports) {
  exports["default"] = Ember.HTMLBars.template((function () {
    var child0 = (function () {
      var child0 = (function () {
        var child0 = (function () {
          return {
            meta: {
              "revision": "Ember@2.9.1",
              "loc": {
                "source": null,
                "start": {
                  "line": 16,
                  "column": 8
                },
                "end": {
                  "line": 18,
                  "column": 8
                }
              },
              "moduleName": "sudoku-ember/components/chess-board/template.hbs"
            },
            isEmpty: false,
            arity: 1,
            cachedFragment: null,
            hasRendered: false,
            buildFragment: function buildFragment(dom) {
              var el0 = dom.createDocumentFragment();
              var el1 = dom.createTextNode("          ");
              dom.appendChild(el0, el1);
              var el1 = dom.createComment("");
              dom.appendChild(el0, el1);
              var el1 = dom.createTextNode("\n");
              dom.appendChild(el0, el1);
              return el0;
            },
            buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
              var morphs = new Array(1);
              morphs[0] = dom.createMorphAt(fragment, 1, 1, contextualElement);
              return morphs;
            },
            statements: [["inline", "square-item", [], ["model", ["subexpr", "@mut", [["get", "item.value", ["loc", [null, [17, 30], [17, 40]]], 0, 0, 0, 0]], [], [], 0, 0]], ["loc", [null, [17, 10], [17, 42]]], 0, 0]],
            locals: ["item"],
            templates: []
          };
        })();
        return {
          meta: {
            "revision": "Ember@2.9.1",
            "loc": {
              "source": null,
              "start": {
                "line": 14,
                "column": 4
              },
              "end": {
                "line": 20,
                "column": 3
              }
            },
            "moduleName": "sudoku-ember/components/chess-board/template.hbs"
          },
          isEmpty: false,
          arity: 1,
          cachedFragment: null,
          hasRendered: false,
          buildFragment: function buildFragment(dom) {
            var el0 = dom.createDocumentFragment();
            var el1 = dom.createTextNode("      ");
            dom.appendChild(el0, el1);
            var el1 = dom.createElement("tr");
            var el2 = dom.createTextNode("\n");
            dom.appendChild(el1, el2);
            var el2 = dom.createComment("");
            dom.appendChild(el1, el2);
            var el2 = dom.createTextNode("      ");
            dom.appendChild(el1, el2);
            dom.appendChild(el0, el1);
            var el1 = dom.createTextNode("\n");
            dom.appendChild(el0, el1);
            return el0;
          },
          buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
            var morphs = new Array(1);
            morphs[0] = dom.createMorphAt(dom.childAt(fragment, [1]), 1, 1);
            return morphs;
          },
          statements: [["block", "each", [["get", "row", ["loc", [null, [16, 16], [16, 19]]], 0, 0, 0, 0]], [], 0, null, ["loc", [null, [16, 8], [18, 17]]]]],
          locals: ["row"],
          templates: [child0]
        };
      })();
      return {
        meta: {
          "revision": "Ember@2.9.1",
          "loc": {
            "source": null,
            "start": {
              "line": 12,
              "column": 0
            },
            "end": {
              "line": 22,
              "column": 0
            }
          },
          "moduleName": "sudoku-ember/components/chess-board/template.hbs"
        },
        isEmpty: false,
        arity: 1,
        cachedFragment: null,
        hasRendered: false,
        buildFragment: function buildFragment(dom) {
          var el0 = dom.createDocumentFragment();
          var el1 = dom.createTextNode("  ");
          dom.appendChild(el0, el1);
          var el1 = dom.createElement("tbody");
          var el2 = dom.createTextNode("\n");
          dom.appendChild(el1, el2);
          var el2 = dom.createComment("");
          dom.appendChild(el1, el2);
          var el2 = dom.createTextNode("  ");
          dom.appendChild(el1, el2);
          dom.appendChild(el0, el1);
          var el1 = dom.createTextNode("\n");
          dom.appendChild(el0, el1);
          return el0;
        },
        buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
          var morphs = new Array(1);
          morphs[0] = dom.createMorphAt(dom.childAt(fragment, [1]), 1, 1);
          return morphs;
        },
        statements: [["block", "each", [["get", "row-group", ["loc", [null, [14, 12], [14, 21]]], 0, 0, 0, 0]], [], 0, null, ["loc", [null, [14, 4], [20, 12]]]]],
        locals: ["row-group"],
        templates: [child0]
      };
    })();
    return {
      meta: {
        "revision": "Ember@2.9.1",
        "loc": {
          "source": null,
          "start": {
            "line": 1,
            "column": 0
          },
          "end": {
            "line": 23,
            "column": 0
          }
        },
        "moduleName": "sudoku-ember/components/chess-board/template.hbs"
      },
      isEmpty: false,
      arity: 0,
      cachedFragment: null,
      hasRendered: false,
      buildFragment: function buildFragment(dom) {
        var el0 = dom.createDocumentFragment();
        var el1 = dom.createTextNode("\n");
        dom.appendChild(el0, el1);
        var el1 = dom.createElement("colgroup");
        var el2 = dom.createTextNode("\n  ");
        dom.appendChild(el1, el2);
        var el2 = dom.createElement("col");
        dom.appendChild(el1, el2);
        var el2 = dom.createElement("col");
        dom.appendChild(el1, el2);
        var el2 = dom.createElement("col");
        dom.appendChild(el1, el2);
        var el2 = dom.createTextNode("\n");
        dom.appendChild(el1, el2);
        dom.appendChild(el0, el1);
        var el1 = dom.createTextNode("\n");
        dom.appendChild(el0, el1);
        var el1 = dom.createElement("colgroup");
        var el2 = dom.createTextNode("\n  ");
        dom.appendChild(el1, el2);
        var el2 = dom.createElement("col");
        dom.appendChild(el1, el2);
        var el2 = dom.createElement("col");
        dom.appendChild(el1, el2);
        var el2 = dom.createElement("col");
        dom.appendChild(el1, el2);
        var el2 = dom.createTextNode("\n");
        dom.appendChild(el1, el2);
        dom.appendChild(el0, el1);
        var el1 = dom.createTextNode("\n");
        dom.appendChild(el0, el1);
        var el1 = dom.createElement("colgroup");
        var el2 = dom.createTextNode("\n  ");
        dom.appendChild(el1, el2);
        var el2 = dom.createElement("col");
        dom.appendChild(el1, el2);
        var el2 = dom.createElement("col");
        dom.appendChild(el1, el2);
        var el2 = dom.createElement("col");
        dom.appendChild(el1, el2);
        var el2 = dom.createTextNode("\n");
        dom.appendChild(el1, el2);
        dom.appendChild(el0, el1);
        var el1 = dom.createTextNode("\n\n");
        dom.appendChild(el0, el1);
        var el1 = dom.createComment("");
        dom.appendChild(el0, el1);
        return el0;
      },
      buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
        var morphs = new Array(1);
        morphs[0] = dom.createMorphAt(fragment, 7, 7, contextualElement);
        dom.insertBoundary(fragment, null);
        return morphs;
      },
      statements: [["block", "each", [["get", "model", ["loc", [null, [12, 8], [12, 13]]], 0, 0, 0, 0]], [], 0, null, ["loc", [null, [12, 0], [22, 9]]]]],
      locals: [],
      templates: [child0]
    };
  })());
});
define('sudoku-ember/components/square-item/component', ['exports', 'ember'], function (exports, _ember) {
  var Component = _ember['default'].Component;
  var computed = _ember['default'].computed;
  exports['default'] = Component.extend({
    tagName: 'td',
    value: computed('model', function () {
      return this.get('model') || '';
    })
  });
});
define("sudoku-ember/components/square-item/template", ["exports"], function (exports) {
  exports["default"] = Ember.HTMLBars.template((function () {
    return {
      meta: {
        "revision": "Ember@2.9.1",
        "loc": {
          "source": null,
          "start": {
            "line": 1,
            "column": 0
          },
          "end": {
            "line": 2,
            "column": 0
          }
        },
        "moduleName": "sudoku-ember/components/square-item/template.hbs"
      },
      isEmpty: false,
      arity: 0,
      cachedFragment: null,
      hasRendered: false,
      buildFragment: function buildFragment(dom) {
        var el0 = dom.createDocumentFragment();
        var el1 = dom.createComment("");
        dom.appendChild(el0, el1);
        var el1 = dom.createTextNode("\n");
        dom.appendChild(el0, el1);
        return el0;
      },
      buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
        var morphs = new Array(1);
        morphs[0] = dom.createMorphAt(fragment, 0, 0, contextualElement);
        dom.insertBoundary(fragment, 0);
        return morphs;
      },
      statements: [["content", "value", ["loc", [null, [1, 0], [1, 9]]], 0, 0, 0, 0]],
      locals: [],
      templates: []
    };
  })());
});
define('sudoku-ember/helpers/app-version', ['exports', 'ember', 'sudoku-ember/config/environment'], function (exports, _ember, _sudokuEmberConfigEnvironment) {
  exports.appVersion = appVersion;
  var version = _sudokuEmberConfigEnvironment['default'].APP.version;

  function appVersion() {
    return version;
  }

  exports['default'] = _ember['default'].Helper.helper(appVersion);
});
define('sudoku-ember/helpers/pluralize', ['exports', 'ember-inflector/lib/helpers/pluralize'], function (exports, _emberInflectorLibHelpersPluralize) {
  exports['default'] = _emberInflectorLibHelpersPluralize['default'];
});
define('sudoku-ember/helpers/singularize', ['exports', 'ember-inflector/lib/helpers/singularize'], function (exports, _emberInflectorLibHelpersSingularize) {
  exports['default'] = _emberInflectorLibHelpersSingularize['default'];
});
define('sudoku-ember/home/route', ['exports', 'ember'], function (exports, _ember) {
  exports['default'] = _ember['default'].Route.extend({
    boardIo: _ember['default'].inject.service(),
    sudokuSolver: _ember['default'].inject.service(),

    outputModel: _ember['default'].computed.alias('boardIo.outputModel'),

    model: function model() {
      return this.get('outputModel');
    },

    init: function init() {
      this.get('boardIo').getNew();
    },

    actions: {
      solveMe: function solveMe() {
        var outputData = this.get('sudokuSolver').solve();
        this.get('boardIo').setDataModel(outputData);
      },

      retry: function retry() {
        this.get('boardIo').reset();
      }
    }
  });
});
define("sudoku-ember/home/template", ["exports"], function (exports) {
  exports["default"] = Ember.HTMLBars.template((function () {
    return {
      meta: {
        "revision": "Ember@2.9.1",
        "loc": {
          "source": null,
          "start": {
            "line": 1,
            "column": 0
          },
          "end": {
            "line": 9,
            "column": 0
          }
        },
        "moduleName": "sudoku-ember/home/template.hbs"
      },
      isEmpty: false,
      arity: 0,
      cachedFragment: null,
      hasRendered: false,
      buildFragment: function buildFragment(dom) {
        var el0 = dom.createDocumentFragment();
        var el1 = dom.createElement("div");
        dom.setAttribute(el1, "class", "sudoku");
        var el2 = dom.createTextNode("\n  ");
        dom.appendChild(el1, el2);
        var el2 = dom.createElement("caption");
        var el3 = dom.createTextNode("Sudoku (EmberJs)");
        dom.appendChild(el2, el3);
        dom.appendChild(el1, el2);
        var el2 = dom.createTextNode("\n  ");
        dom.appendChild(el1, el2);
        var el2 = dom.createComment("");
        dom.appendChild(el1, el2);
        var el2 = dom.createTextNode("\n  ");
        dom.appendChild(el1, el2);
        var el2 = dom.createElement("div");
        dom.setAttribute(el2, "class", "button-group");
        var el3 = dom.createTextNode("\n    ");
        dom.appendChild(el2, el3);
        var el3 = dom.createElement("button");
        var el4 = dom.createTextNode("Solve");
        dom.appendChild(el3, el4);
        dom.appendChild(el2, el3);
        var el3 = dom.createTextNode("\n    ");
        dom.appendChild(el2, el3);
        var el3 = dom.createElement("button");
        var el4 = dom.createTextNode("New");
        dom.appendChild(el3, el4);
        dom.appendChild(el2, el3);
        var el3 = dom.createTextNode("\n  ");
        dom.appendChild(el2, el3);
        dom.appendChild(el1, el2);
        var el2 = dom.createTextNode("\n");
        dom.appendChild(el1, el2);
        dom.appendChild(el0, el1);
        var el1 = dom.createTextNode("\n");
        dom.appendChild(el0, el1);
        return el0;
      },
      buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
        var element0 = dom.childAt(fragment, [0]);
        var element1 = dom.childAt(element0, [5]);
        var element2 = dom.childAt(element1, [1]);
        var element3 = dom.childAt(element1, [3]);
        var morphs = new Array(3);
        morphs[0] = dom.createMorphAt(element0, 3, 3);
        morphs[1] = dom.createElementMorph(element2);
        morphs[2] = dom.createElementMorph(element3);
        return morphs;
      },
      statements: [["inline", "chess-board", [], ["model", ["subexpr", "@mut", [["get", "model", ["loc", [null, [3, 22], [3, 27]]], 0, 0, 0, 0]], [], [], 0, 0]], ["loc", [null, [3, 2], [3, 29]]], 0, 0], ["element", "action", ["solveMe"], [], ["loc", [null, [5, 12], [5, 32]]], 0, 0], ["element", "action", ["retry"], [], ["loc", [null, [6, 12], [6, 30]]], 0, 0]],
      locals: [],
      templates: []
    };
  })());
});
define('sudoku-ember/initializers/app-version', ['exports', 'ember-cli-app-version/initializer-factory', 'sudoku-ember/config/environment'], function (exports, _emberCliAppVersionInitializerFactory, _sudokuEmberConfigEnvironment) {
  var _config$APP = _sudokuEmberConfigEnvironment['default'].APP;
  var name = _config$APP.name;
  var version = _config$APP.version;
  exports['default'] = {
    name: 'App Version',
    initialize: (0, _emberCliAppVersionInitializerFactory['default'])(name, version)
  };
});
define('sudoku-ember/initializers/container-debug-adapter', ['exports', 'ember-resolver/container-debug-adapter'], function (exports, _emberResolverContainerDebugAdapter) {
  exports['default'] = {
    name: 'container-debug-adapter',

    initialize: function initialize() {
      var app = arguments[1] || arguments[0];

      app.register('container-debug-adapter:main', _emberResolverContainerDebugAdapter['default']);
      app.inject('container-debug-adapter:main', 'namespace', 'application:main');
    }
  };
});
define('sudoku-ember/initializers/data-adapter', ['exports', 'ember'], function (exports, _ember) {

  /*
    This initializer is here to keep backwards compatibility with code depending
    on the `data-adapter` initializer (before Ember Data was an addon).
  
    Should be removed for Ember Data 3.x
  */

  exports['default'] = {
    name: 'data-adapter',
    before: 'store',
    initialize: _ember['default'].K
  };
});
define('sudoku-ember/initializers/ember-data', ['exports', 'ember-data/setup-container', 'ember-data/-private/core'], function (exports, _emberDataSetupContainer, _emberDataPrivateCore) {

  /*
  
    This code initializes Ember-Data onto an Ember application.
  
    If an Ember.js developer defines a subclass of DS.Store on their application,
    as `App.StoreService` (or via a module system that resolves to `service:store`)
    this code will automatically instantiate it and make it available on the
    router.
  
    Additionally, after an application's controllers have been injected, they will
    each have the store made available to them.
  
    For example, imagine an Ember.js application with the following classes:
  
    App.StoreService = DS.Store.extend({
      adapter: 'custom'
    });
  
    App.PostsController = Ember.Controller.extend({
      // ...
    });
  
    When the application is initialized, `App.ApplicationStore` will automatically be
    instantiated, and the instance of `App.PostsController` will have its `store`
    property set to that instance.
  
    Note that this code will only be run if the `ember-application` package is
    loaded. If Ember Data is being used in an environment other than a
    typical application (e.g., node.js where only `ember-runtime` is available),
    this code will be ignored.
  */

  exports['default'] = {
    name: 'ember-data',
    initialize: _emberDataSetupContainer['default']
  };
});
define('sudoku-ember/initializers/export-application-global', ['exports', 'ember', 'sudoku-ember/config/environment'], function (exports, _ember, _sudokuEmberConfigEnvironment) {
  exports.initialize = initialize;

  function initialize() {
    var application = arguments[1] || arguments[0];
    if (_sudokuEmberConfigEnvironment['default'].exportApplicationGlobal !== false) {
      var theGlobal;
      if (typeof window !== 'undefined') {
        theGlobal = window;
      } else if (typeof global !== 'undefined') {
        theGlobal = global;
      } else if (typeof self !== 'undefined') {
        theGlobal = self;
      } else {
        // no reasonable global, just bail
        return;
      }

      var value = _sudokuEmberConfigEnvironment['default'].exportApplicationGlobal;
      var globalName;

      if (typeof value === 'string') {
        globalName = value;
      } else {
        globalName = _ember['default'].String.classify(_sudokuEmberConfigEnvironment['default'].modulePrefix);
      }

      if (!theGlobal[globalName]) {
        theGlobal[globalName] = application;

        application.reopen({
          willDestroy: function willDestroy() {
            this._super.apply(this, arguments);
            delete theGlobal[globalName];
          }
        });
      }
    }
  }

  exports['default'] = {
    name: 'export-application-global',

    initialize: initialize
  };
});
define('sudoku-ember/initializers/injectStore', ['exports', 'ember'], function (exports, _ember) {

  /*
    This initializer is here to keep backwards compatibility with code depending
    on the `injectStore` initializer (before Ember Data was an addon).
  
    Should be removed for Ember Data 3.x
  */

  exports['default'] = {
    name: 'injectStore',
    before: 'store',
    initialize: _ember['default'].K
  };
});
define('sudoku-ember/initializers/store', ['exports', 'ember'], function (exports, _ember) {

  /*
    This initializer is here to keep backwards compatibility with code depending
    on the `store` initializer (before Ember Data was an addon).
  
    Should be removed for Ember Data 3.x
  */

  exports['default'] = {
    name: 'store',
    after: 'ember-data',
    initialize: _ember['default'].K
  };
});
define('sudoku-ember/initializers/transforms', ['exports', 'ember'], function (exports, _ember) {

  /*
    This initializer is here to keep backwards compatibility with code depending
    on the `transforms` initializer (before Ember Data was an addon).
  
    Should be removed for Ember Data 3.x
  */

  exports['default'] = {
    name: 'transforms',
    before: 'store',
    initialize: _ember['default'].K
  };
});
define("sudoku-ember/instance-initializers/ember-data", ["exports", "ember-data/-private/instance-initializers/initialize-store-service"], function (exports, _emberDataPrivateInstanceInitializersInitializeStoreService) {
  exports["default"] = {
    name: "ember-data",
    initialize: _emberDataPrivateInstanceInitializersInitializeStoreService["default"]
  };
});
define('sudoku-ember/resolver', ['exports', 'ember-resolver'], function (exports, _emberResolver) {
  exports['default'] = _emberResolver['default'];
});
define('sudoku-ember/router', ['exports', 'ember', 'sudoku-ember/config/environment'], function (exports, _ember, _sudokuEmberConfigEnvironment) {

  var Router = _ember['default'].Router.extend({
    location: _sudokuEmberConfigEnvironment['default'].locationType,
    rootURL: _sudokuEmberConfigEnvironment['default'].rootURL
  });

  Router.map(function () {
    this.route('home', { path: '/' });
  });

  exports['default'] = Router;
});
define('sudoku-ember/services/ajax', ['exports', 'ember-ajax/services/ajax'], function (exports, _emberAjaxServicesAjax) {
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function get() {
      return _emberAjaxServicesAjax['default'];
    }
  });
});
define('sudoku-ember/services/board-io', ['exports', 'ember'], function (exports, _ember) {
  exports['default'] = _ember['default'].Service.extend({
    inputData: [1, 0, 3, 6, 0, 4, 7, 0, 9, // 0x0
    0, 2, 0, 0, 9, 0, 0, 1, 0, // 0x1
    7, 0, 0, 0, 0, 0, 0, 0, 6, // 0x2
    2, 0, 4, 0, 3, 0, 9, 0, 8, // 1x0
    0, 0, 0, 0, 0, 0, 0, 0, 0, // 1x1
    5, 0, 0, 9, 0, 7, 0, 0, 1, // 1x2
    6, 0, 0, 0, 5, 0, 0, 0, 2, // 2x0
    0, 0, 0, 0, 7, 0, 0, 0, 0, // 2x1
    9, 0, 0, 8, 0, 2, 0, 0, 5 // 2x2
    ],

    outputModel: [], // data model for visualizaion

    getNew: function getNew() {
      var _this = this;

      var rowGroups = [0, 1, 2]; // 3 row-groups in total
      rowGroups.forEach(function (groupId) {
        _this.createOneGroup(groupId);
      });
      return this.get('outputModel');
    },

    createOneGroup: function createOneGroup(groupId) {
      var group = [];
      this.get('outputModel').push(group);
      this.createRowsForGroup(groupId);
    },

    createRowsForGroup: function createRowsForGroup(groupId) {
      var _this2 = this;

      var rows = [0, 1, 2]; // 3 rows in one group

      rows.forEach(function (rowId) {
        var row = [];
        _this2.get('outputModel').objectAt(groupId).push(row);
        _this2.createOneRow(groupId, rowId);
      });
    },

    createOneRow: function createOneRow(groupId, rowId) {
      var _this3 = this;

      var cols = [0, 1, 2, 3, 4, 5, 6, 7, 8];
      var rowContent = this.get('outputModel').objectAt(groupId).objectAt(rowId);
      cols.forEach(function (colId) {
        var rowIndex = groupId * 3 + rowId;
        _this3.createOneSqure(rowContent, rowIndex, colId);
      });
    },

    createOneSqure: function createOneSqure(rowContent, rowIndex, colIndex) {
      var square = _ember['default'].Object.create({
        value: this.get('inputData').objectAt(rowIndex * 9 + colIndex)
      });

      rowContent.push(square);
    },

    setDataModel: function setDataModel(outputData) {
      for (var groupIndex = 0; groupIndex < 3; groupIndex++) {
        for (var rowIndex = 0; rowIndex < 3; rowIndex++) {
          for (var colIndex = 0; colIndex < 9; colIndex++) {
            var rowIndexInOutput = groupIndex * 3 + rowIndex;
            var value = outputData.objectAt(rowIndexInOutput * 9 + colIndex);
            this.get('outputModel').objectAt(groupIndex).objectAt(rowIndex).objectAt(colIndex).set('value', value);
          }
        }
      }
    },
    reset: function reset() {
      this.setDataModel(this.get('inputData'));
    }
  });
});
define('sudoku-ember/services/sudoku-solver', ['exports', 'ember'], function (exports, _ember) {
  exports['default'] = _ember['default'].Service.extend({
    outputData: [9, 0, 3, 6, 0, 4, 7, 0, 9, // 0x0
    0, 2, 0, 0, 9, 0, 0, 1, 0, // 0x1
    7, 0, 0, 0, 0, 0, 0, 0, 6, // 0x2
    2, 0, 4, 0, 3, 0, 9, 0, 8, // 1x0
    0, 0, 0, 0, 0, 0, 0, 0, 0, // 1x1
    5, 0, 0, 9, 0, 7, 0, 0, 1, // 1x2
    6, 0, 0, 0, 5, 0, 0, 0, 2, // 2x0
    0, 0, 0, 0, 7, 0, 0, 0, 0, // 2x1
    9, 0, 0, 8, 0, 2, 0, 0, 5 // 2x2
    ],

    solve: function solve() {
      return this.get('outputData');
    }
  });
});
/* jshint ignore:start */



/* jshint ignore:end */

/* jshint ignore:start */

define('sudoku-ember/config/environment', ['ember'], function(Ember) {
  var prefix = 'sudoku-ember';
/* jshint ignore:start */

try {
  var metaName = prefix + '/config/environment';
  var rawConfig = document.querySelector('meta[name="' + metaName + '"]').getAttribute('content');
  var config = JSON.parse(unescape(rawConfig));

  var exports = { 'default': config };

  Object.defineProperty(exports, '__esModule', { value: true });

  return exports;
}
catch(err) {
  throw new Error('Could not read config from meta tag with name "' + metaName + '".');
}

/* jshint ignore:end */

});

/* jshint ignore:end */

/* jshint ignore:start */

if (!runningTests) {
  require("sudoku-ember/app")["default"].create({"name":"sudoku-ember","version":"0.0.0+22081c07"});
}

/* jshint ignore:end */
//# sourceMappingURL=sudoku-ember.map
