/* global module:false */
module.exports = function(grunt) {

  grunt.initConfig({
    
    // read configuration from package.json
    pkg: grunt.file.readJSON('package.json'),

    // start watcher and node in parallel
    concurrent: {
      development: {
        tasks: ['nodemon:development'],
        options: {
          logConcurrentOutput: true
        }
      }
    },

    // start node server, reload on node file changes
    nodemon: {
      development: {
        script: 'src/index.js',
        options: {
          nodeArgs: ['--debug'],
          env: {
            PORT: '3000'
          },
          callback: function (nodemon) {
            nodemon.on('log', function (event) {
              console.log(event.colour);
            });
          }
        }
      }
    }

  });

  // load npm tasks
  grunt.loadNpmTasks('grunt-concurrent');
  grunt.loadNpmTasks('grunt-nodemon');

  // register tasks
  grunt.registerTask('server', ['concurrent:development']);

};