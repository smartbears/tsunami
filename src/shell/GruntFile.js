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
                    'static/tmp/shell.css': 'static/css/less/shell.less'
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
                    'static/js/external/jquery-1.10.2.js',
                    'static/js/external/handlebars-v1.3.0.js',
                    'static/js/external/ember-1.8.1.js'
                ],
                dest: 'static/js/external.min.js'
            },
            application_scripts: {
                src: [
                    'static/js/views/*.js',
                    'static/js/shell.js'
                ],
                dest: 'static/js/shell.min.js'

            }
        },
        emberTemplates: {
          compile: {
            options: {
                precompile:false,
                templateBasePath: "static/js/views",
                //templateFileExtensions: ".html"
            },
            files: {
              "static/js/templates.min.js": ["static/js/views/*.hbs"]
            }
          }
        },
        /*
        handlebars: {
            options: {
                namespace: 'Shell.Templates',
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
                    'static/css/shell.min.css': [
                        'static/css/less/external/*.css',
                        'static/tmp/*.css'
                    ]
                }
            }
        },

        //
        //	Watch files for changes
        //
        watch: {
            less: {
                files: ['static/css/less/*.less'],
                tasks: [
                    'less',
                    'cssmin'
                ]
            },
            libs: {
                files: ['static/js/external/*.js'],
                tasks: [
                    'uglify:external',
                ]
            },
            emberTemplates: {
                files: 'static/js/views/*.hbs',
                tasks: ['emberTemplates']
            },
            application_scripts: {
                files: ['static/js/*.js','!static/js/*.min.js'],
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
    task('assets:build:js', ['directives', 'uglify']);

    desc('Precompiles underscore templates');
    task('assets:templates', ['jst']);
}
