/******
* Config Array
* TODO : Make a config file
******/

config = {
  mailgun : {
    key: 'your-api-key',
    sender: 'your-email',
    recipient: 'another-email',
    subject: 'subject'
  }
}


/******
* Grunt Module
******/
module.exports = function(grunt) {

  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),

    watch: {
      sass: {
        files: ['sass/*.sass','*.html'],
        tasks: ['sass:dist','inlinecss', 'browserSync']
      }
    },

    sass: {
      dist: {
        files: [{
          expand: true,
          cwd: 'sass',
          src: ['*.sass', '*.scss'],
          dest: "./css",
          ext: ".css"
        }]
      }
    },

    browserSync: {
      dev: {
        bsFiles: {
          src : ['inlined/*.html']
        },
        options: {
          watchTask: true, // < VERY important
          server: {
            baseDir:"inlined"
          }
        }
      }
    },

    //inline css config
    inlinecss: {
      main: {
        options: {},
        files: {
          'inlined/index.html': 'index.html'
        }
      }
    },

    mailgun: {
      mailer: {
        options: config.mailgun,
        src: ['inlined/index.html']
        }
      },
    });


    /* Loading NpmTasks */
    grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.loadNpmTasks('grunt-contrib-sass');
    grunt.loadNpmTasks('grunt-browser-sync');
    grunt.loadNpmTasks('grunt-inline-css');
    grunt.loadNpmTasks('grunt-mailgun');


    /* Register Tasks */
    grunt.registerTask('sync', ["browserSync", "inlinecss", "watch"])

    grunt.registerTask('default', ["watch"]);



  };
