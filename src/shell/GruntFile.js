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
                compress:false,
                beautify:true
            },
            external: {
                src: [
                    'assets/js/external/ember-template-compiler.js',
                    'assets/js/external/jquery-1.10.2.js',
                    'assets/js/external/handlebars-v2.0.0.js',
                    'assets/js/external/ember.prod.js',
                    'assets/js/external/ember-data.prod-v1.0.0.15.js',
                    'assets/js/external/moment.js',
                    'assets/js/external/bootstrap.js',
                    'assets/js/external/bootstrap-datetimepicker.js',
                    'assets/js/external/responsive-menu.js'
                ],
                dest: 'assets/js/external.min.js'
            },
            subjectApp_scripts: {
                src: [
                    'assets/js/app.js',
                    'assets/js/mixins/*.js',
                    'assets/js/components/**/*.js',
                    'assets/js/subjectApp/subjectApp.js',
                    'assets/js/subjectApp/views/**/*.js',
                    'assets/js/subjectApp/models/*.js',
                    'assets/js/subjectApp/components/**/*.js',
                    'assets/js/subjectApp/controllers/**/*.js',
                ],
                dest: 'assets/js/subjectApp.min.js'
            },
            protocolApp_scripts: {
              src: [
                'assets/js/app.js',
                'assets/js/mixins/*.js',
                'assets/js/components/**/*.js',
                'assets/js/protocolApp/protocolApp.js',
                'assets/js/protocolApp/views/**/*.js',
                'assets/js/protocolApp/models/*.js',
                'assets/js/protocolApp/components/**/*.js',
                'assets/js/protocolApp/components/*.js',
                'assets/js/protocolApp/controllers/**/*.js',
              ],
              dest: 'assets/js/protocolApp.min.js'
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
              templateBasePath: /assets\/js\/\w+\/views\//,
              templateFileExtensions: ".html",
              templateCompilerPath: 'assets/js/external/ember-template-compiler.js',
              handlebarsPath: 'assets/js/external/handlebars-v2.0.0.js',
              templateNamespace: 'HTMLBars'
            },
            files: {
              "assets/js/protocolTemplates.min.js": ["assets/js/protocolApp/views/**/*.html"],
              "assets/js/subjectTemplates.min.js": ["assets/js/subjectApp/views/**/*.html"]
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
                files: ['assets/js/protocolApp/views/**/*.html',  'assets/js/subjectApp/views/**/*.html'],
                tasks: ['emberTemplates']
            },
            subjectApp_scripts: {
                files: [
                            'assets/js/app.js',
                            'assets/js/subjectApp/**/*.js',
                            'assets/js/mixins/*.js',
                            'assets/js/components/*.js',
                            '!assets/js/*.min.js'
                ],
                tasks: [
                    'uglify:subjectApp_scripts'
                ]
            },
            protocolApp_scripts: {
              files: [
              'assets/js/app.js',
              'assets/js/protocolApp/**/*.js',
              'assets/js/mixins/*.js',
              'assets/js/components/*.js',
              '!assets/js/*.min.js'
              ],
              tasks: [
              'uglify:protocolApp_scripts'
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
