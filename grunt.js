module.exports = function(grunt) {
  grunt.loadNpmTasks('grunt-contrib-stylus');
  grunt.loadNpmTasks('grunt-growl');
  grunt.initConfig({
    info: '<json:package.json>',
    meta: {
      banner: '/*!\n'+
              ' * <%= info.name %> - <%= info.description %>\n'+
              ' * v<%= info.version %>\n'+
              ' * <%= info.homepage %>\n'+
              ' * copyright <%= info.company %> <%= grunt.template.today("yyyy") %>\n'+
              ' * <%= info.license %> License\n'+
              '*/'
    },
    stylus: {
      dev: {
        files: {
          'dist/grid.css': 'lib/grid.styl' 
        }
      },
      prod: {
        options: {
          compress: 'true'
        },
        files: {
          'dist/grid.min.css': 'lib/grid.styl' 
        }
      },
    },
    concat: {
      dev: {
        src: ['<banner>',
              'dist/grid.css'
        ],
        dest: 'dist/grid.css'
      },
      prod: {
        src: ['<banner>',
              'dist/grid.min.css'
        ],
        dest: 'dist/grid.min.css'
      },
    },
    watch: {
      css: {
        files: 'lib/grid.styl',
        tasks: 'stylus concat'
      }
    },
    server:{
      port: 8000,
      base: '.'
    }
  });
  grunt.registerTask('default', 'stylus concat');
  grunt.registerTask('dev', 'server watch');
}
