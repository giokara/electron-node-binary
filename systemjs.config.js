/**
 * System configuration for Angular 2 samples
 * Adjust as necessary for your application needs.
 */
(function (global) {
  System.config({
    defaultJSExtensions: false,
    paths: {
      // paths serve as alias
      'npm:': 'node_modules/',
    },
    // map tells the System loader where to look for things
    map: {
      // our app is within the app folder
      app: 'app',

      // angular bundles
      'node-binary': 'npm:systemjs-plugin-node-binary/node-binary.js',
      '@angular/core': 'npm:@angular/core/bundles/core.umd.js',
      '@angular/common': 'npm:@angular/common/bundles/common.umd.js',
      '@angular/compiler': 'npm:@angular/compiler/bundles/compiler.umd.js',
      '@angular/platform-browser': 'npm:@angular/platform-browser/bundles/platform-browser.umd.js',
      '@angular/platform-browser-dynamic': 'npm:@angular/platform-browser-dynamic/bundles/platform-browser-dynamic.umd.js',
      '@angular/router': 'npm:@angular/router/bundles/router.umd.js',

      // other libraries
      'rxjs': 'npm:rxjs',
      'path': 'npm:path',
      'back-addon': 'npm:back-addon'
    },
    // packages tells the System loader how to load when no filename and/or no extension
    packages: {
      app: {
        main: './main.js',
        defaultExtension: 'js'
      },
      rxjs: {
        main: 'Rx.js',
        defaultExtension: 'js'
      },
      'path': {
        main: './path.js',
        defaultExtension: 'js'
      },
      'back-addon': {
        main: './build/Release/back-addon.node',
        meta: {
          '*.node': {
            loader: 'node-binary'
          }
        },
      }
    }
  });

  var ELECTRON_DETECTED = (window && window.process && window.process.type) == "renderer";

  if (ELECTRON_DETECTED) {
    console.log("Electron Version");
    System.set('electron', System.newModule(require('electron')));
  } else {
    console.log("Web Version");
    System.set('electron', System.newModule({})); // Makes dummy
  }

})(this);
