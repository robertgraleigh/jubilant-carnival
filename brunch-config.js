// See http://brunch.io for documentation.
/* jshint esversion: 6 */
(function () {
  "use strict";
  const config = {
    files: {
      javascripts: {
        joinTo: {
          "vendor.js": /^vendor/,
          "app.js": /^app/
        },
        order: {
          before: ["vendor/jquery.min.js", "vendor/foundation.min.js"]
        }
      },
      stylesheets: {
        joinTo: "app.css"
      }
    },
    plugins: {
      babel: { presets: ["es2015", "pre"] },
      sass: {
        options: {
          includePaths: [
            "node_modules/foundation-sites/scss",
            "node_modules/motion-ui/src"
          ]
        }
      },
      paths: {
        watched: ["app", "test", "vendor"]
      },
      npm: {
        globals: {
          $: "jquery",
          jQuery: "jquery"
        }
      }
    }
  };
  module.exports = config;
}());


exports.files = {
  javascripts: {
    joinTo: {
      'vendor.js': /^(?!app)/, // Files that are not in `app` dir.
      'app.js': /^app/
    }
  },
  stylesheets: {joinTo: 'app.css'}
};

exports.plugins = {
  babel: {presets: ['latest']}
};
