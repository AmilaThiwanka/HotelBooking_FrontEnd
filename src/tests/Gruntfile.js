module.exports = function (grunt)
{

    require('time-grunt')(grunt);

    grunt.config.init({
        dir: {
            assets: 'assets',
            dist: 'src',
            nodemodules: 'node_modules'
        },

        sass: {
            style: {
                files: [
                    {
                        expand: true,
                        cwd: "<%= dir.assets %>/scss",
                        src: ["**/*.scss"],
                        dest: "<%= dir.dist %>/css",
                        ext: '.min.css'
                    }
                ],
                options: {
                    cleancss: true,
                    outputStyle: 'compressed',
                    //sourceComments: 'map',
                    sourceMap: true
                }
            }
        },
        postcss: {
            css: {
                options: {
                    map: true,
                    processors: [
                        require('autoprefixer')({browsers: ['last 5 versions', 'ie >= 9']}),
                        require('csswring')
                    ]
                },
                src: "<%= dir.dist %>/css/**/*.css"
            },
            sass: {
                options: {
                    syntax: require('postcss-scss'),
                    processors: [
                        require('postcss-sorting')(
                            require('./.postcss-sorting.json')
                        )
                    ]
                },
                src: "<%= dir.assets %>/scss/**/*.scss"
            }
        },
        csscomb: {
            options: {
                config: '.csscomb.json'
            },
            dynamic_mappings: {
                expand: true,
                cwd: '<%= dir.assets %>/scss/',
                src: ['**/*.scss'],
                dest: '<%= dir.assets %>/scss/',
                ext: '.scss'
            }
        },
        copy: {
            main: {
                files: [
                    {
                        expand: true,
                        cwd: '<%= dir.assets %>/fonts',
                        src: '**',
                        dest: '<%= dir.dist %>/fonts/'
                    },
                    {
                        expand: true,
                        cwd: '<%= dir.assets %>/images',
                        src: '**',
                        dest: '<%= dir.dist %>/images/'
                    }
                ]
            }
        }
    });

    grunt.registerTask('default', ['csscomb', 'postcss:sass', 'sass', 'postcss:css']);

    // Load all the npm tasks which starts with "grunt-"
    require('matchdep').filterDev('grunt-*').forEach(grunt.loadNpmTasks);
};
