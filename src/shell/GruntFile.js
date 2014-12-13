module.exports = function (grunt) {
/*
|---------------------------------------------------------------------------------
|	HELPER METHODS
|---------------------------------------------------------------------------------
*/
    var _tasks = [];
    var _desc  = null;

    function desc(d) {
        _desc = d || "";
    }

    function task () {
        _tasks.push({name: arguments[0], description:_desc || ""});
        _desc = null;
        grunt.registerTask.apply(grunt, arguments);
    }

    function log () {
        console.log.apply(null, arguments);
    }

/*
|---------------------------------------------------------------------------------
|	DEFINE THE HELP TASK TO OUTPUT LIST OF COMMANDS
|---------------------------------------------------------------------------------
*/
    desc('Show a list of commands');
    task('help', function () {

        log('');
        log('Usage: grunt COMMAND');
        log('');
        log('Commands:');
        log('');
        for (var i=0, l=_tasks.length; i<l; i++) {
            var tn = _tasks[i].name;
            var td = _tasks[i].description;

            while(tn && tn.length < 32) {
                tn += ' ';
            }

            log('  > '+ tn +'# '+ td);
        }

    });

/*
|---------------------------------------------------------------------------------
|	PROJECT CONFIGURATION
|---------------------------------------------------------------------------------
*/
    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),
    //
    //	LESS is used to parse our scss files, and we have two files that need
    //	to be parsed and output into the /tmp folder.
    //
        less: {
            styles: {
                files: {
                    'assets/tmp/shell.css': 'assets/css/less/shell.less'
                }
            }
        },
    //
    //	Run uglify to minify our scripts, both the third party libraries and our
    //	own app.js script. (run after directives)
    //
        uglify: {
            options: {
                compress:true,
                beautify:true
            },
            external: {
                src: [
                    'assets/js/external/jquery-1.10.2.js',
                    'assets/js/external/handlebars-v2.0.0.js',
                    'assets/js/external/ember.prod.js',
                    'assets/js/external/ember-data.prod-v1.0.0.12.js'
                ],
                dest: 'assets/js/external.min.js'
            },
            application_scripts: {
                src: [
                    'assets/js/views/**/*.js',
                    'assets/js/shell.js',
                    'assets/js/models/*.js',
					          'assets/js/controllers/**/*.js',
                ],
                dest: 'assets/js/shell.min.js'

            }
        },
        /*emberTemplates: {
          compile: {
            options: {
                precompile:true,
                templateCompilerPath: 'node_modules/ember-template-compiler1/vendor/ember-template-compiler.js',
                handlebarsPath: 'assets/js/external/handlebars-v2.0.0.js',
                templateBasePath: "assets/js/views",
                templateFileExtensions: ".html"
            },
            files: {
              "assets/js/templates.min.js": ["assets/js/views/*.html","assets/js/views/**//*.html"]
            }
          }
        },*/
        emberTemplates: {
          compile: {
            options: {
              templateBasePath: "assets/js/views",
              templateFileExtensions: ".html"
            },
            files: {
              "assets/js/templates.min.js": ["assets/js/views/*.html","assets/js/views/**/*.html"]
            }
          }
        },
        /*
        handlebars: {
            options: {
                namespace: 'Ember.TEMPLATES',
                processName: function(filePath) {
                    return filePath.substring(filePath.lastIndexOf("/") + 1, filePath.lastIndexOf('.'));
                }
            },

        },*/
    //
    //	Use CSSMin to minify our css files (run after less)
    //
        cssmin: {
            all: {
                files: {
                    'assets/css/shell.min.css': [
                        'assets/css/less/external/*.css',
                        'assets/tmp/*.css'
                    ]
                }
            }
        },

        //
        //	Watch files for changes
        //
        watch: {
            less: {
                files: ['assets/css/less/*.less'],
                tasks: [
                    'less',
                    'cssmin'
                ]
            },
            libs: {
                files: ['assets/js/external/*.js'],
                tasks: [
                    'uglify:external',
                ]
            },
            emberTemplates: {
                files: ['assets/js/views/*.html', 'assets/js/views/**/*.html' ],
                tasks: ['emberTemplates']
            },
            application_scripts: {
                files: ['assets/js/*.js', 'assets/js/models/**/*.js','assets/js/controllers/*.js','!assets/js/*.min.js'],
                tasks: [
                    'uglify:application_scripts'
                ]
            }
        }
    });

/*
|---------------------------------------------------------------------------------
|	LOAD PLUGINS
|---------------------------------------------------------------------------------
*/
    grunt.loadNpmTasks('grunt-contrib-uglify');
    grunt.loadNpmTasks('grunt-contrib-less');
    grunt.loadNpmTasks('grunt-contrib-cssmin');
    grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.loadNpmTasks('grunt-directives');
    grunt.loadNpmTasks('grunt-ember-templates');

/*
|---------------------------------------------------------------------------------
|	SETUP TASKS
|---------------------------------------------------------------------------------
*/
    grunt.registerTask('default', ['help']);

    desc('Watch for LESS/JS changes and rebuild (CTRL+C to exit)');
    task('assets:watch', ['watch']);

    desc('Rebuild all assets');
    task('assets:build', ['assets:build:less', 'assets:build:js']);

    desc('Build and minify LESS files');
    task('assets:build:less', ['less', 'cssmin']);

    desc('Build and minify JS files');
    task('assets:build:js', ['uglify']);

    desc('Precompiles underscore templates');
    task('assets:templates', ['emberTemplates']);
}
