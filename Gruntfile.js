/******
* Config Array
* TODO : Make a config file
******/

config = {
  mailgun : {
    key: 'key-f1d1f5a41e5528beaeb63f35b6a7c80c',
    sender: 'postmaster@sandboxd2cba16debb04c3a9d37570b82f0c884.mailgun.org',
    recipient: 'f509403@emailtests.com',
    subject: 'Prueba de concepto mailgun .....'
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
        tasks: ['sass:dev','inlinecss']
      }
    },

    sass: {
      dev: {
        files: {
          "css/screen.css": "sass/screen.sass"
        }
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
