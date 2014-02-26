'use strict';

module.exports = function(grunt) {

  // Project configuration.
  grunt.initConfig({
    // Project metadata
    pkg: grunt.file.readJSON('package.json'),
    site: grunt.file.readJSON('config.json'),

    assemble: {
      options: {
        // custom options
        production: '<%= site.production %>',
        author: '<%= pkg.author %>',
        license: '<%= pkg.license %>',
        // /custom options

        flatten: '<%= site.flatten %>',
        prettify: '<%= site.prettify %>',
        helpers: '<%= site.helpers %>',
        assets: '<%= site.assets %>',
        data: '<%= site.data %>',
        partials: '<%= site.partials %>',
        layoutdir: '<%= site.layoutdir %>',
        layout: '<%= site.layout %>'
      },
      example010: {
        files: {'<%= site.dest %>/example010/': ['example010/index.hbs']}
      },
      example011: {
        files: {'<%= site.dest %>/example011/': ['example011/index.hbs']},
        options: {
          partials: 'example011/partials/*.hbs'
        }
      },
      example012: {
        files: {'<%= site.dest %>/example012/': ['example012/index.hbs']},
        options: {
          layout: 'with_sidebar.hbs'
        }
      },
      example020: {
        files: {'<%= site.dest %>/example020/': ['example020/index.hbs']},
        options: {
          data: 'example020/data/*.json'
        }
      },
      example021: {
        files: {'<%= site.dest %>/example021/': ['example021/index.hbs']},
        options: {
          partials: 'example021/partials/*.hbs',
          data: 'example021/data/*.json'
        }
      },
      example022: {
        files: {'<%= site.dest %>/example022/': ['example022/index.hbs']},
        options: {
          partials: 'example022/partials/*.hbs',
          data: 'example022/data/*.json'
        }
      },
      example030: {
        files: {'<%= site.dest %>/example030/': ['example030/index.hbs']}
      },
      example040a: {
        files: {'<%= site.dest %>/example040/':
          [
            'example040/*.hbs',
            '!example040/about.hbs'
          ]
        },
        options: {
          partials: 'example040/partials/*.hbs',
          data: 'example040/data/*.json'
        }
      },
      example040b: {
        files: {'<%= site.dest %>/example040/': ['example040/about.hbs']},
        options: {
          partials: 'example040/partials/*.hbs',
          data: 'example040/data/*.json',
          layout: 'with_sidebar.hbs'
        }
      }
    },

    // Before creating new files, remove files from previous build.
    clean: ['<%= site.dest %>/**/*.html']
  });

  // Load plugins
  grunt.loadNpmTasks('assemble');
  grunt.loadNpmTasks('grunt-contrib-clean');

  // Register task(s).
  grunt.registerTask('default', ['clean', 'assemble']);

};
